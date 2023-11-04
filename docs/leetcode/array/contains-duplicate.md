---
id: contains-duplicate
title: 217. 存在重复元素
tags:
  - 数组
  - 哈希表
---

## 题目描述

给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

示例 1：

```js
输入：nums = [1,2,3,1]
输出：true
```

示例 2：

```js
输入：nums = [1,2,3,4]
输出：false
```

示例 3：

```js
输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true
```

提示：

- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109

## 解题方法

### 方法一：排序

- 思路: 先排序，如果有重复元素则一定相邻，故判断是否有相邻元素即可
- 复杂度分析：
  - 时间复杂度：O(nlogn)
  - 空间复杂度：O(logn), 排序栈空间

```js
var containsDuplicate = function(nums) {
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
};
```

### 方法二：哈希表

- 思路：遍历数组往hash表存，如果有存过，则为重复
- 复杂度分析
  - 时间复杂度：O(n)
  - 空间复杂度：O(n)

```js
var containsDuplicate = function(nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true
    } else {
      map[nums[i]] = 1
    }
  }
  return false
};
```
