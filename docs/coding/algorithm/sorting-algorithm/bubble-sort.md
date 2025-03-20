---
id: bubble-sort
title: 冒泡排序
tags:
  - 排序
---

## 实现思路

- 比较所有相邻元素，如果第一个比第二个大，则交换位置
- 一轮下来，可以保证最后一个数是最大的

## 代码描述

```js
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
};

bubbleSort([5, 3, 2, 1]);
```

## 复杂度分析

- 时间复杂度：O(n^2), 两层嵌套循环
- 空间复杂度: O(1)，在原数组上进行操作，原地排序
