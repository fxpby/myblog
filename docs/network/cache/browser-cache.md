---
id: browser-cache
title: 浏览器缓存
tags:
  - cache
  - 缓存
---

## Memory Cache 与 Disk Cache

### Memory Cache

存储在浏览器内存中

优点：

- 获取速度快
- 优先级高
- 从内存中获取资源耗时为 0ms

缺点：

- 生命周期短，网页关闭后内存就会释放
- 受限制于计算机内存大小

### Disk Cache

存储在计算机硬盘中，会根据保存下来资源的HTTP首部字段判断是否需要重新请求，如果重新请求就是强缓存失效流程，反之是生效流程

优点：

- 生命周期长，不触发删除操作就一直存在

缺点：

- 获取资源的速度相对内存缓存较慢

## 浏览器缓存机制

之前的文章我们学习了 http 缓存，包括强缓存、协商缓存等，浏览器缓存机制包括http缓存，下文主要学习 Memory Cache、Disk Cache相关内容

### 缓存获取顺序

按照缓存顺序，当一个资源准备加载时，浏览器会根据**三级缓存原理**进行判断

1. 浏览器会率先查找内存缓存，如果资源在内存中存在，就直接从内存中加载
2. 如果内存中不存在，继续去磁盘中查找，若找到从磁盘中获取
3. 如果磁盘中也不存在，则进行网络请求，将请求后符合条件的资源存入内存和硬盘中

### 缓存存储优先级

上面我们知道了缓存资源的获取顺序，那么我们还需要知道浏览器判断资源存入内存缓存或磁盘缓存的依据

磁盘缓存会将命中强缓存的js、css、图片等资源都收掉。之前说过的 `base 64` 图片特殊，永远从内存加载

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <title>Demo</title>
  </head>
  <body>
    <div id="cache">异步加载的 JS 资源没有存储到内存中</div>
    <script>
      window.onload = function () {
        setTimeout(function () {
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://i.snssdk.com/slardar/sdk.js";
          var x = document.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        }, 2000);
      };
    </script>
  </body>
</html>
```

内存缓存由于受限于计算机内存大小，需要选择合适的资源存储，在Chrome的控制台 network 面板中的 Initiator 列（资源加载发起的位置），异步时间为 2s 时会发现

- 资源在**HTML渲染阶段就被加载内容**会被**内存缓存**命中
- **异步加载**的资源没有被内存缓存加载，被**磁盘缓存**命中

but, 这不是最后的结论，当我们把异步时间控制到 1s 的话，会发现即使是异步，`js`资源还是会被内存缓存。这是因为异步`js`资源加载时，**浏览器渲染进程还未结束**(异步资源的加载晚于浏览器内存的生效时间)，该进程没有结束就有存入内存的可能

在浏览器内存缓存生效的前提下，js资源的执行加载时间会影响其是否被内存缓存

图片资源(除了 base 64)，和 js 资源比较相似，css资源比较不同，被磁盘缓存的概率比内存缓存的概率大很多，网上有人解释是css加载一次就可渲染并且不会频繁读取，不适合缓存到内存中，js脚本随时可能会执行，js资源如果在磁盘里，执行的时候需要从磁盘取到内存，IO开销较大，可能导致浏览器失去响应

### Preload 和 Prefetch

`Preload` 和 `Prefetch` 这俩也可能会影响到浏览器缓存

#### Preload

预加载，用于`link标签`中，指明哪些资源是在页面加载完成后即刻需要的，浏览器会在主渲染机制介入之前预先加载这些资源，不阻塞页面的初步渲染

使用 `Preload` 预加载资源后，还是和资源的渲染时机有关，渲染机制未介入前，资源加载不会被内存缓存

```html
<link rel="preload" href="https://i.snssdk.com/slardar/sdk.js" as="script" />
```

#### Prefetch

预提取，告知浏览器加载下一页可能会用到的资源，浏览器会利用空闲状态进行下载并将资源存储到缓存中

```html
<link rel="prefetch" href="https://i.snssdk.com/slardar/sdk.js" />
```

使用 `prefetch` 加载的资源，刷新页面时大概率会从磁盘缓存中读取，如果跳转到使用它的页面，则会直接从磁盘中加载资源
