---
id: quick-sort
title: 快速排序
tags:
  - 排序
---

## 实现思路

- 分区：从数组中选择一个基准，所有比基准小的元素放在基准前，比基准大的放在基准后
- 递归：递归对基准前后子数组进行分区

## 代码实现

### 方法一：原地排序

- 复杂度分析：
  - 时间复杂度：O(nlogN)
  - 空间复杂度：O(1)

```js
const quickSort = (arr, lo = 0, hi = arr.length) => {
  if (hi - lo <= 1) {
    return;
  }
  const p = partition(arr, lo, hi);
  quickSort(arr, lo, p);
  quickSort(arr, p + 1, hi);
  return arr;
};

const partition = (arr, lo, hi) => {
  // 基准值取最右边的
  const pivot = arr[hi - 1];
  let i = lo;
  let j = hi - 1;
  // 小于中心点范围: [lo, i)
  // 未确认范围: [i, j) 或者 [i, j - 1]
  // 大于中心点范围: [j, hi - 1)  ...中心点 hi, 占了一位所以是开区间
  while (i !== j) {
    if (arr[i] <= pivot) {
      i++;
    } else {
      swap(arr, i, j - 1);
      j--
    }
  }
  // 当 i === j 时，未确认范围 [i, j - 1] 左边已经大于右边，交换中心点
  swap(arr, j, hi - 1);
  return j;
};

const swap = (arr, i1, i2) => {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};
const a = [1, 8, 3, 9, 4, 5, 7];

quickSort(a);
```

### 方法二：非原地排序

- 复杂度分析：
  - 时间复杂度：O(nlogN)
  - 空间复杂度：O(n)

```js
const quickSort = (arr) => {
  const rec = (gap) => {
    if (gap.length <= 1) {
      return gap;
    }
    const mid = gap[0];
    // 存放基准前数组
    const left = [];
    // 存放基准后数组
    const right = [];
    for (let i = 1; i < gap.length; i++) {
      if (gap[i] < mid) {
        left.push(gap[i]);
      } else {
        right.push(gap[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  return rec(arr);
};
```
