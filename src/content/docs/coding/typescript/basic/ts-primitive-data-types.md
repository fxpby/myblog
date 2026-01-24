---
id: ts-primitive-data-types
title: 原始数据类型
tags:
  - TypeScript
---

## string

```ts
const str: string = 'hello world!'
```

## number

```ts
const num: number = 123
```

## boolean

```ts
const bool: boolean = true
```

需要注意的是使用构造函数创建的对象不是布尔值, 比如 `new Boolean()`返回的是一个 `Boolean` 对象

```ts
const bool: boolean = new Boolean(1)
/* 报错信息：不能将类型“Boolean”分配给类型“boolean”。
  “boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。
*/
```

直接调用 `Boolean` 可以返回一个 `boolean` 类型

```ts
const bool: boolean = Boolean(1)
```

## Enums

枚举类型的值可以是`数字类型`也可以是`字符串类型`

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, Direction.Down) // 1 2
```

```ts
enum Direction {
  Up = 3,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, Direction.Down) // 3 4
```

枚举成员必须具有初始化表达式，不能包含计算成员。下面这样会报错

```ts
enum Direction2 {
  Up = 'olu'.length,
  Down,
  Left,
  Right,
}
```

## bigint

非常大的整数

```ts
const onehundred: bigint = BigInt(100)
const anotherHundred: bigint = 100n
```

## symbol

全局唯一引用

```ts
const name1 = Symbol('name')
const name2 = Symbol('name2')
```

## null and undefined

- null 不存在
- undefined 未初始化的值

确定值类型不可能为 `null` or `undefined` 才可以使用 `!`

```ts
const val1: undefined = undefined
const val2: null = null

function foo10(x: string | null) {
  if (x === null) {
    throw new Error(`x is null`)
  } else {
    x.toLowerCase()
  }
}

// 参数 x 可能为空
function foo11(x?: number | null) {
  // 不做显示检查，从类型中删除 null 和 undefined
  x!.toFixed()
}
```

## Void 空值

标识没有任何返回值的函数

```ts
function sayHello(): void {
  console.log('hello')
}

let sayHello: () => void = function (): void {
  console.log('hello')
}
```
