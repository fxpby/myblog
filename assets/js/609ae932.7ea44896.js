"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[934],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return t?r.createElement(d,s(s({ref:n},c),{},{components:t})):r.createElement(d,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={id:"ts-interfaces",title:"\u63a5\u53e3",tags:["TypeScript"]},s=void 0,o={unversionedId:"typescript/basic/ts-interfaces",id:"typescript/basic/ts-interfaces",title:"\u63a5\u53e3",description:"\u4f7f\u7528\u63a5\u53e3\u5b9a\u4e49\u5bf9\u8c61\u7684\u7c7b\u578b",source:"@site/docs/typescript/basic/ts-interfaces.md",sourceDirName:"typescript/basic",slug:"/typescript/basic/ts-interfaces",permalink:"/myblog/docs/typescript/basic/ts-interfaces",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/basic/ts-interfaces.md",tags:[{label:"TypeScript",permalink:"/myblog/docs/tags/type-script"}],version:"current",frontMatter:{id:"ts-interfaces",title:"\u63a5\u53e3",tags:["TypeScript"]},sidebar:"typescript",previous:{title:"\u4efb\u610f\u503c",permalink:"/myblog/docs/typescript/basic/ts-any"},next:{title:"\u8054\u5408\u7c7b\u578b",permalink:"/myblog/docs/typescript/basic/ts-union-types"}},l={},p=[{value:"\u53ef\u9009\u5c5e\u6027",id:"\u53ef\u9009\u5c5e\u6027",level:2},{value:"\u4efb\u610f\u5c5e\u6027",id:"\u4efb\u610f\u5c5e\u6027",level:2},{value:"\u53ea\u8bfb\u5c5e\u6027",id:"\u53ea\u8bfb\u5c5e\u6027",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f7f\u7528\u63a5\u53e3\u5b9a\u4e49\u5bf9\u8c61\u7684\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Point1 {\n  x: number,\n  y: string\n}\nfunction foo9(pt: Point1) {\n  console.log(pt)\n}\nfoo9({x: 233, y: '233'})\n")),(0,a.kt)("p",null,"\u63a5\u53e3\u662f\u53ef\u4ee5\u62d3\u5c55\u7ee7\u627f\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Animal {\n  name: string\n}\n\ninterface Bear extends Animal {\n  age: number\n}\n\nconst bear: Bear = {\n  name: 'weini',\n  age: 23\n}\nconsole.log(bear.name, bear.age)\n")),(0,a.kt)("p",null,"\u5411\u73b0\u6709\u7684\u63a5\u53e3\u6dfb\u52a0\u65b0\u5b57\u6bb5\uff08\u53ef\u540c\u540d\u65b9\u5f0f\u62d3\u5c55\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyWindow {\n  count: number;\n}\ninterface MyWindow {\n  title: string;\n}\nconst window: MyWindow = {\n  count: 1,\n  title: '233'\n}\n")),(0,a.kt)("h2",{id:"\u53ef\u9009\u5c5e\u6027"},"\u53ef\u9009\u5c5e\u6027"),(0,a.kt)("p",null,"\u8be5\u5c5e\u6027\u53ef\u4ee5\u4e0d\u5b58\u5728, \u4ecd\u7136\u4e0d\u5141\u8bb8\u6dfb\u52a0\u672a\u5b9a\u4e49\u7684\u5c5e\u6027"),(0,a.kt)("p",null,"\u5bf9\u8c61\u5c5e\u6027\u540d\u79f0\u540e\u9762\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," \u4ee3\u8868\u8fd9\u4e2a\u503c\u53ef\u4ee5\u4e0d\u4f20\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"?: string")," \u5c31\u4ee3\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"string | undefined")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: string,\n  age?: number\n}\nlet olu: Person = {\n  name: 'olu',\n  // age: 18 // age\u53ef\u4e0d\u58f0\u660e\n}\n")),(0,a.kt)("h2",{id:"\u4efb\u610f\u5c5e\u6027"},"\u4efb\u610f\u5c5e\u6027"),(0,a.kt)("p",null,"\u5e0c\u671b\u63a5\u53e3\u53ef\u4ee5\u6709\u4efb\u610f\u5c5e\u6027\uff0c\u53ef\u4ee5\u4f7f\u7528 ","[propName: string]","\uff0c\u5b9a\u4e49\u4efb\u610f\u5c5e\u6027\u53d6 string \u7c7b\u578b\u7684\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: string,\n  age?: number,\n  [propName: string]: any\n}\nlet olu: Person = {\n  name: 'olu',\n  drink: 'Coke'\n}\n")),(0,a.kt)("p",null,"\u4e00\u65e6\u5b9a\u4e49\u4e86\u4efb\u610f\u5c5e\u6027\uff0c\u786e\u5b9a\u5c5e\u6027\u548c\u53ef\u9009\u5c5e\u6027\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u5176\u7c7b\u578b\u7684\u5b50\u96c6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: number[], // \u7c7b\u578b\u201cnumber[]\u201d\u7684\u5c5e\u6027\u201cname\u201d\u4e0d\u80fd\u8d4b\u7ed9\u201cstring\u201d\u7d22\u5f15\u7c7b\u578b\u201cstring\u201d\n  age?: number, // \u7c7b\u578b\u201cnumber | undefined\u201d\u7684\u5c5e\u6027\u201cage\u201d\u4e0d\u80fd\u8d4b\u7ed9\u201cstring\u201d\u7d22\u5f15\u7c7b\u578b\u201cstring\u201d\n  [propName: string]: string\n}\nlet olu: Person = {\n  name: [1,2],\n  drink: 123 // \u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnumber\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cstring\u201d\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"[propName: string]: string")," \u5b9a\u4e49\u4efb\u610f\u5c5e\u6027\u53d6 string\u7c7b\u578b\uff0c\u5df2\u5b9a\u4e49\u7684 name \u5c5e\u6027\u662f\u6570\u5b57\u6570\u7ec4\u4e0d\u7b26\u5408\uff0c\u5df2\u5b9a\u4e49\u7684 age \u5c5e\u6027\u662f number \u6216 undefined \u4e5f\u4e0d\u7b26\u5408\uff0cdrink \u4e5f\u4e0d\u662f string \u7c7b\u578b"),(0,a.kt)("p",null,"\u4e00\u4e2a\u63a5\u53e3\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u4efb\u610f\u5c5e\u6027\uff0c\u5982\u679c\u63a5\u53e3\u4e2d\u6709\u591a\u4e2a\u7c7b\u578b\u7684\u5c5e\u6027\uff0c\u9700\u8981\u5728\u4efb\u610f\u5c5e\u6027\u4e2d\u4f7f\u7528\u8054\u5408\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: number[],\n  age?: number,\n  [propName: string]: string | number[] | undefined | number\n}\nlet olu: Person = {\n  name: [1,2],\n  drink: 123\n}\n")),(0,a.kt)("h2",{id:"\u53ea\u8bfb\u5c5e\u6027"},"\u53ea\u8bfb\u5c5e\u6027"),(0,a.kt)("p",null,"\u8ba9\u5b57\u6bb5\u53ea\u80fd\u5728\u521b\u5efa\u7684\u65f6\u5019\u88ab\u8d4b\u503c\uff0c\u53ea\u8bfb\u7684\u7ea6\u675f\u5b58\u5728\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b21"),"\u7ed9",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u8c61"),"\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u800c\u4e0d\u662f\u7b2c\u4e00\u6b21\u7ed9\u53ea\u8bfb\u5c5e\u6027\u8d4b\u503c\u7684\u65f6\u5019"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: number[],\n  age?: number,\n  readonly hobby: string,\n  cb(): number,\n  [propName: string]: string | number[] | undefined | number | Function\n}\nlet olu: Person = {\n  name: [1,2],\n  drink: 123,\n  hobby: 'sleep',\n  cb: (): number => 123\n}\n\nolu.hobby = 'eat' // \u65e0\u6cd5\u5206\u914d\u5230 \"hobby\" \uff0c\u56e0\u4e3a\u5b83\u662f\u53ea\u8bfb\u5c5e\u6027\n")))}u.isMDXComponent=!0}}]);