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

## implements

接口可以被类实现（implements）, 可用来约束接口类型

一个类只能继承自另一个类，但是可以实现多个接口

实现一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能

```ts
interface Person {
  run (type: boolean): boolean
}

interface Olu {
  sayHi(): void
}

class A {
  params:string
  constructor(params:string) {
    this.params = params
  }
}

class Man extends A implements Person, Olu {
  run(type: boolean): boolean {
    return type
  }
  sayHi(): void {
    console.log('hi~')
  }
}
```

## 抽象类

- 抽象类不允许被实例化
- 抽象类中的抽象方法必须被子类实现

```ts
abstract class A {
  name: string
  constructor(name: string) {
    this.name = name
  }

  setName(name: string): void {
    this.name = name
  }
  abstract getName(): string
}

class B extends A {
  constructor() {
    super('Olu')
  }

  getName(): string {
    return this.name
  }
}

const b = new B()
console.log(b.getName()) // Olu
b.setName('Olumel')
console.log(b.getName()) // Olumel
```
