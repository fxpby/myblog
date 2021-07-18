(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{401:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"favicon相关粗略总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#favicon相关粗略总结"}},[t._v("#")]),t._v(" favicon相关粗略总结")]),t._v(" "),s("h2",{attrs:{id:"favicon是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#favicon是什么"}},[t._v("#")]),t._v(" favicon是什么？")]),t._v(" "),s("p",[t._v("维基百科上介绍说"),s("code",[t._v("favicon")]),t._v("是"),s("code",[t._v("favorite icon")]),t._v("的缩写，作为快捷图标、网站图标、选项卡图标、URL图标或者书签图标。")]),t._v(" "),s("h2",{attrs:{id:"格式与尺寸的选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式与尺寸的选择"}},[t._v("#")]),t._v(" 格式与尺寸的选择")]),t._v(" "),s("p",[t._v("打开一些网站，按下F12，我们可以查看网站"),s("code",[t._v("favicon")]),t._v("的引用情况。浏览一些网站可以发现，大部分网站都是使用了ico(尤其是国内)，小部分使用了png(国外多一些)和svg。")]),t._v(" "),s("p",[t._v("此外，也发现部分网站引入了不同尺寸的favicon,如16x16/32x32/48x48/64x64等。 并且相关link标签rel属性值也有很多, 比如"),s("code",[t._v('rel="icon"')]),t._v("、"),s("code",[t._v('rel="shortcut icon"')]),t._v("、"),s("code",[t._v('rel="apple-touch-icon"')]),t._v("、"),s("code",[t._v('rel="apple-touch-icon-precomposed"')]),t._v("、"),s("code",[t._v('rel="mask-icon"')]),t._v("等，这些都表示什么呢？什么情况要用到他们呢？这些属性必须要使用吗？")]),t._v(" "),s("p",[t._v("带着这些问题疑惑，学习一波~")]),t._v(" "),s("h3",{attrs:{id:"选择什么格式-为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择什么格式-为什么"}},[t._v("#")]),t._v(" 选择什么格式，为什么")]),t._v(" "),s("p",[t._v("首先需要确定几个入围可作为favicon的格式:"),s("br"),t._v("\n常见的图片格式中png支持Alpha通道的透明/半透明特性;gif支持透明但不支持半透明，因为不支持Alpha透明通道;JPEG图像不支持透明度处理;svg支持透明;"),s("br"),t._v("\n下图是维基百科上favicon文件格式支持情况的说明，可以看出ico和png格式支持较好，其中ico对于ie的支持比png更好。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/file-format-support.png",alt:"file-format-support"}})]),t._v(" "),s("p",[t._v("此外png favicons还有几点需要注意：")]),t._v(" "),s("ul",[s("li",[t._v("在edge 79+，chrome，opera 15+和QQ浏览器10.4中，ico和png都支持使用的情况下，如果ico设置更好的尺寸匹配，会优先使用ico")]),t._v(" "),s("li",[t._v("在safari和UC Browser for Android中，在如果ico和png都支持，无论什么尺寸都会使用ico")]),t._v(" "),s("li",[t._v("在opera 10+和Android Browser 4.4+中，如果有多种格式，将会选择最后加载的格式，不考虑尺寸")]),t._v(" "),s("li",[t._v("在iOS Safari、Opera Mini和Opera Mobile中，不会使用png favicons，但有可能会替代书签")])]),t._v(" "),s("p",[t._v("具体情况具体分析，png图片是可以支持无损压缩的(感谢老大分享的tinypng)，那么如果不需要兼容IE11(不包含)以下的版本，png是不错的选择。小遗憾是IOS safari不支持，但是也可以通过额外引入ico favicon来处理。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/png-favicons-support.png",alt:"png-favicons-support"}})]),t._v(" "),s("p",[t._v("svg favicons需要注意的点：")]),t._v(" "),s("ul",[s("li",[t._v("safari 9+支持"),s("code",[t._v("pinned tab")]),t._v("使用svg图标，但是需要设置"),s("code",[t._v('rel="mask-icon"')]),t._v(",并且只适用于触摸栏中的all-black icons")]),t._v(" "),s("li",[t._v("edge 80+,firefox 41+, chrome 80+,opera 67+和chrome for android 88中(实际上svg favicon支持的也就是这些了..)需要设置type为"),s("code",[t._v("image/svg+xml")])])]),t._v(" "),s("p",[t._v("svg矢量图的优点很多，但是其兼容性相比较而言差很多。如果使用svg的话，也需要额外引入ico favicon来处理。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/svg-favicons-support.png",alt:"svg-favicons-support"}})]),t._v(" "),s("h3",{attrs:{id:"选择什么尺寸-为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择什么尺寸-为什么"}},[t._v("#")]),t._v(" 选择什么尺寸，为什么")]),t._v(" "),s("p",[t._v("尽管国内很多网站都是只有一个尺寸的favicon.ico，但是多浏览一些网站，这里就拿凹凸实验室举栗了"),s("code",[t._v("https://aotu.io/")]),t._v("，"),s("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/auto-favicon-info.png",alt:"凹凸实验室"}}),t._v("\n我们可以看到凹凸实验室"),s("code",[t._v('rel="shortcut icon"')]),t._v("的link标签引入了一个64x64,大小为33.3kb的ico图片，然后引入了3个分别为16x16/32x32/48x48的png图片，再往下看有一个manifest.json文件，这个文件是PWA应用的配置文件，用来告知浏览器关于PWA应用的一些相关信息，里面的icons可以看到有8张不同尺寸的png图片。\n"),s("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/aotu-manifest-info.png",alt:"凹凸实验室的manifest.json"}})]),t._v(" "),s("p",[t._v("再继续往下看，看到了很多不同尺寸的"),s("code",[t._v('rel="apple-touch-icon"')]),t._v("link标签，ios移动设备将web应用程序或者网页链接添加到主屏幕，需要指定一个链接图标，苹果的官方文档中说明需要在根目录中放置png格式图片作为图标。通常情况下我们需要给不同分辨率的设备设置图标，查阅相关资料总结如下：")]),t._v(" "),s("ul",[s("li",[t._v("57×57 – iPhone with @1x display and iPod Touch")]),t._v(" "),s("li",[t._v("60x60 - iPhone with @3x display")]),t._v(" "),s("li",[t._v("72×72 – iPad and iPad mini with @1x display running iOS ≤ 6")]),t._v(" "),s("li",[t._v("76×76 – iPad and iPad mini with @1x display running iOS 7+")]),t._v(" "),s("li",[t._v("114×114 – iPhone with @2x display running iOS ≤ 6")]),t._v(" "),s("li",[t._v("120×120 – iPhone with @2x and @3x display running iOS 7+")]),t._v(" "),s("li",[t._v("144×144 – iPad and iPad mini with @2x display running iOS ≤ 6")]),t._v(" "),s("li",[t._v("152×152 – iPad and iPad mini with @2x display running iOS 7")]),t._v(" "),s("li",[t._v("167×167 – iPad Pro with @2x display running iOS 8+")]),t._v(" "),s("li",[t._v("180×180 – iPad and iPad mini with @2x display running iOS 8+")])]),t._v(" "),s("p",[t._v("浏览一些其他网站，还发现了写有"),s("code",[t._v('rel="apple-touch-icon-precomposed"')]),t._v("的link标签，官网文档说明如下：")]),t._v(" "),s("blockquote",[s("p",[t._v("Safari on iOS 7 doesn’t add effects to icons. Older versions of Safari will not add effects for icon files named with the -precomposed.png suffix.")])]),t._v(" "),s("p",[t._v("经测试，如些有多个图标符合推荐尺寸，会优先选择包含关键字precomposed的图标。\n如果有两个相同尺寸且rel值相同但图片不同的标签，会选择第一个出现的图标。")]),t._v(" "),s("p",[t._v("好像下面没有link标签了，但是再悄咪咪瞧一眼，看到了一个"),s("code",[t._v('name="msapplication-config"')]),t._v("的meta标签，他的内容是这样的：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("browserconfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("msapplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("square70x70logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/img/mstile-70x70.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("square150x150logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/img/mstile-150x150.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wide310x150logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/img/mstile-310x150.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("square310x310logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/img/mstile-310x310.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TileColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("#fff"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("TileColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("msapplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("browserconfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("下面还有一个"),s("code",[t._v('name="msapplication-TileImage')]),t._v("和"),s("code",[t._v('name="msapplication-TileColor')]),t._v("的meta标签，在windows8.0和IE10中，144x144平铺图标由这两个标签设定，分别设置了磁贴图片和背景色。")]),t._v(" "),s("p",[t._v("在windows8.1及以上版本中，可以配置"),s("code",[t._v("browserconfig.xml")]),t._v("把网站添加到应用，一共有4个尺寸")]),t._v(" "),s("ul",[s("li",[t._v("70×70 (small tile)")]),t._v(" "),s("li",[t._v("150×150 (medium tile)")]),t._v(" "),s("li",[t._v("310×150 (wide tile)")]),t._v(" "),s("li",[t._v("310×310 (large tile)")])]),t._v(" "),s("p",[t._v("写到这里发现涉及到尺寸的大多是移动端或者桌面端图标，涉及到的是png格式图片。大部分网站的ico图片为32x32或者48x48尺寸，多数大小在20kb的范围以内。")]),t._v(" "),s("p",[t._v("除了凹凸实验室外，很多网站也使用了一个"),s("code",[t._v('rel="mask-icon"')]),t._v('的link标签, MacBook的Touch Bar区域可以显示safari收藏栏内容,link标签中需要设置图片的显示颜色(16进制/RGB/单一颜色)，非常重要的一点是对应的svg文件的viewBox必须设置为"0 0 16 16"')]),t._v(" "),s("p",[t._v("所以，综合看下来的最佳实践如下(大杂烩)：")]),t._v(" "),s("ul",[s("li",[t._v("保留一个"),s("code",[t._v('rel="shortcut icon"')]),t._v("的ico图标（以备其他不兼容的情况）")]),t._v(" "),s("li",[t._v("设置几个size"),s("code",[t._v('rel="icon"')]),t._v("的png图标(16/32/48)")]),t._v(" "),s("li",[t._v("为iOS移动设备设置不同sizes的png图标(57/60/72/76/114/120/152/167/180)")]),t._v(" "),s("li",[t._v("使用"),s("code",[t._v('name="msapplication-TileColor"')]),t._v("和"),s("code",[t._v('name="msapplication-TileImage"')]),t._v("的meta标签为windows应用配置144x144的图标(windows8, ie10)")]),t._v(" "),s("li",[t._v("为windows应用配置browserconfig.xml文件(windows8.1+)")]),t._v(" "),s("li",[t._v("PWA应用配置"),s("code",[t._v("manifest.json")]),t._v("文件")])]),t._v(" "),s("p",[t._v("最后提供一个favicon的检查工具https://realfavicongenerator.net/")]),t._v(" "),s("h3",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("blockquote",[s("p",[t._v("https://en.wikipedia.org/wiki/Favicon\nhttps://stackoverflow.com/questions/1344122/favicon-png-vs-favicon-ico-why-should-i-use-png-instead-of-ico\nhttps://www.emergeinteractive.com/insights/detail/the-essentials-of-favicons\nhttps://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them\nhttps://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html\nhttps://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html\nhttps://webhint.io/docs/user-guide/hints/hint-apple-touch-icons/\nhttps://sympli.io/blog/heres-everything-you-need-to-know-about-favicons-in-2020/")])])])}),[],!1,null,null,null);a.default=e.exports}}]);