---
id: heap
title: 堆
tags:
  - 堆
---

## 最小堆

```js
class MinHeap {
  constructor() {
    this.heap = []
  }

  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
}
```

### 插入

- 将值插入堆的底部（数组尾部）
- 上移，将此值和它的父节点进行交换，直到父节点小于等于这个插入的值
- 大小为 k 的堆中插入元素的时间复杂度为 O(logk)

```js
class MinHeap {
  constructor() {
    this.heap = []
  }

  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }

  getParentIndex (index) {
    return (index - 1) >> 1
  }

  shiftUp(index) {
    if (index === 0) {
      return
    }
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
}

const minHeap = new MinHeap()
minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(1)
console.log(minHeap.heap)
```

### 删除堆顶

- 用数组尾部元素替换堆顶
- 下移，将新堆顶和它的子节点进行交换，直到子节点大于等于这个新堆顶
- 大小为 k 的堆中删除堆顶的时间复杂度为 O(logk)

```js
class MinHeap {
  constructor() {
    this.heap = []
  }

  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }

  getParentIndex (index) {
    return (index - 1) >> 1
  }

  shiftUp(index) {
    if (index === 0) {
      return
    }
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  getLeftIndex(index) {
    return index * 2 + 1
  }

  getRightIndex(index) {
    return index * 2 + 2
  }

  shiftDown(index) {
    const getLeftIndex = this.getLeftIndex(index)
    const getRightIndex = this.getRightIndex(index)
    if (this.heap[getLeftIndex] < this.heap[index]) {
      this.swap(getLeftIndex, index)
      this.shiftDown(getLeftIndex)
    }
    if (this.heap[getRightIndex] < this.heap[index]) {
      this.swap(getRightIndex, index)
      this.shiftDown(getRightIndex)
    }
  }

  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
}

const minHeap = new MinHeap()
minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(1)
minHeap.pop()
console.log(minHeap.heap)
```

### 获取堆顶和堆的大小

- 获取堆顶：返回数组头部
- 获取堆的大小：返回数组长度

```js
class MinHeap {
  constructor() {
    this.heap = []
  }

  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }

  getParentIndex (index) {
    return (index - 1) >> 1
  }

  shiftUp(index) {
    if (index === 0) {
      return
    }
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  getLeftIndex(index) {
    return index * 2 + 1
  }

  getRightIndex(index) {
    return index * 2 + 2
  }

  shiftDown(index) {
    const getLeftIndex = this.getLeftIndex(index)
    const getRightIndex = this.getRightIndex(index)
    if (this.heap[getLeftIndex] < this.heap[index]) {
      this.swap(getLeftIndex, index)
      this.shiftDown(getLeftIndex)
    }
    if (this.heap[getRightIndex] < this.heap[index]) {
      this.swap(getRightIndex, index)
      this.shiftDown(getRightIndex)
    }
  }

  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }

  peek () {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }
}

const minHeap = new MinHeap()
minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(1)
minHeap.pop()
console.log(minHeap.heap)
```
