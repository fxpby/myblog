# 初探Travis CI: 实现vuepress自动化部署  

## 背景

之前使用Vuepress写博客是 写md文档 => 提交 => 使用配好的`deploy.sh`文件发布。
感觉还是有些麻烦的，要是可以代码提交后自动部署发布就舒服了，搜了下相关资料，看上了Travis CI，原因是觉得他logo好看😎，哈哈，其实是因为配置简洁，市场份额大，还免费。

## 搭建Vuepress

嘿嘿，说声抱歉，Vuepress如何搭建这里就不详细介绍了，官网文档详细的，本文主角是Travis CI😇，vitepress也出来好久了，回头去试试他再写个记录文档吧，立个flag🚩

## 集成Travis CI

Travis CI使用它的前提是：  

- 有github账号（目前bitbucket\gitlab
assembla好像也可以了）  
- 账号里有项目
- 项目里代码可以跑
- 项目包含构建脚本

### 设置github
