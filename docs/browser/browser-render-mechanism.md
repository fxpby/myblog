---
id: browser-render-mechanism
title: 浏览器渲染原理
tags:
  - 浏览器
---

## 1. 浏览器的渲染流程

### 1.1 渲染时间点

浏览器的网络进程开启线程**接收HTML文档**，产生一个**渲染任务**并传递给渲染主线程的**消息队列**，在事件循环机制作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程

![渲染时间点](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/browser/渲染时间点.svg)

### 1.2 渲染流水线

整个渲染流程分为多个阶段，分别是

- HTML 解析
- 样式计算
- 布局
- 分层
- 绘制
- 分块
- 光栅化
- 画

每个阶段都有明确的输入输出，即上一阶段的输出会成为下一阶段的输入，综上整个渲染流程形成了一套组织严密的生产流水线

![渲染进程流水线2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/browser/渲染进程流水线2.svg)

来自google的图：

![渲染进程流水线](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/browser/渲染进程流水线.png)

### 1.3 Parse 阶段：解析 HTML

解析过程遇到 CSS 解析 CSS，遇到 JS 解析 JS，为了提高解析效率，浏览器在开始解析前会启动一个预解析线程，率先下载 HTML 中的外部 CSS 和 JS 文件

- 如果主线程解析到 `link` 位置，此时外部 CSS 文件还没有下载解析好，主线程不会等待，继续解析后续的 HTML（下载和解析 CSS 的工作在预解析线程中进行）- **CSS 不会阻塞 HTML 解析**
- 如果主线程解析到 `script` 位置，会停止解析 HTML，转而等待 JS 文件下载好，并将全局代码解析执行完成后，才能继续解析 HTML（JS 代码的执行过程可能会修改当前的 DOM 树，故 DOM 树的生成必须暂停）- **JS 会阻塞 HTML 解析**

最终得到 DOM 树和 CSSOM 树， 浏览器的默认样式、内部样式、外部样式和行内样式均会包含在 CSSOM 树中，树的每个节点都对应 JS 对象

![render-tree1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/browser/render-tree1.png)

#### DOM 树（文档对象模型）

Bytes => Characters => Tokens => Nodes => DOM

1. 转换 Conversion：浏览器从磁盘或网络中读取 HTML 原始字节，并根据文件的指定编码（如 UTF-8）将它们转换为各个字符
2. 令牌化/分词 Tokenizing：浏览器根据 HTML 规范将字符串转换为不同令牌（如`<html>`、`<body>`）以及用尖括号括起来的其他字符串
3. 词法处理/语法分析 Lexing：上一步产生的标记被转换为“对象”，从而定义其属性和规则
4. DOM 构建：由于 HTML 标记定义了不同标签之间的关系，因此创建的对象链接在一个树型数据结构中，并捕获原始标记中定义的父子、兄弟关系

#### CSSOM 树（CSS对象模型）

重复上面 DOM 树流程，针对 CSS

StyleSheetList(样式表集合) => 若干个样式表 CSSStyleSheet => CSSStyleRule => 选择器 + style

样式表分类：

- 头部`<style>`样式表
- 头部`<link...>`样式表
- 内联样式表 `<div style="color: #fff">`
- 浏览器默认样式表(user agent stylesheet)

除了浏览器默认样式，其他样式 js 都可以操作，比如 内联样式通过 `dom.style` 更改, 前两个样式可通过 `document.styleSheets[0].addRule('div', 'border: 1px solid red')`处理

Bytes => Characters => Tokens => Nodes => CSSOM

![parsing1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/browser/parsing1.png)

> <https://web.dev/articles/critical-rendering-path/constructing-the-object-model?hl=zh-cn>

#### HTML 解析过程遇到 CSS 代码（次级资源加载）

一个网页可能会有多个外部资源，如图片、js、css、字体等。主线程在解析 DOM 过程中遇到这些资源后会一一请求

为了加速渲染流程，`预加载扫描器（preload scanner）线程`并发运行。如果 HTML 中存在 img 或 link 等内容，预加载扫描器会查看 HTML parser 生成的标记，并发送请求到浏览器进程的**网络线程**获取资源

![次级资源加载](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/browser/次级资源加载.svg)

### 1.4 Style 阶段：样式计算

### 1.5 Layout 阶段

### 1.6 Paint 阶段

### 1.7 合成 Compositing

## 2. 浏览器渲染性能优化

## reference

<https://web.dev/articles/critical-rendering-path/constructing-the-object-model?hl=zh-cn>
<https://web.dev/articles/critical-rendering-path/render-tree-construction?hl=zh-cn>
<https://www.lambdatest.com/blog/css-object-model/>
