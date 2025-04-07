"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[2580],{28453:(n,i,r)=>{r.d(i,{R:()=>s,x:()=>l});var t=r(96540);const e={},o=t.createContext(e);function s(n){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:s(n.components),t.createElement(o.Provider,{value:i},n.children)}},84565:(n,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"coding/algorithm/sorting-algorithm/quick-sort","title":"\u5feb\u901f\u6392\u5e8f","description":"\u5b9e\u73b0\u601d\u8def","source":"@site/docs/coding/algorithm/sorting-algorithm/quick-sort.md","sourceDirName":"coding/algorithm/sorting-algorithm","slug":"/coding/algorithm/sorting-algorithm/quick-sort","permalink":"/myblog/docs/coding/algorithm/sorting-algorithm/quick-sort","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/algorithm/sorting-algorithm/quick-sort.md","tags":[{"inline":true,"label":"\u6392\u5e8f","permalink":"/myblog/docs/tags/\u6392\u5e8f"}],"version":"current","frontMatter":{"id":"quick-sort","title":"\u5feb\u901f\u6392\u5e8f","tags":["\u6392\u5e8f"]},"sidebar":"tutorialSidebar","previous":{"title":"\u5f52\u5e76\u6392\u5e8f","permalink":"/myblog/docs/coding/algorithm/sorting-algorithm/merge-sort"},"next":{"title":"\u9009\u62e9\u6392\u5e8f","permalink":"/myblog/docs/coding/algorithm/sorting-algorithm/selection-sort"}}');var e=r(74848),o=r(28453);const s={id:"quick-sort",title:"\u5feb\u901f\u6392\u5e8f",tags:["\u6392\u5e8f"]},l=void 0,c={},a=[{value:"\u5b9e\u73b0\u601d\u8def",id:"\u5b9e\u73b0\u601d\u8def",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u539f\u5730\u6392\u5e8f",id:"\u65b9\u6cd5\u4e00\u539f\u5730\u6392\u5e8f",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u975e\u539f\u5730\u6392\u5e8f",id:"\u65b9\u6cd5\u4e8c\u975e\u539f\u5730\u6392\u5e8f",level:3}];function d(n){const i={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"\u5b9e\u73b0\u601d\u8def",children:"\u5b9e\u73b0\u601d\u8def"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u5206\u533a\uff1a\u4ece\u6570\u7ec4\u4e2d\u9009\u62e9\u4e00\u4e2a\u57fa\u51c6\uff0c\u6240\u6709\u6bd4\u57fa\u51c6\u5c0f\u7684\u5143\u7d20\u653e\u5728\u57fa\u51c6\u524d\uff0c\u6bd4\u57fa\u51c6\u5927\u7684\u653e\u5728\u57fa\u51c6\u540e"}),"\n",(0,e.jsx)(i.li,{children:"\u9012\u5f52\uff1a\u9012\u5f52\u5bf9\u57fa\u51c6\u524d\u540e\u5b50\u6570\u7ec4\u8fdb\u884c\u5206\u533a"}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"\u4ee3\u7801\u5b9e\u73b0",children:"\u4ee3\u7801\u5b9e\u73b0"}),"\n",(0,e.jsx)(i.h3,{id:"\u65b9\u6cd5\u4e00\u539f\u5730\u6392\u5e8f",children:"\u65b9\u6cd5\u4e00\uff1a\u539f\u5730\u6392\u5e8f"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u590d\u6742\u5ea6\u5206\u6790\uff1a","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(nlogN)"}),"\n",(0,e.jsx)(i.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(logN)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-js",children:"const quickSort = (arr, lo = 0, hi = arr.length) => {\n  if (hi - lo <= 1) {\n    return;\n  }\n  const p = partition(arr, lo, hi);\n  quickSort(arr, lo, p);\n  quickSort(arr, p + 1, hi);\n  return arr;\n};\n\nconst partition = (arr, lo, hi) => {\n  // \u57fa\u51c6\u503c\u53d6\u6700\u53f3\u8fb9\u7684\n  const pivot = arr[hi - 1];\n  let i = lo;\n  let j = hi - 1;\n  // \u5c0f\u4e8e\u4e2d\u5fc3\u70b9\u8303\u56f4: [lo, i)\n  // \u672a\u786e\u8ba4\u8303\u56f4: [i, j) \u6216\u8005 [i, j - 1]\n  // \u5927\u4e8e\u4e2d\u5fc3\u70b9\u8303\u56f4: [j, hi - 1)  ...\u4e2d\u5fc3\u70b9 hi, \u5360\u4e86\u4e00\u4f4d\u6240\u4ee5\u662f\u5f00\u533a\u95f4\n  while (i !== j) {\n    if (arr[i] <= pivot) {\n      i++;\n    } else {\n      swap(arr, i, j - 1);\n      j--\n    }\n  }\n  // \u5f53 i === j \u65f6\uff0c\u672a\u786e\u8ba4\u8303\u56f4 [i, j - 1] \u5de6\u8fb9\u5df2\u7ecf\u5927\u4e8e\u53f3\u8fb9\uff0c\u4ea4\u6362\u4e2d\u5fc3\u70b9\n  swap(arr, j, hi - 1);\n  return j;\n};\n\nconst swap = (arr, i1, i2) => {\n  const temp = arr[i1];\n  arr[i1] = arr[i2];\n  arr[i2] = temp;\n};\nconst a = [1, 8, 3, 9, 4, 5, 7];\n\nquickSort(a);\n"})}),"\n",(0,e.jsx)(i.h3,{id:"\u65b9\u6cd5\u4e8c\u975e\u539f\u5730\u6392\u5e8f",children:"\u65b9\u6cd5\u4e8c\uff1a\u975e\u539f\u5730\u6392\u5e8f"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u590d\u6742\u5ea6\u5206\u6790\uff1a","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(nlogN)"}),"\n",(0,e.jsx)(i.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-js",children:"const quickSort = (arr) => {\n  const rec = (gap) => {\n    if (gap.length <= 1) {\n      return gap;\n    }\n    const mid = gap[0];\n    // \u5b58\u653e\u57fa\u51c6\u524d\u6570\u7ec4\n    const left = [];\n    // \u5b58\u653e\u57fa\u51c6\u540e\u6570\u7ec4\n    const right = [];\n    for (let i = 1; i < gap.length; i++) {\n      if (gap[i] < mid) {\n        left.push(gap[i]);\n      } else {\n        right.push(gap[i]);\n      }\n    }\n    return [...rec(left), mid, ...rec(right)];\n  };\n  return rec(arr);\n};\n"})})]})}function h(n={}){const{wrapper:i}={...(0,o.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}}}]);