"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[6725],{13950:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"coding/leetcode/linkedList/remove-linked-list-elements","title":"203. \u79fb\u9664\u94fe\u8868\u5143\u7d20","description":"\u9898\u76ee\u63cf\u8ff0","source":"@site/docs/coding/leetcode/linkedList/remove-linked-list-elements.md","sourceDirName":"coding/leetcode/linkedList","slug":"/coding/leetcode/linkedList/remove-linked-list-elements","permalink":"/myblog/docs/coding/leetcode/linkedList/remove-linked-list-elements","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/linkedList/remove-linked-list-elements.md","tags":[{"inline":true,"label":"\u94fe\u8868","permalink":"/myblog/docs/tags/\u94fe\u8868"},{"inline":true,"label":"\u8fed\u4ee3","permalink":"/myblog/docs/tags/\u8fed\u4ee3"}],"version":"current","frontMatter":{"id":"remove-linked-list-elements","title":"203. \u79fb\u9664\u94fe\u8868\u5143\u7d20","tags":["\u94fe\u8868","\u8fed\u4ee3"]},"sidebar":"tutorialSidebar","previous":{"title":"83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20","permalink":"/myblog/docs/coding/leetcode/linkedList/remove-duplicates-from-sorted-list"},"next":{"title":"92. \u53cd\u8f6c\u94fe\u8868 II","permalink":"/myblog/docs/coding/leetcode/linkedList/reverse-linked-list-ii"}}');var t=l(74848),s=l(28453);const d={id:"remove-linked-list-elements",title:"203. \u79fb\u9664\u94fe\u8868\u5143\u7d20",tags:["\u94fe\u8868","\u8fed\u4ee3"]},r=void 0,a={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u8fed\u4ee3+\u865a\u62df\u5934\u7ed3\u70b9",id:"\u65b9\u6cd5\u4e00\u8fed\u4ee3\u865a\u62df\u5934\u7ed3\u70b9",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u9012\u5f52",id:"\u65b9\u6cd5\u4e8c\u9012\u5f52",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u4f60\u4e00\u4e2a\u94fe\u8868\u7684\u5934\u8282\u70b9 head \u548c\u4e00\u4e2a\u6574\u6570 val \uff0c\u8bf7\u4f60\u5220\u9664\u94fe\u8868\u4e2d\u6240\u6709\u6ee1\u8db3 Node.val == val \u7684\u8282\u70b9\uff0c\u5e76\u8fd4\u56de \u65b0\u7684\u5934\u8282\u70b9 \u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b 1\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1ahead = [1,2,6,3,4,5,6], val = 6\n\u8f93\u51fa\uff1a[1,2,3,4,5]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b 2\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1ahead = [], val = 1\n\u8f93\u51fa\uff1a[]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b 3\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1ahead = [7,7,7,7], val = 7\n\u8f93\u51fa\uff1a[]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5217\u8868\u4e2d\u7684\u8282\u70b9\u6570\u76ee\u5728\u8303\u56f4 [0, 104] \u5185"}),"\n",(0,t.jsxs)(n.li,{children:["1 ",(0,t.jsx)(n.code,{children:"<="})," Node.val ",(0,t.jsx)(n.code,{children:"<="})," 50"]}),"\n",(0,t.jsxs)(n.li,{children:["0 ",(0,t.jsx)(n.code,{children:"<="})," val ",(0,t.jsx)(n.code,{children:"<="})," 50"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e00\u8fed\u4ee3\u865a\u62df\u5934\u7ed3\u70b9",children:"\u65b9\u6cd5\u4e00\uff1a\u8fed\u4ee3+\u865a\u62df\u5934\u7ed3\u70b9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u601d\u8def\uff1a\u521d\u59cb\u5316\u865a\u62df\u5934\u7ed3\u70b9\u548c\u6307\u5411 head \u7684\u6307\u9488 temp\uff0c\u6307\u9488\u540e\u79fb\uff0c\u5224\u65ad\u4e0b\u4e00\u8282\u70b9\u503c\u662f\u5426\u4e3a val","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u82e5\u76f8\u7b49\uff0c\u5219\u6307\u9488\u6307\u5411\u4e0b\u4e0b\u4e2a\u8282\u70b9\uff0c\u5373\u5220\u9664\u4e86\u4e0b\u4e00\u4e2a\u8282\u70b9"}),"\n",(0,t.jsx)(n.li,{children:"\u82e5\u4e0d\u7b49\uff0c\u5219\u7ee7\u7eed\u540e\u79fb"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u590d\u6742\u5ea6\u5206\u6790\uff1a","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0cn \u4e3a\u94fe\u8868\u957f\u5ea6\uff0c\u9700\u904d\u5386\u94fe\u8868\u4e00\u6b21"}),"\n",(0,t.jsx)(n.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} val\n * @return {ListNode}\n */\nvar removeElements = function (head, val) {\n  let dummyHead = new ListNode(0);\n  dummyHead.next = head;\n  let temp = dummyHead;\n\n  while (temp.next !== null) {\n    if (temp.next.val === val) {\n      temp.next = temp.next.next;\n    } else {\n      temp = temp.next;\n    }\n  }\n\n  return dummyHead.next;\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e8c\u9012\u5f52",children:"\u65b9\u6cd5\u4e8c\uff1a\u9012\u5f52"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u601d\u8def\uff1a\u5bf9\u6bcf\u4e2a\u5b50\u8282\u70b9\u8c03\u7528 removeElements\uff0c\u5982\u679c\u662f null \u5c31\u8fd4\u56de null\uff0c\u5982\u679c\u662f\u7ed9\u5b9a\u503c\u5c31\u8fd4\u56de\u5f53\u524d\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\uff0c\u4e0d\u662f\u5219\u8fd4\u56de\u5f53\u524d\u8282\u70b9"}),"\n",(0,t.jsxs)(n.li,{children:["\u590d\u6742\u5ea6\u5206\u6790\uff1a","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n),\u94fe\u8868\u957f\u5ea6\uff0c\u9700\u904d\u5386\u94fe\u8868\u4e00\u6b21"}),"\n",(0,t.jsx)(n.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n),\u94fe\u8868\u957f\u5ea6\uff0c\u53d6\u51b3\u4e8e\u9012\u5f52\u8c03\u7528\u6808\uff0c\u6700\u591a\u4e3a n"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} val\n * @return {ListNode}\n */\nvar removeElements = function (head, val) {\n  if (head === null) {\n    return head;\n  }\n  head.next = removeElements(head.next, val);\n  if (head.val === val) {\n    return head.next;\n  } else {\n    return head;\n  }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>r});var i=l(96540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);