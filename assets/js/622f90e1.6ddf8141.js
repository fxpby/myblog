"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=l,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={id:"binary-tree-level-order-traversal",title:"102. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},o=void 0,i={unversionedId:"leetcode/tree/binary-tree-level-order-traversal",id:"leetcode/tree/binary-tree-level-order-traversal",title:"102. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/tree/binary-tree-level-order-traversal.md",sourceDirName:"leetcode/tree",slug:"/leetcode/tree/binary-tree-level-order-traversal",permalink:"/myblog/docs/leetcode/tree/binary-tree-level-order-traversal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/tree/binary-tree-level-order-traversal.md",tags:[{label:"\u4e8c\u53c9\u6811",permalink:"/myblog/docs/tags/\u4e8c\u53c9\u6811"},{label:"dfs",permalink:"/myblog/docs/tags/dfs"},{label:"bfs",permalink:"/myblog/docs/tags/bfs"}],version:"current",frontMatter:{id:"binary-tree-level-order-traversal",title:"102. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},sidebar:"leetcode",previous:{title:"104. \u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6",permalink:"/myblog/docs/leetcode/tree/maximum-depth-of-binary-tree"}},u={},s=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u65b9\u6cd5\u4e00\uff1abfs",id:"\u65b9\u6cd5\u4e00bfs",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1adfs",id:"\u65b9\u6cd5\u4e8cdfs",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 root \uff0c\u8fd4\u56de\u5176\u8282\u70b9\u503c\u7684 \u5c42\u5e8f\u904d\u5386 \u3002 \uff08\u5373\u9010\u5c42\u5730\uff0c\u4ece\u5de6\u5230\u53f3\u8bbf\u95ee\u6240\u6709\u8282\u70b9\uff09\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    3\n   / \\\n  9  20\n    /  \\\n   15   7\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = [3,9,20,null,null,15,7]\n\u8f93\u51fa\uff1a[[3],[9,20],[15,7]]\n")),(0,l.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = [1]\n\u8f93\u51fa\uff1a[[1]]\n")),(0,l.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1aroot = []\n\u8f93\u51fa\uff1a[]\n")),(0,l.kt)("p",null,"\u63d0\u793a\uff1a"),(0,l.kt)("p",null,"\u6811\u4e2d\u8282\u70b9\u6570\u76ee\u5728\u8303\u56f4 ","[0, 2000]"," \u5185\n-1000 <= Node.val <= 1000"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00bfs"},"\u65b9\u6cd5\u4e00\uff1abfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e7f\u5ea6\u4f18\u5148\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u5c06\u5176\u63a8\u5165\u4e0d\u540c\u5c42\u7ea7\u6570\u7ec4\u4e2d"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u53d8\u91cf\u8bb0\u5f55\u7ed3\u679c\u548c\u961f\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u6811\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u540c\u5c42\u7ea7\u7684\u8282\u70b9 val \u63a8\u5165\u76f8\u540c\u5c42\u7ea7\u6570\u7ec4\u4e2d\uff0c\u5c06\u5c42\u7ea7\u6570\u7ec4\u63a8\u5165\u7ed3\u679c\u6570\u7ec4\u4e2d\u3002\u5982\u679c\u5f53\u524d\u8282\u70b9\u6709\u5de6\u53f3\u5b50\u6811\uff0c\u5219\u538b\u5165\u961f\u5217\u3002\uff08while \u5faa\u73af\u7684\u6bcf\u4e00\u8f6e\u4e2d\uff0c\u90fd\u662f\u5c06\u5f53\u524d\u5c42\u7684\u6240\u6709\u8282\u70b9\u51fa\u961f\u5217\uff0c\u518d\u5c06\u4e0b\u4e00\u5c42\u7684\u6240\u6709\u8282\u70b9\u538b\u5165\u961f\u5217\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u5c42\u5e8f\u904d\u5386\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u6bcf\u4e2a\u8282\u70b9\u8fdb\u961f\u51fa\u961f\u5404\u4e00\u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0c\u961f\u5217\u4e2d\u5143\u7d20\u6700\u591a n \u4e2a")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n    if (!root) {\n        return []\n    }\n    let queue = [root]\n    let res = []\n    while (queue.length) {\n        let queueSize = queue.length\n        const levelRes = []\n        while (queueSize) {\n            const node = queue.shift()\n            levelRes.push(node.val)\n            if (node.left) {\n                queue.push(node.left)\n            }\n            if (node.right) {\n                queue.push(node.right)\n            }\n            queueSize--\n        }\n        res.push(levelRes)\n    }\n    return res\n};\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8cdfs"},"\u65b9\u6cd5\u4e8c\uff1adfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6df1\u5ea6\u4f18\u5148\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u5c06\u5176\u63a8\u5165\u4e0d\u540c\u5c42\u7ea7\u6570\u7ec4\u4e2d"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u53d8\u91cf\u8bb0\u5f55\u7ed3\u679c"),(0,l.kt)("li",{parentName:"ul"},"\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u6811\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u7684\u5c42\u7ea7\uff0c\u540c\u5c42\u7ea7\u7684\u8282\u70b9 val \u63a8\u5165\u76f8\u540c\u5c42\u7ea7\u6570\u7ec4\u4e2d\uff0c\u5c06\u5c42\u7ea7\u6570\u7ec4\u63a8\u5165\u7ed3\u679c\u6570\u7ec4\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\uff0cn \u4e3a\u4e8c\u53c9\u6811\u8282\u70b9\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n    if (!root) {\n        return []\n    }\n    const res = []\n    const dfs = (node, level, res) => {\n        if (node) {\n            if (!res[level]) {\n                res[level] = []\n            }\n            res[level].push(node.val)\n            dfs(node.left, level + 1, res)\n            dfs(node.right, level + 1, res)\n        }\n    }\n    dfs(root, 0, res)\n    return res\n};\n")))}d.isMDXComponent=!0}}]);