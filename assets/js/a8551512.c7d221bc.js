"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=u(n),d=a,s=k["".concat(p,".").concat(d)]||k[d]||c[d]||i;return n?r.createElement(s,l(l({ref:t},m),{},{components:n})):r.createElement(s,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l="HTTP \u534f\u8bae\u7684\u53d1\u5c55\u5386\u53f2",o={unversionedId:"network/http/http-history",id:"network/http/http-history",title:"HTTP \u534f\u8bae\u7684\u53d1\u5c55\u5386\u53f2",description:"HTTP/0.9",source:"@site/docs/network/http/http-history.md",sourceDirName:"network/http",slug:"/network/http/http-history",permalink:"/myblog/docs/network/http/http-history",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/network/http/http-history.md",tags:[],version:"current",frontMatter:{},sidebar:"network",next:{title:"\u7f51\u7edc\u534f\u8bae\u5206\u5c42",permalink:"/myblog/docs/network/http/OSI"}},p={},u=[{value:"HTTP/0.9",id:"http09",level:2},{value:"HTTP/1.0",id:"http10",level:2},{value:"HTTP/1.1",id:"http11",level:2},{value:"HTTP2",id:"http2",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-\u534f\u8bae\u7684\u53d1\u5c55\u5386\u53f2"},"HTTP \u534f\u8bae\u7684\u53d1\u5c55\u5386\u53f2"),(0,a.kt)("h2",{id:"http09"},"HTTP/0.9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709\u4e00\u4e2a\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"HEADER")," \u7b49\u63cf\u8ff0\u6570\u636e\u7684\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u53d1\u9001\u5b8c\u6bd5\uff0c\u5c31\u5173\u95ed ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," \u8fde\u63a5")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"TCP")," \u8fde\u63a5\u4e0d\u662f\u540c\u4e00\u4e2a\u6982\u5ff5, \u540c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"TCP")," \u8fde\u63a5\u4e2d\u53ef\u4ee5\u53d1\u9001\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42\uff08\u6b64\u7248\u672c\u4e0d\u652f\u6301\uff09")),(0,a.kt)("h2",{id:"http10"},"HTTP/1.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0\u4e86\u5f88\u591a\u547d\u4ee4(\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"POST"),")"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"status code")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"header")),(0,a.kt)("li",{parentName:"ul"},"\u591a\u5b57\u7b26\u96c6\u652f\u6301\u3001\u591a\u90e8\u5206\u53d1\u9001\u3001\u6743\u9650\u3001\u7f13\u5b58\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP"),"\u8bf7\u6c42\u5c31\u8981\u53bb\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"TCP"),"\u8fde\u63a5\uff0c\u521b\u5efa\u5b8c",(0,a.kt)("inlineCode",{parentName:"li"},"TCP"),"\u8fde\u63a5\u4e4b\u540e\u5f85\u670d\u52a1\u7aef\u8fd4\u56de\u5b8c\u5185\u5bb9\u4e4b\u540e\uff0c\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"TCP"),"\u8fde\u63a5\u5c31\u5173\u95ed\u6389\u4e86")),(0,a.kt)("h2",{id:"http11"},"HTTP/1.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6301\u4e45\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"pipeline(\u540c\u4e00\u4e2a\u8fde\u63a5\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42)"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"host")," \u548c\u5176\u4ed6\u4e00\u4e9b\u547d\u4ee4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host"),": \u53ef\u4ee5\u5728\u540c\u4e00\u53f0\u7269\u7406\u670d\u52a1\u5668\u8dd1\u591a\u4e2aweb\u670d\u52a1\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"host"),"\u8fd9\u4e2a\u5b57\u6bb5\u5224\u65ad\u8bf7\u6c42\u4e0d\u540c\u7684web\u670d\u52a1\uff0c\u63d0\u9ad8\u7269\u7406\u670d\u52a1\u5668\u6548\u7387")))),(0,a.kt)("h2",{id:"http2"},"HTTP2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u6570\u636e\u4ee5\u4e8c\u8fdb\u5236\u4f20\u8f93(\u5e27)"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u8fde\u63a5\u91cc\u9762\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\u4e0d\u518d\u9700\u8981\u6309\u7167\u987a\u5e8f\u6765"),(0,a.kt)("li",{parentName:"ul"},"\u5934\u4fe1\u606f\u538b\u7f29\u4ee5\u53ca\u63a8\u9001\u7b49\u63d0\u9ad8\u6548\u7387\uff0c\u51cf\u5c11\u5e26\u5bbd\u4f7f\u7528",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5934\u4fe1\u606f\u538b\u7f29: \u5728",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP1.1"),"\u6bcf\u4e00\u6b21\u53d1\u9001\u8bf7\u6c42\u548c\u8fd4\u56de\u8bf7\u6c42\uff0c\u6bcf\u4e00\u6b21",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP"),"\u5934\u90fd\u662f\u9700\u8981\u53d1\u9001\u548c\u8fd4\u56de\u7684, \u8fd9\u90e8\u5206\u5934\u4fe1\u606f\u7684\u4e00\u4e9b\u5b57\u6bb5\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u4fdd\u5b58\uff0c\u5360\u7528\u5e26\u5bbd\u8f83\u5927"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u9001: \u4e4b\u524d",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP"),"\u8bf7\u6c42\u53ea\u80fd\u53d1\u8d77\u8bf7\u6c42\u54cd\u5e94\u8bf7\u6c42\u8fd4\u56de\u5185\u5bb9\uff0c\u5ba2\u6237\u7aef\u662f\u4e3b\u52a8\u65b9\uff0c\u670d\u52a1\u7aef\u662f\u88ab\u52a8\u65b9\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP2"),"\u4e2d\u670d\u52a1\u7aef\u53ef\u4ee5\u4e3b\u52a8\u53d1\u8d77\u6570\u636e\u4f20\u8f93\uff0c\u5b9e\u73b0\u5e76\u884c\u4f20\u8f93\u3002(\u6bd4\u5982\u5728\u8bf7\u6c42",(0,a.kt)("inlineCode",{parentName:"li"},"HTML"),"\u7684\u540c\u65f6\u53ef\u4ee5\u4e3b\u52a8\u628a",(0,a.kt)("inlineCode",{parentName:"li"},"HTML"),"\u4e2d\u5f15\u7528\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"HTML"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"CSS"),"\u6587\u4ef6\u63a8\u9001\u7ed9\u5ba2\u6237\u7aef)")))))}c.isMDXComponent=!0}}]);