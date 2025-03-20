---
id: house-robber-ii
title: 213. 打家劫舍 II
tags:
  - 动态规划
---

## 题目描述

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

示例  1：

```js
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```

示例 2：

```js
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

示例 3：

```js
输入：nums = [1,2,3]
输出：3
```

提示：

- 1 `<=` nums.length `<=` 100
- 0 `<=` nums[i] `<=` 1000

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

  const removeFirst = nums.slice(1);
  const removeLast = nums.slice(0, nums.length - 1);

  const dp1 = [removeFirst[0], Math.max(removeFirst[0], removeFirst[1])];
  const dp2 = [removeLast[0], Math.max(removeLast[0], removeLast[1])];

  for (let i = 2; i < removeFirst.length; i += 1) {
    dp1[i] = Math.max(removeFirst[i] + dp1[i - 2], dp1[i - 1]);
  }

  for (let i = 2; i < removeLast.length; i += 1) {
    dp2[i] = Math.max(removeLast[i] + dp2[i - 2], dp2[i - 1]);
  }

  const res = Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
  return res ? res : Math.max(removeFirst[0], removeLast[0]);
};
```
