# 83. 删除排序链表中的重复元素

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

### 方法一：迭代

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
var deleteDuplicates = function(head) {
  let p = head

  while(p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return head
};
```