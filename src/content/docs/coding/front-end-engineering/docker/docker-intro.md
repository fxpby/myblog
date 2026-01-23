---
id: docker-intro
title: docker 概览
tags:
  - 工程化
  - docker
---

## docker 是什么

一种虚拟化方案

### docker 的底层技术

- Linux Cgroups: Linux 内核的一种可以限制进程所使用资源的机制，可以对进程内存、CPU 进行精细控制
- Linux Namespaces: Linux 内核的一种对内核资源进行区分的机制

## docker 基本操作

### Linux 安装

```bash
sudo wget -q0- https://get.docker.com/ | bash
```

### Mac/windows 安装

### 容器 Container

运行起来的、带有虚拟化环境的程序（本质是进程）

### 镜像 Image

构建打包好的环境

### DockerHub

类似 NPM 库的概念，共享打包的镜像

### 运行容器

```bash
# pull image
docker pull jenkins:2.60.3

# run a container
docker run jenkins:2.60.3
```

### 进入容器 停止容器

```bash
# 进入容器
docker attach 194e8715dc9f

# 停止容器
docker stop 194e8715dc9f
```
