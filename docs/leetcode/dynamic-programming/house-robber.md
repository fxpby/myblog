---
id: house-robber
title: 198. 打家劫舍
tags:
  - 动态规划
  - 双指针
---

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
