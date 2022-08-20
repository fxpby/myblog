# HTTP 三次握手

## 三次握手

![shake-hands](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/http/three-times-shake-hands.png)

刚开始的时候客户端处于 `Closed` 状态， 服务端处于 `Listen` 状态

### 第一次握手

客户端给服务端发送一个 `SYN 报文`, 首部的同步位位码 `SYN=1`, 随机产生初始序号 `seq number=x` 的数据包到服务器，服务端根据 `SYN=1` 知道客户端要求建立联机.
`SYN=1` 的报文段不能携带数据，需要消耗掉一个序号，会让下一次传输的 `packet seq` 增加 `1`，`ACK` 的传输不会让下一次的传输 `packet seq` 增加 `1`
客户端进程处于 SYN-SENT（同步已发送）状态

> SYN: 同步序列编号（Synchronize Sequence Numbers）, 是一个标志位，代表创建请求的数据包(建立连接)
> ACK: 表示响应
> FIN(Finish): 表示关闭连接
> RST(Reset): 表示连接重置
> PSH(Push): 推送位，有 DATA 数据传输，到达对端时，接收端不将该数据进行队列处理，将这个报文及缓存区之间缓存尚未交付的数据一并交付给进程
> URG(Urgent): 紧急位，紧急数据需要直接交付给接收端的进程，不进入缓存
> Ack: acknowledgement 确认号

### 第二次握手

服务端接收到客户端的 SYN 报文之后需要确认联机信息，服务端开启一个 TCP 的 socket 端口，向客户端发送 确认号 ack 为`客户端的 seq+1`, `SYN=1`, `随机产生的序号 seq=y`, `ACK=1` 的包
这个报文段也不能携带数据，消耗一个序号
服务端进程处于 SYN-RCVD（同步收到）状态

### 第三次握手

客户端接收到服务端返回的 SYN 报文之后，会检查 `确认号ack` 是否正确，即是否为`第一次发送的 seq+1`, 确认报文段 位码`ACK=1`， 正确的话客户端会再发送 `ACK=上一次服务端返回的 seq+1`, 此时客户端进入 `ESTABLISHED状态` 服务端收到后确认 `seq` 和 `ACK=1`，服务端也处于`ESTABLISHED状态`，正确的话双方连接建立成功

## 为什么要建立三次握手

- 防止服务端开启一些无用的连接，网络传输会受到影响，比如第二次握手数据包丢失，客户端就一直没有接收到服务器返回的数据，客户端可能有一些超时设置，超时后就关闭了连接，去创建新的连接请求，服务端此时还处于一个等待状态，这个端口就一直处于开启状态，导致服务器资源开销。