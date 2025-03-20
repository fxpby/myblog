<!--
 * @Author: your name
 * @Date: 2020-11-29 23:01:17
 * @LastEditTime: 2020-11-29 23:03:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog-docs\docs\algorithm\array\merge-sorted-array.md
-->

# 合并两个有序数组

## 题目描述

给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。  
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

说明：
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例：

输入：
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出：[1,2,2,3,5,6]

## 解题方法

### 方法一

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m
    nums2.length = n
    let left = 0
    let right = 0
    let result = []
    while(left < m && right < n) {
        if(nums1[left] < nums2[right]){
            result.push(nums1[left])
            left++
        } else {
            result.push(nums2[right])
            right++
        }
    }
    result = result.concat(nums1.slice(left)).concat(nums2.slice(right))
    for(let i = 0; i < result.length; i++) {
        nums1[i] = result[i]
    }
};
```
