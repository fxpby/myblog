"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6216],{3905:(e,r,n)=>{n.d(r,{Zo:()=>i,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},i=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?t.createElement(f,u(u({ref:r},i),{},{components:n})):t.createElement(f,u({ref:r},i))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=n[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5933:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const o={},u=void 0,l={unversionedId:"leetcode/array/merge-sorted-array",id:"leetcode/array/merge-sorted-array",title:"merge-sorted-array",description:"\x3c!--",source:"@site/docs/leetcode/array/merge-sorted-array.md",sourceDirName:"leetcode/array",slug:"/leetcode/array/merge-sorted-array",permalink:"/myblog/docs/leetcode/array/merge-sorted-array",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/array/merge-sorted-array.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3}],i={toc:c};function m(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"},"\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\u6709\u5e8f\u6574\u6570\u6570\u7ec4\xa0nums1 \u548c nums2\uff0c\u8bf7\u4f60\u5c06 nums2 \u5408\u5e76\u5230\xa0nums1\xa0\u4e2d\uff0c\u4f7f nums1 \u6210\u4e3a\u4e00\u4e2a\u6709\u5e8f\u6570\u7ec4\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array."),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\n\u521d\u59cb\u5316\xa0nums1 \u548c nums2 \u7684\u5143\u7d20\u6570\u91cf\u5206\u522b\u4e3a\xa0m \u548c n \u3002\n\u4f60\u53ef\u4ee5\u5047\u8bbe\xa0nums1\xa0\u6709\u8db3\u591f\u7684\u7a7a\u95f4\uff08\u7a7a\u95f4\u5927\u5c0f\u5927\u4e8e\u6216\u7b49\u4e8e\xa0m + n\uff09\u6765\u4fdd\u5b58 nums2 \u4e2d\u7684\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,"\u8f93\u5165\uff1a\nnums1 = ","[1,2,3,0,0,0]",", m = 3\nnums2 = ","[2,5,6]",",       n = 3"),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a","[1,2,2,3,5,6]"),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums1\n * @param {number} m\n * @param {number[]} nums2\n * @param {number} n\n * @return {void} Do not return anything, modify nums1 in-place instead.\n */\nvar merge = function(nums1, m, nums2, n) {\n    nums1.length = m\n    nums2.length = n\n    let left = 0\n    let right = 0\n    let result = []\n    while(left < m && right < n) {\n        if(nums1[left] < nums2[right]){\n            result.push(nums1[left])\n            left++\n        } else {\n            result.push(nums2[right])\n            right++\n        }\n    }\n    result = result.concat(nums1.slice(left)).concat(nums2.slice(right))\n    for(let i = 0; i < result.length; i++) {\n        nums1[i] = result[i]\n    }\n};\n")))}m.isMDXComponent=!0}}]);