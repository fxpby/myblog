"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),b=o,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||l;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={},a="\u76d2\u6a21\u578b box model",i={unversionedId:"css/box-model",id:"css/box-model",title:"\u76d2\u6a21\u578b box model",description:"\u63cf\u8ff0\u4e00\u4e2a\u7531\u5143\u7d20\u751f\u6210\u7684\u77e9\u5f62\u76d2\u5b50\uff0c\u89c6\u89c9\u683c\u5f0f\u5316\u6a21\u578b\u51b3\u5b9a\u8fd9\u4e9b\u76d2\u5b50\u7684\u5927\u5c0f\u3001\u4f4d\u7f6e\u4ee5\u53ca\u5c5e\u6027\uff08\u989c\u8272\u3001\u80cc\u666f\u3001\u8fb9\u6846\u5c3a\u5bf8\u7b49\uff09",source:"@site/docs/css/box-model.md",sourceDirName:"css",slug:"/css/box-model",permalink:"/docs/css/box-model",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/css/box-model.md",tags:[],version:"current",frontMatter:{},sidebar:"css",next:{title:"\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587 block formatting context",permalink:"/docs/css/BFC"}},c={},s=[{value:"1.\u524d\u7f6e\u77e5\u8bc6\u70b9",id:"1\u524d\u7f6e\u77e5\u8bc6\u70b9",level:2},{value:"\u5757\u7ea7\u5143\u7d20\u3001\u5757\u7ea7\u76d2\u5b50\u3001\u5757\u5bb9\u5668\u76d2\u5b50\u3001\u5757\u76d2\u5b50\u5206\u6e05\u695a\u4e86\u5417",id:"\u5757\u7ea7\u5143\u7d20\u5757\u7ea7\u76d2\u5b50\u5757\u5bb9\u5668\u76d2\u5b50\u5757\u76d2\u5b50\u5206\u6e05\u695a\u4e86\u5417",level:3},{value:"2.\u89c6\u89c9\u683c\u5f0f\u5316\u6a21\u578b(visual formatting model)",id:"2\u89c6\u89c9\u683c\u5f0f\u5316\u6a21\u578bvisual-formatting-model",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u76d2\u6a21\u578b-box-model"},"\u76d2\u6a21\u578b box model"),(0,o.kt)("p",null,"\u63cf\u8ff0\u4e00\u4e2a\u7531\u5143\u7d20\u751f\u6210\u7684\u77e9\u5f62\u76d2\u5b50\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u89c6\u89c9\u683c\u5f0f\u5316\u6a21\u578b"),"\u51b3\u5b9a\u8fd9\u4e9b\u76d2\u5b50\u7684\u5927\u5c0f\u3001\u4f4d\u7f6e\u4ee5\u53ca\u5c5e\u6027\uff08\u989c\u8272\u3001\u80cc\u666f\u3001\u8fb9\u6846\u5c3a\u5bf8\u7b49\uff09"),(0,o.kt)("p",null,"\u76d2\u5b50\u7684\u6784\u6210\u56fe\u5982\u4e0b\ud83d\udc47"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/css/box-model.png",alt:"box-model"})),(0,o.kt)("h2",{id:"1\u524d\u7f6e\u77e5\u8bc6\u70b9"},"1.\u524d\u7f6e\u77e5\u8bc6\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"box (\u76d2\u5b50)"),(0,o.kt)("li",{parentName:"ul"},"principal box (\u4e3b\u8981\u76d2\u5b50)"),(0,o.kt)("li",{parentName:"ul"},"block-level box (\u5757\u7ea7\u76d2\u5b50)"),(0,o.kt)("li",{parentName:"ul"},"block container box (\u5757\u5bb9\u5668\u76d2\u5b50)"),(0,o.kt)("li",{parentName:"ul"},"block box (\u5757\u76d2\u5b50)"),(0,o.kt)("li",{parentName:"ul"},"block (\u5757)"),(0,o.kt)("li",{parentName:"ul"},"\u5757\u7ea7\u5143\u7d20\uff1a\u5143\u7d20\u7684 display \u4e3a block\u3001list-item \u6216 table\u3002\u4e00\u4e2a\u5757\u7ea7\u5143\u7d20\u4f1a\u88ab\u683c\u5f0f\u5316\u6210\u4e00\u4e2a\u5757\uff0c\u9ed8\u8ba4\u6309\u7167\u5782\u76f4\u65b9\u5411\u4f9d\u6b21\u6392\u5217")),(0,o.kt)("h3",{id:"\u5757\u7ea7\u5143\u7d20\u5757\u7ea7\u76d2\u5b50\u5757\u5bb9\u5668\u76d2\u5b50\u5757\u76d2\u5b50\u5206\u6e05\u695a\u4e86\u5417"},"\u5757\u7ea7\u5143\u7d20\u3001\u5757\u7ea7\u76d2\u5b50\u3001\u5757\u5bb9\u5668\u76d2\u5b50\u3001\u5757\u76d2\u5b50\u5206\u6e05\u695a\u4e86\u5417"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5757\u7ea7\u76d2\u5b50\u90fd\u4f1a\u53c2\u4e0e\u5757\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587\uff08BFC\uff09\u7684\u521b\u5efa\uff0c\u6bcf\u4e2a\u5757\u7ea7\u5143\u7d20\u90fd\u4f1a\u81f3\u5c11\u751f\u6210\u4e00\u4e2a\u5757\u7ea7\u76d2\u5b50\uff0c\u4e5f\u79f0\u4f5c\u4e3b\u5757\u7ea7\u76d2\u5b50(principal block-level box)"),(0,o.kt)("li",{parentName:"ul"},"\u6709\u4e00\u4e9b\u5143\u7d20\uff0c\u6bd4\u5982\u5217\u8868\u9879\u4f1a\u751f\u6210\u989d\u5916\u7684\u76d2\u5b50\u6765\u653e\u7f6e\u9879\u76ee\u7b26\u53f7\uff0c\u591a\u6570\u5143\u7d20\u53ea\u751f\u6210\u4e00\u4e2a\u4e3b\u5757\u7ea7\u76d2\u5b50"),(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u5757\u7ea7\u76d2\u5b50\u5305\u542b\u7531\u540e\u4ee3\u5143\u7d20\u751f\u6210\u7684\u76d2\u5b50\u53ca\u5185\u5bb9\uff0c\u5e76\u53c2\u4e0e\u5b9a\u4f4d\u65b9\u6848"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5757\u7ea7\u76d2\u5b50\u53ef\u80fd\u662f\u4e00\u4e2a\u5757\u5bb9\u5668\u76d2\u5b50(block container box), \u5757\u5bb9\u5668\u76d2\u5b50\u8981\u4e48\u53ea\u5305\u542b\u5176\u4ed6\u5757\u7ea7\u76d2\u5b50\uff0c\u8981\u4e48\u53ea\u5305\u542b\u884c\u5185\u76d2\u5b50\u5e76\u540c\u4e8b\u521b\u5efa\u4e00\u4e2a\u884c\u5185\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587(IFC)"),(0,o.kt)("li",{parentName:"ul"},"\u540c\u65f6\u662f\u5757\u5bb9\u5668\u76d2\u5b50\u7684\u5757\u7ea7\u76d2\u5b50\u79f0\u4e3a\u5757\u76d2\u5b50(block box)"),(0,o.kt)("li",{parentName:"ul"},"\u5757\u7ea7\u76d2\u5b50\u63cf\u8ff0\u5143\u7d20\u4e0e\u5176\u7236\u5143\u7d20\u548c\u5144\u5f1f\u5143\u7d20\u4e4b\u95f4\u7684\u884c\u4e3a"),(0,o.kt)("li",{parentName:"ul"},"\u5757\u5bb9\u5668\u76d2\u5b50\u63cf\u8ff0\u5143\u7d20\u4e0e\u5176\u540e\u4ee3\u4e4b\u95f4\u7684\u884c\u4e3a")),(0,o.kt)("h2",{id:"2\u89c6\u89c9\u683c\u5f0f\u5316\u6a21\u578bvisual-formatting-model"},"2.\u89c6\u89c9\u683c\u5f0f\u5316\u6a21\u578b(visual formatting model)"))}u.isMDXComponent=!0}}]);