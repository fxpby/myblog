"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[619],{28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const t={},c=s.createContext(t);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}},69063:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"coding/leetcode/array/product-of-array-except-self","title":"238. \u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef","description":"\u9898\u76ee\u63cf\u8ff0","source":"@site/docs/coding/leetcode/array/product-of-array-except-self.md","sourceDirName":"coding/leetcode/array","slug":"/coding/leetcode/array/product-of-array-except-self","permalink":"/docs/coding/leetcode/array/product-of-array-except-self","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/array/product-of-array-except-self.md","tags":[{"inline":true,"label":"\u6570\u7ec4","permalink":"/docs/tags/\u6570\u7ec4"}],"version":"current","frontMatter":{"id":"product-of-array-except-self","title":"238. \u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef","tags":["\u6570\u7ec4"]},"sidebar":"tutorialSidebar","previous":{"title":"283. \u79fb\u52a8\u96f6","permalink":"/docs/coding/leetcode/array/move-zeroes"},"next":{"title":"remove-duplicates-from-sorted-array","permalink":"/docs/coding/leetcode/array/remove-duplicates-from-sorted-array"}}');var t=r(74848),c=r(28453);const i={id:"product-of-array-except-self",title:"238. \u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",tags:["\u6570\u7ec4"]},l=void 0,o={},d=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums\uff0c\u8fd4\u56de \u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u7b49\u4e8e nums \u4e2d\u9664 nums[i] \u4e4b\u5916\u5176\u4f59\u5404\u5143\u7d20\u7684\u4e58\u79ef \u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9898\u76ee\u6570\u636e \u4fdd\u8bc1 \u6570\u7ec4 nums \u4e4b\u4e2d\u4efb\u610f\u5143\u7d20\u7684\u5168\u90e8\u524d\u7f00\u5143\u7d20\u548c\u540e\u7f00\u7684\u4e58\u79ef\u90fd\u5728 32 \u4f4d \u6574\u6570\u8303\u56f4\u5185\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf7 \u4e0d\u8981\u4f7f\u7528\u9664\u6cd5\uff0c\u4e14\u5728 O(n) \u65f6\u95f4\u590d\u6742\u5ea6\u5185\u5b8c\u6210\u6b64\u9898\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b 1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165: nums = [1, 2, 3, 4];\n\u8f93\u51fa: [24, 12, 8, 6];\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165: nums = [-1, 1, 0, -3, 3];\n\u8f93\u51fa: [0, 0, 9, 0, 0];\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["2 ",(0,t.jsx)(n.code,{children:"<="})," nums.length ",(0,t.jsx)(n.code,{children:"<="})," 105"]}),"\n",(0,t.jsxs)(n.li,{children:["-30 ",(0,t.jsx)(n.code,{children:"<="})," nums[i] ",(0,t.jsx)(n.code,{children:"<="})," 30"]}),"\n",(0,t.jsx)(n.li,{children:"\u4fdd\u8bc1 \u6570\u7ec4 nums \u4e4b\u4e2d\u4efb\u610f\u5143\u7d20\u7684\u5168\u90e8\u524d\u7f00\u5143\u7d20\u548c\u540e\u7f00\u7684\u4e58\u79ef\u90fd\u5728 32 \u4f4d \u6574\u6570\u8303\u56f4\u5185"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e00",children:"\u65b9\u6cd5\u4e00"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u601d\u8def\uff1a\u4f7f\u7528\u4e24\u4e2a\u5e76\u5217 for \u5faa\u73af\uff0c\u4e00\u4e2a for \u5faa\u73af\u62ff\u5230\u6570\u7ec4\u5f53\u524d\u7d22\u5f15\u4e4b\u524d\u7684\u6240\u6709\u6570\u7684\u79ef\uff0c\u53e6\u4e00\u4e2a\u5faa\u73af\u62ff\u5230\u6570\u7ec4\u5f53\u524d\u7d22\u5f15\u4e4b\u540e\u7684\u6240\u6709\u6570\u7684\u79ef\uff0c\u6700\u540e\u5c06\u4e24\u4e2a\u5faa\u73af\u540e\u7684\u503c\u76f8\u4e58\u5373\u53ef\u5f97\u5230\u7b54\u6848"}),"\n",(0,t.jsxs)(n.li,{children:["\u590d\u6742\u5ea6\u5206\u6790\uff1a","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)"}),"\n",(0,t.jsx)(n.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6: O(1)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"var productExceptSelf = function (nums) {\n  let res = [];\n  res[0] = 1;\n\n  for (let i = 1; i < nums.length; i += 1) {\n    res[i] = res[i - 1] * nums[i - 1];\n  }\n\n  let right = 1;\n\n  for (let i = nums.length - 1; i >= 0; i--) {\n    res[i] *= right;\n    right *= nums[i];\n  }\n\n  return res;\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);