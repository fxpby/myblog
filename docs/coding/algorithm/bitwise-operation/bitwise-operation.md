# 位运算相关知识点

## 逻辑位运算符

### & 位与

两个位都为 1 时，结果才为 1

### | 位或

两个位都为 0 时，结果才为 0

### ^ 异或

两个位相同为 0，相异为 1

### ~ 按位取反

0 => 1, 1 => 0

## 位移运算符

### `<<` 左移

所有二进位都左移若干位，高位丢弃，低位补 0
x `<<` 1, 相当于乘 2

### `>>` 右移

所有二进制都右移若干位，无符号数高位补 0，有符号数各编译器处理不同

x `>>` 1, 相当于除以 2，向下取整

## 常见应用

- 判断奇偶 x & 1
  - 0 => 偶数
  - 1 => 奇数
