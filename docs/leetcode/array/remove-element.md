<!--
 * @Author: your name
 * @Date: 2020-11-24 22:17:20
 * @LastEditTime: 2020-11-24 23:49:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog\docs\algorithm\Array\remove-element.md
-->

# 移除元素

## 题目描述

给你一个数组 nums 和一个值 val，你需要 `原地` 移除所有数值等于 val 的元素，并返回移除后数组的新长度。  
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 `原地` `修改输入数组`。  
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。  

Given an array nums and a value val, remove all instances of that value `in-place` and return the new length.  
Do not allocate extra space for another array, you must do this by `modifying the input array in-place` with O(1) extra memory.  
The order of elements can be changed. It doesn't matter what you leave beyond the new length.  

示例 1:  
给定 nums = [3,2,2,3], val = 3,
函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。  
你不需要考虑数组中超出新长度后面的元素。

示例 2:  
给定 nums = [0,1,2,2,3,0,4,2], val = 2,
函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。  
注意这五个元素可为任意顺序。
你不需要考虑数组中超出新长度后面的元素。

## 解题方法

### 方法一

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0){
        return 0
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};
```

### 方法二

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0){
        return 0
    }
    let i = 0
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val) {
            nums[i] = nums[j]
            i++
        }
    }
    return i
};
```

### 方法三

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0){
        return 0
    }
    let i = 0
    let j = nums.length
    while(i < j) {
        if(nums[i] === val) {
            nums[i] = nums[j - 1]
            j--
        } else {
            i++
        }
    }
    return i
};
```