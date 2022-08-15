"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),f=l,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(7462),l=(t(7294),t(3905));const a={id:"binary-tree-right-side-view",title:"199. \u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},i=void 0,o={unversionedId:"leetcode/tree/binary-tree-right-side-view",id:"leetcode/tree/binary-tree-right-side-view",title:"199. \u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/tree/binary-tree-right-side-view.md",sourceDirName:"leetcode/tree",slug:"/leetcode/tree/binary-tree-right-side-view",permalink:"/myblog/docs/leetcode/tree/binary-tree-right-side-view",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/tree/binary-tree-right-side-view.md",tags:[{label:"\u4e8c\u53c9\u6811",permalink:"/myblog/docs/tags/\u4e8c\u53c9\u6811"},{label:"dfs",permalink:"/myblog/docs/tags/dfs"},{label:"bfs",permalink:"/myblog/docs/tags/bfs"}],version:"current",frontMatter:{id:"binary-tree-right-side-view",title:"199. \u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},sidebar:"leetcode",previous:{title:"102. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",permalink:"/myblog/docs/leetcode/tree/binary-tree-level-order-traversal"},next:{title:"94. \u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",permalink:"/myblog/docs/leetcode/tree/binary-tree-inorder-traversal"}},u={},s=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u65b9\u6cd5\u4e00\uff1adfs",id:"\u65b9\u6cd5\u4e00dfs",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1abfs",id:"\u65b9\u6cd5\u4e8cbfs",level:3}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684 \u6839\u8282\u70b9 root\uff0c\u60f3\u8c61\u81ea\u5df1\u7ad9\u5728\u5b83\u7684\u53f3\u4fa7\uff0c\u6309\u7167\u4ece\u9876\u90e8\u5230\u5e95\u90e8\u7684\u987a\u5e8f\uff0c\u8fd4\u56de\u4ece\u53f3\u4fa7\u6240\u80fd\u770b\u5230\u7684\u8282\u70b9\u503c\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    1  \u2190\n   / \\\n  2   3  \u2190\n   \\   \\\n    5   4  \u2190\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: [1, 2, 3, null, 5, null, 4];\n\u8f93\u51fa: [1, 3, 4];\n")),(0,l.kt)("p",null,"\u793a\u4f8b 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: [1, null, 3];\n\u8f93\u51fa: [1, 3];\n")),(0,l.kt)("p",null,"\u793a\u4f8b 3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: [];\n\u8f93\u51fa: [];\n")),(0,l.kt)("p",null,"\u63d0\u793a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u53c9\u6811\u7684\u8282\u70b9\u4e2a\u6570\u7684\u8303\u56f4\u662f ","[0,100]"),(0,l.kt)("li",{parentName:"ul"},"-100 <= Node.val <= 100")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00dfs"},"\u65b9\u6cd5\u4e00\uff1adfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6df1\u5ea6\u4f18\u5148\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u4f7f\u7528\u524d\u5e8f\u904d\u5386\u7684\u53cd\u5411\u904d\u5386\uff0c\u6839 => \u53f3 => \u5de6\uff0c\u5373\u53ef\u62ff\u5230\u53f3\u89c6\u56fe"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u53d8\u91cf\u8bb0\u5f55\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ul"},"\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u6811\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u5982\u679c\u5c42\u7ea7\u548c\u7ed3\u679c\u6570\u7ec4\u6570\u91cf\u76f8\u540c\uff0c\u8bf4\u660e\u4e3a\u5f53\u524d\u5c42\u7ea7\u7684\u7b2c\u4e00\u6b21\u904d\u5386\uff0c\u4e5f\u5c31\u662f\u53f3\u89c6\u56fe\u7684\u8282\u70b9\uff08\u6bcf\u5c42\u53ea\u53d6\u4e00\u4e2a\u8282\u70b9\uff09\uff0c\u628a\u8be5\u8282\u70b9\u63a8\u5165\u7ed3\u679c\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function (root) {\n  if (!root) {\n    return [];\n  }\n  const res = [];\n  const dfs = (node, l) => {\n    if (res.length === l) {\n      res.push(node.val);\n    }\n    if (node.right) {\n      dfs(node.right, l + 1);\n    }\n    if (node.left) {\n      dfs(node.left, l + 1);\n    }\n  };\n  dfs(root, 0);\n  return res;\n};\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8cbfs"},"\u65b9\u6cd5\u4e8c\uff1abfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e7f\u5ea6\u4f18\u5148\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u5c06\u5c42\u7ea7\u6700\u540e\u4e00\u9879\u5176\u63a8\u5165\u7ed3\u679c\u6570\u7ec4\u4e2d"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u53d8\u91cf\u8bb0\u5f55\u7ed3\u679c\u548c\u961f\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u6811\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u540c\u5c42\u7ea7\u7684\u8282\u70b9 val \u63a8\u5165\u76f8\u540c\u5c42\u7ea7\u6570\u7ec4\u4e2d\uff0c\u5c06\u5c42\u7ea7\u6570\u7ec4\u7684\u6700\u540e\u4e00\u9879\u5373\u53f3\u89c6\u56fe\u63a8\u5165\u7ed3\u679c\u6570\u7ec4\u4e2d\u3002\u5982\u679c\u5f53\u524d\u8282\u70b9\u6709\u5de6\u53f3\u5b50\u6811\uff0c\u5219\u538b\u5165\u961f\u5217\u3002\uff08while \u5faa\u73af\u7684\u6bcf\u4e00\u8f6e\u4e2d\uff0c\u90fd\u662f\u5c06\u5f53\u524d\u5c42\u7684\u6240\u6709\u8282\u70b9\u51fa\u961f\u5217\uff0c\u518d\u5c06\u4e0b\u4e00\u5c42\u7684\u6240\u6709\u8282\u70b9\u538b\u5165\u961f\u5217\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u5c42\u5e8f\u904d\u5386\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6bcf\u4e2a\u8282\u70b9\u8fdb\u961f\u51fa\u961f\u5404\u4e00\u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u961f\u5217\u4e2d\u5143\u7d20\u6700\u591a n \u4e2a")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function (root) {\n  if (!root) {\n    return [];\n  }\n  const res = [];\n  const queue = [root];\n  while (queue.length) {\n    let len = queue.length;\n    let levelRes = [];\n    while (len) {\n      const node = queue.shift();\n      levelRes.push(node.val);\n      if (node.left) {\n        queue.push(node.left);\n      }\n      if (node.right) {\n        queue.push(node.right);\n      }\n      len--;\n    }\n    res.push(levelRes[levelRes.length - 1]);\n  }\n  return res;\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function (root) {\n  if (!root) {\n    return [];\n  }\n  const res = [];\n  const queue = [root];\n  while (queue.length) {\n    let len = queue.length;\n    while (len) {\n      const node = queue.shift();\n      if (len === 1) {\n        res.push(node.val);\n      }\n      if (node.left) {\n        queue.push(node.left);\n      }\n      if (node.right) {\n        queue.push(node.right);\n      }\n      len--;\n    }\n  }\n  return res;\n};\n")))}d.isMDXComponent=!0}}]);