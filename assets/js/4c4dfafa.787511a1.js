"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1989],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=l.createContext({}),o=function(e){var n=l.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=o(e.components);return l.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=o(t),m=a,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return t?l.createElement(k,i(i({ref:n},s),{},{components:t})):l.createElement(k,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<r;o++)i[o]=t[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var l=t(7462),a=(t(7294),t(3905));const r={id:"remove-duplicates-from-sorted-list",title:"83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",tags:["\u94fe\u8868","\u8fed\u4ee3","\u9012\u5f52","\u53cc\u6307\u9488","\u5feb\u6162\u6307\u9488"]},i=void 0,u={unversionedId:"leetcode/linkedList/remove-duplicates-from-sorted-list",id:"leetcode/linkedList/remove-duplicates-from-sorted-list",title:"83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",description:"\u9898\u76ee\u63cf\u8ff0",source:"@site/docs/leetcode/linkedList/remove-duplicates-from-sorted-list.md",sourceDirName:"leetcode/linkedList",slug:"/leetcode/linkedList/remove-duplicates-from-sorted-list",permalink:"/myblog/docs/leetcode/linkedList/remove-duplicates-from-sorted-list",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/linkedList/remove-duplicates-from-sorted-list.md",tags:[{label:"\u94fe\u8868",permalink:"/myblog/docs/tags/\u94fe\u8868"},{label:"\u8fed\u4ee3",permalink:"/myblog/docs/tags/\u8fed\u4ee3"},{label:"\u9012\u5f52",permalink:"/myblog/docs/tags/\u9012\u5f52"},{label:"\u53cc\u6307\u9488",permalink:"/myblog/docs/tags/\u53cc\u6307\u9488"},{label:"\u5feb\u6162\u6307\u9488",permalink:"/myblog/docs/tags/\u5feb\u6162\u6307\u9488"}],version:"current",frontMatter:{id:"remove-duplicates-from-sorted-list",title:"83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",tags:["\u94fe\u8868","\u8fed\u4ee3","\u9012\u5f52","\u53cc\u6307\u9488","\u5feb\u6162\u6307\u9488"]},sidebar:"leetcode",previous:{title:"141. \u73af\u5f62\u94fe\u8868",permalink:"/myblog/docs/leetcode/linkedList/linked-list-cycle"},next:{title:"206. \u53cd\u8f6c\u5355\u94fe\u8868 Reverse Linked List",permalink:"/myblog/docs/leetcode/linkedList/reverse-linked-list"}},d={},o=[{value:"\u9898\u76ee\u63cf\u8ff0",id:"\u9898\u76ee\u63cf\u8ff0",level:2},{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u5355\u6307\u9488+\u8fed\u4ee3",id:"\u65b9\u6cd5\u4e00\u5355\u6307\u9488\u8fed\u4ee3",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u53cc\u6307\u9488+\u8fed\u4ee3",id:"\u65b9\u6cd5\u4e8c\u53cc\u6307\u9488\u8fed\u4ee3",level:3},{value:"\u65b9\u6cd5\u4e09\uff1a\u865a\u62df\u5934\u8282\u70b9+\u8fed\u4ee3",id:"\u65b9\u6cd5\u4e09\u865a\u62df\u5934\u8282\u70b9\u8fed\u4ee3",level:3},{value:"\u65b9\u6cd5\u56db\uff1a\u9012\u5f52",id:"\u65b9\u6cd5\u56db\u9012\u5f52",level:3},{value:"\u65b9\u6cd5\u4e94\uff1a\u5feb\u6162\u6307\u9488",id:"\u65b9\u6cd5\u4e94\u5feb\u6162\u6307\u9488",level:3}],s={toc:o};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee\u63cf\u8ff0"},"\u9898\u76ee\u63cf\u8ff0"),(0,a.kt)("p",null,"\u5b58\u5728\u4e00\u4e2a\u6309\u5347\u5e8f\u6392\u5217\u7684\u94fe\u8868\uff0c\u7ed9\u4f60\u8fd9\u4e2a\u94fe\u8868\u7684\u5934\u8282\u70b9 head \uff0c\u8bf7\u4f60\u5220\u9664\u6240\u6709\u91cd\u590d\u7684\u5143\u7d20\uff0c\u4f7f\u6bcf\u4e2a\u5143\u7d20 \u53ea\u51fa\u73b0\u4e00\u6b21 \u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u540c\u6837\u6309\u5347\u5e8f\u6392\u5217\u7684\u7ed3\u679c\u94fe\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\u8f93\u5165\uff1ahead = [1,1,2]\n\u8f93\u51fa\uff1a[1,2]\n\n\u8f93\u5165\uff1ahead = [1,1,2,3,3]\n\u8f93\u51fa\uff1a[1,2,3]\n")),(0,a.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u5355\u6307\u9488\u8fed\u4ee3"},"\u65b9\u6cd5\u4e00\uff1a\u5355\u6307\u9488+\u8fed\u4ee3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u662f\u5df2\u7ecf\u6392\u5e8f\u8fc7\u7684\uff0c\u6240\u4ee5\u91cd\u590d\u5143\u7d20\u90fd\u662f\u76f8\u90bb\u7684\uff0c\u8fed\u4ee3\u6307\u9488\uff0c\u6bd4\u8f83\u8282\u70b9\u548cnext\u8282\u70b9\u503c\u662f\u5426\u76f8\u540c\u5373\u53ef"))),(0,a.kt)("li",{parentName:"ul"},"\u6b65\u9aa4\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6307\u9488\u6307\u5411\u5934\u8282\u70b9\uff0c\u8fed\u4ee3\u6307\u9488"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u6307\u9488\u5f53\u524d\u503c\u548cnext\u6307\u9488\u503c\u76f8\u540c\uff0c\u628a\u5f53\u524dnext\u6307\u5411next.next"))),(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(N), N \u4e3a\u94fe\u8868\u957f\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)\uff0c\u5b58\u50a8\u5355\u4e2a\u503c")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function (head) {\n  let p = head;\n\n  while (p && p.next) {\n    if (p.val === p.next.val) {\n      p.next = p.next.next;\n    } else {\n      p = p.next;\n    }\n  }\n\n  return head;\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u53cc\u6307\u9488\u8fed\u4ee3"},"\u65b9\u6cd5\u4e8c\uff1a\u53cc\u6307\u9488+\u8fed\u4ee3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa prev \u548c cur \u4e24\u4e2a\u8282\u70b9\uff0c\u5206\u522b\u6307\u5411 head \u548c head.next"),(0,a.kt)("li",{parentName:"ul"},"\u5224\u65ad prev \u548c cur \u503c\u662f\u5426\u76f8\u7b49",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f8\u7b49\u5219 prev.next = cur.next\uff0c\u5373\u5220\u9664 cur \u8282\u70b9,cur \u7ee7\u7eed\u540e\u79fb"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u7b49\u5219\u540e\u79fb prev\uff0ccur \u4e5f\u7ee7\u7eed\u540e\u79fb"))),(0,a.kt)("li",{parentName:"ul"},"\u76f4\u81f3 cur \u5230\u6700\u540e\uff0c\u8fd4\u56de head"))),(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function (head) {\n  if (head === null || head.next === null) {\n    return head;\n  }\n\n  let prev = head;\n  let cur = head.next;\n\n  while (prev && cur) {\n    if (prev.val === cur.val) {\n      prev.next = cur.next;\n    } else {\n      prev = prev.next;\n    }\n    cur = cur.next;\n  }\n\n  return head;\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e09\u865a\u62df\u5934\u8282\u70b9\u8fed\u4ee3"},"\u65b9\u6cd5\u4e09\uff1a\u865a\u62df\u5934\u8282\u70b9+\u8fed\u4ee3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a\u521b\u5efa\u865a\u62df\u5934\u8282\u70b9\u6307\u5411 head\uff0ccur \u8282\u70b9\u6307\u5411\u5934\u90e8 head.next",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"cur or cur.next \u4e3a null \u65f6\uff0c\u8bf4\u660e\u94fe\u8868\u6ca1\u6709\u53bb\u91cd\u7684\u5fc5\u8981\u4e86"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c cur.val \u548c cur.next.val \u76f8\u7b49\u5219\u53bb\u91cd"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u7b49\u79fb\u52a8 cur \u6307\u9488"))),(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n),n \u4e3a\u94fe\u8868\u957f\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function (head) {\n  if (head === null) {\n    return head;\n  }\n\n  let dummyHead = new ListNode(0, head);\n  let cur = dummyHead.next;\n\n  while (cur && cur.next) {\n    if (cur.val === cur.next.val) {\n      cur.next = cur.next.next;\n    } else {\n      cur = cur.next;\n    }\n  }\n\n  return dummyHead.next;\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u56db\u9012\u5f52"},"\u65b9\u6cd5\u56db\uff1a\u9012\u5f52"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a\u9012\u5f52\u6267\u884c\u5230\u94fe\u8868\u6700\u540e\uff0c\u4ece\u540e\u5411\u524d\u5904\u7406\uff1b\u9047\u5230\u76f8\u540c\u8282\u70b9\uff0c\u5c31\u5220\u9664 head.next\u8282\u70b9\uff0c\u8fd4\u56de head"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u6742\u5ea6\u5206\u6790\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(n)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function (head) {\n  if (head === null) {\n    return head;\n  }\n  if (head.next !== null) {\n    head.next = deleteDuplicates(head.next);\n    if (head.val === head.next.val) {\n      head.next = head.next.next;\n    }\n  }\n  return head;\n};\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e94\u5feb\u6162\u6307\u9488"},"\u65b9\u6cd5\u4e94\uff1a\u5feb\u6162\u6307\u9488"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u601d\u8def\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5feb\u6162\u6307\u9488\u90fd\u6307\u5728\u5934\u90e8\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u5feb\u6307\u9488\u4e00\u76f4\u5f80\u524d\u8d70\uff0c\u5982\u679c\u4e24\u4e2a\u6307\u9488\u503c\u4e0d\u76f8\u7b49\uff0c\u6162\u6307\u9488\u7684next\u6307\u5411\u5feb\u6307\u9488",(0,a.kt)("inlineCode",{parentName:"li"},"slow.next = fast"),",\u53bb\u9664\u91cd\u590d\u5143\u7d20\uff1b",(0,a.kt)("inlineCode",{parentName:"li"},"slow = fast"),"\u540c\u6b65\u6162\u6307\u9488\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u6162\u6307\u9488\u5c31\u662f\u6700\u7ec8\u7ed3\u679c\u5c3e\u90e8\uff0c\u53bb\u9664\u540e\u7eed\u94fe\u63a5\uff0c\u65ad\u6389\u6162\u6307\u9488\u540e\u9762\u6240\u6709\u91cd\u590d\u5143\u7d20\uff0c\u8fd4\u56de head")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function (head) {\n  if (head === null || head.next === null) {\n    return head;\n  }\n\n  let slow = head;\n  let fast = head;\n\n  while (fast) {\n    if (slow.val !== fast.val) {\n      slow.next = fast;\n      slow = slow.next;\n    }\n    fast = fast.next;\n  }\n  // \u65ad\u5c3e\uff0c\u5220\u9664\u591a\u4f59\u91cd\u590d\u5143\u7d20\n  slow.next = null;\n  return head;\n};\n")))}p.isMDXComponent=!0}}]);