# Array对象的方法总结

## 1.Array.isArray()

+ 判断值是否为数组

```javascript
var a = [1,2,3,4]
typeof a //object
Array.isArray(a) //true
```

## 2.valueOf()

+ 返回数组本身（很少用到）

```javascript
var a = [1,2,3,4]
a.valueOf() //[1,2,3,4]
```

## 3.toString()

+ 返回数组的字符串形式

```javascript
var a = [1,2,3,4]
a.toString() //"1,2,3,4"

var a = [1, 2, 3, [4, 5, 6]];
a.toString() //"1,2,3,4,5,6"
```

## 4.push()

+ 在数组末端添加一个或多个元素，并返回添加新元素后的数组长度

```javascript
var a = []

a.push(1) //1
a.push('a') //2
a.push(true, {}) //4
a //[1, "a", true, {}]
```

> 注意：该方法会改变原数组

## 5.pop()

+ 删除数组的最后一个元素，并返回该元素

```javascript
var a = ['a', 'b', 'c'];

a.pop() // 'c'
a //['a', 'b']
```

> 注意：该方法会改变原数组，且如果对空数组使用pop(),不会报错而是返回undefined

## 6.join()

+ 以参数作为分隔符，将所有数组成员组成一个字符串返回，如果不提供参数，默认使用逗号分隔

```javascript
var a = [1,2,3,4]

a.join(' ') // "1 2 3 4"
a.join(' | ') //"1 | 2 | 3 | 4"
a.join() //"1,2,3,4"
```

## 7.concat()

+ 合并多个数组，将新数组的成员添加到原数组成员的后面，并返回一个新数组，原数组不变

```javascript
[1,2,3].concat(4,5,6) //[1, 2, 3, 4, 5, 6]

//等同于
[1, 2].concat(3,[4, 5], [6])
[1, 2].concat([3],[4], [5, 6])
```

+ 还可以用于将对象合并为数组

```javascript
[].concat({a: 1},{b: 2}) //[{a: 1},{b: 2}]
[].concat({a: 1}, [2]) //[{a: 1},2]
[2].concat({a: 1}) //[2, {a: 1}]
```

## 8.shift()

+ 删除数组的第一个元素，并返回该元素

```javascript
var a = ['a','b','c'];
a.shift() //"a"
a //["b", "c"]
```

> 注意：该方法会改变原数组

## 9.unshift()

+ 在数组的第一个位置添加元素，返回添加新元素后的数组长度

```javascript
var arr = ['c','d'];
arr.unshift('a','b') //4
arr //["a", "b", "c", "d"]
```

> 注意：该方法会改变原数组

## 拓展运算符,rest参数，取代arguments

+ 主要用于函数调用

```javascript
function push(array, ...items){
  array.push(...items);
}

function add(x, y){
  return x + y;
}
const numbers = [1,2]
add(...numbers) //3

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2); // 返回数组长度6且arr1 = [0, 1, 2, 3, 4, 5]

//克隆数组，修改a2，a1不会改变
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;

//合并数组
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
var arr = [...arr1, ...arr2, ...arr3] //["a", "b", "c", "d", "e"]

//对于没有部署Iterator接口的伪数组对象，拓展运算符不能将其转为真正的数组
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
let arr = [...arrayLike];
//TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
//可以使用Array.form方法转化为真数组
//set转化伪数组的方法
//const a  = new Set(arr)
console.log(Array.from(arrayLike))
```

> 注意：拓展运算符在解构赋值时，只能放在参数的最后一位

## Array.from()

+ 可以将伪数组转化成真数组

```javascript
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
//可以使用Array.form方法转化为真数组
console.log(Array.from(arrayLike))
```

## Array.of()

+ 将一组值转换为数组,可以替代Array()或者new Array()

```javascript
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```

## fill()

+ 填充数组，可以用来初始化数组。可以接受3个参数,指定起始位置和结束位置

```javascript
['a','b','c'].fill(1,1,2)
```

> 注意：参数起始大小为1而不是0

## entries(),keys(),values()

+ 用于遍历数组，分别是对元素的index和value、元素索引号和元素值的遍历

```javascript
let arr = ['a', 'b']
for (let index of arr.keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of arr.values()) {
    console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of arr.entries()) {
    console.log(index, elem);
}

// 0 "a"
// 1 "b"

```

+ Map和Set都有has()方法，不同的是Map用来查找键名，Set用来查找值
+ Set()方法可以对数组去重

## Object.assign()

+ 如果源对象有重复，则后面的会覆盖前面

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
let m = {name:{asd:'111'}}
let n = Object.assign({},m)
console.log(n)

let t1 = {name:{asd:'111'}}
let t2 = Object.assign({},t1)
t2
```

## Array.prototype方法

### indexOf() 

+ 返回在该数组中第一个找到的位置元素，找不到返回-1

```javascript
var arr = ['apple','orange','pear'];  
console.log("found:", arr.indexOf("orange") != -1);
//found:true
```

### lastindexof()

+ 与indexof()相反，找到该数组最后一个位置

### every()

+ 检测数组中每一项是否符合条件

```javascript
var ary = [12,23,24,42,1];
var result = ary.every(function(item, index){
  return item > 0
})
console.log(result) //true

var ary1 = [-12,23,24,42,1];
var result1 = ary1.every(function(item, index){
  return item > 0
})
console.log(result1) //false
```

### find()

+ 检查列表中的成员，返回null则表示没找到

### some()

+ 检测数组中每一项是否有符合条件的项

```javascript
var ary = [12,23,-24,42,1];
var result = ary.some(function(item, index){
  return item < 0
})
console.log(result) //true
```

### foreach()

+ 遍历元素，为每一个元素执行对应的方法

```javascript
var arr = [1,2,3,4];

arr.forEach(function(item,index){
console.log(item); //1 2 3 4  
});
//箭头函数写法（减少回调函数代码量）
arr.forEach(item,index) => {
console.log(item); //1 2 3 4  
}
```

### map()

+ 遍历元素，返回新数组

```javascript
var oldArr = [
  {first_name:"Colin",last_name:"Toh"},
  {first_name:"Addy",last_name:"Osmani"},
  {first_name:"Yehuda",last_name:"Katz"}
];

function getNewArr(){
  return oldArr.map(function(item,index){
    item.full_name = [item.first_name,item.last_name].join(" ");
    return item;
  });

}
console.log(getNewArr());
```

> forEach和Map的区别：forEach遍历数组每一项后，方法执行没有返回值，对原数组也没有影响。
每一次执行匿名函数时，传递了3个参数值：数组中的item、当前项的索引index和原始数组list
可以通过修改数组的索引来修改原数组

```javascript
var ary = [12,23,24,42,1];
var res = ary.forEach(function (item,index,input) {
  input[index] = item*10;
})
console.log(res);//-->undefined;
console.log(ary); //[120,230,240,420,10] 影响了原数组
```

> 而Map的回调函数中支持return返回值，即把数组的这一项变为return的值，但是这个操作并不影响原数组

```javascript
var ary = [12,23,24,42,1];
var res = ary.map(function (item,index,input) {
  return item*10;
})
console.log(res);//-->[120,230,240,420,10];
console.log(ary);//-->[12,23,24,42,1]；
```

### filter

+ 创建一个新的匹配过滤条件的数组

```javascript
var arr = [
  {"name":"apple", "count": 2},
  {"name":"orange", "count": 5},
  {"name":"pear", "count": 3},
  {"name":"orange", "count": 16},
];
var newArr = arr.filter(function(item){
  return item.name === "orange";
});
console.log("Filter results:",newArr);//[{"name":"orange", "count": 5},{"name":"orange", "count": 16}]
```

### reduce()

+ 累加器，将数组的所有值累加成一个值

ES5写法：

```javascript
var arr = ["a","b","c","d","e","d"];

function getWordCnt(){
  var obj = {};
  for(var i= 0, l = arr.length; i< l; i++){
    var item = arr[i];
    obj[item] = (obj[item] +1 ) || 1;
  }
  return obj;
}
console.log(getWordCnt()); //{a: 1, b: 1, c: 1, d: 2, e: 1}
//先定义一个对象obj,再遍历数组arr,取到数组的每一项，如果遇到重复项则该项+1
```

> reduce(callback, initialValue),传入两个变量。回调函数和初始值。如果函数有传入参数即prev和next,index和array，prev从数组第一个元素开始，next是第二个元素。传入初始值initialValue后，第一个prev就变成了initalValue,next就是数组中的第一个元素。

reduce(callback,[initialValue]),其中callback有四个参数，即prev(上一次回调函数的返回值或者initalValue初始值),currentValue(当前数组处理的元素),index(当前索引)和array(原数组)

```javascript
var arr = ["aa","bb"];
function noPassValue(){
  return arr.reduce(function(prev,next){
    console.log("prev:",prev);
    console.log("next:",next);
    return prev + " " +next;
  });
}
function passValue(){
  return arr.reduce(function(prev,next){
    console.log("prev:",prev);
    console.log("next:",next);
    prev[next] = 1;
    return prev + next;
  },{});
}

console.log("No Additional parameter:",noPassValue());
console.log("----------------");
console.log("With {} as an additional parameter:",passValue());

// prev: aa
// next: bb
// No Additional parameter: aa bb
// ----------------
// prev: {}
// next: aa
// prev: [object Object]aa
// next: bb
// With {} as an additional parameter: {aa:1,bb:1}


//prev: aa
// next: bb
// No Additional parameter: aa bb
// ----------------
// prev: {}
// next: aa
// prev: [object Object]aa
// next: bb
// With {} as an additional parameter: [object Object]aabb
```

### 数组排序 sort

```javascript
let arr = [1, 2, 3, 4]
arr.sort(function(p1, p2){
  //return p2 - p1;// 升序
  //return p1 - p2;//降序
})
// arr.sort((p1, p2) => p2 - p1) //es6
// arr.sort((p1, p2) => p1 - p2)
```

### reduceRight()

+ 同reduce(),只不过是降序累加，可用于反转字符串的字符

```javascript
var word = "retupmoc";
function AppendToArray(previousValue, currentValue) {
  return previousValue + currentValue;
}
var result = [].reduceRight.call(word, AppendToArray, "the ");
console.log(result); // the computer
```
