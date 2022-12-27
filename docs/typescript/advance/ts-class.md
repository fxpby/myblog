---
id: ts-class
title: 类
tags:
  - TypeScript
---

## 定义类

和 ES6 的 class 差不多，需要提前声明类型

```ts
class Person {
  name: string
  age: number
  hobby: string
  constructor(name: string, age: number, hobby: string) {
    this.name = name
    this.age = age
    this.hobby = hobby
  }
}

const olu = new Person('Olu', 18, 'sleep')
```

## 类的修饰符

- public：修饰的属性或方法是公有的，可以在任何地方被访问，默认所有的属性和方法都是 public
- private：修饰的属性或方法是私有的，不能在声明它的类的外部访问
- protected: 修饰的属性或方法是受保护的，和 private 类似，区别是它在子类中也允许被访问

```ts
class Person {
  protected name: string
  private age: number
  public hobby: string
  static catalogue: string = 'turtle'
  constructor(name: string, age: number, hobby: string) {
    this.name = name
    this.age = age
    this.hobby = hobby
    this.run() // 报错 static 函数不能在 constructor 中访问
    Person.run()
  }

  // static 函数只能访问 static 变量
  static run(): string {
    this.catalogue
    return `running ${this.catalogue}`
  }
}

class Man extends Person {
  constructor() {
    super('olu-cute', 18, 'sleep')
    this.name = 'cute' // protected 可以在子类中访问到
  }
}

const olu = new Person('Olu', 18, 'sleep') 
console.log(olu.catalogue) // 静态属性，不需要 new 实例化
console.log(olu.name) // 报错 protected的 属性“name”受保护，只能在类“Person”及其子类中访问
```
