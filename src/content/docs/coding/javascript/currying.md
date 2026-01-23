---
id: currying
title: 函数柯里化
tags:
  - 函数柯里化
---

## 基本概念

- 把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数
- 返回接受余下的参数
- 返回结果的新函数

## 柯里化的意义

- 供不方便传入参数使用
- 方法调用时参数固定

## 代码实现

返回一个新的函数
新函数this指向bind的第一个参数
其余参数作为新函数的参数传入

```js
Function.prototype.myBind = function (thisArg) {
  if (typeof this !== 'function') {
    throw new Error('Function argument must be a function')
  }
  const self = this
  // 去除第一个 this 指向参数
  const args1 = Array.prototype.slice.call(arguments, 1)
  const resultFn = function () {
    const args2 = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof resultFn ? this : thisArg, args1.concat(args2))
  }

  const fn = new Function()
  fn.prototype = self.prototype
  resultFn.prototype = new fn()
  return resultFn
}
```
