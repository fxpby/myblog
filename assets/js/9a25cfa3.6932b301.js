"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1113],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=s,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||r;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),s=(t(7294),t(3905));const r={id:"frontend-http-cache-solution",title:"\u524d\u7aef\u5e94\u7528\u4e2d\u7684\u7f13\u5b58\u5904\u7406\u65b9\u6848",tags:["cache","\u7f13\u5b58"]},o=void 0,l={unversionedId:"network/cache/frontend-http-cache-solution",id:"network/cache/frontend-http-cache-solution",title:"\u524d\u7aef\u5e94\u7528\u4e2d\u7684\u7f13\u5b58\u5904\u7406\u65b9\u6848",description:"\u524d\u7aef\u5e94\u7528\u4e2d\u7684 http \u7f13\u5b58",source:"@site/docs/network/cache/frontend-http-cache-solution.md",sourceDirName:"network/cache",slug:"/network/cache/frontend-http-cache-solution",permalink:"/myblog/docs/network/cache/frontend-http-cache-solution",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/network/cache/frontend-http-cache-solution.md",tags:[{label:"cache",permalink:"/myblog/docs/tags/cache"},{label:"\u7f13\u5b58",permalink:"/myblog/docs/tags/\u7f13\u5b58"}],version:"current",frontMatter:{id:"frontend-http-cache-solution",title:"\u524d\u7aef\u5e94\u7528\u4e2d\u7684\u7f13\u5b58\u5904\u7406\u65b9\u6848",tags:["cache","\u7f13\u5b58"]},sidebar:"network",previous:{title:"\u6d4f\u89c8\u5668 HTTP \u7f13\u5b58\u673a\u5236",permalink:"/myblog/docs/network/cache/network-http-cache"},next:{title:"chrome\u4e2d\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f\u4e0ehttp\u7f13\u5b58\u7684\u5173\u7cfb",permalink:"/myblog/docs/network/cache/broswer-http-cache"}},i={},p=[{value:"\u524d\u7aef\u5e94\u7528\u4e2d\u7684 http \u7f13\u5b58",id:"\u524d\u7aef\u5e94\u7528\u4e2d\u7684-http-\u7f13\u5b58",level:2},{value:"webpack\u4e2d\u7684hash\u6a21\u5f0f",id:"webpack\u4e2d\u7684hash\u6a21\u5f0f",level:2},{value:"hash",id:"hash",level:3},{value:"chunkhash",id:"chunkhash",level:3},{value:"contenthash",id:"contenthash",level:3}],c={toc:p};function h(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u524d\u7aef\u5e94\u7528\u4e2d\u7684-http-\u7f13\u5b58"},"\u524d\u7aef\u5e94\u7528\u4e2d\u7684 http \u7f13\u5b58"),(0,s.kt)("p",null,"\u5f53\u4e0b\u6d41\u884c\u6846\u67b6\u591a\u4e3a\u5355\u9875\u5e94\u7528\uff0c\u5373\u5e94\u7528\u7531\u4e00\u4e2a HTML \u6587\u4ef6\u7ec4\u6210\uff0c\u9875\u9762\u4e4b\u95f4\u7684\u8df3\u8f6c\u901a\u8fc7\u5f02\u6b65\u52a0\u8f7djs\u7b49\u8d44\u6e90\u6587\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\u6e32\u67d3\uff0c\u6bd4\u5982\u5f53\u6211\u4eec\u8bbf\u95ee\u4e00\u4e2a\u5355\u9875\u5e94\u7528\u7684\u9996\u9875\uff0c\u6d4f\u89c8\u5668\u6700\u5148\u52a0\u8f7d\u5176 HTML \u6587\u4ef6\uff0c\u540e\u7eed\u53bb\u7ee7\u7eed\u52a0\u8f7d\u4e0b\u4e00\u4e2a\u9875\u9762\u6240\u9700\u7684\u8d44\u6e90"),(0,s.kt)("p",null,"\u5728\u4e0a\u8ff0\u8fc7\u7a0b\u4e2d\uff0c\u8fdb\u884c\u591a\u6b21\u64cd\u4f5c\u6211\u4eec\u4f1a\u53d1\u73b0\u8fdb\u884c",(0,s.kt)("inlineCode",{parentName:"p"},"\u5237\u65b0\u9875\u9762"),"\u6216\u8005",(0,s.kt)("inlineCode",{parentName:"p"},"\u518d\u6b21\u8bbf\u95ee"),"\u65f6\uff0c\u5927\u591a\u6570\u8d44\u6e90\u90fd\u547d\u4e2d\u4e86",(0,s.kt)("strong",{parentName:"p"},"\u5f3a\u7f13\u5b58"),", \u4f46\u662f\u6700\u5148\u52a0\u8f7d\u7684 HTML \u8d70\u4e86",(0,s.kt)("strong",{parentName:"p"},"\u534f\u5546\u7f13\u5b58")),(0,s.kt)("p",null,"\u5176\u539f\u56e0\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"js\u3001css")," \u7b49\u8d44\u6e90\u7ecf\u8fc7\u50cf ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack")," \u8fd9\u79cd\u6253\u5305\u5de5\u5177\u6253\u5305\u540e\u4f1a\u81ea\u52a8\u751f\u6210 ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," \u6587\u4ef6\u540d, \u6bcf\u6b21\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\u540e\uff0c\u53d1\u751f\u53d8\u5316\u7684\u8d44\u6e90 hash \u540d\u4f1a\u66f4\u65b0\uff0c\u6d4f\u89c8\u5668\u4f1a\u5f53\u505a\u4e00\u4e2a\u65b0\u7684\u8d44\u6e90\u53bb\u8bf7\u6c42\u670d\u52a1\u5668\uff0c\u82e5\u6ca1\u6709\u66f4\u65b0\u7684\u8d44\u6e90\u4f1a\u4f18\u5148\u8bfb\u53d6\u6d4f\u89c8\u5668\u7f13\u5b58"),(0,s.kt)("p",null,"HTML\u6587\u4ef6\u540d\u4e0d\u4f1a\u6539\u53d8\uff0c\u6d4f\u89c8\u5668\u6bcf\u6b21\u52a0\u8f7d\u65f6\u90fd\u5e94\u8be5\u5411\u670d\u52a1\u5668\u8be2\u95ee\u662f\u5426\u66f4\u65b0\uff0c\u5426\u5219\u4f1a\u56e0\u4e3a\u8bfb\u53d6\u7f13\u5b58\u6587\u4ef6\u51fa\u73b0\u5f02\u5e38\u95ee\u9898\uff08\u82e5\u65e7\u8d44\u6e90\u88ab\u5220\u9664\u5219\u9875\u9762\u7a7a\u767d\u4fdd\u5b58\uff0c\u82e5\u8bfb\u53d6\u65e7\u8d44\u6e90\u5219\u5e94\u7528\u4e0d\u66f4\u65b0\uff09"),(0,s.kt)("p",null,"\u7efc\u4e0a\u6211\u4eec\u53ef\u4ee5\u603b\u7ed3\u51fa\u5982\u4e0b\u7f13\u5b58\u65b9\u6848\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u9891\u7e41\u53d8\u52a8\u7684\u8d44\u6e90\uff0c\u5982 HTML , \u4f7f\u7528",(0,s.kt)("strong",{parentName:"li"},"\u534f\u5546\u7f13\u5b58")),(0,s.kt)("li",{parentName:"ul"},"js\u3001css\u3001\u56fe\u7247\u7b49\u8d44\u6e90\u4f7f\u7528",(0,s.kt)("strong",{parentName:"li"},"\u5f3a\u7f13\u5b58"),"\uff0c\u4e14\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"hash")," \u547d\u540d")),(0,s.kt)("p",null,"\u5728\u4e00\u4e9b\u8001\u9879\u76ee\u4e2d\uff0c\u6bd4\u5982\u4f7f\u7528jQuery\u7684\u9879\u76ee\uff0c\u6211\u4eec\u52a0\u8f7d\u8d44\u6e90\u6587\u4ef6\u4e00\u822c\u90fd\u662f\u901a\u8fc7\u5728 HTML \u4e2d\u76f4\u63a5\u5f15\u5165\uff0c\u5e76\u52a0\u4e0a\u65f6\u95f4\u6233\u6216\u7248\u672c\u53f7\u4ee3\u7801\uff0c\u6bd4\u5982"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./test.js?ver=1.0"><\/script>\n')),(0,s.kt)("p",null,"\u7531\u4e8e\u6d4f\u89c8\u5668\u4f1a\u7f13\u5b58\u4e4b\u524d\u7684js\u3001css\u7248\u672c\uff0c\u901a\u8fc7",(0,s.kt)("inlineCode",{parentName:"p"},"\u65f6\u95f4\u6233"),"\u6216\u8005",(0,s.kt)("inlineCode",{parentName:"p"},"\u7248\u672c\u53f7"),"\u8fd9\u79cd\u7c7b\u4f3c",(0,s.kt)("inlineCode",{parentName:"p"},"hash\u503c"),"\u7684\u65b9\u5f0f\u53ef\u4ee5\u8ba9\u6d4f\u89c8\u5668\u52a0\u8f7d\u6700\u65b0\u7684\u8d44\u6e90\u7248\u672c"),(0,s.kt)("p",null,"\u90a3\u4e48\u9488\u5bf9 HTML \u6587\u4ef6\u6211\u4eec\u662f\u5982\u4f55\u8ba9\u4ed6\u8d70\u534f\u5546\u7f13\u5b58\u7684\u5462\uff0c\u65e2\u7136\u60f3\u8d70\u534f\u5546\u7f13\u5b58\uff0c\u90a3\u5c31\u5fc5\u987b\u5148",(0,s.kt)("strong",{parentName:"p"},"\u8ba9\u5f3a\u7f13\u5b58\u5931\u6548"),"\uff0c\u56e0\u6b64\u53ef\u4ee5\u8bbe\u7f6e\u670d\u52a1\u5668\u54cd\u5e94\u62a5\u5934\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"Cache-Control: max-age=0\nLast-Modified: Sat, 04 Sep 2021 08:59:40 GMT\n")),(0,s.kt)("p",null,"\u8fd9\u6837\u57280\u79d2\u8d44\u6e90\u5931\u6548\u7684\u65f6\u5019\u5c31\u53ef\u4ee5\u89e6\u53d1\u534f\u5546\u7f13\u5b58\u7684\u6807\u8bc6",(0,s.kt)("inlineCode",{parentName:"p"},"last-modified"),", \u8fd9\u6837\u5c31\u53ef\u4ee5\u786e\u4fdd\u6bcf\u6b21\u8bbf\u95ee\u52a0\u8f7d\u7684HTML\u90fd\u662f\u6700\u65b0\u7684\uff0c\u9632\u6b62\u88ab\u5f3a\u7f13\u5b58"),(0,s.kt)("h2",{id:"webpack\u4e2d\u7684hash\u6a21\u5f0f"},"webpack\u4e2d\u7684hash\u6a21\u5f0f"),(0,s.kt)("p",null,"\u5728webpack\u4e2dhash\u53ef\u4ee5\u5206\u4e3a\u4e09\u79cd\u7c7b\u578b\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"hash"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"chunkhash"),"\u548c",(0,s.kt)("inlineCode",{parentName:"p"},"contenthash")),(0,s.kt)("h3",{id:"hash"},"hash"),(0,s.kt)("p",null,"\u5c5e\u4e8e",(0,s.kt)("strong",{parentName:"p"},"\u9879\u76ee\u7ea7\u522b"),"\u7684 hash\uff0c\u6574\u4e2a\u9879\u76ee\u4e2d\u53ea\u8981\u6709\u6587\u4ef6\u6539\u53d8\uff0c\u8be5hash\u5c31\u4f1a\u53d8\u5316\uff0c\u5e76\u4e14\u6240\u6709\u6587\u4ef6\u90fd\u5171\u7528\u8fd9\u4e2a hash \u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {    \n  output: {\n    path: config.build.assetsRoot,\n    filename: utils.assetsPath('js/[name].[hash:8].js'),\n    chunkFilename: utils.assetsPath('js/[name].[hash:8].min.js'),\n  },\n  plugins:[ \n    // \u5c06 js \u4e2d\u5f15\u5165\u7684 css \u8fdb\u884c\u5206\u79bb\n    new ExtractTextPlugin({ filename: utils.assetsPath('css/[name].[hash:8].css'), allChunks: true }),\n  ]\n}\n")),(0,s.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u5904\u7406\u7684\u8bdd\uff0c\u6700\u7ec8\u6253\u5305\u8f93\u51fa\u7684\u8d44\u6e90\u6587\u4ef6\u540d",(0,s.kt)("inlineCode",{parentName:"p"},"hash"),"\u90fd\u4e00\u6837\uff0c\u6309\u7167\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u7b56\u7565\uff0c\u6d4f\u89c8\u5668\u4f1a\u91cd\u65b0\u8bf7\u6c42\u670d\u52a1\u5668\u52a0\u8f7d\u6240\u6709\u8d44\u6e90\uff0c\u8fd9\u6837\u5c31\u4f1a\u5bfc\u81f4\u6709\u7684\u6587\u4ef6\u6ca1\u6709\u6539\u52a8\u4f46\u662f\u4e5f\u53bb\u52a0\u8f7d\u4e86\uff0c\u9020\u6210\u4e86\u8d44\u6e90\u7684\u6d6a\u8d39\uff0c\u6240\u4ee5\u4e0d\u5efa\u8bae\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f"),(0,s.kt)("h3",{id:"chunkhash"},"chunkhash"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"chunkhash")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," \u4e0d\u4e00\u6837\uff0c\u5b83\u662f",(0,s.kt)("strong",{parentName:"p"},"\u5165\u53e3\u6587\u4ef6\u7ea7\u522b"),"\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"hash"),"\uff0c\u4f1a\u6839\u636e\u5165\u53e3\u6587\u4ef6\u5373",(0,s.kt)("inlineCode",{parentName:"p"},"entry"),"\u7684\u4f9d\u8d56\u8fdb\u884c\u6253\u5305\u3002\u6211\u4eec\u53ef\u4ee5\u501f\u52a9 ",(0,s.kt)("inlineCode",{parentName:"p"},"CommonsChunkPlugin")," \u63d2\u4ef6\u8fdb\u884c\u516c\u5171\u6a21\u5757\u7684\u63d0\u53d6\uff0c\u4ece\u800c\u907f\u514d\u4e00\u4e9b\u516c\u5171\u5e93\u3001\u63d2\u4ef6\u88ab\u6253\u5305\u5230\u5165\u53e3\u6587\u4ef6\u4e2d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  entry: utils.getEntries(),\n  output: {\n    path: config.build.assetsRoot,\n    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),\n    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].min.js'),\n  },\n  plugins:[ \n    // \u5c06 js \u4e2d\u5f15\u5165\u7684 css \u8fdb\u884c\u5206\u79bb\n    new ExtractTextPlugin({ filename: utils.assetsPath('css/[name].[chunkhash:8].css') }),\n    // \u5206\u79bb\u516c\u5171 js \u5230 vendor \u4e2d\n    new webpack.optimize.CommonsChunkPlugin({\n      name: 'vendor', //\u6587\u4ef6\u540d\n      minChunks: function(module, count) {\n        // \u58f0\u660e\u516c\u5171\u7684\u6a21\u5757\u6765\u81ea node_modules \u6587\u4ef6\u5939\uff0c\u628a node_modules\u3001common \u6587\u4ef6\u5939\u4ee5\u53ca\u4f7f\u7528\u4e862\u6b21\u4f9d\u8d56\u7684\u90fd\u62bd\u51fa\u6765\n        return (\n          module.resource &&\n          (/\\.js$/.test(module.resource) || /\\.vue$/.test(module.resource)) &&\n          (module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0 || module.resource.indexOf(path.join(__dirname, '../src/common')) === 0 || count >= 2)\n        );\n      }\n    }),\n    // \u5c06\u8fd0\u884c\u65f6\u4ee3\u7801\u63d0\u53d6\u5230\u5355\u72ec\u7684 manifest \u6587\u4ef6\u4e2d\uff0c\u9632\u6b62\u5176\u5f71\u54cd vendor.js\n    new webpack.optimize.CommonsChunkPlugin({\n      name: 'runtime',\n      chunks: ['vendor']\n    })\n  ]\n}\n")),(0,s.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u5c06\u9700\u8981\u62bd\u79bb\u7684\u516c\u5171\u6a21\u5757\u63d0\u53d6\u5230\u4e86",(0,s.kt)("inlineCode",{parentName:"p"},"vendor.js"),", \u540c\u65f6\u5c06",(0,s.kt)("inlineCode",{parentName:"p"},"webpack"),"\u8fd0\u884c\u6587\u4ef6\u63d0\u53d6\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"runtime.js"),"\u4e2d\u3002\u8fd9\u4e9b\u516c\u5171\u6a21\u5757\u9664\u4e86\u5347\u7ea7\u7248\u672c\u4e00\u822c\u4e0d\u4f1a\u6539\u52a8\uff0c\u6240\u4ee5\u5e0c\u671b\u6d4f\u89c8\u5668\u5c06\u4ed6\u4eec\u5b58\u5230\u5f3a\u7f13\u5b58\u91cc\uff0c\u4e0d\u53d7\u5176\u4ed6\u4e1a\u52a1\u6a21\u5757\u7684\u4fee\u6539\u5bfc\u81f4\u6587\u4ef6",(0,s.kt)("inlineCode",{parentName:"p"},"chunkhash"),"\u540d\u79f0\u53d8\u52a8\u7684\u5f71\u54cd"),(0,s.kt)("p",null,"\u8fd9\u6837\u6700\u7ec8\u6253\u5305\u7684\u6a21\u5757\u5177\u5907\u4e0d\u540c\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"chunkhash")," \u540d\u79f0\uff0c\u91cd\u65b0\u6253\u5305\u53ea\u4f1a\u5f71\u54cd\u6709\u53d8\u52a8\u7684\u6a21\u5757\u91cd\u65b0\u751f\u6210 ",(0,s.kt)("inlineCode",{parentName:"p"},"chunkhash")),(0,s.kt)("h3",{id:"contenthash"},"contenthash"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"contenthash")," \u5c5e\u4e8e\u6587\u4ef6",(0,s.kt)("strong",{parentName:"p"},"\u5185\u5bb9\u7ea7\u522b"),"\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"hash"),", \u4f1a\u6839\u636e\u6587\u4ef6\u5185\u5bb9\u7684\u53d8\u5316\u800c\u53d8\u5316"),(0,s.kt)("p",null,"\u6bd4\u5982\u6709\u4e00\u4e2a demo.js \u4e2d\u5355\u72ec\u5f15\u7528\u4e86 demo.css\uff0c\u90a3\u5f53 demo.js \u6587\u4ef6\u88ab\u4fee\u6539\u540e\uff0c\u5c31\u7b97 demo.css \u6587\u4ef6\u6ca1\u6709\u88ab\u4fee\u6539\uff0c\u7531\u4e8e\u6a21\u5757\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u540c\u6837\u4e5f\u4f1a\u5bfc\u81f4 demo.css \u4e5f\u88ab\u91cd\u590d\u6784\u5efa\u3002\u8fd9\u4e2a\u573a\u666f\u9488\u5bf9 css \u4f7f\u7528 contenthash \u5c31\u53ef\u4ee5\u5b9e\u73b0\u5185\u5bb9\u4e0d\u53d8\u5c31\u4e0d\u88ab\u91cd\u590d\u6784\u5efa\u7684\u6548\u679c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {    \n  output: {\n    path: config.build.assetsRoot,\n    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),\n    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].min.js'),\n  },\n  plugins:[ \n      // \u5c06 js \u4e2d\u5f15\u5165\u7684 css \u8fdb\u884c\u5206\u79bb\uff0c\u4f7f\u7528 contenthash \u5224\u65ad\u5185\u5bb9\u7684\u6539\u53d8\n      new ExtractTextPlugin({ filename: utils.assetsPath('css/[name].[contenthash:8].css'), allChunks: true }),\n  ]\n}\n")),(0,s.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"module"),"\u4e2d\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"loader"),"\u8bbe\u7f6e",(0,s.kt)("strong",{parentName:"p"},"\u56fe\u7247"),"\u6216\u8005",(0,s.kt)("strong",{parentName:"p"},"\u5b57\u4f53"),"\u7684\u6587\u4ef6\u540d\u65f6\uff0c\u5982\u679c\u5305\u542b",(0,s.kt)("inlineCode",{parentName:"p"},"hash"),"\u6216\u8005",(0,s.kt)("inlineCode",{parentName:"p"},"chunkhash"),"\u90fd\u662f",(0,s.kt)("strong",{parentName:"p"},"\u4e0d\u751f\u6548"),"\u7684\uff0c\u9ed8\u8ba4\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"contenthash"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  module: {\n    rules: [{\n      test: /\\.(png|jpe?g|gif|svg)(\\?.*)?$/,\n      loader: 'url-loader',\n      options: {\n        limit: 5,\n        name: utils.assetsPath('img/[name].[hash:8].[ext]') // \u8bbe\u7f6e\u7684 hash \u503c\u4e0d\u4f1a\u751f\u6548\n      }\n    },\n    {\n      test: /\\.(woff2?|eot|ttf|otf)(\\?.*)?$/,\n      loader: 'url-loader',\n      options: {\n        limit: 2,\n        name: utils.assetsPath('fonts/[name].[hash:8].[ext]') // \u8bbe\u7f6e\u7684 hash \u503c\u4e0d\u4f1a\u751f\u6548\n      }\n    }]\n  }\n}\n")),(0,s.kt)("p",null,"\u7efc\u4e0a\u6211\u4eec\u77e5\u9053\u4e86\uff0c\u5408\u7406\u7684\u7ec4\u5408\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"chunkhash")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"contenthash")," \u624d\u53ef\u4ee5\u6700\u5927\u5316\u5229\u7528",(0,s.kt)("strong",{parentName:"p"},"\u5f3a\u7f13\u5b58"),"\u7684\u4f18\u52bf\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u8d44\u6e90\u91cd\u590d\u8bf7\u6c42\uff0c\u63d0\u5347\u9875\u9762\u52a0\u8f7d\u901f\u5ea6"))}h.isMDXComponent=!0}}]);