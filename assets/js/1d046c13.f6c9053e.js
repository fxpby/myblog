"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[177],{28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var c=n(96540);const s={},t=c.createContext(s);function i(e){const r=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(t.Provider,{value:r},e.children)}},60554:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"coding/network/cache/service-worker-cache","title":"Service Worker","description":"\u57fa\u672c\u6982\u5ff5","source":"@site/docs/coding/network/cache/service-worker-cache.md","sourceDirName":"coding/network/cache","slug":"/coding/network/cache/service-worker-cache","permalink":"/myblog/docs/coding/network/cache/service-worker-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/network/cache/service-worker-cache.md","tags":[{"inline":true,"label":"cache","permalink":"/myblog/docs/tags/cache"},{"inline":true,"label":"\u7f13\u5b58","permalink":"/myblog/docs/tags/\u7f13\u5b58"},{"inline":true,"label":"Service Worker","permalink":"/myblog/docs/tags/service-worker"}],"version":"current","frontMatter":{"id":"service-worker-cache","title":"Service Worker","tags":["cache","\u7f13\u5b58","Service Worker"]},"sidebar":"tutorialSidebar","previous":{"title":"\u6d4f\u89c8\u5668 HTTP \u7f13\u5b58\u673a\u5236","permalink":"/myblog/docs/coding/network/cache/network-http-cache"},"next":{"title":"\u7f51\u7edc\u534f\u8bae\u5206\u5c42","permalink":"/myblog/docs/coding/network/http/OSI"}}');var s=n(74848),t=n(28453);const i={id:"service-worker-cache",title:"Service Worker",tags:["cache","\u7f13\u5b58","Service Worker"]},o=void 0,l={},a=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u751f\u547d\u5468\u671f\u4e0e\u7f13\u5b58",id:"\u751f\u547d\u5468\u671f\u4e0e\u7f13\u5b58",level:2},{value:"\u6ce8\u518c",id:"\u6ce8\u518c",level:3},{value:"\u5b89\u88c5\u548c\u6fc0\u6d3b",id:"\u5b89\u88c5\u548c\u6fc0\u6d3b",level:3},{value:"\u4f18\u5148\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u8d44\u6e90",id:"\u4f18\u5148\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u8d44\u6e90",level:2}];function h(e){const r={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,s.jsx)(r.p,{children:"Service Worker \u672c\u8d28\u662f\u4e00\u79cd\u4f7f\u7528 js \u7f16\u5199\u7684\u811a\u672c\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u7ebf\u7a0b\uff0c\u53ef\u4ee5\u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u63a7\u5236\u7f51\u7edc\u8bf7\u6c42\uff0c\u7f13\u5b58\u8bf7\u6c42\u6765\u63d0\u9ad8\u6027\u80fd\uff0c\u5e76\u4e14\u63d0\u4f9b\u5bf9\u7f13\u5b58\u5185\u5bb9\u7684\u79bb\u7ebf\u8bbf\u95ee\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["Service Worker \u7f13\u5b58\u662f",(0,s.jsx)(r.strong,{children:"\u6301\u4e45\u7684"}),"\uff0c",(0,s.jsx)(r.strong,{children:"\u72ec\u7acb\u4e8e"}),"\u6d4f\u89c8\u5668\u7f13\u5b58\u6216\u7f51\u7edc\u72b6\u6001"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/network/cache/service-worker-flow.png",alt:"service-worker-flow"})}),"\n",(0,s.jsx)(r.p,{children:"Service Worker \u4f9d\u8d56\u4e24\u4e2a API \u4f7f\u5e94\u7528\u7a0b\u5e8f\u79bb\u7ebf\u5de5\u4f5c\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Cache \u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u7684\u6301\u4e45\u6027\u5185\u5bb9\u5b58\u50a8"}),"\n",(0,s.jsx)(r.li,{children:"Fetch \u4e00\u79cd\u4ece\u7f51\u7edc\u68c0\u7d22\u5185\u5bb9\u7684\u6807\u51c6\u65b9\u6cd5"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u751f\u547d\u5468\u671f\u4e0e\u7f13\u5b58",children:"\u751f\u547d\u5468\u671f\u4e0e\u7f13\u5b58"}),"\n",(0,s.jsx)(r.p,{children:"\u751f\u547d\u5468\u671f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u6ce8\u518c"}),"\n",(0,s.jsx)(r.li,{children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(r.li,{children:"\u6fc0\u6d3b"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u6ce8\u518c",children:"\u6ce8\u518c"}),"\n",(0,s.jsx)(r.p,{children:"\u901a\u5e38\u6211\u4eec\u4f1a\u4f7f\u7528\u4e0b\u9762\u8fd9\u79cd\u65b9\u5f0f\u6ce8\u518c"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"if ('serviceWorker' in navigator) {\r\n  navigator.serviceWorker.register('/test.js').then((registration) => {\r\n    console.log('Registration successful, scope is:', registration.scope);\r\n  })\r\n  .catch((error) => {\r\n    console.log('Service worker registration failed, error:', error)\r\n  })\r\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5148\u5224\u65ad\u6d4f\u89c8\u5668\u662f\u5426\u652f\u6301 serviceWorker API, \u652f\u6301\u7684\u8bdd\u6ce8\u518c\u65f6\u4f1a\u53bb\u8bfb\u53d6\u5bf9\u5e94\u7684 test.js \u6587\u4ef6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b Service Worker \u7684\u4f5c\u7528\u8303\u56f4\u4e0d\u80fd\u8d85\u51fa\u811a\u672c\u6240\u5728\u8def\u5f84\uff0c\u5982\u679c\u811a\u672c\u653e\u5728\u6839\u76ee\u5f55\u4e0b\uff0c\u5c31\u4ee3\u8868\u6839\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u8bf7\u6c42\u90fd\u53ef\u4ee5\u4ee3\u7406\uff0c\u4e5f\u53ef\u4ee5\u5728\u6ce8\u518c\u65f6\u6307\u5b9a\u5bf9\u5e94\u7684\u4f5c\u7528\u57df\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"navigator.serviceWorker.register('/test.js', {\r\n  scope: '/xxx'\r\n})\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8fd9\u6837\u7684\u8bdd Service Worker \u53ea\u4f1a\u4ee3\u7406 xxx \u76ee\u5f55\u4e0b\u7684\u8bf7\u6c42"}),"\n",(0,s.jsx)(r.h3,{id:"\u5b89\u88c5\u548c\u6fc0\u6d3b",children:"\u5b89\u88c5\u548c\u6fc0\u6d3b"}),"\n",(0,s.jsx)(r.p,{children:"\u6d4f\u89c8\u5668\u6267\u884c\u6ce8\u518c\u6d41\u7a0b\u4e4b\u540e\uff0c\u5728 test.js \u4e2d\u5c31\u4f1a\u5c1d\u8bd5\u6267\u884c Service Worker \u7684 install \u5b89\u88c5\u4e8b\u4ef6\uff0c\u8fd9\u4e2a\u5b89\u88c5\u4e8b\u4ef6\u53ea\u4f1a\u89e6\u53d1\u4e00\u6b21\uff0c\u5373\u9996\u6b21\u6ce8\u518c\u6216\u6709\u65b0\u7684 Service Worker \u4e4b\u540e\u6267\u884c\u3002\u5728\u5b89\u88c5\u4e8b\u4ef6\u4e2d\u53ef\u4ee5\u4e0b\u8f7d\u5e76\u7f13\u5b58\u5e94\u7528\u7684\u90e8\u5206\u5185\u5bb9\uff0c\u6765\u8ba9\u7528\u6237\u5728\u4e0b\u6b21\u8bbf\u95ee\u65f6\u7acb\u5373\u5f97\u5230\u52a0\u8f7d"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// test.js\r\n\r\n// \u6b64\u7248\u672c\u7684 Service Worker \u4e2d\u4f7f\u7528\u7684\u4e24\u4e2a\u7f13\u5b58\u7684\u540d\u79f0\uff0c\u66f4\u65b0\u4efb\u610f\u4e00\u4e2a\u7f13\u5b58\u540d\u79f0\uff0c\u90fd\u5c06\u518d\u6b21\u89e6\u53d1\u5b89\u88c5\u4e8b\u4ef6\r\nconst PRECACHE = 'precache-v1'\r\nconst RUNTIME = 'runtime'\r\n\r\n// \u60f3\u88ab\u7f13\u5b58\u7684\u672c\u5730\u8d44\u6e90\u5217\u8868\r\nconst PRECACHE_URLS = [\r\n    'index.html',\r\n    './', // index.html \u7684\u522b\u540d\r\n    'styles.css',\r\n    '../../styles/main.css',\r\n    'demo.js'\r\n]\r\n\r\n// \u5b89\u88c5\u4e8b\u4ef6\u4e2d\u7f13\u5b58\u9884\u5148\u6211\u4eec\u60f3\u8981\u7f13\u5b58\u7684\u8d44\u6e90\r\nself.addEventListener('install', event => {\r\n    event.waitUntil(\r\n        // \u8c03\u7528\u6d4f\u89c8\u5668 CacheStorage open \u65b9\u6cd5\r\n        caches.open(PRECACHE)\r\n            .then(cache => cache.addAll(PRECACHE_URLS))\r\n            .then(self.skipWaiting()) // self.skipWaiting \u53ef\u4ee5\u963b\u6b62\u7b49\u5f85\uff0c\u8ba9\u65b0\u7684 Service Worker \u5b89\u88c5\u6210\u529f\u540e\u7acb\u5373\u6fc0\u6d3b\r\n    )\r\n})\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4e0a\u9762\u662f Chrome \u5b98\u7f51\u7684\u4f8b\u5b50\uff0c\u5728\u5b89\u88c5\u4e8b\u4ef6\u4e2d\u4f1a\u7f13\u5b58\u60f3\u8981\u7f13\u5b58\u7684\u8d44\u6e90\uff0c\u6210\u529f\u5b89\u88c5 Service Worker \u540e\uff0c\u4f1a\u8fc7\u6e21\u5230\u6fc0\u6d3b\u9636\u6bb5\u3002\u5982\u679c\u6709\u524d\u4e00\u4e2a Service Worker \u63a7\u5236\u7684\u6253\u5f00\u9875\u9762\u5b58\u5728\uff0c\u5219\u65b0\u7684 Service Worker \u4f1a\u8fdb\u5165\u4e00\u4e2a waiting \u72b6\u6001\u3002\u65b0\u7684 service Worker \u4ec5\u5728\u4e0d\u518d\u52a0\u8f7d\u4efb\u4f55\u4ecd\u5728\u4f7f\u7528\u65e7 Service Worker \u7684\u9875\u9762\u65f6\u6fc0\u6d3b\uff0c\u8fd9\u4e00\u6b65\u786e\u4fdd\u5728\u4efb\u4f55\u7ed9\u5b9a\u65f6\u95f4\u53ea\u6709\u4e00\u4e2a\u7248\u672c\u7684 Service Worker \u5728\u8fd0\u884c"}),"\n",(0,s.jsx)(r.p,{children:"\u4e5f\u53ef\u4ee5\u8c03\u7528 skipWaiting() \u65b9\u6cd5\u963b\u6b62 Service Worker \u7b49\u5f85\uff0c\u8ba9\u65b0\u7684 Service Worker \u5b89\u88c5\u6210\u529f\u540e\u7acb\u5373\u6fc0\u6d3b"}),"\n",(0,s.jsx)(r.p,{children:"\u5f53\u65b0\u7684 Service Worker \u6fc0\u6d3b\u65f6\uff0c\u4f1a\u89e6\u53d1 active \u4e8b\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 addEventListener \u6765\u76d1\u542c activate \u4e8b\u4ef6\u3002\u4e00\u822c\u6211\u4eec\u4f1a\u5728\u8fd9\u4e2a\u4e8b\u4ef6\u4e2d\u6e05\u7406\u8fc7\u671f\u7684\u7f13\u5b58"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// test.js\r\n\r\n// active \u4e8b\u4ef6\u8d1f\u8d23\u6e05\u7406\u8fc7\u671f\u7f13\u5b58\r\nself.addEventListener('activate', event => {\r\n  const currentCaches = [PRECACHE, RUNTIME]\r\n\r\n  event.waitUntil(\r\n    caches.keys().then(cacheNames => {\r\n      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName))\r\n    }).then(cachesToDelete => {\r\n      return Promise.all(cachesToDelete.map(cacheToDelete => {\r\n        // \u5220\u9664\u4e0d\u5b58\u5728\u7684\u8fc7\u671f\u7f13\u5b58\r\n        return caches.delete(cacheToDelete)\r\n      }))\r\n    }).then(() => self.clients.claim()) // \u542f\u7528\u65b0\u7684 Service Worker\r\n  )\r\n})\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4e0a\u9762\u5728 active \u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8c03\u7528\u6d4f\u89c8\u5668\u7684 Cache API \u7684 delete \u65b9\u6cd5\u5c06\u8fc7\u671f\u7684\u7f13\u5b58\u8fdb\u884c\u4e86\u5220\u9664\u64cd\u4f5c\uff0c\u9632\u6b62\u8fc7\u671f\u7f13\u5b58\u5f71\u54cd\u73b0\u6709\u529f\u80fd"}),"\n",(0,s.jsx)(r.p,{children:"\u4e00\u65e6\u6fc0\u6d3b\uff0cService Worker \u5c06\u63a7\u5236\u5728\u5176\u8303\u56f4\u5185\u52a0\u8f7d\u7684\u6240\u6709\u9875\u9762\uff0c\u65b0\u7684 Service Worker \u53ea\u4f1a\u5728\u5173\u95ed\u5e76\u91cd\u65b0\u6253\u5f00\u5e94\u7528\u65f6\u542f\u7528\uff0c\u6216\u8005\u8c03\u7528 clients.claim() \u65b9\u6cd5"}),"\n",(0,s.jsx)(r.h2,{id:"\u4f18\u5148\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u8d44\u6e90",children:"\u4f18\u5148\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u8d44\u6e90"}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u679c\u60f3\u8ba9\u7f51\u9875\u79bb\u7ebf\u53ef\u7528\uff0c\u62e6\u622a\u7f51\u7edc\u8bf7\u6c42\u5e76\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u8d44\u6e90\u662f\u6700\u4e3b\u8981\u7684\u65b9\u6cd5\uff0c\u524d\u63d0\u662f\u7f13\u5b58\u91cc\u5df2\u7ecf\u5b58\u5728\u4e86\u8981\u8bbf\u95ee\u7684\u8d44\u6e90"}),"\n",(0,s.jsxs)(r.p,{children:["\u4e00\u822c\u91c7\u7528",(0,s.jsx)(r.strong,{children:"\u7f13\u5b58\u56de\u9000\u7f51\u7edc"}),"\u7684\u65b9\u5f0f\u8fdb\u884c\u7f16\u5199\uff0c\u5373\u62e6\u622a\u8bf7\u6c42\u65f6\u5982\u679c\u7f13\u5b58\u4e2d\u5b58\u5728\u8be5\u8d44\u6e90\u5c31\u76f4\u63a5\u83b7\u53d6\uff0c\u5426\u5219\u9700\u5411\u670d\u52a1\u7aef\u8bf7\u6c42\u8d44\u6e90\u5e76\u8fdb\u884c\u7f13\u5b58"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// test.js\r\n\r\n// fetch \u5904\u7406\u4e8b\u4ef6\u4f1a\u5904\u7406\u540c\u6e90\u8d44\u6e90\u7684\u54cd\u5e94\uff0c\u5982\u679c\u7f13\u5b58\u4e2d\u5b58\u5728\uff0c\u5219\u4f1a\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u8d44\u6e90\r\nself.addEventListener('fetch', event => {\r\n  // \u8df3\u8fc7\u8de8\u57df\u8bf7\u6c42\r\n  if (event.request.url.startsWith(self.location.origin)) {\r\n    event.respondWith(\r\n      // \u4ece\u7f13\u5b58\u4e2d\u5339\u914d\u8bf7\u6c42\u8d44\u6e90\r\n      caches.match(event.request).then(cacheResponse => {\r\n        // \u5b58\u5728\u76f4\u63a5\u8fd4\u56de\r\n        if (cacheResponse) {\r\n          return cacheResponse\r\n        }\r\n        // \u4e0d\u5b58\u5728\u56de\u9000\u7f51\u7edc\u8bf7\u6c42\r\n        return caches.open(RUNTIME).then(cache => {\r\n          return fetch(event.request).then(response => {\r\n            // \u62f7\u8d1d\u54cd\u5e94\u8d44\u6e90\u5b58\u5165 runtime \u7f13\u5b58\r\n            return cache.put(event.request, response.clone()).then(() =>{\r\n              return response\r\n            })\r\n          })\r\n        })\r\n      })\r\n    )\r\n  }\r\n})\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u901a\u8fc7\u76d1\u542c fetch \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u8fdb\u884c\u8d44\u6e90\u8bf7\u6c42\u7684\u62e6\u622a\u64cd\u4f5c\uff0c\u5b9e\u73b0\u4e86 Service Worker \u57fa\u672c\u7684\u4f18\u5148\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u8d44\u6e90\u7684\u529f\u80fd"}),"\n",(0,s.jsx)(r.admonition,{title:"\u517c\u5bb9\u6027",type:"caution",children:(0,s.jsx)(r.p,{children:"Service Worker \u7684\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u4e0d\u662f\u5f88\u597d\uff0c\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\u9700\u8981\u517c\u5bb9\u5904\u7406\uff0c\u4e14\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0cService worker \u53ea\u80fd\u5728 https \u548c localhost \u4e0b\u4f7f\u7528"})})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);