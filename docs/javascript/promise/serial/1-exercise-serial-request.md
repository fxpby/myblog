---
id: 1-exercise-serial-request
title: 请求串行问题
tags:
  - 串行
---

## 题目描述

创建一个`createFlow`方法，方法接受一个**二维**数组函数，其中函数可以是同步，也可以是异步，甚至可以是嵌套Flow和数组，要求按照数组顺序输出结果

## 方法一：function

```js
const sleep = (timer) => new Promise(resolve => setTimeout(resolve, timer))

const createFlow = (arr = []) => {
  // 串行，扁平化
  const requestList = [...arr].flat()
  const run = async (cb) => {
    for (let i = 0; i < requestList.length; i += 1) {
      const task = requestList[i]
      if (typeof task === 'function') {
        await task()
      } else if (task && task.isFlow) {
        await task.run()
      }
    }
    cb && cb()
  }
  return {
    run,
    // 支持嵌套
    isFlow: true
  }
}

createFlow([
  () => console.log(1),
  () => sleep(400).then(() => console.log(2)),
  [
    () => console.log(3),
    () => sleep(300).then(() => console.log(4))
  ],
  createFlow([
    () => console.log(5),
    () => sleep(200).then(() => console.log(6))
  ])
]).run(() => {
  console.log(7)
})
```

## 方法二：class

`class` 可以用 `instanceof` 来判断是否是嵌套

```js
class Flow {
  constructor(arr) {
    this.queue = [...arr.flat()]
  }

  async run(cb) {
    for (let task of this.queue) {
      if (typeof task === 'function') {
        await task()
      } else if (task instanceof Flow) {
        await task.run()
      }
    }
    cb && cb()
  }
}

const createFlow = (arr) => new Flow(arr)

createFlow([
  () => console.log(1),
  () => sleep(400).then(() => console.log(2)),
  [
    () => console.log(3),
    () => sleep(300).then(() => console.log(4))
  ],
  createFlow([
    () => console.log(5),
    () => sleep(200).then(() => console.log(6))
  ])
]).run(() => {
  console.log(7)
})
```
