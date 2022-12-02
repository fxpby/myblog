"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),k=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=k(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=k(n),c=l,m=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var k=2;k<o;k++)r[k]=n[k];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>k});var a=n(7462),l=(n(7294),n(3905));const o={id:"browser-storage-caching-scheme",title:"\u6d4f\u89c8\u5668\u5b58\u50a8\u578b\u7f13\u5b58\u65b9\u6848",tags:["\u7f13\u5b58","cookie","session storage","local storage","indexedDB","web storage"]},r=void 0,i={unversionedId:"browser/browser-storage-caching-scheme",id:"browser/browser-storage-caching-scheme",title:"\u6d4f\u89c8\u5668\u5b58\u50a8\u578b\u7f13\u5b58\u65b9\u6848",description:"1.\u7f51\u7ad9\u767b\u5f55\u7684\u5b58\u50a8\u903b\u8f91",source:"@site/docs/browser/browser-storage-caching-scheme.md",sourceDirName:"browser",slug:"/browser/browser-storage-caching-scheme",permalink:"/myblog/docs/browser/browser-storage-caching-scheme",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/browser/browser-storage-caching-scheme.md",tags:[{label:"\u7f13\u5b58",permalink:"/myblog/docs/tags/\u7f13\u5b58"},{label:"cookie",permalink:"/myblog/docs/tags/cookie"},{label:"session storage",permalink:"/myblog/docs/tags/session-storage"},{label:"local storage",permalink:"/myblog/docs/tags/local-storage"},{label:"indexedDB",permalink:"/myblog/docs/tags/indexed-db"},{label:"web storage",permalink:"/myblog/docs/tags/web-storage"}],version:"current",frontMatter:{id:"browser-storage-caching-scheme",title:"\u6d4f\u89c8\u5668\u5b58\u50a8\u578b\u7f13\u5b58\u65b9\u6848",tags:["\u7f13\u5b58","cookie","session storage","local storage","indexedDB","web storage"]},sidebar:"browser",previous:{title:"\u6d4f\u89c8\u5668\u7684\u91cd\u6392\u548c\u91cd\u7ed8",permalink:"/myblog/docs/browser/layout-paint"}},s={},k=[{value:"1.\u7f51\u7ad9\u767b\u5f55\u7684\u5b58\u50a8\u903b\u8f91",id:"1\u7f51\u7ad9\u767b\u5f55\u7684\u5b58\u50a8\u903b\u8f91",level:2},{value:"1.1 \u670d\u52a1\u7aef\u81ea\u52a8\u690d\u5165",id:"11-\u670d\u52a1\u7aef\u81ea\u52a8\u690d\u5165",level:3},{value:"1.2 \u524d\u7aef\u624b\u52a8\u5b58\u50a8",id:"12-\u524d\u7aef\u624b\u52a8\u5b58\u50a8",level:3},{value:"2. \u6d4f\u89c8\u5668\u5b58\u50a8\u6027\u7f13\u5b58\u65b9\u6848",id:"2-\u6d4f\u89c8\u5668\u5b58\u50a8\u6027\u7f13\u5b58\u65b9\u6848",level:2},{value:"2.1 Cookie",id:"21-cookie",level:3},{value:"2.1.1 \u4f7f\u7528\u573a\u666f",id:"211-\u4f7f\u7528\u573a\u666f",level:4},{value:"2.1.2 \u76f8\u5173\u5c5e\u6027",id:"212-\u76f8\u5173\u5c5e\u6027",level:4},{value:"2.1.3 \u4f18\u70b9",id:"213-\u4f18\u70b9",level:4},{value:"2.1.4 \u7f3a\u70b9",id:"214-\u7f3a\u70b9",level:4},{value:"2.1.5 \u4f7f\u7528",id:"215-\u4f7f\u7528",level:4},{value:"2.1.6 \u4e09\u65b9\u5e93 js-cookie",id:"216-\u4e09\u65b9\u5e93-js-cookie",level:4},{value:"2.2 Web Storage",id:"22-web-storage",level:3},{value:"2.2.1 Session Storage",id:"221-session-storage",level:4},{value:"2.2.1.1 \u7279\u70b9",id:"2211-\u7279\u70b9",level:5},{value:"2.2.1.2 \u4f7f\u7528\u573a\u666f",id:"2212-\u4f7f\u7528\u573a\u666f",level:5},{value:"2.2.2 Local Storage",id:"222-local-storage",level:4},{value:"2.2.2.1 \u4e8c\u6b21\u5c01\u88c5",id:"2221-\u4e8c\u6b21\u5c01\u88c5",level:5},{value:"2.2.2.2 \u548c sessionStorage \u7684\u533a\u522b",id:"2222-\u548c-sessionstorage-\u7684\u533a\u522b",level:5},{value:"2.2.2.3 \u4f7f\u7528\u573a\u666f",id:"2223-\u4f7f\u7528\u573a\u666f",level:5},{value:"2.2.3 IndexedDB",id:"223-indexeddb",level:4},{value:"2.2.3.1 \u7279\u70b9",id:"2231-\u7279\u70b9",level:4},{value:"2.2.3.2 \u4f7f\u7528\u573a\u666f",id:"2232-\u4f7f\u7528\u573a\u666f",level:4},{value:"2.2.3.3 \u5224\u65ad\u652f\u6301\u6027",id:"2233-\u5224\u65ad\u652f\u6301\u6027",level:4},{value:"2.2.3.4 \u521b\u5efa\u6570\u636e\u5e93",id:"2234-\u521b\u5efa\u6570\u636e\u5e93",level:4},{value:"2.2.3.5 \u521b\u5efa\u8868",id:"2235-\u521b\u5efa\u8868",level:4},{value:"2.2.3.6 \u65b0\u589e\u8bb0\u5f55",id:"2236-\u65b0\u589e\u8bb0\u5f55",level:4},{value:"2.2.3.7 \u67e5\u8be2\u8bb0\u5f55",id:"2237-\u67e5\u8be2\u8bb0\u5f55",level:4},{value:"2.2.3.8 \u4e09\u65b9\u5e93 idb",id:"2238-\u4e09\u65b9\u5e93-idb",level:4},{value:"2.3 cookie\u3001Web Storage \u4e0e IndexedDB \u5f02\u540c",id:"23-cookieweb-storage-\u4e0e-indexeddb-\u5f02\u540c",level:3}],d={toc:k};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u7f51\u7ad9\u767b\u5f55\u7684\u5b58\u50a8\u903b\u8f91"},"1.\u7f51\u7ad9\u767b\u5f55\u7684\u5b58\u50a8\u903b\u8f91"),(0,l.kt)("p",null,"\u7528\u6237\u4ece\u5ba2\u6237\u7aef\u8f93\u5165\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\u540e\uff0c\u524d\u7aef\u5c06\u6570\u636e\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u9a8c\u8bc1\uff0c\u5982\u679c\u670d\u52a1\u7aef\u5224\u65ad\u7528\u6237\u5b58\u5728\u4e14\u8d26\u53f7\u5bc6\u7801\u6b63\u786e\uff0c\u5219\u5411\u5ba2\u6237\u7aef\u8fd4\u56de\u54cd\u5e94\u5e76\u9881\u53d1\u6709\u6548\u7684 token \u4fe1\u606f\uff0c\u6821\u9a8c\u5931\u8d25\u5219\u8fd4\u56de\u9519\u8bef\u4fe1\u606f"),(0,l.kt)("p",null,"\u5f53\u552f\u4e00\u6709\u6548\u7684 token \u8fd4\u56de\u5230\u5ba2\u6237\u7aef\u540e\uff0c\u540e\u9762\u6240\u6709\u9700\u8981\u767b\u5f55\u8bbf\u95ee\u7684\u63a5\u53e3\u8bf7\u6c42\u5ba2\u6237\u7aef\u90fd\u9700\u8981\u643a\u5e26 token \u7ed9\u670d\u52a1\u7aef\u5224\u65ad\u7528\u6237\u767b\u5f55\u7684\u6709\u6548\u6027\uff0c\u6240\u4ee5 token \u5728\u5ba2\u6237\u7aef\u7684\u5b58\u50a8\u548c\u4f20\u8f93\u662f\u7528\u6237\u4e0d\u9700\u8981\u91cd\u590d\u767b\u5f55\u7684\u5173\u952e"),(0,l.kt)("h3",{id:"11-\u670d\u52a1\u7aef\u81ea\u52a8\u690d\u5165"},"1.1 \u670d\u52a1\u7aef\u81ea\u52a8\u690d\u5165"),(0,l.kt)("p",null,"\u670d\u52a1\u7aef\u767b\u5f55\u63a5\u53e3\u5728\u524d\u7aef\u7684\u54cd\u5e94\u62a5\u5934\u4e2d\u8bbe\u7f6e\u9996\u90e8\u5b57\u6bb5 set-cookie \u6765\u5c06 token \u4fe1\u606f\u690d\u5165\u5230\u6d4f\u89c8\u5668 cookie \u4e2d"),(0,l.kt)("p",null,"set-cookie \u6307\u4ee4\u503c\u5305\u542b\u4e86\u5fc5\u9009\u9879 ",(0,l.kt)("inlineCode",{parentName:"p"},"<cookie-name>=<cookie-value>")," \u503c\u548c\u540d\u7684\u5f62\u5f0f\uff0c\u8fd8\u5305\u62ec\u53ef\u9009\u9879 Path\uff08\u8def\u5f84\uff09\u3001Domain\uff08\u57df\u540d\uff09\u3001Max-Age(\u6709\u6548\u65f6\u95f4)\u7b49\uff0c\u7528\u5206\u53f7\u5206\u5272"),(0,l.kt)("p",null,"\u670d\u52a1\u7aef\u53ef\u4ee5\u8fd4\u56de\u591a\u4e2a set-cookie \u6307\u4ee4\u6765\u8fbe\u5230\u8bbe\u7f6e\u591a\u4e2a cookie \u76ee\u7684\uff0c\u53ef\u4ee5\u5728\u5f00\u53d1\u8005\u5de5\u5177 Application \u9762\u677f\u4e2d\u67e5\u770b\u5f53\u524d\u7f51\u7ad9\u8bbe\u7f6e\u7684 cookie \u503c"),(0,l.kt)("h3",{id:"12-\u524d\u7aef\u624b\u52a8\u5b58\u50a8"},"1.2 \u524d\u7aef\u624b\u52a8\u5b58\u50a8"),(0,l.kt)("p",null,"\u548c\u670d\u52a1\u7aef\u81ea\u52a8\u690d\u5165\u76f8\u6bd4\uff0c\u524d\u7aef\u5b58\u50a8\u7684\u65b9\u5f0f\u4e0d\u53d7\u9650\u4e8e\u6d4f\u89c8\u5668\u73af\u5883\uff08APP \u6216\u5c0f\u7a0b\u5e8f\u7b49\u6ca1\u6709\u6d4f\u89c8\u5668 cookie \u7684\u73af\u5883\u4e0b\u4e5f\u53ef\u4ee5\uff09"),(0,l.kt)("p",null,"\u670d\u52a1\u7aef\u767b\u5f55\u63a5\u53e3\u6210\u529f\u540e\u5c06\u7528\u6237\u7684 token \u4fe1\u606f\u901a\u8fc7\u54cd\u5e94\u5b9e\u4f53\u7684\u65b9\u5f0f\u8fd4\u56de\u7ed9\u524d\u7aef\uff0c\u524d\u7aef\u62ff\u5230 token \u4fe1\u606f\u540e\u901a\u8fc7\u524d\u7aef\u5b58\u50a8\u65b9\u6cd5\u5c06\u6570\u636e\u6301\u4e45\u5316\u7f13\u5b58\uff0c\u9000\u51fa\u540e\u624b\u52a8\u6e05\u9664\uff0c\u8c03\u7528\u540e\u7aef\u63a5\u53e3\u65f6\u624b\u52a8\u5c06 token \u4f20\u9012\u7ed9\u670d\u52a1\u7aef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import axios from "axios";\n\nexport const http = (params) => {\n  const instance = axios.create({\n    baseURL: "https://olumel.top",\n  });\n\n  const token = localStorage.getItem("token");\n\n  return instance({\n    url: "/xxx/xxx",\n    method: "post",\n    data: params,\n    headers: {\n      "x-token": token,\n    },\n  });\n};\n')),(0,l.kt)("h2",{id:"2-\u6d4f\u89c8\u5668\u5b58\u50a8\u6027\u7f13\u5b58\u65b9\u6848"},"2. \u6d4f\u89c8\u5668\u5b58\u50a8\u6027\u7f13\u5b58\u65b9\u6848"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\uff0c\u4e0d\u540c\u7684\u5b58\u50a8\u6027\u7f13\u5b58\u5e94\u8be5\u89c6\u573a\u666f\u4f7f\u7528\u5408\u9002\u7684\u7f13\u5b58\u65b9\u6848"),(0,l.kt)("h3",{id:"21-cookie"},"2.1 Cookie"),(0,l.kt)("p",null,"\u901a\u5e38\u7531\u670d\u52a1\u7aef\u751f\u6210\uff0c\u53d1\u751f\u5230\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u5b58\u50a8\u540e\u5728\u8bf7\u6c42\u5bf9\u5e94\u670d\u52a1\u7aef\u65f6\u643a\u5e26\uff0c\u53ef\u4ee5\u7528\u4e8e\u6807\u8bc6\u5ba2\u6237\u7aef\uff0c\u80fd\u591f\u8ba9\u4f7f\u7528\u65e0\u72b6\u6001 HTTP \u534f\u8bae\u7684\u670d\u52a1\u5668\u8bb0\u4f4f\u72b6\u6001\u4fe1\u606f"),(0,l.kt)("p",null,"Cookie \u6700\u521d\u4e0d\u662f\u4e3a\u4e86\u505a\u6d4f\u89c8\u5668\u5b58\u50a8\u7684\u529f\u80fd\u7684\uff0c\u800c\u662f\u4e3a\u4e86\u8fa8\u522b\u7528\u6237\u8eab\u4efd\uff0c\u5b9e\u73b0\u9875\u9762\u95f4\u72b6\u6001\u7684\u7ef4\u6301\u548c\u4f20\u9012\uff0c\u4f1a\u968f\u8bf7\u6c42\u53d1\u9001\u7ed9\u670d\u52a1\u5668"),(0,l.kt)("h4",{id:"211-\u4f7f\u7528\u573a\u666f"},"2.1.1 \u4f7f\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u8bdd\u72b6\u6001\u7ba1\u7406\uff08\u7528\u6237\u767b\u5f55\u72b6\u6001\u3001\u8d2d\u7269\u8f66\u3001\u6e38\u620f\u5206\u6570\u7b49\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4e2a\u6027\u5316\u8bbe\u7f6e\uff08\u7528\u6237\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3001\u4e3b\u9898\u7b49\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u884c\u4e3a\u8ddf\u8e2a\uff08\u5206\u6790\u7528\u6237\u884c\u4e3a\u7b49\uff09")),(0,l.kt)("h4",{id:"212-\u76f8\u5173\u5c5e\u6027"},"2.1.2 \u76f8\u5173\u5c5e\u6027"),(0,l.kt)("p",null,"\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42\u65f6\uff0c\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u5728\u54cd\u5e94\u5934\u4e2d\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," \u5b57\u6bb5\u544a\u8bc9\u5ba2\u6237\u7aef\u5b58\u50a8\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"cookie")," \uff0c\u524d\u7aef\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u6765\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"cookie")," \u3002\u4e4b\u540e\u5411\u76f8\u540c\u7684\u670d\u52a1\u7aef\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u5b58\u50a8\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"cookie")," \u4f1a\u4f5c\u4e3a\u8bf7\u6c42\u5934 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cookie")," \u5b57\u6bb5\u7684\u503c\u4e00\u8d77\u53d1\u9001\u3002\u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u5c5e\u6027\u7684\u8bbe\u7f6e\u6765\u8ba9 ",(0,l.kt)("inlineCode",{parentName:"p"},"cookie")," \u62e5\u6709\u4e0d\u540c\u7684\u7279\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Expires"),": \u7528\u4e8e\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Max-Age")," \u7528\u4e8e\u8bbe\u7f6e\u6709\u6548\u65f6\u95f4\u6bb5\uff0c\u8fc7\u671f\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u4f1a\u88ab\u5220\u9664"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Secure"),": \u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u53ea\u4f1a\u968f ",(0,l.kt)("inlineCode",{parentName:"li"},"HTTPS")," \u8bf7\u6c42\u53d1\u9001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HttpOnly"),": \u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u53ea\u7528\u4e8e\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\uff0c\u65e0\u6cd5\u88ab ",(0,l.kt)("inlineCode",{parentName:"li"},"JavaScript")," \u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Domain"),": \u8bbe\u7f6e\u53ef\u63a5\u6536 ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"hosts")," \uff0c\u4e0d\u8bbe\u7f6e\u5219\u9ed8\u8ba4\u4e3a\u5f53\u524d ",(0,l.kt)("inlineCode",{parentName:"li"},"host")," \u3002\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"Domain")," \uff0c\u5b50\u57df\u540d\u4e5f\u88ab\u5305\u542b\u5728\u5185"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Path"),": \u8bbe\u7f6e\u53ef\u63a5\u6536 ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"URL path"),"\uff0c\u53ea\u6709\u5305\u542b\u6307\u5b9a\u8def\u5f84\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"url")," \u8bf7\u6c42\u624d\u4f1a\u5e26\u4e0a ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie"),"\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},'"/"'),", \u5219\u5b50\u8def\u5f84\u4e5f\u5305\u542b\u5728\u5185"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SameSite"),": \u8868\u793a\u8de8\u57df\u65f6 ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u7684\u5904\u7406\u7b56\u7565\uff0c\u5305\u62ec ",(0,l.kt)("inlineCode",{parentName:"li"},"Strict")," \uff0c ",(0,l.kt)("inlineCode",{parentName:"li"},"Lax")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"None"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Strcit"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u53ea\u4f1a\u5728\u7b2c\u4e00\u65b9\u4e0a\u4e0b\u6587\u4e2d\u53d1\u9001\uff0c\u4e0d\u4f1a\u4e0e\u7b2c\u4e09\u65b9\u7f51\u7ad9\u53d1\u8d77\u7684\u8bf7\u6c42\u4e00\u8d77\u53d1\u9001"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Lax"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u5141\u8bb8\u4e0e\u9876\u7ea7\u5bfc\u822a\u4e00\u8d77\u53d1\u9001\uff0c\u5e76\u5c06\u4e0e\u7b2c\u4e09\u65b9\u7f51\u7ad9\u53d1\u8d77\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \u8bf7\u6c42\u4e00\u8d77\u53d1\u9001\uff08\u6d4f\u89c8\u5668\u9ed8\u8ba4\u503c\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"None"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u5c06\u5728\u6240\u6709\u4e0a\u4e0b\u6587\u4e2d\u53d1\u9001\uff0c\u5373",(0,l.kt)("strong",{parentName:"li"},"\u5141\u8bb8\u8de8\u7ad9\u53d1\u9001"),"\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"None")," \u65f6\uff0c\u9700\u5728\u6700\u65b0\u7684\u6d4f\u89c8\u5668\u7248\u672c\u4e2d\u540c\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Secure")," \u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u62a5\u9519")))),(0,l.kt)("h4",{id:"213-\u4f18\u70b9"},"2.1.3 \u4f18\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5360\u7528\u670d\u52a1\u5668\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c\u63d0\u5347\u5b89\u5168\u6027")),(0,l.kt)("h4",{id:"214-\u7f3a\u70b9"},"2.1.4 \u7f3a\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cookie \u4f1a\u88ab\u6dfb\u52a0\u5230\u6bcf\u4e2a\u8bf7\u6c42\u4e2d\uff0c\u589e\u52a0\u4e86\u6d41\u91cf\u6d88\u8017"),(0,l.kt)("li",{parentName:"ul"},"cookie \u5728 HTTP \u8bf7\u6c42\u4e2d\u662f\u660e\u6587\u4f20\u8f93\uff0c\u4e0d\u591f\u5b89\u5168\uff0c\u4f7f\u7528 HTTPS \u53ef\u907f\u514d\u8be5\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"cookie \u5927\u5c0f\u9650\u5236 4KB\uff0c\u590d\u6742\u573a\u666f\u4e0d\u591f\u7528"),(0,l.kt)("li",{parentName:"ul"},"cookie \u65e0\u6cd5\u8de8\u57df\u643a\u5e26\uff0c\u5229\u7528\u8fd9\u4e00\u7279\u70b9\u53ef\u4ee5\u4f7f\u7528\u5728 CDN \u57df\u540d\u4e0a\u3002\u6bd4\u5982\u5982\u679c CDN \u8d44\u6e90\u548c\u4e3b\u7ad9\u91c7\u7528\u4e86\u540c\u6837\u7684\u57df\u540d\uff0c\u90a3 cookie \u4f20\u8f93\u5c31\u4f1a\u9020\u6210\u5de8\u5927\u7684\u6027\u80fd\u6d6a\u8d39\u3002\u89c4\u907f\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6cd5\u5c31\u662f\u4f7f CDN \u7684\u57df\u540d\u548c\u4e3b\u7ad9\u533a\u5206\u3002\u5982\u6398\u91d1\u7684 CDN \u57df\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"https://lf3-cdn-tos.bytescm.com"),"\uff0c\u4e3b\u7ad9\u7684\u57df\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"https://juejin.cn"))),(0,l.kt)("h4",{id:"215-\u4f7f\u7528"},"2.1.5 \u4f7f\u7528"),(0,l.kt)("p",null,"\u6b64\u5916\u65e5\u5e38\u5728\u4f7f\u7528 cookie \u5b58\u50a8\u76f8\u5173 API \u4e0d\u662f\u5341\u5206\u65b9\u4fbf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// \u5b58\u50a8 cookie\ndocument.cookie = "name=olumel; domain=olumel.top";\n\n// \u8bfb\u53d6 cookie\n// \u53ea\u80fd\u901a\u8fc7 document.cookie \u8bfb\u53d6\u6240\u6709 cookie \u5e76\u81ea\u884c\u8fdb\u884c\u5b57\u7b26\u4e32\u622a\u53d6\uff0c\u4f7f\u7528\u4e0d\u53cb\u597d\n\n// \u5220\u9664 cookie\nlet date = new Date();\ndate.setTime(date.getTime() - 10000);\ndocument.cookie = `name=olumel; domain=olumel.top; expires=${date.toGMTString()}`;\n')),(0,l.kt)("h4",{id:"216-\u4e09\u65b9\u5e93-js-cookie"},"2.1.6 \u4e09\u65b9\u5e93 js-cookie"),(0,l.kt)("p",null,"\u5e73\u65f6\u6211\u4eec\u4f1a\u9009\u62e9\u4e00\u6b3e\u5c01\u88c5 cookie \u7684\u5e93 js-cookie"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import Cookies from "js-cookie";\n\n// \u5b58\u50a8 cookie\nCookies.set("name", "olumel", { domain: "juejin.cn" });\n\n// \u8bfb\u53d6 cookie\nCookies.get("name");\n\n// \u5220\u9664 cookie\nCookies.remove("name");\n')),(0,l.kt)("h3",{id:"22-web-storage"},"2.2 Web Storage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Web Storage")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"HTML5")," \u63a8\u51fa\u7684\u6d4f\u89c8\u5668\u5b58\u50a8\u673a\u5236\uff0c\u53ef\u5206\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Session Storage")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Local Storage")),(0,l.kt)("h4",{id:"221-session-storage"},"2.2.1 Session Storage"),(0,l.kt)("p",null,"Session Storage \u5bf9\u8c61\u662f\u5f53\u524d\u6e90\uff08\u548c\u540c\u6e90\u7b56\u7565\u4e2d\u7684\u6e90\u4e00\u81f4\uff09\u4e0b\uff0c\u5b58\u50a8\u4f1a\u8bdd\u6570\u636e\u7684 Storage \u5b9e\u4f8b\u3002\u751f\u547d\u5468\u671f\u548c\u5f53\u524d\u9875\u9762\u4fdd\u6301\u4e00\u81f4\uff0c\u9875\u9762\u5173\u95ed sessionStorage \u4f1a\u88ab\u60c5\u51b5\u3002\u4ee5\u952e\u503c\u5bf9\u65b9\u5f0f\u5b58\u50a8\uff0c\u952e\u503c\u4ee5\u5b57\u7b26\u4e32\u5b58\u50a8"),(0,l.kt)("h5",{id:"2211-\u7279\u70b9"},"2.2.1.1 \u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u88ab\u5f53\u524d\u6807\u7b7e\u9875\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u9875\u9762\u89e6\u53d1\u6253\u5f00\u65b0\u9875\u9762\u65f6\uff0c\u4f1a\u590d\u5236\u4f1a\u8bdd\u4e0a\u4e0b\u6587\u4f5c\u4e3a\u65b0\u4f1a\u8bdd\u7684\u4e0a\u4e0b\u6587"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u5b58\u5728\u4e8e\u7f51\u9875\u4f1a\u8bdd\u671f\u95f4\uff0c\u5173\u95ed\u6d4f\u89c8\u5668\u6216\u6807\u7b7e\u9875\u6e05\u9664 sessionStorage, \u5237\u65b0\u6807\u7b7e\u9875\u6216\u8005\u6062\u590d\u6d4f\u89c8\u5668\u9875\u9762\u65f6\u4fdd\u7559 sessionStorage"),(0,l.kt)("li",{parentName:"ul"},"\u590d\u5236\u6807\u7b7e\u9875\uff08\u6d4f\u89c8\u5668\u6807\u7b7e\u53f3\u952e\u83dc\u5355\u7684\u590d\u5236\uff0c\u4e0d\u662f\u590d\u5236 URL \uff09\u65f6\u4f1a\u590d\u5236\u5f53\u524d sessionStorage \u5230\u65b0\u7684\u6807\u7b7e\u9875\u4e2d")),(0,l.kt)("h5",{id:"2212-\u4f7f\u7528\u573a\u666f"},"2.2.1.2 \u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u9002\u5408\u5b58\u50a8\u751f\u547d\u5468\u671f\u548c\u5b83\u540c\u6b65\u7684\u4f1a\u8bdd\u7ea7\u522b\u4fe1\u606f"),(0,l.kt)("h4",{id:"222-local-storage"},"2.2.2 Local Storage"),(0,l.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u6e90\u5b58\u50a8\u7684 Storage \u5bf9\u8c61\uff0c\u5b58\u50a8\u7684\u6570\u636e\u53ef\u4ee5\u8de8\u6d4f\u89c8\u5668\u4f1a\u8bdd\u8bbf\u95ee"),(0,l.kt)("p",null,"\u5728\u5b58\u50a8\u7b80\u5355\u7c7b\u578b\u6570\u636e\u65f6\uff0c\u6ca1\u5565\u95ee\u9898\uff0c\u4f46\u662f\u5b58\u50a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u5b58\u50a8\u7684\u6570\u636e\u6700\u7ec8\u90fd\u4f1a\u8f6c\u5316\u6210\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u91c7\u7528\u5e8f\u5217\u53f7\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," \u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u5bf9\u8c61\uff0c\u6700\u7ec8\u83b7\u53d6\u7684\u503c\u4f1a\u53d8\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"[Object Object]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let userInfo = { name: "olu", age: 18 };\n\n// \u5b58 \u5e8f\u5217\u53f7\nlocalStorage.setItem("userInfo", JSON.stringify(userInfo));\n\n// \u53d6 \u53cd\u5e8f\u5217\u53f7\nconst result = JSON.parse(localStorage.getItem("userInfo"));\n')),(0,l.kt)("h5",{id:"2221-\u4e8c\u6b21\u5c01\u88c5"},"2.2.2.1 \u4e8c\u6b21\u5c01\u88c5"),(0,l.kt)("p",null,"\u6240\u4ee5\u5e73\u65f6\u4f7f\u7528\u8fd8\u662f\u9700\u8981\u8fdb\u884c\u4e8c\u6b21\u5c01\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let storage = {\n  // \u5b58\u50a8\n  setStorage: function (key, value, duration) {\n    let data = {\n      value,\n      expiryTime:\n        !duration || isNaN(duration)\n          ? 0\n          : this.getCurrentTimeStamp() + parseInt(duration),\n    };\n\n    localStorage[key] = JSON.stringify(data); // \u5e8f\u5217\u5316\n  },\n\n  // \u8bfb\u53d6\n  getStorage: function (key) {\n    let data = localStorage[key];\n\n    if (!data || data === "null") {\n      return null;\n    }\n\n    let now = this.getCurrentTimeStamp();\n    let obj;\n\n    try {\n      obj = JSON.parse(data); // \u53cd\u5e8f\u5217\u5316\n    } catch (e) {\n      return null;\n    }\n\n    if (obj.expiryTime === 0 || obj.expiryTime > now) {\n      return obj.value;\n    }\n\n    return null;\n  },\n\n  // \u5220\u9664\n  removeStorage: function (key) {\n    localStorage.removeItem(key);\n  },\n\n  // \u83b7\u53d6\u65f6\u95f4\u6233\n  getCurrentTimeStamp: function () {\n    return Date.parse(new Date());\n  },\n};\n')),(0,l.kt)("h5",{id:"2222-\u548c-sessionstorage-\u7684\u533a\u522b"},"2.2.2.2 \u548c sessionStorage \u7684\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"localStorage \u6ca1\u6709\u8fc7\u671f\u65f6\u95f4\uff08\u9690\u79c1\u7a97\u53e3\u4e2d\u7684 localStorage \u5728\u6700\u540e\u4e00\u4e2a\u9690\u79c1\u7a97\u53e3\u5173\u95ed\u65f6\u4f1a\u88ab\u6e05\u7a7a\uff09"),(0,l.kt)("li",{parentName:"ul"},"StorageEvent \u53ea\u80fd\u76d1\u542c\u540c\u6e90\u9875\u9762\u7684 localStorage \u7684\u6539\u53d8\uff0c\u65e0\u6cd5\u76d1\u542c sessionStorage \u7684\u6539\u53d8")),(0,l.kt)("h5",{id:"2223-\u4f7f\u7528\u573a\u666f"},"2.2.2.3 \u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u4e00\u822c\u573a\u666f cookie \u65e0\u6cd5\u80dc\u4efb\u7684\u53ef\u4ee5\u7528\u7b80\u5355\u7684\u952e\u503c\u5bf9\u6765\u5b58\u53d6\u7684\u6570\u636e\u5b58\u50a8\u4efb\u52a1\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528 localStorage \u5904\u7406"),(0,l.kt)("h4",{id:"223-indexeddb"},"2.2.3 IndexedDB"),(0,l.kt)("p",null,"\u867d\u7136 Web Storage \u53ef\u4ee5\u8ba9\u6211\u4eec\u8fdb\u884c\u7f51\u9875\u95f4\u6570\u636e\u7684\u4e34\u65f6\u5b58\u50a8\u6216\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u4f46\u662f\u5bb9\u91cf\u8fd8\u662f\u6709\u9650"),(0,l.kt)("p",null,"IndexedDB \u662f\u4e00\u4e2a\u5927\u89c4\u6a21\u7684 NoSQL \u5b58\u50a8\u7cfb\u7edf\uff0c\u51e0\u4e4e\u53ef\u4ee5\u5b58\u50a8\u6d4f\u89c8\u5668\u4e2d\u4efb\u4f55\u6570\u636e\u5185\u5bb9\uff0c\u5305\u62ec\u4e8c\u8fdb\u5236\u6570\u636e\uff08ArrayBuffer \u5bf9\u8c61\u548c Blob \u5bf9\u8c61\uff09\uff0c\u53ef\u4ee5\u5b58\u50a8\u4e0d\u5c11\u4e8e 250M \u7684\u6570\u636e, \u5176 API \u4f7f\u7528\u7d22\u5f15\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u9ad8\u6027\u80fd\u641c\u7d22\uff0c\u4f7f\u7528\u4e0a\u63a5\u8fd1\u4e8e\u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u89e3\u51b3 Web Storage \u5b58\u50a8\u5927\u91cf\u7684\u7ed3\u6784\u5316\u6570\u636e\u65f6\u5b58\u50a8\u5bb9\u91cf\u5c0f\uff0c\u641c\u7d22\u901f\u5ea6\u6162\u7b49\u95ee\u9898"),(0,l.kt)("h4",{id:"2231-\u7279\u70b9"},"2.2.3.1 \u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u952e\u503c\u5bf9\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u9075\u5faa\u540c\u6e90\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e8c\u8fdb\u5236\u5b58\u50a8\uff0c\u4e0d\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u8fd8\u53ef\u4ee5\u5b58\u50a8 File \u6216 Blob \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u540c\u6b65\u4e0e\u5f02\u6b65: \u9ed8\u8ba4\u64cd\u4f5c\u4e3a\u5f02\u6b65\u64cd\u4f5c\uff0c\u4e5f\u6709\u7528\u4e8e web worker \u7684\u540c\u6b65 API"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7a7a\u95f4\u5927: \u6700\u5927\u5b58\u50a8\u7a7a\u95f4\u662f\u52a8\u6001\u7684\uff0c\u53d6\u51b3\u4e8e\u786c\u76d8\u5927\u5c0f\uff0c\u6700\u5927\u7a7a\u95f4\u53d6\u51b3\u4e8e\u6d4f\u89c8\u5668\u7684\u5b9e\u73b0")),(0,l.kt)("h4",{id:"2232-\u4f7f\u7528\u573a\u666f"},"2.2.3.2 \u4f7f\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e\u91cf\u5f88\u5927"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e\u4e3a\u7ed3\u6784\u5316\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6570\u636e\u641c\u7d22\u6709\u6027\u80fd\u8981\u6c42")),(0,l.kt)("h4",{id:"2233-\u5224\u65ad\u652f\u6301\u6027"},"2.2.3.3 \u5224\u65ad\u652f\u6301\u6027"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 IndexedDB \u4e4b\u524d\uff0c\u9700\u8981\u5224\u65ad\u6d4f\u89c8\u5668\u662f\u5426\u652f\u6301"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'if (!("indexedDB" in window)) {\n  console.log("\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 indexedDB");\n  return;\n}\n')),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u652f\u6301\u6211\u4eec\u5c31\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u589e\u5220\u6539\u67e5\u64cd\u4f5c\u4e86"),(0,l.kt)("h4",{id:"2234-\u521b\u5efa\u6570\u636e\u5e93"},"2.2.3.4 \u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let idb;\n\n// \u6253\u5f00\u540d\u4e3a olu \u4e14 \u7248\u672c\u53f7\u4e3a 1 \u7684\u6570\u636e\u5e93\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5c31\u81ea\u52a8\u521b\u5efa\nlet request = window.indexedDB.open("olu", 1);\n\n// \u9519\u8bef\u56de\u8c03\nrequest.onerror = function (event) {\n  console.log("open indexedDB error");\n};\n\n// \u6210\u529f\u56de\u8c03\nrequest.onsuccess = function (event) {\n  idb = request.result;\n  console.log("open indexedDB success");\n};\n')),(0,l.kt)("h4",{id:"2235-\u521b\u5efa\u8868"},"2.2.3.5 \u521b\u5efa\u8868"),(0,l.kt)("p",null,"\u65b0\u5efa\u6570\u636e\u5e93\u4f1a\u89e6\u53d1\u7248\u672c\u53d8\u5316\u7684 onupgradeneeded \u65b9\u6cd5\uff08\u6b64\u65f6\u7248\u672c\u4ece\u65e0\u5230\u6709\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'request.onupgradeneeded = function (e) {\n  idb = e.target.result;\n  console.log("running onupgradeneeded");\n\n  // \u65b0\u5efa\u5bf9\u8c61\u8868\u65f6\uff0c\u5e94\u5148\u5224\u65ad\u8be5\u8868\u662f\u5426\u5b58\u5728\n  if (!idb.objectStoreNames.contains("store")) {\n    // \u521b\u5efa\u540d\u4e3a store \u7684\u8868\uff0c\u4ee5 id \u4e3a\u4e3b\u952e\n    let storeOS = idb.createObjectStore("store", { keyPath: "id" });\n  }\n};\n')),(0,l.kt)("h4",{id:"2236-\u65b0\u589e\u8bb0\u5f55"},"2.2.3.6 \u65b0\u589e\u8bb0\u5f55"),(0,l.kt)("p",null,"\u521b\u5efa\u5b8c\u8868\u540e\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u65b0\u589e\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function addItem(item) {\n  // \u65b0\u589e\u65f6\u9700\u6307\u5b9a\u8868\u540d\u548c\u64cd\u4f5c\u6a21\u5f0f\n  let transaction = idb.transaction(["store"], "readwrite");\n  // \u83b7\u53d6\u8868\u5bf9\u8c61\n  let store = transaction.objectStore("store");\n  // \u8c03\u7528 add \u65b9\u6cd5\u65b0\u589e\u6570\u636e\n  store.add(item);\n}\n\nlet data = {\n  id: 1,\n  name: "test",\n  age: "18",\n};\n\naddItem(data);\n')),(0,l.kt)("h4",{id:"2237-\u67e5\u8be2\u8bb0\u5f55"},"2.2.3.7 \u67e5\u8be2\u8bb0\u5f55"),(0,l.kt)("p",null,"\u901a\u8fc7\u4e3b\u952e id \u53ef\u4ee5\u83b7\u53d6\u5230\u60f3\u8981\u7684\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function readItem(id) {\n  // \u521b\u5efa\u4e8b\u52a1\uff0c\u6307\u5b9a\u8868\u540d\n  let transaction = idb.transaction(["store"]);\n  // \u83b7\u53d6\u8868\u5bf9\u8c61\n  let store = transaction.objectStore("store");\n  // \u8c03\u7528 get \u65b9\u6cd5\u83b7\u53d6\u6570\u636e\n  let requestStore = store.get(id);\n\n  requestStore.onsuccess = function () {\n    if (requestStore.result) {\n      console.log(requestStore.result);\n    }\n  };\n}\nreadItem(1);\n')),(0,l.kt)("h4",{id:"2238-\u4e09\u65b9\u5e93-idb"},"2.2.3.8 \u4e09\u65b9\u5e93 idb"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6d41\u884c\u7684 IndexedDB \u5e93\u4f7f\u6211\u4eec\u65e5\u5e38\u5f00\u53d1\u66f4\u52a0\u4e1d\u6ed1\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/idb"},"idb")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { openDB } from "idb";\nconst dbPromise = openDB("olu", 1, {\n  upgrade(db) {\n    db.createObjectStore("store", { keyPath: "id" });\n  },\n});\n\nexport async function add(val) {\n  return (await dbPromise).add("store", val);\n}\n\nexport async function get(key) {\n  return (await dbPromise).get("store", key);\n}\n')),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f IndexedDB \u7684\u517c\u5bb9\u6027\u95ee\u9898"),(0,l.kt)("h3",{id:"23-cookieweb-storage-\u4e0e-indexeddb-\u5f02\u540c"},"2.3 cookie\u3001Web Storage \u4e0e IndexedDB \u5f02\u540c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c\u70b9\uff1a\u90fd\u662f\u4fdd\u5b58\u6570\u636e\u4e8e\u6d4f\u89c8\u5668\u7aef\uff0c\u9075\u5faa\u540c\u6e90\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u70b9\uff1a\u751f\u547d\u5468\u671f\uff0c\u5b58\u50a8\u7a7a\u95f4\u6700\u5927\u503c\u548c\u4e0e\u670d\u52a1\u7aef\u4ea4\u4e92\u65b9\u5f0f")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7279\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"cookie"),(0,l.kt)("th",{parentName:"tr",align:null},"sessionStorage"),(0,l.kt)("th",{parentName:"tr",align:null},"localStorage"),(0,l.kt)("th",{parentName:"tr",align:null},"IndexedDB"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u547d\u5468\u671f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bbe\u7f6e\u5931\u6548\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u6d4f\u89c8\u5668\u4f1a\u8bdd\u7ed3\u675f\u65f6\u6e05\u9664 cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u4f1a\u8bdd\u7ed3\u675f\u65f6\u6e05\u9664 sessionStorage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5b58\u50a8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6c38\u4e45\u4fdd\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u7a7a\u95f4\u6700\u5927\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"4 KB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u4e3a 5 MB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c \u5de6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e\u7528\u6237\u8bbe\u5907\u5bb9\u91cf\u548c\u6d4f\u89c8\u5668\u9650\u989d\u8bbe\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e0e\u670d\u52a1\u7aef\u4ea4\u4e92"),(0,l.kt)("td",{parentName:"tr",align:null},"\u968f\u8bf7\u6c42\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\uff0c\u53ef\u8bbe\u7f6e\u591a\u79cd\u5c5e\u6027\u63a7\u5236"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u7aef\uff0c\u4e0d\u4e0e\u670d\u52a1\u7aef\u4ea4\u4e92"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c \u5de6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c \u5de6")))))}p.isMDXComponent=!0}}]);