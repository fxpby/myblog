# 子组件调用父组件方法

## this.$emit

废话不多说，直接看例子吧  
父组件：  

```vue
<template>
  <div class="father">
    <p>我是父组件</p>
    father buy {{icecream}} icecream for child
    <Child @wantIcecream="buyIcecream"/>
  </div>
</template>

<script>
import Child from "@/components/Child";
export default {
  components: { Child },
  name: "Father",
  data() {
    return {
      icecream: ""
    }
  },
  methods: {
    buyIcecream(num){
      this.icecream = num
      console.log("father buy ", num, " icecream for child")
    }
  }
};
</script>
```

父组件的

```vue
<Child @wantIcecream="buyIcecream"/>
```

里面的wantIcecream相当于child告诉爸爸想要冰淇淋，buyIcecream相当于爸爸将要做的回应（方法名）  
然后父组件在下面的methods里面做相应的买冰淇淋的动作

```javascript
buyIcecream(num){
  this.icecream = num
  console.log("father buy ", num, " icecream for child")
}
```

子组件:  

```vue
<template>
  <div class="child">
    <button @click="callFather">我是子组件，呼叫父组件</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
    }
  },
  methods: {
    callFather() {
      this.$emit('wantIcecream', 2)
    }
  }
};
</script>
```

```vue
<button @click="callFather">我是子组件，呼叫父组件</button>
```

这里的点击事件相当于打电话给爸爸，然后在methods里面告诉爸爸具体的需求

```javascript
methods: {
  callFather() {
    this.$emit('wantIcecream', 2)
  }
}
```

这个this.$emit()相当于拿起电话，告诉爸爸wantIcecream，并且告诉吃2个（参数）  

## 传方法

+ 也就是父组件把方法名传给子组件，子组件调用该方法

父组件:  

```vue
<template>
  <div class="father">
    <p>我是父组件</p>
    <Child :wantIcecream="buyIcecream"/>
  </div>
</template>

<script>
import Child from "@/components/Child";
export default {
  components: { Child },
  name: "Father",
  data() {
    return {
      icecream: ""
    }
  },
  methods: {
    buyIcecream(){
      console.log("买冰淇淋")
    }
  }
};
</script>
```

子组件:  

```vue
<template>
  <div class="child">
    <button @click="callFather">我是子组件，呼叫父组件</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    wantIcecream:{
      type:Function,
      default:null
    }
  },
  data() {
    return {
    }
  },
  methods: {
    callFather(){
      this.wantIcecream()
    }
  }
};
</script>
```
