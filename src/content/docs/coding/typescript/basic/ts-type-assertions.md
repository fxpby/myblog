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
```

当 TypeScript 不确定一个联合类型的变量是什么类型时，只能访问联合类型的所有类型中共有的属性或方法，像下面这样

```ts
interface Olu {
  name: string;
  work(): void;
}

interface Cookie {
  name: string;
  study(): void;
}

function getName(person: Olu | Cookie): string {
  return person.name
}
```

但是我们会有需要在不确定类型时访问其中一个类型特有的属性或方法，就得到了报错如下

```ts
interface Olu {
  name: string;
  work(): void;
}

interface Cookie {
  name: string;
  study(): void;
}

function isCute(person: Olu | Cookie): boolean {
  // 类型“Olu | Cookie”上不存在属性“work”。
  // 类型“Cookie”上不存在属性“work”
  if (typeof person.work === 'function') {
    return true
  }
  return false
}
```

可使用**类型断言**解决

```ts
function isCute1(person: Olu | Cookie):boolean {
  if (typeof (person as Olu).work === 'function') {
    return true
  }
  return false
}

function isCute2(person: Olu | Cookie):boolean {
  if (typeof (<Olu>person).work  === 'function') {
    return true
  }
  return false
}
```
