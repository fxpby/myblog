# 二分搜索

## 实现思路

- 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
- 如果目标值大于或者小于中间元素，则在大于或小于中间元素的那一半数组中搜索

## 代码实现

```js
// arr 要有序哦
const binarySearch = (arr, target) => {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    const pivot = arr[mid];
    if (pivot < target) {
      lo = mid + 1;
    } else if (pivot > target) {
      hi = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
```

## 复杂度分析

- 时间复杂度：O(logN)，每次比较都缩小一半搜索范围
- 空间复杂度：O(1)，只额外存储 3 个变量
