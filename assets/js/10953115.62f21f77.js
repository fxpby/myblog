"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4502],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=u(t),p=l,g=f["".concat(s,".").concat(p)]||f[p]||c[p]||o;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(7462),l=(t(7294),t(3905));const o={id:"binary-tree-inorder-traversal",title:"94. \u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},a=void 0,i={unversionedId:"leetcode/tree/binary-tree-inorder-traversal",id:"leetcode/tree/binary-tree-inorder-traversal",title:"94. \u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/tree/binary-tree-inorder-traversal.md",sourceDirName:"leetcode/tree",slug:"/leetcode/tree/binary-tree-inorder-traversal",permalink:"/myblog/docs/leetcode/tree/binary-tree-inorder-traversal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/tree/binary-tree-inorder-traversal.md",tags:[{label:"\u4e8c\u53c9\u6811",permalink:"/myblog/docs/tags/\u4e8c\u53c9\u6811"},{label:"dfs",permalink:"/myblog/docs/tags/dfs"},{label:"bfs",permalink:"/myblog/docs/tags/bfs"}],version:"current",frontMatter:{id:"binary-tree-inorder-traversal",title:"94. \u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},sidebar:"leetcode",previous:{title:"199. \u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe",permalink:"/myblog/docs/leetcode/tree/binary-tree-right-side-view"},next:{title:"417. \u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",permalink:"/myblog/docs/leetcode/graph/pacific-atlantic-water-flow"}},s={},u=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1adfs",id:"\u65b9\u6cd5\u4e00dfs",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1abfs",id:"\u65b9\u6cd5\u4e8cbfs",level:3}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 root \uff0c\u8fd4\u56de \u5b83\u7684 \u4e2d\u5e8f \u904d\u5386 \u3002"),(0,l.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  1\n    \\\n    2\n    /\n  3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = [1,null,2,3]\n\u8f93\u51fa\uff1a[1,3,2]\n")),(0,l.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = []\n\u8f93\u51fa\uff1a[]\n")),(0,l.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = [1]\n\u8f93\u51fa\uff1a[1]\n")),(0,l.kt)("p",null,"\u63d0\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6811\u4e2d\u8282\u70b9\u6570\u76ee\u5728\u8303\u56f4 ","[0, 100]"," \u5185"),(0,l.kt)("li",{parentName:"ul"},"-100 <= Node.val <= 100")),(0,l.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00dfs"},"\u65b9\u6cd5\u4e00\uff1adfs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function (root) {\n  if (!root) {\n    return [];\n  }\n  const res = [];\n  const dfs = (node) => {\n    if (node.left) {\n      dfs(node.left);\n    }\n    res.push(node.val);\n    if (node.right) {\n      dfs(node.right);\n    }\n  };\n  dfs(root);\n  return res;\n};\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8cbfs"},"\u65b9\u6cd5\u4e8c\uff1abfs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function (root) {\n  if (!root) {\n    return [];\n  }\n  const res = [];\n  const queue = [root];\n  while (queue.length) {\n    let len = queue.length;\n    while (len) {\n      const node = queue.shift();\n      if (len === 1) {\n        res.push(node.val);\n      }\n      if (node.left) {\n        queue.push(node.left);\n      }\n      if (node.right) {\n        queue.push(node.right);\n      }\n      len--;\n    }\n  }\n  return res;\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function (root) {\n  if (!root) {\n    return [];\n  }\n  const res = [];\n  const queue = [root];\n  while (queue.length) {\n    let len = queue.length;\n    for (let i = 0; i < len; i += 1) {\n      const node = queue.shift();\n      if (i === len - 1) {\n        res.push(node.val);\n      }\n      if (node.left) {\n        queue.push(node.left);\n      }\n      if (node.right) {\n        queue.push(node.right);\n      }\n    }\n  }\n  return res;\n};\n")))}c.isMDXComponent=!0}}]);