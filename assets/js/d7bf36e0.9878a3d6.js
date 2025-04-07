"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[8484],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(96540);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}},58408:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"coding/leetcode/tree/invert-binary-tree","title":"226. \u7ffb\u8f6c\u4e8c\u53c9\u6811","description":"\u9898\u76ee\u63cf\u8ff0","source":"@site/docs/coding/leetcode/tree/invert-binary-tree.md","sourceDirName":"coding/leetcode/tree","slug":"/coding/leetcode/tree/invert-binary-tree","permalink":"/myblog/docs/coding/leetcode/tree/invert-binary-tree","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/leetcode/tree/invert-binary-tree.md","tags":[{"inline":true,"label":"\u4e8c\u53c9\u6811","permalink":"/myblog/docs/tags/\u4e8c\u53c9\u6811"},{"inline":true,"label":"dfs","permalink":"/myblog/docs/tags/dfs"},{"inline":true,"label":"bfs","permalink":"/myblog/docs/tags/bfs"}],"version":"current","frontMatter":{"id":"invert-binary-tree","title":"226. \u7ffb\u8f6c\u4e8c\u53c9\u6811","tags":["\u4e8c\u53c9\u6811","dfs","bfs"]},"sidebar":"tutorialSidebar","previous":{"title":"199. \u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe","permalink":"/myblog/docs/coding/leetcode/tree/binary-tree-right-side-view"},"next":{"title":"235. \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148","permalink":"/myblog/docs/coding/leetcode/tree/lowest-common-ancestor-of-a-binary-search-tree"}}');var i=r(74848),l=r(28453);const s={id:"invert-binary-tree",title:"226. \u7ffb\u8f6c\u4e8c\u53c9\u6811",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},o=void 0,d={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1adfs",id:"\u65b9\u6cd5\u4e00dfs",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1abfs",id:"\u65b9\u6cd5\u4e8cbfs",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"\u7ed9\u4f60\u4e00\u68f5\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 root \uff0c\u7ffb\u8f6c\u8fd9\u68f5\u4e8c\u53c9\u6811\uff0c\u5e76\u8fd4\u56de\u5176\u6839\u8282\u70b9\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b 1\uff1a\n",(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg",alt:"invert1-tree"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1aroot = [4,2,7,1,3,6,9]\n\u8f93\u51fa\uff1a[4,7,2,9,6,3,1]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b 2\uff1a\n",(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg",alt:"invert2-tree"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1aroot = [2,1,3]\n\u8f93\u51fa\uff1a[2,3,1]\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b 3\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\u8f93\u5165\uff1aroot = []\n\u8f93\u51fa\uff1a[]\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6811\u4e2d\u8282\u70b9\u6570\u76ee\u8303\u56f4\u5728 [0, 100] \u5185"}),"\n",(0,i.jsxs)(n.li,{children:["-100 ",(0,i.jsx)(n.code,{children:"<="})," Node.val ",(0,i.jsx)(n.code,{children:"<="})," 100"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u89e3\u9898\u65b9\u6cd5",children:"\u89e3\u9898\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e00dfs",children:"\u65b9\u6cd5\u4e00\uff1adfs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u601d\u8def\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u524d\u5e8f\u904d\u5386/\u540e\u5e8f\u904d\u5386"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u524d\u5e8f\u904d\u5386\u6839\u8282\u70b9\u5de6\u5b50\u6811\u53f3\u5b50\u6811\uff0c\u5148\u5904\u7406\u5f53\u524d\u8282\u70b9\uff08\u4ea4\u6362\u5de6\u53f3\u5b50\u6811\uff09\uff0c\u518d\u9012\u5f52\u5b50\u6811"}),"\n",(0,i.jsx)(n.li,{children:"\u904d\u5386\u5230 null\uff0c\u6ca1\u6709\u5b50\u6811\u53ef\u4ea4\u6362\uff0c\u8fd4\u56de\u5b50\u6811\uff08null\uff09"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u590d\u6742\u5ea6\u5206\u6790"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6240\u6709\u8282\u70b9\u90fd\u9700\u8bbf\u95ee\u4e00\u6b21"}),"\n",(0,i.jsx)(n.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6700\u574f\u60c5\u51b5\u4e3a\u6811\u7684\u9ad8\u5ea6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function (root) {\n  if (root === null) {\n    return null;\n  }\n  const temp = root.left;\n  root.left = root.right;\n  root.right = temp;\n  invertTree(root.left);\n  invertTree(root.right);\n  return root;\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u65b9\u6cd5\u4e8cbfs",children:"\u65b9\u6cd5\u4e8c\uff1abfs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u601d\u8def\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c42\u5e8f\u904d\u5386\u4e8c\u53c9\u6811"}),"\n",(0,i.jsx)(n.li,{children:"\u904d\u5386\u5230 null\uff0c\u6ca1\u6709\u5b50\u6811\u53ef\u4ea4\u6362\uff0c\u8fd4\u56de\u5b50\u6811\uff08null\uff09"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6839\u8282\u70b9\u5165\u5217"}),"\n",(0,i.jsx)(n.li,{children:"\u961f\u5934\u51fa\u961f\uff0c\u4ea4\u6362\u5de6\u53f3\u5b50\u6811"}),"\n",(0,i.jsx)(n.li,{children:"\u5de6\u53f3\u5b50\u8282\u70b9\u5165\u961f"}),"\n",(0,i.jsx)(n.li,{children:"\u961f\u5217\u4e3a\u7a7a\u65f6\uff0c\u6240\u6709\u8282\u70b9\u904d\u5386\u7ed3\u675f\uff0c\u5b50\u6811\u5747\u88ab\u7ffb\u8f6c"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u590d\u6742\u5ea6\u5206\u6790"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u9700\u5165\u961f\u51fa\u961f\u4e00\u6b21"}),"\n",(0,i.jsx)(n.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u5305\u542b\u6240\u6709\u53f6\u5b50\u8282\u70b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function (root) {\n  if (root === null) {\n    return null;\n  }\n  const queue = [root];\n  while (queue.length) {\n    const node = queue.shift();\n    const temp = node.left;\n    node.left = node.right;\n    node.right = temp;\n    if (node.left) {\n      queue.push(node.left);\n    }\n    if (node.right) {\n      queue.push(node.right);\n    }\n  }\n  return root;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);