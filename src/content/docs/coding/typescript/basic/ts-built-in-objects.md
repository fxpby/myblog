---
id: ts-built-in-objects
title: 内置对象
tags:
  - TypeScript
---

## ECMAScript 内置对象

Boolean、Number、String、RegExp、Date、Error

```ts
let a: Boolean = new Boolean(1)
let b: String = new String('olu')
let c: Number = new Number(1)
let d: Date = new Date()
let e: RegExp = /^1/
let f: Error = new Error('error~')
```

## DOM 和 BOM 内置对象

### DOM

```ts
const body:HTMLElement = document.body
const list:NodeList = document.querySelectorAll('li')
```

#### BOM

```ts
document.body.addEventListener('click', (e: MouseEvent): void => {
  // cool things
})
```

## 一些其他 TypeScript 核心库定义文件

### Promise

```ts
function promise (): Promise<number> {
  return new Promise<number>((resolve, reject): void => {
    resolve(1)
  })
}
```
