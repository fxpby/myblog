# 数据类型

## 基本类型

- null 空值
- undefined 未定义
- number 数字
- string 字符串
- boolean 布尔值
- symbol 符号
- bigInt 

### null

> 从逻辑上来看，null值表示一个空指针对象，而这也正是使用typeof操作符检测null值时会返回“object”的原因 -- 红宝书

```js
typeof null === "object" // true
```

### undefined

未初始化的变量会自动赋予undefined, 建议还是显示初始化

typeof 对 undefined 和 undeclared（未声明 变量都返回 undefined

### number

- NaN: not a number, 数学运算的操作数不是数字类型就无法返回一个有效的数字，这时返回值未NaN.
  - 和自身不相等
  - 可使用Number.isNaN()判断一个数字是否为NaN

- Infinity

- 零值
  - SameValueZero TODO

e.g.

```js
let a = 1 / 'a' // NaN
a == NaN // false
a === NaN // false
a !== a // true
```

## 引用类型

- object 对象