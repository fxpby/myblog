"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[1615],{2159:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>t});const c=JSON.parse('{"id":"coding/framework/runtime-compiletime","title":"\u8fd0\u884c\u65f6\u548c\u7f16\u8bd1\u65f6","description":"\u8fd0\u884c\u65f6\u6846\u67b6","source":"@site/docs/coding/framework/runtime-compiletime.md","sourceDirName":"coding/framework","slug":"/coding/framework/runtime-compiletime","permalink":"/myblog/docs/coding/framework/runtime-compiletime","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/framework/runtime-compiletime.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"React \u91cd\u65b0\u6e32\u67d3(re-render)","permalink":"/myblog/docs/coding/framework/react/react-re-renders"},"next":{"title":"\u521d\u63a2 Travis CI: \u5b9e\u73b0 VuePress \u81ea\u52a8\u5316\u90e8\u7f72","permalink":"/myblog/docs/coding/front-end-engineering/travis-ci-for-vuepress"}}');var d=r(74848),o=r(28453);const s={},i="\u8fd0\u884c\u65f6\u548c\u7f16\u8bd1\u65f6",l={},t=[{value:"\u8fd0\u884c\u65f6\u6846\u67b6",id:"\u8fd0\u884c\u65f6\u6846\u67b6",level:2},{value:"\u8fd0\u884c\u65f6 + \u7f16\u8bd1\u65f6\u6846\u67b6",id:"\u8fd0\u884c\u65f6--\u7f16\u8bd1\u65f6\u6846\u67b6",level:2},{value:"\u7f16\u8bd1\u65f6\u6846\u67b6",id:"\u7f16\u8bd1\u65f6\u6846\u67b6",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u8fd0\u884c\u65f6\u548c\u7f16\u8bd1\u65f6",children:"\u8fd0\u884c\u65f6\u548c\u7f16\u8bd1\u65f6"})}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd0\u884c\u65f6\u6846\u67b6",children:"\u8fd0\u884c\u65f6\u6846\u67b6"}),"\n",(0,d.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u4e00\u4e2a\u6846\u67b6\uff0c\u63d0\u4f9b\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"Render"})," \u51fd\u6570\uff0c\u7528\u6237\u53ef\u4ee5\u4e3a\u8be5\u51fd\u6570\u63d0\u4f9b\u4e00\u4e2a\u6811\u578b\u7ed3\u6784\u7684\u6570\u636e\u5bf9\u8c61\uff0c\u7136\u540e ",(0,d.jsx)(n.code,{children:"Render"})," \u51fd\u6570\u4f1a\u6839\u636e\u8be5\u5bf9\u8c61\u9012\u5f52\u5730\u5c06\u6570\u636e\u6e32\u67d3\u6210 ",(0,d.jsx)(n.code,{children:"DOM"})," \u5143\u7d20\uff0c\u6211\u4eec\u89c4\u5b9a\u6811\u578b\u7ed3\u6784\u7684\u6570\u636e\u5bf9\u8c61\u5982\u4e0b\ud83d\udc47\ud83c\udffb"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const obj = {\n  tag: 'div',\n  children: [\n    {tag: 'span', children: 'hello March'}\n  ]\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4e2d\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709\u4e24\u4e2a\u5c5e\u6027\uff0c",(0,d.jsx)(n.code,{children:"tag"})," \u4ee3\u8868\u6807\u7b7e\u540d\u79f0\uff0c",(0,d.jsx)(n.code,{children:"children"})," \u53ef\u4ee5\u662f\u4e00\u4e2a\u6570\u7ec4\uff08\u5b50\u8282\u70b9\uff09\u6216\u8005\u4e00\u6bb5\u6587\u672c\uff08\u6587\u672c\u5b50\u8282\u70b9\uff09\u3002\u6211\u4eec\u7ee7\u7eed\u5b9e\u73b0 ",(0,d.jsx)(n.code,{children:"Render"})," \u51fd\u6570\ud83d\udc47\ud83c\udffb"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"function Render(obj, root) {\n  const el = document.createElement(obj.tag)\n  if (typeof obj.children === 'string') {\n    const text = document.createTextNode(obj.children)\n    el.appendChild(text)\n  } else if (obj.children) {\n    // \u6570\u7ec4\uff0c\u9012\u5f52\u8c03\u7528 Render, \u4f7f\u7528 el \u4f5c\u4e3a root \u53c2\u6570\n    obj.children.forEach(child => {\n      Render(child, el)\n    })\n  }\n\n  // \u6700\u540e\u5c06\u5143\u7d20\u6dfb\u52a0\u5230 root\n  root.appendChild(el)\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u6837\u7684\u8bdd\uff0c\u7528\u6237\u5c31\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u4f7f\u7528\u4e86\ud83d\udc47\ud83c\udffb"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const obj = {\n  tag: 'div',\n  children: [\n    {tag: 'span', children: 'hello March'}\n  ]\n}\n\nRender(obj, document.body)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f46\u662f\u8fd9\u6837\u624b\u5199\u6811\u578b\u7ed3\u6784\u7684\u6570\u636e\u5bf9\u8c61\u5f88\u7e41\u7410\u5e76\u4e14\u4e5f\u4e0d\u76f4\u89c2\uff0c\u6211\u4eec\u5f00\u59cb\u601d\u8003\u80fd\u5426\u5f15\u5165\u7f16\u8bd1\u7684\u624b\u6bb5\uff0c\u628a ",(0,d.jsx)(n.code,{children:"HTML"})," \u6807\u7b7e\u7f16\u8bd1\u6210\u6811\u578b\u7ed3\u6784\u5bf9\u8c61\uff0c\u8fd9\u6837\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u6211\u4eec\u7684 ",(0,d.jsx)(n.code,{children:"Render"})," \u51fd\u6570"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd0\u884c\u65f6--\u7f16\u8bd1\u65f6\u6846\u67b6",children:"\u8fd0\u884c\u65f6 + \u7f16\u8bd1\u65f6\u6846\u67b6"}),"\n",(0,d.jsxs)(n.p,{children:["\u5047\u8bbe\u6211\u4eec\u73b0\u5728\u7f16\u5199\u4e86\u4e00\u4e2a\u53eb\u505a ",(0,d.jsx)(n.code,{children:"Compiler"})," \u7684\u7a0b\u5e8f\uff0c\u8fd9\u4e2a\u7a0b\u5e8f\u7684\u4f5c\u7528\u662f\u628a ",(0,d.jsx)(n.code,{children:"HTML"})," \u5b57\u7b26\u4e32\u7f16\u8bd1\u6210\u6811\u578b\u7ed3\u6784\u7684\u6570\u636e\u5bf9\u8c61\uff0c\u7528\u6237\u53ef\u4ee5\u53bb\u5206\u522b\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"Compiler"})," \u548c ",(0,d.jsx)(n.code,{children:"Render"})," \u51fd\u6570\ud83d\udc47\ud83c\udffb"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const html = `\n<div>\n  <span>Hello March</span>\n</div>\n`\n\n// \u8c03\u7528 Compiler \u7f16\u8bd1\u5f97\u5230\u6811\u578b\u7ed3\u6784\u7684\u6570\u636e\u5bf9\u8c61\nconst obj = Compiler(html)\nRender(obj, document.body)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u5176\u5b9e\u662f",(0,d.jsx)(n.strong,{children:"\u8fd0\u884c\u65f6\u7f16\u8bd1"}),"\uff0c\u4e5f\u5c31\u662f\u4ee3\u7801\u8fd0\u884c\u65f6\u624d\u5f00\u59cb\u7f16\u8bd1\uff0c\u4f1a\u4ea7\u751f\u4e00\u5b9a\u7684\u6027\u80fd\u5f00\u9500"]}),"\n",(0,d.jsx)(n.h2,{id:"\u7f16\u8bd1\u65f6\u6846\u67b6",children:"\u7f16\u8bd1\u65f6\u6846\u67b6"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:"<div>\n  <span>Hello March</span>\n</div>\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u8fd9\u6bb5 ",(0,d.jsx)(n.code,{children:"HTML"})," \u5b57\u7b26\u4e32\u53ef\u4ee5\u88ab\u7f16\u8bd1\u4e3a\u547d\u4ee4\u5f0f\u4ee3\u7801\ud83d\udc47\ud83c\udffb"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const div = document.createElement('div')\nconst span = document.createElement('span')\nspan.innerText = 'Hello March'\ndiv.appendChild(span)\ndocument.body.appendChild(div)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6837\u53ea\u9700\u8981\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"Compiler"})," \u51fd\u6570\u5c31\u53ef\u4ee5\u4e86\uff0c\u4e0d\u9700\u8981 ",(0,d.jsx)(n.code,{children:"Render"})," \u51fd\u6570\u4e86\uff0c\u73b0\u5728\u8fd9\u4e2a\u5c31\u662f\u4e00\u4e2a\u7eaf\u7f16\u8bd1\u65f6\u7684\u6846\u67b6\uff0c\u4e0d\u652f\u6301\u4efb\u4f55\u8fd0\u884c\u65f6\u7684\u5185\u5bb9\uff0c\u4ee3\u7801\u901a\u8fc7\u7f16\u8bd1\u5668\u7f16\u8bd1\u540e\u624d\u80fd\u8fd0\u884c"]}),"\n",(0,d.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,d.jsx)(n.p,{children:"\u7eaf\u8fd0\u884c\u65f6\u7684\u6846\u67b6\u6ca1\u6709\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u65e0\u6cd5\u5206\u6790\u7528\u6237\u63d0\u4f9b\u7684\u5185\u5bb9\n\u7eaf\u7f16\u8bd1\u65f6\u7684\u6846\u67b6\u4e0d\u9700\u8981\u4efb\u4f55\u8fd0\u884c\u65f6\uff0c\u76f4\u63a5\u7f16\u8bd1\u6210\u53ef\u6267\u884c\u7684 js \u4ee3\u7801\uff0c\u6027\u80fd\u53ef\u80fd\u4f1a\u66f4\u597d\uff0c\u4f46\u662f\u7075\u6d3b\u6027\u964d\u4f4e\uff0c\u4e5f\u5c31\u662f\u7528\u6237\u63d0\u4f9b\u7684\u5185\u5bb9\u5fc5\u987b\u7f16\u8bd1\u540e\u624d\u80fd\u4f7f\u7528"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var c=r(96540);const d={},o=c.createContext(d);function s(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);