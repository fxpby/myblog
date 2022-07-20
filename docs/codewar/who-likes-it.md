# Who likes it?

## 副本描述

- You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

- Implement a function `likes :: [String] -> String`, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:  

```js
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
```

- For 4 or more names, the number in and 2 others simply increases.  

## 打怪路径

### 方法一

- if else大法,看着有点眼麻...😥

```js
function likes(names) {
  if (names.length === 0) {
    return 'no one likes this'
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
```

### 方法二

- 将对象的key设为输入数组的长度, 最后取value利用了Math.min()将最后一种情况设为key>=4时的默认值,非常巧妙! 🤩

```js
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}
```

### 方法三

- 和方法二类似,直接利用数组的索引

```js
function likes(names) {
  return [
    'no one likes this',
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  ][Math.min(4, names.length)]
}
```

### 方法四

- 解构输入数组,也很巧妙!😍

```js
function likes(names) {
  names.length === 0 && (names = ["no one"]);
  let [a, b, c, ...others] = names;
  switch (names.length) {
    case 1: return `${a} likes this`;
    case 2: return `${a} and ${b} like this`;
    case 3: return `${a}, ${b} and ${c} like this`;
    default: return `${a}, ${b} and ${others.length + 1} others like this`;
  }
}
```

### 方法五

- 利用字符串的replace方法来替换输入数组的项,也是新思路😆

> **replace()** 方法返回一个由**替换值**（replacement）替换部分或所有的**模式**（pattern）匹配项后的新字符串。**模式**可以是**一个字符串**或者**一个正则表达式**，**替换值**可以是**一个字符串**或者**一个每次匹配都要调用的回调函数**。**如果pattern是字符串，则仅替换第一个匹配项**。原字符串不会改变。 -- from MDN

```js
function likes (names) {
  let templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  let idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}
```

## Summary

这个怪可能看起来不怎么值得打, 自己在最开始的时候只能想到用if else或者switch case大法😅, 后面看到大佬们的写法真的是可读性强且非常优雅,开拓了自己的思路,希望以后再写类似的场景时,自己也可以多往这方面靠拢下,提高代码质量😋
