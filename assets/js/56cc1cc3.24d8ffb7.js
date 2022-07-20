"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,b=l["".concat(c,".").concat(d)]||l[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={},i="\u4e2d\u4ecb\u8005\u6a21\u5f0f Mediator Pattern",s={unversionedId:"design-pattern/mediator-pattern/mediator-pattern-basics",id:"design-pattern/mediator-pattern/mediator-pattern-basics",title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f Mediator Pattern",description:"\u4ecb\u7ecd",source:"@site/docs/design-pattern/mediator-pattern/mediator-pattern-basics.md",sourceDirName:"design-pattern/mediator-pattern",slug:"/design-pattern/mediator-pattern/mediator-pattern-basics",permalink:"/myblog/docs/design-pattern/mediator-pattern/mediator-pattern-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-pattern/mediator-pattern/mediator-pattern-basics.md",tags:[],version:"current",frontMatter:{},sidebar:"design-pattern",previous:{title:"\u5907\u5fd8\u5f55\u6a21\u5f0f Memento Pattern",permalink:"/myblog/docs/design-pattern/memento-pattern/memento-pattern-basics"},next:{title:"\u6a21\u62df\u8d2d\u7269\u8f66",permalink:"/myblog/docs/design-pattern/comprehensive-application/comprehensive-application-case"}},c={},m=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e2d\u4ecb\u8005\u6a21\u5f0f-mediator-pattern"},"\u4e2d\u4ecb\u8005\u6a21\u5f0f Mediator Pattern"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89e3\u9664\u5bf9\u8c61\u4e0e\u5bf9\u8c61\u4e4b\u95f4\u7d27\u8026\u5408\u7684\u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bf9\u8c61\u90fd\u901a\u8fc7\u4e2d\u4ecb\u8005\u5bf9\u8c61\u6765\u901a\u4fe1\uff0c\u800c\u4e0d\u662f\u76f8\u4e92\u5f15\u7528")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"olu \u8981\u53bb\u79df\u623f\u4e86\uff0c\u627e\u7684\u4e2d\u4ecb\uff0c\u4e2d\u4ecb\u5bf9\u5e94\u5f88\u591a\u4e70\u5bb6\u548c\u5356\u5bb6\u3002\u6bd4\u5982 \u623f\u4e3ba \u4fee\u6539\u4e86\u4ef7\u683c\uff0c\u901a\u77e5\u4e2d\u4ecb\u544a\u8bc9 \u79df\u5ba2b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Mediator {\n  constructor(a, b) {\n    this.a = a\n    this.b = b\n  }\n\n  setA() {\n    const number = this.b.number\n    this.a.setNumber(number * 1)\n  }\n\n  setB() {\n    const number = this.a.number\n    this.b.setNumber(number * 1.1)\n  }\n}\n\nclass A {\n  constructor() {\n    this.number = 0\n  }\n\n  setNumber(num, m) {\n    this.number = parseInt(num, 10)\n    if (m) {\n      m.setB()\n    }\n  }\n}\n\nclass B {\n  constructor() {\n    this.number = 0\n  }\n\n  setNumber(num, m) {\n    this.number = parseInt(num, 10)\n    if (m) {\n      m.setA()\n    }\n  }\n}\n\nconst a = new A()\nconst b = new B()\nconst m = new Mediator(a, b)\n\na.setNumber(100, m)\nconsole.log(a.number, b.number)\nb.setNumber(100, m)\nconsole.log(a.number, b.number)\n")),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5404\u4e2a\u5173\u8054\u5bf9\u8c61\u901a\u8fc7\u4e2d\u4ecb\u8005\u9694\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219")))}u.isMDXComponent=!0}}]);