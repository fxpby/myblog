---
title: "责任链模式 Chain of Responsibility Pattern"
---

# 责任链模式 Chain of Responsibility Pattern

## 介绍

- 使多个对象都有机会处理请求，从而避免请求的发送者和接收者直接的耦合关系
- 将多个对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止

## 示例

### 请假审批

olu 平日上班请假需要审批，组长审批 => 经理审批 => 总监审批

```js
class Action {
  constructor(name) {
    this.name = name
    this.nextAction = null
  }

  setNextAction(action) {
    this.nextAction = action
  }

  handle() {
    console.log(`${this.name} 审批`)
    if (this.nextAction !== null) {
      this.nextAction.handle()
    }
  }
}

const leader1 = new Action('组长')
const leader2 = new Action('经理')
const leader3 = new Action('总监')
leader1.setNextAction(leader2)
leader2.setNextAction(leader3)
leader1.handle()
```

### 售卖电脑

假设有一个负责售卖电脑的电商网站，经过分别交纳 500 元定金和 200 元定金的两轮预定后（订单已经生成），现在已经到了正式购买的阶段。

公司针对支付过定金的用户有优惠政策。正式购买后，已经支付过 500 元定金的用户会收到 100 元的商城优惠券，支付过 200 元定金的用户可以收到 50 元的优惠券，没有支付定金的用户没有优惠券，且库存有限时不一定保证买到。

后端给我们返回的数据有

- orderType：订单类型（定金购买或者普通购买），1 为 支付 500 元定金，2 为支付 200 元定金，3 为未支付定金普通购买。
- pay: 是否已经支付定金。true 为用户已经支付定金，false 为用户提交定金订单但却没有支付定金，降级为未支付定金普通购买模式
- stock: 普通购买商品的库存数量，支付定金的用户不受此限制

```js
const order = (orderType, pay, stock) => {
  // 500 元定金购买
  if (orderType === 1) {
    // 已支付定金
    if (pay === true) {
      console.log(`500 元定金预购，获得 100 元优惠券`)
    } else {
      // 普通购买模式的手机有库存
      if (stock > 0) {
        console.log(`普通购买，没有优惠券`)
      } else {
        console.log(`电脑库存不足`)
      }
    }
  // 200 元定金购买
  } else if (orderType === 2) {
    // 已支付定金
    if (pay === true) {
      console.log(`200 元定金预购，获得 50 元优惠券`)
    } else {
      if (stock > 0) {
        console.log(`普通购买，没有优惠券`)
      } else {
        console.log(`电脑库存不足`)
      }
    }
  } else if (orderType === 3) {
    if (stock > 0) {
      console.log(`普通购买，没有优惠券`)
    } else {
      console.log(`电脑库存不足`)
    }
  }
}

order(1, true, 500) // 500 元定金预购，获得 100 元优惠券
```

上面这个函数，运行正确。but 这个 if...else 很多，阅读起来不舒适，后续维护也会令人头大。

如果采用职责链模式重构的话，可以先把 500 元订单、200 元订单和普通购买订单分成 3 个函数。把 orderType、pay、stock 这三个字段作为参数传递给 500 元订单函数，如果该函数不符合处理条件就把这个请求传递给后面 200 元订单函数，如果 200 元订单函数依然不能处理，就继续传递给普通购买订单函数。

```js
const order500 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log(`500 元定金预购，获得 100 元优惠券`)
  } else {
    // 传递请求给 200 元订单
    order200(orderType, pay, stock)
  }
}

const order200 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log(`200 元定金预购，获得 50 元优惠券`)
  } else {
    // 传递给普通购买订单
    orderNormal(orderType, pay, stock)
  }
}

const orderNormal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log(`普通购买，没有优惠券`)
  } else {
    console.log(`电脑库存不足`)
  }
}

order500(1, true, 500) // 500 元定金预购，获得 100 元优惠券
order500(1, false, 500) // 普通购买，没有优惠券
order500(2, true, 500) // 200 元定金预购，获得 50 元优惠券
order500(3, false, 500) // 普通购买，没有优惠券
order500(3, false, 0) // 电脑库存不足
```

这样重构完，把之前的大函数拆分成 3 个互不影响的小函数，但是传递请求的代码还是耦合在业务函数里面，比如 order500 和 order200 耦合，order200 和 orderNormal 耦合。这样的话，如果日后增加 300 元预定或者去除 200 元预定的话，我们就必须去改动业务函数内部，违反了开放封闭原则，这个链条很不灵活。

再改进一下，如果某一个节点不能处理请求，那么就统一返回一个特定的字符串标识`nextSuccessor`来表示请求需要继续向后传递👇🏻

```js
const order500 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log(`500 元定金预购，获得 100 元优惠券`)
  } else {
    // 不考虑下一个节点是谁，只是向后传递
    return 'nextSuccessor'
  }
}

const order200 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log(`200 元定金预购，获得 50 元优惠券`)
  } else {
    // 不考虑下一个节点是谁，只是向后传递
    return 'nextSuccessor'
  }
}

const orderNormal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log(`普通购买，没有优惠券`)
  } else {
    console.log(`电脑库存不足`)
  }
}
```

下面把函数包装到职责链节点，定义一个构造函数 Chain, 在 new Chain 的时候传递需要被包装的函数为参数。同时拥有一个实例属性 this.successor，用来表示职责链中下一个节点。

```js
class Chain {
  constructor(fn) {
    this.fn = fn;
    this.successor = null
  }

  // 指定在链中的下一个节点
  setNextSuccessor(successor) {
    return this.successor = successor;
  }

  // 传递请求给某个节点
  passRequest() {
    const result = this.fn.apply(this, arguments);
    if (result === 'nextSuccessor') {
      return this.successor && this.successor.passRequest.apply(this.successor, arguments);
    }
    return result
  }
}

const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, true, 500)
chainOrder500.passRequest(1, false, 500)
```

这样就不会违背开放封闭原则了，我们如果需要改动相关业务逻辑，只需要新增、修改或者移除节点顺序。

## 设计原则验证

- 发起者于各个处理者进行隔离
- 符合开放封闭原则
