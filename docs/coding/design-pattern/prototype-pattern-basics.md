# 原型模式 Prototype Pattern

## 介绍

- clone 自己，生成一个新对象

## 示例

如果想创建许多对象有相同属性的话，使用 ES6 class 来创建多个实例是很有用的。

```js
class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Woof~`
  }
}

const dog1 = new Dog("Max")
const dog2 = new Dog("Spot")
const dog3 = new Dog("Boom")
```

需要注意的是构造器包含一个 `name` 属性，并且这个类自己包含 `bark` 属性，在使用 ES6 class 的时候，上面的例子中的 `bark` 就自动添加到原型上了.

```js
console.log(Dog.prototype)
// {constructor: f Dog(name), bark: f bark()}

console.log(dog1.__proto__)
// {constructor: f Dog(name), bark: f bark()}

Dog.prototype === dog1.__proto__ // true
```

我们可以利用原型模式一次性的添加属性到原型上，影响所有实例而不是每一次都创建重复属性。就像下面这样，狗狗不止会叫，还会玩耍，我们可以添加 `play` 属性到原型上。

```js
class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Woof~`
  }
}

const dog1 = new Dog("Max")
const dog2 = new Dog("Spot")
const dog3 = new Dog("Boom")

Dog.prototype.play = () => console.log('playing with olu~')
dog1.play()
```

## 应用

### Object.create

Object.create 方法可以创建新对象。

```js
const dog = {
  bark() {
    return `Woof`
  }
}

const pet1 = Object.create(dog)

pet1.bark() // Woof
console.log(Object.keys(pet1)) // [] 直接访问 pet1 的属性
console.log(Object.keys(pet1.__proto__)) // ['bark'] 在 pet1 原型上的属性
```

尽管 pet1 自己没有任何属性，但是它通过自己的原型链获取到了属性，通过 dog 对象作为 pet1 的原型，我们可以访问 bark 属性。
Object.create 是一种简单的方式让对象从其他对象上继承属性，新对象可以顺着原型链获取到属性。

## 总结

原型模式可以让我们很简洁的去继承其他对象的属性，原型链允许我们访问哪些没有直接定义在对象自己身上的属性，我们可以避免重复的方法和属性，进而减少内存占用。
