"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[202],{1330:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>b,contentTitle:()=>C,default:()=>M,frontMatter:()=>E,metadata:()=>h,toc:()=>f});var a=t(7462),n=t(7294),r=t(3905);const i="workoutCycleCalculatorWrapper_dCMT",m="cycleCardWrapper_vZlU";var u=t(9042);const p=["W-1","W-2","W-3","W-4(\u51cf\u8f7d)","W-4(\u51cf\u8f7d)"],o=[{label:"/",id:"name",items:p},{label:"\u9002\u5e94\u6b21\u6570",id:"rep",items:[]},{label:"\u76ee\u6807\u8d1f\u8377",id:"targetLoad",items:[]},{label:"\u6b21",id:"count",items:[]},{label:"\u7ec4",id:"group",items:[3,4,5,4,6]}],c={normalPrepare:{12:[.9,.925,.95,.85,.45],10:[.975,1,1.025,.925,.525]}},k=(0,n.memo)((function(e){let{rep:l,oneRM:t,cycleName:a,caption:r}=void 0===e?{}:e;console.log("BaseCalculator");const i=[...o],m={10:.75*t,12:.67*t};i.forEach((e=>{"rep"===e.id&&(e.items=new Array(5).fill(l+"RM "+m[l].toFixed(2)+"kg")),"targetLoad"===e.id&&(e.items=c[a][l].map((e=>(m[l]*e).toFixed(2)+"kg ("+(100*e).toFixed(2)+"%)"))),"count"===e.id&&(e.items=new Array(5).fill(l))}));const k=p.map(((e,l)=>{const t=e=>i.find((l=>l.id===e)).items[l];return{name:t("name"),rep:t("rep"),targetLoad:t("targetLoad"),count:t("count"),group:t("group")}}));return n.createElement(u.xJ,null,n.createElement(u.iA,{variant:"simple"},n.createElement(u.Rn,null,r),n.createElement(u.hr,null,n.createElement(u.Tr,null,i.map((e=>n.createElement(u.Th,null,e.label))))),n.createElement(u.p3,null,k.map((e=>n.createElement(u.Tr,null,n.createElement(u.Td,null,e.name),n.createElement(u.Td,null,e.rep),n.createElement(u.Td,null,e.targetLoad),n.createElement(u.Td,null,e.count),n.createElement(u.Td,null,e.group)))))))}));var d=t(6356),s=t(5712);const N=(0,n.memo)((function(e){let{cycleName:l,title:t,cycles:a=[]}=void 0===e?{}:e;const[r,i]=(0,n.useState)(0);return n.createElement("div",{className:m},n.createElement(d.Vp,{size:"lg"},t),n.createElement("div",null,"\u8bf7\u8f93\u5165 1RM \u7684\u91cd\u91cf(kg)",n.createElement(s.Y2,{defaultValue:0,value:r,min:0,max:500,onChange:(e,l)=>i(l)},n.createElement(s.zu,null),n.createElement(s.Fi,null,n.createElement(s.WQ,null),n.createElement(s.Y_,null)))),a.map((e=>n.createElement("div",null,n.createElement(k,{rep:e.rep,oneRM:r,cycleName:l,caption:e.caption})))))}));var g=t(810);const v=e=>{const{cycleName:l,title:t,cycles:a}=e;return n.createElement(g.xjn,{resetCSS:!1,disableGlobalStyle:!0},n.createElement("div",{className:i},n.createElement(N,{cycleName:l,title:t,cycles:a})))},y=(0,n.memo)(v),E={},C="\u5468\u671f\u8ba1\u5212",h={unversionedId:"training-program/cycle-plan",id:"training-program/cycle-plan",title:"\u5468\u671f\u8ba1\u5212",description:"\u5927\u5468\u671f\u901a\u5e38\u4ee5\u5e74\u6216\u534a\u5e74\u4e3a\u5355\u4f4d\u89c4\u5212\uff0c\u901a\u5e38\u4e00\u4e2a\u5b8c\u6574\u5927\u5468\u671f\u7531\u6301\u7eed\u6570\u5468\u6216\u6570\u6708\u4e0d\u540c\u9002\u5e94\u65b9\u5411\u7684\u4e2d\u5468\u671f\u7ec4\u5efa\uff0c\u4e2d\u5468\u671f\u7531\u65e0\u6570\u4e2a\u6e10\u8fdb\u8d85\u8d1f\u8377\u5c0f\u5468\u671f\u548c\u51cf\u8f7d\u5c0f\u5468\u671f\u7ec4\u5efa",source:"@site/workout/training-program/cycle-plan.mdx",sourceDirName:"training-program",slug:"/training-program/cycle-plan",permalink:"/myblog/workout/training-program/cycle-plan",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsWorkout",next:{title:"\u5e8f\u3001\u524d\u8a00",permalink:"/myblog/workout/rebuilding-milo/rebuilding-milo-intro"}},b={},f=[{value:"\u4e00\u822c\u51c6\u5907\u671f",id:"\u4e00\u822c\u51c6\u5907\u671f",level:2},{value:"\u4e3b\u8981\u7684\u7ed3\u6784\u6027\u8bad\u7ec3",id:"\u4e3b\u8981\u7684\u7ed3\u6784\u6027\u8bad\u7ec3",level:3},{value:"\u8bad\u7ec3\u5f3a\u5ea6",id:"\u8bad\u7ec3\u5f3a\u5ea6",level:4},{value:"\u8bad\u7ec3\u91cf",id:"\u8bad\u7ec3\u91cf",level:4},{value:"\u9891\u7387",id:"\u9891\u7387",level:4},{value:"\u5c0f\u5468\u671f\u7d2f\u8fdb",id:"\u5c0f\u5468\u671f\u7d2f\u8fdb",level:4},{value:"\u4e2d\u5468\u671f\u65f6\u957f",id:"\u4e2d\u5468\u671f\u65f6\u957f",level:4},{value:"\u51cf\u8f7d\u5468",id:"\u51cf\u8f7d\u5468",level:4},{value:"\u6b21\u8981\u7684\u8f85\u52a9\u8bad\u7ec3\u52a8\u4f5c\u8bad\u7ec3",id:"\u6b21\u8981\u7684\u8f85\u52a9\u8bad\u7ec3\u52a8\u4f5c\u8bad\u7ec3",level:3},{value:"\u4e13\u9879\u51c6\u5907\u671f",id:"\u4e13\u9879\u51c6\u5907\u671f",level:2},{value:"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3",id:"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3",level:3},{value:"\u7b2c\u4e00\u8fc7\u6e21\u671f",id:"\u7b2c\u4e00\u8fc7\u6e21\u671f",level:2}],x={toc:f};function M(e){let{components:l,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},x,t,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5468\u671f\u8ba1\u5212"},"\u5468\u671f\u8ba1\u5212"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u5927\u5468\u671f"),"\u901a\u5e38\u4ee5\u5e74\u6216\u534a\u5e74\u4e3a\u5355\u4f4d\u89c4\u5212\uff0c\u901a\u5e38\u4e00\u4e2a\u5b8c\u6574\u5927\u5468\u671f\u7531\u6301\u7eed\u6570\u5468\u6216\u6570\u6708\u4e0d\u540c\u9002\u5e94\u65b9\u5411\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e2d\u5468\u671f"),"\u7ec4\u5efa\uff0c\u4e2d\u5468\u671f\u7531\u65e0\u6570\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"\u6e10\u8fdb\u8d85\u8d1f\u8377\u5c0f\u5468\u671f"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u51cf\u8f7d\u5c0f\u5468\u671f"),"\u7ec4\u5efa"),(0,r.kt)("p",null,"\u5176\u4e2d\u4e2d\u5468\u671f\u5206\u4e3a 5 \u4e2a\u9636\u6bb5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4e00\u822c\u51c6\u5907\u671f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4e13\u9879\u51c6\u5907\u671f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u8fc7\u6e21\u671f")),(0,r.kt)("li",{parentName:"ol"},"\u8d5b\u5b63"),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u8fc7\u6e21\u671f")),(0,r.kt)("p",null,"\u5176\u4e2d\u4e0d\u6bd4\u8d5b\u7684\u7231\u597d\u8005\u4eec\u5173\u6ce8\u524d\u4e09\u4e2a\u5c31\u597d\u5566\uff0c\u4e0b\u9762\u6211\u4eec\u4e86\u89e3\u4e0b\u8fd9\u4e09\u4e2a\u9636\u6bb5"),(0,r.kt)("h2",{id:"\u4e00\u822c\u51c6\u5907\u671f"},"\u4e00\u822c\u51c6\u5907\u671f"),(0,r.kt)("p",null,"\u5728\u523a\u6fc0\uff08\u808c\u80a5\u5927\uff09\u7684\u540c\u65f6\u53d1\u5c55\uff08\u529b\u91cf\u8010\u529b\uff09\uff0c\u4e3a\u540e\u671f\u9ad8\u5f3a\u5ea6\u795e\u7ecf\u7cfb\u7edf\u8bad\u7ec3\u6253\u4e0b\u575a\u5b9e\u7684\u751f\u7406\u57fa\u7840\uff0c\u5373\u8bad\u7ec3\u4e00\u822c\u8fd0\u52a8\u80fd\u529b"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u9636\u6bb5\u6211\u4eec\u6ce8\u91cd\u8bad\u7ec3\u91cf\u7684\u79ef\u7d2f\uff0c\u8bad\u7ec3\u5f3a\u5ea6\u6b21\u8981"),(0,r.kt)("h3",{id:"\u4e3b\u8981\u7684\u7ed3\u6784\u6027\u8bad\u7ec3"},"\u4e3b\u8981\u7684\u7ed3\u6784\u6027\u8bad\u7ec3"),(0,r.kt)("p",null,"\u4e3b\u9879\uff0c\u5982\u6df1\u8e72\u3001\u786c\u62c9\u3001\u5367\u63a8\u3001\u7ad9\u59ff\u5b9e\u529b\u63a8\u8981\u56f4\u7ed5\u4e0b\u9762\u51e0\u70b9\u8fdb\u884c"),(0,r.kt)("h4",{id:"\u8bad\u7ec3\u5f3a\u5ea6"},"\u8bad\u7ec3\u5f3a\u5ea6"),(0,r.kt)("p",null,"\u5927\u5f3a\u5ea6\uff0c\u53ef\u4ee5\u8ffd\u6c42\u529b\u7aed\uff0c\u65e0\u8f7b\u8bad"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1RM 60%-80%"),(0,r.kt)("li",{parentName:"ul"},"\u7f13\u51b2\u533a 10%")),(0,r.kt)("h4",{id:"\u8bad\u7ec3\u91cf"},"\u8bad\u7ec3\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\uff1a\u6bcf\u4e2a\u808c\u7fa4 15-20 \u7ec4"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5929\uff1a\u6bcf\u4e2a\u52a8\u4f5c 3-6 \u7ec4\uff0c\u6bcf\u7ec4 8-15 \u6b21"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u4f11\u606f\uff1a\u8f83\u77ed\uff0c3 min \u5185")),(0,r.kt)("h4",{id:"\u9891\u7387"},"\u9891\u7387"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\u6bcf\u4e2a\u90e8\u4f4d 2-6 \u6b21\uff08\u5982\u786c\u62c9 2 \u6b21\uff0c\u6df1\u8e72 3 \u6b21\uff0c\u4e0a\u80a2\u63a8\u62c9\u7c7b 3-6 \u6b21\uff09")),(0,r.kt)("h4",{id:"\u5c0f\u5468\u671f\u7d2f\u8fdb"},"\u5c0f\u5468\u671f\u7d2f\u8fdb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\u76f8\u5bf9\u5f3a\u5ea6\u589e\u52a0 2%-5%"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\u7ec4\u6570\u589e\u52a0 0-1 \u7ec4")),(0,r.kt)("h4",{id:"\u4e2d\u5468\u671f\u65f6\u957f"},"\u4e2d\u5468\u671f\u65f6\u957f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u6784\uff1a3:1 or 4:1 (\u5efa\u8bae 3:1)"),(0,r.kt)("li",{parentName:"ul"},"\u65f6\u957f\uff1a\u808c\u80a5\u5927 8-12 \u5468\uff0c\u89e3\u5256\u9002\u5e94 2-4 \u5468")),(0,r.kt)("h4",{id:"\u51cf\u8f7d\u5468"},"\u51cf\u8f7d\u5468"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u9636\u6bb5\uff1a\u5f3a\u5ea6\u4e3a\u5927\u5f3a\u5ea6\u8bad\u7ec3\u7684 90%\uff0c\u5bb9\u91cf\u4e3a\u5927\u5f3a\u5ea6\u8bad\u7ec3\u7684 50%"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u9636\u6bb5\uff1a\u5f3a\u5ea6\u4e3a\u5927\u5f3a\u5ea6\u8bad\u7ec3\u7684 50%\uff0c\u5bb9\u91cf\u4e3a\u5927\u5f3a\u5ea6\u8bad\u7ec3\u7684 50%")),(0,r.kt)("h3",{id:"\u6b21\u8981\u7684\u8f85\u52a9\u8bad\u7ec3\u52a8\u4f5c\u8bad\u7ec3"},"\u6b21\u8981\u7684\u8f85\u52a9\u8bad\u7ec3\u52a8\u4f5c\u8bad\u7ec3"),(0,r.kt)("p",null,"\u52a0\u91cd\u539f\u5219\u662f\u76f8\u540c\u52a8\u4f5c\u5728\u8fde\u7eed\u4e24\u6b21\u8bad\u7ec3\u4e2d\u7684\u6700\u540e\u4e00\u7ec4\uff0c\u82e5\u611f\u89c9\u8fd8\u53ef\u4ee5\u518d\u591a\u505a\u4e24\u6b21\uff0c\u4e0b\u4e00\u6b21\u8bad\u7ec3\u5c31\u53ef\u4ee5\u589e\u52a0\u76f8\u5bf9\u5e94\u7684\u8d1f\u8377"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u80a2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f53\u91cd\u8f83\u5c0f\u6216\u8fd0\u52a8\u7ecf\u9a8c\u8f83\u5c11\uff1a2.5kg"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u5927\u5f3a\u58ee\u4e14\u8fd0\u52a8\u7ecf\u9a8c\u4e30\u5bcc\uff1a2-5kg"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u80a2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f53\u91cd\u8f83\u5c0f\u6216\u8fd0\u52a8\u7ecf\u9a8c\u8f83\u5c11\uff1a2-5kg"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u5927\u5f3a\u58ee\u4e14\u8fd0\u52a8\u7ecf\u9a8c\u4e30\u5bcc\uff1a5-7kg")))),(0,r.kt)(y,{cycleName:"normalPrepare",title:"\u4e00\u822c\u51c6\u5907\u671f\u4e3b\u9879\u52a8\u4f5c\u8ba1\u7b97\u5668",cycles:[{caption:"12 RM \u5c0f\u5468\u671f \u2460 (W \u4ee3\u8868\u5468)",rep:12},{caption:"10 RM \u5c0f\u5468\u671f \u2460 (W \u4ee3\u8868\u5468)",rep:10}],mdxType:"WorkoutCycleCalculator"}),(0,r.kt)("h2",{id:"\u4e13\u9879\u51c6\u5907\u671f"},"\u4e13\u9879\u51c6\u5907\u671f"),(0,r.kt)("p",null,"\u589e\u52a0\u4e13\u9879\u52a8\u4f5c\u6240\u9700\u7684\u6700\u5927\u529b\u91cf\u548c\u7206\u53d1\u529b"),(0,r.kt)("p",null,"\u5173\u6ce8\u70b9\u662f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u826f\u597d\u7684\u52a8\u4f5c\u6280\u672f"),(0,r.kt)("li",{parentName:"ul"},"\u8f83\u5927\u8d1f\u8377\u7684\u7ec3\u4e60"),(0,r.kt)("li",{parentName:"ul"},"\u8f83\u957f\u7684\u7ec4\u95f4\u4f11\u606f\u65f6\u95f4")),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u7684\u76ee\u6807\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u6700\u5927\u808c\u8089\u529b\u91cf"),"\uff0c\u6240\u4ee5\u5206\u6210\u4e24\u4e2a\u9636\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"MxS-1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MxS-2")," \u8fdb\u884c"),(0,r.kt)("p",null,"\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"5 x 5")," \u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"3 x 3"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u808c\u8089\u5185\u534f\u8c03\u6027\u8bad\u7ec3")),(0,r.kt)("h3",{id:"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3"},"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3"),(0,r.kt)("h2",{id:"\u7b2c\u4e00\u8fc7\u6e21\u671f"},"\u7b2c\u4e00\u8fc7\u6e21\u671f"))}M.isMDXComponent=!0}}]);