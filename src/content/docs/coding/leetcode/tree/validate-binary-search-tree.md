---
id: validate-binary-search-tree
title: 98. 验证二叉搜索树
tags:
  - 二叉树
  - dfs
  - bfs
---

## 题目描述

给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

- 节点的左子树只包含 小于 当前节点的数。
- 节点的右子树只包含 大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

示例 1：

```js
输入：root = [2,1,3]
输出：true
```

示例 2：

```js
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
```

提示：

- 树中节点数目范围在[1, 104] 内
- -2^31 `<=` Node.val `<=` 2^31 - 1

## 解题方法

### 方法一：dfs

```js
var isValidBST = function(root) {
  if (!root) {
    return []
  }
  const rec = (node, min, max) => {
    if (node, min, max) {
      if (min >= node.val || max `<=` node.val) {
        return false
      }
      return rec(node.left, min, node.val) && rec(node.right, node.val, max)
    }
  }
  rec(root, -Infinity, Infinity)
  return true
}
```

### 方法二：bfs
