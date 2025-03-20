---
id: ts-type-inference
title: 类型推论
tags:
  - TypeScript
---

没有明确指定类型，ts 会按照类型推论的规则推论出

```ts
let str = 'olu'
str = 18 // 报错 不能将类型“number”分配给类型“string”

let str2 // 此时 str2 被推断为 any 类型
```
