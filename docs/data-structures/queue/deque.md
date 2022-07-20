# 双端队列

## 1.创建Deque类

```javascript
class Deque {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
}
```

## 2.向双端队列的前端添加元素

```javascript
addFront (element) {
  if (this.isEmpty()) {
    this.addBack(element)
  } else if (this.lowestCount > 0) {
    this.lowestCount--
    this.items[this.lowestCount] = element
  } else {
    for (let i = this.count; i > 0 ; i--) {
      this.items[i] = this.items[i - 1]
    }
    this.count++
    this.items[0] = element
  }
}
```

## 3.向双端队列后端添加元素

```javascript
addBack (element) {
  this.items[this.count] = element
  this.count++
}
```

## 4.向双端队列前端移除第一个元素

```javascript
removeFront () {
  if (this.isEmpty()) {
    return
  }
  let result = this.items[this.lowestCount]
  delete this.items[this.lowestCount]
  this.lowestCount++
  return result
}
```

## 5.向双端队列后端移除第一个元素

```javascript
removeBack () {
  if (this.isEmpty()) {
    return
  }
  this.count--
  let result = this.items[this.count]
  delete this.items[this.count]
  return result
}
```

## 6.返回双端队列前端第一个元素

```javascript
peekFront () {
  if (this.isEmpty()) {
    return
  }
  return this.items[this.lowestCount]
}
```

## 7.返回双端队列后端第一个元素

```javascript
peekBack () {
  if (this.isEmpty()) {
    return
  }
  return this.items[this.count - 1]
}
```

## 8.清空双端队列

```javascript
clear () {
  this.count = 0
  this.lowestCount = 0
  this.items = {}
}
```

## 9.检查双端队列是否为空

```javascript
isEmpty () {
  return this.count - this.lowestCount === 0
}
```

## 10.获取双端队列大小

```javascript
size () {
  return this.count - this.lowestCount
}
```

## 11.创建toString方法

```javascript
toString () {
  if (this.isEmpty()) {
    return ''
  }
  let str = ''
  for (let i = this.lowestCount; i < this.count; i++) {
    str += this.items[i]
  }
  return str
}
```
