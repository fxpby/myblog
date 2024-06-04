"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2974],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,k=c["".concat(o,".").concat(d)]||c[d]||b[d]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const l={id:"babel",title:"Babel",tags:["\u5de5\u7a0b\u5316","babel"]},i=void 0,s={unversionedId:"front-end-engineering/babel",id:"front-end-engineering/babel",title:"Babel",description:"\x3c!--",source:"@site/docs/front-end-engineering/babel.md",sourceDirName:"front-end-engineering",slug:"/front-end-engineering/babel",permalink:"/myblog/docs/front-end-engineering/babel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-engineering/babel.md",tags:[{label:"\u5de5\u7a0b\u5316",permalink:"/myblog/docs/tags/\u5de5\u7a0b\u5316"},{label:"babel",permalink:"/myblog/docs/tags/babel"}],version:"current",frontMatter:{id:"babel",title:"Babel",tags:["\u5de5\u7a0b\u5316","babel"]},sidebar:"front-end-engineering",previous:{title:"Loader",permalink:"/myblog/docs/front-end-engineering/webpack/webpack-loader"}},o={},p=[{value:"1. \u4ec0\u4e48\u662f Babel",id:"1-\u4ec0\u4e48\u662f-babel",level:2},{value:"2. AST \u62bd\u8c61\u8bed\u6cd5\u6811",id:"2-ast-\u62bd\u8c61\u8bed\u6cd5\u6811",level:2},{value:"3. Babel \u7f16\u8bd1\u6d41\u7a0b",id:"3-babel-\u7f16\u8bd1\u6d41\u7a0b",level:2},{value:"3.1 \u89e3\u6790\u9636\u6bb5\uff08Parser\uff09",id:"31-\u89e3\u6790\u9636\u6bb5parser",level:3},{value:"3.2 \u8f6c\u6362\u9636\u6bb5(Transformer)",id:"32-\u8f6c\u6362\u9636\u6bb5transformer",level:3},{value:"3.3 \u751f\u6210\u9636\u6bb5(Generator)",id:"33-\u751f\u6210\u9636\u6bb5generator",level:3},{value:"4. Babel \u63d2\u4ef6\u7cfb\u7edf",id:"4-babel-\u63d2\u4ef6\u7cfb\u7edf",level:2},{value:"4.1 \u5e38\u89c1 preset",id:"41-\u5e38\u89c1-preset",level:3},{value:"4.1.1 @babel/preset-env",id:"411-babelpreset-env",level:4},{value:"4.1.2 @babel/preset-react",id:"412-babelpreset-react",level:4},{value:"4.1.3 @babel/preset-typescript",id:"413-babelpreset-typescript",level:4},{value:"4.2 \u5e38\u89c1 plugin",id:"42-\u5e38\u89c1-plugin",level:3},{value:"4.3 \u57fa\u5efa Babel \u914d\u7f6e",id:"43-\u57fa\u5efa-babel-\u914d\u7f6e",level:3},{value:"4.3.1 babel-loader",id:"431-babel-loader",level:4},{value:"4.3.2 @babel/core",id:"432-babelcore",level:4},{value:"4.4 \u7f16\u5199 Babel \u63d2\u4ef6",id:"44-\u7f16\u5199-babel-\u63d2\u4ef6",level:3},{value:"4.5 Babel \u8f6c\u6362\u9636\u6bb5",id:"45-babel-\u8f6c\u6362\u9636\u6bb5",level:3}],u={toc:p};function b(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u4ec0\u4e48\u662f-babel"},"1. \u4ec0\u4e48\u662f Babel"),(0,r.kt)("p",null,"Babel \u662f ",(0,r.kt)("strong",{parentName:"p"},"JavaScript \u7f16\u8bd1\u5668"),"\uff0c\u53ef\u4ee5\u8ba9\u5f00\u53d1\u4eba\u5458\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u76f4\u63a5\u4f7f\u7528\u5404\u7c7b\u65b9\u8a00\uff08\u5982 TS\u3001Flow\u3001JSX\uff09\u6216\u65b0\u7684\u8bed\u6cd5\u7279\u6027\uff0c\u4e0d\u9700\u8981\u8003\u8651\u8fd0\u884c\u73af\u5883\uff08\u6309\u9700\u8f6c\u6362\u4e3a\u4f4e\u7248\u672c\u652f\u6301\u7684\u4ee3\u7801\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u6e90\u4ee3\u7801\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"Polyfill \u5b9e\u73b0\u76ee\u6807\u73af\u5883\u7f3a\u5c11\u7684\u529f\u80fd")),(0,r.kt)("p",null,"\u5176\u539f\u7406\u662f\u5c06 JS \u4ee3\u7801\u8f6c\u6362\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"AST"),"\uff0c\u5bf9 AST \u5e94\u7528\u5404\u79cd\u63d2\u4ef6\u8fdb\u884c\u5904\u7406\uff0c\u6700\u7ec8\u8f93\u51fa\u7f16\u8bd1\u540e\u7684 JS \u4ee3\u7801"),(0,r.kt)("h2",{id:"2-ast-\u62bd\u8c61\u8bed\u6cd5\u6811"},"2. AST \u62bd\u8c61\u8bed\u6cd5\u6811"),(0,r.kt)("p",null,"\u5373\u4ee5\u6811\u7684\u5f62\u5f0f\u8868\u73b0\u7f16\u7a0b\u8bed\u8a00\u7684\u8bed\u6cd5\u7ed3\u6784"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://astexplorer.net/"},"https://astexplorer.net/"))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5728\u7ebf\u8c03\u8bd5\u7f51\u7ad9\u53ef\u4ee5\u8f93\u51fa Tree \u548c JSON \u4e24\u79cd\u7ed3\u6784\uff0c\u53ef\u4ee5\u89c2\u5bdf\u5230\u751f\u6210\u7684\u6811\u7684\u8282\u70b9\u3001\u8282\u70b9\u7c7b\u578b\u3001\u8282\u70b9\u5c5e\u6027\u80fd\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const name = olu\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Program",\n  "start": 0,\n  "end": 55,\n  "body": [\n    {\n      "type": "VariableDeclaration",\n      "start": 0,\n      "end": 14,\n      "declarations": [\n        {\n          "type": "VariableDeclarator",\n          "start": 4,\n          "end": 14,\n          "id": {\n            "type": "Identifier",\n            "start": 4,\n            "end": 8,\n            "name": "name"\n          },\n          "init": {\n            "type": "Identifier",\n            "start": 11,\n            "end": 14,\n            "name": "olu"\n          }\n        }\n      ],\n      "kind": "const"\n    }\n  ],\n  "sourceType": "module"\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u6811\u6765\u8fdb\u884c\u5206\u6790\u6216\u8f6c\u6362\u53ef\u4ee5\u4f7f\u5f97\u7a0b\u5e8f\u4e2d\u7684\u6bcf\u4e00\u8282\u70b9\u6070\u597d\u88ab\u8bbf\u95ee\u4e00\u6b21\uff08\u524d\u5e8f\u6216\u540e\u5e8f\u904d\u5386\uff09"),(0,r.kt)("p",null,"\u5e38\u89c1\u4f7f\u7528\u573a\u666f\u662f\u4ee3\u7801\u538b\u7f29\u6df7\u6dc6\uff0c\u901a\u8fc7\u5206\u6790 AST\uff0c\u57fa\u4e8e\u5404\u79cd\u89c4\u5219\u8fdb\u884c\u4f18\u5316\u3001\u79fb\u9664\u4e0d\u53ef\u8bbf\u95ee\u4ee3\u7801\u3001\u79fb\u9664 debugger \u7b49"),(0,r.kt)("h2",{id:"3-babel-\u7f16\u8bd1\u6d41\u7a0b"},"3. Babel \u7f16\u8bd1\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/babel-flow1.svg",alt:"babel-flow1"})),(0,r.kt)("h3",{id:"31-\u89e3\u6790\u9636\u6bb5parser"},"3.1 \u89e3\u6790\u9636\u6bb5\uff08Parser\uff09"),(0,r.kt)("p",null,"Babel \u9ed8\u8ba4\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/parser"),"\u5c06\u4ee3\u7801\u8f6c\u6362\u4e3a AST"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bcd\u6cd5\u5206\u6790\uff1a\u5bf9\u8f93\u5165\u7684\u5b57\u7b26\u5e8f\u5217\u505a\u6807\u8bb0\u5316\uff08tokenization\uff09\u64cd\u4f5c\uff08\u5c06 js \u4ee3\u7801\u5b57\u7b26\u4e32\u8fdb\u884c\u8bcd\u6cd5\u5206\u6790\u751f\u6210\u4e00\u7cfb\u5217 ",(0,r.kt)("inlineCode",{parentName:"li"},"tokens"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u5206\u6790\uff1a\u5904\u7406\u6807\u8bb0\u4e8e\u6807\u8bb0\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u6700\u7ec8\u5f62\u6210\u4e00\u9897\u5b8c\u6574\u7684 AST \u7ed3\u6784(\u5c06\u4e0a\u4e00\u6b65\u7684 tokens \u8fdb\u884c\u7ec4\u5408)")),(0,r.kt)("h3",{id:"32-\u8f6c\u6362\u9636\u6bb5transformer"},"3.2 \u8f6c\u6362\u9636\u6bb5(Transformer)"),(0,r.kt)("p",null,"Babel \u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/traverse"),"\u63d0\u4f9b\u7684\u65b9\u6cd5\u5bf9 AST \u8fdb\u884c\u6df1\u5ea6\u4f18\u5148\u904d\u5386\uff0c\u8c03\u7528\u63d2\u4ef6\u5bf9\u5173\u6ce8\u8282\u70b9\u7684\u5904\u7406\u51fd\u6570\uff0c\u6309\u9700\u5bf9 AST \u8282\u70b9\u8fdb\u884c\u589e\u5220\u6539\u5904\u7406\uff0c\u5c06\u65b0\u7684 js \u8bed\u6cd5\u8282\u70b9\u8f6c\u5316\u6210\u6d4f\u89c8\u5668\u517c\u5bb9\u7684\u8bed\u6cd5\u8282\u70b9"),(0,r.kt)("h3",{id:"33-\u751f\u6210\u9636\u6bb5generator"},"3.3 \u751f\u6210\u9636\u6bb5(Generator)"),(0,r.kt)("p",null,"Babel \u9ed8\u8ba4\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/generator"),"\u5c06\u4e0a\u4e00\u9636\u6bb5\u6df1\u5ea6\u904d\u5386\u5904\u7406\u540e\u7684AST\u8f6c\u6362\u4e3a\u4ee3\u7801\u5b57\u7b26\u4e32"),(0,r.kt)("h2",{id:"4-babel-\u63d2\u4ef6\u7cfb\u7edf"},"4. Babel \u63d2\u4ef6\u7cfb\u7edf"),(0,r.kt)("p",null,"Babel \u7684\u6838\u5fc3\u6a21\u5757\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core"),",",(0,r.kt)("inlineCode",{parentName:"p"},"@bable/parser"),",",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/traverse"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/generator"),",\u8fd9\u4e9b\u6a21\u5757\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7f16\u8bd1\u6d41\u7a0b"),(0,r.kt)("p",null,"\u8f6c\u6362\u903b\u8f91\u5219\u9700\u8981\u63d2\u4ef6\u6765\u5b8c\u6210,\u4f7f\u7528 Babel \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"preset")," \u53ef\u4ee5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," \u4ee5\u53ca\u5176\u4ed6\u914d\u7f6e\u7684\u96c6\u5408"),(0,r.kt)("p",null,"Babel \u4f1a\u9012\u5f52\u8bfb\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"preset"),"\uff0c\u6700\u7ec8\u83b7\u53d6\u4e00\u4e2a\u5927\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," \u6570\u7ec4\uff0c\u7528\u4e8e\u540e\u7eed\u4f7f\u7528"),(0,r.kt)("h3",{id:"41-\u5e38\u89c1-preset"},"4.1 \u5e38\u89c1 preset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@babel/preset-env"),(0,r.kt)("li",{parentName:"ul"},"@babel/preset-typescript"),(0,r.kt)("li",{parentName:"ul"},"@babel/preset-react"),(0,r.kt)("li",{parentName:"ul"},"@babel/preset-flow")),(0,r.kt)("h4",{id:"411-babelpreset-env"},"4.1.1 @babel/preset-env"),(0,r.kt)("p",null,"\u5176\u4e2d\u7684 @babel/preset-env \u667a\u80fd\u9884\u8bbe\u662f\u6700\u5e38\u89c1\u7684\uff0c\u5b83\u5305\u542b\u4e86\u4e00\u7ec4\u6700\u65b0\u6d4f\u89c8\u5668\u5df2\u652f\u6301\u7684 ES \u8bed\u6cd5\u7279\u6027\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u76ee\u6807\u8fd0\u884c\u73af\u5883\u8303\u56f4\uff0c\u81ea\u52a8\u6309\u9700\u5f15\u5165\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5185\u90e8\u96c6\u6210\u4e86\u7edd\u5927\u591a\u6570 plugin \uff08Stage > 3\uff09\u7684\u5206\u6790\u8f6c\u6362\u63d2\u4ef6"),(0,r.kt)("p",null,"::: caution\n@babel/preset-env \u4e0d\u5305\u542b\u4f4e\u4e8e Stage 3 \u7684JavaScript \u8bed\u6cd5\u63d0\u6848\uff0c\u5982\u679c\u9700\u8981\u517c\u5bb9\u5219\u8981\u989d\u5916\u5f15\u5bf9\u5e94\u7684 Plugin"),(0,r.kt)("p",null,"@babel/preset-env \u4ec5\u9488\u5bf9\u8bed\u6cd5\u9636\u6bb5\u5206\u6790\u8f6c\u6362\uff0c\u5982 const\u3001let\u3001\u7bad\u5934\u51fd\u6570\u8fd9\u79cd\u7684\u3002\u5bf9\u4e8e\u4e00\u4e9b Api \u6216\u8005 ES6 \u5185\u7f6e\u6a21\u5757\u7684 polyfill \u65e0\u6cd5\u5904\u7406\n:::"),(0,r.kt)("h4",{id:"412-babelpreset-react"},"4.1.2 @babel/preset-react"),(0,r.kt)("p",null,"\u5728\u5f00\u53d1 React \u9879\u76ee\u7f16\u5199 jsx \u65f6\uff0c\u672c\u8d28\u4e0a jsx \u6700\u540e\u4f1a\u88ab\u7f16\u8bd1\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement()")),(0,r.kt)("p",null,"@babel/preset-react \u9884\u8bbe\u5c31\u662f\u5bf9 jsx \u8fdb\u884c\u5206\u6790\u8f6c\u6362"),(0,r.kt)("h4",{id:"413-babelpreset-typescript"},"4.1.3 @babel/preset-typescript"),(0,r.kt)("p",null,"@babel/preset-typescript \u987e\u540d\u601d\u4e49\u662f\u5bf9 ts \u4ee3\u7801\u8fdb\u884c\u5206\u6790\u8f6c\u6362"),(0,r.kt)("h3",{id:"42-\u5e38\u89c1-plugin"},"4.2 \u5e38\u89c1 plugin"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u5e38\u89c1\u7684 plugin \u90fd\u5df2\u7ecf\u96c6\u6210\u5728 @babel/preset-env \u4e2d\u4e86\uff0c\u5982\u679c\u6211\u4eec\u53d1\u73b0\u9879\u76ee\u4e0d\u80fd\u652f\u6301\u67d0\u4e9b\u65b0\u7684 js \u8bed\u6cd5\u65f6\uff0c\u53ef\u4ee5\u67e5 babel plugin list\u627e\u5230\u5bf9\u5e94\u7684\u63d2\u4ef6\uff0c\u63d2\u5165\u5230\u6211\u4eec\u7684 babel \u914d\u7f6e\u4e2d"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/plugins-list"},"https://babeljs.io/docs/en/plugins-list"))),(0,r.kt)("p",null,"\u6bd4\u8f83\u91cd\u8981\u5e38\u89c1\u7684\u63d2\u4ef6\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")),(0,r.kt)("h3",{id:"43-\u57fa\u5efa-babel-\u914d\u7f6e"},"4.3 \u57fa\u5efa Babel \u914d\u7f6e"),(0,r.kt)("p",null,"\u65e5\u5e38\u9879\u76ee\u6211\u4eec\u4e3b\u8981\u4f1a\u6d89\u53ca\u5230\u4e09\u4e2a\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"babel-loader"),(0,r.kt)("li",{parentName:"ul"},"@babel/core"),(0,r.kt)("li",{parentName:"ul"},"@babel/preset-env")),(0,r.kt)("h4",{id:"431-babel-loader"},"4.3.1 babel-loader"),(0,r.kt)("p",null,"webpack \u4e2d loader \u672c\u8d28\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7\u6e90\u4ee3\u7801\u4f5c\u4e3a\u5165\u53c2\u540c\u65f6\u8fd4\u56de\u65b0\u5185\u5bb9"),(0,r.kt)("p",null,"\u6240\u4ee5 babel-loader \u672c\u8d28\u662f\u4e00\u4e2a\u51fd\u6570"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5404\u79cd\u57fa\u5efa\u9879\u76ee\u7684\u521d\u59cb\u5316\u65b9\u5f0f\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/setup"},"https://babeljs.io/setup"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," \u662f\u7f16\u8bd1\u4ee3\u7801\u7684\u6838\u5fc3\u5e93\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"\u8bcd\u6cd5\u5206\u6790--\u8bed\u6cd5\u5206\u6790--\u8bed\u4e49\u5206\u6790"),"\u751f\u6210 AST \u62bd\u8c61\u8bed\u6cd5\u6811\uff08\u76f8\u5f53\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/parse"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/generator"),"\u7684\u5408\u4f53\uff0c\u7c7b\u4f3c js \u7f16\u8bd1\u76f8\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"esprima")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"escodegen")," \u4e24\u4e2a\u5e93\uff09"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core"),"\u901a\u8fc7 transform \u65b9\u6cd5\u8fdb\u884c\u8f6c\u6362\u7f16\u8bd1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'babel.transform(code, options, function(err, result) {\n  result; // => { code, map, ast }\n});\n\nbabel.transform("code();", options, function(err, result) {\n  result.code;\n  result.map;\n  result.ast;\n});\n')),(0,r.kt)("p",null,"\u5b83\u652f\u6301",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/babel-core"},"\u540c\u6b65\u548c\u5f02\u6b65")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684 transform \u65b9\u6cd5\u662f\u76f4\u63a5\u63a5\u53d7\u5b57\u7b26\u4e32\uff0ctransformFile \u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7 js \u6587\u4ef6\u8def\u5f84"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'babel.transformFile(filename, options, callback);\n\nbabel.transformFile("filename.js", options, function(err, result) {\n  result; // => { code, map, ast }\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel-loader \u4f2a\u4ee3\u7801"',title:'"babel-loader','\u4f2a\u4ee3\u7801"':!0},'let babel = require("@babel/core");\n\nfunction babelLoader (sourceCode,options) {\n  // \u901a\u8fc7transform\u65b9\u6cd5\u7f16\u8bd1\u4f20\u5165\u7684\u6e90\u4ee3\u7801\n  babel.transform(sourceCode)\n  return targetCode\n}\n')),(0,r.kt)("h4",{id:"432-babelcore"},"4.3.2 @babel/core"),(0,r.kt)("h3",{id:"44-\u7f16\u5199-babel-\u63d2\u4ef6"},"4.4 \u7f16\u5199 Babel \u63d2\u4ef6"),(0,r.kt)("p",null,"Babel \u63d2\u4ef6\u7684\u5199\u6cd5\u501f\u52a9",(0,r.kt)("strong",{parentName:"p"},"\u8bbf\u95ee\u8005\u6a21\u5f0f"),"\u5bf9\u5173\u6ce8\u7684\u8282\u70b9\u5b9a\u4e49\u5904\u7406\u51fd\u6570\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function () {\n  return {\n    pre() {\n      // \u5728 visitor \u4e0b\u6302\u8f7d\u5404\u79cd\u8282\u70b9\u7c7b\u578b\u7684\u76d1\u542c\u65b9\u6cd5\n      visitor: {\n        /**\n         * \u5bf9 Identify \u7c7b\u578b\u7684\u8282\u70b9\u8fdb\u884c\u5904\u7406\n         * @param {NodePath} path\n         */\n        Identifier(path) {\n          path.node.name = path.node.name.toUpperCase()\n        }\n      },\n      post() {}\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528 Babel \u63d2\u4ef6\u7684\u6548\u679c\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="input"',title:'"input"'},'// index.js\nfunction olu() {}\n\n// .babelrc\n{\n  "plugins": ["babel-plugin-testpluginname"]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="output"',title:'"output"'},"function OLU() {}\n")),(0,r.kt)("h3",{id:"45-babel-\u8f6c\u6362\u9636\u6bb5"},"4.5 Babel \u8f6c\u6362\u9636\u6bb5"),(0,r.kt)("p",null,"\u8f6c\u6362\u9636\u6bb5\uff0cBabel \u76f8\u5173\u65b9\u6cd5\u4f1a\u83b7\u5f97\u4e00\u4e2a\u63d2\u4ef6\u6570\u7ec4\u53d8\u91cf\uff0c\u7528\u4e8e\u540e\u7eed\u64cd\u4f5c\u3002\u63d2\u4ef6\u7ed3\u6784\u63a5\u53e3\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Plugin {\n  key: string | undefined | null;\n  post: Function | void;\n  pre: Function | void;\n  visitor: Object;\n  parserOverride: Function | void;\n  generatorOverride: Function | void;\n}\n")),(0,r.kt)("p",null,"\u8f6c\u6362\u9636\u6bb5\uff0cBabel \u4f1a\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/a647b9ea6bdd510f0d80b58dbea66828016ffe00/packages/babel-core/src/transformation/index.ts#L76"},"\u4ee5\u4e0b\u987a\u5e8f"),"\u6267\u884c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u6240\u6709\u63d2\u4ef6\u7684 pre \u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u9700\u6267\u884c visitor \u4e2d\u7684\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u6240\u6709\u63d2\u4ef6\u7684 post \u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function* transformFile(file: File, pluginPasses: PluginPasses): Handler<void> {\n  for (const pluginPairs of pluginPasses) {\n    const passPairs = [];\n    const passes = [];\n    const visitors = [];\n\n    for (const plugin of pluginPairs.concat([loadBlockHoistPlugin()])) {\n      const pass = new PluginPass(file, plugin.key, plugin.options);\n\n      passPairs.push([plugin, pass]);\n      passes.push(pass);\n      visitors.push(plugin.visitor);\n    }\n\n    for (const [plugin, pass] of passPairs) {\n      const fn = plugin.pre;\n      if (fn) {\n        const result = fn.call(pass, file);\n\n        // @ts-expect-error - If we want to support async .pre\n        yield* [];\n\n        if (isThenable(result)) {\n          throw new Error(\n            `You appear to be using an plugin with an async .pre, ` +\n              `which your current version of Babel does not support. ` +\n              `If you're using a published plugin, you may need to upgrade ` +\n              `your @babel/core version.`,\n          );\n        }\n      }\n    }\n\n    // merge all plugin visitors into a single visitor\n    const visitor = traverse.visitors.merge(\n      visitors,\n      passes,\n      file.opts.wrapPluginVisitorMethod,\n    );\n    traverse(file.ast, visitor, file.scope);\n\n    for (const [plugin, pass] of passPairs) {\n      const fn = plugin.post;\n      if (fn) {\n        const result = fn.call(pass, file);\n\n        // @ts-expect-error - If we want to support async .post\n        yield* [];\n\n        if (isThenable(result)) {\n          throw new Error(\n            `You appear to be using an plugin with an async .post, ` +\n              `which your current version of Babel does not support. ` +\n              `If you're using a published plugin, you may need to upgrade ` +\n              `your @babel/core version.`,\n          );\n        }\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u5199 Babel \u63d2\u4ef6\u4e3b\u8981\u4f7f\u7528 visitor \u5bf9\u8c61\uff0c\u8fd9\u4e2a visitor \u5bf9\u8c61\u4e2d\u4f1a\u7f16\u5199\u5bf9\u4e8e\u5173\u6ce8\u7684 AST \u8282\u70b9\u7684\u5904\u7406\u903b\u8f91"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u6267\u884c\u987a\u5e8f\u4e2d\u7b2c\u4e8c\u6b65\u7684 visitor \u5bf9\u8c61\u662f\u6574\u5408\u81ea\u5404\u63d2\u4ef6\u7684 visitor,\u6700\u7ec8\u5f62\u6210\u7684\u4e00\u4e2a\u5927\u7684 visitor \u5bf9\u8c61\uff0c\u6570\u636e\u7ed3\u6784\u5927\u81f4\u53c2\u8003\u4e0b\u9762\u63a5\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4e66\u5199\u63d2\u4ef6\u65f6\u7684 visitor \u7ed3\u6784\ninterface VisitorInPlugin {\n  [ASTNodeTypeName: string]:\n    | Function\n    | {\n        enter?: Function;\n        exit?: Function;\n      };\n}\n\n// babel \u6700\u7ec8\u6574\u5408\u7684 visitor \u7ed3\u6784\ninterface VisitorInTransform {\n  [ASTNodeTypeName: string]: {\n    // \u4e0d\u540c\u63d2\u4ef6\u5bf9\u76f8\u540c\u8282\u70b9\u7684\u5904\u7406\u4f1a\u5408\u5e76\u4e3a\u6570\u7ec4\n    enter?: Function[];\n    exit?: Function[];\n  };\n}\n")),(0,r.kt)("p",null,"\u5bf9 AST \u8fdb\u884c\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u65f6\uff0c\u4f1a\u521b\u5efa TraversalContext \u5bf9\u8c61\u6765\u628a\u63a7\u5bf9 NodePath \u8282\u70b9\u7684\u8bbf\u95ee\uff0c\u8bbf\u95ee\u65f6\u8c03\u7528\u5bf9\u8282\u70b9\u6240\u5b9a\u4e49\u7684\u5904\u7406\u65b9\u6cd5\uff0c\u4ece\u800c\u5b9e\u73b0\u6309\u9700\u6267\u884c visitor \u4e2d\u7684\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages\\babel-traverse\\src\\index.ts"',title:'"packages\\babel-traverse\\src\\index.ts"'},"// ...\ntraverse.node = function (\n  node: t.Node,\n  opts: TraverseOptions,\n  scope?: Scope,\n  state?: any,\n  parentPath?: NodePath,\n  skipKeys?,\n) {\n  const keys = t.VISITOR_KEYS[node.type];\n  if (!keys) return;\n\n  const context = new TraversalContext(scope, opts, state, parentPath);\n  for (const key of keys) {\n    if (skipKeys && skipKeys[key]) continue;\n    if (context.visit(node, key)) return;\n  }\n};\n// ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages\\babel-traverse\\src\\context.ts"',title:'"packages\\babel-traverse\\src\\context.ts"'},'import NodePath from "./path";\nimport * as t from "@babel/types";\nimport type Scope from "./scope";\n\nexport default class TraversalContext {\n  constructor(scope, opts, state, parentPath) {\n    this.parentPath = parentPath;\n    this.scope = scope;\n    this.state = state;\n    this.opts = opts;\n  }\n\n  declare parentPath: NodePath;\n  declare scope: Scope;\n  declare state;\n  declare opts;\n  queue: Array<NodePath> | null = null;\n  priorityQueue: Array<NodePath> | null = null;\n\n  /**\n   * This method does a simple check to determine whether or not we really need to attempt\n   * visit a node. This will prevent us from constructing a NodePath.\n   */\n\n  shouldVisit(node): boolean {\n    const opts = this.opts;\n    if (opts.enter || opts.exit) return true;\n\n    // check if we have a visitor for this node\n    if (opts[node.type]) return true;\n\n    // check if we\'re going to traverse into this node\n    const keys: Array<string> | undefined = t.VISITOR_KEYS[node.type];\n    if (!keys?.length) return false;\n\n    // we need to traverse into this node so ensure that it has children to traverse into!\n    for (const key of keys) {\n      if (node[key]) return true;\n    }\n\n    return false;\n  }\n\n  create(node, obj, key, listKey?): NodePath {\n    // We don\'t need to `.setContext()` here, since `.visitQueue()` already\n    // calls `.pushContext`.\n    return NodePath.get({\n      parentPath: this.parentPath,\n      parent: node,\n      container: obj,\n      key: key,\n      listKey,\n    });\n  }\n\n  maybeQueue(path, notPriority?: boolean) {\n    if (this.queue) {\n      if (notPriority) {\n        this.queue.push(path);\n      } else {\n        this.priorityQueue.push(path);\n      }\n    }\n  }\n\n  visitMultiple(container, parent, listKey) {\n    // nothing to traverse!\n    if (container.length === 0) return false;\n\n    const queue = [];\n\n    // build up initial queue\n    for (let key = 0; key < container.length; key++) {\n      const node = container[key];\n      if (node && this.shouldVisit(node)) {\n        queue.push(this.create(parent, container, key, listKey));\n      }\n    }\n\n    return this.visitQueue(queue);\n  }\n\n  visitSingle(node, key): boolean {\n    if (this.shouldVisit(node[key])) {\n      return this.visitQueue([this.create(node, node, key)]);\n    } else {\n      return false;\n    }\n  }\n\n  visitQueue(queue: Array<NodePath>) {\n    // set queue\n    this.queue = queue;\n    this.priorityQueue = [];\n\n    const visited = new WeakSet();\n    let stop = false;\n\n    // visit the queue\n    for (const path of queue) {\n      path.resync();\n\n      if (\n        path.contexts.length === 0 ||\n        path.contexts[path.contexts.length - 1] !== this\n      ) {\n        // The context might already have been pushed when this path was inserted and queued.\n        // If we always re-pushed here, we could get duplicates and risk leaving contexts\n        // on the stack after the traversal has completed, which could break things.\n        path.pushContext(this);\n      }\n\n      // this path no longer belongs to the tree\n      if (path.key === null) continue;\n\n      // ensure we don\'t visit the same node twice\n      const { node } = path;\n      if (visited.has(node)) continue;\n      if (node) visited.add(node);\n\n      if (path.visit()) {\n        stop = true;\n        break;\n      }\n\n      if (this.priorityQueue.length) {\n        stop = this.visitQueue(this.priorityQueue);\n        this.priorityQueue = [];\n        this.queue = queue;\n        if (stop) break;\n      }\n    }\n\n    // clear queue\n    for (const path of queue) {\n      path.popContext();\n    }\n\n    // clear queue\n    this.queue = null;\n\n    return stop;\n  }\n\n  visit(node, key) {\n    const nodes = node[key];\n    if (!nodes) return false;\n\n    if (Array.isArray(nodes)) {\n      return this.visitMultiple(nodes, node, key);\n    } else {\n      return this.visitSingle(node, key);\n    }\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/tree/bc1b9537b00499f462aa3ac0d49e30314a66f413/packages/babel-traverse"},"https://github.com/babel/babel/tree/bc1b9537b00499f462aa3ac0d49e30314a66f413/packages/babel-traverse"))))}b.isMDXComponent=!0}}]);