# 修改elementUI源码并打包上传至npm总结

> 第一次尝试修改elementUI源码，打包后上传到npm，在网上参考了很多篇文章，但是或多或少都不够详细，我这小菜鸟也踩了一些坑，记录一下。

## 修改elementUI源码

项目中遇到组件库达不到想要的需求，那么就需要重新写组件或者改源码了。

### 1.克隆elementUI官方仓库到本地

``` bash
# fork一份并克隆仓库
git clone https://github.com/ElemeFE/element.git

# 进入本地库，安装依赖
cd element
npm install

# 默认在http://localhost:8585打开本地的element首页
npm run dev
```

### 2.以新建组件为例

element文件夹中packages文件夹就是我们要新增或修改组件的目录文件夹

![目录结构1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/element%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%841.png)

其中的theme-chalk文件夹，里面存放的是样式相关的scss文件

![目录结构2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/themechalk.png)

* 在packages文件夹中新建xxx文件夹(新增的组建名)并新增 xxx/src/main.vue 文件

* 新增 xxx/index.js文件

* 在 element/src/index.js文件中新增

``` javascript
import xxx from '../packages/xxx/index.js';  
const components = [xxx]
export default {xxx}
```

* 在packages/theme-chalk/xxx.scss中加入相关样式

* 在element/components.json中加入

``` javascript
{"xxx": "./packages/xxx/index.js"}
```

## 打包

``` bash
# 在element目录下执行
npm run dist
```

这样就生成了lib文件夹，此时就可以直接复制该文件夹，去其他项目里找到`node_modules/element-ui/lib`文件夹进行替换了

## npm上传

这个地方踩了一些坑，下面说详细步骤：

* 用编辑器的全局搜索功能，搜索`element-ui`, 并替换名称为自己的npm包名，切记这个包名不可以和npm里现有的包名重复

* 修改element/types/index.d.ts文件

``` typescript
// 因为刚才全局替换名称了，所以这里要改回去
export * from './element-ui'

import * as ElementUI from './element-ui'
export default ElementUI
```

* 现在再次运行命令，生成新的lib目录

``` bash
# 在element目录下执行
npm run dist
```

* 修改element文件夹中package.json中的包名和版本号

* 初始化

``` bash
npm init
```

* 登陆账号,没有的话，需要注册，注册完需要邮箱验证，需要邮箱验证，需要邮箱验证

``` bash
npm login
# 依次输入用户名、密码、邮箱。。。
```

* 上传

``` bash
npm publish
```

* 依赖安装

1. 已经装了element-ui依赖的话，需要修改package.json中dependencies的"element-ui": "^2.4.11"修改为："你的包名": "^你的版本号"  
然后再进行依赖安装
`npm install`  

2. 没装过的话，直接
`npm install 你的包名`
就可以了

正常情况下这样就可以了，但也有可能遇到一些奇怪的问题：

* 上传不成功： 排除包名重复的话，可能就是需要番羽墙了

* 上传成功了，但是在npm里面搜不到。这个我也不知道为什么，他过了一会儿就有了。  
令人郁闷的是打开那个链接后，我看到了`{"error":"Service Unavailable"}`, 503报错。折腾了半天还是报这个，但是发现包可以npm install下来，也就是不影响使用。  
发了邮件询问，收到了回复，不报503了
![目录结构2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/npm503reply.png)