# typeof、instanceof ...查看值的类型

## typeof

### 相关知识点

typeof 用来判断基本类型(Undefined, null, Boolean, Number, String, bigint, symbol（es6）),最适合用来判断一个值是否为string/number/boolean/undefined

如果值是对象或null, 将返回object

```js
typeof undeclared // "undefined"
typeof undefined // "undefined"
typeof 123.1 // "number"
typeof "hello world" // "string"
typeof false // "boolean"
typeof null // "object"
typeof function(){} // "function"
typeof [1, 2] // "object"
typeof NaN // "number"
typeof /^3$/ // "object"
typeof document.all // "undefined"  这神不神奇
```

typeof 对 undefined 和 undeclared 变量都返回 undefined

> 在 V8 中，每一个 Javascript 对象都有一个与之关联的 Map 对象，Map 对象描述 Javascript 对象类型相关的信息，类似元数据
> Map 对象主要使用 16 bit 的 instance_type 字段来描述对应 Javascript 对象的类型

ECMA-262 规定,任何实现内部[[Call]]方法的对象都应该在typeof检测时返回function

> function 也是Javascript的一个内置类型，然而查阅规范就会知道它实际上时object的一个“子类型”。具体来说，函数时“可调用对象”。它有一个内部属性[[Call]], 该属性使其可以被调用。 --你不知道的JavaScript

### function额外知识点

函数也是有属性的，函数对象的length属性是其声明的参数的个数

```js
function fn(a, b, c, d) {
  return '猜猜我的length'
}
console.log(fn.length) // 4
```

> 数组也是object的一个“子类型”，数组的元素按数字顺序来进行索引（而非像普通对象那样通过字符串键值），其length属性是元素的个数

### 手写 伪typeof

undeclared 无法实现

```js
function falseTypeof(val) {
  const defaultType = Object.prototype.toString.call(val).slice(8, -1).toLowerCase()

  const map = {
    string: true,
    boolean: true,
    number: true,
    undefined: true,
    bigint: true,
    symbol: true,
    function: true,
  }

  const isDocumentAll = (String(val) === 'document.all') && (defaultType === 'htmlallcollection')

  if (isDocumentAll) {
    return 'undefined'
  }

  if (map[defaultType]) {
    return defaultType
  }

  return 'object'
}
```

### v8实现

很好奇v8是怎么实现的, 搜了下大佬们的文章, 上连接

> <https://zhuanlan.zhihu.com/p/143590829>

## instanceof

刚才看到了typeof对一些基本类型值比较有用, 那么引用类型怎么办呢, 别慌, 有instanceof在呢

如果是给定引用类型的实例, instanceof 返回true. 检测基本类型值, 返回 false

举个栗子:

```js
//  结合class
class Person {}
let Tom = new Person()

Tom instanceof Person // true
```

```js
// 结合构造函数
function Person() {}
let Tom = new Person()

Tom instanceof Person // true
```

```js
// 结合内建class
let arr = [1, 2]

arr instanceof Array // true
arr instanceof Object // true
```

因为arr也属于Object类, 在原型上Array是继承Object的

对于 instanceof , 真正决定类型的是prototype, 而不是构造函数