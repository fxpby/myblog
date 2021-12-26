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
