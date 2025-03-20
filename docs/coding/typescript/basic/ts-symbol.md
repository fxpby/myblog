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

## 迭代器 Symbol.iterator

```ts
const arr:Array<number> = [4, 5, 6]
const it:Iterator<number> = arr[Symbol.iterator]()
console.log(it.next()) // { value: 4, done: false }
console.log(it.next()) // { value: 5, done: false }
console.log(it.next()) // { value: 6, done: false }
console.log(it.next()) // { value: undefined, done: true }

type mapK = string | number
type mapV = string | number

const set: Set<number> = new Set([1, 2, 3])
const map: Map<mapK, mapV> = new Map()
map.set('1', 'olu')
map.set('2', 'study')
console.log(set) // Set(3) { 1, 2, 3 }
console.log(map) // Map(2) { '1' => 'olu', '2' => 'study' }

function gen(erg: any) {
  let it:Iterator<any> = erg[Symbol.iterator]()
  let next: any = { done: false }
  while(!next.done) {
    next = it.next()
    if (!next.done) {
      console.log(next)
    }
  }
}

gen(map) 
// { value: [ '1', 'olu' ], done: false } 
// { value: [ '2', 'study' ], done: false }

gen(set) 
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
```

## 生成器 for of
