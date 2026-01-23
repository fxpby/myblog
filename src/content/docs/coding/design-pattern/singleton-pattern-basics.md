---
title: "单例模式 Singleton Pattern"
---

# 单例模式 Singleton Pattern

## 🎺介绍

- 系统中唯一被使用
- 一个类只能初始化一个实例

## ⛹示例

### ♨ java 示例

```java
public class SingleObject {
  // 私有构造函数，只能内部 new，外部不能 new
  private SingleObject () {
  }

  // 唯一被 new 出来的对象
  private SingleObject instance = null;

  // 获取对象的唯一接口
  private SingleObject getInstance() {
    if (instance === null) {
      // 只能 new 一次哦
      instance = new SingleObject();
    }
    return instance;
  }

  // 对象方法
  public void login(username, password) {
    System.out.println('hello world');
  }
}

public class SingletonPatternDemo {
  public static void main(String[] args) {
    // 不合法的构造函数
    // 编译时报错，构造函数 SingleObject() 是私有的不可见的
    // SingleObject object = new SingleObject();

    // 获取唯一可用的对象
    SingleObject object = SingleObject.getInstance();
    object.login();
  }
}
```

### 🦏 js 示例

```js
class SingleObject {
  login() {
    console.log('login~')
  }
}

SingleObject.getInstance = (() => {
  let instance
  return () => {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

const o1 = SingleObject.getInstance()
o1.login()
const o2 = SingleObject.getInstance()
o2.login()
console.log(o1 === o2) // true
```

## 🚴‍♂️应用场景

### jQuery

```js
// jQuery 只有一个 $
if (window.jQuery !== null) {
  return window.jQuery
} else {
  // 初始化...
}
```

### 模拟登录框

```js
class LoginForm {
  constructor() {
    this.state = 'hide'
  }

  show() {
    if (this.state === 'show') {
      console.log('warning: 已经显示')
      return
    }
    this.state = 'show'
    console.log('show success')
  }

  hide() {
    if (this.state === 'hide') {
      console.log('warning: 已经隐藏')
      return
    }
    this.state = 'hide'
    console.log('hide success')
  }
}

LoginForm.getInstance = (() => {
  let instance
  return () => {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()
let o1 = LoginForm.getInstance()
o1.show()
let o2 = LoginForm.getInstance()
o2.hide()
console.log(o1 === o2) // true
```

### vuex 和 redux 的 store

## 设计原则验证

- 符合单一职责原则，只实例化唯一对象
- 没法具体开放封闭原则，但不违背开放封闭原则
