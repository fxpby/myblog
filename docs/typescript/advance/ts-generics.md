---
id: ts-generics
title: 泛型
tags:
  - TypeScript
---

指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

## 背景

比如想实现一个函数接收数字或字符串类型参数，不用泛型可能会书写成👇🏻这样：

```ts
function print (a: number, b: number):Array<number> {
  return [a, b]
}
print(1, 2)

function print2 (a: string, b: string):Array<string> {
  return [a, b]
}
print2('1', '2')
```

## 单个类型参数

使用泛型后则使用函数名后的`<T>`来指代任意输入的类型

```ts
function print3<T>(a: T, b: T): Array<T> {
  return [a, b]
}

print3<number>(1, 2)
print3<string>('1', '2')
```

## 多个类型参数

```ts
function print4<T, U>(a: T, b: U): Array<T | U> {
  let arr: Array<T | U> = [a, b]
  return arr
}

print4(1, 2)
print4('1', 1)
```

## 泛型约束

```ts
interface Len {
  length: number
}
function print5<T extends Len>(a: T): T {
  console.log(a.length)
  return a
}

print5(3) // Argument of type 'number' is not assignable to parameter of type 'Len'.ts(2345)
```

## keyof 约束

函数传入一个对象，根据形参 key 输出 value，传入一个不存在的 key，没有错误提示

```ts
function prop<T>(obj: T, key: string) {
  return obj[key]
}

let obj = { a: 1, b: 2, c: 3 }
prop(obj, 'a')
prop(obj, 'd')
```

使用 keyof 约束后，得到错误提示

```ts
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

let obj = { a: 1, b: 2, c: 3 }
prop(obj, 'a')
prop(obj, 'd') // Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'.ts(2345)
```

## 泛型类

```ts
class Olu<T> {
  hobby: T[] = []
  say(a: T): T {
    return a
  }
}

const olu1 = new Olu<number>
olu1.hobby = [1, 2, 3]
olu1.say(233)

const olu2 = new Olu<string>
olu2.hobby = ['study', 'work', 'sleep']
olu2.say('hello')
```
