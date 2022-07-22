"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1505],{3905:(t,e,r)=>{r.d(e,{Zo:()=>o,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},o=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,s=t.originalType,u=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=l(r),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(k,c(c({ref:e},o),{},{components:r})):n.createElement(k,c({ref:e},o))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=r.length,c=new Array(s);c[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4570:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={},c=void 0,i={unversionedId:"data-structures/stack/stack-array",id:"data-structures/stack/stack-array",title:"stack-array",description:"\x3c!--",source:"@site/docs/data-structures/stack/stack-array.md",sourceDirName:"data-structures/stack",slug:"/data-structures/stack/stack-array",permalink:"/docs/data-structures/stack/stack-array",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-structures/stack/stack-array.md",tags:[],version:"current",frontMatter:{},sidebar:"data-structures",previous:{title:"array",permalink:"/docs/data-structures/array/"},next:{title:"queue",permalink:"/docs/data-structures/queue/"}},u={},l=[{value:"\u4e00\u3001\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8eJavascript\u5bf9\u8c61\u7684Stack\u7c7b",id:"\u4e00\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8ejavascript\u5bf9\u8c61\u7684stack\u7c7b",level:2},{value:"2.\u5411\u6808\u4e2d\u63d2\u5165\u5143\u7d20",id:"2\u5411\u6808\u4e2d\u63d2\u5165\u5143\u7d20",level:2},{value:"3.\u9a8c\u8bc1\u4e00\u4e2a\u6808\u662f\u5426\u4e3a\u7a7a",id:"3\u9a8c\u8bc1\u4e00\u4e2a\u6808\u662f\u5426\u4e3a\u7a7a",level:2},{value:"4.\u83b7\u53d6\u6808\u7684\u5927\u5c0f",id:"4\u83b7\u53d6\u6808\u7684\u5927\u5c0f",level:2},{value:"5.\u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20",id:"5\u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20",level:2},{value:"6.\u67e5\u770b\u6808\u9876\u5143\u7d20",id:"6\u67e5\u770b\u6808\u9876\u5143\u7d20",level:2},{value:"7.\u6e05\u7a7a\u6808",id:"7\u6e05\u7a7a\u6808",level:2},{value:"8.\u521b\u5efatoString\u65b9\u6cd5",id:"8\u521b\u5efatostring\u65b9\u6cd5",level:2},{value:"\u4e8c\u3001\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8eJavascript\u6570\u7ec4\u7684Stack\u7c7b",id:"\u4e8c\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8ejavascript\u6570\u7ec4\u7684stack\u7c7b",level:2}],o={toc:l};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6808"},"\u6808"),(0,a.kt)("h2",{id:"\u4e00\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8ejavascript\u5bf9\u8c61\u7684stack\u7c7b"},"\u4e00\u3001\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8eJavascript\u5bf9\u8c61\u7684Stack\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Stack {\n  constructor () {\n    this.count = 0\n    this.items = {}\n  }\n}\n")),(0,a.kt)("h2",{id:"2\u5411\u6808\u4e2d\u63d2\u5165\u5143\u7d20"},"2.\u5411\u6808\u4e2d\u63d2\u5165\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"push (elements) {\n  this.items[this.count] = elements\n  this.count++\n  return elements\n}\n")),(0,a.kt)("h2",{id:"3\u9a8c\u8bc1\u4e00\u4e2a\u6808\u662f\u5426\u4e3a\u7a7a"},"3.\u9a8c\u8bc1\u4e00\u4e2a\u6808\u662f\u5426\u4e3a\u7a7a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"isEmpty () {\n  return this.items.length === 0\n}\n")),(0,a.kt)("h2",{id:"4\u83b7\u53d6\u6808\u7684\u5927\u5c0f"},"4.\u83b7\u53d6\u6808\u7684\u5927\u5c0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"size () {\n  return this.items.length\n}\n")),(0,a.kt)("h2",{id:"5\u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20"},"5.\u4ece\u6808\u4e2d\u5f39\u51fa\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"pop () {\n  if (this.isEmpty()) {\n    return undefined\n  }\n  this.count--\n  const result = this.items[this.count]\n  delete this.items[this.count]\n  return result\n}\n")),(0,a.kt)("h2",{id:"6\u67e5\u770b\u6808\u9876\u5143\u7d20"},"6.\u67e5\u770b\u6808\u9876\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"peek () {\n  if (this.isEmpty()) {\n    return undefined\n  }\n  return this.items[this.count - 1]\n}\n")),(0,a.kt)("h2",{id:"7\u6e05\u7a7a\u6808"},"7.\u6e05\u7a7a\u6808"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"clear () {\n  this.items = {}\n  this.count = 0\n  // while (!this.isEmpty()) {\n  //   this.pop()\n  // }\n}\n")),(0,a.kt)("h2",{id:"8\u521b\u5efatostring\u65b9\u6cd5"},"8.\u521b\u5efatoString\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"toString () {\n  if (this.isEmpty()) {\n    return ''\n  }\n  let str = ''\n  for (let i = 0; i < this.count; i++) {\n    str += `${this.items[i]}`\n  }\n  return str\n}\n")),(0,a.kt)("h2",{id:"\u4e8c\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8ejavascript\u6570\u7ec4\u7684stack\u7c7b"},"\u4e8c\u3001\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8eJavascript\u6570\u7ec4\u7684Stack\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Stack {\n  constructor() {\n    this.stack = []\n  }\n\n  size() {\n    return this.stack.length\n  }\n\n  push() {\n    const args = [].slice.call(arguments)\n    this.stack = [...this.stack, ...args]\n    return this.stack.length\n  }\n\n  pop() {\n    return this.stack.splice(this.size() - 1, 1)[0]\n  }\n\n  peek() {\n    return this.stack[this.size() - 1]\n  }\n\n  isEmpty() {\n    return this.size() === 0\n  }\n}\n")))}p.isMDXComponent=!0}}]);