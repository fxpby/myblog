# 策略模式 Strategy Pattern

## 介绍

- 不同策略分开处理
- 避免出现大量 if...else 或者 switch...case

## 示例

### 购买通道

不同类型用户有不同的购买通道，这里的 buy 方法里有大量的 if...else

```js
class User {
  constructor(type) {
    this.type = type
  }

  buy() {
    if (this.type === 'ordinary') {
      console.log('普通用户购买')
    } else if (this.type === 'member') {
      console.log('会员用户购买')
    } else if (this.type === 'vip') {
      console.log('vip 用户购买')
    }    
  }
}

const user1 = new User('ordinary')
user1.buy()
const user2 = new User('member')
user2.buy()
const user3 = new User('vip')
user3.buy()
```

我们尝试把每一种用户都单独做一个类的处理，每个类都有 buy 方法

```js
class OrdinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}
class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}
class VipUser {
  buy() {
    console.log('vip 用户购买')
  }
}

const user1 = new OrdinaryUser()
user1.buy()
const user2 = new MemberUser()
user2.buy()
const user3 = new VipUser()
user3.buy()
```

### 计算奖金

年底了，最激动人心的莫过于年终奖了，年终奖一般是根据员工的工资基数和年底绩效情况发放的。比如绩效为 S 的人年终奖为 4 倍工资，绩效为 A 的人年终奖为 3 倍工资，绩效为 B 的人年终奖为 2 倍工资。热情的开发想给财务提供一段代码方便计算员工的年终奖。

#### 最初的代码实现

编写一个 calculateBonus 的方法来计算每个人的奖金数额，接收两个参数：员工的工资和绩效考核等级。

```js
const calculateBonus = (performanceLevel, salary) => {
  if (performanceLevel === 'S') {
    return salary * 4
  }

  if (performanceLevel === 'A') {
    return salary * 3
  }

  if (performanceLevel === 'B') {
    return salary * 2
  }
}

calculateBonus('B', 10000) // 20000
calculateBonus('S', 6000) // 24000
```

- calculateBonus 方法有很多的 if...else，这些语句需要覆盖所有的逻辑分支
- calculateBonus 方法缺乏弹性，如果新增加绩效等级 C，或者想把绩效等级 A 的奖金系数改为 5，那么就需要修改 calculateBonus 方法，违法开放封闭原则
- 复用性差，如果有其他地方需要重用计算奖金的方法，只能复制粘贴

#### 使用组合函数重构代码

如果我们把各种算法封装到一个小函数中，这些函数通过命名区分，就可以知道对应着哪种算法，也可以应用在程序的其他地方

```js
const performanceS = salary => {
  return salary * 4
}

const performanceA = salary => {
  return salary * 3
}

const performanceB = salary => {
  return salary * 2
}

const calculateBonus = (performanceLevel, salary) => {
  if (performanceLevel === 'S') {
    return performanceS(salary)
  }

  if (performanceLevel === 'A') {
    return performanceA(salary)
  }

  if (performanceLevel === 'B') {
    return performanceB(salary)
  }
}

calculateBonus('A', 10000)
```

这样搞虽然解决了一些复用性问题，但是还是没有解决前两点问题。

#### 使用策略模式

这个例子中，算法的使用方式不变，都是通过基数乘绩效等级得到最终数额。但是每种绩效对应不同的计算规则。
基于策略模式的程序至少由两部分组成：

- 一组策略类，策略类封装了具体的算法，负责具体的计算过程
- 环境类 Context，Context 接受客户的请求，随后把请求委托给某一个策略类，也就是说 Context 中要维持对某个策略对象的引用

我们先把每种绩效的计算规则都封装在对应的策略类中：

```js
class PerformanceS {
  caculate(salary) {
    return salary * 4
  }
}
class PerformanceA {
  caculate(salary) {
    return salary * 3
  }
}
class PerformanceB {
  caculate(salary) {
    return salary * 2
  }
}
```

接下来定义奖金类：

```js
class Bonus {
  constructor(salary, strategy) {
    // 原始工资
    this.salary = salary
    // 绩效等级对应的策略对象
    this.strategy = strategy
  }

  setSalary(salary) {
    this.salary = salary
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  getBonus() {
    if (!this.strategy) {
      throw new Error(`没有设置 ${strategy} 属性`)
    }
    return this.strategy.caculate(this.salary)
  }
}

const bonus = new Bonus()
bonus.setSalary(10000)
bonus.setStrategy(new PerformanceS())
console.log(bonus.getBonus())
bonus.setStrategy(new PerformanceA())
console.log(bonus.getBonus())
```

我们先创建了一个 bonus 对象，给它设置了一些原始工资数额，再传入某个计算奖金的策略对象进行保存，调用 getBonus 方法计算奖金，其实 bonus 对象本身没有能力计算，而是把请求委托给之前保存好的策略对象。

#### JavaScript 版本的策略模式

上面是传统的面向对象语言的实现，JavaScript 中，函数也是对象，我们更直接的做法就是把 strategy 直接定义为函数。

```js
const strategies = {
  "S": salary => {
    return salary * 4
  },
  "A": salary => {
    return salary * 3
  },
  "B": salary => {
    return salary * 2
  }
}
```

Context 也没有必要用 Bonus 类来表示，依然用 calculateBonus 函数充当 Context 来接受用户的请求。

```js
const calculateBonus = (level, salary) => {
  return strategies[level](salary)
}

console.log(calculateBonus('S', 6000))
console.log(calculateBonus('B', 10000))
```

这样代码结构变得更简洁了呢，舒适！

## 设计原则验证

- 不同策略，分开处理，而不是混合在一起
- 符合开放封闭原则
