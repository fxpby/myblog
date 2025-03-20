---
id: ts-tuple
title: 元组
tags:
  - TypeScript
---

## 定义

数组合并了相同类型的对象，元组合并不同类型的对象

固定数量的不同类型元素的组合

```ts
let excel: [string, string, number][] = [
  ['title', 'name', 233]
]
```

## 越界

```ts
let olu: [string,  number]
olu = ['qq',123]

olu.push('23')
olu.push(true) // 报错 类型“boolean”的参数不能赋给类型“string | number”的参数
```
