---
id: house-robber
title: 198. 打家劫舍
tags:
  - 动态规划
---

## 题目描述

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：

```js
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

示例 2：

```js
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

提示：

- 1 `<=` nums.length `<=` 100
- 0 `<=` nums[i] `<=` 400

## 解题方法

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);
  for (let i = 2; i < nums.length; i += 1) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }
  return dp[nums.length - 1];
};
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let dp1 = nums[0];
  let dp2 = Math.max(dp1, nums[1]);
  for (let i = 2; i < nums.length; i += 1) {
    const temp = dp2;
    dp2 = Math.max(dp2, nums[i] + dp1);
    dp1 = temp;
  }
  return dp2;
};
```
