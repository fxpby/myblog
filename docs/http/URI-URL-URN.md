# URI、URL、URN、Data URI 和 Object URL/Blob URL

## URI

Uniform Resource Identifier 统一资源标志符

包含 `URL` 和 `URN`

### 通用格式

`[协议名]://[用户名]:[密码]@[主机名]:[端口]/[路径]?[查询参数]#[片段ID]`

![uri](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/http/uri-eg2.png)

> authority: 用户认证
> fragment: 片段标识符，hash 参数

## URL

Uniform Resource Locator 统一资源定位符

### 标准格式

`protocol://<user>:<password>@<host>:<port>/<url-path>`

> 没有port 默认 80 端口  
> url-path: /[路径]?[查询参数]#[片段ID]

### Specific Schemes

- ftp                     File Transfer protocol
- http                    Hypertext Transfer Protocol
- gopher                  The Gopher protocol
- mailto                  Electronic mail address
- news                    USENET news
- nntp                    USENET news using NNTP access
- telnet                  Reference to interactive sessions
- wais                    Wide Area Information Servers
- file                    Host-specific file names
- prospero                Prospero Directory Service

> Internet URL 通用语法 rfc1738 <https://datatracker.ietf.org/doc/html/rfc1738#section-3.1>

## URN

Uniform Resource Name 统一资源名称，是 `URI` 的历史名字，已经被 `URI` 取代

- 在资源移动之后还能够被找到
- 不包含任何协议

## Data URI

协议为 `data:`

### 语法格式

`data:[<media type>][;base64],<data>`

- `data:`: 协议
- `media type`: MIME, 默认为 text/plain;charset=US-ASCII
- `base64`: base64 编码，如果没有指出为 base64 编码，按照 URI 编码
- `data`: `Data URI` 承载内容
  - 数据为文本类型: 可以直接将文本嵌入 (根据文档类型，使用合适的实体字符或转义字符)
  - 数据为二进制类型: 可以将数据进行 base64 编码之后再进行嵌入  

### 优点

将数据嵌入文件内部，可以减少一次 HTTP 请求，比如 `webpack` 中， `url-loader` 会将引入的图片编码，生成 `dataURI`, 相当于把图片数据转换成字符串，再把字符串打包到文件中，最终引入文件即可访问图片（如果图片比较大，图片编码会消耗性能，`url-loader`提供 `limit` 参数来控制，大于 `limit` 的使用`file-loader` 进行操作）。

### 缺点

- 文件体积增大
  `Data URI` 使用 `Base64` 编码，每个 char 在 JavaScript 中占用两个字节, 最终将会比原文件大 1.37 倍+814 字节（头部）
- 阻塞渲染
  阻塞页面继续解析和渲染
- 图片无法使用 HTTP 缓存
  `Data URI` 无法使用独立的 HTTP 缓存，但是比如HTML文件可以缓存（同时缓存了 `Data URI`）
- 解析较慢，移动端明显
  `Data URI` 内容由浏览器解码回原始形式，额外消耗性能（CPU、电量），浏览器每次页面渲染时必须解码图像，二进制图像没有额外的解码步骤

### 应用

- 存储图片，减少 HTTP 请求
- 本地读取文件，图片预览
- 前端文件下载

## Object URL / Blob URL

允许 `Blob`、`File`、`MediaSource` 做为 `URL 源`，可以用于导航（例如 `img src`）或者本地下载，这些 `URL` 只能在浏览器内部生成，且只能在当前会话中使用

```html
<input type="file" name="file" id="file" />
```

```js
document.getElementById("file").addEventListener("change", (ev) => {
  const url = URL.createObjectURL(ev.target.files[0]);
  console.log(url) 
  // 'blob:http://localhost:5500/3708d657-3b56-434a-958f-8a353d595c07'
  const img = document.createElement("img");
  img.src = url;
  img.addEventListener("load", () => {
    document.body.appendChild(img);
  });
});
```

- `URL.createObjectURL()`
`URL.createObjectURL()` 静态方法会创建一个 `DOMString`，其中包含一个表示参数中给出的对象的`URL`。这个 `URL` 的生命周期和创建它的窗口中的 `document` 绑定。这个新的 `URL 对象`表示指定的 `File 对象`或 `Blob 对象`

- `URL.revokeObjectURL()`
`URL.revokeObjectURL()` 静态方法用来释放一个之前已经存在的、通过调用 `URL.createObjectURL()` 创建的 `URL 对象`。当你结束使用某个`URL 对象`之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了

### Blob URL 对比 Data URI 的优点

- 体积更小
  - `Blob URL` 使用二进制
  - `Data URI` 为 `Base64`、`URI 编码`
- 速度更快
  - `Blob` 只是字节序列，浏览器将其识别为字节流
  - `Data URI` 具有解码开销
- 异步加载
  - `Blob URL` 加载文件为同步
  - `FileReader` 加载文件为 `Data URI` 为异步

### 练手：将对象下载为一个 `xxx.json` 文件

```html
<button id="btn">点我下载 json 文件</button>
```

```js
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  const data = JSON.stringify({name: 'olu', age: 18})
  const blobURL = new Blob([data], {type: 'text/json'})
  const link = document.createElement('a')
  link.style.display = 'none'
  link.download = `xxx.json`
  /** 
   * 使用 Blob 创建一个指向类型化数组的URL
   * 会产生一个类似 blob:d3958f5c-0777-0845-9dcf-2cb28783acaf 这样的URL字符串
   * 可以像使用普通 URL 那样使用它，比如用在 img.src 上
  **/
  link.href = URL.createObjectURL(blobURL)
  document.body.appendChild(link)
  link.click()

  // 删除DOM、释放对象URL
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(blobURL);
  }, 200)
})
```
