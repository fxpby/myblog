"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6715],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,d=p["".concat(s,".").concat(f)]||p[f]||c[f]||l;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={id:"intersection-of-two-arrays-ii",title:"350. \u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6 II",tags:["\u6570\u7ec4","\u53cc\u6307\u9488"]},o=void 0,i={unversionedId:"leetcode/array/intersection-of-two-arrays-ii",id:"leetcode/array/intersection-of-two-arrays-ii",title:"350. \u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6 II",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/array/intersection-of-two-arrays-ii.md",sourceDirName:"leetcode/array",slug:"/leetcode/array/intersection-of-two-arrays-ii",permalink:"/myblog/docs/leetcode/array/intersection-of-two-arrays-ii",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/array/intersection-of-two-arrays-ii.md",tags:[{label:"\u6570\u7ec4",permalink:"/myblog/docs/tags/\u6570\u7ec4"},{label:"\u53cc\u6307\u9488",permalink:"/myblog/docs/tags/\u53cc\u6307\u9488"}],version:"current",frontMatter:{id:"intersection-of-two-arrays-ii",title:"350. \u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6 II",tags:["\u6570\u7ec4","\u53cc\u6307\u9488"]},sidebar:"leetcode",previous:{title:"75. \u989c\u8272\u5206\u7c7b",permalink:"/myblog/docs/leetcode/array/sort-colors"},next:{title:"217. \u5b58\u5728\u91cd\u590d\u5143\u7d20",permalink:"/myblog/docs/leetcode/array/contains-duplicate"}},s={},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u54c8\u5e0c\u8868",id:"\u65b9\u6cd5\u4e00\u54c8\u5e0c\u8868",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u53cc\u6307\u9488",id:"\u65b9\u6cd5\u4e8c\u53cc\u6307\u9488",level:3}],m={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570\u6570\u7ec4 nums1 \u548c nums2 \uff0c\u8bf7\u4f60\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u4e24\u6570\u7ec4\u7684\u4ea4\u96c6\u3002\u8fd4\u56de\u7ed3\u679c\u4e2d\u6bcf\u4e2a\u5143\u7d20\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u5e94\u4e0e\u5143\u7d20\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u90fd\u51fa\u73b0\u7684\u6b21\u6570\u4e00\u81f4\uff08\u5982\u679c\u51fa\u73b0\u6b21\u6570\u4e0d\u4e00\u81f4\uff0c\u5219\u8003\u8651\u53d6\u8f83\u5c0f\u503c\uff09\u3002\u53ef\u4ee5\u4e0d\u8003\u8651\u8f93\u51fa\u7ed3\u679c\u7684\u987a\u5e8f"),(0,a.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1anums1 = [1,2,2,1], nums2 = [2,2]\n\u8f93\u51fa\uff1a[2,2]\n")),(0,a.kt)("p",null,"\u793a\u4f8b 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1anums1 = [4,9,5], nums2 = [9,4,9,8,4]\n\u8f93\u51fa\uff1a[4,9]\n")),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u54c8\u5e0c\u8868"},"\u65b9\u6cd5\u4e00\uff1a\u54c8\u5e0c\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a\u5229\u7528\u54c8\u5e0c\u8868\u5b58\u50a8 nums1 \u4e2d\u5143\u7d20\u51fa\u73b0\u6b21\u6570\uff0c\u518d\u5faa\u73af nums2 \uff0c\u82e5\u5b58\u5728\u5219 push \u5230\u7ed3\u679c\uff0c\u5e76\u4e14\u6b21\u6570\u51cf 1"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(m+n), m \u662f\u904d\u5386 nums1, n \u662f\u904d\u5386 nums2"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(m+n), m \u662f\u54c8\u5e0c\u8868\u5927\u5c0f\uff0cn \u662f result \u6570\u7ec4\u957f\u5ea6")))),(0,a.kt)("p",null,"\u63d0\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 <= nums1.length, nums2.length <= 1000"),(0,a.kt)("li",{parentName:"ul"},"0 <= nums1","[i]",", nums2","[i]"," <= 1000")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var intersect = function(nums1, nums2) {\n  const map = {}\n  const res = []\n  if (nums1.length < nums2.length) {\n    [nums1, nums2] = [nums2, nums1]\n  }\n\n  for (let i of nums1) {\n    if (map[i]) {\n      map[i] += 1\n    } else {\n      map[i] = 1\n    }\n  }\n\n  for (let i of nums2) {\n    if (map[i] > 0) {\n      res.push(i)\n      map[i] -= 1\n    }\n  }\n  return res\n}\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u53cc\u6307\u9488"},"\u65b9\u6cd5\u4e8c\uff1a\u53cc\u6307\u9488"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a\u8bbe\u7f6e\u4e24\u4e2a\u6307\u9488\u5206\u522b\u6307\u5411\u4e24\u4e2a\u5df2\u5347\u5e8f\u6392\u5e8f\u7684\u6570\u7ec4\u5934\u90e8\uff0c\u5f53\u4e24\u4e2a\u6307\u9488\u6307\u5411\u5143\u7d20\u4e00\u6837\u65f6\uff0c\u52a0\u5165\u7ed3\u679c\uff0c\u4e24\u4e2a\u6307\u9488\u81ea\u589e\u3002\u5426\u5219\u6bd4\u8f83\u4e24\u4e2a\u5143\u7d20\uff0c\u5411\u53f3\u79fb\u52a8\u8f83\u5c0f\u5143\u7d20\u6307\u9488"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(mlogm+nlogn), m\u3001n\u5206\u522b\u662f\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u6392\u5e8f\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(mlogm+nlogn)"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a\u7a7a\u95f4\u590d\u6742\u5ea6O(logm+logn)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var intersect = function(nums1, nums2) {\n  nums1 = nums1.sort((a,b) => a - b)\n  nums2 = nums2.sort((a,b) => a - b)\n\n  const res = []\n\n  let i = 0\n  let j = 0\n  while (i < nums1.length && j < nums2.length) {\n    if (nums1[i] < nums2[j]) {\n      i += 1\n    } else if (nums1[i] > nums2[j]) {\n      j += 1\n    } else {\n      res.push(nums1[i])\n      i += 1\n      j += 1\n    }\n  }\n  return res\n};\n")))}c.isMDXComponent=!0}}]);