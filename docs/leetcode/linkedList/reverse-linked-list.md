# 206. 反转单链表 Reverse Linked List

## 题目描述

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

Given the head of a singly linked list, reverse the list, and return the reversed list.

```js
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

输入：head = [1,2]
输出：[2,1]

输入：head = []
输出：[]
```

## 解题方法

### 方法一：双指针迭代

- 思路：
  - 定义俩指针，pre指针指向null，cur指针指向head，然后去遍历移动cur指针，当cur为null时，pre就指向最后一个节点了
- 步骤：
  - 定义 pre 指针指向 null，cur 指针指向 head
  - 遍历 cur 指针，将 cur 的 next 节点赋值给 pre, 即反转节点指向
  - 向右移动 pre 和 cur 节点
  - 当 cur 指针为 null 时，pre 指针指向最后一个节点，此时返回 pre
- 复杂度分析：
  - 时间复杂度：O(N), N 为链表长度
  - 空间复杂度：O(1), 没有数组/矩阵，存储单个值

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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let cur = head
  let pre = null

  while(cur !== null) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp  
  }

  return pre
};
```

### 方法二：递归

- 复杂度分析：
  - 时间复杂度：O(N), N 为链表长度
  - 空间复杂度：O(N), N 为链表长度

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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === next) {
    return head
  }
  let newHead = new reverseList(head.next)
  head.next.next = head
  head.next = null

  return newHead
};
```
