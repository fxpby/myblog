"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),N=o(n),u=i,s=N["".concat(p,".").concat(u)]||N[u]||k[u]||r;return n?a.createElement(s,l(l({ref:t},m),{},{components:n})):a.createElement(s,l({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=N;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},5855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=n(7462),i=(n(7294),n(3905));const r={id:"build-frontend-project-standardization",title:"\u642d\u5efa\u524d\u7aef\u5de5\u7a0b\u9879\u76ee - \u89c4\u8303\u7bc7",tags:["\u5de5\u7a0b\u5316"]},l=void 0,d={unversionedId:"front-end-engineering/build-frontend-project-standardization",id:"front-end-engineering/build-frontend-project-standardization",title:"\u642d\u5efa\u524d\u7aef\u5de5\u7a0b\u9879\u76ee - \u89c4\u8303\u7bc7",description:"\u524d\u8a00",source:"@site/docs/front-end-engineering/build-frontend-project-standardization.md",sourceDirName:"front-end-engineering",slug:"/front-end-engineering/build-frontend-project-standardization",permalink:"/myblog/docs/front-end-engineering/build-frontend-project-standardization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-engineering/build-frontend-project-standardization.md",tags:[{label:"\u5de5\u7a0b\u5316",permalink:"/myblog/docs/tags/\u5de5\u7a0b\u5316"}],version:"current",frontMatter:{id:"build-frontend-project-standardization",title:"\u642d\u5efa\u524d\u7aef\u5de5\u7a0b\u9879\u76ee - \u89c4\u8303\u7bc7",tags:["\u5de5\u7a0b\u5316"]},sidebar:"front-end-engineering",previous:{title:"\u521d\u63a2GitHub Actions: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72",permalink:"/myblog/docs/front-end-engineering/github-action-for-vuepress"}},p={},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u73af\u5883\u4ecb\u7ecd",id:"\u73af\u5883\u4ecb\u7ecd",level:2},{value:"\ud83c\udf84\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"\ud83d\udcd0Prettier",id:"prettier",level:2},{value:"Prettier \u662f\u4ec0\u4e48",id:"prettier-\u662f\u4ec0\u4e48",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 Prettier",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-prettier",level:3},{value:"Prettier \u5c0f\u8bd5\u725b\u5200",id:"prettier-\u5c0f\u8bd5\u725b\u5200",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",level:3},{value:"overrides \u8986\u76d6\u914d\u7f6e",id:"overrides-\u8986\u76d6\u914d\u7f6e",level:3},{value:"\u683c\u5f0f\u5316\u9009\u9879",id:"\u683c\u5f0f\u5316\u9009\u9879",level:3},{value:"\u5171\u4eab\u914d\u7f6e",id:"\u5171\u4eab\u914d\u7f6e",level:3},{value:"stylelint",id:"stylelint",level:2},{value:"ESLint",id:"eslint",level:2},{value:"lint-staged",id:"lint-staged",level:2},{value:"commitlint",id:"commitlint",level:2},{value:"husky",id:"husky",level:2},{value:"babel",id:"babel",level:2}],m={toc:o};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("h2",{id:"\u73af\u5883\u4ecb\u7ecd"},"\u73af\u5883\u4ecb\u7ecd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OS\uff1awindows 10"),(0,i.kt)("li",{parentName:"ul"},"node: 14.15.1"),(0,i.kt)("li",{parentName:"ul"},"npm: 6.14.8")),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316\u9879\u76ee"},"\ud83c\udf84\u521d\u59cb\u5316\u9879\u76ee"),(0,i.kt)("p",null,"\u9996\u5148\u6211\u4eec\u521d\u59cb\u5316\u9879\u76ee\uff0c\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939 npm \u521d\u59cb\u5316\uff0c\u5e76\u5728\u91cc\u9762\u5199\u4e00\u4e9b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd .\\fe-demo\\\npnpm init\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/build-frontend-project-standardization/init-program.png",alt:"init-program"})),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," \u76ee\u5f55\u5e76\u5728\u91cc\u9762\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," \u6587\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>fe-demo</title>\n</head>\n<body>\n  <h1>hello, world</h1><p>\u6211\u6ca1\u6709\u6362\u884c\u54e6</p>\n</body>\n</html>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"const fn = () => {\nconst a=1\n             const b=2\n  return   a+   b\n}\n")),(0,i.kt)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e86\u4e24\u4e2a\u6587\u4ef6\uff0c\u4f46\u662f\u91cc\u9762\u7684\u4ee3\u7801\u98ce\u683c\u770b\u8d77\u6765\u4e00\u8a00\u96be\u5c3d\uff0c\u6ca1\u5173\u7cfb\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u4f7f\u7528\u9b54\u6cd5\u6539\u53d8\u4ed6\u4eec\u2728"),(0,i.kt)("h2",{id:"prettier"},"\ud83d\udcd0Prettier"),(0,i.kt)("h3",{id:"prettier-\u662f\u4ec0\u4e48"},"Prettier \u662f\u4ec0\u4e48"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Prettier")," \u53ef\u4ee5\u683c\u5f0f\u5316\u6211\u4eec\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u5b98\u7f51\u4e0a\u6307\u51fa\u652f\u6301\u7684\u683c\u5f0f\u6709\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JavaScript (including experimental features)"),(0,i.kt)("li",{parentName:"ul"},"JSX"),(0,i.kt)("li",{parentName:"ul"},"Angular"),(0,i.kt)("li",{parentName:"ul"},"Vue"),(0,i.kt)("li",{parentName:"ul"},"Flow"),(0,i.kt)("li",{parentName:"ul"},"TypeScript"),(0,i.kt)("li",{parentName:"ul"},"CSS, Less, and SCSS"),(0,i.kt)("li",{parentName:"ul"},"HTML"),(0,i.kt)("li",{parentName:"ul"},"Ember/Handlebars"),(0,i.kt)("li",{parentName:"ul"},"JSON"),(0,i.kt)("li",{parentName:"ul"},"GraphQL"),(0,i.kt)("li",{parentName:"ul"},"Markdown, including GFM and MDX"),(0,i.kt)("li",{parentName:"ul"},"YAML")),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-prettier"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 Prettier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Building and enforcing a style guide"),(0,i.kt)("li",{parentName:"ul"},"Helping Newcomers"),(0,i.kt)("li",{parentName:"ul"},"Writing code"),(0,i.kt)("li",{parentName:"ul"},"Easy to adopt"),(0,i.kt)("li",{parentName:"ul"},"Clean up an existing codebase"),(0,i.kt)("li",{parentName:"ul"},"Ride the hype train")),(0,i.kt)("h3",{id:"prettier-\u5c0f\u8bd5\u725b\u5200"},"Prettier \u5c0f\u8bd5\u725b\u5200"),(0,i.kt)("p",null,"\u6765\u5230\u6211\u4eec\u521a\u624d\u521d\u59cb\u5316\u7684\u9879\u76ee\uff0c\u5b89\u88c5\u6211\u4eec\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Prettier")," \u63d2\u4ef6\u5427"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install prettier -D\n")),(0,i.kt)("p",null,"\u89c1\u8bc1\u5947\u8ff9\u7684\u65f6\u523b\u5230\u4e86\uff0c\u6211\u4eec\u6267\u884c\u547d\u4ee4, \u8be5\u547d\u4ee4\u4f1a\u683c\u5f0f\u5316\u6240\u6709\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm prettier --write .\n")),(0,i.kt)("p",null,"\u554a\u8fd9\uff0c\u4e00\u5b9a\u662f\u9b54\u6cd5\uff0c\u6211\u4eec\u7684\u4e24\u4e2a\u6587\u4ef6\u5206\u522b\u53d8\u6210\u4e86\u8fd9\u4e2a\u6837\u5b50\uff0c\u53d1\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"p\u6807\u7b7e"),"\u6362\u884c\u4e86\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.js")," \u4e2d\u7684\u53d8\u91cf\u4e24\u7aef\u90fd\u52a0\u4e0a\u4e86\u7a7a\u683c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>fe-demo</title>\n  </head>\n  <body>\n    <h1>hello, world</h1>\n    <p>\u6211\u6ca1\u6709\u6362\u884c\u54e6</p>\n  </body>\n</html>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"const fn = () => {\n  const a = 1;\n  const b = 2;\n  return a + b;\n};\n")),(0,i.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},".prettierrc")," \u6587\u4ef6\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"js"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"json")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"yaml")," \u6587\u4ef6\u5747\u53ef",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'A "prettier" key in your package.json file.'),(0,i.kt)("li",{parentName:"ul"},"A .prettierrc file written in JSON or YAML."),(0,i.kt)("li",{parentName:"ul"},"A .prettierrc.json, .prettierrc.yml, .prettierrc.yaml, or .prettierrc.json5 file."),(0,i.kt)("li",{parentName:"ul"},"A .prettierrc.js, .prettierrc.cjs, prettier.config.js, or prettier.config.cjs file that ",(0,i.kt)("strong",{parentName:"li"},"exports an object using module.exports"),"."),(0,i.kt)("li",{parentName:"ul"},"A .prettierrc.toml file."))),(0,i.kt)("li",{parentName:"ul"},"\u7ee7\u7eed\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},".prettierignore")," \u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u7684\u4f5c\u7528\u662f\u4f7f\u6211\u4eec\u7684\u683c\u5f0f\u5316\u64cd\u4f5c",(0,i.kt)("strong",{parentName:"li"},"\u5ffd\u7565"),"\u5305\u542b\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939,",(0,i.kt)("inlineCode",{parentName:"li"},".prettierignore")," \u6587\u4ef6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"gitignore syntax")," \u8bed\u6cd5\u7f16\u5199")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore#_pattern_format"},"https://git-scm.com/docs/gitignore#_pattern_format"))),(0,i.kt)("h3",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),(0,i.kt)("p",null,"JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "trailingComma": "es5",\n  "tabWidth": 4,\n  "semi": false,\n  "singleQuote": true\n}\n')),(0,i.kt)("p",null,"JS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// prettier.config.js or .prettierrc.js\nmodule.exports = {\n  trailingComma: "es5",\n  tabWidth: 4,\n  semi: false,\n  singleQuote: true,\n};\n')),(0,i.kt)("p",null,"YAML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prettierrc or .prettierrc.yaml\ntrailingComma: "es5"\ntabWidth: 4\nsemi: false\nsingleQuote: true\n')),(0,i.kt)("h3",{id:"overrides-\u8986\u76d6\u914d\u7f6e"},"overrides \u8986\u76d6\u914d\u7f6e"),(0,i.kt)("p",null,"overrides \u914d\u7f6e\u53ef\u4ee5\u8ba9\u6211\u4eec\u8986\u76d6\u539f\u6709\u89c4\u5219\u8fdb\u884c\u4e00\u4e9b\u7279\u6b8a\u5904\u7406\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," \u683c\u5f0f\u652f\u6301\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"[]string")),(0,i.kt)("p",null,"\u4e3e\u4e2a\u6817\u5b50\uff0c\u6309\u7167\u4e0b\u65b9\u914d\u7f6e\u5199\u7684\u8bdd\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"*.test.js")," \u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"*.html")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"legacy/**/*.js")," \u5c31\u4f1a\u9075\u5faa ",(0,i.kt)("inlineCode",{parentName:"p"},"overrides")," \u4e2d\u7684\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semi": false,\n  "overrides": [\n    {\n      "files": "*.test.js",\n      "options": {\n        "semi": true\n      }\n    },\n    {\n      "files": ["*.html", "legacy/**/*.js"],\n      "options": {\n        "tabWidth": 4\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"\u683c\u5f0f\u5316\u9009\u9879"},"\u683c\u5f0f\u5316\u9009\u9879"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"options"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"printWidth")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<int>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bcf\u884c\u4ee3\u7801\u957f\u5ea6\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"80"),"\uff0c \u5b98\u65b9\u5efa\u8bae ",(0,i.kt)("inlineCode",{parentName:"td"},"80")," \u53ca\u4ee5\u4e0a\uff1b\u5728 ",(0,i.kt)("inlineCode",{parentName:"td"},".editorconfig")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"max_line_length")," \u4e5f\u4f1a\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"Prettier")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"printWidth"),", \u9664\u975e\u88ab\u8986\u76d6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tabWidth")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<int>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a",(0,i.kt)("inlineCode",{parentName:"td"},"tab"),"\u76f8\u5f53\u4e8e\u591a\u5c11\u4e2a\u7a7a\u683c\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"2"),"\uff1b\u5728 ",(0,i.kt)("inlineCode",{parentName:"td"},".editorconfig")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"indent_size")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"td"},"tab_width")," \u4e5f\u4f1a\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"Prettier")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"tabWidth"),", \u9664\u975e\u88ab\u8986\u76d6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tabs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"td"},"tab")," \u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"td"},"space")," \u8fdb\u884c\u7f29\u8fdb\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"semi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u8bed\u53e5\u7ed3\u5c3e\u6dfb\u52a0\u5206\u53f7\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"singleQuote")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5355\u5f15\u53f7\u66ff\u4ee3\u53cc\u5f15\u53f7\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"quoteProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"as-needed")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"consistent")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"preserve")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u4e2d\u5c5e\u6027 ",(0,i.kt)("inlineCode",{parentName:"td"},"key")," \u5f15\u53f7\u4f7f\u7528\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"as-needed"),"; ",(0,i.kt)("inlineCode",{parentName:"td"},"as-needed")," \u9700\u8981\u52a0\u5f15\u53f7\u624d\u4f7f\u7528\u5f15\u53f7\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"consistent")," \u6709\u4e00\u4e2a\u5c5e\u6027 ",(0,i.kt)("inlineCode",{parentName:"td"},"key")," \u9700\u8981\u52a0\u5f15\u53f7, \u5c31\u7ed9\u5168\u90e8\u5c5e\u6027 ",(0,i.kt)("inlineCode",{parentName:"td"},"key")," \u90fd\u52a0\u5f15\u53f7\uff1b",(0,i.kt)("inlineCode",{parentName:"td"},"preserve")," \u4e3a\u9075\u5faa\u8f93\u5165\u5f62\u5f0f\uff0c\u4e0d\u5bf9\u5bf9\u8c61\u7684\u5c5e\u6027 ",(0,i.kt)("inlineCode",{parentName:"td"},"key")," \u505a\u5f15\u53f7\u53d8\u66f4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"jsxSingleQuote")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," \uff0c\u5728JSX\u4e2d\u4f7f\u7528\u5355\u5f15\u53f7\u4ee3\u66ff\u53cc\u5f15\u53f7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"trailingComma")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"es5"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"none"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"all")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9017\u53f7\u7ed3\u5c3e\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"es5")," , ",(0,i.kt)("inlineCode",{parentName:"td"},"es5")," \u5728ES5\u4e2d\u6709\u6548\u7684\u5730\u65b9\u7528\u9017\u53f7\u7ed3\u5c3e(\u5bf9\u8c61\u3001\u6570\u7ec4\u7b49)\u3002TypeScript\u7684\u7c7b\u578b\u53c2\u6570\u4e2d\u4e0d\u5141\u8bb8\u5e26\u9017\u53f7; ",(0,i.kt)("inlineCode",{parentName:"td"},"none")," \u4e0d\u5c3e\u968f\u9017\u53f7\uff1b ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," \u5c3d\u53ef\u80fd\u7684\u5c3e\u968f\u9017\u53f7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bracketSpacing")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u4e2d\u7684\u7a7a\u683c\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"td"},"false => {foo: bar}")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"true => { foo: bar }"),", \u9ed8\u8ba4  ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bracketSameLine")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u628a ",(0,i.kt)("inlineCode",{parentName:"td"},">")," \u653e\u7f6e\u5728\u591a\u884c ",(0,i.kt)("inlineCode",{parentName:"td"},"HTML (HTML, JSX, Vue, Angular)")," \u7684\u672b\u5c3e\uff0c\u800c\u4e0d\u662f\u53e6\u8d77\u4e00\u884c(\u4e0d\u9002\u7528\u4e8e\u81ea\u95ed\u548c\u5143\u7d20) , \u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\ud83d\udc4e",(0,i.kt)("inlineCode",{parentName:"td"},"jsxBracketSameLine")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u628a ",(0,i.kt)("inlineCode",{parentName:"td"},">")," \u653e\u7f6e\u5728\u591a\u884c ",(0,i.kt)("inlineCode",{parentName:"td"},"JSX")," \u7684\u672b\u5c3e\uff0c\u800c\u4e0d\u662f\u53e6\u8d77\u4e00\u884c(\u4e0d\u9002\u7528\u4e8e\u81ea\u95ed\u548c\u5143\u7d20) , \u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"arrowParens")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"always"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"avoid")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7bad\u5934\u51fd\u6570\u53c2\u6570\u5305\u88f9\u5706\u62ec\u53f7\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"always")," ",(0,i.kt)("inlineCode",{parentName:"td"},"(x) => x"),"; ",(0,i.kt)("inlineCode",{parentName:"td"},"avoid")," \u5373 ",(0,i.kt)("inlineCode",{parentName:"td"},"x => x"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rangeStart")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<int>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u683c\u5f0f\u5316\u8d77\u59cb\u4f4d\u7f6e\uff0c\u53ea\u683c\u5f0f\u5316\u67d0\u4e2a\u6587\u4ef6\u7684\u4e00\u90e8\u5206\uff1b\u53ef\u4ee5\u548c rangeEnd \u7528\u4e8e\u4ece\u6307\u5b9a\u8d77\u6b62\u504f\u79fb\u5b57\u7b26(\u5355\u72ec\u6307\u5b9a\u5f00\u59cb\u6216\u7ed3\u675f\u3001\u4e24\u8005\u540c\u65f6\u6307\u5b9a\u3001\u5206\u522b\u6307\u5b9a)\u683c\u5f0f\u5316\u4ee3\u7801\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rangeEnd")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<int>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u683c\u5f0f\u5316\u7ed3\u675f\u4f4d\u7f6e\uff0c\u53ea\u683c\u5f0f\u5316\u67d0\u4e2a\u6587\u4ef6\u7684\u4e00\u90e8\u5206\uff1b\u53ef\u4ee5\u548c rangeStart \u7528\u4e8e\u4ece\u6307\u5b9a\u8d77\u6b62\u504f\u79fb\u5b57\u7b26(\u5355\u72ec\u6307\u5b9a\u5f00\u59cb\u6216\u7ed3\u675f\u3001\u4e24\u8005\u540c\u65f6\u6307\u5b9a\u3001\u5206\u522b\u6307\u5b9a)\u683c\u5f0f\u5316\u4ee3\u7801\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"Infinity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"parser")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'<string> or require("./my-parser")')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u89e3\u6790\u5668\u9009\u62e9"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filepath")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<string>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"None"),", \u6307\u5b9a\u8981\u4f7f\u7528\u89e3\u6790\u5668\u7684\u6587\u4ef6\u540d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"requirePragma")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5728\u6587\u4ef6\u5934\u90e8\u589e\u52a0\u591a\u884c\u6ce8\u91ca ",(0,i.kt)("inlineCode",{parentName:"td"},"@prettier")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"td"},"@format"),"\uff0c\u624d\u4f1a\u5bf9\u6587\u4ef6\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u5728\u6e10\u8fdb\u8fdb\u884c\u683c\u5f0f\u5316\u7684\u5927\u578b\u590d\u6742\u9879\u76ee\u9002\u7528 , \u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"insertPragma")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," \u540e\uff0c\u53ef\u4ee5\u81ea\u52a8\u5728\u6587\u4ef6\u5934\u90e8\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"td"},"@format")," \u591a\u884c\u6ce8\u91ca\uff0c \u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"proseWrap")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"always"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"never"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"preserve")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"Prettier")," \u4f1a\u56e0\u4e3a\u4f7f\u7528\u4e86\u4e00\u4e9b\u6298\u884c\u654f\u611f\u578b\u7684\u6e32\u67d3\u5668\uff08\u5982",(0,i.kt)("inlineCode",{parentName:"td"},"GitHub comment")," \u548c ",(0,i.kt)("inlineCode",{parentName:"td"},"BitBucket"),"\uff09\u800c\u6309\u7167",(0,i.kt)("inlineCode",{parentName:"td"},"markdown"),"\u6587\u672c\u6837\u5f0f\u8fdb\u884c\u6298\u884c\uff0c\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u80fd\u53ea\u662f\u5e0c\u671b\u8fd9\u4e2a\u6587\u672c\u5728\u7f16\u8bd1\u5668\u6216\u67e5\u770b\u5668\u4e2d",(0,i.kt)("inlineCode",{parentName:"td"},"soft-wrapping"),"\uff08\u5f53\u5c4f\u5e55\u653e\u4e0d\u4e0b\u65f6\u53d1\u751f\u7684\u8f6f\u6298\u884c\uff09\uff0c\u6240\u4ee5\u8fd9\u4e00\u53c2\u6570\u5141\u8bb8\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"never")," \uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"preserve")," \uff1b ",(0,i.kt)("inlineCode",{parentName:"td"},"always")," \u5f53\u8d85\u51fa ",(0,i.kt)("inlineCode",{parentName:"td"},"print width"),"\uff08\u4e0a\u9762\u6709\u8fd9\u4e2a\u53c2\u6570\uff09\u65f6\u5c31\u6298\u884c\uff1b",(0,i.kt)("inlineCode",{parentName:"td"},"never")," \u4e0d\u6298\u884c\uff1b ",(0,i.kt)("inlineCode",{parentName:"td"},"perserve")," \u6309\u7167\u6587\u4ef6\u539f\u6837\u6298\u884c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"htmlWhitespaceSensitivity")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"css"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"strict"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"ignore")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u7a7a\u683c\u654f\u611f\uff0c\u9488\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"td"},"HTML"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Vue"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Angular"),",\u548c ",(0,i.kt)("inlineCode",{parentName:"td"},"Handlebars")," \uff0c \u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"css")," \uff1b \u4e3e\u4f8b ",(0,i.kt)("inlineCode",{parentName:"td"},"ignore")," \u6a21\u5f0f\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"div")," \u548c ",(0,i.kt)("inlineCode",{parentName:"td"},"span")," \u5185\u5bb9\u5747\u88ab\u6362\u884c\uff1b ",(0,i.kt)("inlineCode",{parentName:"td"},"css")," \u6a21\u5f0f\u4e0b\uff0c\u53ea\u9488\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"td"},"div")," \u8fdb\u884c\u6362\u884c\uff1b ",(0,i.kt)("inlineCode",{parentName:"td"},"strict")," \u6a21\u5f0f\u4e0b\u5747\u4e0d\u6362\u884c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vueIndentScriptAndStyle")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"td"},"Vue")," \u6587\u4ef6\u4e2d ",(0,i.kt)("inlineCode",{parentName:"td"},"<script>")," \u548c ",(0,i.kt)("inlineCode",{parentName:"td"},"<style>")," \u6807\u7b7e\u5185\u7684\u5185\u5bb9\u8fdb\u884c\u683c\u5f0f\u5316, \u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"endOfLine")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lf"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"crlf"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"cr"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"auto")),(0,i.kt)("td",{parentName:"tr",align:null},"\u884c\u7ed3\u675f\u683c\u5f0f\uff0c \u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"lf")," , ",(0,i.kt)("inlineCode",{parentName:"td"},"lf")," => ",(0,i.kt)("inlineCode",{parentName:"td"},"\\n")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Linux")," \u3001 ",(0,i.kt)("inlineCode",{parentName:"td"},"macOS")," ",(0,i.kt)("inlineCode",{parentName:"td"},"inside git repos")," \uff1b ",(0,i.kt)("inlineCode",{parentName:"td"},"crlf")," => ",(0,i.kt)("inlineCode",{parentName:"td"},"\\r\\n")," ",(0,i.kt)("inlineCode",{parentName:"td"},"windows")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"cr")," => ",(0,i.kt)("inlineCode",{parentName:"td"},"\\r")," \u5f88\u5c11\u89c1 \uff1b ",(0,i.kt)("inlineCode",{parentName:"td"},"auto")," \u9075\u5faa\u73b0\u6709\u7684 ; ",(0,i.kt)("inlineCode",{parentName:"td"},".editorconfig")," \u4e2d\u4e5f\u53ef\u4ee5\u8bbe ",(0,i.kt)("inlineCode",{parentName:"td"},"end_of_line")," \uff0c\u6700\u7ec8\u9075\u5faa ",(0,i.kt)("inlineCode",{parentName:"td"},"Prettier"),"\uff0c\u9664\u975e\u88ab\u8986\u76d6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"embeddedLanguageFormatting")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"auto"),"or",(0,i.kt)("inlineCode",{parentName:"td"},"off")),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u6587\u4ef6\u4e2d\u5d4c\u5165\u7684\u4ee3\u7801\u683c\u5f0f\u5316\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"td"},"Markdown")," \u4e2d\u7684\u4ee3\u7801\u6bb5, \u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"auto"),"\uff1b ",(0,i.kt)("inlineCode",{parentName:"td"},"auto")," => \u5982\u679c\u80fd\u8bc6\u522b\u5c31\u683c\u5f0f\u5316 ; ",(0,i.kt)("inlineCode",{parentName:"td"},"off")," => \u4e0d\u683c\u5f0f\u5316")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"singleAttributePerLine")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728",(0,i.kt)("inlineCode",{parentName:"td"},"HTML"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Vue"),"\u548c",(0,i.kt)("inlineCode",{parentName:"td"},"JSX"),"\u4e2d\u5f3a\u5236\u6bcf\u884c\u53ea\u6709\u4e00\u4e2a\u5c5e\u6027\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/options.html"},"https://prettier.io/docs/en/options.html"))),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jsxBracketSameLine")," option has been deprecated in v2.4.0, use --bracket-same-line instead"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arrowParens")," First available in ",(0,i.kt)("inlineCode",{parentName:"li"},"v1.9.0"),", default value changed from ",(0,i.kt)("inlineCode",{parentName:"li"},"avoid")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"always")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"v2.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"htmlWhitespaceSensitivity")," \u4f1a\u53d7\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"vetur formatter")," \u7684\u914d\u7f6e\u5f71\u54cd"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," \u6709\u5f88\u591a\u91cd\u5408\u7684\u89c4\u5219\uff0c\u914d\u7f6e\u8d77\u6765\u76f8\u5bf9\u7e41\u7410\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," \u5e26\u6765\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-prettier"),"\uff0c\u5b83\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," \u5f53\u4f5c ",(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," \u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u91cd\u5408\u89c4\u5219\u7684\u90e8\u5206\u9075\u5faa ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier"))),(0,i.kt)("h3",{id:"\u5171\u4eab\u914d\u7f6e"},"\u5171\u4eab\u914d\u7f6e"),(0,i.kt)("p",null,"\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u914d\u7f6e\u4e00\u4e9b\u9879"),(0,i.kt)("h2",{id:"stylelint"},"stylelint"),(0,i.kt)("h2",{id:"eslint"},"ESLint"),(0,i.kt)("h2",{id:"lint-staged"},"lint-staged"),(0,i.kt)("h2",{id:"commitlint"},"commitlint"),(0,i.kt)("h2",{id:"husky"},"husky"),(0,i.kt)("h2",{id:"babel"},"babel"))}k.isMDXComponent=!0}}]);