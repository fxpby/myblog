---
id: assign-cookies
title: 455. 分发饼干
tags:
  - 贪心
---

## 题目描述

假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

示例 1:

```js
输入: g = [1,2,3], s = [1,1]
输出: 1
解释: 
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。
```

示例 2:

```js
输入: g = [1,2], s = [1,2,3]
输出: 2
解释: 
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
```

提示：

- 1 <= g.length <= 3 * 104
- 0 <= s.length <= 3 * 104
- 1 <= g[i], s[j] <= 231 - 1

## 解题方法

### 方法一：贪心 - 先分大饼干🍪

- 思路：
  - 优先用大饼干满足大胃口的孩子
- 步骤
  - 先给饼干们和孩子们降序排序
  - 遍历判断当前饼干是否满足当前孩子胃口
    - 满足：`count ++`，`饼干index ++`，判断下一个饼干
    - 不满足：`孩子index ++`, 看看能否满足下一个孩子

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let gLen = g.length
  let sLen = s.length
  if (!gLen || !sLen) {
    return 0
  }

  g = g.sort((a, b) => b - a)
  s = s.sort((a, b) => b - a)
  let count = 0
  let i = 0
  let j = 0

  while (i < sLen && j < gLen) {
    if (s[i] >= g[j]) {
      count ++
      i ++
    }
    j ++
  }
  
  return count
};
```

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let gLen = g.length
  let sLen = s.length
  if (!gLen || !sLen) {
    return 0
  }

  g = g.sort((a, b) => b - a)
  s = s.sort((a, b) => b - a)
  let count = 0

  for (let i = 0, j = 0; i < gLen; i += 1) {
    if (s[j] >= g[i]) {
      count ++
      j ++
    }
  }
  
  return count
};
```

### 方法二：贪心 - 先分小饼干🍪

- 思路：
  - 优先用小饼干满足小胃口的孩子
- 步骤
  - 先给饼干们和孩子们升序排序
  - 遍历判断当前饼干是否满足当前孩子胃口
    - 满足：`count ++`，判断下一个饼干（这里的 count 正好可以作为孩子的索引）
    - 不满足, 看下一个饼干

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let gLen = g.length
  let sLen = s.length
  if (!gLen || !sLen) {
    return 0
  }

  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  
  let count = 0
  for (let i = 0; i < sLen; i += 1) {
    if (s[i] >= g[count] && count < gLen) {
      count ++
    }
  }
  
  return count
};
```
