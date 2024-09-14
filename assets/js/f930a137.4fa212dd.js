"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<c;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const c={},l="\u5916\u89c2\u6a21\u5f0f Facade Pattern",s={unversionedId:"design-pattern/facade-pattern/facade-pattern-basics",id:"design-pattern/facade-pattern/facade-pattern-basics",title:"\u5916\u89c2\u6a21\u5f0f Facade Pattern",description:"\u4ecb\u7ecd",source:"@site/docs/design-pattern/facade-pattern/facade-pattern-basics.md",sourceDirName:"design-pattern/facade-pattern",slug:"/design-pattern/facade-pattern/facade-pattern-basics",permalink:"/myblog/docs/design-pattern/facade-pattern/facade-pattern-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-pattern/facade-pattern/facade-pattern-basics.md",tags:[],version:"current",frontMatter:{},sidebar:"design-pattern",previous:{title:"\u4ee3\u7406\u6a21\u5f0f Proxy Pattern",permalink:"/myblog/docs/design-pattern/proxy-pattern/proxy-pattern-basics"},next:{title:"\u89c2\u5bdf\u8005\u6a21\u5f0f Observer Pattern",permalink:"/myblog/docs/design-pattern/observer-pattern/observer-pattern-basics"}},i={},o=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u751f\u6d3b\u573a\u666f \u533b\u9662\u63a5\u5f85\u5458",id:"\u751f\u6d3b\u573a\u666f-\u533b\u9662\u63a5\u5f85\u5458",level:3},{value:"\u517c\u5bb9\u53c2\u6570",id:"\u517c\u5bb9\u53c2\u6570",level:3},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}],p={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5916\u89c2\u6a21\u5f0f-facade-pattern"},"\u5916\u89c2\u6a21\u5f0f Facade Pattern"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u5b50\u7cfb\u7edf\u4e2d\u7684\u4e00\u7ec4\u63a5\u53e3\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ad8\u5c42\u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8005\u4f7f\u7528\u8fd9\u4e2a\u9ad8\u5c42\u63a5\u53e3")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u7c7b\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"classDiagram\nClient --\x3e Facade\nFacade --\x3e SubSystemA\nFacade --\x3e SubSystemB\nFacade --\x3e SubSystemC\nclass Client {\n  \n}\nclass Facade {\n \n}\nclass SubSystemA {\n \n}\nclass SubSystemB {\n \n}\nclass SubSystemC {\n \n}\n")),(0,a.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("h3",{id:"\u751f\u6d3b\u573a\u666f-\u533b\u9662\u63a5\u5f85\u5458"},"\u751f\u6d3b\u573a\u666f \u533b\u9662\u63a5\u5f85\u5458"),(0,a.kt)("p",null,"\u53bb\u533b\u9662\u770b\u75c5\uff0c\u63a5\u5f85\u5458\u4ee3\u66ff\u6211\u4eec\u53bb\u6302\u53f7\u3001\u95e8\u8bca\u3001\u5212\u4ef7\u3001\u53d6\u836f"),(0,a.kt)("h3",{id:"\u517c\u5bb9\u53c2\u6570"},"\u517c\u5bb9\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function bindEvent(ele, type, seletor, fn) {\n  if (fn === null) {\n    fn = seletor\n    seletor = null\n  }\n}\n\nbindEvent(ele, 'click', fn)\n")),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u7b26\u5408\u5355\u4e00\u804c\u8d23\u539f\u5219\u548c\u5f00\u653e\u5c01\u95ed\u539f\u5219")))}u.isMDXComponent=!0}}]);