---
sidebar_position: 2
---

# n8n 工作流 - supabase & RAG 知识库

之前有学习实践写过一个 `LLM + MCP + RAG` 实现极简 Agent 客户端（不依赖框架）的项目

https://github.com/fxpby/llm-mcp-rag-demo

写代码运行项目有一定的学习成本和环境需求在，最近开始探索 n8n 这块，不敲代码也能构建云上工作流，感觉很方便吧，一起来耍一下~

我们的目标是制作一个基于 Supabase 向量存储的 n8n RAG 知识库管理与问答工作流

## 1. 创建 supabase 向量存储项目

正好前两天探索的 supabase 这款云端数据库产品对 AI 相关生态十分友好，也支持向量数据存储，这次用它来存储项目文档数据

来到 https://supabase.com/ 注册一个账号，同时创建一个组织，并创建一个 project，选择区域的时候建议选择距离自己较近的地方

![n8n-rag-supabase-1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-1.jpg)

再来到控制面板的 `Settings` 页面，看到有一个 `Data API`，点击右侧会有项目 `URL`，在 n8n 工作流中，创建 Supabase 向量存储时会用到这个 URL，可以先保存一下

![n8n-rag-supabase-2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-2.jpg)

同样在 `API Keys` 中有一个 `service role`，这个后面配置中也会用到，可以保存一下

![n8n-rag-supabase-3](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-3.jpg)

在官方文档 https://supabase.com/docs/guides/ai/langchain 中有一个 `LangChain` `的文档，LangChain` 支持使用 supabase 作为向量存储，我们需要下面的 `SQL` 代码来初始化数据库

![n8n-rag-supabase-4](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-4.jpg)

来到 supabase 项目的控制面板，在 `SQL Editor` 中粘贴上面的 `SQL` 代码，并点击运行

![n8n-rag-supabase-5](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-5.jpg)

![n8n-rag-supabase-6](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-6.jpg)

执行成功下面 `result` 面板会显示 `Success. No rows returned`

来到控制面板 `Database - Tables` 中可以看到撞击的 `documents` 表

![n8n-rag-supabase-7](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-7.jpg)

至此 supabase 项目创建完成~

## 2. 创建导入文档工作流

首先来到我们的 n8n 项目，`create credential`

![n8n-rag-supabase-8](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-8.jpg)

选择 supabase

![n8n-rag-supabase-9](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-9.jpg)

把之前 supabase 中记录的 `project URL` 和 `API Key` 拿过来粘贴并保存

![n8n-rag-supabase-10](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-10.jpg)

然后我们新建一个工作流，第一个节点触发器选择 `n8n Form`，我们来设计一个表单

![n8n-rag-supabase-11](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-11.jpg)

表单设置如图所示

![n8n-rag-supabase-12](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-12.jpg)

接下来我们添加一个 `sqlite` 向量存储节点，搜索 supabase，选择 `Supabase Vector Store`

![n8n-rag-supabase-13](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-13.jpg)

选择第二个向向量存储中添加文档选项

![n8n-rag-supabase-14](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-14.jpg)

配置如图所示，选择我们之前的项目名称以及表

![n8n-rag-supabase-15](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-15.jpg)

配置好后会发现节点右下角有一个红色感叹号，这是因为向量存储要依赖的相关组件我们还没有配置添加

![n8n-rag-supabase-16](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-16.jpg)

点击左边的 `embeddings` 节点，这里选择了 `openAI` 的

![n8n-rag-supabase-17](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-17.jpg)

没有证书配置的话需要设置一下，这里自己用了 `openrouter` 的

![n8n-rag-supabase-18](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-18.jpg)

配置好如图所示

![n8n-rag-supabase-19](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-19.jpg)

然后点击第二个加号节点 `document` 添加我们的数据加载器，选择第一个 `default Data Loader`

![n8n-rag-supabase-20](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-20.jpg)

如图配置，其中 Type of Data 由于是文件，我们选择 binary

文本拆分有两种模式，一个是简单模式，一个是自定义模式。简单模式是每 1000 个字符做拆分，然后包含 200 字符的重叠，我们保持 simple

![n8n-rag-supabase-21](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-21.jpg)

然后就可以点击下方按钮测试了

![n8n-rag-supabase-22](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-22.jpg)

选择文件，这里选了个讲设计模式的 PDF 文件

![n8n-rag-supabase-23](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-23.jpg)

![n8n-rag-supabase-24](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-24.jpg)

![n8n-rag-supabase-25](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-25.jpg)

提交完成提示如图

![n8n-rag-supabase-26](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-26.jpg)

然后就可以看到工作流开始流转了

![n8n-rag-supabase-27](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-27.jpg)

emmmm，报错了，看了下 n8n 这里的 embeddings 不支持 openrouter 的，有点蓝瘦，去想想办法

## 3. 创建知识库问答工作流
