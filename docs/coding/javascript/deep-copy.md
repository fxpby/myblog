# 深拷贝

## 一、基本类型的值和引用类型的值

+ 基本数据类型有String,Number,Undefined,Null,Boolean,Symbol共有6种
+ 基本类型是按值访问的，从一个变量复制基本类型的值到另一个变量后两个变量的值是完全独立的，即使一个变量改变了也不会影响到第二个变量

```javascript
let str1 = 'a';
let str2 = str1;
str2 = 'b';
console.log(str1); //'a'
console.log(str2); //'b'
```

+ 引用类型有Object,Array,Function,Date,RegExp,Error,Set,Map
  
```javascript
let obj1 = {a:1};
let obj2 = obj1;
obj2.a = 2;
console.log(obj1); //{a:2}
console.log(obj2); //{a:2}
//obj1,obj2是保存在栈中的指针,指向同一个存储在堆内存中的对象，当通过变量obj1操作堆内存的对象时，obj2也会一起改变
```

## 二、深拷贝的常用方式

### JSON.parser(JSON.stringfy(obj))

+ 把一个对象序列化成为一个JSON字符串，再用JSON.parse()反序列化将JSON字符串变成一个新的对象

```javascript
var obj={
  a:1,
  b:2,
  c:undefined,
  fn:function(){}
}
var d = JSON.parse(JSON.stringify(obj));
console.log(d); //{a: 1, b: 2}
```

> 如果obj里面有undefined、symbol或者function时，不会被拷贝。只有可以转成 JSON 格式的对象才能使用这种方法

### Object.assign()

+ 语法：Object.assign(target, ...sources)
+ 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象,返回目标对象。

```javascript
let arr1 = {a:1}
let arr2 = {b:2}
let arr3 = {c:3}
let arr4 = {d:4}
let arr5 = {e:5}
let obj = {}
Object.assign(obj,arr1,arr2,arr3,arr4,arr5) //{a: 1, b: 2, c: 3, d: 4, e: 5}
```

```javascript
let obj1={name:"aaa",colors:["red", "green", "blue"]};  
let obj2=Object.assign({},obj1);  
obj2.name='bbb';  
console.log(obj1);//{name: "aaa", colors:["red", "green", "blue"] }
console.log(obj2);//{name: "bbb", colors:["red", "green", "blue"] }
```

```javascript
let obj1={name:"aaa",colors:["red", "green", "blue"]};  
let obj2=Object.assign({},obj1);  
obj2.colors[0]='pink';  
console.log(obj1);//{name: "aaa", colors:["pink", "green", "blue"] }
console.log(obj2);//{name: "bbb", colors:["pink", "green", "blue"] }
```

```javascript
var obj1 = {x: 1, y: 2}
var obj2 = Object.assign({}, obj1);
console.log(obj1) //{x: 1, y: 2}
console.log(obj2) //{x: 1, y: 2}

obj2.x = 2; //修改obj2.x
console.log(obj1) //{x: 1, y: 2}
console.log(obj2) //{x: 2, y: 2}

```

```javascript
var obj1 = {
  x: { a: 1, b: 2},
  y: 3
}
var obj2 = Object.assign({}, obj1);
console.log(obj1) //{x: { a: 1, b: 2}, y: 3}
console.log(obj2) //{x: { a: 1, b: 2}, y: 3}

obj2.x.a = 4; //修改obj2.x
console.log(obj1) //{x: { a: 4, b: 2}, y: 3}
console.log(obj2) //{x: { a: 4, b: 2}, y: 3}

```

> Object.assign()只能实现一维对象/数组的深拷贝

### 其他方法

slice()、concat()、Array.from()能实现一维数组的深拷贝
