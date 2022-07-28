---
id: minimum-window-substrin
title: 76.最小覆盖子串
tags:
  - 滑动窗口
  - 双指针
---

## 题目描述

给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

- 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
- 如果 s 中存在这样的子串，我们保证它是唯一的答案。

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

示例 1：

```js
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：
```

```js
输入：s = "a", t = "a"
输出："a"
示例 3:
```

```js
输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
```

提示：

- 1 <= s.length, t.length <= 105
- s 和 t 由英文字母组成

## 解题方法

### 方法一：滑动窗口 - 双指针

- 思路：
  - 使用双指针来维护滑动窗口

- 步骤：
  - 创建字典用来存放`{key: t中的字符, value: 字符出现的次数}`
  - 创建变量 `needType` 为 字典的长度，即 `t` 去重后的数量
  - 右移右指针
    - 若字典中有右指针指向的字符，则该字符出现的次数减一
      - 若字符出现的次数为 `0` 时，说明 `t` 中该字符已经全部在滑动窗口中，`needType` 中不再需要该项，`needType` 减一
    - 当 `needType` 为 `0` 时，代表当前滑动窗口内已经包含了 `t` 中全部字符，此时右移左指针进行收敛
      - 当字典中包含左指针指向的字符，字典需要补充该字符，故该字符出现的字符加一
        - 当该字符出现次数为 1 时，说明当前滑动窗口的左边界收敛结束，需要退出左指针循环

  - 重复上述右左指针循环，获取满足条件的子串
  - 返回长度最小的满足条件子串

- 复杂度分析：
  - 时间复杂度：O(m + n), 字典`for循环` 时间复杂度为 `O(m)`,`m` 为 `t` 的长度，`n` 是 `s` 的长度
  - 空间复杂度：O(m)，字典的长度是 `t` 中不同字符的长度，最坏的场景就是无重复字符

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let l = 0
  let r = 0
  let res = ''
  const need = new Map()
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }
  let needType = need.size
  while(r < s.length) {
    const c = s[r]
    if (need.has(c)) {
      need.set(c, need.get(c) - 1)
      if (need.get(c) === 0) {
        needType -= 1
      }
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1)
      if (!res || res.length > newRes.length) {
        res = newRes
      }
      const c2 = s[l]
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1)
        if (need.get(c2) === 1) {
          needType += 1
        }
      }
      l += 1
    }
    r += 1
  }
  return res
}
```
