"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return r?n.createElement(y,s(s({ref:t},i),{},{components:r})):n.createElement(y,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<c;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={id:"ts-declare",title:"\u58f0\u660e\u6587\u4ef6 d.ts",tags:["TypeScript"]},s=void 0,o={unversionedId:"typescript/basic/ts-declare",id:"typescript/basic/ts-declare",title:"\u58f0\u660e\u6587\u4ef6 d.ts",description:"\u58f0\u660e\u6587\u4ef6 declare",source:"@site/docs/typescript/basic/ts-declare.md",sourceDirName:"typescript/basic",slug:"/typescript/basic/ts-declare",permalink:"/myblog/docs/typescript/basic/ts-declare",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/basic/ts-declare.md",tags:[{label:"TypeScript",permalink:"/myblog/docs/tags/type-script"}],version:"current",frontMatter:{id:"ts-declare",title:"\u58f0\u660e\u6587\u4ef6 d.ts",tags:["TypeScript"]}},l={},p=[{value:"\u58f0\u660e\u6587\u4ef6 declare",id:"\u58f0\u660e\u6587\u4ef6-declare",level:2}],i={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u58f0\u660e\u6587\u4ef6-declare"},"\u58f0\u660e\u6587\u4ef6 declare"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e09\u65b9\u5e93\u65f6\uff0c\u9700\u8981\u5f15\u5165\u58f0\u660e\u6587\u4ef6\u624d\u80fd\u83b7\u5f97\u5bf9\u5e94\u7684\u4ee3\u7801\u8865\u5168\u548c\u63a5\u53e3\u63d0\u793a\u76f8\u5173\u5185\u5bb9"),(0,a.kt)("p",null,"\u6bd4\u5982\u5728\u9879\u76ee\u4e2d\u5199"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios'\n")),(0,a.kt)("p",null,"\u6309\u4f4f Ctrl/command \u952e\u70b9\u51fb 'axios' \u4f1a\u8fdb\u5165\u5230\u5b83\u7684\u58f0\u660e\u6587\u4ef6\u4e2d"),(0,a.kt)("p",null,"\u6709\u4e00\u4e9b\u6bd4\u8f83\u8001\u7684\u5e93\u53ef\u80fd\u6ca1\u6709\u76f8\u5173\u7684 xxx.d.ts \u6587\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5df1\u7f16\u5199, \u5982 express"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="express.d.tsc"',title:'"express.d.tsc"'},"declare module 'express' {\n  interface Express {\n    (): void\n  }\n  // ...\n  const express: Express\n  export default express\n}\n")),(0,a.kt)("p",null,"\u8fd8\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u547d\u4ee4\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev @types/express\n")))}u.isMDXComponent=!0}}]);