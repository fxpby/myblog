---
id: ts-never
title: never
tags:
  - TypeScript
---

表示不应该存在的状态

```ts
type olu = string & never // 自动推论得到 type aa = never
```

```ts
function error(message: string):never {
  throw new Error(message)
}

function loop():never {
  while(true){
  }
}
```

```ts
interface A {
  type: 'olu'
}

interface B {
  type: 'study'
}

type All = A | B

function type(val: All) {
  switch (val.type) {
    case 'olu':
      break
    case 'study':
      break
    default:
      const check:never = val
      break
  }
}
```

上面这段代码中的 `const check:never = val` 就相当于一个兜底逻辑，利用 never 是最底层的子类型特点, 比如增加了一个接口 C，联合类型也包含了，但是下面没有用到，编译阶段就会得到异常

```ts
interface A {
  type: 'olu'
}

interface B {
  type: 'study'
}

interface C {
  type: 'work'
}

type All = A | B | C

function type(val: All) {
  switch (val.type) {
    case 'olu':
      break
    case 'study':
      break
    default:
      // 'check' is declared but its value is never read.ts(6133)
      // Type 'C' is not assignable to type 'never'.ts(2322)
      const check:never = val
      break
  }
}
```
