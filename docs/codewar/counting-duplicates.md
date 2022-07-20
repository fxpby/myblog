# Counting Duplicates

## 副本描述

- Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

```js
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

## 打怪路径

### 方法一

看到这个题，第一个想法就是正则匹配忽略大小写

```js
function duplicateCount(text){
  if (text.length === 0) {
    return 0
  }
  let count = 0
  for(let i = 0; i < text.length; i += 1) {
    let char = text.charAt(i)
    let reg = new RegExp(`${char}`, 'gi')
    if (text.match(reg) && text.match(reg).length > 1) {
      count += 1
      text = text.replace(reg, '')
      i -= 1
    }
  }
  return count
}
```

### 方法二

既然忽略大小写，那么就可以全部`toLowerCase()`，然后看字符第一次出现的位置和最后一次是否相同

```js
function duplicateCount(text){
  text = text.toLowerCase()
  let count = 0
  for(let i = 0; i < text.length; i += 1) {
    let char = text.charAt(i)
    const reg = new RegExp(`${char}`, 'g')
    if (text.indexOf(char) !== text.lastIndexOf(char)) {
      count += 1
      text = text.replace(reg, '')
      i -= 1
    }
  }
  return count
}
```

### 方法三

ES6用起来呀~先转小写，再用去重的和之前的比较

```js
function duplicateCount(text){
  text = text.toLowerCase()
  return [...new Set(text.split(''))].filter(x => text.indexOf(x) !== text.lastIndexOf(x)).length
}
```

### 方法四

利用对象或者map，进行一个映射

```js
function duplicateCount(text){
  let map = new Map()
  text = text.toLowerCase()
  text.split('').forEach((x, i) => {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1)
    } else {
      map.set(x, 1)
    }
  })
  
  let count = 0
  for (let value of map.values()) {
    if (value > 1) {
      count += 1
    }
  }
  return count
}
```

### 方法五

先说明这个是一位大佬写的，solutions看了看大多数其实思想写法大同小异，但是看到这个解法就🐋了，emmm好优雅，阅读成本是有的😰，但不得不说这函数式编程好好看啊🤩

```js
const values = obj => Object.keys(obj).map(k => obj[k])

const sum = (acc, v) => acc + v

const compose = (f, ...fs) => (...args) =>
  fs.length
    ? f(compose(...fs)(...args))
    : f(...args)
    
const toUpperCase = t => t.toUpperCase()

const split = splitter => str => str.split(splitter)

const reduce = (reducer, seed) => xs => xs.reduce(reducer, seed)

const accumulateCounts = (acc, char) => 
  Object.assign({}, acc, {
    [char]: acc[char] !== undefined ? 1 : 0
  })

const duplicateCount = compose(
  reduce(sum, 0),
  values,
  reduce(accumulateCounts, {}),
  split(''),
  toUpperCase
)
```

## 打怪心得

这个怪的收获有两点：

- 用正则表达式的时候，表达式不应该是字符串，如果想用模板字符串的话，应使用new RegExp()的方式。还有一个方式就是对字符串进行eval()，不过这个不推荐。

- 方法五打开了我对函数式编程的大门，要加强这方面的学习和刻意使用了，加油😋
