---
id: vue2-reactivity
title: 响应式原理
tags:
  - Vue
---

上篇文章中提到 `/src/core/instance/init.js` 中有个 `_init` 方法，这里有 `initState` 方法

```js
// 数据响应式，处理 props、methods、data、computed、watch
initState(vm)
```

这个方法在 `/src/core/instance/state.js` 中

```js
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```
