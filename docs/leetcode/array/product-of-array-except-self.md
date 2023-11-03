---
id: product-of-array-except-self
title: 238. 除自身以外数组的乘积
tags:
  - 数组
---

## 题目描述

给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

示例 1:

```js
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
```

示例 2:

```js
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
```

提示：

- 2 <= nums.length <= 105
- -30 <= nums[i] <= 30
- 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内

## 解题方法

### 方法一

- 思路：使用两个并列for循环，一个for循环拿到数组当前索引之前的所有数的积，另一个循环拿到数组当前索引之后的所有数的积，最后将两个循环后的值相乘即可得到答案
- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度: O(1)

```js
var productExceptSelf = function (nums) {
  let res = []
  res[0] = 1

  for (let i = 1; i < nums.length; i += 1) {
    res[i] = res[i - 1] * nums[i - 1]
  }

  let right = 1

  for (let i = nums.length - 1; i >= 0; i --) {
    res[i] *= right
    right *= nums[i]
  }

  return res
}
```
