# watch监听

## 概念

Vue官网上说watch是一个侦听器，Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化  

## 举例

+ 子组件监听父组件数据变化实时更新

父组件：

```vue
<template>
  <div id="app">
    <Child :childNum = "childInfo"/>
    <button @click="func">别点我</button>
  </div>
</template>

<script>
import Child from './components/Child'
export default {
  name: 'App',
  components: {Child},
  data () {
    return {
      childInfo: 1
    }
  },
  methods: {
    func () {
      this.childInfo++
    }
  }
}
</script>
```

子组件：

```vue
<template>
  <div class="child">
    <span>{{childInfo1}}</span>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      childInfo1: this.childNum
    }
  },
  props: {
    childNum: Number
  },
  watch: {
    childNum: {
      handler (newValue, oldValue) {
        this.childInfo1 = newValue
      }
    }
  }
}
</script>
```

![watch](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/watch1.gif)

> 注意： 如果监听对象内部值的变化，需要加 deep: true进行深度监听  
