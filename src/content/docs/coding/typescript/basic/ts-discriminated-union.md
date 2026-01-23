---
id: ts-discriminated-union
title: 可辨识联合
tags:
  - TypeScript
---

如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。

- 有一个公共字段。下面例子中的是 `type`
- 公共字段的值是可穷举的。因为不可穷举，则无法用条件语句来对变量的具体类型进行判断

```ts
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

// 利用类型守卫
function fn(param:A) {
  if (param.type === 'a') {
    console.log(param.a)
  } else if (param.type === 'b') {
    console.log(param.b)
  } else {
    console.log(param.c)
  }
}
```
