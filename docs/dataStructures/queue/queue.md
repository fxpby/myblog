<!--
 * @Author: fxpby
 * @Date: 2020-09-07 15:49:29
 * @LastEditTime: 2020-09-07 15:57:02
 * @LastEditors: fxpby
 * @Description: 
-->
# 队列

## 1.创建类表示队列

``` javascript
class Queue {
  constructor () {
    this.count = 0
    this.lowestCount = 0 // 第一个元素
    this.items = {}
  }
}
```

## 2.向队列添加元素

新的项只能添加到队列末尾

``` javascript
enqueue (elements) {
  this.items[this.count] = elements
  this.count++
}
```

## 3.从队列移除元素

遵循先进先出的原则，最先添加的项也最先被移除

``` javascript
dequeue () {
  if (this.isEmpty()) {
    return undefined
  }
  let result = this.items[this.lowestCount]
  delete this.items[this.lowestCount]
  this.lowestCount++
  return result
}
```

## 4.查看队列头元素

``` javascript
peek () {
  if (this.isEmpty()) {
    return
  }
  return this.items[this.lowestCount]
}
```

## 5.检查队列是否为空

``` javascript
isEmpty () {
  return this.size() === 0
}
```

## 6.获取队列长度

```javascript
size () {
  return this.count - this.lowestCount
}
```

## 7.清空队列

``` javascript
clear () {
  this.items = {}
  this.lowestCount = 0
  this.count = 0
}
```

## 8.创建toString方法

```javascript
toString () {
  if (this.isEmpty()) {
    return
  }
  let str = ''
  for (let i = this.lowestCount; i < this.size(); i++) {
    str += `${this.items[i]}`
  }
  return str
}
```
