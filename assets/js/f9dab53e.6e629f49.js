"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="\u8fed\u4ee3\u5668\u6a21\u5f0f Iterator Pattern",l={unversionedId:"design-pattern/iterator-pattern/iterator-pattern-basics",id:"design-pattern/iterator-pattern/iterator-pattern-basics",title:"\u8fed\u4ee3\u5668\u6a21\u5f0f Iterator Pattern",description:"\u4ecb\u7ecd",source:"@site/docs/design-pattern/iterator-pattern/iterator-pattern-basics.md",sourceDirName:"design-pattern/iterator-pattern",slug:"/design-pattern/iterator-pattern/iterator-pattern-basics",permalink:"/docs/design-pattern/iterator-pattern/iterator-pattern-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-pattern/iterator-pattern/iterator-pattern-basics.md",tags:[],version:"current",frontMatter:{},sidebar:"design-pattern",previous:{title:"\u89c2\u5bdf\u8005\u6a21\u5f0f Observer Pattern",permalink:"/docs/design-pattern/observer-pattern/observer-pattern-basics"},next:{title:"\u72b6\u6001\u6a21\u5f0f State Pattern",permalink:"/docs/design-pattern/state-pattern/state-pattern-basics"}},s={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"each \u5904\u7406\u53ef\u8fed\u4ee3\u5bf9\u8c61",id:"each-\u5904\u7406\u53ef\u8fed\u4ee3\u5bf9\u8c61",level:3},{value:"ES6 Iterator",id:"es6-iterator",level:3},{value:"\u6709\u5e8f\u6570\u636e\u96c6\u5408\u7c7b\u578b",id:"\u6709\u5e8f\u6570\u636e\u96c6\u5408\u7c7b\u578b",level:4},{value:"\u6709\u5e8f\u6570\u636e\u96c6\u5408\u7279\u70b9",id:"\u6709\u5e8f\u6570\u636e\u96c6\u5408\u7279\u70b9",level:4},{value:"\u5b9e\u8df5",id:"\u5b9e\u8df5",level:4},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8fed\u4ee3\u5668\u6a21\u5f0f-iterator-pattern"},"\u8fed\u4ee3\u5668\u6a21\u5f0f Iterator Pattern"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6309\u987a\u5e8f\u8bbf\u95ee\u4e00\u4e2a\u96c6\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8005\u65e0\u9700\u77e5\u9053\u96c6\u5408\u7684\u5185\u90e8\u7ed3\u6784\uff08\u5c01\u88c5\uff09")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"classDiagram\nContainer --\x3e Iterator\nclass Container {\n  + list: Array\n  +getIterator() Iterator\n}\n\nclass Iterator {\n  + list: Array\n  - index: int\n  +next() int\n  +hasNext() boolean\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Container {\n  constructor(list) {\n    this.list = list;\n  }\n\n  getIterator() {\n    return new Iterator(this)\n  }\n}\nclass Iterator {\n  constructor(container) {\n    this.list = container.list\n    this.index = 0\n  }\n\n  hasNext() {\n    return this.list[this.index]\n  }\n\n  next() {\n    if (!this.hasNext()) {\n      return null\n    }\n    return this.list[this.index++]\n  }\n}\n\nconst arr = [1, 2, 3, 4, 5]\nconst container = new Container(arr)\nconst iterator = container.getIterator()\nwhile(iterator.hasNext()) {\n  console.log(iterator.next())\n}\n")),(0,a.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("h3",{id:"each-\u5904\u7406\u53ef\u8fed\u4ee3\u5bf9\u8c61"},"each \u5904\u7406\u53ef\u8fed\u4ee3\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div id="wrapper">\n  <a href="#">a1</a>\n  <a href="#">a2</a>\n  <a href="#">a3</a>\n  <a href="#">a4</a>\n  <a href="#">a5</a>\n</div>\n<script>\n  const arr = [1, 2, 3]\n  // \u7c7b\u6570\u7ec4\n  const nodeList = document.getElementsByTagName(\'a\')\n\n  arr.forEach(x => {\n    console.log(x)\n  })\n\n  // \u7c7b\u6570\u7ec4\u904d\u5386\u4e0d\u80fd\u7528 forEach\n  for(let i = 0; i < nodeList.length; i += 1) {\n    console.log(nodeList[i])\n  }\n\n  // \u90fd\u8f6c\u6210\u6570\u7ec4\n  function each(val) {\n    Array.from(val).forEach((k, v) => {\n      console.log(k, v)\n    })\n  }\n<\/script>\n')),(0,a.kt)("h3",{id:"es6-iterator"},"ES6 Iterator"),(0,a.kt)("h4",{id:"\u6709\u5e8f\u6570\u636e\u96c6\u5408\u7c7b\u578b"},"\u6709\u5e8f\u6570\u636e\u96c6\u5408\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Array"),(0,a.kt)("li",{parentName:"ul"},"Map"),(0,a.kt)("li",{parentName:"ul"},"Set"),(0,a.kt)("li",{parentName:"ul"},"String"),(0,a.kt)("li",{parentName:"ul"},"TypedArray \u7c7b\u578b\u5316\u6570\u7ec4"),(0,a.kt)("li",{parentName:"ul"},"arguments \u51fd\u6570\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"NodeList \u7c7b\u6570\u7ec4")),(0,a.kt)("h4",{id:"\u6709\u5e8f\u6570\u636e\u96c6\u5408\u7279\u70b9"},"\u6709\u5e8f\u6570\u636e\u96c6\u5408\u7279\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u90fd\u6709 ","[Symbol.iterator]"," \u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u503c\u662f\u51fd\u6570\uff0c\u6267\u884c\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u8fed\u4ee3\u5668\u6709 next \u65b9\u6cd5\u53ef\u987a\u5e8f\u8fed\u4ee3\u5b50\u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u8fd0\u884c Array.prototype","[Symbol.iterator]"," \u8fdb\u884c\u6d4b\u8bd5")),(0,a.kt)("h4",{id:"\u5b9e\u8df5"},"\u5b9e\u8df5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function each(data) {\n  const iterator = data[Symbol.iterator]()\n\n  let item = {done: false}\n  while(!item.done) {\n    item = iterator.next()\n    if (!item.done) {\n      console.log(item.value)\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fed\u4ee3\u5668\u5bf9\u8c61\u548c\u76ee\u6807\u5bf9\u8c61\u5206\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u8fed\u4ee3\u5668\u5c06\u4f7f\u7528\u8005\u548c\u76ee\u6807\u5bf9\u8c61\u9694\u79bb\u5f00"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219")))}u.isMDXComponent=!0}}]);