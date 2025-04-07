"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[5410],{20895:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>t,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"coding/javascript/data-element","title":"\u6570\u636e\u7c7b\u578b","description":"\u57fa\u672c\u7c7b\u578b","source":"@site/docs/coding/javascript/data-element.md","sourceDirName":"coding/javascript","slug":"/coding/javascript/data-element","permalink":"/myblog/docs/coding/javascript/data-element","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/javascript/data-element.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u51fd\u6570\u67ef\u91cc\u5316","permalink":"/myblog/docs/coding/javascript/currying"},"next":{"title":"\u6df1\u62f7\u8d1d","permalink":"/myblog/docs/coding/javascript/deep-copy"}}');var s=l(74848),i=l(28453);const t={},d="\u6570\u636e\u7c7b\u578b",c={},a=[{value:"\u57fa\u672c\u7c7b\u578b",id:"\u57fa\u672c\u7c7b\u578b",level:2},{value:"null",id:"null",level:3},{value:"undefined",id:"undefined",level:3},{value:"number",id:"number",level:3},{value:"NaN",id:"nan",level:4},{value:"Infinity \u65e0\u7a77\u6570",id:"infinity-\u65e0\u7a77\u6570",level:4},{value:"\u96f6\u503c",id:"\u96f6\u503c",level:4},{value:"string",id:"string",level:3},{value:"\u8bbf\u95ee\u5b57\u7b26",id:"\u8bbf\u95ee\u5b57\u7b26",level:4},{value:"\u5b57\u7b26\u4e32\u4e0d\u53ef\u66f4\u6539",id:"\u5b57\u7b26\u4e32\u4e0d\u53ef\u66f4\u6539",level:4},{value:"boolean",id:"boolean",level:3},{value:"fasly \u5047\u503c",id:"fasly-\u5047\u503c",level:4},{value:"truthy \u771f\u503c",id:"truthy-\u771f\u503c",level:4},{value:"\u5f15\u7528\u7c7b\u578b",id:"\u5f15\u7528\u7c7b\u578b",level:2},{value:"object \u5bf9\u8c61",id:"object-\u5bf9\u8c61",level:3},{value:"\u624b\u5199\u5bf9\u8c61\u5c5e\u6027\u503c\u8fed\u4ee3\u5668",id:"\u624b\u5199\u5bf9\u8c61\u5c5e\u6027\u503c\u8fed\u4ee3\u5668",level:4}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"})}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u7c7b\u578b",children:"\u57fa\u672c\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"null \u7a7a\u503c"}),"\n",(0,s.jsx)(n.li,{children:"undefined \u672a\u5b9a\u4e49"}),"\n",(0,s.jsx)(n.li,{children:"number \u6570\u503c"}),"\n",(0,s.jsx)(n.li,{children:"string \u5b57\u7b26\u4e32"}),"\n",(0,s.jsx)(n.li,{children:"boolean \u5e03\u5c14\u503c"}),"\n",(0,s.jsx)(n.li,{children:"symbol \u7b26\u53f7"}),"\n",(0,s.jsx)(n.li,{children:"bigInt"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"null",children:"null"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ece\u903b\u8f91\u4e0a\u6765\u770b\uff0cnull\u503c\u8868\u793a\u4e00\u4e2a\u7a7a\u6307\u9488\u5bf9\u8c61\uff0c\u800c\u8fd9\u4e5f\u6b63\u662f\u4f7f\u7528typeof\u64cd\u4f5c\u7b26\u68c0\u6d4bnull\u503c\u65f6\u4f1a\u8fd4\u56de\u201cobject\u201d\u7684\u539f\u56e0 -- \u7ea2\u5b9d\u4e66"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'typeof null === "object" // true\n'})}),"\n",(0,s.jsx)(n.h3,{id:"undefined",children:"undefined"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u672a\u521d\u59cb\u5316\u7684\u53d8\u91cf\u4f1a\u81ea\u52a8\u8d4b\u4e88undefined, \u5efa\u8bae\u8fd8\u662f\u663e\u793a\u521d\u59cb\u5316"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"typeof \u5bf9 undefined \u548c undeclared\uff08\u672a\u58f0\u660e\uff09 \u53d8\u91cf\u90fd\u8fd4\u56de undefined"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"number",children:"number"}),"\n",(0,s.jsx)(n.h4,{id:"nan",children:"NaN"}),"\n",(0,s.jsx)(n.p,{children:"not a number, \u6570\u5b66\u8fd0\u7b97\u7684\u64cd\u4f5c\u6570\u4e0d\u662f\u6570\u5b57\u7c7b\u578b\u5c31\u65e0\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6709\u6548\u7684\u6570\u5b57\uff0c\u8fd9\u65f6\u8fd4\u56de\u503c\u672aNaN."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u548c\u81ea\u8eab\u4e0d\u76f8\u7b49"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528Number.isNaN()\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u4e3aNaN"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let a = 1 / 'a' // NaN\r\na == NaN // false\r\na === NaN // false\r\na !== a // true\r\n\r\nlet b = 'olu'\r\nNumber.isNaN(b) // false\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"infinity-\u65e0\u7a77\u6570",children:"Infinity \u65e0\u7a77\u6570"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u67d0\u4e2a\u8ba1\u7b97\u5f97\u5230\u7684\u6570\u503c\u7ed3\u679c\u8d85\u8fc7\u4e86JavaScript\u53ef\u4ee5\u8868\u793a\u7684\u8303\u56f4\uff0c\u5c31\u4f1a\u8f6c\u6362\u4e3a\u4e00\u4e2a\u7279\u6b8a\u7684\u65e0\u7a77\u503c\uff0c\u6709\u6b63\u65e0\u7a77\u5927\u548c\u8d1f\u65e0\u7a77\u5927"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"isFinite() \u68c0\u6d4b\u662f\u5426\u4e3a\u5e38\u89c4\u6570\u5b57"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"1 / 0 // Infinity\r\n1 / -0 // -Infinity\r\n-1 / 0 // -Infinity\r\n-1 / -0 // Infinity\r\nInfinity / Infinity // NaN\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u96f6\u503c",children:"\u96f6\u503c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u52a0\u6cd5\u548c\u51cf\u6cd5\u8fd0\u7b97\u4e0d\u4f1a\u5f97\u5230\u8d1f\u96f6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"0 / -1 // -0\r\n0 * -1 // -0\r\nlet a = -0\r\na.toString() // 0\r\nJSON.parse(a) // 0\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4e9b\u6570\u636e\u9700\u8981\u6570\u5b57\u7684\u7b26\u53f7\u4f4d\u53bb\u8868\u793a\u7279\u6b8a\u4fe1\u606f\uff0c\u6bd4\u5982\u8fd0\u52a8\u65b9\u5411"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"SameValue \u548c SameValueZero"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728\u5224\u65ad",(0,s.jsx)(n.code,{children:"+0"}),"\u3001",(0,s.jsx)(n.code,{children:"-0"}),"\u548c",(0,s.jsx)(n.code,{children:"NaN"}),"\u65f6\uff0cSameValue\u548c",(0,s.jsx)(n.code,{children:"==="}),"\u8868\u73b0\u4e0d\u4e00\u6837\uff0cES6\u4e2d\u7684Object.is\u5185\u90e8\u4f7f\u7528\u4e86SameValue\uff0cincludes\u5219\u4f7f\u7528\u4e86SameValueZero"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"NaN == NaN // false\r\nNaN === NaN // false\r\nObject.is(NaN, NaN) // true => SameValue(NaN, NaN)\r\n+0 === -0 // true\r\nObject.is(+0, -0) // false => SameValue(+0, -0)\r\n[+0].includes(-0) // true => SameValueZero(+0, -0)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"0.1 + 0.2 !== 0.3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e8c\u8fdb\u5236\u6d6e\u70b9\u6570\u4e2d\u76840.1\u548c0.2\u5e76\u4e0d\u662f\u5341\u5206\u7cbe\u786e"}),"\n",(0,s.jsx)(n.li,{children:"\u673a\u5668\u7cbe\u5ea6 Number.EPSILON, \u53ef\u4ee5\u6bd4\u8f83\u4e24\u4e2a\u6570\u5b57\u662f\u5426\u76f8\u7b49\uff08\u5728\u6307\u5b9a\u7684\u8bef\u5dee\u8303\u56f4\u5185\uff09"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function numbersCloseEnoughToEqual(n1, n2) {\r\n  return Math.abs(n1 - n2) < Number.EPSILON\r\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"string",children:"string"}),"\n",(0,s.jsx)(n.h4,{id:"\u8bbf\u95ee\u5b57\u7b26",children:"\u8bbf\u95ee\u5b57\u7b26"}),"\n",(0,s.jsxs)(n.p,{children:["\u5386\u53f2\u539f\u56e0\uff0c\u4e0b\u9762\u8fd9\u79cd",(0,s.jsx)(n.code,{children:"str[2]"}),"\u5199\u6cd5\u5728\u67d0\u4e2a\u8001\u7248\u672c\u7684IE\u4e2d\u662f\u4e0d\u5408\u6cd5\u7684\uff0c\u73b0\u5728\u8c8c\u4f3c\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\u4e86\uff0c\u653e\u5fc3\u4f7f\u7528\u5427"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u533a\u522b: \u5982\u679c\u627e\u4e0d\u5230\u5b57\u7b26\uff0c[]\u8fd4\u56deundefined\uff0ccharAt()\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'let str = "olu cool"\r\nstr[2] // "u"\r\nstr.charAt(2) // "u"\r\nstr[9] // undefined\r\nstr.charAt(9) // ""\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528for..of\u904d\u5386\u5b57\u7b26"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'let str = "olu cool"\r\nfor(let item of str) {\r\n  console.log(item)\r\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u5b57\u7b26\u4e32\u4e0d\u53ef\u66f4\u6539",children:"\u5b57\u7b26\u4e32\u4e0d\u53ef\u66f4\u6539"}),"\n",(0,s.jsx)(n.p,{children:"\u5b57\u7b26\u4e32\u7684\u6210\u5458\u51fd\u6570\u4e0d\u4f1a\u6539\u53d8\u5176\u539f\u59cb\u503c\uff0c\u800c\u662f\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\uff0c\u6570\u7ec4\u7684\u6210\u5458\u51fd\u6570\u90fd\u662f\u5728\u539f\u59cb\u503c\u4e0a\u8fdb\u884c\u64cd\u4f5c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'let str = "olu cool"\r\nstr[2] = "aha"\r\nstr // "olu cool"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"boolean",children:"boolean"}),"\n",(0,s.jsx)(n.h4,{id:"fasly-\u5047\u503c",children:"fasly \u5047\u503c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"false"}),"\n",(0,s.jsx)(n.li,{children:"null"}),"\n",(0,s.jsx)(n.li,{children:"undefined"}),"\n",(0,s.jsx)(n.li,{children:'""'}),"\n",(0,s.jsx)(n.li,{children:"0"}),"\n",(0,s.jsx)(n.li,{children:"NaN"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"truthy-\u771f\u503c",children:"truthy \u771f\u503c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u9664\u4e86\u4e0a\u8ff0",(0,s.jsx)(n.code,{children:"fasly"}),"\u7684\u503c\uff0c\u5305\u62ec",'\u3001[]\u3001"false"\u3001"0"']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u903b\u8f91\u8fd0\u7b97\u7b26\uff08&&\u3001!\u3001!!\uff09\u7684\u8fd0\u7b97\u503c\u770b\u5176\u662f\u771f\u503c/\u5047\u503c"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Boolean()\u8f6c\u578b\u51fd\u6570\u53ef\u4ee5\u5c06\u5176\u4ed6\u7c7b\u578b\u7684\u503c\u8f6c\u6362\u4e3a\u5e03\u5c14\u503c\uff0c\u5177\u4f53\u8f6c\u6362\u4e3atrue/false\u7684\u89c4\u5219\u53d6\u51b3\u4e8e\u6570\u636e\u7c7b\u578b\u548c\u5b9e\u9645\u7684\u503c"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0d\u540c\u7c7b\u578b\u4e0e\u5e03\u5c14\u503c\u4e4b\u95f4\u7684\u8f6c\u6362\u89c4\u5219\uff1a"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u6570\u636e\u7c7b\u578b"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8f6c\u6362\u4e3atrue\u7684\u503c"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u8f6c\u6362\u4e3afalse\u7684\u503c"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"boolean"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"true"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u975e\u7a7a\u5b57\u7b26\u4e32"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:'""\uff08\u7a7a\u5b57\u7b26\u4e32\uff09'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u975e\u96f6\u6570\u503c\uff08\u5305\u62ec\u65e0\u7a77\u503c\uff09"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"0\u3001NaN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\u4efb\u610f\u5bf9\u8c61"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"null"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"undefined"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"N/A"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"undefined"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5f15\u7528\u7c7b\u578b",children:"\u5f15\u7528\u7c7b\u578b"}),"\n",(0,s.jsx)(n.h3,{id:"object-\u5bf9\u8c61",children:"object \u5bf9\u8c61"}),"\n",(0,s.jsx)(n.h4,{id:"\u624b\u5199\u5bf9\u8c61\u5c5e\u6027\u503c\u8fed\u4ee3\u5668",children:"\u624b\u5199\u5bf9\u8c61\u5c5e\u6027\u503c\u8fed\u4ee3\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const obj = {\r\n  name: 'olu',\r\n  age: 18,\r\n  hobby: 'music'\r\n}\r\n\r\nObject.defineProperty(obj, Symbol.iterator, {\r\n  writable: false,\r\n  enumerable: false,\r\n  configurable: true,\r\n  value:() => {\r\n    let index = 0\r\n    let keys = Object.keys(obj)\r\n    return {\r\n      next: () => {\r\n        return {\r\n          done: index >= keys.length,\r\n          value: obj[keys[index++]]\r\n        }\r\n      }\r\n    }\r\n  }\r\n})\r\n\r\n\r\nfor (const val of obj) {\r\n  console.log(`\u5c5e\u6027\u503c\u4e3a\uff1a${val}`);\r\n}\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>d});var r=l(96540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);