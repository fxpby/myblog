"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=l,s=m["".concat(p,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(s,i(i({ref:t},d),{},{components:n})):r.createElement(s,i({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={},i="HTTP \u62a5\u6587",o={unversionedId:"network/http/http-message",id:"network/http/http-message",title:"HTTP \u62a5\u6587",description:"\u8bf7\u6c42\u62a5\u6587",source:"@site/docs/network/http/http-message.md",sourceDirName:"network/http",slug:"/network/http/http-message",permalink:"/myblog/docs/network/http/http-message",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/network/http/http-message.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"URI\u3001URL\u3001URN\u3001Data URI \u548c Object URL/Blob URL",permalink:"/myblog/docs/network/http/URI-URL-URN"}},p={},u=[{value:"\u8bf7\u6c42\u62a5\u6587",id:"\u8bf7\u6c42\u62a5\u6587",level:2},{value:"\u8bf7\u6c42\u62a5\u6587\u7ed3\u6784",id:"\u8bf7\u6c42\u62a5\u6587\u7ed3\u6784",level:3},{value:"\u8bf7\u6c42\u62a5\u6587\u9996\u884c",id:"\u8bf7\u6c42\u62a5\u6587\u9996\u884c",level:3},{value:"\u8bf7\u6c42\u62a5\u6587\u5934\u90e8",id:"\u8bf7\u6c42\u62a5\u6587\u5934\u90e8",level:3},{value:"\u8bf7\u6c42\u62a5\u6587\u7a7a\u884c",id:"\u8bf7\u6c42\u62a5\u6587\u7a7a\u884c",level:3},{value:"\u8bf7\u6c42\u62a5\u6587\u5b9e\u4f53",id:"\u8bf7\u6c42\u62a5\u6587\u5b9e\u4f53",level:3},{value:"\u54cd\u5e94\u62a5\u6587",id:"\u54cd\u5e94\u62a5\u6587",level:2},{value:"\u54cd\u5e94\u62a5\u6587\u7ed3\u6784",id:"\u54cd\u5e94\u62a5\u6587\u7ed3\u6784",level:3},{value:"\u54cd\u5e94\u62a5\u6587\u9996\u884c",id:"\u54cd\u5e94\u62a5\u6587\u9996\u884c",level:3},{value:"\u54cd\u5e94\u62a5\u6587\u5934\u90e8",id:"\u54cd\u5e94\u62a5\u6587\u5934\u90e8",level:3},{value:"\u54cd\u5e94\u62a5\u6587\u7a7a\u884c",id:"\u54cd\u5e94\u62a5\u6587\u7a7a\u884c",level:3},{value:"\u54cd\u5e94\u62a5\u6587\u5b9e\u4f53",id:"\u54cd\u5e94\u62a5\u6587\u5b9e\u4f53",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"http-\u62a5\u6587"},"HTTP \u62a5\u6587"),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u62a5\u6587"},"\u8bf7\u6c42\u62a5\u6587"),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u7ed3\u6784"},"\u8bf7\u6c42\u62a5\u6587\u7ed3\u6784"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u9996\u884c + \u5934\u90e8 + \u7a7a\u884c + \u5b9e\u4f53")),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u9996\u884c"},"\u8bf7\u6c42\u62a5\u6587\u9996\u884c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Method(\u65b9\u6cd5)"),(0,l.kt)("li",{parentName:"ul"},"URL(\u8def\u5f84)"),(0,l.kt)("li",{parentName:"ul"},"protocol(\u534f\u8bae\u7248\u672c)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /olu HTTP/1.1")),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u5934\u90e8"},"\u8bf7\u6c42\u62a5\u6587\u5934\u90e8"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Field Name: Field Value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u4e0d\u533a\u5206\u5927\u5c0f\u5199"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u4e0d\u5141\u8bb8\u51fa\u73b0\u7a7a\u683c\uff0c\u4e0d\u53ef\u4ee5\u51fa\u73b0\u4e0b\u5212\u7ebf ",(0,l.kt)("inlineCode",{parentName:"li"},"_")),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u540e\u9762\u5fc5\u987b",(0,l.kt)("strong",{parentName:"li"},"\u7d27\u63a5\u7740")," ",(0,l.kt)("inlineCode",{parentName:"li"},":"))),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u7a7a\u884c"},"\u8bf7\u6c42\u62a5\u6587\u7a7a\u884c"),(0,l.kt)("p",null,"\u7528\u6765\u533a\u5206 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5934\u90e8")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f53")),(0,l.kt)("h3",{id:"\u8bf7\u6c42\u62a5\u6587\u5b9e\u4f53"},"\u8bf7\u6c42\u62a5\u6587\u5b9e\u4f53"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"body")," \u90e8\u5206\uff0c\u8bf7\u6c42\u62a5\u6587\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\u4f53")),(0,l.kt)("h2",{id:"\u54cd\u5e94\u62a5\u6587"},"\u54cd\u5e94\u62a5\u6587"),(0,l.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u7ed3\u6784"},"\u54cd\u5e94\u62a5\u6587\u7ed3\u6784"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u9996\u884c + \u5934\u90e8 + \u7a7a\u884c + \u5b9e\u4f53")),(0,l.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u9996\u884c"},"\u54cd\u5e94\u62a5\u6587\u9996\u884c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"protocol(\u534f\u8bae\u7248\u672c)"),(0,l.kt)("li",{parentName:"ul"},"Status Code(\u72b6\u6001\u7801\uff0c\u670d\u52a1\u5668\u5904\u7406\u7684\u7ed3\u679c\uff0c\u5404\u81ea\u533a\u95f4\u8bed\u4e49\u4e0d\u540c)"),(0,l.kt)("li",{parentName:"ul"},"status Text(\u72b6\u6001\u7801\u542b\u4e49)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 200 OK")),(0,l.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u5934\u90e8"},"\u54cd\u5e94\u62a5\u6587\u5934\u90e8"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Field Name: Field Value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u4e0d\u533a\u5206\u5927\u5c0f\u5199"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u4e0d\u5141\u8bb8\u51fa\u73b0\u7a7a\u683c\uff0c\u4e0d\u53ef\u4ee5\u51fa\u73b0\u4e0b\u5212\u7ebf ",(0,l.kt)("inlineCode",{parentName:"li"},"_")),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u540e\u9762\u5fc5\u987b",(0,l.kt)("strong",{parentName:"li"},"\u7d27\u63a5\u7740")," ",(0,l.kt)("inlineCode",{parentName:"li"},":"))),(0,l.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u7a7a\u884c"},"\u54cd\u5e94\u62a5\u6587\u7a7a\u884c"),(0,l.kt)("p",null,"\u7528\u6765\u533a\u5206 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5934\u90e8")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f53")),(0,l.kt)("h3",{id:"\u54cd\u5e94\u62a5\u6587\u5b9e\u4f53"},"\u54cd\u5e94\u62a5\u6587\u5b9e\u4f53"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"body")," \u90e8\u5206\uff0c\u54cd\u5e94\u62a5\u6587\u5bf9\u5e94 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u54cd\u5e94\u4f53")))}c.isMDXComponent=!0}}]);