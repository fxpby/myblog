"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={id:"longest-substring-without-repeating-characters",title:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",tags:["\u6ed1\u52a8\u7a97\u53e3","\u53cc\u6307\u9488"]},i=void 0,o={unversionedId:"leetcode/dictionary/longest-substring-without-repeating-characters",id:"leetcode/dictionary/longest-substring-without-repeating-characters",title:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/dictionary/longest-substring-without-repeating-characters.md",sourceDirName:"leetcode/dictionary",slug:"/leetcode/dictionary/longest-substring-without-repeating-characters",permalink:"/myblog/docs/leetcode/dictionary/longest-substring-without-repeating-characters",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/dictionary/longest-substring-without-repeating-characters.md",tags:[{label:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/myblog/docs/tags/\u6ed1\u52a8\u7a97\u53e3"},{label:"\u53cc\u6307\u9488",permalink:"/myblog/docs/tags/\u53cc\u6307\u9488"}],version:"current",frontMatter:{id:"longest-substring-without-repeating-characters",title:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",tags:["\u6ed1\u52a8\u7a97\u53e3","\u53cc\u6307\u9488"]},sidebar:"leetcode",previous:{title:"904. \u6c34\u679c\u6210\u7bee",permalink:"/myblog/docs/leetcode/array/fruit-into-baskets"},next:{title:"76.\u6700\u5c0f\u8986\u76d6\u5b50\u4e32",permalink:"/myblog/docs/leetcode/dictionary/minimum-window-substring"}},p={},s=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u6ed1\u52a8\u7a97\u53e3 - \u6570\u7ec4",id:"\u65b9\u6cd5\u4e00\u6ed1\u52a8\u7a97\u53e3---\u6570\u7ec4",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u6ed1\u52a8\u7a97\u53e3 - \u53cc\u6307\u9488",id:"\u65b9\u6cd5\u4e8c\u6ed1\u52a8\u7a97\u53e3---\u53cc\u6307\u9488",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u8bf7\u4f60\u627e\u51fa\u5176\u4e2d\u4e0d\u542b\u6709\u91cd\u590d\u5b57\u7b26\u7684 \u6700\u957f\u5b50\u4e32 \u7684\u957f\u5ea6\u3002"),(0,a.kt)("p",null,"Given a string s, find the length of the longest substring without repeating characters."),(0,a.kt)("p",null,"\u793a\u4f8b\xa01:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\u8f93\u5165: s = "abcabcbb"\n\u8f93\u51fa: 3 \n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f "abc"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 3\u3002\n')),(0,a.kt)("p",null,"\u793a\u4f8b 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\u8f93\u5165: s = "bbbbb"\n\u8f93\u51fa: 1\n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f "b"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 1\u3002\n')),(0,a.kt)("p",null,"\u793a\u4f8b 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\u8f93\u5165: s = "pwwkew"\n\u8f93\u51fa: 3\n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f\xa0"wke"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 3\u3002\n\xa0    \u8bf7\u6ce8\u610f\uff0c\u4f60\u7684\u7b54\u6848\u5fc5\u987b\u662f \u5b50\u4e32 \u7684\u957f\u5ea6\uff0c"pwke"\xa0\u662f\u4e00\u4e2a\u5b50\u5e8f\u5217\uff0c\u4e0d\u662f\u5b50\u4e32\u3002\n')),(0,a.kt)("p",null,"\u63d0\u793a\uff1a"),(0,a.kt)("p",null,"0 <= s.length <= 5 * 104\ns \u7531\u82f1\u6587\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7b26\u53f7\u548c\u7a7a\u683c\u7ec4\u6210"),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u6ed1\u52a8\u7a97\u53e3---\u6570\u7ec4"},"\u65b9\u6cd5\u4e00\uff1a\u6ed1\u52a8\u7a97\u53e3 - \u6570\u7ec4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6570\u7ec4\u6765\u7ef4\u62a4\u6ed1\u52a8\u7a97\u53e3\uff0c\u7a97\u53e3\u5185\u662f\u65e0\u91cd\u590d\u7684\u5143\u7d20"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u904d\u5386\u5b57\u7b26\u4e32\uff0c\u5224\u65ad\u5b57\u7b26\u662f\u5426\u5728\u6ed1\u52a8\u7a97\u53e3\u6570\u7ec4\u4e2d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\uff1a\u5220\u9664\u6ed1\u52a8\u7a97\u53e3\u6570\u7ec4\u4e2d\u76f8\u540c\u5b57\u7b26\u4ee5\u53ca\u76f8\u540c\u5b57\u7b26\u524d\u7684\u6240\u6709\u5b57\u7b26\uff0c\u518d\u5c06\u5f53\u524d\u5b57\u7b26",(0,a.kt)("inlineCode",{parentName:"li"},"push"),"\u5230\u6ed1\u52a8\u7a97\u53e3\u6570\u7ec4\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5728\uff1a\u76f4\u63a5\u5c06\u5143\u7d20",(0,a.kt)("inlineCode",{parentName:"li"},"push"),"\u8fdb\u5165\u6ed1\u52a8\u7a97\u53e3\u6570\u7ec4\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u6570\u7ec4\u7684\u957f\u5ea6\u548c\u4e4b\u524d\u6ed1\u52a8\u7a97\u53e3\u6570\u7ec4\u957f\u5ea6\u7684\u6700\u5927\u503c"))),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u6ed1\u52a8\u7a97\u53e3\u6570\u7ec4\u957f\u5ea6\u6700\u5927\u503c"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n^2), ",(0,a.kt)("inlineCode",{parentName:"li"},"for\u5faa\u73af")," \u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n)"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"indexOf()"),"\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"splice()")," \u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n)")),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(m)\uff0c\u6ed1\u52a8\u7a97\u53e3\u6570\u7ec4\u7684\u957f\u5ea6")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} s\n * @return {number}\n */\nvar lengthOfLongestSubstring = function(s) {\n  const arr = []\n  let max = 0\n  for (let i = 0; i < s.length; i += 1) {\n    const idx = arr.indexOf(s[i])\n    if (idx !== -1) {\n      arr.splice(0, idx + 1)\n    }\n    arr.push(s[i])\n    max = Math.max(arr.length, max)\n  }\n  return max\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u6ed1\u52a8\u7a97\u53e3---\u53cc\u6307\u9488"},"\u65b9\u6cd5\u4e8c\uff1a\u6ed1\u52a8\u7a97\u53e3 - \u53cc\u6307\u9488"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u53cc\u6307\u9488\u6765\u7ef4\u62a4\u6ed1\u52a8\u7a97\u53e3\uff0c\u7a97\u53e3\u5185\u662f\u65e0\u91cd\u590d\u7684\u5143\u7d20"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u904d\u5386\u5b57\u7b26\u4e32\uff0c\u53f3\u6307\u9488\u5411\u53f3\u79fb\u52a8\uff0c\u5224\u65ad\u5b57\u7b26\u662f\u5426\u5728\u7a97\u53e3\u4e2d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\uff1a\u5148\u5224\u65ad\u91cd\u590d\u5b57\u7b26\u7684\u4f4d\u7f6e\u662f\u5426\u5728\u5de6\u6307\u9488\u5de6\u8fb9\uff0c\u82e5\u4e0d\u5728\uff0c\u5219\u5de6\u6307\u9488\u5411\u53f3\u79fb\u52a8\u81f3\u91cd\u590d\u5b57\u7b26\u7684\u4e0b\u4e00\u4f4d\uff08\u6536\u655b\u5de6\u8fb9\u754c\u7684\u524d\u63d0\u662f\u91cd\u590d\u5143\u7d20\u5728\u5de6\u53f3\u6307\u9488\u7684\u533a\u95f4\u5185\uff09\uff0c\u7a97\u53e3\u52a0\u5165\u65b0\u5b57\u7b26"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5728\uff0c\u7a97\u53e3\u52a0\u5165\u65b0\u5b57\u7b26"),(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u7684\u6700\u5927\u503c\uff0c\u4e4b\u524d\u7684\u6700\u5927\u503c\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"\u53f3\u6307\u9488 - \u5de6\u6307\u9488 + 1"),"\u5373\u5f53\u524d\u6ed1\u52a8\u7a97\u53e3\u533a\u95f4\u957f\u5ea6\u8fdb\u884c\u6bd4\u8f83"))),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u6ed1\u52a8\u7a97\u53e3\u957f\u5ea6\u6700\u5927\u503c"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"O(N)\uff0c\u4e00\u4e2a for \u5faa\u73af\uff0cmap \u4e3a O(1)"),(0,a.kt)("li",{parentName:"ul"},"O(M)\uff0cM \u4e3a\u6ed1\u52a8\u7a97\u53e3\u4e2d\u5b57\u7b26\u4e2a\u6570")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} s\n * @return {number}\n */\nvar lengthOfLongestSubstring = function(s) {\n  let l = 0\n  let max = 0\n  const map = new Map()\n  for (let r = 0; r < s.length; r += 1) {\n    if (map.has(s[r]) && map.get(s[r]) >= l) {\n      l = map.get(s[r]) + 1\n    }\n    max = Math.max(r - l + 1, max)\n    map.set(s[r], r)\n  }\n  return max\n};\n")))}c.isMDXComponent=!0}}]);