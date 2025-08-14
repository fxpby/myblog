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

官网下面这些命令需要在终端一行一行执行哦，**如果电脑原来有装过 Node，但是没有 nvm 的话，需要先卸载原有 Node**

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

看一下 `src` 目录下的 `index.ts`，加了注释说明解释，代码量不大

其中两个网络请求含义说明：

- `https://hacker-news.firebaseio.com/v0/${type}.json`中 `type` 是`"topstories", "newstories", "beststories"`任一都可以获取到对应类型（最热门、最新、最好）新闻网站的新闻数据 ids 列表
- 再通过上一步拿到的 ids 列表的单个 id 代入 `https://hacker-news.firebaseio.com/v0/item/${id}.json` 这个接口获取具体一条的新闻详情信息

主要要点：

- 创建 MCP 实例，传参名称和版本
- 注册 MCP 工具，传参名称、描述、工具参数和工具执行函数（重点）

```ts
// 导入必要的依赖模块
import express from "express"; // Express.js 框架，用于创建 HTTP 服务器
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"; // MCP 服务器核心类
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js"; // SSE 传输层实现
import { z } from "zod"; // 数据校验库，用于参数类型验证

// 创建 Express 应用实例
const app = express();

// 创建 MCP 服务器实例
// MCP (Model Context Protocol) 是一个用于 LLM 与外部工具交互的协议
const mcpServer = new McpServer({
  name: "hacker-news-server", // 服务器名称
  version: "1.0.0", // 服务器版本
});

// 注册 MCP 工具：获取 Hacker News 故事
// 这个工具可以被 LLM 调用来获取 Hacker News 上的文章信息
mcpServer.tool(
  "get_hacker_news_stories", // 工具名称
  "Get the stories from Hacker News", // 工具描述
  {
    // 定义工具参数的验证规则
    type: z.enum(["topstories", "newstories", "beststories"]), // 故事类型：热门、最新、最佳
    amount: z.number().min(1).max(100).default(10), // 获取数量：1-100，默认10
  },
  // 工具的实际执行函数
  async ({ type, amount }) => {
    // 第一步：获取指定类型的故事 ID 列表
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/${type}.json`
    );
    const ids = await response.json(); // 解析得到故事 ID 数组

    // 第二步：并行获取每个故事的详细信息
    const stories = await Promise.all(
      ids.slice(0, amount).map(async (id: number) => {
        // 根据 ID 获取单个故事的详细信息
        const storyResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return storyResponse.json(); // 返回故事的 JSON 数据
      })
    );

    // 第三步：格式化返回结果，符合 MCP 协议规范
    return {
      content: stories.map((story: any) => ({
        type: "text", // 内容类型为文本
        text: JSON.stringify(story), // 将故事对象转换为 JSON 字符串
      })),
    };
  }
);

// 全局变量：存储 SSE 传输实例
// SSE (Server-Sent Events) 用于服务器向客户端实时推送数据
let transport: SSEServerTransport | null = null;

// SSE 连接端点：建立服务器到客户端的实时数据推送连接
// 客户端通过 GET 请求这个端点来建立 SSE 连接
app.get("/sse", (req, res) => {
  // 创建 SSE 传输实例，指定消息处理路径和响应对象
  transport = new SSEServerTransport("/messages", res);
  // 将 MCP 服务器连接到 SSE 传输层，启用实时通信
  mcpServer.connect(transport);
});

// 消息处理端点：接收客户端发送的 POST 消息
// 客户端通过 POST 请求向服务器发送 MCP 协议消息
app.post("/messages", (req, res) => {
  if (transport) {
    // 如果传输层已建立，则处理客户端的 POST 消息
    transport.handlePostMessage(req, res);
  }
});

// 启动 HTTP 服务器，监听 3006 端口
app.listen(3006, () => {
  console.log("Server is running on port 3006");
});
```

了解完代码意图后，我们运行命令开启服务，代码里端口是 3006，如果撞了需要自己改

```bash
pnpm run dev
```

### 方案 B：不敲代码，LLM 专家为您服务

## 5. Reference

- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - MCP 文档
