---
sidebar_position: 2
---

# bilibili 字幕文本提取及处理

## 🔖 1. 提取字幕文本

### 🛠 1.1 安装 tampermonkey

https://www.tampermonkey.net/

### ⚙️ 1.2 安装 bilibili evolved

https://github.com/the1812/Bilibili-Evolved

### 🪜 1.3 配置与使用下载字幕插件

在 tampermonkey 中安装完 `bilibili evolved` 后，打开一个 bilibili 视频后页面左边就会自动出现侧边栏，点击下面设置图标，在线搜索添加`下载字幕`组件

![bilibili-ex-1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/ai/bilibili/bilibili-ex-1.jpg)

![bilibili-ex-2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/ai/bilibili/bilibili-ex2.jpg)

添加组件后，刷新页面后就可以看到功能图标中有了`下载字幕（JSON）`按钮，点击即可下载 JSON 格式的字幕文件

![bilibili-ex-3](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/ai/bilibili/bilibili-ex-3.jpg)

## 🪄 2. AI 文本处理与优化指令

把字幕 JSON 文件丢给 AI 模型，让它在提示词限制下输出我们期待的优质阅读体验文案

```markdown
# AI 文本处理与优化指令

## 核心任务

对语音转文字文本进行标准化处理，提升准确性、流畅度及可读性，同时严格保留原文语义。

## 处理步骤

### 1. 文本纠错与规范化

- 将繁体中文转换为简体中文
- 修正错别字、同音字误用及语序不通顺处
- 删除口吃、重复等冗余内容
- 对可能缺失的内容用括号（）进行补充说明

### 2. 句子结构与标点优化

- 拆分过长句子，提升可读性
- 添加准确的中文标点（逗号、句号、问号、感叹号）
- 将英文双引号“”转换为中文引号「」
- 统一将代词「Ta」转换为「Ta」

### 3. 语言风格调整

- 将口语化表达转换为精炼、准确的书面语言
- **重要：严禁删除或修改原文语义和核心信息**

### 4. 对话角色区分

- 如文本含多角色对话，需明确区分说话人（使用换行或简单角色标识）

### 5. 内容结构化

- 为每个主题添加详细、精准的总结标题
- 使用 Markdown 标题分级：
  - 二级标题 `##` 用于主要章节
  - 三级标题 `###` 用于子章节
```
