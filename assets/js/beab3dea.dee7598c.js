"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9542],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<c;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const c={id:"ts-three-diagonal",title:"\u4e09\u659c\u7ebf\u6307\u4ee4",tags:["TypeScript"]},o=void 0,p={unversionedId:"typescript/advance/ts-three-diagonal",id:"typescript/advance/ts-three-diagonal",title:"\u4e09\u659c\u7ebf\u6307\u4ee4",description:"\u5305\u542b\u5355\u4e2a XML \u6807\u7b7e\u7684\u5355\u884c\u6ce8\u91ca\uff0c\u6ce8\u91ca\u7684\u5185\u5bb9\u4f5c\u4e3a\u7f16\u8bd1\u5668\u6307\u4ee4\u4f7f\u7528",source:"@site/docs/typescript/advance/ts-three-diagonal.md",sourceDirName:"typescript/advance",slug:"/typescript/advance/ts-three-diagonal",permalink:"/myblog/docs/typescript/advance/ts-three-diagonal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/advance/ts-three-diagonal.md",tags:[{label:"TypeScript",permalink:"/myblog/docs/tags/type-script"}],version:"current",frontMatter:{id:"ts-three-diagonal",title:"\u4e09\u659c\u7ebf\u6307\u4ee4",tags:["TypeScript"]},sidebar:"typescript",previous:{title:"\u679a\u4e3e",permalink:"/myblog/docs/typescript/advance/ts-enum"},next:{title:"\u6cdb\u578b",permalink:"/myblog/docs/typescript/advance/ts-generics"}},s={},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5305\u542b\u5355\u4e2a XML \u6807\u7b7e\u7684\u5355\u884c\u6ce8\u91ca\uff0c\u6ce8\u91ca\u7684\u5185\u5bb9\u4f5c\u4e3a\u7f16\u8bd1\u5668\u6307\u4ee4\u4f7f\u7528"),(0,a.kt)("p",null,"\u4ec5\u53ef\u653e\u5728\u5305\u542b\u5b83\u7684\u6587\u4ef6\u7684\u6700\u9876\u7aef\uff0c\u524d\u9762\u53ea\u80fd\u51fa\u73b0\u5355\u884c\u6216\u591a\u884c\u6ce8\u91ca\uff0c\u5305\u62ec\u5176\u4ed6\u7684\u4e09\u659c\u7ebf\u6307\u4ee4\u3002\u5982\u679c\u51fa\u73b0\u5728\u4e00\u4e2a\u8bed\u53e5\u6216\u58f0\u660e\u4e4b\u540e\uff0c\u4f1a\u88ab\u5f53\u505a\u666e\u901a\u7684\u5355\u884c\u6ce8\u91ca\uff0c\u65e0\u7279\u6b8a\u542b\u4e49"),(0,a.kt)("p",null,"index.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/// <reference path="index2.ts" />\n/// <reference path="index3.ts" />\n\nnamespace A {\n  export const a = 1\n}\nconsole.log(A, A.a, A.b,A.c)\n')),(0,a.kt)("p",null,"index2.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"namespace A {\n  export const b = 2\n}\n")),(0,a.kt)("p",null,"index3.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"namespace A {\n  export const c = 3\n}\n")))}u.isMDXComponent=!0}}]);