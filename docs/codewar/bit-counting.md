# Bit Counting

## 副本描述

- Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

- Example: The binary representation of `1234` is `10011010010`, so the function should return `5` in this case

- tags: `ALGORITHMS` `BITS` `BINARY`

## 打怪路径

### 方法一

- 将十进制数字转二进制字符串,再遍历字符串,为`1`时,计数器+1

```js
var countBits = function(n) {
  const numToStringBinary = n.toString(2)
  let count = 0
  const len = numToStringBinary.length
  for (let i = 0; i < len; i += 1) {
      if (numToStringBinary.charAt(i) === '1') {
          count += 1
      }
  }
   return count
};
```

### 方法二

- 把字符串`0`分割成字符串数组, 再拼接, 获取长度

```js
var countBits = function(n) {
  const numToStringBinary = n.toString(2)
  return numToStringBinary.split("0").join("").length
};
// '10011011100001'.split('0')
// (8) ["1", "", "11", "111", "", "", "", "1"]
```

### 方法三

- 把字符串`1`分割成字符串数组, 再拼接, 获取`长度 - 1`

```js
var countBits = function(n) {
  const numToStringBinary = n.toString(2)
  return numToStringBinary.split("1").length - 1
};
// '10011011100001'.split('1')
// (8) ["", "00", "", "0", "", "", "0000", ""]
```

### 方法四

- 正则替换数字0,再获取长度

```js
var countBits = function(n) {
  const numToStringBinary = n.toString(2)
  return numToStringBinary.replace(/0/g, '').length
};
```
