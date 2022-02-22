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
