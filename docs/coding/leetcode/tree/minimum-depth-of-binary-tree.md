---
id: minimum-depth-of-binary-tree
title: 111. 二叉树的最小深度
tags:
  - 二叉树
  - dfs
  - bfs
---

## 题目描述

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

示例 1：

```js
输入：root = [3,9,20,null,null,15,7]
输出：2
```

示例 2：

```js
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```

提示：

树中节点数的范围在 [0, 105] 内
-1000 `<=` Node.val `<=` 1000

## 解题方法

### 方法一: dfs

- 思路：

  - 使用深度优先遍历
  - 遍历过程中，记录每个节点的层级，找出最小层级

- 步骤：

  - 创建变量记录最小深度
  - 深度优先遍历树，记录每个节点的层级，判断是否为叶子节点更新最小深度变量
  - 返回最小深度变量

- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(n)

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
var minDepth = function (root) {
  let res = Infinity;
  const dfs = (n, l) => {
    if (!n) {
      res = 0;
      return;
    }
    if (!n.left && !n.right && res) {
      res = Math.min(res, l);
    }
    if (n.left) {
      dfs(n.left, l + 1);
    }
    if (n.right) {
      dfs(n.right, l + 1);
    }
  };
  dfs(root, 1);
  return res;
};
```

### 方法二: bfs

- 思路：

  - 求最小深度，考虑使用广度优先遍历
  - 遍历过程中，遇到叶子节点就停止，返回节点层级

- 步骤：

  - 创建变量记录最小深度
  - 广度优先遍历树，判断是否为叶子节点记录每个节点的层级，更新最小深度变量
  - 返回最小深度遍历

- 复杂度分析：
  - 时间复杂度：O(n)，最差是 O(n)即所有节点
  - 空间复杂度：O(n),最差是 O(n)即所有节点

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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let res = 1;
  const queue = [root];
  while (queue.length) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i += 1) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return res;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (queueSize) {
      res += 1;
    }
  }
  return res;
};
```

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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const queue = [[root, 1]];
  while (queue.length) {
    const [n, l] = queue.shift();
    if (!n.left && !n.right) {
      return l;
    }
    if (n.left) {
      queue.push([n.left, l + 1]);
    }
    if (n.right) {
      queue.push([n.right, l + 1]);
    }
  }
};
```
