# 权重

## 一、!important(不推荐使用)

这个优先级最高，但是会被权重高的important覆盖

## 二、行内样式

+ 权重 1000

## 三、ID选择器

+ 权重 100

## 四、类选择器

+ 权重 10

## 五、属性选择器

+ 权重 10

## 六、伪类选择器

+ 权重 10

## 七、元素选择器

+ 权重 1

## 八、通配符、子选择器、相邻选择器等

+ 如*、>、+，权重为0

> 总结：  
> !important>行内样式>ID选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器 >通配符 | 子选择器 | 相邻选择器
