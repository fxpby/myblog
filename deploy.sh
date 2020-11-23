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
git push -f https://github.com/fxpby/myblog.git master:gh-pages

# cd -
