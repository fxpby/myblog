# 盒模型 box model

描述一个由元素生成的矩形盒子，**视觉格式化模型**决定这些盒子的大小、位置以及属性（颜色、背景、边框尺寸等）

盒子的构成图如下👇

![box-model](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/css/box-model.png)

## 1.前置知识点

- box (盒子)
- principal box (主要盒子)
- block-level box (块级盒子)
- block container box (块容器盒子)
- block box (块盒子)
- block (块)
- 块级元素：元素的 display 为 block、list-item 或 table。一个块级元素会被格式化成一个块，默认按照垂直方向依次排列

### 块级元素、块级盒子、块容器盒子、块盒子分清楚了吗

- 每个块级盒子都会参与块格式化上下文（BFC）的创建，每个块级元素都会至少生成一个块级盒子，也称作主块级盒子(principal block-level box)
- 有一些元素，比如列表项会生成额外的盒子来放置项目符号，多数元素只生成一个主块级盒子
- 主块级盒子包含由后代元素生成的盒子及内容，并参与定位方案
- 一个块级盒子可能是一个块容器盒子(block container box), 块容器盒子要么只包含其他块级盒子，要么只包含行内盒子并同事创建一个行内格式化上下文(IFC)
- 同时是块容器盒子的块级盒子称为块盒子(block box)
- 块级盒子描述元素与其父元素和兄弟元素之间的行为
- 块容器盒子描述元素与其后代之间的行为

## 2.视觉格式化模型(visual formatting model)
