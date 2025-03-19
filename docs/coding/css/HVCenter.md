# 水平垂直居中

## 固定宽高元素水平垂直居中

+ 通过margin平移元素整体宽度的一半，使得元素水平垂直居中

```css
    .parent{
        position:realtive;
    }
    .child{
        width:300px;
        height:100px;
        padding:20px;
        position:absolute;
        top:50%;
        left:50%;
        margin:-70px 0 0 -170px;
    }
```

## 未知宽高元素水平垂直居中

### 利用2D变换

+ 利用2D变换，在水平和垂直两个方向都反向平移宽高的一半，从而使元素水平居中。

```css
    .parent{
        position:realtive;
    }
    .child{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
```

### 利用flex布局

+ flex布局的justify-content用于设置或检索弹性盒子元素在主轴方向上对齐方式，而align-items属性定义flex子项在flex容器的当前行的侧轴方向上的对齐方式。
  
```css
    .parent{
        display:flex;
        justify-content:center;
        align-items:center;
    }
```

### 利用grid布局

+ 不是很推荐的一种方法

```css
    .parent{
        height:140px;
        display:grid;
    }
    .child{
        margin:auto;
    }
```

### 利用table布局

+ 十分常用的一种方法，常规的登陆注册页面都要用到。需要保证较好的兼容性，还需要用到表格布局。
  
```css
    .outer{
        display:table;
        position:absolute;
        height:100%;
        width:100%;
    }
    .middle{
        display:table-cell;
        vertical-align:middle;
    }
    .inner{
        margin-left:auto;
        margin-right:auto;
        width:400px;
    }
```
