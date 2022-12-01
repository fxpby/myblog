---
id: browser-storage-caching-scheme
title: 浏览器存储型缓存方案
tags:
  - 缓存
  - cookie
  - session storage
  - local storage
  - indexedDB
  - web storage
---

## 网站登录的存储逻辑

用户从客户端输入账号密码登录后，前端将数据发送给服务端验证，如果服务端判断用户存在且账号密码正确，则向客户端返回响应并颁发有效的 token 信息，校验失败则返回错误信息

当唯一有效的 token 返回到客户端后，后面所有需要登录访问的接口请求客户端都需要携带 token 给服务端判断用户登录的有效性，所以 token 在客户端的存储和传输是用户不需要重复登录的关键

### 服务端自动植入

服务端登录接口在前端的响应报头中设置首部字段 set-cookie 来将 token 信息植入到浏览器 cookie 中

set-cookie 指令值包含了必选项 `<cookie-name>=<cookie-value>` 值和名的形式，还包括可选项 Path（路径）、Domain（域名）、Max-Age(有效时间)等，用分号分割

服务端可以返回多个 set-cookie 指令来达到设置多个 cookie 目的，可以在开发者工具 Application 面板中查看当前网站设置的 cookie 值

### 前端手动存储

和服务端自动植入相比，前端存储的方式不受限于浏览器环境（APP或小程序等没有浏览器 cookie 的环境下也可以）

服务端登录接口成功后将用户的 token 信息通过响应实体的方式返回给前端，前端拿到 token 信息后通过前端存储方法将数据持久化缓存，退出后手动清除，调用后端接口时手动将 token 传递给服务端

```js
import axios from 'axios'

export const http = params => {
  const instance = axios.create({
    baseURL: 'https://olumel.top'
  })

  const token = localStorage.getItem('token')

  return instance({
    url: '/xxx/xxx',
    method: 'post',
    data: params,
    headers: {
      'x-token': token
    }
  })
}
```

### 浏览器存储性缓存方案

在浏览器环境中，不同的存储性缓存应该视场景使用合适的缓存方案

#### Cookie

Cookie 最初不是为了做浏览器存储的功能的，而是为了辨别用户身份，实现页面间状态的维持和传递

Cookie 存储空间很小，4kb, 这点限制它不能用于较大容量数据的存储

不建议将非用户身份类的数据存储在 cookie 中，因为 cookie 在通域下会伴随着每一次资源请求的请求报头传递到服务端进行验证，如果在 cookie 中存储了大量非必要的数据，每次请求响应会造成很多无效资源传输及性能浪费

cookie 无法跨域携带，利用这一特点可以使用在 CDN 域名上。比如如果 CDN 资源和主站采用了同样的域名，那 cookie 传输就会造成巨大的性能浪费。规避这个问题的方法就是使 CDN 的域名和主站区分。如掘金的 CDN 域名为 `https://lf3-cdn-tos.bytescm.com`，主站的域名为 `https://juejin.cn`

此外日常在使用 cookie 存储相关 API 不是十分方便

```js
// 存储 cookie
document.cookie = 'name=olumel; domain=olumel.top'

// 读取 cookie
// 只能通过 document.cookie 读取所有 cookie 并自行进行字符串截取，使用不友好

// 删除 cookie
let date = new Date()
date.setTime(date.getTime() - 10000)
document.cookie = `name=olumel; domain=olumel.top; expires=${date.toGMTString()}`
```

平时我们会选择一款封装 cookie 的库 js-cookie

```js
import Cookies from 'js-cookie'

// 存储 cookie
Cookies.set('name', 'olumel', { domain: 'juejin.cn' })

// 读取 cookie
Cookies.get('name')

// 删除 cookie
Cookies.remove('name')
```

#### Web Storage

Web Storage 是 HTML5 推出的浏览器存储机制，可分为 Session Storage 和 Local Storage

##### Session Storage

- 临时性本地存储
- 生命周期存在于网页会话期间，网页关闭后会自动释放

##### Local Storage

- 存储于浏览器本地，除非手动删除或过期，会一直存在，属于持久性缓存

在存储简单类型数据时，没啥问题，但是存储 `Object` 类型时，存储的数据最终都会转化成字符串类型

如果没有采用序列号方法 `JSON.stringify` 转化为字符串对象，最终获取的值会变成 `[Object Object]`

```js
let userInfo = { name: 'olu', age: 18 }

// 存 序列号
localStorage.setItem('userInfo', JSON.stringify(userInfo))

// 取 反序列号
const result = JSON.parse(localStorage.getItem('userInfo'))
```

所以平时使用还是需要进行二次封装

```js
let storage = {
  // 存储
  setStorage: function (key, value, duration) {
    let data = {
      value,
      expiryTime: !duration || isNaN(duration) ? 0 : this.getCurrentTimeStamp() + parseInt(duration)
    }

    localStorage[key] = JSON.stringify(data) // 序列化
  },

  // 读取
  getStorage: function (key) {
    let data = localStorage[key]

    if (!data || data === 'null') {
      return null
    }

    let now = this.getCurrentTimeStamp()
    let obj

    try {
      obj = JSON.parse(data) // 反序列化
    } catch (e) {
      return null
    }

    if (obj.expiryTime === 0 || obj.expiryTime > now) {
      return obj.value
    }
    
    return null
  },

  // 删除
  removeStorage: function (key) {
    localStorage.removeItem(key)
  },

  // 获取时间戳
  getCurrentTimeStamp: function () {
    return Date.parse(new Date())
  }
}
```

##### IndexedDB

虽然 Web Storage 可以让我们进行网页间数据的临时存储或持久化存储，但是容量还是有限

IndexedDB 是一个大规模的 NoSQL 存储系统，几乎可以存储浏览器中任何数据内容，包括二进制数据（ArrayBuffer对象和 Blob 对象），可以存储不少于 250M 的数据

在使用 IndexedDB 之前，需要判断浏览器是否支持

```js
if (!('indexedDB' in window)) {
  console.log('浏览器不支持 indexedDB')
  return
}
```
