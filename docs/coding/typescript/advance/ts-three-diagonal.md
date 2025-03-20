---
id: ts-three-diagonal
title: 三斜线指令
tags:
  - TypeScript
---

包含单个 XML 标签的单行注释，注释的内容作为编译器指令使用

仅可放在包含它的文件的最顶端，前面只能出现单行或多行注释，包括其他的三斜线指令。如果出现在一个语句或声明之后，会被当做普通的单行注释，无特殊含义

index.ts

```ts
/// <reference path="index2.ts" />
/// <reference path="index3.ts" />

namespace A {
  export const a = 1
}
console.log(A, A.a, A.b,A.c)
```

index2.ts

```ts
namespace A {
  export const b = 2
}
```

index3.ts

```ts
namespace A {
  export const c = 3
}
```
