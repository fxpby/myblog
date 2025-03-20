"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[1919],{25364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"coding/design-pattern/memento-pattern-basics","title":"\u5907\u5fd8\u5f55\u6a21\u5f0f Memento Pattern","description":"\u4ecb\u7ecd","source":"@site/docs/coding/design-pattern/memento-pattern-basics.md","sourceDirName":"coding/design-pattern","slug":"/coding/design-pattern/memento-pattern-basics","permalink":"/docs/coding/design-pattern/memento-pattern-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/design-pattern/memento-pattern-basics.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u4e2d\u4ecb\u8005\u6a21\u5f0f Mediator Pattern","permalink":"/docs/coding/design-pattern/mediator-pattern-basics"},"next":{"title":"\u89c2\u5bdf\u8005\u6a21\u5f0f Observer Pattern","permalink":"/docs/coding/design-pattern/observer-pattern-basics"}}');var s=t(74848),o=t(28453);const i={},c="\u5907\u5fd8\u5f55\u6a21\u5f0f Memento Pattern",a={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5907\u5fd8\u7f16\u8f91\u5668",id:"\u5907\u5fd8\u7f16\u8f91\u5668",level:3},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5907\u5fd8\u5f55\u6a21\u5f0f-memento-pattern",children:"\u5907\u5fd8\u5f55\u6a21\u5f0f Memento Pattern"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u968f\u65f6\u8bb0\u5f55\u4e00\u4e2a\u5bf9\u8c61\u7684\u72b6\u6001\u53d8\u5316"}),"\n",(0,s.jsx)(n.li,{children:"\u968f\u65f6\u53ef\u4ee5\u6062\u590d\u4e4b\u524d\u7684\u67d0\u4e2a\u72b6\u6001\uff08\u5982\u64a4\u9500\u529f\u80fd\uff09"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u5907\u5fd8\u7f16\u8f91\u5668",children:"\u5907\u5fd8\u7f16\u8f91\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u72b6\u6001\u5907\u5fd8\nclass Memento {\n  constructor(content) {\n    this.content = content;\n  }\n\n  getContent() {\n    return this.content\n  }\n}\n\n// \u5907\u5fd8\u5217\u8868\nclass CareTaker {\n  constructor() {\n    this.list = []\n  }\n\n  add(memento) {\n    this.list.push(memento)\n  }\n\n  get(index) {\n    return this.list[index]\n  }\n}\n\nclass Editor {\n  constructor() {\n    this.content = null\n    this.careTaker = new CareTaker()\n  }\n\n  setContent(content) {\n    this.content = content\n  }\n\n  getContent() {\n    return this.content\n  }\n\n  save() {\n    this.careTaker.add(new Memento(this.content))\n  }\n\n  restore(index) {\n    const memento = this.careTaker.get(index)\n    return memento && memento.getContent()\n  }\n}\n\nconst editor = new Editor()\neditor.setContent('\u4eca\u5929\u5929\u6c14\u4e0d\u9519')\neditor.setContent('\u6211\u4e5f\u8fd9\u4e48\u89c9\u5f97')\n// \u5b58\u50a8\u5907\u5fd8\u5f55\neditor.save()\neditor.setContent('\u660e\u5929\u5929\u6c14\u600e\u4e48\u6837')\neditor.save()\neditor.setContent('\u597d\u50cf\u4e5f\u8fd8\u9614\u4ee5')\n\nconsole.log(editor.getContent())\nconsole.log(editor.restore(1))\nconsole.log(editor.restore(0))\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",children:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u72b6\u6001\u5bf9\u8c61\u4e8e\u4f7f\u7528\u8005\u5206\u5f00\uff0c\u89e3\u8026"}),"\n",(0,s.jsx)(n.li,{children:"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);