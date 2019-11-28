# 两数之和

## 题目描述

给定一个整数数组 nums 和一个目标值 target，在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
不能重复利用这个数组中同样的元素。

Given an array of integers, return indices of the two numbers such that they add up to a specific target.Not use the same element twice.

例如：

```javascript
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 解题方法

### 1.1暴力解法(1)

+ 思路：用数组中前面的数值与其后面的数值进行求和，比较是否与目标值相等

+ 步骤：  
  1）外循环：遍历数组中的元素  
  2）内循环：遍历数组中比外循环元素下标大1的元素，比较两个元素的和与target值相等  
  3）如果相等：则返回两个元素的下标  
  4）如果不等：继续遍历

+ 性能分析：  
  1）时间复杂度：有两层for循环，时间复杂度为O(n^2)  
  2)空间复杂度：不需要额外的空间，所以空间复杂度为O(1)

```javascript
//eg1
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length-1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i , j]
            }
        }
    }
};
```

### 1.2暴力解法(2)

+ 思路：用数组中前面的数值与其后面的数值进行求和，比较是否与目标值相等

+ 步骤：  
  1）外循环：用目标值减当前遍历的元素，得到两者的差值  
  2）内循环：遍历数组中比外循环元素下标大1的元素，比较差值sub和该循环遍历的元素值是否相等
  3）如果相等：则返回两个元素的下标  
  4）如果不相等：继续遍历

+ 性能分析：  
  1）时间复杂度：有两层for循环，时间复杂度为O(n^2)  
  2)空间复杂度：不需要额外的空间，所以空间复杂度为O(1)

```javascript
//eg2
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let sub = target - nums[i];
        for(let j = i + 1; j<nums.length;j++){
            if(nums[j] == sub){
                return [i,j]
            }
        }
    }
}
```

### 2.两遍哈希表

+ 思路：遍历数组将下标对应的元素存到散列表中，然后在散列表中查看目标值减去的值是否存在

+ 步骤：  
  1）外循环：遍历数组元素，根据下标和元素值存放到散列表中
  2）内循环：遍历数组元素，在散列表中查找sub的值
  3）如果找到：则返回两个元素的下标  
  4）如果没找到：继续遍历

+ 性能分析：  
  1）时间复杂度：时间复杂度为O(n)  
  2)空间复杂度：需要额外的n大小的空间存储散列表，所以空间复杂度为O(n)

```javascript
var twoSum = function(nums, target) {
    var map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i],i)
    }
    for(let j = 0; j<nums.length;j++){
        let sub = target - nums[j];
        if(map.has(sub) && map.get(sub) !== j){
            return [j,map.get(sub)]
        }
    }
}
```

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = {};
    for(let i = 0; i < nums.length; i++){
        if(arr[nums[i]] !== undefined)
            return[arr[nums[i]],i]
        else
            arr[target - nums[i]] = i
    }
}
```

## 英语学习

indices，是index（索引、指数）的复数，也可以用indexes表示。  
specific，英/美[spəˈsɪfɪk]  
&emsp;&emsp;adj.明确的; 具体的; 特定的; 特有的; 独特的;  
&emsp;&emsp;n.特效药; 特性; 细节; 显著的性质; 特性;  
