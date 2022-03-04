# favicon相关粗略总结

## favicon是什么？

维基百科上介绍说`favicon`是`favorite icon`的缩写，作为快捷图标、网站图标、选项卡图标、URL图标或者书签图标。  

## 格式与尺寸的选择

打开一些网站，按下F12，我们可以查看网站`favicon`的引用情况。浏览一些网站可以发现，大部分网站都是使用了ico(尤其是国内)，小部分使用了png(国外多一些)和svg。  

此外，也发现部分网站引入了不同尺寸的favicon,如16x16/32x32/48x48/64x64等。 并且相关link标签rel属性值也有很多, 比如`rel="icon"`、`rel="shortcut icon"`、`rel="apple-touch-icon"`、`rel="apple-touch-icon-precomposed"`、`rel="mask-icon"`等，这些都表示什么呢？什么情况要用到他们呢？这些属性必须要使用吗？  

带着这些问题疑惑，学习一波~  

### 选择什么格式，为什么

首先需要确定几个入围可作为favicon的格式:  
常见的图片格式中png支持Alpha通道的透明/半透明特性;gif支持透明但不支持半透明，因为不支持Alpha透明通道;JPEG图像不支持透明度处理;svg支持透明;  
下图是维基百科上favicon文件格式支持情况的说明，可以看出ico和png格式支持较好，其中ico对于ie的支持比png更好。  

![file-format-support](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/file-format-support.png)

此外png favicons还有几点需要注意：

* 在edge 79+，chrome，opera 15+和QQ浏览器10.4中，ico和png都支持使用的情况下，如果ico设置更好的尺寸匹配，会优先使用ico
* 在safari和UC Browser for Android中，在如果ico和png都支持，无论什么尺寸都会使用ico
* 在opera 10+和Android Browser 4.4+中，如果有多种格式，将会选择最后加载的格式，不考虑尺寸
* 在iOS Safari、Opera Mini和Opera Mobile中，不会使用png favicons，但有可能会替代书签

具体情况具体分析，png图片是可以支持无损压缩的(感谢老大分享的tinypng)，那么如果不需要兼容IE11(不包含)以下的版本，png是不错的选择。小遗憾是IOS safari不支持，但是也可以通过额外引入ico favicon来处理。

![png-favicons-support](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/png-favicons-support.png)

svg favicons需要注意的点：

* safari 9+支持`pinned tab`使用svg图标，但是需要设置`rel="mask-icon"`,并且只适用于触摸栏中的all-black icons
* edge 80+,firefox 41+, chrome 80+,opera 67+和chrome for android 88中(实际上svg favicon支持的也就是这些了..)需要设置type为`image/svg+xml`

svg矢量图的优点很多，但是其兼容性相比较而言差很多。如果使用svg的话，也需要额外引入ico favicon来处理。

![svg-favicons-support](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/svg-favicons-support.png)

### 选择什么尺寸，为什么

尽管国内很多网站都是只有一个尺寸的favicon.ico，但是多浏览一些网站，这里就拿凹凸实验室举栗了`https://aotu.io/`，

![凹凸实验室](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/auto-favicon-info.png)  

我们可以看到凹凸实验室`rel="shortcut icon"`的link标签引入了一个64x64,大小为33.3kb的ico图片，然后引入了3个分别为16x16/32x32/48x48的png图片，再往下看有一个manifest.json文件，这个文件是PWA应用的配置文件，用来告知浏览器关于PWA应用的一些相关信息，里面的icons可以看到有8张不同尺寸的png图片。  

![凹凸实验室的manifest.json](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/aotu-manifest-info.png)  

再继续往下看，看到了很多不同尺寸的`rel="apple-touch-icon"`link标签，ios移动设备将web应用程序或者网页链接添加到主屏幕，需要指定一个链接图标，苹果的官方文档中说明需要在根目录中放置png格式图片作为图标。通常情况下我们需要给不同分辨率的设备设置图标，查阅相关资料总结如下：

* 57×57 – iPhone with @1x display and iPod Touch
* 60x60 - iPhone with @3x display
* 72×72 – iPad and iPad mini with @1x display running iOS ≤ 6
* 76×76 – iPad and iPad mini with @1x display running iOS 7+
* 114×114 – iPhone with @2x display running iOS ≤ 6
* 120×120 – iPhone with @2x and @3x display running iOS 7+
* 144×144 – iPad and iPad mini with @2x display running iOS ≤ 6
* 152×152 – iPad and iPad mini with @2x display running iOS 7
* 167×167 – iPad Pro with @2x display running iOS 8+
* 180×180 – iPad and iPad mini with @2x display running iOS 8+

浏览一些其他网站，还发现了写有`rel="apple-touch-icon-precomposed"`的link标签，官网文档说明如下：
> Safari on iOS 7 doesn’t add effects to icons. Older versions of Safari will not add effects for icon files named with the -precomposed.png suffix.

经测试，如些有多个图标符合推荐尺寸，会优先选择包含关键字precomposed的图标。
如果有两个相同尺寸且rel值相同但图片不同的标签，会选择第一个出现的图标。

好像下面没有link标签了，但是再悄咪咪瞧一眼，看到了一个`name="msapplication-config"`的meta标签，他的内容是这样的：

```xml
<browserconfig>
    <msapplication>
    <tile>
        <square70x70logo src="/img/mstile-70x70.png"/>
        <square150x150logo src="/img/mstile-150x150.png"/>
        <wide310x150logo src="/img/mstile-310x150.png"/>
        <square310x310logo src="/img/mstile-310x310.png"/>
        <TileColor>#fff</TileColor>
    </tile>
    </msapplication>
</browserconfig>
```

下面还有一个`name="msapplication-TileImage`和`name="msapplication-TileColor`的meta标签，在windows8.0和IE10中，144x144平铺图标由这两个标签设定，分别设置了磁贴图片和背景色。

在windows8.1及以上版本中，可以配置`browserconfig.xml`把网站添加到应用，一共有4个尺寸

* 70×70 (small tile)
* 150×150 (medium tile)
* 310×150 (wide tile)
* 310×310 (large tile)

写到这里发现涉及到尺寸的大多是移动端或者桌面端图标，涉及到的是png格式图片。大部分网站的ico图片为32x32或者48x48尺寸，多数大小在20kb的范围以内。

除了凹凸实验室外，很多网站也使用了一个`rel="mask-icon"`的link标签, MacBook的Touch Bar区域可以显示safari收藏栏内容,link标签中需要设置图片的显示颜色(16进制/RGB/单一颜色)，非常重要的一点是对应的svg文件的viewBox必须设置为"0 0 16 16"

所以，综合看下来的最佳实践如下(大杂烩)：

* 保留一个`rel="shortcut icon"`的ico图标（以备其他不兼容的情况）
* 设置几个size`rel="icon"`的png图标(16/32/48)
* 为iOS移动设备设置不同sizes的png图标(57/60/72/76/114/120/152/167/180)
* 使用`name="msapplication-TileColor"`和`name="msapplication-TileImage"`的meta标签为windows应用配置144x144的图标(windows8, ie10)
* 为windows应用配置browserconfig.xml文件(windows8.1+)
* PWA应用配置`manifest.json`文件

最后提供一个favicon的检查工具https://realfavicongenerator.net/

### References

> <https://en.wikipedia.org/wiki/Favicon>
> <https://stackoverflow.com/questions/1344122/favicon-png-vs-favicon-ico-why-should-i-use-png-instead-of-ico>
> <https://www.emergeinteractive.com/insights/detail/the-essentials-of-favicons>
> <https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them>
> <https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html>
> <https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html>
> <https://webhint.io/docs/user-guide/hints/hint-apple-touch-icons/>
> <https://sympli.io/blog/heres-everything-you-need-to-know-about-favicons-in-2020/>
