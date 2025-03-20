---
id: symmetric-tree
title: 101. 对称二叉树
tags:
  - 二叉树
  - dfs
  - bfs
---

## 题目描述

给你一个二叉树的根节点 root ， 检查它是否轴对称。

示例 1：
![symtree1](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)

```js
输入：root = [1,2,2,3,4,4,3]
输出：true
```

示例 2：
![symtree2](https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg)

```js
输入：root = [1,2,2,null,3,null,3]
输出：false
```

提示：

- 树中节点数目在范围 [1, 1000] 内
- -100 `<=` Node.val `<=` 100

## 解题方法

### 方法一：dfs

- 思路：

  - 深度优先遍历，判断二叉树是否为镜像的话，需要比较子树的对称位置是否相同，即左子树的左侧与右子树的右侧，左子树的右侧和右子树的左侧

- 步骤：

  - 判断两棵树节点
    - 都为空则相同
    - 一个为空另一个不为空，不同
    - 节点都有值但是 val 不同，不同
    - 递归他们的左子树和右子树

- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(n)，递归层数

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const dfs = (left, right) => {
    if (left === null && right === null) {
      return true;
    }
    if (left === null || right === null) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    return dfs(left.left, right.right) && dfs(left.right, right.left);
  };
  return dfs(root.left, root.right);
};
```

### 方法二: bfs

- 思路：

  - 广度优先遍历，将互为镜像的节点加入队列比较

- 步骤：

  - 初始化队列，入队根节点的左节点和右节点
  - 取队头前两项，比较值
  - 将两个节点的左右子节点按照相反的顺序插入队列
  - 当队列为空时或者比较的节点值不同时，结束循环

- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(n)，队列长度

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const queue = [root.left, root.right];
  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (left === null && right === null) {
      continue;
    }
    if (left === null || right === null) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }
  return true;
};
```
