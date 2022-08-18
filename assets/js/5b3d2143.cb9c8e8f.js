"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=o(t),d=a,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return t?r.createElement(m,p(p({ref:n},u),{},{components:t})):r.createElement(m,p({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var o=2;o<i;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const i={id:"top-k-frequent-elements",title:"347. \u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",tags:["\u5806","\u5feb\u901f\u6392\u5e8f"]},p=void 0,s={unversionedId:"leetcode/heap/top-k-frequent-elements",id:"leetcode/heap/top-k-frequent-elements",title:"347. \u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/heap/top-k-frequent-elements.md",sourceDirName:"leetcode/heap",slug:"/leetcode/heap/top-k-frequent-elements",permalink:"/myblog/docs/leetcode/heap/top-k-frequent-elements",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/heap/top-k-frequent-elements.md",tags:[{label:"\u5806",permalink:"/myblog/docs/tags/\u5806"},{label:"\u5feb\u901f\u6392\u5e8f",permalink:"/myblog/docs/tags/\u5feb\u901f\u6392\u5e8f"}],version:"current",frontMatter:{id:"top-k-frequent-elements",title:"347. \u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",tags:["\u5806","\u5feb\u901f\u6392\u5e8f"]},sidebar:"leetcode",previous:{title:"215. \u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20",permalink:"/myblog/docs/leetcode/heap/kth-largest-element-in-an-array"}},l={},o=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u6700\u5c0f\u5806",id:"\u65b9\u6cd5\u4e00\u6700\u5c0f\u5806",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u6570\u7ec4",id:"\u65b9\u6cd5\u4e8c\u6570\u7ec4",level:3}],u={toc:o};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 k \uff0c\u8bf7\u4f60\u8fd4\u56de\u5176\u4e2d\u51fa\u73b0\u9891\u7387\u524d k \u9ad8\u7684\u5143\u7d20\u3002\u4f60\u53ef\u4ee5\u6309 \u4efb\u610f\u987a\u5e8f \u8fd4\u56de\u7b54\u6848\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: (nums = [1, 1, 1, 2, 2, 3]), (k = 2);\n\u8f93\u51fa: [1, 2];\n")),(0,a.kt)("p",null,"\u793a\u4f8b 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165: (nums = [1]), (k = 1);\n\u8f93\u51fa: [1];\n")),(0,a.kt)("p",null,"\u63d0\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 <= nums.length <= 105"),(0,a.kt)("li",{parentName:"ul"},"k \u7684\u53d6\u503c\u8303\u56f4\u662f ","[1, \u6570\u7ec4\u4e2d\u4e0d\u76f8\u540c\u7684\u5143\u7d20\u7684\u4e2a\u6570]"),(0,a.kt)("li",{parentName:"ul"},"\u9898\u76ee\u6570\u636e\u4fdd\u8bc1\u7b54\u6848\u552f\u4e00\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u6570\u7ec4\u4e2d\u524d k \u4e2a\u9ad8\u9891\u5143\u7d20\u7684\u96c6\u5408\u662f\u552f\u4e00\u7684")),(0,a.kt)("p",null,"\u8fdb\u9636\uff1a\u4f60\u6240\u8bbe\u8ba1\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6 \u5fc5\u987b \u4f18\u4e8e O(n log n) \uff0c\u5176\u4e2d n\xa0 \u662f\u6570\u7ec4\u5927\u5c0f\u3002"),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u6700\u5c0f\u5806"},"\u65b9\u6cd5\u4e00\uff1a\u6700\u5c0f\u5806"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\n\nclass MinHeap {\n  constructor() {\n    this.heap = [];\n  }\n\n  swap(i1, i2) {\n    const temp = this.heap[i1];\n    this.heap[i1] = this.heap[i2];\n    this.heap[i2] = temp;\n  }\n\n  getParentIndex(index) {\n    return (index - 1) >> 1;\n  }\n\n  shiftUp(index) {\n    if (index === 0) {\n      return;\n    }\n    const parentIndex = this.getParentIndex(index);\n    if (\n      this.heap[parentIndex] &&\n      this.heap[parentIndex].value > this.heap[index].value\n    ) {\n      this.swap(parentIndex, index);\n      this.shiftUp(parentIndex);\n    }\n  }\n\n  insert(value) {\n    this.heap.push(value);\n    this.shiftUp(this.heap.length - 1);\n  }\n\n  getLeftIndex(index) {\n    return index * 2 + 1;\n  }\n\n  getRightIndex(index) {\n    return index * 2 + 2;\n  }\n\n  shiftDown(index) {\n    const getLeftIndex = this.getLeftIndex(index);\n    const getRightIndex = this.getRightIndex(index);\n    if (\n      this.heap[getLeftIndex] &&\n      this.heap[getLeftIndex].value < this.heap[index].value\n    ) {\n      this.swap(getLeftIndex, index);\n      this.shiftDown(getLeftIndex);\n    }\n    if (\n      this.heap[getRightIndex] &&\n      this.heap[getRightIndex].value < this.heap[index].value\n    ) {\n      this.swap(getRightIndex, index);\n      this.shiftDown(getRightIndex);\n    }\n  }\n\n  pop() {\n    if (this.size() === 0) {\n      return;\n    }\n    this.heap[0] = this.heap.pop();\n    this.shiftDown(0);\n  }\n\n  peek() {\n    return this.heap[0];\n  }\n\n  size() {\n    return this.heap.length;\n  }\n}\nvar topKFrequent = function (nums, k) {\n  const map = new Map();\n  nums.forEach((x) => {\n    map.set(x, map.has(x) ? map.get(x) + 1 : 1);\n  });\n  const h = new MinHeap();\n  map.forEach((value, key) => {\n    h.insert({ value, key });\n    if (h.size() > k) {\n      h.pop();\n    }\n  });\n  return h.heap.map((x) => x.key);\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u6570\u7ec4"},"\u65b9\u6cd5\u4e8c\uff1a\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nvar topKFrequent = function (nums, k) {\n  const map = new Map();\n  nums.forEach((x) => {\n    map.set(x, map.has(x) ? map.get(x) + 1 : 1);\n  });\n  return Array.from(map)\n    .sort((a, b) => b[1] - a[1])\n    .map((x) => x[0])\n    .slice(0, k);\n};\n")))}c.isMDXComponent=!0}}]);