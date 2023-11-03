"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=r.createContext({}),i=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(a.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,p=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=i(n),d=c,m=u["".concat(a,".").concat(d)]||u[d]||y[d]||p;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:c,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=n(7462),c=(n(7294),n(3905));const p={id:"type-challenge-pick",title:"\u5b9e\u73b0 pick",tags:["TypeScript","type challenge"]},l=void 0,o={unversionedId:"typescript/type-challenge/type-challenge-pick",id:"typescript/type-challenge/type-challenge-pick",title:"\u5b9e\u73b0 pick",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/typescript/type-challenge/4-pick.md",sourceDirName:"typescript/type-challenge",slug:"/typescript/type-challenge/type-challenge-pick",permalink:"/myblog/docs/typescript/type-challenge/type-challenge-pick",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/type-challenge/4-pick.md",tags:[{label:"TypeScript",permalink:"/myblog/docs/tags/type-script"},{label:"type challenge",permalink:"/myblog/docs/tags/type-challenge"}],version:"current",sidebarPosition:4,frontMatter:{id:"type-challenge-pick",title:"\u5b9e\u73b0 pick",tags:["TypeScript","type challenge"]}},a={},i=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2}],s={toc:i};function y(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,c.kt)("p",null,"\u5b9e\u73b0 TS \u5185\u7f6e\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"Pick<T, K>"),"\uff0c\u4f46\u4e0d\u53ef\u4ee5\u4f7f\u7528\u5b83\u3002"),(0,c.kt)("p",null,"\u4ece\u7c7b\u578b ",(0,c.kt)("inlineCode",{parentName:"p"},"T")," \u4e2d\u9009\u62e9\u51fa\u5c5e\u6027 ",(0,c.kt)("inlineCode",{parentName:"p"},"K"),"\uff0c\u6784\u9020\u6210\u4e00\u4e2a\u65b0\u7684\u7c7b\u578b\u3002"),(0,c.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"interface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = MyPick<Todo, 'title' | 'completed'>;\n\nconst todo: TodoPreview = {\n  title: 'Clean room',\n  completed: false,\n};\n")))}y.isMDXComponent=!0}}]);