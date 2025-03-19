# 垂直居中

## 单行内联元素垂直居中

+ 通过设置内联元素的高度height和行高line-height相等，从而使得元素垂直居中

```css
#box{
  height:100px;
  line-height:100px;
}
```

## 多行内联元素垂直居中

+ 利用表布局的vertical-align:middle实现子元素的垂直居中

```css
.center-table{
  display:table;
}
.v-cell{
  display:table-cell;
  vertical-align:middle;
}
```

## 利用flex布局

+ 通过其中的flex-direction:column定义主轴方向为纵向

```css
.center-flex{
  display:flex;
  flex-direction:column;
  justyify-content:center;
}
```

## 利用精灵元素

+ 利用精灵元素，即ghost element技术实现垂直居中，原理是在父容器里面放一个100%高度的伪元素，让文本和伪元素垂直对齐，从而做到垂直居中。
  
```css
.ghost-center{
  position:relative;
}
.ghost-center::before{
  content:"";
  display:inline-block;
  height:100%;
  width:1%;
  vertical-align:middle;
}
.ghost-center p{
  display:inline-block;
  vertical-align:middle;
  width:20rem;
}
```

```html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <title>利用精灵元素实现多行内联元素垂直居中</title>
  <style>
    .ghost-center {
      position: relative;
      border: 2px dashed #f69c55;
      padding: 10px 0;
    }
    .ghost-center::before {
      content: " ";
      display: inline-block;
      height: 100%;
      width: 1%;
      vertical-align: middle;
    }
    .ghost-center p {
      display: inline-block;
      vertical-align: middle;
      width: 12rem;
      padding:1rem;
      color:#fff;
      background:#000;
    }
  </style>
</head>
<body>
<div class="ghost-center">
  <p>“天气好。”</p>
</div>
</body>
</html>
```

## 块级元素垂直居中

### 固定高度的块级元素

+ 对于已知元素宽高，可以通过绝对定位元素距离顶部50%，并设置margin-top向上偏移元素高度的一半即可实现。

```css
.parent{
  position:relative;
}
.child{
  position:absolute;
  top:50%;
  height:100px;
  margin-top:-50px;
}
```

### 未知高度的块级元素

+ 当垂直居中的元素宽高未知时，可以借助css3中的transform: translateY;向Y轴反向偏移50%的方法实现垂直居中。
  
```css
.parent{
  position:relative;
}
.child{
  position:absolute;
  top:50%;
  transform: translateY(-50%);
}
```
