---
id: 1-exercise-traffic-light
title: 红绿灯问题1
tags:
  - Promise
---

## 题目描述

实现红灯每隔 3s 亮一次，黄灯每隔 2s 亮一次，绿灯每隔 1s 亮一次，循环这个过程

## 解题方法

```js
const msgMap = {
  'red': 'red light',
  'green': 'green light',
  'yellow': 'yellow light',
}

const task = (lightType, timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msgMap[lightType])
      resolve()
    }, timer)
  })
}

const taskLoop = async() => {
  await task('red', 3000)
  await task('yellow', 2000)
  await task('green', 1000)
  taskLoop()
}

taskLoop()
```
