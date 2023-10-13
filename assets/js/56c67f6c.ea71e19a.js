"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={id:"1-exercise-serial-request",title:"\u8bf7\u6c42\u4e32\u884c\u95ee\u9898",tags:["\u4e32\u884c"]},s=void 0,l={unversionedId:"javascript/promise/serial/1-exercise-serial-request",id:"javascript/promise/serial/1-exercise-serial-request",title:"\u8bf7\u6c42\u4e32\u884c\u95ee\u9898",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/javascript/promise/serial/1-exercise-serial-request.md",sourceDirName:"javascript/promise/serial",slug:"/javascript/promise/serial/1-exercise-serial-request",permalink:"/myblog/docs/javascript/promise/serial/1-exercise-serial-request",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/promise/serial/1-exercise-serial-request.md",tags:[{label:"\u4e32\u884c",permalink:"/myblog/docs/tags/\u4e32\u884c"}],version:"current",sidebarPosition:1,frontMatter:{id:"1-exercise-serial-request",title:"\u8bf7\u6c42\u4e32\u884c\u95ee\u9898",tags:["\u4e32\u884c"]},sidebar:"javascript",previous:{title:"\u5b9e\u73b0 apply/call/bind",permalink:"/myblog/docs/javascript/apply-call-bind"}},i={},c=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u65b9\u6cd5\u4e00\uff1afunction",id:"\u65b9\u6cd5\u4e00function",level:2},{value:"\u65b9\u6cd5\u4e8c\uff1aclass",id:"\u65b9\u6cd5\u4e8cclass",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"createFlow"),"\u65b9\u6cd5\uff0c\u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u4e8c\u7ef4"),"\u6570\u7ec4\u51fd\u6570\uff0c\u5176\u4e2d\u51fd\u6570\u53ef\u4ee5\u662f\u540c\u6b65\uff0c\u4e5f\u53ef\u4ee5\u662f\u5f02\u6b65\uff0c\u751a\u81f3\u53ef\u4ee5\u662f\u5d4c\u5957Flow\u548c\u6570\u7ec4\uff0c\u8981\u6c42\u6309\u7167\u6570\u7ec4\u987a\u5e8f\u8f93\u51fa\u7ed3\u679c"),(0,o.kt)("h2",{id:"\u65b9\u6cd5\u4e00function"},"\u65b9\u6cd5\u4e00\uff1afunction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const sleep = (timer) => new Promise(resolve => setTimeout(resolve, timer))\n\nconst createFlow = (arr = []) => {\n  // \u4e32\u884c\uff0c\u6241\u5e73\u5316\n  const requestList = [...arr].flat()\n  const run = async (cb) => {\n    for (let i = 0; i < requestList.length; i += 1) {\n      const task = requestList[i]\n      if (typeof task === 'function') {\n        await task()\n      } else if (task && task.isFlow) {\n        await task.run()\n      }\n    }\n    cb && cb()\n  }\n  return {\n    run,\n    // \u652f\u6301\u5d4c\u5957\n    isFlow: true\n  }\n}\n\ncreateFlow([\n  () => console.log(1),\n  () => sleep(400).then(() => console.log(2)),\n  [\n    () => console.log(3),\n    () => sleep(300).then(() => console.log(4))\n  ],\n  createFlow([\n    () => console.log(5),\n    () => sleep(200).then(() => console.log(6))\n  ])\n]).run(() => {\n  console.log(7)\n})\n")),(0,o.kt)("h2",{id:"\u65b9\u6cd5\u4e8cclass"},"\u65b9\u6cd5\u4e8c\uff1aclass"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"class")," \u53ef\u4ee5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"instanceof")," \u6765\u5224\u65ad\u662f\u5426\u662f\u5d4c\u5957"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Flow {\n  constructor(arr) {\n    this.queue = [...arr.flat()]\n  }\n\n  async run(cb) {\n    for (let task of this.queue) {\n      if (typeof task === 'function') {\n        await task()\n      } else if (task instanceof Flow) {\n        await task.run()\n      }\n    }\n    cb && cb()\n  }\n}\n\nconst createFlow = (arr) => new Flow(arr)\n\ncreateFlow([\n  () => console.log(1),\n  () => sleep(400).then(() => console.log(2)),\n  [\n    () => console.log(3),\n    () => sleep(300).then(() => console.log(4))\n  ],\n  createFlow([\n    () => console.log(5),\n    () => sleep(200).then(() => console.log(6))\n  ])\n]).run(() => {\n  console.log(7)\n})\n")))}u.isMDXComponent=!0}}]);