---
id: is-subsequence
title: 392. 判断子序列
tags:
  - 双指针
---

## 题目描述

给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

## 解题方法

## 方法一：双指针

```js
var isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false
  }

  if (s.length === 0) {
    return true
  }

  for (let i = 0, j = 0; j < t.length; j += 1) {
    if (s[i] === t[j]) {
      i += 1
      if (i === s.length) {
        return true
      }
    }
  }

  return false
};
```

```js
var isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false
  }

  if (s.length === 0) {
    return true
  }

  let i = 0
  let j = 0

  while(j < t.length) {
    if (s[i] === t[j]) {
      i += 1
      if (i === s.length) {
        return true
      }
    }
    j += 1
  }
  return false
};
```
