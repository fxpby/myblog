"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[3374],{11997:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"coding/typescript/basic/ts-array","title":"\u6570\u7ec4","description":"- type[]","source":"@site/docs/coding/typescript/basic/ts-array.md","sourceDirName":"coding/typescript/basic","slug":"/coding/typescript/basic/ts-array","permalink":"/myblog/docs/coding/typescript/basic/ts-array","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/typescript/basic/ts-array.md","tags":[{"inline":true,"label":"TypeScript","permalink":"/myblog/docs/tags/type-script"}],"version":"current","frontMatter":{"id":"ts-array","title":"\u6570\u7ec4","tags":["TypeScript"]},"sidebar":"tutorialSidebar","previous":{"title":"\u4efb\u610f\u503c","permalink":"/myblog/docs/coding/typescript/basic/ts-any"},"next":{"title":"\u5185\u7f6e\u5bf9\u8c61","permalink":"/myblog/docs/coding/typescript/basic/ts-built-in-objects"}}');var s=n(74848),a=n(28453);const i={id:"ts-array",title:"\u6570\u7ec4",tags:["TypeScript"]},c=void 0,l={},o=[{value:"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4",id:"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4",level:2},{value:"\u591a\u7ef4\u6570\u7ec4",id:"\u591a\u7ef4\u6570\u7ec4",level:2},{value:"arguments \u7c7b\u6570\u7ec4",id:"arguments-\u7c7b\u6570\u7ec4",level:2}];function u(r){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"type[]"})}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Array<type>"})," \u6cdb\u578b\u5199\u6cd5"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"type \u4e3a\u4efb\u610f\u5408\u6cd5\u7c7b\u578b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"let arr1: number[] = [1, 2, 3, 4, 5]\r\nlet arr2: string[] = ['qq', 'ww', 'ee']\r\nlet arr3: boolean[] = [true, false, false]\r\nlet arr4: any[] = [1, '2', [], {}, (): number => 123]\r\n\r\nlet arr5: Array<number> = [1, 2, 3, 4, 5]\r\nlet arr6: Array<string> = ['qq', 'ww', 'ee']\r\nlet arr7: Array<boolean> = [true, false, false]\r\nlet arr8: Array<any> = [1, '2', [], {}, (): number => 123]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4",children:"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"interface NumberArray {\r\n  [index: number]: number\r\n}\r\n\r\ninterface StringArray {\r\n  [index: number]: string\r\n}\r\n\r\nlet a1: NumberArray = [1, 2, 3]\r\nlet a2: StringArray = ['1', '2', 'olu']\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u591a\u7ef4\u6570\u7ec4",children:"\u591a\u7ef4\u6570\u7ec4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"let arr9: number[][] = [[1]]\r\nlet arr10: number[][][] = [[[1]]]\r\nlet arr11: Array<Array<number>> = [[1]]\r\nlet arr12: Array<Array<Array<number | string>>> = [[[1, 'olu']]]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"arguments-\u7c7b\u6570\u7ec4",children:"arguments \u7c7b\u6570\u7ec4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"function Arr (...args: any): void {\r\n  console.log(arguments)\r\n  let arr: IArguments = arguments\r\n}\r\nArr('olu', 'cute', 'cool')\n"})}),"\n",(0,s.jsx)(e.p,{children:"IArguments \u662f TypeScript \u4e2d\u5b9a\u4e49\u597d\u7684\u7c7b\u578b\uff0c\u5b9e\u9645\u4e0a\u662f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"interface IArguments {\r\n  [index: number]: any,\r\n  length: number,\r\n  callee: Function\r\n}\n"})})]})}function d(r={}){const{wrapper:e}={...(0,a.R)(),...r.components};return e?(0,s.jsx)(e,{...r,children:(0,s.jsx)(u,{...r})}):u(r)}},28453:(r,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var t=n(96540);const s={},a=t.createContext(s);function i(r){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function c(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:i(r.components),t.createElement(a.Provider,{value:e},r.children)}}}]);