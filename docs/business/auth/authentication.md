---
id: authentication
title: 鉴权方案
tags:
  - token
  - 鉴权
  - JWT
  - 单点登录
---

## 认证

见名知意即证明身份

## 授权

- web 服务器 session 机制
- web 服务器 cookie 机制
- 授权令牌 token

## 鉴权

先授权后鉴权，校验 session/cookie/token 的合法性和有效性

## 权限控制

通过后端服务控制接口访问，允许或拒绝访问请求

## 认证、授权、鉴权和权限控制的关系

认证 → 授权 → 鉴权 → 权限控制

- 前后依次发生
- 上下游关系

## HTTP 基本鉴权

1. 客户端向浏览器请求一个受限的列表数据或资源

```txt
 GET /list/ HTTP/1.1
 Host: www.baidu.com
 Authorization: Basic aHR0cHdhdGNoOmY=
```

2. 服务器判断资源是否是受限资源，如果是向客户端返回 401 状态码，以及附带提供一个认证域