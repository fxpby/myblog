"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<s;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const s={},i="\u53cc\u7aef\u961f\u5217",u={unversionedId:"data-structures/queue/deque",id:"data-structures/queue/deque",title:"\u53cc\u7aef\u961f\u5217",description:"1.\u521b\u5efaDeque\u7c7b",source:"@site/docs/data-structures/queue/deque.md",sourceDirName:"data-structures/queue",slug:"/data-structures/queue/deque",permalink:"/myblog/docs/data-structures/queue/deque",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-structures/queue/deque.md",tags:[],version:"current",frontMatter:{},sidebar:"data-structures",previous:{title:"queue",permalink:"/myblog/docs/data-structures/queue/"},next:{title:"hotpotato",permalink:"/myblog/docs/data-structures/queue/hotpotato"}},l={},o=[{value:"1.\u521b\u5efaDeque\u7c7b",id:"1\u521b\u5efadeque\u7c7b",level:2},{value:"2.\u5411\u53cc\u7aef\u961f\u5217\u7684\u524d\u7aef\u6dfb\u52a0\u5143\u7d20",id:"2\u5411\u53cc\u7aef\u961f\u5217\u7684\u524d\u7aef\u6dfb\u52a0\u5143\u7d20",level:2},{value:"3.\u5411\u53cc\u7aef\u961f\u5217\u540e\u7aef\u6dfb\u52a0\u5143\u7d20",id:"3\u5411\u53cc\u7aef\u961f\u5217\u540e\u7aef\u6dfb\u52a0\u5143\u7d20",level:2},{value:"4.\u5411\u53cc\u7aef\u961f\u5217\u524d\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20",id:"4\u5411\u53cc\u7aef\u961f\u5217\u524d\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20",level:2},{value:"5.\u5411\u53cc\u7aef\u961f\u5217\u540e\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20",id:"5\u5411\u53cc\u7aef\u961f\u5217\u540e\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20",level:2},{value:"6.\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u524d\u7aef\u7b2c\u4e00\u4e2a\u5143\u7d20",id:"6\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u524d\u7aef\u7b2c\u4e00\u4e2a\u5143\u7d20",level:2},{value:"7.\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u540e\u7aef\u7b2c\u4e00\u4e2a\u5143\u7d20",id:"7\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u540e\u7aef\u7b2c\u4e00\u4e2a\u5143\u7d20",level:2},{value:"8.\u6e05\u7a7a\u53cc\u7aef\u961f\u5217",id:"8\u6e05\u7a7a\u53cc\u7aef\u961f\u5217",level:2},{value:"9.\u68c0\u67e5\u53cc\u7aef\u961f\u5217\u662f\u5426\u4e3a\u7a7a",id:"9\u68c0\u67e5\u53cc\u7aef\u961f\u5217\u662f\u5426\u4e3a\u7a7a",level:2},{value:"10.\u83b7\u53d6\u53cc\u7aef\u961f\u5217\u5927\u5c0f",id:"10\u83b7\u53d6\u53cc\u7aef\u961f\u5217\u5927\u5c0f",level:2},{value:"11.\u521b\u5efatoString\u65b9\u6cd5",id:"11\u521b\u5efatostring\u65b9\u6cd5",level:2}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53cc\u7aef\u961f\u5217"},"\u53cc\u7aef\u961f\u5217"),(0,a.kt)("h2",{id:"1\u521b\u5efadeque\u7c7b"},"1.\u521b\u5efaDeque\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Deque {\n  constructor () {\n    this.count = 0\n    this.lowestCount = 0\n    this.items = {}\n  }\n}\n")),(0,a.kt)("h2",{id:"2\u5411\u53cc\u7aef\u961f\u5217\u7684\u524d\u7aef\u6dfb\u52a0\u5143\u7d20"},"2.\u5411\u53cc\u7aef\u961f\u5217\u7684\u524d\u7aef\u6dfb\u52a0\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"addFront (element) {\n  if (this.isEmpty()) {\n    this.addBack(element)\n  } else if (this.lowestCount > 0) {\n    this.lowestCount--\n    this.items[this.lowestCount] = element\n  } else {\n    for (let i = this.count; i > 0 ; i--) {\n      this.items[i] = this.items[i - 1]\n    }\n    this.count++\n    this.items[0] = element\n  }\n}\n")),(0,a.kt)("h2",{id:"3\u5411\u53cc\u7aef\u961f\u5217\u540e\u7aef\u6dfb\u52a0\u5143\u7d20"},"3.\u5411\u53cc\u7aef\u961f\u5217\u540e\u7aef\u6dfb\u52a0\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"addBack (element) {\n  this.items[this.count] = element\n  this.count++\n}\n")),(0,a.kt)("h2",{id:"4\u5411\u53cc\u7aef\u961f\u5217\u524d\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20"},"4.\u5411\u53cc\u7aef\u961f\u5217\u524d\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"removeFront () {\n  if (this.isEmpty()) {\n    return\n  }\n  let result = this.items[this.lowestCount]\n  delete this.items[this.lowestCount]\n  this.lowestCount++\n  return result\n}\n")),(0,a.kt)("h2",{id:"5\u5411\u53cc\u7aef\u961f\u5217\u540e\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20"},"5.\u5411\u53cc\u7aef\u961f\u5217\u540e\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"removeBack () {\n  if (this.isEmpty()) {\n    return\n  }\n  this.count--\n  let result = this.items[this.count]\n  delete this.items[this.count]\n  return result\n}\n")),(0,a.kt)("h2",{id:"6\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u524d\u7aef\u7b2c\u4e00\u4e2a\u5143\u7d20"},"6.\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u524d\u7aef\u7b2c\u4e00\u4e2a\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"peekFront () {\n  if (this.isEmpty()) {\n    return\n  }\n  return this.items[this.lowestCount]\n}\n")),(0,a.kt)("h2",{id:"7\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u540e\u7aef\u7b2c\u4e00\u4e2a\u5143\u7d20"},"7.\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u540e\u7aef\u7b2c\u4e00\u4e2a\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"peekBack () {\n  if (this.isEmpty()) {\n    return\n  }\n  return this.items[this.count - 1]\n}\n")),(0,a.kt)("h2",{id:"8\u6e05\u7a7a\u53cc\u7aef\u961f\u5217"},"8.\u6e05\u7a7a\u53cc\u7aef\u961f\u5217"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"clear () {\n  this.count = 0\n  this.lowestCount = 0\n  this.items = {}\n}\n")),(0,a.kt)("h2",{id:"9\u68c0\u67e5\u53cc\u7aef\u961f\u5217\u662f\u5426\u4e3a\u7a7a"},"9.\u68c0\u67e5\u53cc\u7aef\u961f\u5217\u662f\u5426\u4e3a\u7a7a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"isEmpty () {\n  return this.count - this.lowestCount === 0\n}\n")),(0,a.kt)("h2",{id:"10\u83b7\u53d6\u53cc\u7aef\u961f\u5217\u5927\u5c0f"},"10.\u83b7\u53d6\u53cc\u7aef\u961f\u5217\u5927\u5c0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"size () {\n  return this.count - this.lowestCount\n}\n")),(0,a.kt)("h2",{id:"11\u521b\u5efatostring\u65b9\u6cd5"},"11.\u521b\u5efatoString\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"toString () {\n  if (this.isEmpty()) {\n    return ''\n  }\n  let str = ''\n  for (let i = this.lowestCount; i < this.count; i++) {\n    str += this.items[i]\n  }\n  return str\n}\n")))}p.isMDXComponent=!0}}]);