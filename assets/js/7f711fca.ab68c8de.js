"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=l,v=s["".concat(i,".").concat(d)]||s[d]||p[d]||a;return r?n.createElement(v,o(o({ref:t},m),{},{components:r})):n.createElement(v,o({ref:t},m))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>s,toc:()=>v});var n=r(7462),l=r(7294),a=r(3905);const o={columnsWrap:"columnsWrap_rWIs",columnsItem:"columnsItem_C8yk",tableHeader:"tableHeader_IN2S",tableContent:"tableContent_CO6S",contentItem:"contentItem_JusC"},c=[{label:"/",id:"name",items:["W-1","W-2","W-3","W-4","W-5"]},{label:"\u9002\u5e94\u6b21\u6570",id:"rep",items:[]},{label:"\u76ee\u6807\u8d1f\u8377",id:"targetLoad",items:[]},{label:"\u6b21",id:"count",items:[]},{label:"\u7ec4",id:"group",items:[4,5,5,4,6]}],i={12:[.9,.925,.95,.85,.45],10:[.975,1,1.025,.925,.525]},u=()=>{const[e,t]=(0,l.useState)(""),[r,n]=(0,l.useState)(""),[a,u]=(0,l.useState)(""),m=function(e){let{rep:t,oneRM:r}=void 0===e?{}:e;const n=[...c],a={10:.75*Number(r),12:.67*Number(r)};return n.forEach((e=>{"rep"===e.id&&(e.items=new Array(5).fill(t+"RM "+a[t])),"targetLoad"===e.id&&(e.items=i[t].map((e=>Number(a[t])*e+" ("+100*e+"%)"))),"count"===e.id&&(e.items=new Array(5).fill(t))})),l.createElement("div",{className:o.columnsWrap},n.map((e=>l.createElement("div",{className:o.columnsItem},l.createElement("div",{className:o.tableHeader},e.label),l.createElement("div",{className:o.tableContent},e.items.map((e=>l.createElement("div",{className:o.contentItem},e))))))))},p=(e,r)=>{var l;if(console.log("%c Line:12 \ud83c\udf55 e","color:#3f7cff",e),"S"===r)t(null==e||null==(l=e.target)?void 0:l.value);else if("B"===r){var a;n(null==e||null==(a=e.target)?void 0:a.value)}else if("D"===r){var o;u(null==e||null==(o=e.target)?void 0:o.value)}};return l.createElement("div",{className:o.workoutCycleCalculatorWrapper},l.createElement("h2",null,"S"),l.createElement("div",null,"\u8bf7\u8f93\u5165 1RM \u7684\u91cd\u91cf(kg)",l.createElement("input",{type:"text",value:e,onChange:e=>p(e,"S")})),l.createElement("div",null,l.createElement("div",null,"12 RM \u5c0f\u5468\u671f \u2460"),l.createElement(m,{rep:12,oneRM:e})),l.createElement("div",null,l.createElement("div",null,"10 RM \u5c0f\u5468\u671f \u2461"),l.createElement(m,{rep:10,oneRM:e})),l.createElement("br",null),l.createElement("h2",null,"B"),l.createElement("div",null,"\u8bf7\u8f93\u5165 1RM \u7684\u91cd\u91cf(kg)",l.createElement("input",{type:"text",value:r,onChange:e=>p(e,"B")})),l.createElement("div",null,l.createElement("div",null,"12 RM \u5c0f\u5468\u671f \u2460"),l.createElement(m,{rep:12,oneRM:r})),l.createElement("div",null,l.createElement("div",null,"10 RM \u5c0f\u5468\u671f \u2461"),l.createElement(m,{rep:10,oneRM:r})),l.createElement("br",null),l.createElement("h2",null,"D"),l.createElement("div",null,"\u8bf7\u8f93\u5165 1RM \u7684\u91cd\u91cf(kg)",l.createElement("input",{type:"text",value:a,onChange:e=>p(e,"D")})),l.createElement("div",null,l.createElement("div",null,"12 RM \u5c0f\u5468\u671f \u2460"),l.createElement(m,{rep:12,oneRM:a})),l.createElement("div",null,l.createElement("div",null,"10 RM \u5c0f\u5468\u671f \u2461"),l.createElement(m,{rep:10,oneRM:a})))},m={sidebar_position:1,id:"cycle-calculator"},p="\u5468\u671f\u8ba1\u5212\u8ba1\u7b97\u5668",s={unversionedId:"training-program/cycle-calculator",id:"training-program/cycle-calculator",title:"\u5468\u671f\u8ba1\u5212\u8ba1\u7b97\u5668",description:"SBD-\u8e72\u63a8\u62c9",source:"@site/workout/training-program/cycle-calculator.mdx",sourceDirName:"training-program",slug:"/training-program/cycle-calculator",permalink:"/myblog/workout/training-program/cycle-calculator",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"cycle-calculator"},sidebar:"sidebarsWorkout",next:{title:"\u5e8f\u3001\u524d\u8a00",permalink:"/myblog/workout/rebuilding-milo/rebuilding-milo-intro"}},d={},v=[],f={toc:v};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5468\u671f\u8ba1\u5212\u8ba1\u7b97\u5668"},"\u5468\u671f\u8ba1\u5212\u8ba1\u7b97\u5668"),(0,a.kt)("p",null,"SBD-\u8e72\u63a8\u62c9"),(0,a.kt)(u,{mdxType:"WorkoutCycleCalculator"}))}y.isMDXComponent=!0}}]);