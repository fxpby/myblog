---
id: selection-sort
title: 选择排序
tags:
  - 排序
---

## 实现思路

- 找到数组中的最小值，选中它并将其放置在第一位
- 继续找到第二小的值，选中它并将其放置在第二位
- 以此类推，执行 n - 1 轮

## 代码实现

```js
const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      const temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}

selectionSort([6,5,4,3,2,1])
```

## 复杂度分析

- 时间复杂度：O(n^2)，两个嵌套循环
- 空间复杂度：O(1)
