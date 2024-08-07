---
id: block-chain-basic
title: 区块链基础知识
tags:
  - 区块链
  - web3
---

## 什么是区块链

区块链是一个**公开**的**去中心化公共可信数据库**

与传统数据库不同点在于存储数据的方式

区块链使用**区块**作为单位存储数据，**区块与区块之间串联**，**形成类似链表的形式**

区块链数据存储于全世界若干节点中，这些节点采用 P2P 的形式通讯，相互验证数据正确性，提供查询和改写入口

数据由用户以**交易(Transaction)**的形式提交至区块链节点，支付费用让**矿工**将其打包到区块中，所有节点**共识确认**即成功

读取数据通过回溯区块链所有交易或者基于目前的缓存发送给用户

- 所有数据都是可信的（基于现代密码学，不可轻易篡改已经存在的数据）
- 当前状态可以通过回溯所有历史记录来确认

### 区块链回溯

![blockchain-backtracking](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/web3/blockchain-backtracking.svg)

### 去中心化

通过**分布式网络**来实现数据存储、处理和传输的方式，不依赖单一中心化的服务器或机构，去中心化的实现通常依赖于区块链技术或者其他**分布式账本技术**。其特性是**安全**和**透明**

### 区块链网络

一个链由全世界的若干个**节点**构成

彼此之间互相广播数据，通过共识算法在自身验证数据判断正确性，不正确的数据不会被承认

用户与区块链网络的交互一节点作为入口

节点是一堆运行了**RPC服务**的服务器

### 区块链模型

- 账户
- 交易
- 区块
- 矿工
- 代币
- 内存池
- 智能合约

### 区块链运行

一个链的运行，大概会有如下几个步骤

- 用户发起交易，暂存到内存池
- 矿工根据链规则，获得打包机会
- 矿工在内存池中检索并提取在区块大小限制内，提供小费最多的交易，小费决定矿工的收益
- 矿工验证交易的合法性
- 矿工将交易打包至区块内，广播至整个网络
- 开启下一轮循环

故**出块速度**和**块的大小**决定了一个链的TPS, 在网络拥挤时提供更多的小费可以让交易更快地被网络确认。链的活跃度与矿工的收益绑定

### 区块链浏览器

每个公链都有与之对应的浏览器，区块链浏览器是一个网站，可以在上面查找所有链上的数据

- etherscan.io
- mempool.space
- suiscan.xyz

### 智能合约

智能合约是部署在区块链上的程序，可以被用户发起交易来调用

和其他计算机程序一样由代码和数据组成，开发者可以自己编写，部署智能合约，通过智能合约，将数据保存在链上，同时可以调用智能合约以读取数据

智能合约中的数据通常被称为"状态"，因为整个区块链可以看作是所有数据状态的一个确定的记录

从 web2 开发者的角度看，如果 web3 公链是远程服务器，那么智能合约就是运行在服务器上的后端程序

### 账户

是进行区块链活动的最基本单位之一。几乎所有的公链，都有账户模型的设计

区块链上的资产都由账户持有，区块链交易由账户发起

区块链中的账户可以被人类所拥有，也可以没有人拥有（如智能合约）

一个区块链账户，由一对公钥和私钥产生。大部分情况下使用公钥代表链上地址

如果一个用户持有该地址的私钥，则说明该用户掌握了这个地址的所有权，可以对这个地址进行任意操作

- 外部用户账户（EOAs）:该类账户由公钥-私钥对控制（由人控制）
- 合约账户（CA：Contract Account）：该类账户由存储在账户中的代码控制

这两种账户都使用相同的地址格式来表示，是一个 20 字节的 16 进制数

只有外部用户账户可以发起交易，合约账户只能被动响应操作，所有的手续费（Gas）由外部账户支付

#### 账户状态

账户状态有 4 个基本组成部分：

- `nonce`: 如果一个账户是一个外部用户账户，nonce 代表从此账户地址发送的交易序号。如果账户是一个合约账户，nonce 代表此账户创建的合约序号（以太坊有两种 nonce，一种是账号 nonce 表示一个账号的交易数量，一种是工作量证明 nonce 用于计算满足工作量证明的随机数）
- `balance`：此地址拥有的以太币余额数量。单位是`Wei`, `1 ether`=`10^18 wei`,当向地址发送带有以太币的交易时，balance 会随之改变。外部用户账户和合约账户都可以有余额；合约账户使用代码管理所拥有的资金，外部用户账户则使用私钥签名来花费资金，合约账户存储代码，外部用户账户则没有
- `storageRoot`: Merkle Patricia 树的根节点哈希值，Merkle 树会将此账户存储内容的哈希值进行编码, 默认是空值
- `codeHash`: 此账户代码的哈希值
  - 对于合约账户，它是合约代码被哈希计算后的结果作为 codeHash 保存
  - 对于外部用户账户，codeHash 是一个空字符串的哈希值

### 代币

在区块链中，虚拟货币叫做代币。

链上代币主要有

- 原生代币
- 协议代币（ERC20 & ERC721）

### 常见的公链

#### 比特币

- 比特币
- 莱特链

#### EVM

- 以太坊（Ethereum）
- 马蹄链（Polygon）
- 币安智能链（BNB Smart Chain）
- Arbitrum
- 雪崩链（Avalanche）
- BaseChain
- Optimism

#### 其他

- Solana
- SUI
- APTOS
- Cosmos 家族
- Arweave

### 二层网络

二层网络是对已有网络的扩容，旨在解决现有网络容量不足，速度较慢的问题

以太坊作为 L1，TPS 只有 20 左右，不足以支撑繁荣的区块链生态，故产生了一些扩容方案

L2 链在 L1 的基础上搭建，需要经过 L1 共识以进行验证

L2 相较于 L1，不仅 TPS 更高，而且 gasfee 更便宜，货币流通更方便

### 区块链钱包

作为用户，我们使用区块链钱包作为区块链交互的入口

推荐安装的区块链钱包

- Metamask(evm)
- OKX Web3 Wallet(full-chain)
