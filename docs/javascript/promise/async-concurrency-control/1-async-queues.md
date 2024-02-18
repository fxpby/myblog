---
id: 1-async-queues
title: 设计一个异步队列，并发数量为n
tags:
  - 异步
---

## 题目描述

实现一个 `taskpool` 类，其至少具有 `add` 方法和最大并发数 `max`，该 `add` 方法接收函数(返回值为 `promise`)，当当前执行的任务数小于设定值 `max` 时，立即执行，大于 `max`，则等待任务空闲时执行该任务，模版代码如下:

```js
class TaskPool {
  // 在此处写下你的实现
}

const taskpool = new TaskPool(2);

for (let i = 0; i < 10; i++) {
    const task = () => new Promise(resolve => {
        // 这里 i 的值也是以前非常高频的闭包题哦
        setTimeout(() => {
            console.log(`task${i} complete`);
            resolve(`task${i}`);
        }, 2000);
    });
    taskpool.add(task);
}

// 预期输出
// 2s 后
// task0 complete
// task1 complete
// 再 2s 后
// task2 complete
// task3 complete
// 再 2s 后
// task4 complete
// task5 complete
// ...
// task8 complete
// task9 complete
```
