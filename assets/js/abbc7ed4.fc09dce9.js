"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(t),k=r,h=c["".concat(o,".").concat(k)]||c[k]||p[k]||l;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var m=2;m<l;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},92834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const l={},s="Who likes it?",i={unversionedId:"codewar/who-likes-it",id:"codewar/who-likes-it",title:"Who likes it?",description:"\u526f\u672c\u63cf\u8ff0",source:"@site/docs/codewar/who-likes-it.md",sourceDirName:"codewar",slug:"/codewar/who-likes-it",permalink:"/myblog/docs/codewar/who-likes-it",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/codewar/who-likes-it.md",tags:[],version:"current",frontMatter:{}},o={},m=[{value:"\u526f\u672c\u63cf\u8ff0",id:"\u526f\u672c\u63cf\u8ff0",level:2},{value:"\u6253\u602a\u8def\u5f84",id:"\u6253\u602a\u8def\u5f84",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:3},{value:"\u65b9\u6cd5\u4e09",id:"\u65b9\u6cd5\u4e09",level:3},{value:"\u65b9\u6cd5\u56db",id:"\u65b9\u6cd5\u56db",level:3},{value:"\u65b9\u6cd5\u4e94",id:"\u65b9\u6cd5\u4e94",level:3},{value:"Summary",id:"summary",level:2}],u={toc:m};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"who-likes-it"},"Who likes it?"),(0,r.kt)("h2",{id:"\u526f\u672c\u63cf\u8ff0"},"\u526f\u672c\u63cf\u8ff0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Implement a function ",(0,r.kt)("inlineCode",{parentName:"p"},"likes :: [String] -> String"),", which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:  "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'likes [] -- must be "no one likes this"\nlikes ["Peter"] -- must be "Peter likes this"\nlikes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"\nlikes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"\nlikes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For 4 or more names, the number in and 2 others simply increases.  ")),(0,r.kt)("h2",{id:"\u6253\u602a\u8def\u5f84"},"\u6253\u602a\u8def\u5f84"),(0,r.kt)("h3",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if else\u5927\u6cd5,\u770b\u7740\u6709\u70b9\u773c\u9ebb...\ud83d\ude25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function likes(names) {\n  if (names.length === 0) {\n    return 'no one likes this'\n  } else if (names.length === 1) {\n    return `${names[0]} likes this`\n  } else if (names.length === 2) {\n    return `${names[0]} and ${names[1]} like this`\n  } else if (names.length === 3) {\n    return `${names[0]}, ${names[1]} and ${names[2]} like this`\n  } else {\n    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`\n  }\n}\n")),(0,r.kt)("h3",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5bf9\u8c61\u7684key\u8bbe\u4e3a\u8f93\u5165\u6570\u7ec4\u7684\u957f\u5ea6, \u6700\u540e\u53d6value\u5229\u7528\u4e86Math.min()\u5c06\u6700\u540e\u4e00\u79cd\u60c5\u51b5\u8bbe\u4e3akey>=4\u65f6\u7684\u9ed8\u8ba4\u503c,\u975e\u5e38\u5de7\u5999! \ud83e\udd29")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function likes(names) {\n  return {\n    0: 'no one likes this',\n    1: `${names[0]} likes this`, \n    2: `${names[0]} and ${names[1]} like this`, \n    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, \n    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, \n  }[Math.min(4, names.length)]\n}\n")),(0,r.kt)("h3",{id:"\u65b9\u6cd5\u4e09"},"\u65b9\u6cd5\u4e09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u548c\u65b9\u6cd5\u4e8c\u7c7b\u4f3c,\u76f4\u63a5\u5229\u7528\u6570\u7ec4\u7684\u7d22\u5f15")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function likes(names) {\n  return [\n    'no one likes this',\n    `${names[0]} likes this`,\n    `${names[0]} and ${names[1]} like this`,\n    `${names[0]}, ${names[1]} and ${names[2]} like this`,\n    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`\n  ][Math.min(4, names.length)]\n}\n")),(0,r.kt)("h3",{id:"\u65b9\u6cd5\u56db"},"\u65b9\u6cd5\u56db"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u89e3\u6784\u8f93\u5165\u6570\u7ec4,\u4e5f\u5f88\u5de7\u5999!\ud83d\ude0d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function likes(names) {\n  names.length === 0 && (names = ["no one"]);\n  let [a, b, c, ...others] = names;\n  switch (names.length) {\n    case 1: return `${a} likes this`;\n    case 2: return `${a} and ${b} like this`;\n    case 3: return `${a}, ${b} and ${c} like this`;\n    default: return `${a}, ${b} and ${others.length + 1} others like this`;\n  }\n}\n')),(0,r.kt)("h3",{id:"\u65b9\u6cd5\u4e94"},"\u65b9\u6cd5\u4e94"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528\u5b57\u7b26\u4e32\u7684replace\u65b9\u6cd5\u6765\u66ff\u6362\u8f93\u5165\u6570\u7ec4\u7684\u9879,\u4e5f\u662f\u65b0\u601d\u8def\ud83d\ude06")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"replace()")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u7531",(0,r.kt)("strong",{parentName:"p"},"\u66ff\u6362\u503c"),"\uff08replacement\uff09\u66ff\u6362\u90e8\u5206\u6216\u6240\u6709\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6a21\u5f0f"),"\uff08pattern\uff09\u5339\u914d\u9879\u540e\u7684\u65b0\u5b57\u7b26\u4e32\u3002",(0,r.kt)("strong",{parentName:"p"},"\u6a21\u5f0f"),"\u53ef\u4ee5\u662f",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u5b57\u7b26\u4e32"),"\u6216\u8005",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u66ff\u6362\u503c"),"\u53ef\u4ee5\u662f",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u5b57\u7b26\u4e32"),"\u6216\u8005",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u6bcf\u6b21\u5339\u914d\u90fd\u8981\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570"),"\u3002",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679cpattern\u662f\u5b57\u7b26\u4e32\uff0c\u5219\u4ec5\u66ff\u6362\u7b2c\u4e00\u4e2a\u5339\u914d\u9879"),"\u3002\u539f\u5b57\u7b26\u4e32\u4e0d\u4f1a\u6539\u53d8\u3002 -- from MDN")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function likes (names) {\n  let templates = [\n    'no one likes this',\n    '{name} likes this',\n    '{name} and {name} like this',\n    '{name}, {name} and {name} like this',\n    '{name}, {name} and {n} others like this'\n  ];\n  let idx = Math.min(names.length, 4);\n  \n  return templates[idx].replace(/{name}|{n}/g, function (val) {\n    return val === '{name}' ? names.shift() : names.length;\n  });\n}\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u602a\u53ef\u80fd\u770b\u8d77\u6765\u4e0d\u600e\u4e48\u503c\u5f97\u6253, \u81ea\u5df1\u5728\u6700\u5f00\u59cb\u7684\u65f6\u5019\u53ea\u80fd\u60f3\u5230\u7528if else\u6216\u8005switch case\u5927\u6cd5\ud83d\ude05, \u540e\u9762\u770b\u5230\u5927\u4f6c\u4eec\u7684\u5199\u6cd5\u771f\u7684\u662f\u53ef\u8bfb\u6027\u5f3a\u4e14\u975e\u5e38\u4f18\u96c5,\u5f00\u62d3\u4e86\u81ea\u5df1\u7684\u601d\u8def,\u5e0c\u671b\u4ee5\u540e\u518d\u5199\u7c7b\u4f3c\u7684\u573a\u666f\u65f6,\u81ea\u5df1\u4e5f\u53ef\u4ee5\u591a\u5f80\u8fd9\u65b9\u9762\u9760\u62e2\u4e0b,\u63d0\u9ad8\u4ee3\u7801\u8d28\u91cf\ud83d\ude0b"))}p.isMDXComponent=!0}}]);