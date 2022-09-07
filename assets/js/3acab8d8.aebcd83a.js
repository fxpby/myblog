"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=l,c=s["".concat(p,".").concat(d)]||s[d]||k[d]||r;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={id:"memory",title:"\u5185\u5b58\u7ba1\u7406",tags:["\u5185\u5b58"]},i=void 0,o={unversionedId:"javascript/memory",id:"javascript/memory",title:"\u5185\u5b58\u7ba1\u7406",description:"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58",source:"@site/docs/javascript/memory.md",sourceDirName:"javascript",slug:"/javascript/memory",permalink:"/myblog/docs/javascript/memory",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/memory.md",tags:[{label:"\u5185\u5b58",permalink:"/myblog/docs/tags/\u5185\u5b58"}],version:"current",frontMatter:{id:"memory",title:"\u5185\u5b58\u7ba1\u7406",tags:["\u5185\u5b58"]},sidebar:"javascript",next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/myblog/docs/javascript/data-element"}},p={},m=[{value:"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58",id:"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58",level:2},{value:"\u51cf\u5c11\u6d4f\u89c8\u5668\u8d1f\u62c5",id:"\u51cf\u5c11\u6d4f\u89c8\u5668\u8d1f\u62c5",level:3},{value:"Node \u7aef - \u505a\u670d\u52a1",id:"node-\u7aef---\u505a\u670d\u52a1",level:3},{value:"\u5185\u5b58\u7684\u6570\u636e\u5b58\u50a8",id:"\u5185\u5b58\u7684\u6570\u636e\u5b58\u50a8",level:2},{value:"\u6808\u5185\u5b58",id:"\u6808\u5185\u5b58",level:3},{value:"\u5806\u5185\u5b58",id:"\u5806\u5185\u5b58",level:3},{value:"\u5b58\u50a8\u666e\u901a\u7c7b\u578b\u7684\u53d8\u91cf - \u6808\u5185\u5b58",id:"\u5b58\u50a8\u666e\u901a\u7c7b\u578b\u7684\u53d8\u91cf---\u6808\u5185\u5b58",level:3},{value:"\u5b58\u50a8\u5f15\u7528\u7c7b\u578b\u7684\u53d8\u91cf - \u5806\u6808",id:"\u5b58\u50a8\u5f15\u7528\u7c7b\u578b\u7684\u53d8\u91cf---\u5806\u6808",level:3},{value:"V8 \u5185\u5b58\u7684\u7ba1\u7406",id:"v8-\u5185\u5b58\u7684\u7ba1\u7406",level:2},{value:"V8\u5230\u5e95\u6709\u591a\u5927",id:"v8\u5230\u5e95\u6709\u591a\u5927",level:3},{value:"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3",id:"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3",level:3},{value:"\u65b0\u751f\u4ee3",id:"\u65b0\u751f\u4ee3",level:4},{value:"\u8001\u751f\u4ee3",id:"\u8001\u751f\u4ee3",level:4},{value:"Mark-Sweep - \u6807\u8bb0\u6e05\u9664",id:"mark-sweep---\u6807\u8bb0\u6e05\u9664",level:5},{value:"Mark-Compact - \u6574\u7406",id:"mark-compact---\u6574\u7406",level:5},{value:"Incremental Marking - \u589e\u91cf\u6807\u8bb0",id:"incremental-marking---\u589e\u91cf\u6807\u8bb0",level:5},{value:"\u4ec0\u4e48\u65f6\u5019\u89e6\u53d1\u56de\u6536",id:"\u4ec0\u4e48\u65f6\u5019\u89e6\u53d1\u56de\u6536",level:3},{value:"1.\u6267\u884c\u5b8c\u4e00\u6b21\u4ee3\u7801",id:"1\u6267\u884c\u5b8c\u4e00\u6b21\u4ee3\u7801",level:4},{value:"2.\u5185\u5b58\u4e0d\u8db3",id:"2\u5185\u5b58\u4e0d\u8db3",level:4},{value:"\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u53ef\u4ee5\u56de\u6536\u7684\u6807\u51c6",id:"\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u53ef\u4ee5\u56de\u6536\u7684\u6807\u51c6",level:3},{value:"\u5982\u4f55\u68c0\u6d4b\u5185\u5b58",id:"\u5982\u4f55\u68c0\u6d4b\u5185\u5b58",level:3},{value:"\u6d4f\u89c8\u5668",id:"\u6d4f\u89c8\u5668",level:4},{value:"Node",id:"node",level:4},{value:"\u5982\u4f55\u4f18\u5316\u5185\u5b58",id:"\u5982\u4f55\u4f18\u5316\u5185\u5b58",level:3},{value:"\u4e3a\u4ec0\u4e48 v8 \u8981\u8bbe\u8ba1\u4e3a 1.4g",id:"\u4e3a\u4ec0\u4e48-v8-\u8981\u8bbe\u8ba1\u4e3a-14g",level:3}],u={toc:m};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58"},"\u4e3a\u4ec0\u4e48\u8981\u7ba1\u7406\u5185\u5b58"),(0,l.kt)("h3",{id:"\u51cf\u5c11\u6d4f\u89c8\u5668\u8d1f\u62c5"},"\u51cf\u5c11\u6d4f\u89c8\u5668\u8d1f\u62c5"),(0,l.kt)("p",null,"\u5185\u5b58\u8fc7\u5927\u4f1a\u8ba9\u6d4f\u89c8\u5668\u538b\u529b\u8fc7\u5927\uff0c\u5bfc\u81f4\u6d4f\u89c8\u5668\u5361\u987f"),(0,l.kt)("h3",{id:"node-\u7aef---\u505a\u670d\u52a1"},"Node \u7aef - \u505a\u670d\u52a1"),(0,l.kt)("p",null,"\u5185\u5b58\u5982\u679c\u4e0d\u591f\uff0c\u670d\u52a1\u5c31\u4f1a\u4e2d\u65ad"),(0,l.kt)("h2",{id:"\u5185\u5b58\u7684\u6570\u636e\u5b58\u50a8"},"\u5185\u5b58\u7684\u6570\u636e\u5b58\u50a8"),(0,l.kt)("h3",{id:"\u6808\u5185\u5b58"},"\u6808\u5185\u5b58"),(0,l.kt)("p",null,"\u7ebf\u6027\u7684\uff0c\u540e\u8fdb\u5148\u51fa"),(0,l.kt)("h3",{id:"\u5806\u5185\u5b58"},"\u5806\u5185\u5b58"),(0,l.kt)("p",null,"\u975e\u7ebf\u6027\uff0c\u4e0d\u8fde\u7eed\u7684"),(0,l.kt)("h3",{id:"\u5b58\u50a8\u666e\u901a\u7c7b\u578b\u7684\u53d8\u91cf---\u6808\u5185\u5b58"},"\u5b58\u50a8\u666e\u901a\u7c7b\u578b\u7684\u53d8\u91cf - \u6808\u5185\u5b58"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let a = 1\nlet b = 2\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5148\u5165\u6808 a-123"),(0,l.kt)("li",{parentName:"ul"},"\u518d\u5165\u6808 b-10")),(0,l.kt)("p",null,"\u53d8\u91cf\u76f4\u63a5\u6307\u5411\u503c\uff0c\u53d8\u91cf\u548c\u503c\u653e\u5728\u4e00\u8d77"),(0,l.kt)("h3",{id:"\u5b58\u50a8\u5f15\u7528\u7c7b\u578b\u7684\u53d8\u91cf---\u5806\u6808"},"\u5b58\u50a8\u5f15\u7528\u7c7b\u578b\u7684\u53d8\u91cf - \u5806\u6808"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let a = { a1: 123 }\nlet b = a\nlet c = [1, 2, 3]\nlet d = function() { console.log(123) }\n{ a2: 666 }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f15\u7528\u7c7b\u578b\u53d8\u91cf a \u7684\u65f6\u5019\uff0c\u5148\u5728\u5806\u5185\u5b58\u4e2d\u5f00\u8f9f\u4e00\u4e2a\u5730\u5740\u5b58\u653e\u53d8\u91cf\uff08\u53d8\u91cf\u672c\u4f53\uff09\uff0c\u518d\u628a\u8fd9\u4e2a\u5730\u5740\u8d4b\u503c\u7ed9\u53d8\u91cf\uff0c\u5373\u5165\u6808 a-0x00000000"),(0,l.kt)("li",{parentName:"ul"},"a b \u6307\u5411\u540c\u4e00\u5730\u5740\uff0c\u6240\u4ee5\u5165\u6808 b-0x00000000"),(0,l.kt)("li",{parentName:"ul"},"\u540c\u58f0\u660e a, \u5165\u6808 c-0x00000005"),(0,l.kt)("li",{parentName:"ul"},"\u540c\u58f0\u660e a, \u5165\u6808 d-0x00000008"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5b9a\u4e49\u4e00\u4e2a\u5f15\u7528\u7c7b\u578b\uff0c\u5728\u5806\u5185\u5b58\u4e2d\u5f00\u8f9f\u4e00\u4e2a\u5730\u5740\u5b58\u653e\u53d8\u91cf\uff08\u53d8\u91cf\u672c\u4f53\uff09")),(0,l.kt)("h2",{id:"v8-\u5185\u5b58\u7684\u7ba1\u7406"},"V8 \u5185\u5b58\u7684\u7ba1\u7406"),(0,l.kt)("h3",{id:"v8\u5230\u5e95\u6709\u591a\u5927"},"V8\u5230\u5e95\u6709\u591a\u5927"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"64 \u4f4d"),"\u4e0b\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"1.4G\uff08\u6807\u51c6\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"32 \u4f4d"),"\u4e0b\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"700MB \uff08\u6807\u51c6\uff09")),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e\u6d4f\u89c8\u5668\u4e0d\u540c\u4f1a\u6709\u4e9b\u8bb8\u6269\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u7248\u672c Node \u4e5f\u4f1a\u6709\u81ea\u52a8\u8c03\u7528 C++ \u5185\u5b58\u8fdb\u884c\u5185\u6269\u5bb9\uff08\u52a8\u6001\u6269\u5bb9\uff09")),(0,l.kt)("h3",{id:"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3"},"\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3"),(0,l.kt)("p",null,"\u6bd4\u5982\u6211\u4eec ",(0,l.kt)("inlineCode",{parentName:"p"},"64 \u4f4d")," ",(0,l.kt)("inlineCode",{parentName:"p"},"1.4G")," \u7684\u5185\u5b58\uff0c\u5206\u4e3a\u4e24\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\uff1a\u77ed\u65f6\u95f4\u5b58\u6d3b\u7684\u65b0\u53d8\u91cf\u4f1a\u5b58\u5728\u65b0\u751f\u4ee3\u4e2d\uff0c\u65b0\u751f\u4ee3\u7684\u5185\u5b58\u91cf\u6781\u5c0f\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"64 \u4f4d"),"\u4e0b\u5927\u6982\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"32MB"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"32 \u4f4d"),"\u5219\u51cf\u534a\u3002\u65b0\u751f\u4ee3\u5e73\u5747\u5206\u6210\u4e24\u5757\u76f8\u7b49\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u53eb\u505a",(0,l.kt)("inlineCode",{parentName:"li"},"semispace"),"\uff0c\u6bcf\u5757\u5185\u5b58\u5927\u5c0f",(0,l.kt)("inlineCode",{parentName:"li"},"8MB\uff0832\u4f4d\uff09"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"16MB\uff0864\u4f4d\uff09")),(0,l.kt)("li",{parentName:"ul"},"\u8001\u751f\u4ee3\uff1a\u5b58\u6d3b\u65f6\u95f4\u6bd4\u8f83\u957f\u7684\u53d8\u91cf\u4f1a\u8f6c\u5b58\u5230\u8001\u751f\u4ee3\uff0c\u8001\u751f\u4ee3\u5360\u636e\u4e86\u51e0\u4e4e\u6240\u6709\u5185\u5b58\uff08\u5e38\u9a7b\uff09\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"64 \u4f4d"),"\u4e0b\u5927\u6982\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"1400MB"))),(0,l.kt)("h4",{id:"\u65b0\u751f\u4ee3"},"\u65b0\u751f\u4ee3"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u65b0\u751f\u4ee3"),"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Scavenge GC \u5783\u573e\u56de\u6536\u7b97\u6cd5"),"\uff0c\u8be5\u7b97\u6cd5\u5b9e\u73b0\u65f6\u4e3b\u8981\u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cheney \u7b97\u6cd5"),"\u3002\u4e3b\u8981\u5904\u7406",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b58\u6d3b\u5468\u671f\u77ed"),"\u7684\u5bf9\u8c61\u4e2d\u7684\u53ef\u8bbf\u95ee\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Cheney \u7b97\u6cd5"),"\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"semi-space \u534a\u7a7a\u95f4"),"\u7684\u8bbe\u8ba1\uff0c\u5c06\u5185\u5b58\u4e00\u5206\u4e3a\u4e8c\uff0c\u59cb\u7ec8\u53ea\u4f7f\u7528\u4e00\u534a\u7684\u7a7a\u95f4\uff0c\u4e00\u5757 ",(0,l.kt)("inlineCode",{parentName:"p"},"From-Space")," \u662f\u4f7f\u7528\u7a7a\u95f4\uff0c\u53e6\u4e00\u5757 ",(0,l.kt)("inlineCode",{parentName:"p"},"To-Space")," \u662f\u7a7a\u95f2\u7a7a\u95f4"),(0,l.kt)("p",null,"\u521d\u59cb\u7684\u65f6\u5019 to \u7a7a\u95f4\u662f\u7a7a\u7684\uff0c\u65b0\u5b9a\u4e49\u7684\u53d8\u91cf\u90fd\u5728 from \u7a7a\u95f4\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"|<- \u65b0\u751f\u4ee3 ->|<-           \u8001\u751f\u4ee3            ->|\n|-----|-----|--------------------------------|\n From   To\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5148\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"From"),"\uff08\u65b0\u751f\u4ee3\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"From")," \u4e2d\u5206\u914d\u5bf9\u8c61\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u7b49\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"From")," \u7a7a\u95f4\u4f7f\u7528\u5230\u4e00\u5b9a\u7a0b\u5ea6\u4e4b\u540e\uff0c\u65b0\u751f\u4ee3\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"GC")," \u4f1a\u542f\u52a8\uff08\u5728\u5783\u573e\u56de\u6536\u9636\u6bb5\u68c0\u67e5\u5e76\u6309\u9700\u590d\u5236 ",(0,l.kt)("inlineCode",{parentName:"li"},"From")," \u4e2d\u53ef\u8bbf\u95ee\u5bf9\u8c61\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"To")," \u6216\u8001\u751f\u4ee3\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"From")," \u91ca\u653e\u4e0d\u53ef\u8bbf\u95ee\u5bf9\u8c61\u5360\u7528\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u8fbe\u5230\u6e05\u7a7a\u6548\u679c\uff0c\u56de\u6536\u5b8c\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u518d\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"From")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"To")," \u7684\u8fdb\u884c\u4e92\u6362\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"From => To"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"To => From"))),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u5df2\u7ecf\u7ecf\u5386\u8fc7\u4e00\u6b21\u56de\u6536\uff0c\u5c31\u9700\u8981\u8fdb\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"\u8001\u751f\u4ee3")),(0,l.kt)("p",null,"\u65b0\u751f\u4ee3\u53d1\u73b0\u672c\u6b21\u590d\u5236\u540e\uff0c\u4f1a\u5360\u7528\u8d85\u8fc7 25% \u7684 To \u7a7a\u95f4\uff0c\u66f4\u66ff\u65f6\u5c31\u76f4\u63a5\u8fdb\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"\u8001\u751f\u4ee3")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u603b\u7ed3\u5c31\u662f\u91cd\u590d \u590d\u5236-\u6e05\u7a7a \u7684\u8fc7\u7a0b")),(0,l.kt)("h4",{id:"\u8001\u751f\u4ee3"},"\u8001\u751f\u4ee3"),(0,l.kt)("h5",{id:"mark-sweep---\u6807\u8bb0\u6e05\u9664"},"Mark-Sweep - \u6807\u8bb0\u6e05\u9664"),(0,l.kt)("p",null,"\u6807\u8bb0\u6e05\u9664\uff0c\u5206\u4e3a\u6807\u8bb0\u548c\u6e05\u9664\u4e24\u4e2a\u9636\u6bb5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u9636\u6bb5\uff1a\u904d\u5386\u6240\u6709\u53ef\u8bbf\u95ee\u5bf9\u8c61\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"GC")," \u4f1a\u4ece\u4e00\u7ec4\u5df2\u77e5\u7684\u5bf9\u8c61\u6307\u9488\uff08\u79f0\u4e3a\u6839\u96c6\uff0c\u5305\u62ec\u6267\u884c\u5806\u6808\u548c\u5168\u5c40\u5bf9\u8c61\u7b49\uff09\u4e2d\uff0c\u8fdb\u884c\u9012\u5f52\u6807\u8bb0\u53ef\u8bbf\u95ee\u5b58\u6d3b\u7684\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u6e05\u9664\u9636\u6bb5\uff1a\u6e05\u9664\u6ca1\u6709\u88ab\u6807\u8bb0\u7684\u5bf9\u8c61\uff0c\u5c06\u4e0d\u53ef\u8bbf\u95ee\u7684\u5bf9\u8c61\u7559\u4e0b\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u6dfb\u52a0\u5230\u7a7a\u95f2\u94fe\u8868\u7684\u8fc7\u7a0b\u3002\u672a\u6765\u4e3a\u65b0\u5bf9\u8c61\u5206\u914d\u5185\u5b58\u65f6\uff0c\u53ef\u4ee5\u4ece\u7a7a\u95f2\u94fe\u8868\u4e2d\u8fdb\u884c\u518d\u5206\u914d")),(0,l.kt)("h5",{id:"mark-compact---\u6574\u7406"},"Mark-Compact - \u6574\u7406"),(0,l.kt)("p",null,"\u4e3b\u8981\u5904\u7406",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b58\u6d3b\u5468\u671f\u957f"),"\u7684\u5bf9\u8c61\u4e2d\u7684\u4e0d\u53ef\u8bbf\u95ee\u5bf9\u8c61, \u4e3b\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cheney \u590d\u5236\u7b97\u6cd5")),(0,l.kt)("p",null,"\u6e05\u9664\u5b8c\u5bf9\u8c61\u540e\uff0c\u5185\u5b58\u5185\u90e8\u7684\u5bf9\u8c61\u5c31\u4e0d\u8fde\u7eed\u4e86\uff0c\u8fd9\u6837\u65e0\u6cd5\u5f88\u597d\u7684\u5229\u7528\u5185\u5b58\u5730\u5740\uff08\u9700\u8981\u8fde\u7eed\u7684\u5185\u5b58\uff09\uff0c\u6bd4\u5982\u5927\u7684\u5bf9\u8c61\u65e0\u6cd5\u585e\u5165\u521a\u91ca\u653e\u7684\u5c0f\u5185\u5b58\u4e2d\uff0c\u63d0\u524d\u89e6\u53d1\u5783\u573e\u56de\u6536"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Mark-Compact")," \u79fb\u52a8\u8fd9\u4e9b\u5bf9\u8c61\uff0c\u8ba9\u4ed6\u4eec\u53d8\u7d27\u51d1\uff0c\u5373\u6807\u8bb0\u6e05\u9664\u5bf9\u8c61\u540e\u5185\u5b58\u7a7a\u95f4\u4f1a\u51fa\u73b0\u5185\u5b58\u788e\u7247\uff0c\u5f53\u788e\u7247\u8d85\u8fc7\u4e00\u5b9a\u9650\u5236\u540e\u4f1a\u542f\u52a8\u538b\u7f29\u7b97\u6cd5\uff0c\u5c06\u5b58\u6d3b\u7684\u53ef\u8bbf\u95ee\u5bf9\u8c61\u5411\u5185\u5b58\u4e00\u7aef\u79fb\u52a8\uff0c\u76f4\u5230\u6240\u6709\u5bf9\u8c61\u90fd\u79fb\u52a8\u5b8c\u6210\uff0c\u7136\u540e\u6e05\u7406\u4e0d\u9700\u8981\u7684\u5185\u5b58"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u65b0\u751f\u4ee3\u4e2d\u5360\u5c11\u6570\u7684\u662f\u53ef\u8bbf\u95ee\u5bf9\u8c61\uff0c\u8001\u751f\u4ee3\u4e2d\u5360\u5c11\u6570\u7684\u662f\u4e0d\u53ef\u8bbf\u95ee\u5bf9\u8c61\uff0c\u6240\u4ee5 Scavenge GC \u5783\u573e\u56de\u6536\u7b97\u6cd5 \u548c Mark-Compact \u7b97\u6cd5\u914d\u5408\u5341\u5206\u9ad8\u6548")),(0,l.kt)("h5",{id:"incremental-marking---\u589e\u91cf\u6807\u8bb0"},"Incremental Marking - \u589e\u91cf\u6807\u8bb0"),(0,l.kt)("h3",{id:"\u4ec0\u4e48\u65f6\u5019\u89e6\u53d1\u56de\u6536"},"\u4ec0\u4e48\u65f6\u5019\u89e6\u53d1\u56de\u6536"),(0,l.kt)("h4",{id:"1\u6267\u884c\u5b8c\u4e00\u6b21\u4ee3\u7801"},"1.\u6267\u884c\u5b8c\u4e00\u6b21\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let a = 1\nlet b = 2\nconsole.log(a)\nsetTimeout(() => {\n  b++\n  console.log(b)\n  // \u56de\u6536\u4e00\u6b21\n}, 2000)\n// \u56de\u6536\u4e00\u6b21\n")),(0,l.kt)("h4",{id:"2\u5185\u5b58\u4e0d\u8db3"},"2.\u5185\u5b58\u4e0d\u8db3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let size = 30 * 1024 * 1024\nlet arr1 = new Array(size)\ntestMemory()\nlet arr2 = new Array(size)\ntestMemory()\nlet arr3 = new Array(size)\ntestMemory()\nlet arr4 = new Array(size)\ntestMemory()\nlet arr5 = new Array(size)\ntestMemory()\nlet arr6 = new Array(size)\ntestMemory()\n")),(0,l.kt)("h3",{id:"\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u53ef\u4ee5\u56de\u6536\u7684\u6807\u51c6"},"\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u53ef\u4ee5\u56de\u6536\u7684\u6807\u51c6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5168\u5c40\u53d8\u91cf\u76f4\u5230\u7a0b\u5e8f\u6267\u884c\u5b8c\u6bd5\uff0c\u624d\u4f1a\u56de\u6536"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"\u666e\u901a\u53d8\u91cf\u5931\u53bb\u5f15\u7528\u65f6\u4f1a\u88ab\u56de\u6536")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function testMemory() {\n  let memory = process.memoryUsage().heapUsed\n  console.log(memory / 1024 / 1024 + 'mb')\n}\n\nlet size = 30 * 1024 * 1024\nlet arr1 = new Array(size)\ntestMemory()\n(function() {\n  let arr2 = new Array(size)\n  testMemory()\n  let arr3 = new Array(size)\n  testMemory()\n  let arr4 = new Array(size)\n  testMemory()\n})()\nlet arr5 = new Array(size)\ntestMemory()\nlet arr6 = new Array(size)\ntestMemory()\n\n// node --max-old-space-size=1000 xx.js \u6307\u5b9a\u6700\u5927\u8001\u751f\u4ee3\u7a7a\u95f4\n")),(0,l.kt)("h3",{id:"\u5982\u4f55\u68c0\u6d4b\u5185\u5b58"},"\u5982\u4f55\u68c0\u6d4b\u5185\u5b58"),(0,l.kt)("h4",{id:"\u6d4f\u89c8\u5668"},"\u6d4f\u89c8\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.performance.memory\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"MemoryInfo \n{\n  totalJSHeapSize: 95959081, \n  usedJSHeapSize: 90730505, \n  jsHeapSizeLimit: 4294705152\n}\n")),(0,l.kt)("h4",{id:"node"},"Node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"process.memoryUsage()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"> process.memoryUsage()\n{\n  rss: 35344384, // node \u603b\u5360\u7528\u5185\u5b58\uff0c\u4e0d\u4ec5\u6709 v8\u5f15\u64ce\u5360\u7528,\u8fd8\u6709 C++ \u7a0b\u5e8f\u5360\u7528\n  heapTotal: 4784128, // v8 \u5f15\u64ce\u603b\u5185\u5b58\n  heapUsed: 3360920, // v8 \u5f15\u64ce\u4f7f\u7528\u5185\u5b58\n  external: 1582927, // C++ \u5206\u914d\u7ed9 v8 \u7684\u989d\u5916\u5185\u5b58\n  arrayBuffers: 9405 // node 14 \u7248\u672c\u540e\u7684\u65b0\u7279\u6027\uff0carrayBuffers \u7684\u5360\u7528\u5185\u5b58\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u624b\u52a8\u89e6\u53d1\u5783\u573e\u56de\u6536\uff1aglobal.gc"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5185\u5b58\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"--max-old-space-size \u8001\u751f\u4ee3\u7a7a\u95f4\u6700\u5927\u503c"),(0,l.kt)("li",{parentName:"ul"},"--max-new-space-space \u65b0\u751f\u4ee3\u7a7a\u95f4\u6700\u5927\u503c")))),(0,l.kt)("h3",{id:"\u5982\u4f55\u4f18\u5316\u5185\u5b58"},"\u5982\u4f55\u4f18\u5316\u5185\u5b58"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u4e0d\u8981\u5b9a\u4e49\u5168\u5c40\u53d8\u91cf\uff0c\u5b9a\u4e49\u540e\u9700\u8981\u53ca\u65f6\u624b\u52a8\u91ca\u653e"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u95ed\u5305")),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48-v8-\u8981\u8bbe\u8ba1\u4e3a-14g"},"\u4e3a\u4ec0\u4e48 v8 \u8981\u8bbe\u8ba1\u4e3a 1.4g"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1.4g \u5bf9\u4e8e\u6d4f\u89c8\u5668\u591f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u56de\u6536\u662f\u963b\u585e\u5f0f\u7684\uff0c\u5373\u5783\u573e\u56de\u6536\u65f6\u4f1a\u7ec8\u7aef\u4ee3\u7801\u6267\u884c")))}k.isMDXComponent=!0}}]);