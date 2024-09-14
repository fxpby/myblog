"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5144],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={},c="\u88c5\u9970\u5668\u6a21\u5f0f Decorator Pattern",l={unversionedId:"design-pattern/decorator-pattern/decorator-pattern-basics",id:"design-pattern/decorator-pattern/decorator-pattern-basics",title:"\u88c5\u9970\u5668\u6a21\u5f0f Decorator Pattern",description:"\u4ecb\u7ecd",source:"@site/docs/design-pattern/decorator-pattern/decorator-pattern-basics.md",sourceDirName:"design-pattern/decorator-pattern",slug:"/design-pattern/decorator-pattern/decorator-pattern-basics",permalink:"/myblog/docs/design-pattern/decorator-pattern/decorator-pattern-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-pattern/decorator-pattern/decorator-pattern-basics.md",tags:[],version:"current",frontMatter:{},sidebar:"design-pattern",previous:{title:"\u9002\u914d\u5668\u6a21\u5f0f Adapter Pattern",permalink:"/myblog/docs/design-pattern/adapter-pattern/adapter-pattern-basics"},next:{title:"\u4ee3\u7406\u6a21\u5f0f Proxy Pattern",permalink:"/myblog/docs/design-pattern/proxy-pattern/proxy-pattern-basics"}},s={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"ES7 \u88c5\u9970\u5668",id:"es7-\u88c5\u9970\u5668",level:3},{value:"\u4e09\u65b9\u5e93 core-decorators",id:"\u4e09\u65b9\u5e93-core-decorators",level:3},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}],p={toc:i};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u88c5\u9970\u5668\u6a21\u5f0f-decorator-pattern"},"\u88c5\u9970\u5668\u6a21\u5f0f Decorator Pattern"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u65b0\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u6539\u53d8\u5176\u539f\u6709\u7684\u7ed3\u6784\u548c\u529f\u80fd")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u7c7b\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"classDiagram\n\nClient --\x3e Decorator\nDecorator --\x3e Circle\n\nclass Client {\n  + circle: Circle\n  + dec: Decorator\n  +main () void\n}\n\nclass Decorator {\n  cricle: Circle\n  +draw() void\n  +setBorderStyle(circle)\n}\n\nclass Circle {\n  +draw() void\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Circle {\n  draw(){\n    console.log('draw circle')\n  }\n}\n\nclass Decorator{\n  constructor(circle) {\n    this.circle = new Circle()\n  }\n\n  draw() {\n    this.circle.draw()\n    this.setborderStyle()\n  }\n\n  setborderStyle() {\n    console.log('set style..')\n  }\n}\n\nconst circle = new Circle()\ncircle.draw()\nconst dec = new Decorator(circle)\ndec.draw()\n")),(0,a.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("h3",{id:"es7-\u88c5\u9970\u5668"},"ES7 \u88c5\u9970\u5668"),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u7c7b Demo\uff0c\u5b9a\u4e49\u88c5\u9970\u5668 testDec, ",(0,a.kt)("inlineCode",{parentName:"p"},"@testDec"),"\u5199\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"class Demo"),"\u524d\uff0ctestDec \u53ef\u4ee5\u83b7\u53d6\u5230\u53c2\u6570 target\uff0c\u5373\u5f53\u524d\u7684 demo \u7c7b\u3002\u7136\u540e\u5c31\u53ef\u4ee5\u5728 testDec \u4e2d\u5bf9 demo \u7684\u5c5e\u6027\u505a\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50 1, \u5e26\u53c2\u7684\u88c5\u9970\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u9700\u5b89\u88c5 @babel/plugin-proposal-decorators\n@testDec(false)\nclass Demo{\n\n}\n\nfunction testDec(isDec) {\n  return function (target){\n    target.isDec = isDec\n  }\n}\nconsole.log(Demo.isDec)\n")),(0,a.kt)("p",null,"\u88c5\u9970\u5668\u5bf9\u7c7b\u7684\u884c\u4e3a\u7684\u6539\u53d8\u662f\u5728\u4ee3\u7801\u7f16\u8bd1\u65f6\u53d1\u751f\u7684\uff0c\u4e0d\u662f\u5728\u8fd0\u884c\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"@decorators\nclass A{}\n// \u76f8\u5f53\u4e8e \ud83d\udc47\ud83c\udffb\nclass A{}\nA = decorators(A) || A\n")),(0,a.kt)("p",null,"\u4f8b\u5b50 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function mixins(list) {\n  return function (target) {\n    Object.assign(target.prototype, ...list);\n  }\n}\n\nconst Foo1 = {\n  foo1() {\n    console.log('foo1')\n  }\n}\n\nconst Foo2 = {\n  foo2() {\n    console.log('foo2')\n  }\n}\n\n@mixins([Foo1, Foo2])\nclass MyClass{}\n\nconst obj = new MyClass()\nobj.foo1()\nobj.foo2()\n")),(0,a.kt)("p",null,"\u4f8b\u5b50 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function readOnly(target, prop, description) {\n  description.writable = false\n  return description\n}\n\nclass Person {\n  constructor() {\n    this.name = 'olu'\n    this.age = 18\n  }\n\n  // \u88c5\u9970\u65b9\u6cd5\n  @readOnly\n  getInfo() {\n    return `name: ${this.name}, age: ${this.age}`\n  }\n}\n\nconst p = new Person\np.getInfo = function() {\n  console.log('olucool')\n}\nconsole.log(p.getInfo()) // \u8fd8\u662f\u539f\u5148\u7684\uff0c\u672a\u88ab\u4fee\u6539\n")),(0,a.kt)("p",null,"\u4f8b\u5b50 4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function log (target, name, description) {\n  const oldValue = description.value\n  description.value = function () {\n    console.log(`calling ${name} with ${arguments}`)\n    return oldValue.apply(this, arguments)\n  }\n  return description\n}\n\nclass Math{\n  @log\n  add(a, b) {\n    return a + b\n  }\n}\n\nconst m = new Math();\nconst sum = m.add(1,4) // 5\n")),(0,a.kt)("h3",{id:"\u4e09\u65b9\u5e93-core-decorators"},"\u4e09\u65b9\u5e93 core-decorators"),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u73b0\u6709\u5bf9\u8c61\u548c\u88c5\u9970\u5668\u8fdb\u884c\u5206\u79bb\uff0c\u4e24\u8005\u72ec\u7acb\u5b58\u5728"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219")))}d.isMDXComponent=!0}}]);