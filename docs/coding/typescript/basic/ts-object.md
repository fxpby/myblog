---
id: ts-object
title: Object、object 和 {}
tags:
  - TypeScript
---

原型链顶端是 Object

```ts
// 都不报错
let a1: Object = 123
let a2: Object = '123'
let a3: Object = {}
let a4: Object = []
let a5: Object = (): number => 233
```

object 只能分配给引用类型，不能分配给基本类型

```ts
let a1: object = 123 // 报错 不能将类型“number”分配给类型“object”
let a2: object = '123' // 报错 不能将类型“string”分配给类型“object”
let a3: object = {}
let a4: object = []
let a5: object = (): number => 233
```

{}字面量 相当于 new Object，和 Object相同

```ts
let a1:{} = 123 // new Object
```

无法对变量进行更改

```ts
let a2: {} = {age: 18}
let a3: Object = {age: 18}
let a4: object = {age: 18}
a2.name = 'olu'
a3.name = 'olu'
a4.name = 'olu'
```
