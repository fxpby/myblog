---
id: frontend-release-strategy
title: 前端发布策略
tags:
  - 工程化
  - 发布
---

## 前端发布策略本质

静态资源的发布，通常包括 js 以及 css 文件，不包括动态生成的 HTML 文件

## 野生状态下的前端资源

1. 有一个 HTML
2. HTML 中引入了一个 css
3. css 和 HTML 模板都由服务器反向代理

![野生前端部署方式](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/release/%E9%87%8E%E7%94%9F%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2%E6%96%B9%E5%BC%8F.png)

### 缓存调优

#### 协商缓存 强缓存

利用缓存机制，可以减少请求资源次数

#### 版本号

如果使用强缓存，就会遇到**更新缓存**的问题，通常是解决方式是给静态资源加上版本号

```html title="index.html"
<link rel="stylesheet" href="style.css?v=1.0.0"/>
<div class="box"> hello </div>
```

这还没有结束，可能一个 HTML 会有很多静态资源引入，比如 a.css, b.css, c.css...如果只修改一个文件，然后去修改所有引入文件的版本号，那缓存意义就丧失了

#### 使用 Hash 代替 Version

即文件改变，才更改 hash

```html title="index.html"
<link rel="stylesheet" href="style1.css?v=0abc91"/>
<link rel="stylesheet" href="style2.css?v=2edb63"/>
<link rel="stylesheet" href="style3.css?v=36fc75"/>
<div class="box"> hello </div>
```

#### CDN

CDN 即内容分发网络，一组分布在世界各地的静态资源服务器，用户访问网站页面时，可能我们会通过应用服务器响应；对于静态资源的加载，CDN 通过 DNS 的方式，将用户的请求引导到最近的节点上，进而较快加载资源。CDN 的内容通过源站同步，源站可能是我们自己的服务器，也可能是云服务商的对象存储服务，CDN 缓存文件后，遇到相应的请求就直接返回给用户了，如果没有匹配到，就会在第一次请求源站时拉取，即 CDN 回源

一般大公司静态资源会部署在 CDN 上，即 HTML 模板和静态资源不在同一台服务器上，这样部署就会产生一个时间差

- 先部署 HTML 页面：用户访问新页面，但是静态资源还是旧的，如果用户不手动清除浏览器缓存，那就 gg 了
- 先部署静态资源：用户访问老页面，资源是新的，可能会出现页面异常
- 非覆盖式发布：不通过将 URL 参数携带 hash 的方式，而是将 hash 直接写到静态资源文件名中（文件名不会冲突），将新的资源推送到 CDN 后不会覆盖老的资源，新老资源在 CDN 上同时存在。访问新页面的用户加载新的资源，访问老页面的用户加载老的资源。
