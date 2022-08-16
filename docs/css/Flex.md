# Flex布局
<!-- ### 概念、优势、模型 -->

## 概念

+ flexible box：弹性盒状布局
+ 容器控制内部元素的布局定位
+ CSS3引入的新布局模型
+ 伸缩元素，自由填充，自适应
  
## 优势

+ 可在不同方向排列元素
+ 控制元素排序的方向
+ 控制元素的对齐方式
+ 控制元素之间等距
+ 控制单个元素放大与缩放比例、占比、对齐方式
  
## 常用术语

+ flex containter : flex容器
+ flex item : flex项目（元素）
+ flex direction : 布局方向(主轴方向)

## 模型

![flexmodel1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/flexmodel1.png)

## 容器的属性

### flex-direction : 设置元素的排列方向（设置主轴）

+ row（从左向右)  
+ row-reverse（从右向左）
+ column（从上到下）
+ column-reverse（从下到上）

### flex-wrap : 使容器内的元素换行

+ nowrap（不换行，会缩放）
+ wrap（若超过则会到第二行进行排列,不会缩放）
+ wrap-reverse（逆向换行，同样不会缩放）

### flex-flow : flex-direction和flex-wrap属性的简写，且默认值为row nowrap
  
+ flex-flow:<'flex-direction'>||<'flex-wrap'>

### justify-content : 设置元素在主轴上的对齐方式

+ flex-start(左对齐)
+ flex-end(右对齐)
+ center（居中对齐）
+ space-between(两端对齐，空白均匀填充到flex成员之间)
+ space-around(元素两边平均等分剩余空白部分，空白间隙拼接)
+ space-evenly(项目均匀分布，空白间隙相等)

 align-items : 设置元素在交叉轴上的对齐方式

+ flex-start(项目按照交叉轴起点对齐)
+ flex-end(项目按照交叉轴终点线对齐)
+ center(交叉轴方向项目中间对齐)
+ baseline(交叉轴方向按第一行文字基线对齐)
+ stretch(交叉轴方向，拉伸显示，拉伸显示)

### align-content : 定义了在交叉轴方向的对齐方式以及额外空间分配，类似于主轴上的justify-content作用

+ stretch(拉伸显示)
+ flex-start(从启点线开始顺序排列)
+ flex-end(相对终点线顺序排列)
+ center(居中排列)
+ space-between(项目均匀分布，第一项在启点线，最后一项在终点线)
+ space-around(项目均匀分布，每一个项目两侧有相同的留白空间，相邻项目之间的距离是两个项目之间的留白和)

### order : 默认情况下，flex项目是按照在代码中出现的先后顺序排列的，但是order属性可以控制项目在容器中的先后顺序

+ order:integer;  
+ (默认为0,值按从小到大顺序排列，可以为负值)

### flex-grow : 定义项目的放大比例，其值是一个单位的正整数，表示放大的比例。默认为0，如果存在额外空间，不放大，负值无效。如果所有项目的flex-grow属性都是1，则他们等分剩余的空间。如果一个项目的flex-grow属性为2，其他项目都是1，那么前者所拥有的剩余空间比其他的多一倍

+ flex-grow:number;(默认为0)

### flex-shrink : 定义了项目的缩小比例，默认为1，如果空间不足，该项目将缩小。0表示不缩小，负值无效

+ flex-shrink:number;(默认为1)

### flex-basis : 定义项目在分配额外空间之前的默认尺寸，属性值可以是长度或者关键字auto，默认值为auto，即项目本来大小

+ flex-basis:length|auto;(默认值为auto)

### flex : 属性flex-grow,flex-shrink和flex-basis的简写，默认值为0 1 auto,后两个是可选属性

```css
.item{
    flex : none | [<'flex-grow'><'flex-shrink'>||<'flex-basis'>]
}
/*一般推荐使用这种简写方式，而不是分别定义每一种属性*/
```

### align-self : 定义项目的对齐方式，可以覆盖align-items属性，默认值为auto，表示继承父元素的align-items属性，如果没有父元素，就与stretch相同

+ auto
+ flex-start
+ flex-end
+ center
+ baseline
+ stretch

## flex-direction的栗子

```vue
<template>
    <!-- 定义flex轴线 -->
    <view class="container">
        <view class="green txt">
            A
        </view>
        <view class="red txt">
            B
        </view>
        <view class="blue txt">
            C
        </view>
    </view>
</template>
```

```css
<style>
    .container{
        /* 定义flex容器 */
        display: flex;
        /* 设置容器内部元素的排列方向 */
        flex-direction: row;
        /* flex-direction: row-reverse; */
        /* flex-direction: column; */
        /* flex-direction: column-reverse; */
    }
    .txt{
        font-size: 20px;
        width: 150upx;
        height: 150upx;
    }
    .green{
        background-color: #008000;
    }
    .red{
        background-color: #ff0000;
    }
    .blue{
        background-color: #007AFF;
    }
</style>
```

flex-direction: row效果图：

![flex-direction:row](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/flex_direction_row.png)

更改样式：

```css
<style>
    .container{
        /* 定义flex容器 */
        display: flex;
        /* 设置容器内部元素的排列方向 */
        /* flex-direction: row; */
        flex-direction: row-reverse;
		/* flex-direction: column; */
		/* flex-direction: column-reverse; */
	}
	...
</style>
```

flex-direction: row-reverse效果图<br/>
![flex-direction:row-reverse](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/row_reverse.png)
<br/>

更改样式：

```css
<style>
	.container{
		/* 定义flex容器 */
		display: flex;
		/* 设置容器内部元素的排列方向 */
		/* flex-direction: row; */
		/*flex-direction: row-reverse;*/
		flex-direction: column; 
		/* flex-direction: column-reverse; */
	}
	...
</style>
```

flex-direction: column效果图<br/>
![flex-direction: column](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/column.png)
<br/>
更改样式：

```css
<style>
    .container{
        /* 定义flex容器 */
         display: flex;
        /* 设置容器内部元素的排列方向 */
        /* flex-direction: row; */
        /*flex-direction: row-reverse;*/
        /* flex-direction: column; */
        flex-direction: column-reverse;
    }
    ...
</style>
```

flex-direction: column-reverse效果图<br/>
![flex-direction:column-reverse](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/column-reverse.png)






