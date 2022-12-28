---
id: ts-enum
title: 枚举
tags:
  - TypeScript
---

## 数字枚举

e.g. 红绿蓝 Red = 0，Green = 1，Blue = 2

```ts
// 默认从 0 开始，并递增
enum Color {
  red,
  green,
  blue
}
console.log(Color.red) // 0
console.log(Color.green) // 1
console.log(Color.blue) // 2
```

### 增长枚举

```ts
// 起始是 2，其余递增
enum Color {
  red = 2,
  green,
  blue
}
console.log(Color.red) // 2
console.log(Color.green) // 3
console.log(Color.blue) // 4
```

### 定义枚举

```ts
enum Color {
  red = 2,
  green = 4,
  blue = 6
}
console.log(Color.red) // 2
console.log(Color.green) // 4
console.log(Color.blue) // 6
```

## 字符串枚举

```ts
enum Color {
  red = 'red',
  green, // 报错 枚举成员必须具有初始化表达式
  blue = 'blue'
}
console.log(Color.red)
console.log(Color.green)
console.log(Color.blue)
```

## 异构枚举

枚举可以混合类型

```ts
enum Flag {
  yes = 1,
  no = 'no'
}
```

## 接口枚举

```ts
enum Color {
  red = 'red',
  green = 'green', 
  blue = 'blue'
}

interface A {
  red: Color.red
}

const obj: A  = {
  red: Color.red
}
```

## const 枚举

不能包含计算成员

```ts
const enum Person {
  name = 'Olu',
  age = 18,
  aa = 'qwe'.length // 报错 含字符串值成员的枚举中不允许使用计算值
}

let otherName: string = 'Olu'

if (otherName === Person.name) {
  console.log('aha')
}
```

使用 const 声明枚举编译得到的 js 如下

```js
var otherName = 'Olu';
if (otherName === "Olu" /* Person.name */) {
    console.log('aha');
}
```

可以看出使用 const 声明枚举时，枚举被编译成了常量

```ts
enum Person {
  name = 'Olu',
  age = 18
}

let otherName: string = 'Olu'

if (otherName === Person.name) {
  console.log('aha')
}
```

不使用 const 声明枚举编译得到的 js 如下

```js
var Person;
(function (Person) {
    Person["name"] = "Olu";
    Person[Person["age"] = 18] = "age";
})(Person || (Person = {}));
var otherName = 'Olu';
if (otherName === Person.name) {
    console.log('aha');
}
```

可以看出不使用 const 声明枚举时，枚举被编译成了对象

## 反向映射

包含正向映射（name => value）和反向映射（value => name）

```ts
enum Person {
  name
}

let username = Person.name
console.log(username) // 0
let item = Person[username]
console.log(item) // name
```

编译结果如下：

```js
var Person;
(function (Person) {
    Person[Person["name"] = 0] = "name";
})(Person || (Person = {}));
var username = Person.name;
console.log(username);
var item = Person[username];
console.log(item);
```
