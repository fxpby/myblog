"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[1178],{28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>c});var r=l(96540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}},30971:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"coding/leetcode/tree/same-tree","title":"100. \u76f8\u540c\u7684\u6811","description":"\u9898\u76ee\u63cf\u8ff0","source":"@site/docs/coding/leetcode/tree/same-tree.md","sourceDirName":"coding/leetcode/tree","slug":"/coding/leetcode/tree/same-tree","permalink":"/myblog/docs/coding/leetcode/tree/same-tree","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/tree/same-tree.md","tags":[{"inline":true,"label":"\u4e8c\u53c9\u6811","permalink":"/myblog/docs/tags/\u4e8c\u53c9\u6811"},{"inline":true,"label":"dfs","permalink":"/myblog/docs/tags/dfs"},{"inline":true,"label":"bfs","permalink":"/myblog/docs/tags/bfs"}],"version":"current","frontMatter":{"id":"same-tree","title":"100. \u76f8\u540c\u7684\u6811","tags":["\u4e8c\u53c9\u6811","dfs","bfs"]},"sidebar":"tutorialSidebar","previous":{"title":"111. \u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6","permalink":"/myblog/docs/coding/leetcode/tree/minimum-depth-of-binary-tree"},"next":{"title":"101. \u5bf9\u79f0\u4e8c\u53c9\u6811","permalink":"/myblog/docs/coding/leetcode/tree/symmetric-tree"}}');var s=l(74848),i=l(28453);const t={id:"same-tree",title:"100. \u76f8\u540c\u7684\u6811",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},c=void 0,u={},d=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1adfs",id:"\u65b9\u6cd5\u4e00dfs",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1abfs",id:"\u65b9\u6cd5\u4e8cbfs",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"\u7ed9\u4f60\u4e24\u68f5\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 p \u548c q \uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u68c0\u9a8c\u8fd9\u4e24\u68f5\u6811\u662f\u5426\u76f8\u540c\u3002\n\u5982\u679c\u4e24\u4e2a\u6811\u5728\u7ed3\u6784\u4e0a\u76f8\u540c\uff0c\u5e76\u4e14\u8282\u70b9\u5177\u6709\u76f8\u540c\u7684\u503c\uff0c\u5219\u8ba4\u4e3a\u5b83\u4eec\u662f\u76f8\u540c\u7684\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 1\uff1a\n",(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg",alt:"ex1"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1ap = [1,2,3], q = [1,2,3]\n\u8f93\u51fa\uff1atrue\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 2\uff1a\n",(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg",alt:"ex2"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1ap = [1,2], q = [1,null,2]\n\u8f93\u51fa\uff1afalse\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 3\uff1a\n",(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg",alt:"ex3"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1ap = [1,2,1], q = [1,1,2]\n\u8f93\u51fa\uff1afalse\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e24\u68f5\u6811\u4e0a\u7684\u8282\u70b9\u6570\u76ee\u90fd\u5728\u8303\u56f4 [0, 100] \u5185"}),"\n",(0,s.jsxs)(n.li,{children:["-104 ",(0,s.jsx)(n.code,{children:"<="})," Node.val ",(0,s.jsx)(n.code,{children:"<="})," 104"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e00dfs",children:"\u65b9\u6cd5\u4e00\uff1adfs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u601d\u8def\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5224\u65ad\u4e24\u68f5\u6811\u8282\u70b9","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u90fd\u4e3a\u7a7a\u5219\u76f8\u540c"}),"\n",(0,s.jsx)(n.li,{children:"\u4e00\u4e2a\u4e3a\u7a7a\u53e6\u4e00\u4e2a\u4e0d\u4e3a\u7a7a\uff0c\u4e0d\u540c"}),"\n",(0,s.jsx)(n.li,{children:"\u8282\u70b9\u90fd\u6709\u503c\u4f46\u662f val \u4e0d\u540c\uff0c\u4e0d\u540c"}),"\n",(0,s.jsx)(n.li,{children:"\u9012\u5f52\u4ed6\u4eec\u7684\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u590d\u6742\u5ea6\u5206\u6790\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0cn \u4e3a\u6811\u8282\u70b9\u4e2a\u6570"}),"\n",(0,s.jsx)(n.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u9012\u5f52\u5c42\u6570\uff0c\u5373\u9ad8\u5ea6\u8f83\u5c0f\u4e8c\u53c9\u6811\u7684\u9ad8\u5ea6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */\nvar isSameTree = function (p, q) {\n  if (p === null && q === null) {\n    return true;\n  }\n  if (p === null || q === null) {\n    return false;\n  }\n  if (p.val !== q.val) {\n    return false;\n  }\n  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e8cbfs",children:"\u65b9\u6cd5\u4e8c\uff1abfs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u601d\u8def\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u5224\u65ad\u6811\u7ed3\u6784\u662f\u5426\u76f8\u540c\uff0c\u518d\u5224\u65ad\u503c\u662f\u5426\u76f8\u540c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u521b\u5efa\u961f\u5217\u5b58\u50a8\u4e8c\u53c9\u6811\u6bcf\u4e00\u5c42\u7684\u8282\u70b9\uff0c\u6bcf\u6b21\u53d6\u961f\u5934\u8fdb\u884c\u6bd4\u8f83","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u82e5\u4e24\u4e2a\u8282\u70b9\u503c\u4e0d\u540c\u5219\u4e0d\u540c"}),"\n",(0,s.jsx)(n.li,{children:"\u82e5\u503c\u76f8\u540c\uff0c\u5224\u65ad\u4e24\u4e2a\u5de6\u53f3\u5b50\u8282\u70b9\u662f\u5426\u4e3a\u7a7a\uff0c\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u4e3a\u7a7a\u5219\u7ed3\u6784\u4e0d\u540c"}),"\n",(0,s.jsx)(n.li,{children:"\u82e5\u4e24\u5de6\u53f3\u5b50\u8282\u70b9\u7ed3\u6784\u76f8\u540c\uff0c\u5c06\u975e\u7a7a\u8282\u70b9\u52a0\u5165\u961f\u5217"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u590d\u6742\u5ea6\u5206\u6790\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u4e8c\u53c9\u6811\u8282\u70b9\u6570"}),"\n",(0,s.jsx)(n.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u4e8c\u53c9\u6811\u8282\u70b9\u6570"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u961f\u5217\u53ef\u4ee5\u4f7f\u7528\u5bf9\u8c61\u7684\u5f62\u5f0f\uff0c\u53ea\u521b\u5efa\u4e00\u4e2a\u5c31 OK\uff0c\u5f88\u5de7\u5999"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */\nvar isSameTree = function (p, q) {\n  if (p === null && q === null) {\n    return true;\n  } else if (p === null || q === null) {\n    return false;\n  }\n  const queue = [{ p, q }];\n  while (queue.length) {\n    const cur = queue.shift();\n    if (cur.p === null && cur.q === null) {\n      continue;\n    }\n    if (cur.p === null || cur.q === null) {\n      return false;\n    }\n    if (cur.p.val !== cur.q.val) {\n      return false;\n    }\n    queue.push({ p: cur.p.left, q: cur.q.left });\n    queue.push({ p: cur.p.right, q: cur.q.right });\n  }\n  return true;\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */\nvar isSameTree = function (p, q) {\n  if (p === null && q === null) {\n    return true;\n  } else if (p === null || q === null) {\n    return false;\n  }\n  const queue1 = [p];\n  const queue2 = [q];\n  while (queue1.length && queue2.length) {\n    const n1 = queue1.shift();\n    const n2 = queue2.shift();\n    const left1 = n1.left;\n    const left2 = n2.left;\n    const right1 = n1.right;\n    const right2 = n2.right;\n    if (n1.val !== n2.val) {\n      return false;\n    }\n    if ((left1 === null) ^ (left2 === null)) {\n      return false;\n    }\n    if ((right1 === null) ^ (right2 === null)) {\n      return false;\n    }\n    if (left1) {\n      queue1.push(left1);\n    }\n    if (left2) {\n      queue2.push(left2);\n    }\n    if (right1) {\n      queue1.push(right1);\n    }\n    if (right2) {\n      queue2.push(right2);\n    }\n  }\n  return queue1.length === 0 && queue2.length === 0;\n};\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);