"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u5de5\u5382\u6a21\u5f0f Factory Pattern",c={unversionedId:"design-pattern/factory-pattern/factory-pattern-basics",id:"design-pattern/factory-pattern/factory-pattern-basics",title:"\u5de5\u5382\u6a21\u5f0f Factory Pattern",description:"\ud83c\udfba\u4ecb\u7ecd",source:"@site/docs/design-pattern/factory-pattern/factory-pattern-basics.md",sourceDirName:"design-pattern/factory-pattern",slug:"/design-pattern/factory-pattern/factory-pattern-basics",permalink:"/myblog/docs/design-pattern/factory-pattern/factory-pattern-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-pattern/factory-pattern/factory-pattern-basics.md",tags:[],version:"current",frontMatter:{},sidebar:"design-pattern",previous:{title:"\u8bbe\u8ba1\u539f\u5219 SOLID",permalink:"/myblog/docs/design-pattern/design-principle/design-principle-basics"},next:{title:"\u5355\u4f8b\u6a21\u5f0f Singleton Pattern",permalink:"/myblog/docs/design-pattern/singleton-pattern/singleton-pattern-basics"}},i={},s=[{value:"\ud83c\udfba\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u26f9\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u26f9\ufe0f\u5e94\u7528\u573a\u666f",id:"\ufe0f\u5e94\u7528\u573a\u666f",level:2},{value:"jQuery - $(&#39;div&#39;)",id:"jquery---div",level:3},{value:"React.createElement",id:"reactcreateelement",level:3},{value:"Vue \u5f02\u6b65\u7ec4\u4ef6",id:"vue-\u5f02\u6b65\u7ec4\u4ef6",level:3},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5de5\u5382\u6a21\u5f0f-factory-pattern"},"\u5de5\u5382\u6a21\u5f0f Factory Pattern"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\ud83c\udfba\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"new")," \u64cd\u4f5c\u5355\u72ec\u5c01\u88c5"),(0,a.kt)("li",{parentName:"ul"},"\u9047\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"new")," \u65f6\u8981\u8003\u8651\u5de5\u5382\u6a21\u5f0f")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u26f9\u793a\u4f8b"),(0,a.kt)("p",null,"\u7c7b\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"classDiagram\nCreator --\x3e Product\nclass Creator {\n  +create(name) Product\n}\nclass Product {\n  + name: String\n  +init() void\n  +fn1()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Creator {\n  create(name) {\n    return new Product(name)\n  }\n}\n\nclass Product {\n  constructor(name) {\n    this.name = name;\n  }\n  init() {\n    console.log('init')\n  }\n\n  fn1() {\n    console.log('fn1')\n  }\n}\n\nconst creator = new Creator()\nconst c = creator.create('olu')\nc.init()\nc.fn1()\n")),(0,a.kt)("h2",{id:"\ufe0f\u5e94\u7528\u573a\u666f"},"\u26f9\ufe0f\u5e94\u7528\u573a\u666f"),(0,a.kt)("h3",{id:"jquery---div"},"jQuery - $('div')"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class jQuery {\n  constructor(seletor) {\n    let slice = Array.prototype.slice\n    let dom = slice.call(document.querySelectorAll(seletor))\n    let len = dom ? dom.length : 0\n    for (let i = 0; i < len; i += 1) {\n      this[i] = dom[i]\n    }\n    this.length = len\n    this.seletor = seletor || ''\n  }\n  append(node) {\n\n  }\n  addClass(name) {\n\n  }\n  html(data)\n}\n\nwindow.$ = function(seletor) {\n  return new jQuery(seletor);\n}\n")),(0,a.kt)("h3",{id:"reactcreateelement"},"React.createElement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let profile = <div>\n  <img src="olu-cool.png" className="img"/>\n  <h1>{[user.name, user.age].join(\' \')}</h1>\n</div>\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u7f16\u8bd1\u5b8c\u662f\u4e0b\u9762\u7684\u6837\u5b50\ud83d\udc47\ud83c\udffb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let profile = React.createElement("div", null,\n  React.createElement("img", { src: "olu-cool.png", className: "img" }),\n  React.createElement("h1", null, [user.name, user.age].join(\' \'))\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Vnode(tag, attrs, children) {\n  // ...\n}\nReact.createElement = function(tag, attrs, children) {\n  return new Vnode(tag, attrs, children)\n}\n")),(0,a.kt)("h3",{id:"vue-\u5f02\u6b65\u7ec4\u4ef6"},"Vue \u5f02\u6b65\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Vue.component('async-example', (resolve, reject) => {\n  setTimeout(() => {\n    resolve({\n      template: '<div>this is async</div>',\n    })\n  }, 500)\n})\n")),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u548c\u521b\u5efa\u8005\u5206\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219")))}u.isMDXComponent=!0}}]);