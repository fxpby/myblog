---
id: browser-event-loop
title: 浏览器事件循环
tags:
  - 浏览器
---

## 1.浏览器的进程模型

### 1.1 进程

程序运行需要有专属的**内存空间**，可以简单把这块内存空间理解为进程

每个应用至少有一个进程，进程之间相互独立

### 1.2 线程

有了进程，才可以运行程序代码，运行代码的对象即线程

一个进程至少有一个线程，进程开启后会自动创建一个线程运行代码，该线程即为主线程，主线程结束意味着整个程序结束

程序往往需要同时执行多块代码，主线程会启动更多线程来执行相关代码，故**一个进程中可以包含多个线程**

### 1.3 浏览器的进程和线程

浏览器是一个多进程多线程的应用程序

为了避免互相影响，减少崩溃概率，启动浏览器后，会自动启动多个进程

其中较为重要的是**浏览器进程**、**网络进程**和**渲染进程**

可以在浏览器的任务管理器查看当前的所有进程（更多 => 更多工具 => 任务管理器）

#### 1.3.1 浏览器进程

主要负责界面展示、用户交互、子进程管理（包括后面的网络进程和渲染进程等）等，浏览器进程内部会启动多个线程处理不同任务

#### 1.3.2 网络进程

负责加载网络资源，网络进程内部会启动多个线程处理不同任务

#### 1.3.3 渲染进程

渲染进程启动后，会开启一个**渲染主线程**，渲染主线程负责执行 HTML、CSS、JS 代码

默认情况下，浏览器会为每个标签页开启一个新的渲染进程来保证不同标签页之间不会相互影响（后续可能会改成一个站点一个进程 site-per-process）

> [https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md](https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md)

## 2. 渲染主线程工作模式

渲染主线程非常繁忙，处理的任务包括但不限于 👇🏻

- 解析 HTML
- 解析 CSS
- 计算样式
- 布局
- 处理图层
- 每秒画页面 60 次(FPS)
- 执行全局 JS 代码
- 执行事件处理函数
- 执行计时器的回调函数
- ......

主线程还会遇到一个致命难题 - 如何调度任务

- 如正在执行一个 JS 函数，执行到一半用户点击按钮，立即执行点击事件处理函数吗？
- 如正在执行一个 JS 函数，执行到一半某计时器刚好到达时间，立即执行回调吗？
- 如浏览器进程通知“用户点击了按钮”，同时某计时器刚好到达时间，应该处理哪个？

答案：**排队**

![渲染主线程 1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/browser/%E6%B8%B2%E6%9F%93%E4%B8%BB%E7%BA%BF%E7%A8%8B1.svg)

1. 最开始时，渲染主线程进入一个[无限循环](https://github.com/chromium/chromium/blob/4ff7e1c7fcf513a8da886d4246637a1c5d163a44/base/message_loop/message_pump_default.cc#L35)
2. 每一次循环会检查消息队列中是否有任务存在；如果有则取出第一个任务执行，执行完进入下一层循环；如果没有则进入休眠状态
3. 其他所有线程（包括其他进程的线程）可以随时向消息队列添加任务。新任务会加到消息队列的末尾。在添加新任务时，如果主线程是休眠状态，则会被唤醒继续循环拿取任务

上述过程即**事件循环（消息循环）**

## 3. 异步

代码执行过程中，会遇到无法立即处理的任务，如

- 计时完成后需要执行的任务 - setTimeout、setInterval
- 网络通信完成后需要执行的任务 - XHR、Fetch
- 用户操作后需要执行的任务 - addEventListener

如果让渲染主线程等待这些任务的时机到达，就会导致主线程长期处于**阻塞**状态，进而可能浏览器卡死。

渲染主线程上面有提到任务繁重，是经不住这样阻塞的，所以浏览器使用**异步**的方式处理，达到使**渲染主线程永不阻塞**的目的

![异步 1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/browser/%E8%AE%A1%E6%97%B6%E7%BA%BF%E7%A8%8B%20eg1.svg)

## 4. JavaScript 阻碍渲染

```html
<h1>hello</h1>
<button>btn</button>
<script>
  const h1 = document.querySelector("h1");
  const btn = document.querySelector("button");

  // 死循环
  const delay = (duration) => {
    let start = Date.now();
    while (Date.now() - start < duration) {}
  };

  btn.onclick = () => {
    h1.textContent = "olu";
    delay(2000);
  };
</script>
```

1. 渲染主线程执行全局 js，此时消息队列为空
2. 交互线程：监听按钮点击事件，点击后执行函数
3. 用户点击按钮
4. 点击事件函数放入消息队列
5. 消息队列中的函数移入到渲染主线程中，执行函数
   1. 设置 dom 文本（属性值已更改，页面未重新绘制）
   2. 文本更改，产生**绘制**任务，绘制任务加入消息队列排队
   3. 继续运行函数即 delay 2000ms
   4. 点击事件任务执行结束（渲染主线程空闲）
6. 消息队列中的绘制任务移入渲染主线程，页面绘制文案 hello => olu

综上就是`执行 js` 和`渲染`都在渲染主线程中处理，单线程需要排队

## 5. 任务优先级

任务没有优先级，在消息队列中先进先出

消息队列有优先级

- 每个任务有一个任务类型，**同一类型的任务必须在一个队列**，**不同类型的任务可以分属不同的队列**。在一次事件循环中，浏览器可以根据实际情况从不同队列中取出任务执行
- 浏览器必须准备好一个**微队列**，微队列中的任务优先所有其他任务执行

chromium task type:

> [https://github.com/chromium/chromium/blob/9cfb77e79563e59d3007a6f28c7c0f266274f033/third_party/blink/public/platform/task_type.h#L24](https://github.com/chromium/chromium/blob/9cfb77e79563e59d3007a6f28c7c0f266274f033/third_party/blink/public/platform/task_type.h#L24)

perform a microtask checkpoint:

> [https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint](https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint)

### 5.1 Chrome 队列

- 延时队列：用于存放计时器到达后的回调任务，优先级 - 中
- 交互队列：用于存放用户操作后产生的事件处理任务，优先级 - 高
- 微队列：用于存放需要最快执行的任务，优先级 - 最高

添加任务到微队列的方式：

- Promise
- MutationObserver

当渲染主线程空闲的时候，会查看微队列是否有事件存在

- 存在：执行微队列中的事件回调，直到微队列为空，再去其他任务队列取出第 1 个事件加入主线程执行
- 不存在：去其他任务队列中取 1 个事件，并把对应回调加入当前主线程执行

## 6. 总结

### 6.1 异步

JavaScript 是一门单线程语言，因为它运行在浏览器的渲染主线程中，渲染主线程是唯一的

渲染主线程承担诸多工作，如渲染页面、执行 js 等

如果使用同步的方式，极大可能导致主线程产生阻塞，进而导致消息队列中其他任务无法得到执行，消耗大量时间，页面也无法及时更新，造成卡死现象

采用异步方式，当任务如计时器、网络、事件监听等发生时，主线程将任务交给其他线程处理，自身立即结束任务的执行，执行后续代码。当其他线程完成时，将事先传递的回调函数包装成威武，加入到消息队列的末尾排队，等待主线程调度执行

这样就保证浏览器永不阻塞，最大限度保证单线程的流程运行

:::tip

单线程是异步产生的原因

:::

### 6.2 事件循环

事件循环又称消息循环，是浏览器渲染主线程的工作方式

在 Chrome 源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，其他线程只需在合适的时机将任务加到队列末尾

过去消息队列简单分为宏队列和微队列，目前无法满足复杂的浏览器环境

W3C 最新解释为，每个任务有不同类型，同类型任务必须在同一个队列，不同任务可以属于不同队列。不同任务队列有不同的优先级。在一次事件循环中，浏览器自行决定拿取队列的任务，但是必须有一个微队列，微队列任务优先级最高，优先调度执行（用户交互队列优先级高于延时队列）

:::tip

事件循环是异步的实现方式

:::

### 6.3 计时器不可以精准计时

- 计算机硬件没有原子钟，无法精确计时
- 操作系统的计时函数本身有少量偏差， js 计时器最终调用的是操作系统的函数，携带偏差
- W3C 标准，浏览器实现计时器，如果嵌套层级超过 5 层，会有 4 毫秒的最少时间，故计时时间少于 4 毫秒时也会有偏差
- 受事件循环影响，计时器的回调函数只能在主线程空闲时运行，故又有偏差

[https://github.com/chromium/chromium/blob/7724fb4613ca1ba2a2b28a8a41673a1ddc6dd306/third_party/blink/renderer/modules/scheduler/dom_timer.cc#L52](https://github.com/chromium/chromium/blob/7724fb4613ca1ba2a2b28a8a41673a1ddc6dd306/third_party/blink/renderer/modules/scheduler/dom_timer.cc#L52)

[https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html)
