---
id: ts-interfaces
title: 接口
tags:
  - TypeScript
---

使用接口定义对象的类型

```ts
interface Point1 {
  x: number,
  y: string
}
function foo9(pt: Point1) {
  console.log(pt)
}
foo9({x: 233, y: '233'})
```

接口是可以拓展继承的

```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  age: number
}

const bear: Bear = {
  name: 'weini',
  age: 23
}
console.log(bear.name, bear.age)
```

向现有的接口添加新字段（可同名方式拓展）

```ts
interface MyWindow {
  count: number;
}
interface MyWindow {
  title: string;
}
const window: MyWindow = {
  count: 1,
  title: '233'
}
```

## 可选属性

该属性可以不存在, 仍然不允许添加未定义的属性

对象属性名称后面加上 `?` 代表这个值可以不传，比如 `?: string` 就代表 `string | undefined`

```ts
interface Person {
  name: string,
  age?: number
}
let olu: Person = {
  name: 'olu',
  // age: 18 // age可不声明
}
```

## 任意属性

希望接口可以有任意属性，可以使用 [propName: string]，定义任意属性取 string 类型的值

```ts
interface Person {
  name: string,
  age?: number,
  [propName: string]: any
}
let olu: Person = {
  name: 'olu',
  drink: 'Coke'
}
```

一旦定义了任意属性，确定属性和可选属性的类型必须是其类型的子集

```ts
interface Person {
  name: number[], // 类型“number[]”的属性“name”不能赋给“string”索引类型“string”
  age?: number, // 类型“number | undefined”的属性“age”不能赋给“string”索引类型“string”
  [propName: string]: string
}
let olu: Person = {
  name: [1,2],
  drink: 123 // 不能将类型“number”分配给类型“string”
}
```

上面这个例子，`[propName: string]: string` 定义任意属性取 string类型，已定义的 name 属性是数字数组不符合，已定义的 age 属性是 number 或 undefined 也不符合，drink 也不是 string 类型

一个接口只能定义一个任意属性，如果接口中有多个类型的属性，需要在任意属性中使用联合类型

```ts
interface Person {
  name: number[],
  age?: number,
  [propName: string]: string | number[] | undefined | number
}
let olu: Person = {
  name: [1,2],
  drink: 123
}
```

## 只读属性

让字段只能在创建的时候被赋值，只读的约束存在于**第一次**给**对象**赋值的时候，而不是第一次给只读属性赋值的时候

```ts
interface Person {
  name: number[],
  age?: number,
  readonly hobby: string,
  cb(): number,
  [propName: string]: string | number[] | undefined | number | Function
}
let olu: Person = {
  name: [1,2],
  drink: 123,
  hobby: 'sleep',
  cb: (): number => 123
}

olu.hobby = 'eat' // 无法分配到 "hobby" ，因为它是只读属性
```
