"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=i,c=u["".concat(o,".").concat(k)]||u[k]||s[k]||a;return n?r.createElement(c,l(l({ref:t},m),{},{components:n})):r.createElement(c,l({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={id:"build-frontend-project-standardization",title:"\u642d\u5efa\u524d\u7aef\u5de5\u7a0b\u9879\u76ee - \u89c4\u8303\u7bc7",tags:["\u5de5\u7a0b\u5316"]},l=void 0,p={unversionedId:"front-end-engineering/build-frontend-project-standardization",id:"front-end-engineering/build-frontend-project-standardization",title:"\u642d\u5efa\u524d\u7aef\u5de5\u7a0b\u9879\u76ee - \u89c4\u8303\u7bc7",description:"\u524d\u8a00",source:"@site/docs/front-end-engineering/build-frontend-project-standardization.md",sourceDirName:"front-end-engineering",slug:"/front-end-engineering/build-frontend-project-standardization",permalink:"/myblog/docs/front-end-engineering/build-frontend-project-standardization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-engineering/build-frontend-project-standardization.md",tags:[{label:"\u5de5\u7a0b\u5316",permalink:"/myblog/docs/tags/\u5de5\u7a0b\u5316"}],version:"current",frontMatter:{id:"build-frontend-project-standardization",title:"\u642d\u5efa\u524d\u7aef\u5de5\u7a0b\u9879\u76ee - \u89c4\u8303\u7bc7",tags:["\u5de5\u7a0b\u5316"]},sidebar:"front-end-engineering",previous:{title:"\u521d\u63a2GitHub Actions: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72",permalink:"/myblog/docs/front-end-engineering/github-action-for-vuepress"}},o={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u73af\u5883\u4ecb\u7ecd",id:"\u73af\u5883\u4ecb\u7ecd",level:2},{value:"\ud83c\udf84\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"\ud83d\udcd0Prettier",id:"prettier",level:2},{value:"Prettier \u662f\u4ec0\u4e48",id:"prettier-\u662f\u4ec0\u4e48",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 Prettier",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-prettier",level:3},{value:"Prettier \u5c0f\u8bd5\u725b\u5200",id:"prettier-\u5c0f\u8bd5\u725b\u5200",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",level:3},{value:"overrides \u8986\u76d6\u914d\u7f6e",id:"overrides-\u8986\u76d6\u914d\u7f6e",level:3},{value:"\u683c\u5f0f\u5316\u9009\u9879",id:"\u683c\u5f0f\u5316\u9009\u9879",level:3},{value:"\u5171\u4eab\u914d\u7f6e",id:"\u5171\u4eab\u914d\u7f6e",level:3},{value:"stylelint",id:"stylelint",level:2},{value:"ESLint",id:"eslint",level:2},{value:"lint-staged",id:"lint-staged",level:2},{value:"commitlint",id:"commitlint",level:2},{value:"husky",id:"husky",level:2},{value:"babel",id:"babel",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("h2",{id:"\u73af\u5883\u4ecb\u7ecd"},"\u73af\u5883\u4ecb\u7ecd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OS\uff1awindow 10"),(0,i.kt)("li",{parentName:"ul"},"node: 14.15.1"),(0,i.kt)("li",{parentName:"ul"},"npm: 6.14.8")),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316\u9879\u76ee"},"\ud83c\udf84\u521d\u59cb\u5316\u9879\u76ee"),(0,i.kt)("p",null,"\u9996\u5148\u6211\u4eec\u521d\u59cb\u5316\u9879\u76ee\uff0c\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939 npm \u521d\u59cb\u5316\uff0c\u5e76\u5728\u91cc\u9762\u5199\u4e00\u4e9b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd .\\fe-demo\\\npnpm init\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/build-frontend-project-standardization/init-program.png",alt:"init-program"})),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," \u76ee\u5f55\u5e76\u5728\u91cc\u9762\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," \u6587\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>fe-demo</title>\n</head>\n<body>\n  <h1>hello, world</h1><p>\u6211\u6ca1\u6709\u6362\u884c\u54e6</p>\n</body>\n</html>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"const fn = () => {\nconst a=1\n             const b=2\n  return   a+   b\n}\n")),(0,i.kt)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e86\u4e24\u4e2a\u6587\u4ef6\uff0c\u4f46\u662f\u91cc\u9762\u7684\u4ee3\u7801\u98ce\u683c\u770b\u8d77\u6765\u4e00\u8a00\u96be\u5c3d\uff0c\u6ca1\u5173\u7cfb\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u4f7f\u7528\u9b54\u6cd5\u6539\u53d8\u4ed6\u4eec\u2728"),(0,i.kt)("h2",{id:"prettier"},"\ud83d\udcd0Prettier"),(0,i.kt)("h3",{id:"prettier-\u662f\u4ec0\u4e48"},"Prettier \u662f\u4ec0\u4e48"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Prettier")," \u53ef\u4ee5\u683c\u5f0f\u5316\u6211\u4eec\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u5b98\u7f51\u4e0a\u6307\u51fa\u652f\u6301\u7684\u683c\u5f0f\u6709\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JavaScript (including experimental features)"),(0,i.kt)("li",{parentName:"ul"},"JSX"),(0,i.kt)("li",{parentName:"ul"},"Angular"),(0,i.kt)("li",{parentName:"ul"},"Vue"),(0,i.kt)("li",{parentName:"ul"},"Flow"),(0,i.kt)("li",{parentName:"ul"},"TypeScript"),(0,i.kt)("li",{parentName:"ul"},"CSS, Less, and SCSS"),(0,i.kt)("li",{parentName:"ul"},"HTML"),(0,i.kt)("li",{parentName:"ul"},"Ember/Handlebars"),(0,i.kt)("li",{parentName:"ul"},"JSON"),(0,i.kt)("li",{parentName:"ul"},"GraphQL"),(0,i.kt)("li",{parentName:"ul"},"Markdown, including GFM and MDX"),(0,i.kt)("li",{parentName:"ul"},"YAML")),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-prettier"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 Prettier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Building and enforcing a style guide"),(0,i.kt)("li",{parentName:"ul"},"Helping Newcomers"),(0,i.kt)("li",{parentName:"ul"},"Writing code"),(0,i.kt)("li",{parentName:"ul"},"Easy to adopt"),(0,i.kt)("li",{parentName:"ul"},"Clean up an existing codebase"),(0,i.kt)("li",{parentName:"ul"},"Ride the hype train")),(0,i.kt)("h3",{id:"prettier-\u5c0f\u8bd5\u725b\u5200"},"Prettier \u5c0f\u8bd5\u725b\u5200"),(0,i.kt)("p",null,"\u6765\u5230\u6211\u4eec\u521a\u624d\u521d\u59cb\u5316\u7684\u9879\u76ee\uff0c\u5b89\u88c5\u6211\u4eec\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Prettier")," \u63d2\u4ef6\u5427"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install prettier -D\n")),(0,i.kt)("p",null,"\u89c1\u8bc1\u5947\u8ff9\u7684\u65f6\u523b\u5230\u4e86\uff0c\u6211\u4eec\u6267\u884c\u547d\u4ee4, \u8be5\u547d\u4ee4\u4f1a\u683c\u5f0f\u5316\u6240\u6709\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm prettier --write .\n")),(0,i.kt)("p",null,"\u554a\u8fd9\uff0c\u4e00\u5b9a\u662f\u9b54\u6cd5\uff0c\u6211\u4eec\u7684\u4e24\u4e2a\u6587\u4ef6\u5206\u522b\u53d8\u6210\u4e86\u8fd9\u4e2a\u6837\u5b50\uff0c\u53d1\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"p\u6807\u7b7e"),"\u6362\u884c\u4e86\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.js")," \u4e2d\u7684\u53d8\u91cf\u4e24\u7aef\u90fd\u52a0\u4e0a\u4e86\u7a7a\u683c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>fe-demo</title>\n  </head>\n  <body>\n    <h1>hello, world</h1>\n    <p>\u6211\u6ca1\u6709\u6362\u884c\u54e6</p>\n  </body>\n</html>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'},"const fn = () => {\n  const a = 1;\n  const b = 2;\n  return a + b;\n};\n")),(0,i.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},".prettierrc")," \u6587\u4ef6\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"js"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"json")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"yaml")," \u6587\u4ef6\u5747\u53ef",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'A "prettier" key in your package.json file.'),(0,i.kt)("li",{parentName:"ul"},"A .prettierrc file written in JSON or YAML."),(0,i.kt)("li",{parentName:"ul"},"A .prettierrc.json, .prettierrc.yml, .prettierrc.yaml, or .prettierrc.json5 file."),(0,i.kt)("li",{parentName:"ul"},"A .prettierrc.js, .prettierrc.cjs, prettier.config.js, or prettier.config.cjs file that ",(0,i.kt)("strong",{parentName:"li"},"exports an object using module.exports"),"."),(0,i.kt)("li",{parentName:"ul"},"A .prettierrc.toml file."))),(0,i.kt)("li",{parentName:"ul"},"\u7ee7\u7eed\u65b0\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},".prettierignore")," \u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u7684\u4f5c\u7528\u662f\u4f7f\u6211\u4eec\u7684\u683c\u5f0f\u5316\u64cd\u4f5c",(0,i.kt)("strong",{parentName:"li"},"\u5ffd\u7565"),"\u5305\u542b\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939,",(0,i.kt)("inlineCode",{parentName:"li"},".prettierignore")," \u6587\u4ef6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"gitignore syntax")," \u8bed\u6cd5\u7f16\u5199")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore#_pattern_format"},"https://git-scm.com/docs/gitignore#_pattern_format"))),(0,i.kt)("h3",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),(0,i.kt)("p",null,"JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "trailingComma": "es5",\n  "tabWidth": 4,\n  "semi": false,\n  "singleQuote": true\n}\n')),(0,i.kt)("p",null,"JS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// prettier.config.js or .prettierrc.js\nmodule.exports = {\n  trailingComma: "es5",\n  tabWidth: 4,\n  semi: false,\n  singleQuote: true,\n};\n')),(0,i.kt)("p",null,"YAML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prettierrc or .prettierrc.yaml\ntrailingComma: "es5"\ntabWidth: 4\nsemi: false\nsingleQuote: true\n')),(0,i.kt)("h3",{id:"overrides-\u8986\u76d6\u914d\u7f6e"},"overrides \u8986\u76d6\u914d\u7f6e"),(0,i.kt)("p",null,"overrides \u914d\u7f6e\u53ef\u4ee5\u8ba9\u6211\u4eec\u8986\u76d6\u539f\u6709\u89c4\u5219\u8fdb\u884c\u4e00\u4e9b\u7279\u6b8a\u5904\u7406\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," \u683c\u5f0f\u652f\u6301\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"[]string")),(0,i.kt)("p",null,"\u4e3e\u4e2a\u6817\u5b50\uff0c\u6309\u7167\u4e0b\u65b9\u914d\u7f6e\u5199\u7684\u8bdd\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"*.test.js")," \u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"*.html")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"legacy/**/*.js")," \u5c31\u4f1a\u9075\u5faa ",(0,i.kt)("inlineCode",{parentName:"p"},"overrides")," \u4e2d\u7684\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semi": false,\n  "overrides": [\n    {\n      "files": "*.test.js",\n      "options": {\n        "semi": true\n      }\n    },\n    {\n      "files": ["*.html", "legacy/**/*.js"],\n      "options": {\n        "tabWidth": 4\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"\u683c\u5f0f\u5316\u9009\u9879"},"\u683c\u5f0f\u5316\u9009\u9879"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"options"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"printWidth")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<int>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bcf\u884c\u4ee3\u7801\u957f\u5ea6\uff0c\u9ed8\u8ba4 80\uff0c \u5b98\u65b9\u5efa\u8bae 80 \u53ca\u4ee5\u4e0a\uff1b\u5728 ",(0,i.kt)("inlineCode",{parentName:"td"},".editorconfig")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"max_line_length")," \u4e5f\u4f1a\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"Prettier")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"printWidth"),", \u9664\u975e\u88ab\u8986\u76d6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tabWidth")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<int>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a",(0,i.kt)("inlineCode",{parentName:"td"},"tab"),"\u76f8\u5f53\u4e8e\u591a\u5c11\u4e2a\u7a7a\u683c\uff0c\u9ed8\u8ba4 2\uff1b\u5728 ",(0,i.kt)("inlineCode",{parentName:"td"},".editorconfig")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"indent_size")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"td"},"tab_width")," \u4e5f\u4f1a\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"td"},"Prettier")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"tabWidth"),", \u9664\u975e\u88ab\u8986\u76d6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Tabs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<bool>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"td"},"tab")," \u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"td"},"space")," \u8fdb\u884c\u7f29\u8fdb\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("p",null,"TODO"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/options.html"},"https://prettier.io/docs/en/options.html"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," \u6709\u5f88\u591a\u91cd\u5408\u7684\u89c4\u5219\uff0c\u914d\u7f6e\u8d77\u6765\u76f8\u5bf9\u7e41\u7410\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," \u5e26\u6765\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-prettier"),"\uff0c\u5b83\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," \u5f53\u4f5c ",(0,i.kt)("inlineCode",{parentName:"p"},"ESLint")," \u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u91cd\u5408\u89c4\u5219\u7684\u90e8\u5206\u9075\u5faa ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier"))),(0,i.kt)("h3",{id:"\u5171\u4eab\u914d\u7f6e"},"\u5171\u4eab\u914d\u7f6e"),(0,i.kt)("p",null,"\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u914d\u7f6e\u4e00\u4e9b\u9879"),(0,i.kt)("h2",{id:"stylelint"},"stylelint"),(0,i.kt)("h2",{id:"eslint"},"ESLint"),(0,i.kt)("h2",{id:"lint-staged"},"lint-staged"),(0,i.kt)("h2",{id:"commitlint"},"commitlint"),(0,i.kt)("h2",{id:"husky"},"husky"),(0,i.kt)("h2",{id:"babel"},"babel"))}s.isMDXComponent=!0}}]);