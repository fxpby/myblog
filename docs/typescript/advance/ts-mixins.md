---
id: ts-mixins
title: mixins 混入
tags:
  - TypeScript
---

## 对象的混入

写三个接口，然后使用 Object.assign(), 即可得到联合类型

```ts
interface Name {
  name: string
}

interface Age {
  age: number
}

interface Hobby {
  hobby: string
}

const n1: Name = { name: 'olu' }
const a1: Age = { age: 18 }
const h1: Hobby = { hobby: 'study' }

const obj = Object.assign(n1, a1, h1) // const obj: Name & Age & Hobby
```

## 类的混入

```ts
class A {
  type?: boolean
  changeType():void {
    this.type = !this.type
  }
}

class B {
  name?: string
  getName(): string | void {
    return this.name
  }
}

class C implements A,B {
  type: boolean = false
  name: string = 'olu'
  changeType:()=>void = () => { this.type = !this.type }
  getName:() => string | void = () => { return this.name }
}

mixins(C, [A, B])

function mixins(curClass: any, itemClass: any[]) {
  itemClass.forEach(item => {
    Object.getOwnPropertyNames(item.properties).forEach(name => {
      curClass.prototype[name] = item.properties[name]
    })
  })
}
```
