# 数据类型

## 类型注释

冒号 + 类型，如下面的`: string` 就是类型注释
作用于变量、函数参数以及返回值

```ts
const person: string = 'olu'

function foo(num: number): boolean {
  return true
}
foo(233)

function foo2(num: number): void {
  console.log(num)
}
```

在上面这个例子中，`: number`是参数类型注释，`:boolean` 是返回值类型注释，`: void`也是返回值类型注释，代表没有返回值。

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

## function

```ts
function foo(num: number) {
  return num
}
```

下面这个匿名函数遍历中会自动推断 x 为 string 类型 👇🏻

```ts
const strArr: string[] = ["Olu", "Cool"]

strArr.forEach(x => {
  x.toUpperCase()
})
```

## Object Types

对象属性名称后面加上 `?` 代表这个值可以不传，比如 `?: string` 就代表 `string | undefined`

```ts
function foo3(params: {x: number, y: string}) {
  console.log(params.x, params.y)
}
foo3({x: 233, y: 'olu'})

function foo4(params: {x: number, y?: string}) {
  console.log(params.x, params.y?.toLocaleLowerCase)
}
foo4({x: 123})
```

## Union Types

联合类型使用 `|` 分割每个类型，需要注意的是，**只能访问联合类型中所有类型共有的属性或方法**，否则需要分情况处理。
下面例子 foo5 接受的形参类型可以是数字、字符串和数字数组

```ts
function foo6(x: number[] | string) {
  console.log(x.slice(0, 3))
}
foo6([23333])
foo6('2333')
```

```ts
function foo5(id: number | string | number[]) {
  if (typeof id === 'string') {
    console.log(id.toLocaleLowerCase())
  } else if (Array.isArray(id)) {
    console.log(id.join(', '))
  } else {
    console.log(`id's type is number`)
  }
}
foo5(123)
foo5('233')
foo5([1, 2, 3])
```

## Type Aliases

使用类型别名给类型起一个新的名字，使用 `type` 创建类型别名，常用于联合类型

```ts
type Point = {
  x: number
  y: string
}

function foo7(x: Point) {
  console.log(x)
}
foo7({x: 123, y: '233'})

type Id = number | string
function foo8(id: Id) {
  console.log(id)
}
foo8(233)
foo8('233')
```
