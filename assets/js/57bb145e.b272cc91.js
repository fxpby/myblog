"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[7330],{28453:(e,c,n)=>{n.d(c,{R:()=>s,x:()=>l});var r=n(96540);const o={},t=r.createContext(o);function s(e){const c=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function l(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:c},e.children)}},65411:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"coding/network/cache/browser-load-mode-http-cache","title":"chrome\u4e2d\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f\u4e0ehttp\u7f13\u5b58\u7684\u5173\u7cfb","description":"Chrome \u4e2d\u7684\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f","source":"@site/docs/coding/network/cache/browser-load-mode-http-cache.md","sourceDirName":"coding/network/cache","slug":"/coding/network/cache/browser-load-mode-http-cache","permalink":"/myblog/docs/coding/network/cache/browser-load-mode-http-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/network/cache/browser-load-mode-http-cache.md","tags":[{"inline":true,"label":"cache","permalink":"/myblog/docs/tags/cache"},{"inline":true,"label":"\u7f13\u5b58","permalink":"/myblog/docs/tags/\u7f13\u5b58"}],"version":"current","frontMatter":{"id":"browser-load-mode-http-cache","title":"chrome\u4e2d\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f\u4e0ehttp\u7f13\u5b58\u7684\u5173\u7cfb","tags":["cache","\u7f13\u5b58"]},"sidebar":"tutorialSidebar","previous":{"title":"\u5f80\u8fd4\u7f13\u5b58(Back/forward cache)","permalink":"/myblog/docs/coding/network/cache/bfcache"},"next":{"title":"\u7f13\u5b58\u76f8\u5173\u7b97\u6cd5","permalink":"/myblog/docs/coding/network/cache/cache-algorithm"}}');var o=n(74848),t=n(28453);const s={id:"browser-load-mode-http-cache",title:"chrome\u4e2d\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f\u4e0ehttp\u7f13\u5b58\u7684\u5173\u7cfb",tags:["cache","\u7f13\u5b58"]},l=void 0,i={},d=[{value:"Chrome \u4e2d\u7684\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f",id:"chrome-\u4e2d\u7684\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f",level:2},{value:"\u6b63\u5e38\u91cd\u65b0\u52a0\u8f7d",id:"\u6b63\u5e38\u91cd\u65b0\u52a0\u8f7d",level:3},{value:"\u786c\u6027\u91cd\u65b0\u52a0\u8f7d",id:"\u786c\u6027\u91cd\u65b0\u52a0\u8f7d",level:3},{value:"\u6e05\u7a7a\u7f13\u5b58\u5e76\u786c\u6027\u91cd\u65b0\u52a0\u8f7d",id:"\u6e05\u7a7a\u7f13\u5b58\u5e76\u786c\u6027\u91cd\u65b0\u52a0\u8f7d",level:3},{value:"\u7279\u6b8a\u573a\u666f",id:"\u7279\u6b8a\u573a\u666f",level:2}];function a(e){const c={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.h2,{id:"chrome-\u4e2d\u7684\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f",children:"Chrome \u4e2d\u7684\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f"}),"\n",(0,o.jsx)(c.p,{children:"\u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458\uff0c\u6211\u4eec\u5e73\u65f6\u6253\u5f00\u63a7\u5236\u53f0\u65f6\uff0c\u6d4f\u89c8\u5668\u5237\u65b0\u6309\u94ae\u53f3\u952e\u4f1a\u5c55\u793a\u4e09\u79cd\u52a0\u8f7d\u6a21\u5f0f\uff0c\u5206\u522b\u662f\uff1a"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:"\u6b63\u5e38\u91cd\u65b0\u52a0\u8f7d"}),"\n",(0,o.jsx)(c.li,{children:"\u786c\u6027\u91cd\u65b0\u52a0\u8f7d"}),"\n",(0,o.jsx)(c.li,{children:"\u6e05\u7a7a\u7f13\u5b58\u5e76\u786c\u6027\u91cd\u65b0\u52a0\u8f7d"}),"\n"]}),"\n",(0,o.jsx)(c.h3,{id:"\u6b63\u5e38\u91cd\u65b0\u52a0\u8f7d",children:"\u6b63\u5e38\u91cd\u65b0\u52a0\u8f7d"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:"windows: ctrl + r (\u7b49\u540c\u4e8e F5)"}),"\n",(0,o.jsx)(c.li,{children:"mac: command + r"}),"\n"]}),"\n",(0,o.jsx)(c.p,{children:"\u8fd9\u79cd\u52a0\u8f7d\u6a21\u5f0f\u5c31\u662f\u5e38\u8bf4\u7684\u201c\u5237\u65b0\u7f51\u9875\u201d\uff0c\u548c\u76f4\u63a5\u70b9\u51fb\u6d4f\u89c8\u5668\u4e2d\u7684\u5237\u65b0\u6309\u94ae\u6548\u679c\u4e00\u81f4\uff0c\u8fd9\u79cd\u573a\u666f\u5927\u591a\u6570\u8d44\u6e90\u4f1a\u547d\u4e2d\u5f3a\u7f13\u5b58\uff08\u5927\u90e8\u5206\u4ecememory cache\u4e2d\u8bfb\u53d6\uff09"}),"\n",(0,o.jsx)(c.h3,{id:"\u786c\u6027\u91cd\u65b0\u52a0\u8f7d",children:"\u786c\u6027\u91cd\u65b0\u52a0\u8f7d"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:"windows: ctrl + shift + r (\u7b49\u540c\u4e8e ctrl + F5)"}),"\n",(0,o.jsx)(c.li,{children:"mac: command + shift + r"}),"\n"]}),"\n",(0,o.jsxs)(c.p,{children:["\u786c\u6027\u91cd\u65b0\u52a0\u8f7d\u76f8\u5f53\u4e8e\u5f3a\u5236\u5237\u65b0\u7f51\u9875\uff0c\u8fdb\u884c\u8fd9\u4e2a\u64cd\u4f5c\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u6240\u6709\u8d44\u6e90\u90fd\u91cd\u65b0\u5411\u670d\u52a1\u5668\u83b7\u53d6\uff0c\u68c0\u67e5\u8bf7\u6c42\u62a5\u5934\u4f1a\u53d1\u73b0\u4f7f\u7528\u786c\u6027\u91cd\u65b0\u52a0\u8f7d\u540e\u6240\u6709\u8d44\u6e90\u7684\u8bf7\u6c42\u9996\u90e8\u90fd\u88ab\u52a0\u4e0a\u4e86 ",(0,o.jsx)(c.code,{children:"cache-control: no-cache"})," \u548c ",(0,o.jsx)(c.code,{children:"pragma: no-cache"}),", \u8fd9\u4fe9\u90fd\u610f\u5473\u7740\u544a\u77e5\uff08\u4ee3\u7406\uff09\u670d\u52a1\u5668\u4e0d\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\uff0c\u5411\u6e90\u670d\u52a1\u5668\u53d1\u8d77\u8bf7\u6c42\uff0c ",(0,o.jsx)(c.code,{children:"pragma"})," \u662f\u4e3a\u4e86\u517c\u5bb9 ",(0,o.jsx)(c.code,{children:"HTTP/1.0"})]}),"\n",(0,o.jsxs)(c.p,{children:["\u6240\u4ee5\u8bf4\u786c\u6027\u91cd\u65b0\u52a0\u8f7d\u6ca1\u6709\u6e05\u7a7a\u7f13\u5b58\u800c\u662f",(0,o.jsx)(c.strong,{children:"\u7981\u7528\u7f13\u5b58"}),"\uff0c\u7c7b\u4f3c\u63a7\u5236\u53f0 Network \u9762\u677f\u52fe\u9009 ",(0,o.jsx)(c.code,{children:"Disable cache"})," \u9009\u9879"]}),"\n",(0,o.jsx)(c.p,{children:"\u786c\u6027\u91cd\u65b0\u52a0\u8f7d\u6ca1\u6709\u6e05\u7a7a\u7f13\u5b58\uff0c\u5f02\u6b65\u8d44\u6e90\u5728\u9875\u9762\u8f7d\u5165\u5b8c\u6210\u540e\u63d2\u5165\u65f6\uff0c\u52a0\u8f7d\u4f9d\u7136\u4f18\u5148\u7f13\u5b58"}),"\n",(0,o.jsx)(c.h3,{id:"\u6e05\u7a7a\u7f13\u5b58\u5e76\u786c\u6027\u91cd\u65b0\u52a0\u8f7d",children:"\u6e05\u7a7a\u7f13\u5b58\u5e76\u786c\u6027\u91cd\u65b0\u52a0\u8f7d"}),"\n",(0,o.jsx)(c.p,{children:"\u4f1a\u5c06\u6d4f\u89c8\u5668\u5b58\u50a8\u7684\u672c\u5730\u7f13\u5b58\u90fd\u6e05\u7a7a\uff0c\u518d\u91cd\u65b0\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u6240\u6709\u8bbf\u95ee\u8fc7\u7684\u7f51\u7ad9\u7f13\u5b58\u90fd\u88ab\u6e05\u9664"}),"\n",(0,o.jsx)(c.h2,{id:"\u7279\u6b8a\u573a\u666f",children:"\u7279\u6b8a\u573a\u666f"}),"\n",(0,o.jsxs)(c.p,{children:["\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u60c5\u51b5\u5c31\u662f ",(0,o.jsx)(c.code,{children:"base 64"})," \u56fe\u7247\uff0c\u8fd9\u79cd\u8d44\u6e90\u4e0d\u7ba1\u662f\u9996\u6b21\u52a0\u8f7d\u8fd8\u662f\u6e05\u7a7a\u7f13\u5b58\u90fd\u4e0d\u751f\u6548\uff0c",(0,o.jsx)(c.code,{children:"base 64"})," \u672c\u8d28\u662f\u4e00\u5806\u5b57\u7b26\u4e32\uff0c\u4f34\u968f\u9875\u9762\u6e32\u67d3\u800c\u52a0\u8f7d\uff0c\u6d4f\u89c8\u5668\u89e3\u6790\u4f1a\u6d88\u8017\u6027\u80fd\uff0c\u6240\u4ee5\u4f1a\u88ab\u786c\u585e\u8fdb ",(0,o.jsx)(c.code,{children:"memory cache"})]})]})}function h(e={}){const{wrapper:c}={...(0,t.R)(),...e.components};return c?(0,o.jsx)(c,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}}}]);