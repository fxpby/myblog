"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),k=l,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={id:"browser-event-loop",title:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",tags:["\u6d4f\u89c8\u5668"]},o=void 0,p={unversionedId:"browser/browser-event-loop",id:"browser/browser-event-loop",title:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",description:"1.\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",source:"@site/docs/browser/browser-event-loop.md",sourceDirName:"browser",slug:"/browser/browser-event-loop",permalink:"/myblog/docs/browser/browser-event-loop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/browser/browser-event-loop.md",tags:[{label:"\u6d4f\u89c8\u5668",permalink:"/myblog/docs/tags/\u6d4f\u89c8\u5668"}],version:"current",frontMatter:{id:"browser-event-loop",title:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",tags:["\u6d4f\u89c8\u5668"]}},i={},u=[{value:"1.\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",id:"1\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",level:2},{value:"1.1 \u8fdb\u7a0b",id:"11-\u8fdb\u7a0b",level:3},{value:"1.2 \u7ebf\u7a0b",id:"12-\u7ebf\u7a0b",level:3},{value:"1.3 \u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b",id:"13-\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b",level:3},{value:"1.3.1 \u6d4f\u89c8\u5668\u8fdb\u7a0b",id:"131-\u6d4f\u89c8\u5668\u8fdb\u7a0b",level:4},{value:"1.3.2 \u7f51\u7edc\u8fdb\u7a0b",id:"132-\u7f51\u7edc\u8fdb\u7a0b",level:4},{value:"1.3.3 \u6e32\u67d3\u8fdb\u7a0b",id:"133-\u6e32\u67d3\u8fdb\u7a0b",level:4},{value:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u5de5\u4f5c\u6a21\u5f0f",id:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u5de5\u4f5c\u6a21\u5f0f",level:2},{value:"\u5f02\u6b65",id:"\u5f02\u6b65",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b"},"1.\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b"),(0,l.kt)("h3",{id:"11-\u8fdb\u7a0b"},"1.1 \u8fdb\u7a0b"),(0,l.kt)("p",null,"\u7a0b\u5e8f\u8fd0\u884c\u9700\u8981\u6709\u4e13\u5c5e\u7684",(0,l.kt)("strong",{parentName:"p"},"\u5185\u5b58\u7a7a\u95f4"),"\uff0c\u53ef\u4ee5\u7b80\u5355\u628a\u8fd9\u5757\u5185\u5b58\u7a7a\u95f4\u7406\u89e3\u4e3a\u8fdb\u7a0b"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u5e94\u7528\u81f3\u5c11\u6709\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u8fdb\u7a0b\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb"),(0,l.kt)("h3",{id:"12-\u7ebf\u7a0b"},"1.2 \u7ebf\u7a0b"),(0,l.kt)("p",null,"\u6709\u4e86\u8fdb\u7a0b\uff0c\u624d\u53ef\u4ee5\u8fd0\u884c\u7a0b\u5e8f\u4ee3\u7801\uff0c\u8fd0\u884c\u4ee3\u7801\u7684\u5bf9\u8c61\u5373\u7ebf\u7a0b"),(0,l.kt)("p",null,"\u4e00\u4e2a\u8fdb\u7a0b\u81f3\u5c11\u6709\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8fdb\u7a0b\u5f00\u542f\u540e\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u8fd0\u884c\u4ee3\u7801\uff0c\u8be5\u7ebf\u7a0b\u5373\u4e3a\u4e3b\u7ebf\u7a0b\uff0c\u4e3b\u7ebf\u7a0b\u7ed3\u675f\u610f\u5473\u7740\u6574\u4e2a\u7a0b\u5e8f\u7ed3\u675f"),(0,l.kt)("p",null,"\u7a0b\u5e8f\u5f80\u5f80\u9700\u8981\u540c\u65f6\u6267\u884c\u591a\u5757\u4ee3\u7801\uff0c\u4e3b\u7ebf\u7a0b\u4f1a\u542f\u52a8\u66f4\u591a\u7ebf\u7a0b\u6765\u6267\u884c\u76f8\u5173\u4ee3\u7801\uff0c\u6545",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u7ebf\u7a0b")),(0,l.kt)("h3",{id:"13-\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b"},"1.3 \u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u662f\u4e00\u4e2a\u591a\u8fdb\u7a0b\u591a\u7ebf\u7a0b\u7684\u5e94\u7528\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u4e92\u76f8\u5f71\u54cd\uff0c\u51cf\u5c11\u5d29\u6e83\u6982\u7387\uff0c\u542f\u52a8\u6d4f\u89c8\u5668\u540e\uff0c\u4f1a\u81ea\u52a8\u542f\u52a8\u591a\u4e2a\u8fdb\u7a0b"),(0,l.kt)("p",null,"\u5176\u4e2d\u8f83\u4e3a\u91cd\u8981\u7684\u662f",(0,l.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u8fdb\u7a0b"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u8fdb\u7a0b"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u8fdb\u7a0b")),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u7684\u4efb\u52a1\u7ba1\u7406\u5668\u67e5\u770b\u5f53\u524d\u7684\u6240\u6709\u8fdb\u7a0b\uff08\u66f4\u591a => \u66f4\u591a\u5de5\u5177 => \u4efb\u52a1\u7ba1\u7406\u5668\uff09"),(0,l.kt)("h4",{id:"131-\u6d4f\u89c8\u5668\u8fdb\u7a0b"},"1.3.1 \u6d4f\u89c8\u5668\u8fdb\u7a0b"),(0,l.kt)("p",null,"\u4e3b\u8981\u8d1f\u8d23\u754c\u9762\u5c55\u793a\u3001\u7528\u6237\u4ea4\u4e92\u3001\u5b50\u8fdb\u7a0b\u7ba1\u7406\uff08\u5305\u62ec\u540e\u9762\u7684\u7f51\u7edc\u8fdb\u7a0b\u548c\u6e32\u67d3\u8fdb\u7a0b\u7b49\uff09\u7b49\uff0c\u6d4f\u89c8\u5668\u8fdb\u7a0b\u5185\u90e8\u4f1a\u542f\u52a8\u591a\u4e2a\u7ebf\u7a0b\u5904\u7406\u4e0d\u540c\u4efb\u52a1"),(0,l.kt)("h4",{id:"132-\u7f51\u7edc\u8fdb\u7a0b"},"1.3.2 \u7f51\u7edc\u8fdb\u7a0b"),(0,l.kt)("p",null,"\u8d1f\u8d23\u52a0\u8f7d\u7f51\u7edc\u8d44\u6e90\uff0c\u7f51\u7edc\u8fdb\u7a0b\u5185\u90e8\u4f1a\u542f\u52a8\u591a\u4e2a\u7ebf\u7a0b\u5904\u7406\u4e0d\u540c\u4efb\u52a1"),(0,l.kt)("h4",{id:"133-\u6e32\u67d3\u8fdb\u7a0b"},"1.3.3 \u6e32\u67d3\u8fdb\u7a0b"),(0,l.kt)("p",null,"\u6e32\u67d3\u8fdb\u7a0b\u542f\u52a8\u540e\uff0c\u4f1a\u5f00\u542f\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u4e3b\u7ebf\u7a0b"),"\uff0c\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u8d1f\u8d23\u6267\u884c HTML\u3001CSS\u3001JS \u4ee3\u7801"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d4f\u89c8\u5668\u4f1a\u4e3a\u6bcf\u4e2a\u6807\u7b7e\u9875\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u6e32\u67d3\u8fdb\u7a0b\u6765\u4fdd\u8bc1\u4e0d\u540c\u6807\u7b7e\u9875\u4e4b\u95f4\u4e0d\u4f1a\u76f8\u4e92\u5f71\u54cd\uff08\u540e\u7eed\u53ef\u80fd\u4f1a\u6539\u6210\u4e00\u4e2a\u7ad9\u70b9\u4e00\u4e2a\u8fdb\u7a0b site-per-process\uff09"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md"},"https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md"))),(0,l.kt)("h2",{id:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u5de5\u4f5c\u6a21\u5f0f"},"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u5de5\u4f5c\u6a21\u5f0f"),(0,l.kt)("p",null,"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u975e\u5e38\u7e41\u5fd9\uff0c\u5904\u7406\u7684\u4efb\u52a1\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\ud83d\udc47\ud83c\udffb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u89e3\u6790 HTML"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u6790 CSS"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u6837\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u5e03\u5c40"),(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u56fe\u5c42"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u79d2\u753b\u9875\u9762 60 \u6b21(FPS)"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u5168\u5c40 JS \u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u8ba1\u65f6\u5668\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"......")),(0,l.kt)("p",null,"\u4e3b\u7ebf\u7a0b\u8fd8\u4f1a\u9047\u5230\u4e00\u4e2a\u81f4\u547d\u96be\u9898 - \u5982\u4f55\u8c03\u5ea6\u4efb\u52a1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u6b63\u5728\u6267\u884c\u4e00\u4e2a JS \u51fd\u6570\uff0c\u6267\u884c\u5230\u4e00\u534a\u7528\u6237\u70b9\u51fb\u6309\u94ae\uff0c\u7acb\u5373\u6267\u884c\u70b9\u51fb\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u5417\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u6b63\u5728\u6267\u884c\u4e00\u4e2a JS \u51fd\u6570\uff0c\u6267\u884c\u5230\u4e00\u534a\u67d0\u8ba1\u65f6\u5668\u521a\u597d\u5230\u8fbe\u65f6\u95f4\uff0c\u7acb\u5373\u6267\u884c\u56de\u8c03\u5417\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u6d4f\u89c8\u5668\u8fdb\u7a0b\u901a\u77e5\u201c\u7528\u6237\u70b9\u51fb\u4e86\u6309\u94ae\u201d\uff0c\u540c\u65f6\u67d0\u8ba1\u65f6\u5668\u521a\u597d\u5230\u8fbe\u65f6\u95f4\uff0c\u5e94\u8be5\u5904\u7406\u54ea\u4e2a\uff1f")),(0,l.kt)("p",null,"\u7b54\u6848\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u6392\u961f")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/browser/%E6%B8%B2%E6%9F%93%E4%B8%BB%E7%BA%BF%E7%A8%8B1.svg",alt:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b 1"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6700\u5f00\u59cb\u65f6\uff0c\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u8fdb\u5165\u4e00\u4e2a\u65e0\u9650\u5faa\u73af(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/chromium/chromium/blob/4ff7e1c7fcf513a8da886d4246637a1c5d163a44/base/message_loop/message_pump_default.cc#L35"},"https://github.com/chromium/chromium/blob/4ff7e1c7fcf513a8da886d4246637a1c5d163a44/base/message_loop/message_pump_default.cc#L35"),")"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u6b21\u5faa\u73af\u4f1a\u68c0\u67e5\u6d88\u606f\u961f\u5217\u4e2d\u662f\u5426\u6709\u4efb\u52a1\u5b58\u5728\uff1b\u5982\u679c\u6709\u5219\u53d6\u51fa\u7b2c\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\uff0c\u6267\u884c\u5b8c\u8fdb\u5165\u4e0b\u4e00\u5c42\u5faa\u73af\uff1b\u5982\u679c\u6ca1\u6709\u5219\u8fdb\u5165\u4f11\u7720\u72b6\u6001"),(0,l.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u6240\u6709\u7ebf\u7a0b\uff08\u5305\u62ec\u5176\u4ed6\u8fdb\u7a0b\u7684\u7ebf\u7a0b\uff09\u53ef\u4ee5\u968f\u65f6\u5411\u6d88\u606f\u961f\u5217\u6dfb\u52a0\u4efb\u52a1\u3002\u65b0\u4efb\u52a1\u4f1a\u52a0\u5230\u6d88\u606f\u961f\u5217\u7684\u672b\u5c3e\u3002\u5728\u6dfb\u52a0\u65b0\u4efb\u52a1\u65f6\uff0c\u5982\u679c\u4e3b\u7ebf\u7a0b\u662f\u4f11\u7720\u72b6\u6001\uff0c\u5219\u4f1a\u88ab\u5524\u9192\u7ee7\u7eed\u5faa\u73af\u62ff\u53d6\u4efb\u52a1")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u8fc7\u7a0b\u5373",(0,l.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u5faa\u73af\uff08\u6d88\u606f\u5faa\u73af\uff09")),(0,l.kt)("h2",{id:"\u5f02\u6b65"},"\u5f02\u6b65"),(0,l.kt)("p",null,"\u4ee3\u7801\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u9047\u5230\u65e0\u6cd5\u7acb\u5373\u5904\u7406\u7684\u4efb\u52a1\uff0c\u5982"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u65f6\u5b8c\u6210\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 - setTimeout\u3001setInterval"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u901a\u4fe1\u5b8c\u6210\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 - XHR\u3001Fetch"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u64cd\u4f5c\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 - addEventListener")),(0,l.kt)("p",null,"\u5982\u679c\u8ba9\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u7b49\u5f85\u8fd9\u4e9b\u4efb\u52a1\u7684\u65f6\u673a\u5230\u8fbe\uff0c\u5c31\u4f1a\u5bfc\u81f4\u4e3b\u7ebf\u7a0b\u957f\u671f\u5904\u4e8e",(0,l.kt)("strong",{parentName:"p"},"\u963b\u585e"),"\u72b6\u6001\uff0c\u8fdb\u800c\u53ef\u80fd\u6d4f\u89c8\u5668\u5361\u6b7b\u3002"),(0,l.kt)("p",null,"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u4e0a\u9762\u6709\u63d0\u5230\u4efb\u52a1\u7e41\u91cd\uff0c\u662f\u7ecf\u4e0d\u4f4f\u8fd9\u6837\u963b\u585e\u7684\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"\u5f02\u6b65"),"\u7684\u65b9\u5f0f\u5904\u7406"))}c.isMDXComponent=!0}}]);