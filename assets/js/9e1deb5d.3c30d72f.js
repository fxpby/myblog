"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4453],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(t),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||s;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const s={id:"ts-class",title:"\u7c7b",tags:["TypeScript"]},l=void 0,o={unversionedId:"typescript/advance/ts-class",id:"typescript/advance/ts-class",title:"\u7c7b",description:"\u5b9a\u4e49\u7c7b",source:"@site/docs/typescript/advance/ts-class.md",sourceDirName:"typescript/advance",slug:"/typescript/advance/ts-class",permalink:"/myblog/docs/typescript/advance/ts-class",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/advance/ts-class.md",tags:[{label:"TypeScript",permalink:"/myblog/docs/tags/type-script"}],version:"current",frontMatter:{id:"ts-class",title:"\u7c7b",tags:["TypeScript"]},sidebar:"typescript",previous:{title:"\u7c7b\u578b\u522b\u540d",permalink:"/myblog/docs/typescript/advance/type-aliases"},next:{title:"tsconfig.json",permalink:"/myblog/docs/typescript/tsconfig"}},c={},i=[{value:"\u5b9a\u4e49\u7c7b",id:"\u5b9a\u4e49\u7c7b",level:2},{value:"\u7c7b\u7684\u4fee\u9970\u7b26",id:"\u7c7b\u7684\u4fee\u9970\u7b26",level:2},{value:"implements",id:"implements",level:2},{value:"\u62bd\u8c61\u7c7b",id:"\u62bd\u8c61\u7c7b",level:2}],p={toc:i};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b9a\u4e49\u7c7b"},"\u5b9a\u4e49\u7c7b"),(0,a.kt)("p",null,"\u548c ES6 \u7684 class \u5dee\u4e0d\u591a\uff0c\u9700\u8981\u63d0\u524d\u58f0\u660e\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Person {\n  name: string\n  age: number\n  hobby: string\n  constructor(name: string, age: number, hobby: string) {\n    this.name = name\n    this.age = age\n    this.hobby = hobby\n  }\n}\n\nconst olu = new Person('Olu', 18, 'sleep')\n")),(0,a.kt)("h2",{id:"\u7c7b\u7684\u4fee\u9970\u7b26"},"\u7c7b\u7684\u4fee\u9970\u7b26"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"public\uff1a\u4fee\u9970\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u662f\u516c\u6709\u7684\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u88ab\u8bbf\u95ee\uff0c\u9ed8\u8ba4\u6240\u6709\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u662f public"),(0,a.kt)("li",{parentName:"ul"},"private\uff1a\u4fee\u9970\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u662f\u79c1\u6709\u7684\uff0c\u4e0d\u80fd\u5728\u58f0\u660e\u5b83\u7684\u7c7b\u7684\u5916\u90e8\u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ul"},"protected: \u4fee\u9970\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u662f\u53d7\u4fdd\u62a4\u7684\uff0c\u548c private \u7c7b\u4f3c\uff0c\u533a\u522b\u662f\u5b83\u5728\u5b50\u7c7b\u4e2d\u4e5f\u5141\u8bb8\u88ab\u8bbf\u95ee")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Person {\n  protected name: string\n  private age: number\n  public hobby: string\n  static catalogue: string = 'turtle'\n  constructor(name: string, age: number, hobby: string) {\n    this.name = name\n    this.age = age\n    this.hobby = hobby\n    this.run() // \u62a5\u9519 static \u51fd\u6570\u4e0d\u80fd\u5728 constructor \u4e2d\u8bbf\u95ee\n    Person.run()\n  }\n\n  // static \u51fd\u6570\u53ea\u80fd\u8bbf\u95ee static \u53d8\u91cf\n  static run(): string {\n    this.catalogue\n    return `running ${this.catalogue}`\n  }\n}\n\nclass Man extends Person {\n  constructor() {\n    super('olu-cute', 18, 'sleep')\n    this.name = 'cute' // protected \u53ef\u4ee5\u5728\u5b50\u7c7b\u4e2d\u8bbf\u95ee\u5230\n  }\n}\n\nconst olu = new Person('Olu', 18, 'sleep') \nconsole.log(olu.catalogue) // \u9759\u6001\u5c5e\u6027\uff0c\u4e0d\u9700\u8981 new \u5b9e\u4f8b\u5316\nconsole.log(olu.name) // \u62a5\u9519 protected\u7684 \u5c5e\u6027\u201cname\u201d\u53d7\u4fdd\u62a4\uff0c\u53ea\u80fd\u5728\u7c7b\u201cPerson\u201d\u53ca\u5176\u5b50\u7c7b\u4e2d\u8bbf\u95ee\n")),(0,a.kt)("h2",{id:"implements"},"implements"),(0,a.kt)("p",null,"\u63a5\u53e3\u53ef\u4ee5\u88ab\u7c7b\u5b9e\u73b0\uff08implements\uff09, \u53ef\u7528\u6765\u7ea6\u675f\u63a5\u53e3\u7c7b\u578b"),(0,a.kt)("p",null,"\u4e00\u4e2a\u7c7b\u53ea\u80fd\u7ee7\u627f\u81ea\u53e6\u4e00\u4e2a\u7c7b\uff0c\u4f46\u662f\u53ef\u4ee5\u5b9e\u73b0\u591a\u4e2a\u63a5\u53e3"),(0,a.kt)("p",null,"\u5b9e\u73b0\u4e00\u4e2a\u65b0\u7684\u7c7b\uff0c\u4ece\u7236\u7c7b\u6216\u8005\u63a5\u53e3\u5b9e\u73b0\u6240\u6709\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u540c\u65f6\u53ef\u4ee5\u91cd\u5199\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5305\u542b\u4e00\u4e9b\u65b0\u7684\u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  run (type: boolean): boolean\n}\n\ninterface Olu {\n  sayHi(): void\n}\n\nclass A {\n  params:string\n  constructor(params:string) {\n    this.params = params\n  }\n}\n\nclass Man extends A implements Person, Olu {\n  run(type: boolean): boolean {\n    return type\n  }\n  sayHi(): void {\n    console.log('hi~')\n  }\n}\n")),(0,a.kt)("h2",{id:"\u62bd\u8c61\u7c7b"},"\u62bd\u8c61\u7c7b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u4e0d\u5141\u8bb8\u88ab\u5b9e\u4f8b\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u7c7b\u4e2d\u7684\u62bd\u8c61\u65b9\u6cd5\u5fc5\u987b\u88ab\u5b50\u7c7b\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"abstract class A {\n  name: string\n  constructor(name: string) {\n    this.name = name\n  }\n\n  abstract getName(): string\n}\n\nclass B extends A {\n  constructor() {\n    super('Olu')\n  }\n\n  getName(): string {\n    return this.name\n  }\n}\n")))}u.isMDXComponent=!0}}]);