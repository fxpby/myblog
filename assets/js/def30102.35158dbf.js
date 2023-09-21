"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),y=s,f=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={id:"ts-type-assertions",title:"\u7c7b\u578b\u65ad\u8a00",tags:["TypeScript"]},o=void 0,i={unversionedId:"typescript/basic/ts-type-assertions",id:"typescript/basic/ts-type-assertions",title:"\u7c7b\u578b\u65ad\u8a00",description:"\u7c7b\u578b\u65ad\u8a00\u5141\u8bb8\u8f6c\u6362\u4e3a\u66f4\u5177\u4f53\u6216\u4e0d\u592a\u5177\u4f53\u7684\u7c7b\u578b\u7248\u672c",source:"@site/docs/typescript/basic/ts-type-assertions.md",sourceDirName:"typescript/basic",slug:"/typescript/basic/ts-type-assertions",permalink:"/myblog/docs/typescript/basic/ts-type-assertions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/basic/ts-type-assertions.md",tags:[{label:"TypeScript",permalink:"/myblog/docs/tags/type-script"}],version:"current",frontMatter:{id:"ts-type-assertions",title:"\u7c7b\u578b\u65ad\u8a00",tags:["TypeScript"]},sidebar:"typescript",previous:{title:"\u53ef\u8fa8\u8bc6\u8054\u5408",permalink:"/myblog/docs/typescript/basic/ts-discriminated-union"},next:{title:"\u4ea4\u53c9\u7c7b\u578b",permalink:"/myblog/docs/typescript/basic/ts-cross-types"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u7c7b\u578b\u65ad\u8a00\u5141\u8bb8\u8f6c\u6362\u4e3a\u66f4\u5177\u4f53\u6216\u4e0d\u592a\u5177\u4f53\u7684\u7c7b\u578b\u7248\u672c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;\nconst myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");\n')),(0,s.kt)("p",null,"\u5f3a\u5236\u65ad\u8a00\u65b9\u5f0f\u5982\u4e0b\uff0c\u5148\u8f6c any \u6216 unknown\uff0c\u518d\u8f6c\u5176\u4ed6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const testAssert = ('abcd' as any) as number\nconst testAssert2 = ('abcd' as unknown) as number\n")),(0,s.kt)("p",null,"\u5f53 TypeScript \u4e0d\u786e\u5b9a\u4e00\u4e2a\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u662f\u4ec0\u4e48\u7c7b\u578b\u65f6\uff0c\u53ea\u80fd\u8bbf\u95ee\u8054\u5408\u7c7b\u578b\u7684\u6240\u6709\u7c7b\u578b\u4e2d\u5171\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface Olu {\n  name: string;\n  work(): void;\n}\n\ninterface Cookie {\n  name: string;\n  study(): void;\n}\n\nfunction getName(person: Olu | Cookie): string {\n  return person.name\n}\n")),(0,s.kt)("p",null,"\u4f46\u662f\u6211\u4eec\u4f1a\u6709\u9700\u8981\u5728\u4e0d\u786e\u5b9a\u7c7b\u578b\u65f6\u8bbf\u95ee\u5176\u4e2d\u4e00\u4e2a\u7c7b\u578b\u7279\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u5c31\u5f97\u5230\u4e86\u62a5\u9519\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface Olu {\n  name: string;\n  work(): void;\n}\n\ninterface Cookie {\n  name: string;\n  study(): void;\n}\n\nfunction isCute(person: Olu | Cookie): boolean {\n  // \u7c7b\u578b\u201cOlu | Cookie\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201cwork\u201d\u3002\n  // \u7c7b\u578b\u201cCookie\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201cwork\u201d\n  if (typeof person.work === 'function') {\n    return true\n  }\n  return false\n}\n")),(0,s.kt)("p",null,"\u53ef\u4f7f\u7528",(0,s.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u65ad\u8a00"),"\u89e3\u51b3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"function isCute1(person: Olu | Cookie):boolean {\n  if (typeof (person as Olu).work === 'function') {\n    return true\n  }\n  return false\n}\n\nfunction isCute2(person: Olu | Cookie):boolean {\n  if (typeof (<Olu>person).work  === 'function') {\n    return true\n  }\n  return false\n}\n")))}u.isMDXComponent=!0}}]);