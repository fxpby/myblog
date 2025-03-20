---
id: pacific-atlantic-water-flow
title: 417. 太平洋大西洋水流问题
tags:
  - dfs
  - bfs
  - 矩阵
  - 数组
  - 图
---

## 题目描述

有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋”  处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵  heights ， heights[r][c]  表示坐标 (r, c) 上单元格 高于海平面的高度 。

岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

返回网格坐标 result  的 2D 列表 ，其中  result[i] = [ri, ci]  表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。

示例 1：

```js
太平洋 ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * 大西洋
```

```js
输入: heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
输出: [
  [0, 4],
  [1, 3],
  [1, 4],
  [2, 2],
  [3, 0],
  [3, 1],
  [4, 0],
];
```

示例 2：

```js
输入: heights = [
  [2, 1],
  [1, 2],
];
输出: [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];
```

提示：

m == heights.length
n == heights[r].length
1 `<=` m, n `<=` 200
0 `<=` heights[r][c] `<=` 105

## 解题方法

### 方法一：dfs

- 思路：

  - 把矩阵想象成图
  - 从海岸线逆流而上遍历图，所到之处就是可以流到某个大洋的坐标

- 步骤
  - 新建两个矩阵，分别记录能流到两个大洋的坐标
  - 从海岸线多管齐下，同时深度优先遍历图，过程中填充矩阵
  - 遍历两个矩阵，找出既能流到大西洋也能流到太平洋的坐标

```js
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) {
    return [];
  }

  // 行数量，即矩阵的长度
  const m = heights.length;
  // 列数量，即矩阵每一项的长度
  const n = heights[0].length;

  // 太平洋矩阵
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  // 大西洋矩阵
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

  // 行坐标，列坐标，矩阵
  const dfs = (r, c, flow) => {
    // 流经标记
    flow[r][c] = true;
    // 上下左右查找相邻节点
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].forEach(([nr, nc]) => {
      if (
        // 在矩阵中, 边界处理
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        // 没有流过，防止死循环
        !flow[nr][nc] &&
        // 逆流而上
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  // 沿着海岸线逆流而上，遍历第一列和最后一列
  for (let r = 0; r < m; r += 1) {
    dfs(r, 0, flow1);
    dfs(r, n - 1, flow2);
  }

  // 沿着海岸线逆流而上，遍历第一行和最后一行
  for (let c = 0; c < n; c += 1) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }

  // 找出既能流到大西洋也能流到太平洋的坐标
  const res = [];
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  return res;
};
```

### 方法二：bfs

```js
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) {
    return [];
  }

  // 行数量，即矩阵的长度
  const m = heights.length;
  // 列数量，即矩阵每一项的长度
  const n = heights[0].length;

  // 太平洋矩阵
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  // 大西洋矩阵
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

  // 行坐标，列坐标，矩阵
  const bfs = (r, c, flow) => {
    // 流经标记
    flow[r][c] = true;
    const queue = [[r, c]];
    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    while (queue.length) {
      const cell = queue.shift();
      for (let dir of dirs) {
        const nr = dir[0] + cell[0];
        const nc = dir[1] + cell[1];
        if (
          // 边界处理
          nr >= 0 &&
          nr < m &&
          nc >= 0 &&
          nc < n &&
          // 防止死循环
          !flow[nr][nc] &&
          // 逆流而上
          heights[nr][nc] >= heights[cell[0]][cell[1]]
        ) {
          flow[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }
  };

  // 沿着海岸线逆流而上，遍历第一列和最后一列
  for (let r = 0; r < m; r += 1) {
    bfs(r, 0, flow1);
    bfs(r, n - 1, flow2);
  }

  // 沿着海岸线逆流而上，遍历第一行和最后一行
  for (let c = 0; c < n; c += 1) {
    bfs(0, c, flow1);
    bfs(m - 1, c, flow2);
  }

  // 找出既能流到大西洋也能流到太平洋的坐标
  const res = [];
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  return res;
};
```
