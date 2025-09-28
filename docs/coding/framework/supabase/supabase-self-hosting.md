---
sidebar_position: 1
---

# supabase 自部署

## 1. 什么是 supabase

Supabase 是一个基于 PostgreSQL 的开源开发平台

提供了易于使用的 API 来处理常见的后端任务，如用户认证、数据库操作、文件存储和服务器端函数等

Supabase 的目标是简化 Web 和移动应用的开发过程，让开发者能够专注于核心业务逻辑

## 2. Docker 部署

### 2.1 部署准备

安装 Docker 和 Docker compose，配好镜像源

正好实操时镜像源这里卡壳了，找到了个可用的贴一下

```json
{
  "registry-mirrors": ["https://docker.1ms.run", "https://docker.xuanyuan.me"]
}
```

### 2.2 安装和运行

先执行官网文档的部分命令

```bash
# Get the code
git clone --depth 1 https://github.com/supabase/supabase
# Make your new supabase project directory
mkdir supabase-project
# Tree should look like this
# .
# ├── supabase
# └── supabase-project
# Copy the compose files over to your project
cp -rf supabase/docker/* supabase-project
# Copy the fake env vars
cp supabase/docker/.env.example supabase-project/.env
# Switch to your project directory
cd supabase-project
# Pull the latest images
docker compose pull
```

pull 可能会比较长时间，这时候我们来看一下`/supabase/docker/.env`中的内容，里面有一些关键的配置项
