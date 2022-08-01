"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2376],{3905:(e,l,t)=>{t.d(l,{Zo:()=>c,kt:()=>x});var n=t(7294);function r(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function a(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?a(Object(t),!0).forEach((function(l){r(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function o(e,l){if(null==e)return{};var t,n,r=function(e,l){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var l=n.useContext(u),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},c=function(e){var l=s(e.components);return n.createElement(u.Provider,{value:l},e.children)},f={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(e,l){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),x=r,m=p["".concat(u,".").concat(x)]||p[x]||f[x]||a;return t?n.createElement(m,i(i({ref:l},c),{},{components:t})):n.createElement(m,i({ref:l},c))}));function x(e,l){var t=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var o={};for(var u in l)hasOwnProperty.call(l,u)&&(o[u]=l[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},639:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const a={},i="Flex\u5e03\u5c40",o={unversionedId:"css/Flex",id:"css/Flex",title:"Flex\u5e03\u5c40",description:"\u6982\u5ff5",source:"@site/docs/css/Flex.md",sourceDirName:"css",slug:"/css/Flex",permalink:"/myblog/docs/css/Flex",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/css/Flex.md",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:2},{value:"\u5e38\u7528\u672f\u8bed",id:"\u5e38\u7528\u672f\u8bed",level:2},{value:"\u6a21\u578b",id:"\u6a21\u578b",level:2},{value:"\u5bb9\u5668\u7684\u5c5e\u6027",id:"\u5bb9\u5668\u7684\u5c5e\u6027",level:2},{value:"flex-direction : \u8bbe\u7f6e\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411\uff08\u8bbe\u7f6e\u4e3b\u8f74\uff09",id:"flex-direction--\u8bbe\u7f6e\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411\u8bbe\u7f6e\u4e3b\u8f74",level:4},{value:"flex-wrap : \u4f7f\u5bb9\u5668\u5185\u7684\u5143\u7d20\u6362\u884c",id:"flex-wrap--\u4f7f\u5bb9\u5668\u5185\u7684\u5143\u7d20\u6362\u884c",level:4},{value:"flex-flow : flex-direction\u548cflex-wrap\u5c5e\u6027\u7684\u7b80\u5199\uff0c\u4e14\u9ed8\u8ba4\u503c\u4e3arow nowrap",id:"flex-flow--flex-direction\u548cflex-wrap\u5c5e\u6027\u7684\u7b80\u5199\u4e14\u9ed8\u8ba4\u503c\u4e3arow-nowrap",level:4},{value:"justify-content : \u8bbe\u7f6e\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f",id:"justify-content--\u8bbe\u7f6e\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f",level:4},{value:"align-items : \u8bbe\u7f6e\u5143\u7d20\u5728\u4ea4\u53c9\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f",id:"align-items--\u8bbe\u7f6e\u5143\u7d20\u5728\u4ea4\u53c9\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f",level:4},{value:"align-content : \u5b9a\u4e49\u4e86\u5728\u4ea4\u53c9\u8f74\u65b9\u5411\u7684\u5bf9\u9f50\u65b9\u5f0f\u4ee5\u53ca\u989d\u5916\u7a7a\u95f4\u5206\u914d\uff0c\u7c7b\u4f3c\u4e8e\u4e3b\u8f74\u4e0a\u7684justify-content\u4f5c\u7528",id:"align-content--\u5b9a\u4e49\u4e86\u5728\u4ea4\u53c9\u8f74\u65b9\u5411\u7684\u5bf9\u9f50\u65b9\u5f0f\u4ee5\u53ca\u989d\u5916\u7a7a\u95f4\u5206\u914d\u7c7b\u4f3c\u4e8e\u4e3b\u8f74\u4e0a\u7684justify-content\u4f5c\u7528",level:4},{value:"order : \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cflex\u9879\u76ee\u662f\u6309\u7167\u5728\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u5148\u540e\u987a\u5e8f\u6392\u5217\u7684\uff0c\u4f46\u662forder\u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u9879\u76ee\u5728\u5bb9\u5668\u4e2d\u7684\u5148\u540e\u987a\u5e8f",id:"order--\u9ed8\u8ba4\u60c5\u51b5\u4e0bflex\u9879\u76ee\u662f\u6309\u7167\u5728\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u5148\u540e\u987a\u5e8f\u6392\u5217\u7684\u4f46\u662forder\u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u9879\u76ee\u5728\u5bb9\u5668\u4e2d\u7684\u5148\u540e\u987a\u5e8f",level:4},{value:"flex-grow : \u5b9a\u4e49\u9879\u76ee\u7684\u653e\u5927\u6bd4\u4f8b\uff0c\u5176\u503c\u662f\u4e00\u4e2a\u5355\u4f4d\u7684\u6b63\u6574\u6570\uff0c\u8868\u793a\u653e\u5927\u7684\u6bd4\u4f8b\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u5982\u679c\u5b58\u5728\u989d\u5916\u7a7a\u95f4\uff0c\u4e0d\u653e\u5927\uff0c\u8d1f\u503c\u65e0\u6548\u3002\u5982\u679c\u6240\u6709\u9879\u76ee\u7684flex-grow\u5c5e\u6027\u90fd\u662f1\uff0c\u5219\u4ed6\u4eec\u7b49\u5206\u5269\u4f59\u7684\u7a7a\u95f4\u3002\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u7684flex-grow\u5c5e\u6027\u4e3a2\uff0c\u5176\u4ed6\u9879\u76ee\u90fd\u662f1\uff0c\u90a3\u4e48\u524d\u8005\u6240\u62e5\u6709\u7684\u5269\u4f59\u7a7a\u95f4\u6bd4\u5176\u4ed6\u7684\u591a\u4e00\u500d",id:"flex-grow--\u5b9a\u4e49\u9879\u76ee\u7684\u653e\u5927\u6bd4\u4f8b\u5176\u503c\u662f\u4e00\u4e2a\u5355\u4f4d\u7684\u6b63\u6574\u6570\u8868\u793a\u653e\u5927\u7684\u6bd4\u4f8b\u9ed8\u8ba4\u4e3a0\u5982\u679c\u5b58\u5728\u989d\u5916\u7a7a\u95f4\u4e0d\u653e\u5927\u8d1f\u503c\u65e0\u6548\u5982\u679c\u6240\u6709\u9879\u76ee\u7684flex-grow\u5c5e\u6027\u90fd\u662f1\u5219\u4ed6\u4eec\u7b49\u5206\u5269\u4f59\u7684\u7a7a\u95f4\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u7684flex-grow\u5c5e\u6027\u4e3a2\u5176\u4ed6\u9879\u76ee\u90fd\u662f1\u90a3\u4e48\u524d\u8005\u6240\u62e5\u6709\u7684\u5269\u4f59\u7a7a\u95f4\u6bd4\u5176\u4ed6\u7684\u591a\u4e00\u500d",level:4},{value:"flex-shrink : \u5b9a\u4e49\u4e86\u9879\u76ee\u7684\u7f29\u5c0f\u6bd4\u4f8b\uff0c\u9ed8\u8ba4\u4e3a1\uff0c\u5982\u679c\u7a7a\u95f4\u4e0d\u8db3\uff0c\u8be5\u9879\u76ee\u5c06\u7f29\u5c0f\u30020\u8868\u793a\u4e0d\u7f29\u5c0f\uff0c\u8d1f\u503c\u65e0\u6548",id:"flex-shrink--\u5b9a\u4e49\u4e86\u9879\u76ee\u7684\u7f29\u5c0f\u6bd4\u4f8b\u9ed8\u8ba4\u4e3a1\u5982\u679c\u7a7a\u95f4\u4e0d\u8db3\u8be5\u9879\u76ee\u5c06\u7f29\u5c0f0\u8868\u793a\u4e0d\u7f29\u5c0f\u8d1f\u503c\u65e0\u6548",level:4},{value:"flex-basis : \u5b9a\u4e49\u9879\u76ee\u5728\u5206\u914d\u989d\u5916\u7a7a\u95f4\u4e4b\u524d\u7684\u9ed8\u8ba4\u5c3a\u5bf8\uff0c\u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u957f\u5ea6\u6216\u8005\u5173\u952e\u5b57auto\uff0c\u9ed8\u8ba4\u503c\u4e3aauto\uff0c\u5373\u9879\u76ee\u672c\u6765\u5927\u5c0f",id:"flex-basis--\u5b9a\u4e49\u9879\u76ee\u5728\u5206\u914d\u989d\u5916\u7a7a\u95f4\u4e4b\u524d\u7684\u9ed8\u8ba4\u5c3a\u5bf8\u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u957f\u5ea6\u6216\u8005\u5173\u952e\u5b57auto\u9ed8\u8ba4\u503c\u4e3aauto\u5373\u9879\u76ee\u672c\u6765\u5927\u5c0f",level:4},{value:"flex : \u5c5e\u6027flex-grow,flex-shrink\u548cflex-basis\u7684\u7b80\u5199\uff0c\u9ed8\u8ba4\u503c\u4e3a0 1 auto,\u540e\u4e24\u4e2a\u662f\u53ef\u9009\u5c5e\u6027",id:"flex--\u5c5e\u6027flex-growflex-shrink\u548cflex-basis\u7684\u7b80\u5199\u9ed8\u8ba4\u503c\u4e3a0-1-auto\u540e\u4e24\u4e2a\u662f\u53ef\u9009\u5c5e\u6027",level:4},{value:"align-self : \u5b9a\u4e49\u9879\u76ee\u7684\u5bf9\u9f50\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8986\u76d6align-items\u5c5e\u6027\uff0c\u9ed8\u8ba4\u503c\u4e3aauto\uff0c\u8868\u793a\u7ee7\u627f\u7236\u5143\u7d20\u7684align-items\u5c5e\u6027\uff0c\u5982\u679c\u6ca1\u6709\u7236\u5143\u7d20\uff0c\u5c31\u4e0estretch\u76f8\u540c",id:"align-self--\u5b9a\u4e49\u9879\u76ee\u7684\u5bf9\u9f50\u65b9\u5f0f\u53ef\u4ee5\u8986\u76d6align-items\u5c5e\u6027\u9ed8\u8ba4\u503c\u4e3aauto\u8868\u793a\u7ee7\u627f\u7236\u5143\u7d20\u7684align-items\u5c5e\u6027\u5982\u679c\u6ca1\u6709\u7236\u5143\u7d20\u5c31\u4e0estretch\u76f8\u540c",level:4},{value:"flex-direction\u7684\u6817\u5b50",id:"flex-direction\u7684\u6817\u5b50",level:2}],c={toc:s};function f(e){let{components:l,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flex\u5e03\u5c40"},"Flex\u5e03\u5c40"),(0,r.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flexible box\uff1a\u5f39\u6027\u76d2\u72b6\u5e03\u5c40"),(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u63a7\u5236\u5185\u90e8\u5143\u7d20\u7684\u5e03\u5c40\u5b9a\u4f4d"),(0,r.kt)("li",{parentName:"ul"},"CSS3\u5f15\u5165\u7684\u65b0\u5e03\u5c40\u6a21\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u4f38\u7f29\u5143\u7d20\uff0c\u81ea\u7531\u586b\u5145\uff0c\u81ea\u9002\u5e94")),(0,r.kt)("h2",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u5728\u4e0d\u540c\u65b9\u5411\u6392\u5217\u5143\u7d20"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5143\u7d20\u6392\u5e8f\u7684\u65b9\u5411"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5143\u7d20\u7684\u5bf9\u9f50\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5143\u7d20\u4e4b\u95f4\u7b49\u8ddd"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5355\u4e2a\u5143\u7d20\u653e\u5927\u4e0e\u7f29\u653e\u6bd4\u4f8b\u3001\u5360\u6bd4\u3001\u5bf9\u9f50\u65b9\u5f0f")),(0,r.kt)("h2",{id:"\u5e38\u7528\u672f\u8bed"},"\u5e38\u7528\u672f\u8bed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex containter : flex\u5bb9\u5668"),(0,r.kt)("li",{parentName:"ul"},"flex item : flex\u9879\u76ee\uff08\u5143\u7d20\uff09"),(0,r.kt)("li",{parentName:"ul"},"flex direction : \u5e03\u5c40\u65b9\u5411(\u4e3b\u8f74\u65b9\u5411)")),(0,r.kt)("h2",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/flexmodel1.png",alt:"flexmodel1"})),(0,r.kt)("h2",{id:"\u5bb9\u5668\u7684\u5c5e\u6027"},"\u5bb9\u5668\u7684\u5c5e\u6027"),(0,r.kt)("h4",{id:"flex-direction--\u8bbe\u7f6e\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411\u8bbe\u7f6e\u4e3b\u8f74"},"flex-direction : \u8bbe\u7f6e\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411\uff08\u8bbe\u7f6e\u4e3b\u8f74\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"row\uff08\u4ece\u5de6\u5411\u53f3)  "),(0,r.kt)("li",{parentName:"ul"},"row-reverse\uff08\u4ece\u53f3\u5411\u5de6\uff09"),(0,r.kt)("li",{parentName:"ul"},"column\uff08\u4ece\u4e0a\u5230\u4e0b\uff09"),(0,r.kt)("li",{parentName:"ul"},"column-reverse\uff08\u4ece\u4e0b\u5230\u4e0a\uff09")),(0,r.kt)("h4",{id:"flex-wrap--\u4f7f\u5bb9\u5668\u5185\u7684\u5143\u7d20\u6362\u884c"},"flex-wrap : \u4f7f\u5bb9\u5668\u5185\u7684\u5143\u7d20\u6362\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nowrap\uff08\u4e0d\u6362\u884c\uff0c\u4f1a\u7f29\u653e\uff09"),(0,r.kt)("li",{parentName:"ul"},"wrap\uff08\u82e5\u8d85\u8fc7\u5219\u4f1a\u5230\u7b2c\u4e8c\u884c\u8fdb\u884c\u6392\u5217,\u4e0d\u4f1a\u7f29\u653e\uff09"),(0,r.kt)("li",{parentName:"ul"},"wrap-reverse\uff08\u9006\u5411\u6362\u884c\uff0c\u540c\u6837\u4e0d\u4f1a\u7f29\u653e\uff09")),(0,r.kt)("h4",{id:"flex-flow--flex-direction\u548cflex-wrap\u5c5e\u6027\u7684\u7b80\u5199\u4e14\u9ed8\u8ba4\u503c\u4e3arow-nowrap"},"flex-flow : flex-direction\u548cflex-wrap\u5c5e\u6027\u7684\u7b80\u5199\uff0c\u4e14\u9ed8\u8ba4\u503c\u4e3arow nowrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-flow:<'flex-direction'>||<'flex-wrap'>")),(0,r.kt)("h4",{id:"justify-content--\u8bbe\u7f6e\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f"},"justify-content : \u8bbe\u7f6e\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-start(\u5de6\u5bf9\u9f50)"),(0,r.kt)("li",{parentName:"ul"},"flex-end(\u53f3\u5bf9\u9f50)"),(0,r.kt)("li",{parentName:"ul"},"center\uff08\u5c45\u4e2d\u5bf9\u9f50\uff09"),(0,r.kt)("li",{parentName:"ul"},"space-between(\u4e24\u7aef\u5bf9\u9f50\uff0c\u7a7a\u767d\u5747\u5300\u586b\u5145\u5230flex\u6210\u5458\u4e4b\u95f4)"),(0,r.kt)("li",{parentName:"ul"},"space-around(\u5143\u7d20\u4e24\u8fb9\u5e73\u5747\u7b49\u5206\u5269\u4f59\u7a7a\u767d\u90e8\u5206\uff0c\u7a7a\u767d\u95f4\u9699\u62fc\u63a5)"),(0,r.kt)("li",{parentName:"ul"},"space-evenly(\u9879\u76ee\u5747\u5300\u5206\u5e03\uff0c\u7a7a\u767d\u95f4\u9699\u76f8\u7b49)")),(0,r.kt)("h4",{id:"align-items--\u8bbe\u7f6e\u5143\u7d20\u5728\u4ea4\u53c9\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f"},"align-items : \u8bbe\u7f6e\u5143\u7d20\u5728\u4ea4\u53c9\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-start(\u9879\u76ee\u6309\u7167\u4ea4\u53c9\u8f74\u8d77\u70b9\u5bf9\u9f50)"),(0,r.kt)("li",{parentName:"ul"},"flex-end(\u9879\u76ee\u6309\u7167\u4ea4\u53c9\u8f74\u7ec8\u70b9\u7ebf\u5bf9\u9f50)"),(0,r.kt)("li",{parentName:"ul"},"center(\u4ea4\u53c9\u8f74\u65b9\u5411\u9879\u76ee\u4e2d\u95f4\u5bf9\u9f50)"),(0,r.kt)("li",{parentName:"ul"},"baseline(\u4ea4\u53c9\u8f74\u65b9\u5411\u6309\u7b2c\u4e00\u884c\u6587\u5b57\u57fa\u7ebf\u5bf9\u9f50)"),(0,r.kt)("li",{parentName:"ul"},"stretch(\u4ea4\u53c9\u8f74\u65b9\u5411\uff0c\u62c9\u4f38\u663e\u793a\uff0c\u62c9\u4f38\u663e\u793a)")),(0,r.kt)("h4",{id:"align-content--\u5b9a\u4e49\u4e86\u5728\u4ea4\u53c9\u8f74\u65b9\u5411\u7684\u5bf9\u9f50\u65b9\u5f0f\u4ee5\u53ca\u989d\u5916\u7a7a\u95f4\u5206\u914d\u7c7b\u4f3c\u4e8e\u4e3b\u8f74\u4e0a\u7684justify-content\u4f5c\u7528"},"align-content : \u5b9a\u4e49\u4e86\u5728\u4ea4\u53c9\u8f74\u65b9\u5411\u7684\u5bf9\u9f50\u65b9\u5f0f\u4ee5\u53ca\u989d\u5916\u7a7a\u95f4\u5206\u914d\uff0c\u7c7b\u4f3c\u4e8e\u4e3b\u8f74\u4e0a\u7684justify-content\u4f5c\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stretch(\u62c9\u4f38\u663e\u793a)"),(0,r.kt)("li",{parentName:"ul"},"flex-start(\u4ece\u542f\u70b9\u7ebf\u5f00\u59cb\u987a\u5e8f\u6392\u5217)"),(0,r.kt)("li",{parentName:"ul"},"flex-end(\u76f8\u5bf9\u7ec8\u70b9\u7ebf\u987a\u5e8f\u6392\u5217)"),(0,r.kt)("li",{parentName:"ul"},"center(\u5c45\u4e2d\u6392\u5217)"),(0,r.kt)("li",{parentName:"ul"},"space-between(\u9879\u76ee\u5747\u5300\u5206\u5e03\uff0c\u7b2c\u4e00\u9879\u5728\u542f\u70b9\u7ebf\uff0c\u6700\u540e\u4e00\u9879\u5728\u7ec8\u70b9\u7ebf)"),(0,r.kt)("li",{parentName:"ul"},"space-around(\u9879\u76ee\u5747\u5300\u5206\u5e03\uff0c\u6bcf\u4e00\u4e2a\u9879\u76ee\u4e24\u4fa7\u6709\u76f8\u540c\u7684\u7559\u767d\u7a7a\u95f4\uff0c\u76f8\u90bb\u9879\u76ee\u4e4b\u95f4\u7684\u8ddd\u79bb\u662f\u4e24\u4e2a\u9879\u76ee\u4e4b\u95f4\u7684\u7559\u767d\u548c)")),(0,r.kt)("h4",{id:"order--\u9ed8\u8ba4\u60c5\u51b5\u4e0bflex\u9879\u76ee\u662f\u6309\u7167\u5728\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u5148\u540e\u987a\u5e8f\u6392\u5217\u7684\u4f46\u662forder\u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u9879\u76ee\u5728\u5bb9\u5668\u4e2d\u7684\u5148\u540e\u987a\u5e8f"},"order : \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cflex\u9879\u76ee\u662f\u6309\u7167\u5728\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u5148\u540e\u987a\u5e8f\u6392\u5217\u7684\uff0c\u4f46\u662forder\u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u9879\u76ee\u5728\u5bb9\u5668\u4e2d\u7684\u5148\u540e\u987a\u5e8f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"order:integer;  "),(0,r.kt)("li",{parentName:"ul"},"(\u9ed8\u8ba4\u4e3a0,\u503c\u6309\u4ece\u5c0f\u5230\u5927\u987a\u5e8f\u6392\u5217\uff0c\u53ef\u4ee5\u4e3a\u8d1f\u503c)")),(0,r.kt)("h4",{id:"flex-grow--\u5b9a\u4e49\u9879\u76ee\u7684\u653e\u5927\u6bd4\u4f8b\u5176\u503c\u662f\u4e00\u4e2a\u5355\u4f4d\u7684\u6b63\u6574\u6570\u8868\u793a\u653e\u5927\u7684\u6bd4\u4f8b\u9ed8\u8ba4\u4e3a0\u5982\u679c\u5b58\u5728\u989d\u5916\u7a7a\u95f4\u4e0d\u653e\u5927\u8d1f\u503c\u65e0\u6548\u5982\u679c\u6240\u6709\u9879\u76ee\u7684flex-grow\u5c5e\u6027\u90fd\u662f1\u5219\u4ed6\u4eec\u7b49\u5206\u5269\u4f59\u7684\u7a7a\u95f4\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u7684flex-grow\u5c5e\u6027\u4e3a2\u5176\u4ed6\u9879\u76ee\u90fd\u662f1\u90a3\u4e48\u524d\u8005\u6240\u62e5\u6709\u7684\u5269\u4f59\u7a7a\u95f4\u6bd4\u5176\u4ed6\u7684\u591a\u4e00\u500d"},"flex-grow : \u5b9a\u4e49\u9879\u76ee\u7684\u653e\u5927\u6bd4\u4f8b\uff0c\u5176\u503c\u662f\u4e00\u4e2a\u5355\u4f4d\u7684\u6b63\u6574\u6570\uff0c\u8868\u793a\u653e\u5927\u7684\u6bd4\u4f8b\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u5982\u679c\u5b58\u5728\u989d\u5916\u7a7a\u95f4\uff0c\u4e0d\u653e\u5927\uff0c\u8d1f\u503c\u65e0\u6548\u3002\u5982\u679c\u6240\u6709\u9879\u76ee\u7684flex-grow\u5c5e\u6027\u90fd\u662f1\uff0c\u5219\u4ed6\u4eec\u7b49\u5206\u5269\u4f59\u7684\u7a7a\u95f4\u3002\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u7684flex-grow\u5c5e\u6027\u4e3a2\uff0c\u5176\u4ed6\u9879\u76ee\u90fd\u662f1\uff0c\u90a3\u4e48\u524d\u8005\u6240\u62e5\u6709\u7684\u5269\u4f59\u7a7a\u95f4\u6bd4\u5176\u4ed6\u7684\u591a\u4e00\u500d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-grow:number;(\u9ed8\u8ba4\u4e3a0)")),(0,r.kt)("h4",{id:"flex-shrink--\u5b9a\u4e49\u4e86\u9879\u76ee\u7684\u7f29\u5c0f\u6bd4\u4f8b\u9ed8\u8ba4\u4e3a1\u5982\u679c\u7a7a\u95f4\u4e0d\u8db3\u8be5\u9879\u76ee\u5c06\u7f29\u5c0f0\u8868\u793a\u4e0d\u7f29\u5c0f\u8d1f\u503c\u65e0\u6548"},"flex-shrink : \u5b9a\u4e49\u4e86\u9879\u76ee\u7684\u7f29\u5c0f\u6bd4\u4f8b\uff0c\u9ed8\u8ba4\u4e3a1\uff0c\u5982\u679c\u7a7a\u95f4\u4e0d\u8db3\uff0c\u8be5\u9879\u76ee\u5c06\u7f29\u5c0f\u30020\u8868\u793a\u4e0d\u7f29\u5c0f\uff0c\u8d1f\u503c\u65e0\u6548"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-shrink:number;(\u9ed8\u8ba4\u4e3a1)")),(0,r.kt)("h4",{id:"flex-basis--\u5b9a\u4e49\u9879\u76ee\u5728\u5206\u914d\u989d\u5916\u7a7a\u95f4\u4e4b\u524d\u7684\u9ed8\u8ba4\u5c3a\u5bf8\u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u957f\u5ea6\u6216\u8005\u5173\u952e\u5b57auto\u9ed8\u8ba4\u503c\u4e3aauto\u5373\u9879\u76ee\u672c\u6765\u5927\u5c0f"},"flex-basis : \u5b9a\u4e49\u9879\u76ee\u5728\u5206\u914d\u989d\u5916\u7a7a\u95f4\u4e4b\u524d\u7684\u9ed8\u8ba4\u5c3a\u5bf8\uff0c\u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u957f\u5ea6\u6216\u8005\u5173\u952e\u5b57auto\uff0c\u9ed8\u8ba4\u503c\u4e3aauto\uff0c\u5373\u9879\u76ee\u672c\u6765\u5927\u5c0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-basis:length|auto;(\u9ed8\u8ba4\u503c\u4e3aauto)")),(0,r.kt)("h4",{id:"flex--\u5c5e\u6027flex-growflex-shrink\u548cflex-basis\u7684\u7b80\u5199\u9ed8\u8ba4\u503c\u4e3a0-1-auto\u540e\u4e24\u4e2a\u662f\u53ef\u9009\u5c5e\u6027"},"flex : \u5c5e\u6027flex-grow,flex-shrink\u548cflex-basis\u7684\u7b80\u5199\uff0c\u9ed8\u8ba4\u503c\u4e3a0 1 auto,\u540e\u4e24\u4e2a\u662f\u53ef\u9009\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".item{\n    flex : none | [<'flex-grow'><'flex-shrink'>||<'flex-basis'>]\n}\n/*\u4e00\u822c\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u7b80\u5199\u65b9\u5f0f\uff0c\u800c\u4e0d\u662f\u5206\u522b\u5b9a\u4e49\u6bcf\u4e00\u79cd\u5c5e\u6027*/\n")),(0,r.kt)("h4",{id:"align-self--\u5b9a\u4e49\u9879\u76ee\u7684\u5bf9\u9f50\u65b9\u5f0f\u53ef\u4ee5\u8986\u76d6align-items\u5c5e\u6027\u9ed8\u8ba4\u503c\u4e3aauto\u8868\u793a\u7ee7\u627f\u7236\u5143\u7d20\u7684align-items\u5c5e\u6027\u5982\u679c\u6ca1\u6709\u7236\u5143\u7d20\u5c31\u4e0estretch\u76f8\u540c"},"align-self : \u5b9a\u4e49\u9879\u76ee\u7684\u5bf9\u9f50\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8986\u76d6align-items\u5c5e\u6027\uff0c\u9ed8\u8ba4\u503c\u4e3aauto\uff0c\u8868\u793a\u7ee7\u627f\u7236\u5143\u7d20\u7684align-items\u5c5e\u6027\uff0c\u5982\u679c\u6ca1\u6709\u7236\u5143\u7d20\uff0c\u5c31\u4e0estretch\u76f8\u540c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"auto"),(0,r.kt)("li",{parentName:"ul"},"flex-start"),(0,r.kt)("li",{parentName:"ul"},"flex-end"),(0,r.kt)("li",{parentName:"ul"},"center"),(0,r.kt)("li",{parentName:"ul"},"baseline"),(0,r.kt)("li",{parentName:"ul"},"stretch")),(0,r.kt)("h2",{id:"flex-direction\u7684\u6817\u5b50"},"flex-direction\u7684\u6817\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n    \x3c!-- \u5b9a\u4e49flex\u8f74\u7ebf --\x3e\n    <view class="container">\n        <view class="green txt">\n            A\n        </view>\n        <view class="red txt">\n            B\n        </view>\n        <view class="blue txt">\n            C\n        </view>\n    </view>\n</template>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"<style>\n    .container{\n        /* \u5b9a\u4e49flex\u5bb9\u5668 */\n        display: flex;\n        /* \u8bbe\u7f6e\u5bb9\u5668\u5185\u90e8\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411 */\n        flex-direction: row;\n        /* flex-direction: row-reverse; */\n        /* flex-direction: column; */\n        /* flex-direction: column-reverse; */\n    }\n    .txt{\n        font-size: 20px;\n        width: 150upx;\n        height: 150upx;\n    }\n    .green{\n        background-color: #008000;\n    }\n    .red{\n        background-color: #ff0000;\n    }\n    .blue{\n        background-color: #007AFF;\n    }\n</style>\n")),(0,r.kt)("p",null,"flex-direction: row\u6548\u679c\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/flex_direction_row.png",alt:"flex-direction:row"})),(0,r.kt)("p",null,"\u66f4\u6539\u6837\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"<style>\n    .container{\n        /* \u5b9a\u4e49flex\u5bb9\u5668 */\n        display: flex;\n        /* \u8bbe\u7f6e\u5bb9\u5668\u5185\u90e8\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411 */\n        /* flex-direction: row; */\n        flex-direction: row-reverse;\n        /* flex-direction: column; */\n        /* flex-direction: column-reverse; */\n    }\n    ...\n</style>\n")),(0,r.kt)("p",null,"flex-direction: row-reverse\u6548\u679c\u56fe",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/row_reverse.png",alt:"flex-direction:row-reverse"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u66f4\u6539\u6837\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"<style>\n    .container{\n        /* \u5b9a\u4e49flex\u5bb9\u5668 */\n        display: flex;\n        /* \u8bbe\u7f6e\u5bb9\u5668\u5185\u90e8\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411 */\n        /* flex-direction: row; */\n        /*flex-direction: row-reverse;*/\n        flex-direction: column; \n        /* flex-direction: column-reverse; */\n    }\n    ...\n</style>\n")),(0,r.kt)("p",null,"flex-direction: column\u6548\u679c\u56fe",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/column.png",alt:"flex-direction: column"})),(0,r.kt)("br",null),"\u66f4\u6539\u6837\u5f0f\uff1a",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"<style>\n    .container{\n        /* \u5b9a\u4e49flex\u5bb9\u5668 */\n         display: flex;\n        /* \u8bbe\u7f6e\u5bb9\u5668\u5185\u90e8\u5143\u7d20\u7684\u6392\u5217\u65b9\u5411 */\n        /* flex-direction: row; */\n        /*flex-direction: row-reverse;*/\n        /* flex-direction: column; */\n        flex-direction: column-reverse;\n    }\n    ...\n</style>\n")),(0,r.kt)("p",null,"flex-direction: column-reverse\u6548\u679c\u56fe",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/column-reverse.png",alt:"flex-direction:column-reverse"})))}f.isMDXComponent=!0}}]);