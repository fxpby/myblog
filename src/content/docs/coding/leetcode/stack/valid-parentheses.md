---
title: "20.有效的括号"
---

# 20.有效的括号

## 题目描述

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

## 解题方法

### 方法一: 栈

- 思路：
  - 遇到左括号时，后续遍历需要一个相同类型的右括号才可以使其闭合。

  - **靠后遇到的左括号需要优先闭合**，所以把左括号推入栈顶，遇到右括号需要个相同类型的左括号闭合，
继而去判断左括号类型，如何类型不匹配或者栈里没有左括号，那就直接判定不合法。

  - 遍历结束后如果栈里没有元素（左括号），说明之前推进去的左括号都闭合了👏，如果有元素，那就判定不合法

- 步骤：
  - 创建一个栈
  - 扫描字符串
    - 遇到左括号 入栈
    - 遇到和栈顶括号匹配的右括号 出栈
    - 遇到和栈顶括号类型不匹配的 判定不合法
  - 最后栈空了就合法，否则不合法

- 复杂度分析：
  - 时间复杂度：O(N), s.length
  - 空间复杂度：O(N), 栈中字符数量为n, 即s为`(([{(((`(n个单边符号)

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

  for(let ch of s) {
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

### 方法二：replace大法

- 思路：有类型一样的括号咱就替了他🎯，替到什么都不剩就是合法的👏

```js
var isValid = function(s) {
  let len = s.length
  while (len && len % 2 === 0) {
    s = s.replace('()', '').replace('{}', '').replace('[]', '')
    if (s.length === len) {
      return false
    }
    len = s.length
  } 
  return len === 0
};
```
