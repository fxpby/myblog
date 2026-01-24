---
id: maximum-subarray
title: 53. 最大子数组和
tags:
  - 动态规划
---

## 题目描述

给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。

示例 1：

```js
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

示例 2：

```js
输入：nums = [1]
输出：1
```

示例 3：

```js
输入：nums = [5,4,-1,7,8]
输出：23
```

提示：

- 1 `<=` nums.length `<=` 105
- -104 `<=` nums[i] `<=` 104

## 解题方法

### 方法一：动态规划

- 复杂度分析
  - 时间复杂度：O(N)
  - 空间复杂度: O(N)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    result = Math.max(result, dp[i]);
  }
  return result;
};
```

### 方法二：动态规划+空间优化

- 复杂度分析
  - 时间复杂度：O(N)
  - 空间复杂度: O(1)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    pre = Math.max(pre + nums[i], nums[i]);
    result = Math.max(result, pre);
  }
  return result;
};
```
