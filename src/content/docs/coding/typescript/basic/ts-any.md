---
id: ts-any
title: 任意值
tags:
  - TypeScript
---

不希望某个特定值导致类型检查错误，也就是编译器关闭类型检查，所有类型都可以赋值给它，它也可以被赋值给其他任何类型

```ts
let power: any
power = 'olu'
power = 123

let num: number = 233
power = num
num = power
```

unknown 比 any 更加安全

```ts
let olu1: any = { a: 1, b: (): number => 123 }
let olu2: unknown = { a: 1, b: (): number => 123 }

olu1.a
olu1.b()
olu2.a // 报错 对象的类型为 "unknown"
olu2.b() // 报错 对象的类型为 "unknown"
```

- any 类型可以分配给其他类型(可以作为父类型和子类型)
- unknown 不可以分配给其他类型(只能作为父类型，不能作为子类型)

下面这段代码，使用 any 就让 olu 变不可爱了，但是使用 unknown olu 也不会加班

unknown 可赋值对象只有 unknown 和 any

```ts
let str1: string = 'olu超级无敌可爱'
let str2: any = 'olu不可爱'
let str3: unknown = 'olu今天要加班'
let str4: unknown = 'olu吃欺骗餐长肉肉'

str1 = str2
str1 = str3 // 报错 不能将类型“unknown”分配给类型“string”
str2 = str3
str3 = str4
```
