# Extract the domain name from a URL

## 副本描述

- Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```js
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
domainName("www.xakep.ru") == "xakep"
```

## 怪物图鉴

打怪前要了解一下怪物背景呀，盲打可打不过📚

### 域名层次及语法

域名是由多个有点分隔的部分连接在一起的，比如`www.baidu.com`, 我们需要从右向左进行阅读，最右边的`.com`是**顶级域名**（英语：Top-level domains，缩写：TLD），顶级域名下面一层是**二级域名**（英语：Second-level domain, SLD），在这里`baidu`就是二级域名，三级域名、四级域名依此类推。

### 省略www

看题目描述中有的case有`www`, 有的没有，这是什么原因呢？

确实有的时候我们会发现，访问一些网站的时候，并不需要输入`www`，有的要输入。
一般我们在购买域名之后会给域名做解析，拿阿里云的域名解析举栗了：  
![域名解析](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/exercise/extractDomain/%E8%A7%A3%E6%9E%90.png)
我们看到这里有一个**主机记录**，鼠标移上去看一下：  
![主机记录](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/exercise/extractDomain/%E4%B8%BB%E6%9C%BA%E8%AE%B0%E5%BD%95.png)
看完后我们知道了这个解析是可以配置的，比如我们设置`www`，那么访问`www.xx.xx`即可，如果设置了`@`，那么直接访问`xx.xx`即可。

一个域名我们可以设置很多个解析，每个解析对应不同的ip地址，即我们有一个域名`olumel.top`, 可以设置`www.olumel.top`解析到ip1，`cute.olumel.top`解析到ip2, `cool.olumel.top`到ip3...

## 打怪路径

首先这个题目呢，是不严谨的，顶级域的话呢，会有多节点的特殊情况，比如`co.uk`这样的, 正确的情况我们应该把所有的顶级域名列出来，然后再去取其前面的二级域名，但是这显然不太现实，所有的顶级域名会是很庞大的一个清单。
不列出顶级域名的话呢，单纯从左边剥离`www`也是不正确的，上面图鉴我们分析过域名解析可以自己设置，这样的话呢，这个题解起来就无从下手了。所以就不考虑特殊的域名前缀和顶级域名了，这里仅考虑`www`和省略`www`的情况.
打这个怪的主要目的其实还是学习域名和正则相关的知识点，那就开始吧~✨

### 方法一

前面的`http://`和`https://`直接替掉，`www.`因为域名前缀会有不一样的情况，我们也是遇见就直接替掉

```js
function domainName(url){
  return url.replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('.')[0];
}
```

### 方法二

这种怪的打法怎么能少了正则呢, 正则这个小可爱，要多看多用才有机会往脑子里进啊😵
看到一位大佬的解法，觉得非常简洁，嗯...好吧我没看懂，学习一下

```js
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
```

#### 捕获型分组(ab)

这里的`([^\.]+)`就是

把`ab`当作一个整体，比如`(ab)+`表示`ab`至少连续出现一次

#### 非捕获型分组(?:ab)

这里的`(?:http(?:s)?:\/\/)?`、`(?:s)?`和`(?:w{3}\.)?`都是。

括号的一个作用是捕获分组和分支里的数据，需要内存来保存的，当我们不需要使用分组引用和反向引用时，就可以使用非捕获分组。它和捕获型分组的区别是它不捕获数据。

继续看表达式吧，这个表达式最终就是匹配的就是1个或多个任何非`.`的字符。

比如`www.github.com`的话，会整体匹配到`www.github`，分组捕获的内容为`github`
`http://www.github.com`的话，会整体匹配到`http://www.github`，分组捕获的内容为`github`
`github.com`的话，会整体匹配到`github`、分组捕获的内容为`github`

match返回结果的格式与正则对象是否有修饰符`g`有关，没有`g`的情况下，返回的是标准匹配格式，也就是数组第一个元素是整体匹配内容，然后是分组捕获的内容，然后是整体匹配的第一个下标，最后是输入的目标字符串。我们这里取第二项，即分组捕获的内容。

## 最后

写到这里，感触最深的还是正则的使用，要学习练习的还有太多太多，这里先简单描述一下捕获型分组和非捕获型分组的概念吧，详细的相关内容回头整理出一篇总结吧，这个内容还蛮多的，立个flag🚩
