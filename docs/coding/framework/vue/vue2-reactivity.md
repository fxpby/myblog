# 响应式原理

上篇文章中提到 `/src/core/instance/init.js` 中有个 `_init` 方法，这里有 `initState` 方法

```js
// 数据响应式，处理 props、methods、data、computed、watch
initState(vm);
```

这个方法在 `/src/core/instance/state.js` 中

- 数据响应式的入口，分别处理 props、methods、data、computed、watch
- 优先级：props、methods、data、computed 对象中的属性不能出现重复，优先级和列出顺序一致
  - computed 的 key 不和 props、data 的 key 重复，methods 无影响

```js
export function initState(vm: Component) {
  vm._watchers = [];
  const opts = vm.$options;

  // 处理 props 对象，为 props 对象的每个属性设置响应式，并将其代理到 vm 示例上
  if (opts.props) initProps(vm, opts.props);

  // 处理 methods 对象，校验每个属性的值是否为函数、和 props 属性对比判断是否重复，最后得到 vm[key] = methods[key]
  if (opts.methods) initMethods(vm, opts.methods);

  /**
   * 1. 判断是否重复，data 对象上的属性不能和 props、methods 对象上的属性相同
   * 2. 代理 data 对象上的属性到 vm 实例
   * 3. 为 data 对象上的数据设置响应式
   */
  if (opts.data) {
    initData(vm);
  } else {
    observe((vm._data = {}), true /* asRootData */);
  }

  /**
   * 1. 处理 watch 对象
   * 2. 为每个 watch.key 创建 watcher 实例，key 和 watcher 实例可能是 一对多 的关系
   * 3. 如果设置了 immediate，则立即执行回调函数
   */
  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}
```

computed 和 watch 都通过 watcher 去实现响应式

- watch：适用于当数据变化时执行异步或者开销较大的操作时使用，需要长时间等待的操作可考虑放在 watch 中
- computed: 适合做同步计算，异步问号
