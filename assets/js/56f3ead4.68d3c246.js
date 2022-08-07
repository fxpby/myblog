"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=p(n),d=l,c=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(c,i(i({ref:t},m),{},{components:n})):r.createElement(c,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={id:"maximum-depth-of-binary-tree",title:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},i=void 0,o={unversionedId:"leetcode/tree/maximum-depth-of-binary-tree",id:"leetcode/tree/maximum-depth-of-binary-tree",title:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/tree/maximum-depth-of-binary-tree.md",sourceDirName:"leetcode/tree",slug:"/leetcode/tree/maximum-depth-of-binary-tree",permalink:"/myblog/docs/leetcode/tree/maximum-depth-of-binary-tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/tree/maximum-depth-of-binary-tree.md",tags:[{label:"\u4e8c\u53c9\u6811",permalink:"/myblog/docs/tags/\u4e8c\u53c9\u6811"},{label:"dfs",permalink:"/myblog/docs/tags/dfs"},{label:"bfs",permalink:"/myblog/docs/tags/bfs"}],version:"current",frontMatter:{id:"maximum-depth-of-binary-tree",title:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},sidebar:"leetcode",previous:{title:"111. \u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",permalink:"/myblog/docs/leetcode/tree/minimum-depth-of-binary-tree"},next:{title:"102. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",permalink:"/myblog/docs/leetcode/tree/binary-tree-level-order-traversal"}},u={},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1adfs",id:"\u65b9\u6cd5\u4e00dfs",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1abfs",id:"\u65b9\u6cd5\u4e8cbfs",level:3}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u627e\u51fa\u5176\u6700\u5927\u6df1\u5ea6\u3002"),(0,l.kt)("p",null,"\u4e8c\u53c9\u6811\u7684\u6df1\u5ea6\u4e3a\u6839\u8282\u70b9\u5230\u6700\u8fdc\u53f6\u5b50\u8282\u70b9\u7684\u6700\u957f\u8def\u5f84\u4e0a\u7684\u8282\u70b9\u6570\u3002"),(0,l.kt)("p",null,"\u8bf4\u660e:\xa0\u53f6\u5b50\u8282\u70b9\u662f\u6307\u6ca1\u6709\u5b50\u8282\u70b9\u7684\u8282\u70b9\u3002"),(0,l.kt)("p",null,"Given the root of a binary tree, return its maximum depth."),(0,l.kt)("p",null,"A binary tree's maximum depth\xa0is the number of nodes along the longest path from the root node down to the farthest leaf node."),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a\n\u7ed9\u5b9a\u4e8c\u53c9\u6811 ","[3,9,20,null,null,15,7]","\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    3\n   / \\\n  9  20\n    /  \\\n   15   7\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u5b83\u7684\u6700\u5927\u6df1\u5ea6\xa03 \u3002"),(0,l.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00dfs"},"\u65b9\u6cd5\u4e00\uff1adfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6c42\u6700\u5927\u6df1\u5ea6\uff0c\u8003\u8651\u4f7f\u7528\u6df1\u5ea6\u4f18\u5148\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u627e\u51fa\u6700\u5927\u5c42\u7ea7"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u53d8\u91cf\u8bb0\u5f55\u6700\u5927\u6df1\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u6811\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u66f4\u65b0\u6700\u5927\u6df1\u5ea6\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u6700\u5927\u6df1\u5ea6\u53d8\u91cf"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)/O(logN)\uff0c\u6700\u597d\u60c5\u51b5\u662fO(logN),\u6700\u5dee\u662fO(n)")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n  let res = 0\n  const dfs = (n, l) => {\n    if (!n) {\n      return\n    }\n    if (!n.left && !n.right) {\n      res = Math.max(res, l)\n    }\n    if (n.left) {\n      dfs(n.left, l + 1)\n    }\n    if (n.right) {\n      dfs(n.right, l + 1)\n    }\n  }\n  dfs(root, 1)\n  return res\n}\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8cbfs"},"\u65b9\u6cd5\u4e8c\uff1abfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u8bb0\u5f55\u6df1\u5ea6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u53d8\u91cf\u8bb0\u5f55\u6700\u5927\u6df1\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u6811\uff0c\u6bcf\u5c42\u904d\u5386\u5b8c\uff0c\u5982\u679c\u4e0b\u4e00\u5c42\u8fd8\u6709\u8282\u70b9\uff0c\u6df1\u5ea6",(0,l.kt)("inlineCode",{parentName:"li"},"+1")),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u6700\u5927\u6df1\u5ea6\u904d\u5386"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n), \u6bcf\u4e2a\u8282\u70b9\u904d\u5386\u4e00\u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6bcf\u4e2a\u8282\u70b9\u904d\u5386\u4e00\u6b21")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n  if (!root) {\n    return 0\n  }\n  const queue = [root]\n  let level = 1\n  while (queue.length) {\n    const queueSize = queue.length\n    for (let i = 0; i < queueSize; i += 1) {\n      const node = queue.shift()\n      if (node.left) {\n        queue.push(node.left)\n      }\n      if (node.right) {\n        queue.push(node.right)\n      }\n    }\n    if (queue.length) {\n      level += 1\n    }\n  }\n  return level\n}\n")))}s.isMDXComponent=!0}}]);