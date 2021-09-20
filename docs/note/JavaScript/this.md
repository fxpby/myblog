# this

## 调用位置

+ 调用栈：当前执行位置所调用的函数

+ 调用位置：作用域，this的绑定规则完全取决于调用位置

```javascript
function baz(){ // ......②
    //调用栈为：baz
    //调用位置：全局作用域
    console.log("baz")
    bar();
}
function bar(){ // ......③
    //调用栈：baz->bar
    //调用位置:baz()
    console.log("bar")
    foo();
}
function foo(){ // ......④
//调用栈：baz->bar->foo
//调用位置：bar()
    console.log("foo") 
}
baz(); // 调用baz ......①
````

> 调用栈相当于一个函数调用链

## 绑定规则

### 默认绑定

+ 独立函数调用

```javascript
function foo(){
    console.log(this.a)
}
var a = 2;
foo(); //2  
```

> 默认绑定指向全局对象,因为foo()是直接使用不带任何修饰的函数引用进行调用的，所以只能使用默认绑定

```javascript
function foo(){
    console.log(this.a)
}
var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo;
var a = "hhhhh";
bar(); //hhhhh
```

> bar 是obj.foo的一个引用，实际上引用了foo()本身，而foo()又是直接使用不带任何修饰的函数进行调用的，所以也是使用默认绑定。

### 隐式绑定

```javascript
function foo(){
    console.log(this.a)
}
var obj = {
    a: 2;
    foo: foo;
}
obj.foo(); //2
```

> 调用对象是否包含上下文对象，即是否对某个对象拥有或包含。调用位置会使用obj上下文来引用函数，所以函数被调用时obj对象包含它。当foo()被调用时，指向obj对象，当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象。调用foo()时，this被绑定到obj,即this.a和obj.a一样。参数传递实际上是一种隐性赋值

### 显示绑定

```javascript
function foo(){
    console.log(this.a)
}
var obj = {
    a: 2;
}
foo.call(obj) //2
```

> 通过foo.call()，可以在调用foo时强制把它的this绑定到obj上。在绑定this这件事上，apply(),call()效果是一样的，只是参数不同
apply():两个参数，第一个参数是要绑定给this的值，第二个参数是参数数组。当第一个参数为null、undefined时，默认指向window
call():同apply()第一个参数是要绑定给this的值，后面传入的是一个参数列表。当第一个参数为null、undefined时，默认指向window
当函数需要传递多个变量时，apply接受一个数组作为参数输入，call接受一系列单独变量。

```javascript
function car(color,height){
    this.color = color;
    this.height = height;
}
var bigCar = {}
//car.call(bigCar,"red",100) //改变this的指向,绑定this的值
car.apply(bigCar,["green",100])
//car(bigCar,"red",100)
console.log(bigCar,"hhh")
```

```javascript
function car(color, height){
    this.color = color;
    this.height = height;
}
//bigCar添加独立的属性
var bigCar = {
    displacement: 0
}
car.apply(bigCar,["green",200]);
console.log(bigCar,"使用apply继承原始的")

var carr = new car("black",500);
console.log(carr,"这是最原始的")
```

```javascript
function compute(){
    this.plus = function(a, b){
    console.log(a + b)
    }
    this.sub = function(a, b){
        console.log(a - b)
    }
}
function comcompute(){
    //compute.apply(this);
    this.mul = function(a, b){
        console.log(a * b)
    }
    this.div = function(a, b){
        console.log(a / b)
    }
}
var n1 = new compute();
var n2 = new comcompute();
n2.plus(3, 2);
n2.sub(3, 2);
n2.mul(3, 2);
n2.div(3, 2);
```

#### 硬绑定

```javascript
function foo(){
    console.log(this.a)
}
var obj = {
    a: 2
}
var bar = function(){
    foo.call(obj) //强制把foo的this绑定到了obj
}
bar();//2
setTimeout(bar,100)//2
bar.call(window)//2
console.log(window)
```

<!-- ```javascript
function foo(){
	
}
``` -->

<!-- #### API调用“上下文” -->