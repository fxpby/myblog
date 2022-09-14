---
id: compose-pipe
title: compose 和 pipe 函数
tags:
  - compose
  - pipe
  - 函数式编程
---

## 为什么需要 compose 或 pipe 函数

我们在进行函数式编程时，会遇到一些问题，比如：

- 值的传递，写起来不方便。即连续执行一系列函数，且需传递计算某个值
- 连续调用写起来较为麻烦

## compose 函数

为了方便连续执行方法，把自己调用传值过程封装起来，只需给 compose 函数需要执行的方法，就会自动执行

- 从右往左执行
- 一个函数的返回值作为下一个要执行函数的参数

```js
const compose = (...args) => payload => {
  let _result = payload
  for (let i = args.length - 1; i >= 0; i -= 1) {
    _result = args[i](_result)
  }
  return _result
}
```

```js
const compose = (...args) => payload => args.reduceRight((pre,cur) => cur(pre), payload)
```

redux 的 compose 实现：
> <https://github.com/reduxjs/redux/blob/master/src/compose.ts>

## pipe 函数

功能同 compose 函数，从左往右执行

```js
const compose = (...args) => payload => args.reduce((pre,cur) => cur(pre), payload)
```
