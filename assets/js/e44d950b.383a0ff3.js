"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,d=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={id:"memory-cache-disk-cache",title:"Memory Cache \u4e0e Disk Cache",tags:["cache","\u7f13\u5b58"]},c=void 0,o={unversionedId:"network/cache/memory-cache-disk-cache",id:"network/cache/memory-cache-disk-cache",title:"Memory Cache \u4e0e Disk Cache",description:"Memory Cache",source:"@site/docs/network/cache/memory-cache-disk-cache.md",sourceDirName:"network/cache",slug:"/network/cache/memory-cache-disk-cache",permalink:"/myblog/docs/network/cache/memory-cache-disk-cache",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/network/cache/memory-cache-disk-cache.md",tags:[{label:"cache",permalink:"/myblog/docs/tags/cache"},{label:"\u7f13\u5b58",permalink:"/myblog/docs/tags/\u7f13\u5b58"}],version:"current",frontMatter:{id:"memory-cache-disk-cache",title:"Memory Cache \u4e0e Disk Cache",tags:["cache","\u7f13\u5b58"]},sidebar:"network",previous:{title:"chrome\u4e2d\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f\u4e0ehttp\u7f13\u5b58\u7684\u5173\u7cfb",permalink:"/myblog/docs/network/cache/browser-http-cache"},next:{title:"\u7f13\u5b58\u76f8\u5173\u7b97\u6cd5",permalink:"/myblog/docs/network/cache/cache-algorithm"}},i={},p=[{value:"Memory Cache",id:"memory-cache",level:2},{value:"Disk Cache",id:"disk-cache",level:2},{value:"\u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236",id:"\u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236",level:2},{value:"\u7f13\u5b58\u83b7\u53d6\u987a\u5e8f",id:"\u7f13\u5b58\u83b7\u53d6\u987a\u5e8f",level:3},{value:"\u7f13\u5b58\u5b58\u50a8\u4f18\u5148\u7ea7",id:"\u7f13\u5b58\u5b58\u50a8\u4f18\u5148\u7ea7",level:3},{value:"Preload \u548c Prefetch",id:"preload-\u548c-prefetch",level:3},{value:"Preload",id:"preload",level:4},{value:"Prefetch",id:"prefetch",level:4}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"memory-cache"},"Memory Cache"),(0,a.kt)("p",null,"\u5b58\u50a8\u5728\u6d4f\u89c8\u5668\u5185\u5b58\u4e2d"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u901f\u5ea6\u5feb"),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u9ad8"),(0,a.kt)("li",{parentName:"ul"},"\u4ece\u5185\u5b58\u4e2d\u83b7\u53d6\u8d44\u6e90\u8017\u65f6\u4e3a 0ms")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u77ed\uff0c\u7f51\u9875\u5173\u95ed\u540e\u5185\u5b58\u5c31\u4f1a\u91ca\u653e"),(0,a.kt)("li",{parentName:"ul"},"\u53d7\u9650\u5236\u4e8e\u8ba1\u7b97\u673a\u5185\u5b58\u5927\u5c0f")),(0,a.kt)("h2",{id:"disk-cache"},"Disk Cache"),(0,a.kt)("p",null,"\u5b58\u50a8\u5728\u8ba1\u7b97\u673a\u786c\u76d8\u4e2d\uff0c\u4f1a\u6839\u636e\u4fdd\u5b58\u4e0b\u6765\u8d44\u6e90\u7684HTTP\u9996\u90e8\u5b57\u6bb5\u5224\u65ad\u662f\u5426\u9700\u8981\u91cd\u65b0\u8bf7\u6c42\uff0c\u5982\u679c\u91cd\u65b0\u8bf7\u6c42\u5c31\u662f\u5f3a\u7f13\u5b58\u5931\u6548\u6d41\u7a0b\uff0c\u53cd\u4e4b\u662f\u751f\u6548\u6d41\u7a0b"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u957f\uff0c\u4e0d\u89e6\u53d1\u5220\u9664\u64cd\u4f5c\u5c31\u4e00\u76f4\u5b58\u5728")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8d44\u6e90\u7684\u901f\u5ea6\u76f8\u5bf9\u5185\u5b58\u7f13\u5b58\u8f83\u6162")),(0,a.kt)("h2",{id:"\u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236"},"\u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236"),(0,a.kt)("p",null,"\u4e4b\u524d\u7684\u6587\u7ae0\u6211\u4eec\u5b66\u4e60\u4e86 http \u7f13\u5b58\uff0c\u5305\u62ec\u5f3a\u7f13\u5b58\u3001\u534f\u5546\u7f13\u5b58\u7b49\uff0c\u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236\u5305\u62echttp\u7f13\u5b58\uff0c\u4e0b\u6587\u4e3b\u8981\u5b66\u4e60 Memory Cache\u3001Disk Cache\u76f8\u5173\u5185\u5bb9"),(0,a.kt)("h3",{id:"\u7f13\u5b58\u83b7\u53d6\u987a\u5e8f"},"\u7f13\u5b58\u83b7\u53d6\u987a\u5e8f"),(0,a.kt)("p",null,"\u6309\u7167\u7f13\u5b58\u987a\u5e8f\uff0c\u5f53\u4e00\u4e2a\u8d44\u6e90\u51c6\u5907\u52a0\u8f7d\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u6839\u636e",(0,a.kt)("strong",{parentName:"p"},"\u4e09\u7ea7\u7f13\u5b58\u539f\u7406"),"\u8fdb\u884c\u5224\u65ad"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u4f1a\u7387\u5148\u67e5\u627e\u5185\u5b58\u7f13\u5b58\uff0c\u5982\u679c\u8d44\u6e90\u5728\u5185\u5b58\u4e2d\u5b58\u5728\uff0c\u5c31\u76f4\u63a5\u4ece\u5185\u5b58\u4e2d\u52a0\u8f7d"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5185\u5b58\u4e2d\u4e0d\u5b58\u5728\uff0c\u7ee7\u7eed\u53bb\u78c1\u76d8\u4e2d\u67e5\u627e\uff0c\u82e5\u627e\u5230\u4ece\u78c1\u76d8\u4e2d\u83b7\u53d6"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u78c1\u76d8\u4e2d\u4e5f\u4e0d\u5b58\u5728\uff0c\u5219\u8fdb\u884c\u7f51\u7edc\u8bf7\u6c42\uff0c\u5c06\u8bf7\u6c42\u540e\u7b26\u5408\u6761\u4ef6\u7684\u8d44\u6e90\u5b58\u5165\u5185\u5b58\u548c\u786c\u76d8\u4e2d")),(0,a.kt)("h3",{id:"\u7f13\u5b58\u5b58\u50a8\u4f18\u5148\u7ea7"},"\u7f13\u5b58\u5b58\u50a8\u4f18\u5148\u7ea7"),(0,a.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u77e5\u9053\u4e86\u7f13\u5b58\u8d44\u6e90\u7684\u83b7\u53d6\u987a\u5e8f\uff0c\u90a3\u4e48\u6211\u4eec\u8fd8\u9700\u8981\u77e5\u9053\u6d4f\u89c8\u5668\u5224\u65ad\u8d44\u6e90\u5b58\u5165\u5185\u5b58\u7f13\u5b58\u6216\u78c1\u76d8\u7f13\u5b58\u7684\u4f9d\u636e"),(0,a.kt)("p",null,"\u78c1\u76d8\u7f13\u5b58\u4f1a\u5c06\u547d\u4e2d\u5f3a\u7f13\u5b58\u7684js\u3001css\u3001\u56fe\u7247\u7b49\u8d44\u6e90\u90fd\u6536\u6389\u3002\u4e4b\u524d\u8bf4\u8fc7\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"base 64")," \u56fe\u7247\u7279\u6b8a\uff0c\u6c38\u8fdc\u4ece\u5185\u5b58\u52a0\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="zh-CN">\n  <head>\n    <title>Demo</title>\n  </head>\n  <body>\n    <div id="cache">\u5f02\u6b65\u52a0\u8f7d\u7684 JS \u8d44\u6e90\u6ca1\u6709\u5b58\u50a8\u5230\u5185\u5b58\u4e2d</div>\n    <script>\n      window.onload = function () {\n        setTimeout(function () {\n          var s = document.createElement("script");\n          s.type = "text/javascript";\n          s.async = true;\n          s.src = "https://i.snssdk.com/slardar/sdk.js";\n          var x = document.getElementsByTagName("script")[0];\n          x.parentNode.insertBefore(s, x);\n        }, 2000);\n      };\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"\u5185\u5b58\u7f13\u5b58\u7531\u4e8e\u53d7\u9650\u4e8e\u8ba1\u7b97\u673a\u5185\u5b58\u5927\u5c0f\uff0c\u9700\u8981\u9009\u62e9\u5408\u9002\u7684\u8d44\u6e90\u5b58\u50a8\uff0c\u5728Chrome\u7684\u63a7\u5236\u53f0 network \u9762\u677f\u4e2d\u7684 Initiator \u5217\uff08\u8d44\u6e90\u52a0\u8f7d\u53d1\u8d77\u7684\u4f4d\u7f6e\uff09\uff0c\u5f02\u6b65\u65f6\u95f4\u4e3a 2s \u65f6\u4f1a\u53d1\u73b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u5728",(0,a.kt)("strong",{parentName:"li"},"HTML\u6e32\u67d3\u9636\u6bb5\u5c31\u88ab\u52a0\u8f7d\u5185\u5bb9"),"\u4f1a\u88ab",(0,a.kt)("strong",{parentName:"li"},"\u5185\u5b58\u7f13\u5b58"),"\u547d\u4e2d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u52a0\u8f7d"),"\u7684\u8d44\u6e90\u6ca1\u6709\u88ab\u5185\u5b58\u7f13\u5b58\u52a0\u8f7d\uff0c\u88ab",(0,a.kt)("strong",{parentName:"li"},"\u78c1\u76d8\u7f13\u5b58"),"\u547d\u4e2d")),(0,a.kt)("p",null,"but, \u8fd9\u4e0d\u662f\u6700\u540e\u7684\u7ed3\u8bba\uff0c\u5f53\u6211\u4eec\u628a\u5f02\u6b65\u65f6\u95f4\u63a7\u5236\u5230 1s \u7684\u8bdd\uff0c\u4f1a\u53d1\u73b0\u5373\u4f7f\u662f\u5f02\u6b65\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"\u8d44\u6e90\u8fd8\u662f\u4f1a\u88ab\u5185\u5b58\u7f13\u5b58\u3002\u8fd9\u662f\u56e0\u4e3a\u5f02\u6b65",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"\u8d44\u6e90\u52a0\u8f7d\u65f6\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u6e32\u67d3\u8fdb\u7a0b\u8fd8\u672a\u7ed3\u675f"),"(\u5f02\u6b65\u8d44\u6e90\u7684\u52a0\u8f7d\u665a\u4e8e\u6d4f\u89c8\u5668\u5185\u5b58\u7684\u751f\u6548\u65f6\u95f4)\uff0c\u8be5\u8fdb\u7a0b\u6ca1\u6709\u7ed3\u675f\u5c31\u6709\u5b58\u5165\u5185\u5b58\u7684\u53ef\u80fd"),(0,a.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u5185\u5b58\u7f13\u5b58\u751f\u6548\u7684\u524d\u63d0\u4e0b\uff0cjs\u8d44\u6e90\u7684\u6267\u884c\u52a0\u8f7d\u65f6\u95f4\u4f1a\u5f71\u54cd\u5176\u662f\u5426\u88ab\u5185\u5b58\u7f13\u5b58"),(0,a.kt)("p",null,"\u56fe\u7247\u8d44\u6e90(\u9664\u4e86 base 64)\uff0c\u548c js \u8d44\u6e90\u6bd4\u8f83\u76f8\u4f3c\uff0ccss\u8d44\u6e90\u6bd4\u8f83\u4e0d\u540c\uff0c\u88ab\u78c1\u76d8\u7f13\u5b58\u7684\u6982\u7387\u6bd4\u5185\u5b58\u7f13\u5b58\u7684\u6982\u7387\u5927\u5f88\u591a\uff0c\u7f51\u4e0a\u6709\u4eba\u89e3\u91ca\u662fcss\u52a0\u8f7d\u4e00\u6b21\u5c31\u53ef\u6e32\u67d3\u5e76\u4e14\u4e0d\u4f1a\u9891\u7e41\u8bfb\u53d6\uff0c\u4e0d\u9002\u5408\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\uff0cjs\u811a\u672c\u968f\u65f6\u53ef\u80fd\u4f1a\u6267\u884c\uff0cjs\u8d44\u6e90\u5982\u679c\u5728\u78c1\u76d8\u91cc\uff0c\u6267\u884c\u7684\u65f6\u5019\u9700\u8981\u4ece\u78c1\u76d8\u53d6\u5230\u5185\u5b58\uff0cIO\u5f00\u9500\u8f83\u5927\uff0c\u53ef\u80fd\u5bfc\u81f4\u6d4f\u89c8\u5668\u5931\u53bb\u54cd\u5e94"),(0,a.kt)("h3",{id:"preload-\u548c-prefetch"},"Preload \u548c Prefetch"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Preload")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Prefetch")," \u8fd9\u4fe9\u4e5f\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u6d4f\u89c8\u5668\u7f13\u5b58"),(0,a.kt)("h4",{id:"preload"},"Preload"),(0,a.kt)("p",null,"\u9884\u52a0\u8f7d\uff0c\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"link\u6807\u7b7e"),"\u4e2d\uff0c\u6307\u660e\u54ea\u4e9b\u8d44\u6e90\u662f\u5728\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u540e\u5373\u523b\u9700\u8981\u7684\uff0c\u6d4f\u89c8\u5668\u4f1a\u5728\u4e3b\u6e32\u67d3\u673a\u5236\u4ecb\u5165\u4e4b\u524d\u9884\u5148\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\uff0c\u4e0d\u963b\u585e\u9875\u9762\u7684\u521d\u6b65\u6e32\u67d3"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Preload")," \u9884\u52a0\u8f7d\u8d44\u6e90\u540e\uff0c\u8fd8\u662f\u548c\u8d44\u6e90\u7684\u6e32\u67d3\u65f6\u673a\u6709\u5173\uff0c\u6e32\u67d3\u673a\u5236\u672a\u4ecb\u5165\u524d\uff0c\u8d44\u6e90\u52a0\u8f7d\u4e0d\u4f1a\u88ab\u5185\u5b58\u7f13\u5b58"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="preload" href="https://i.snssdk.com/slardar/sdk.js" as="script" />\n')),(0,a.kt)("h4",{id:"prefetch"},"Prefetch"),(0,a.kt)("p",null,"\u9884\u63d0\u53d6\uff0c\u544a\u77e5\u6d4f\u89c8\u5668\u52a0\u8f7d\u4e0b\u4e00\u9875\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u8d44\u6e90\uff0c\u6d4f\u89c8\u5668\u4f1a\u5229\u7528\u7a7a\u95f2\u72b6\u6001\u8fdb\u884c\u4e0b\u8f7d\u5e76\u5c06\u8d44\u6e90\u5b58\u50a8\u5230\u7f13\u5b58\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="prefetch" href="https://i.snssdk.com/slardar/sdk.js" />\n')),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"prefetch")," \u52a0\u8f7d\u7684\u8d44\u6e90\uff0c\u5237\u65b0\u9875\u9762\u65f6\u5927\u6982\u7387\u4f1a\u4ece\u78c1\u76d8\u7f13\u5b58\u4e2d\u8bfb\u53d6\uff0c\u5982\u679c\u8df3\u8f6c\u5230\u4f7f\u7528\u5b83\u7684\u9875\u9762\uff0c\u5219\u4f1a\u76f4\u63a5\u4ece\u78c1\u76d8\u4e2d\u52a0\u8f7d\u8d44\u6e90"))}m.isMDXComponent=!0}}]);