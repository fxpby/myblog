---
id: insertion-sort
title: 插入排序
tags:
  - 排序
---

## 实现思路

- 从第二个数开始往前比
- 前一个比它大就往后排
- 以此类推

## 代码描述

```js
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i += 1) {
    let compare = arr[i]
    let j = i
    while (j > 0 && compare < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j --
    }
    arr[j] = compare;
  }
  return arr;
}
```

## 复杂度分析

- 时间复杂度：O(n^2)
- 空间复杂度：O(1)
