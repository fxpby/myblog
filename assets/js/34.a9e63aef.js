(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{406:function(t,a,s){"use strict";s.r(a);var n=s(46),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"extract-the-domain-name-from-a-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extract-the-domain-name-from-a-url"}},[t._v("#")]),t._v(" Extract the domain name from a URL")]),t._v(" "),s("h2",{attrs:{id:"副本描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#副本描述"}},[t._v("#")]),t._v(" 副本描述")]),t._v(" "),s("ul",[s("li",[t._v("Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("domainName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://github.com/carbonfive/raygun"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github"')]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("domainName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.zombie-bites.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zombie-bites"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("domainName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.cnet.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cnet"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("domainName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.xakep.ru"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xakep"')]),t._v("\n")])])]),s("h2",{attrs:{id:"怪物图鉴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怪物图鉴"}},[t._v("#")]),t._v(" 怪物图鉴")]),t._v(" "),s("p",[t._v("打怪前要了解一下怪物背景呀，盲打可打不过📚")]),t._v(" "),s("h3",{attrs:{id:"域名层次及语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名层次及语法"}},[t._v("#")]),t._v(" 域名层次及语法")]),t._v(" "),s("p",[t._v("域名是由多个有点分隔的部分连接在一起的，比如"),s("code",[t._v("www.baidu.com")]),t._v(", 我们需要从右向左进行阅读，最右边的"),s("code",[t._v(".com")]),t._v("是"),s("strong",[t._v("顶级域名")]),t._v("（英语：Top-level domains，缩写：TLD），顶级域名下面一层是"),s("strong",[t._v("二级域名")]),t._v("（英语：Second-level domain, SLD），在这里"),s("code",[t._v("baidu")]),t._v("就是二级域名，三级域名、四级域名依此类推。")]),t._v(" "),s("h3",{attrs:{id:"省略www"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#省略www"}},[t._v("#")]),t._v(" 省略www")]),t._v(" "),s("p",[t._v("看题目描述中有的case有"),s("code",[t._v("www")]),t._v(", 有的没有，这是什么原因呢？")]),t._v(" "),s("p",[t._v("确实有的时候我们会发现，访问一些网站的时候，并不需要输入"),s("code",[t._v("www")]),t._v("，有的要输入。\n一般我们在购买域名之后会给域名做解析，拿阿里云的域名解析举栗了："),s("br"),t._v(" "),s("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/exercise/extractDomain/%E8%A7%A3%E6%9E%90.png",alt:"域名解析"}}),t._v("\n我们看到这里有一个"),s("strong",[t._v("主机记录")]),t._v("，鼠标移上去看一下："),s("br"),t._v(" "),s("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/exercise/extractDomain/%E4%B8%BB%E6%9C%BA%E8%AE%B0%E5%BD%95.png",alt:"主机记录"}}),t._v("\n看完后我们知道了这个解析是可以配置的，比如我们设置"),s("code",[t._v("www")]),t._v("，那么访问"),s("code",[t._v("www.xx.xx")]),t._v("即可，如果设置了"),s("code",[t._v("@")]),t._v("，那么直接访问"),s("code",[t._v("xx.xx")]),t._v("即可。")]),t._v(" "),s("p",[t._v("一个域名我们可以设置很多个解析，每个解析对应不同的ip地址，即我们有一个域名"),s("code",[t._v("olumel.top")]),t._v(", 可以设置"),s("code",[t._v("www.olumel.top")]),t._v("解析到ip1，"),s("code",[t._v("cute.olumel.top")]),t._v("解析到ip2, "),s("code",[t._v("cool.olumel.top")]),t._v("到ip3...")]),t._v(" "),s("h2",{attrs:{id:"打怪路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打怪路径"}},[t._v("#")]),t._v(" 打怪路径")]),t._v(" "),s("p",[t._v("首先这个题目呢，是不严谨的，顶级域的话呢，会有多节点的特殊情况，比如"),s("code",[t._v("co.uk")]),t._v("这样的, 正确的情况我们应该把所有的顶级域名列出来，然后再去取其前面的二级域名，但是这显然不太现实，所有的顶级域名会是很庞大的一个清单。\n不列出顶级域名的话呢，单纯从左边剥离"),s("code",[t._v("www")]),t._v("也是不正确的，上面图鉴我们分析过域名解析可以自己设置，这样的话呢，这个题解起来就无从下手了。所以就不考虑特殊的域名前缀和顶级域名了，这里仅考虑"),s("code",[t._v("www")]),t._v("和省略"),s("code",[t._v("www")]),t._v("的情况.\n打这个怪的主要目的其实还是学习域名和正则相关的知识点，那就开始吧~✨")]),t._v(" "),s("h3",{attrs:{id:"方法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[t._v("#")]),t._v(" 方法一")]),t._v(" "),s("p",[t._v("前面的"),s("code",[t._v("http://")]),t._v("和"),s("code",[t._v("https://")]),t._v("直接替掉，"),s("code",[t._v("www.")]),t._v("因为域名前缀会有不一样的情况，我们也是遇见就直接替掉")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("domainName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"方法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[t._v("#")]),t._v(" 方法二")]),t._v(" "),s("p",[t._v("这种怪的打法怎么能少了正则呢, 正则这个小可爱，要多看多用才有机会往脑子里进啊😵\n看到一位大佬的解法，觉得非常简洁，嗯...好吧我没看懂，学习一下")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("domainName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(?:http(?:s)?:\\/\\/)?(?:w{3}\\.)?([^\\.]+)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("i")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"捕获型分组-ab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获型分组-ab"}},[t._v("#")]),t._v(" 捕获型分组(ab)")]),t._v(" "),s("p",[t._v("这里的"),s("code",[t._v("([^\\.]+)")]),t._v("就是")]),t._v(" "),s("p",[t._v("把"),s("code",[t._v("ab")]),t._v("当作一个整体，比如"),s("code",[t._v("(ab)+")]),t._v("表示"),s("code",[t._v("ab")]),t._v("至少连续出现一次")]),t._v(" "),s("h4",{attrs:{id:"非捕获型分组-ab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非捕获型分组-ab"}},[t._v("#")]),t._v(" 非捕获型分组(?:ab)")]),t._v(" "),s("p",[t._v("这里的"),s("code",[t._v("(?:http(?:s)?:\\/\\/)?")]),t._v("、"),s("code",[t._v("(?:s)?")]),t._v("和"),s("code",[t._v("(?:w{3}\\.)?")]),t._v("都是。")]),t._v(" "),s("p",[t._v("括号的一个作用是捕获分组和分支里的数据，需要内存来保存的，当我们不需要使用分组引用和反向引用时，就可以使用非捕获分组。它和捕获型分组的区别是它不捕获数据。")]),t._v(" "),s("p",[t._v("继续看表达式吧，这个表达式最终就是匹配的就是1个或多个任何非"),s("code",[t._v(".")]),t._v("的字符。")]),t._v(" "),s("p",[t._v("比如"),s("code",[t._v("www.github.com")]),t._v("的话，会整体匹配到"),s("code",[t._v("www.github")]),t._v("，分组捕获的内容为"),s("code",[t._v("github")]),t._v(" "),s("code",[t._v("http://www.github.com")]),t._v("的话，会整体匹配到"),s("code",[t._v("http://www.github")]),t._v("，分组捕获的内容为"),s("code",[t._v("github")]),t._v(" "),s("code",[t._v("github.com")]),t._v("的话，会整体匹配到"),s("code",[t._v("github")]),t._v("、分组捕获的内容为"),s("code",[t._v("github")])]),t._v(" "),s("p",[t._v("match返回结果的格式与正则对象是否有修饰符"),s("code",[t._v("g")]),t._v("有关，没有"),s("code",[t._v("g")]),t._v("的情况下，返回的是标准匹配格式，也就是数组第一个元素是整体匹配内容，然后是分组捕获的内容，然后是整体匹配的第一个下标，最后是输入的目标字符串。我们这里取第二项，即分组捕获的内容。")]),t._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("写到这里，感触最深的还是正则的使用，要学习练习的还有太多太多，这里先简单描述一下捕获型分组和非捕获型分组的概念吧，详细的相关内容回头整理出一篇总结吧，这个内容还蛮多的，立个flag🚩")])])}),[],!1,null,null,null);a.default=e.exports}}]);