"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[8440],{21803:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"coding/leetcode/array/intersection-of-two-arrays-ii","title":"350. \u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6 II","description":"\u9898\u76ee\u63cf\u8ff0","source":"@site/docs/coding/leetcode/array/intersection-of-two-arrays-ii.md","sourceDirName":"coding/leetcode/array","slug":"/coding/leetcode/array/intersection-of-two-arrays-ii","permalink":"/docs/coding/leetcode/array/intersection-of-two-arrays-ii","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/array/intersection-of-two-arrays-ii.md","tags":[{"inline":true,"label":"\u6570\u7ec4","permalink":"/docs/tags/\u6570\u7ec4"},{"inline":true,"label":"\u53cc\u6307\u9488","permalink":"/docs/tags/\u53cc\u6307\u9488"}],"version":"current","frontMatter":{"id":"intersection-of-two-arrays-ii","title":"350. \u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6 II","tags":["\u6570\u7ec4","\u53cc\u6307\u9488"]},"sidebar":"tutorialSidebar","previous":{"title":"904. \u6c34\u679c\u6210\u7bee","permalink":"/docs/coding/leetcode/array/fruit-into-baskets"},"next":{"title":"merge-sorted-array","permalink":"/docs/coding/leetcode/array/merge-sorted-array"}}');var r=s(74848),t=s(28453);const l={id:"intersection-of-two-arrays-ii",title:"350. \u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6 II",tags:["\u6570\u7ec4","\u53cc\u6307\u9488"]},c=void 0,o={},a=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u54c8\u5e0c\u8868",id:"\u65b9\u6cd5\u4e00\u54c8\u5e0c\u8868",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u53cc\u6307\u9488",id:"\u65b9\u6cd5\u4e8c\u53cc\u6307\u9488",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,r.jsx)(e.p,{children:"\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570\u6570\u7ec4 nums1 \u548c nums2 \uff0c\u8bf7\u4f60\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u4e24\u6570\u7ec4\u7684\u4ea4\u96c6\u3002\u8fd4\u56de\u7ed3\u679c\u4e2d\u6bcf\u4e2a\u5143\u7d20\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u5e94\u4e0e\u5143\u7d20\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u90fd\u51fa\u73b0\u7684\u6b21\u6570\u4e00\u81f4\uff08\u5982\u679c\u51fa\u73b0\u6b21\u6570\u4e0d\u4e00\u81f4\uff0c\u5219\u8003\u8651\u53d6\u8f83\u5c0f\u503c\uff09\u3002\u53ef\u4ee5\u4e0d\u8003\u8651\u8f93\u51fa\u7ed3\u679c\u7684\u987a\u5e8f"}),"\n",(0,r.jsx)(e.p,{children:"\u793a\u4f8b 1\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"\u8f93\u5165\uff1anums1 = [1,2,2,1], nums2 = [2,2]\n\u8f93\u51fa\uff1a[2,2]\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u793a\u4f8b 2:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"\u8f93\u5165\uff1anums1 = [4,9,5], nums2 = [9,4,9,8,4]\n\u8f93\u51fa\uff1a[4,9]\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,r.jsx)(e.h3,{id:"\u65b9\u6cd5\u4e00\u54c8\u5e0c\u8868",children:"\u65b9\u6cd5\u4e00\uff1a\u54c8\u5e0c\u8868"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u601d\u8def\uff1a\u5229\u7528\u54c8\u5e0c\u8868\u5b58\u50a8 nums1 \u4e2d\u5143\u7d20\u51fa\u73b0\u6b21\u6570\uff0c\u518d\u5faa\u73af nums2 \uff0c\u82e5\u5b58\u5728\u5219 push \u5230\u7ed3\u679c\uff0c\u5e76\u4e14\u6b21\u6570\u51cf 1"}),"\n",(0,r.jsxs)(e.li,{children:["\u590d\u6742\u5ea6\u5206\u6790\uff1a","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(m+n), m \u662f\u904d\u5386 nums1, n \u662f\u904d\u5386 nums2"}),"\n",(0,r.jsx)(e.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(m+n), m \u662f\u54c8\u5e0c\u8868\u5927\u5c0f\uff0cn \u662f result \u6570\u7ec4\u957f\u5ea6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["1 ",(0,r.jsx)(e.code,{children:"<="})," nums1.length, nums2.length ",(0,r.jsx)(e.code,{children:"<="})," 1000"]}),"\n",(0,r.jsxs)(e.li,{children:["0 ",(0,r.jsx)(e.code,{children:"<="})," nums1[i], nums2[i] ",(0,r.jsx)(e.code,{children:"<="})," 1000"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var intersect = function (nums1, nums2) {\n  const map = {};\n  const res = [];\n  if (nums1.length < nums2.length) {\n    [nums1, nums2] = [nums2, nums1];\n  }\n\n  for (let i of nums1) {\n    if (map[i]) {\n      map[i] += 1;\n    } else {\n      map[i] = 1;\n    }\n  }\n\n  for (let i of nums2) {\n    if (map[i] > 0) {\n      res.push(i);\n      map[i] -= 1;\n    }\n  }\n  return res;\n};\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u65b9\u6cd5\u4e8c\u53cc\u6307\u9488",children:"\u65b9\u6cd5\u4e8c\uff1a\u53cc\u6307\u9488"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u601d\u8def\uff1a\u8bbe\u7f6e\u4e24\u4e2a\u6307\u9488\u5206\u522b\u6307\u5411\u4e24\u4e2a\u5df2\u5347\u5e8f\u6392\u5e8f\u7684\u6570\u7ec4\u5934\u90e8\uff0c\u5f53\u4e24\u4e2a\u6307\u9488\u6307\u5411\u5143\u7d20\u4e00\u6837\u65f6\uff0c\u52a0\u5165\u7ed3\u679c\uff0c\u4e24\u4e2a\u6307\u9488\u81ea\u589e\u3002\u5426\u5219\u6bd4\u8f83\u4e24\u4e2a\u5143\u7d20\uff0c\u5411\u53f3\u79fb\u52a8\u8f83\u5c0f\u5143\u7d20\u6307\u9488"}),"\n",(0,r.jsxs)(e.li,{children:["\u590d\u6742\u5ea6\u5206\u6790\uff1a","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(mlogm+nlogn), m\u3001n \u5206\u522b\u662f\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u6392\u5e8f\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(mlogm+nlogn)"}),"\n",(0,r.jsx)(e.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a\u7a7a\u95f4\u590d\u6742\u5ea6 O(logm+logn)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var intersect = function (nums1, nums2) {\n  nums1 = nums1.sort((a, b) => a - b);\n  nums2 = nums2.sort((a, b) => a - b);\n\n  const res = [];\n\n  let i = 0;\n  let j = 0;\n  while (i < nums1.length && j < nums2.length) {\n    if (nums1[i] < nums2[j]) {\n      i += 1;\n    } else if (nums1[i] > nums2[j]) {\n      j += 1;\n    } else {\n      res.push(nums1[i]);\n      i += 1;\n      j += 1;\n    }\n  }\n  return res;\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);