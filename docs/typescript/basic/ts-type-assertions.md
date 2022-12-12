---
id: ts-type-assertions
title: 类型断言
tags:
  - TypeScript
---

类型断言允许转换为更具体或不太具体的类型版本

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
```

强制断言方式如下，先转 any 或 unknown，再转其他

```ts
const testAssert = ('abcd' as any) as number
const testAssert2 = ('abcd' as unknown) as number