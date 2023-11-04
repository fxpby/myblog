---
id: ts-utility
title: 内置类型工具
tags:
  - TypeScript
---

## 内置工具类型

## `Readonly<Type>`

返回一个新类型，将参数类型Type的所有属性变为只读属性

```ts
interface A {
  x: number;
  y?: number;
}

type T = Readonly<A>

// type T = {
//     readonly x: number;
//     readonly y?: number | undefined;
// }
```

源码实现：

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

对应只读属性我们可以自定义类型工具 `Mutable<Type>`, 将参数类型所有的属性都变成可变属性
`-readonly`表示去除属性的只读标志

```ts
type Readonly<T> = {
  -readonly [P in keyof T]: T[P];
};
```

## `Record<Type>`

返回一个对象类型，参数Keys用作键名，参数Type用作键值类型, 第一个参数可以是联合类型

```ts
type T = Record<'olu', string>

// type T = {
//     olu: string;
// }

type T2 = Record<'olu' | 'cookie', string>

// type T2 = {
//     olu: string;
//     cookie: string;
// }
```

参数 `Keys` 类型必须兼容 `string | number | symbol`

源码实现：

```ts
type Record<K extends string|number|symbol, T> = { 
  [P in K]: T; 
}
```

## `Partial<Type>`

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

`Readonly<Type>` 和 `Partial<Type>` 结合，将所有属性变成只读的可选属性

```ts
interface Olu {
  name: string;
  age: number;
}

const olu: Readonly<Partial<Olu>> = { name: 'cute olu' }
olu.name = '' // Cannot assign to 'name' because it is a read-only property.
```

## `Required<Type>`

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

## `Pick<Type, Keys>`

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

## `Omit<Type, Keys>`

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

## `ReturnType<Type>`

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

## `Parameters<Type>`

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

## `Awaited<Type>`

模拟异步函数中的 `await` 或 `Promises` 上的 `.then()` 方法返回值类型

```ts
const p = Promise.resolve(123)
type TP = Awaited<typeof p> // type TP = number

const p2 = () => Promise.resolve('olu')
type TP2 = ReturnType<typeof p2> // type TP2 = Promise<string>
type TP3 = Awaited<ReturnType<typeof p2>> // ReturnType<typeof p2>
```

## `Extract<Type, Union>`

从一个联合类型中提取指定的类型。接受两个类型参数，第一个参数是要提取的类型，第二个参数是要从中提取类型的联合类型。

```ts
type CuteNumber = 'olu' | 'cookie' | 'coke'

type  ExtractNumber = Extract<CuteNumber, 'olu'>

const cute: ExtractNumber = 'olu'
```

源码实现：

定义了一个类型别名 `Extract<T, U>`，它接受两个类型参数 `T` 和 `U`。

`T extends U ? T : never` 是一个条件类型表达式。检查类型 `T` 是否可以赋值给类型 `U`，即类型 `T` 是否是类型 `U` 的子类型。

如果 `T` 可以赋值给 `U`，则条件类型表达式的结果为 `T`，即返回类型 `T`。即 `Extract<T, U>` 的结果满足条件 `U` 的子类型 `T`。

如果条件类型的结果为 `false`，即 `T` 无法赋值给 `U`，则返回 `never` 类型。

```ts
type Extract<T, U> = T extends U ? T : never;
```

## `Exclude<UnionType, ExcludedMembers>`

从联合类型 UnionType 中排除 ExcludedMembers 中的所有联合成员来构造一个新的类型。接受两个类型参数，第一个参数是要排除的类型，第二个参数是要从中排除类型的联合类型。

```ts
type PersonProps = Exclude<"id" | "name" | "age", "age">
const oluProp:PersonProps = "age"
```

源码实现：

`type Exclude<T, U>`：通过 `type` 关键字定义了一个泛型类型 `Exclude<T, U>`，其中 `T` 是一个类型参数，表示待处理的类型，`U` 是一个类型参数，表示要排除的类型。
`T extends U ? never : T`：使用条件类型来判断类型 `T` 是否可以赋值给类型 `U`。如果可以赋值，即 `T` 是 `U` 的子类型，那么返回 `never` 类型，表示排除该类型。如果不可以赋值，即 `T` 不是 `U` 的子类型，那么返回 `T` 类型本身。

```ts
type Extract<T, U> = T extends U ? never : T;
```

## `Uppercase<StringType>`

将字符串类型的**每个字符**转为大写

```ts
type A = 'olu'
type B = Uppercase<A> // type B = "OLU"
```

## `Lowercase<StringType>`

将字符串的**每个字符**转为小写

```ts
type A = 'OLU'
type B = Lowercase<A> // type B = "olu"
```

## `Capitalize<StringType>`

将字符串的第一个字符转为大写

```ts
type A = 'olu'
type B = Uppercase<A> // type B = "Olu"
```

## `Uncapitalize<StringType>`

将字符串的第一个字符转为小写

```ts
type A = 'Olu'
type B = Uppercase<A> // type B = "olu"
```
