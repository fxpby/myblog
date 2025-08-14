# SSE MCP Server playground

## 1. 功能目标

- 从 0 实现一个 SSE 传输的 MCP 服务器
- 使用 Client 如 `CheeryStudio` 借助 LLM 调用本地运行的 MCP 服务器抓取分析数据

## 2. 环境准备

笔者要写史上最细从头来的说明，嗯，从装 node 开始，有一台新电脑即可（默认 Mac，手头没 Windows...）

- 安装 node.js， 版本 18+
- 安装 pnpm 包管理器
- 准备个大模型的 api key
- 安装客户端，自己用的`CheeryStudio`

### 2.1 安装 nvm && node

[Download Node.js®](https://nodejs.org/zh-cn/download) - 官方下载地址

笔者电脑是 arm64 macOS 打开网站命令是这样的，不同环境应该不一样

nvm 是 Node.js 的版本管理器，相当于版本管家，可以使用它随意切换 Node 版本

官网下面这些命令需要在终端一行一行执行哦，如果电脑原来有装过 Node，但是没有 nvm 的话，需要先卸载原有 Node

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.18.0".
nvm current # Should print "v22.18.0".

# Verify npm version:
npm -v # Should print "10.9.3".

```

`node -v`有输出版本就是成功啦~

### 2.2 安装 pnpm

装完 node 就有了 npm，我们就可以在终端继续用 npm 来装 pnpm

```bash
npm install -g pnpm
```

一行命令搞定，就是这么简单

### 2.3 搞个 api key

笔者这两天了解到的有限信息是硅基流动和智谱 AI 都注册会送很多 token 可以来耍

openRouter 中转站支持支付宝等国内方便的支付方式，其他大厂的模型有能力方式的都可以搞

### 2.4 安装 `CheeryStudio`

- [官网下载地址](https://www.cherry-ai.com/download) 这个需要中转去网盘下载，没有夸克会员，有点麻烦
- [CheeryStudio github 下载地址](https://github.com/CherryHQ/cherry-studio/releases) 这个在 github 仓库里，可以直接下载包，nice~

安装完我们的 `CheeryStudio` 后就可以配置模型平台了，点击左下角设置按钮，选择模型，看自己手头的模型了，笔者这边例子用的是硅基流动免费的

在右侧填写对应平台的 `api key` 和 `api url`

![cherrystudio](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/ai/sse-mcp-demo/cherrystudio-1.jpg)

## 4. 具体实现

提供两种开发方案，不熟悉代码也能包玩转~

先来到 [笔者的仓库](https://github.com/fxpby/mcp-sse-demo) 克隆一下项目

```bash
# 克隆命令
git clone https://github.com/fxpby/mcp-sse-demo.git

# 进入项目目录
cd mcp-sse-demo

# 安装依赖
pnpm install
```

<!-- 可以把 `src` 目录下 `index.ts` 删掉重新建一个，也可以把 `index.ts` 改名，新建一个空 `index.ts` -->

### 方案 A：手敲版

### 方案 B：不敲代码，LLM 专家为您服务

## 5. Reference

- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - MCP 文档
