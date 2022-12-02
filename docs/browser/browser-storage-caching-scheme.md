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

## 1.网站登录的存储逻辑

用户从客户端输入账号密码登录后，前端将数据发送给服务端验证，如果服务端判断用户存在且账号密码正确，则向客户端返回响应并颁发有效的 token 信息，校验失败则返回错误信息

当唯一有效的 token 返回到客户端后，后面所有需要登录访问的接口请求客户端都需要携带 token 给服务端判断用户登录的有效性，所以 token 在客户端的存储和传输是用户不需要重复登录的关键

### 1.1 服务端自动植入

服务端登录接口在前端的响应报头中设置首部字段 set-cookie 来将 token 信息植入到浏览器 cookie 中

set-cookie 指令值包含了必选项 `<cookie-name>=<cookie-value>` 值和名的形式，还包括可选项 Path（路径）、Domain（域名）、Max-Age(有效时间)等，用分号分割

服务端可以返回多个 set-cookie 指令来达到设置多个 cookie 目的，可以在开发者工具 Application 面板中查看当前网站设置的 cookie 值

### 1.2 前端手动存储

和服务端自动植入相比，前端存储的方式不受限于浏览器环境（APP 或小程序等没有浏览器 cookie 的环境下也可以）

服务端登录接口成功后将用户的 token 信息通过响应实体的方式返回给前端，前端拿到 token 信息后通过前端存储方法将数据持久化缓存，退出后手动清除，调用后端接口时手动将 token 传递给服务端

```js
import axios from "axios";

export const http = (params) => {
  const instance = axios.create({
    baseURL: "https://olumel.top",
  });

  const token = localStorage.getItem("token");

  return instance({
    url: "/xxx/xxx",
    method: "post",
    data: params,
    headers: {
      "x-token": token,
    },
  });
};
```

## 2. 浏览器存储性缓存方案

在浏览器环境中，不同的存储性缓存应该视场景使用合适的缓存方案

### 2.1 Cookie

通常由服务端生成，发生到客户端，客户端存储后在请求对应服务端时携带，可以用于标识客户端，能够让使用无状态 HTTP 协议的服务器记住状态信息

Cookie 最初不是为了做浏览器存储的功能的，而是为了辨别用户身份，实现页面间状态的维持和传递，会随请求发送给服务器

#### 2.1.1 使用场景

- 会话状态管理（用户登录状态、购物车、游戏分数等）
- 个性化设置（用户自定义设置、主题等）
- 浏览器行为跟踪（分析用户行为等）

#### 2.1.2 相关属性

收到 `HTTP` 请求时，服务端可以通过在响应头中增加 `Set-Cookie` 字段告诉客户端存储对应的 `cookie` ，前端可以通过 `JavaScript` 来设置 `cookie` 。之后向相同的服务端发送请求时，存储的 `cookie` 会作为请求头 `Cookie` 字段的值一起发送。可以通过不同属性的设置来让 `cookie` 拥有不同的特性

- `Expires`: 用于设置过期时间，`Max-Age` 用于设置有效时间段，过期后 `cookie` 会被删除
- `Secure`: 代表 `cookie` 只会随 `HTTPS` 请求发送
- `HttpOnly`: 代表 `cookie` 只用于发送给服务端，无法被 `JavaScript` 访问
- `Domain`: 设置可接收 `cookie` 的 `hosts` ，不设置则默认为当前 `host` 。如果设置了 `Domain` ，子域名也被包含在内
- `Path`: 设置可接收 `cookie` 的 `URL path`，只有包含指定路径的 `url` 请求才会带上 `cookie`。如果设置为 `"/"`, 则子路径也包含在内
- `SameSite`: 表示跨域时 `cookie` 的处理策略，包括 `Strict` ， `Lax` 和 `None`
  - `Strcit`: `cookie` 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送
  - `Lax`: `cookie` 允许与顶级导航一起发送，并将与第三方网站发起的 `GET` 请求一起发送（浏览器默认值）
  - `None`: `cookie` 将在所有上下文中发送，即**允许跨站发送**。使用 `None` 时，需在最新的浏览器版本中同时使用 `Secure` 属性，否则会报错

#### 2.1.3 优点

- 简单易用
- 不占用服务器资源
- 可设置过期时间，提升安全性

#### 2.1.4 缺点

- cookie 会被添加到每个请求中，增加了流量消耗
- cookie 在 HTTP 请求中是明文传输，不够安全，使用 HTTPS 可避免该问题
- cookie 大小限制 4KB，复杂场景不够用
- cookie 无法跨域携带，利用这一特点可以使用在 CDN 域名上。比如如果 CDN 资源和主站采用了同样的域名，那 cookie 传输就会造成巨大的性能浪费。规避这个问题的方法就是使 CDN 的域名和主站区分。如掘金的 CDN 域名为 `https://lf3-cdn-tos.bytescm.com`，主站的域名为 `https://juejin.cn`

#### 2.1.5 使用

此外日常在使用 cookie 存储相关 API 不是十分方便

```js
// 存储 cookie
document.cookie = "name=olumel; domain=olumel.top";

// 读取 cookie
// 只能通过 document.cookie 读取所有 cookie 并自行进行字符串截取，使用不友好

// 删除 cookie
let date = new Date();
date.setTime(date.getTime() - 10000);
document.cookie = `name=olumel; domain=olumel.top; expires=${date.toGMTString()}`;
```

#### 2.1.6 三方库 js-cookie

平时我们会选择一款封装 cookie 的库 js-cookie

```js
import Cookies from "js-cookie";

// 存储 cookie
Cookies.set("name", "olumel", { domain: "juejin.cn" });

// 读取 cookie
Cookies.get("name");

// 删除 cookie
Cookies.remove("name");
```

### 2.2 Web Storage

`Web Storage` 是 `HTML5` 推出的浏览器存储机制，可分为 `Session Storage` 和 `Local Storage`

#### 2.2.1 Session Storage

Session Storage 对象是当前源（和同源策略中的源一致）下，存储会话数据的 Storage 实例。生命周期和当前页面保持一致，页面关闭 sessionStorage 会被情况。以键值对方式存储，键值以字符串存储

##### 2.2.1.1 特点

- 只能被当前标签页访问
- 页面触发打开新页面时，会复制会话上下文作为新会话的上下文
- 生命周期存在于网页会话期间，关闭浏览器或标签页清除 sessionStorage, 刷新标签页或者恢复浏览器页面时保留 sessionStorage
- 复制标签页（浏览器标签右键菜单的复制，不是复制 URL ）时会复制当前 sessionStorage 到新的标签页中

##### 2.2.1.2 使用场景

适合存储生命周期和它同步的会话级别信息

#### 2.2.2 Local Storage

获取当前源存储的 Storage 对象，存储的数据可以跨浏览器会话访问

在存储简单类型数据时，没啥问题，但是存储 `Object` 类型时，存储的数据最终都会转化成字符串类型

如果没有采用序列号方法 `JSON.stringify` 转化为字符串对象，最终获取的值会变成 `[Object Object]`

```js
let userInfo = { name: "olu", age: 18 };

// 存 序列号
localStorage.setItem("userInfo", JSON.stringify(userInfo));

// 取 反序列号
const result = JSON.parse(localStorage.getItem("userInfo"));
```

##### 2.2.2.1 二次封装

所以平时使用还是需要进行二次封装

```js
let storage = {
  // 存储
  setStorage: function (key, value, duration) {
    let data = {
      value,
      expiryTime:
        !duration || isNaN(duration)
          ? 0
          : this.getCurrentTimeStamp() + parseInt(duration),
    };

    localStorage[key] = JSON.stringify(data); // 序列化
  },

  // 读取
  getStorage: function (key) {
    let data = localStorage[key];

    if (!data || data === "null") {
      return null;
    }

    let now = this.getCurrentTimeStamp();
    let obj;

    try {
      obj = JSON.parse(data); // 反序列化
    } catch (e) {
      return null;
    }

    if (obj.expiryTime === 0 || obj.expiryTime > now) {
      return obj.value;
    }

    return null;
  },

  // 删除
  removeStorage: function (key) {
    localStorage.removeItem(key);
  },

  // 获取时间戳
  getCurrentTimeStamp: function () {
    return Date.parse(new Date());
  },
};
```

##### 2.2.2.2 和 sessionStorage 的区别

- localStorage 没有过期时间（隐私窗口中的 localStorage 在最后一个隐私窗口关闭时会被清空）
- StorageEvent 只能监听同源页面的 localStorage 的改变，无法监听 sessionStorage 的改变

##### 2.2.2.3 使用场景

一般场景 cookie 无法胜任的可以用简单的键值对来存取的数据存储任务，都可以使用 localStorage 处理

#### 2.2.3 IndexedDB

虽然 Web Storage 可以让我们进行网页间数据的临时存储或持久化存储，但是容量还是有限

IndexedDB 是一个大规模的 NoSQL 存储系统，几乎可以存储浏览器中任何数据内容，包括二进制数据（ArrayBuffer 对象和 Blob 对象），可以存储不少于 250M 的数据, 其 API 使用索引实现对数据的高性能搜索，使用上接近于数据库，可以解决 Web Storage 存储大量的结构化数据时存储容量小，搜索速度慢等问题

#### 2.2.3.1 特点

- 键值对存储
- 遵循同源策略
- 支持二进制存储，不仅支持字符串还可以存储 File 或 Blob 对象
- 同步与异步: 默认操作为异步操作，也有用于 web worker 的同步 API
- 存储空间大: 最大存储空间是动态的，取决于硬盘大小，最大空间取决于浏览器的实现

#### 2.2.3.2 使用场景

- 存储数据量很大
- 存储数据为结构化数据
- 对数据搜索有性能要求

#### 2.2.3.3 判断支持性

在使用 IndexedDB 之前，需要判断浏览器是否支持

```js
if (!("indexedDB" in window)) {
  console.log("浏览器不支持 indexedDB");
  return;
}
```

浏览器支持我们就可以对其进行增删改查操作了

#### 2.2.3.4 创建数据库

```js
let idb;

// 打开名为 olu 且 版本号为 1 的数据库，如果不存在就自动创建
let request = window.indexedDB.open("olu", 1);

// 错误回调
request.onerror = function (event) {
  console.log("open indexedDB error");
};

// 成功回调
request.onsuccess = function (event) {
  idb = request.result;
  console.log("open indexedDB success");
};
```

#### 2.2.3.5 创建表

新建数据库会触发版本变化的 onupgradeneeded 方法（此时版本从无到有）

```js
request.onupgradeneeded = function (e) {
  idb = e.target.result;
  console.log("running onupgradeneeded");

  // 新建对象表时，应先判断该表是否存在
  if (!idb.objectStoreNames.contains("store")) {
    // 创建名为 store 的表，以 id 为主键
    let storeOS = idb.createObjectStore("store", { keyPath: "id" });
  }
};
```

#### 2.2.3.6 新增记录

创建完表后，就可以进行新增操作

```js
function addItem(item) {
  // 新增时需指定表名和操作模式
  let transaction = idb.transaction(["store"], "readwrite");
  // 获取表对象
  let store = transaction.objectStore("store");
  // 调用 add 方法新增数据
  store.add(item);
}

let data = {
  id: 1,
  name: "test",
  age: "18",
};

addItem(data);
```

#### 2.2.3.7 查询记录

通过主键 id 可以获取到想要的数据

```js
function readItem(id) {
  // 创建事务，指定表名
  let transaction = idb.transaction(["store"]);
  // 获取表对象
  let store = transaction.objectStore("store");
  // 调用 get 方法获取数据
  let requestStore = store.get(id);

  requestStore.onsuccess = function () {
    if (requestStore.result) {
      console.log(requestStore.result);
    }
  };
}
readItem(1);
```

#### 2.2.3.8 三方库 idb

也可以使用流行的 IndexedDB 库使我们日常开发更加丝滑，比如 [idb](https://www.npmjs.com/package/idb)

```js
import { openDB } from "idb";
const dbPromise = openDB("olu", 1, {
  upgrade(db) {
    db.createObjectStore("store", { keyPath: "id" });
  },
});

export async function add(val) {
  return (await dbPromise).add("store", val);
}

export async function get(key) {
  return (await dbPromise).get("store", key);
}
```

需要注意的是 IndexedDB 的兼容性问题

### 2.3 cookie、Web Storage 与 IndexedDB 异同

- 相同点：都是保存数据于浏览器端，遵循同源策略
- 不同点：生命周期，存储空间最大值和与服务端交互方式

| 特性             | cookie                                            | sessionStorage                    | localStorage | IndexedDB                          |
| ---------------- | ------------------------------------------------- | --------------------------------- | ------------ | ---------------------------------- |
| 生命周期         | 可设置失效时间，默认为浏览器会话结束时清除 cookie | 页面会话结束时清除 sessionStorage | 持久存储     | 永久保存                           |
| 存储空间最大值   | 4 KB                                              | 一般为 5 MB                       | 同 左        | 取决于用户设备容量和浏览器限额设置 |
| 是否与服务端交互 | 随请求发送给服务端，可设置多种属性控制            | 保存在浏览器端，不与服务端交互    | 同 左        | 同 左                              |
