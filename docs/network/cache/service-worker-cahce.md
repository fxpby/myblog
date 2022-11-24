---
id: service-worker-cahce
title: Service Worker
tags:
  - cache
  - 缓存
  - Service Worker
---

## 基本概念

Service Worker 本质是一种使用 js 编写的脚本，作为一个独立的线程，可以使应用程序能够控制网络请求，缓存请求来提高性能，并且提供对缓存内容的离线访问。

Service Worker 缓存是**持久的**，**独立于**浏览器缓存或网络状态

![service-worker-flow](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/cache/service-worker-flow.png)

Service Worker 依赖两个 API 使应用程序离线工作：

- Cache 应用程序数据的持久性内容存储
- Fetch 一种从网络检索内容的标准方法

## 生命周期与缓存

生命周期如下：

- 注册
- 安装
- 激活

### 注册

通常我们会使用下面这种方式注册

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/test.js').then((registration) => {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch((error) => {
    console.log('Service worker registration failed, error:', error)
  })
}
```

先判断浏览器是否支持 serviceWorker API, 支持的话注册时会去读取对应的 test.js 文件，默认情况下 Service Worker 的作用范围不能超出脚本所在路径，如果脚本放在根目录下，就代表根目录下的所有请求都可以代理，也可以在注册时指定对应的作用域：

```js
navigator.serviceWorker.register('/test.js', {
  scope: '/xxx'
})
```

这样的话 Service Worker 只会代理 xxx 目录下的请求

### 安装和激活

浏览器执行注册流程之后，在 test.js 中就会尝试执行 Service Worker 的 install 安装事件，这个安装事件只会触发一次，即首次注册或有新的 Service Worker 之后执行。在安装事件中可以下载并缓存应用的部分内容，来让用户在下次访问时立即得到加载

```js
// test.js

// 此版本的 Service Worker 中使用的两个缓存的名称，更新任意一个缓存名称，都将再次触发安装事件
const PRECACHE = 'precache-v1'
const RUNTIME = 'runtime'

// 想被缓存的本地资源列表
const PRECACHE_URLS = [
    'index.html',
    './', // index.html 的别名
    'styles.css',
    '../../styles/main.css',
    'demo.js'
]

// 安装事件中缓存预先我们想要缓存的资源
self.addEventListener('install', event => {
    event.waitUntil(
        // 调用浏览器 CacheStorage open 方法
        caches.open(PRECACHE)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(self.skipWaiting()) // self.skipWaiting 可以阻止等待，让新的 Service Worker 安装成功后立即激活
    )
})
```

上面是 Chrome 官网的例子，在安装事件中会缓存想要缓存的资源，成功安装 Service Worker 后，会过渡到激活阶段。如果有前一个 Service Worker 控制的打开页面存在，则新的 Service Worker 会进入一个 waiting 状态。新的 service Worker 仅在不再加载任何仍在使用旧 Service Worker 的页面时激活，这一步确保在任何给定时间只有一个版本的 Service Worker 在运行

也可以调用 skipWaiting() 方法阻止 Service Worker 等待，让新的 Service Worker 安装成功后立即激活

当新的 Service Worker 激活时，会触发 active 事件，我们可以用 addEventListener 来监听 activate 事件。一般我们会在这个事件中清理过期的缓存

```js
// test.js

// active 事件负责清理过期缓存
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME]

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        // 删除不存在的过期缓存
        return caches.delete(cacheToDelete)
      }))
    }).then(() => self.clients.claim()) // 启用新的 Service Worker
  )
})
```

上面在 active 生命周期中通过调用浏览器的 Cache API 的 delete 方法将过期的缓存进行了删除操作，防止过期缓存影响现有功能

一旦激活，Service Worker 将控制在其范围内加载的所有页面，新的 Service Worker 只会在关闭并重新打开应用时启用，或者调用 clients.claim() 方法

## 优先从缓存中获取资源

如果想让网页离线可用，拦截网络请求并从缓存中获取资源是最主要的方法，前提是缓存里已经存在了要访问的资源

一般采用**缓存回退网络**的方式进行编写，即拦截请求时如果缓存中存在该资源就直接获取，否则需向服务端请求资源并进行缓存

```js
// test.js

// fetch 处理事件会处理同源资源的响应，如果缓存中存在，则会直接返回缓存资源
self.addEventListener('fetch', event => {
  // 跳过跨域请求
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      // 从缓存中匹配请求资源
      caches.match(event.request).then(cacheResponse => {
        // 存在直接返回
        if (cacheResponse) {
          return cacheResponse
        }
        // 不存在回退网络请求
        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // 拷贝响应资源存入 runtime 缓存
            return cache.put(event.request, response.clone()).then(() =>{
              return response
            })
          })
        })
      })
    )
  }
})
```

通过监听 fetch 事件处理程序进行资源请求的拦截操作，实现了 Service Worker 基本的优先从缓存中获取资源的功能

:::caution 兼容性
Service Worker 的浏览器兼容性不是很好，低版本浏览器需要兼容处理，且出于安全考虑，Service worker 只能在 https 和 localhost 下使用
:::
