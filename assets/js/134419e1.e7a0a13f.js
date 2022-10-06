"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"throttle-debounce",title:"\u8282\u6d41\u548c\u9632\u6296",tags:["\u9632\u6296","\u8282\u6d41"]},i=void 0,o={unversionedId:"javascript/throttle-debounce",id:"javascript/throttle-debounce",title:"\u8282\u6d41\u548c\u9632\u6296",description:"1.\u8282\u6d41",source:"@site/docs/javascript/throttle-debounce.md",sourceDirName:"javascript",slug:"/javascript/throttle-debounce",permalink:"/myblog/docs/javascript/throttle-debounce",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/throttle-debounce.md",tags:[{label:"\u9632\u6296",permalink:"/myblog/docs/tags/\u9632\u6296"},{label:"\u8282\u6d41",permalink:"/myblog/docs/tags/\u8282\u6d41"}],version:"current",frontMatter:{id:"throttle-debounce",title:"\u8282\u6d41\u548c\u9632\u6296",tags:["\u9632\u6296","\u8282\u6d41"]},sidebar:"javascript",previous:{title:"\u5f02\u6b65\u811a\u672c",permalink:"/myblog/docs/javascript/out-script"},next:{title:"compose \u548c pipe \u51fd\u6570",permalink:"/myblog/docs/javascript/compose-pipe"}},c={},u=[{value:"1.\u8282\u6d41",id:"1\u8282\u6d41",level:2},{value:"1.1 \u57fa\u672c\u6982\u5ff5",id:"11-\u57fa\u672c\u6982\u5ff5",level:3},{value:"1.2 \u5e94\u7528\u573a\u666f",id:"12-\u5e94\u7528\u573a\u666f",level:3},{value:"1.3 \u4ee3\u7801\u5b9e\u73b0",id:"13-\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"2.\u9632\u6296",id:"2\u9632\u6296",level:2},{value:"2.1 \u57fa\u672c\u6982\u5ff5",id:"21-\u57fa\u672c\u6982\u5ff5",level:3},{value:"2.2 \u5e94\u7528\u573a\u666f",id:"22-\u5e94\u7528\u573a\u666f",level:3},{value:"2.3 \u4ee3\u7801\u5b9e\u73b0",id:"23-\u4ee3\u7801\u5b9e\u73b0",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u8282\u6d41"},"1.\u8282\u6d41"),(0,a.kt)("h3",{id:"11-\u57fa\u672c\u6982\u5ff5"},"1.1 \u57fa\u672c\u6982\u5ff5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"throttle(func, wait)")),(0,a.kt)("p",null,"\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5185\u53ea\u6267\u884c\u4e00\u6b21 => \u6bcf wait \u6beb\u79d2\u5185\u6700\u591a\u53ea\u8c03\u7528\u4e00\u6b21 func"),(0,a.kt)("p",null,"\ud83c\udf30 olu \u68a6\u91cc\u6253 moba \u6e38\u620f\uff1a\u8fde\u7eed\u4f7f\u7528\u6280\u80fd\uff0c\u9f9f\u9f9f\u72c2\u70b9\u6280\u80fd\uff0c\u4f46\u662f\u6280\u80fd\u6709 cd, cd \u5b8c\u6210\u4e4b\u524d\uff0c\u70b9\u4e86\u4e5f\u6ca1\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/JavaScript/throttle-flow.drawio.png",alt:"throttle-flow"})),(0,a.kt)("h3",{id:"12-\u5e94\u7528\u573a\u666f"},"1.2 \u5e94\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u641c\u7d22\u6846\u8f93\u5165\u65f6\u7684\u5b9e\u65f6\u8054\u60f3"),(0,a.kt)("li",{parentName:"ul"},"\u76d1\u542c scroll \u4e8b\u4ef6\u8ba1\u7b97\u4f4d\u7f6e\u4fe1\u606f")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u9694\u4e00\u5b9a\u65f6\u95f4\u89e6\u53d1\u4e00\u6b21")),(0,a.kt)("h3",{id:"13-\u4ee3\u7801\u5b9e\u73b0"},"1.3 \u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const throttle = (func, wait = 1000) => {\n  let lastTime = 0\n  let timer = null\n\n  return (...args) => {\n    if (timer) {\n      clearTimeout(timer)\n      timer = null\n    }\n\n    let nowTime = +new Date()\n\n    const remainWaitTime = wait - (nowTime - lastTime)\n\n    if (remainWaitTime <= 0) {\n      lastTime = nowTime\n      func(...args)\n    } else {\n      timer = setTimeout(() => {\n        lastTime = +new Date()\n        func(...args)\n        timer = null\n      }, remainWaitTime)\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"2\u9632\u6296"},"2.\u9632\u6296"),(0,a.kt)("h3",{id:"21-\u57fa\u672c\u6982\u5ff5"},"2.1 \u57fa\u672c\u6982\u5ff5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"debounce(func, wait)")),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u505c\u6b62\u64cd\u4f5c\u7684\u4e00\u5b9a\u65f6\u95f4\u4e4b\u540e\u6267\u884c\u4e00\u6b21 => \u81ea\u6700\u8fd1\u4e00\u6b21\u89e6\u53d1\u540e\u5ef6\u8fdf wait \u6beb\u79d2\u8c03\u7528 func"),(0,a.kt)("p",null,"\ud83c\udf30 olu \u68a6\u91cc\u6253 moba \u6e38\u620f\uff1a\u9f9f\u9f9f\u72b6\u6001\u4e0d\u597d\u9700\u8981\u56de\u57ce\u56de\u590d\u4e00\u4e0b\u72b6\u6001\uff0c\u4f46\u662f\u9f9f\u9f9f\u603b\u662f\u8bef\u89e6\u56de\u57ce\u952e\uff0c\u5bfc\u81f4\u8fde\u7eed\u89e6\u53d1\u56de\u57ce\uff0c\u6bcf\u6b21\u89e6\u53d1\u90fd\u4f1a\u91cd\u65b0\u8ba1\u65f6\u8bfb\u6761\uff0c\u76f4\u5230\u5012\u8ba1\u65f6\u7ed3\u675f\u624d\u80fd\u771f\u6b63\u56de\u6cc9\u6c34\u4fee\u517b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/JavaScript/debounce-flow.drawio.png",alt:"debounce-flow"})),(0,a.kt)("h3",{id:"22-\u5e94\u7528\u573a\u666f"},"2.2 \u5e94\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u65f6\u8f93\u5165\u5b8c\u7528\u6237\u540d\u540e\u68c0\u6d4b\u662f\u5426\u88ab\u5360\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u76d1\u542c resize \u4e8b\u4ef6\u8ba1\u7b97\u5c3a\u5bf8\u4fe1\u606f")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u591a\u5e94\u7528\u4e8e\u7528\u6237\u9ad8\u9891\u4e8b\u4ef6\uff0c\u7b49\u7528\u6237\u9ad8\u9891\u4e8b\u4ef6\u7ed3\u675f\uff0c\u518d\u8fdb\u884c\u4e8b\u4ef6\u64cd\u4f5c")),(0,a.kt)("h3",{id:"23-\u4ee3\u7801\u5b9e\u73b0"},"2.3 \u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const debounce = (func, wait = 1000) => {\n  let timer = null;\n  return (...args) => {\n    if (timer) {\n      clearTimeout(timer);\n      timer = null;\n    }\n\n    timer = setTimeout(() => {\n      func(...args);\n      timer = null;\n    }, wait);\n  };\n};\n")))}s.isMDXComponent=!0}}]);