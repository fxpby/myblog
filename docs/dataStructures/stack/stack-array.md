<!--
 * @Author: fxpby
 * @Date: 2020-09-07 15:08:14
 * @LastEditTime: 2020-09-07 15:32:17
 * @LastEditors: fxpby
 * @Description: 
-->
# 栈

## 1.创建一个基于Javascript对象的Stack类

``` javascript
class Stack {
  constructor () {
    this.count = 0
    this.items = {}
  }
}
```

## 2.向栈中插入元素

``` javascript
push (elements) {
  this.items[this.count] = elements
  this.count++
  return elements
}
```

## 3.验证一个栈是否为空

``` javascript
isEmpty () {
  return this.items.length === 0
}
```

## 4.获取栈的大小

``` javascript
size () {
  return this.items.length
}
```

## 5.从栈中弹出元素

``` javascript
pop () {
  if (this.isEmpty()) {
    return undefined
  }
  this.count--
  const result = this.items[this.count]
  delete this.items[this.count]
  return result
}
```

## 6.查看栈顶元素

``` javascript
peek () {
  if (this.isEmpty()) {
    return undefined
  }
  return this.items[this.count - 1]
}
```

## 7.清空栈

```javascript
clear () {
  this.items = {}
  this.count = 0
  // while (!this.isEmpty()) {
  //   this.pop()
  // }
}
```

## 8.创建toString方法

```javascript
toString () {
  if (this.isEmpty()) {
    return ''
  }
  let str = ''
  for (let i = 0; i < this.count; i++) {
    str += `${this.items[i]}`
  }
  return str
}
```
