"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={id:"invert-binary-tree",title:"226. \u7ffb\u8f6c\u4e8c\u53c9\u6811",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},o=void 0,i={unversionedId:"leetcode/tree/invert-binary-tree",id:"leetcode/tree/invert-binary-tree",title:"226. \u7ffb\u8f6c\u4e8c\u53c9\u6811",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/tree/invert-binary-tree.md",sourceDirName:"leetcode/tree",slug:"/leetcode/tree/invert-binary-tree",permalink:"/myblog/docs/leetcode/tree/invert-binary-tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/tree/invert-binary-tree.md",tags:[{label:"\u4e8c\u53c9\u6811",permalink:"/myblog/docs/tags/\u4e8c\u53c9\u6811"},{label:"dfs",permalink:"/myblog/docs/tags/dfs"},{label:"bfs",permalink:"/myblog/docs/tags/bfs"}],version:"current",frontMatter:{id:"invert-binary-tree",title:"226. \u7ffb\u8f6c\u4e8c\u53c9\u6811",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},sidebar:"leetcode",previous:{title:"94. \u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",permalink:"/myblog/docs/leetcode/tree/binary-tree-inorder-traversal"},next:{title:"100. \u76f8\u540c\u7684\u6811",permalink:"/myblog/docs/leetcode/tree/same-tree"}},u={},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1adfs",id:"\u65b9\u6cd5\u4e00dfs",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1abfs",id:"\u65b9\u6cd5\u4e8cbfs",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u68f5\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 root \uff0c\u7ffb\u8f6c\u8fd9\u68f5\u4e8c\u53c9\u6811\uff0c\u5e76\u8fd4\u56de\u5176\u6839\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b 1\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg",alt:"invert1-tree"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = [4,2,7,1,3,6,9]\n\u8f93\u51fa\uff1a[4,7,2,9,6,3,1]\n")),(0,l.kt)("p",null,"\u793a\u4f8b 2\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg",alt:"invert2-tree"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = [2,1,3]\n\u8f93\u51fa\uff1a[2,3,1]\n")),(0,l.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = []\n\u8f93\u51fa\uff1a[]\n")),(0,l.kt)("p",null,"\u63d0\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6811\u4e2d\u8282\u70b9\u6570\u76ee\u8303\u56f4\u5728 ","[0, 100]"," \u5185"),(0,l.kt)("li",{parentName:"ul"},"-100 <= Node.val <= 100")),(0,l.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00dfs"},"\u65b9\u6cd5\u4e00\uff1adfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u524d\u5e8f\u904d\u5386/\u540e\u5e8f\u904d\u5386"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u524d\u5e8f\u904d\u5386\u6839\u8282\u70b9\u5de6\u5b50\u6811\u53f3\u5b50\u6811\uff0c\u5148\u5904\u7406\u5f53\u524d\u8282\u70b9\uff08\u4ea4\u6362\u5de6\u53f3\u5b50\u6811\uff09\uff0c\u518d\u9012\u5f52\u5b50\u6811"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u5230 null\uff0c\u6ca1\u6709\u5b50\u6811\u53ef\u4ea4\u6362\uff0c\u8fd4\u56de\u5b50\u6811\uff08null\uff09"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6240\u6709\u8282\u70b9\u90fd\u9700\u8bbf\u95ee\u4e00\u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6700\u574f\u60c5\u51b5\u4e3a\u6811\u7684\u9ad8\u5ea6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function (root) {\n  if (root === null) {\n    return null;\n  }\n  const temp = root.left;\n  root.left = root.right;\n  root.right = temp;\n  invertTree(root.left);\n  invertTree(root.right);\n  return root;\n};\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8cbfs"},"\u65b9\u6cd5\u4e8c\uff1abfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c42\u5e8f\u904d\u5386\u4e8c\u53c9\u6811"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u5230 null\uff0c\u6ca1\u6709\u5b50\u6811\u53ef\u4ea4\u6362\uff0c\u8fd4\u56de\u5b50\u6811\uff08null\uff09"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6839\u8282\u70b9\u5165\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u961f\u5934\u51fa\u961f\uff0c\u4ea4\u6362\u5de6\u53f3\u5b50\u6811"),(0,l.kt)("li",{parentName:"ul"},"\u5de6\u53f3\u5b50\u8282\u70b9\u5165\u961f"),(0,l.kt)("li",{parentName:"ul"},"\u961f\u5217\u4e3a\u7a7a\u65f6\uff0c\u6240\u6709\u8282\u70b9\u904d\u5386\u7ed3\u675f\uff0c\u5b50\u6811\u5747\u88ab\u7ffb\u8f6c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u9700\u5165\u961f\u51fa\u961f\u4e00\u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u5305\u542b\u6240\u6709\u53f6\u5b50\u8282\u70b9")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function (root) {\n  if (root === null) {\n    return null;\n  }\n  const queue = [root];\n  while (queue.length) {\n    const node = queue.shift();\n    const temp = node.left;\n    node.left = node.right;\n    node.right = temp;\n    if (node.left) {\n      queue.push(node.left);\n    }\n    if (node.right) {\n      queue.push(node.right);\n    }\n  }\n  return root;\n};\n")))}c.isMDXComponent=!0}}]);