"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8889],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>g});var r=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,l=function(n,e){if(null==n)return{};var t,r,l={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var c=r.createContext({}),o=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=o(n.components);return r.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,l=n.mdxType,a=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),d=o(t),g=l,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(f,i(i({ref:e},u),{},{components:t})):r.createElement(f,i({ref:e},u))}));function g(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:l,i[1]=s;for(var o=2;o<a;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7078:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=t(7462),l=(t(7294),t(3905));const a={id:"apply-call-bind",title:"\u5b9e\u73b0 apply/call/bind",tags:["apply","call","bind"]},i=void 0,s={unversionedId:"javascript/apply-call-bind",id:"javascript/apply-call-bind",title:"\u5b9e\u73b0 apply/call/bind",description:"1. apply",source:"@site/docs/javascript/apply-call-bind.md",sourceDirName:"javascript",slug:"/javascript/apply-call-bind",permalink:"/myblog/docs/javascript/apply-call-bind",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/apply-call-bind.md",tags:[{label:"apply",permalink:"/myblog/docs/tags/apply"},{label:"call",permalink:"/myblog/docs/tags/call"},{label:"bind",permalink:"/myblog/docs/tags/bind"}],version:"current",frontMatter:{id:"apply-call-bind",title:"\u5b9e\u73b0 apply/call/bind",tags:["apply","call","bind"]},sidebar:"javascript",previous:{title:"this \u6307\u5411",permalink:"/myblog/docs/javascript/this"}},c={},o=[{value:"1. apply",id:"1-apply",level:2},{value:"1.1 \u8bed\u6cd5",id:"11-\u8bed\u6cd5",level:3},{value:"1.2 \u6d41\u7a0b\u56fe",id:"12-\u6d41\u7a0b\u56fe",level:3},{value:"1.3 \u4ee3\u7801\u5b9e\u73b0",id:"13-\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"2. bind",id:"2-bind",level:2},{value:"2.1 \u8bed\u6cd5",id:"21-\u8bed\u6cd5",level:3},{value:"2.2 \u6d41\u7a0b\u56fe",id:"22-\u6d41\u7a0b\u56fe",level:3},{value:"2.3 \u4ee3\u7801\u5b9e\u73b0",id:"23-\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"3. call",id:"3-call",level:2},{value:"3.1 \u8bed\u6cd5",id:"31-\u8bed\u6cd5",level:3},{value:"3.2 \u6d41\u7a0b\u56fe",id:"32-\u6d41\u7a0b\u56fe",level:3},{value:"3.3 \u4ee3\u7801\u5b9e\u73b0",id:"33-\u4ee3\u7801\u5b9e\u73b0",level:3}],u={toc:o};function p(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-apply"},"1. apply"),(0,l.kt)("h3",{id:"11-\u8bed\u6cd5"},"1.1 \u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"func.apply(thisArg, [argsArray]);\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"thisArg: \u5728 func \u51fd\u6570\u8fd0\u884c\u65f6\u4f7f\u7528\u7684 this \u503c"),(0,l.kt)("li",{parentName:"ul"},"argsArray: \u4e00\u4e2a\u6570\u7ec4\u6216\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u5176\u4e2d\u7684\u6570\u7ec4\u5143\u7d20\u4f5c\u4e3a\u5355\u72ec\u53c2\u6570\u4f20\u7ed9 func \u51fd\u6570\u3002\u5982\u679c\u8be5\u53c2\u6570\u7684\u503c\u4e3a null \u6216\u8005 undefined\uff0c\u8868\u793a\u4e0d\u9700\u8981\u4f20\u5165\u4efb\u4f55\u53c2\u6570")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6307\u5b9a\u7684 this \u503c\u548c\u53c2\u6570\u8c03\u7528\u51fd\u6570\u7684\u7ed3\u679c")),(0,l.kt)("h3",{id:"12-\u6d41\u7a0b\u56fe"},"1.2 \u6d41\u7a0b\u56fe"),(0,l.kt)("h3",{id:"13-\u4ee3\u7801\u5b9e\u73b0"},"1.3 \u4ee3\u7801\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Function.portotype.apply = function (thisArg, argsArray) {\n  if (typeof this !== 'function') {\n    throw new TypeError('which called on is not a function');\n  }\n  if (thisArg === undefined || thisArg === null) {\n    thisArg = window;\n  } else {\n    thisArg = Object(thisArg);\n  }\n\n  // \u5c06 func \u653e\u5165 thisArg \u5185\uff0c\u8fd9\u6837\u5728\u8c03\u7528 thisArg[func] \u65f6 this \u81ea\u7136\u5c31\u6307\u5411\u4e86 thisArg\n  const func = Symbol('func');\n  thisArg[func] = this;\n\n  let result;\n\n  if (argArray && typeof argsArray === 'object' && 'length' in argsArray) {\n    // \u6b64\u5904\u4f7f\u7528 Array.from \u5305\u88f9\u8ba9\u5176\u652f\u6301\u5f62\u5982 { length: 1, 0: 1 } \u8fd9\u6837\u7684\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u76f4\u63a5\u5bf9 argsArray \u5c55\u5f00\u5c06\u4f1a\u6267\u884c\u51fa\u9519\n    result = thisArg[func](...Array.from(argsArray));\n  } else if (argsArray === undefined || argsArray === null) {\n    result = thisArg[func]();\n  } else {\n    throw new TypeError('CreateListFromArrayLike called on non-object');\n  }\n\n  delete thisArg[func];\n\n  return result;\n};\n")),(0,l.kt)("h2",{id:"2-bind"},"2. bind"),(0,l.kt)("h3",{id:"21-\u8bed\u6cd5"},"2.1 \u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"func.bind(thisArg[, arg1[, arg2[, ...]]])\n")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"thisArg: \u8c03\u7528\u7ed1\u5b9a\u51fd\u6570\u65f6\u4f5c\u4e3a this \u53c2\u6570\u4f20\u9012\u7ed9\u76ee\u6807\u51fd\u6570\u7684\u503c\uff1b\u5982\u679c\u4f7f\u7528 new \u8fd0\u7b97\u7b26\u6784\u9020\u7ed1\u5b9a\u51fd\u6570\uff0c\u5ffd\u7565\u8be5\u503c"),(0,l.kt)("li",{parentName:"ul"},"arg1,arg2\uff0c...: \u5f53\u76ee\u6807\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u88ab\u9884\u7f6e\u5165\u7ed1\u5b9a\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u4e2d\u7684\u53c2\u6570")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a\u539f\u51fd\u6570\u7684\u62f7\u8d1d\uff0c\u5e76\u62e5\u6709\u6307\u5b9a\u7684 this \u503c\u548c\u521d\u59cb\u53c2\u6570")),(0,l.kt)("h3",{id:"22-\u6d41\u7a0b\u56fe"},"2.2 \u6d41\u7a0b\u56fe"),(0,l.kt)("h3",{id:"23-\u4ee3\u7801\u5b9e\u73b0"},"2.3 \u4ee3\u7801\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Function.prototype.bind = function (thisArgs, ...argsArray) {\n  if (typeof this !== 'function') {\n    throw new TypeError('which is called on is not a function');\n  }\n\n  if (thisArg === undefined || thisArg === null) {\n    thisArg = window;\n  } else {\n    thisArg = Object(thisArg);\n  }\n\n  const func = this;\n\n  const bound = function (...boundArgsArray) {\n    let isNew = false;\n\n    // \u5982\u679c func \u4e0d\u662f\u6784\u9020\u5668\uff0c\u76f4\u63a5\u4f7f\u7528 instanceof \u5c06\u51fa\u9519\uff0c\u6240\u4ee5\u9700\u8981\u7528 try...catch \u5305\u88f9\n    try {\n      isNew = this instanceof func;\n    } catch (error) {}\n\n    return (\n      func, apply(isNew ? this : thisArg, argsArray.concat(boundArgsArray))\n    );\n  };\n\n  const Empty = function () {};\n  Empty.prototype = this.prototype;\n  bound.prototype = new Empty();\n\n  return bound;\n};\n")),(0,l.kt)("h2",{id:"3-call"},"3. call"),(0,l.kt)("h3",{id:"31-\u8bed\u6cd5"},"3.1 \u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"func.call(thisArg, arg1, arg2, ...)\n")),(0,l.kt)("p",null,"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"thisArg: \u5728 func \u51fd\u6570\u8fd0\u884c\u65f6\u4f7f\u7528\u7684 this \u503c"),(0,l.kt)("li",{parentName:"ul"},"arg1,arg2,...: \u6307\u5b9a\u7684\u53c2\u6570\u5217\u8868")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6307\u5b9a\u7684 this \u503c\u548c\u53c2\u6570\u8c03\u7528\u51fd\u6570\u7684\u7ed3\u679c")),(0,l.kt)("h3",{id:"32-\u6d41\u7a0b\u56fe"},"3.2 \u6d41\u7a0b\u56fe"),(0,l.kt)("h3",{id:"33-\u4ee3\u7801\u5b9e\u73b0"},"3.3 \u4ee3\u7801\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Function.protortpe.call = function (thisArg, ...argsArray) {\n  if (typeof this !== 'function') {\n    throw new TypeError('which called on is not a function');\n  }\n\n  if (thisArg === undefined || thisArg === null) {\n    thisArg = window;\n  } else {\n    thisArg = Object(thisArg);\n  }\n\n  const func = Symbol('func');\n  thisArg[func] = this;\n\n  let result;\n\n  if (argsArray.length) {\n    result = thisArg[func](...argsArray);\n  } else {\n    result = thisArg[func]();\n  }\n\n  delete thisArg[func];\n\n  return result;\n};\n")))}p.isMDXComponent=!0}}]);