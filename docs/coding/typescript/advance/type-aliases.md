---
id: type-aliases
title: 类型别名
tags:
  - TypeScript
---

使用类型别名给类型起一个新的名字，使用 `type` 创建类型别名，常用于联合类型

```ts
type Point = {
  x: number
  y: string
}

function foo7(x: Point) {
  console.log(x)
}
foo7({x: 123, y: '233'})

type Id = number | string
function foo8(id: Id) {
  console.log(id)
}
foo8(233)
foo8('233')

type cb = () => string
const fn:cb = (): string => 'olu'

type T = 'success' | 'error'
const res: T = 'success'
```

类型别名 type 不能通过同名方式去拓展, 可以使用`&`符号拓展合并

```ts
type Animal1 = {
  name: string
}
type Bear1 = Animal1 & {
  age: number
}
const bear1: Bear1 = {
  name: 'weini',
  age: 23
}
console.log(bear1.name, bear1.age)
```
