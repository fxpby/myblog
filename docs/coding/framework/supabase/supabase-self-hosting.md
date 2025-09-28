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

```env
POSTGRES_PASSWORD=your-super-secret-and-long-postgres-password
JWT_SECRET=your-super-secret-jwt-token-with-at-least-32-characters-long
ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE
SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJzZXJ2aWNlX3JvbGUiLAogICAgImlzcyI6ICJzdXBhYmFzZS1kZW1vIiwKICAgICJpYXQiOiAxNjQxNzY5MjAwLAogICAgImV4cCI6IDE3OTk1MzU2MDAKfQ.DaYlNEoUrrEn2Ig7tqibS-PHK5vgusbcbo7X36XVt4Q
DASHBOARD_USERNAME=supabase
DASHBOARD_PASSWORD=this_password_is_insecure_and_should_be_updated
SECRET_KEY_BASE=UpNVntn3cDxHJpq99YMc1T1AQgQpc8kfYTuRgBiYa15BLrx8etQoXz3gZv1/u2oq
VAULT_ENC_KEY=your-encryption-key-32-chars-min
```

- `POSTGRES_PASSWORD`：数据库密码，自己设置即可
- `JWT_SECRET`: JWT 密钥
  - 来到[密钥生成地址](https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys)
  - ![supabase-self-hosting1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting1.jpg)
  - 这里每次进入页面都会生成一个随机的`JWT Secret`，复制当前的即可
- `ANON_KEY`: 根据`JWT_SECRET`生成，下拉框选中后点击下方`Generate JWT`按钮生成
- `SERVICE_ROLE_KEY`: 根据`JWT_SECRET`生成，下拉框选中后点击下方`Generate JWT`按钮生成
- `DASHBOARD_USERNAME`: 面板用户名
- `DASHBOARD_PASSWORD`: 面板密码
- `SECRET_KEY_BASE`: 可用`openssl rand -base64 48`随机数生成器生成
- `VAULT_ENC_KEY`: 32 位自定义
