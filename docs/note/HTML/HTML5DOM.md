# HTML5 DOM

## getElementsByClassName

## 遍历相关，只涉及元素节点的操作

属性名|介绍
--|--
children|返回一个包含ParentNode所有后代Element对象的动态HTMLCollection对象，忽略所有非元素子节点
childElementCount|返回一个当前ParentNode所含有的后代数量
previousElementSibling|返回当前元素在其父元素的子元素节点中的前一个元素节点,如果该元素已经是第一个元素节点,则返回null（即获取节点紧邻的上一个同级元素节点）
nextElementSibling|返回当前元素在其父元素的子元素节点中的后一个元素节点,如果该元素已经是最后一个元素节点,则返回null
firstElementChild|返回父节点的第一个Element后代，没有时返回null
lastElementChild|返回父节点的最后一个Element后代，没有时返回null

相关接口|介绍|属性|方法
--|--|--|--
HTMLCollection|表示一个包含了元素（元素顺序为文档流中的顺序）的通用集合|HTMLCollection.length 返回集合当中子元素的数目|HTMLCollection.item() 由位置获取元素  HTMLCollection.nameItem() 根据 Id 返回指定节点，或者作为备用，根据字符串所表示的 name 属性来匹配。根据 name 匹配只能作为最后的依赖，并且只有当被引用的元素支持 name 属性时才能被匹配。如果不存在符合给定 name 的节点，则返回 null  

## ele.scrollIntoView()
  
+ ele元素顶端会移动到可视区域的顶端；若传入参数alignToTop: false,则ele移到屏幕底部
  
> HTML实现滚动到顶部的四种方式
> 1.document.body.scrollTop = 0
> 2.ele.scrollIntoView()
> 3.`<a href = '#top'>`返回顶部`</a>`
> 4.window.scrollBy(0, offset)
