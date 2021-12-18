# 栈

## 特点

- 先进后出, 后进先出

## 使用场景

### 十进制转二进制

```js
function decToBinary(dec) {
  const stack = []
  while (dec > 0) {
    stack.push(dec % 2)
    dec = parseInt(dec / 2, 10)
  }
  return Number(stack.reverse().join(''))
}
```

### 判断字符串括号是否有效

```js
var isValid = function(s) {
  if (s.length % 2) {
    return false
  }
  
  const stack = []
  const pairObj = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for(let i = 0; i < s.length; i += 1) {
    const ch = s.charAt(i)
    if ([')', '}', ']'].includes(ch)) {
      if (!stack.length || stack[stack.length - 1] !== pairObj[ch]) {
        return false
      }
      stack.pop()
    } else {
      stack.push(ch)
    }
  }

  return !stack.length
};
```

### 函数调用堆栈

js解释器用栈来控制函数调用

![js-callStack](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/datastructures-algorithm/jsCallStack.gif)

