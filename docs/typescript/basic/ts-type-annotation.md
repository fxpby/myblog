---
id: ts-type-annotation
title: 类型注释
tags:
  - TypeScript
---

冒号 + 类型，如下面的`: string` 就是类型注释
作用于变量、函数参数以及返回值

```ts
const person: string = 'olu'

function foo(num: number): boolean {
  return true
}
foo(233)

function foo2(num: number): void {
  console.log(num)
}
```

在上面这个例子中，`: number`是参数类型注释，`:boolean` 是返回值类型注释，`: void`也是返回值类型注释，代表没有返回值。