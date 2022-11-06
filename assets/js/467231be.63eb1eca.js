"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=o(a),k=r,h=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={id:"nginx-cache-directive",title:"nginx \u7f13\u5b58\u76f8\u5173\u6307\u4ee4",tags:["nginx","cache","\u7f13\u5b58"]},i=void 0,c={unversionedId:"nginx/nginx-cache/nginx-cache-directive",id:"nginx/nginx-cache/nginx-cache-directive",title:"nginx \u7f13\u5b58\u76f8\u5173\u6307\u4ee4",description:"proxy_cache",source:"@site/docs/nginx/nginx-cache/nginx-cache-directive.md",sourceDirName:"nginx/nginx-cache",slug:"/nginx/nginx-cache/nginx-cache-directive",permalink:"/myblog/docs/nginx/nginx-cache/nginx-cache-directive",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nginx/nginx-cache/nginx-cache-directive.md",tags:[{label:"nginx",permalink:"/myblog/docs/tags/nginx"},{label:"cache",permalink:"/myblog/docs/tags/cache"},{label:"\u7f13\u5b58",permalink:"/myblog/docs/tags/\u7f13\u5b58"}],version:"current",frontMatter:{id:"nginx-cache-directive",title:"nginx \u7f13\u5b58\u76f8\u5173\u6307\u4ee4",tags:["nginx","cache","\u7f13\u5b58"]},sidebar:"front-end-engineering",previous:{title:"\u8de8\u57df\u95ee\u9898\u4e0enginx\u54cd\u5e94\u62a5\u5934\u914d\u7f6e",permalink:"/myblog/docs/nginx/nginx-cors"}},p={},o=[{value:"proxy_cache",id:"proxy_cache",level:2},{value:"proxy_cache_path",id:"proxy_cache_path",level:2},{value:"proxy_cache_key",id:"proxy_cache_key",level:2},{value:"proxy_cache_valid",id:"proxy_cache_valid",level:2},{value:"upstream_cache_status",id:"upstream_cache_status",level:2},{value:"proxy_no_cache",id:"proxy_no_cache",level:2},{value:"proxy_cache_bypass",id:"proxy_cache_bypass",level:2},{value:"proxy_cache_methods",id:"proxy_cache_methods",level:2}],u={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"proxy_cache"},"proxy_cache"),(0,r.kt)("p",null,"\u7f13\u5b58\u547d\u540d\u7a7a\u95f4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1aproxy_cache zone / off;",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"zone: \u5171\u4eab\u5185\u5b58\u540d\u79f0"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aproxy_cache off;"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\uff1ahttp\u3001server\u3001location")),(0,r.kt)("h2",{id:"proxy_cache_path"},"proxy_cache_path"),(0,r.kt)("p",null,"\u7f13\u5b58\u914d\u7f6e\u8def\u5f84\u3001\u8fdb\u7a0b\u63a7\u5236\u7f13\u5b58\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1aproxy_cache_path path keys_zone=name:size",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"path: \u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"keys_zone: \u540d\u79f0:\u5927\u5c0f, \u5728\u5171\u4eab\u5185\u5b58\u4e2d\u8bbe\u7f6e\u4e00\u5757\u5b58\u50a8\u533a\u57df\u6765\u5b58\u653e\u7f13\u5b58\u7684key\u5b57\u7b26\u4e32\uff0c\u8fd9\u6837nginx\u53ef\u4ee5\u5feb\u901f\u5224\u65ad\u4e00\u4e2arequest\u662f\u5426\u547d\u4e2d\u6216\u8005\u672a\u547d\u4e2d\u7f13\u5b58\uff0c1m\u53ef\u4ee5\u5b58\u50a88000\u4e2akey\uff0c10m\u53ef\u4ee5\u5b58\u50a880000\u4e2akey\uff1b"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aproxy_cache_path off"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\uff1ahttp")),(0,r.kt)("p",null,"\u53ef\u9009\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"path: \u78c1\u76d8\u7f13\u5b58\u6587\u4ef6\u7684\u5b58\u653e\u8def\u5f84")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"level\uff1apath \u7684\u76ee\u5f55\u5c42\u7ea7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use_temp_path: \u4e34\u65f6\u6587\u4ef6\u5b58\u653e\u76ee\u5f55"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"off\uff1a\u76f4\u63a5\u4f7f\u7528 path \u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"on\uff1a\u4f7f\u7528 proxy_temp_path \u8def\u5f84"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"keys_zone:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name: \u5171\u4eab\u5185\u5b58\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"size: \u5171\u4eab\u5185\u5b58\u5927\u5c0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"inactive\uff1aLRU \u7f13\u5b58\u6dd8\u6c70\u65f6\u95f4\uff0c\u5373\u5728\u6307\u5b9a\u65f6\u95f4\u5185\u6ca1\u6709\u88ab\u8bbf\u95ee\u7f13\u5b58\u4f1a\u88ab\u6e05\u7406\uff1b\u9ed8\u8ba4 10 \u5206\u949f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"max_size: LRU \u7f13\u5b58\u6587\u4ef6\u5927\u5c0f\uff0c\u8d85\u8fc7\u5c06\u7531 CM\uff08cache manager\u7f13\u5b58\u7ba1\u7406\u8fdb\u7a0b\uff09\u6e05\u7406\uff0c\u5360\u7528\u786c\u76d8\u7a7a\u95f4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"mananger_files: CM \u6e05\u7406\u4e00\u6b21\u7f13\u5b58\u6587\u4ef6\uff0c\u6700\u5927\u6e05\u7406\u6587\u4ef6\u6570\uff1b\u9ed8\u8ba4 100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"manager_sleep: CM \u6e05\u7406\u4e00\u6b21\u540e\u8fdb\u7a0b\u7684\u4f11\u7720\u65f6\u95f4\uff1b\u9ed8\u8ba4 200 \u6beb\u79d2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"manager_threshold: CM \u6e05\u7406\u4e00\u6b21\u6700\u957f\u8017\u65f6\uff1b\u9ed8\u8ba4 50 \u6beb\u79d2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"loader_files: CL\uff08cache loader\u7f13\u5b58\u52a0\u8f7d\u8fdb\u7a0b\uff09\u8f7d\u5165\u6587\u4ef6\u5230\u5171\u4eab\u5185\u5b58\uff0c\u6bcf\u6279\u6700\u591a\u6587\u4ef6\u6570; \u9ed8\u8ba4 100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"loader_sleep: CL \u52a0\u8f7d\u7f13\u5b58\u6587\u4ef6\u5230\u5185\u5b58\u540e\uff0c\u8fdb\u7a0b\u4f11\u7720\u65f6\u95f4\uff1b\u9ed8\u8ba4 200 \u6beb\u79d2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"loader_threshold: CL \u6bcf\u6b21\u8f7d\u5165\u6587\u4ef6\u5230\u5171\u4eab\u5185\u5b58\u7684\u6700\u5927\u8017\u65f6\uff1b\u9ed8\u8ba4 50 \u6beb\u79d2"))),(0,r.kt)("h2",{id:"proxy_cache_key"},"proxy_cache_key"),(0,r.kt)("p",null,"\u7f13\u5b58\u5173\u952e\u5b57\uff0c\u5982\u4f55\u53bb\u67e5\u627e\u7f13\u5b58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1aproxy_cache_key string;"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aproxy_cache_key $scheme$proxy_host$request_uri;"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\uff1ahttp\u3001server\u3001location")),(0,r.kt)("h2",{id:"proxy_cache_valid"},"proxy_cache_valid"),(0,r.kt)("p",null,"\u786e\u5b9a\u9700\u8981\u7f13\u5b58\u662f\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1aproxy_cache_valid ","[code...]"," time;"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a-"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\uff1ahttp\u3001server\u3001location")),(0,r.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"proxy_cache_valid 60m # \u4e0d\u6307\u5b9a code \u65f6\u53ea\u5bf9 200\u3001301\u3001302 \u54cd\u5e94\u7801\u7f13\u5b58\n")),(0,r.kt)("h2",{id:"upstream_cache_status"},"upstream_cache_status"),(0,r.kt)("p",null,"\u4e0a\u6e38\u670d\u52a1\u5668\u7f13\u5b58\u72b6\u6001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MISS: \u672a\u547d\u4e2d\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"HIT\uff1a\u547d\u4e2d\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"EXPIRED\uff1a\u7f13\u5b58\u8fc7\u671f"),(0,r.kt)("li",{parentName:"ul"},"STALE\uff1a\u547d\u4e2d\u4e86\u9648\u65e7\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"REVALIDDATED\uff1aNginx \u9a8c\u8bc1\u9648\u65e7\u7f13\u5b58\u4f9d\u7136\u6709\u6548"),(0,r.kt)("li",{parentName:"ul"},"UPDATING\uff1a\u5185\u5bb9\u9648\u65e7\uff0c\u4f46\u6b63\u5728\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ul"},"BYPASS\uff1a\u54cd\u5e94\u4ece\u539f\u59cb\u670d\u52a1\u5668\u83b7\u53d6")),(0,r.kt)("h2",{id:"proxy_no_cache"},"proxy_no_cache"),(0,r.kt)("p",null,"\u914d\u7f6e\u4e0d\u7f13\u5b58\u7279\u5b9a\u5185\u5bb9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1aproxy_no_cache string;",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string \u53d8\u91cf\u540d\u6709\u503c\u5373\u4e0d\u7f13\u5b58"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a-"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\uff1ahttp\u3001server\u3001location")),(0,r.kt)("h2",{id:"proxy_cache_bypass"},"proxy_cache_bypass"),(0,r.kt)("p",null,"\u914d\u7f6e\u4e0d\u7f13\u5b58\u7279\u5b9a\u5185\u5bb9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1aproxy_cache_bypass string;"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a-"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\uff1ahttp\u3001server\u3001location")),(0,r.kt)("h2",{id:"proxy_cache_methods"},"proxy_cache_methods"),(0,r.kt)("p",null,"\u9700\u8981\u7f13\u5b58\u7684\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1aproxy_cache_methods string"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aPOST"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\uff1ahttp\u3001server\u3001location")))}m.isMDXComponent=!0}}]);