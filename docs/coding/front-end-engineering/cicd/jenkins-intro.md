---
id: jenkins-intro
title: Jenkins 持续集成与部署简介
tags:
  - 工程化
---

## Jenkins 介绍

一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署服务

## Jenkins 的使用

### 执行 CI - Git Webhook 触发

GitHub 和 gitlab 都提供了 webhook 功能，利用 webhook 可以通知 Jenkins 开始 CI/CD 任务

![github-webhook](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/cicd/github-webhook.png)

### Jenkins Pipeline

Jenkins 提供了一种 DSL（领域特定语言），用于开发者编写自定义的 CI/CD 流程，这个流程在 Jenkins 中叫做 Pipeline（管道）

通常 CI 平台都会提供类似的 DSL：Ant/shell 等

### 远程部署

Pipeline 一般用来构建项目，构建的结果会保留在构建机中，可以利用 Jenkins 的 Publish Over SSH 插件，实现远程发布功能，即将代码通过 SSH 传输到服务器上

### 结果通知

结合 git commiter 信息，可以通知对应开发者发布结果

- Extended E-mail Notification 插件：邮件通知
- dingTalk 插件：钉钉通知
