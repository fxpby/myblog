---
sidebar_position: 1
---

# 浏览器 HTTP 缓存机制

## HTTP 缓存 - 前置知识点

了解一些和缓存相关的首部字段名

![http-cache-header](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/cache/http-cache-header.png)

### Pragma

- `HTTP / 1.0` 产物
- 只有 `no-cache` 一个可选值, 不直接使用缓存，需向服务器发请求校验缓存新鲜度

控制缓存行为，和 `HTTP1.1` 中 `Cache-Control` 功能类似。每次使用缓存资源之前都必须先向服务器确认有效性，存在时不会命中强缓存

通常用来向后兼容基于 `HTTP/1.0` 的客户端

### Expires

属于实体首部字段；由服务端返回的资源过期时间（GMT 日期格式/时间戳），若用户本地时间在过期时间前，则不发送请求命中缓存直接从本地获取资源; 在此时间之后，响应资源过期

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

> 可根据资源的响应和 ip 等信息判断是源服务器还是代理服务器，经过代理服务器的资源一般会在响应头添加 age、via 等特殊的首部

使用 `s-maxage` 后，代理服务器会直接忽略 `Expires` 和 `max-age` 指令的值（如果没有设置 s-maxage 则代理服务器取 max-age）

`客户端` => `缓存失效，向代理服务器发起请求` => `代理服务器` => `缓存失效，向源服务器发起请求` => `源服务器`

举栗 1：设置 `Cache-Control: max-age=2592000,s-maxage=3600;` 即此资源会被浏览器缓存 30 天，该资源是一个 CDN 资源，属于代理服务器资源，在代理服务器中的缓存时间是 3600 秒，即 1 小时。所以在 30 天内请求都是直接走的浏览器缓存，超过 30 天后，浏览器缓存失效，向代理服务器发起请求，发现代理服务器的缓存也失效了，所以触发回源机制再去请求源服务器

举栗 2：设置 `Cache-Control: max-age=3600,s-maxage=2592000;` 即此资源会被浏览器缓存 1 小时，该资源是一个 CDN 资源，属于代理服务器资源，在代理服务器中的缓存时间是 30 天。即 1 天后浏览器缓存失效，向代理服务器发起请求，代理服务器缓存新鲜，命中代理服务器缓存

#### public

`public` 指令表示该资源可以被任何节点缓存（包括客户端和代理服务器）

#### private

`private` 指令标识该资源只提供给客户端缓存，代理服务器不会进行缓存（设置 `private` 指令后，`s-maxage` 指令将被忽略）

#### no-cache

`no-cache` 指令请求和响应中都可以使用，在请求首部中被使用时表示告知（代理）服务器不直接使用缓存，强制客户端向服务器发起请求（禁用强缓存，可以用协商缓存）

在响应首部中被返回时，表示客户端可以缓存资源，但**每次使用缓存资源之前都必须先向服务器确认有效性**（Chrome 硬性重新加载会在请求首部加上 `Pragma:no-cache` 和 `Cache-Control:no-cache`）

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
- 优先级低于 `ETag` / `If-None-Match`
- 缺点是只能精确到秒，如果 1s 内多次修改资源 `Last-Modified` 不会变化

```js
last-modified: Thu, 01 Sep 2022 19:09:52 GMT
if-modified-since: Thu, 01 Sep 2022 19:09:52 GMT
```

### ETag 与 If-None-Match

- 通过唯一标识来验证缓存
- 优先级高于 `Last-Modified` / `If-Modified-Since`

如果资源请求的`响应头`包含 `ETag`，客户端可以在后续请求的头中带上 If-None-Match 头来验证缓存。若服务器判断资源标识一致，返回 304 状态码告知浏览器可从本地读取缓存

唯一标识内容是由服务端生成算法决定的，可以是资源内容生成的哈希值，也可以是最后修改时间戳的哈希值。**ETag 标识改变并不代表资源文件改变**

`ETag` 在标识前加 `W/` 前缀标识用弱比较算法（`If-None-Match` 本身只用弱比较算法）
`ETag` 可以配合 `If-Match` 检测当前请求是否为最新版本，若资源不匹配返回`状态码 412` （`If-Match` 不加 `W/` 时使用强比较算法）

## HTTP 缓存 - 强缓存

### 强缓存的生成过程

![strong-cache-generation-process](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/cache/strong-cache-generation-process.png)

当浏览器发送 HTTP 请求时，会向浏览器进行一次询问是否有该资源的缓存，如果没有则向服务器发起请求，服务器接收请求后把资源返回给浏览器，浏览器再把该资源的响应数据存储到浏览器缓存中

我们访问 `https://www.baidu.com`,记录资源加载情况，然后刷新一次，比较两次资源加载

![strong-cache-1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/cache/strong-cache-1.png)

![strong-cache-2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/cache/strong-cache-2.png)

可以发现，第一次资源加载 543ms, 第二次 230ms, 时间减少了一半多。传输的数据从 977kb 降到了 93.8kb

还可以发现 `size` 列中很多项都变成了 `memory cache` 或 `disk cache`, 且`memory cache(内存缓存)` 的 `Time` 都是 0ms, `disk cache(磁盘缓存)` 的 `Time` 也仅有 几 ms

### 判断强缓存是否新鲜

生活中我们判断食品是否新鲜要看食品的`保质期`，`生产日期`和`当前日期`

食品是否新鲜 = 保质期 > （当前日期 - 生产日期）
食品是否新鲜 = 保质期 > 食品使用期

回到缓存也适用即

强缓存是否新鲜 = 缓存新鲜度 > 缓存使用期

### 缓存新鲜度

缓存新鲜度 = `max-age` || (`expires` - `date`)

- `max-age`：缓存过期的相对时间，单位表
- `expires`: 缓存的过期时间，绝对时间
- `date`: 创建报文的日期时间，即服务器（源服务器或代理服务器）返回新资源的时间，和 `expires` 一样是绝对时间

### 缓存使用期

缓存使用期是浏览器已经使用该资源的时间，与响应使用期、传输延迟时间和停留缓存时间有关

缓存使用期 = 响应使用期 + 传输延迟时间 + 停留缓存时间

#### 响应使用期

响应使用期有两种计算方式

- max(`0`, `response_time` - `date_value`)
- `age_value`

最终公式即：响应使用期 = max((max(`0`, `response_time` - `date_value`)), `age_value`)

##### max(0, response_time - date_value)

`response_time` 是浏览器缓存收到响应的本地时间，即电脑客户端缓存获取到响应的本地时间

`date_value` 是响应首部 `date` 值，创建报文的日期时间，即服务器（源服务器或代理服务器）返回新资源的时间，是绝对时间

##### age_value

直接取 `age_value`, 首部的 `age`, 资源创建经过时间，即源服务器在多久前创建了响应或者在代理服务器中的存贮时长，单位为秒

> Age 的值通常接近于 0。表示此对象刚刚从原始服务器获取不久；其他的值则是表示代理服务器当前的系统时间与此应答中的通用头 `Date` 的值之差。

#### 传输延迟时间

HTTP 传输耗时，存在传输延迟时间，即浏览器缓存发起请求到收到请求的时间差

传输延迟时间 = `response_time` - `request_time`

`response_time` 为浏览器缓存收到响应的本地时间

`request_time` 为浏览器缓存发起请求的本地时间

#### 停留缓存时间

停留缓存时间表示资源在浏览器上已经缓存的时间

停留缓存时间 = `now` - `response_time`

`now` 为客户端当前时间

`response_time` 为浏览器缓存收到响应的本地时间

即强缓存使用期的影响因素有：

- `response_time`: 浏览器缓存收到响应的本地时间
- `request_time`: 浏览器缓存发起请求的本地时间
- `age_value`: 响应首部 `age` 值
- `date_value`: 响应首部 `date` 值
- `now`: 客户端当前时间

这里的 `now` 由于是取的客户端本地时间，所以存在被修改导致强缓存失效的风险

## HTTP 缓存 - 协商缓存

强缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存，即**前提是强缓存失效**

### 协商缓存的生效流程

![negotiation-cache-flow1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/cache/negotiation-cache-flow1.png)

### 缓存标识 ETag 和 Last-Modified

前面有提到，协商缓存的前提是强缓存失效。但是这还不够，最终是否要命中协商缓存还需要借助缓存标识

![etag-last-modified](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/cache/etag-last-modified.png)

`ETag` 优先级高于 `Last-Modified`, 两者同时存在时，只有 `ETag` 生效

这两个缓存标识只要**存在一个**，强缓存失效后浏览器就会携带它们向服务器发起请求

携带方式是在请求头增加项, `If-Modified-Since` 对应 `Last-Modified` 的值, `If-None-Match` 对应 `ETag` 的值, 服务器根据优先级高的缓存标识进行判断

如果 `ETag` 对应的 `If-None-Match` 不存在，服务器会将 `Last-Modified` 对应的 `If-Modified-Since` 的时间值与服务器该资源的最后修改时间进行对比，最后判断是否走协商缓存

### Last-Modified 的缺点

最开始提到过 `Last-Modified` 代表资源的最后修改时间，最小单位是秒

- 如果资源修改得很快，毫秒级，那么服务器就会认为该资源没有修改过，导致资源无法在浏览器及时更新

- 服务器资源被编辑了，但是资源的实质内容没有被修改，此时服务器还是会返回最新的 `Last-Modified` 值，这时我们是不希望浏览器认为这个资源被修改而重新加载

:::info 小结

Etag 可以解决 `Last-Modified` 无法处理毫秒级修改导致浏览器没有及时更新的问题，但是 Etag 每次都需要服务端生成，进行读写操作；`Last-Modified` 只需读操作，性能方面 `ETag` 消耗更大些

:::

### ETag 原理与实现

上面有提到比如服务器资源被编辑但是内容没有被修改的场景，我们不希望浏览器认为这个资源被修改而重新加载，这时我们需要使用 `ETag`

node 中一个 `ETag` 包生成`ETag`值的方式有两种：

- 使用文件大小和修改时间
- 使用文件内容的`hash`值和内容长度

#### 使用文件大小和修改时间

```js
function stattag(stat) {
  var mtime = stat.mtime.getTime().toString(16);
  var size = stat.size.toString(16);

  return '"' + size + "-" + mtime + '"';
}
```

上述代码中当要处理的内容是文件 `stats` 对象时，返回了一个字符串，由**文件大小**和**文件最后一次修改时间**组成

> [https://github.com/jshttp/etag/blob/master/index.js#L126](https://github.com/jshttp/etag/blob/master/index.js#L126)

#### 使用文件内容的 hash 值和内容长度

```js
function entitytag(entity) {
  if (entity.length === 0) {
    // fast-path empty
    return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
  }

  // compute hash of entity
  var hash = crypto
    .createHash("sha1")
    .update(entity, "utf8")
    .digest("base64")
    .substring(0, 27);

  // compute length of entity
  var len =
    typeof entity === "string"
      ? Buffer.byteLength(entity, "utf8")
      : entity.length;

  return '"' + len.toString(16) + "-" + hash + '"';
}
```

当内容不是文件 `stats` 对象时，通过对内容的 `hash` 进行转换和截取，最终返回内容长度和 `hash` 值组合的字符串

这种方式生成的 `ETag` 也被称作 `强ETag值`, 只要实体发生变化就会更改，与之对应的是`弱ETag值`，源码中我们看到可以通过传递第二个参数 `weak` 为 `true` 启用`弱校验`

```js
function etag(entity, options) {
  if (entity == null) {
    throw new TypeError("argument entity is required");
  }

  // support fs.Stats object
  var isStats = isstats(entity);
  var weak =
    options && typeof options.weak === "boolean" ? options.weak : isStats;

  // validate argument
  if (!isStats && typeof entity !== "string" && !Buffer.isBuffer(entity)) {
    throw new TypeError("argument entity must be string, Buffer, or fs.Stats");
  }

  // generate entity tag
  var tag = isStats ? stattag(entity) : entitytag(entity);

  return weak ? "W/" + tag : tag;
}
```

启用弱校验会在字段最开始处加上 `W/`, 弱校验只适合用于提示资源是否相同，只有资源内容发生改变产生差异`ETag`才会变化

> - [https://github.com/jshttp/etag/blob/4664b6e53c85a56521076f9c5004dd9626ae10c8/index.js#L39](https://github.com/jshttp/etag/blob/4664b6e53c85a56521076f9c5004dd9626ae10c8/index.js#L39)
> - [https://github.com/jshttp/etag/blob/4664b6e53c85a56521076f9c5004dd9626ae10c8/index.js#L77](https://github.com/jshttp/etag/blob/4664b6e53c85a56521076f9c5004dd9626ae10c8/index.js#L77)

综上我们可以知道使用 `ETag` 可以更精准的分析资源的改变情况

## 启发式缓存

在前面的强缓存内容中我们知道计算强缓存新鲜度公式为：

`强缓存新鲜度` = `max-age` || (`expires` - `date`)

但是也会有场景是响应报头中没有 `max-age(s-maxage)` 和 `expires`, 没有了强缓存相关的字段，浏览器也是会走强缓存的

```yaml
date: Thu, 02 Sep 2021 13:28:56 GMT
age: 10467792
cache-control: public
last-modified: Mon, 26 Apr 2021 09:56:06 GMT
```

该报头没有涉及到强缓存过期时间的相关字段，有个协商缓存相关的 `last-modified` 首部, 但是不会走协商缓存，最后触发的是**启发式缓存**

启发式缓存新鲜度计算公式：

缓存新鲜度 = max(0, (date - last-modified)) \* 10%

即根据响应报头的 `date` 和 `last-modified` 值的差取最大值的百分之十作为缓存时间
