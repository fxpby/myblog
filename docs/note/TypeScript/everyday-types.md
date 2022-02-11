# 数据类型

## 类型注释

冒号 + 类型，如下面的`: string` 就是类型注释
作用于变量、函数参数以及返回值

```ts
const person: string = 'olu'

function foo(num: number):boolean {
  return true
}
foo(233)
```

## string

```ts
const str: string = 'hello world!'
```

## number

```ts
const num: number = 123
```

## boolean

```ts
const bool: boolean = true
```

需要注意的是使用构造函数创建的对象不是布尔值, 比如 `new Boolean()`返回的是一个 `Boolean` 对象

```ts
const bool: boolean = new Boolean(1)
/* 报错信息：不能将类型“Boolean”分配给类型“boolean”。
  “boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。
*/
```

直接调用 `Boolean` 可以返回一个 `boolean` 类型

```ts
const bool: boolean = Boolean(1)
```

## Arrays

- `type[]`
- `Array<type>` 泛型写法

type 为任意合法类型

```ts
const arr: number[] = [1, 2, 3]
const arr2: Array<number> = [1, 2, 3]
```

## any

不希望某个特定值导致类型检查错误，也就是编译器关闭类型检查，所有类型都可以赋值给它，它也可以被赋值给其他任何类型

```ts
let power: any
power = 'olu'
power = 123

let num: number = 233
power = num
num = power
```
