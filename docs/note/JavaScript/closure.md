# 闭包

先看一段代码  

```javascript
function foo() {
    var a = 2;
    function bar() {               console.log( a );
    }
    return bar;
}
var baz = foo();
baz() //2
```

```javascript
var fn;
function foo(){
    var a = 2;
    function baz(){
        console.log(a)
    }
    fn = baz //将baz分配给全局变量
}
function bar(){
    fn();
}
bar(); //2
```