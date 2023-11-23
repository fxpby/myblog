---
id: min-triangle-path-sum
title: 120. 三角形最小路径和
tags:
  - 动态规划
---

给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

示例 1：

```js
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
```

示例 2：

```js
输入：triangle = [[-10]]
输出：-10
```

提示：

- 1 <= triangle.length <= 200
- triangle[0].length == 1
- triangle[i].length == triangle[i - 1].length + 1
- -10^4 <= `triangle[i][j]` <= 10^4

## 解题方法

### 方法一：动态规划

```js
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length === 1) {
    return triangle[0][0]
  }
  const level = triangle.length

  const dp = [...triangle].map(item => item.map(i => i))
  for (let i = level - 2; i >= 0; i --) {
    for (let j = 0; j < triangle[i].length; j += 1) {
      dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
    }
  }
  return dp[0][0]
};
```

### 方法二：动态规划 + 空间压缩

```js
var minimumTotal = function(triangle) {
  if (triangle.length === 1) {
    return triangle[0][0]
  }
  const level = triangle.length

  const dp = [...triangle[level - 1]]
  for (let i = level - 2; i >= 0; i --) {
    for (let j = 0; j < triangle[i].length; j += 1) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }
  return dp[0]
};
```
