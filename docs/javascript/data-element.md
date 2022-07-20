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

#### NaN

not a number, 数学运算的操作数不是数字类型就无法返回一个有效的数字，这时返回值未NaN.

- 和自身不相等
- 使用Number.isNaN()判断一个值是否为NaN

  ```js
  let a = 1 / 'a' // NaN
  a == NaN // false
  a === NaN // false
  a !== a // true

  let b = 'olu'
  Number.isNaN(b) // false
  ```

#### Infinity 无穷数

如果某个计算得到的数值结果超过了JavaScript可以表示的范围，就会转换为一个特殊的无穷值，有正无穷大和负无穷大

- isFinite() 检测是否为常规数字  

  ```js
  1 / 0 // Infinity
  1 / -0 // -Infinity
  -1 / 0 // -Infinity
  -1 / -0 // Infinity
  Infinity / Infinity // NaN
  ```

#### 零值

- 加法和减法运算不会得到负零

  ```js
  0 / -1 // -0
  0 * -1 // -0
  let a = -0
  a.toString() // 0
  JSON.parse(a) // 0
  ```

有些数据需要数字的符号位去表示特殊信息，比如运动方向

- SameValue 和 SameValueZero
  - 在判断`+0`、`-0`和`NaN`时，SameValue和`===`表现不一样，ES6中的Object.is内部使用了SameValue，includes则使用了SameValueZero

  ```js
  NaN == NaN // false
  NaN === NaN // false
  Object.is(NaN, NaN) // true => SameValue(NaN, NaN)
  +0 === -0 // true
  Object.is(+0, -0) // false => SameValue(+0, -0)
  [+0].includes(-0) // true => SameValueZero(+0, -0)
  ```

- 0.1 + 0.2 !== 0.3
  - 二进制浮点数中的0.1和0.2并不是十分精确
  - 机器精度 Number.EPSILON, 可以比较两个数字是否相等（在指定的误差范围内）

  ```js
  function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON
  }
  ```

### string

#### 访问字符

历史原因，下面这种`str[2]`写法在某个老版本的IE中是不合法的，现在貌似没有这个问题了，放心使用吧

- 区别: 如果找不到字符，[]返回undefined，charAt()返回空字符串

```js
let str = "olu cool"
str[2] // "u"
str.charAt(2) // "u"
str[9] // undefined
str.charAt(9) // ""
```

使用for..of遍历字符

```js
let str = "olu cool"
for(let item of str) {
  console.log(item)
}
```

#### 字符串不可更改

字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符串，数组的成员函数都是在原始值上进行操作

```js
let str = "olu cool"
str[2] = "aha"
str // "olu cool"
```

### boolean

#### fasly 假值

- false
- null
- undefined
- ""
- 0
- NaN

#### truthy 真值

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
