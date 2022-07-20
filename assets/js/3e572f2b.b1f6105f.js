"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},c="\u7a7a\u95f4\u590d\u6742\u5ea6",l={unversionedId:"data-structures/space-complexity/space-complexity",id:"data-structures/space-complexity/space-complexity",title:"\u7a7a\u95f4\u590d\u6742\u5ea6",description:"- \u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u5927O\u8868\u793a",source:"@site/docs/data-structures/space-complexity/space-complexity.md",sourceDirName:"data-structures/space-complexity",slug:"/data-structures/space-complexity/",permalink:"/myblog/docs/data-structures/space-complexity/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-structures/space-complexity/space-complexity.md",tags:[],version:"current",frontMatter:{},sidebar:"data-structures",previous:{title:"\u65f6\u95f4\u590d\u6742\u5ea6",permalink:"/myblog/docs/data-structures/time-complexity/"},next:{title:"array",permalink:"/myblog/docs/data-structures/array/"}},i={},s=[{value:"O(1)",id:"o1",level:2},{value:"O(n)",id:"on",level:2},{value:"O(n^2)",id:"on2",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u5927O\u8868\u793a"),(0,a.kt)("li",{parentName:"ul"},"\u7b97\u6cd5\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4e34\u65f6\u5360\u7528\u5b58\u50a8\u7a7a\u95f4\u5927\u5c0f\u7684\u91cf\u5ea6")),(0,a.kt)("h2",{id:"o1"},"O(1)"),(0,a.kt)("p",null,"\u53ea\u58f0\u660e\u91cc\u5355\u4e2a\u53d8\u91cf\uff0c\u5355\u4e2a\u53d8\u91cf\u6240\u5360\u7528\u7684\u5185\u5b58\u4e3a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let i = 0;\ni += 1\n")),(0,a.kt)("h2",{id:"on"},"O(n)"),(0,a.kt)("p",null,"\ud83c\udf30\u4e2d\u7ed9\u6570\u7ec4\u6dfb\u52a0\u4e86 n \u4e2a\u503c\uff0c\u5360\u7528\u4e86 n \u4e2a\u5185\u5b58\u5355\u5143"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const list = [];\nfor (let i = 0; i < n; i += 1) {\n  list.push(i)\n}\n")),(0,a.kt)("h2",{id:"on2"},"O(n^2)"),(0,a.kt)("p",null,"\ud83c\udf30\u662f\u4e2a\u77e9\u9635(\u4e8c\u7ef4\u6570\u7ec4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const matrix = []\nfor (let i = 0; i < n; i += 1) {\n  matrix.push([])\n  for (let j = 0; j < n; j += 1) {\n    matrix[i].push(j)\n  }\n}\n")))}u.isMDXComponent=!0}}]);