# 数据类型

## 基本类型

- null 空值
- undefined 未定义
- number 数值
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

- 未初始化的变量会自动赋予undefined, 建议还是显示初始化

- typeof 对 undefined 和 undeclared（未声明） 变量都返回 undefined

### number

- NaN: not a number, 数学运算的操作数不是数字类型就无法返回一个有效的数字，这时返回值未NaN.
  - 和自身不相等
  - 使用Number.isNaN()判断一个值是否为NaN

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

### string

### boolean

- fasly 假值
  - false
  - null
  - undefined
  - ""
  - 0
  - NaN

- truthy 真值
  - 除了上述`fasly`的值，包括{}、[]、"false"、"0"

- 逻辑运算符（&&、!、!!）的运算值看其是真值/假值

- Boolean()转型函数可以将其他类型的值转换为布尔值，具体转换为true/false的规则取决于数据类型和实际的值

- 不同类型与布尔值之间的转换规则：

数据类型|转换为true的值|转换为false的值
:--|:--|:--
boolean|true|false
string|非空字符串|""（空字符串）
number|非零数值（包括无穷值）|0、NaN
object|任意对象|null
undefined|N/A|undefined

## 引用类型

- object 对象