# favicon 相关粗略总结

## favicon 是什么？

维基百科上介绍说`favicon`是`favorite icon`的缩写，作为快捷图标、网站图标、选项卡图标、URL 图标或者书签图标。

## 格式与尺寸的选择

打开一些网站，按下 F12，我们可以查看网站`favicon`的引用情况。浏览一些网站可以发现，大部分网站都是使用了 ico(尤其是国内)，小部分使用了 png(国外多一些)和 svg。

此外，也发现部分网站引入了不同尺寸的 favicon,如 16x16/32x32/48x48/64x64 等。 并且相关 link 标签 rel 属性值也有很多, 比如`rel="icon"`、`rel="shortcut icon"`、`rel="apple-touch-icon"`、`rel="apple-touch-icon-precomposed"`、`rel="mask-icon"`等，这些都表示什么呢？什么情况要用到他们呢？这些属性必须要使用吗？

带着这些问题疑惑，学习一波~

### 选择什么格式，为什么

首先需要确定几个入围可作为 favicon 的格式:  
常见的图片格式中 png 支持 Alpha 通道的透明/半透明特性;gif 支持透明但不支持半透明，因为不支持 Alpha 透明通道;JPEG 图像不支持透明度处理;svg 支持透明;  
下图是维基百科上 favicon 文件格式支持情况的说明，可以看出 ico 和 png 格式支持较好，其中 ico 对于 ie 的支持比 png 更好。

![file-format-support](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/file-format-support.png)

此外 png favicons 还有几点需要注意：

- 在 edge 79+，chrome，opera 15+和 QQ 浏览器 10.4 中，ico 和 png 都支持使用的情况下，如果 ico 设置更好的尺寸匹配，会优先使用 ico
- 在 safari 和 UC Browser for Android 中，在如果 ico 和 png 都支持，无论什么尺寸都会使用 ico
- 在 opera 10+和 Android Browser 4.4+中，如果有多种格式，将会选择最后加载的格式，不考虑尺寸
- 在 iOS Safari、Opera Mini 和 Opera Mobile 中，不会使用 png favicons，但有可能会替代书签

具体情况具体分析，png 图片是可以支持无损压缩的(感谢老大分享的 tinypng)，那么如果不需要兼容 IE11(不包含)以下的版本，png 是不错的选择。小遗憾是 IOS safari 不支持，但是也可以通过额外引入 ico favicon 来处理。

![png-favicons-support](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/png-favicons-support.png)

svg favicons 需要注意的点：

- safari 9+支持`pinned tab`使用 svg 图标，但是需要设置`rel="mask-icon"`,并且只适用于触摸栏中的 all-black icons
- edge 80+,firefox 41+, chrome 80+,opera 67+和 chrome for android 88 中(实际上 svg favicon 支持的也就是这些了..)需要设置 type 为`image/svg+xml`

svg 矢量图的优点很多，但是其兼容性相比较而言差很多。如果使用 svg 的话，也需要额外引入 ico favicon 来处理。

![svg-favicons-support](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/svg-favicons-support.png)

### 选择什么尺寸，为什么

尽管国内很多网站都是只有一个尺寸的 favicon.ico，但是多浏览一些网站，这里就拿凹凸实验室举栗了`https://aotu.io/`，

![凹凸实验室](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/auto-favicon-info.png)

我们可以看到凹凸实验室`rel="shortcut icon"`的 link 标签引入了一个 64x64,大小为 33.3kb 的 ico 图片，然后引入了 3 个分别为 16x16/32x32/48x48 的 png 图片，再往下看有一个 manifest.json 文件，这个文件是 PWA 应用的配置文件，用来告知浏览器关于 PWA 应用的一些相关信息，里面的 icons 可以看到有 8 张不同尺寸的 png 图片。

![凹凸实验室的manifest.json](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/aotu-manifest-info.png)

再继续往下看，看到了很多不同尺寸的`rel="apple-touch-icon"`link 标签，ios 移动设备将 web 应用程序或者网页链接添加到主屏幕，需要指定一个链接图标，苹果的官方文档中说明需要在根目录中放置 png 格式图片作为图标。通常情况下我们需要给不同分辨率的设备设置图标，查阅相关资料总结如下：

- 57×57 – iPhone with @1x display and iPod Touch
- 60x60 - iPhone with @3x display
- 72×72 – iPad and iPad mini with @1x display running iOS ≤ 6
- 76×76 – iPad and iPad mini with @1x display running iOS 7+
- 114×114 – iPhone with @2x display running iOS ≤ 6
- 120×120 – iPhone with @2x and @3x display running iOS 7+
- 144×144 – iPad and iPad mini with @2x display running iOS ≤ 6
- 152×152 – iPad and iPad mini with @2x display running iOS 7
- 167×167 – iPad Pro with @2x display running iOS 8+
- 180×180 – iPad and iPad mini with @2x display running iOS 8+

浏览一些其他网站，还发现了写有`rel="apple-touch-icon-precomposed"`的 link 标签，官网文档说明如下：

> Safari on iOS 7 doesn’t add effects to icons. Older versions of Safari will not add effects for icon files named with the -precomposed.png suffix.

经测试，如些有多个图标符合推荐尺寸，会优先选择包含关键字 precomposed 的图标。
如果有两个相同尺寸且 rel 值相同但图片不同的标签，会选择第一个出现的图标。

好像下面没有 link 标签了，但是再悄咪咪瞧一眼，看到了一个`name="msapplication-config"`的 meta 标签，他的内容是这样的：

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

下面还有一个`name="msapplication-TileImage`和`name="msapplication-TileColor`的 meta 标签，在 windows8.0 和 IE10 中，144x144 平铺图标由这两个标签设定，分别设置了磁贴图片和背景色。

在 windows8.1 及以上版本中，可以配置`browserconfig.xml`把网站添加到应用，一共有 4 个尺寸

- 70×70 (small tile)
- 150×150 (medium tile)
- 310×150 (wide tile)
- 310×310 (large tile)

写到这里发现涉及到尺寸的大多是移动端或者桌面端图标，涉及到的是 png 格式图片。大部分网站的 ico 图片为 32x32 或者 48x48 尺寸，多数大小在 20kb 的范围以内。

除了凹凸实验室外，很多网站也使用了一个`rel="mask-icon"`的 link 标签, MacBook 的 Touch Bar 区域可以显示 safari 收藏栏内容,link 标签中需要设置图片的显示颜色(16 进制/RGB/单一颜色)，非常重要的一点是对应的 svg 文件的 viewBox 必须设置为"0 0 16 16"

所以，综合看下来的最佳实践如下(大杂烩)：

- 保留一个`rel="shortcut icon"`的 ico 图标（以备其他不兼容的情况）
- 设置几个 size`rel="icon"`的 png 图标(16/32/48)
- 为 iOS 移动设备设置不同 sizes 的 png 图标(57/60/72/76/114/120/152/167/180)
- 使用`name="msapplication-TileColor"`和`name="msapplication-TileImage"`的 meta 标签为 windows 应用配置 144x144 的图标(windows8, ie10)
- 为 windows 应用配置 browserconfig.xml 文件(windows8.1+)
- PWA 应用配置`manifest.json`文件

最后提供一个 favicon 的检查工具[检查工具](https://realfavicongenerator.net/)

### References

> - [https://en.wikipedia.org/wiki/Favicon](https://en.wikipedia.org/wiki/Favicon)
> - [https://stackoverflow.com/questions/1344122/favicon-png-vs-favicon-ico-why-should-i-use-png-instead-of-ico](https://stackoverflow.com/questions/1344122/favicon-png-vs-favicon-ico-why-should-i-use-png-instead-of-ico)
> - [https://www.emergeinteractive.com/insights/detail/the-essentials-of-favicons](https://www.emergeinteractive.com/insights/detail/the-essentials-of-favicons)
> - [https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html)
> - [https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
> - [https://webhint.io/docs/user-guide/hints/hint-apple-touch-icons/](https://webhint.io/docs/user-guide/hints/hint-apple-touch-icons/)
> - [https://sympli.io/blog/heres-everything-you-need-to-know-about-favicons-in-2020](https://sympli.io/blog/heres-everything-you-need-to-know-about-favicons-in-2020)
