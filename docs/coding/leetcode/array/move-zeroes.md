---
id: move-zeroes
title: 283. 移动零
tags:
  - 数组 
  - 双指针
---

## 题目描述

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:

```js
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

示例 2:

```js
输入: nums = [0]
输出: [0]
```

## 解题方法

### 方法一: 两次遍历

- 思路：定义变量为数组第一个元素索引，遍历数组遇到非0的就给这个变量位置的元素赋值，一轮遍历结束后，变量的大小就是非0元素的个数。紧接着继续一轮遍历，变量后面的元素都搞成0
- 复杂度分析
  - 时间复杂度：O(n)
  - 空间复杂度：O(1)

```js
var moveZeroes = function(nums) {
  let j = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j += 1
    }
  }

  for (let i = j; i < nums.length; i += 1) {
    nums[i] = 0
  }
}
```

### 方法二：双指针

- 思路：定义俩指针，右指针遍历数组，遇到非0元素就和前指针元素交换位置,左指针自增
- 复杂度分析
  - 时间复杂度：O(n)
  - 空间复杂度：O(1)

```js
const swap = (i, j, nums) => {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

var moveZeroes = function(nums) {
  let i = 0
  let j = 0
  while (j < nums.length) {
    if (nums[j] !== 0) {
      swap(i, j, nums)
      i += 1
    }
    j += 1
  }
}
```
