"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=c(r),d=i,f=y["".concat(p,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},96107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={id:"ts-operator",title:"\u7c7b\u578b\u8fd0\u7b97\u7b26",tags:["TypeScript"]},a=void 0,s={unversionedId:"typescript/basic/ts-operator",id:"typescript/basic/ts-operator",title:"\u7c7b\u578b\u8fd0\u7b97\u7b26",description:"keyof",source:"@site/docs/typescript/basic/ts-operator.md",sourceDirName:"typescript/basic",slug:"/typescript/basic/ts-operator",permalink:"/myblog/docs/typescript/basic/ts-operator",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/basic/ts-operator.md",tags:[{label:"TypeScript",permalink:"/myblog/docs/tags/type-script"}],version:"current",frontMatter:{id:"ts-operator",title:"\u7c7b\u578b\u8fd0\u7b97\u7b26",tags:["TypeScript"]},sidebar:"typescript",previous:{title:"\u53ef\u8fa8\u8bc6\u8054\u5408",permalink:"/myblog/docs/typescript/basic/ts-discriminated-union"},next:{title:"\u7c7b\u578b\u65ad\u8a00",permalink:"/myblog/docs/typescript/basic/ts-type-assertions"}},p={},c=[{value:"keyof",id:"keyof",level:2},{value:"in",id:"in",level:2},{value:"\u65b9\u62ec\u53f7",id:"\u65b9\u62ec\u53f7",level:2},{value:"extends...? \u6761\u4ef6\u8fd0\u7b97\u7b26",id:"extends-\u6761\u4ef6\u8fd0\u7b97\u7b26",level:2},{value:"infer \u5173\u952e\u5b57",id:"infer-\u5173\u952e\u5b57",level:2},{value:"is",id:"is",level:2},{value:"\u6a21\u677f\u5b57\u7b26\u4e32",id:"\u6a21\u677f\u5b57\u7b26\u4e32",level:2},{value:"satisfies",id:"satisfies",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"keyof"},"keyof"),(0,i.kt)("h2",{id:"in"},"in"),(0,i.kt)("h2",{id:"\u65b9\u62ec\u53f7"},"\u65b9\u62ec\u53f7"),(0,i.kt)("h2",{id:"extends-\u6761\u4ef6\u8fd0\u7b97\u7b26"},"extends...? \u6761\u4ef6\u8fd0\u7b97\u7b26"),(0,i.kt)("h2",{id:"infer-\u5173\u952e\u5b57"},"infer \u5173\u952e\u5b57"),(0,i.kt)("p",null,"\u8868\u793a\u5728 extends \u6761\u4ef6\u8bed\u53e5\u4e2d\u5f85\u63a8\u65ad\u7684\u7c7b\u578b\u53d8\u91cf"),(0,i.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u901a\u8fc7 infer \u6765\u5b9e\u73b0 tuple \u8f6c union\u3002\u5224\u65ad\u7c7b\u578b T \u662f\u5426\u662f\u4e00\u4e2a\u6570\u7ec4\u7c7b\u578b\uff0c\u5982\u679c\u662f\u7684\u8bdd\uff0c\u4f7f\u7528 infer \u5173\u952e\u5b57\u63a8\u65ad\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\uff0c\u5e76\u8fd4\u56de\u8be5\u7c7b\u578b\uff1b\u5982\u679c\u4e0d\u662f\u6570\u7ec4\u7c7b\u578b\uff0c\u5219\u8fd4\u56de never \u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type TypeOfArrayItem<T> = T extends Array<infer I> ? I : never\n\ntype MyTuple = [string, number]\n\ntype MyUnion = TypeOfArrayItem<MyTuple> // type MyUnion = string | number\n")),(0,i.kt)("h2",{id:"is"},"is"),(0,i.kt)("h2",{id:"\u6a21\u677f\u5b57\u7b26\u4e32"},"\u6a21\u677f\u5b57\u7b26\u4e32"),(0,i.kt)("h2",{id:"satisfies"},"satisfies"))}u.isMDXComponent=!0}}]);