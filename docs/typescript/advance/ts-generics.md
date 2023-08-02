---
id: ts-generics
title: 泛型
tags:
  - TypeScript
---

指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

## 背景

比如想实现一个函数接收数字或字符串类型参数，不用泛型可能会书写成👇🏻这样：

```ts
function print (a: number, b: number):Array<number> {
  return [a, b]
}
print(1, 2)

function print2 (a: string, b: string):Array<string> {
  return [a, b]
}
print2('1', '2')
```

## 单个类型参数

使用泛型后则使用函数名后的`<T>`来指代任意输入的类型

```ts
function print3<T>(a: T, b: T): Array<T> {
  return [a, b]
}

print3<number>(1, 2)
print3<string>('1', '2')
```

## 多个类型参数

```ts
function print4<T, U>(a: T, b: U): Array<T | U> {
  let arr: Array<T | U> = [a, b]
  return arr
}

print4(1, 2)
print4('1', 1)
```

## 泛型约束

下面栗子中访问 info 的 id 属性时，编译报错，因为不能证明 info 中有 id 属性

```ts
function getOluInfo<T>(info: T): T {
  console.log(`ID: ${info.id}`); // Property 'id' does not exist on type 'T'.
  return info;
}
```

如果需要限制函数处理带有 id 属性的类型，需要列出对于 T 的约束，可以定义一个接口用来描述约束条件，创建一个包含 id 属性的接口，利用 extends 关键字来实现

```ts
interface Info {
  id: number;
}

function getOluInfo<T extends Info>(info: T): T {
  console.log(`ID: ${info.id}`);
  return info;
}

getOluInfo({ id: 2 });
getOluInfo("abc"); // Argument of type 'string' is not assignable to parameter of type 'Info'.
```

```ts
interface Len {
  length: number
}
function print5<T extends Len>(a: T): T {
  console.log(a.length)
  return a
}

print5(3) // Argument of type 'number' is not assignable to parameter of type 'Len'.ts(2345)
```

## keyof 约束

函数传入一个对象，根据形参 key 输出 value，传入一个不存在的 key，没有错误提示

```ts
function prop<T>(obj: T, key: string) {
  return obj[key]
}

let obj = { a: 1, b: 2, c: 3 }
prop(obj, 'a')
prop(obj, 'd')
```

使用 keyof 约束后，得到错误提示

```ts
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

let obj = { a: 1, b: 2, c: 3 }
prop(obj, 'a')
prop(obj, 'd') // Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'.ts(2345)
```

## 泛型类

类型参数在类名后面的尖括号中指定，可以具有泛型字段或方法

```ts
class Olu<T> {
  hobby: T[] = []
  say(a: T): T {
    return a
  }
}

const olu1 = new Olu<number>
olu1.hobby = [1, 2, 3]
olu1.say(233)

const olu2 = new Olu<string>
olu2.hobby = ['study', 'work', 'sleep']
olu2.say('hello')
```

## 泛型接口

```ts
interface Olu<T, U> {
  id: T;
  name: U;
}

const olu1:Olu<number, string> = {
  id: 1,
  name: 'olu1'
}

const olu2:Olu<string, string> = {
  id: 2,
  name: 'olu2'
}
```

### 函数类型的泛型接口

```ts
interface ShowOluName<T, U> {
  (id: T, name: U): void;
}

const showOluName1: ShowOluName<number, string> = (id, name) => {
  console.log(`id => ${id}, name => ${name}`);
};

showOluName1(1, "cute Olu!");

const showOluName2: ShowOluName<string, string> = (id, name) => {
  console.log(`id => ${id}, name => ${name}`);
};

showOluName2("2", "cool Olu!");
```

## 内置工具类型

### `Partial<Type>`

通过将 Type 中的所有属性都设置为可选来构造一个新的类型

```ts
interface Person {
  id: number;
  name: string;
  age: number;
}

const olu1: Person = {
  // Property 'age' is missing in type '{ id: number; name: string; }' but required in type 'Person'.
  id: 1,
  name: "Olu1",
};

type UnknownPerson = Partial<Person>;

const olu2: UnknownPerson = {
  id: 1,
  name: "Olu1",
};
```

源码实现：

```ts
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

### `Required<Type>`

通过将 Type 中的所有属性都设置为必选来构造一个新的类型，和 Partial 相反

```ts
interface Person {
  id: number;
  name: string;
  // age?: number; // Property 'age' is missing in type '{ id: number; name: string; }' but required in type 'Required<Person>'.
}

const olu: Person = {
  id: 1,
  name: "olu",
};

type RequiredPerson = Required<Person>;

const olu2: RequiredPerson = {
  id: 1,
  name: "olu2",
  age: 18,
};
```

源码实现：

```ts
type Required<T> = {
  [P in keyof T]-?: T[P]
}
```

### `Exclude<UnionType, ExcludedMembers>`

从联合类型 UnionType 中排除 ExcludedMembers 中的所有联合成员来构造一个新的类型

```ts
type PersonProps = Exclude<"id" | "name" | "age", "age">
const oluProp:PersonProps = "age"
```

源码实现：

判断了类型 T 是否可以赋值给类型 U，如果可以赋值，则返回 never 类型，否则返回 T 类型本身

```ts
type Exclude<T, U> = T extends U ? never : T
```
