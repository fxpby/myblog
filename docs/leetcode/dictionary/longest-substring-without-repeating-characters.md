# 3. 无重复字符的最长子串

## 题目描述

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

Given a string s, find the length of the longest substring without repeating characters.

示例 1:

```js
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

```js
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:

```js
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

## 解题方法

### 方法一：滑动窗口 - 数组

- 思路：
  - 使用数组来维护滑动窗口，窗口内是无重复的元素

- 步骤：
  - 遍历字符串，判断字符是否在滑动窗口数组中
    - 在：删除滑动窗口数组中相同字符以及相同字符前的所有字符，再将当前字符`push`到滑动窗口数组中
    - 不在：直接将元素`push`进入滑动窗口数组中
    - 比较当前滑动窗口数组的长度和之前滑动窗口数组长度的最大值
  - 返回滑动窗口数组长度最大值

- 复杂度分析：
  - 时间复杂度：O(N^2), `for循环` 时间复杂度为 `O(N)`，`indexOf()`和 `splice()` 时间复杂度为 `O(N)`
  - 空间复杂度：O(N)，滑动窗口数组的长度

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const arr = []
  let max = 0
  for (let i = 0; i < s.length; i += 1) {
    const idx = arr.indexOf(s[i])
    if (idx !== -1) {
      arr.splice(0, idx + 1)
    }
    arr.push(s[i])
    max = Math.max(arr.length, max)
  }
  return max
};
```

