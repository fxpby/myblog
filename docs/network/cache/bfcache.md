---
id: bfcache
title: 往返缓存(Back/forward cache)
tags:
  - cache
  - 缓存
---

## bfcache 是什么

bfcache 是内存缓存，可在用户离开网页时存储网页（包括 JavaScript 堆）的完整快照。将整个页面保存在内存中后，用户决定返回时，浏览器可以迅速恢复页面

## bfcache 有什么用

- 启用 bfcache："即时"加载上一页，整个网页从内存中恢复，无需联网
- 不启用 bfcache: 重新发起请求加载页面，根据该网页的缓存策略加载相关资源

## bfcache 工作原理

### 页面生命周期

当用户尝试离开页面时，将触发以下事件：

- `beforeunload`：用户可能会被提示确认导航。如果用户拒绝提示，导航将被中止。如果用户接受提示，导航将继续进行。
- `visibilitychange`（如果页面未被隐藏）：页面可见性发生变化。
- `pagehide`：如果浏览器尝试将页面存储在后退/前进缓存中。
- `freeze`：如果浏览器尝试将页面冻结并存储在后退/前进缓存中。
- `unload`：如果浏览器没有将页面存储在后退/前进缓存中，或者页面没有被冻结。

在 `freeze` 事件之后，页面被冻结，直到页面从后退/前进缓存中恢复，不会触发任何事件。如果在此期间与页面文档关联的任务或 Promise 准备就绪，它们将在页面从缓存中恢复后运行。

当页面处于缓存中时，用户代理随时可以决定从缓存中清除页面。在这种情况下，页面将被销毁，而不会触发任何通知。

当页面被导航回时，将触发以下事件：

- `resume`：页面从后退/前进缓存中恢复后。
- `pageshow`：页面被显示。
- `visibilitychange`（如果导航发生在可见选项卡中）：页面可见性发生变化。

上大佬的图，页面生命周期

![page-lifecycle](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/network/cahce/page-lifecycle.svg)

### bfcache 步骤

- 页面进入 bfcache：当从一个页面导航到另一个页面时，若浏览器支持 bfcache 且页面符合条件，浏览器会将页面状态保存到 bfcache 中，包括 DOM，css,js 等
- 缓存页面资源: 除了保存页面状态，浏览器还会将与页面相关的资源保存在内存中，以便在后续加载时可以快速访问，不用重新发送网络请求
- 从 bfcache 恢复页面：用户执行后退或前进操作，导航回之前访问过的页面时，浏览器从 bfcache 中快速恢复，无需重新发起网络请求或重新渲染页面，只需直接加载保存在内存中的页面状态
- 更新页面内容：如果页面在离开期间发生了变化，如用户在其他标签页中进行了操作，浏览器会重新加载页面，更新 bfcache 中的状态，从而确保页面的内容是最新的（不同浏览器存在差异，受浏览器性能以及内存管理策略影响，更新 bfcache 中页面内容频率会有不同）

## bfcache 相关 API

### pageshow、pagehide

`pageshow`事件在页面正常加载以及从 bfcache 中恢复时被触发

`pagehide`事件在页面被卸载时浏览器将页面存入 bfcache 时被触发
这俩事件都有一个 `persisted` 属性, 可以用来区分常规页面加载还是从 bfcache 恢复

```js
window.addEventListener('pageshow', (event) => {
  if(event.persisted){
    // 从bfcache恢复
  } else {
    // 常规页面加载
  }
});
```

```js
window.addEventListener('pagehide', (event) => {
  if(event.persisted){
    // 不能保证一定放入bfcache
  } else {
    // 一定未放入bfcache
  }
});
```

## 利用往返缓存进行优化

### 不使用 unload 事件

unload 事件早于 bfcache，触发 unload 事件后页面将不会继续存在
可以使用 `pagehide` 事件替代，`pagehide` 会在每次 `unload` 事件触发时被触发，页面缓存到 bfcache 时也会触发

### 仅有条件地添加 beforeunload 事件监听

beforeunload 不会导致网页不符合在 Chrome 或 Safari 中使用 bfcache 的条件，但是会影响 Firefox 中不符合的条件

### WebSocket、WebRTC、IndexDB、页面有正在进行的fetch或XMLHttpRequest事件

最好在页面 pagehide 或 freeze 事件期间关闭连接并删除或断开观察者连接，这样就可以安全地缓存页面不影响其他打开的选项卡

### 尽可能减少使用 Cache-Control: no-store

虽然 bfcache 不是 http 缓存，但是在网页资源本身（非子资源）上设置 `Cache-Control: no-store`时，浏览器会选择不将该网页存储在 bfcache 中
（单纯设置图片资源的cache-control不会影响）

### 避免使用 window.open

`window.open` 打开的页面及自身都不符合命中 bfcache 的条件，具有非空 `window.opener` 引用的页面不能安全地放入 bfcache 中，尽可能使用 `rel="noopener"` 去打开

### 测试 bfcache

<https://developer.chrome.com/docs/devtools/application/back-forward-cache/>

## reference

<https://webkit.org/blog/427/webkit-page-cache-i-the-basics/>
<https://docs.google.com/document/d/1JtDCN9A_1UBlDuwkjn1HWxdhQ1H2un9K4kyPLgBqJUc/edit?hl=zh-cn&pli=1>
<https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching>
<https://developer.chrome.com/articles/page-lifecycle-api/?hl=zh-cn>
<https://web.dev/articles/bfcache?hl=zh-cn>
<https://developer.chrome.com/docs/devtools/application/back-forward-cache/>
<https://juejin.cn/post/7291303339152654393>
<https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API>
