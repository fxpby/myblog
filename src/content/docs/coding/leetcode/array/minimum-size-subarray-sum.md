---
id: minimum-size-subarray-sum
title: 209. 长度最小的子数组
tags:
  - 数组
  - 双指针
  - 滑动窗口
---

## 题目描述

给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：

```js
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

示例 2：

```js
输入：target = 4, nums = [1,4,4]
输出：1
```

示例 3：

```js
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

提示：

- 1 `<=` target `<=` 109
- 1 `<=` nums.length `<=` 105
- 1 `<=` nums[i] `<=` 105

## 解题方法

### 方法一：双指针

- 思路：
  - `[i, j] >= target` 时，扩张窗口，条件仍满足，但是就不是最小数组了；所以应收缩窗口，即右移左指针至条件不再满足
  - `[i, j] < target` 时, 扩张窗口，右移右指针
- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(1)

```js
var minSubArrayLen = function (target, nums) {
  let res = Infinity;
  let l = 0;
  let r = 0;
  let sum = 0;

  while (r < nums.length) {
    sum += nums[r];
    while (sum >= target) {
      res = Math.min(res, r - l + 1);
      sum -= nums[l];
      l += 1;
    }
    r += 1;
  }

  return res === Infinity ? 0 : res;
};
```
