"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const c={},l="Counting Duplicates",o={unversionedId:"codewar/counting-duplicates",id:"codewar/counting-duplicates",title:"Counting Duplicates",description:"\u526f\u672c\u63cf\u8ff0",source:"@site/docs/codewar/counting-duplicates.md",sourceDirName:"codewar",slug:"/codewar/counting-duplicates",permalink:"/myblog/docs/codewar/counting-duplicates",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/codewar/counting-duplicates.md",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"\u526f\u672c\u63cf\u8ff0",id:"\u526f\u672c\u63cf\u8ff0",level:2},{value:"\u6253\u602a\u8def\u5f84",id:"\u6253\u602a\u8def\u5f84",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:3},{value:"\u65b9\u6cd5\u4e09",id:"\u65b9\u6cd5\u4e09",level:3},{value:"\u65b9\u6cd5\u56db",id:"\u65b9\u6cd5\u56db",level:3},{value:"\u65b9\u6cd5\u4e94",id:"\u65b9\u6cd5\u4e94",level:3},{value:"\u6253\u602a\u5fc3\u5f97",id:"\u6253\u602a\u5fc3\u5f97",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"counting-duplicates"},"Counting Duplicates"),(0,a.kt)("h2",{id:"\u526f\u672c\u63cf\u8ff0"},"\u526f\u672c\u63cf\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.")),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\"abcde\" -> 0 # no characters repeats more than once\n\"aabbcde\" -> 2 # 'a' and 'b'\n\"aabBcde\" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)\n\"indivisibility\" -> 1 # 'i' occurs six times\n\"Indivisibilities\" -> 2 # 'i' occurs seven times and 's' occurs twice\n\"aA11\" -> 2 # 'a' and '1'\n\"ABBA\" -> 2 # 'A' and 'B' each occur twice\n")),(0,a.kt)("h2",{id:"\u6253\u602a\u8def\u5f84"},"\u6253\u602a\u8def\u5f84"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,a.kt)("p",null,"\u770b\u5230\u8fd9\u4e2a\u9898\uff0c\u7b2c\u4e00\u4e2a\u60f3\u6cd5\u5c31\u662f\u6b63\u5219\u5339\u914d\u5ffd\u7565\u5927\u5c0f\u5199"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function duplicateCount(text){\n  if (text.length === 0) {\n    return 0\n  }\n  let count = 0\n  for(let i = 0; i < text.length; i += 1) {\n    let char = text.charAt(i)\n    let reg = new RegExp(`${char}`, 'gi')\n    if (text.match(reg) && text.match(reg).length > 1) {\n      count += 1\n      text = text.replace(reg, '')\n      i -= 1\n    }\n  }\n  return count\n}\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c"),(0,a.kt)("p",null,"\u65e2\u7136\u5ffd\u7565\u5927\u5c0f\u5199\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5168\u90e8",(0,a.kt)("inlineCode",{parentName:"p"},"toLowerCase()"),"\uff0c\u7136\u540e\u770b\u5b57\u7b26\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\u548c\u6700\u540e\u4e00\u6b21\u662f\u5426\u76f8\u540c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function duplicateCount(text){\n  text = text.toLowerCase()\n  let count = 0\n  for(let i = 0; i < text.length; i += 1) {\n    let char = text.charAt(i)\n    const reg = new RegExp(`${char}`, 'g')\n    if (text.indexOf(char) !== text.lastIndexOf(char)) {\n      count += 1\n      text = text.replace(reg, '')\n      i -= 1\n    }\n  }\n  return count\n}\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e09"},"\u65b9\u6cd5\u4e09"),(0,a.kt)("p",null,"ES6\u7528\u8d77\u6765\u5440~\u5148\u8f6c\u5c0f\u5199\uff0c\u518d\u7528\u53bb\u91cd\u7684\u548c\u4e4b\u524d\u7684\u6bd4\u8f83"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function duplicateCount(text){\n  text = text.toLowerCase()\n  return [...new Set(text.split(''))].filter(x => text.indexOf(x) !== text.lastIndexOf(x)).length\n}\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u56db"},"\u65b9\u6cd5\u56db"),(0,a.kt)("p",null,"\u5229\u7528\u5bf9\u8c61\u6216\u8005map\uff0c\u8fdb\u884c\u4e00\u4e2a\u6620\u5c04"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function duplicateCount(text){\n  let map = new Map()\n  text = text.toLowerCase()\n  text.split('').forEach((x, i) => {\n    if (map.has(x)) {\n      map.set(x, map.get(x) + 1)\n    } else {\n      map.set(x, 1)\n    }\n  })\n  \n  let count = 0\n  for (let value of map.values()) {\n    if (value > 1) {\n      count += 1\n    }\n  }\n  return count\n}\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e94"},"\u65b9\u6cd5\u4e94"),(0,a.kt)("p",null,"\u5148\u8bf4\u660e\u8fd9\u4e2a\u662f\u4e00\u4f4d\u5927\u4f6c\u5199\u7684\uff0csolutions\u770b\u4e86\u770b\u5927\u591a\u6570\u5176\u5b9e\u601d\u60f3\u5199\u6cd5\u5927\u540c\u5c0f\u5f02\uff0c\u4f46\u662f\u770b\u5230\u8fd9\u4e2a\u89e3\u6cd5\u5c31\ud83d\udc0b\u4e86\uff0cemmm\u597d\u4f18\u96c5\uff0c\u9605\u8bfb\u6210\u672c\u662f\u6709\u7684\ud83d\ude30\uff0c\u4f46\u4e0d\u5f97\u4e0d\u8bf4\u8fd9\u51fd\u6570\u5f0f\u7f16\u7a0b\u597d\u597d\u770b\u554a\ud83e\udd29"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const values = obj => Object.keys(obj).map(k => obj[k])\n\nconst sum = (acc, v) => acc + v\n\nconst compose = (f, ...fs) => (...args) =>\n  fs.length\n    ? f(compose(...fs)(...args))\n    : f(...args)\n    \nconst toUpperCase = t => t.toUpperCase()\n\nconst split = splitter => str => str.split(splitter)\n\nconst reduce = (reducer, seed) => xs => xs.reduce(reducer, seed)\n\nconst accumulateCounts = (acc, char) => \n  Object.assign({}, acc, {\n    [char]: acc[char] !== undefined ? 1 : 0\n  })\n\nconst duplicateCount = compose(\n  reduce(sum, 0),\n  values,\n  reduce(accumulateCounts, {}),\n  split(''),\n  toUpperCase\n)\n")),(0,a.kt)("h2",{id:"\u6253\u602a\u5fc3\u5f97"},"\u6253\u602a\u5fc3\u5f97"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u602a\u7684\u6536\u83b7\u6709\u4e24\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u65f6\u5019\uff0c\u8868\u8fbe\u5f0f\u4e0d\u5e94\u8be5\u662f\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u60f3\u7528\u6a21\u677f\u5b57\u7b26\u4e32\u7684\u8bdd\uff0c\u5e94\u4f7f\u7528new RegExp()\u7684\u65b9\u5f0f\u3002\u8fd8\u6709\u4e00\u4e2a\u65b9\u5f0f\u5c31\u662f\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884ceval()\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u4e0d\u63a8\u8350\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u4e94\u6253\u5f00\u4e86\u6211\u5bf9\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u5927\u95e8\uff0c\u8981\u52a0\u5f3a\u8fd9\u65b9\u9762\u7684\u5b66\u4e60\u548c\u523b\u610f\u4f7f\u7528\u4e86\uff0c\u52a0\u6cb9\ud83d\ude0b"))))}p.isMDXComponent=!0}}]);