(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{379:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"修改elementui源码并打包上传至npm总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改elementui源码并打包上传至npm总结"}},[s._v("#")]),s._v(" 修改elementUI源码并打包上传至npm总结")]),s._v(" "),t("blockquote",[t("p",[s._v("第一次尝试修改elementUI源码，打包后上传到npm，在网上参考了很多篇文章，但是或多或少都不够详细，我这小菜鸟也踩了一些坑，记录一下。")])]),s._v(" "),t("h2",{attrs:{id:"修改elementui源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改elementui源码"}},[s._v("#")]),s._v(" 修改elementUI源码")]),s._v(" "),t("p",[s._v("项目中遇到组件库达不到想要的需求，那么就需要重新写组件或者改源码了。")]),s._v(" "),t("h3",{attrs:{id:"_1-克隆elementui官方仓库到本地"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-克隆elementui官方仓库到本地"}},[s._v("#")]),s._v(" 1.克隆elementUI官方仓库到本地")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fork一份并克隆仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ElemeFE/element.git\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入本地库，安装依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" element\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认在http://localhost:8585打开本地的element首页")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])])]),t("h3",{attrs:{id:"_2-以新建组件为例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-以新建组件为例"}},[s._v("#")]),s._v(" 2.以新建组件为例")]),s._v(" "),t("p",[s._v("element文件夹中packages文件夹就是我们要新增或修改组件的目录文件夹")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/element%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%841.png",alt:"目录结构1"}})]),s._v(" "),t("p",[s._v("其中的theme-chalk文件夹，里面存放的是样式相关的scss文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/themechalk.png",alt:"目录结构2"}})]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在packages文件夹中新建xxx文件夹(新增的组建名)并新增 xxx/src/main.vue 文件")])]),s._v(" "),t("li",[t("p",[s._v("新增 xxx/index.js文件")])]),s._v(" "),t("li",[t("p",[s._v("在 element/src/index.js文件中新增")])]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" xxx "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../packages/xxx/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" components "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" xxx "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../packages/xxx/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" components "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[t("p",[s._v("在packages/theme-chalk/xxx.scss中加入相关样式")])]),s._v(" "),t("li",[t("p",[s._v("在element/components.json中加入")])]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"xxx"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./packages/xxx/index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"xxx"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./packages/xxx/index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[s._v("#")]),s._v(" 打包")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在element目录下执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dist\n")])])]),t("p",[s._v("这样就生成了lib文件夹，此时就可以直接复制该文件夹，去其他项目里找到"),t("code",[s._v("node_modules/element-ui/lib")]),s._v("文件夹进行替换了")]),s._v(" "),t("h2",{attrs:{id:"npm上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm上传"}},[s._v("#")]),s._v(" npm上传")]),s._v(" "),t("p",[s._v("这个地方踩了一些坑，下面说详细步骤：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("用编辑器的全局搜索功能，搜索"),t("code",[s._v("element-ui")]),s._v(", 并替换名称为自己的npm包名，切记这个包名不可以和npm里现有的包名重复")])]),s._v(" "),t("li",[t("p",[s._v("修改element/types/index.d.ts文件")])]),s._v(" "),t("div",{staticClass:"language-typescript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因为刚才全局替换名称了，所以这里要改回去")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./element-ui'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" ElementUI "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./element-ui'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" ElementUI\n")])])])]),s._v(" "),t("div",{staticClass:"language-typescript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因为刚才全局替换名称了，所以这里要改回去")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./element-ui'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" ElementUI "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./element-ui'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" ElementUI\n")])])]),t("ul",[t("li",[s._v("现在再次运行命令，生成新的lib目录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在element目录下执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dist\n")])])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在element目录下执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dist\n")])])]),t("ul",[t("li",[t("p",[s._v("修改element文件夹中package.json中的包名和版本号")])]),s._v(" "),t("li",[t("p",[s._v("初始化")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])])]),t("ul",[t("li",[s._v("登陆账号,没有的话，需要注册，注册完需要邮箱验证，需要邮箱验证，需要邮箱验证")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依次输入用户名、密码、邮箱。。。")]),s._v("\n")])])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依次输入用户名、密码、邮箱。。。")]),s._v("\n")])])]),t("ul",[t("li",[s._v("上传")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n")])])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n")])])]),t("ul",[t("li",[s._v("依赖安装")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v('已经装了element-ui依赖的话，需要修改package.json中dependencies的"element-ui": "^2.4.11"修改为："你的包名": "^你的版本号"'),t("br"),s._v("\n然后再进行依赖安装\n"),t("code",[s._v("npm install")])])]),s._v(" "),t("li",[t("p",[s._v("没装过的话，直接\n"),t("code",[s._v("npm install 你的包名")]),s._v("\n就可以了")])])]),s._v(" "),t("p",[s._v("正常情况下这样就可以了，但也有可能遇到一些奇怪的问题：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("上传不成功： 排除包名重复的话，可能就是需要番羽墙了")])]),s._v(" "),t("li",[t("p",[s._v("上传成功了，但是在npm里面搜不到。这个我也不知道为什么，他过了一会儿就有了。"),t("br"),s._v("\n令人郁闷的是打开那个链接后，我看到了"),t("code",[s._v('{"error":"Service Unavailable"}')]),s._v(", 503报错。折腾了半天还是报这个，但是发现包可以npm install下来，也就是不影响使用。"),t("br"),s._v("\n发了邮件询问，收到了回复，不报503了\n"),t("img",{attrs:{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/npm503reply.png",alt:"目录结构2"}})])])])])}),[],!1,null,null,null);t.default=n.exports}}]);