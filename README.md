# 邂逅大大小小陆 / Serendipity Haven

个人博客与文档网站，使用 Astro 5.0 + Starlight 构建，主题涵盖编程、健身、营养科学、摄影、音乐理论等多个领域。

- 🌐 在线访问：[https://serendipityhaven.com/](https://serendipityhaven.com/)
<!-- - 💻 GitHub：[https://github.com/fxpby](https://github.com/fxpby) -->

## 技术栈

- **框架**：Astro 5.0
- **主题**：Starlight (Astro 文档主题)
- **前端框架**：React 19 + TypeScript 5.6
- **UI 组件库**：Chakra UI 2.10 + Framer Motion
- **内容格式**：MDX
- **部署目标**：
  - 腾讯云自建服务器

## 目录结构

```bash
myblog/
├── public/                 # 静态资源（图片、favicon 等）
├── src/
│   ├── components/         # React 组件
│   │   ├── Footer.astro    # 自定义页脚
│   │   ├── Header.astro    # 自定义头部
│   │   └── WorkoutCycleCalculator/  # 健身计算器组件
│   ├── content/
│   │   └── docs/           # MDX 文档内容
│   │       ├── coding/     # 编程相关
│   │       ├── workout/    # 锻炼相关
│   │       ├── nutrition-science/  # 营养科学
│   │       ├── music-theory/       # 基础乐理
│   │       ├── photography/        # 摄影
│   │       ├── ai/         # AI 工具
│   │       ├── tools/      # 工具使用指南
│   │       ├── dishes/     # 菜谱
│   │       └── reading/    # 阅读笔记
│   ├── pages/
│   │   └── index.astro     # 首页
│   └── styles/
│       └── custom.css      # 自定义样式
├── astro.config.mjs        # Astro 配置文件
├── package.json
└── README.md
```

## 快速开始

### 环境要求

- Node.js >= 18.0
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn
```

### 本地开发

```bash
# 默认配置
npm run start

# GitHub Pages 配置（baseUrl: /myblog/）
npm run start-github

# 自建服务器配置（baseUrl: /）
npm run start-host
```

### 构建

```bash
# 默认构建
npm run build

# GitHub Pages 构建
npm run build-github

# 自建服务器构建
npm run build-host
```

### 预览构建结果

```bash
npm run preview
```

### 类型检查

```bash
npm run typecheck
```

## 内容分类

### 编程

- 前端四剑客（HTML、CSS、JavaScript、TypeScript）
- 前端框架（Vue、React、Supabase）
- 前端工程化（构建工具、CI/CD、Docker、发布策略）
- 浏览器
- 设计模式
- 计算机网络（缓存、HTTP）
- 数据结构与算法

### 锻炼

- 周期训练设计（含交互式计算器）
- 《肌骨重建》
- NSCA CSCS
- 物理治疗

### 营养科学

- 功能营养素
- 维生素
- 医学常识
- 科学减脂
- 抗衰老

<!-- ### 功能医学

- 内分泌系统与激素 -->

### 基础乐理

- 音程、和弦等理论知识

### 菜谱

- 汤类等食谱

### 摄影

- 《iPhone 手机摄影指南》

### AI

- MCP 服务器
- API 工具链
- n8n 自动化

### 阅读

- 读书笔记

### 工具

- Obsidian 使用指南

## 部署

### GitHub Pages

项目配置了 GitHub Actions 工作流 (`.github/workflows/ci.yml`)：

- 触发条件：推送到 `master` 分支或创建 PR
- 自动构建并部署到 `gh-pages` 分支

### 腾讯云自建服务器

项目配置了 SSH 部署工作流 (`.github/workflows/host.yml`)：

- 触发条件：推送到 `master` 分支
- 通过 SSH 连接到服务器并部署

环境变量 `DEPLOY_SERVER` 控制部署目标的 URL 配置。

## 特性

- 🎨 基于 Starlight 主题，支持暗色模式
- 📱 响应式设计，适配移动端
- 🔄 支持多环境部署（GitHub Pages / 自建服务器）
- 🖍️ 使用 Chakra UI 的交互式组件
- 📝 MDX 支持，可在内容中嵌入 React 组件
- 🗺️ 自动生成站点地图
<!-- - 📊 集成 Google Analytics -->

## 许可证

MIT
