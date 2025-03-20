"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[4438],{28453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>s});var c=i(96540);const l={},r=c.createContext(l);function d(n){const e=c.useContext(r);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),c.createElement(r.Provider,{value:e},n.children)}},71662:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"coding/front-end-engineering/cicd/cicd-intro","title":"CI/CD \u57fa\u672c\u6982\u5ff5","description":"CI/CD \u662f\u4ec0\u4e48","source":"@site/docs/coding/front-end-engineering/cicd/cicd-intro.md","sourceDirName":"coding/front-end-engineering/cicd","slug":"/coding/front-end-engineering/cicd/cicd-intro","permalink":"/docs/coding/front-end-engineering/cicd/cicd-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/front-end-engineering/cicd/cicd-intro.md","tags":[{"inline":true,"label":"\u5de5\u7a0b\u5316","permalink":"/docs/tags/\u5de5\u7a0b\u5316"}],"version":"current","frontMatter":{"id":"cicd-intro","title":"CI/CD \u57fa\u672c\u6982\u5ff5","tags":["\u5de5\u7a0b\u5316"]},"sidebar":"tutorialSidebar","previous":{"title":"Babel","permalink":"/docs/coding/front-end-engineering/babel"},"next":{"title":"Jenkins \u6301\u7eed\u96c6\u6210\u4e0e\u90e8\u7f72\u7b80\u4ecb","permalink":"/docs/coding/front-end-engineering/cicd/jenkins-intro"}}');var l=i(74848),r=i(28453);const d={id:"cicd-intro",title:"CI/CD \u57fa\u672c\u6982\u5ff5",tags:["\u5de5\u7a0b\u5316"]},s=void 0,t={},o=[{value:"CI/CD \u662f\u4ec0\u4e48",id:"cicd-\u662f\u4ec0\u4e48",level:2},{value:"CI: \u6301\u7eed\u96c6\u6210\uff08Continuous Integration\uff09",id:"ci-\u6301\u7eed\u96c6\u6210continuous-integration",level:3},{value:"CD",id:"cd",level:2},{value:"\u6301\u7eed\u4ea4\u4ed8\uff08Continuous Delivery\uff09",id:"\u6301\u7eed\u4ea4\u4ed8continuous-delivery",level:3},{value:"\u6301\u7eed\u90e8\u7f72\uff08Continuous Deployment\uff09",id:"\u6301\u7eed\u90e8\u7f72continuous-deployment",level:3},{value:"\u610f\u4e49\u548c\u4ef7\u503c",id:"\u610f\u4e49\u548c\u4ef7\u503c",level:3},{value:"CI/CD \u7684\u5b9e\u73b0",id:"cicd-\u7684\u5b9e\u73b0",level:2},{value:"CI \u7684\u5b9e\u73b0",id:"ci-\u7684\u5b9e\u73b0",level:3},{value:"CD \u7684\u5b9e\u73b0",id:"cd-\u7684\u5b9e\u73b0",level:3}];function u(n){const e={h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"cicd-\u662f\u4ec0\u4e48",children:"CI/CD \u662f\u4ec0\u4e48"}),"\n",(0,l.jsx)(e.h3,{id:"ci-\u6301\u7eed\u96c6\u6210continuous-integration",children:"CI: \u6301\u7eed\u96c6\u6210\uff08Continuous Integration\uff09"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u9ad8\u9891\u5730"}),"\u3001",(0,l.jsx)(e.strong,{children:"\u81ea\u52a8\u5316"}),"\u5730\u5c06\u4e2a\u4eba\u5f00\u53d1\u7684\u4ee3\u7801\u96c6\u6210\u5230\u5f00\u53d1",(0,l.jsx)(e.strong,{children:"\u4e3b\u7ebf"}),"\u4e2d"]}),"\n",(0,l.jsx)(e.p,{children:"\u5f00\u53d1\u4eba\u5458\u63d0\u4ea4\u65b0\u4ee3\u7801\u540e\uff0c\u7acb\u523b\u8fdb\u884c\u6784\u5efa\u3001\uff08\u5355\u5143\uff09\u6d4b\u8bd5\u3002\u6839\u636e\u6d4b\u8bd5\u7ed3\u679c\uff0c\u786e\u5b9a\u65b0\u4ee3\u7801\u548c\u539f\u6709\u4ee3\u7801\u80fd\u5426\u6b63\u786e\u5730\u96c6\u6210\u5728\u4e00\u8d77"}),"\n",(0,l.jsx)(e.h2,{id:"cd",children:"CD"}),"\n",(0,l.jsx)(e.h3,{id:"\u6301\u7eed\u4ea4\u4ed8continuous-delivery",children:"\u6301\u7eed\u4ea4\u4ed8\uff08Continuous Delivery\uff09"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6301\u7eed\u96c6\u6210\u7684\u57fa\u7840\u4e0a\uff0c\u5c06\u96c6\u6210\u540e\u7684\u4ee3\u7801\u90e8\u7f72\u5230\u66f4\u8d34\u8fd1\u771f\u5b9e\u8fd0\u884c\u73af\u5883\u7684\u201c\u7c7b\u751f\u4ea7\u73af\u5883\u201d\u4e2d"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c3d\u5feb\u4ea4\u4ed8\u7ed9 QA \u4eba\u5458"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u201c\u7c7b\u751f\u4ea7\u73af\u5883\u201d \u4e2d\u6d4b\u8bd5"}),"\n",(0,l.jsx)(e.li,{children:"\u4fdd\u8bc1\u6709\u4e00\u4e2a\u201c\u968f\u65f6\u53ef\u53d1\u5e03\u201d \u7684\u7248\u672c"}),"\n",(0,l.jsx)(e.li,{children:"\u90e8\u7f72\u53ef\u4ee5\u624b\u52a8"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u6301\u7eed\u90e8\u7f72continuous-deployment",children:"\u6301\u7eed\u90e8\u7f72\uff08Continuous Deployment\uff09"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6301\u7eed\u4ea4\u4ed8\u7684\u57fa\u7840\u4e0a\uff0c\u80fd\u591f\u81ea\u52a8\u5316\u5730\u5c06\u8f6f\u4ef6\u90e8\u7f72\u5728\u771f\u5b9e\u751f\u4ea7\u73af\u5883"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c3d\u5feb\u4ea4\u4ed8\u7ed9\u5ba2\u6237"}),"\n",(0,l.jsx)(e.li,{children:"\u4f53\u7cfb\u654f\u6377\u5f00\u53d1\u601d\u60f3"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u610f\u4e49\u548c\u4ef7\u503c",children:"\u610f\u4e49\u548c\u4ef7\u503c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f53\u7cfb\u654f\u6377\u5f00\u53d1\u601d\u60f3"}),"\n",(0,l.jsx)(e.li,{children:"\u9891\u7e41\u3001\u81ea\u52a8\u5316\u3001\u53ef\u91cd\u590d\u3002\u6d41\u7a0b\u50cf\u7ba1\u9053\uff0c\u4ee3\u7801\u50cf\u6c34"}),"\n",(0,l.jsx)(e.li,{children:"\u5feb\u901f\u5931\u8d25\uff0c\u5c3d\u65e9\u51fa\u73b0\u95ee\u9898\uff0c\u5c3d\u65e9\u89e3\u51b3"}),"\n",(0,l.jsx)(e.li,{children:"\u4e0d\u80fd\u4fdd\u8bc1 bug free\uff0c\u6240\u4ee5\u63d0\u9ad8\u53d1\u5e03\u9891\u7387\uff0c\u964d\u4f4e\u5355\u8bcd\u53d1\u5e03\u98ce\u9669"}),"\n",(0,l.jsx)(e.li,{children:"\u5feb\u901f\u4ea4\u4ed8\u7528\u6237\u4ef7\u503c\uff0c\u62e5\u62b1\u5e02\u573a\u53d8\u5316"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"cicd-\u7684\u5b9e\u73b0",children:"CI/CD \u7684\u5b9e\u73b0"}),"\n",(0,l.jsx)(e.h3,{id:"ci-\u7684\u5b9e\u73b0",children:"CI \u7684\u5b9e\u73b0"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4fdd\u8bc1\u534f\u4f5c\u8d28\u91cf"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4ee3\u7801\u98ce\u683c\u68c0\u67e5"}),"\n",(0,l.jsx)(e.li,{children:"\u7248\u672c\u89c4\u8303"}),"\n",(0,l.jsx)(e.li,{children:"git \u5206\u652f\u89c4\u8303"}),"\n",(0,l.jsx)(e.li,{children:"\u81ea\u52a8\u5316\u5355\u5143\u6d4b\u8bd5\u3001\u7aef\u5230\u7aef\u6d4b\u8bd5"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4fdd\u8bc1\u5931\u8d25\u53ef\u8ffd\u6eaf"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6d4b\u8bd5\u7ed3\u679c\u901a\u77e5\u8d23\u4efb\u4eba"}),"\n",(0,l.jsx)(e.li,{children:"changelog \u8bb0\u5f55"}),"\n",(0,l.jsx)(e.li,{children:"code review \u673a\u5236"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"cd-\u7684\u5b9e\u73b0",children:"CD \u7684\u5b9e\u73b0"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6301\u7eed\u4ea4\u4ed8","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u591a\u79cd\u7ea7\u522b\u7684\u6d4b\u8bd5\u73af\u5883"}),"\n",(0,l.jsx)(e.li,{children:"QA \u56e2\u961f\u529f\u80fd\u6d4b\u8bd5\u7684\u5feb\u901f\u54cd\u5e94"}),"\n",(0,l.jsx)(e.li,{children:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u8986\u76d6\u7387\u7684\u68c0\u67e5"}),"\n",(0,l.jsx)(e.li,{children:"\u53d1\u5e03\u6d41\u7a0b\u7684\u6807\u51c6\u5316"}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}}}]);