---
id: ts-cross-types
title: 交叉类型
tags:
  - TypeScript
---

类似 extend

```ts
interface Turtle {
  age: number
}

interface Olumel {
  name: string
}

const sayHello: (olu: Turtle & Olumel) => (Turtle & Olumel) = (olu: Turtle & Olumel): (Turtle & Olumel) => {
  return olu
}

sayHello({
  name: 'olu',
  age: 18
})
```
