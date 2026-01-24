---
id: binary-tree-level-order-traversal
title: 102. 二叉树的层序遍历
tags:
  - 二叉树
  - dfs
  - bfs
---

## 题目描述

给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

示例 1：

```js
    3
   / \
  9  20
    /  \
   15   7
```

```js
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

示例 2：

```js
输入：root = [1]
输出：[[1]]
```

示例 3：

```js
输入：root = []
输出：[]
```

提示：

树中节点数目在范围 [0, 2000] 内
-1000 `<=` Node.val `<=` 1000

## 解题方法

### 方法一：bfs

- 思路：

  - 使用广度优先遍历
  - 遍历过程中，记录每个节点的层级，将其推入不同层级数组中

- 步骤：

  - 创建变量记录结果和队列
  - 广度优先遍历树，记录每个节点的层级，同层级的节点 val 推入相同层级数组中，将层级数组推入结果数组中。如果当前节点有左右子树，则压入队列。（while 循环的每一轮中，都是将当前层的所有节点出队列，再将下一层的所有节点压入队列，这样就实现了层序遍历）
  - 返回结果数组

- 复杂度分析：
  - 时间复杂度：O(n)，每个节点进队出队各一次
  - 空间复杂度：O(n)，队列中元素最多 n 个

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let res = [];
  while (queue.length) {
    let queueSize = queue.length;
    const levelRes = [];
    while (queueSize) {
      const node = queue.shift();
      levelRes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      queueSize--;
    }
    res.push(levelRes);
  }
  return res;
};
```

### 方法二：dfs

- 思路：

  - 使用深度优先遍历
  - 遍历过程中，记录每个节点的层级，将其推入不同层级数组中

- 步骤：

  - 创建变量记录结果
  - 深度优先遍历树，记录每个节点的层级，同层级的节点 val 推入相同层级数组中，将层级数组推入结果数组中
  - 返回结果数组

- 复杂度分析：
  - 时间复杂度：O(n)，n 为二叉树节点数
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const dfs = (node, level, res) => {
    if (node) {
      if (!res[level]) {
        res[level] = [];
      }
      res[level].push(node.val);
      dfs(node.left, level + 1, res);
      dfs(node.right, level + 1, res);
    }
  };
  dfs(root, 0, res);
  return res;
};
```
