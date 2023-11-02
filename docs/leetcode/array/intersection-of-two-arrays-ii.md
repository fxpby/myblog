---
id: intersection-of-two-arrays-ii
title: 350. 两个数组的交集 II
tags:
  - 数组
  - 双指针
---

## 题目描述

给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序

示例 1：

```js
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```

示例 2:

```js
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```

提示：

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

```js
var intersect = function(nums1, nums2) {
  const map = {}
  const res = []
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }

  for (let i of nums1) {
    if (map[i]) {
      map[i] += 1
    } else {
      map[i] = 1
    }
  }

  for (let i of nums2) {
    if (map[i] > 0) {
      res.push(i)
      map[i] -= 1
    }
  }
  return res
}
```

```js
sect = function(nums1, nums2) {
  nums1 = nums1.sort((a,b) => a - b)
  nums2 = nums2.sort((a,b) => a - b)

  const res = []

  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i += 1
    } else if (nums1[i] > nums2[j]) {
      j += 1
    } else {
      res.push(nums1[i])
      i += 1
      j += 1
    }
  }
  return res
};
```
