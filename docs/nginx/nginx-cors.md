---
id: nginx-cors
title: 跨域问题与nginx响应报头配置
tags:
  - nginx
  - cors
  - 跨域
---

## nginx与跨域问题

有时我们访问网站或者调用接口会遇到跨域问题，这时我们去看接口的响应报头可能会看到服务端做了访问处理，如 `Access-Control-Allow-Origin` 后不是 `*` , 而是设置了具体的域名

`Access-Control-Allow-Origin` 是指定允许访问的域名，也就是白名单，其他域名外的访问是不被允许的

一般遇到跨域问题我们会去检查服务端或nginx对`Access-Control-Allow-Origin`的配置，是否设置了域名

但是有时即使 `Access-Control-Allow-Origin` 设为 `*` 也还会报跨域问题，这是因为前端在请求时，配置了`withCredentials`为`true`, 比如使用了axios库，并配置

```js
axios.default.withCredentials = true // 允许携带 cookie
```

如果允许请求头携带`cookie`，服务端配置 `Access-Control-Allow-Origin` 就不可用设为 `*`  

并且当前端配置 `axios.default.withCredentials = true` 时，服务端也需要配置 `access-control-allow--credentials: true`

浏览器发起**预检请求**的时候，还需要配置 `access-control-allow-methods` 和 `access-control-allow-headers` 报头为允许的值，比如

```yaml
access-control-allow-headers: Content-Type, Content-Length,Authorization, Accept, X-Requested-With
access-control-allow-methods: PUT, POST, GET, DELETE, OPTIONS
```

### 简单请求与预检请求

#### 简单请求

需满足所有下述条件：

- 使用方法为：
  - GET
  - HEAD
  - POST

- 除被用户代理自动设置的首部字段（如`Connection`、`User-Agent`等被定义为禁用首部名称的首部），允许人为设置的字段为Fetch规范定义的对CORS安全的首部字段集合：
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type(取值仅限以下3个)
    - text/plain
    - multipart/form-data
    - application/x-www-form-urlencoded

- 请求中的任意 `XMLHttpRequest` 对象均没有注册任何事件监听器，`XMLHttpRequest` 对象可以使用 `XMLHttpRequest.upload` 属性访问
- 请求中没有使用 `ReadableStream` 对象

#### 预检请求

预检请求必须先试用 `OPTIONS` 方法发起一个预检请求到服务器，获取服务器是否允许该实际请求，这种方式可以避免跨域请求对服务器的用户数据产生未预期的影响

## 使用 Nginx 配置响应报头

### 访问 Nginx 服务器及配置文件

我们需要找到对应的 `nginx.conf` 文件，`nginx.conf`中我们先找到对应的应用端口，修改`location /` 中的参数

```conf
server {
  listen 80;
  location / {
    add_header Access-Control-Allow-Origin *; 
    add_header Access-Control-Allow-Methods 'PUT,POST,GET,DELETE,OPTIONS'; 
    add_header Access-Control-Allow-Headers 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With';
    
    if ($request_method = 'OPTIONS') {
      return 204;
    }
  }
}
```

修改完配置文件重启nginx配置，刷新页面观察响应报头成功返回我们配置的字段

### 修改缓存相关配置

我们知道nginx是一个代理服务器，当处理静态资源时，其 `eTag`、`last-modified` 等首部大都是由源服务器返回的，一般我们不会在nginx配置中对他们进行修改，在 nginx 中，我们主要修改的是缓存方式和过期时间的配置

比如现在有一个场景我们不想让**HTML**文件命中强缓存，希望走**协商缓存**，那么就可以配置报头如下：

```conf
server {
  listen 80;
  location / {
    if ($request_filename ~* .*.(html|htm)$) {
      add_header Cache-Control 'no-cache';
    }
  }
}
```

对于**js**、**css**、**图片**这种静态资源，我们希望走**强缓存**，nginx可以设置相应的过期时间：

```conf
server {
  listen 80;
  location ~ .*.(gif|jpg|jpeg|png|bmp|swf|js|css)$ {
    expires 1d;
  }
}
```

上述配置中我们配置过期时间为1天，最终浏览器会返回响应报头 `Cache-Control: max-age=86400`  

### add_header 的继承问题

如果我们在HTML的判断上层继续增加了首部：

```conf
server {
  listen 80;
  location / {
    add_header Test 'olu';

    if ($request_filename ~* .*.(html|htm)$) {
      add_header Cache-Control 'no-cache';
    }
  }
}
```

最终的HTML文件响应报头中并不会添加**俩首部**，只会添加 `Cache-Control` 首部，这是为啥呢？原因是 `add_header` 的继承问题

> There could be several `add_header` directives. These directives are inherited from the previous level if and only if there are no `add_header` directives defined on the current level.

即当且仅当 当前层级 未定义任何 `add_header` 时，才可以从上层继承 `add_header`, 上面代码中的 if 模块属于层级的概念，所以上层的 `add_header` 不会起作用
