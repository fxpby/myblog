# typeof 类型守卫

`typeof` 返回字符串

- object
- string
- number
- bigint
- symbol
- undefined
- function

检查 `typeof` 返回值是一种`类型保护`

## 类型缩小

将类型细化为比声明更具体的类型的过程

下面代码中 `padding` 的类型可以是 `number` 或者 `string`，下面代码段中的`typeof padding === 'number'`这个检查就是`类型防护`

```ts
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input
  } else {
    return padding + input
  }
}
```

## 真值缩小

先了解一下 typerscript 中的 fasly 假值

- 0
- NaN
- "" (空字符串)
- 0n (bigint 的零)
- null
- undefined

下面的例子就是利用条件判断去进行真值缩小

```ts
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    strs.forEach(s => {
      console.log(s)
    })
  } else if (typeof strs === 'string') {
    console.log(strs.concat('hello'))
  } else {
    // ...
  }
}

function getUserOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `现在共有 ${numUsersOnline} 人在线`
  }
  return `现在没有人在线`
}

function multiplyAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values
  } else {
    return values.map(x => {
      return x * factor
    })
  }
}
console.log(multiplyAll([2, 3, 4], 3))
```
