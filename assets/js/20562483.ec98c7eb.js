"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[908],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(t),m=s,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},23633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const o={},a="\u521d\u63a2GitHub Actions: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72",i={unversionedId:"front-end-engineering/github-action-for-vuepress",id:"front-end-engineering/github-action-for-vuepress",title:"\u521d\u63a2GitHub Actions: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72",description:"\u80cc\u666f",source:"@site/docs/front-end-engineering/github-action-for-vuepress.md",sourceDirName:"front-end-engineering",slug:"/front-end-engineering/github-action-for-vuepress",permalink:"/myblog/docs/front-end-engineering/github-action-for-vuepress",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end-engineering/github-action-for-vuepress.md",tags:[],version:"current",frontMatter:{},sidebar:"front-end-engineering",previous:{title:"\u521d\u63a2Travis CI: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72",permalink:"/myblog/docs/front-end-engineering/travis-ci-for-vuepress"},next:{title:"\u642d\u5efa\u524d\u7aef\u5de5\u7a0b\u9879\u76ee - \u89c4\u8303\u7bc7",permalink:"/myblog/docs/front-end-engineering/build-frontend-project-standardization"}},l={},c=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"GitHub Actions\u662f\u4ec0\u4e48",id:"github-actions\u662f\u4ec0\u4e48",level:2},{value:"\u96c6\u6210 GitHub Actions \u90e8\u7f72\u5230 GitHub Page",id:"\u96c6\u6210-github-actions-\u90e8\u7f72\u5230-github-page",level:2},{value:"\u8bbe\u7f6egithub",id:"\u8bbe\u7f6egithub",level:3},{value:"\u624b\u52a8\u521b\u5efa\u4e00\u4e2agh-pages\u5206\u652f",id:"\u624b\u52a8\u521b\u5efa\u4e00\u4e2agh-pages\u5206\u652f",level:4},{value:"\u521b\u5efagithub token",id:"\u521b\u5efagithub-token",level:3},{value:"\u8bbe\u7f6eActions secrets",id:"\u8bbe\u7f6eactions-secrets",level:3},{value:"\u521b\u5efaxx.yml\u6587\u4ef6",id:"\u521b\u5efaxxyml\u6587\u4ef6",level:3},{value:"action cache \u914d\u7f6e",id:"action-cache-\u914d\u7f6e",level:3},{value:"\u96c6\u6210 GitHub Actions \u90e8\u7f72\u5230\u963f\u91cc\u4e91",id:"\u96c6\u6210-github-actions-\u90e8\u7f72\u5230\u963f\u91cc\u4e91",level:2},{value:"\u521b\u5efa\u963f\u91cc\u4e91\u5bc6\u94a5\u5bf9",id:"\u521b\u5efa\u963f\u91cc\u4e91\u5bc6\u94a5\u5bf9",level:3},{value:"\u521b\u5efa\u914d\u7f6e.yml\u6587\u4ef6",id:"\u521b\u5efa\u914d\u7f6eyml\u6587\u4ef6",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"Reference",id:"reference",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u521d\u63a2github-actions-\u5b9e\u73b0vuepress\u81ea\u52a8\u5316\u90e8\u7f72"},"\u521d\u63a2GitHub Actions: \u5b9e\u73b0VuePress\u81ea\u52a8\u5316\u90e8\u7f72"),(0,s.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,s.kt)("p",null,"\u4e4b\u524d\u5199\u4e86\u7bc7\u4ecb\u7ecd\u7528Travis CI\u81ea\u52a8\u5316\u90e8\u7f72\u7684\uff0c\u8c01\u77e5\u3002\u3002\u3002\u4ed6\u7adf\u7136\u3001\u7adf\u7136\u6536\u8d39\u4e86\ud83d\ude2d, \u9759\u8339\u59d0\u59d0\u7ed9\u6211\u7684\u52c7\u6c14\u770b\u4e86\u4e00\u773c\u8d39\u7528, \u6ca1\u773c\u770b, \u6211\u4e0d\u914d\ud83d\ude25"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/expensive.png",alt:"expensive"})),(0,s.kt)("p",null,"\u5df2\u7ecf\u9677\u5165\u81ea\u52a8\u5316\u90e8\u7f72\u6e29\u5e8a\u7684\u6211, \u7acb\u523b\u5c31\u53bb\u5bfb\u627e\u66ff\u4ee3\u54c1\u4e86, \u4eca\u5929\u8bd5\u4e00\u4e0b\u8fd9\u4e2aGitHub Actions\u5427~"),(0,s.kt)("h2",{id:"github-actions\u662f\u4ec0\u4e48"},"GitHub Actions\u662f\u4ec0\u4e48"),(0,s.kt)("p",null,"actions\u89c1\u540d\u77e5\u610f\u662f\u4e00\u5806\u52a8\u4f5c, \u8fd9\u4e00\u7cfb\u5217\u7684\u52a8\u4f5c\u5305\u62ec\u4e86pull\u4ee3\u7801, \u6d4b\u8bd5\u4ee3\u7801, \u7f16\u8bd1\u4ee3\u7801, \u767b\u9646\u670d\u52a1\u5668, \u53d1\u5e03\u7b2c\u4e09\u65b9\u670d\u52a1\u7b49\u64cd\u4f5c, GitHub\u628a\u8fd9\u4e9b\u884c\u4e3a\u53eb\u505aactions"),(0,s.kt)("h2",{id:"\u96c6\u6210-github-actions-\u90e8\u7f72\u5230-github-page"},"\u96c6\u6210 GitHub Actions \u90e8\u7f72\u5230 GitHub Page"),(0,s.kt)("h3",{id:"\u8bbe\u7f6egithub"},"\u8bbe\u7f6egithub"),(0,s.kt)("h4",{id:"\u624b\u52a8\u521b\u5efa\u4e00\u4e2agh-pages\u5206\u652f"},"\u624b\u52a8\u521b\u5efa\u4e00\u4e2agh-pages\u5206\u652f"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"Source"),"\u4e2d\u9009\u62e9",(0,s.kt)("inlineCode",{parentName:"p"},"gh-pages"),"\u5206\u652f\uff0c\u4ee5\u540e\u6211\u4eec\u751f\u6210\u7684\u9759\u6001\u6587\u4ef6\u5b58\u653e\u5728\u8fd9\u91cc"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/github-page.png",alt:"github-pages-config"})),(0,s.kt)("h3",{id:"\u521b\u5efagithub-token"},"\u521b\u5efagithub token"),(0,s.kt)("p",null,"\u70b9\u51fb\u6211\u4eec\u53f3\u4e0a\u89d2\u7684\u4e2a\u4eba\u5934\u50cf\uff0c\u70b9\u51fb",(0,s.kt)("inlineCode",{parentName:"p"},"Settings")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/github-setting.png",alt:"user-settings"})),(0,s.kt)("p",null,"\u6765\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"Developer settings"),"\uff0c\u70b9\u51fb",(0,s.kt)("inlineCode",{parentName:"p"},"Personal access tokens"),"\uff0c \u518d\u70b9\u51fb",(0,s.kt)("inlineCode",{parentName:"p"},"Generate new token")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/setting-personal-access-tokens.png",alt:"Personal access tokens"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/generate-new-token.png",alt:"generate new token"})),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\u9009\u62e9\u6743\u9650, ",(0,s.kt)("inlineCode",{parentName:"p"},"Note"),"\u968f\u4fbf\u5199\uff0c\u4e0b\u9762\u6743\u9650\u7684\u8bdd\u52fe\u9009\u5982\u56fe\u6240\u793a\uff0c\u4fdd\u5b58\u540e\u4f1a\u5f97\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"Personal access tokens"),"\u4e00\u4e2atoken\u4e32\uff0c\u53ea\u5c55\u793a\u4e00\u6b21\uff0c\u8fd9\u4e2a\u8bf7\u59a5\u5584\u4fdd\u5b58\uff0c\u4ee5\u540e\u5982\u679c\u60f3\u8bbf\u95ee\u9700\u8981\u66f4\u65b0"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/select-access.png",alt:"select oauth"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/access-tokens.png",alt:"access-tokens"})),(0,s.kt)("p",null,"\u6211\u4eec\u4fdd\u5b58\u4e00\u4e0b\u8fd9\u4e2atoken, \u4e00\u4f1a\u513f\u8981\u7528"),(0,s.kt)("h3",{id:"\u8bbe\u7f6eactions-secrets"},"\u8bbe\u7f6eActions secrets"),(0,s.kt)("p",null,"name\u586b\u5199ACCESS_TOKEN, value\u586b\u5199\u521a\u624d\u4fdd\u5b58\u7684token"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/new-secret.png",alt:"new-secret"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/assce-token.png",alt:"acess-token"})),(0,s.kt)("h3",{id:"\u521b\u5efaxxyml\u6587\u4ef6"},"\u521b\u5efaxx.yml\u6587\u4ef6"),(0,s.kt)("p",null,"\u9879\u76ee\u4e2d\u81ea\u5df1\u624b\u52a8\u65b0\u5efa.yml \u6587\u4ef6\u540d\u968f\u610f\u8d77,github\u4f1a\u81ea\u52a8\u8fd0\u884cworkflows\u76ee\u5f55\u4e0b\u6240\u6709\u7684yml\u6587\u4ef6, \u5176\u4e2dworkflow\u4e2d\u7684\u4e00\u4e9b\u914d\u7f6e\u6bd4\u8f83\u91cd\u8981:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"name: workflow \u7684\u540d\u79f0\u3002\u5982\u679c\u7701\u7565\u8be5\u5b57\u6bb5\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d workflow \u7684\u6587\u4ef6\u540d")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"on: \u89e6\u53d1workflow\u7684\u6761\u4ef6, \u6bd4\u5982push\u5c31\u662f git push \u65f6\u89e6\u53d1\u8fd9\u4e2aworkflow")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"jobs: \u5305\u542bworkflow\u8981\u6267\u884c\u7684\u4efb\u52a1"))),(0,s.kt)("p",null,"ci.yml\u5168\u90e8\u914d\u7f6e\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'# This is a basic workflow to help you get started with Actions\n\nname: CI\n\n# Controls when the workflow will run\non:\n  # Triggers the workflow on push or pull request events but only for the master branch\n  push:\n    branches: [master]\n  pull_request:\n    branches: [master]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  # This workflow contains a single job called "build"\n  build:\n    # The type of runner that the job will run on\n    runs-on: ubuntu-latest\n\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - name: Checkout \ud83d\udc24\n        uses: actions/checkout@v2\n\n      # Runs a single command using the runners shell\n      # - name: Install and Build \ud83c\udf84\n      # run: npm install && npm run docs:build\n\n      # Runs a set of commands using the runners shell\n      - name: Install and Build \ud83c\udf84\n        run: |\n          npm install\n          npm run docs:build\n\n      - name: Deploy \ud83d\ude80\n        uses: JamesIves/github-pages-deploy-action@releases/v3\n        with:\n          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}\n          BRANCH: gh-pages\n          FOLDER: docs/.vuepress/dist\n')),(0,s.kt)("h3",{id:"action-cache-\u914d\u7f6e"},"action cache \u914d\u7f6e"),(0,s.kt)("p",null,"npm"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"# \u7f13\u5b58 npm node_modules\n- name: Cache dependencies\n  uses: actions/cache@v3\n  with:\n    path: ~/.npm\n    key: ${{ runner.os }}-npm-cache-${{ hashFiles('**/package-lock.json') }}\n    restore-keys: |\n      ${{ runner.os }}-npm-cache-\n\n# \u5b89\u88c5\u4f9d\u8d56 npm\n- name: Install dependencies\n  # \u5982\u679c\u6ca1\u6709\u547d\u4e2d\u7f13\u5b58\u624d\u6267\u884c npm install\n  if: steps.cache-deps.outputs.cache-hit != 'true'\n  run: npm install\n")),(0,s.kt)("p",null,"yarn"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"# \u7f13\u5b58 yarn node_modules\n- name: Cache dependencies\n  uses: actions/cache@v3\n  id: yarn-cache\n  with:\n    path: |\n      **/node_modules\n    key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}\n    restore-keys: |\n      ${{ runner.os }}-yarn-\n\n# \u5b89\u88c5\u4f9d\u8d56 yarn\n- name: Install dependencies\n  # \u5982\u679c\u6ca1\u6709\u547d\u4e2d\u7f13\u5b58\u624d\u6267\u884c npm install\n  if: steps.npm-cache.outputs.cache-hit != 'true'\n  run: yarn --frozen-lockfile\n")),(0,s.kt)("h2",{id:"\u96c6\u6210-github-actions-\u90e8\u7f72\u5230\u963f\u91cc\u4e91"},"\u96c6\u6210 GitHub Actions \u90e8\u7f72\u5230\u963f\u91cc\u4e91"),(0,s.kt)("p",null,"\u670d\u52a1\u5668\u8d2d\u4e70\u6d41\u7a0b\u548c\u57fa\u7840\u521d\u59cb\u5316\u914d\u7f6e\u8fd9\u91cc\u5c31\u4e0d\u5570\u55e6\u4e86 \ud83e\udd9c\u57df\u540d\u8d2d\u4e70\u5907\u6848\u548c\u89e3\u6790\u914d\u7f6e\uff0cnginx\u914d\u7f6e\uff0chttps\u8bc1\u4e66\u914d\u7f6e\u90fd\u4e0d\u662f\u672c\u6587\u7684\u6838\u5fc3\u5185\u5bb9\uff0c\u8fd9\u91cc\u5c31\u76f4\u5165\u6b63\u9898\u4e86\ud83d\udc0e"),(0,s.kt)("h3",{id:"\u521b\u5efa\u963f\u91cc\u4e91\u5bc6\u94a5\u5bf9"},"\u521b\u5efa\u963f\u91cc\u4e91\u5bc6\u94a5\u5bf9"),(0,s.kt)("p",null,"\u8fdb\u5165\u63a7\u5236\u53f0 - \u4e91\u670d\u52a1\u5668 ECS - \u5de6\u4fa7\u5217\u8868 - \u7f51\u7edc\u4e0e\u5b89\u5168 - \u627e\u5230\u5bc6\u94a5\u5bf9"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/create-key-pair.png",alt:"create-key-pair"})),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u521b\u5efa SSH \u5bc6\u94a5\u5bf9\uff0c\u7136\u540e\u7ed1\u5b9a\u4e0a ECS \u670d\u52a1\u5668\uff0c \u5e76\u4e14\u5c06\u79c1\u94a5\u4e0b\u8f7d\u4fdd\u5b58\u597d\uff0c \u590d\u5236\u4e0b\u6765\u53bbGitHub\u7528"),(0,s.kt)("p",null,"name\u586b\u5199",(0,s.kt)("inlineCode",{parentName:"p"},"SERVER_SSH_KEY"),"(\u968f\u610f), value\u586b\u5199\u521a\u624d\u7684\u79c1\u94a5"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/new-secret.png",alt:"new-secret"})),(0,s.kt)("h3",{id:"\u521b\u5efa\u914d\u7f6eyml\u6587\u4ef6"},"\u521b\u5efa\u914d\u7f6e.yml\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"name: Deploy to aliyun\non:\n  #\u76d1\u542cpush\u64cd\u4f5c\n  push:\n    branches:\n      # master\u5206\u652f\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6539\u6210\u5176\u4ed6\u5206\u652f\n      - master\njobs:\n  build:\n    # runs-on \u6307\u5b9ajob\u4efb\u52a1\u8fd0\u884c\u6240\u9700\u8981\u7684\u865a\u62df\u673a\u73af\u5883(\u5fc5\u586b\u5b57\u6bb5)\n    runs-on: ubuntu-latest\n    steps:\n      # \u4f7f\u7528action\u5e93  actions/checkout\u83b7\u53d6\u6e90\u7801\n      - name: Checkout \ud83d\udc24\n        uses: actions/checkout@v2\n      # \u5b89\u88c5Node13\n      - name: use Node.js 14.15.1 \ud83d\udc23\n        # \u4f7f\u7528action\u5e93  actions/setup-node\u5b89\u88c5node\n        uses: actions/setup-node@v1\n        with:\n          node-version: '14.15.1'\n      # \u5b89\u88c5\u4f9d\u8d56\n      - name: npm install \ud83d\udc25\n        run: npm install\n      # \u6253\u5305\n      - name: npm build \ud83c\udf84\n        run: npm run docs:build\n      # \u90e8\u7f72\u5230\u963f\u91cc\u4e91\n      - name: Deploy to Aliyun \ud83d\ude80\n        uses: easingthemes/ssh-deploy@v2.1.5\n        env:\n          # \u79c1\u94a5\n          SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}\n          # scp\u53c2\u6570\n          ARGS: '-avzr --delete'\n          # \u6e90\u76ee\u5f55\uff0c\u7f16\u8bd1\u540e\u751f\u6210\u7684\u6587\u4ef6\u76ee\u5f55\n          SOURCE: '/docs/.vuepress/dist'\n          # \u670d\u52a1\u5668ip\uff1a\u6362\u6210\u4f60\u7684\u670d\u52a1\u5668IP\n          REMOTE_HOST: 'xxx.xxx.xxx.xxx'\n          # \u7528\u6237\n          REMOTE_USER: 'root'\n          # \u76ee\u6807\u5730\u5740 \u4f60\u5728\u670d\u52a1\u5668\u4e0a\u90e8\u7f72\u4ee3\u7801\u7684\u5730\u65b9\n          TARGET: '/xxx/xxx/xxx'\n")),(0,s.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,s.kt)("p",null,"\u4fee\u6539\u4ee3\u7801\uff0cpush\u4e0a\u53bb, \u53ef\u4ee5\u770b\u5230\u6784\u5efa\u65e5\u5fd7, \u4e0d\u5230\u4e24\u5206\u949f,\u4e5f\u662f\u5f88\u5feb\u7684~"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/build-status.png",alt:"build-status"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/test-workflow.png",alt:"test-workflows"})),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/actions/learn-github-actions/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows"},"https://docs.github.com/cn/actions/learn-github-actions/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows"))))}p.isMDXComponent=!0}}]);