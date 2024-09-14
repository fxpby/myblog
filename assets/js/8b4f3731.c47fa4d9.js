"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,u=new Array(s);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var o=2;o<s;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const s={},u=void 0,i={unversionedId:"data-structures/queue/queue",id:"data-structures/queue/queue",title:"queue",description:"\x3c!--",source:"@site/docs/data-structures/queue/queue.md",sourceDirName:"data-structures/queue",slug:"/data-structures/queue/",permalink:"/myblog/docs/data-structures/queue/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-structures/queue/queue.md",tags:[],version:"current",frontMatter:{},sidebar:"data-structures",previous:{title:"stack-array",permalink:"/myblog/docs/data-structures/stack/stack-array"},next:{title:"\u53cc\u7aef\u961f\u5217",permalink:"/myblog/docs/data-structures/queue/deque"}},l={},o=[{value:"1.\u521b\u5efa\u7c7b\u8868\u793a\u961f\u5217",id:"1\u521b\u5efa\u7c7b\u8868\u793a\u961f\u5217",level:2},{value:"2.\u5411\u961f\u5217\u6dfb\u52a0\u5143\u7d20",id:"2\u5411\u961f\u5217\u6dfb\u52a0\u5143\u7d20",level:2},{value:"3.\u4ece\u961f\u5217\u79fb\u9664\u5143\u7d20",id:"3\u4ece\u961f\u5217\u79fb\u9664\u5143\u7d20",level:2},{value:"4.\u67e5\u770b\u961f\u5217\u5934\u5143\u7d20",id:"4\u67e5\u770b\u961f\u5217\u5934\u5143\u7d20",level:2},{value:"5.\u68c0\u67e5\u961f\u5217\u662f\u5426\u4e3a\u7a7a",id:"5\u68c0\u67e5\u961f\u5217\u662f\u5426\u4e3a\u7a7a",level:2},{value:"6.\u83b7\u53d6\u961f\u5217\u957f\u5ea6",id:"6\u83b7\u53d6\u961f\u5217\u957f\u5ea6",level:2},{value:"7.\u6e05\u7a7a\u961f\u5217",id:"7\u6e05\u7a7a\u961f\u5217",level:2},{value:"8.\u521b\u5efatoString\u65b9\u6cd5",id:"8\u521b\u5efatostring\u65b9\u6cd5",level:2}],c={toc:o};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u961f\u5217"},"\u961f\u5217"),(0,a.kt)("h2",{id:"1\u521b\u5efa\u7c7b\u8868\u793a\u961f\u5217"},"1.\u521b\u5efa\u7c7b\u8868\u793a\u961f\u5217"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Queue {\n  constructor () {\n    this.count = 0\n    this.lowestCount = 0 // \u7b2c\u4e00\u4e2a\u5143\u7d20\n    this.items = {}\n  }\n}\n")),(0,a.kt)("h2",{id:"2\u5411\u961f\u5217\u6dfb\u52a0\u5143\u7d20"},"2.\u5411\u961f\u5217\u6dfb\u52a0\u5143\u7d20"),(0,a.kt)("p",null,"\u65b0\u7684\u9879\u53ea\u80fd\u6dfb\u52a0\u5230\u961f\u5217\u672b\u5c3e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"enqueue (elements) {\n  this.items[this.count] = elements\n  this.count++\n}\n")),(0,a.kt)("h2",{id:"3\u4ece\u961f\u5217\u79fb\u9664\u5143\u7d20"},"3.\u4ece\u961f\u5217\u79fb\u9664\u5143\u7d20"),(0,a.kt)("p",null,"\u9075\u5faa\u5148\u8fdb\u5148\u51fa\u7684\u539f\u5219\uff0c\u6700\u5148\u6dfb\u52a0\u7684\u9879\u4e5f\u6700\u5148\u88ab\u79fb\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"dequeue () {\n  if (this.isEmpty()) {\n    return undefined\n  }\n  let result = this.items[this.lowestCount]\n  delete this.items[this.lowestCount]\n  this.lowestCount++\n  return result\n}\n")),(0,a.kt)("h2",{id:"4\u67e5\u770b\u961f\u5217\u5934\u5143\u7d20"},"4.\u67e5\u770b\u961f\u5217\u5934\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"peek () {\n  if (this.isEmpty()) {\n    return\n  }\n  return this.items[this.lowestCount]\n}\n")),(0,a.kt)("h2",{id:"5\u68c0\u67e5\u961f\u5217\u662f\u5426\u4e3a\u7a7a"},"5.\u68c0\u67e5\u961f\u5217\u662f\u5426\u4e3a\u7a7a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"isEmpty () {\n  return this.size() === 0\n}\n")),(0,a.kt)("h2",{id:"6\u83b7\u53d6\u961f\u5217\u957f\u5ea6"},"6.\u83b7\u53d6\u961f\u5217\u957f\u5ea6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"size () {\n  return this.count - this.lowestCount\n}\n")),(0,a.kt)("h2",{id:"7\u6e05\u7a7a\u961f\u5217"},"7.\u6e05\u7a7a\u961f\u5217"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"clear () {\n  this.items = {}\n  this.lowestCount = 0\n  this.count = 0\n}\n")),(0,a.kt)("h2",{id:"8\u521b\u5efatostring\u65b9\u6cd5"},"8.\u521b\u5efatoString\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"toString () {\n  if (this.isEmpty()) {\n    return\n  }\n  let str = ''\n  for (let i = this.lowestCount; i < this.size(); i++) {\n    str += `${this.items[i]}`\n  }\n  return str\n}\n")))}p.isMDXComponent=!0}}]);