---
id: ts-array
title: 数组
tags:
  - TypeScript
---

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

## 用接口表示数组

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

## 多维数组

```ts
let arr9: number[][] = [[1]]
let arr10: number[][][] = [[[1]]]
let arr11: Array<Array<number>> = [[1]]
let arr12: Array<Array<Array<number | string>>> = [[[1, 'olu']]]
```

## arguments 类数组

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
