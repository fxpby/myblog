---
sidebar_position: 2
---

# n8n 工作流 - supabase & RAG 知识库

之前有学习实践写过一个 LLM + MCP + RAG 实现极简 Agent 客户端（不依赖框架）的项目

https://github.com/fxpby/llm-mcp-rag-demo

写代码运行项目有一定的学习成本和环境需求在，最近开始探索 n8n 这块，不敲代码也能构建云上工作流，感觉很方便吧，一起来耍一下~

我们的目标是制作一个基于 Supabase 向量存储的 n8n RAG 知识库管理与问答工作流

## 1. 创建 supabase 向量存储项目

正好前两天探索的 supabase 这款云端数据库产品对 AI 相关生态十分友好，也支持向量数据存储，这次用它来存储项目文档数据

来到 https://supabase.com/ 注册一个账号，同时创建一个组织，并创建一个 project，选择区域的时候建议选择距离自己较近的地方

![n8n-rag-supabase-1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-1.jpg)

再来到控制面板的 Settings 页面，看到有一个 Data API，点击右侧会有项目 URL，在 n8n 工作流中，创建 Supabase 向量存储时会用到这个 URL，可以先保存一下

![n8n-rag-supabase-2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-2.jpg)

同样在 API Keys 中有一个 service role，这个后面配置中也会用到，可以保存一下

![n8n-rag-supabase-3](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-rag-supabase-3.jpg)

在官方文档 https://supabase.com/docs/guides/ai/langchain 中有一个 LangChain 的文档，LangChain 支持使用 supabase 作为向量存储，我们需要下面的 SQL 代码来初始化数据库

## 2. 创建导入文档工作流

## 3. 创建知识库问答工作流
