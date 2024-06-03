---
id: babel
title: Babel
tags:
  - 工程化
  - babel
---
<!--
.browserslistrc
手写 babel 插件
-->


## 1. 什么是 Babel

Babel 是 **JavaScript 编译器**，可以让开发人员在开发过程中直接使用各类方言（如 TS、Flow、JSX）或新的语法特性，不需要考虑运行环境（按需转换为低版本支持的代码）

- 语法转换
- 源代码转换
- Polyfill 实现目标环境缺少的功能

其原理是将 JS 代码转换为 **AST**，对 AST 应用各种插件进行处理，最终输出编译后的 JS 代码

## 2. AST 抽象语法树

即以树的形式表现编程语言的语法结构

> <https://astexplorer.net/>

这个在线调试网站可以输出 Tree 和 JSON 两种结构，可以观察到生成的树的节点、节点类型、节点属性能内容

```js
const name = olu
```

```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "name"
          },
          "init": {
            "type": "Identifier",
            "start": 11,
            "end": 14,
            "name": "olu"
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```

使用树来进行分析或转换可以使得程序中的每一节点恰好被访问一次（前序或后序遍历）

常见使用场景是代码压缩混淆，通过分析 AST，基于各种规则进行优化、移除不可访问代码、移除 debugger 等

## 3. Babel 编译流程

### 3.1 解析阶段（Parser）

Babel 默认使用`@babel/parser`将代码转换为 AST

- 词法分析：对输入的字符序列做标记化（tokenization）操作（将 js 代码字符串进行词法分析生成一系列 `tokens`）
- 语法分析：处理标记于标记之间的关系，最终形成一颗完整的 AST 结构(将上一步的 tokens 进行组合)

### 3.2 转换阶段(Transformer)

Babel 使用`@babel/traverse`提供的方法对 AST 进行深度优先遍历，调用插件对关注节点的处理函数，按需对 AST 节点进行增删改处理，将新的 js 语法节点转化成浏览器兼容的语法节点

### 3.3 生成阶段(Generator)

Babel 默认使用`@babel/generator`将上一阶段深度遍历处理后的AST转换为代码字符串

## 4. Babel 插件系统

Babel 的核心模块是 `@babel/core`,`@bable/parser`,`@babel/traverse`和`@babel/generator`,这些模块提供了完整的编译流程

转换逻辑则需要插件来完成,使用 Babel 时，可以通过配置文件指定 `plugin` 和 `preset`

`preset` 可以是 `plugin` 和 `preset` 以及其他配置的集合

Babel 会递归读取 `preset`，最终获取一个大的 `plugin` 数组，用于后续使用

### 4.1 常见 preset

- @babel/preset-env
- @babel/preset-typescript
- @babel/preset-react
- @babel/preset-flow

#### 4.1.1 @babel/preset-env

其中的 @babel/preset-env 智能预设是最常见的，它包含了一组最新浏览器已支持的 ES 语法特性，并且可以通过配置目标运行环境范围，自动按需引入插件

内部集成了绝大多数 plugin （Stage > 3）的分析转换插件

::: caution
@babel/preset-env 不包含低于 Stage 3 的JavaScript 语法提案，如果需要兼容则要额外引对应的 Plugin

@babel/preset-env 仅针对语法阶段分析转换，如 const、let、箭头函数这种的。对于一些 Api 或者 ES6 内置模块的 polyfill 无法处理
:::

#### 4.1.2 @babel/preset-react

在开发 React 项目编写 jsx 时，本质上 jsx 最后会被编译成 `React.createElement()`

@babel/preset-react 预设就是对 jsx 进行分析转换

#### 4.1.3 @babel/preset-typescript

@babel/preset-typescript 顾名思义是对 ts 代码进行分析转换

### 4.2 常见 plugin

大多数常见的 plugin 都已经集成在 @babel/preset-env 中了，如果我们发现项目不能支持某些新的 js 语法时，可以查 babel plugin list找到对应的插件，插入到我们的 babel 配置中

> <https://babeljs.io/docs/en/plugins-list>

比较重要常见的插件有 `@babel/plugin-transform-runtime`

### 4.3 基建 Babel 配置

日常项目我们主要会涉及到三个插件

- babel-loader
- @babel/core
- @babel/preset-env

#### 4.3.1 babel-loader

webpack 中 loader 本质是一个函数，接受源代码作为入参同时返回新内容

所以 babel-loader 本质是一个函数

> 各种基建项目的初始化方式：<https://babeljs.io/setup>

`@babel/core` 是编译代码的核心库，可以将代码进行`词法分析--语法分析--语义分析`生成 AST 抽象语法树（相当于`@babel/parse`和`@babel/generator`的合体，类似 js 编译相关的 `esprima` 和 `escodegen` 两个库）

`@babel/core`通过 transform 方法进行转换编译

```js
babel.transform(code, options, function(err, result) {
  result; // => { code, map, ast }
});

babel.transform("code();", options, function(err, result) {
  result.code;
  result.map;
  result.ast;
});
```

它支持[同步和异步](https://babeljs.io/docs/babel-core)

上面的 transform 方法是直接接受字符串，transformFile 方法可以接受 js 文件路径

```js
babel.transformFile(filename, options, callback);

babel.transformFile("filename.js", options, function(err, result) {
  result; // => { code, map, ast }
});
```

```js title="babel-loader 伪代码"
let babel = require("@babel/core");

function babelLoader (sourceCode,options) {
  // 通过transform方法编译传入的源代码
  babel.transform(sourceCode)
  return targetCode
}
```

#### 4.3.2 @babel/core

### 4.4 编写 Babel 插件

Babel 插件的写法借助**访问者模式**对关注的节点定义处理函数，下面是一个例子

```js
module.exports = function () {
  return {
    pre() {
      // 在 visitor 下挂载各种节点类型的监听方法
      visitor: {
        /**
         * 对 Identify 类型的节点进行处理
         * @param {NodePath} path
         */
        Identifier(path) {
          path.node.name = path.node.name.toUpperCase()
        }
      },
      post() {}
    }
  }
}
```

使用 Babel 插件的效果是：

```js title="input"
// index.js
function olu() {}

// .babelrc
{
  "plugins": ["babel-plugin-testpluginname"]
}
```

```js title="output"
function OLU() {}
```

### 4.5 Babel 转换阶段

转换阶段，Babel 相关方法会获得一个插件数组变量，用于后续操作。插件结构接口如下：

```ts
interface Plugin {
  key: string | undefined | null;
  post: Function | void;
  pre: Function | void;
  visitor: Object;
  parserOverride: Function | void;
  generatorOverride: Function | void;
}
```

转换阶段，Babel 会按照[以下顺序](https://github.com/babel/babel/blob/a647b9ea6bdd510f0d80b58dbea66828016ffe00/packages/babel-core/src/transformation/index.ts#L76)执行

1. 执行所有插件的 pre 方法
2. 按需执行 visitor 中的方法
3. 执行所有插件的 post 方法

```ts
function* transformFile(file: File, pluginPasses: PluginPasses): Handler<void> {
  for (const pluginPairs of pluginPasses) {
    const passPairs = [];
    const passes = [];
    const visitors = [];

    for (const plugin of pluginPairs.concat([loadBlockHoistPlugin()])) {
      const pass = new PluginPass(file, plugin.key, plugin.options);

      passPairs.push([plugin, pass]);
      passes.push(pass);
      visitors.push(plugin.visitor);
    }

    for (const [plugin, pass] of passPairs) {
      const fn = plugin.pre;
      if (fn) {
        const result = fn.call(pass, file);

        // @ts-expect-error - If we want to support async .pre
        yield* [];

        if (isThenable(result)) {
          throw new Error(
            `You appear to be using an plugin with an async .pre, ` +
              `which your current version of Babel does not support. ` +
              `If you're using a published plugin, you may need to upgrade ` +
              `your @babel/core version.`,
          );
        }
      }
    }

    // merge all plugin visitors into a single visitor
    const visitor = traverse.visitors.merge(
      visitors,
      passes,
      file.opts.wrapPluginVisitorMethod,
    );
    traverse(file.ast, visitor, file.scope);

    for (const [plugin, pass] of passPairs) {
      const fn = plugin.post;
      if (fn) {
        const result = fn.call(pass, file);

        // @ts-expect-error - If we want to support async .post
        yield* [];

        if (isThenable(result)) {
          throw new Error(
            `You appear to be using an plugin with an async .post, ` +
              `which your current version of Babel does not support. ` +
              `If you're using a published plugin, you may need to upgrade ` +
              `your @babel/core version.`,
          );
        }
      }
    }
  }
}
```

写 Babel 插件主要使用 visitor 对象，这个 visitor 对象中会编写对于关注的 AST 节点的处理逻辑

上述执行顺序中第二步的 visitor 对象是整合自各插件的 visitor,最终形成的一个大的 visitor 对象，数据结构大致参考下面接口

```ts
// 书写插件时的 visitor 结构
interface VisitorInPlugin {
  [ASTNodeTypeName: string]:
    | Function
    | {
        enter?: Function;
        exit?: Function;
      };
}

// babel 最终整合的 visitor 结构
interface VisitorInTransform {
  [ASTNodeTypeName: string]: {
    // 不同插件对相同节点的处理会合并为数组
    enter?: Function[];
    exit?: Function[];
  };
}
```

对 AST 进行深度优先遍历时，会创建 TraversalContext 对象来把控对 NodePath 节点的访问，访问时调用对节点所定义的处理方法，从而实现按需执行 visitor 中的方法

```ts title="packages\babel-traverse\src\index.ts"
// ...
traverse.node = function (
  node: t.Node,
  opts: TraverseOptions,
  scope?: Scope,
  state?: any,
  parentPath?: NodePath,
  skipKeys?,
) {
  const keys = t.VISITOR_KEYS[node.type];
  if (!keys) return;

  const context = new TraversalContext(scope, opts, state, parentPath);
  for (const key of keys) {
    if (skipKeys && skipKeys[key]) continue;
    if (context.visit(node, key)) return;
  }
};
// ...
```

```ts title="packages\babel-traverse\src\context.ts"
import NodePath from "./path";
import * as t from "@babel/types";
import type Scope from "./scope";

export default class TraversalContext {
  constructor(scope, opts, state, parentPath) {
    this.parentPath = parentPath;
    this.scope = scope;
    this.state = state;
    this.opts = opts;
  }

  declare parentPath: NodePath;
  declare scope: Scope;
  declare state;
  declare opts;
  queue: Array<NodePath> | null = null;
  priorityQueue: Array<NodePath> | null = null;

  /**
   * This method does a simple check to determine whether or not we really need to attempt
   * visit a node. This will prevent us from constructing a NodePath.
   */

  shouldVisit(node): boolean {
    const opts = this.opts;
    if (opts.enter || opts.exit) return true;

    // check if we have a visitor for this node
    if (opts[node.type]) return true;

    // check if we're going to traverse into this node
    const keys: Array<string> | undefined = t.VISITOR_KEYS[node.type];
    if (!keys?.length) return false;

    // we need to traverse into this node so ensure that it has children to traverse into!
    for (const key of keys) {
      if (node[key]) return true;
    }

    return false;
  }

  create(node, obj, key, listKey?): NodePath {
    // We don't need to `.setContext()` here, since `.visitQueue()` already
    // calls `.pushContext`.
    return NodePath.get({
      parentPath: this.parentPath,
      parent: node,
      container: obj,
      key: key,
      listKey,
    });
  }

  maybeQueue(path, notPriority?: boolean) {
    if (this.queue) {
      if (notPriority) {
        this.queue.push(path);
      } else {
        this.priorityQueue.push(path);
      }
    }
  }

  visitMultiple(container, parent, listKey) {
    // nothing to traverse!
    if (container.length === 0) return false;

    const queue = [];

    // build up initial queue
    for (let key = 0; key < container.length; key++) {
      const node = container[key];
      if (node && this.shouldVisit(node)) {
        queue.push(this.create(parent, container, key, listKey));
      }
    }

    return this.visitQueue(queue);
  }

  visitSingle(node, key): boolean {
    if (this.shouldVisit(node[key])) {
      return this.visitQueue([this.create(node, node, key)]);
    } else {
      return false;
    }
  }

  visitQueue(queue: Array<NodePath>) {
    // set queue
    this.queue = queue;
    this.priorityQueue = [];

    const visited = new WeakSet();
    let stop = false;

    // visit the queue
    for (const path of queue) {
      path.resync();

      if (
        path.contexts.length === 0 ||
        path.contexts[path.contexts.length - 1] !== this
      ) {
        // The context might already have been pushed when this path was inserted and queued.
        // If we always re-pushed here, we could get duplicates and risk leaving contexts
        // on the stack after the traversal has completed, which could break things.
        path.pushContext(this);
      }

      // this path no longer belongs to the tree
      if (path.key === null) continue;

      // ensure we don't visit the same node twice
      const { node } = path;
      if (visited.has(node)) continue;
      if (node) visited.add(node);

      if (path.visit()) {
        stop = true;
        break;
      }

      if (this.priorityQueue.length) {
        stop = this.visitQueue(this.priorityQueue);
        this.priorityQueue = [];
        this.queue = queue;
        if (stop) break;
      }
    }

    // clear queue
    for (const path of queue) {
      path.popContext();
    }

    // clear queue
    this.queue = null;

    return stop;
  }

  visit(node, key) {
    const nodes = node[key];
    if (!nodes) return false;

    if (Array.isArray(nodes)) {
      return this.visitMultiple(nodes, node, key);
    } else {
      return this.visitSingle(node, key);
    }
  }
}
```

><https://github.com/babel/babel/tree/bc1b9537b00499f462aa3ac0d49e30314a66f413/packages/babel-traverse>
