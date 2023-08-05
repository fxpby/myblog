---
id: apply-call-bind
title: 实现 apply/call/bind
tags:
  - apply
  - call
  - bind
---

## 1. apply

### 1.1 语法

```js
func.apply(thisArg, [argsArray]);
```

参数：

- thisArg: 在 func 函数运行时使用的 this 值
- argsArray: 一个数组或类数组对象，其中的数组元素作为单独参数传给 func 函数。如果该参数的值为 null 或者 undefined，表示不需要传入任何参数

返回值

- 使用指定的 this 值和参数调用函数的结果

### 1.2 流程图

### 1.3 代码实现

```js
Function.portotype.apply = function (thisArg, argsArray) {
  if (typeof this !== 'function') {
    throw new TypeError('which called on is not a function');
  }
  if (thisArg === undefined || thisArg === null) {
    thisArg = window;
  } else {
    thisArg = Object(thisArg);
  }

  // 将 func 放入 thisArg 内，这样在调用 thisArg[func] 时 this 自然就指向了 thisArg
  const func = Symbol('func');
  thisArg[func] = this;

  let result;

  if (argArray && typeof argsArray === 'object' && 'length' in argsArray) {
    // 此处使用 Array.from 包裹让其支持形如 { length: 1, 0: 1 } 这样的类数组对象，直接对 argsArray 展开将会执行出错
    result = thisArg[func](...Array.from(argsArray));
  } else if (argsArray === undefined || argsArray === null) {
    result = thisArg[func]();
  } else {
    throw new TypeError('CreateListFromArrayLike called on non-object');
  }

  delete thisArg[func];

  return result;
};
```

## 2. bind

### 2.1 语法

```js
func.bind(thisArg[, arg1[, arg2[, ...]]])
```

参数：

- thisArg: 调用绑定函数时作为 this 参数传递给目标函数的值；如果使用 new 运算符构造绑定函数，忽略该值
- arg1,arg2，...: 当目标函数被调用时，被预置入绑定函数的参数列表中的参数

返回值

- 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数

### 2.2 流程图

### 2.3 代码实现

```js
Function.prototype.bind = function (thisArgs, ...argsArray) {
  if (typeof this !== 'function') {
    throw new TypeError('which is called on is not a function');
  }

  if (thisArg === undefined || thisArg === null) {
    thisArg = window;
  } else {
    thisArg = Object(thisArg);
  }

  const func = this;

  const bound = function (...boundArgsArray) {
    let isNew = false;

    // 如果 func 不是构造器，直接使用 instanceof 将出错，所以需要用 try...catch 包裹
    try {
      isNew = this instanceof func;
    } catch (error) {}

    return (
      func, apply(isNew ? this : thisArg, argsArray.concat(boundArgsArray))
    );
  };

  const Empty = function () {};
  Empty.prototype = this.prototype;
  bound.prototype = new Empty();

  return bound;
};
```

## 3. call

### 3.1 语法

```js
func.call(thisArg, arg1, arg2, ...)
```

参数

- thisArg: 在 func 函数运行时使用的 this 值
- arg1,arg2,...: 指定的参数列表

返回值

- 使用指定的 this 值和参数调用函数的结果

### 3.2 流程图

### 3.3 代码实现

```js
Function.protortpe.call = function (thisArg, ...argsArray) {
  if (typeof this !== 'function') {
    throw new TypeError('which called on is not a function');
  }

  if (thisArg === undefined || thisArg === null) {
    thisArg = window;
  } else {
    thisArg = Object(thisArg);
  }

  const func = Symbol('func');
  thisArg[func] = this;

  let result;

  if (argsArray.length) {
    result = thisArg[func](...argsArray);
  } else {
    result = thisArg[func]();
  }

  delete thisArg[func];

  return result;
};
```
