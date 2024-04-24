---
id: webpack-loader
title: Loader
tags:
  - 工程化
  - webpack
---

## Loader 是什么

由于 webpack 只能处理 JavaScript 和 JSON 文件，Loader 给 webpack 添加了处理其他类型文件的能力

Loader 将其他类型的文件转换成有效的 webpack modules, 如 ESmodule、CommonJS、AMD，让 webpack 消费这些模块并将其添加到依赖关系图中

## 常见 Loader

- raw-loader: 加载文件原始内容
- file-loader: 将引用文件输出到目标文件夹中，在代码中通过相对路径引用输出的文件（图片、字体）
- url-loader: 类似 file-loader，文件很小的情况下以 base64 的方式将文件内容注入到代码中（大阈值交给 file-loader 处理，小阈值使用 url-loader）
- babel-loader: 将 ES 新语法转换为浏览器可以兼容的语法（ES6 => ES5）
- style-loader: 将 CSS 注入到 JavaScript 中，通过 Dom 操作加载 CSS
- css-loader: 加载 CSS，支持模块化、压缩、文件导入等特性
- less-loader: 转换 CSS
- sass-loader: 转换 CSS
- postcss-loader: 拓展 CSS 语法，使用下一代 CSS
- source-map-loader: 加载额外的 source-map 文件，方便断点调试
- image-loader: 加载并压缩图片文件
- json-loader: 加载 JSON 文件
- ts-loader: 将 ts 转成 js
- eslint-loader: 代码检查
- tslint-loader: 代码检查
- vue-loader: 加载 vue.js 单文件组件

## 使用 Loader 的方式

### webpack.config.js

在 webpack.config.js 文件中配置，在 module.rules 中使用 test 匹配要转换的文件类型，使用 use 指定要使用的 loader

```js
module.exports = {
  module: {
    rules: [{test: /\.ts$/, use: 'ts-loader'}],
  },
};
```

### 内联使用

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

## webpack loader 基本结构

### 同步 loader

同步转换内容后，可以通过 `return` 或调用 `this.callback` 返回结果

```js
export default function loader(content, map, meta) {
  return someSyncOperation(content);
}
```

通过 `this.callback` 可以返回除内容以外的其他信息（如 `sourcemap`）

```js
export default function loader(content, map, meta) {
  this.callback(null, someSyncOperation(content), map, meta);
  return; // 当调用 callback() 时，始终返回 undefined
}
```

### 异步 loader

通过 `this.async` 可以获取异步操作的回调函数，并在回调函数中返回结果

```js
export default function (content, map, meta) {
  const callback = this.async();
  someSyncOperation(content, (err, result, sourceMaps, meta) => {
    if (err) {
      return callback(err);
    }
    callback(null, result, sourceMaps, meta);
  });
}
```

除非计算很小，尽可能使用异步 loader (node.js 单线程)

## loader 开发辅助工具和 loaderContext

`loader-utils` 和 `schema-utils` 可以使获取及验证传递给 `loader` 参数的工作简单化

```js
import {getOptions} from 'loader-utils';
import {validate} from 'schema-utils';

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string',
    },
  },
};

export default function (source) {
  const options = getOptions(this);

  validate(schema, options, {
    name: 'Example Loader',
    baseDataPath: 'options',
  });

  // Apply some transformations to the source...

  return `export default ${JSON.stringify(source)}`;
}
```

`loader-utils` 主要工具方法有：

- `parseQuery`: 解析 loader 的 query 参数，返回一个对象
- `stringifyRequest`: 将请求的资源转换为可以再 loader 生成的代码中 require 或 import 使用的相对路径字符串，同时避免绝对路径导致重新计算 hash 值

```js
loaderUtils.stringifyRequest(this, './test.js');
// "\"./test.js\""
```

- `urlToRequest`: 将请求的资源路径转换成 webpack 可以处理的形式

```js
const url = '~path/to/module.js';
const request = loaderUtils.urlToRequest(url); // "path/to/module.js"
```

- `interpolateName`: 对文件名模板进行插值

```js
// loaderContext.resourcePath = "/absolute/path/to/app/js/olu.js"
loaderUtils.interpolateName(loaderContext, "js/[hash].script.[ext]", { content: ... })
// => js/9473fdd0d880a43c21b7778d34872157.script.js
```

- `getHashDigest`: 获取文件内容的 hash 值

还可以利用 loaderContext 对象来获取 loader 的相关信息和进行一些高级操作处理，常用的方法属性有

- `this.addDependency`: 加入一个文件，作为 loader 产生结果的依赖，使其在有任何变化时可以被监听到，从而触发重新编译
- `this.async`: 告诉 loader-runner 这个 loader 将会异步的执行回调
- `this.cacheable`: 默认情况下，将 loader 的处理结果标记为可缓存。传入 false 可以关闭 loader 处理结果的缓存能力
- `this.fs`: 用于访问 compilation 的 inputFileSystem 属性
- `this.getOptions`: 提取 loader 的配置选项。从 webpack 5 开始可以获取到 loader 上下文对象，用于替代 `loader-utils` 中的 getOptions 方法
- `this.mode`: webpack 的运行模式，development or production
- `this.query`: 如果 loader 配置了 options 对象，则指向这个对象。如果 loader 没有 options，则以 query 字符串作为参数，query 是一个以 `?`开头的字符串

## webpack loader 工作机制

### 根据 module.rules 解析 loader 加载规则

webpack 处理一个模块 module 时，会根据配置文件中 module.rules 规则使用 loader 处理对应资源，得到可供 webpack 使用的 JavaScript 模块

根据具体配置，loader 会有不同类型，会影响 loader 执行顺序

```js
rules: [
  // pre 前置 loader
  { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader' }，
  // normal loader
  { test: /\.js$/, loader: 'babel-loader' },
  // post 后置 loader
  { enforce: 'post', test: /\.js$/, loader: 'eslint-loader' }
]

// 内联 loader
import "style-loader!css-loader!sass-loader!./olu.scss"
```

正常执行流程中，不同类型 loader 的执行顺序是：`pre => normal => inline => post`

内联 loader 可以通知修饰前缀改变 loader 执行顺序

```js
// ! 前缀会禁用 normal loader
import {OLU} from '!./olu.js';

// -! 前缀会禁用 pre loader 和 normal loader
import {OLU} from '-!./olu.js';

// !! 前缀会禁用 pre、normal 和 post loader
import {OLU} from '!!./olu.js';
```

通常，`!`前缀和 内联 loader 一起使用仅出现在 loader 生成的代码中

官方不建议同时使用 内联 loader 和 `!` 前缀

rules 中配置的 loader 可以是多个链式串联的，正常流程中，链式 loader 会按照**从后往前**顺序执行

- 最后的 loader 最先执行，它接收的是资源文件内容
- 第一个 loader 最后执行，它会返回 JavaScript 模块和可选的 source map
- 位于中间的 loader，对接收和返回没有特点的要求，只要能处理之前 loader 返回的内容，产出下一个 loader 能够理解的内容就可

![webpack-loader-model](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/webpack-loader-model.svg)

上图中，使用者配置这三个 loader 的顺序是 `style-loader => css-loader => postcss-loader`

postcss-loader 转义样式语法，转义后的语法仍然存在 css 之间的引用关系，引用关系使用 css-loader 处理，最终 style-loader 让这些 css 内容包裹一层 js, js 运行把样式插入 style 标签，最终样式在页面中生效。webpack 在执行时依次从左至右调用每个 loader 的 pitch 方法，再从右到左调用 loader 本身
