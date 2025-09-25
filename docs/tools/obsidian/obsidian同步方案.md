# obsidian 同步方案

## 1. 背景

现代人谁没有记录文字的习惯呢，那么笔记类应用就是人手必备的存在了

市面上笔记类应用那么多，选择哪个合适呢，这个结果肯定是因人而异的，每个人的使用偏好不同

笔者属于又菜又爱玩的那种，之前浅浅尝试过语雀、notion、trilium、appflowy、memos 等等，折腾尝试也是个快乐的过程，当然最重要的还是笔记内容本身吧...

自己对这类应用的最基本要求有三（四）点

1. 数据私有
2. 版本控制
3. 多端使用（Mac&Windows&iOS&Android）
4. 尽量别花钱了...（服务器/硬件/OSS 不算，指订阅）

obsidian 这个黑曜石很热门，一直没用过，这就想试试了，看了些教程说明试用后，面临的第一个问题就是`数据同步`，于是开始了调研踩坑致郁之路...记录一下

## 2. 主流同步方案对比

### 2.1 方案一：官方同步

#### 2.1.1 同步原理

各端笔记通过官方服务器，转发给其他设备

#### 2.1.2 常见实现方式

官方同步

#### 2.1.3 优点

- 稳定
- 简单
- 版本控制

#### 2.1.4 缺点

收费（5 美元/月）

#### 2.1.5 小结

无上手难度，安全稳定无坑无问题，土豪请随意

### 2.2 方案二：云盘同步

#### 2.2.1 同步原理

- 各端笔记在第三方插件的配合下，上传到云盘
- 其他设备从云盘下载并更新本地文件

#### 2.2.2 常见实现方式

- 坚果云
- onedrive
- iCloud

#### 2.2.3 优点

- 免费
- 版本控制

#### 2.2.4 缺点

- 上传下载流量限制（可能会导致文件数据异常）
- 存储容量限制

#### 2.2.5 小结

云盘这个有免费的倒是，但是有看到很多帖子提到上传下载流量限制会导致数据出问题的

数据永远最重要，这个问题个人主观觉得还是蛮致命的吧，看个人考虑了，笔者不采纳

### 2.3 方案三： 自建存储

#### 2.3.1 同步原理

- 各端笔记在第三方插件的配合下，上传到私有储存空间
- 其他设备从私有空间下载并更新本地文件

#### 2.3.2 常见实现方式

- 本地 NAS
- 云 OSS

#### 2.3.3 优点

- 零成本
- 低成本

#### 2.3.4 缺点

- 硬件 or 买服务
- 有学习成本

#### 2.3.5 小结

适合 NAS 玩家和程序员

笔者莫得 NAS

手头有在用的云 OSS 服务，这样的话考虑到流量，需要所有图片转图床链接，看起来是 OK 的，但仍需考虑版本控制场景，产生额外心智负担，git 的话手机端不方便，故暂不考虑

### 2.4 方案四：代码托管平台

#### 2.4.1 同步原理

- 各端笔记在第三方插件的配合下，将文件差异推送到托管平台
- 其他设备从托管平台拉取文件差异后，更新本地文件

#### 2.4.2 常见实现方式

- github
- gitee

#### 2.4.3 优点

- 免费
- 版本控制

#### 2.4.4 缺点

- 存储容量限制

#### 2.4.5 小结

适合程序员

这个方式，其实就是变相把 GitHub 当网盘使了，但是有了最好的版本控制。不过这个版本控制是手动的，移动设备也是不方便，整体看还是不优雅的

### 2.5 方案五：点对点同步

#### 2.5.1 同步原理

- 各端笔记在同步软件的配合下将笔记文件直接转发给局域网内经过认证的设备

#### 2.5.2 常见实现方式

- Syncthing
- remotely-save
- self-hosted liveSync

#### 2.5.3 优点

- 免费
- 无流量容量限制
- 版本控制

#### 2.5.4 缺点

- 公网同步问题
- iOS 支持不好

#### 2.5.5 小结

笔者是 iOS 用户，所以先把不支持 iOS 的都排除掉，搜到了个 `self-hosted liveSync` 插件，然后就开始了轻微致郁的踩坑部署之旅

这个插件网上教程很少，官网文档结合能查到的教程折腾蛮久最终是部署好了。

但是使用上多设备数据同步是有问题的，无奈了，浅浅记录一下部署流程吧，按照这个走肯定能部署成功的

## 3. `self-hosted liveSync` 部署流程

### 3.1 部署 CouchDB 数据库

docker-compose 配置:

```yml
services:
  couchdb:
    image: couchdb:latest
    container_name: couchdb-for-ols
    user: 5984:5984
    environment:
      - COUCHDB_USER=user_name # 账号
      - COUCHDB_PASSWORD=passport # 密码
    volumes:
      - ./couchdb-data:/opt/couchdb/data
      - ./couchdb-etc:/opt/couchdb/etc/local.d
    ports:
      - 5984:5984
    restart: unless-stopped
```

然后有很重要的一步，就是创建挂载目录修改权限，否则 couchDB 无法读写

```bash
mkdir -p ./couchdb-data ./couchdb-etc
sudo chown -R 5984:5984 ./couchdb-data ./couchdb-etc
```

拉取运行容器

```bash
docker-compose up -d
```

执行完成后就可以通过 `http://ip:5984/_utils` 访问数据库了

### 3.2 初始化数据库

官方的一键脚本

```bash
# 添加环境变量
export hostname=localhost:5984
# 之前 docker-compose.yml 配置里设置的账号密码
export username=user_name
export password=passport
# 执行脚本
curl -s https://raw.githubusercontent.com/vrtmrz/obsidian-livesync/main/utils/couchdb/couchdb-init.sh | bash
```

结果如下时，初始化完成

```txt
-- Configuring CouchDB by REST APIs... -->
{"ok":true}
""
""
""
""
""
""
""
""
""
<-- Configuring CouchDB by REST APIs Done!
```

- 进入 http://ip:5894/\_utils 并输入账号密码登入
- 进入 `Databases`，点击`Create Database`创建一个数据库，名称随便起，比如`obsidian-notes`
- `Partitioning`分区选择第一个`Non-partitioned`

### 3.3 配置 nginx 反向代理

移动端需要 SSL 证书，仅局域网电脑端可以跳过此步骤

nginx 配置如下：

```conf
server {
    listen 80;
    server_name 反代域名;
    return 301 https://$host$request_uri;
}
server {
    listen 443 ssl http2;
    server_name 反代域名;
    ssl_certificate 证书路径;
    ssl_certificate_key 密钥路径;
    location / {
        proxy_pass http://127.0.0.1:5984;
        proxy_redirect off;
        proxy_buffering off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    client_max_body_size 0;
}
```

### 3.4 Obsidian 客户端 Self-hosted Livesync 插件设置

1. 社区下载 `Self-hosted Livesync` 插件并启用，可切换一下中文语言
2. 点击卫星按钮进入远程配置

- 远程类型：`CouchDB`
- 服务器 URI：`https://反代的域名`（使用移动端同步）或 `http://ip:5984`（只在局域网内使用且仅使用电脑端同步）
- 用户名：`CouchDB` 账号
- 密码：`CouchDB` 密码
- 数据库名称：创建的 `CouchDB` 数据库名称如 `obsidian-notes`
- 点击测试数据库连接，出现 `Connect to` 数据库名称，则连接成功
- 再点击 `check` 检查按钮，全是绿勾则成功，有错误就选择 `fix` 修正
- `Property Encryption` 设置密码，开启端对端加密
- 切换到同步设置，选择同步模式 `LiveSync`，即实时同步

至此配置完成，不过就算这样也建议使用 `git` 来控制维护版本，而不是完全依赖 `livesync`，毕竟数据第一位

## 4. 方案总结一览

| 方案名称     | 同步原理                                                                                             | 常见实现方式                                  | 优点                          | 缺点                           | 上手难度 | 适合群体            | 备注                                                                                   |
| ------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------- | ------------------------------ | -------- | ------------------- | -------------------------------------------------------------------------------------- |
| 官方同步     | 各端笔记通过官方服务器，转发给其他设备                                                               | 官方同步                                      | 稳定/ 简单/ 版本控制          | 收费（5 美元/月）              | ⭐       | 有钱用户            | 无上手难度，安全稳定无坑无问题，土豪请随意                                             |
| 云盘同步     | 各端笔记在第三方插件的配合下，上传到云盘/其他设备从云盘下载并更新本地文件                            | 坚果云/ OneDrive/ iCloud                      | 免费/ 版本控制                | 上传下载流量限制/ 存储容量限制 | ⭐⭐     | 网盘用户 / 苹果用户 | 上传下载流量限制可能会导致数据异常                                                     |
| 自建存储     | 各端笔记在第三方插件的配合下，上传到私有储存空间/其他设备从私有空间下载并更新本地文件                | 本地 NAS/ 云 OSS                              | 零成本/ 低成本                | 需购买 / 租用硬件/ 有学习成本  | ⭐⭐⭐⭐ | NAS 用户 / 程序员   | 适合 NAS 玩家和程序员；若使用云 OSS 服务，需将图片转图床链接；版本控制有额外心智负担虑 |
| 代码托管平台 | 各端笔记在第三方插件的配合下，将文件差异推送到托管平台/ 其他设备从托管平台拉取文件差异后更新本地文件 | GitHub/ Gitee                                 | 免费/ 版本控制                | 存储容量限制                   | ⭐⭐⭐   | 程序员              | 适合程序员；变相把 GitHub 当网盘使，git 操作移动设备不方便                             |
| 点对点同步   | 各端笔记在同步软件的配合下将笔记文件直接转发给局域网内经过认证的设备                                 | Syncthing/remotely-save/ self-hosted liveSync | 免费/无流量容量限制/ 版本控制 | 公网同步问题/ iOS 支持不好     | ⭐⭐⭐⭐ | 程序员 / 普通用户   | 插件工具多，需结合个人设备使用场景                                                     |
