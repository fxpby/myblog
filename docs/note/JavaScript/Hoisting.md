# 变量提升

## 小例子

```javascript
a = 2;
var a;
console.log(a)
```

这段代码最后的输出结果是2而不是undefined  

```javascript
console.log(a)
a = 2;
```

这段代码的输出结果是undefined  

实际上这两段代码的处理形式是这样的：

```javascript
var a;
a = 2;
console.log(a)

var a;
console.log(a)
a = 2;
```

```javascript
   foo();
   function foo() {
       console.log( a );//undefined
    var a = 2;
   }
```

这段代码会被处理成

```javascript
function foo() {
    var a;
    console.log( a );//undefined
    a = 2;
}
foo();
```

变量和函数的声明在代码中出现的位置移动到了最上面，这个过程就是提升  

+ 只有声明本身会被提升，赋值或其他的运行逻辑不会  
  
```javascript
foo();
bar();
var foo = function bar(){

}
```

代码片段经过提升后是以下形式：

```javascript
var foo;
foo();
bar();
foo = function(){
    var bar = ...
}
```

## 函数提升优先

```javascript
foo();
var foo;
function foo() {
    console.log( 1 );
}
foo = function() {
    console.log( 2 );
};
//输出结果为1
```

上述代码实际运行顺序如下

```javascript
function foo(){
    console.log( 1 );
}
foo();
foo = function() {
    console.log( 2 );
};
```
> 总结：var a = 1;这个声明javascript引擎会把他当作两个单独的声明，即 var a 和 a = 1，前者是编译阶段的任务，后者是执行阶段的任务。  无论作用域的声明出现在哪个地方，都将在代码本身执行前进行处理，这个过程就是提升。需要注意的是声明本身会被提升，而包括函数表达式的赋值在内的赋值操作并不会提升
