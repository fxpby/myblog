"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,d=p["".concat(s,".").concat(g)]||p[g]||u[g]||i;return r?n.createElement(d,a(a({ref:t},m),{},{components:r})):n.createElement(d,a({ref:t},m))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={id:"selection-sort",title:"\u9009\u62e9\u6392\u5e8f",tags:["\u6392\u5e8f"]},a=void 0,l={unversionedId:"algorithm/sorting-algorithm/selection-sort",id:"algorithm/sorting-algorithm/selection-sort",title:"\u9009\u62e9\u6392\u5e8f",description:"\u5b9e\u73b0\u601d\u8def",source:"@site/docs/algorithm/sorting-algorithm/selection-sort.md",sourceDirName:"algorithm/sorting-algorithm",slug:"/algorithm/sorting-algorithm/selection-sort",permalink:"/myblog/docs/algorithm/sorting-algorithm/selection-sort",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/algorithm/sorting-algorithm/selection-sort.md",tags:[{label:"\u6392\u5e8f",permalink:"/myblog/docs/tags/\u6392\u5e8f"}],version:"current",frontMatter:{id:"selection-sort",title:"\u9009\u62e9\u6392\u5e8f",tags:["\u6392\u5e8f"]},sidebar:"data-structures",previous:{title:"\u5192\u6ce1\u6392\u5e8f",permalink:"/myblog/docs/algorithm/sorting-algorithm/bubble-sort"},next:{title:"\u63d2\u5165\u6392\u5e8f",permalink:"/myblog/docs/algorithm/sorting-algorithm/insertion-sort"}},s={},c=[{value:"\u5b9e\u73b0\u601d\u8def",id:"\u5b9e\u73b0\u601d\u8def",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",level:2}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u601d\u8def"},"\u5b9e\u73b0\u601d\u8def"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u627e\u5230\u6570\u7ec4\u4e2d\u7684\u6700\u5c0f\u503c\uff0c\u9009\u4e2d\u5b83\u5e76\u5c06\u5176\u653e\u7f6e\u5728\u7b2c\u4e00\u4f4d"),(0,o.kt)("li",{parentName:"ul"},"\u7ee7\u7eed\u627e\u5230\u7b2c\u4e8c\u5c0f\u7684\u503c\uff0c\u9009\u4e2d\u5b83\u5e76\u5c06\u5176\u653e\u7f6e\u5728\u7b2c\u4e8c\u4f4d"),(0,o.kt)("li",{parentName:"ul"},"\u4ee5\u6b64\u7c7b\u63a8\uff0c\u6267\u884c n - 1 \u8f6e")),(0,o.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const selectionSort = arr => {\n  for (let i = 0; i < arr.length - 1; i++) {\n    let minIndex = i\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[j] < arr[minIndex]) {\n        minIndex = j\n      }\n    }\n    if (i !== minIndex) {\n      const temp = arr[i]\n      arr[i] = arr[minIndex]\n      arr[minIndex] = temp\n    }\n  }\n  return arr\n}\n\nselectionSort([6,5,4,3,2,1])\n")),(0,o.kt)("h2",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n^2)\uff0c\u4e24\u4e2a\u5d4c\u5957\u5faa\u73af"),(0,o.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)")))}u.isMDXComponent=!0}}]);