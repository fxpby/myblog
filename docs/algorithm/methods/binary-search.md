<!--
 * @Author: your name
 * @Date: 2020-11-27 10:38:05
 * @LastEditTime: 2020-11-27 16:20:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myblog-docs\docs\algorithm\methods\binary-search.md
-->

# 

## 背景描述

  取中位数方法：

  1. `mid = (left + right)/2`
  这样就是最小值+最大值求和除以2，但是在一些语言中，比如java，mid如果是int类型，那么`left + right`的最大值就可能会出现整型溢出的情况，为了避免这种情况，我们有了第二种方法。  
  2. `mid = left + (right - left)/2`  
  3. 更好的方法就是使用`>>>`无符号右移，即`(left + right) >>> 1`

  在写while循环的时候，如果写成`while(left <= right)`的话，容易在返回`left`还是`right`的问题上犯错误

## 模板思想

