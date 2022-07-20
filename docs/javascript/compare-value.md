# typeof/instanceof/{}.toString 检查类型

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

instanceof在检查的时候会考虑原型链, 还可以通过静态方法`Symbol.hasInstance`设置自定义逻辑

```js
// 设置 instanceof 检查
// 假设 有 canDrinkWater 属性的都是 Person
class Person {
  static [Symbol.hasInstance](obj) {
    if (obj.canDrinkWater) {
      return true
    }
  }
}

let obj = {
  canDrinkWater: true
}

obj instanceof Person // true
```

class 没有Symbol.hasInstance的话，会检查Class.prototype是否等于对象的原型链中的原型之一

也就是顺着原型链一个一个往上比较往上找

```js
obj.__proto__ === Class.prototype ?
obj.__proto__.__proto__ === Class.prototype ?
obj.__proto__.__proto__.__proto__ === Class.prototype
...
// 找到符合的就返回 true
// 到了原型链尾端还没有找到的话，返回 false
```

```js
class Person {}
class Tom extends Person {}

let tom = new Tom()

tom instanceof Person // true

tom.__proto__ // Tom {}
Person.prototype // Person {}
tom.__proto__.__proto__ // Person {}
```

### Object.prototype.isPrototypeOf()

- isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
- prototypeObj.isPrototypeOf(object)

> isPrototypeOf() 与 instanceof 运算符不同。在表达式 "object instanceof AFunction"中，object 的原型链是针对 AFunction.prototype 进行检查的，而不是针对 AFunction 本身。 -- MDN

```js
function Person() {}
let tom = new Person()
tom instanceof Person // true
Person.prototype.isPrototypeOf(tom) // true

// 修改 prototype
Person.prototype = {}

tom instanceof Person // false
Person.prototype.isPrototypeOf(tom) // false
```

```js
function A() {}
function B() {}

A.prototype = B.prototype = {}

let a = new A()

a instanceof B // true
```

对于 instanceof , 真正决定类型的是prototype, 而不是构造函数

### 手写实现instanceof

#### 方法一：递归

```js
const testInstanceof = (obj, target) => {
  if (typeof target !== 'function') {
    return false
  }
  if (obj.__proto__ === null) {
    return false
  }
  if (obj.__proto__ !== target.prototype) {
    return testInstanceof(obj.__proto__, target)
  } else {
    return true
  }
}
```

#### 方法二：链表

```js
const testInstanceof = (obj, target) => {
  if (typeof target !== 'function') {
    return false
  }

  let p = obj
  while(p) {
    if(p.__proto__ === target.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}
```

## Object.prototype.toString

- 将一个普通对象转化为字符串
- 用于检查基本数据类型、内建对象和包含Symbol.toStringTag属性的对象

### Symbol.toStringTag

- 可以使用特殊的对象属性 Symbol.toStringTag 自定义对象的 toString 方法的行为

```js
let olu = {
  [Symbol.toStringTag]: "Olu"
}
Object.prototype.toString.call(olu) // "[object Olu]"
```

哈哈，感觉这个比 typeof 厉害
