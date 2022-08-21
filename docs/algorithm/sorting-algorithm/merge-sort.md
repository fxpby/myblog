---
id: merge-sort
title: 选择排序
tags:
  - 排序
---

## 实现思路

- 分：把数据分成两半，递归对子数组进行分半操作，直到分成一个个单独的元素
- 合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组
  - 创建结果数组
  - 比较两个有序数组头部，较小的出队并推入结果数组
  - 如果两个数组还有值，重复上一步

## 代码描述

```js
const mergeSort = arr => {
  const rec = gap => {
    if (gap.length === 1) {
      return gap
    }
    const mid = gap.length >>> 1
    const left = gap.slice(0, mid)
    const right = gap.slice(mid, gap.length)
    const orderLeft = rec(left)
    const orderRight = rec(right)

    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  return rec(arr)
}

mergeSort([6,5,4,3,2,1])
```

## 复杂度分析

- 时间复杂度：分：O(logN)，合：O(n), 故最终为 O(n * logN)
- 空间复杂度：O(n),临时数组递归压入合并数组占用的空间，最多 n 个元素
