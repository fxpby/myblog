---
id: merge-k-sorted-lists
title: 23. 合并K个升序链表
tags:
  - 堆
  - 快速排序
---

## 题目描述

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

示例 1：

```js
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

示例 2：

````js
输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[]
``` 

提示：

- k == lists.length
- 0 `<=` k `<=` 10^4
- 0 `<=` lists[i].length `<=` 500
- -10^4 `<=` lists[i][j] `<=` 10^4
- lists[i] 按 升序 排列
- lists[i].length 的总和不超过 10^4

## 解题方法

### 方法一：最小堆

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  getParentIndex(index) {
    return (index - 1) >> 1;
  }

  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].val > this.heap[index].val
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  getLeftIndex(index) {
    return index * 2 + 1;
  }

  getRightIndex(index) {
    return index * 2 + 2;
  }

  shiftDown(index) {
    const getLeftIndex = this.getLeftIndex(index);
    const getRightIndex = this.getRightIndex(index);
    if (
      this.heap[getLeftIndex] &&
      this.heap[getLeftIndex].val < this.heap[index].val
    ) {
      this.swap(getLeftIndex, index);
      this.shiftDown(getLeftIndex);
    }
    if (
      this.heap[getRightIndex] &&
      this.heap[getRightIndex].val < this.heap[index].val
    ) {
      this.swap(getRightIndex, index);
      this.shiftDown(getRightIndex);
    }
  }

  pop() {
    if (this.size() === 0) {
      return
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
  }

  findMinimum () {
    return this.size() === 0 ? undefined : this.heap[0]
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}
var mergeKLists = function(lists) {
  const h = new MinHeap()
  const res = new ListNode(0)
  let p = res
  lists.forEach(x => {
    if(x) {
      h.insert(x)
    }
  })
  while (h.size()) {
    const n = h.pop()
    p.next = n
    p = p.next
    if (n.next) {
      h.insert(n.next)
    }
  }
  return res.next
};
````
