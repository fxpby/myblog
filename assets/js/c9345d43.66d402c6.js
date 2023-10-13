"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),N=o(a),d=l,k=N["".concat(p,".").concat(d)]||N[d]||s[d]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=N;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},62:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={},i="\u6570\u636e\u7c7b\u578b",u={unversionedId:"javascript/data-element",id:"javascript/data-element",title:"\u6570\u636e\u7c7b\u578b",description:"\u57fa\u672c\u7c7b\u578b",source:"@site/docs/javascript/data-element.md",sourceDirName:"javascript",slug:"/javascript/data-element",permalink:"/myblog/docs/javascript/data-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/data-element.md",tags:[],version:"current",frontMatter:{},sidebar:"javascript",previous:{title:"\u5185\u5b58\u7ba1\u7406",permalink:"/myblog/docs/javascript/memory"},next:{title:"typeof/instanceof/{}.toString \u68c0\u67e5\u7c7b\u578b",permalink:"/myblog/docs/javascript/compare-value"}},p={},o=[{value:"\u57fa\u672c\u7c7b\u578b",id:"\u57fa\u672c\u7c7b\u578b",level:2},{value:"null",id:"null",level:3},{value:"undefined",id:"undefined",level:3},{value:"number",id:"number",level:3},{value:"NaN",id:"nan",level:4},{value:"Infinity \u65e0\u7a77\u6570",id:"infinity-\u65e0\u7a77\u6570",level:4},{value:"\u96f6\u503c",id:"\u96f6\u503c",level:4},{value:"string",id:"string",level:3},{value:"\u8bbf\u95ee\u5b57\u7b26",id:"\u8bbf\u95ee\u5b57\u7b26",level:4},{value:"\u5b57\u7b26\u4e32\u4e0d\u53ef\u66f4\u6539",id:"\u5b57\u7b26\u4e32\u4e0d\u53ef\u66f4\u6539",level:4},{value:"boolean",id:"boolean",level:3},{value:"fasly \u5047\u503c",id:"fasly-\u5047\u503c",level:4},{value:"truthy \u771f\u503c",id:"truthy-\u771f\u503c",level:4},{value:"\u5f15\u7528\u7c7b\u578b",id:"\u5f15\u7528\u7c7b\u578b",level:2},{value:"object \u5bf9\u8c61",id:"object-\u5bf9\u8c61",level:3},{value:"\u624b\u5199\u5bf9\u8c61\u5c5e\u6027\u503c\u8fed\u4ee3\u5668",id:"\u624b\u5199\u5bf9\u8c61\u5c5e\u6027\u503c\u8fed\u4ee3\u5668",level:4}],m={toc:o};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("h2",{id:"\u57fa\u672c\u7c7b\u578b"},"\u57fa\u672c\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"null \u7a7a\u503c"),(0,l.kt)("li",{parentName:"ul"},"undefined \u672a\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"number \u6570\u503c"),(0,l.kt)("li",{parentName:"ul"},"string \u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},"boolean \u5e03\u5c14\u503c"),(0,l.kt)("li",{parentName:"ul"},"symbol \u7b26\u53f7"),(0,l.kt)("li",{parentName:"ul"},"bigInt")),(0,l.kt)("h3",{id:"null"},"null"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ece\u903b\u8f91\u4e0a\u6765\u770b\uff0cnull\u503c\u8868\u793a\u4e00\u4e2a\u7a7a\u6307\u9488\u5bf9\u8c61\uff0c\u800c\u8fd9\u4e5f\u6b63\u662f\u4f7f\u7528typeof\u64cd\u4f5c\u7b26\u68c0\u6d4bnull\u503c\u65f6\u4f1a\u8fd4\u56de\u201cobject\u201d\u7684\u539f\u56e0 -- \u7ea2\u5b9d\u4e66")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'typeof null === "object" // true\n')),(0,l.kt)("h3",{id:"undefined"},"undefined"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672a\u521d\u59cb\u5316\u7684\u53d8\u91cf\u4f1a\u81ea\u52a8\u8d4b\u4e88undefined, \u5efa\u8bae\u8fd8\u662f\u663e\u793a\u521d\u59cb\u5316")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"typeof \u5bf9 undefined \u548c undeclared\uff08\u672a\u58f0\u660e\uff09 \u53d8\u91cf\u90fd\u8fd4\u56de undefined"))),(0,l.kt)("h3",{id:"number"},"number"),(0,l.kt)("h4",{id:"nan"},"NaN"),(0,l.kt)("p",null,"not a number, \u6570\u5b66\u8fd0\u7b97\u7684\u64cd\u4f5c\u6570\u4e0d\u662f\u6570\u5b57\u7c7b\u578b\u5c31\u65e0\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6709\u6548\u7684\u6570\u5b57\uff0c\u8fd9\u65f6\u8fd4\u56de\u503c\u672aNaN."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u548c\u81ea\u8eab\u4e0d\u76f8\u7b49")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528Number.isNaN()\u5224\u65ad\u4e00\u4e2a\u503c\u662f\u5426\u4e3aNaN"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let a = 1 / 'a' // NaN\na == NaN // false\na === NaN // false\na !== a // true\n\nlet b = 'olu'\nNumber.isNaN(b) // false\n")))),(0,l.kt)("h4",{id:"infinity-\u65e0\u7a77\u6570"},"Infinity \u65e0\u7a77\u6570"),(0,l.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u8ba1\u7b97\u5f97\u5230\u7684\u6570\u503c\u7ed3\u679c\u8d85\u8fc7\u4e86JavaScript\u53ef\u4ee5\u8868\u793a\u7684\u8303\u56f4\uff0c\u5c31\u4f1a\u8f6c\u6362\u4e3a\u4e00\u4e2a\u7279\u6b8a\u7684\u65e0\u7a77\u503c\uff0c\u6709\u6b63\u65e0\u7a77\u5927\u548c\u8d1f\u65e0\u7a77\u5927"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"isFinite() \u68c0\u6d4b\u662f\u5426\u4e3a\u5e38\u89c4\u6570\u5b57  "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"1 / 0 // Infinity\n1 / -0 // -Infinity\n-1 / 0 // -Infinity\n-1 / -0 // Infinity\nInfinity / Infinity // NaN\n")))),(0,l.kt)("h4",{id:"\u96f6\u503c"},"\u96f6\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u52a0\u6cd5\u548c\u51cf\u6cd5\u8fd0\u7b97\u4e0d\u4f1a\u5f97\u5230\u8d1f\u96f6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"0 / -1 // -0\n0 * -1 // -0\nlet a = -0\na.toString() // 0\nJSON.parse(a) // 0\n")))),(0,l.kt)("p",null,"\u6709\u4e9b\u6570\u636e\u9700\u8981\u6570\u5b57\u7684\u7b26\u53f7\u4f4d\u53bb\u8868\u793a\u7279\u6b8a\u4fe1\u606f\uff0c\u6bd4\u5982\u8fd0\u52a8\u65b9\u5411"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SameValue \u548c SameValueZero"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u5224\u65ad",(0,l.kt)("inlineCode",{parentName:"li"},"+0"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"-0"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"NaN"),"\u65f6\uff0cSameValue\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"==="),"\u8868\u73b0\u4e0d\u4e00\u6837\uff0cES6\u4e2d\u7684Object.is\u5185\u90e8\u4f7f\u7528\u4e86SameValue\uff0cincludes\u5219\u4f7f\u7528\u4e86SameValueZero")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"NaN == NaN // false\nNaN === NaN // false\nObject.is(NaN, NaN) // true => SameValue(NaN, NaN)\n+0 === -0 // true\nObject.is(+0, -0) // false => SameValue(+0, -0)\n[+0].includes(-0) // true => SameValueZero(+0, -0)\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"0.1 + 0.2 !== 0.3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u6d6e\u70b9\u6570\u4e2d\u76840.1\u548c0.2\u5e76\u4e0d\u662f\u5341\u5206\u7cbe\u786e"),(0,l.kt)("li",{parentName:"ul"},"\u673a\u5668\u7cbe\u5ea6 Number.EPSILON, \u53ef\u4ee5\u6bd4\u8f83\u4e24\u4e2a\u6570\u5b57\u662f\u5426\u76f8\u7b49\uff08\u5728\u6307\u5b9a\u7684\u8bef\u5dee\u8303\u56f4\u5185\uff09")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function numbersCloseEnoughToEqual(n1, n2) {\n  return Math.abs(n1 - n2) < Number.EPSILON\n}\n")))),(0,l.kt)("h3",{id:"string"},"string"),(0,l.kt)("h4",{id:"\u8bbf\u95ee\u5b57\u7b26"},"\u8bbf\u95ee\u5b57\u7b26"),(0,l.kt)("p",null,"\u5386\u53f2\u539f\u56e0\uff0c\u4e0b\u9762\u8fd9\u79cd",(0,l.kt)("inlineCode",{parentName:"p"},"str[2]"),"\u5199\u6cd5\u5728\u67d0\u4e2a\u8001\u7248\u672c\u7684IE\u4e2d\u662f\u4e0d\u5408\u6cd5\u7684\uff0c\u73b0\u5728\u8c8c\u4f3c\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\u4e86\uff0c\u653e\u5fc3\u4f7f\u7528\u5427"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u533a\u522b: \u5982\u679c\u627e\u4e0d\u5230\u5b57\u7b26\uff0c[]\u8fd4\u56deundefined\uff0ccharAt()\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let str = "olu cool"\nstr[2] // "u"\nstr.charAt(2) // "u"\nstr[9] // undefined\nstr.charAt(9) // ""\n')),(0,l.kt)("p",null,"\u4f7f\u7528for..of\u904d\u5386\u5b57\u7b26"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let str = "olu cool"\nfor(let item of str) {\n  console.log(item)\n}\n')),(0,l.kt)("h4",{id:"\u5b57\u7b26\u4e32\u4e0d\u53ef\u66f4\u6539"},"\u5b57\u7b26\u4e32\u4e0d\u53ef\u66f4\u6539"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u7684\u6210\u5458\u51fd\u6570\u4e0d\u4f1a\u6539\u53d8\u5176\u539f\u59cb\u503c\uff0c\u800c\u662f\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\uff0c\u6570\u7ec4\u7684\u6210\u5458\u51fd\u6570\u90fd\u662f\u5728\u539f\u59cb\u503c\u4e0a\u8fdb\u884c\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let str = "olu cool"\nstr[2] = "aha"\nstr // "olu cool"\n')),(0,l.kt)("h3",{id:"boolean"},"boolean"),(0,l.kt)("h4",{id:"fasly-\u5047\u503c"},"fasly \u5047\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"false"),(0,l.kt)("li",{parentName:"ul"},"null"),(0,l.kt)("li",{parentName:"ul"},"undefined"),(0,l.kt)("li",{parentName:"ul"},'""'),(0,l.kt)("li",{parentName:"ul"},"0"),(0,l.kt)("li",{parentName:"ul"},"NaN")),(0,l.kt)("h4",{id:"truthy-\u771f\u503c"},"truthy \u771f\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9664\u4e86\u4e0a\u8ff0",(0,l.kt)("inlineCode",{parentName:"p"},"fasly"),'\u7684\u503c\uff0c\u5305\u62ec{}\u3001[]\u3001"false"\u3001"0"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u903b\u8f91\u8fd0\u7b97\u7b26\uff08&&\u3001!\u3001!!\uff09\u7684\u8fd0\u7b97\u503c\u770b\u5176\u662f\u771f\u503c/\u5047\u503c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Boolean()\u8f6c\u578b\u51fd\u6570\u53ef\u4ee5\u5c06\u5176\u4ed6\u7c7b\u578b\u7684\u503c\u8f6c\u6362\u4e3a\u5e03\u5c14\u503c\uff0c\u5177\u4f53\u8f6c\u6362\u4e3atrue/false\u7684\u89c4\u5219\u53d6\u51b3\u4e8e\u6570\u636e\u7c7b\u578b\u548c\u5b9e\u9645\u7684\u503c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u540c\u7c7b\u578b\u4e0e\u5e03\u5c14\u503c\u4e4b\u95f4\u7684\u8f6c\u6362\u89c4\u5219\uff1a"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8f6c\u6362\u4e3atrue\u7684\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8f6c\u6362\u4e3afalse\u7684\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""\uff08\u7a7a\u5b57\u7b26\u4e32\uff09')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u975e\u96f6\u6570\u503c\uff08\u5305\u62ec\u65e0\u7a77\u503c\uff09"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0\u3001NaN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u610f\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,l.kt)("td",{parentName:"tr",align:"left"},"undefined")))),(0,l.kt)("h2",{id:"\u5f15\u7528\u7c7b\u578b"},"\u5f15\u7528\u7c7b\u578b"),(0,l.kt)("h3",{id:"object-\u5bf9\u8c61"},"object \u5bf9\u8c61"),(0,l.kt)("h4",{id:"\u624b\u5199\u5bf9\u8c61\u5c5e\u6027\u503c\u8fed\u4ee3\u5668"},"\u624b\u5199\u5bf9\u8c61\u5c5e\u6027\u503c\u8fed\u4ee3\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n  name: 'olu',\n  age: 18,\n  hobby: 'music'\n}\n\nObject.defineProperty(obj, Symbol.iterator, {\n  writable: false,\n  enumerable: false,\n  configurable: true,\n  value:() => {\n    let index = 0\n    let keys = Object.keys(obj)\n    return {\n      next: () => {\n        return {\n          done: index >= keys.length,\n          value: obj[keys[index++]]\n        }\n      }\n    }\n  }\n})\n\n\nfor (const val of obj) {\n  console.log(`\u5c5e\u6027\u503c\u4e3a\uff1a${val}`);\n}\n")))}s.isMDXComponent=!0}}]);