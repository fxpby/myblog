---
title: "初探 Travis CI: 实现 VuePress 自动化部署"

sidebar_position: 1
---

# 初探 Travis CI: 实现 VuePress 自动化部署

## 背景

之前使用 VuePress 写博客是 `写md文档` => `提交github` => `使用配好的deploy.sh文件发布`这样一个流程。
`deploy.sh文件`：

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist
# git init 官网是有这行的，但我的项目里给注释掉了，因为我是现有项目，不想每次都初始化

git init
git add -A
git commit -m 'deploy'
git config --local user.name "fxpby"
git config --local user.email "fxpby@outlook.com"
git push -f https://github.com/fxpby/myblog.git master:gh-pages

# cd -
```

虽然已经半自动化了，但是感觉还是有些麻烦的，要是可以代码 push 后自动部署发布就舒服了，搜了下相关资料，看上了`Travis CI`，原因是觉得他 logo 比较酷 😎，哈哈，其实是因为配置简洁，市场份额大，还免费 🤞。

## 安装配置 VuePress

嘿嘿，说声抱歉，VuePress 如何安装配置这里就不详细介绍了，官网文档详细的，本文主角是集成 Travis CI😇，vitepress 也出来好久了，回头感兴趣也去试试他。

## 集成 Travis CI

Travis CI 使用它的前提是：

- 有 github 账号（目前 bitbucket、gitlab 和 assembla 好像也支持了）
- 账号里有项目
- 项目里代码可以跑
- 项目包含构建脚本

### 创建.travis.yml

在项目根目录新建`.travis.yml`文件，前面有`.`哦

```yml
language: node_js
node_js:
  - lts/*
install:
  - npm install
cache:
  directories:
    - "node_modules"
script:
  - npm run docs:build
deploy:
  provider: pages
  skip-cleanup: true
  local_dir: docs/.vuepress/dist
  github-token: $GITHUB_TOKEN # a token generated on github allowing travis to push code on you repository
  keep-history: true
  on:
    branch: master
```

### 设置 github

#### 手动创建一个 gh-pages 分支

在`Source`中选择`gh-pages`分支，以后我们生成的静态文件存放在这里

![github-pages-config](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/github-page.png)

#### 创建 github token

点击我们右上角的个人头像，点击`Settings`

![settings](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/github-setting.png)

来到`Developer settings`，点击`Personal access tokens`， 再点击`Generate new token`

![Personal access tokens](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/setting-personal-access-tokens.png)

![generate new token](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/generate-new-token.png)

接下来选择权限, `Note`随便写，下面权限的话勾选如图所示，保存后会得到`Personal access tokens`一个 token 串，只展示一次，这个请妥善保存，以后如果想访问需要更新

![select oauth](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/select-access.png)

![access-tokens](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/access-tokens.png)

### 配置 Travis CI

现在我们有了项目，有了构建脚本，有了 github 的 token, 还差对 Travis CI 进行一些配置，离成功只差一步 🤩

首先呢注册登录 Travis CI [https://app.travis-ci.com/](https://app.travis-ci.com/)

#### 仓库授权

对 github 仓库进行授权，可以选择所有或者指定仓库

![repo-access](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/repository-access.png)

#### 环境变量设置

选择我们 github 中的目标仓库，来到`Environment Variables`， `NAME`填写之前我们在`.travis.yml`中写的`github-token` `GITHUB_TOKEN`，还记得上一步`Personal access tokens`得到的 token 串吗，`VALUE`这里把它填进去，后面的开关也打开，最后点击`Add`按钮

![environment-variables](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/environment-variables.png)

至此，所有配置已经完成，来试一下效果 😉

### 测试效果

修改代码，push 上去，在 Travis CI 会看到构建日志，最终得到构建成功的推送，不到两分钟，还是蛮快的呢 🥳
![build-success](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/build-success.png)

## Reference

> - [https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
> - [http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)
