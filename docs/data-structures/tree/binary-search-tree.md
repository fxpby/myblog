---
id: binary-search-tree
title: 二叉搜索树
tags:
  - 二叉搜索树
---

## 1. 性质

- 二叉搜索树是一颗二叉树，可以为空
- 不为空时：
  - 非空左子树的所有键值小于其根节点的键值
  - 非空右子树的所有键值大于其根节点的键值
  - 左右子树本身也是二叉搜索树

## 2. 遍历方式

### 2.1 先序遍历

- 访问根节点
- 对根节点的左子树进行先序遍历
- 对根节点的右子树进行先序遍历

![reOrderTraversal](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/datastructures-algorithm/preOrderTraversal.png)

### 2.2 中序遍历

### 2.3 后序遍历