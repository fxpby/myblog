"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={id:"lowest-common-ancestor-of-a-binary-search-tree",title:"235. \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]},l=void 0,c={unversionedId:"leetcode/tree/lowest-common-ancestor-of-a-binary-search-tree",id:"leetcode/tree/lowest-common-ancestor-of-a-binary-search-tree",title:"235. \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",description:"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u641c\u7d22\u6811, \u627e\u5230\u8be5\u6811\u4e2d\u4e24\u4e2a\u6307\u5b9a\u8282\u70b9\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148\u3002",source:"@site/docs/leetcode/tree/lowest-common-ancestor-of-a-binary-search-tree.md",sourceDirName:"leetcode/tree",slug:"/leetcode/tree/lowest-common-ancestor-of-a-binary-search-tree",permalink:"/myblog/docs/leetcode/tree/lowest-common-ancestor-of-a-binary-search-tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/tree/lowest-common-ancestor-of-a-binary-search-tree.md",tags:[{label:"\u4e8c\u53c9\u6811",permalink:"/myblog/docs/tags/\u4e8c\u53c9\u6811"},{label:"dfs",permalink:"/myblog/docs/tags/dfs"},{label:"bfs",permalink:"/myblog/docs/tags/bfs"}],version:"current",frontMatter:{id:"lowest-common-ancestor-of-a-binary-search-tree",title:"235. \u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",tags:["\u4e8c\u53c9\u6811","dfs","bfs"]}},s={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u641c\u7d22\u6811, \u627e\u5230\u8be5\u6811\u4e2d\u4e24\u4e2a\u6307\u5b9a\u8282\u70b9\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148\u3002"),(0,o.kt)("p",null,"\u767e\u5ea6\u767e\u79d1\u4e2d\u6700\u8fd1\u516c\u5171\u7956\u5148\u7684\u5b9a\u4e49\u4e3a\uff1a\u201c\u5bf9\u4e8e\u6709\u6839\u6811 T \u7684\u4e24\u4e2a\u7ed3\u70b9 p\u3001q\uff0c\u6700\u8fd1\u516c\u5171\u7956\u5148\u8868\u793a\u4e3a\u4e00\u4e2a\u7ed3\u70b9 x\uff0c\u6ee1\u8db3 x \u662f p\u3001q \u7684\u7956\u5148\u4e14 x \u7684\u6df1\u5ea6\u5c3d\u53ef\u80fd\u5927\uff08\u4e00\u4e2a\u8282\u70b9\u4e5f\u53ef\u4ee5\u662f\u5b83\u81ea\u5df1\u7684\u7956\u5148\uff09\u3002\u201d"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u7ed9\u5b9a\u5982\u4e0b\u4e8c\u53c9\u641c\u7d22\u6811:  root = ","[6,2,8,0,4,7,9,null,null,3,5]"),(0,o.kt)("p",null,"\u793a\u4f8b 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\n\u8f93\u51fa: 6 \n\u89e3\u91ca: \u8282\u70b9 2 \u548c\u8282\u70b9 8 \u7684\u6700\u8fd1\u516c\u5171\u7956\u5148\u662f 6\u3002\n")),(0,o.kt)("p",null,"\u793a\u4f8b 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\n\u8f93\u51fa: 2\n\u89e3\u91ca: \u8282\u70b9 2 \u548c\u8282\u70b9 4 \u7684\u6700\u8fd1\u516c\u5171\u7956\u5148\u662f 2, \u56e0\u4e3a\u6839\u636e\u5b9a\u4e49\u6700\u8fd1\u516c\u5171\u7956\u5148\u8282\u70b9\u53ef\u4ee5\u4e3a\u8282\u70b9\u672c\u8eab\u3002\n")),(0,o.kt)("p",null,"\u8bf4\u660e:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u7684\u503c\u90fd\u662f\u552f\u4e00\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"p\u3001q \u4e3a\u4e0d\u540c\u8282\u70b9\u4e14\u5747\u5b58\u5728\u4e8e\u7ed9\u5b9a\u7684\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u3002")))}u.isMDXComponent=!0}}]);