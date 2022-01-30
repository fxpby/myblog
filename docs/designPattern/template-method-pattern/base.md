# 模板方法模式

## 介绍

- 只需要使用继承就可以实现
- 子类实现中的相同部分被上移到父类中，将不同的部分留待子类实现，体现泛化的思想
  
### 构成

- 抽象父类
- 具体的实现子类

通常在抽象父类中封装子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。子类通过继承这个抽象类，也就继承了整个算法结构，并且可以选择重写父类的方法。

## 示例

### Coffee or Tea

#### ☕️泡一杯拿铁

泡拿铁的步骤如下

1. 把水煮沸
2. 用热水冲泡咖啡
3. 把咖啡倒进杯子
4. 加牛奶

```js
class Coffee {
  boilWater() {
    console.log('把水煮沸')
  }

  brewCoffee() {
    console.log('用热水冲泡咖啡')
  }

  pourInCup() {
    console.log('把咖啡倒进杯子')
  }

  addMilk() {
    console.log('加牛奶🥛')
  }

  init() {
    this.boilWater()
    this.brewCoffee()
    this.pourInCup()
    this.addMilk()
  }
}

const coffee = new Coffee()
coffee.init()
```

#### 🍵泡一壶茶

泡壶茶的步骤如下：

1. 把水煮沸
2. 用沸水浸泡茶叶
3. 把茶水倒进杯子
4. 加柠檬

```js
class Tea {
  boilWater() {
    console.log('把水煮沸')
  }

  brewTea() {
    console.log('用热水浸泡茶叶')
  }

  pourInCup() {
    console.log('把茶水倒进杯子')
  }

  addLemon() {
    console.log('加柠檬🍋')
  }

  init() {
    this.boilWater()
    this.brewTea()
    this.pourInCup()
    this.addLemon()
  }
}

const tea = new Tea()
tea.init()
```

#### 分离共同点

我们发现拿铁和茶的冲泡过程好像差不多嘛，不同点只有 3 个：

- 原料不同，咖啡和茶，可以抽象为“饮料”
- 泡的方式不同，咖啡是冲泡，茶叶是浸泡。都可以抽象为“泡”
- 加入的调理不同，咖啡是牛奶，茶叶是柠檬，都可以抽象为“调料”

这样抽象完成后就得到了下面的步骤👇🏻

1. 把水煮沸
2. 用热水**泡饮料**
3. 把**饮料**倒进杯子
4. 加**调料**

让我们忘记刚才创建的 Coffee 类和 Tea 类，使用抽象类 Beverage

```js
class Beverage {
  boilWater() {
    console.log('把水煮沸')
  }

  // 空方法，由子类重写
  brew() {}

  // 空方法， 由子类重写
  pourInCup() {}

  // 空方法， 由子类重写
  addCondiments() {}

  init() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }
}
```

#### 创建 Coffee 子类和 Tea 子类

```js
class Coffee extends Beverage {
  constructor() {
    super()
  }

  brew() {
    console.log('用热水冲泡咖啡')
  }

  pourInCup() {
    console.log('把咖啡倒进杯子')
  }

  addCondiments() {
    console.log('加牛奶🥛')
  }
}

class Tea extends Beverage {
  constructor() {
    super()
  }

  brew() {
    console.log('用热水浸泡茶叶')
  }

  pourInCup() {
    console.log('把茶水倒进杯子')
  }

  addCondiments() {
    console.log('加柠檬🍋')
  }
}

const coffee = new Coffee()
coffee.init()
const tea = new Tea()
tea.init()
```

上面的 `init` 方法就是 `模板方法`, 因为该方法中封装了子类的框架算法，它作为一个算法的模板，知道子类以何种顺序去执行某些方法。
