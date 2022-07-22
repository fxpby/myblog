"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5190],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=t.createContext({}),u=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,v=c["".concat(m,".").concat(d)]||c[d]||s[d]||l;return r?t.createElement(v,o(o({ref:n},p),{},{components:r})):t.createElement(v,o({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8875:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=r(7462),a=(r(7294),r(3905));const l={},o=void 0,i={unversionedId:"leetcode/array/remove-element",id:"leetcode/array/remove-element",title:"remove-element",description:"\x3c!--",source:"@site/docs/leetcode/array/remove-element.md",sourceDirName:"leetcode/array",slug:"/leetcode/array/remove-element",permalink:"/docs/leetcode/array/remove-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/array/remove-element.md",tags:[],version:"current",frontMatter:{},sidebar:"leetcode",previous:{title:"remove-duplicates-from-sorted-array",permalink:"/docs/leetcode/array/remove-duplicates-from-sorted-array"},next:{title:"search-insert-position",permalink:"/docs/leetcode/array/search-insert-position"}},m={},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:3},{value:"\u65b9\u6cd5\u4e09",id:"\u65b9\u6cd5\u4e09",level:3}],p={toc:u};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u79fb\u9664\u5143\u7d20"},"\u79fb\u9664\u5143\u7d20"),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 nums\xa0\u548c\u4e00\u4e2a\u503c val\uff0c\u4f60\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u539f\u5730")," \u79fb\u9664\u6240\u6709\u6570\u503c\u7b49\u4e8e\xa0val\xa0\u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u79fb\u9664\u540e\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e0d\u8981\u4f7f\u7528\u989d\u5916\u7684\u6570\u7ec4\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b\u4ec5\u4f7f\u7528 O(1) \u989d\u5916\u7a7a\u95f4\u5e76 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u539f\u5730")," ",(0,a.kt)("inlineCode",{parentName:"p"},"\u4fee\u6539\u8f93\u5165\u6570\u7ec4"),"\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5143\u7d20\u7684\u987a\u5e8f\u53ef\u4ee5\u6539\u53d8\u3002\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002  "),(0,a.kt)("p",null,"Given an array nums and a value val, remove all instances of that value ",(0,a.kt)("inlineCode",{parentName:"p"},"in-place")," and return the new length.",(0,a.kt)("br",{parentName:"p"}),"\n","Do not allocate extra space for another array, you must do this by ",(0,a.kt)("inlineCode",{parentName:"p"},"modifying the input array in-place")," with O(1) extra memory.",(0,a.kt)("br",{parentName:"p"}),"\n","The order of elements can be changed. It doesn't matter what you leave beyond the new length.  "),(0,a.kt)("p",null,"\u793a\u4f8b 1:",(0,a.kt)("br",{parentName:"p"}),"\n","\u7ed9\u5b9a nums = ","[3,2,2,3]",", val = 3,\n\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 2, \u5e76\u4e14 nums \u4e2d\u7684\u524d\u4e24\u4e2a\u5143\u7d20\u5747\u4e3a 2\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\xa02:",(0,a.kt)("br",{parentName:"p"}),"\n","\u7ed9\u5b9a nums = ","[0,1,2,2,3,0,4,2]",", val = 2,\n\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 5, \u5e76\u4e14 nums \u4e2d\u7684\u524d\u4e94\u4e2a\u5143\u7d20\u4e3a 0, 1, 3, 0, 4\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6ce8\u610f\u8fd9\u4e94\u4e2a\u5143\u7d20\u53ef\u4e3a\u4efb\u610f\u987a\u5e8f\u3002\n\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002"),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */\nvar removeElement = function(nums, val) {\n    if(nums.length === 0){\n        return 0\n    }\n    for(let i = 0; i < nums.length; i++) {\n        if(nums[i] === val) {\n            nums.splice(i, 1)\n            i--\n        }\n    }\n    return nums.length\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */\nvar removeElement = function(nums, val) {\n    if(nums.length === 0){\n        return 0\n    }\n    let i = 0\n    for(let j = 0; j < nums.length; j++){\n        if(nums[j] !== val) {\n            nums[i] = nums[j]\n            i++\n        }\n    }\n    return i\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e09"},"\u65b9\u6cd5\u4e09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */\nvar removeElement = function(nums, val) {\n    if(nums.length === 0){\n        return 0\n    }\n    let i = 0\n    let j = nums.length\n    while(i < j) {\n        if(nums[i] === val) {\n            nums[i] = nums[j - 1]\n            j--\n        } else {\n            i++\n        }\n    }\n    return i\n};\n")))}s.isMDXComponent=!0}}]);