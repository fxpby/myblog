"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"is-subsequence",title:"392. \u5224\u65ad\u5b50\u5e8f\u5217",tags:["\u53cc\u6307\u9488"]},s=void 0,l={unversionedId:"leetcode/two-pointers/is-subsequence",id:"leetcode/two-pointers/is-subsequence",title:"392. \u5224\u65ad\u5b50\u5e8f\u5217",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/two-pointers/is-subsequence.md",sourceDirName:"leetcode/two-pointers",slug:"/leetcode/two-pointers/is-subsequence",permalink:"/myblog/docs/leetcode/two-pointers/is-subsequence",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/two-pointers/is-subsequence.md",tags:[{label:"\u53cc\u6307\u9488",permalink:"/myblog/docs/tags/\u53cc\u6307\u9488"}],version:"current",frontMatter:{id:"is-subsequence",title:"392. \u5224\u65ad\u5b50\u5e8f\u5217",tags:["\u53cc\u6307\u9488"]},sidebar:"leetcode",previous:{title:"455. \u5206\u53d1\u997c\u5e72",permalink:"/myblog/docs/leetcode/greedy-algorithm/assign-cookies"},next:{title:"125. \u9a8c\u8bc1\u56de\u6587\u4e32",permalink:"/myblog/docs/leetcode/two-pointers/valid-palindrome"}},a={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u53cc\u6307\u9488",id:"\u65b9\u6cd5\u4e00\u53cc\u6307\u9488",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,"\u7ed9\u5b9a\u5b57\u7b26\u4e32 s \u548c t \uff0c\u5224\u65ad s \u662f\u5426\u4e3a t \u7684\u5b50\u5e8f\u5217\u3002"),(0,o.kt)("p",null,'\u5b57\u7b26\u4e32\u7684\u4e00\u4e2a\u5b50\u5e8f\u5217\u662f\u539f\u59cb\u5b57\u7b26\u4e32\u5220\u9664\u4e00\u4e9b\uff08\u4e5f\u53ef\u4ee5\u4e0d\u5220\u9664\uff09\u5b57\u7b26\u800c\u4e0d\u6539\u53d8\u5269\u4f59\u5b57\u7b26\u76f8\u5bf9\u4f4d\u7f6e\u5f62\u6210\u7684\u65b0\u5b57\u7b26\u4e32\u3002\uff08\u4f8b\u5982\uff0c"ace"\u662f"abcde"\u7684\u4e00\u4e2a\u5b50\u5e8f\u5217\uff0c\u800c"aec"\u4e0d\u662f\uff09\u3002'),(0,o.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,o.kt)("h2",{id:"\u65b9\u6cd5\u4e00\u53cc\u6307\u9488"},"\u65b9\u6cd5\u4e00\uff1a\u53cc\u6307\u9488"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var isSubsequence = function (s, t) {\n  if (s.length > t.length) {\n    return false\n  }\n\n  if (s.length === 0) {\n    return true\n  }\n\n  for (let i = 0, j = 0; j < t.length; j += 1) {\n    if (s[i] === t[j]) {\n      i += 1\n      if (i === s.length) {\n        return true\n      }\n    }\n  }\n\n  return false\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var isSubsequence = function (s, t) {\n  if (s.length > t.length) {\n    return false\n  }\n\n  if (s.length === 0) {\n    return true\n  }\n\n  let i = 0\n  let j = 0\n\n  while(j < t.length) {\n    if (s[i] === t[j]) {\n      i += 1\n      if (i === s.length) {\n        return true\n      }\n    }\n    j += 1\n  }\n  return false\n};\n")))}p.isMDXComponent=!0}}]);