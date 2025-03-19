---
id: webpack-loader
title: Loader
tags:
  - 工程化
  - webpack
---

## 1. Loader 是什么

由于 webpack 只能处理 JavaScript 和 JSON 文件，Loader 给 webpack 添加了处理其他类型文件的能力

Loader 将其他类型的文件转换成有效的 webpack modules, 如 ESmodule、CommonJS、AMD，让 webpack 消费这些模块并将其添加到依赖关系图中

## 2. 常见 Loader

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

## 3. 使用 Loader 的方式

### 3.1 webpack.config.js

在 webpack.config.js 文件中配置，在 module.rules 中使用 test 匹配要转换的文件类型，使用 use 指定要使用的 loader

```js
module.exports = {
  module: {
    rules: [{test: /\.ts$/, use: 'ts-loader'}],
  },
};
```

### 3.2 内联使用

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

## 4. webpack loader 基本结构

### 4.1同步 loader

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

### 4.2 异步 loader

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

## 5. loader 开发辅助工具和 loaderContext

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

## 6. webpack loader 工作机制

### 6.1 根据 module.rules 解析 loader 加载规则

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

使用者配置这三个 loader 的顺序是 `style-loader => css-loader => postcss-loader`

postcss-loader 转义样式语法，转义后的语法仍然存在 css 之间的引用关系，引用关系使用 css-loader 处理，最终 style-loader 让这些 css 内容包裹一层 js, js 运行把样式插入 style 标签，最终样式在页面中生效。webpack 在执行时依次从左至右调用每个 loader 的 pitch 方法，再从右到左调用 loader 本身

### 6.2 loader-runner 执行流程

webpack 调用 loader 的时机在触发 compilation 的 buildModule 钩子之后，webpack 会再 `NormalModule.js` 中调用 runLoaders 运行 loader

```js
runLoaders(
  {
    // 资源文件的路径，可以有查询字符串，如 './test.txt?query'
    resource: this.resource,
    // loader 路径
    loaders: this.loaders,
    // 传递给 loader 的上下文
    context: loaderContext,
    processResource: (loaderContext, resourcePath, callback) => {
      // 获取资源的方式，有 scheme 的文件通过 readResourceForScheme 读取，否则通过 fs.readFile 读取
      const resource = loaderContext.resource
      const scheme = getScheme(resource)
      if (scheme) {
        hooks.readResourceForScheme
          .for(scheme)
          .callAsync(resource, this, (err, result) => {
            // ...
            return callback(null, result)
          })
      } else {
        loaderContext.addDependency(resourcePath)
        fs.readFile(resourcePath, callback)
      }
    }
  },
  (err, result) => {
    // 当 loader 转换完成后，会将结果返回到 webpack 中继续处理
    processResult(err, result.result)
  }
)
```

runLoaders 函数来自 `loader-runner` 包

前面提到过的**从后往前**执行 loader 的流程通常叫做 normal 阶段，pitch 阶段是**从前往后**的

一个 loader 如果在导出的函数的 pitch 属性上挂载了方法，那这个方法将在 pitch 阶段执行

![webpack-loader-model](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/webpack-loader-model.svg)

这个流程类似浏览器事件模型或洋葱模型，pitch 阶段先从前往后执行 loader，再进入 normal 阶段从后往前执行 loader

pitch 阶段一般不返回值，一旦 pitch 阶段有 loader 返回值，则从该位置开始进入**从后往前**执行的 normal 阶段

loader-runner 具体流程如下：

1. 处理从 webpack 接收的 context，继续添加必要的属性和辅助方法
2. iteratePitchingLoaders 处理 pitch loader

    给一个 module 配置三个 loader，每个 loader 都配置 pitch 函数

    ```js
    module.exports = {
      module: {
        rules: [
          {
            use: ["a-loader", "b-loader", "c-loader"]
          }
        ]
      }
    }
    ```

    module 处理流程就会是

    ```txt
    |- a-loader `pitch`
      |- b-loader `pitch`
        |- c-loader `pitch`
          |- requested module is picked up as a dependency
        |- c-loader normal execution
      |- b-loader normal execution
    |- a-loader normal execution
    ```

    如果 b-loader 在 pitch 中提前返回了返回值就会是

    ```txt
    |- a-loader `pitch`
      |- b-loader `pitch` returns a module
    |- a-loader normal execution
    ```

3. iterateNormalLoaders 处理 normal loader

    当 pitch loader 流程处理完后，会走到处理 normal loader 的流程，即从后往前迭代

    iterateNormalLoaders 和 iteratePitchingLoaders 都会调用 runSyncOrAsync 来执行 loader

    runSyncOrAsync 会提供 context.async（返回 callback 的 async 函数，用于异步处理）

## 7. 常见 webpack loader 分析

### 7.1 raw-loader

是一个同步 loader，核心是从文件原始内容中获取序列化的字符串，修复 JSON 序列化特殊字符时的 bug，添加导出语句，使其成为 JavaScript 模块

webpack 5 中已经废弃，直接使用 asset modules 功能替代

raw-loader 源码：

```js
import { getOptions } from "loader-utils"
import { validate } from "schema-utils"

import schema from "./options.json"

export default function rawLoader(source) {
  const options = getOptions(this)

  validate(schema, options, {
    name: 'Raw Loader',
    baseDataPath: 'options'
  })

  const json = JSON.stringify(source)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")

  const esModule = typeof options.esModule !== "undefined" ? options.esModule : true

  return `${esModule ? "export default" : "module.exports ="} ${json};`
}
```

### 7.2 babel-loader

babel loader 有同步和异步两种机制，在使用缓存配置时会以异步模式运行，主要源码如下

```js
const transpile = function(source, options) {
  // ...

  let result
  try {
    result = babel.transform(source, options)
  } catch (error) {
    // ...
  }

  // ...

  return {
    code,
    map,
    metadata
  }
}

// ...

module.exports = function (source, inputSourceMap) {
  // ...

  if (cacheDirectory) {
    const callback = this.async()
    return cache(
      {
        directory: cacheDirectory,
        identifier: cacheIdentifier,
        source,
        options,
        transform: transpile,
      },
      (err, { code, map, metadata } = {}) => {
        if (err) {
          return callback(err)
        }

        metadataSubscribers.forEach((s) => passMetadata(s, this, metadata))

        return callback(null, code, map)
      }
    )
  }

  const { code, map, metadata } = transpile(source, options)

  this.callback(null, code, map)
}
```

通过 callback 传递了经过 babel.transform 转换后的代码及 source map

### 7.3 style-loader 和 css-loader

style-loader 负责将样式插入到 DOM 中，即让页面中的样式生效

css-loader 负责处理 import 、url 路径等外部引用

style-loader 只有 pitch 函数。css-loader 是 normal module。

1. 先执行 style-loader 阶段，style-loader 创建形如 `require(!!./olu.css)` 的代码返回给 webpack
2. webpack 再次调用 css-loader 处理样式，css-loader 返回包含 runtime 的 js 模块给 webpack 解析
3. style-loader 在上一步注入 `require(!!./olu.css)` 的同时，也注入了添加 style 标签的代码

这样就可以把 css-loader 样式插入到页面中

那为什么不按照 normal 模式组织 style-loader 和 css-loader 呢

css-loader 返回的代码类似这样

```js
import ___CSS_LOADER_API_IMPORT___ from "../node_modules/_css-loader@5.1.3@css-loader/dist/runtime/api.js";
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function (i) {
  return i[1];
});
// Module
___CSS_LOADER_EXPORT___.push([
  module.id,
  ".olumel{\r\n    height: 100px;\r\n}",
  "",
]);
// Exports
export default ___CSS_LOADER_EXPORT___;
```

style-loader 无法在编译时获取 css 相关内容，因为 style-loader 无法处理 css-loader 生成结果的 runtime 依赖

style-loader 也无法在运行时获取 css 相关的内容（无论如何拼接运行时代码，都无法获取到 css 内容）

所以 style-loader 使用了 pitch 方案，核心代码如下

```js title="style-loader"
module.exports.pitch = function (request) {
  var result = [
    // 生成 require CSS 文件的语句，交给 css-loader 解析 得到包含 CSS 内容的 JS 模块
    // 其中 !! 是为了避免 webpack 解析时递归调用 style-loader
    `var content=require("${loaderUtils.stringifyRequest(this, `!!${request}`)}")`,
    // 在运行时调用 addStyle 把 CSS 内容插入到 DOM 中
    `require("${loaderUtils.stringifyRequest(this, `!${path.join(__dirname, "add-style.js")}`)}")(content)`
    // 如果发现启用了 CSS modules，则默认导出它
    "if(content.locals) module.exports = content.locals",
  ];
  return result.join(";");
};
```

```js title="add-style.js"
module.exports = function (content) {
  var style = document.createElement("style");
  style.innerHTML = content;
  document.head.appendChild(style);
};
```

pitch 阶段，style-loader 生成 require CSS 以及注入 runtime 代码。结果会返回给 webpack 进一步解析，css-loader 返回的结果会作为模块在运行时导入，运行时能获得 CSS 内容，再调用 add-style.js 把 CSS 内容插入到 DOM 里
