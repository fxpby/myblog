# HCenter

## 内联元素

> text-align:center可以实现在块级元素内部的内联元素水平居中。对内联元素inline，内联块inline-block,内联表inline-table，inline-flex元素水平居中都有效

```css
.center-text{
    text-align:center;
}
```

## 块级元素

> 原理是把固定宽度的块级元素的margin-left和margin-right设置成auto，就可以使块级元素水平居中

```css
.center-block{
    margin:0 auto;
}
```

## 多块级元素水平居中

+ 利用内联块:如果一行中有两个或两个以上的块级元素，通过设置块级元素的显示类型为inline-block和父容器的text-align属性使得多块级元素水平居中
  
```css
    .container{
        text-align:center;
    }
    .inline-block{
        display:inline-block;
    }
```

+ 利用flex布局：justify-content用于设置弹性盒子元素在主轴方向上的对齐方式

```css
    .flex-center{
        display:flex;
        justify-content:center;
    }
```
