# 节流和防抖

## 节流

## 1. 基本概念

`throttle(func, wait)`

在指定的时间间隔内只执行一次 => 每 wait 毫秒内最多只调用一次 func

## 2. 应用场景

- 搜索框输入时的实时联想
- 监听 scroll 事件计算位置信息

## 3. 代码实现

```js
const throttle = (func, wait = 1000) => {
  let lastTime = 0
  let timer = null

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    let nowTime = +new Date()

    if (nowTime - lastTime >= wait) {
      lastTime = nowTime
      func(...args)
    } else {
      timer = setTimeout(() => {
        lastTime = +new Date()
        func(...args)
        timer = null
      }, wait)
    }
  }
}
```

## 防抖

## 1. 基本概念

`debounce(func, wait)`

当我们停止操作的一定时间之后执行一次 => 自最近一次触发后延迟 wait 毫秒调用 func

## 2. 应用场景

- 注册时输入完用户名后检测是否被占用
- 监听 resize 事件计算尺寸信息

## 3. 代码实现

```js
const debounce = (func, wait = 1000) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      func(...args);
      timer = null;
    }, wait);
  };
};
```