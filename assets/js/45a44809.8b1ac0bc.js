"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[7904],{28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var s=n(96540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}},53816:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"coding/javascript/promise/serial/1-exercise-serial-request","title":"\u8bf7\u6c42\u4e32\u884c\u95ee\u9898","description":"\u9898\u76ee\u63cf\u8ff0","source":"@site/docs/coding/javascript/promise/serial/1-exercise-serial-request.md","sourceDirName":"coding/javascript/promise/serial","slug":"/coding/javascript/promise/serial/1-exercise-serial-request","permalink":"/docs/coding/javascript/promise/serial/1-exercise-serial-request","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/javascript/promise/serial/1-exercise-serial-request.md","tags":[{"inline":true,"label":"\u4e32\u884c","permalink":"/docs/tags/\u4e32\u884c"},{"inline":true,"label":"Promise","permalink":"/docs/tags/promise"}],"version":"current","sidebarPosition":1,"frontMatter":{"id":"1-exercise-serial-request","title":"\u8bf7\u6c42\u4e32\u884c\u95ee\u9898","tags":["\u4e32\u884c","Promise"]},"sidebar":"tutorialSidebar","previous":{"title":"\u8bbe\u8ba1\u4e00\u4e2a\u5f02\u6b65\u961f\u5217\uff0c\u5e76\u53d1\u6570\u91cf\u4e3an","permalink":"/docs/coding/javascript/promise/async-concurrency-control/1-async-queues"},"next":{"title":"\u7ea2\u7eff\u706f\u95ee\u98981","permalink":"/docs/coding/javascript/promise/traffic-light/1-exercise-traffic-light"}}');var t=n(74848),o=n(28453);const i={id:"1-exercise-serial-request",title:"\u8bf7\u6c42\u4e32\u884c\u95ee\u9898",tags:["\u4e32\u884c","Promise"]},c=void 0,l={},a=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u65b9\u6cd5\u4e00\uff1afunction",id:"\u65b9\u6cd5\u4e00function",level:2},{value:"\u65b9\u6cd5\u4e8c\uff1aclass",id:"\u65b9\u6cd5\u4e8cclass",level:2}];function u(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u9898\u76ee\u63cf\u8ff0",children:"\u9898\u76ee\u63cf\u8ff0"}),"\n",(0,t.jsxs)(r.p,{children:["\u521b\u5efa\u4e00\u4e2a",(0,t.jsx)(r.code,{children:"createFlow"}),"\u65b9\u6cd5\uff0c\u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a",(0,t.jsx)(r.strong,{children:"\u4e8c\u7ef4"}),"\u6570\u7ec4\u51fd\u6570\uff0c\u5176\u4e2d\u51fd\u6570\u53ef\u4ee5\u662f\u540c\u6b65\uff0c\u4e5f\u53ef\u4ee5\u662f\u5f02\u6b65\uff0c\u751a\u81f3\u53ef\u4ee5\u662f\u5d4c\u5957Flow\u548c\u6570\u7ec4\uff0c\u8981\u6c42\u6309\u7167\u6570\u7ec4\u987a\u5e8f\u8f93\u51fa\u7ed3\u679c"]}),"\n",(0,t.jsx)(r.h2,{id:"\u65b9\u6cd5\u4e00function",children:"\u65b9\u6cd5\u4e00\uff1afunction"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const sleep = (timer) => new Promise(resolve => setTimeout(resolve, timer))\r\n\r\nconst createFlow = (arr = []) => {\r\n  // \u4e32\u884c\uff0c\u6241\u5e73\u5316\r\n  const requestList = [...arr].flat()\r\n  const run = async (cb) => {\r\n    for (let i = 0; i < requestList.length; i += 1) {\r\n      const task = requestList[i]\r\n      if (typeof task === 'function') {\r\n        await task()\r\n      } else if (task && task.isFlow) {\r\n        await task.run()\r\n      }\r\n    }\r\n    cb && cb()\r\n  }\r\n  return {\r\n    run,\r\n    // \u652f\u6301\u5d4c\u5957\r\n    isFlow: true\r\n  }\r\n}\r\n\r\ncreateFlow([\r\n  () => console.log(1),\r\n  () => sleep(400).then(() => console.log(2)),\r\n  [\r\n    () => console.log(3),\r\n    () => sleep(300).then(() => console.log(4))\r\n  ],\r\n  createFlow([\r\n    () => console.log(5),\r\n    () => sleep(200).then(() => console.log(6))\r\n  ])\r\n]).run(() => {\r\n  console.log(7)\r\n})\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u65b9\u6cd5\u4e8cclass",children:"\u65b9\u6cd5\u4e8c\uff1aclass"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"class"})," \u53ef\u4ee5\u7528 ",(0,t.jsx)(r.code,{children:"instanceof"})," \u6765\u5224\u65ad\u662f\u5426\u662f\u5d4c\u5957"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"class Flow {\r\n  constructor(arr) {\r\n    this.queue = [...arr.flat()]\r\n  }\r\n\r\n  async run(cb) {\r\n    for (let task of this.queue) {\r\n      if (typeof task === 'function') {\r\n        await task()\r\n      } else if (task instanceof Flow) {\r\n        await task.run()\r\n      }\r\n    }\r\n    cb && cb()\r\n  }\r\n}\r\n\r\nconst createFlow = (arr) => new Flow(arr)\r\n\r\ncreateFlow([\r\n  () => console.log(1),\r\n  () => sleep(400).then(() => console.log(2)),\r\n  [\r\n    () => console.log(3),\r\n    () => sleep(300).then(() => console.log(4))\r\n  ],\r\n  createFlow([\r\n    () => console.log(5),\r\n    () => sleep(200).then(() => console.log(6))\r\n  ])\r\n]).run(() => {\r\n  console.log(7)\r\n})\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);