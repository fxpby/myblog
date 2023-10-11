---
id: vue2-init-process
title: vue2 初始化过程
tags:
  - Vue
---

每个 Vue2 项目的入口文件都有 `new Vue（options）`, 这里的魔法一起来探寻下吧

## 入口

### 探秘 `/src/instance/index.js`

在 `/example` 目录下新建一个HTML文件，通过**打断点**的方式来学习

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    {{msg}}
  </div>
  <script src="../dist/vue.js"></script>
  <script>
    debugger
    new Vue({
      el: '#app',
      data: {
        msg: 'hello Olu'
      }
    })
  </script>
</body>
</html>
```

通过断点F11调试可以知道入口在 `/src/instance/index.js` 中

![new-vue-instance](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/blogImg/vue2/new-vue-instance.png)

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue 构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用 Vue.prototype._init 方法（在 initMixin 中定义）
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

### 探秘 `/src/core/instance/init.js`

上面知道 `_init` 方法在 `/src/core/instance/init.js` 中，来到这里瞧一瞧

#### `initMixin`

```js
export function initMixin (Vue: Class<Component>) {
  // Vue 初始化过程
  Vue.prototype._init = function (options?: Object) {
    // vue 实例
    const vm: Component = this
    // a uid，每个 vue 实例都有一个 _uid, 且依次递增
    vm._uid = uid++

    let startTag, endTag
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    vm._isVue = true
    // merge options 处理组件配置项
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      /**
       * 每个子组件初始化时的性能优化处理
       * 将组件配置对象上的一些深层次属性放到 vm.$options 中
       */
      initInternalComponent(vm, options)
    } else {
      /**
       * 初始化根组件， 合并 Vue 的全局配置到根组件的局部配置，如 Vue.component 注册的全局组件会合并到 根实例 的 component 选项中
       * 每个子组件的选项合并在：
       *   1. Vue.component 方法注册的全局组件在注册时做了选项合并
       *   2. {component: {xx}} 方式注册的局部组件在执行编译器生成的 render 函数时做了选项合并，包括根组件
       */
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      // 设置代理，将 vm 实例上的属性代理到 vm._renderProxy
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm

    // 初始化组件实例关系属性，如 $parent、$children、$root、$refs 等
    initLifecycle(vm)

    /**
     * 初始化自定义事件， <comp @click="handleClick" /> 类似这样注册的事件，监听者不是父组件而是子组件本身，事件的派发和监听者都是子组件
     */
    initEvents(vm)

    /**
     * 解析组件的插槽信息，得到 vm.$slot, 处理渲染函数，得到 vm.$createElement 方法，即 h 函数
     */
    initRender(vm)

    // 调用 beforeCreate 钩子函数
    callHook(vm, 'beforeCreate')

    // 初始化组件的 inject 配置项，得到 result[key] = val 形式的配置对象，进而对结果数据进行响应式处理，代理每个 key 到 vm 实例
    initInjections(vm) // resolve injections before data/props

    // 数据响应式，处理 props、methods、data、computed、watch
    initState(vm)

    // 解析组件配置上的 provide 对象，挂载到 vm._provided 属性上
    initProvide(vm) // resolve provide after data/props

    // 调用 created 钩子
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    // 如果配置项中有 el 选项，则自动调用 $mount 方法，即有了 el 选项，就不需要再手动调用 $mount
    if (vm.$options.el) {
      // 调用 $mount, 进入挂载阶段
      vm.$mount(vm.$options.el)
    }
  }
}
```

#### `resolveConstructorOptions`

```js
export function resolveConstructorOptions (Ctor: Class<Component>) {
  // 配置项目
  let options = Ctor.options
  if (Ctor.super) {
    // 存在基类，递归解析基类构造函数选项
    const superOptions = resolveConstructorOptions(Ctor.super)
    const cachedSuperOptions = Ctor.superOptions
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      // 基类构造函数选项改变，需要重新设置
      Ctor.superOptions = superOptions
      // check if there are any late-modified/attached options (#4976)
      // 检查 Ctor.options 是否有任何后期修改或附加的选项
      const modifiedOptions = resolveModifiedOptions(Ctor)
      // update base extend options
      // 如果有则合并
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions)
      }
      // 选项合并，将合并结果赋值为 Ctor.options
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
      if (options.name) {
        options.components[options.name] = Ctor
      }
    }
  }
  return options
}
```

#### `resolveModifiedOptions`

解析构造函数选项中后续被修改或者增加的选项

```js
function resolveModifiedOptions (Ctor: Class<Component>): ?Object {
  let modified
  // 构造函数选项
  const latest = Ctor.options
  // 密封的构造函数选项，用于备份
  const sealed = Ctor.sealedOptions
  // 对比两个选项，记录不一样的
  for (const key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) modified = {}
      modified[key] = latest[key]
    }
  }
  return modified
}
```

#### `mergeOptions`

位于 `/src/core/util/options.js`

```js
// 合并两个选项，出现相同配置项时，子选项会覆盖父选项的配置项
export function mergeOptions (
  parent: Object,
  child: Object,
  vm?: Component
): Object {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child)
  }

  if (typeof child === 'function') {
    child = child.options
  }

  // 标准化 props，inject,directive 选项，方便后续程序处理
  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  // 处理原始 child 对象上的 extends 和 mixins, 分别执行 mergeOptions, 将这些继承而来的选项合并到 parent
  // mergeOptions 处理过的对象会含有 _base 属性
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm)
    }
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm)
      }
    }
  }

  const options = {}
  let key

  // 遍历父选项
  for (key in parent) {
    mergeField(key)
  }

  // 遍历子选项，如果父选项不存在该配置项则合并，否则跳过，因为父子拥有同一属性的情况在上面处理父选项时已经处理过，使用子选项的值
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }

  // 合并选项，childVal 优先级高于 parentVal
  function mergeField (key) {
    const strat = strats[key] || defaultStrat

    // 值为如果 childVal 存在则优先使用 childVal，否则使用 parentVal
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}
```

#### `initInjections`

`/src/core/instance/inject.js`

```js
/**
 * 初始化 inject 配置项
 * 1. 得到 result[key] = val
 * 2. 对结果数据进行响应式处理，代理每个 key 到 vm 实例
 */
export function initInjections (vm: Component) {
  // 解析 inject 配置项，然后从祖代组件的配置中找到配置项中每一个 key 对应的 val，最后得到 result[key] = val 的结果
  const result = resolveInject(vm.$options.inject, vm)
  // 对 result 做数据响应式处理，也有代理 inject 配置中每个 key 到 vm 实例的作用
  // 不建议在子组件更改数据，因为一旦祖代组件中注入的 provide 发生更改，组件中做的更改就会被覆盖
  if (result) {
    toggleObserving(false)
    Object.keys(result).forEach(key => {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], () => {
          warn(
            `Avoid mutating an injected value directly since the changes will be ` +
            `overwritten whenever the provided component re-renders. ` +
            `injection being mutated: "${key}"`,
            vm
          )
        })
      } else {
        defineReactive(vm, key, result[key])
      }
    })
    toggleObserving(true)
  }
}
```

#### `resolveInject`

位于 `/src/core/instance/inject.js`

```js
/**
 * 解析 inject 配置项，从祖代组件的 provide 配置中找到 key 值，否则用默认值，最后得到 result[key] = val
 * inject 对象得到的结构如下（合并选项时对组件配置对象做了标准化处理）
 * inject = {
 *   key: {
 *     from: provideKey,
 *     default: xxx
 *   }
 * }
 */
export function resolveInject (inject: any, vm: Component): ?Object {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    const result = Object.create(null)

    // inject 配置项的所有 key
    const keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject)

    // 遍历 key
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      // #6574 in case the inject object is observed...
      // 跳过 __ob__ 对象
      if (key === '__ob__') continue
      // 得到 provide 中对应的 key
      const provideKey = inject[key].from
      let source = vm
      // 遍历所有的祖代组件，直至根组件，找到 provide 中对应 key 的值，最后得到 result[key] = provide[provideKey]
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey]
          break
        }
        source = source.$parent
      }

      // 如果上面 while 循环未找到，使用 inject[key].default, 如果没有设置 default，则抛出错误
      if (!source) {
        if ('default' in inject[key]) {
          const provideDefault = inject[key].default
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault
        } else if (process.env.NODE_ENV !== 'production') {
          warn(`Injection "${key}" not found`, vm)
        }
      }
    }
    return result
  }
}
```

#### `initProvide`

位于`/src/core/instance/inject.js`

```js
// 解析组件配置项上的 provide 对象，将其挂载到 vm._provided 属性上
export function initProvide (vm: Component) {
  const provide = vm.$options.provide
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide
  }
}
```

## 总结

new Vue 过程：

- 处理组件配置项
  - 初始化根组件时进行了选项合并，将全局配置合并到根组件的局部配置上
  - 初始化每个子组件时做了一些性能优化，将组件配置对象上的深层次属性放到 vm.$options 选项中，提高代码执行效率
- 初始化组件实例的关系属性，如 $parent,$children,$root,$refs 等
- 处理自定义事件
- 调用 beforeCreate 钩子函数
- 初始化组件的 inject 配置项，得到 `ret[key] = val` 形式的配置对象。然后对该配置对象进行浅层响应式处理（只处理了对象的第一次数据），并代理每个 key 到 vm 实例上
- 数据响应式，处理 props，methods，data，computed，watch 等选项
- 解析组件配置项上的 provide 对象，挂载到 vm._provide 上
- 调用 created 钩子函数
- 如果发现配置项上有 el 选项，则自动调用 $mount 方法；若没有需要手动调用 $mount 方法
- 进入挂载阶段
