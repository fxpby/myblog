"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"minimum-window-substring",title:"76.\u6700\u5c0f\u8986\u76d6\u5b50\u4e32",tags:["\u6ed1\u52a8\u7a97\u53e3","\u53cc\u6307\u9488"]},l=void 0,o={unversionedId:"leetcode/dictionary/minimum-window-substring",id:"leetcode/dictionary/minimum-window-substring",title:"76.\u6700\u5c0f\u8986\u76d6\u5b50\u4e32",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/dictionary/minimum-window-substring.md",sourceDirName:"leetcode/dictionary",slug:"/leetcode/dictionary/minimum-window-substring",permalink:"/myblog/docs/leetcode/dictionary/minimum-window-substring",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/dictionary/minimum-window-substring.md",tags:[{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/myblog/docs/tags/\u6ed1\u52a8\u7a97\u53e3"},{label:"\u53cc\u6307\u9488",permalink:"/myblog/docs/tags/\u53cc\u6307\u9488"}],version:"current",frontMatter:{id:"minimum-window-substring",title:"76.\u6700\u5c0f\u8986\u76d6\u5b50\u4e32",tags:["\u6ed1\u52a8\u7a97\u53e3","\u53cc\u6307\u9488"]},sidebar:"leetcode",previous:{title:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",permalink:"/myblog/docs/leetcode/dictionary/longest-substring-without-repeating-characters"},next:{title:"111. \u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",permalink:"/myblog/docs/leetcode/tree/minimum-depth-of-binary-tree"}},s={},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u6ed1\u52a8\u7a97\u53e3 - \u53cc\u6307\u9488",id:"\u65b9\u6cd5\u4e00\u6ed1\u52a8\u7a97\u53e3---\u53cc\u6307\u9488",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,'\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \u3001\u4e00\u4e2a\u5b57\u7b26\u4e32 t \u3002\u8fd4\u56de s \u4e2d\u6db5\u76d6 t \u6240\u6709\u5b57\u7b26\u7684\u6700\u5c0f\u5b50\u4e32\u3002\u5982\u679c s \u4e2d\u4e0d\u5b58\u5728\u6db5\u76d6 t \u6240\u6709\u5b57\u7b26\u7684\u5b50\u4e32\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32 "" \u3002'),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e t \u4e2d\u91cd\u590d\u5b57\u7b26\uff0c\u6211\u4eec\u5bfb\u627e\u7684\u5b50\u5b57\u7b26\u4e32\u4e2d\u8be5\u5b57\u7b26\u6570\u91cf\u5fc5\u987b\u4e0d\u5c11\u4e8e t \u4e2d\u8be5\u5b57\u7b26\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c s \u4e2d\u5b58\u5728\u8fd9\u6837\u7684\u5b50\u4e32\uff0c\u6211\u4eec\u4fdd\u8bc1\u5b83\u662f\u552f\u4e00\u7684\u7b54\u6848\u3002")),(0,a.kt)("p",null,'Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".'),(0,a.kt)("p",null,"The testcases will be generated such that the answer is unique."),(0,a.kt)("p",null,"A substring is a contiguous sequence of characters within the string."),(0,a.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\u8f93\u5165\uff1as = "ADOBECODEBANC", t = "ABC"\n\u8f93\u51fa\uff1a"BANC"\n\u793a\u4f8b 2\uff1a\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\u8f93\u5165\uff1as = "a", t = "a"\n\u8f93\u51fa\uff1a"a"\n\u793a\u4f8b 3:\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\u8f93\u5165: s = "a", t = "aa"\n\u8f93\u51fa: ""\n\u89e3\u91ca: t \u4e2d\u4e24\u4e2a\u5b57\u7b26 \'a\' \u5747\u5e94\u5305\u542b\u5728 s \u7684\u5b50\u4e32\u4e2d\uff0c\n\u56e0\u6b64\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002\n')),(0,a.kt)("p",null,"\u63d0\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 <= s.length, t.length <= 105"),(0,a.kt)("li",{parentName:"ul"},"s \u548c t \u7531\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u6ed1\u52a8\u7a97\u53e3---\u53cc\u6307\u9488"},"\u65b9\u6cd5\u4e00\uff1a\u6ed1\u52a8\u7a97\u53e3 - \u53cc\u6307\u9488"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u53cc\u6307\u9488\u6765\u7ef4\u62a4\u6ed1\u52a8\u7a97\u53e3"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u5b57\u5178\u7528\u6765\u5b58\u653e",(0,a.kt)("inlineCode",{parentName:"p"},"{key: t\u4e2d\u7684\u5b57\u7b26, value: \u5b57\u7b26\u51fa\u73b0\u7684\u6b21\u6570}"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"needType")," \u4e3a \u5b57\u5178\u7684\u957f\u5ea6\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," \u53bb\u91cd\u540e\u7684\u6570\u91cf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53f3\u79fb\u53f3\u6307\u9488"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u82e5\u5b57\u5178\u4e2d\u6709\u53f3\u6307\u9488\u6307\u5411\u7684\u5b57\u7b26\uff0c\u5219\u8be5\u5b57\u7b26\u51fa\u73b0\u7684\u6b21\u6570\u51cf\u4e00",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u82e5\u5b57\u7b26\u51fa\u73b0\u7684\u6b21\u6570\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u65f6\uff0c\u8bf4\u660e ",(0,a.kt)("inlineCode",{parentName:"li"},"t")," \u4e2d\u8be5\u5b57\u7b26\u5df2\u7ecf\u5168\u90e8\u5728\u6ed1\u52a8\u7a97\u53e3\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"needType")," \u4e2d\u4e0d\u518d\u9700\u8981\u8be5\u9879\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"needType")," \u51cf\u4e00"))),(0,a.kt)("li",{parentName:"ul"},"\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"needType")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u65f6\uff0c\u4ee3\u8868\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u5185\u5df2\u7ecf\u5305\u542b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"t")," \u4e2d\u5168\u90e8\u5b57\u7b26\uff0c\u6b64\u65f6\u53f3\u79fb\u5de6\u6307\u9488\u8fdb\u884c\u6536\u655b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u5b57\u5178\u4e2d\u5305\u542b\u5de6\u6307\u9488\u6307\u5411\u7684\u5b57\u7b26\uff0c\u5b57\u5178\u9700\u8981\u8865\u5145\u8be5\u5b57\u7b26\uff0c\u6545\u8be5\u5b57\u7b26\u51fa\u73b0\u7684\u5b57\u7b26\u52a0\u4e00",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u8be5\u5b57\u7b26\u51fa\u73b0\u6b21\u6570\u4e3a 1 \u65f6\uff0c\u8bf4\u660e\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u7684\u5de6\u8fb9\u754c\u6536\u655b\u7ed3\u675f\uff0c\u9700\u8981\u9000\u51fa\u5de6\u6307\u9488\u5faa\u73af"))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u590d\u4e0a\u8ff0\u53f3\u5de6\u6307\u9488\u5faa\u73af\uff0c\u83b7\u53d6\u6ee1\u8db3\u6761\u4ef6\u7684\u5b50\u4e32")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u957f\u5ea6\u6700\u5c0f\u7684\u6ee1\u8db3\u6761\u4ef6\u5b50\u4e32")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(m + n), \u5b57\u5178",(0,a.kt)("inlineCode",{parentName:"li"},"for\u5faa\u73af")," \u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"O(m)"),",",(0,a.kt)("inlineCode",{parentName:"li"},"m")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"t")," \u7684\u957f\u5ea6\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"n")," \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u7684\u957f\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(m)\uff0c\u5b57\u5178\u7684\u957f\u5ea6\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"t")," \u4e2d\u4e0d\u540c\u5b57\u7b26\u7684\u957f\u5ea6\uff0c\u6700\u574f\u7684\u573a\u666f\u5c31\u662f\u65e0\u91cd\u590d\u5b57\u7b26")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} s\n * @param {string} t\n * @return {string}\n */\nvar minWindow = function(s, t) {\n  let l = 0\n  let r = 0\n  let res = ''\n  const need = new Map()\n  for (let c of t) {\n    need.set(c, need.has(c) ? need.get(c) + 1 : 1)\n  }\n  let needType = need.size\n  while(r < s.length) {\n    const c = s[r]\n    if (need.has(c)) {\n      need.set(c, need.get(c) - 1)\n      if (need.get(c) === 0) {\n        needType -= 1\n      }\n    }\n    while (needType === 0) {\n      const newRes = s.substring(l, r + 1)\n      if (!res || res.length > newRes.length) {\n        res = newRes\n      }\n      const c2 = s[l]\n      if (need.has(c2)) {\n        need.set(c2, need.get(c2) + 1)\n        if (need.get(c2) === 1) {\n          needType += 1\n        }\n      }\n      l += 1\n    }\n    r += 1\n  }\n  return res\n}\n")))}m.isMDXComponent=!0}}]);