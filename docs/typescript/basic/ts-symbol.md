---
id: ts-symbol
title: symbol
tags:
  - TypeScript
---

```ts
let name1:symbol = Symbol('olu')
let name2:symbol = Symbol('olu')

let obj = {
  [name1]: 'hhh',
  [name2]: '111',
  name: 'olu'
}

console.log(obj) // { [Symbol(olu)]: 'hhh', [Symbol(olu)]: '111' }

for(let key in obj) {
  console.log(key) // name
}

console.log(Object.keys(obj)) // [ 'name' ]
console.log(Object.getOwnPropertyNames(obj)) // [ 'name' ]
console.log(JSON.stringify(obj)) // {"name":"olu"}

console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(olu), Symbol(olu) ]
console.log(Reflect.ownKeys(obj)) // [ 'name', Symbol(olu), Symbol(olu) ]
```
