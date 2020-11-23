<!--
 * @Author: fxpby
 * @Date: 2020-09-07 11:22:36
 * @LastEditTime: 2020-09-07 11:38:54
 * @LastEditors: fxpby
 * @Description: 
-->
# 数组

## 1.添加元素

### 1.1 在数组末尾添加元素

使用`push()`

### 1.2 在数组开头插入元素

使用`unshift()`  
或者

``` javascript
function insertFirstPosition (arr = [], value) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1]
  }
  arr[0] = value
  return value
}
```

## 2.删除元素

### 2.1 在数组末尾删除元素

使用`pop()`

### 2.2 在数组开头删除元素

使用`shift()`  
或者

``` javascript
function delFirstPosition (arr = []) {
  let first = arr[0]
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length--
  return first
}
```

## 在任意位置添加或删除元素

使用`splice()`

## Javascript的核心数组方法参考

方法|描述
--|:--:|--
concat|连接 2个或更多数组，并返回结果
every|对数组中的每个元素运行给定函数，如果该函数对每个元素都返回 true，则返回 true
filter|对数组中的每个元素运行给定函数，返回该函数会返回 true 的元素组成的数组
forEach|对数组中的每个元素运行给定函数。这个方法没有返回值
join|将所有的数组元素连接成一个字符串
indexOf|返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1
lastIndexOf|返回在数组中搜索到的与给定参数相等的元素的索引里最大的值
map|对数组中的每个元素运行给定函数，返回每次函数调用的结果组成的数组
reverse|颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在 的第一个
slice|传入索引值，将数组里对应索引范围内的元素作为新数组返回
some|对数组中的每个元素运行给定函数，如果任一元素返回 true，则返回 true
sort|按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
toString|将数组作为字符串返回 
valueOf|和 toString 类似，将数组作为字符串返回
