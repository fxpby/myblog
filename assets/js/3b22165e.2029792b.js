"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,p(p({ref:t},i),{},{components:n})):r.createElement(m,p({ref:t},i))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},p="\u539f\u578b\u6a21\u5f0f Prototype Pattern",c={unversionedId:"design-pattern/prototype-pattern/prototype-pattern-basics",id:"design-pattern/prototype-pattern/prototype-pattern-basics",title:"\u539f\u578b\u6a21\u5f0f Prototype Pattern",description:"\u4ecb\u7ecd",source:"@site/docs/design-pattern/prototype-pattern/prototype-pattern-basics.md",sourceDirName:"design-pattern/prototype-pattern",slug:"/design-pattern/prototype-pattern/prototype-pattern-basics",permalink:"/docs/design-pattern/prototype-pattern/prototype-pattern-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-pattern/prototype-pattern/prototype-pattern-basics.md",tags:[],version:"current",frontMatter:{},sidebar:"design-pattern",previous:{title:"\u72b6\u6001\u6a21\u5f0f State Pattern",permalink:"/docs/design-pattern/state-pattern/state-pattern-basics"},next:{title:"\u6865\u63a5\u6a21\u5f0f Bridge Pattern",permalink:"/docs/design-pattern/bridge-pattern/bridge-pattern-basics"}},l={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2},{value:"Object.create",id:"objectcreate",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],i={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u539f\u578b\u6a21\u5f0f-prototype-pattern"},"\u539f\u578b\u6a21\u5f0f Prototype Pattern"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clone \u81ea\u5df1\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u5bf9\u8c61")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u521b\u5efa\u8bb8\u591a\u5bf9\u8c61\u6709\u76f8\u540c\u5c5e\u6027\u7684\u8bdd\uff0c\u4f7f\u7528 ES6 class \u6765\u521b\u5efa\u591a\u4e2a\u5b9e\u4f8b\u662f\u5f88\u6709\u7528\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class Dog {\n  constructor(name) {\n    this.name = name\n  }\n\n  bark() {\n    return `Woof~`\n  }\n}\n\nconst dog1 = new Dog("Max")\nconst dog2 = new Dog("Spot")\nconst dog3 = new Dog("Boom")\n')),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u6784\u9020\u5668\u5305\u542b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," \u5c5e\u6027\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7c7b\u81ea\u5df1\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"bark")," \u5c5e\u6027\uff0c\u5728\u4f7f\u7528 ES6 class \u7684\u65f6\u5019\uff0c\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"bark")," \u5c31\u81ea\u52a8\u6dfb\u52a0\u5230\u539f\u578b\u4e0a\u4e86."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Dog.prototype)\n// {constructor: f Dog(name), bark: f bark()}\n\nconsole.log(dog1.__proto__)\n// {constructor: f Dog(name), bark: f bark()}\n\nDog.prototype === dog1.__proto__ // true\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u539f\u578b\u6a21\u5f0f\u4e00\u6b21\u6027\u7684\u6dfb\u52a0\u5c5e\u6027\u5230\u539f\u578b\u4e0a\uff0c\u5f71\u54cd\u6240\u6709\u5b9e\u4f8b\u800c\u4e0d\u662f\u6bcf\u4e00\u6b21\u90fd\u521b\u5efa\u91cd\u590d\u5c5e\u6027\u3002\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837\uff0c\u72d7\u72d7\u4e0d\u6b62\u4f1a\u53eb\uff0c\u8fd8\u4f1a\u73a9\u800d\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"play")," \u5c5e\u6027\u5230\u539f\u578b\u4e0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class Dog {\n  constructor(name) {\n    this.name = name\n  }\n\n  bark() {\n    return `Woof~`\n  }\n}\n\nconst dog1 = new Dog("Max")\nconst dog2 = new Dog("Spot")\nconst dog3 = new Dog("Boom")\n\nDog.prototype.play = () => console.log(\'playing with olu~\')\ndog1.play()\n')),(0,o.kt)("h2",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,o.kt)("h3",{id:"objectcreate"},"Object.create"),(0,o.kt)("p",null,"Object.create \u65b9\u6cd5\u53ef\u4ee5\u521b\u5efa\u65b0\u5bf9\u8c61\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const dog = {\n  bark() {\n    return `Woof`\n  }\n}\n\nconst pet1 = Object.create(dog)\n\npet1.bark() // Woof\nconsole.log(Object.keys(pet1)) // [] \u76f4\u63a5\u8bbf\u95ee pet1 \u7684\u5c5e\u6027\nconsole.log(Object.keys(pet1.__proto__)) // ['bark'] \u5728 pet1 \u539f\u578b\u4e0a\u7684\u5c5e\u6027\n")),(0,o.kt)("p",null,"\u5c3d\u7ba1 pet1 \u81ea\u5df1\u6ca1\u6709\u4efb\u4f55\u5c5e\u6027\uff0c\u4f46\u662f\u5b83\u901a\u8fc7\u81ea\u5df1\u7684\u539f\u578b\u94fe\u83b7\u53d6\u5230\u4e86\u5c5e\u6027\uff0c\u901a\u8fc7 dog \u5bf9\u8c61\u4f5c\u4e3a pet1 \u7684\u539f\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee bark \u5c5e\u6027\u3002\nObject.create \u662f\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u5f0f\u8ba9\u5bf9\u8c61\u4ece\u5176\u4ed6\u5bf9\u8c61\u4e0a\u7ee7\u627f\u5c5e\u6027\uff0c\u65b0\u5bf9\u8c61\u53ef\u4ee5\u987a\u7740\u539f\u578b\u94fe\u83b7\u53d6\u5230\u5c5e\u6027\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u539f\u578b\u6a21\u5f0f\u53ef\u4ee5\u8ba9\u6211\u4eec\u5f88\u7b80\u6d01\u7684\u53bb\u7ee7\u627f\u5176\u4ed6\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u539f\u578b\u94fe\u5141\u8bb8\u6211\u4eec\u8bbf\u95ee\u54ea\u4e9b\u6ca1\u6709\u76f4\u63a5\u5b9a\u4e49\u5728\u5bf9\u8c61\u81ea\u5df1\u8eab\u4e0a\u7684\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u907f\u514d\u91cd\u590d\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u8fdb\u800c\u51cf\u5c11\u5185\u5b58\u5360\u7528\u3002"))}u.isMDXComponent=!0}}]);