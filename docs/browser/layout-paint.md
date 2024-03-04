# 浏览器的重排和重绘

浏览器渲染过程在解析 `HTML` 后，会依次进入 `Layout` 和 `Paint` 阶段。**样式或节点的更改，以及对布局信息的访问**，都有可能导致重排和重绘。
重排和重绘的过程在主线程中进行，不合理的重排重绘会导致**渲染卡顿，用户交互滞后**等性能问题

## 什么是重排和重绘

### 基础概念

- `Parse HTML`：相关引擎分别解析文档和样式表及脚本，生成 `DOM` 和 `CSSOM`，最终合成 `Render 树`
- `Layout`：浏览器通过 `Render 树`中的信息，以递归的形式计算出每个节点的尺寸大小和在页面中的具体位置
- `Paint`：浏览器将 `Render 树`中的节点转换成在屏幕上绘制实际像素的指令，此过程发生在多个图层上
- `Composite`：浏览器将所有层按照一定顺序合并为一个图层并绘制在屏幕上

`DOM` 或 `CSSOM` 被修改，会导致浏览器重复执行上述步骤。重排和重绘，本质上是触发 `Layout` 和 `Paint` 的过程，并且**重排必定导致重绘**

### 引起重排/重绘的常见操作

#### 重排

- 布局结构或者节点内容变化时，会导致**重排**，比如修改 `height` `float` `position` 等样式属性或添加删除可见 DOM 元素
  - 盒子尺寸和类型（如文本或图片大小改变导致计算宽度or高度改变）
  - 定位方案（正常流、浮动和绝对定位）
  - 文档树中元素之间的关系
  - 外部信息（如视口大小）
- 获取布局信息时，会导致**重排**，比如使用 `offsetTop` `getComputedStyle`
- 页面初始化渲染导致**重排**
- 浏览器窗口尺寸改变-`resize` 事件会导致**重排**

#### 重绘

- 外观有变化时，会导致**重绘**，比如修改 `color` `opacity` 等样式属性

## 如何减少重排重绘

### 浏览器优化策略

浏览器会维护一个队列，把所有会触发重排重绘的操作放入这个队列，队列中操作达到一定的数量或者时间间隔，浏览器就会清理冲刷队列进行一次批处理，进而让多次的重排重绘合成成为一次重排重绘。

but 我们写一些 js 如获取属性的场景就会强制浏览器提前清理冲刷队列（强制重排）。这些属性包括 offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、 clientTop、clientLeft、clientWidth、clientHeight、getComputedStyle()  

### 开发者优化方式

- 将多次改变样式属性的操作合并成一次操作
- 对 `DOM` 进行批量写入和读取（通过 `虚拟DOM` 或者 `DocumentFragment` 实现）
  - 如需要异步获取表格数据渲染页面，可以先获取数据后在内容中构建整个 HTML 片段，再一次性添加到 DOM 中，而不是循环添加每一行
  
  ```js
  const changeDiv = document.getElementById('changeDiv')
  changeDiv.style.color = '#fff'
  changeDiv.style.background = '#eee'
  changeDiv.style.height = '100px'
  ```

  可以合并成

  ```css
  #changeClassName {
      background: #eee;
      color: #fff;
      height: 100px;
  }
  ```

  ```js
  document.getElementById('changeDiv').className = changeClassName;
  ```

- 避免对样式进行频繁操作，了解常用样式属性触发 Layout/Paint/Composite 的机制，合理使用样式
  - 如将需要多次重排的元素，position 设置为 absolute 或 fixed，让它脱离文档流，这样变化后就不会影响到其他元素（具有动画效果的元素绝对定位较好）
  - 如由于 display 为 none 的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排，所以若要对一个元素进行复杂的操作时，可以先隐藏，完成操作处理后再显示，这样可以控制只在隐藏和显示时触发 2 次重排
- 合理利用特殊样式属性（如 `transform: translateZ(0)` 或者 `will-change`）, 将渲染层提升为合成层，开启 `GPU 加速`，提高页面性能
- 使用变量对布局信息（对于经常要取值访问的属性如 `clientTop`缓存到变量，避免频繁读取布局信息触发重排和重绘）
  
  ```js
  // bad
  const width = elem.getBoundingClientRect().width
  const height = elem.getBoundingClientRect().height
  const top = elem.getBoundingClientRect().top
  const left = elem.getBoundingClientRect().left

  // good
  const elemClientRect = elem.getBoundingClientRect()
  const width = elemClientRect.width
  const height = elemClientRect.height
  const top = elemClientRect.top
  const left = elemClientRect.left
  ```

- 借助 `DevTools Performance` 面板查看重排重绘任务占用主线程的情况和调用代码
