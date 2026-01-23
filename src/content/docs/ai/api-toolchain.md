---
title: 有点优雅的 AI 工具链合集分享
sidebar_position: 2
---

# 有点优雅的 AI 工具链合集分享

## 1. AI 工具现状

AI 工具现在多得离谱，天天都能看见新名字，眼花缭乱。选择好用适合自己的就显得非常重要了，不然就走了差生文具多路线。

结合个人需求，目前手上有蛮多公益 api，但里面质量参差不齐，有不稳定的，延迟高的。每次因为一个端点挂掉，自己的客户端们就得齐刷刷修改配置，实在是不优雅便利

自己的客户端有众多应用程序，主力的话 cherry studio，Claude code，各种零碎对接 api 的应用以及浏览器插件，实在是太多了

于是产生了两个需求

- 管理聚合众多 api 端点
- 中继站统一端口转发，客户端只和中继站对接

学习了解了很多大佬的工具集后，搭建一套满足自己需求的工具链旅程——启航！

## 2. 核心工具介绍

### 2.1 Antigravity Tools 初识

> Antigravity Tools 为此工具链非必须元素，使用只为薅反重力额度谷歌大善人羊毛

[官网地址 https://github.com/lbjlaq/Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager)

Antigravity Tools 是专业的 Antigravity 账号管理与切换工具。为 Antigravity 提供一键无缝账号切换功能

- 看 Antigravity 编辑器额度的，面板详细 UI 简洁
- API 反代，全协议适配（OpenAI、Claude、Gemini）
- OAuth 2.0 授权，管理谷歌账号

提到 Antigravity 的话，也顺路来认识一下它~谷歌大善人的羊毛，薅薅更健康！

#### 2.1.1 Antigravity 教程

##### 2.1.1.1 获取账号

即获取谷歌学生认证 PRO 账号

1. 过认证，1key 类型网站要指纹浏览器，可三方渠道个位数便捷操作
2. 绑卡，有卡的绑卡，没卡的想办法绑卡[狗头]

有了 PRO 账号后就可以用小号加入家庭组，这里的号什么都可以，新号中区号也可以

影响因素一般是节点、年龄、支付信息等，通常改地区可以达到效果

家庭组和正常 PRO 一样使用，额度相同且相互独立，每隔 5 小时刷新

##### 2.1.1.2 登录问题解决方案

有了账号，下载反重力后，就坐等美滋滋使用了。但现实往往会来一些小挑战，登录反重力就是一道小难关

汇总一些须知如下：

- 必须使用国外 IP 环境，建议美国、日本、新加坡、台湾等节点
- 须开启 TUN 模式和全局代理（不想开 TUN 就用 Proxifier）
- 终端需要开启代理配置

```bash
 # 在 ~/.zshrc 或 ~/.bashrc 中添加,7890 换成你的
 export http_proxy=http://127.0.0.1:7890
 export https_proxy=http://127.0.0.1:7890
```

别忘记验证 TUN 是否生效

```bash
# 显示的 IP 应该是代理节点的 IP
curl http://ifconfig.me
```

如果遇到 Setting up your account 无限转圈

- 切换节点
- 使用全局代理 + TUN
- 完全关闭 Antigravity 后重新启动

如果遇到 ”Your current account is not eligible for Antigravity, because it is not currently available in your location.“

- 修改 Google 账号地区 [https://policies.google.com/country-association-form](https://policies.google.com/country-association-form)
- 选择美国、日本、新加坡、台湾等
- 理由选择非 VPN 相关
- 等待 1-2 小时审核后邮件通知

### 2.2 ccNexus 初识

### 2.3 cherry studio 初识

### 2.4 cc-switch 初识

## 3. 配套工具链集成配置

### 3.1 输入端 Antigravity Tools 上手

### 3.2 核心网关 ccNexus 上手

### 3.3 客户端配置（举例）

### 3.3.1 cherry studio 对接网关

### 3.3.2 cc-switch 对接网关

### 3.3.3 浏览器插件对接网关

```

```
