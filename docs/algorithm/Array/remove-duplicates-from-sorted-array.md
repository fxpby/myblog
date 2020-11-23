<!--
 * @Author: your name
 * @Date: 2020-11-23 23:53:37
 * @LastEditTime: 2020-11-24 00:05:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\docs\algorithm\Array\remove-duplicates-from-sorted-array.md
-->

# 删除排序数组中的重复项

## 题目描述

给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。  
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.  

eg1:  

```js
给定数组 nums = [1,1,2],
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
你不需要考虑数组中超出新长度后面的元素。
```

eg2:  

```js
给定 nums = [0,0,1,1,1,2,2,3,3,4],
函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
你不需要考虑数组中超出新长度后面的元素。
```

## 解题方法

### 方法一

* 思路：遍历数组，若当前项和下一项相同，删除当前项，再和删除后的下一项进行比较

* 性能分析：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   for(let i = 0; i < nums.length - 1; i++) {
       if(nums[i] === nums[i + 1]) {
           nums.splice(i, 1)
           i--
       }
   }
   return nums.length
};
```
