# 中介者模式 Mediator Pattern

## 介绍

- 解除对象与对象之间紧耦合的关系
- 所有对象都通过中介者对象来通信，而不是相互引用

## 示例

olu 要去租房了，找的中介，中介对应很多买家和卖家。比如 房主a 修改了价格，通知中介告诉 租客b。

```js
class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  setA() {
    const number = this.b.number
    this.a.setNumber(number * 1)
  }

  setB() {
    const number = this.a.number
    this.b.setNumber(number * 1.1)
  }
}

class A {
  constructor() {
    this.number = 0
  }

  setNumber(num, m) {
    this.number = parseInt(num, 10)
    if (m) {
      m.setB()
    }
  }
}

class B {
  constructor() {
    this.number = 0
  }

  setNumber(num, m) {
    this.number = parseInt(num, 10)
    if (m) {
      m.setA()
    }
  }
}

const a = new A()
const b = new B()
const m = new Mediator(a, b)

a.setNumber(100, m)
console.log(a.number, b.number)
b.setNumber(100, m)
console.log(a.number, b.number)
```

## 设计原则验证

- 各个关联对象通过中介者隔离
- 符合开放封闭原则
