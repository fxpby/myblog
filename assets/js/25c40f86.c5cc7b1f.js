"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=c(n),u=i,s=k["".concat(p,".").concat(u)]||k[u]||m[u]||r;return n?a.createElement(s,l(l({ref:t},d),{},{components:n})):a.createElement(s,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={id:"network-http-cache",title:"\u6d4f\u89c8\u5668 HTTP \u7f13\u5b58\u673a\u5236",tags:["cache","\u7f13\u5b58"]},l=void 0,o={unversionedId:"network/cache/network-http-cache",id:"network/cache/network-http-cache",title:"\u6d4f\u89c8\u5668 HTTP \u7f13\u5b58\u673a\u5236",description:"HTTP \u7f13\u5b58 - \u524d\u7f6e\u77e5\u8bc6\u70b9",source:"@site/docs/network/cache/network-http-cache.md",sourceDirName:"network/cache",slug:"/network/cache/network-http-cache",permalink:"/myblog/docs/network/cache/network-http-cache",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/network/cache/network-http-cache.md",tags:[{label:"cache",permalink:"/myblog/docs/tags/cache"},{label:"\u7f13\u5b58",permalink:"/myblog/docs/tags/\u7f13\u5b58"}],version:"current",frontMatter:{id:"network-http-cache",title:"\u6d4f\u89c8\u5668 HTTP \u7f13\u5b58\u673a\u5236",tags:["cache","\u7f13\u5b58"]},sidebar:"network",previous:{title:"HTTP \u62a5\u6587",permalink:"/myblog/docs/network/http/http-message"},next:{title:"\u7f13\u5b58\u76f8\u5173\u7b97\u6cd5",permalink:"/myblog/docs/network/cache/cache-algorithm"}},p={},c=[{value:"HTTP \u7f13\u5b58 - \u524d\u7f6e\u77e5\u8bc6\u70b9",id:"http-\u7f13\u5b58---\u524d\u7f6e\u77e5\u8bc6\u70b9",level:2},{value:"Pragma",id:"pragma",level:3},{value:"Expires",id:"expires",level:3},{value:"Cache-Control",id:"cache-control",level:3},{value:"max-age",id:"max-age",level:4},{value:"s-maxage",id:"s-maxage",level:4},{value:"public",id:"public",level:4},{value:"private",id:"private",level:4},{value:"no-cache",id:"no-cache",level:4},{value:"no-store",id:"no-store",level:4},{value:"Last-Modified \u548c If-Modified-Since",id:"last-modified-\u548c-if-modified-since",level:3},{value:"ETag \u4e0e If-None-Match",id:"etag-\u4e0e-if-none-match",level:3},{value:"HTTP \u7f13\u5b58 - \u5f3a\u7f13\u5b58",id:"http-\u7f13\u5b58---\u5f3a\u7f13\u5b58",level:2},{value:"HTTP \u7f13\u5b58 - \u534f\u5546\u7f13\u5b58",id:"http-\u7f13\u5b58---\u534f\u5546\u7f13\u5b58",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"http-\u7f13\u5b58---\u524d\u7f6e\u77e5\u8bc6\u70b9"},"HTTP \u7f13\u5b58 - \u524d\u7f6e\u77e5\u8bc6\u70b9"),(0,i.kt)("p",null,"\u4e86\u89e3\u4e00\u4e9b\u548c\u7f13\u5b58\u76f8\u5173\u7684\u9996\u90e8\u5b57\u6bb5\u540d"),(0,i.kt)("h3",{id:"pragma"},"Pragma"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP / 1.0 \u4ea7\u7269"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u6709 no-cache \u4e00\u4e2a\u53ef\u9009\u503c")),(0,i.kt)("p",null,"\u6bcf\u6b21\u4f7f\u7528\u7f13\u5b58\u8d44\u6e90\u4e4b\u524d\u90fd\u5fc5\u987b\u5148\u5411\u670d\u52a1\u5668\u786e\u8ba4\u6709\u6548\u6027\uff0c\u4e0d\u4f1a\u547d\u4e2d\u5f3a\u7f13\u5b58"),(0,i.kt)("h3",{id:"expires"},"Expires"),(0,i.kt)("p",null,"\u5c5e\u4e8e\u5b9e\u4f53\u9996\u90e8\u5b57\u6bb5\uff1b\u7531\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u8d44\u6e90\u8fc7\u671f\u65f6\u95f4\uff08GMT\u65e5\u671f\u683c\u5f0f/\u65f6\u95f4\u6233\uff09\uff0c\u82e5\u7528\u6237\u672c\u5730\u65f6\u95f4\u5728\u8fc7\u671f\u65f6\u95f4\u524d\uff0c\u5219\u4e0d\u53d1\u9001\u8bf7\u6c42\u547d\u4e2d\u7f13\u5b58\u76f4\u63a5\u4ece\u672c\u5730\u83b7\u53d6\u8d44\u6e90; \u5728\u6b64\u65f6\u95f4\u4e4b\u540e\uff0c\u54cd\u5e94\u8d44\u6e90\u8fc7\u671f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Expires: Sat, 02 Sep 2023 04:53:04 GMT\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP / 1.0 \u4ea7\u7269\uff0c\u7ed9\u51fa\u4e86\u7f13\u5b58\u8fc7\u671f\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u7edd\u5bf9\u65f6\u95f4")),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u4f4e\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"Cache-Control: max-age")),(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4f7f\u7528\u672c\u5730\u65f6\u95f4\u5224\u65ad\u662f\u5426\u8fc7\u671f\uff0c\u672c\u5730\u65f6\u95f4\u53ef\u4fee\u6539\u4e0d\u4e00\u5b9a\u51c6\u786e\uff0c\u4f1a\u548c\u670d\u52a1\u5668\u65f6\u95f4\u4e0d\u4e00\u81f4\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528")),(0,i.kt)("h3",{id:"cache-control"},"Cache-Control"),(0,i.kt)("p",null,"\u7528\u4e8e\u9875\u9762\u7f13\u5b58\u7684\u901a\u7528\u6d88\u606f\u5934\u5b57\u6bb5\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u6307\u4ee4\u6765\u5b9e\u73b0\u7f13\u5b58\u673a\u5236\uff1b\u53ef\u4ee5\u7ec4\u5408\u591a\u79cd\u6307\u4ee4\uff0c\u591a\u4e2a\u6307\u4ee4\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},",")," \u5206\u9694\uff0c\u5c5e\u4e8e\u901a\u7528\u9996\u90e8\u5b57\u6bb5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Cache-Control: max-age:3600, s-maxage=3600, public\nCache-Control: no-cache\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP / 1.1 \u4ea7\u7269"),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"Expires")),(0,i.kt)("li",{parentName:"ul"},"\u6b63\u786e\u533a\u5206 ",(0,i.kt)("inlineCode",{parentName:"li"},"no-cache")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"no-store")," \u4f5c\u7528")),(0,i.kt)("h4",{id:"max-age"},"max-age"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max-age")," \u6307\u4ee4\u7ed9\u51fa\u7f13\u5b58\u8fc7\u671f\u7684",(0,i.kt)("strong",{parentName:"p"},"\u76f8\u5bf9\u65f6\u95f4"),"\uff0c\u5373\u7f13\u5b58\u5b58\u50a8\u7684\u6700\u5927\u65f6\u957f\uff0c\u5355\u4f4d\u79d2\uff0c\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"Expires")," \u540c\u65f6\u51fa\u73b0\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"max-age")," ",(0,i.kt)("strong",{parentName:"p"},"\u4f18\u5148\u7ea7\u66f4\u9ad8"),"\uff0c\u4e00\u822c\u4e3a\u4e86\u505a\u5411\u4e0b\u517c\u5bb9\uff0c\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Expires")," \u7ecf\u5e38\u90fd\u51fa\u73b0\u5728\u54cd\u5e94\u9996\u90e8\u4e2d."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max-age")," \u4e5f\u53ef\u4ee5\u51fa\u73b0\u5728\u8bf7\u6c42\u9996\u90e8\u4e2d\uff0c\u7528\u6765\u544a\u77e5\u670d\u52a1\u5668\u5ba2\u6237\u7aef\u5e0c\u671b\u63a5\u6536\u4e00\u4e2a\u5b58\u5728\u65f6\u95f4\uff08age\uff09\u4e0d\u5927\u4e8e\u591a\u5c11\u79d2\u7684\u8d44\u6e90"),(0,i.kt)("h4",{id:"s-maxage"},"s-maxage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"s-maxage")," \u4e0e max-age \u7528\u6cd5\u4e00\u81f4\uff0c\u4f46\u53ea\u9002\u7528\u4e8e\u4ee3\u7406\u670d\u52a1\u5668\uff08\u516c\u5171\u7f13\u5b58\u670d\u52a1\u5668\uff09\uff0c\u6bd4\u5982\u8d44\u6e90\u4ece\u6e90\u670d\u52a1\u5668\u53d1\u51fa\u540e\u88ab\u4e2d\u95f4\u7684\u4ee3\u7406\u670d\u52a1\u5668\u63a5\u6536\u5e76\u7f13\u5b58\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u6e90\u670d\u52a1\u5668 => \u4ee3\u7406\u670d\u52a1\u5668 => \u5ba2\u6237\u7aef"),";"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"s-maxage")," \u540e\uff0c\u4ee3\u7406\u670d\u52a1\u5668\u4f1a\u76f4\u63a5\u5ffd\u7565 ",(0,i.kt)("inlineCode",{parentName:"p"},"Expires")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"max-age")," \u6307\u4ee4\u7684\u503c"),(0,i.kt)("h4",{id:"public"},"public"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"public")," \u6307\u4ee4\u8868\u793a\u8be5\u8d44\u6e90\u53ef\u4ee5\u88ab\u4efb\u4f55\u8282\u70b9\u7f13\u5b58\uff08\u5305\u62ec\u5ba2\u6237\u7aef\u548c\u4ee3\u7406\u670d\u52a1\u5668\uff09"),(0,i.kt)("h4",{id:"private"},"private"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"private")," \u6307\u4ee4\u6807\u8bc6\u8be5\u8d44\u6e90\u53ea\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u7f13\u5b58\uff0c\u4ee3\u7406\u670d\u52a1\u5668\u4e0d\u4f1a\u8fdb\u884c\u7f13\u5b58\uff08\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"private")," \u6307\u4ee4\u540e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"s-maxage")," \u6307\u4ee4\u5c06\u88ab\u5ffd\u7565\uff09"),(0,i.kt)("h4",{id:"no-cache"},"no-cache"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"no-cache")," \u6307\u4ee4\u8bf7\u6c42\u548c\u54cd\u5e94\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u5728\u8bf7\u6c42\u9996\u90e8\u4e2d\u88ab\u4f7f\u7528\u65f6\u8868\u793a\u544a\u77e5\uff08\u4ee3\u7406\uff09\u670d\u52a1\u5668\u4e0d\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\uff0c\u5f3a\u5236\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u53d1\u8d77\u8bf7\u6c42\uff08\u7981\u7528\u5f3a\u7f13\u5b58\uff0c\u53ef\u4ee5\u7528\u534f\u5546\u7f13\u5b58\uff09"),(0,i.kt)("p",null,"\u5728\u54cd\u5e94\u9996\u90e8\u4e2d\u88ab\u8fd4\u56de\u65f6\uff0c\u8868\u793a\u5ba2\u6237\u7aef\u53ef\u4ee5\u7f13\u5b58\u8d44\u6e90\uff0c\u4f46",(0,i.kt)("strong",{parentName:"p"},"\u6bcf\u6b21\u4f7f\u7528\u7f13\u5b58\u8d44\u6e90\u4e4b\u524d\u90fd\u5fc5\u987b\u5148\u5411\u670d\u52a1\u5668\u786e\u8ba4\u6709\u6548\u6027"),"\uff08Chrome\u786c\u6027\u91cd\u65b0\u52a0\u8f7d\u4f1a\u5728\u8bf7\u6c42\u9996\u90e8\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache"),"\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u53ef\u4ee5\u901a\u8fc7\u5728\u4ee3\u7801\u91cc\u52a0\u5165meta\u6807\u7b7e\u6765\u4fee\u6539\u8d44\u6e90\u7684\u8bf7\u6c42\u9996\u90e8 --\x3e\n<meta http-equiv="Cache-Control" content="no-cache" />\n')),(0,i.kt)("h4",{id:"no-store"},"no-store"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"no-store")," \u7981\u6b62\u4e00\u5207\u7f13\u5b58\uff0c\u534f\u5546\u7f13\u5b58\u4e5f\u4e0d\u53ef\u7528\uff0c\u8bf7\u6c42\u548c\u54cd\u5e94\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528"),(0,i.kt)("h3",{id:"last-modified-\u548c-if-modified-since"},"Last-Modified \u548c If-Modified-Since"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Last-Modified")," \u5c5e\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"\u54cd\u5e94\u9996\u90e8\u5b57\u6bb5"),"\uff0c\u4ee3\u8868\u8d44\u6e90\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4\u3002\u5982\u679c\u8d44\u6e90\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u4e2d\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"Last-Modified"),", \u5ba2\u6237\u7aef\u53ef\u4ee5\u5728\u540e\u7eed\u8bf7\u6c42\u7684\u5934\u4e2d\u5e26\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"If-Modified-Since")," \u5934\u6765\u9a8c\u8bc1\u7f13\u5b58\uff1b"),(0,i.kt)("p",null,"\u5982\u679c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"If-Modified-Since")," \u5b57\u6bb5\u6307\u5b9a\u7684\u65f6\u95f4\u4e4b\u540e",(0,i.kt)("inlineCode",{parentName:"p"},"\u8d44\u6e90\u6ca1\u6709\u66f4\u65b0"),"\u5373\u670d\u52a1\u5668\u5224\u65ad\u8d44\u6e90\u6700\u540e\u4fee\u6539\u65f6\u95f4\u4e00\u81f4\uff0c\u5219\u8fd4\u56de 304 \u72b6\u6001\u7801 ",(0,i.kt)("inlineCode",{parentName:"p"},"304 Not Modified")," \u544a\u77e5\u6d4f\u89c8\u5668\u53ef\u4ee5\u4ece\u672c\u5730\u8bfb\u53d6\u7f13\u5b58;"),(0,i.kt)("p",null,"\u5982\u679c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"If-Modified-Since")," \u5b57\u6bb5\u6307\u5b9a\u7684\u65f6\u95f4\u4e4b\u540e",(0,i.kt)("inlineCode",{parentName:"p"},"\u8d44\u6e90\u53d1\u751f\u4e86\u66f4\u65b0"),"\uff0c\u670d\u52a1\u5668\u4f1a\u628a\u66f4\u65b0\u7684\u8d44\u6e90\u53d1\u9001\u7ed9\u6d4f\u89c8\u5668(",(0,i.kt)("inlineCode",{parentName:"p"},"\u72b6\u6001\u7801 200"),")\uff0c\u5e76\u8fd4\u56de\u6700\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Last-Modified"),", \u6d4f\u89c8\u5668\u6536\u5230\u8d44\u6e90\u540e\u4f1a\u66f4\u65b0\u7f13\u5b58\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"If-Modified-Since")," \u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8d44\u6e90\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4\u6765\u9a8c\u8bc1\u7f13\u5b58"),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u4f4e\u4e8e ETag / If-None-Match"),(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\u662f\u53ea\u80fd\u7cbe\u786e\u5230\u79d2\uff0c\u5982\u679c 1s \u5185\u591a\u6b21\u4fee\u6539\u8d44\u6e90 Last-Modified \u4e0d\u4f1a\u53d8\u5316")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"last-modified: Thu, 01 Sep 2022 19:09:52 GMT\nif-modified-since: Thu, 01 Sep 2022 19:09:52 GMT\n")),(0,i.kt)("h3",{id:"etag-\u4e0e-if-none-match"},"ETag \u4e0e If-None-Match"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u552f\u4e00\u6807\u8bc6\u6765\u9a8c\u8bc1\u7f13\u5b58"),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u9ad8\u4e8e Last-Modified / If-Modified-Since")),(0,i.kt)("p",null,"\u5982\u679c\u8d44\u6e90\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u5305\u542b ETag\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u5728\u540e\u7eed\u8bf7\u6c42\u7684\u5934\u4e2d\u5e26\u4e0a If-None-Match \u5934\u6765\u9a8c\u8bc1\u7f13\u5b58\u3002\u82e5\u670d\u52a1\u5668\u5224\u65ad\u8d44\u6e90\u6807\u8bc6\u4e00\u81f4\uff0c\u8fd4\u56de 304 \u72b6\u6001\u7801\u544a\u77e5\u6d4f\u89c8\u5668\u53ef\u4ece\u672c\u5730\u8bfb\u53d6\u7f13\u5b58"),(0,i.kt)("p",null,"\u552f\u4e00\u6807\u8bc6\u5185\u5bb9\u662f\u7531\u670d\u52a1\u7aef\u751f\u6210\u7b97\u6cd5\u51b3\u5b9a\u7684\uff0c\u53ef\u4ee5\u662f\u8d44\u6e90\u5185\u5bb9\u751f\u6210\u7684\u54c8\u5e0c\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u6700\u540e\u4fee\u6539\u65f6\u95f4\u6233\u7684\u54c8\u5e0c\u503c\u3002",(0,i.kt)("strong",{parentName:"p"},"ETag \u6807\u8bc6\u6539\u53d8\u5e76\u4e0d\u4ee3\u8868\u8d44\u6e90\u6587\u4ef6\u6539\u53d8")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ETag")," \u5728\u6807\u8bc6\u524d\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"W/")," \u524d\u7f00\u6807\u8bc6\u7528\u5f31\u6bd4\u8f83\u7b97\u6cd5\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"If-None-Match")," \u672c\u8eab\u53ea\u7528\u5f31\u6bd4\u8f83\u7b97\u6cd5\uff09\n",(0,i.kt)("inlineCode",{parentName:"p"},"ETag")," \u53ef\u4ee5\u914d\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"If-Match")," \u68c0\u6d4b\u5f53\u524d\u8bf7\u6c42\u662f\u5426\u4e3a\u6700\u65b0\u7248\u672c\uff0c\u82e5\u8d44\u6e90\u4e0d\u5339\u914d\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"\u72b6\u6001\u7801 412")," \uff08",(0,i.kt)("inlineCode",{parentName:"p"},"If-Match")," \u4e0d\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"W/")," \u65f6\u4f7f\u7528\u5f3a\u6bd4\u8f83\u7b97\u6cd5\uff09"),(0,i.kt)("h2",{id:"http-\u7f13\u5b58---\u5f3a\u7f13\u5b58"},"HTTP \u7f13\u5b58 - \u5f3a\u7f13\u5b58"),(0,i.kt)("h2",{id:"http-\u7f13\u5b58---\u534f\u5546\u7f13\u5b58"},"HTTP \u7f13\u5b58 - \u534f\u5546\u7f13\u5b58"))}m.isMDXComponent=!0}}]);