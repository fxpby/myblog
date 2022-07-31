"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const a={id:"binary-search-tree",title:"\u4e8c\u53c9\u641c\u7d22\u6811",tags:["\u4e8c\u53c9\u641c\u7d22\u6811"]},o=void 0,i={unversionedId:"data-structures/tree/binary-search-tree",id:"data-structures/tree/binary-search-tree",title:"\u4e8c\u53c9\u641c\u7d22\u6811",description:"1. \u6027\u8d28",source:"@site/docs/data-structures/tree/binary-search-tree.md",sourceDirName:"data-structures/tree",slug:"/data-structures/tree/binary-search-tree",permalink:"/myblog/docs/data-structures/tree/binary-search-tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-structures/tree/binary-search-tree.md",tags:[{label:"\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/myblog/docs/tags/\u4e8c\u53c9\u641c\u7d22\u6811"}],version:"current",frontMatter:{id:"binary-search-tree",title:"\u4e8c\u53c9\u641c\u7d22\u6811",tags:["\u4e8c\u53c9\u641c\u7d22\u6811"]},sidebar:"data-structures",previous:{title:"hashtable-separate-chaining",permalink:"/myblog/docs/data-structures/hashtable/hashtable-separate-chaining"},next:{title:"heap",permalink:"/myblog/docs/data-structures/heap/"}},u={},s=[{value:"1. \u6027\u8d28",id:"1-\u6027\u8d28",level:2},{value:"2. \u904d\u5386\u65b9\u5f0f",id:"2-\u904d\u5386\u65b9\u5f0f",level:2},{value:"2.1 \u5148\u5e8f\u904d\u5386",id:"21-\u5148\u5e8f\u904d\u5386",level:3},{value:"2.2 \u4e2d\u5e8f\u904d\u5386",id:"22-\u4e2d\u5e8f\u904d\u5386",level:3},{value:"2.3 \u540e\u5e8f\u904d\u5386",id:"23-\u540e\u5e8f\u904d\u5386",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u6027\u8d28"},"1. \u6027\u8d28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u53c9\u641c\u7d22\u6811\u662f\u4e00\u9897\u4e8c\u53c9\u6811\uff0c\u53ef\u4ee5\u4e3a\u7a7a"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4e3a\u7a7a\u65f6\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u975e\u7a7a\u5de6\u5b50\u6811\u7684\u6240\u6709\u952e\u503c\u5c0f\u4e8e\u5176\u6839\u8282\u70b9\u7684\u952e\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u7a7a\u53f3\u5b50\u6811\u7684\u6240\u6709\u952e\u503c\u5927\u4e8e\u5176\u6839\u8282\u70b9\u7684\u952e\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u5de6\u53f3\u5b50\u6811\u672c\u8eab\u4e5f\u662f\u4e8c\u53c9\u641c\u7d22\u6811")))),(0,l.kt)("h2",{id:"2-\u904d\u5386\u65b9\u5f0f"},"2. \u904d\u5386\u65b9\u5f0f"),(0,l.kt)("h3",{id:"21-\u5148\u5e8f\u904d\u5386"},"2.1 \u5148\u5e8f\u904d\u5386"),(0,l.kt)("p",null,"\u5b66\u4e60\u524d\u5148\u79cd\u4e00\u68f5\u4e8c\u53c9\u641c\u7d22\u6811\u5427\uff01\ud83c\udf31"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const bt = {\n  val: '11',\n  left: {\n    val: '7',\n    left: {\n      val: '5',\n      left: {\n        val: '3',\n        left: null,\n        right: null\n      },\n      right: {\n        val: '6',\n        left: null,\n        right: null\n      },\n    },\n    right: {\n      val: '9',\n      left: {\n        val: '8',\n        left: null,\n        right: null\n      },\n      right: {\n        val: '10',\n        left: null,\n        right: null\n      },\n    }\n  },\n  right: {\n    val: '15',\n    left: {\n      val: '13',\n      left: {\n        val: '12',\n        left: null,\n        right: null,\n      },\n      right: {\n        val: '14',\n        left: null,\n        right: null,\n      },\n    },\n    right: {\n      val: '20',\n      left: {\n        val: '18',\n        left: null,\n        right: null,\n      },\n      right: {\n        val: '25',\n        left: null,\n        right: null,\n      }\n    }\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u6839\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6839\u8282\u70b9\u7684\u5de6\u5b50\u6811\u8fdb\u884c\u5148\u5e8f\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6839\u8282\u70b9\u7684\u53f3\u5b50\u6811\u8fdb\u884c\u5148\u5e8f\u904d\u5386")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/datastructures-algorithm/preOrderTraversal.png",alt:"reOrderTraversal"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const preOrder = root => {\n  if (!root) {\n    return\n  }\n  console.log(root.val)\n  preOrder(root.left)\n  preOrder(root.right)\n}\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u4e3a\uff1a11 7 5 3 6 9 8 10 15 13 12 14 20 18 25"),(0,l.kt)("h3",{id:"22-\u4e2d\u5e8f\u904d\u5386"},"2.2 \u4e2d\u5e8f\u904d\u5386"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6839\u8282\u70b9\u7684\u5de6\u5b50\u6811\u8fdb\u884c\u5148\u5e8f\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u6839\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6839\u8282\u70b9\u7684\u53f3\u5b50\u6811\u8fdb\u884c\u5148\u5e8f\u904d\u5386")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/datastructures-algorithm/inOrderTraversal.png",alt:"inOrderTraversal"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const inOrder = root => {\n  if (!root) {\n    return\n  }\n  inOrder(root.left)\n  console.log(root.val)\n  inOrder(root.right)\n}\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u4e3a\uff1a3 5 6 7 8 9 10 11 12 13 14 15 18 20 25"),(0,l.kt)("h3",{id:"23-\u540e\u5e8f\u904d\u5386"},"2.3 \u540e\u5e8f\u904d\u5386"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6839\u8282\u70b9\u7684\u5de6\u5b50\u6811\u8fdb\u884c\u5148\u5e8f\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6839\u8282\u70b9\u7684\u53f3\u5b50\u6811\u8fdb\u884c\u5148\u5e8f\u904d\u5386"),(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u6839\u8282\u70b9")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/datastructures-algorithm/postOrderTraversal.png",alt:"postOrderTraversal"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const postOrder = root => {\n  if (!root) {\n    return\n  }\n  postOrder(root.left)\n  postOrder(root.right)\n  console.log(root.val)\n}\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u4e3a\uff1a3 6 5 8 10 9 7 12 14 13 18 25 20 15 11"))}p.isMDXComponent=!0}}]);