"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[7194],{23896:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"coding/javascript/currying","title":"\u51fd\u6570\u67ef\u91cc\u5316","description":"\u57fa\u672c\u6982\u5ff5","source":"@site/docs/coding/javascript/currying.md","sourceDirName":"coding/javascript","slug":"/coding/javascript/currying","permalink":"/docs/coding/javascript/currying","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/javascript/currying.md","tags":[{"inline":true,"label":"\u51fd\u6570\u67ef\u91cc\u5316","permalink":"/docs/tags/\u51fd\u6570\u67ef\u91cc\u5316"}],"version":"current","frontMatter":{"id":"currying","title":"\u51fd\u6570\u67ef\u91cc\u5316","tags":["\u51fd\u6570\u67ef\u91cc\u5316"]},"sidebar":"tutorialSidebar","previous":{"title":"compose \u548c pipe \u51fd\u6570","permalink":"/docs/coding/javascript/compose-pipe"},"next":{"title":"\u6570\u636e\u7c7b\u578b","permalink":"/docs/coding/javascript/data-element"}}');var s=t(74848),i=t(28453);const c={id:"currying",title:"\u51fd\u6570\u67ef\u91cc\u5316",tags:["\u51fd\u6570\u67ef\u91cc\u5316"]},o=void 0,a={},l=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u67ef\u91cc\u5316\u7684\u610f\u4e49",id:"\u67ef\u91cc\u5316\u7684\u610f\u4e49",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2}];function u(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u628a\u63a5\u53d7\u591a\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u53d8\u6362\u6210\u63a5\u53d7\u4e00\u4e2a\u5355\u4e00\u53c2\u6570\uff08\u6700\u521d\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff09\u7684\u51fd\u6570"}),"\n",(0,s.jsx)(e.li,{children:"\u8fd4\u56de\u63a5\u53d7\u4f59\u4e0b\u7684\u53c2\u6570"}),"\n",(0,s.jsx)(e.li,{children:"\u8fd4\u56de\u7ed3\u679c\u7684\u65b0\u51fd\u6570"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u67ef\u91cc\u5316\u7684\u610f\u4e49",children:"\u67ef\u91cc\u5316\u7684\u610f\u4e49"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f9b\u4e0d\u65b9\u4fbf\u4f20\u5165\u53c2\u6570\u4f7f\u7528"}),"\n",(0,s.jsx)(e.li,{children:"\u65b9\u6cd5\u8c03\u7528\u65f6\u53c2\u6570\u56fa\u5b9a"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4ee3\u7801\u5b9e\u73b0",children:"\u4ee3\u7801\u5b9e\u73b0"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\n\u65b0\u51fd\u6570this\u6307\u5411bind\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\n\u5176\u4f59\u53c2\u6570\u4f5c\u4e3a\u65b0\u51fd\u6570\u7684\u53c2\u6570\u4f20\u5165"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"Function.prototype.myBind = function (thisArg) {\n  if (typeof this !== 'function') {\n    throw new Error('Function argument must be a function')\n  }\n  const self = this\n  // \u53bb\u9664\u7b2c\u4e00\u4e2a this \u6307\u5411\u53c2\u6570\n  const args1 = Array.prototype.slice.call(arguments, 1)\n  const resultFn = function () {\n    const args2 = Array.prototype.slice.call(arguments)\n    return self.apply(this instanceof resultFn ? this : thisArg, args1.concat(args2))\n  }\n\n  const fn = new Function()\n  fn.prototype = self.prototype\n  resultFn.prototype = new fn()\n  return resultFn\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);