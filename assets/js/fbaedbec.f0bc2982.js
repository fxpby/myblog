"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8773],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),v=l,m=u["".concat(c,".").concat(v)]||u[v]||d[v]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const o={id:"environment-deploy",title:"\u591a\u73af\u5883\u90e8\u7f72",tags:["\u5de5\u7a0b\u5316","\u90e8\u7f72"]},i=void 0,a={unversionedId:"front-end-engineering/deploy/environment-deploy",id:"front-end-engineering/deploy/environment-deploy",title:"\u591a\u73af\u5883\u90e8\u7f72",description:"\u73af\u5883\u7684\u8bbe\u7f6e",source:"@site/docs/front-end-engineering/deploy/environment-release.md",sourceDirName:"front-end-engineering/deploy",slug:"/front-end-engineering/deploy/environment-deploy",permalink:"/myblog/docs/front-end-engineering/deploy/environment-deploy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-engineering/deploy/environment-release.md",tags:[{label:"\u5de5\u7a0b\u5316",permalink:"/myblog/docs/tags/\u5de5\u7a0b\u5316"},{label:"\u90e8\u7f72",permalink:"/myblog/docs/tags/\u90e8\u7f72"}],version:"current",frontMatter:{id:"environment-deploy",title:"\u591a\u73af\u5883\u90e8\u7f72",tags:["\u5de5\u7a0b\u5316","\u90e8\u7f72"]},sidebar:"front-end-engineering",previous:{title:"\u540e\u7aef\u53d1\u5e03\u7b56\u7565",permalink:"/myblog/docs/front-end-engineering/release-strategy/backend-release-strategy"},next:{title:"npm \u4f5c\u7528\u57df\u5305",permalink:"/myblog/docs/front-end-engineering/npm/npm-scoped-packages"}},c={},s=[{value:"\u73af\u5883\u7684\u8bbe\u7f6e",id:"\u73af\u5883\u7684\u8bbe\u7f6e",level:2},{value:"\u5e38\u7528\u73af\u5883",id:"\u5e38\u7528\u73af\u5883",level:3},{value:"dev",id:"dev",level:4},{value:"test",id:"test",level:4},{value:"pre",id:"pre",level:4},{value:"prod",id:"prod",level:4},{value:"\u73af\u5883\u7684\u9694\u79bb\u548c\u5207\u6362",id:"\u73af\u5883\u7684\u9694\u79bb\u548c\u5207\u6362",level:2},{value:"\u57df\u540d\u9694\u79bb",id:"\u57df\u540d\u9694\u79bb",level:3},{value:"Hosts \u9694\u79bb",id:"hosts-\u9694\u79bb",level:3},{value:"\u591a\u73af\u5883\u7684\u914d\u7f6e",id:"\u591a\u73af\u5883\u7684\u914d\u7f6e",level:2},{value:"egg.js",id:"eggjs",level:3},{value:"vite",id:"vite",level:3}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u73af\u5883\u7684\u8bbe\u7f6e"},"\u73af\u5883\u7684\u8bbe\u7f6e"),(0,l.kt)("h3",{id:"\u5e38\u7528\u73af\u5883"},"\u5e38\u7528\u73af\u5883"),(0,l.kt)("h4",{id:"dev"},"dev"),(0,l.kt)("p",null,"\u5f00\u53d1\u8054\u8c03\u81ea\u6d4b\u73af\u5883"),(0,l.kt)("h4",{id:"test"},"test"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u73af\u5883\uff0c\u76f8\u5bf9\u7a33\u5b9a"),(0,l.kt)("h4",{id:"pre"},"pre"),(0,l.kt)("p",null,"\u9884\u53d1\u73af\u5883\uff0c\u6570\u636e\u771f\u5b9e\uff0c\u4f7f\u7528\u7ebf\u4e0a\u6570\u636e\u5e93"),(0,l.kt)("h4",{id:"prod"},"prod"),(0,l.kt)("p",null,"\u751f\u4ea7\u73af\u5883"),(0,l.kt)("h2",{id:"\u73af\u5883\u7684\u9694\u79bb\u548c\u5207\u6362"},"\u73af\u5883\u7684\u9694\u79bb\u548c\u5207\u6362"),(0,l.kt)("h3",{id:"\u57df\u540d\u9694\u79bb"},"\u57df\u540d\u9694\u79bb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5207\u6362\u8bbf\u95ee\u670d\u52a1\u7684\u57df\u540d\uff0c\u6765\u5207\u6362\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4e4b\u95f4\u7684\u8f6c\u8df3\u3001\u8c03\u7528\u9700\u4e25\u683c\u9075\u5b88\u57df\u540d\u7ea6\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u751f\u4ea7\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u57df\u540d\u4e0d\u540c\uff0c\u53ef\u80fd\u4ee3\u7801\u4e2d\u9700\u8981\u7279\u6b8a\u5904\u7406\uff08\u5982 cookie \u57df\u533a\u5206\u73af\u5883\uff09")),(0,l.kt)("p",null,"product-a.corp.com"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dev: product-a.dev.corp.com"),(0,l.kt)("li",{parentName:"ul"},"test: product-a.test.corp.com")),(0,l.kt)("p",null,"\u6216\u8005"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dev: product-a-dev.corp.com"),(0,l.kt)("li",{parentName:"ul"},"test: product-a-test.corp.com")),(0,l.kt)("h3",{id:"hosts-\u9694\u79bb"},"Hosts \u9694\u79bb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5207\u6362\u670d\u52a1\u57df\u540d\u5bf9\u5e94\u7684 hosts \u5207\u6362\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u7ef4\u62a4\u591a\u4efd hosts \u6620\u5c04\u9700\u8981\u6210\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u73af\u5883\u540c\u57df\u540d\u53ef\u80fd\u9020\u6210\u8d26\u53f7\u4e92\u8e22\u3001cookie \u5f02\u5e38\u7b49\u95ee\u9898")),(0,l.kt)("p",null,"\u4e3e\u4f8b product-a.crop.com"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# dev\n192.168.60.5 product-a.crop.com\n192.168.60.5 product-b.crop.com\n192.168.60.5 product-c.crop.com\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# test\n192.168.60.6 product-a.crop.com\n192.168.60.6 product-b.crop.com\n192.168.60.6 product-c.crop.com\n")),(0,l.kt)("h2",{id:"\u591a\u73af\u5883\u7684\u914d\u7f6e"},"\u591a\u73af\u5883\u7684\u914d\u7f6e"),(0,l.kt)("h3",{id:"eggjs"},"egg.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"config.default.js"),(0,l.kt)("li",{parentName:"ul"},"config.dev.js"),(0,l.kt)("li",{parentName:"ul"},"config.local.js"),(0,l.kt)("li",{parentName:"ul"},"config.prod.js"),(0,l.kt)("li",{parentName:"ul"},"config.test.js")),(0,l.kt)("p",null,"default \u4e3a\u9ed8\u8ba4\u914d\u7f6e\uff0c\u73af\u5883\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"EGG_SERVER_ENV")," \u63a7\u5236\u914d\u7f6e\u52a0\u8f7d\u5177\u4f53\u5e94\u7528\u7684\u73af\u5883\u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"config.[EGG_SERVER_ENV].js")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"config.default.js")," \u6df1\u5ea6\u5408\u5e76"),(0,l.kt)("h3",{id:"vite"},"vite"),(0,l.kt)("p",null,"\u5b9e\u73b0\u4e00\u4e2a\u914d\u7f6e\u52a0\u8f7d\u673a\u5236"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/@vue/cli-service/lib/Service.js"',title:'"packages/@vue/cli-service/lib/Service.js"'},"loadEnv (mode) {\n  const logger = debug('vue:env')\n  const basePath = path.resolve(this.context, `.env${mode ? `.${mode}` : ``}`)\n  const localPath = `${basePath}.local`\n\n  const load = envPath => {\n    try {\n      const env = dotenv.config({ path: envPath, debug: process.env.DEBUG })\n      dotenvExpand(env)\n      logger(envPath, env)\n    } catch (err) {\n      // only ignore error if file is not found\n      if (err.toString().indexOf('ENOENT') < 0) {\n        error(err)\n      }\n    }\n  }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/@vue/cli-service/lib/Service.js"',title:'"packages/@vue/cli-service/lib/Service.js"'},"init (mode = process.env.VUE_CLI_MODE) {\n  if (this.initialized) {\n    return\n  }\n  this.initialized = true\n  this.mode = mode\n\n  // load mode .env\n  if (mode) {\n    this.loadEnv(mode)\n  }\n  // load base .env\n  this.loadEnv()\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/@vue/cli-service/webpack.config.js"',title:'"packages/@vue/cli-service/webpack.config.js"'},"// this file is for cases where we need to access the\n// webpack config as a file when using CLI commands.\n\nlet service = process.VUE_CLI_SERVICE;\n\nif (!service || process.env.VUE_CLI_API_MODE) {\n  const Service = require('./lib/Service');\n  service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd());\n  service.init(process.env.VUE_CLI_MODE || process.env.NODE_ENV);\n}\n\nmodule.exports = service.resolveWebpackConfig();\n")))}d.isMDXComponent=!0}}]);