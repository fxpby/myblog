# 初探GitHub Actions: 实现VuePress自动化部署

## 背景

之前写了篇介绍用Travis CI自动化部署的，谁知。。。他竟然、竟然收费了😭, 静茹姐姐给我的勇气看了一眼费用, 没眼看, 我不配😥

![expensive](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/expensive.png)

已经陷入自动化部署温床的我, 立刻就去寻找替代品了, 今天试一下这个GitHub Actions吧~

## GitHub Actions是什么

actions见名知意是一堆动作, 这一系列的动作包括了pull代码, 测试代码, 编译代码, 登陆服务器, 发布第三方服务等操作, GitHub把这些行为叫做actions

## 集成 GitHub Actions 部署到 GitHub Page

### 设置github

#### 手动创建一个gh-pages分支

在`Source`中选择`gh-pages`分支，以后我们生成的静态文件存放在这里

![github-pages-config](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/github-page.png)

### 创建github token

点击我们右上角的个人头像，点击`Settings`

![](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/github-setting.png)

来到`Developer settings`，点击`Personal access tokens`， 再点击`Generate new token`

![Personal access tokens](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/setting-personal-access-tokens.png)

![generate new token](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/generate-new-token.png)

接下来选择权限, `Note`随便写，下面权限的话勾选如图所示，保存后会得到`Personal access tokens`一个token串，只展示一次，这个请妥善保存，以后如果想访问需要更新

![select oauth](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/select-access.png)

![access-tokens](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/access-tokens.png)

我们保存一下这个token, 一会儿要用

### 设置Actions secrets

name填写ACCESS_TOKEN, value填写刚才保存的token

![new-secret](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/new-secret.png)

![acess-token](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/assce-token.png)

### 创建xx.yml文件

项目中自己手动新建.yml 文件名随意起,github会自动运行workflows目录下所有的yml文件, 其中workflow中的一些配置比较重要:

- name: workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名

- on: 触发workflow的条件, 比如push就是 git push 时触发这个workflow

- jobs: 包含workflow要执行的任务

ci.yml全部配置如下

```yml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Checkout 🐤
        uses: actions/checkout@v2

      # Runs a single command using the runners shell
      # - name: Install and Build 🎄
      # run: npm install && npm run docs:build

      # Runs a set of commands using the runners shell
      - name: Install and Build 🎄
        run: |
          npm install
          npm run docs:build
          
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: docs/.vuepress/dist

```

## 集成 GitHub Actions 部署到阿里云

## 测试

修改代码，push上去, 可以看到构建日志, 不到两分钟,也是很快的~

![build-status](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/build-status.png)

![workflows](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/workflows.png)

## Reference

> <https://docs.github.com/cn/actions/learn-github-actions/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows>