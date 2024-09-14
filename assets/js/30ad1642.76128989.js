"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8516],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},13655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={id:"fibonacci-number",title:"509. \u6590\u6ce2\u90a3\u5951\u6570",tags:["\u52a8\u6001\u89c4\u5212"]},c=void 0,i={unversionedId:"leetcode/dynamic-programming/fibonacci-number",id:"leetcode/dynamic-programming/fibonacci-number",title:"509. \u6590\u6ce2\u90a3\u5951\u6570",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/dynamic-programming/fibonacci-number.md",sourceDirName:"leetcode/dynamic-programming",slug:"/leetcode/dynamic-programming/fibonacci-number",permalink:"/myblog/docs/leetcode/dynamic-programming/fibonacci-number",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/dynamic-programming/fibonacci-number.md",tags:[{label:"\u52a8\u6001\u89c4\u5212",permalink:"/myblog/docs/tags/\u52a8\u6001\u89c4\u5212"}],version:"current",frontMatter:{id:"fibonacci-number",title:"509. \u6590\u6ce2\u90a3\u5951\u6570",tags:["\u52a8\u6001\u89c4\u5212"]}},l={},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u6590\u6ce2\u90a3\u5951\u6570 \uff08\u901a\u5e38\u7528 F(n) \u8868\u793a\uff09\u5f62\u6210\u7684\u5e8f\u5217\u79f0\u4e3a \u6590\u6ce2\u90a3\u5951\u6570\u5217 \u3002\u8be5\u6570\u5217\u7531 0 \u548c 1 \u5f00\u59cb\uff0c\u540e\u9762\u7684\u6bcf\u4e00\u9879\u6570\u5b57\u90fd\u662f\u524d\u9762\u4e24\u9879\u6570\u5b57\u7684\u548c\u3002\u4e5f\u5c31\u662f\uff1a"),(0,a.kt)("p",null,"F(0) = 0\uff0cF(1) = 1",(0,a.kt)("br",{parentName:"p"}),"\n","F(n) = F(n - 1) + F(n - 2)\uff0c\u5176\u4e2d n > 1",(0,a.kt)("br",{parentName:"p"}),"\n","\u7ed9\u5b9a n \uff0c\u8bf7\u8ba1\u7b97 F(n) \u3002  "),(0,a.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1an = 2\n\u8f93\u51fa\uff1a1\n\u89e3\u91ca\uff1aF(2) = F(1) + F(0) = 1 + 0 = 1\n")),(0,a.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1an = 3\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1aF(3) = F(2) + F(1) = 1 + 1 = 2\n")),(0,a.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1an = 4\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1aF(4) = F(3) + F(2) = 2 + 1 = 3\n")),(0,a.kt)("p",null,"\u63d0\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 <= n <= 30")))}m.isMDXComponent=!0}}]);