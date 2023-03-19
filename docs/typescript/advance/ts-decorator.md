---
id: ts-decorator
title: 装饰器
tags:
  - TypeScript
---

需提前在 `tsconfig.json` 中 把 `target` 下方的 `experimentalDecorators` 和 `emitDecoratorMetadata` 置为 `true`

## 类装饰器 ClassDecorator

target 是构造函数

```ts
const Base: ClassDecorator = (target) => {
  target.prototype.name = 'olu'
  target.prototype.fn = () => { console.log('olu aha') }
}

@Base
class Http {

}
const http = new Http() as any
console.log(http.name)
console.log(http.fn())
```

## 属性装饰器 PropertyDescriptor

target 是原型对象

```ts
const Name: PropertyDecorator = (target, key) => {
  console.log(target, key)
}

class Http {
  @Name
  olu: string
  constructor() {
    this.olu = 'olu'
  }
}
const http = new Http() as any
console.log(http.name)
```

## 参数装饰器 ParameterDecorator

```ts
import axios from 'axios'
const Get = (url: string) => {
  const fn:MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
    const k = Reflect.getMetadata('metadataKey', target)
    axios.get(url).then(res => {
      descriptor.value(k ? res.data[k] : res.data)
    })
  }
  return fn
}
import 'reflect-metadata'
const Result = () => {
  const fn:ParameterDecorator = (target, key, index) => {
    Reflect.defineMetadata('metadataKey', 'value', target)
  }
  return fn
}

@Base('Olu cool')
class Http {
  @Get('http://test.json')
  getList(@Result() data: any) {
    console.log(data)
  }
}
const http = new Http() as any
console.log(http.name)
console.log(http.fn())
```

## 方法装饰器 MethodDecorator

```ts

import axios from 'axios'
const Get = (url: string) => {
  const fn:MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
    axios.get(url).then(res => {
      descriptor.value(res.data)
    })
  }
  return fn
}

@Base('Olu cool')
class Http {
  @Get('http://test.json')
  getList(data: any) {
    console.log(data)
  }
}
const http = new Http() as any
```

## 装饰器工厂

柯里化传参

```ts
const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.name = name
    target.prototype.fn = () => { console.log('olu aha') }
  }
  return fn
}

@Base('Olu cool')
class Http {

}
const http = new Http() as any
console.log(http.name)
console.log(http.fn()) 
```
