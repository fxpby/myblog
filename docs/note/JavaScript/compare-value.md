# typeof、instanceof ...查看值的类型

typeof 对 undefined 和 undeclared 变量都返回 undefined

> function 也是Javascript的一个内置类型，然而查阅规范就会知道它实际上时object的一个“子类型”。具体来说，函数时“可调用对象”。它有一个内部属性[[Call]], 该属性使其可以被调用。 --你不知道的JavaScript

函数也是有属性的，函数对象的length属性是其声明的参数的个数

```js
function fn(a, b, c, d) {
  return '猜猜我的length'
}
console.log(fn.length) // 4
```

> 数组也是object的一个“子类型”，数组的元素按数字顺序来进行索引（而非像普通对象那样通过字符串键值），其length属性是元素的个数