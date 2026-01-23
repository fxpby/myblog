---
id: ts-union-types
title: 联合类型
tags:
  - TypeScript
---

联合类型使用 `|` 分割每个类型，需要注意的是，**只能访问联合类型中所有类型共有的属性或方法**，否则需要分情况处理。
下面例子 foo5 接受的形参类型可以是数字、字符串和数字数组

```ts
function foo6(x: number[] | string) {
  console.log(x.slice(0, 3))
}
foo6([23333])
foo6('2333')
```

```ts
function foo5(id: number | string | number[]) {
  if (typeof id === 'string') {
    console.log(id.toLocaleLowerCase())
  } else if (Array.isArray(id)) {
    console.log(id.join(', '))
  } else {
    console.log(`id's type is number`)
  }
}
foo5(123)
foo5('233')
foo5([1, 2, 3])
```
