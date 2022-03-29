# ref 与 $refs

## 概念

+ Vue官网上介绍说 ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例

## 举例

看完概念写个栗子实践一下吧~

```vue
<template>
  <div id="app">
    <input type="text" ref="aha"/>
    <button @click="func">别点我</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {
    func () {
      console.log(this.$refs.aha) // <input type="text">
    }
  }
}
</script>
```

再来一个栗子~  
父组件：  

```vue
<template>
  <div id="app">
    <Child ref="child" :child = "childInfo"/>
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
      childInfo: "aha"
    }
  },
  methods: {
    func () {
      console.log(this.$refs.child.childInfo) // aha
    }
  }
}
</script>
```

子组件：  

```vue
<template>
  <div class="child">
    <span>{{childInfo}}</span>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      childInfo: this.child
    }
  },
  props: {
    child: String
  }
}
</script>
```

![$refs](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/ref1.jpg)

> 也就是说在子组件中使用ref属性，会把子组件添加到父组件的$refs对象中  

+ 父组件向子组件动态传值举例

父组件：

```vue
<template>
  <div id="app">
    <Child ref="child" :childNum = "childInfo"/>
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
      this.$refs.child.childInfo1 = this.childInfo
      console.log(this.$refs.child.childInfo1)
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
  }
}
</script>
```

![$refs2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/ref5.gif)
