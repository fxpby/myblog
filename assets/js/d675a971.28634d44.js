"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[1131],{28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>r});var i=s(96540);const l={},c=i.createContext(l);function t(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(c.Provider,{value:e},n.children)}},57887:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"coding/leetcode/array/contains-duplicate","title":"217. \u5b58\u5728\u91cd\u590d\u5143\u7d20","description":"\u9898\u76ee\u63cf\u8ff0","source":"@site/docs/coding/leetcode/array/contains-duplicate.md","sourceDirName":"coding/leetcode/array","slug":"/coding/leetcode/array/contains-duplicate","permalink":"/myblog/docs/coding/leetcode/array/contains-duplicate","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/array/contains-duplicate.md","tags":[{"inline":true,"label":"\u6570\u7ec4","permalink":"/myblog/docs/tags/\u6570\u7ec4"},{"inline":true,"label":"\u54c8\u5e0c\u8868","permalink":"/myblog/docs/tags/\u54c8\u5e0c\u8868"}],"version":"current","frontMatter":{"id":"contains-duplicate","title":"217. \u5b58\u5728\u91cd\u590d\u5143\u7d20","tags":["\u6570\u7ec4","\u54c8\u5e0c\u8868"]},"sidebar":"tutorialSidebar","previous":{"title":"\u4e24\u6570\u4e4b\u548c","permalink":"/myblog/docs/coding/leetcode/array/twosum"},"next":{"title":"904. \u6c34\u679c\u6210\u7bee","permalink":"/myblog/docs/coding/leetcode/array/fruit-into-baskets"}}');var l=s(74848),c=s(28453);const t={id:"contains-duplicate",title:"217. \u5b58\u5728\u91cd\u590d\u5143\u7d20",tags:["\u6570\u7ec4","\u54c8\u5e0c\u8868"]},r=void 0,a={},d=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u6392\u5e8f",id:"\u65b9\u6cd5\u4e00\u6392\u5e8f",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u54c8\u5e0c\u8868",id:"\u65b9\u6cd5\u4e8c\u54c8\u5e0c\u8868",level:3}];function o(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,l.jsx)(e.p,{children:"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u3002\u5982\u679c\u4efb\u4e00\u503c\u5728\u6570\u7ec4\u4e2d\u51fa\u73b0 \u81f3\u5c11\u4e24\u6b21 \uff0c\u8fd4\u56de true \uff1b\u5982\u679c\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u4e92\u4e0d\u76f8\u540c\uff0c\u8fd4\u56de false \u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u793a\u4f8b 1\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"\u8f93\u5165\uff1anums = [1,2,3,1]\n\u8f93\u51fa\uff1atrue\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u793a\u4f8b 2\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"\u8f93\u5165\uff1anums = [1,2,3,4]\n\u8f93\u51fa\uff1afalse\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u793a\u4f8b 3\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"\u8f93\u5165\uff1anums = [1,1,1,3,3,4,3,2,4,2]\n\u8f93\u51fa\uff1atrue\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["1 ",(0,l.jsx)(e.code,{children:"<="})," nums.length ",(0,l.jsx)(e.code,{children:"<="})," 105"]}),"\n",(0,l.jsxs)(e.li,{children:["-109 ",(0,l.jsx)(e.code,{children:"<="})," nums[i] ",(0,l.jsx)(e.code,{children:"<="})," 109"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,l.jsx)(e.h3,{id:"\u65b9\u6cd5\u4e00\u6392\u5e8f",children:"\u65b9\u6cd5\u4e00\uff1a\u6392\u5e8f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u601d\u8def: \u5148\u6392\u5e8f\uff0c\u5982\u679c\u6709\u91cd\u590d\u5143\u7d20\u5219\u4e00\u5b9a\u76f8\u90bb\uff0c\u6545\u5224\u65ad\u662f\u5426\u6709\u76f8\u90bb\u5143\u7d20\u5373\u53ef"}),"\n",(0,l.jsxs)(e.li,{children:["\u590d\u6742\u5ea6\u5206\u6790\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(nlogn)"}),"\n",(0,l.jsx)(e.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(logn), \u6392\u5e8f\u6808\u7a7a\u95f4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"var containsDuplicate = function (nums) {\n  nums = nums.sort((a, b) => a - b);\n  for (let i = 0; i < nums.length - 1; i += 1) {\n    if (nums[i] === nums[i + 1]) {\n      return true;\n    }\n  }\n  return false;\n};\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u65b9\u6cd5\u4e8c\u54c8\u5e0c\u8868",children:"\u65b9\u6cd5\u4e8c\uff1a\u54c8\u5e0c\u8868"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u601d\u8def\uff1a\u904d\u5386\u6570\u7ec4\u5f80 hash \u8868\u5b58\uff0c\u5982\u679c\u6709\u5b58\u8fc7\uff0c\u5219\u4e3a\u91cd\u590d"}),"\n",(0,l.jsxs)(e.li,{children:["\u590d\u6742\u5ea6\u5206\u6790","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)"}),"\n",(0,l.jsx)(e.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"var containsDuplicate = function (nums) {\n  const map = {};\n  for (let i = 0; i < nums.length; i++) {\n    if (map[nums[i]]) {\n      return true;\n    } else {\n      map[nums[i]] = 1;\n    }\n  }\n  return false;\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}}}]);