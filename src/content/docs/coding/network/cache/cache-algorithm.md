---
id: cache-algorithm
title: 缓存相关算法
tags:
  - cache
  - 缓存
  - LRU
---

正好 LeetCode 有一道编号 146 的题目~

## 问题描述

请你设计并实现一个满足  LRU **(最近最少使用)** 缓存 约束的数据结构。
实现 `LRUCache` 类：

LRUCache(int capacity) 以 正整数 作为容量 `capacity` 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。

void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 **逐出 最久未使用**的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

## 解题方法

### 1. map

- 思路：利用 map 有序的特性
  - get 取值时有值则删除，再添加到最后；
  - put 赋值时先删再添加到最后，如果超过容量，就删掉第一个（最久未用的），`map.keys().next.value`可以取到第一个元素

  ```js
  class LRUCache {
    constructor(capacity) {
      this.cacheMap = new Map()
      this.capacity = capacity
    }

    get(key) {
      if (this.cacheMap.has(key)) {
        const value = this.cacheMap.get(key)
        this.cacheMap.delete(key)
        this.cacheMap.set(key, value)
        return value
      }
      return -1
    }

    put(key, value) {
      if (this.cacheMap.has(key)) {
        this.cacheMap.delete(key)
      }
      this.cacheMap.set(key, value)
      if (this.cacheMap.size() > this.capacity) {
        const firstKey = this.cacheMap.keys().next.value
        this.cacheMap.delete(firstKey)
      }
    }
  }
  ```

### 2. 双向链表

- 思路：使用哈希表和双向链表存储键值对，双向链表在链表头新增节点和链表尾删除节点，哈希表O(1)查找键值对
  - get 如果存在值，将节点移动到链表头部
  - put 如果存在值，更新值且将节点移动到链表头部；不存在则检查是否超出容量，若超出则删除链表尾部节点，再创建新节点加入到链表和哈希表头部，节点数目自增

```js
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.hash = {}
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key) {
    const node = this.hash[key]
    if (node) {
      this.moveToHead(node)
      return node.value
    }
    return -1
  }

  put(key, value) {
    const node = this.hash[key]
    if (node) {
      node.value = value
      this.moveToHead(node)
    } else {
      if (this.count === this.capacity) {
        this.removeOldestItem()
      }
      const newNode = new ListNode(key, value)
      this.hash[key] = newNode
      this.addToHead(newNode)
      this.count += 1
    }
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }

  removeFromList(node) {
    const tempPrev = node.prev
    const tempNext = node.next
    tempPrev.next = tempNext
    tempNext.prev = tempPrev
  }

  addToHead(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  removeOldestItem() {
    const node = this.popTail()
    delete this.hash[node.key]
    this.count -= 1
  }

  popTail() {
    const tail = this.dummyTail.prev
    this.removeFromList(tail)
    return tail
  }
}
```

- 画图更利于理解：

get(3)
![get-3](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/leetcode/lru-cache/lru-list-get.svg)

put(3) && capacity = 2
![put-3](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/leetcode/lru-cache/lru-list-put3.svg)
