"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[7744],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(96540);const s={},c=a.createContext(s);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:n},e.children)}},48707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"coding/design-pattern/facade-pattern-basics","title":"\u5916\u89c2\u6a21\u5f0f Facade Pattern","description":"\u4ecb\u7ecd","source":"@site/docs/coding/design-pattern/facade-pattern-basics.md","sourceDirName":"coding/design-pattern","slug":"/coding/design-pattern/facade-pattern-basics","permalink":"/docs/coding/design-pattern/facade-pattern-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/design-pattern/facade-pattern-basics.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u88c5\u9970\u5668\u6a21\u5f0f Decorator Pattern","permalink":"/docs/coding/design-pattern/decorator-pattern-basics"},"next":{"title":"\u5de5\u5382\u6a21\u5f0f Factory Pattern","permalink":"/docs/coding/design-pattern/factory-pattern-basics"}}');var s=t(74848),c=t(28453);const r={},i="\u5916\u89c2\u6a21\u5f0f Facade Pattern",d={},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u751f\u6d3b\u573a\u666f \u533b\u9662\u63a5\u5f85\u5458",id:"\u751f\u6d3b\u573a\u666f-\u533b\u9662\u63a5\u5f85\u5458",level:3},{value:"\u517c\u5bb9\u53c2\u6570",id:"\u517c\u5bb9\u53c2\u6570",level:3},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5916\u89c2\u6a21\u5f0f-facade-pattern",children:"\u5916\u89c2\u6a21\u5f0f Facade Pattern"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e3a\u5b50\u7cfb\u7edf\u4e2d\u7684\u4e00\u7ec4\u63a5\u53e3\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ad8\u5c42\u63a5\u53e3"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u8005\u4f7f\u7528\u8fd9\u4e2a\u9ad8\u5c42\u63a5\u53e3"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u7c7b\u56fe\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mermaid",children:"classDiagram\nClient --\x3e Facade\nFacade --\x3e SubSystemA\nFacade --\x3e SubSystemB\nFacade --\x3e SubSystemC\nclass Client {\n  \n}\nclass Facade {\n \n}\nclass SubSystemA {\n \n}\nclass SubSystemB {\n \n}\nclass SubSystemC {\n \n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,s.jsx)(n.h3,{id:"\u751f\u6d3b\u573a\u666f-\u533b\u9662\u63a5\u5f85\u5458",children:"\u751f\u6d3b\u573a\u666f \u533b\u9662\u63a5\u5f85\u5458"}),"\n",(0,s.jsx)(n.p,{children:"\u53bb\u533b\u9662\u770b\u75c5\uff0c\u63a5\u5f85\u5458\u4ee3\u66ff\u6211\u4eec\u53bb\u6302\u53f7\u3001\u95e8\u8bca\u3001\u5212\u4ef7\u3001\u53d6\u836f"}),"\n",(0,s.jsx)(n.h3,{id:"\u517c\u5bb9\u53c2\u6570",children:"\u517c\u5bb9\u53c2\u6570"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function bindEvent(ele, type, seletor, fn) {\n  if (fn === null) {\n    fn = seletor\n    seletor = null\n  }\n}\n\nbindEvent(ele, 'click', fn)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",children:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e0d\u7b26\u5408\u5355\u4e00\u804c\u8d23\u539f\u5219\u548c\u5f00\u653e\u5c01\u95ed\u539f\u5219"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);