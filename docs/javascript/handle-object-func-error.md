# 给对象的所有方法优雅的添加异常处理

## 背景

为了保证程序的健壮性，需要做异常处理。比如有一个对象，里面有一些方法，像下面这样👇🏻

```js
const obj = {
  a() {
    try {
      // ...
    } catch (e) {
      // ...
    }
  },
  b() {
    try {
      // ...
    } catch (e) {
      // ...
    }
  }
}
```

如果对象里面的方法很多，每个都加 `try catch` 真心好麻烦，这时候就想有一种方式可以对所有方法做异常处理🤤

## 利用代理模式实现

### 代理模式简介

代理模式可以给目标对象做一层包装，可以方便的去控制对对象的访问。
比如下面这个明星-经纪人的例子，`olu`是迪士尼的热门明星，拥有姓名、年龄和手机号三个属性。如果平日游客去找它问是问不到的，那么就可以去和`olu`的饲养员也就是经纪人搞好关系问一下。
`olu`是明星嘛，找经纪人问电话也只能得到经纪人的电话，明星的电话哪能随便透露；想约`olu`出去耍要报价，这里也是经纪人代替明星报价。除了这俩属性，问`olu`的姓名和年龄经纪人还是会告诉的。

```js
// 明星
const star = {
  name: 'olu', 
  age: 18,
  phone: 120110109,
}

// 经纪人
const agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      // 返回经纪人的手机号
      return 12315
    }
    if (key === 'price') {
      // 经纪人代替明星报价
      return 521
    }
    return target[key]
  }, 
  set: function(target, key, val) {
    if (key === 'customPrice') {
      if (val < 520) {
        // 报价最低 520
        throw new Error('olu 没有这么便宜！')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

console.log(agent.name) // 明星的
console.log(agent.age) // 明星的
console.log(agent.phone) // 经纪人的
console.log(agent.price) // 经纪人提供
agent.customPrice = 11 // error
```

### 具体实现

首先定义一个`createProxy`方法来实现代理👇🏻

```js
const createProxy = target => {
  const proxy = createExceptionProxy()
  return new Proxy(target, {
    get: proxy,
    set: proxy
  })
}

// 如果 target 不包含 prop 就返回空，包含则返回对应的属性值， 如果是函数，做一层包装
const createExceptionProxy = () => (target, prop) => {
  if (!(prop in target)) {
    return
  }

  if (typeof target[prop] === 'function') {
    return createExceptionZone(target, prop)
  }

  return target[prop]
}

const createExceptionZone = (target, prop) => {

}
```
