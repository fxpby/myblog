---
id: nginx-cache-directive
title: nginx 缓存相关指令
tags:
  - nginx
  - cache
  - 缓存
---

## proxy_cache

- 语法：proxy_cache zone / off;
  - zone: 共享内存名称
- 默认值：proxy_cache off;
- 上下文：http、server、location

## proxy_cache_path

- 语法：proxy_cache_path path keys_zone=name:size
  - path: 路径
  - keys_zone: 名称:大小, 在共享内存中设置一块存储区域来存放缓存的key字符串，这样nginx可以快速判断一个request是否命中或者未命中缓存，1m可以存储8000个key，10m可以存储80000个key；
- 默认值：proxy_cache_path off
- 上下文：http

可选参数：

- path: 缓存文件的存放路径
- level：path 的目录层级
- use_temp_path:
  - off：直接使用 path 路径
  - on：使用 proxy_temp_path 路径

- keys_zone:
  - name: 共享内存名称
  - size: 共享内存大小

- inactive：在指定时间内没有被访问缓存会被清理；默认 10 分钟
- max_size: 设定最大的缓存文件大小，超过将由 CM（cache manager缓存管理进程）清理，占用硬盘空间
- mananger_files: CM 清理一次缓存文件，最大清理文件数；默认 100
- manager_sleep: CM 清理一次后进程的休眠时间；默认 200 毫秒
- manager_threshold: CM 清理一次最长耗时；默认 50 毫秒
- loader_files: CL（cache loader）载入文件到共享内存，每批最多文件数; 默认 100
- loader_sleep: CL 加载缓存文件到内存后，进程休眠时间；默认 200 毫秒
- loader_threshold: CL 每次载入文件到共享内存的最大耗时；默认 50 毫秒

## proxy_cache_key

- 语法：proxy_cache_key string;
- 默认值：proxy_cache_key $scheme$proxy_host$request_uri;
- 上下文：http、server、location

## proxy_cache_valid

- 语法：proxy_cache_valid [code...] time;
- 默认值：-
- 上下文：http、server、location

配置示例：

```conf
proxy_cache_valid 60m # 不指定 code 时只对 200、301、302 响应码缓存
```

## upstream_cache_status

上游服务器缓存状态

- MISS: 未命中缓存
- HIT：命中缓存
- EXPIRED：缓存过期
- STALE：命中了陈旧缓存
- REVALIDDATED：Nginx 验证陈旧缓存依然有效
- UPDATING：内容陈旧，但正在更新
- BYPASS：响应从原始服务器获取

## proxy_no_cache

配置不缓存特定内容

- 语法：proxy_no_cache string;
  - string 变量名有值即不缓存
- 默认值：-
- 上下文：http、server、location

## proxy_cache_bypass

配置不缓存特定内容

- 语法：proxy_cache_bypass string;
- 默认值：-
- 上下文：http、server、location
