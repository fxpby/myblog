"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="HTTP \u4e09\u6b21\u63e1\u624b",p={unversionedId:"network/http/shake-hands",id:"network/http/shake-hands",title:"HTTP \u4e09\u6b21\u63e1\u624b",description:"\u4e09\u6b21\u63e1\u624b",source:"@site/docs/network/http/shake-hands.md",sourceDirName:"network/http",slug:"/network/http/shake-hands",permalink:"/myblog/docs/network/http/shake-hands",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/network/http/shake-hands.md",tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"\u7f51\u7edc\u534f\u8bae\u5206 \u5c42",permalink:"/myblog/docs/network/http/OSI"},next:{title:"URI\u3001URL\u3001URN\u3001Data URI \u548c Object URL/Blob URL",permalink:"/myblog/docs/network/http/URI-URL-URN"}},l={},c=[{value:"\u4e09\u6b21\u63e1\u624b",id:"\u4e09\u6b21\u63e1\u624b",level:2},{value:"\u7b2c\u4e00\u6b21\u63e1\u624b",id:"\u7b2c\u4e00\u6b21\u63e1\u624b",level:3},{value:"\u7b2c\u4e8c\u6b21\u63e1\u624b",id:"\u7b2c\u4e8c\u6b21\u63e1\u624b",level:3},{value:"\u7b2c\u4e09\u6b21\u63e1\u624b",id:"\u7b2c\u4e09\u6b21\u63e1\u624b",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u5efa\u7acb\u4e09\u6b21\u63e1\u624b",id:"\u4e3a\u4ec0\u4e48\u8981\u5efa\u7acb\u4e09\u6b21\u63e1\u624b",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-\u4e09\u6b21\u63e1\u624b"},"HTTP \u4e09\u6b21\u63e1\u624b"),(0,a.kt)("h2",{id:"\u4e09\u6b21\u63e1\u624b"},"\u4e09\u6b21\u63e1\u624b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/http/three-times-shake-hands.png",alt:"shake-hands"})),(0,a.kt)("p",null,"\u521a\u5f00\u59cb\u7684\u65f6\u5019\u5ba2\u6237\u7aef\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Closed")," \u72b6\u6001\uff0c \u670d\u52a1\u7aef\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Listen")," \u72b6\u6001"),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u6b21\u63e1\u624b"},"\u7b2c\u4e00\u6b21\u63e1\u624b"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u7ed9\u670d\u52a1\u7aef\u53d1\u9001\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"SYN \u62a5\u6587"),", \u9996\u90e8\u7684\u540c\u6b65\u4f4d\u4f4d\u7801 ",(0,a.kt)("inlineCode",{parentName:"p"},"SYN=1"),", \u968f\u673a\u4ea7\u751f\u521d\u59cb\u5e8f\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"seq number=x")," \u7684\u6570\u636e\u5305\u5230\u670d\u52a1\u5668\uff0c\u670d\u52a1\u7aef\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"SYN=1")," \u77e5\u9053\u5ba2\u6237\u7aef\u8981\u6c42\u5efa\u7acb\u8054\u673a.\n",(0,a.kt)("inlineCode",{parentName:"p"},"SYN=1")," \u7684\u62a5\u6587\u6bb5\u4e0d\u80fd\u643a\u5e26\u6570\u636e\uff0c\u9700\u8981\u6d88\u8017\u6389\u4e00\u4e2a\u5e8f\u53f7\uff0c\u4f1a\u8ba9\u4e0b\u4e00\u6b21\u4f20\u8f93\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"packet seq")," \u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ACK")," \u7684\u4f20\u8f93\u4e0d\u4f1a\u8ba9\u4e0b\u4e00\u6b21\u7684\u4f20\u8f93 ",(0,a.kt)("inlineCode",{parentName:"p"},"packet seq")," \u589e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\n\u5ba2\u6237\u7aef\u8fdb\u7a0b\u5904\u4e8e SYN-SENT\uff08\u540c\u6b65\u5df2\u53d1\u9001\uff09\u72b6\u6001"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"SYN: \u540c\u6b65\u5e8f\u5217\u7f16\u53f7\uff08Synchronize Sequence Numbers\uff09, \u662f\u4e00\u4e2a\u6807\u5fd7\u4f4d\uff0c\u4ee3\u8868\u521b\u5efa\u8bf7\u6c42\u7684\u6570\u636e\u5305(\u5efa\u7acb\u8fde\u63a5)\nACK: \u8868\u793a\u54cd\u5e94\nFIN(Finish): \u8868\u793a\u5173\u95ed\u8fde\u63a5\nRST(Reset): \u8868\u793a\u8fde\u63a5\u91cd\u7f6e\nPSH(Push): \u63a8\u9001\u4f4d\uff0c\u6709 DATA \u6570\u636e\u4f20\u8f93\uff0c\u5230\u8fbe\u5bf9\u7aef\u65f6\uff0c\u63a5\u6536\u7aef\u4e0d\u5c06\u8be5\u6570\u636e\u8fdb\u884c\u961f\u5217\u5904\u7406\uff0c\u5c06\u8fd9\u4e2a\u62a5\u6587\u53ca\u7f13\u5b58\u533a\u4e4b\u95f4\u7f13\u5b58\u5c1a\u672a\u4ea4\u4ed8\u7684\u6570\u636e\u4e00\u5e76\u4ea4\u4ed8\u7ed9\u8fdb\u7a0b\nURG(Urgent): \u7d27\u6025\u4f4d\uff0c\u7d27\u6025\u6570\u636e\u9700\u8981\u76f4\u63a5\u4ea4\u4ed8\u7ed9\u63a5\u6536\u7aef\u7684\u8fdb\u7a0b\uff0c\u4e0d\u8fdb\u5165\u7f13\u5b58\nAck: acknowledgement \u786e\u8ba4\u53f7")),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u6b21\u63e1\u624b"},"\u7b2c\u4e8c\u6b21\u63e1\u624b"),(0,a.kt)("p",null,"\u670d\u52a1\u7aef\u63a5\u6536\u5230\u5ba2\u6237\u7aef\u7684 SYN \u62a5\u6587\u4e4b\u540e\u9700\u8981\u786e\u8ba4\u8054\u673a\u4fe1\u606f\uff0c\u670d\u52a1\u7aef\u5f00\u542f\u4e00\u4e2a TCP \u7684 socket \u7aef\u53e3\uff0c\u5411\u5ba2\u6237\u7aef\u53d1\u9001 \u786e\u8ba4\u53f7 ack \u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u5ba2\u6237\u7aef\u7684 seq+1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SYN=1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\u968f\u673a\u4ea7\u751f\u7684\u5e8f\u53f7 seq=y"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ACK=1")," \u7684\u5305\n\u8fd9\u4e2a\u62a5\u6587\u6bb5\u4e5f\u4e0d\u80fd\u643a\u5e26\u6570\u636e\uff0c\u6d88\u8017\u4e00\u4e2a\u5e8f\u53f7\n\u670d\u52a1\u7aef\u8fdb\u7a0b\u5904\u4e8e SYN-RCVD\uff08\u540c\u6b65\u6536\u5230\uff09\u72b6\u6001"),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u6b21\u63e1\u624b"},"\u7b2c\u4e09\u6b21\u63e1\u624b"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u63a5\u6536\u5230\u670d\u52a1\u7aef\u8fd4\u56de\u7684 SYN \u62a5\u6587\u4e4b\u540e\uff0c\u4f1a\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u786e\u8ba4\u53f7ack")," \u662f\u5426\u6b63\u786e\uff0c\u5373\u662f\u5426\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u7b2c\u4e00\u6b21\u53d1\u9001\u7684 seq+1"),", \u786e\u8ba4\u62a5\u6587\u6bb5 \u4f4d\u7801",(0,a.kt)("inlineCode",{parentName:"p"},"ACK=1"),"\uff0c \u6b63\u786e\u7684\u8bdd\u5ba2\u6237\u7aef\u4f1a\u518d\u53d1\u9001 ",(0,a.kt)("inlineCode",{parentName:"p"},"ACK=\u4e0a\u4e00\u6b21\u670d\u52a1\u7aef\u8fd4\u56de\u7684 seq+1"),", \u6b64\u65f6\u5ba2\u6237\u7aef\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTABLISHED\u72b6\u6001")," \u670d\u52a1\u7aef\u6536\u5230\u540e\u786e\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"p"},"seq")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ACK=1"),"\uff0c\u670d\u52a1\u7aef\u4e5f\u5904\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"ESTABLISHED\u72b6\u6001"),"\uff0c\u6b63\u786e\u7684\u8bdd\u53cc\u65b9\u8fde\u63a5\u5efa\u7acb\u6210\u529f"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u5efa\u7acb\u4e09\u6b21\u63e1\u624b"},"\u4e3a\u4ec0\u4e48\u8981\u5efa\u7acb\u4e09\u6b21\u63e1\u624b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9632\u6b62\u670d\u52a1\u7aef\u5f00\u542f\u4e00\u4e9b\u65e0\u7528\u7684\u8fde\u63a5\uff0c\u7f51\u7edc\u4f20\u8f93\u4f1a\u53d7\u5230\u5f71\u54cd\uff0c\u6bd4\u5982\u7b2c\u4e8c\u6b21\u63e1\u624b\u6570\u636e\u5305\u4e22\u5931\uff0c\u5ba2\u6237\u7aef\u5c31\u4e00\u76f4\u6ca1\u6709\u63a5\u6536\u5230\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5ba2\u6237\u7aef\u53ef\u80fd\u6709\u4e00\u4e9b\u8d85\u65f6\u8bbe\u7f6e\uff0c\u8d85\u65f6\u540e\u5c31\u5173\u95ed\u4e86\u8fde\u63a5\uff0c\u53bb\u521b\u5efa\u65b0\u7684\u8fde\u63a5\u8bf7\u6c42\uff0c\u670d\u52a1\u7aef\u6b64\u65f6\u8fd8\u5904\u4e8e\u4e00\u4e2a\u7b49\u5f85\u72b6\u6001\uff0c\u8fd9\u4e2a\u7aef\u53e3\u5c31\u4e00\u76f4\u5904\u4e8e\u5f00\u542f\u72b6\u6001\uff0c\u5bfc\u81f4\u670d\u52a1\u5668\u8d44\u6e90\u5f00\u9500\u3002")))}d.isMDXComponent=!0}}]);