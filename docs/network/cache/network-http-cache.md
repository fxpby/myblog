---
id: network-http-cache
title: 浏览器 HTTP 缓存机制
tags:
  - cache
  - 缓存
---

## HTTP 缓存 - 前置知识点

了解一些和缓存相关的首部字段名

### Pragma

- HTTP / 1.0 产物
- 只有 no-cache 一个可选值

每次使用缓存资源之前都必须先向服务器确认有效性，不会命中强缓存

### Expires

属于实体首部字段；由服务端返回的资源过期时间（GMT日期格式/时间戳），若用户本地时间在过期时间前，则不发送请求命中缓存直接从本地获取资源; 在此时间之后，响应资源过期

```js
Expires: Sat, 02 Sep 2023 04:53:04 GMT
```

- HTTP / 1.0 产物，给出了缓存过期的`绝对时间`
- 优先级低于 `Cache-Control: max-age`
- 缺点：使用本地时间判断是否过期，本地时间可修改不一定准确，会和服务器时间不一致，不推荐使用

### Cache-Control

用于页面缓存的通用消息头字段，可以通过指定指令来实现缓存机制；可以组合多种指令，多个指令之间可以通过 `,` 分隔，属于通用首部字段

```js
Cache-Control: max-age:3600, s-maxage=3600, public
Cache-Control: no-cache
```

- HTTP / 1.1 产物
- 优先级高于 `Expires`
- 正确区分 `no-cache` / `no-store` 作用

#### max-age

`max-age` 指令给出缓存过期的**相对时间**，即缓存存储的最大时长，单位秒，与 `Expires` 同时出现时，`max-age` **优先级更高**，一般为了做向下兼容，和 `Expires` 经常都出现在响应首部中.

`max-age` 也可以出现在请求首部中，用来告知服务器客户端希望接收一个存在时间（age）不大于多少秒的资源

#### s-maxage

`s-maxage` 与 max-age 用法一致，但只适用于代理服务器（公共缓存服务器），比如资源从源服务器发出后被中间的代理服务器接收并缓存，`源服务器 => 代理服务器 => 客户端`;

使用 `s-maxage` 后，代理服务器会直接忽略 `Expires` 和 `max-age` 指令的值

#### public

`public` 指令表示该资源可以被任何节点缓存（包括客户端和代理服务器）

#### private

`private` 指令标识该资源只提供给客户端缓存，代理服务器不会进行缓存（设置 `private` 指令后，`s-maxage` 指令将被忽略）

#### no-cache

`no-cache` 指令请求和响应中都可以使用，在请求首部中被使用时表示告知（代理）服务器不直接使用缓存，强制客户端向服务器发起请求（禁用强缓存，可以用协商缓存）

在响应首部中被返回时，表示客户端可以缓存资源，但**每次使用缓存资源之前都必须先向服务器确认有效性**（Chrome硬性重新加载会在请求首部加上 `Pragma:no-cache` 和 `Cache-Control:no-cache`）

```html
<!-- 可以通过在代码里加入meta标签来修改资源的请求首部 -->
<meta http-equiv="Cache-Control" content="no-cache" />
```

#### no-store

`no-store` 禁止一切缓存，协商缓存也不可用，请求和响应中都可以使用

### Last-Modified 和 If-Modified-Since

`Last-Modified` 属于`响应首部字段`，代表资源的最后修改时间。如果资源请求的响应头中包含 `Last-Modified`, 客户端可以在后续请求的头中带上 `If-Modified-Since` 头来验证缓存；

如果在 `If-Modified-Since` 字段指定的时间之后`资源没有更新`即服务器判断资源最后修改时间一致，则返回 304 状态码 `304 Not Modified` 告知浏览器可以从本地读取缓存;

如果在 `If-Modified-Since` 字段指定的时间之后`资源发生了更新`，服务器会把更新的资源发送给浏览器(`状态码 200`)，并返回最新的 `Last-Modified`, 浏览器收到资源后会更新缓存的 `If-Modified-Since` 值

- 通过资源的最后修改时间来验证缓存
- 优先级低于 ETag / If-None-Match
- 缺点是只能精确到秒，如果 1s 内多次修改资源 Last-Modified 不会变化

```js
last-modified: Thu, 01 Sep 2022 19:09:52 GMT
if-modified-since: Thu, 01 Sep 2022 19:09:52 GMT
```

### ETag 与 If-None-Match

- 通过唯一标识来验证缓存
- 优先级高于 Last-Modified / If-Modified-Since

如果资源请求的响应头包含 ETag，客户端可以在后续请求的头中带上 If-None-Match 头来验证缓存。若服务器判断资源标识一致，返回 304 状态码告知浏览器可从本地读取缓存

唯一标识内容是由服务端生成算法决定的，可以是资源内容生成的哈希值，也可以是最后修改时间戳的哈希值。**ETag 标识改变并不代表资源文件改变**

`ETag` 在标识前加 `W/` 前缀标识用弱比较算法（`If-None-Match` 本身只用弱比较算法）
`ETag` 可以配合 `If-Match` 检测当前请求是否为最新版本，若资源不匹配返回`状态码 412` （`If-Match` 不加 `W/` 时使用强比较算法）

## HTTP 缓存 - 强缓存

## HTTP 缓存 - 协商缓存
