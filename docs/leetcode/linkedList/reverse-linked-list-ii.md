---
id: reverse-linked-list-ii
title: 92. 反转链表 II
tags:
  - 链表
  - 迭代
---

## 题目描述

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

示例 1：

```js
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
```

示例 2：

```js
输入：head = [5], left = 1, right = 1
输出：[5]
```

提示：

- 链表中节点数目为 n
- 1 <= n <= 500
- -500 <= Node.val <= 500
- 1 <= left <= right <= n

## 解题方法

### 方法一：迭代

- 思路：切断 [left 到 right] 的子链，反转后再连接
- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(1)

```js
// 复习一下 206 题的 反转单链表
const reverseList = (head) => {
  let pre = null
  let cur = head

  while (cur !== null) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}

var reverseBetween = function(head, left, right) {
  // 创建虚拟头节点
  const dummyNode = new ListNode(0, head)
  dummyNode.next = head

  let pre = dummyNode

  // 获取 left 的前一个节点
  for (let i = 0; i < left - 1; i += 1) {
    pre = pre.next
  }

  // 获取左节点
  let leftNode = pre.next

  // 获取右节点
  let rightNode = pre
  for (let i = 0; i < right - left + 1; i += 1) {
    rightNode = rightNode.next
  }

  // 获取右节点的后一个节点
  let curr = rightNode.next

  // 切断子链
  pre.next = null
  rightNode.next = null

  // 反转子链
  reverseList(leftNode)

  // 拼接
  pre.next = rightNode
  leftNode.next = curr

  return dummyNode.next
}
```
