---
id: merge-two-sorted-lists
title: 21. 合并两个有序链表
tags:
  - 链表
  - 迭代
  - 递归
---

## 题目描述

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例 1：

```js
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

示例 2：

```js
输入：l1 = [], l2 = []
输出：[]
```

示例 3：

```js
输入：l1 = [], l2 = [0]
输出：[0]
```

## 解题方法

### 方法一：递归

- 步骤
  - 从链表头部开始比较大小，小的就是合并后新链表的最小值,再用较小的 `next.val` 和较大的 `val` 比较递归
  - 若两个链表有一个为空，结束递归
- 复杂度分析
  - 时间复杂度：O(n + m),n，m 分别为两个链表长度，每次递归都会去掉 list1 或 list2 的头节点直至至少一个链表为空
  - 空间复杂度：O(n + m),n，m 分别为两个链表长度,递归调用栈空间取决于递归的深度

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  if (list1.val `<=` list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};
```

### 方法二：迭代

- 步骤
  - 创建一个新链表
  - 比较两个链表头，把小的存入新链表，向后移动一步
  - 若有一个链表遍历结束了，直接把剩余部分追加到新链表即可（有序）
- 复杂度分析
  - 时间复杂度：O(n + m)
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const newList = new ListNode(0);
  let cur = newList;
  while (list1 && list2) {
    if (list1.val `<=` list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 ? list1 : list2;
  return newList.next;
};
```
