"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[9251],{8813:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"coding/leetcode/stack/valid-parentheses","title":"20.\u6709\u6548\u7684\u62ec\u53f7","description":"\u9898\u76ee\u63cf\u8ff0","source":"@site/docs/coding/leetcode/stack/valid-parentheses.md","sourceDirName":"coding/leetcode/stack","slug":"/coding/leetcode/stack/valid-parentheses","permalink":"/docs/coding/leetcode/stack/valid-parentheses","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/stack/valid-parentheses.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"933. \u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570","permalink":"/docs/coding/leetcode/queue/number-of-recent-calls"},"next":{"title":"94. \u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386","permalink":"/docs/coding/leetcode/tree/binary-tree-inorder-traversal"}}');var i=s(74848),r=s(28453);const c={},t="20.\u6709\u6548\u7684\u62ec\u53f7",d={},a=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00: \u6808",id:"\u65b9\u6cd5\u4e00-\u6808",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1areplace\u5927\u6cd5",id:"\u65b9\u6cd5\u4e8creplace\u5927\u6cd5",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"20\u6709\u6548\u7684\u62ec\u53f7",children:"20.\u6709\u6548\u7684\u62ec\u53f7"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsxs)(n.p,{children:["\u7ed9\u5b9a\u4e00\u4e2a\u53ea\u5305\u62ec '('\uff0c')'\uff0c'","\uff0c","'\uff0c'['\uff0c']'\xa0\u7684\u5b57\u7b26\u4e32 s \uff0c\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u6709\u6548\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6709\u6548\u5b57\u7b26\u4e32\u9700\u6ee1\u8db3\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5de6\u62ec\u53f7\u5fc5\u987b\u7528\u76f8\u540c\u7c7b\u578b\u7684\u53f3\u62ec\u53f7\u95ed\u5408\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5de6\u62ec\u53f7\u5fc5\u987b\u4ee5\u6b63\u786e\u7684\u987a\u5e8f\u95ed\u5408\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Given a string s containing just the characters '(', ')', '",", ","', '[' and ']', determine if the input string is valid."]}),"\n",(0,i.jsx)(n.p,{children:"An input string is valid if:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open brackets must be closed by the same type of brackets."}),"\n",(0,i.jsx)(n.li,{children:"Open brackets must be closed in the correct order."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e00-\u6808",children:"\u65b9\u6cd5\u4e00: \u6808"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u601d\u8def\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9047\u5230\u5de6\u62ec\u53f7\u65f6\uff0c\u540e\u7eed\u904d\u5386\u9700\u8981\u4e00\u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u53f3\u62ec\u53f7\u624d\u53ef\u4ee5\u4f7f\u5176\u95ed\u5408\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u9760\u540e\u9047\u5230\u7684\u5de6\u62ec\u53f7\u9700\u8981\u4f18\u5148\u95ed\u5408"}),"\uff0c\u6240\u4ee5\u628a\u5de6\u62ec\u53f7\u63a8\u5165\u6808\u9876\uff0c\u9047\u5230\u53f3\u62ec\u53f7\u9700\u8981\u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u5de6\u62ec\u53f7\u95ed\u5408\uff0c\n\u7ee7\u800c\u53bb\u5224\u65ad\u5de6\u62ec\u53f7\u7c7b\u578b\uff0c\u5982\u4f55\u7c7b\u578b\u4e0d\u5339\u914d\u6216\u8005\u6808\u91cc\u6ca1\u6709\u5de6\u62ec\u53f7\uff0c\u90a3\u5c31\u76f4\u63a5\u5224\u5b9a\u4e0d\u5408\u6cd5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u904d\u5386\u7ed3\u675f\u540e\u5982\u679c\u6808\u91cc\u6ca1\u6709\u5143\u7d20\uff08\u5de6\u62ec\u53f7\uff09\uff0c\u8bf4\u660e\u4e4b\u524d\u63a8\u8fdb\u53bb\u7684\u5de6\u62ec\u53f7\u90fd\u95ed\u5408\u4e86\ud83d\udc4f\uff0c\u5982\u679c\u6709\u5143\u7d20\uff0c\u90a3\u5c31\u5224\u5b9a\u4e0d\u5408\u6cd5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u6808"}),"\n",(0,i.jsxs)(n.li,{children:["\u626b\u63cf\u5b57\u7b26\u4e32","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9047\u5230\u5de6\u62ec\u53f7 \u5165\u6808"}),"\n",(0,i.jsx)(n.li,{children:"\u9047\u5230\u548c\u6808\u9876\u62ec\u53f7\u5339\u914d\u7684\u53f3\u62ec\u53f7 \u51fa\u6808"}),"\n",(0,i.jsx)(n.li,{children:"\u9047\u5230\u548c\u6808\u9876\u62ec\u53f7\u7c7b\u578b\u4e0d\u5339\u914d\u7684 \u5224\u5b9a\u4e0d\u5408\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u6700\u540e\u6808\u7a7a\u4e86\u5c31\u5408\u6cd5\uff0c\u5426\u5219\u4e0d\u5408\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u590d\u6742\u5ea6\u5206\u6790\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(N), s.length"}),"\n",(0,i.jsxs)(n.li,{children:["\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(N), \u6808\u4e2d\u5b57\u7b26\u6570\u91cf\u4e3an, \u5373s\u4e3a",(0,i.jsx)(n.code,{children:"(([{((("}),"(n\u4e2a\u5355\u8fb9\u7b26\u53f7)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var isValid = function(s) {\n  if (s.length % 2) {\n    return false\n  }\n  \n  const stack = []\n  const pairObj = {\n    ')': '(',\n    '}': '{',\n    ']': '['\n  }\n\n  for(let ch of s) {\n    if ([')', '}', ']'].includes(ch)) {\n      if (!stack.length || stack[stack.length - 1] !== pairObj[ch]) {\n        return false\n      }\n      stack.pop()\n    } else {\n      stack.push(ch)\n    }\n  }\n\n  return !stack.length\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e8creplace\u5927\u6cd5",children:"\u65b9\u6cd5\u4e8c\uff1areplace\u5927\u6cd5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u601d\u8def\uff1a\u6709\u7c7b\u578b\u4e00\u6837\u7684\u62ec\u53f7\u54b1\u5c31\u66ff\u4e86\u4ed6\ud83c\udfaf\uff0c\u66ff\u5230\u4ec0\u4e48\u90fd\u4e0d\u5269\u5c31\u662f\u5408\u6cd5\u7684\ud83d\udc4f"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var isValid = function(s) {\n  let len = s.length\n  while (len && len % 2 === 0) {\n    s = s.replace('()', '').replace('{}', '').replace('[]', '')\n    if (s.length === len) {\n      return false\n    }\n    len = s.length\n  } \n  return len === 0\n};\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var l=s(96540);const i={},r=l.createContext(i);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);