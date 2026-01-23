---
id: invert-binary-tree
title: 226. 翻转二叉树
tags:
  - 二叉树
  - dfs
  - bfs
---

## 题目描述

给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

示例 1：
![invert1-tree](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)

```js
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

示例 2：
![invert2-tree](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)

```js
输入：root = [2,1,3]
输出：[2,3,1]
```

示例 3：

```js
输入：root = []
输出：[]
```

提示：

- 树中节点数目范围在 [0, 100] 内
- -100 `<=` Node.val `<=` 100

## 解题方法

### 方法一：dfs

- 思路：

  - 前序遍历/后序遍历

- 步骤：

  - 前序遍历根节点左子树右子树，先处理当前节点（交换左右子树），再递归子树
  - 遍历到 null，没有子树可交换，返回子树（null）

- 复杂度分析
  - 时间复杂度：O(n)，所有节点都需访问一次
  - 空间复杂度：O(n)，最坏情况为树的高度

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
```

### 方法二：bfs

- 思路：
  - 层序遍历二叉树
  - 遍历到 null，没有子树可交换，返回子树（null）
- 步骤：

  - 根节点入列
  - 队头出队，交换左右子树
  - 左右子节点入队
  - 队列为空时，所有节点遍历结束，子树均被翻转

- 复杂度分析
  - 时间复杂度：O(n)，每个节点都需入队出队一次
  - 空间复杂度：O(n)，包含所有叶子节点

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
};
```
