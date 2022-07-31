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

学习前先种一棵二叉搜索树吧！🌱

```js
const bt = {
  val: '11',
  left: {
    val: '7',
    left: {
      val: '5',
      left: {
        val: '3',
        left: null,
        right: null
      },
      right: {
        val: '6',
        left: null,
        right: null
      },
    },
    right: {
      val: '9',
      left: {
        val: '8',
        left: null,
        right: null
      },
      right: {
        val: '10',
        left: null,
        right: null
      },
    }
  },
  right: {
    val: '15',
    left: {
      val: '13',
      left: {
        val: '12',
        left: null,
        right: null,
      },
      right: {
        val: '14',
        left: null,
        right: null,
      },
    },
    right: {
      val: '20',
      left: {
        val: '18',
        left: null,
        right: null,
      },
      right: {
        val: '25',
        left: null,
        right: null,
      }
    }
  }
}
```

- 访问根节点
- 对根节点的左子树进行先序遍历
- 对根节点的右子树进行先序遍历

![reOrderTraversal](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/datastructures-algorithm/preOrderTraversal.png)

```js
const preOrder = root => {
  if (!root) {
    return
  }
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}
```

结果为：11 7 5 3 6 9 8 10 15 13 12 14 20 18 25

### 2.2 中序遍历

- 对根节点的左子树进行先序遍历
- 访问根节点
- 对根节点的右子树进行先序遍历

![inOrderTraversal](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/datastructures-algorithm/inOrderTraversal.png)

```js
const inOrder = root => {
  if (!root) {
    return
  }
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}
```

结果为：3 5 6 7 8 9 10 11 12 13 14 15 18 20 25

### 2.3 后序遍历

- 对根节点的左子树进行先序遍历
- 对根节点的右子树进行先序遍历
- 访问根节点

![postOrderTraversal](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/datastructures-algorithm/postOrderTraversal.png)

```js
const postOrder = root => {
  if (!root) {
    return
  }
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}
```

结果为：3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
