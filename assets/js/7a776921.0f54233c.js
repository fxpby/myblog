"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[988],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={id:"nginx-cors",title:"\u8de8\u57df\u95ee\u9898\u4e0enginx\u54cd\u5e94\u62a5\u5934\u914d\u7f6e",tags:["nginx","cors","\u8de8\u57df"]},i=void 0,o={unversionedId:"nginx/nginx-cors",id:"nginx/nginx-cors",title:"\u8de8\u57df\u95ee\u9898\u4e0enginx\u54cd\u5e94\u62a5\u5934\u914d\u7f6e",description:"nginx\u4e0e\u8de8\u57df\u95ee\u9898",source:"@site/docs/nginx/nginx-cors.md",sourceDirName:"nginx",slug:"/nginx/nginx-cors",permalink:"/myblog/docs/nginx/nginx-cors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nginx/nginx-cors.md",tags:[{label:"nginx",permalink:"/myblog/docs/tags/nginx"},{label:"cors",permalink:"/myblog/docs/tags/cors"},{label:"\u8de8\u57df",permalink:"/myblog/docs/tags/\u8de8\u57df"}],version:"current",frontMatter:{id:"nginx-cors",title:"\u8de8\u57df\u95ee\u9898\u4e0enginx\u54cd\u5e94\u62a5\u5934\u914d\u7f6e",tags:["nginx","cors","\u8de8\u57df"]}},p={},c=[{value:"nginx\u4e0e\u8de8\u57df\u95ee\u9898",id:"nginx\u4e0e\u8de8\u57df\u95ee\u9898",level:2},{value:"\u7b80\u5355\u8bf7\u6c42\u4e0e\u9884\u68c0\u8bf7\u6c42",id:"\u7b80\u5355\u8bf7\u6c42\u4e0e\u9884\u68c0\u8bf7\u6c42",level:3},{value:"\u7b80\u5355\u8bf7\u6c42",id:"\u7b80\u5355\u8bf7\u6c42",level:4},{value:"\u9884\u68c0\u8bf7\u6c42",id:"\u9884\u68c0\u8bf7\u6c42",level:4},{value:"\u4f7f\u7528 Nginx \u914d\u7f6e\u54cd\u5e94\u62a5\u5934",id:"\u4f7f\u7528-nginx-\u914d\u7f6e\u54cd\u5e94\u62a5\u5934",level:2},{value:"\u8bbf\u95ee Nginx \u670d\u52a1\u5668\u53ca\u914d\u7f6e\u6587\u4ef6",id:"\u8bbf\u95ee-nginx-\u670d\u52a1\u5668\u53ca\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u4fee\u6539\u7f13\u5b58\u76f8\u5173\u914d\u7f6e",id:"\u4fee\u6539\u7f13\u5b58\u76f8\u5173\u914d\u7f6e",level:3},{value:"add_header \u7684\u7ee7\u627f\u95ee\u9898",id:"add_header-\u7684\u7ee7\u627f\u95ee\u9898",level:3}],d={toc:c};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"nginx\u4e0e\u8de8\u57df\u95ee\u9898"},"nginx\u4e0e\u8de8\u57df\u95ee\u9898"),(0,r.kt)("p",null,"\u6709\u65f6\u6211\u4eec\u8bbf\u95ee\u7f51\u7ad9\u6216\u8005\u8c03\u7528\u63a5\u53e3\u4f1a\u9047\u5230\u8de8\u57df\u95ee\u9898\uff0c\u8fd9\u65f6\u6211\u4eec\u53bb\u770b\u63a5\u53e3\u7684\u54cd\u5e94\u62a5\u5934\u53ef\u80fd\u4f1a\u770b\u5230\u670d\u52a1\u7aef\u505a\u4e86\u8bbf\u95ee\u5904\u7406\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \u540e\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," , \u800c\u662f\u8bbe\u7f6e\u4e86\u5177\u4f53\u7684\u57df\u540d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \u662f\u6307\u5b9a\u5141\u8bb8\u8bbf\u95ee\u7684\u57df\u540d\uff0c\u4e5f\u5c31\u662f\u767d\u540d\u5355\uff0c\u5176\u4ed6\u57df\u540d\u5916\u7684\u8bbf\u95ee\u662f\u4e0d\u88ab\u5141\u8bb8\u7684"),(0,r.kt)("p",null,"\u4e00\u822c\u9047\u5230\u8de8\u57df\u95ee\u9898\u6211\u4eec\u4f1a\u53bb\u68c0\u67e5\u670d\u52a1\u7aef\u6216nginx\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin"),"\u7684\u914d\u7f6e\uff0c\u662f\u5426\u8bbe\u7f6e\u4e86\u57df\u540d"),(0,r.kt)("p",null,"\u4f46\u662f\u6709\u65f6\u5373\u4f7f ",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," \u4e5f\u8fd8\u4f1a\u62a5\u8de8\u57df\u95ee\u9898\uff0c\u8fd9\u662f\u56e0\u4e3a\u524d\u7aef\u5728\u8bf7\u6c42\u65f6\uff0c\u914d\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"withCredentials"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", \u6bd4\u5982\u4f7f\u7528\u4e86axios\u5e93\uff0c\u5e76\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"axios.default.withCredentials = true // \u5141\u8bb8\u643a\u5e26 cookie\n")),(0,r.kt)("p",null,"\u5982\u679c\u5141\u8bb8\u8bf7\u6c42\u5934\u643a\u5e26",(0,r.kt)("inlineCode",{parentName:"p"},"cookie"),"\uff0c\u670d\u52a1\u7aef\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \u5c31\u4e0d\u53ef\u7528\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"  "),(0,r.kt)("p",null,"\u5e76\u4e14\u5f53\u524d\u7aef\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"axios.default.withCredentials = true")," \u65f6\uff0c\u670d\u52a1\u7aef\u4e5f\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"access-control-allow--credentials: true")),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u53d1\u8d77",(0,r.kt)("strong",{parentName:"p"},"\u9884\u68c0\u8bf7\u6c42"),"\u7684\u65f6\u5019\uff0c\u8fd8\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"access-control-allow-methods")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"access-control-allow-headers")," \u62a5\u5934\u4e3a\u5141\u8bb8\u7684\u503c\uff0c\u6bd4\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"access-control-allow-headers: Content-Type, Content-Length,Authorization, Accept, X-Requested-With\naccess-control-allow-methods: PUT, POST, GET, DELETE, OPTIONS\n")),(0,r.kt)("h3",{id:"\u7b80\u5355\u8bf7\u6c42\u4e0e\u9884\u68c0\u8bf7\u6c42"},"\u7b80\u5355\u8bf7\u6c42\u4e0e\u9884\u68c0\u8bf7\u6c42"),(0,r.kt)("h4",{id:"\u7b80\u5355\u8bf7\u6c42"},"\u7b80\u5355\u8bf7\u6c42"),(0,r.kt)("p",null,"\u9700\u6ee1\u8db3\u6240\u6709\u4e0b\u8ff0\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u65b9\u6cd5\u4e3a\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GET"),(0,r.kt)("li",{parentName:"ul"},"HEAD"),(0,r.kt)("li",{parentName:"ul"},"POST"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9664\u88ab\u7528\u6237\u4ee3\u7406\u81ea\u52a8\u8bbe\u7f6e\u7684\u9996\u90e8\u5b57\u6bb5\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Connection"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"User-Agent"),"\u7b49\u88ab\u5b9a\u4e49\u4e3a\u7981\u7528\u9996\u90e8\u540d\u79f0\u7684\u9996\u90e8\uff09\uff0c\u5141\u8bb8\u4eba\u4e3a\u8bbe\u7f6e\u7684\u5b57\u6bb5\u4e3aFetch\u89c4\u8303\u5b9a\u4e49\u7684\u5bf9CORS\u5b89\u5168\u7684\u9996\u90e8\u5b57\u6bb5\u96c6\u5408\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Accept"),(0,r.kt)("li",{parentName:"ul"},"Accept-Language"),(0,r.kt)("li",{parentName:"ul"},"Content-Language"),(0,r.kt)("li",{parentName:"ul"},"Content-Type(\u53d6\u503c\u4ec5\u9650\u4ee5\u4e0b3\u4e2a)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"text/plain"),(0,r.kt)("li",{parentName:"ul"},"multipart/form-data"),(0,r.kt)("li",{parentName:"ul"},"application/x-www-form-urlencoded"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u4e2d\u7684\u4efb\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," \u5bf9\u8c61\u5747\u6ca1\u6709\u6ce8\u518c\u4efb\u4f55\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," \u5bf9\u8c61\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.upload")," \u5c5e\u6027\u8bbf\u95ee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u4e2d\u6ca1\u6709\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadableStream")," \u5bf9\u8c61"))),(0,r.kt)("h4",{id:"\u9884\u68c0\u8bf7\u6c42"},"\u9884\u68c0\u8bf7\u6c42"),(0,r.kt)("p",null,"\u9884\u68c0\u8bf7\u6c42\u5fc5\u987b\u5148\u8bd5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONS")," \u65b9\u6cd5\u53d1\u8d77\u4e00\u4e2a\u9884\u68c0\u8bf7\u6c42\u5230\u670d\u52a1\u5668\uff0c\u83b7\u53d6\u670d\u52a1\u5668\u662f\u5426\u5141\u8bb8\u8be5\u5b9e\u9645\u8bf7\u6c42\uff0c\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u907f\u514d\u8de8\u57df\u8bf7\u6c42\u5bf9\u670d\u52a1\u5668\u7684\u7528\u6237\u6570\u636e\u4ea7\u751f\u672a\u9884\u671f\u7684\u5f71\u54cd"),(0,r.kt)("h2",{id:"\u4f7f\u7528-nginx-\u914d\u7f6e\u54cd\u5e94\u62a5\u5934"},"\u4f7f\u7528 Nginx \u914d\u7f6e\u54cd\u5e94\u62a5\u5934"),(0,r.kt)("h3",{id:"\u8bbf\u95ee-nginx-\u670d\u52a1\u5668\u53ca\u914d\u7f6e\u6587\u4ef6"},"\u8bbf\u95ee Nginx \u670d\u52a1\u5668\u53ca\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u627e\u5230\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.conf")," \u6587\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.conf"),"\u4e2d\u6211\u4eec\u5148\u627e\u5230\u5bf9\u5e94\u7684\u5e94\u7528\u7aef\u53e3\uff0c\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"location /")," \u4e2d\u7684\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n  listen 80;\n  location / {\n    add_header Access-Control-Allow-Origin *; \n    add_header Access-Control-Allow-Methods 'PUT,POST,GET,DELETE,OPTIONS'; \n    add_header Access-Control-Allow-Headers 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With';\n    \n    if ($request_method = 'OPTIONS') {\n      return 204;\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u4fee\u6539\u5b8c\u914d\u7f6e\u6587\u4ef6\u91cd\u542fnginx\u914d\u7f6e\uff0c\u5237\u65b0\u9875\u9762\u89c2\u5bdf\u54cd\u5e94\u62a5\u5934\u6210\u529f\u8fd4\u56de\u6211\u4eec\u914d\u7f6e\u7684\u5b57\u6bb5"),(0,r.kt)("h3",{id:"\u4fee\u6539\u7f13\u5b58\u76f8\u5173\u914d\u7f6e"},"\u4fee\u6539\u7f13\u5b58\u76f8\u5173\u914d\u7f6e"),(0,r.kt)("p",null,"\u6211\u4eec\u77e5\u9053nginx\u662f\u4e00\u4e2a\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u5f53\u5904\u7406\u9759\u6001\u8d44\u6e90\u65f6\uff0c\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"eTag"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"last-modified")," \u7b49\u9996\u90e8\u5927\u90fd\u662f\u7531\u6e90\u670d\u52a1\u5668\u8fd4\u56de\u7684\uff0c\u4e00\u822c\u6211\u4eec\u4e0d\u4f1a\u5728nginx\u914d\u7f6e\u4e2d\u5bf9\u4ed6\u4eec\u8fdb\u884c\u4fee\u6539\uff0c\u5728 nginx \u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u4fee\u6539\u7684\u662f\u7f13\u5b58\u65b9\u5f0f\u548c\u8fc7\u671f\u65f6\u95f4\u7684\u914d\u7f6e"),(0,r.kt)("p",null,"\u6bd4\u5982\u73b0\u5728\u6709\u4e00\u4e2a\u573a\u666f\u6211\u4eec\u4e0d\u60f3\u8ba9",(0,r.kt)("strong",{parentName:"p"},"HTML"),"\u6587\u4ef6\u547d\u4e2d\u5f3a\u7f13\u5b58\uff0c\u5e0c\u671b\u8d70",(0,r.kt)("strong",{parentName:"p"},"\u534f\u5546\u7f13\u5b58"),"\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u914d\u7f6e\u62a5\u5934\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n  listen 80;\n  location / {\n    if ($request_filename ~* .*.(html|htm)$) {\n      add_header Cache-Control 'no-cache';\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e",(0,r.kt)("strong",{parentName:"p"},"js"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"css"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u56fe\u7247"),"\u8fd9\u79cd\u9759\u6001\u8d44\u6e90\uff0c\u6211\u4eec\u5e0c\u671b\u8d70",(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u7f13\u5b58"),"\uff0cnginx\u53ef\u4ee5\u8bbe\u7f6e\u76f8\u5e94\u7684\u8fc7\u671f\u65f6\u95f4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n  listen 80;\n  location ~ .*.(gif|jpg|jpeg|png|bmp|swf|js|css)$ {\n    expires 1d;\n  }\n}\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u4e2d\u6211\u4eec\u914d\u7f6e\u8fc7\u671f\u65f6\u95f4\u4e3a1\u5929\uff0c\u6700\u7ec8\u6d4f\u89c8\u5668\u4f1a\u8fd4\u56de\u54cd\u5e94\u62a5\u5934 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control: max-age=86400"),"  "),(0,r.kt)("h3",{id:"add_header-\u7684\u7ee7\u627f\u95ee\u9898"},"add_header \u7684\u7ee7\u627f\u95ee\u9898"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5728HTML\u7684\u5224\u65ad\u4e0a\u5c42\u7ee7\u7eed\u589e\u52a0\u4e86\u9996\u90e8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n  listen 80;\n  location / {\n    add_header Test 'olu';\n\n    if ($request_filename ~* .*.(html|htm)$) {\n      add_header Cache-Control 'no-cache';\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u7684HTML\u6587\u4ef6\u54cd\u5e94\u62a5\u5934\u4e2d\u5e76\u4e0d\u4f1a\u6dfb\u52a0",(0,r.kt)("strong",{parentName:"p"},"\u4fe9\u9996\u90e8"),"\uff0c\u53ea\u4f1a\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control")," \u9996\u90e8\uff0c\u8fd9\u662f\u4e3a\u5565\u5462\uff1f\u539f\u56e0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"add_header")," \u7684\u7ee7\u627f\u95ee\u9898"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There could be several ",(0,r.kt)("inlineCode",{parentName:"p"},"add_header")," directives. These directives are inherited from the previous level if and only if there are no ",(0,r.kt)("inlineCode",{parentName:"p"},"add_header")," directives defined on the current level.")),(0,r.kt)("p",null,"\u5373\u5f53\u4e14\u4ec5\u5f53 \u5f53\u524d\u5c42\u7ea7 \u672a\u5b9a\u4e49\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"add_header")," \u65f6\uff0c\u624d\u53ef\u4ee5\u4ece\u4e0a\u5c42\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"add_header"),", \u4e0a\u9762\u4ee3\u7801\u4e2d\u7684 if \u6a21\u5757\u5c5e\u4e8e\u5c42\u7ea7\u7684\u6982\u5ff5\uff0c\u6240\u4ee5\u4e0a\u5c42\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"add_header")," \u4e0d\u4f1a\u8d77\u4f5c\u7528"))}s.isMDXComponent=!0}}]);