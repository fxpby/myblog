## 背景描述

取中位数方法：

1. `mid = (left + right)/2`
   这样就是最小值+最大值求和除以 2，但是在一些语言中，比如 java，mid 如果是 int 类型，那么`left + right`的最大值就可能会出现整型溢出的情况，为了避免这种情况，我们有了第二种方法。
2. `mid = left + (right - left)/2`
3. 更好的方法就是使用`>>>`无符号右移，即`(left + right) >>> 1`

在写 while 循环的时候，如果写成`while(left <= right)`的话，容易在返回`left`还是`right`的问题上犯错误

## 模板思想
