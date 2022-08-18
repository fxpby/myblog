---
id: top-k-frequent-elements
title: 347. 前 K 个高频元素
tags:
  - 堆
  - 快速排序
---

## 题目描述

给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

示例 1:

```js
输入: (nums = [1, 1, 1, 2, 2, 3]), (k = 2);
输出: [1, 2];
```

示例 2:

```js
输入: (nums = [1]), (k = 1);
输出: [1];
```

提示：

- 1 <= nums.length <= 105
- k 的取值范围是 [1, 数组中不相同的元素的个数]
- 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的

进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n  是数组大小。

## 解题方法

### 方法一：最小堆

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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
      this.heap[parentIndex].value > this.heap[index].value
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
      this.heap[getLeftIndex].value < this.heap[index].value
    ) {
      this.swap(getLeftIndex, index);
      this.shiftDown(getLeftIndex);
    }
    if (
      this.heap[getRightIndex] &&
      this.heap[getRightIndex].value < this.heap[index].value
    ) {
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
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((x) => {
    map.set(x, map.has(x) ? map.get(x) + 1 : 1);
  });
  const h = new MinHeap();
  map.forEach((value, key) => {
    h.insert({ value, key });
    if (h.size() > k) {
      h.pop();
    }
  });
  return h.heap.map((x) => x.key);
};
```

### 方法二：数组

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((x) => {
    map.set(x, map.has(x) ? map.get(x) + 1 : 1);
  });
  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0])
    .slice(0, k);
};
```
