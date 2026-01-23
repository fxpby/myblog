---
id: higher-order-function
title: 高阶函数
tags:
  - 高阶函数
---

## 什么是高阶函数

如果一个函数接受另一个函数作为参数，那么该函数就是高阶函数

## 常见的高阶函数

### 手写 forEach

```js
Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("parameter must be a function");
  }
  for (let i = 0; i < this.length; i += 1) {
    callback.call(this, this[i], i);
  }
};
```

### 手写 map

```js
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("parameter must be a function");
  }
  const res = [];
  for (let i = 0; i < this.length; i += 1) {
    res.push(callback.call(this, this[i], i, this));
  }
  return res;
};
```

### 手写 reduce

```js
Array.prototype.myReduce = function (callback, init) {
  if (typeof callback !== "function") {
    throw new Error("parameter must be a function");
  }

  let pre = init;
  let i = 0;
  if (!init) {
    pre = this[0];
    i = 1;
  }

  for (i; i < this.length; i += 1) {
    pre = callback.call(this, pre, this[i], this);
  }
  return pre;
};
```

### 手写 filter

```js
Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("parameter must be a function");
  }

  const res = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback.call(this, this[i], i, this)) {
      if (typeof this[i] === 'object') {
        res.push(Object.create(this[i]))
      } else {
        res.push(this[i]);
      }
    }
  }
  return res;
};
```

### 手写 every

```js
Array.prototype.myEvery = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("parameter must be a function");
  }

  for (let i = 0; i < this.length; i += 1) {
    if (!callback.call(this, this[i], i, this)) {
      return false
    }
  }
  return true
}
```

### 手写 some

```js
Array.prototype.mySome = function (callback) {
  if (typeof callback !== "function") {
    throw new Error("parameter must be a function");
  }

  for (let i = 0; i < this.length; i += 1) {
    if (callback.call(this, this[i], i, this)) {
      return true
    }
  }
  return false
}
```
