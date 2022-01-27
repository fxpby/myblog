# 面向对象三要素

## 继承

子类继承父类

```js
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
  speak() {
    console.log(`my name is ${this.name}, age ${this.age}`)
  }
}

class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }
  study() {
    console.log(`${this.name} study`)
  }
}

const olu = new Student('olu', 3, 'A1')
olu.eat();
olu.speak();
olu.study();
```

## 封装

数据的权限和保密

- public 完全开放
- protected 对子类开放
- private 对自己开放

```ts
class People {
  name
  age
  protected weight
  constructor(name, age) {
    this.name = name;
    this.age = age
    this.weight = 250
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
  speak() {
    console.log(`my name is ${this.name}, age ${this.age}`)
  }
}

class Student extends People {
  number
  private lover
  constructor(name, age, number) {
    super(name, age)
    this.number = number
    this.lover = 'olu'
  }
  study() {
    console.log(`${this.name} study`)
  }
  getWeight(){
    console.log(`${this.weight}`)
  }
}

const olu = new Student('olu', 3, 'A1')
olu.eat();
olu.speak();
olu.getWeight();
```

## 多态

同一接口不同实现

```js
class People {
  constructor(name) {
    this.name = name
  }
  printName() {
    console.log(`my name is ${this.name}`)
  }
}

class Student extends People {
  constructor(name) {
    super(name)
  }
  printName() {
    console.log(`student name is ${this.name}`)
  }
}

class Worker extends People {
  constructor(name) {
    super(name)
  }
  printName() {
    console.log(`worker name is ${this.name}`)
  }
}

const olu = new Worker('olu')
olu.printName()
```
