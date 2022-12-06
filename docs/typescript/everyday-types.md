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

## Arrays 数组

- `type[]`
- `Array<type>` 泛型写法

type 为任意合法类型

```ts
let arr1: number[] = [1, 2, 3, 4, 5]
let arr2: string[] = ['qq', 'ww', 'ee']
let arr3: boolean[] = [true, false, false]
let arr4: any[] = [1, '2', [], {}, (): number => 123]

let arr5: Array<number> = [1, 2, 3, 4, 5]
let arr6: Array<string> = ['qq', 'ww', 'ee']
let arr7: Array<boolean> = [true, false, false]
let arr8: Array<any> = [1, '2', [], {}, (): number => 123]
```

### 用接口表示数组

```ts
interface NumberArray {
  [index: number]: number
}

interface StringArray {
  [index: number]: string
}

let a1: NumberArray = [1, 2, 3]
let a2: StringArray = ['1', '2', 'olu']
```

### 多维数组

```ts
let arr9: number[][] = [[1]]
let arr10: number[][][] = [[[1]]]
let arr11: Array<Array<number>> = [[1]]
let arr12: Array<Array<Array<number | string>>> = [[[1, 'olu']]]
```

### arguments 类数组

```ts
function Arr (...args: any): void {
  console.log(arguments)
  let arr: IArguments = arguments
}
Arr('olu', 'cute', 'cool')
```

IArguments 是 TypeScript 中定义好的类型，实际上是

```ts
interface IArguments {
  [index: number]: any,
  length: number,
  callee: Function
}
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

unknown 比 any 更加安全

```ts
let olu1: any = { a: 1, b: (): number => 123 }
let olu2: unknown = { a: 1, b: (): number => 123 }

olu1.a
olu1.b()
olu2.a // 报错 对象的类型为 "unknown"
olu2.b() // 报错 对象的类型为 "unknown"
```

- any 类型可以分配给其他类型(可以作为父类型和子类型)
- unknown 不可以分配给其他类型(只能作为父类型，不能作为子类型)

下面这段代码，使用 any 就让 olu 变不可爱了，但是使用 unknown olu 也不会加班

unknown 可赋值对象只有 unknown 和 any

```ts
let str1: string = 'olu超级无敌可爱'
let str2: any = 'olu不可爱'
let str3: unknown = 'olu今天要加班'
let str4: unknown = 'olu吃欺骗餐长肉肉'

str1 = str2
str1 = str3 // 报错 不能将类型“unknown”分配给类型“string”
str2 = str3
str3 = str4
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

## Object、object 和 {}

原型链顶端是 Object

```ts
// 都不报错
let a1: Object = 123
let a2: Object = '123'
let a3: Object = {}
let a4: Object = []
let a5: Object = (): number => 233
```

object 只能分配给引用类型，不能分配给基本类型

```ts
let a1: object = 123 // 报错 不能将类型“number”分配给类型“object”
let a2: object = '123' // 报错 不能将类型“string”分配给类型“object”
let a3: object = {}
let a4: object = []
let a5: object = (): number => 233
```

{}字面量 相当于 new Object，和 Object相同

```ts
let a1:{} = 123 // new Object
```

无法对变量进行更改

```ts
let a2: {} = {age: 18}
let a3: Object = {age: 18}
let a4: object = {age: 18}
a2.name = 'olu'
a3.name = 'olu'
a4.name = 'olu'
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

## Union Types 联合类型

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

## Type Aliases 联合类型

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

类型别名 type 不能通过同名方式去拓展, 可以使用`&`符号拓展合并

```ts
type Animal1 = {
  name: string
}
type Bear1 = Animal1 & {
  age: number
}
const bear1: Bear1 = {
  name: 'weini',
  age: 23
}
console.log(bear1.name, bear1.age)
```

## Interfaces 接口

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

### 可选属性

该属性可以不存在, 仍然不允许添加未定义的属性

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

### 任意属性

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

### 只读属性

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

## Type Assertions 类型断言

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

## null and undefined

- null 不存在
- undefined 未初始化的值

确定值类型不可能为 `null` or `undefined` 才可以使用 `!`

```ts
const val1: undefined = undefined
const val2: null = null

function foo10(x: string | null) {
  if (x === null) {
    throw new Error(`x is null`)
  } else {
    x.toLowerCase()
  }
}

// 参数 x 可能为空
function foo11(x?: number | null) {
  // 不做显示检查，从类型中删除 null 和 undefined
  x!.toFixed()
}
```

## Enums

枚举类型的值可以是`数字类型`也可以是`字符串类型`

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, Direction.Down) // 1 2
```

```ts
enum Direction {
  Up = 3,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, Direction.Down) // 3 4
```

枚举成员必须具有初始化表达式，不能包含计算成员。下面这样会报错

```ts
enum Direction2 {
  Up = 'olu'.length,
  Down,
  Left,
  Right,
}
```

## bigint

非常大的整数

```ts
const onehundred: bigint = BigInt(100)
const anotherHundred: bigint = 100n
```

## symbol

全局唯一引用

```ts
const name1 = Symbol('name')
const name2 = Symbol('name2')
```
