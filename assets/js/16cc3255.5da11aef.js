"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4786],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return t?n.createElement(g,i(i({ref:r},m),{},{components:t})):n.createElement(g,i({ref:r},m))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7757:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={id:"house-robber-ii",title:"213. \u6253\u5bb6\u52ab\u820d II",tags:["\u52a8\u6001\u89c4\u5212"]},i=void 0,l={unversionedId:"leetcode/dynamic-programming/house-robber-ii",id:"leetcode/dynamic-programming/house-robber-ii",title:"213. \u6253\u5bb6\u52ab\u820d II",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/dynamic-programming/house-robber-ii.md",sourceDirName:"leetcode/dynamic-programming",slug:"/leetcode/dynamic-programming/house-robber-ii",permalink:"/myblog/docs/leetcode/dynamic-programming/house-robber-ii",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/dynamic-programming/house-robber-ii.md",tags:[{label:"\u52a8\u6001\u89c4\u5212",permalink:"/myblog/docs/tags/\u52a8\u6001\u89c4\u5212"}],version:"current",frontMatter:{id:"house-robber-ii",title:"213. \u6253\u5bb6\u52ab\u820d II",tags:["\u52a8\u6001\u89c4\u5212"]},sidebar:"leetcode",previous:{title:"198. \u6253\u5bb6\u52ab\u820d",permalink:"/myblog/docs/leetcode/dynamic-programming/house-robber"},next:{title:"455. \u5206\u53d1\u997c\u5e72",permalink:"/myblog/docs/leetcode/greedy-algorithm/assign-cookies"}},s={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2}],m={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,"\u4f60\u662f\u4e00\u4e2a\u4e13\u4e1a\u7684\u5c0f\u5077\uff0c\u8ba1\u5212\u5077\u7a83\u6cbf\u8857\u7684\u623f\u5c4b\uff0c\u6bcf\u95f4\u623f\u5185\u90fd\u85cf\u6709\u4e00\u5b9a\u7684\u73b0\u91d1\u3002\u8fd9\u4e2a\u5730\u65b9\u6240\u6709\u7684\u623f\u5c4b\u90fd \u56f4\u6210\u4e00\u5708 \uff0c\u8fd9\u610f\u5473\u7740\u7b2c\u4e00\u4e2a\u623f\u5c4b\u548c\u6700\u540e\u4e00\u4e2a\u623f\u5c4b\u662f\u7d27\u6328\u7740\u7684\u3002\u540c\u65f6\uff0c\u76f8\u90bb\u7684\u623f\u5c4b\u88c5\u6709\u76f8\u4e92\u8fde\u901a\u7684\u9632\u76d7\u7cfb\u7edf\uff0c\u5982\u679c\u4e24\u95f4\u76f8\u90bb\u7684\u623f\u5c4b\u5728\u540c\u4e00\u665a\u4e0a\u88ab\u5c0f\u5077\u95ef\u5165\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u62a5\u8b66 \u3002"),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4ee3\u8868\u6bcf\u4e2a\u623f\u5c4b\u5b58\u653e\u91d1\u989d\u7684\u975e\u8d1f\u6574\u6570\u6570\u7ec4\uff0c\u8ba1\u7b97\u4f60 \u5728\u4e0d\u89e6\u52a8\u8b66\u62a5\u88c5\u7f6e\u7684\u60c5\u51b5\u4e0b \uff0c\u4eca\u665a\u80fd\u591f\u5077\u7a83\u5230\u7684\u6700\u9ad8\u91d1\u989d\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b \xa01\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1anums = [2,3,2]\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a\u4f60\u4e0d\u80fd\u5148\u5077\u7a83 1 \u53f7\u623f\u5c4b\uff08\u91d1\u989d = 2\uff09\uff0c\u7136\u540e\u5077\u7a83 3 \u53f7\u623f\u5c4b\uff08\u91d1\u989d = 2\uff09, \u56e0\u4e3a\u4ed6\u4eec\u662f\u76f8\u90bb\u7684\u3002\n")),(0,o.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1anums = [1,2,3,1]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u4f60\u53ef\u4ee5\u5148\u5077\u7a83 1 \u53f7\u623f\u5c4b\uff08\u91d1\u989d = 1\uff09\uff0c\u7136\u540e\u5077\u7a83 3 \u53f7\u623f\u5c4b\uff08\u91d1\u989d = 3\uff09\u3002\n\xa0    \u5077\u7a83\u5230\u7684\u6700\u9ad8\u91d1\u989d = 1 + 3 = 4 \u3002\n")),(0,o.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1anums = [1,2,3]\n\u8f93\u51fa\uff1a3\n")),(0,o.kt)("p",null,"\u63d0\u793a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 <= nums.length <= 100"),(0,o.kt)("li",{parentName:"ul"},"0 <= nums","[i]"," <= 1000")),(0,o.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar rob = function (nums) {\n  if (nums.length === 1) {\n    return nums[0];\n  }\n\n  const removeFirst = nums.slice(1);\n  const removeLast = nums.slice(0, nums.length - 1);\n\n  const dp1 = [removeFirst[0], Math.max(removeFirst[0], removeFirst[1])];\n  const dp2 = [removeLast[0], Math.max(removeLast[0], removeLast[1])];\n\n  for (let i = 2; i < removeFirst.length; i += 1) {\n    dp1[i] = Math.max(removeFirst[i] + dp1[i - 2], dp1[i - 1]);\n  }\n\n  for (let i = 2; i < removeLast.length; i += 1) {\n    dp2[i] = Math.max(removeLast[i] + dp2[i - 2], dp2[i - 1]);\n  }\n\n  const res = Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);\n  return res ? res : Math.max(removeFirst[0], removeLast[0]);\n};\n")))}u.isMDXComponent=!0}}]);