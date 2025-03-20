---
id: sort-array-by-parity-ii
title: 922. 按奇偶排序数组 II
tags:
  - 数组
  - 双指针
  - 位运算
---

## 题目描述

给定一个非负整数数组 nums， nums 中一半整数是 奇数 ，一半整数是 偶数 。

对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。

你可以返回 任何满足上述条件的数组作为答案 。

示例 1：

```js
输入：nums = [4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
```

示例 2：

```js
输入：nums = [2,3]
输出：[2,3]
```

提示：

- 2 `<=` nums.length `<=` 2 \* 104
- nums.length 是偶数
- nums 中一半是偶数
- 0 `<=` nums[i] `<=` 1000

## 解题方法

### 方法一：双指针

- 思路：循环偶数位（+2），遇到奇数时，应该循环奇数位置（+2）直到遇到偶数，将奇数与偶数交换位置
- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(1)

```js
var sortArrayByParityII = function (nums) {
  let i = 1;
  let j = 0;

  // 循环偶数位
  while (j < nums.length && i < nums.length) {
    // 遇到奇数
    if (nums[j] & 1) {
      // 循环奇数位置，知道遇到第一个偶数
      while (nums[i] & 1) {
        i += 2;
      }
      // 交换位置
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    j += 2;
  }
  return nums;
};
```
