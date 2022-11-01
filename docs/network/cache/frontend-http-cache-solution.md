---
id: frontend-http-cache-solution
title: 前端应用中的缓存处理方案
tags:
  - cache
  - 缓存
---

## 前端应用中的 http 缓存

当下流行框架多为单页应用，即应用由一个 HTML 文件组成，页面之间的跳转通过异步加载js等资源文件的形式进行渲染，比如当我们访问一个单页应用的首页，浏览器最先加载其 HTML 文件，后续去继续加载下一个页面所需的资源

在上述过程中，进行多次操作我们会发现进行`刷新页面`或者`再次访问`时，大多数资源都命中了**强缓存**, 但是最先加载的 HTML 走了**协商缓存**

其原因是 `js、css` 等资源经过像 `webpack` 这种打包工具打包后会自动生成 `hash` 文件名, 每次部署到服务器上后，发生变化的资源 hash 名会更新，浏览器会当做一个新的资源去请求服务器，若没有更新的资源会优先读取浏览器缓存

HTML文件名不会改变，浏览器每次加载时都应该向服务器询问是否更新，否则会因为读取缓存文件出现异常问题（若旧资源被删除则页面空白保存，若读取旧资源则应用不更新）

综上我们可以总结出如下缓存方案：

- 频繁变动的资源，如 HTML , 使用**协商缓存**
- js、css、图片等资源使用**强缓存**，且使用 `hash` 命名

在一些老项目中，比如使用jQuery的项目，我们加载资源文件一般都是通过在 HTML 中直接引入，并加上时间戳或版本号代码，比如

```html
<script src="./test.js?ver=1.0"></script>
```

由于浏览器会缓存之前的js、css版本，通过`时间戳`或者`版本号`这种类似`hash值`的方式可以让浏览器加载最新的资源版本

那么针对 HTML 文件我们是如何让他走协商缓存的呢，既然想走协商缓存，那就必须先**让强缓存失效**，因此可以设置服务器响应报头如下：

```yaml
Cache-Control: max-age=0
Last-Modified: Sat, 04 Sep 2021 08:59:40 GMT
```

这样在0秒资源失效的时候就可以触发协商缓存的标识`last-modified`, 这样就可以确保每次访问加载的HTML都是最新的，防止被强缓存

## webpack中的hash模式

在webpack中hash可以分为三种类型：`hash`、`chunkhash`和`contenthash`

### hash

属于**项目级别**的 hash，整个项目中只要有文件改变，该hash就会变化，并且所有文件都共用这个 hash 值

```js
module.exports = {    
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[hash:8].js'),
    chunkFilename: utils.assetsPath('js/[name].[hash:8].min.js'),
  },
  plugins:[ 
    // 将 js 中引入的 css 进行分离
    new ExtractTextPlugin({ filename: utils.assetsPath('css/[name].[hash:8].css'), allChunks: true }),
  ]
}
```

但是这样处理的话，最终打包输出的资源文件名`hash`都一样，按照浏览器的缓存策略，浏览器会重新请求服务器加载所有资源，这样就会导致有的文件没有改动但是也去加载了，造成了资源的浪费，所以不建议在项目中使用这种方式

### chunkhash

`chunkhash` 和 `hash` 不一样，它是**入口文件级别**的 `hash`，会根据入口文件即`entry`的依赖进行打包。我们可以借助 `CommonsChunkPlugin` 插件进行公共模块的提取，从而避免一些公共库、插件被打包到入口文件中

```js
module.exports = {
  entry: utils.getEntries(),
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].min.js'),
  },
  plugins:[ 
    // 将 js 中引入的 css 进行分离
    new ExtractTextPlugin({ filename: utils.assetsPath('css/[name].[chunkhash:8].css') }),
    // 分离公共 js 到 vendor 中
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', //文件名
      minChunks: function(module, count) {
        // 声明公共的模块来自 node_modules 文件夹，把 node_modules、common 文件夹以及使用了2次依赖的都抽出来
        return (
          module.resource &&
          (/\.js$/.test(module.resource) || /\.vue$/.test(module.resource)) &&
          (module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0 || module.resource.indexOf(path.join(__dirname, '../src/common')) === 0 || count >= 2)
        );
      }
    }),
    // 将运行时代码提取到单独的 manifest 文件中，防止其影响 vendor.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      chunks: ['vendor']
    })
  ]
}
```

上述代码将需要抽离的公共模块提取到了`vendor.js`, 同时将`webpack`运行文件提取到`runtime.js`中。这些公共模块除了升级版本一般不会改动，所以希望浏览器将他们存到强缓存里，不受其他业务模块的修改导致文件`chunkhash`名称变动的影响

这样最终打包的模块具备不同的 `chunkhash` 名称，重新打包只会影响有变动的模块重新生成 `chunkhash`

### contenthash

`contenthash` 属于文件**内容级别**的 `hash`, 会根据文件内容的变化而变化

比如有一个 demo.js 中单独引用了 demo.css，那当 demo.js 文件被修改后，就算 demo.css 文件没有被修改，由于模块发生了改变，同样也会导致 demo.css 也被重复构建。这个场景针对 css 使用 contenthash 就可以实现内容不变就不被重复构建的效果

```js
module.exports = {    
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].min.js'),
  },
  plugins:[ 
      // 将 js 中引入的 css 进行分离，使用 contenthash 判断内容的改变
      new ExtractTextPlugin({ filename: utils.assetsPath('css/[name].[contenthash:8].css'), allChunks: true }),
  ]
}
```

:::caution 注意

在`module`中使用`loader`设置**图片**或者**字体**的文件名时，如果包含`hash`或者`chunkhash`都是**不生效**的，默认使用`contenthash`

:::

```js
module.exports = {
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 5,
        name: utils.assetsPath('img/[name].[hash:8].[ext]') // 设置的 hash 值不会生效
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 2,
        name: utils.assetsPath('fonts/[name].[hash:8].[ext]') // 设置的 hash 值不会生效
      }
    }]
  }
}
```

综上我们知道了，合理的组合使用 `chunkhash` 和 `contenthash` 才可以最大化利用**强缓存**的优势，减少不必要的资源重复请求，提升页面加载速度
