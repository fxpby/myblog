# 933. 最近的请求次数

## 题目描述

写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

 

Example 1:

```js
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
```

提示：

1 <= t <= 109
保证每次对 ping 调用所使用的 t 值都 严格递增
至多调用 ping 方法 104 次

Constraints:

1 <= t <= 109
Each test case will call ping with strictly increasing values of t.
At most 104 calls will be made to ping.

## 解题方法

### 方法一：队列

- 思路：
越早发出的请求，越早在距离最近3000毫秒内的请求中拜拜，符合先进先出的原则，使用队列

- 步骤：
  - 创建一个队列，用于存放请求时刻
  - 发起新请求时，新请求 t 进入队列尾部
  - 如果队列头部请求距离新请求超过3000毫秒，则队头出队，(去除所有 3000 毫秒外的时刻)
  - 返回队列中存储的请求数(队列长度)

- 复杂度分析：
  - 时间复杂度：O(N), N为出队的请求数
  - 空间复杂度：O(N), N为3000毫秒内队列中存储的请求数

```js
class RecentCounter {
  constructor () {
    this.queue = []
  }

  ping (t) {
    this.queue.push(t)
    const time = t - 3000
    while (this.queue[0] < time) {
      this.queue.shift()
    }
    return this.queue.length
  }
}
```
