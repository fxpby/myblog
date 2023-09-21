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

在映射类型中，使用 `-?` 可以将原本的可选属性标记为必需属性。遍历类型 T 的所有属性，在每个属性 `P` 上应用 `-?`, 使属性 `P` 变为必需属性

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

### `Pick<Type, Keys>`

从一个已有的类型 Type 中选择一组属性 Keys 来构造一个新的类型

```ts
interface Person {
  id: number;
  name: string;
  age: number;
}

type Olu = Pick<Person, "id" | "name">
/**
 * type Olu = {
 *   id: number;
 *   name: string;
 * }
 */

const olu1:Olu = {
  id: 1,
  name: 'olu1',
  age: 18 // Type '{ id: number; name: string; age: number; }' is not assignable to type 'Olu'. Object literal may only specify known properties, and 'age' does not exist in type 'Olu'.
}
```

源码实现：

遍历类型 K 中的属性名，并在新的类型中创建这些属性，属性值类型与类型 T 中对应属性的类型相同

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

### `Omit<Type, Keys>`

从一个已有的类型 Type 中移除一组属性 Keys 来构造一个新的类型

```ts
interface Person {
  id: number;
  name: string;
  age: number;
}

type Olu = Omit<Person, 'id' | 'age'>

/**
 * type Olu = {
 *   name: string;
 * }
 */

const olu1: Olu = {
  id: 1, //Type '{ id: number; name: string; }' is not assignable to type 'Olu'. Object literal may only specify known properties, and 'id' does not exist in type 'Olu'.
  name: 'olu1'
}
```

源码实现：

`Omit<T, K>` 的定义使用了两个内置类型工具：`Pick<T, K>` 和 `Exclude<keyof T, K>`。它首先使用 `keyof T` 获取类型 `T` 的所有属性名，然后使用 `Exclude<keyof T, K>` 排除掉属性名 `K`，最后使用 `Pick<T, Exclude<keyof T, K>>` 从类型 `T` 中选取剩余的属性名创建一个新的类型

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

### `ReturnType<Type>`

构造一个由函数返回值类型 Type 组成的类型

```ts
interface GetPerson {
  (id: number): {
    id: number;
    name: string;
    age: number;
  }
}

type Olu = ReturnType<GetPerson>
/**
 * type Olu = {
 *   id: number;
 *   name: string;
 *   age: number;
 * }
 */
```

源码实现：

先判断类型 T 是否为一个函数类型，如果是，则使用 infer 关键字推断函数的返回值类型，并返回该类型；如果不是函数类型，则返回 any 类型

```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args:any) => infer R ? R : any
```

### `infer`

表示在 extends 条件语句中待推断的类型变量

下面这个例子通过 infer 来实现 tuple 转 union。判断类型 T 是否是一个数组类型，如果是的话，使用 infer 关键字推断数组中的元素类型，并返回该类型；如果不是数组类型，则返回 never 类型

```ts
type TypeOfArrayItem<T> = T extends Array<infer I> ? I : never

type MyTuple = [string, number]

type MyUnion = TypeOfArrayItem<MyTuple> // type MyUnion = string | number
```

### `Parameters`

用于获取函数类型 T 的参数类型。它接受一个函数类型作为参数，并返回一个元组类型，其中包含了函数的每个参数类型

```ts
function greet(name: string, age: number): void {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

type GreetParams = Parameters<typeof greet>;
// type GreetParams = [name: string, age: number]
```

源码实现：

定义了一个类型别名 `Parameters<T>`，它接受一个函数类型 `T` 作为参数, `T extends (...args: infer P) => any` 是一个条件类型表达式。它检查 `T` 是否可以赋值给一个形式类似 `(...args: infer P) => any`的函数类型(`infer P` 用于推断函数参数的类型并将其分配给 `P`), 如果 `T` 可以赋值给 `(...args: infer P) => any`，则条件类型表达式的结果为 `true`，否则为 `false`。在真分支中返回 `P`，即函数 `T` 的参数类型列表。这意味着 `Parameters<T>`的结果将是一个由 `T` 函数的参数类型组成的元组类型; 假分支中即 `T` 无法赋值给 `(...args: infer P) => any`，则返回 `never` 类型

```ts
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```
