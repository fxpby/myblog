# 格式化上下文（BFC）

## 一、定位方案

### 1.常规流

+ 常规流中，盒子一个接一个排列
+ 块级格式化上下文中，盒子竖向排列
+ 行内格式化上下文中，盒子横向排列
+ 在position为static或者relative时，且没有浮动时，触发常规流

### 2.浮动

+ 位于当前行的开头或末尾
+ 如果不设置clear属性，常规流会环绕在浮动盒周边

### 3.绝对定位

+ 盒从常规流中被移除，不会影响常规流的布局
+ 定位相对于包含块
+ 如果元素position为absolute或fixed，则为绝对定位元素

## 二、BFC的创建方法

+ 根元素或包含根元素的元素
+ 浮动
+ 绝对定位元素（position为absolute或fixed）
+ 弹性盒（display为flex或inline-flex）
+ 行内块（display为inline-block）
+ 表格单元格（display为table-cell）
+ overflow不为visible的元素

## 三、注意事项

+ 浮动盒区域不叠加到BFC上
+ 处于同一个BFC中的元素相互影响，可能会发生margin collapse