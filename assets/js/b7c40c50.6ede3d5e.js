"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5193],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(t),m=i,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return t?r.createElement(d,s(s({ref:n},c),{},{components:t})):r.createElement(d,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={},s="\u521d\u63a2Travis CI: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72",o={unversionedId:"front-end-engineering/travis-ci-for-vuepress",id:"front-end-engineering/travis-ci-for-vuepress",title:"\u521d\u63a2Travis CI: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72",description:"\u80cc\u666f",source:"@site/docs/front-end-engineering/travis-ci-for-vuepress.md",sourceDirName:"front-end-engineering",slug:"/front-end-engineering/travis-ci-for-vuepress",permalink:"/docs/front-end-engineering/travis-ci-for-vuepress",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-engineering/travis-ci-for-vuepress.md",tags:[],version:"current",frontMatter:{},sidebar:"front-end-engineering",next:{title:"\u521d\u63a2GitHub Actions: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72",permalink:"/docs/front-end-engineering/github-action-for-vuepress"}},l={},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u5b89\u88c5\u914d\u7f6eVuePress",id:"\u5b89\u88c5\u914d\u7f6evuepress",level:2},{value:"\u96c6\u6210Travis CI",id:"\u96c6\u6210travis-ci",level:2},{value:"\u521b\u5efa.travis.yml",id:"\u521b\u5efatravisyml",level:3},{value:"\u8bbe\u7f6egithub",id:"\u8bbe\u7f6egithub",level:3},{value:"\u624b\u52a8\u521b\u5efa\u4e00\u4e2agh-pages\u5206\u652f",id:"\u624b\u52a8\u521b\u5efa\u4e00\u4e2agh-pages\u5206\u652f",level:4},{value:"\u521b\u5efagithub token",id:"\u521b\u5efagithub-token",level:4},{value:"\u914d\u7f6eTravis CI",id:"\u914d\u7f6etravis-ci",level:3},{value:"\u4ed3\u5e93\u6388\u6743",id:"\u4ed3\u5e93\u6388\u6743",level:4},{value:"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e",id:"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e",level:4},{value:"\u6d4b\u8bd5\u6548\u679c",id:"\u6d4b\u8bd5\u6548\u679c",level:3},{value:"Reference",id:"reference",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521d\u63a2travis-ci-\u5b9e\u73b0vuepress\u81ea\u52a8\u5316\u90e8\u7f72"},"\u521d\u63a2Travis CI: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72"),(0,i.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,i.kt)("p",null,"\u4e4b\u524d\u4f7f\u7528VuePress\u5199\u535a\u5ba2\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5199md\u6587\u6863")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"\u63d0\u4ea4github")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4f7f\u7528\u914d\u597d\u7684deploy.sh\u6587\u4ef6\u53d1\u5e03"),"\u8fd9\u6837\u4e00\u4e2a\u6d41\u7a0b\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.sh\u6587\u4ef6"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env sh\n\n# \u786e\u4fdd\u811a\u672c\u629b\u51fa\u9047\u5230\u7684\u9519\u8bef\nset -e\n\n# \u751f\u6210\u9759\u6001\u6587\u4ef6\nnpm run docs:build\n\n# \u8fdb\u5165\u751f\u6210\u7684\u6587\u4ef6\u5939\ncd docs/.vuepress/dist\n# git init \u5b98\u7f51\u662f\u6709\u8fd9\u884c\u7684\uff0c\u4f46\u6211\u7684\u9879\u76ee\u91cc\u7ed9\u6ce8\u91ca\u6389\u4e86\uff0c\u56e0\u4e3a\u6211\u662f\u73b0\u6709\u9879\u76ee\uff0c\u4e0d\u60f3\u6bcf\u6b21\u90fd\u521d\u59cb\u5316\n\ngit init\ngit add -A\ngit commit -m \'deploy\'\ngit config --local user.name "fxpby"\ngit config --local user.email "fxpby@outlook.com"\ngit push -f https://github.com/fxpby/myblog.git master:gh-pages\n\n# cd -\n')),(0,i.kt)("p",null,"\u867d\u7136\u5df2\u7ecf\u534a\u81ea\u52a8\u5316\u4e86\uff0c\u4f46\u662f\u611f\u89c9\u8fd8\u662f\u6709\u4e9b\u9ebb\u70e6\u7684\uff0c\u8981\u662f\u53ef\u4ee5\u4ee3\u7801push\u540e\u81ea\u52a8\u90e8\u7f72\u53d1\u5e03\u5c31\u8212\u670d\u4e86\uff0c\u641c\u4e86\u4e0b\u76f8\u5173\u8d44\u6599\uff0c\u770b\u4e0a\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"Travis CI"),"\uff0c\u539f\u56e0\u662f\u89c9\u5f97\u4ed6logo\u6bd4\u8f83\u9177\ud83d\ude0e\uff0c\u54c8\u54c8\uff0c\u5176\u5b9e\u662f\u56e0\u4e3a\u914d\u7f6e\u7b80\u6d01\uff0c\u5e02\u573a\u4efd\u989d\u5927\uff0c\u8fd8\u514d\u8d39\ud83e\udd1e\u3002"),(0,i.kt)("h2",{id:"\u5b89\u88c5\u914d\u7f6evuepress"},"\u5b89\u88c5\u914d\u7f6eVuePress"),(0,i.kt)("p",null,"\u563f\u563f\uff0c\u8bf4\u58f0\u62b1\u6b49\uff0cVuePress\u5982\u4f55\u5b89\u88c5\u914d\u7f6e\u8fd9\u91cc\u5c31\u4e0d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\uff0c\u5b98\u7f51\u6587\u6863\u8be6\u7ec6\u7684\uff0c\u672c\u6587\u4e3b\u89d2\u662f\u96c6\u6210Travis CI\ud83d\ude07\uff0cvitepress\u4e5f\u51fa\u6765\u597d\u4e45\u4e86\uff0c\u56de\u5934\u611f\u5174\u8da3\u4e5f\u53bb\u8bd5\u8bd5\u4ed6\u3002"),(0,i.kt)("h2",{id:"\u96c6\u6210travis-ci"},"\u96c6\u6210Travis CI"),(0,i.kt)("p",null,"Travis CI\u4f7f\u7528\u5b83\u7684\u524d\u63d0\u662f\uff1a  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6709github\u8d26\u53f7\uff08\u76ee\u524dbitbucket\u3001gitlab\u548cassembla\u597d\u50cf\u4e5f\u652f\u6301\u4e86\uff09  "),(0,i.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u91cc\u6709\u9879\u76ee"),(0,i.kt)("li",{parentName:"ul"},"\u9879\u76ee\u91cc\u4ee3\u7801\u53ef\u4ee5\u8dd1"),(0,i.kt)("li",{parentName:"ul"},"\u9879\u76ee\u5305\u542b\u6784\u5efa\u811a\u672c")),(0,i.kt)("h3",{id:"\u521b\u5efatravisyml"},"\u521b\u5efa.travis.yml"),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml"),"\u6587\u4ef6\uff0c\u524d\u9762\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"."),"\u54e6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'language: node_js\nnode_js:\n  - lts/*\ninstall:\n  - npm install\ncache:\n  directories:\n    - "node_modules"\nscript:\n  - npm run docs:build\ndeploy:\n  provider: pages\n  skip-cleanup: true \n  local_dir: docs/.vuepress/dist \n  github-token: $GITHUB_TOKEN # a token generated on github allowing travis to push code on you repository\n  keep-history: true\n  on:\n    branch: master\n')),(0,i.kt)("h3",{id:"\u8bbe\u7f6egithub"},"\u8bbe\u7f6egithub"),(0,i.kt)("h4",{id:"\u624b\u52a8\u521b\u5efa\u4e00\u4e2agh-pages\u5206\u652f"},"\u624b\u52a8\u521b\u5efa\u4e00\u4e2agh-pages\u5206\u652f"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Source"),"\u4e2d\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages"),"\u5206\u652f\uff0c\u4ee5\u540e\u6211\u4eec\u751f\u6210\u7684\u9759\u6001\u6587\u4ef6\u5b58\u653e\u5728\u8fd9\u91cc"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/github-page.png",alt:"github-pages-config"})),(0,i.kt)("h4",{id:"\u521b\u5efagithub-token"},"\u521b\u5efagithub token"),(0,i.kt)("p",null,"\u70b9\u51fb\u6211\u4eec\u53f3\u4e0a\u89d2\u7684\u4e2a\u4eba\u5934\u50cf\uff0c\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/github-setting.png",alt:"settings"})),(0,i.kt)("p",null,"\u6765\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Developer settings"),"\uff0c\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"Personal access tokens"),"\uff0c \u518d\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"Generate new token")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/setting-personal-access-tokens.png",alt:"Personal access tokens"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/generate-new-token.png",alt:"generate new token"})),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u9009\u62e9\u6743\u9650, ",(0,i.kt)("inlineCode",{parentName:"p"},"Note"),"\u968f\u4fbf\u5199\uff0c\u4e0b\u9762\u6743\u9650\u7684\u8bdd\u52fe\u9009\u5982\u56fe\u6240\u793a\uff0c\u4fdd\u5b58\u540e\u4f1a\u5f97\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Personal access tokens"),"\u4e00\u4e2atoken\u4e32\uff0c\u53ea\u5c55\u793a\u4e00\u6b21\uff0c\u8fd9\u4e2a\u8bf7\u59a5\u5584\u4fdd\u5b58\uff0c\u4ee5\u540e\u5982\u679c\u60f3\u8bbf\u95ee\u9700\u8981\u66f4\u65b0"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/select-access.png",alt:"select oauth"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/access-tokens.png",alt:"access-tokens"})),(0,i.kt)("h3",{id:"\u914d\u7f6etravis-ci"},"\u914d\u7f6eTravis CI"),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86\u9879\u76ee\uff0c\u6709\u4e86\u6784\u5efa\u811a\u672c\uff0c\u6709\u4e86github\u7684token, \u8fd8\u5dee\u5bf9Travis CI\u8fdb\u884c\u4e00\u4e9b\u914d\u7f6e\uff0c\u79bb\u6210\u529f\u53ea\u5dee\u4e00\u6b65\ud83e\udd29"),(0,i.kt)("p",null,"\u9996\u5148\u5462\u6ce8\u518c\u767b\u5f55Travis CI ",(0,i.kt)("a",{parentName:"p",href:"https://app.travis-ci.com/"},"https://app.travis-ci.com/")),(0,i.kt)("h4",{id:"\u4ed3\u5e93\u6388\u6743"},"\u4ed3\u5e93\u6388\u6743"),(0,i.kt)("p",null,"\u5bf9github\u4ed3\u5e93\u8fdb\u884c\u6388\u6743\uff0c\u53ef\u4ee5\u9009\u62e9\u6240\u6709\u6216\u8005\u6307\u5b9a\u4ed3\u5e93"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/repository-access.png",alt:"repo-access"})),(0,i.kt)("h4",{id:"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e"},"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u9009\u62e9\u6211\u4eecgithub\u4e2d\u7684\u76ee\u6807\u4ed3\u5e93\uff0c\u6765\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Environment Variables"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"NAME"),"\u586b\u5199\u4e4b\u524d\u6211\u4eec\u5728",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml"),"\u4e2d\u5199\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"github-token")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN"),"\uff0c\u8fd8\u8bb0\u5f97\u4e0a\u4e00\u6b65",(0,i.kt)("inlineCode",{parentName:"p"},"Personal access tokens"),"\u5f97\u5230\u7684token\u4e32\u5417\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"VALUE"),"\u8fd9\u91cc\u628a\u5b83\u586b\u8fdb\u53bb\uff0c\u540e\u9762\u7684\u5f00\u5173\u4e5f\u6253\u5f00\uff0c\u6700\u540e\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"Add"),"\u6309\u94ae"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/environment-variables.png",alt:"environment-variables"})),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u6240\u6709\u914d\u7f6e\u5df2\u7ecf\u5b8c\u6210\uff0c\u6765\u8bd5\u4e00\u4e0b\u6548\u679c\ud83d\ude09"),(0,i.kt)("h3",{id:"\u6d4b\u8bd5\u6548\u679c"},"\u6d4b\u8bd5\u6548\u679c"),(0,i.kt)("p",null,"\u4fee\u6539\u4ee3\u7801\uff0cpush\u4e0a\u53bb\uff0c\u5728Travis CI\u4f1a\u770b\u5230\u6784\u5efa\u65e5\u5fd7\uff0c\u6700\u7ec8\u5f97\u5230\u6784\u5efa\u6210\u529f\u7684\u63a8\u9001\uff0c\u4e0d\u5230\u4e24\u5206\u949f\uff0c\u8fd8\u662f\u86ee\u5feb\u7684\u5462\ud83e\udd73\n",(0,i.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/build-success.png",alt:"build-success"})),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"},"https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"),"\n",(0,i.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html"},"http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html"))))}u.isMDXComponent=!0}}]);