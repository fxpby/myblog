"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7217],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},h=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||s;return t?r.createElement(f,a(a({ref:n},h),{},{components:t})):r.createElement(f,a({ref:n},h))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const s={id:"merge-k-sorted-lists",title:"23. \u5408\u5e76K\u4e2a\u5347\u5e8f\u94fe\u8868",tags:["\u5806","\u5feb\u901f\u6392\u5e8f"]},a=void 0,o={unversionedId:"leetcode/heap/merge-k-sorted-lists",id:"leetcode/heap/merge-k-sorted-lists",title:"23. \u5408\u5e76K\u4e2a\u5347\u5e8f\u94fe\u8868",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/heap/merge-k-sorted-lists.md",sourceDirName:"leetcode/heap",slug:"/leetcode/heap/merge-k-sorted-lists",permalink:"/myblog/docs/leetcode/heap/merge-k-sorted-lists",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/heap/merge-k-sorted-lists.md",tags:[{label:"\u5806",permalink:"/myblog/docs/tags/\u5806"},{label:"\u5feb\u901f\u6392\u5e8f",permalink:"/myblog/docs/tags/\u5feb\u901f\u6392\u5e8f"}],version:"current",frontMatter:{id:"merge-k-sorted-lists",title:"23. \u5408\u5e76K\u4e2a\u5347\u5e8f\u94fe\u8868",tags:["\u5806","\u5feb\u901f\u6392\u5e8f"]},sidebar:"leetcode",previous:{title:"347. \u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",permalink:"/myblog/docs/leetcode/heap/top-k-frequent-elements"}},l={},p=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2}],h={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,i.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u94fe\u8868\u6570\u7ec4\uff0c\u6bcf\u4e2a\u94fe\u8868\u90fd\u5df2\u7ecf\u6309\u5347\u5e8f\u6392\u5217\u3002"),(0,i.kt)("p",null,"\u8bf7\u4f60\u5c06\u6240\u6709\u94fe\u8868\u5408\u5e76\u5230\u4e00\u4e2a\u5347\u5e8f\u94fe\u8868\u4e2d\uff0c\u8fd4\u56de\u5408\u5e76\u540e\u7684\u94fe\u8868\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1alists = [[1,4,5],[1,3,4],[2,6]]\n\u8f93\u51fa\uff1a[1,1,2,3,4,4,5,6]\n\u89e3\u91ca\uff1a\u94fe\u8868\u6570\u7ec4\u5982\u4e0b\uff1a\n[\n  1->4->5,\n  1->3->4,\n  2->6\n]\n\u5c06\u5b83\u4eec\u5408\u5e76\u5230\u4e00\u4e2a\u6709\u5e8f\u94fe\u8868\u4e2d\u5f97\u5230\u3002\n1->1->2->3->4->4->5->6\n")),(0,i.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1alists = []\n\u8f93\u51fa\uff1a[]\n\u793a\u4f8b 3\uff1a\n\n\u8f93\u5165\uff1alists = [[]]\n\u8f93\u51fa\uff1a[]\n```\xa0\n\n\u63d0\u793a\uff1a\n\n- k == lists.length\n- 0 <= k <= 10^4\n- 0 <= lists[i].length <= 500\n- -10^4 <= lists[i][j] <= 10^4\n- lists[i] \u6309 \u5347\u5e8f \u6392\u5217\n- lists[i].length \u7684\u603b\u548c\u4e0d\u8d85\u8fc7 10^4\n\n## \u89e3\u9898\u65b9\u6cd5\n\n### \u65b9\u6cd5\u4e00\uff1a\u6700\u5c0f\u5806\n\n```js\n/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nclass MinHeap {\n  constructor() {\n    this.heap = [];\n  }\n\n  swap(i1, i2) {\n    const temp = this.heap[i1];\n    this.heap[i1] = this.heap[i2];\n    this.heap[i2] = temp;\n  }\n\n  getParentIndex(index) {\n    return (index - 1) >> 1;\n  }\n\n  shiftUp(index) {\n    if (index === 0) {\n      return;\n    }\n    const parentIndex = this.getParentIndex(index);\n    if (\n      this.heap[parentIndex] &&\n      this.heap[parentIndex].val > this.heap[index].val\n    ) {\n      this.swap(parentIndex, index);\n      this.shiftUp(parentIndex);\n    }\n  }\n\n  insert(value) {\n    this.heap.push(value);\n    this.shiftUp(this.heap.length - 1);\n  }\n\n  getLeftIndex(index) {\n    return index * 2 + 1;\n  }\n\n  getRightIndex(index) {\n    return index * 2 + 2;\n  }\n\n  shiftDown(index) {\n    const getLeftIndex = this.getLeftIndex(index);\n    const getRightIndex = this.getRightIndex(index);\n    if (\n      this.heap[getLeftIndex] &&\n      this.heap[getLeftIndex].val < this.heap[index].val\n    ) {\n      this.swap(getLeftIndex, index);\n      this.shiftDown(getLeftIndex);\n    }\n    if (\n      this.heap[getRightIndex] &&\n      this.heap[getRightIndex].val < this.heap[index].val\n    ) {\n      this.swap(getRightIndex, index);\n      this.shiftDown(getRightIndex);\n    }\n  }\n\n  pop() {\n    if (this.size() === 0) {\n      return\n    }\n    if (this.size() === 1) {\n      return this.heap.shift()\n    }\n    const top = this.heap[0]\n    this.heap[0] = this.heap.pop()\n    this.shiftDown(0)\n    return top\n  }\n\n  findMinimum () {\n    return this.size() === 0 ? undefined : this.heap[0]\n  }\n\n  peek() {\n    return this.heap[0];\n  }\n\n  size() {\n    return this.heap.length;\n  }\n}\nvar mergeKLists = function(lists) {\n  const h = new MinHeap()\n  const res = new ListNode(0)\n  let p = res\n  lists.forEach(x => {\n    if(x) {\n      h.insert(x)\n    }\n  })\n  while (h.size()) {\n    const n = h.pop()\n    p.next = n\n    p = p.next\n    if (n.next) {\n      h.insert(n.next)\n    }\n  }\n  return res.next\n};\n")))}d.isMDXComponent=!0}}]);