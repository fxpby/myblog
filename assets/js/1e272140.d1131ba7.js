"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[8879],{28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var s=i(96540);const r={},l=s.createContext(r);function c(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(l.Provider,{value:e},n.children)}},56312:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"coding/browser/browser-event-loop","title":"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af","description":"1.\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b","source":"@site/docs/coding/browser/browser-event-loop.md","sourceDirName":"coding/browser","slug":"/coding/browser/browser-event-loop","permalink":"/docs/coding/browser/browser-event-loop","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/browser/browser-event-loop.md","tags":[{"inline":true,"label":"\u6d4f\u89c8\u5668","permalink":"/docs/tags/\u6d4f\u89c8\u5668"}],"version":"current","frontMatter":{"id":"browser-event-loop","title":"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af","tags":["\u6d4f\u89c8\u5668"]},"sidebar":"tutorialSidebar","previous":{"title":"\u6d4f\u89c8\u5668\u6e32\u67d3\u539f\u7406","permalink":"/docs/coding/browser/browser-render-mechanism"},"next":{"title":"\u524d\u7aef\u8def\u7531","permalink":"/docs/coding/browser/browser-router"}}');var r=i(74848),l=i(28453);const c={id:"browser-event-loop",title:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",tags:["\u6d4f\u89c8\u5668"]},d=void 0,t={},h=[{value:"1.\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",id:"1\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",level:2},{value:"1.1 \u8fdb\u7a0b",id:"11-\u8fdb\u7a0b",level:3},{value:"1.2 \u7ebf\u7a0b",id:"12-\u7ebf\u7a0b",level:3},{value:"1.3 \u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b",id:"13-\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b",level:3},{value:"1.3.1 \u6d4f\u89c8\u5668\u8fdb\u7a0b",id:"131-\u6d4f\u89c8\u5668\u8fdb\u7a0b",level:4},{value:"1.3.2 \u7f51\u7edc\u8fdb\u7a0b",id:"132-\u7f51\u7edc\u8fdb\u7a0b",level:4},{value:"1.3.3 \u6e32\u67d3\u8fdb\u7a0b",id:"133-\u6e32\u67d3\u8fdb\u7a0b",level:4},{value:"2. \u6e32\u67d3\u4e3b\u7ebf\u7a0b\u5de5\u4f5c\u6a21\u5f0f",id:"2-\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u5de5\u4f5c\u6a21\u5f0f",level:2},{value:"3. \u5f02\u6b65",id:"3-\u5f02\u6b65",level:2},{value:"4. JavaScript \u963b\u788d\u6e32\u67d3",id:"4-javascript-\u963b\u788d\u6e32\u67d3",level:2},{value:"5. \u4efb\u52a1\u4f18\u5148\u7ea7",id:"5-\u4efb\u52a1\u4f18\u5148\u7ea7",level:2},{value:"5.1 Chrome \u961f\u5217",id:"51-chrome-\u961f\u5217",level:3},{value:"6. \u603b\u7ed3",id:"6-\u603b\u7ed3",level:2},{value:"6.1 \u5f02\u6b65",id:"61-\u5f02\u6b65",level:3},{value:"6.2 \u4e8b\u4ef6\u5faa\u73af",id:"62-\u4e8b\u4ef6\u5faa\u73af",level:3},{value:"6.3 \u8ba1\u65f6\u5668\u4e0d\u53ef\u4ee5\u7cbe\u51c6\u8ba1\u65f6",id:"63-\u8ba1\u65f6\u5668\u4e0d\u53ef\u4ee5\u7cbe\u51c6\u8ba1\u65f6",level:3}];function o(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"1\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",children:"1.\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b"}),"\n",(0,r.jsx)(e.h3,{id:"11-\u8fdb\u7a0b",children:"1.1 \u8fdb\u7a0b"}),"\n",(0,r.jsxs)(e.p,{children:["\u7a0b\u5e8f\u8fd0\u884c\u9700\u8981\u6709\u4e13\u5c5e\u7684",(0,r.jsx)(e.strong,{children:"\u5185\u5b58\u7a7a\u95f4"}),"\uff0c\u53ef\u4ee5\u7b80\u5355\u628a\u8fd9\u5757\u5185\u5b58\u7a7a\u95f4\u7406\u89e3\u4e3a\u8fdb\u7a0b"]}),"\n",(0,r.jsx)(e.p,{children:"\u6bcf\u4e2a\u5e94\u7528\u81f3\u5c11\u6709\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u8fdb\u7a0b\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb"}),"\n",(0,r.jsx)(e.h3,{id:"12-\u7ebf\u7a0b",children:"1.2 \u7ebf\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u6709\u4e86\u8fdb\u7a0b\uff0c\u624d\u53ef\u4ee5\u8fd0\u884c\u7a0b\u5e8f\u4ee3\u7801\uff0c\u8fd0\u884c\u4ee3\u7801\u7684\u5bf9\u8c61\u5373\u7ebf\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u4e00\u4e2a\u8fdb\u7a0b\u81f3\u5c11\u6709\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8fdb\u7a0b\u5f00\u542f\u540e\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u8fd0\u884c\u4ee3\u7801\uff0c\u8be5\u7ebf\u7a0b\u5373\u4e3a\u4e3b\u7ebf\u7a0b\uff0c\u4e3b\u7ebf\u7a0b\u7ed3\u675f\u610f\u5473\u7740\u6574\u4e2a\u7a0b\u5e8f\u7ed3\u675f"}),"\n",(0,r.jsxs)(e.p,{children:["\u7a0b\u5e8f\u5f80\u5f80\u9700\u8981\u540c\u65f6\u6267\u884c\u591a\u5757\u4ee3\u7801\uff0c\u4e3b\u7ebf\u7a0b\u4f1a\u542f\u52a8\u66f4\u591a\u7ebf\u7a0b\u6765\u6267\u884c\u76f8\u5173\u4ee3\u7801\uff0c\u6545",(0,r.jsx)(e.strong,{children:"\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u7ebf\u7a0b"})]}),"\n",(0,r.jsx)(e.h3,{id:"13-\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b",children:"1.3 \u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u548c\u7ebf\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u6d4f\u89c8\u5668\u662f\u4e00\u4e2a\u591a\u8fdb\u7a0b\u591a\u7ebf\u7a0b\u7684\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4e86\u907f\u514d\u4e92\u76f8\u5f71\u54cd\uff0c\u51cf\u5c11\u5d29\u6e83\u6982\u7387\uff0c\u542f\u52a8\u6d4f\u89c8\u5668\u540e\uff0c\u4f1a\u81ea\u52a8\u542f\u52a8\u591a\u4e2a\u8fdb\u7a0b"}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d\u8f83\u4e3a\u91cd\u8981\u7684\u662f",(0,r.jsx)(e.strong,{children:"\u6d4f\u89c8\u5668\u8fdb\u7a0b"}),"\u3001",(0,r.jsx)(e.strong,{children:"\u7f51\u7edc\u8fdb\u7a0b"}),"\u548c",(0,r.jsx)(e.strong,{children:"\u6e32\u67d3\u8fdb\u7a0b"})]}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u7684\u4efb\u52a1\u7ba1\u7406\u5668\u67e5\u770b\u5f53\u524d\u7684\u6240\u6709\u8fdb\u7a0b\uff08\u66f4\u591a => \u66f4\u591a\u5de5\u5177 => \u4efb\u52a1\u7ba1\u7406\u5668\uff09"}),"\n",(0,r.jsx)(e.h4,{id:"131-\u6d4f\u89c8\u5668\u8fdb\u7a0b",children:"1.3.1 \u6d4f\u89c8\u5668\u8fdb\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3b\u8981\u8d1f\u8d23\u754c\u9762\u5c55\u793a\u3001\u7528\u6237\u4ea4\u4e92\u3001\u5b50\u8fdb\u7a0b\u7ba1\u7406\uff08\u5305\u62ec\u540e\u9762\u7684\u7f51\u7edc\u8fdb\u7a0b\u548c\u6e32\u67d3\u8fdb\u7a0b\u7b49\uff09\u7b49\uff0c\u6d4f\u89c8\u5668\u8fdb\u7a0b\u5185\u90e8\u4f1a\u542f\u52a8\u591a\u4e2a\u7ebf\u7a0b\u5904\u7406\u4e0d\u540c\u4efb\u52a1"}),"\n",(0,r.jsx)(e.h4,{id:"132-\u7f51\u7edc\u8fdb\u7a0b",children:"1.3.2 \u7f51\u7edc\u8fdb\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u8d1f\u8d23\u52a0\u8f7d\u7f51\u7edc\u8d44\u6e90\uff0c\u7f51\u7edc\u8fdb\u7a0b\u5185\u90e8\u4f1a\u542f\u52a8\u591a\u4e2a\u7ebf\u7a0b\u5904\u7406\u4e0d\u540c\u4efb\u52a1"}),"\n",(0,r.jsx)(e.h4,{id:"133-\u6e32\u67d3\u8fdb\u7a0b",children:"1.3.3 \u6e32\u67d3\u8fdb\u7a0b"}),"\n",(0,r.jsxs)(e.p,{children:["\u6e32\u67d3\u8fdb\u7a0b\u542f\u52a8\u540e\uff0c\u4f1a\u5f00\u542f\u4e00\u4e2a",(0,r.jsx)(e.strong,{children:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b"}),"\uff0c\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u8d1f\u8d23\u6267\u884c HTML\u3001CSS\u3001JS \u4ee3\u7801"]}),"\n",(0,r.jsx)(e.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d4f\u89c8\u5668\u4f1a\u4e3a\u6bcf\u4e2a\u6807\u7b7e\u9875\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u6e32\u67d3\u8fdb\u7a0b\u6765\u4fdd\u8bc1\u4e0d\u540c\u6807\u7b7e\u9875\u4e4b\u95f4\u4e0d\u4f1a\u76f8\u4e92\u5f71\u54cd\uff08\u540e\u7eed\u53ef\u80fd\u4f1a\u6539\u6210\u4e00\u4e2a\u7ad9\u70b9\u4e00\u4e2a\u8fdb\u7a0b site-per-process\uff09"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md",children:"https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"2-\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u5de5\u4f5c\u6a21\u5f0f",children:"2. \u6e32\u67d3\u4e3b\u7ebf\u7a0b\u5de5\u4f5c\u6a21\u5f0f"}),"\n",(0,r.jsx)(e.p,{children:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u975e\u5e38\u7e41\u5fd9\uff0c\u5904\u7406\u7684\u4efb\u52a1\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e \ud83d\udc47\ud83c\udffb"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u89e3\u6790 HTML"}),"\n",(0,r.jsx)(e.li,{children:"\u89e3\u6790 CSS"}),"\n",(0,r.jsx)(e.li,{children:"\u8ba1\u7b97\u6837\u5f0f"}),"\n",(0,r.jsx)(e.li,{children:"\u5e03\u5c40"}),"\n",(0,r.jsx)(e.li,{children:"\u5904\u7406\u56fe\u5c42"}),"\n",(0,r.jsx)(e.li,{children:"\u6bcf\u79d2\u753b\u9875\u9762 60 \u6b21(FPS)"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u5168\u5c40 JS \u4ee3\u7801"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u8ba1\u65f6\u5668\u7684\u56de\u8c03\u51fd\u6570"}),"\n",(0,r.jsx)(e.li,{children:"......"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e3b\u7ebf\u7a0b\u8fd8\u4f1a\u9047\u5230\u4e00\u4e2a\u81f4\u547d\u96be\u9898 - \u5982\u4f55\u8c03\u5ea6\u4efb\u52a1"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5982\u6b63\u5728\u6267\u884c\u4e00\u4e2a JS \u51fd\u6570\uff0c\u6267\u884c\u5230\u4e00\u534a\u7528\u6237\u70b9\u51fb\u6309\u94ae\uff0c\u7acb\u5373\u6267\u884c\u70b9\u51fb\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u5417\uff1f"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u6b63\u5728\u6267\u884c\u4e00\u4e2a JS \u51fd\u6570\uff0c\u6267\u884c\u5230\u4e00\u534a\u67d0\u8ba1\u65f6\u5668\u521a\u597d\u5230\u8fbe\u65f6\u95f4\uff0c\u7acb\u5373\u6267\u884c\u56de\u8c03\u5417\uff1f"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u6d4f\u89c8\u5668\u8fdb\u7a0b\u901a\u77e5\u201c\u7528\u6237\u70b9\u51fb\u4e86\u6309\u94ae\u201d\uff0c\u540c\u65f6\u67d0\u8ba1\u65f6\u5668\u521a\u597d\u5230\u8fbe\u65f6\u95f4\uff0c\u5e94\u8be5\u5904\u7406\u54ea\u4e2a\uff1f"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u7b54\u6848\uff1a",(0,r.jsx)(e.strong,{children:"\u6392\u961f"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/browser/%E6%B8%B2%E6%9F%93%E4%B8%BB%E7%BA%BF%E7%A8%8B1.svg",alt:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b 1"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6700\u5f00\u59cb\u65f6\uff0c\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u8fdb\u5165\u4e00\u4e2a",(0,r.jsx)(e.a,{href:"https://github.com/chromium/chromium/blob/4ff7e1c7fcf513a8da886d4246637a1c5d163a44/base/message_loop/message_pump_default.cc#L35",children:"\u65e0\u9650\u5faa\u73af"})]}),"\n",(0,r.jsx)(e.li,{children:"\u6bcf\u4e00\u6b21\u5faa\u73af\u4f1a\u68c0\u67e5\u6d88\u606f\u961f\u5217\u4e2d\u662f\u5426\u6709\u4efb\u52a1\u5b58\u5728\uff1b\u5982\u679c\u6709\u5219\u53d6\u51fa\u7b2c\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\uff0c\u6267\u884c\u5b8c\u8fdb\u5165\u4e0b\u4e00\u5c42\u5faa\u73af\uff1b\u5982\u679c\u6ca1\u6709\u5219\u8fdb\u5165\u4f11\u7720\u72b6\u6001"}),"\n",(0,r.jsx)(e.li,{children:"\u5176\u4ed6\u6240\u6709\u7ebf\u7a0b\uff08\u5305\u62ec\u5176\u4ed6\u8fdb\u7a0b\u7684\u7ebf\u7a0b\uff09\u53ef\u4ee5\u968f\u65f6\u5411\u6d88\u606f\u961f\u5217\u6dfb\u52a0\u4efb\u52a1\u3002\u65b0\u4efb\u52a1\u4f1a\u52a0\u5230\u6d88\u606f\u961f\u5217\u7684\u672b\u5c3e\u3002\u5728\u6dfb\u52a0\u65b0\u4efb\u52a1\u65f6\uff0c\u5982\u679c\u4e3b\u7ebf\u7a0b\u662f\u4f11\u7720\u72b6\u6001\uff0c\u5219\u4f1a\u88ab\u5524\u9192\u7ee7\u7eed\u5faa\u73af\u62ff\u53d6\u4efb\u52a1"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0a\u8ff0\u8fc7\u7a0b\u5373",(0,r.jsx)(e.strong,{children:"\u4e8b\u4ef6\u5faa\u73af\uff08\u6d88\u606f\u5faa\u73af\uff09"})]}),"\n",(0,r.jsx)(e.h2,{id:"3-\u5f02\u6b65",children:"3. \u5f02\u6b65"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee3\u7801\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u9047\u5230\u65e0\u6cd5\u7acb\u5373\u5904\u7406\u7684\u4efb\u52a1\uff0c\u5982"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8ba1\u65f6\u5b8c\u6210\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 - setTimeout\u3001setInterval"}),"\n",(0,r.jsx)(e.li,{children:"\u7f51\u7edc\u901a\u4fe1\u5b8c\u6210\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 - XHR\u3001Fetch"}),"\n",(0,r.jsx)(e.li,{children:"\u7528\u6237\u64cd\u4f5c\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 - addEventListener"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u8ba9\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u7b49\u5f85\u8fd9\u4e9b\u4efb\u52a1\u7684\u65f6\u673a\u5230\u8fbe\uff0c\u5c31\u4f1a\u5bfc\u81f4\u4e3b\u7ebf\u7a0b\u957f\u671f\u5904\u4e8e",(0,r.jsx)(e.strong,{children:"\u963b\u585e"}),"\u72b6\u6001\uff0c\u8fdb\u800c\u53ef\u80fd\u6d4f\u89c8\u5668\u5361\u6b7b\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u4e0a\u9762\u6709\u63d0\u5230\u4efb\u52a1\u7e41\u91cd\uff0c\u662f\u7ecf\u4e0d\u4f4f\u8fd9\u6837\u963b\u585e\u7684\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u4f7f\u7528",(0,r.jsx)(e.strong,{children:"\u5f02\u6b65"}),"\u7684\u65b9\u5f0f\u5904\u7406\uff0c\u8fbe\u5230\u4f7f",(0,r.jsx)(e.strong,{children:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u6c38\u4e0d\u963b\u585e"}),"\u7684\u76ee\u7684"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/browser/%E8%AE%A1%E6%97%B6%E7%BA%BF%E7%A8%8B%20eg1.svg",alt:"\u5f02\u6b65 1"})}),"\n",(0,r.jsx)(e.h2,{id:"4-javascript-\u963b\u788d\u6e32\u67d3",children:"4. JavaScript \u963b\u788d\u6e32\u67d3"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<h1>hello</h1>\n<button>btn</button>\n<script>\n  const h1 = document.querySelector("h1");\n  const btn = document.querySelector("button");\n\n  // \u6b7b\u5faa\u73af\n  const delay = (duration) => {\n    let start = Date.now();\n    while (Date.now() - start < duration) {}\n  };\n\n  btn.onclick = () => {\n    h1.textContent = "olu";\n    delay(2000);\n  };\n<\/script>\n'})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u6267\u884c\u5168\u5c40 js\uff0c\u6b64\u65f6\u6d88\u606f\u961f\u5217\u4e3a\u7a7a"}),"\n",(0,r.jsx)(e.li,{children:"\u4ea4\u4e92\u7ebf\u7a0b\uff1a\u76d1\u542c\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\uff0c\u70b9\u51fb\u540e\u6267\u884c\u51fd\u6570"}),"\n",(0,r.jsx)(e.li,{children:"\u7528\u6237\u70b9\u51fb\u6309\u94ae"}),"\n",(0,r.jsx)(e.li,{children:"\u70b9\u51fb\u4e8b\u4ef6\u51fd\u6570\u653e\u5165\u6d88\u606f\u961f\u5217"}),"\n",(0,r.jsxs)(e.li,{children:["\u6d88\u606f\u961f\u5217\u4e2d\u7684\u51fd\u6570\u79fb\u5165\u5230\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u4e2d\uff0c\u6267\u884c\u51fd\u6570","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u8bbe\u7f6e dom \u6587\u672c\uff08\u5c5e\u6027\u503c\u5df2\u66f4\u6539\uff0c\u9875\u9762\u672a\u91cd\u65b0\u7ed8\u5236\uff09"}),"\n",(0,r.jsxs)(e.li,{children:["\u6587\u672c\u66f4\u6539\uff0c\u4ea7\u751f",(0,r.jsx)(e.strong,{children:"\u7ed8\u5236"}),"\u4efb\u52a1\uff0c\u7ed8\u5236\u4efb\u52a1\u52a0\u5165\u6d88\u606f\u961f\u5217\u6392\u961f"]}),"\n",(0,r.jsx)(e.li,{children:"\u7ee7\u7eed\u8fd0\u884c\u51fd\u6570\u5373 delay 2000ms"}),"\n",(0,r.jsx)(e.li,{children:"\u70b9\u51fb\u4e8b\u4ef6\u4efb\u52a1\u6267\u884c\u7ed3\u675f\uff08\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u7a7a\u95f2\uff09"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\u6d88\u606f\u961f\u5217\u4e2d\u7684\u7ed8\u5236\u4efb\u52a1\u79fb\u5165\u6e32\u67d3\u4e3b\u7ebf\u7a0b\uff0c\u9875\u9762\u7ed8\u5236\u6587\u6848 hello => olu"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u7efc\u4e0a\u5c31\u662f",(0,r.jsx)(e.code,{children:"\u6267\u884c js"})," \u548c",(0,r.jsx)(e.code,{children:"\u6e32\u67d3"}),"\u90fd\u5728\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u4e2d\u5904\u7406\uff0c\u5355\u7ebf\u7a0b\u9700\u8981\u6392\u961f"]}),"\n",(0,r.jsx)(e.h2,{id:"5-\u4efb\u52a1\u4f18\u5148\u7ea7",children:"5. \u4efb\u52a1\u4f18\u5148\u7ea7"}),"\n",(0,r.jsx)(e.p,{children:"\u4efb\u52a1\u6ca1\u6709\u4f18\u5148\u7ea7\uff0c\u5728\u6d88\u606f\u961f\u5217\u4e2d\u5148\u8fdb\u5148\u51fa"}),"\n",(0,r.jsx)(e.p,{children:"\u6d88\u606f\u961f\u5217\u6709\u4f18\u5148\u7ea7"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6bcf\u4e2a\u4efb\u52a1\u6709\u4e00\u4e2a\u4efb\u52a1\u7c7b\u578b\uff0c",(0,r.jsx)(e.strong,{children:"\u540c\u4e00\u7c7b\u578b\u7684\u4efb\u52a1\u5fc5\u987b\u5728\u4e00\u4e2a\u961f\u5217"}),"\uff0c",(0,r.jsx)(e.strong,{children:"\u4e0d\u540c\u7c7b\u578b\u7684\u4efb\u52a1\u53ef\u4ee5\u5206\u5c5e\u4e0d\u540c\u7684\u961f\u5217"}),"\u3002\u5728\u4e00\u6b21\u4e8b\u4ef6\u5faa\u73af\u4e2d\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4ece\u4e0d\u540c\u961f\u5217\u4e2d\u53d6\u51fa\u4efb\u52a1\u6267\u884c"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6d4f\u89c8\u5668\u5fc5\u987b\u51c6\u5907\u597d\u4e00\u4e2a",(0,r.jsx)(e.strong,{children:"\u5fae\u961f\u5217"}),"\uff0c\u5fae\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u4f18\u5148\u6240\u6709\u5176\u4ed6\u4efb\u52a1\u6267\u884c"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"chromium task type:"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/chromium/chromium/blob/9cfb77e79563e59d3007a6f28c7c0f266274f033/third_party/blink/public/platform/task_type.h#L24",children:"https://github.com/chromium/chromium/blob/9cfb77e79563e59d3007a6f28c7c0f266274f033/third_party/blink/public/platform/task_type.h#L24"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"perform a microtask checkpoint:"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint",children:"https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint"})}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"51-chrome-\u961f\u5217",children:"5.1 Chrome \u961f\u5217"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5ef6\u65f6\u961f\u5217\uff1a\u7528\u4e8e\u5b58\u653e\u8ba1\u65f6\u5668\u5230\u8fbe\u540e\u7684\u56de\u8c03\u4efb\u52a1\uff0c\u4f18\u5148\u7ea7 - \u4e2d"}),"\n",(0,r.jsx)(e.li,{children:"\u4ea4\u4e92\u961f\u5217\uff1a\u7528\u4e8e\u5b58\u653e\u7528\u6237\u64cd\u4f5c\u540e\u4ea7\u751f\u7684\u4e8b\u4ef6\u5904\u7406\u4efb\u52a1\uff0c\u4f18\u5148\u7ea7 - \u9ad8"}),"\n",(0,r.jsx)(e.li,{children:"\u5fae\u961f\u5217\uff1a\u7528\u4e8e\u5b58\u653e\u9700\u8981\u6700\u5feb\u6267\u884c\u7684\u4efb\u52a1\uff0c\u4f18\u5148\u7ea7 - \u6700\u9ad8"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6dfb\u52a0\u4efb\u52a1\u5230\u5fae\u961f\u5217\u7684\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Promise"}),"\n",(0,r.jsx)(e.li,{children:"MutationObserver"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u7a7a\u95f2\u7684\u65f6\u5019\uff0c\u4f1a\u67e5\u770b\u5fae\u961f\u5217\u662f\u5426\u6709\u4e8b\u4ef6\u5b58\u5728"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5b58\u5728\uff1a\u6267\u884c\u5fae\u961f\u5217\u4e2d\u7684\u4e8b\u4ef6\u56de\u8c03\uff0c\u76f4\u5230\u5fae\u961f\u5217\u4e3a\u7a7a\uff0c\u518d\u53bb\u5176\u4ed6\u4efb\u52a1\u961f\u5217\u53d6\u51fa\u7b2c 1 \u4e2a\u4e8b\u4ef6\u52a0\u5165\u4e3b\u7ebf\u7a0b\u6267\u884c"}),"\n",(0,r.jsx)(e.li,{children:"\u4e0d\u5b58\u5728\uff1a\u53bb\u5176\u4ed6\u4efb\u52a1\u961f\u5217\u4e2d\u53d6 1 \u4e2a\u4e8b\u4ef6\uff0c\u5e76\u628a\u5bf9\u5e94\u56de\u8c03\u52a0\u5165\u5f53\u524d\u4e3b\u7ebf\u7a0b\u6267\u884c"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"6-\u603b\u7ed3",children:"6. \u603b\u7ed3"}),"\n",(0,r.jsx)(e.h3,{id:"61-\u5f02\u6b65",children:"6.1 \u5f02\u6b65"}),"\n",(0,r.jsx)(e.p,{children:"JavaScript \u662f\u4e00\u95e8\u5355\u7ebf\u7a0b\u8bed\u8a00\uff0c\u56e0\u4e3a\u5b83\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u4e2d\uff0c\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u662f\u552f\u4e00\u7684"}),"\n",(0,r.jsx)(e.p,{children:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u627f\u62c5\u8bf8\u591a\u5de5\u4f5c\uff0c\u5982\u6e32\u67d3\u9875\u9762\u3001\u6267\u884c js \u7b49"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f7f\u7528\u540c\u6b65\u7684\u65b9\u5f0f\uff0c\u6781\u5927\u53ef\u80fd\u5bfc\u81f4\u4e3b\u7ebf\u7a0b\u4ea7\u751f\u963b\u585e\uff0c\u8fdb\u800c\u5bfc\u81f4\u6d88\u606f\u961f\u5217\u4e2d\u5176\u4ed6\u4efb\u52a1\u65e0\u6cd5\u5f97\u5230\u6267\u884c\uff0c\u6d88\u8017\u5927\u91cf\u65f6\u95f4\uff0c\u9875\u9762\u4e5f\u65e0\u6cd5\u53ca\u65f6\u66f4\u65b0\uff0c\u9020\u6210\u5361\u6b7b\u73b0\u8c61"}),"\n",(0,r.jsx)(e.p,{children:"\u91c7\u7528\u5f02\u6b65\u65b9\u5f0f\uff0c\u5f53\u4efb\u52a1\u5982\u8ba1\u65f6\u5668\u3001\u7f51\u7edc\u3001\u4e8b\u4ef6\u76d1\u542c\u7b49\u53d1\u751f\u65f6\uff0c\u4e3b\u7ebf\u7a0b\u5c06\u4efb\u52a1\u4ea4\u7ed9\u5176\u4ed6\u7ebf\u7a0b\u5904\u7406\uff0c\u81ea\u8eab\u7acb\u5373\u7ed3\u675f\u4efb\u52a1\u7684\u6267\u884c\uff0c\u6267\u884c\u540e\u7eed\u4ee3\u7801\u3002\u5f53\u5176\u4ed6\u7ebf\u7a0b\u5b8c\u6210\u65f6\uff0c\u5c06\u4e8b\u5148\u4f20\u9012\u7684\u56de\u8c03\u51fd\u6570\u5305\u88c5\u6210\u5a01\u6b66\uff0c\u52a0\u5165\u5230\u6d88\u606f\u961f\u5217\u7684\u672b\u5c3e\u6392\u961f\uff0c\u7b49\u5f85\u4e3b\u7ebf\u7a0b\u8c03\u5ea6\u6267\u884c"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u6837\u5c31\u4fdd\u8bc1\u6d4f\u89c8\u5668\u6c38\u4e0d\u963b\u585e\uff0c\u6700\u5927\u9650\u5ea6\u4fdd\u8bc1\u5355\u7ebf\u7a0b\u7684\u6d41\u7a0b\u8fd0\u884c"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"\u5355\u7ebf\u7a0b\u662f\u5f02\u6b65\u4ea7\u751f\u7684\u539f\u56e0"})}),"\n",(0,r.jsx)(e.h3,{id:"62-\u4e8b\u4ef6\u5faa\u73af",children:"6.2 \u4e8b\u4ef6\u5faa\u73af"}),"\n",(0,r.jsx)(e.p,{children:"\u4e8b\u4ef6\u5faa\u73af\u53c8\u79f0\u6d88\u606f\u5faa\u73af\uff0c\u662f\u6d4f\u89c8\u5668\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u7684\u5de5\u4f5c\u65b9\u5f0f"}),"\n",(0,r.jsx)(e.p,{children:"\u5728 Chrome \u6e90\u7801\u4e2d\uff0c\u5b83\u5f00\u542f\u4e00\u4e2a\u4e0d\u4f1a\u7ed3\u675f\u7684 for \u5faa\u73af\uff0c\u6bcf\u6b21\u5faa\u73af\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u53d6\u51fa\u7b2c\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\uff0c\u5176\u4ed6\u7ebf\u7a0b\u53ea\u9700\u5728\u5408\u9002\u7684\u65f6\u673a\u5c06\u4efb\u52a1\u52a0\u5230\u961f\u5217\u672b\u5c3e"}),"\n",(0,r.jsx)(e.p,{children:"\u8fc7\u53bb\u6d88\u606f\u961f\u5217\u7b80\u5355\u5206\u4e3a\u5b8f\u961f\u5217\u548c\u5fae\u961f\u5217\uff0c\u76ee\u524d\u65e0\u6cd5\u6ee1\u8db3\u590d\u6742\u7684\u6d4f\u89c8\u5668\u73af\u5883"}),"\n",(0,r.jsx)(e.p,{children:"W3C \u6700\u65b0\u89e3\u91ca\u4e3a\uff0c\u6bcf\u4e2a\u4efb\u52a1\u6709\u4e0d\u540c\u7c7b\u578b\uff0c\u540c\u7c7b\u578b\u4efb\u52a1\u5fc5\u987b\u5728\u540c\u4e00\u4e2a\u961f\u5217\uff0c\u4e0d\u540c\u4efb\u52a1\u53ef\u4ee5\u5c5e\u4e8e\u4e0d\u540c\u961f\u5217\u3002\u4e0d\u540c\u4efb\u52a1\u961f\u5217\u6709\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\u3002\u5728\u4e00\u6b21\u4e8b\u4ef6\u5faa\u73af\u4e2d\uff0c\u6d4f\u89c8\u5668\u81ea\u884c\u51b3\u5b9a\u62ff\u53d6\u961f\u5217\u7684\u4efb\u52a1\uff0c\u4f46\u662f\u5fc5\u987b\u6709\u4e00\u4e2a\u5fae\u961f\u5217\uff0c\u5fae\u961f\u5217\u4efb\u52a1\u4f18\u5148\u7ea7\u6700\u9ad8\uff0c\u4f18\u5148\u8c03\u5ea6\u6267\u884c\uff08\u7528\u6237\u4ea4\u4e92\u961f\u5217\u4f18\u5148\u7ea7\u9ad8\u4e8e\u5ef6\u65f6\u961f\u5217\uff09"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"\u4e8b\u4ef6\u5faa\u73af\u662f\u5f02\u6b65\u7684\u5b9e\u73b0\u65b9\u5f0f"})}),"\n",(0,r.jsx)(e.h3,{id:"63-\u8ba1\u65f6\u5668\u4e0d\u53ef\u4ee5\u7cbe\u51c6\u8ba1\u65f6",children:"6.3 \u8ba1\u65f6\u5668\u4e0d\u53ef\u4ee5\u7cbe\u51c6\u8ba1\u65f6"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8ba1\u7b97\u673a\u786c\u4ef6\u6ca1\u6709\u539f\u5b50\u949f\uff0c\u65e0\u6cd5\u7cbe\u786e\u8ba1\u65f6"}),"\n",(0,r.jsx)(e.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\u7684\u8ba1\u65f6\u51fd\u6570\u672c\u8eab\u6709\u5c11\u91cf\u504f\u5dee\uff0c js \u8ba1\u65f6\u5668\u6700\u7ec8\u8c03\u7528\u7684\u662f\u64cd\u4f5c\u7cfb\u7edf\u7684\u51fd\u6570\uff0c\u643a\u5e26\u504f\u5dee"}),"\n",(0,r.jsx)(e.li,{children:"W3C \u6807\u51c6\uff0c\u6d4f\u89c8\u5668\u5b9e\u73b0\u8ba1\u65f6\u5668\uff0c\u5982\u679c\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7 5 \u5c42\uff0c\u4f1a\u6709 4 \u6beb\u79d2\u7684\u6700\u5c11\u65f6\u95f4\uff0c\u6545\u8ba1\u65f6\u65f6\u95f4\u5c11\u4e8e 4 \u6beb\u79d2\u65f6\u4e5f\u4f1a\u6709\u504f\u5dee"}),"\n",(0,r.jsx)(e.li,{children:"\u53d7\u4e8b\u4ef6\u5faa\u73af\u5f71\u54cd\uff0c\u8ba1\u65f6\u5668\u7684\u56de\u8c03\u51fd\u6570\u53ea\u80fd\u5728\u4e3b\u7ebf\u7a0b\u7a7a\u95f2\u65f6\u8fd0\u884c\uff0c\u6545\u53c8\u6709\u504f\u5dee"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/chromium/chromium/blob/7724fb4613ca1ba2a2b28a8a41673a1ddc6dd306/third_party/blink/renderer/modules/scheduler/dom_timer.cc#L52",children:"https://github.com/chromium/chromium/blob/7724fb4613ca1ba2a2b28a8a41673a1ddc6dd306/third_party/blink/renderer/modules/scheduler/dom_timer.cc#L52"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html",children:"https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html"})})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}}}]);