"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7151],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),l=(t(7294),t(3905));const o={},a="2. \u4e24\u6570\u76f8\u52a0",i={unversionedId:"leetcode/linkedList/add-two-numbers",id:"leetcode/linkedList/add-two-numbers",title:"2. \u4e24\u6570\u76f8\u52a0",description:"\u7ed9\u4f60\u4e24\u4e2a\xa0\u975e\u7a7a \u7684\u94fe\u8868\uff0c\u8868\u793a\u4e24\u4e2a\u975e\u8d1f\u7684\u6574\u6570\u3002\u5b83\u4eec\u6bcf\u4f4d\u6570\u5b57\u90fd\u662f\u6309\u7167\xa0\u9006\u5e8f\xa0\u7684\u65b9\u5f0f\u5b58\u50a8\u7684\uff0c\u5e76\u4e14\u6bcf\u4e2a\u8282\u70b9\u53ea\u80fd\u5b58\u50a8\xa0\u4e00\u4f4d\xa0\u6570\u5b57\u3002",source:"@site/docs/leetcode/linkedList/add-two-numbers.md",sourceDirName:"leetcode/linkedList",slug:"/leetcode/linkedList/add-two-numbers",permalink:"/myblog/docs/leetcode/linkedList/add-two-numbers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/linkedList/add-two-numbers.md",tags:[],version:"current",frontMatter:{},sidebar:"leetcode",previous:{title:"933. \u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570",permalink:"/myblog/docs/leetcode/queue/number-of-recent-calls"},next:{title:"141. \u73af\u5f62\u94fe\u8868",permalink:"/myblog/docs/leetcode/linkedList/linked-list-cycle"}},s={},c=[{value:"\u89e3\u9898\u65b9\u6cd5",id:"\u89e3\u9898\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00: \u53cc\u6307\u9488",id:"\u65b9\u6cd5\u4e00-\u53cc\u6307\u9488",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u4e09\u6307\u9488",id:"\u65b9\u6cd5\u4e8c\u4e09\u6307\u9488",level:3}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2-\u4e24\u6570\u76f8\u52a0"},"2. \u4e24\u6570\u76f8\u52a0"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e24\u4e2a\xa0\u975e\u7a7a \u7684\u94fe\u8868\uff0c\u8868\u793a\u4e24\u4e2a\u975e\u8d1f\u7684\u6574\u6570\u3002\u5b83\u4eec\u6bcf\u4f4d\u6570\u5b57\u90fd\u662f\u6309\u7167\xa0\u9006\u5e8f\xa0\u7684\u65b9\u5f0f\u5b58\u50a8\u7684\uff0c\u5e76\u4e14\u6bcf\u4e2a\u8282\u70b9\u53ea\u80fd\u5b58\u50a8\xa0\u4e00\u4f4d\xa0\u6570\u5b57\u3002"),(0,l.kt)("p",null,"\u8bf7\u4f60\u5c06\u4e24\u4e2a\u6570\u76f8\u52a0\uff0c\u5e76\u4ee5\u76f8\u540c\u5f62\u5f0f\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u548c\u7684\u94fe\u8868\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5047\u8bbe\u9664\u4e86\u6570\u5b57 0 \u4e4b\u5916\uff0c\u8fd9\u4e24\u4e2a\u6570\u90fd\u4e0d\u4f1a\u4ee5 0\xa0\u5f00\u5934\u3002"),(0,l.kt)("p",null,"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum\xa0as a linked list."),(0,l.kt)("p",null,"You may assume the two numbers do not contain any leading zero, except the number 0 itself."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1al1 = [2,4,3], l2 = [5,6,4]\n\u8f93\u51fa\uff1a[7,0,8]\n\u89e3\u91ca\uff1a342 + 465 = 807.\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1al1 = [0], l2 = [0]\n\u8f93\u51fa\uff1a[0]\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1al1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n\u8f93\u51fa\uff1a[8,9,9,9,0,0,0,1]\n")),(0,l.kt)("p",null,"\u63d0\u793a\uff1a"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u94fe\u8868\u4e2d\u7684\u8282\u70b9\u6570\u5728\u8303\u56f4 ","[1, 100]"," \u5185\n0 <= Node.val <= 9\n\u9898\u76ee\u6570\u636e\u4fdd\u8bc1\u5217\u8868\u8868\u793a\u7684\u6570\u5b57\u4e0d\u542b\u524d\u5bfc\u96f6"),(0,l.kt)("p",null,"Constraints:"),(0,l.kt)("p",null,"The number of nodes in each linked list is in the range ","[1, 100]",".\n0 <= Node.val <= 9\nIt is guaranteed that the list represents a number that does not have leading zeros."),(0,l.kt)("h2",{id:"\u89e3\u9898\u65b9\u6cd5"},"\u89e3\u9898\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00-\u53cc\u6307\u9488"},"\u65b9\u6cd5\u4e00: \u53cc\u6307\u9488"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function(l1, l2) {\n  let pre = new ListNode(0);\n  let cur = pre\n  let carry = 0\n\n  while(l1 || l2) {\n    const x = l1 ? l1.val : 0\n    const y = l2 ? l2.val : 0\n    const sum = x + y + carry\n    cur.next = new ListNode(sum % 10)\n    carry = Math.floor(sum / 10)\n    cur = cur.next\n\n    if (l1) {\n      l1 = l1.next\n    }\n\n    if (l2) {\n      l2 = l2.next\n    }\n  }\n\n  if (carry) {\n    cur.next = new ListNode(carry)\n  }\n\n  return pre.next\n}\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u4e09\u6307\u9488"},"\u65b9\u6cd5\u4e8c\uff1a\u4e09\u6307\u9488"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function(l1, l2) {\n  let l3 = new ListNode(0)\n\n  let p1 = l1\n  let p2 = l2\n  let p3 = l3\n\n  let carry = 0\n  \n  while (p1 || p2) {\n    let x = p1 ? p1.val : 0\n    let y = p2 ? p2.val : 0\n\n    let sum = x + y + carry\n    p3.next = new ListNode(sum % 10)\n    carry = Math.floor(sum / 10)\n\n    if(p1) {\n      p1 = p1.next\n    }\n    if(p2) {\n      p2 = p2.next\n    }\n    p3 = p3.next\n  }\n  \n  if (carry) {\n    p3.next = new ListNode(carry)\n  }\n  return l3.next\n};\n")))}u.isMDXComponent=!0}}]);