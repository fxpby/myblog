"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8147],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,d=m["".concat(u,".").concat(g)]||m[g]||p[g]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={id:"assign-cookies",title:"455. \u5206\u53d1\u997c\u5e72",tags:["\u8d2a\u5fc3"]},i=void 0,o={unversionedId:"leetcode/greedy-algorithm/assign-cookies",id:"leetcode/greedy-algorithm/assign-cookies",title:"455. \u5206\u53d1\u997c\u5e72",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/greedy-algorithm/assign-cookies.md",sourceDirName:"leetcode/greedy-algorithm",slug:"/leetcode/greedy-algorithm/assign-cookies",permalink:"/myblog/docs/leetcode/greedy-algorithm/assign-cookies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/greedy-algorithm/assign-cookies.md",tags:[{label:"\u8d2a\u5fc3",permalink:"/myblog/docs/tags/\u8d2a\u5fc3"}],version:"current",frontMatter:{id:"assign-cookies",title:"455. \u5206\u53d1\u997c\u5e72",tags:["\u8d2a\u5fc3"]},sidebar:"leetcode",previous:{title:"213. \u6253\u5bb6\u52ab\u820d II",permalink:"/myblog/docs/leetcode/dynamic-programming/house-robber-ii"}},u={},s=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u8d2a\u5fc3 - \u5148\u5206\u5927\u997c\u5e72\ud83c\udf6a",id:"\u65b9\u6cd5\u4e00\u8d2a\u5fc3---\u5148\u5206\u5927\u997c\u5e72",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u8d2a\u5fc3 - \u5148\u5206\u5c0f\u997c\u5e72\ud83c\udf6a",id:"\u65b9\u6cd5\u4e8c\u8d2a\u5fc3---\u5148\u5206\u5c0f\u997c\u5e72",level:3}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u5047\u8bbe\u4f60\u662f\u4e00\u4f4d\u5f88\u68d2\u7684\u5bb6\u957f\uff0c\u60f3\u8981\u7ed9\u4f60\u7684\u5b69\u5b50\u4eec\u4e00\u4e9b\u5c0f\u997c\u5e72\u3002\u4f46\u662f\uff0c\u6bcf\u4e2a\u5b69\u5b50\u6700\u591a\u53ea\u80fd\u7ed9\u4e00\u5757\u997c\u5e72\u3002"),(0,a.kt)("p",null,"\u5bf9\u6bcf\u4e2a\u5b69\u5b50 i\uff0c\u90fd\u6709\u4e00\u4e2a\u80c3\u53e3\u503c g","[i]","\uff0c\u8fd9\u662f\u80fd\u8ba9\u5b69\u5b50\u4eec\u6ee1\u8db3\u80c3\u53e3\u7684\u997c\u5e72\u7684\u6700\u5c0f\u5c3a\u5bf8\uff1b\u5e76\u4e14\u6bcf\u5757\u997c\u5e72 j\uff0c\u90fd\u6709\u4e00\u4e2a\u5c3a\u5bf8 s","[j]"," \u3002\u5982\u679c s","[j]"," >= g","[i]","\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u997c\u5e72 j \u5206\u914d\u7ed9\u5b69\u5b50 i \uff0c\u8fd9\u4e2a\u5b69\u5b50\u4f1a\u5f97\u5230\u6ee1\u8db3\u3002\u4f60\u7684\u76ee\u6807\u662f\u5c3d\u53ef\u80fd\u6ee1\u8db3\u8d8a\u591a\u6570\u91cf\u7684\u5b69\u5b50\uff0c\u5e76\u8f93\u51fa\u8fd9\u4e2a\u6700\u5927\u6570\u503c\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: g = [1,2,3], s = [1,1]\n\u8f93\u51fa: 1\n\u89e3\u91ca: \n\u4f60\u6709\u4e09\u4e2a\u5b69\u5b50\u548c\u4e24\u5757\u5c0f\u997c\u5e72\uff0c3\u4e2a\u5b69\u5b50\u7684\u80c3\u53e3\u503c\u5206\u522b\u662f\uff1a1,2,3\u3002\n\u867d\u7136\u4f60\u6709\u4e24\u5757\u5c0f\u997c\u5e72\uff0c\u7531\u4e8e\u4ed6\u4eec\u7684\u5c3a\u5bf8\u90fd\u662f1\uff0c\u4f60\u53ea\u80fd\u8ba9\u80c3\u53e3\u503c\u662f1\u7684\u5b69\u5b50\u6ee1\u8db3\u3002\n\u6240\u4ee5\u4f60\u5e94\u8be5\u8f93\u51fa1\u3002\n")),(0,a.kt)("p",null,"\u793a\u4f8b 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: g = [1,2], s = [1,2,3]\n\u8f93\u51fa: 2\n\u89e3\u91ca: \n\u4f60\u6709\u4e24\u4e2a\u5b69\u5b50\u548c\u4e09\u5757\u5c0f\u997c\u5e72\uff0c2\u4e2a\u5b69\u5b50\u7684\u80c3\u53e3\u503c\u5206\u522b\u662f1,2\u3002\n\u4f60\u62e5\u6709\u7684\u997c\u5e72\u6570\u91cf\u548c\u5c3a\u5bf8\u90fd\u8db3\u4ee5\u8ba9\u6240\u6709\u5b69\u5b50\u6ee1\u8db3\u3002\n\u6240\u4ee5\u4f60\u5e94\u8be5\u8f93\u51fa2.\n")),(0,a.kt)("p",null,"\u63d0\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 <= g.length <= 3 * 104"),(0,a.kt)("li",{parentName:"ul"},"0 <= s.length <= 3 * 104"),(0,a.kt)("li",{parentName:"ul"},"1 <= g","[i]",", s","[j]"," <= 231 - 1")),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u8d2a\u5fc3---\u5148\u5206\u5927\u997c\u5e72"},"\u65b9\u6cd5\u4e00\uff1a\u8d2a\u5fc3 - \u5148\u5206\u5927\u997c\u5e72\ud83c\udf6a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7528\u5927\u997c\u5e72\u6ee1\u8db3\u5927\u80c3\u53e3\u7684\u5b69\u5b50"))),(0,a.kt)("li",{parentName:"ul"},"\u6b65\u9aa4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5148\u7ed9\u997c\u5e72\u4eec\u548c\u5b69\u5b50\u4eec\u964d\u5e8f\u6392\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u904d\u5386\u5224\u65ad\u5f53\u524d\u997c\u5e72\u662f\u5426\u6ee1\u8db3\u5f53\u524d\u5b69\u5b50\u80c3\u53e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ee1\u8db3\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"count ++"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\u997c\u5e72index ++"),"\uff0c\u5224\u65ad\u4e0b\u4e00\u4e2a\u997c\u5e72"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u6ee1\u8db3\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u5b69\u5b50index ++"),", \u770b\u770b\u80fd\u5426\u6ee1\u8db3\u4e0b\u4e00\u4e2a\u5b69\u5b50")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} g\n * @param {number[]} s\n * @return {number}\n */\nvar findContentChildren = function(g, s) {\n  let gLen = g.length\n  let sLen = s.length\n  if (!gLen || !sLen) {\n    return 0\n  }\n\n  g = g.sort((a, b) => b - a)\n  s = s.sort((a, b) => b - a)\n  let count = 0\n  let i = 0\n  let j = 0\n\n  while (i < sLen && j < gLen) {\n    if (s[i] >= g[j]) {\n      count ++\n      i ++\n    }\n    j ++\n  }\n  \n  return count\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} g\n * @param {number[]} s\n * @return {number}\n */\nvar findContentChildren = function(g, s) {\n  let gLen = g.length\n  let sLen = s.length\n  if (!gLen || !sLen) {\n    return 0\n  }\n\n  g = g.sort((a, b) => b - a)\n  s = s.sort((a, b) => b - a)\n  let count = 0\n\n  for (let i = 0, j = 0; i < gLen; i += 1) {\n    if (s[j] >= g[i]) {\n      count ++\n      j ++\n    }\n  }\n  \n  return count\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u8d2a\u5fc3---\u5148\u5206\u5c0f\u997c\u5e72"},"\u65b9\u6cd5\u4e8c\uff1a\u8d2a\u5fc3 - \u5148\u5206\u5c0f\u997c\u5e72\ud83c\udf6a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7528\u5c0f\u997c\u5e72\u6ee1\u8db3\u5c0f\u80c3\u53e3\u7684\u5b69\u5b50"))),(0,a.kt)("li",{parentName:"ul"},"\u6b65\u9aa4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5148\u7ed9\u997c\u5e72\u4eec\u548c\u5b69\u5b50\u4eec\u5347\u5e8f\u6392\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u904d\u5386\u5224\u65ad\u5f53\u524d\u997c\u5e72\u662f\u5426\u6ee1\u8db3\u5f53\u524d\u5b69\u5b50\u80c3\u53e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ee1\u8db3\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"count ++"),"\uff0c\u5224\u65ad\u4e0b\u4e00\u4e2a\u997c\u5e72\uff08\u8fd9\u91cc\u7684 count \u6b63\u597d\u53ef\u4ee5\u4f5c\u4e3a\u5b69\u5b50\u7684\u7d22\u5f15\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u6ee1\u8db3, \u770b\u4e0b\u4e00\u4e2a\u997c\u5e72")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} g\n * @param {number[]} s\n * @return {number}\n */\nvar findContentChildren = function(g, s) {\n  let gLen = g.length\n  let sLen = s.length\n  if (!gLen || !sLen) {\n    return 0\n  }\n\n  g = g.sort((a, b) => a - b)\n  s = s.sort((a, b) => a - b)\n  \n  let count = 0\n  for (let i = 0; i < sLen; i += 1) {\n    if (s[i] >= g[count] && count < gLen) {\n      count ++\n    }\n  }\n  \n  return count\n};\n")))}p.isMDXComponent=!0}}]);