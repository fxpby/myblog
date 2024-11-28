"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5660],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),y=o,d=m["".concat(i,".").concat(y)]||m[y]||u[y]||a;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={id:"1-async-queues",title:"\u8bbe\u8ba1\u4e00\u4e2a\u5f02\u6b65\u961f\u5217\uff0c\u5e76\u53d1\u6570\u91cf\u4e3an",tags:["\u5f02\u6b65"]},c=void 0,s={unversionedId:"javascript/promise/async-concurrency-control/1-async-queues",id:"javascript/promise/async-concurrency-control/1-async-queues",title:"\u8bbe\u8ba1\u4e00\u4e2a\u5f02\u6b65\u961f\u5217\uff0c\u5e76\u53d1\u6570\u91cf\u4e3an",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/javascript/promise/async-concurrency-control/1-async-queues.md",sourceDirName:"javascript/promise/async-concurrency-control",slug:"/javascript/promise/async-concurrency-control/1-async-queues",permalink:"/myblog/docs/javascript/promise/async-concurrency-control/1-async-queues",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/promise/async-concurrency-control/1-async-queues.md",tags:[{label:"\u5f02\u6b65",permalink:"/myblog/docs/tags/\u5f02\u6b65"}],version:"current",sidebarPosition:1,frontMatter:{id:"1-async-queues",title:"\u8bbe\u8ba1\u4e00\u4e2a\u5f02\u6b65\u961f\u5217\uff0c\u5e76\u53d1\u6570\u91cf\u4e3an",tags:["\u5f02\u6b65"]}},i={},l=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,"\u5b9e\u73b0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"taskpool")," \u7c7b\uff0c\u5176\u81f3\u5c11\u5177\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," \u65b9\u6cd5\u548c\u6700\u5927\u5e76\u53d1\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"max"),"\uff0c\u8be5 ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," \u65b9\u6cd5\u63a5\u6536\u51fd\u6570(\u8fd4\u56de\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"promise"),")\uff0c\u5f53\u5f53\u524d\u6267\u884c\u7684\u4efb\u52a1\u6570\u5c0f\u4e8e\u8bbe\u5b9a\u503c ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," \u65f6\uff0c\u7acb\u5373\u6267\u884c\uff0c\u5927\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"max"),"\uff0c\u5219\u7b49\u5f85\u4efb\u52a1\u7a7a\u95f2\u65f6\u6267\u884c\u8be5\u4efb\u52a1\uff0c\u6a21\u7248\u4ee3\u7801\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class TaskPool {\n  // \u5728\u6b64\u5904\u5199\u4e0b\u4f60\u7684\u5b9e\u73b0\n}\n\nconst taskpool = new TaskPool(2);\n\nfor (let i = 0; i < 10; i++) {\n    const task = () => new Promise(resolve => {\n        // \u8fd9\u91cc i \u7684\u503c\u4e5f\u662f\u4ee5\u524d\u975e\u5e38\u9ad8\u9891\u7684\u95ed\u5305\u9898\u54e6\n        setTimeout(() => {\n            console.log(`task${i} complete`);\n            resolve(`task${i}`);\n        }, 2000);\n    });\n    taskpool.add(task);\n}\n\n// \u9884\u671f\u8f93\u51fa\n// 2s \u540e\n// task0 complete\n// task1 complete\n// \u518d 2s \u540e\n// task2 complete\n// task3 complete\n// \u518d 2s \u540e\n// task4 complete\n// task5 complete\n// ...\n// task8 complete\n// task9 complete\n")))}u.isMDXComponent=!0}}]);