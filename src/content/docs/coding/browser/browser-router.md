---
id: browser-router
title: 前端路由
tags:
  - 路由
  - Hash 路由
  - History 路由
---

## 1. 路由是什么

URL 到对应处理程序的映射

web 路由可以由**服务端**或**前端**实现，根据实现方式分为**Hash 路由** 和 **History 路由**

前端路由 相对于 服务端路由，可以在页面无刷新的情况下进行页面切换，故产生了无刷新的单页应用开发模式 SPA

## 2. Hash 路由

在 URI 的组成中， fragment 是 Hash 路由所读取的内容

fragment 本质是用来标识次级资源，具有以下特点

- 修改 fragment 内容不会触发网页重载
- 修改 fragment 内容会改变浏览器历史记录
- 修改 fragment 内容会触发浏览器 onhashchange 事件

### 2.1 实现原理

可以监听 hashchange 事件监听页面 hash 变化，解析 hash 值来切换页面

```js
/**
 * 解析 hash
 */
const parseHash = hash => {
  // 去除 # 号
  hash = hash.replace(/^#/, "")

  const parsed = hash.split("?")

  // 返回 hash path 和 query
  return {
    pathname: parsed[0],
    search: parsed[1]
  }
}

const onHashChange = () => {
  const {pathname, search} = parseHash(location.hash)

  // 切换页面内容
  switch(pathname) {
    case "/home":
      document.body.innerHTML = `olu cool`
      return
    default:
      return
  }
}

window.addEventListener("hashchange", onHashChange)
```

### 2.2 优点

- 兼容性好
- 无需服务端配置

### 2.3 缺点

- 服务端无法获取 hash 部分内容
- 可能会和锚点功能冲突
- SEO 不友好

## 3. History 路由

通过浏览器原生提供的操作 History 的能力实现路由功能

### 3.1 实现原理

依赖 History API 中的 pushState 方法 和 replaceState 方法 以及 popstate 事件

- history.pushState：将给定的 Data 添加到当前标签页的历史记录栈中
- history.replaceState：将给定的 Data 更新到历史记录栈中最新的一条记录中
- popstate: 监听历史记录的变化

```js
const onHistoryChange = () => {
  const {pathname, search} = location

  // 根据不同页面执行不同内容
  switch (pathname) {
    case '/home':
      document.body.innerHTML = `olu cool, ${search.replace(/^\?/, "")}`
      return
    default:
      document.body.innerHTML = 'olu cute'
      return
  }
}

// 页面跳转
const pushState = (target) => {
  history.pushState(null, '', target)
  onHistoryChange()
}

// xx 秒后路由跳转
setTimeout(() => {
  pushState("/home?name=oluCool")
}, 2000)

setTimeout(() => {
  history.back()
}, 6000)

window.addEventListener("popstate", onHistoryChange)
```

### 3.2 优点

- 服务端可以获取到完整的链接和参数
- 前端监控友好
- SEO 相对 Hash 友好

### 3.3 缺点

- 兼容性稍弱
- 需要服务端额外配置（各 path 均指向同一个 HTML）

## 4. 前端路由的优缺点

### 4.1 优点

- 无刷新切换内容，体验更好
- 减轻服务端压力

### 4.2 缺点

- 初次加载耗时长
- SEO 效果较差
