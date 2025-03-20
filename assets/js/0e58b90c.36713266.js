"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[9449],{13178:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"coding/typescript/basic/ts-interfaces","title":"\u63a5\u53e3","description":"\u4f7f\u7528\u63a5\u53e3\u5b9a\u4e49\u5bf9\u8c61\u7684\u7c7b\u578b","source":"@site/docs/coding/typescript/basic/ts-interfaces.md","sourceDirName":"coding/typescript/basic","slug":"/coding/typescript/basic/ts-interfaces","permalink":"/docs/coding/typescript/basic/ts-interfaces","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/typescript/basic/ts-interfaces.md","tags":[{"inline":true,"label":"TypeScript","permalink":"/docs/tags/type-script"}],"version":"current","frontMatter":{"id":"ts-interfaces","title":"\u63a5\u53e3","tags":["TypeScript"]},"sidebar":"tutorialSidebar","previous":{"title":"\u51fd\u6570","permalink":"/docs/coding/typescript/basic/ts-function"},"next":{"title":"\u547d\u540d\u7a7a\u95f4","permalink":"/docs/coding/typescript/basic/ts-namespace"}}');var t=r(74848),i=r(28453);const c={id:"ts-interfaces",title:"\u63a5\u53e3",tags:["TypeScript"]},a=void 0,o={},d=[{value:"\u53ef\u9009\u5c5e\u6027",id:"\u53ef\u9009\u5c5e\u6027",level:2},{value:"\u4efb\u610f\u5c5e\u6027",id:"\u4efb\u610f\u5c5e\u6027",level:2},{value:"\u53ea\u8bfb\u5c5e\u6027",id:"\u53ea\u8bfb\u5c5e\u6027",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u63a5\u53e3\u5b9a\u4e49\u5bf9\u8c61\u7684\u7c7b\u578b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface Point1 {\r\n  x: number,\r\n  y: string\r\n}\r\nfunction foo9(pt: Point1) {\r\n  console.log(pt)\r\n}\r\nfoo9({x: 233, y: '233'})\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u53e3\u662f\u53ef\u4ee5\u62d3\u5c55\u7ee7\u627f\u7684"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface Animal {\r\n  name: string\r\n}\r\n\r\ninterface Bear extends Animal {\r\n  age: number\r\n}\r\n\r\nconst bear: Bear = {\r\n  name: 'weini',\r\n  age: 23\r\n}\r\nconsole.log(bear.name, bear.age)\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5411\u73b0\u6709\u7684\u63a5\u53e3\u6dfb\u52a0\u65b0\u5b57\u6bb5\uff08\u53ef\u540c\u540d\u65b9\u5f0f\u62d3\u5c55\uff09"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface MyWindow {\r\n  count: number;\r\n}\r\ninterface MyWindow {\r\n  title: string;\r\n}\r\nconst window: MyWindow = {\r\n  count: 1,\r\n  title: '233'\r\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53ef\u9009\u5c5e\u6027",children:"\u53ef\u9009\u5c5e\u6027"}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u5c5e\u6027\u53ef\u4ee5\u4e0d\u5b58\u5728, \u4ecd\u7136\u4e0d\u5141\u8bb8\u6dfb\u52a0\u672a\u5b9a\u4e49\u7684\u5c5e\u6027"}),"\n",(0,t.jsxs)(e.p,{children:["\u5bf9\u8c61\u5c5e\u6027\u540d\u79f0\u540e\u9762\u52a0\u4e0a ",(0,t.jsx)(e.code,{children:"?"})," \u4ee3\u8868\u8fd9\u4e2a\u503c\u53ef\u4ee5\u4e0d\u4f20\uff0c\u6bd4\u5982 ",(0,t.jsx)(e.code,{children:"?: string"})," \u5c31\u4ee3\u8868 ",(0,t.jsx)(e.code,{children:"string | undefined"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface Person {\r\n  name: string,\r\n  age?: number\r\n}\r\nlet olu: Person = {\r\n  name: 'olu',\r\n  // age: 18 // age\u53ef\u4e0d\u58f0\u660e\r\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4efb\u610f\u5c5e\u6027",children:"\u4efb\u610f\u5c5e\u6027"}),"\n",(0,t.jsx)(e.p,{children:"\u5e0c\u671b\u63a5\u53e3\u53ef\u4ee5\u6709\u4efb\u610f\u5c5e\u6027\uff0c\u53ef\u4ee5\u4f7f\u7528 [propName: string]\uff0c\u5b9a\u4e49\u4efb\u610f\u5c5e\u6027\u53d6 string \u7c7b\u578b\u7684\u503c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface Person {\r\n  name: string,\r\n  age?: number,\r\n  [propName: string]: any\r\n}\r\nlet olu: Person = {\r\n  name: 'olu',\r\n  drink: 'Coke'\r\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u65e6\u5b9a\u4e49\u4e86\u4efb\u610f\u5c5e\u6027\uff0c\u786e\u5b9a\u5c5e\u6027\u548c\u53ef\u9009\u5c5e\u6027\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u5176\u7c7b\u578b\u7684\u5b50\u96c6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface Person {\r\n  name: number[], // \u7c7b\u578b\u201cnumber[]\u201d\u7684\u5c5e\u6027\u201cname\u201d\u4e0d\u80fd\u8d4b\u7ed9\u201cstring\u201d\u7d22\u5f15\u7c7b\u578b\u201cstring\u201d\r\n  age?: number, // \u7c7b\u578b\u201cnumber | undefined\u201d\u7684\u5c5e\u6027\u201cage\u201d\u4e0d\u80fd\u8d4b\u7ed9\u201cstring\u201d\u7d22\u5f15\u7c7b\u578b\u201cstring\u201d\r\n  [propName: string]: string\r\n}\r\nlet olu: Person = {\r\n  name: [1,2],\r\n  drink: 123 // \u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnumber\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cstring\u201d\r\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c",(0,t.jsx)(e.code,{children:"[propName: string]: string"})," \u5b9a\u4e49\u4efb\u610f\u5c5e\u6027\u53d6 string\u7c7b\u578b\uff0c\u5df2\u5b9a\u4e49\u7684 name \u5c5e\u6027\u662f\u6570\u5b57\u6570\u7ec4\u4e0d\u7b26\u5408\uff0c\u5df2\u5b9a\u4e49\u7684 age \u5c5e\u6027\u662f number \u6216 undefined \u4e5f\u4e0d\u7b26\u5408\uff0cdrink \u4e5f\u4e0d\u662f string \u7c7b\u578b"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u4e2a\u63a5\u53e3\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u4efb\u610f\u5c5e\u6027\uff0c\u5982\u679c\u63a5\u53e3\u4e2d\u6709\u591a\u4e2a\u7c7b\u578b\u7684\u5c5e\u6027\uff0c\u9700\u8981\u5728\u4efb\u610f\u5c5e\u6027\u4e2d\u4f7f\u7528\u8054\u5408\u7c7b\u578b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface Person {\r\n  name: number[],\r\n  age?: number,\r\n  [propName: string]: string | number[] | undefined | number\r\n}\r\nlet olu: Person = {\r\n  name: [1,2],\r\n  drink: 123\r\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53ea\u8bfb\u5c5e\u6027",children:"\u53ea\u8bfb\u5c5e\u6027"}),"\n",(0,t.jsxs)(e.p,{children:["\u8ba9\u5b57\u6bb5\u53ea\u80fd\u5728\u521b\u5efa\u7684\u65f6\u5019\u88ab\u8d4b\u503c\uff0c\u53ea\u8bfb\u7684\u7ea6\u675f\u5b58\u5728\u4e8e",(0,t.jsx)(e.strong,{children:"\u7b2c\u4e00\u6b21"}),"\u7ed9",(0,t.jsx)(e.strong,{children:"\u5bf9\u8c61"}),"\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u800c\u4e0d\u662f\u7b2c\u4e00\u6b21\u7ed9\u53ea\u8bfb\u5c5e\u6027\u8d4b\u503c\u7684\u65f6\u5019"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface Person {\r\n  name: number[],\r\n  age?: number,\r\n  readonly hobby: string,\r\n  cb(): number,\r\n  [propName: string]: string | number[] | undefined | number | Function\r\n}\r\nlet olu: Person = {\r\n  name: [1,2],\r\n  drink: 123,\r\n  hobby: 'sleep',\r\n  cb: (): number => 123\r\n}\r\n\r\nolu.hobby = 'eat' // \u65e0\u6cd5\u5206\u914d\u5230 \"hobby\" \uff0c\u56e0\u4e3a\u5b83\u662f\u53ea\u8bfb\u5c5e\u6027\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);