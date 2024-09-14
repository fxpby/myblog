"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),h=a,m=f["".concat(l,".").concat(h)]||f[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"higher-order-function",title:"\u9ad8\u9636\u51fd\u6570",tags:["\u9ad8\u9636\u51fd\u6570"]},o=void 0,c={unversionedId:"javascript/higher-order-function",id:"javascript/higher-order-function",title:"\u9ad8\u9636\u51fd\u6570",description:"\u4ec0\u4e48\u662f\u9ad8\u9636\u51fd\u6570",source:"@site/docs/javascript/higher-order-function.md",sourceDirName:"javascript",slug:"/javascript/higher-order-function",permalink:"/myblog/docs/javascript/higher-order-function",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/higher-order-function.md",tags:[{label:"\u9ad8\u9636\u51fd\u6570",permalink:"/myblog/docs/tags/\u9ad8\u9636\u51fd\u6570"}],version:"current",frontMatter:{id:"higher-order-function",title:"\u9ad8\u9636\u51fd\u6570",tags:["\u9ad8\u9636\u51fd\u6570"]},sidebar:"javascript",previous:{title:"typeof/instanceof/{}.toString \u68c0\u67e5\u7c7b\u578b",permalink:"/myblog/docs/javascript/compare-value"},next:{title:"\u6df1\u62f7\u8d1d",permalink:"/myblog/docs/javascript/deep-copy"}},l={},s=[{value:"\u4ec0\u4e48\u662f\u9ad8\u9636\u51fd\u6570",id:"\u4ec0\u4e48\u662f\u9ad8\u9636\u51fd\u6570",level:2},{value:"\u5e38\u89c1\u7684\u9ad8\u9636\u51fd\u6570",id:"\u5e38\u89c1\u7684\u9ad8\u9636\u51fd\u6570",level:2},{value:"\u624b\u5199 forEach",id:"\u624b\u5199-foreach",level:3},{value:"\u624b\u5199 map",id:"\u624b\u5199-map",level:3},{value:"\u624b\u5199 reduce",id:"\u624b\u5199-reduce",level:3},{value:"\u624b\u5199 filter",id:"\u624b\u5199-filter",level:3},{value:"\u624b\u5199 every",id:"\u624b\u5199-every",level:3},{value:"\u624b\u5199 some",id:"\u624b\u5199-some",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u9ad8\u9636\u51fd\u6570"},"\u4ec0\u4e48\u662f\u9ad8\u9636\u51fd\u6570"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u63a5\u53d7\u53e6\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u90a3\u4e48\u8be5\u51fd\u6570\u5c31\u662f\u9ad8\u9636\u51fd\u6570"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u7684\u9ad8\u9636\u51fd\u6570"},"\u5e38\u89c1\u7684\u9ad8\u9636\u51fd\u6570"),(0,a.kt)("h3",{id:"\u624b\u5199-foreach"},"\u624b\u5199 forEach"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Array.prototype.myForEach = function (callback) {\n  if (typeof callback !== "function") {\n    throw new Error("parameter must be a function");\n  }\n  for (let i = 0; i < this.length; i += 1) {\n    callback.call(this, this[i], i);\n  }\n};\n')),(0,a.kt)("h3",{id:"\u624b\u5199-map"},"\u624b\u5199 map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Array.prototype.myMap = function (callback) {\n  if (typeof callback !== "function") {\n    throw new Error("parameter must be a function");\n  }\n  const res = [];\n  for (let i = 0; i < this.length; i += 1) {\n    res.push(callback.call(this, this[i], i, this));\n  }\n  return res;\n};\n')),(0,a.kt)("h3",{id:"\u624b\u5199-reduce"},"\u624b\u5199 reduce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Array.prototype.myReduce = function (callback, init) {\n  if (typeof callback !== "function") {\n    throw new Error("parameter must be a function");\n  }\n\n  let pre = init;\n  let i = 0;\n  if (!init) {\n    pre = this[0];\n    i = 1;\n  }\n\n  for (i; i < this.length; i += 1) {\n    pre = callback.call(this, pre, this[i], this);\n  }\n  return pre;\n};\n')),(0,a.kt)("h3",{id:"\u624b\u5199-filter"},"\u624b\u5199 filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Array.prototype.myFilter = function (callback) {\n  if (typeof callback !== "function") {\n    throw new Error("parameter must be a function");\n  }\n\n  const res = [];\n  for (let i = 0; i < this.length; i += 1) {\n    if (callback.call(this, this[i], i, this)) {\n      if (typeof this[i] === \'object\') {\n        res.push(Object.create(this[i]))\n      } else {\n        res.push(this[i]);\n      }\n    }\n  }\n  return res;\n};\n')),(0,a.kt)("h3",{id:"\u624b\u5199-every"},"\u624b\u5199 every"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Array.prototype.myEvery = function (callback) {\n  if (typeof callback !== "function") {\n    throw new Error("parameter must be a function");\n  }\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (!callback.call(this, this[i], i, this)) {\n      return false\n    }\n  }\n  return true\n}\n')),(0,a.kt)("h3",{id:"\u624b\u5199-some"},"\u624b\u5199 some"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Array.prototype.mySome = function (callback) {\n  if (typeof callback !== "function") {\n    throw new Error("parameter must be a function");\n  }\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (callback.call(this, this[i], i, this)) {\n      return true\n    }\n  }\n  return false\n}\n')))}u.isMDXComponent=!0}}]);