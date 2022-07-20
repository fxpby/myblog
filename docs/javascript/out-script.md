# 异步脚本

- 针对外部文件有效

## 1. 推迟执行脚本 - defer

- 异步下载脚本
- 推迟到页面解析完成后（DOMContentLoad事件之前）再顺序执行
- 在实际中，顺序执行和执行时间点并不能一定保证，页面最后只包含一个还有 defer 属性的 script

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script defer src="./example.js"></script>
</head>
<body>
</body>
</html>
```

## 2. 异步执行脚本 - async

- 浏览器异步下载脚本，脚本下载完成后立即执行
- 执行时会阻塞 HTML 渲染
- 不能保证脚本的执行顺序
- 不能有在初始化阶段就修改 DOM 的操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script async src="./example1.js"></script>
  <script async src="./example2.js"></script>
</head>
<body>
</body>
</html>
```

## 3. 动态加载脚本

调用 DOM API，向 DOM 中动态添加 script 标签加载指定脚本

```js
const script = document.createElement('script')
script.src = './example.js'
document.head.appendChild(script)
```

只有当执行到这段 JavaScript 代码时才会动态发送请求加载 example.js 文件。  
以这种方式创建的 script 元素是以**异步方式**加载的，相当于添加了 async 属性。  

可以配置预加载获取更好的性能👇🏻

```js
<link rel="preload" href="./example.js">
```
