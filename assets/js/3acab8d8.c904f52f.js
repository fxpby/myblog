"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=l.createContext({}),c=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,v=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?l.createElement(v,i(i({ref:t},p),{},{components:r})):l.createElement(v,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=r(7462),n=(r(7294),r(3905));const a={id:"memory",title:"\u5185\u5b58\u7ba1\u7406",tags:["\u5185\u5b58"]},i=void 0,o={unversionedId:"javascript/memory",id:"javascript/memory",title:"\u5185\u5b58\u7ba1\u7406",description:"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58",source:"@site/docs/javascript/memory.md",sourceDirName:"javascript",slug:"/javascript/memory",permalink:"/myblog/docs/javascript/memory",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/memory.md",tags:[{label:"\u5185\u5b58",permalink:"/myblog/docs/tags/\u5185\u5b58"}],version:"current",frontMatter:{id:"memory",title:"\u5185\u5b58\u7ba1\u7406",tags:["\u5185\u5b58"]},sidebar:"javascript",next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/myblog/docs/javascript/data-element"}},u={},c=[{value:"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58",id:"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58",level:2},{value:"\u51cf\u5c11\u6d4f\u89c8\u5668\u8d1f\u62c5",id:"\u51cf\u5c11\u6d4f\u89c8\u5668\u8d1f\u62c5",level:3},{value:"Node \u7aef - \u505a\u670d\u52a1",id:"node-\u7aef---\u505a\u670d\u52a1",level:3},{value:"\u5185\u5b58\u7684\u6570\u636e\u5b58\u50a8",id:"\u5185\u5b58\u7684\u6570\u636e\u5b58\u50a8",level:2},{value:"\u6808\u5185\u5b58",id:"\u6808\u5185\u5b58",level:3},{value:"\u5806\u5185\u5b58",id:"\u5806\u5185\u5b58",level:3},{value:"\u5b58\u50a8\u666e\u901a\u7c7b\u578b\u7684\u53d8\u91cf - \u6808\u5185\u5b58",id:"\u5b58\u50a8\u666e\u901a\u7c7b\u578b\u7684\u53d8\u91cf---\u6808\u5185\u5b58",level:3},{value:"\u5b58\u50a8\u5f15\u7528\u7c7b\u578b\u7684\u53d8\u91cf - \u5806\u6808",id:"\u5b58\u50a8\u5f15\u7528\u7c7b\u578b\u7684\u53d8\u91cf---\u5806\u6808",level:3},{value:"V8 \u5185\u5b58\u7684\u7ba1\u7406",id:"v8-\u5185\u5b58\u7684\u7ba1\u7406",level:2},{value:"V8\u5230\u5e95\u6709\u591a\u5927",id:"v8\u5230\u5e95\u6709\u591a\u5927",level:3},{value:"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3",id:"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3",level:3},{value:"\u65b0\u751f\u4ee3",id:"\u65b0\u751f\u4ee3",level:4},{value:"\u8001\u751f\u4ee3",id:"\u8001\u751f\u4ee3",level:4}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58"},"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58"),(0,n.kt)("h3",{id:"\u51cf\u5c11\u6d4f\u89c8\u5668\u8d1f\u62c5"},"\u51cf\u5c11\u6d4f\u89c8\u5668\u8d1f\u62c5"),(0,n.kt)("p",null,"\u5185\u5b58\u8fc7\u5927\u4f1a\u8ba9\u6d4f\u89c8\u5668\u538b\u529b\u8fc7\u5927\uff0c\u5bfc\u81f4\u6d4f\u89c8\u5668\u5361\u987f"),(0,n.kt)("h3",{id:"node-\u7aef---\u505a\u670d\u52a1"},"Node \u7aef - \u505a\u670d\u52a1"),(0,n.kt)("p",null,"\u5185\u5b58\u5982\u679c\u4e0d\u591f\uff0c\u670d\u52a1\u5c31\u4f1a\u4e2d\u65ad"),(0,n.kt)("h2",{id:"\u5185\u5b58\u7684\u6570\u636e\u5b58\u50a8"},"\u5185\u5b58\u7684\u6570\u636e\u5b58\u50a8"),(0,n.kt)("h3",{id:"\u6808\u5185\u5b58"},"\u6808\u5185\u5b58"),(0,n.kt)("p",null,"\u7ebf\u6027\u7684\uff0c\u540e\u8fdb\u5148\u51fa"),(0,n.kt)("h3",{id:"\u5806\u5185\u5b58"},"\u5806\u5185\u5b58"),(0,n.kt)("p",null,"\u975e\u7ebf\u6027\uff0c\u4e0d\u8fde\u7eed\u7684"),(0,n.kt)("h3",{id:"\u5b58\u50a8\u666e\u901a\u7c7b\u578b\u7684\u53d8\u91cf---\u6808\u5185\u5b58"},"\u5b58\u50a8\u666e\u901a\u7c7b\u578b\u7684\u53d8\u91cf - \u6808\u5185\u5b58"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let a = 1\nlet b = 2\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5148\u5165\u6808 a-123"),(0,n.kt)("li",{parentName:"ul"},"\u518d\u5165\u6808 b-10")),(0,n.kt)("p",null,"\u53d8\u91cf\u76f4\u63a5\u6307\u5411\u503c\uff0c\u53d8\u91cf\u548c\u503c\u653e\u5728\u4e00\u8d77"),(0,n.kt)("h3",{id:"\u5b58\u50a8\u5f15\u7528\u7c7b\u578b\u7684\u53d8\u91cf---\u5806\u6808"},"\u5b58\u50a8\u5f15\u7528\u7c7b\u578b\u7684\u53d8\u91cf - \u5806\u6808"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let a = { a1: 123 }\nlet b = a\nlet c = [1, 2, 3]\nlet d = function() { console.log(123) }\n{ a2: 666 }\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f15\u7528\u7c7b\u578b\u53d8\u91cf a \u7684\u65f6\u5019\uff0c\u5148\u5728\u5806\u5185\u5b58\u4e2d\u5f00\u8f9f\u4e00\u4e2a\u5730\u5740\u5b58\u653e\u53d8\u91cf\uff08\u53d8\u91cf\u672c\u4f53\uff09\uff0c\u518d\u628a\u8fd9\u4e2a\u5730\u5740\u8d4b\u503c\u7ed9\u53d8\u91cf\uff0c\u5373\u5165\u6808 a-0x00000000"),(0,n.kt)("li",{parentName:"ul"},"a b \u6307\u5411\u540c\u4e00\u5730\u5740\uff0c\u6240\u4ee5\u5165\u6808 b-0x00000000"),(0,n.kt)("li",{parentName:"ul"},"\u540c\u58f0\u660e a, \u5165\u6808 c-0x00000005"),(0,n.kt)("li",{parentName:"ul"},"\u540c\u58f0\u660e a, \u5165\u6808 d-0x00000008"),(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5b9a\u4e49\u4e00\u4e2a\u5f15\u7528\u7c7b\u578b\uff0c\u5728\u5806\u5185\u5b58\u4e2d\u5f00\u8f9f\u4e00\u4e2a\u5730\u5740\u5b58\u653e\u53d8\u91cf\uff08\u53d8\u91cf\u672c\u4f53\uff09")),(0,n.kt)("h2",{id:"v8-\u5185\u5b58\u7684\u7ba1\u7406"},"V8 \u5185\u5b58\u7684\u7ba1\u7406"),(0,n.kt)("h3",{id:"v8\u5230\u5e95\u6709\u591a\u5927"},"V8\u5230\u5e95\u6709\u591a\u5927"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"64 \u4f4d\u4e0b\u662f1.4G\uff08\u6807\u51c6\uff09"),(0,n.kt)("li",{parentName:"ul"},"32 \u4f4d\u4e0b\u662f 700MB \uff08\u6807\u51c6\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u6d4f\u89c8\u5668\u4e0d\u540c\u4f1a\u6709\u4e9b\u8bb8\u6269\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u7248\u672c Node \u4e5f\u4f1a\u6709\u81ea\u52a8\u8c03\u7528 C++ \u5185\u5b58\u8fdb\u884c\u5185\u6269\u5bb9\uff08\u52a8\u6001\u6269\u5bb9\uff09")),(0,n.kt)("h3",{id:"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3"},"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3"),(0,n.kt)("p",null,"\u6bd4\u5982\u6211\u4eec 64 \u4f4d 1.4G \u7684\u5185\u5b58\uff0c\u5206\u4e3a\u4e24\u5757"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\uff1a\u77ed\u65f6\u95f4\u5b58\u6d3b\u7684\u65b0\u53d8\u91cf\u4f1a\u5b58\u5728\u65b0\u751f\u4ee3\u4e2d\uff0c\u65b0\u751f\u4ee3\u7684\u5185\u5b58\u91cf\u6781\u5c0f\uff0c64 \u4f4d\u4e0b\u5927\u6982\u662f 32MB"),(0,n.kt)("li",{parentName:"ul"},"\u8001\u751f\u4ee3\uff1a\u751f\u5b58\u65f6\u95f4\u6bd4\u8f83\u957f\u7684\u53d8\u91cf\u4f1a\u8f6c\u5b58\u5230\u8001\u751f\u4ee3\uff0c\u8001\u751f\u4ee3\u5360\u636e\u4e86\u51e0\u4e4e\u6240\u6709\u5185\u5b58\uff0c64 \u4f4d\u4e0b\u5927\u6982\u662f 1400MB")),(0,n.kt)("h4",{id:"\u65b0\u751f\u4ee3"},"\u65b0\u751f\u4ee3"),(0,n.kt)("h4",{id:"\u8001\u751f\u4ee3"},"\u8001\u751f\u4ee3"))}m.isMDXComponent=!0}}]);