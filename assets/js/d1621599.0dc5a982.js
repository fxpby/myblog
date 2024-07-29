"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[202],{7020:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>W,contentTitle:()=>D,default:()=>I,frontMatter:()=>w,metadata:()=>L,toc:()=>_});var a=l(7462),n=l(7294),r=l(3905),i=l(8527),u=l(9680),m=l(9762),k=l(6114),p=l(6723);const d="tableArea_RWnD",o="configArea_Sip0",N="workoutCycleCalculatorWrapper_wvCj";function c(e){const{oneRM:t,setOneRM:l,cycle:a,setCycle:r,renderTableData:d}=e,[N,c]=(0,n.useState)({oneRM:{value:0,rule:e=>"number"==typeof e&&!isNaN(e)}});(0,n.useEffect)((()=>{d()}),[]),(0,n.useEffect)((()=>{d()}),[a,t]);return n.createElement(i.kC,{direction:"column",className:o},n.createElement(u.Ee,{onChange:r,value:a},"\u8bf7\u9009\u62e9\u4e2d\u5468\u671f\u9636\u6bb5\uff1a",n.createElement(i.Kq,{direction:"row"},n.createElement(u.Y8,{value:"mxs-1"},"mxs-1"),n.createElement(u.Y8,{value:"mxs-2"},"mxs-2"))),n.createElement(m.NI,null,n.createElement(m.lX,null,"\u8bf7\u8f93\u5165\u76ee\u6807\u52a8\u4f5c 1RM \u7684\u91cd\u91cf"),n.createElement(k.Y2,{defaultValue:0,value:N.oneRM.value,min:0,max:500,onChange:(e,t)=>c((e=>({...e,oneRM:{...e.oneRM,value:t}})))},n.createElement(k.zu,null),n.createElement(k.Fi,null,n.createElement(k.WQ,null),n.createElement(k.Y_,null)))),n.createElement(p.zx,{colorScheme:"green",onClick:()=>{var e;const t=null==N||null==(e=N.oneRM)?void 0:e.value;(e=>{var t,l;const a=null==(t=N[e])?void 0:t.rule,n=null==(l=N[e])?void 0:l.value;return console.log("value: ",n),a(n)})("oneRM")&&l(t)}},"Go!"))}var g=l(9042);function s(e){const{tableIndex:t,tableData:l,tableColumn:a}=e,r=e=>Number(100*e).toFixed(2)+"%";return n.createElement(g.xJ,null,n.createElement(g.iA,{variant:"simple"},n.createElement(g.Rn,null,"\u4e2d\u5468\u671f-"+(t+1)),n.createElement(g.hr,null,n.createElement(g.Tr,null,a.map((e=>n.createElement(g.Th,{key:e.id},e.label))))),n.createElement(g.p3,null,l.map(((e,t)=>n.createElement(g.Tr,{key:t},n.createElement(g.Td,null,e.week),n.createElement(g.Td,null,e.group),n.createElement(g.Td,null,e.count),n.createElement(g.Td,null,e.absoluteStrength[0],"/",r(e.absoluteStrength[1])),n.createElement(g.Td,null,r(e.relativeStrength)),n.createElement(g.Td,null,e.trainingLoad[0].toFixed(2),"/",r(e.trainingLoad[1])),n.createElement(g.Td,null,e.capacity.toFixed(2)),n.createElement(g.Td,null,e.lightTraining.toFixed(2))))))))}function v(e){const{tableDataList:t,tableColumn:l}=e;return n.createElement("div",{className:d},null==t?void 0:t.map(((e,t)=>n.createElement(s,{key:t,tableIndex:t,tableData:e,tableColumn:l}))))}const b={"mxs-1":.15},h={"mxs-1":.7,"mxs-2":.85},y={"mxs-1":.02,"mxs-2":.05},E={"mxs-1":[-.1,-.35]},C={"mxs-1":{group:[[4,5,5,3,5],[4,4,4,3,5]],count:[[6,5,5,5,5],[5,4,3,3,3]]},"mxs-2":{group:[[],[]],count:[[],[]]}},x=[3,4],M=[{label:"\u5468",id:"week"},{label:"\u7ec4\u6570",id:"group"},{label:"\u6b21\u6570",id:"count"},{label:"\u7edd\u5bf9\u5f3a\u5ea6",id:"absoluteStrength"},{label:"\u76f8\u5bf9\u5f3a\u5ea6",id:"relativeStrength"},{label:"\u8bad\u7ec3\u8d1f\u8377",id:"trainingLoad"},{label:"\u5bb9\u91cf",id:"capacity"},{label:"\u8f7b\u8bad",id:"lightTraining"}],S={1:1,2:.95,3:.93,4:.9,5:.87,6:.85,7:.83,8:.8,9:.77,10:.75,11:.7,12:.67,15:.65},f=()=>{const[e,t]=(0,n.useState)(0),[l,a]=(0,n.useState)("mxs-1"),[r,i]=(0,n.useState)(null);return{oneRM:e,setOneRM:t,cycle:l,setCycle:a,renderTableData:()=>{var t;const{group:a,count:n}=C[l],r=b[l],u=h[l],m=y[l],k=E[l],p=function(t){let{rowLength:l,baseRelativeStrength:a,group:n,count:r}=void 0===t?{}:t;const i=new Array(l).fill();let p={};return i.map(((t,l)=>{const i={};return M.forEach((t=>{var d;const o=null==x?void 0:x.includes(l),N=x.findIndex((e=>e===l));if("week"===t.id){const e=x[0];i[t.id]=o?"W-"+(e+1)+"."+(N+1):"W-"+(l+1)}const c=n[l];"group"===t.id&&(i[t.id]=c);const g=r[l];"count"===t.id&&(i[t.id]=g);const s=S[r[l]]*e,v=S[r[l]];"absoluteStrength"===t.id&&(i[t.id]=[s,v]);const b=0===l?a:null==(d=p)?void 0:d.relativeStrength;let h;h=o?b+k[N]:0===l?a:b+m,"relativeStrength"===t.id&&(i[t.id]=h);const y=s*h,E=v*h;"trainingLoad"===t.id&&(i[t.id]=[y,E]),"capacity"===t.id&&(i[t.id]=c*g*y),"lightTraining"===t.id&&(i[t.id]=u*y)})),p=i,i}))},d=p({rowLength:a[0].length,baseRelativeStrength:1-r,group:a[0],count:n[0]}),o=(null==(t=d[x[0]-1])?void 0:t.relativeStrength)+m,N=p({rowLength:a[1].length,baseRelativeStrength:o,group:a[1],count:n[1]});i([d,N])},tableDataList:r,tableColumn:M,setTableDataList:i}};var R=l(810);function T(){const e=f();return n.createElement(R.xjn,{resetCSS:!1,disableGlobalStyle:!0},n.createElement("div",{className:N},n.createElement(c,e),n.createElement(v,e)))}const w={},D="\u5468\u671f\u8ba1\u5212",L={unversionedId:"training-program/cycle-plan",id:"training-program/cycle-plan",title:"\u5468\u671f\u8ba1\u5212",description:"\u5927\u5468\u671f\u901a\u5e38\u4ee5\u5e74\u6216\u534a\u5e74\u4e3a\u5355\u4f4d\u89c4\u5212\uff0c\u901a\u5e38\u4e00\u4e2a\u5b8c\u6574\u5927\u5468\u671f\u7531\u6301\u7eed\u6570\u5468\u6216\u6570\u6708\u4e0d\u540c\u9002\u5e94\u65b9\u5411\u7684\u4e2d\u5468\u671f\u7ec4\u5efa\uff0c\u4e2d\u5468\u671f\u7531\u65e0\u6570\u4e2a\u6e10\u8fdb\u8d85\u8d1f\u8377\u5c0f\u5468\u671f\u548c\u51cf\u8f7d\u5c0f\u5468\u671f\u7ec4\u5efa",source:"@site/workout/training-program/cycle-plan.mdx",sourceDirName:"training-program",slug:"/training-program/cycle-plan",permalink:"/myblog/workout/training-program/cycle-plan",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsWorkout",next:{title:"\u5e8f\u3001\u524d\u8a00",permalink:"/myblog/workout/rebuilding-milo/rebuilding-milo-intro"}},W={},_=[{value:"\u4e00\u822c\u51c6\u5907\u671f",id:"\u4e00\u822c\u51c6\u5907\u671f",level:2},{value:"\u4e3b\u8981\u7684\u7ed3\u6784\u6027\u8bad\u7ec3",id:"\u4e3b\u8981\u7684\u7ed3\u6784\u6027\u8bad\u7ec3",level:3},{value:"\u8bad\u7ec3\u5f3a\u5ea6",id:"\u8bad\u7ec3\u5f3a\u5ea6",level:4},{value:"\u8bad\u7ec3\u91cf",id:"\u8bad\u7ec3\u91cf",level:4},{value:"\u9891\u7387",id:"\u9891\u7387",level:4},{value:"\u5c0f\u5468\u671f\u7d2f\u8fdb",id:"\u5c0f\u5468\u671f\u7d2f\u8fdb",level:4},{value:"\u4e2d\u5468\u671f\u65f6\u957f",id:"\u4e2d\u5468\u671f\u65f6\u957f",level:4},{value:"\u51cf\u8f7d\u5468",id:"\u51cf\u8f7d\u5468",level:4},{value:"\u6b21\u8981\u7684\u8f85\u52a9\u8bad\u7ec3\u52a8\u4f5c\u8bad\u7ec3",id:"\u6b21\u8981\u7684\u8f85\u52a9\u8bad\u7ec3\u52a8\u4f5c\u8bad\u7ec3",level:3},{value:"\u4e13\u9879\u51c6\u5907\u671f",id:"\u4e13\u9879\u51c6\u5907\u671f",level:2},{value:"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3",id:"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3",level:3},{value:"\u8bad\u7ec3\u5f3a\u5ea6",id:"\u8bad\u7ec3\u5f3a\u5ea6-1",level:4},{value:"\u8bad\u7ec3\u91cf",id:"\u8bad\u7ec3\u91cf-1",level:4},{value:"\u52a8\u4f5c\u9009\u62e9",id:"\u52a8\u4f5c\u9009\u62e9",level:4},{value:"\u9891\u7387",id:"\u9891\u7387-1",level:4},{value:"\u4e2d\u5468\u671f\u65f6\u957f",id:"\u4e2d\u5468\u671f\u65f6\u957f-1",level:4},{value:"\u7b2c\u4e00\u8fc7\u6e21\u671f",id:"\u7b2c\u4e00\u8fc7\u6e21\u671f",level:2},{value:"\u5468\u671f\u52a8\u4f5c\u8ba1\u7b97\u5668",id:"\u5468\u671f\u52a8\u4f5c\u8ba1\u7b97\u5668",level:2},{value:"\u8ba1\u7b97\u601d\u8def",id:"\u8ba1\u7b97\u601d\u8def",level:3},{value:"1. \u51c6\u5907\u6570\u636e",id:"1-\u51c6\u5907\u6570\u636e",level:4},{value:"2. \u5468",id:"2-\u5468",level:4},{value:"3. \u7ec4\u6570&amp;\u6b21\u6570",id:"3-\u7ec4\u6570\u6b21\u6570",level:4},{value:"4. \u7edd\u5bf9\u5f3a\u5ea6",id:"4-\u7edd\u5bf9\u5f3a\u5ea6",level:4},{value:"5. \u76f8\u5bf9\u5f3a\u5ea6",id:"5-\u76f8\u5bf9\u5f3a\u5ea6",level:4},{value:"6. \u8bad\u7ec3\u8d1f\u8377",id:"6-\u8bad\u7ec3\u8d1f\u8377",level:4},{value:"7. \u5bb9\u91cf",id:"7-\u5bb9\u91cf",level:4},{value:"8. \u8f7b\u8bad",id:"8-\u8f7b\u8bad",level:4}],F={toc:_};function I(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},F,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5468\u671f\u8ba1\u5212"},"\u5468\u671f\u8ba1\u5212"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u5927\u5468\u671f"),"\u901a\u5e38\u4ee5\u5e74\u6216\u534a\u5e74\u4e3a\u5355\u4f4d\u89c4\u5212\uff0c\u901a\u5e38\u4e00\u4e2a\u5b8c\u6574\u5927\u5468\u671f\u7531\u6301\u7eed\u6570\u5468\u6216\u6570\u6708\u4e0d\u540c\u9002\u5e94\u65b9\u5411\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e2d\u5468\u671f"),"\u7ec4\u5efa\uff0c\u4e2d\u5468\u671f\u7531\u65e0\u6570\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"\u6e10\u8fdb\u8d85\u8d1f\u8377\u5c0f\u5468\u671f"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u51cf\u8f7d\u5c0f\u5468\u671f"),"\u7ec4\u5efa"),(0,r.kt)("p",null,"\u5176\u4e2d\u4e2d\u5468\u671f\u5206\u4e3a 5 \u4e2a\u9636\u6bb5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4e00\u822c\u51c6\u5907\u671f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4e13\u9879\u51c6\u5907\u671f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u8fc7\u6e21\u671f")),(0,r.kt)("li",{parentName:"ol"},"\u8d5b\u5b63"),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u8fc7\u6e21\u671f")),(0,r.kt)("p",null,"\u5176\u4e2d\u4e0d\u6bd4\u8d5b\u7684\u7231\u597d\u8005\u4eec\u5173\u6ce8\u524d\u4e09\u4e2a\u5c31\u597d\u5566\uff0c\u4e0b\u9762\u6211\u4eec\u4e86\u89e3\u4e0b\u8fd9\u4e09\u4e2a\u9636\u6bb5"),(0,r.kt)("h2",{id:"\u4e00\u822c\u51c6\u5907\u671f"},"\u4e00\u822c\u51c6\u5907\u671f"),(0,r.kt)("p",null,"\u5728\u523a\u6fc0\uff08\u808c\u80a5\u5927\uff09\u7684\u540c\u65f6\u53d1\u5c55\uff08\u529b\u91cf\u8010\u529b\uff09\uff0c\u4e3a\u540e\u671f\u9ad8\u5f3a\u5ea6\u795e\u7ecf\u7cfb\u7edf\u8bad\u7ec3\u6253\u4e0b\u575a\u5b9e\u7684\u751f\u7406\u57fa\u7840\uff0c\u5373\u8bad\u7ec3\u4e00\u822c\u8fd0\u52a8\u80fd\u529b"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u9636\u6bb5\u6211\u4eec\u6ce8\u91cd\u8bad\u7ec3\u91cf\u7684\u79ef\u7d2f\uff0c\u8bad\u7ec3\u5f3a\u5ea6\u6b21\u8981"),(0,r.kt)("h3",{id:"\u4e3b\u8981\u7684\u7ed3\u6784\u6027\u8bad\u7ec3"},"\u4e3b\u8981\u7684\u7ed3\u6784\u6027\u8bad\u7ec3"),(0,r.kt)("p",null,"\u4e3b\u9879\uff0c\u5982\u6df1\u8e72\u3001\u786c\u62c9\u3001\u5367\u63a8\u3001\u7ad9\u59ff\u5b9e\u529b\u63a8\u8981\u56f4\u7ed5\u4e0b\u9762\u51e0\u70b9\u8fdb\u884c"),(0,r.kt)("h4",{id:"\u8bad\u7ec3\u5f3a\u5ea6"},"\u8bad\u7ec3\u5f3a\u5ea6"),(0,r.kt)("p",null,"\u5927\u5f3a\u5ea6\uff0c\u53ef\u4ee5\u8ffd\u6c42\u529b\u7aed\uff0c\u65e0\u8f7b\u8bad"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1RM 60%-80%"),(0,r.kt)("li",{parentName:"ul"},"\u7f13\u51b2\u533a 10%")),(0,r.kt)("h4",{id:"\u8bad\u7ec3\u91cf"},"\u8bad\u7ec3\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\uff1a\u6bcf\u4e2a\u808c\u7fa4 15-20 \u7ec4"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5929\uff1a\u6bcf\u4e2a\u52a8\u4f5c 3-6 \u7ec4\uff0c\u6bcf\u7ec4 8-15 \u6b21"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u4f11\u606f\uff1a\u8f83\u77ed\uff0c3 min \u5185")),(0,r.kt)("h4",{id:"\u9891\u7387"},"\u9891\u7387"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\u6bcf\u4e2a\u90e8\u4f4d 2-6 \u6b21\uff08\u5982\u786c\u62c9 2 \u6b21\uff0c\u6df1\u8e72 3 \u6b21\uff0c\u4e0a\u80a2\u63a8\u62c9\u7c7b 3-6 \u6b21\uff09")),(0,r.kt)("h4",{id:"\u5c0f\u5468\u671f\u7d2f\u8fdb"},"\u5c0f\u5468\u671f\u7d2f\u8fdb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\u76f8\u5bf9\u5f3a\u5ea6\u589e\u52a0 2%-5%"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\u7ec4\u6570\u589e\u52a0 0-1 \u7ec4")),(0,r.kt)("h4",{id:"\u4e2d\u5468\u671f\u65f6\u957f"},"\u4e2d\u5468\u671f\u65f6\u957f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u6784\uff1a3:1 or 4:1 (\u5efa\u8bae 3:1)"),(0,r.kt)("li",{parentName:"ul"},"\u65f6\u957f\uff1a\u808c\u80a5\u5927 8-12 \u5468\uff0c\u89e3\u5256\u9002\u5e94 2-4 \u5468")),(0,r.kt)("h4",{id:"\u51cf\u8f7d\u5468"},"\u51cf\u8f7d\u5468"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u9636\u6bb5\uff1a\u5f3a\u5ea6\u4e3a\u5927\u5f3a\u5ea6\u8bad\u7ec3\u7684 90%\uff0c\u5bb9\u91cf\u4e3a\u5927\u5f3a\u5ea6\u8bad\u7ec3\u7684 50%"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u9636\u6bb5\uff1a\u5f3a\u5ea6\u4e3a\u5927\u5f3a\u5ea6\u8bad\u7ec3\u7684 50%\uff0c\u5bb9\u91cf\u4e3a\u5927\u5f3a\u5ea6\u8bad\u7ec3\u7684 50%")),(0,r.kt)("h3",{id:"\u6b21\u8981\u7684\u8f85\u52a9\u8bad\u7ec3\u52a8\u4f5c\u8bad\u7ec3"},"\u6b21\u8981\u7684\u8f85\u52a9\u8bad\u7ec3\u52a8\u4f5c\u8bad\u7ec3"),(0,r.kt)("p",null,"\u52a0\u91cd\u539f\u5219\u662f\u76f8\u540c\u52a8\u4f5c\u5728\u8fde\u7eed\u4e24\u6b21\u8bad\u7ec3\u4e2d\u7684\u6700\u540e\u4e00\u7ec4\uff0c\u82e5\u611f\u89c9\u8fd8\u53ef\u4ee5\u518d\u591a\u505a\u4e24\u6b21\uff0c\u4e0b\u4e00\u6b21\u8bad\u7ec3\u5c31\u53ef\u4ee5\u589e\u52a0\u76f8\u5bf9\u5e94\u7684\u8d1f\u8377"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u80a2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f53\u91cd\u8f83\u5c0f\u6216\u8fd0\u52a8\u7ecf\u9a8c\u8f83\u5c11\uff1a2.5kg"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u5927\u5f3a\u58ee\u4e14\u8fd0\u52a8\u7ecf\u9a8c\u4e30\u5bcc\uff1a2-5kg"))),(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u80a2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f53\u91cd\u8f83\u5c0f\u6216\u8fd0\u52a8\u7ecf\u9a8c\u8f83\u5c11\uff1a2-5kg"),(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u5927\u5f3a\u58ee\u4e14\u8fd0\u52a8\u7ecf\u9a8c\u4e30\u5bcc\uff1a5-7kg")))),(0,r.kt)("h2",{id:"\u4e13\u9879\u51c6\u5907\u671f"},"\u4e13\u9879\u51c6\u5907\u671f"),(0,r.kt)("p",null,"\u589e\u52a0\u4e13\u9879\u52a8\u4f5c\u6240\u9700\u7684\u6700\u5927\u529b\u91cf\u548c\u7206\u53d1\u529b"),(0,r.kt)("p",null,"\u5173\u6ce8\u70b9\u662f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u826f\u597d\u7684\u52a8\u4f5c\u6280\u672f"),(0,r.kt)("li",{parentName:"ul"},"\u8f83\u5927\u8d1f\u8377\u7684\u7ec3\u4e60"),(0,r.kt)("li",{parentName:"ul"},"\u8f83\u957f\u7684\u7ec4\u95f4\u4f11\u606f\u65f6\u95f4")),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u7684\u76ee\u6807\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u6700\u5927\u808c\u8089\u529b\u91cf"),"\uff0c\u6240\u4ee5\u5206\u6210\u4e24\u4e2a\u9636\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"MxS-1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"MxS-2")," \u8fdb\u884c"),(0,r.kt)("p",null,"\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"5 x 5")," \u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"3 x 3"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u808c\u8089\u5185\u534f\u8c03\u6027\u8bad\u7ec3")),(0,r.kt)("h3",{id:"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3"},"\u808c\u8089\u95f4\u534f\u8c03\u6027\u8bad\u7ec3"),(0,r.kt)("p",null,"\u4e0d\u540c\u808c\u7fa4\u4e4b\u95f4\u76f8\u4e92\u914d\u5408\uff0c\u4ee5\u5b9e\u73b0\u5e73\u7a33\u6d41\u7545\u7684\u52a8\u4f5c\u6280\u672f"),(0,r.kt)("h4",{id:"\u8bad\u7ec3\u5f3a\u5ea6-1"},"\u8bad\u7ec3\u5f3a\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8d85\u8d1f\u8377\u8bad\u7ec3\uff1a\u6bcf\u5468\u3001\u6bcf\u4e2a\u808c\u7fa4\u7684\u4e3b\u8981\u8bad\u7ec3\u52a8\u4f5c\u5b89\u6392 1-2 \u6b21"),(0,r.kt)("li",{parentName:"ul"},"\u8f7b\u8bad\u65e5\uff1a0-1 \u6b21")),(0,r.kt)("h4",{id:"\u8bad\u7ec3\u91cf-1"},"\u8bad\u7ec3\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5468\uff1a\u6bcf\u4e2a\u808c\u7fa4 15-20 \u7ec4"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u5929\uff1a\u6bcf\u4e2a\u52a8\u4f5c 4-5 \u7ec4\uff0c\u6bcf\u7ec4 3-6 \u6b21\uff08\u603b\u6b21\u6570\u4e0d\u80fd\u8d85\u8fc7 25 \u6b21\u5cf0\u503c\uff0c\u5982\u4e0d\u80fd 5x6, \u8d85\u91cf\u6062\u590d\u56f0\u96be\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u8f85\u52a9\u9879\u76ee\u8bad\u7ec3\u6b21\u6570\u5efa\u8bae 6-12 \u6b21\u808c\u80a5\u5927\u9002\u5e94\u533a\u95f4")),(0,r.kt)("h4",{id:"\u52a8\u4f5c\u9009\u62e9"},"\u52a8\u4f5c\u9009\u62e9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9650\u5236\u4f7f\u7528\u6216\u4e0d\u9002\u7528\u5355\u5173\u8282\u52a8\u4f5c")),(0,r.kt)("h4",{id:"\u9891\u7387-1"},"\u9891\u7387"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u540c\u4e00\u808c\u7fa4\u7b2c\u4e8c\u6b21\u8d85\u8d1f\u8377\u8bad\u7ec3\u95f4\u9694 > 3 \u5929"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u65e5\u8bad\u7ec3\u5b89\u6392\u53ef\u6839\u636e\u201c\u8e72\u63a8\u62c9\u201d\u4e09\u5927\u52a8\u4f5c\u6a21\u5f0f\u8fdb\u884c\u4e24\u4e24\u7ec4\u5408")),(0,r.kt)("h4",{id:"\u4e2d\u5468\u671f\u65f6\u957f-1"},"\u4e2d\u5468\u671f\u65f6\u957f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u6784\uff1a3:1 or 4:1 (\u5efa\u8bae 3:1)"),(0,r.kt)("li",{parentName:"ul"},"\u65f6\u957f\uff1a2-3 \u4e2a\u6708")),(0,r.kt)("h2",{id:"\u7b2c\u4e00\u8fc7\u6e21\u671f"},"\u7b2c\u4e00\u8fc7\u6e21\u671f"),(0,r.kt)("h2",{id:"\u5468\u671f\u52a8\u4f5c\u8ba1\u7b97\u5668"},"\u5468\u671f\u52a8\u4f5c\u8ba1\u7b97\u5668"),(0,r.kt)("p",null,"\u6682\u65f6\u53ea\u652f\u6301 MxS-1 \u8ba1\u7b97\uff0c\u540e\u7eed\u8fed\u4ee3\u4f18\u5316\ud83d\ude18"),(0,r.kt)(T,{mdxType:"WorkoutCycleCalculator"}),(0,r.kt)("h3",{id:"\u8ba1\u7b97\u601d\u8def"},"\u8ba1\u7b97\u601d\u8def"),(0,r.kt)("h4",{id:"1-\u51c6\u5907\u6570\u636e"},"1. \u51c6\u5907\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1RM \u91cd\u91cf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u5468\u521d\u59cb\u7f13\u51b2\u533a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6e10\u8fdb\u8d85\u8d1f\u8377\u589e\u5f3a\u6bd4\u7387")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u51cf\u8f7d\u6bd4\u7387")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8f7b\u8bad\u6bd4\u7387")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1RM-\u91cd\u590d\u6b21\u6570\u7684\u5173\u7cfb\u8868"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"%1RM"),(0,r.kt)("th",{parentName:"tr",align:null},"\u80fd\u591f\u91cd\u590d\u6b21\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"95"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"93"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"87"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"85"),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"83"),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"77"),(0,r.kt)("td",{parentName:"tr",align:null},"9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"75"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"70"),(0,r.kt)("td",{parentName:"tr",align:null},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"67"),(0,r.kt)("td",{parentName:"tr",align:null},"12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"65"),(0,r.kt)("td",{parentName:"tr",align:null},"15")))))),(0,r.kt)("h4",{id:"2-\u5468"},"2. \u5468"),(0,r.kt)("p",null,"\u6839\u636e\u81ea\u5df1\u7684\u8bad\u7ec3\u8ba1\u5212\u5b89\u6392\u5bf9\u5e94\u7684\u6e10\u8fdb\u8d85\u8d1f\u8377\u5468\u548c\u51cf\u8f7d\u5468\uff0c\u5982 3 \u5468\u6e10\u8fdb\u8d85\u8d1f\u8377\uff0c1 \u5468\u51cf\u8f7d\uff0c\u51cf\u8f7d\u5468\u53ef\u4ee5\u5206\u524d\u534a\u6bb5\u548c\u540e\u534a\u6bb5\u6216\u8005\u5f88\u591a\u6bb5\u6839\u636e\u81ea\u5df1\u7684\u5206\u5316\u5b89\u6392"),(0,r.kt)("h4",{id:"3-\u7ec4\u6570\u6b21\u6570"},"3. \u7ec4\u6570&\u6b21\u6570"),(0,r.kt)("p",null,"\u6839\u636e\u5468\u671f\u8ba1\u5212\u81ea\u884c\u5b89\u6392"),(0,r.kt)("h4",{id:"4-\u7edd\u5bf9\u5f3a\u5ea6"},"4. \u7edd\u5bf9\u5f3a\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91cd\u91cf\uff1a1RM * \u7edd\u5bf9\u5f3a\u5ea6\u6bd4\u7387"),(0,r.kt)("li",{parentName:"ul"},"\u7edd\u5bf9\u5f3a\u5ea6\u6bd4\u7387\uff1a\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"li"},"1RM-\u91cd\u590d\u6b21\u6570\u7684\u5173\u7cfb\u8868"),"\u8ba1\u7b97")),(0,r.kt)("h4",{id:"5-\u76f8\u5bf9\u5f3a\u5ea6"},"5. \u76f8\u5bf9\u5f3a\u5ea6"),(0,r.kt)("p",null,"\u7b2c\u4e00\u5468\u7684\u7edd\u5bf9\u5f3a\u5ea6\u6bd4\u7387\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\uff08 1 - \u7b2c\u4e00\u5468\u521d\u59cb\u7f13\u51b2\u533a\uff09"),"\uff0c\u5373\u5047\u8bbe",(0,r.kt)("inlineCode",{parentName:"p"},"\u7f13\u51b2\u533a"),"\u662f 15%\uff0c\u90a3\u4e48\u7b2c\u4e00\u5468\u76f8\u5bf9\u5f3a\u5ea6\u5c31\u662f 85%\u3002\u5176\u4ed6\u6e10\u8fdb\u8d85\u8d1f\u8377\u5468\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"p"},"\u6e10\u8fdb\u8d85\u8d1f\u8377\u589e\u5f3a\u6bd4\u7387"),"\u9012\u589e\uff0c\u51cf\u8f7d\u5468\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"p"},"\u51cf\u8f7d\u6bd4\u7387"),"\u9012\u51cf\u3002\u7b2c\u4e8c\u4e2a\u4e2d\u5468\u671f\u7684\u7b2c\u4e00\u4e2a\u6e10\u8fdb\u8d85\u8d1f\u8377\u5468\u76f8\u5bf9\u5f3a\u5ea6\u662f\u5728",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u4e2a\u4e2d\u5468\u671f\u6700\u540e\u4e00\u4e2a\u6e10\u8fdb\u8d85\u8d1f\u8377\u5468"),"\u57fa\u7840\u4e0a\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"p"},"\u6e10\u8fdb\u8d85\u8d1f\u8377\u589e\u5f3a\u6bd4\u7387"),"\u9012\u589e"),(0,r.kt)("h4",{id:"6-\u8bad\u7ec3\u8d1f\u8377"},"6. \u8bad\u7ec3\u8d1f\u8377"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91cd\u91cf\uff1a\u7edd\u5bf9\u5f3a\u5ea6\u91cd\u91cf * \u76f8\u5bf9\u5f3a\u5ea6\u6bd4\u7387"),(0,r.kt)("li",{parentName:"ul"},"\u6bd4\u7387\uff1a\u7edd\u5bf9\u5f3a\u5ea6\u6bd4\u7387 * \u76f8\u5bf9\u5f3a\u5ea6\u6bd4\u7387")),(0,r.kt)("h4",{id:"7-\u5bb9\u91cf"},"7. \u5bb9\u91cf"),(0,r.kt)("p",null,"\u7ec4\u6570 ",(0,r.kt)("em",{parentName:"p"}," \u6b21\u6570 ")," \u8bad\u7ec3\u8d1f\u8377\u91cd\u91cf"),(0,r.kt)("h4",{id:"8-\u8f7b\u8bad"},"8. \u8f7b\u8bad"),(0,r.kt)("p",null,"\u8bad\u7ec3\u8d1f\u8377\u91cd\u91cf * \u8f7b\u8bad\u6bd4\u7387"))}I.isMDXComponent=!0}}]);