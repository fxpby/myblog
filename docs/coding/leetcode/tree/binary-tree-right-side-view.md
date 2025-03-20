---
id: binary-tree-right-side-view
title: 199. 二叉树的右视图
tags:
  - 二叉树
  - dfs
  - bfs
---

## 题目描述

给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例 1：

```js
    1  ←
   / \
  2   3  ←
   \   \
    5   4  ←
```

```js
输入: [1, 2, 3, null, 5, null, 4];
输出: [1, 3, 4];
```

示例 2:

```js
输入: [1, null, 3];
输出: [1, 3];
```

示例 3:

```js
输入: [];
输出: [];
```

提示:

- 二叉树的节点个数的范围是 [0,100]
- -100 `<=` Node.val `<=` 100

### 方法一：dfs

- 思路：

  - 使用深度优先遍历
  - 遍历过程中，记录每个节点的层级，使用前序遍历的反向遍历，根 => 右 => 左，即可拿到右视图

- 步骤：

  - 创建变量记录结果
  - 深度优先遍历树，记录每个节点的层级，如果层级和结果数组数量相同，说明为当前层级的第一次遍历，也就是右视图的节点（每层只取一个节点），把该节点推入结果数组
  - 返回结果数组

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const dfs = (node, l) => {
    if (res.length === l) {
      res.push(node.val);
    }
    if (node.right) {
      dfs(node.right, l + 1);
    }
    if (node.left) {
      dfs(node.left, l + 1);
    }
  };
  dfs(root, 0);
  return res;
};
```

### 方法二：bfs

- 思路：

  - 使用广度优先遍历
  - 遍历过程中，记录每个节点的层级，将层级最后一项其推入结果数组中

- 步骤：

  - 创建变量记录结果和队列
  - 广度优先遍历树，记录每个节点的层级，同层级的节点 val 推入相同层级数组中，将层级数组的最后一项即右视图推入结果数组中。如果当前节点有左右子树，则压入队列。（while 循环的每一轮中，都是将当前层的所有节点出队列，再将下一层的所有节点压入队列，这样就实现了层序遍历）
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    let levelRes = [];
    while (len) {
      const node = queue.shift();
      levelRes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      len--;
    }
    res.push(levelRes[levelRes.length - 1]);
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (len === 1) {
        res.push(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      len--;
    }
  }
  return res;
};
```
