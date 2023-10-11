---
id: vue2-build
title: 源码学习 - 构建
tags:
  - Vue
---

## 构建过程

克隆项目后，来到 package.json 文件中，我们看 script 脚本部分, 有下面这几个 build 命令，执行完 `npm run build` 命令之后，`dist` 目录下方会生成很多特殊命名的 `vue.*.js` 文件

```json
{
  "scripts": {
    "build": "node scripts/build.js",
    "build:ssr": "npm run build -- web-runtime-cjs,web-server-renderer",
    "build:weex": "npm run build -- weex",
  }
}
```

来到 `scripts\build.js` 里看一下, 这里引用了同级目录下 `config.js` 的 `getAllBuilds()` 方法

```js
let builds = require('./config').getAllBuilds()
```

那么，再来到`scripts\config.js`目录下看一下最后导出的内容

```js
if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} else {
  exports.getBuild = genConfig
  exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
}
```

`builds`是一个对象，里面存放着各种编译配置项，每一项也是一个对象

- `entry`代表入口
- `dest`代表目标

```js
const builds = {
  // Runtime only (CommonJS). Used by bundlers e.g. Webpack & Browserify
  'web-runtime-cjs-dev': {
    entry: resolve('web/entry-runtime.js'),
    dest: resolve('dist/vue.runtime.common.dev.js'),
    format: 'cjs',
    env: 'development',
    banner
  },
  'web-runtime-cjs-prod': {
    entry: resolve('web/entry-runtime.js'),
    dest: resolve('dist/vue.runtime.common.prod.js'),
    format: 'cjs',
    env: 'production',
    banner
  },
  // Runtime+compiler CommonJS build (CommonJS)
  'web-full-cjs-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.common.dev.js'),
    format: 'cjs',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  },
  'web-full-cjs-prod': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.common.prod.js'),
    format: 'cjs',
    env: 'production',
    alias: { he: './entity-decoder' },
    banner
  },
  // Runtime only ES modules build (for bundlers)
  'web-runtime-esm': {
    entry: resolve('web/entry-runtime.js'),
    dest: resolve('dist/vue.runtime.esm.js'),
    format: 'es',
    banner
  },
  // Runtime+compiler ES modules build (for bundlers)
  'web-full-esm': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.esm.js'),
    format: 'es',
    alias: { he: './entity-decoder' },
    banner
  },
  // Runtime+compiler ES modules build (for direct import in browser)
  'web-full-esm-browser-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.esm.browser.js'),
    format: 'es',
    transpile: false,
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  },
  // Runtime+compiler ES modules build (for direct import in browser)
  'web-full-esm-browser-prod': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.esm.browser.min.js'),
    format: 'es',
    transpile: false,
    env: 'production',
    alias: { he: './entity-decoder' },
    banner
  },
  // runtime-only build (Browser)
  'web-runtime-dev': {
    entry: resolve('web/entry-runtime.js'),
    dest: resolve('dist/vue.runtime.js'),
    format: 'umd',
    env: 'development',
    banner
  },
  // runtime-only production build (Browser)
  'web-runtime-prod': {
    entry: resolve('web/entry-runtime.js'),
    dest: resolve('dist/vue.runtime.min.js'),
    format: 'umd',
    env: 'production',
    banner
  },
  // Runtime+compiler development build (Browser)
  'web-full-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  },
  // Runtime+compiler production build  (Browser)
  'web-full-prod': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.min.js'),
    format: 'umd',
    env: 'production',
    alias: { he: './entity-decoder' },
    banner
  },
  // Web compiler (CommonJS).
  'web-compiler': {
    entry: resolve('web/entry-compiler.js'),
    dest: resolve('packages/vue-template-compiler/build.js'),
    format: 'cjs',
    external: Object.keys(require('../packages/vue-template-compiler/package.json').dependencies)
  },
  // Web compiler (UMD for in-browser use).
  'web-compiler-browser': {
    entry: resolve('web/entry-compiler.js'),
    dest: resolve('packages/vue-template-compiler/browser.js'),
    format: 'umd',
    env: 'development',
    moduleName: 'VueTemplateCompiler',
    plugins: [node(), cjs()]
  },
  // Web server renderer (CommonJS).
  'web-server-renderer-dev': {
    entry: resolve('web/entry-server-renderer.js'),
    dest: resolve('packages/vue-server-renderer/build.dev.js'),
    format: 'cjs',
    env: 'development',
    external: Object.keys(require('../packages/vue-server-renderer/package.json').dependencies)
  },
  'web-server-renderer-prod': {
    entry: resolve('web/entry-server-renderer.js'),
    dest: resolve('packages/vue-server-renderer/build.prod.js'),
    format: 'cjs',
    env: 'production',
    external: Object.keys(require('../packages/vue-server-renderer/package.json').dependencies)
  },
  'web-server-renderer-basic': {
    entry: resolve('web/entry-server-basic-renderer.js'),
    dest: resolve('packages/vue-server-renderer/basic.js'),
    format: 'umd',
    env: 'development',
    moduleName: 'renderVueComponentToString',
    plugins: [node(), cjs()]
  },
  'web-server-renderer-webpack-server-plugin': {
    entry: resolve('server/webpack-plugin/server.js'),
    dest: resolve('packages/vue-server-renderer/server-plugin.js'),
    format: 'cjs',
    external: Object.keys(require('../packages/vue-server-renderer/package.json').dependencies)
  },
  'web-server-renderer-webpack-client-plugin': {
    entry: resolve('server/webpack-plugin/client.js'),
    dest: resolve('packages/vue-server-renderer/client-plugin.js'),
    format: 'cjs',
    external: Object.keys(require('../packages/vue-server-renderer/package.json').dependencies)
  },
  // Weex runtime factory
  'weex-factory': {
    weex: true,
    entry: resolve('weex/entry-runtime-factory.js'),
    dest: resolve('packages/weex-vue-framework/factory.js'),
    format: 'cjs',
    plugins: [weexFactoryPlugin]
  },
  // Weex runtime framework (CommonJS).
  'weex-framework': {
    weex: true,
    entry: resolve('weex/entry-framework.js'),
    dest: resolve('packages/weex-vue-framework/index.js'),
    format: 'cjs'
  },
  // Weex compiler (CommonJS). Used by Weex's Webpack loader.
  'weex-compiler': {
    weex: true,
    entry: resolve('weex/entry-compiler.js'),
    dest: resolve('packages/weex-template-compiler/build.js'),
    format: 'cjs',
    external: Object.keys(require('../packages/weex-template-compiler/package.json').dependencies)
  }
}
```

`entry`和`dest`都使用了`resolve()`函数, 那么再看一下这个函数，该函数接收一个参数，截取`/`前一项，并且去`scripts\alias.js`中找到对应的映射文件
比如传入参数`web/entry-runtime.js`，截取到`web`,在`scripts\alias.js`中会通过`resolve`方法当前目录为基础，在上一级目录中，也就是根目录中找到`src/platforms/web`路径和`entry-runtime.js`

```js
// scripts\config.js
const aliases = require('./alias')
const resolve = p => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}
```

```js
// scripts\alias.js
const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'),
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  sfc: resolve('src/sfc')
}
```

### 构建文件分类

|                          | UMD                | CommonJS                   | ES Module          |
| ------------------------ | ------------------ | -------------------------- | ------------------ |
| Full                     | vue.js             | vue.common.js              | vue.esm.js         |
| Runtime-only             | vue.runtime.js     | vue.runtime.common.js      | vue.runtime.esm.js |
| Full(production)         | vue.min.js         | vue.common.prod.js         |                    |
| Runtime-only(production) | vue.runtime.min.js | vue.runtime.common.prod.js |                    |

![vue-build-files1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/vue2/vue-build-files1.png)

- Full：全量包，包含**编译器(compiler)**和**运行时(runtime)**
- Compiler: 编译器，负责将模板字符串（类 HTML 语法的模板代码）编译为 JS 的 render 函数
- Runtime：创建 Vue 实例，渲染函数、patch 虚拟 DOM 等代码
- UMD：兼容 CommonJS 和 AMD 规范，如通过 CDN 引入的 vue.js 就是 UMD 规范的，包含编译器和运行时
- CommonJS：如 nodeJS，为了给 browserify 和 webpack1 旧的打包器使用。默认入口文件为 vue.runtime.common.js
- ES Module: 现代 JS 规范，get webpack2+ 和 rollup 等现代打包器使用，打包器默认使用仅包含运行时的 vue.runtime.esm.js

### 运行时 runtime + 编译器 compiler VS 仅运行时 （runtime-only）

- Runtime only

使用 `vue-loader` 或 `vueify`时，`*.vue`文件中的模板在构建时会被编译为 JS 渲染函数，不需要包含编译器的全量包，只需仅包含运行时的包

- Runtime + Compiler

如果需要动态编译模板，如将字符串模板传递给 template 或 通过提供一个挂载元素的方式编写 HTML 模板则需要编译器

```js
// 需要编译器的版本, 因为最终渲染都是通过 render 函数，如果写 template 属性，则需要编译成 render 函数，那么这个编译过程会发生运行时，所以需要带有编译器的版本
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 这种情况不需要
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```

仅运行时的包体积比全量包体积小 30%，全量包需要进行一些配置

#### webpack

这里的 `$` 代表精确匹配, `module.rules`中`test: /\.vue$/`的 `$` 是正则的 `$`，跟 `alias` 的 `$` 不一样

```js
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
```

#### rollup

```js
const alias = require('rollup-plugin-alias')

rollup({
  // ...
  plugins: [
    alias({
      'vue': 'vue/dist/vue.esm.js'
    })
  ]
})
```

#### Browserify

`Browserify`是一个`node.js`模块，主要用于改写现有的`CommonJS`模块，使得浏览器端也可以使用这些模块。在`package.json`中添加下列代码：

```js
{
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}
```
