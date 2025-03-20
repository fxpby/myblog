"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[6703],{18546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"coding/design-pattern/adapter-pattern-basics","title":"\u9002\u914d\u5668\u6a21\u5f0f Adapter Pattern","description":"\u4ecb\u7ecd","source":"@site/docs/coding/design-pattern/adapter-pattern-basics.md","sourceDirName":"coding/design-pattern","slug":"/coding/design-pattern/adapter-pattern-basics","permalink":"/docs/coding/design-pattern/adapter-pattern-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/design-pattern/adapter-pattern-basics.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u8bbe\u8ba1\u539f\u5219 SOLID","permalink":"/docs/coding/design-pattern/design-principle-basics"},"next":{"title":"\u6865\u63a5\u6a21\u5f0f Bridge Pattern","permalink":"/docs/coding/design-pattern/bridge-pattern-basics"}}');var s=t(74848),r=t(28453);const i={},d="\u9002\u914d\u5668\u6a21\u5f0f Adapter Pattern",c={},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u5c01\u88c5\u65e7\u63a5\u53e3",id:"\u5c01\u88c5\u65e7\u63a5\u53e3",level:3},{value:"Vue \u7684 computed\u3001 Vuex \u7684 getter",id:"vue-\u7684-computed-vuex-\u7684-getter",level:3},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u9002\u914d\u5668\u6a21\u5f0f-adapter-pattern",children:"\u9002\u914d\u5668\u6a21\u5f0f Adapter Pattern"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u65e7\u63a5\u53e3\u683c\u5f0f\u548c\u4f7f\u7528\u8005\u4e0d\u517c\u5bb9"}),"\n",(0,s.jsx)(n.li,{children:"\u4e2d\u95f4\u52a0\u4e00\u4e2a\u9002\u914d\u8f6c\u6362\u63a5\u53e3"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u7c7b\u56fe\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mermaid",children:"classDiagram\n\nClient --\x3e Target\nTarget --\x3e Adaptee\n\nclass Client {\n  + target: Target\n  +do () void\n}\n\nclass Target {\n  + adaptee: Adaptee\n  +request() void\n}\n\nclass Adaptee {\n  +specificRequest() void\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class Adaptee {\n  specificRequest() {\n    return '\u5fb7\u56fd\u6807\u51c6\u63d2\u5934\ud83d\udd0c'\n  }\n}\nclass Target {\n  constructor() {\n    this.adaptee = new Adaptee()\n  }\n\n  request() {\n    const info = this.adapee.specificRequest()\n    return `\u8f6c\u6362\u5668 -> ${info}`\n  }\n}\n\nconst target = new Target()\nconsole.log(target.request())\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,s.jsx)(n.h3,{id:"\u5c01\u88c5\u65e7\u63a5\u53e3",children:"\u5c01\u88c5\u65e7\u63a5\u53e3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u65b0\u5c01\u88c5\u7684 ajax\najax({\n  url: '/getData',\n  type: 'Get',\n  dataType: 'json',\n  data: {\n    id: '1'\n  }\n})\n.done(() => {\n  // ...\n})\n\n// \u5386\u53f2\u539f\u56e0\u7684\u65e7\u4ee3\u7801\n$.ajax({...})\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u517c\u5bb9\u65e7\u4ee3\u7801\uff0c\u5728\u4e0d\u4fee\u6539\u65e7\u4ee3\u7801\u7684\u524d\u63d0\u4e0b\uff0c\u505a\u4e00\u5c42\u9002\u914d\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const $ = {\n  ajax: function(options){\n    return ajax(options)\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"vue-\u7684-computed-vuex-\u7684-getter",children:"Vue \u7684 computed\u3001 Vuex \u7684 getter"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",children:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5c06\u65e7\u63a5\u53e3\u548c\u4f7f\u7528\u8005\u8fdb\u884c\u5206\u79bb"}),"\n",(0,s.jsx)(n.li,{children:"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);