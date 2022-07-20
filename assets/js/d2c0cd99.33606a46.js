"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const p={},o="\u9002\u914d\u5668\u6a21\u5f0f Adapter Pattern",i={unversionedId:"design-pattern/adapter-pattern/adapter-pattern-basics",id:"design-pattern/adapter-pattern/adapter-pattern-basics",title:"\u9002\u914d\u5668\u6a21\u5f0f Adapter Pattern",description:"\u4ecb\u7ecd",source:"@site/docs/design-pattern/adapter-pattern/adapter-pattern-basics.md",sourceDirName:"design-pattern/adapter-pattern",slug:"/design-pattern/adapter-pattern/adapter-pattern-basics",permalink:"/myblog/docs/design-pattern/adapter-pattern/adapter-pattern-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design-pattern/adapter-pattern/adapter-pattern-basics.md",tags:[],version:"current",frontMatter:{},sidebar:"design-pattern",previous:{title:"\u5355\u4f8b\u6a21\u5f0f Singleton Pattern",permalink:"/myblog/docs/design-pattern/singleton-pattern/singleton-pattern-basics"},next:{title:"\u88c5\u9970\u5668\u6a21\u5f0f Decorator Pattern",permalink:"/myblog/docs/design-pattern/decorator-pattern/decorator-pattern-basics"}},s={},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u5c01\u88c5\u65e7\u63a5\u53e3",id:"\u5c01\u88c5\u65e7\u63a5\u53e3",level:3},{value:"Vue \u7684 computed\u3001 Vuex \u7684 getter",id:"vue-\u7684-computed-vuex-\u7684-getter",level:3},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9002\u914d\u5668\u6a21\u5f0f-adapter-pattern"},"\u9002\u914d\u5668\u6a21\u5f0f Adapter Pattern"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e7\u63a5\u53e3\u683c\u5f0f\u548c\u4f7f\u7528\u8005\u4e0d\u517c\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u52a0\u4e00\u4e2a\u9002\u914d\u8f6c\u6362\u63a5\u53e3")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u7c7b\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},"classDiagram\n\nClient --\x3e Target\nTarget --\x3e Adaptee\n\nclass Client {\n  + target: Target\n  +do () void\n}\n\nclass Target {\n  + adaptee: Adaptee\n  +request() void\n}\n\nclass Adaptee {\n  +specificRequest() void\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Adaptee {\n  specificRequest() {\n    return '\u5fb7\u56fd\u6807\u51c6\u63d2\u5934\ud83d\udd0c'\n  }\n}\nclass Target {\n  constructor() {\n    this.adaptee = new Adaptee()\n  }\n\n  request() {\n    const info = this.adapee.specificRequest()\n    return `\u8f6c\u6362\u5668 -> ${info}`\n  }\n}\n\nconst target = new Target()\nconsole.log(target.request())\n")),(0,a.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("h3",{id:"\u5c01\u88c5\u65e7\u63a5\u53e3"},"\u5c01\u88c5\u65e7\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u65b0\u5c01\u88c5\u7684 ajax\najax({\n  url: '/getData',\n  type: 'Get',\n  dataType: 'json',\n  data: {\n    id: '1'\n  }\n})\n.done(() => {\n  // ...\n})\n\n// \u5386\u53f2\u539f\u56e0\u7684\u65e7\u4ee3\u7801\n$.ajax({...})\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u517c\u5bb9\u65e7\u4ee3\u7801\uff0c\u5728\u4e0d\u4fee\u6539\u65e7\u4ee3\u7801\u7684\u524d\u63d0\u4e0b\uff0c\u505a\u4e00\u5c42\u9002\u914d\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const $ = {\n  ajax: function(options){\n    return ajax(options)\n  }\n}\n")),(0,a.kt)("h3",{id:"vue-\u7684-computed-vuex-\u7684-getter"},"Vue \u7684 computed\u3001 Vuex \u7684 getter"),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"},"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u65e7\u63a5\u53e3\u548c\u4f7f\u7528\u8005\u8fdb\u884c\u5206\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219")))}u.isMDXComponent=!0}}]);