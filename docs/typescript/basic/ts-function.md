---
id: ts-function
title: 函数
tags:
  - TypeScript
---

```ts
function foo(num: number): number {
  return num
}

interface User {
  name: string,
  age: number
}

const fn1: (user: User) => User = (user: User): User => {
  return user
}

console.log(fn1({name: 'olu', age: 18}))
```

下面这个匿名函数遍历中会自动推断 x 为 string 类型 👇🏻

```ts
const strArr: string[] = ["Olu", "Cool"]

strArr.forEach(x => {
  x.toUpperCase()
})
```
