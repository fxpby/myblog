"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8137],{4522:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>C,frontMatter:()=>b,metadata:()=>k,toc:()=>v});var n=l(7462),a=l(7294),r=l(3905);const c="workoutCycleCalculatorWrapper_dCMT",i="cycleCardWrapper_vZlU";var o=l(810),u=l(9042),m=l(6356),s=l(5712);const d=["W-1","W-2","W-3","W-4","W-5"],p=[{label:"/",id:"name",items:d},{label:"\u9002\u5e94\u6b21\u6570",id:"rep",items:[]},{label:"\u76ee\u6807\u8d1f\u8377",id:"targetLoad",items:[]},{label:"\u6b21",id:"count",items:[]},{label:"\u7ec4",id:"group",items:[4,5,5,4,6]}],g={12:[.9,.925,.95,.85,.45],10:[.975,1,1.025,.925,.525]},E=()=>{const[e,t]=(0,a.useState)(0),[l,n]=(0,a.useState)(0),[r,E]=(0,a.useState)(0),b=function(e){let{rep:t,oneRM:l}=void 0===e?{}:e;const n=[...p],r={10:.75*Number(l),12:.67*Number(l)};n.forEach((e=>{"rep"===e.id&&(e.items=new Array(5).fill(t+"RM "+r[t])),"targetLoad"===e.id&&(e.items=g[t].map((e=>(Number(r[t])*e).toFixed(2)+" ("+100*e+"%)"))),"count"===e.id&&(e.items=new Array(5).fill(t))}));const c=d.map(((e,t)=>{const l=e=>n.find((t=>t.id===e)).items[t];return{name:l("name"),rep:l("rep"),targetLoad:l("targetLoad"),count:l("count"),group:l("group")}}));return console.log("%c Line:83 \ud83e\udd65 displayTableData","color:#4fff4B",c),a.createElement(u.xJ,null,a.createElement(u.iA,{variant:"simple"},a.createElement(u.hr,null,a.createElement(u.Tr,null,n.map((e=>a.createElement(u.Th,null,e.label))))),a.createElement(u.p3,null,c.map((e=>a.createElement(u.Tr,null,a.createElement(u.Td,null,e.name),a.createElement(u.Td,null,e.rep),a.createElement(u.Td,null,e.targetLoad),a.createElement(u.Td,null,e.count),a.createElement(u.Td,null,e.group)))))))},y=function(e){let{inputChange:t,oneRM:l,title:n}=void 0===e?{}:e;return a.createElement("div",{className:i},a.createElement(m.Vp,null,n),a.createElement("div",null,"\u8bf7\u8f93\u5165 1RM \u7684\u91cd\u91cf(kg)",a.createElement(s.Y2,{defaultValue:0,value:l,min:0,max:500,onChange:e=>((e,t)=>{console.log("callback, val: ",e,t),e(Number(t))})(t,e)},a.createElement(s.zu,null),a.createElement(s.Fi,null,a.createElement(s.WQ,null),a.createElement(s.Y_,null)))),a.createElement("div",null,a.createElement("div",null,"12 RM \u5c0f\u5468\u671f \u2460"),a.createElement(b,{rep:12,oneRM:l})),a.createElement("div",null,a.createElement("div",null,"10 RM \u5c0f\u5468\u671f \u2461"),a.createElement(b,{rep:10,oneRM:l})))};return a.createElement(o.xjn,null,a.createElement("div",{className:c},a.createElement(y,{inputChange:t,oneRM:e,title:"S"}),a.createElement(y,{inputChange:n,oneRM:l,title:"B"}),a.createElement(y,{inputChange:E,oneRM:r,title:"D"})))},b={sidebar_position:1,id:"cycle-calculator"},y="\u5468\u671f\u8ba1\u5212\u8ba1\u7b97\u5668",k={unversionedId:"training-program/cycle-calculator",id:"training-program/cycle-calculator",title:"\u5468\u671f\u8ba1\u5212\u8ba1\u7b97\u5668",description:"SBD-\u8e72\u63a8\u62c9",source:"@site/workout/training-program/cycle-calculator.mdx",sourceDirName:"training-program",slug:"/training-program/cycle-calculator",permalink:"/myblog/workout/training-program/cycle-calculator",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"cycle-calculator"},sidebar:"sidebarsWorkout",next:{title:"\u5e8f\u3001\u524d\u8a00",permalink:"/myblog/workout/rebuilding-milo/rebuilding-milo-intro"}},f={},v=[],M={toc:v};function C(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},M,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5468\u671f\u8ba1\u5212\u8ba1\u7b97\u5668"},"\u5468\u671f\u8ba1\u5212\u8ba1\u7b97\u5668"),(0,r.kt)("p",null,"SBD-\u8e72\u63a8\u62c9"),(0,r.kt)(E,{mdxType:"WorkoutCycleCalculator"}))}C.isMDXComponent=!0}}]);