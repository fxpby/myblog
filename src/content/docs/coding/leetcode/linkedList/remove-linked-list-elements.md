---
id: remove-linked-list-elements
title: 203. 移除链表元素
tags:
  - 链表
  - 迭代
---

## 题目描述

给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

示例 1：

```js
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

示例 2：

```js
输入：head = [], val = 1
输出：[]
```

示例 3：

```js
输入：head = [7,7,7,7], val = 7
输出：[]
```

提示：

- 列表中的节点数目在范围 [0, 104] 内
- 1 `<=` Node.val `<=` 50
- 0 `<=` val `<=` 50

## 解题方法

### 方法一：迭代+虚拟头结点

- 思路：初始化虚拟头结点和指向 head 的指针 temp，指针后移，判断下一节点值是否为 val
  - 若相等，则指针指向下下个节点，即删除了下一个节点
  - 若不等，则继续后移
- 复杂度分析：
  - 时间复杂度：O(n)，n 为链表长度，需遍历链表一次
  - 空间复杂度：O(1)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;

  while (temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return dummyHead.next;
};
```

### 方法二：递归

- 思路：对每个子节点调用 removeElements，如果是 null 就返回 null，如果是给定值就返回当前节点的下一个节点，不是则返回当前节点
- 复杂度分析：
  - 时间复杂度：O(n),链表长度，需遍历链表一次
  - 空间复杂度：O(n),链表长度，取决于递归调用栈，最多为 n

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  if (head.val === val) {
    return head.next;
  } else {
    return head;
  }
};
```
