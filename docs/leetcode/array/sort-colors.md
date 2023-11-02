---
id: sort-colors
title: 75. 颜色分类
tags:
  - 数组
  - 双指针
---

## 题目描述

给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

示例 1：

```js
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
```

示例 2：

```js
输入：nums = [2,0,1]
输出：[0,1,2]
```

提示：

- n == nums.length
- 1 <= n <= 300
- nums[i] 为 0、1 或 2

## 解题方法

### 方法一: 双指针

- 思路: 设置两个指针，l 指向 0（头部），r 指向 2（尾部），跳过中间的 1，遇到 0 就放到头部指针位置，遇到 2 就放到尾部指针位置
- 复杂度分析：
  - 时间复杂度：O(n)
  - 空间复杂度：O(1)

```js
const swap = (arr,i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

var sortColors = function(nums) {
  let len = nums.length
  let left = 0
  let right = len - 1

  // 因为 right 指针后面的元素都是 2 了，但并不是 right 指向的这个位置也是 2，所以是 <=
  for (let i = 0; i <= right; i += 1) {
    if (nums[i] === 0) {
      swap(nums, i, left)
      left ++
    } else if (nums[i] === 2) {
      swap(nums, i, right)
      right --
      i --
    }
  }
};
```
