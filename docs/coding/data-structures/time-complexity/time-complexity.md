---
sidebar_position: 1
---

# 时间复杂度

- 一个函数，用大 O 表示
- 定性描述该算法的运行时间

## O(1)

代码只执行一次

```js
let i = 0;
i += 1;
```

## O(n)

```js
let j = 0;
for (let j = 0; j < n; j += 1) {
  console.log(n);
}
```

- O(1) + O(n) = O(n)
  n 足够大时，1 可以忽略不计(忽略增长趋势较小的复杂度，取增长趋势较大的复杂度)

## O(n) \* O(n) = O(n^2)

```js
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    console.log(i, j);
  }
}
```

## O(logN)

```js
let i = 1;
while (i < n) {
  console.log(i);
  i *= 2;
}
```
