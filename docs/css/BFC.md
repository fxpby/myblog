# 块级格式化上下文 block formatting context

一个只有`块级盒子`参与的独立块级渲染区域，规定了内部的`块级盒子`如何布局，且与区域外部无关

## 一、定位方案

### 1.常规流

- 常规流中，盒子一个接一个排列
- 块级格式化上下文中，盒子竖向排列
- 行内格式化上下文中，盒子横向排列
- 在 `position` 为 `static` 或者 `relative` 时，且没有浮动时，触发常规流

### 2.浮动

- 位于当前行的开头或末尾
- 如果不设置 `clear` 属性，常规流会环绕在浮动盒周边

### 3.绝对定位

- 盒从常规流中被移除，不会影响常规流的布局
- 定位相对于包含块
- 如果元素 `position` 为 `absolute` 或 `fixed` ，则为绝对定位元素

## 二、BFC的触发条件

- `<html>`根元素或包含根元素的元素
- `float` 不为 `none`
- `position` 不为 `relative` 或 `static`
- `display` 为 `flow-root` 或 `list-item`
- `flex items`, 即 `display` 为 `flex` 或 `inline-flex` 的元素的直接子元素（该`子元素 display` 不为 `flex`, `grid` 或 `table`）
- `grid items`, 即 `display` 为 `grid` 或 `inline-grid` 的元素的直接子元素（该`子元素 display` 不为 `flex`, `grid` 或 `table`）
- 行内块（`display` 为 `inline-block`）
- 表格单元格（`display` 为 `table-cell` 或 `table-caption`）
- `overflow` 不为 `visible` 或 `clip` （除根元素）
- `contain` 为 `layout`, `content`, `paint` 或 `strict` 的任意一个
- `column-span` 为 `all`

可触发 BFC 的 display 汇总一下：

- flow-root
- list-item
- flex
- inline-flex
- grid
- inline-grid
- inline-block
- table-cell
- table-caption

> `display: flow-root`, `contain: layout` 等无副作用，可在不影响已有布局的基础上触发 BFC

## 三、BFC 的作用

- 修复浮动元素造成的高度塌陷问题
- 避免非期望的外边距折叠
- 实现健壮灵活的自适应布局

## 四、注意事项

- 浮动盒区域不叠加到BFC上
- 处于同一个BFC中的元素相互影响，可能会发生margin collapse
