---
id: this
title: this 指向
tags:
  - this
---

## 规律

- 在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的 this 会被绑定到 undefined 上，在非严格模式下会被绑定到全局对象 window/global 上
- 一般使用 new 方法调用构造函数时，构造函数内的 this 会被绑定到新创建的对象上
- 一般通过 call/apply/bind 方法显式调用函数时，函数体内的 this 会被绑定到指定参数的对象上
- 一般通过上下文对象调用函数时，函数体内的 this 会被绑定到该对象上
- 在箭头函数中，this 指向由外层（函数或全局）作用域决定

## 全局环境中的 this

```js
function fn1() {
  console.log(this);
}

function fn2() {
  'use strict';
  console.log(this);
}

fn1(); // window
fn2(); // undefined
```

fn 函数在 foo 对象中作为对象的方法，完成赋值后，fn1 在 window 全局环境中执行，所以 this 指向 window

```js
const foo = {
  bar: 10,
  fn: function () {
    console.log(this); // window
    console.log(this.bar); // window.bar => undefined
  },
};
let fn1 = foo.fn;
fn1();
```

如果改成下面这种调用方式，this 则指向最后调用它的对象。在执行函数时不考虑显示绑定，如果函数中的 this 是被上一级的对象调用，那么 this 指向就是上一级对象，否则指向全局

```js
const foo = {
  bar: 10,
  fn: function () {
    console.log(this); // { bar: 10, fn: [Function: fn] }
    console.log(this.bar); // 10
  },
};
foo.fn();
```

## 上下文对象调用中的 this

```js
const student = {
  name: 'Olu',
  fn: function () {
    return this;
  },
};
student.fn() === student; // true
```

存在嵌套调用时，this 会指向最后调用它的对象

```js
const person = {
  name: 'Olu',
  brother: {
    name: 'Coke',
    fn: function () {
      return this.name;
    },
  },
};
person.brother.fn(); // Coke
```

## 通过 bind、call、apply 改变 this 指向

```js
const foo = {
  name: 'olu',
  printName: function () {
    console.log(this.name);
  },
};

const bar = {
  name: 'fxpby',
};

console.log(foo.printName.call(bar)); // fxpby
```

## 构造函数和 this

```js
function foo() {
  this.bar = 'olu';
}
const instance = new foo();
console.log(instance.bar); // olu
```

上述代码中，new 操作符调用构造函数时做的事：

- 创建一个新对象
- 将构造函数的 this 指向这个新对象
- 给对象添加方法属性
- 返回新对象

即

```js
let obj = {};
obj.__proto__ = foo.prototype;
foo.call(obj);
```

### 构造函数显式 return

- 如果构造函数显式返回一个值，并且这个值的一个复杂类型，那么 this 就指向这个返回的复杂类型
- 如果返回的是基本类型，this 仍指向实例

```js
function Foo() {
  this.user = 'olu';
  const o = {};
  return o;
}
const instance = new Foo();
console.log(instance.user); // undefined
```

```js
function Foo() {
  this.user = 'olu';
  return 1;
}

const instance = new Foo();
console.log(instance.user); // olu
```

## 箭头函数中的 this

在箭头函数中，this 的指向是由外层（函数或全局）作用域来决定的

```js
const foo = {
  fn: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};
console.log(foo.fn()); // window
```

要是想让 this 指向 foo 的话，就可以利用箭头函数

```js
const foo = {
  fn: function () {
    setTimeout(() => {
      console.log(this);
    });
  },
};
console.log(foo.fn()); // {fn: ƒ}
```

## 显式绑定

call、apply、bind、new 对 this 进行绑定的情况成为显示绑定

## 隐式绑定

根据调用关系确定 this 指向的情况称为隐式绑定

## this 优先级

```js
function foo() {
  console.log(this.a);
}

const obj1 = {
  a: 1,
  foo: foo,
};

const obj2 = {
  a: 2,
  foo: foo,
};
obj1.foo.call(obj2); // 2
obj2.foo.call(obj1); // 1
```

```js
function foo(a) {
  this.a = a;
}

const obj1 = {};

let bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2

const baz = new bar(3);
console.log(baz.a); // 3
```

bar 函数通过 bind 方法构造，内部将 this 绑定为 obj1,再次作为构造函数通过 new 被调用时，返回的实例与 obj1 解绑，即 new 绑定修改了 bind 绑定的 this 指向，故 new 绑定的优先级比显式 bind 高

```js
function foo() {
  return (a) => {
    console.log(this.a);
  };
}

const obj1 = {
  a: 2,
};

const obj2 = {
  a: 3,
};

const bar = foo.call(obj1);
console.log(bar.call(obj2)); // 2
```

foo 中的 this 绑定到了 obj1 上，bar 引用箭头函数中的 this 也会绑定到 obj1 上，**箭头函数的绑定无法被修改**

```js
var a = 123;
const foo = () => (a) => {
  console.log(this.a);
};

const obj1 = {
  a: 2,
};

const obj2 = {
  a: 3,
};

const bar = foo.call(obj1);
console.log(bar.call(obj2)); //123
```

完全写成箭头函数后，箭头函数 this 继承自外部作用域，即全局作用域 window，window 上的 a 即 123;

但是如果把第一行改成使用 let 或 const 声明的话，会输出 undefined，原因是 let 和 const 声明变量不会挂载到 window 全局对象上

```js
let a = 123;
const foo = () => (a) => {
  console.log(this.a);
};

const obj1 = {
  a: 2,
};

const obj2 = {
  a: 3,
};

const bar = foo.call(obj1);
console.log(bar.call(obj2)); // undefined
```
