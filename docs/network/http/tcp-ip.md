---
id: tcp-ip
title: TCP/IP协议和互联网协议群
tags:
  - tcp
  - ip
---

## TCP/IP 协议群

类似 OSI 模型，一种网络协议的概念模型

- 应用层：提供应用间通信能力 （HTTP 协议）
- 传输层：提供主机到主机的通信能力 （TCP/UDP 协议）
  - 端口：主机需要提供端口号，代表应用
  - 数据
- 网络层：提供地址到地址的通信能力（IP 协议）
  - from：IP 地址
  - to：IP 地址
  - 数据
- 链接层：提供设备到设备的通信能力（多种底层网络协议 Ethernet,Wi-Fi）
  - from: mac 地址
  - to：mac 地址
  - 数据
- 物理层

## 标识

每台设备出厂就有 mac 地址，但是设备可以转移位置，就像每个人都有唯一的身份证号，但是购物软件的收货地址不固定

对应关系如下：

- 设备 - mac 地址
- 位置 - ipv4、ipv6
- 应用 - 端口号

## TCP/IP 封包

![tcp-ip-1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/TCPIP%E5%B0%81%E5%8C%851.png)

- 应用层：开发者定义的数据
- 传输层：应用层的数据经过转换，如 TCP 协议的话会加上头部，数据从一个应用传输到另一个应用，标识是端口号
- 网络层：对传输层的数据增加头部，传输层的数据到网络层会被切割成更小的片段
- 链接层：增加头部和尾部，区分数据

### 网络层封包

![network-layer](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/%E7%BD%91%E7%BB%9C%E5%B1%82%E5%B0%81%E5%8C%85.png)

### TCP 协议封包

- 每个封包称作一个 TCP 信息段（TCP Segment）
- Header 用于描述传输行为（如源端口，目标端口等）
- Header 后面跟若干个 byte 数据，每个 byte 拥有自己的序列号
