"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,d=u["".concat(c,".").concat(y)]||u[y]||m[y]||i;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"ts-mixins",title:"mixins \u6df7\u5165",tags:["TypeScript"]},s=void 0,o={unversionedId:"typescript/advance/ts-mixins",id:"typescript/advance/ts-mixins",title:"mixins \u6df7\u5165",description:"\u5bf9\u8c61\u7684\u6df7\u5165",source:"@site/docs/typescript/advance/ts-mixins.md",sourceDirName:"typescript/advance",slug:"/typescript/advance/ts-mixins",permalink:"/myblog/docs/typescript/advance/ts-mixins",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/advance/ts-mixins.md",tags:[{label:"TypeScript",permalink:"/myblog/docs/tags/type-script"}],version:"current",frontMatter:{id:"ts-mixins",title:"mixins \u6df7\u5165",tags:["TypeScript"]},sidebar:"typescript",previous:{title:"\u5185\u7f6e\u7c7b\u578b\u5de5\u5177",permalink:"/myblog/docs/typescript/advance/ts-utility"},next:{title:"\u88c5\u9970\u5668",permalink:"/myblog/docs/typescript/advance/ts-decorator"}},c={},p=[{value:"\u5bf9\u8c61\u7684\u6df7\u5165",id:"\u5bf9\u8c61\u7684\u6df7\u5165",level:2},{value:"\u7c7b\u7684\u6df7\u5165",id:"\u7c7b\u7684\u6df7\u5165",level:2}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5bf9\u8c61\u7684\u6df7\u5165"},"\u5bf9\u8c61\u7684\u6df7\u5165"),(0,a.kt)("p",null,"\u5199\u4e09\u4e2a\u63a5\u53e3\uff0c\u7136\u540e\u4f7f\u7528 Object.assign(), \u5373\u53ef\u5f97\u5230\u8054\u5408\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Name {\n  name: string\n}\n\ninterface Age {\n  age: number\n}\n\ninterface Hobby {\n  hobby: string\n}\n\nconst n1: Name = { name: 'olu' }\nconst a1: Age = { age: 18 }\nconst h1: Hobby = { hobby: 'study' }\n\nconst obj = Object.assign(n1, a1, h1) // const obj: Name & Age & Hobby\n")),(0,a.kt)("h2",{id:"\u7c7b\u7684\u6df7\u5165"},"\u7c7b\u7684\u6df7\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class A {\n  type?: boolean\n  changeType():void {\n    this.type = !this.type\n  }\n}\n\nclass B {\n  name?: string\n  getName(): string | void {\n    return this.name\n  }\n}\n\nclass C implements A,B {\n  type: boolean = false\n  name: string = 'olu'\n  changeType:()=>void = () => { this.type = !this.type }\n  getName:() => string | void = () => { return this.name }\n}\n\nmixins(C, [A, B])\n\nfunction mixins(curClass: any, itemClass: any[]) {\n  itemClass.forEach(item => {\n    Object.getOwnPropertyNames(item.properties).forEach(name => {\n      curClass.prototype[name] = item.properties[name]\n    })\n  })\n}\n")))}m.isMDXComponent=!0}}]);