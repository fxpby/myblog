"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[6053],{28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:e},n.children)}},76792:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"coding/typescript/typeof-guard","title":"typeof \u7c7b\u578b\u5b88\u536b","description":"typeof \u8fd4\u56de\u5b57\u7b26\u4e32","source":"@site/docs/coding/typescript/typeof-guard.md","sourceDirName":"coding/typescript","slug":"/coding/typescript/typeof-guard","permalink":"/myblog/docs/coding/typescript/typeof-guard","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/typescript/typeof-guard.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"tsconfig.json","permalink":"/myblog/docs/coding/typescript/tsconfig"},"next":{"title":"\u6e90\u7801\u5b66\u4e60 - \u6784\u5efa","permalink":"/myblog/docs/coding/framework/vue/vue2-build"}}');var t=s(74848),i=s(28453);const l={},c="typeof \u7c7b\u578b\u5b88\u536b",o={},d=[{value:"\u7c7b\u578b\u7f29\u5c0f",id:"\u7c7b\u578b\u7f29\u5c0f",level:2},{value:"\u771f\u503c\u7f29\u5c0f",id:"\u771f\u503c\u7f29\u5c0f",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"typeof-\u7c7b\u578b\u5b88\u536b",children:"typeof \u7c7b\u578b\u5b88\u536b"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"typeof"})," \u8fd4\u56de\u5b57\u7b26\u4e32"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"object"}),"\n",(0,t.jsx)(e.li,{children:"string"}),"\n",(0,t.jsx)(e.li,{children:"number"}),"\n",(0,t.jsx)(e.li,{children:"bigint"}),"\n",(0,t.jsx)(e.li,{children:"symbol"}),"\n",(0,t.jsx)(e.li,{children:"undefined"}),"\n",(0,t.jsx)(e.li,{children:"function"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u68c0\u67e5 ",(0,t.jsx)(e.code,{children:"typeof"})," \u8fd4\u56de\u503c\u662f\u4e00\u79cd",(0,t.jsx)(e.code,{children:"\u7c7b\u578b\u4fdd\u62a4"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u7c7b\u578b\u7f29\u5c0f",children:"\u7c7b\u578b\u7f29\u5c0f"}),"\n",(0,t.jsx)(e.p,{children:"\u5c06\u7c7b\u578b\u7ec6\u5316\u4e3a\u6bd4\u58f0\u660e\u66f4\u5177\u4f53\u7684\u7c7b\u578b\u7684\u8fc7\u7a0b"}),"\n",(0,t.jsxs)(e.p,{children:["\u4e0b\u9762\u4ee3\u7801\u4e2d ",(0,t.jsx)(e.code,{children:"padding"})," \u7684\u7c7b\u578b\u53ef\u4ee5\u662f ",(0,t.jsx)(e.code,{children:"number"})," \u6216\u8005 ",(0,t.jsx)(e.code,{children:"string"}),"\uff0c\u4e0b\u9762\u4ee3\u7801\u6bb5\u4e2d\u7684",(0,t.jsx)(e.code,{children:"typeof padding === 'number'"}),"\u8fd9\u4e2a\u68c0\u67e5\u5c31\u662f",(0,t.jsx)(e.code,{children:"\u7c7b\u578b\u9632\u62a4"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function padLeft(padding: number | string, input: string): string {\n  if (typeof padding === 'number') {\n    return new Array(padding + 1).join(' ') + input\n  } else {\n    return padding + input\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u771f\u503c\u7f29\u5c0f",children:"\u771f\u503c\u7f29\u5c0f"}),"\n",(0,t.jsx)(e.p,{children:"\u5148\u4e86\u89e3\u4e00\u4e0b typerscript \u4e2d\u7684 fasly \u5047\u503c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"0"}),"\n",(0,t.jsx)(e.li,{children:"NaN"}),"\n",(0,t.jsx)(e.li,{children:'"" (\u7a7a\u5b57\u7b26\u4e32)'}),"\n",(0,t.jsx)(e.li,{children:"0n (bigint \u7684\u96f6)"}),"\n",(0,t.jsx)(e.li,{children:"null"}),"\n",(0,t.jsx)(e.li,{children:"undefined"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c31\u662f\u5229\u7528\u6761\u4ef6\u5224\u65ad\u53bb\u8fdb\u884c\u771f\u503c\u7f29\u5c0f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function printAll(strs: string | string[] | null) {\n  if (strs && typeof strs === 'object') {\n    strs.forEach(s => {\n      console.log(s)\n    })\n  } else if (typeof strs === 'string') {\n    console.log(strs.concat('hello'))\n  } else {\n    // ...\n  }\n}\n\nfunction getUserOnlineMessage(numUsersOnline: number) {\n  if (numUsersOnline) {\n    return `\u73b0\u5728\u5171\u6709 ${numUsersOnline} \u4eba\u5728\u7ebf`\n  }\n  return `\u73b0\u5728\u6ca1\u6709\u4eba\u5728\u7ebf`\n}\n\nfunction multiplyAll(values: number[] | undefined, factor: number) {\n  if (!values) {\n    return values\n  } else {\n    return values.map(x => {\n      return x * factor\n    })\n  }\n}\nconsole.log(multiplyAll([2, 3, 4], 3))\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}}}]);