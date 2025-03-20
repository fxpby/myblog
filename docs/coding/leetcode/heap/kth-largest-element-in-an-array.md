---
id: kth-largest-element-in-an-array
title: 215. 数组中的第K个最大元素
tags:
  - 堆
  - 快速排序
  - 排序
---

## 题目描述

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

示例 1:

```js
输入: [3, 2, 1, 5, 6, 4], (k = 2);
输出: 5;
```

示例  2:

```js
输入: [3, 2, 3, 1, 2, 4, 5, 5, 6], (k = 4);
输出: 4;
```

提示：

- 1 `<=` k `<=` nums.length `<=` 105
- -104 `<=` nums[i] `<=` 104

## 解题方法

### 方法一：最小堆

- 思路

  - 求第 k 个最大元素，需要先对数组排序，再找出第 K 个最大元素，可以考虑使用最小堆

- 步骤
  - 把数组的值插入最小堆中
  - 当堆容量超过 K 时,删除堆顶
  - 插入结束，堆顶就是第 K 个最大元素

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
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
    if (this.heap[parentIndex] > this.heap[index]) {
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
    if (this.heap[getLeftIndex] < this.heap[index]) {
      this.swap(getLeftIndex, index);
      this.shiftDown(getLeftIndex);
    }
    if (this.heap[getRightIndex] < this.heap[index]) {
      this.swap(getRightIndex, index);
      this.shiftDown(getRightIndex);
    }
  }

  pop() {
    if (this.size() === 0) {
      return;
    }
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}
var findKthLargest = function (nums, k) {
  const heap = new MinHeap();
  nums.forEach((x) => {
    heap.insert(x);
    if (heap.size() > k) {
      heap.pop();
    }
  });
  return heap.peek();
};
```
