---
id: clone-graph
title: 133. 克隆图
tags:
  - dfs
  - bfs
  - 哈希表
  - 图
---

## 题目描述

给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。

图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。

```java
class Node {
    public int val;
    public List<Node> neighbors;
}
```

测试用例格式：

简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（val = 1），第二个节点值为 2（val = 2），以此类推。该图在测试用例中使用邻接列表表示。

邻接列表 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。

给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。

## 解题方法

### 方法一：dfs

- 思路：
  - 拷贝所有节点
  - 拷贝所有边

- 步骤
  - 深度优先遍历所有节点
  - 拷贝所有节点并存储
  - 将拷贝的节点，按照原图的连接方法进行连接

```js
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return
    }
    const visited = new Map()
    const dfs = (n) => {
      const nCopy = new Node(n.val)
      visited.set(n, nCopy)
      n.neighbors.forEach(ne => {
        if (!visited.has(ne)) {
          dfs(ne)
        }
        nCopy.neighbors.push(visited.get(ne))
      })
    }
    dfs(node)
    return visited.get(node)
};
```

### 方法二：bfs

- 思路：
  - 拷贝所有节点
  - 拷贝所有边

- 步骤：
  - 广度优先遍历所有节点
  - 拷贝所有节点并存储
  - 将拷贝的节点，按照原图的连接方法进行连接

- 复杂度分析：
  - 时间复杂度：O(N), 访问了所有节点
  - 空间复杂度：O(N)，存储所有节点

```js
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return
    }
    const visited = new Map()
    const queue = [node]
    visited.set(node, new Node(node.val))

    while (queue.length) {
        const n = queue.shift()
        n.neighbors.forEach(ne => {
            if (!visited.has(ne)) {
                queue.push(ne)
                visited.set(ne, new Node(ne.val))
            }
            visited.get(n).neighbors.push(visited.get(ne))
        })
    }
    return visited.get(node)
};
```
