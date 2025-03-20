"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[3872],{10134:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"coding/leetcode/dynamic-programming/longest-increasing-subsequence","title":"300. \u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217","description":"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u627e\u5230\u5176\u4e2d\u6700\u957f\u4e25\u683c\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002","source":"@site/docs/coding/leetcode/dynamic-programming/longest-increasing-subsequence.md","sourceDirName":"coding/leetcode/dynamic-programming","slug":"/coding/leetcode/dynamic-programming/longest-increasing-subsequence","permalink":"/docs/coding/leetcode/dynamic-programming/longest-increasing-subsequence","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/dynamic-programming/longest-increasing-subsequence.md","tags":[{"inline":true,"label":"\u52a8\u6001\u89c4\u5212","permalink":"/docs/tags/\u52a8\u6001\u89c4\u5212"}],"version":"current","frontMatter":{"id":"longest-increasing-subsequence","title":"300. \u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217","tags":["\u52a8\u6001\u89c4\u5212"]},"sidebar":"tutorialSidebar","previous":{"title":"198. \u6253\u5bb6\u52ab\u820d","permalink":"/docs/coding/leetcode/dynamic-programming/house-robber"},"next":{"title":"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c","permalink":"/docs/coding/leetcode/dynamic-programming/maximum-subarray"}}');var r=s(74848),c=s(28453);const t={id:"longest-increasing-subsequence",title:"300. \u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217",tags:["\u52a8\u6001\u89c4\u5212"]},l=void 0,o={},a=[{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u52a8\u6001\u89c4\u5212",id:"\u65b9\u6cd5\u4e00\u52a8\u6001\u89c4\u5212",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u627e\u5230\u5176\u4e2d\u6700\u957f\u4e25\u683c\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5b50\u5e8f\u5217 \u662f\u7531\u6570\u7ec4\u6d3e\u751f\u800c\u6765\u7684\u5e8f\u5217\uff0c\u5220\u9664\uff08\u6216\u4e0d\u5220\u9664\uff09\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u800c\u4e0d\u6539\u53d8\u5176\u4f59\u5143\u7d20\u7684\u987a\u5e8f\u3002\u4f8b\u5982\uff0c[3,6,2,7] \u662f\u6570\u7ec4 [0,3,1,6,2,2,7] \u7684\u5b50\u5e8f\u5217\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 1\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1anums = [10,9,2,5,3,7,101,18]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u662f [2,3,7,101]\uff0c\u56e0\u6b64\u957f\u5ea6\u4e3a 4 \u3002\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 2\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1anums = [0,1,0,3,2,3]\n\u8f93\u51fa\uff1a4\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 3\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1anums = [7,7,7,7,7,7,7]\n\u8f93\u51fa\uff1a1\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["1 ",(0,r.jsx)(n.code,{children:"<="})," nums.length ",(0,r.jsx)(n.code,{children:"<="})," 2500"]}),"\n",(0,r.jsxs)(n.li,{children:["-104 ",(0,r.jsx)(n.code,{children:"<="})," nums[i] ",(0,r.jsx)(n.code,{children:"<="})," 104"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e00\u52a8\u6001\u89c4\u5212",children:"\u65b9\u6cd5\u4e00\uff1a\u52a8\u6001\u89c4\u5212"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar lengthOfLIS = function (nums) {\n  const dp = new Array(nums.length).fill(1);\n  let result = 1;\n  for (let i = 0; i < nums.length; i += 1) {\n    for (let j = 0; j < i; j += 1) {\n      if (nums[j] < nums[i]) {\n        dp[i] = Math.max(dp[j] + 1, dp[i]);\n        result = Math.max(result, dp[i]);\n      }\n    }\n  }\n  return result;\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(96540);const r={},c=i.createContext(r);function t(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);