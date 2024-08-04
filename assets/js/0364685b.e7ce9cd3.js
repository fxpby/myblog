"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6400],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(t),g=a,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||l;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const l={id:"longest-increasing-subsequence",title:"300. \u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217",tags:["\u52a8\u6001\u89c4\u5212"]},o=void 0,s={unversionedId:"leetcode/dynamic-programming/longest-increasing-subsequence",id:"leetcode/dynamic-programming/longest-increasing-subsequence",title:"300. \u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217",description:"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u627e\u5230\u5176\u4e2d\u6700\u957f\u4e25\u683c\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002",source:"@site/docs/leetcode/dynamic-programming/longest-increasing-subsequence.md",sourceDirName:"leetcode/dynamic-programming",slug:"/leetcode/dynamic-programming/longest-increasing-subsequence",permalink:"/myblog/docs/leetcode/dynamic-programming/longest-increasing-subsequence",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/dynamic-programming/longest-increasing-subsequence.md",tags:[{label:"\u52a8\u6001\u89c4\u5212",permalink:"/myblog/docs/tags/\u52a8\u6001\u89c4\u5212"}],version:"current",frontMatter:{id:"longest-increasing-subsequence",title:"300. \u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217",tags:["\u52a8\u6001\u89c4\u5212"]}},c={},i=[{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u52a8\u6001\u89c4\u5212",id:"\u65b9\u6cd5\u4e00\u52a8\u6001\u89c4\u5212",level:3}],u={toc:i};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u627e\u5230\u5176\u4e2d\u6700\u957f\u4e25\u683c\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"),(0,a.kt)("p",null,"\u5b50\u5e8f\u5217 \u662f\u7531\u6570\u7ec4\u6d3e\u751f\u800c\u6765\u7684\u5e8f\u5217\uff0c\u5220\u9664\uff08\u6216\u4e0d\u5220\u9664\uff09\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u800c\u4e0d\u6539\u53d8\u5176\u4f59\u5143\u7d20\u7684\u987a\u5e8f\u3002\u4f8b\u5982\uff0c","[3,6,2,7]"," \u662f\u6570\u7ec4 ","[0,3,1,6,2,2,7]"," \u7684\u5b50\u5e8f\u5217\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1anums = [10,9,2,5,3,7,101,18]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u662f [2,3,7,101]\uff0c\u56e0\u6b64\u957f\u5ea6\u4e3a 4 \u3002\n")),(0,a.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1anums = [0,1,0,3,2,3]\n\u8f93\u51fa\uff1a4\n")),(0,a.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1anums = [7,7,7,7,7,7,7]\n\u8f93\u51fa\uff1a1\n")),(0,a.kt)("p",null,"\u63d0\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 <= nums.length <= 2500"),(0,a.kt)("li",{parentName:"ul"},"-104 <= nums","[i]"," <= 104")),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u52a8\u6001\u89c4\u5212"},"\u65b9\u6cd5\u4e00\uff1a\u52a8\u6001\u89c4\u5212"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar lengthOfLIS = function(nums) {\n  const dp = new Array(nums.length).fill(1)\n  let result = 1\n  for (let i = 0; i < nums.length; i += 1) {\n    for (let j = 0; j < i; j += 1) {\n      if (nums[j] < nums[i]) {\n        dp[i] = Math.max(dp[j] + 1, dp[i])\n        result = Math.max(result, dp[i])\n      }\n    }\n  }\n  return result\n}\n")))}p.isMDXComponent=!0}}]);