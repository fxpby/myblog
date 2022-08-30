---
id: climbing-stairs
title: 70. 爬楼梯
tags:
  - 动态规划
  - 双指针
---

## 题目描述

假设你正在爬楼梯。需要 n  阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

示例 1：

```js
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

示例 2：

```js
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

提示：

- 1 <= n <= 45

## 解题方法

### 方法一：动态规划

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }
  const dp = [1, 1];
  for (let i = 2; i <= n; i += 1) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};
```

### 方法二：动态规划 + 双指针

![climbing-stairs](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/leetcode/climbing-stairs/climbing-stairs.png)

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }
  let dp1 = 1;
  let dp2 = 1;
  for (let i = 2; i <= n; i += 1) {
    const temp = dp1;
    dp1 = dp2;
    dp2 = dp2 + temp;
  }
  return dp2;
};
```

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }
  let dp1 = 0;
  let dp2 = 0;
  let dp3 = 1;
  for (let i = 1; i <= n; ++i) {
    dp1 = dp2;
    dp2 = dp3;
    dp3 = dp2 + dp1;
  }
  return dp3;
};
```
