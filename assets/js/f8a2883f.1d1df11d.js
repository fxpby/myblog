"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[4435],{28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}},84517:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"coding/leetcode/array/remove-duplicates-from-sorted-array","title":"remove-duplicates-from-sorted-array","description":"\x3c!--","source":"@site/docs/coding/leetcode/array/remove-duplicates-from-sorted-array.md","sourceDirName":"coding/leetcode/array","slug":"/coding/leetcode/array/remove-duplicates-from-sorted-array","permalink":"/docs/coding/leetcode/array/remove-duplicates-from-sorted-array","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/array/remove-duplicates-from-sorted-array.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"238. \u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef","permalink":"/docs/coding/leetcode/array/product-of-array-except-self"},"next":{"title":"remove-element","permalink":"/docs/coding/leetcode/array/remove-element"}}');var s=r(74848),a=r(28453);const i={},l="\u5220\u9664\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",o={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:3},{value:"\u65b9\u6cd5\u4e09",id:"\u65b9\u6cd5\u4e09",level:3}];function u(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5220\u9664\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",children:"\u5220\u9664\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ed9\u5b9a\u4e00\u4e2a\u6392\u5e8f\u6570\u7ec4\uff0c\u4f60\u9700\u8981\u5728 \u539f\u5730 \u5220\u9664\u91cd\u590d\u51fa\u73b0\u7684\u5143\u7d20\uff0c\u4f7f\u5f97\u6bcf\u4e2a\u5143\u7d20\u53ea\u51fa\u73b0\u4e00\u6b21\uff0c\u8fd4\u56de\u79fb\u9664\u540e\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002\r\n\u4e0d\u8981\u4f7f\u7528\u989d\u5916\u7684\u6570\u7ec4\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b\u5728 \u539f\u5730 \u4fee\u6539\u8f93\u5165\u6570\u7ec4 \u5e76\u5728\u4f7f\u7528 O(1) \u989d\u5916\u7a7a\u95f4\u7684\u6761\u4ef6\u4e0b\u5b8c\u6210\u3002",(0,s.jsx)(n.br,{}),"\n","Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.\r\nDo not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory."]}),"\n",(0,s.jsx)(n.p,{children:"eg1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"\u7ed9\u5b9a\u6570\u7ec4 nums = [1,1,2],\r\n\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 2, \u5e76\u4e14\u539f\u6570\u7ec4 nums \u7684\u524d\u4e24\u4e2a\u5143\u7d20\u88ab\u4fee\u6539\u4e3a 1, 2\u3002\r\n\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\n"})}),"\n",(0,s.jsx)(n.p,{children:"eg2:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"\u7ed9\u5b9a nums = [0,0,1,1,1,2,2,3,3,4],\r\n\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 5, \u5e76\u4e14\u539f\u6570\u7ec4 nums \u7684\u524d\u4e94\u4e2a\u5143\u7d20\u88ab\u4fee\u6539\u4e3a 0, 1, 2, 3, 4\u3002\r\n\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e00",children:"\u65b9\u6cd5\u4e00"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u601d\u8def\uff1a\u904d\u5386\u6570\u7ec4\uff0c\u82e5\u5f53\u524d\u9879\u548c\u4e0b\u4e00\u9879\u76f8\u540c\uff0c\u5220\u9664\u5f53\u524d\u9879\uff0c\u518d\u548c\u5220\u9664\u540e\u7684\u4e0b\u4e00\u9879\u8fdb\u884c\u6bd4\u8f83"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar removeDuplicates = function(nums) {\r\n   if(nums.length === 0) {\r\n        return 0\r\n   }\r\n   for(let i = 0; i < nums.length - 1; i++) {\r\n       if(nums[i] === nums[i + 1]) {\r\n           nums.splice(i, 1)\r\n           i--\r\n       }\r\n   }\r\n   return nums.length\r\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e8c",children:"\u65b9\u6cd5\u4e8c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar removeDuplicates = function(nums) {\r\n    if(nums.length === 0) {\r\n        return 0\r\n    }\r\n    let i = 0\r\n    for(let j = 1; j < nums.length; j++) {\r\n        if(nums[i] !== nums[j]){\r\n            if(j - i > 1){\r\n              nums[i + 1] = nums[j]\r\n            }\r\n            i++\r\n        }\r\n    }\r\n    return i + 1\r\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e09",children:"\u65b9\u6cd5\u4e09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar removeDuplicates = function(nums) {\r\n   if(nums.length === 0) {\r\n        return 0\r\n   }\r\n   let l = nums.length\r\n   for(let i = 0; i < l; i++) {\r\n       const left = nums.shift()\r\n       if(left !== nums[nums.length - 1]) {\r\n           nums.push(left)\r\n       }\r\n   }\r\n   return nums.length\r\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);