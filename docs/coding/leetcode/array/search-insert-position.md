<!--
 * @Author: your name
 * @Date: 2020-11-26 23:02:49
 * @LastEditTime: 2020-11-28 23:28:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog-docs\docs\algorithm\array\search-insert-position.md
-->

# 搜索插入位置

## 题目描述

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

```js
示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0
```

## 解题方法

### 方法一

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length; // target为最大值或者nums为空
};
```

### 方法二

- 二分法

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left `<=` right) {
        let mid = (left + right) >>> 1
        if(nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return left
};
```

### 补充知识点

- 无符号位移运算符

  `>>>` 无符号右移，因为右侧多余位被丢弃了，左侧补 0，所以符号位为 0，结果是非负的。  
  MDN 上翻译为 unsigned right shift operator (>>>) (zero-fill right shift)，即`零-填充`

  ```js
    N>>>1 就代表N的二进制右移一位，二进制右移一位就能得到左中间值。
    7的二进制是 00000000 000000000 00000000 00000111， 右移一位，左边补0，即 00000000 000000000 00000000 00000011，十进制为3
  ```

- 有符号位移运算符

  `<<` 有符号左移，向左移除指定位数，右侧补`0`
  `>>` 有符号右移，向右移除指定位数，左侧补符号位（二进制中的第一位）

  ```js
    5的二进制是 00000000 000000000 00000000 00000101
    5<<2，向左移除2位，右侧补零得到 00000000 000000000 00000000 00010100 即 2^4 + 2^2 = 16 + 4 = 20

    5>>2，向右移除2位，左侧补零得到 00000000 000000000 00000000 00000001，即1
  ```

- 当需要移位的数为正数时，有符号位移`>>`和无符号位移`>>>`是相同的。
- 当需要移位的数为负数时，有符号位移`>>`的结果为负数，无符号位移`>>>`的结果为正数。

- 取中位数索引
  1. 取中位数索引：`mid = (left + right)/2`
     这样就是最小值+最大值求和除以 2，但是在一些语言中，比如 java，mid 如果是 int 类型，那么`left + right`的最大值就可能会出现整型溢出的情况，为了避免这种情况，我们有了第二种方法。
  2. 取左中位数索引：`mid = left + (right - left)/2`  
     取右中位数索引：`mid = left + (right - left + 1)/2`
  3. 更好的方法就是使用`>>>`无符号右移，即  
     取左中位数索引：`mid = (left + right) >>> 1`  
     取右中位数索引：`mid = (left + right + 1) >>> 1`
