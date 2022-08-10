---
id: binary-tree-inorder-traversal
title: 94. 二叉树的中序遍历
tags:
  - 二叉树
  - dfs
  - bfs
---

## 题目描述

给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

示例 1：

```js
  1
    \
    2
    /
  3
```

```js
输入：root = [1,null,2,3]
输出：[1,3,2]
```

示例 2：

```js
输入：root = []
输出：[]
```

示例 3：

```js
输入：root = [1]
输出：[1]
```

提示：

- 树中节点数目在范围 [0, 100] 内
- -100 <= Node.val <= 100

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const dfs = (node) => {
    if (node.left) {
      dfs(node.left);
    }
    res.push(node.val);
    if (node.right) {
      dfs(node.right);
    }
  };
  dfs(root);
  return res;
};
```
