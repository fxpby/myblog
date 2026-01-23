---
id: remove-duplicates-from-sorted-list
title: 83. 删除排序链表中的重复元素
tags:
  - 链表
  - 迭代
  - 递归
  - 双指针
  - 快慢指针
---

## 题目描述

存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

返回同样按升序排列的结果链表。

```js
输入：head = [1,1,2]
输出：[1,2]

输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

## 解题方法

### 方法一：单指针+迭代

- 思路：
  - 因为是已经排序过的，所以重复元素都是相邻的，迭代指针，比较节点和next节点值是否相同即可
- 步骤：
  - 创建指针指向头节点，迭代指针
  - 若指针当前值和next指针值相同，把当前next指向next.next
- 复杂度分析：
  - 时间复杂度：O(N), N 为链表长度
  - 空间复杂度：O(1)，存储单个值

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
var deleteDuplicates = function (head) {
  let p = head;

  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }

  return head;
};
```

### 方法二：双指针+迭代

- 思路：
  - 创建 prev 和 cur 两个节点，分别指向 head 和 head.next
  - 判断 prev 和 cur 值是否相等
    - 相等则 prev.next = cur.next，即删除 cur 节点,cur 继续后移
    - 不等则后移 prev，cur 也继续后移
  - 直至 cur 到最后，返回 head
- 复杂度分析：
  - 时间复杂度：O(n)
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let prev = head;
  let cur = head.next;

  while (prev && cur) {
    if (prev.val === cur.val) {
      prev.next = cur.next;
    } else {
      prev = prev.next;
    }
    cur = cur.next;
  }

  return head;
};
```

### 方法三：虚拟头节点+迭代

- 思路：创建虚拟头节点指向 head，cur 节点指向头部 head.next
  - cur or cur.next 为 null 时，说明链表没有去重的必要了
  - 如果 cur.val 和 cur.next.val 相等则去重
  - 如果不等移动 cur 指针
- 复杂度分析：
  - 时间复杂度：O(n),n 为链表长度
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) {
    return head;
  }

  let dummyHead = new ListNode(0, head);
  let cur = dummyHead.next;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummyHead.next;
};
```

### 方法四：递归

- 思路：递归执行到链表最后，从后向前处理；遇到相同节点，就删除 head.next节点，返回 head
- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(n)

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
var deleteDuplicates = function (head) {
  if (head === null) {
    return head;
  }
  if (head.next !== null) {
    head.next = deleteDuplicates(head.next);
    if (head.val === head.next.val) {
      head.next = head.next.next;
    }
  }
  return head;
};
```

### 方法五：快慢指针

- 思路：
  - 快慢指针都指在头部，
  - 快指针一直往前走，如果两个指针值不相等，慢指针的next指向快指针`slow.next = fast`,去除重复元素；`slow = fast`同步慢指针位置
  - 慢指针就是最终结果尾部，去除后续链接，断掉慢指针后面所有重复元素，返回 head

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
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (fast) {
    if (slow.val !== fast.val) {
      slow.next = fast;
      slow = slow.next;
    }
    fast = fast.next;
  }
  // 断尾，删除多余重复元素
  slow.next = null;
  return head;
};
```
