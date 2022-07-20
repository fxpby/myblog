# 空间复杂度

- 一个函数，用大O表示
- 算法在运行过程中临时占用存储空间大小的量度

## O(1)

只声明里单个变量，单个变量所占用的内存为1

```js
let i = 0;
i += 1
```

## O(n)

🌰中给数组添加了 n 个值，占用了 n 个内存单元

```js
const list = [];
for (let i = 0; i < n; i += 1) {
  list.push(i)
}
```

## O(n^2)

🌰是个矩阵(二维数组)

```js
const matrix = []
for (let i = 0; i < n; i += 1) {
  matrix.push([])
  for (let j = 0; j < n; j += 1) {
    matrix[i].push(j)
  }
}
```
