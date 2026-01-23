---
id: eventloop
title: EventLoop 事件循环
tags:
  - EventLoop
---

## 浏览器线程

- GUI 渲染线程：渲染和解析页面
- JS 引擎线程：渲染和解析 JS，浏览器只分配一个线程解析 JS，是单线程
- 定时器监听线程
- 事件监听线程
- HTTP 网络请求线程：同源下浏览器最多分配 5 ~ 7 个HTTP 线程（HTTP 并发数）
- Web Worker线程

## 微任务 microtask

- requestAnimationFrame
- Promise.then/catch/finally
- async/await
- queueMicrotask
- process.nextTick(Node)
- MutationObserver
- IntersectionObserver

## 宏任务

- setInterval
- setTimeout
- 事件绑定/队列
- XMLHttpRequest/fetch
- setImmediate (Node)
- MessageChannel


事件循环闭环流程

当执行栈为空时，执行以下步骤

1. 执行微任务队列
   a. 选择微任务的队头任务 x
   b. 如果任务 x 为空（微任务队列为空），跳转步骤 g
   c. 将"当前正在运行的任务"设置为"任务 x"
   d. 运行任务 x
   e. 将"当前正在运行的任务"设置为空，删除任务 x
   f. 选择微任务队列中的队头，跳转步骤 b
   g. 完成微任务队列
2. 选择宏任务队列中最早的任务 y
3. 将"当前正在运行的任务"设置为 任务 y
4. 运行 任务 y 同步代码
5. 跳转步骤 1
6. 将"当前正在运行的任务"设置为空，删除任务 y,结束本次Loop
7. 跳转步骤 2
