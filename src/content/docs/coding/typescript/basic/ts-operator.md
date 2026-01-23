---
id: ts-operator
title: 类型运算符
tags:
  - TypeScript
---

## keyof

## in

## 方括号

## extends...? 条件运算符

## infer 关键字

表示在 extends 条件语句中待推断的类型变量

下面这个例子通过 infer 来实现 tuple 转 union。判断类型 T 是否是一个数组类型，如果是的话，使用 infer 关键字推断数组中的元素类型，并返回该类型；如果不是数组类型，则返回 never 类型

```ts
type TypeOfArrayItem<T> = T extends Array<infer I> ? I : never

type MyTuple = [string, number]

type MyUnion = TypeOfArrayItem<MyTuple> // type MyUnion = string | number
```

## is

## 模板字符串

## satisfies