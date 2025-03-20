---
id: maximum-depth-of-binary-tree
title: 104. 二叉树的最大深度
tags:
  - 二叉树
  - dfs
  - bfs
---

## 题目描述

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

示例：
给定二叉树 [3,9,20,null,null,15,7]，

```js
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

## 解题方法

### 方法一：dfs

- 思路：
  - 求最大深度，考虑使用深度优先遍历
  - 遍历过程中，记录每个节点的层级，找出最大层级

- 步骤：
  - 创建变量记录最大深度
  - 深度优先遍历树，记录每个节点的层级，更新最大深度变量
  - 返回最大深度变量

- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(n)/O(logN)，最好情况是O(logN),最差是O(n)

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
 * @return {number}
 */
var maxDepth = function(root) {
  let res = 0
  const dfs = (n, l) => {
    if (!n) {
      return
    }
    if (!n.left && !n.right) {
      res = Math.max(res, l)
    }
    if (n.left) {
      dfs(n.left, l + 1)
    }
    if (n.right) {
      dfs(n.right, l + 1)
    }
  }
  dfs(root, 1)
  return res
}
```

### 方法二：bfs

- 思路：
  - 使用广度优先遍历，记录深度

- 步骤：
  - 创建变量记录最大深度
  - 广度优先遍历树，每层遍历完，如果下一层还有节点，深度`+1`
  - 返回最大深度遍历

- 复杂度分析：
  - 时间复杂度：O(n), 每个节点遍历一次
  - 空间复杂度：O(n)，每个节点遍历一次

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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  const queue = [root]
  let level = 1
  while (queue.length) {
    const queueSize = queue.length
    for (let i = 0; i < queueSize; i += 1) {
      const node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    if (queue.length) {
      level += 1
    }
  }
  return level
}
```
