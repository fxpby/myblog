---
id: backend-release-strategy
title: 后端发布策略
tags:
  - 工程化
  - 发布
---

## 后端发布策略本质

后端服务在多台服务器上的分发（服务器集群分摊高并发服务器成本）

## 后端发布关心的问题

- 减少用户感知上的新旧版本不一致
- 让发布过程中的服务尽可能的稳定
- 保证发布最终一致

## 后端发布策略

### 滚动更新

应用的新版本逐步替换旧版本，在这个期间中，新旧版本共存

执行该策略时，服务不会中断，请求可能访问的是新版本也可能访问的是老版本

一开始`state 0`都是蓝色的老版本，在`state 1`和`state 2`阶段三台服务器逐渐替换为新版本

- 节约资源
- 流量冲击小（应用渐进式逐步被替换）
- 回滚不及时（替换过程中若发现新版本有问题则需逐步再替换回滚回去，耗时长，事故影响时间长）
- 存在中间状态，可能导致不一致（可能出现异常问题或产生脏数据）

![server-release-strategy-scroll-update](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/release/server-release-strategy-scroll-update.png)

### 蓝绿部署

不停止老版本，在新服务器上部署新版本并进行测试，确认无误后再将流量切到新版本

- 风险小，新版本有问题不会影响线上
- 便于快速回滚
- 切换流量时需要妥善处理未完成的请求
- 整体切换流量冲击较大

![蓝绿部署](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/release/%E8%93%9D%E7%BB%BF%E9%83%A8%E7%BD%B2.png)

### 灰度发布/金丝雀发布

在原有软件生成版本可用的情况下，同时部署一个新的版本。两个版本同时存在于线上。为新版本分配少量流量，线上验证完毕后再将新版本推广

- 渐进式，降低风险（出现事故网关层面调整）
- 需配合复杂的路由策略

![灰度发布](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/release/%E7%81%B0%E5%BA%A6%E5%8F%91%E5%B8%83.png)
