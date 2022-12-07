"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1222],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(t),g=r,d=c["".concat(u,".").concat(g)]||c[g]||m[g]||l;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const l={},o="\u6570\u636e\u7c7b\u578b",s={unversionedId:"typescript/everyday-types",id:"typescript/everyday-types",title:"\u6570\u636e\u7c7b\u578b",description:"\u7c7b\u578b\u6ce8\u91ca",source:"@site/docs/typescript/everyday-types.md",sourceDirName:"typescript",slug:"/typescript/everyday-types",permalink:"/myblog/docs/typescript/everyday-types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/everyday-types.md",tags:[],version:"current",frontMatter:{},sidebar:"typescript",next:{title:"tsconfig.json",permalink:"/myblog/docs/typescript/tsconfig"}},u={},i=[{value:"\u7c7b\u578b\u6ce8\u91ca",id:"\u7c7b\u578b\u6ce8\u91ca",level:2},{value:"string",id:"string",level:2},{value:"number",id:"number",level:2},{value:"boolean",id:"boolean",level:2},{value:"Arrays \u6570\u7ec4",id:"arrays-\u6570\u7ec4",level:2},{value:"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4",id:"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4",level:3},{value:"\u591a\u7ef4\u6570\u7ec4",id:"\u591a\u7ef4\u6570\u7ec4",level:3},{value:"arguments \u7c7b\u6570\u7ec4",id:"arguments-\u7c7b\u6570\u7ec4",level:3},{value:"any",id:"any",level:2},{value:"function",id:"function",level:2},{value:"Object\u3001object \u548c {}",id:"objectobject-\u548c-",level:2},{value:"Object Types",id:"object-types",level:2},{value:"Union Types \u8054\u5408\u7c7b\u578b",id:"union-types-\u8054\u5408\u7c7b\u578b",level:2},{value:"Type Aliases \u8054\u5408\u7c7b\u578b",id:"type-aliases-\u8054\u5408\u7c7b\u578b",level:2},{value:"Interfaces \u63a5\u53e3",id:"interfaces-\u63a5\u53e3",level:2},{value:"\u53ef\u9009\u5c5e\u6027",id:"\u53ef\u9009\u5c5e\u6027",level:3},{value:"\u4efb\u610f\u5c5e\u6027",id:"\u4efb\u610f\u5c5e\u6027",level:3},{value:"\u53ea\u8bfb\u5c5e\u6027",id:"\u53ea\u8bfb\u5c5e\u6027",level:3},{value:"Type Assertions \u7c7b\u578b\u65ad\u8a00",id:"type-assertions-\u7c7b\u578b\u65ad\u8a00",level:2},{value:"null and undefined",id:"null-and-undefined",level:2},{value:"Enums",id:"enums",level:2},{value:"bigint",id:"bigint",level:2},{value:"symbol",id:"symbol",level:2}],p={toc:i};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("h2",{id:"\u7c7b\u578b\u6ce8\u91ca"},"\u7c7b\u578b\u6ce8\u91ca"),(0,r.kt)("p",null,"\u5192\u53f7 + \u7c7b\u578b\uff0c\u5982\u4e0b\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},": string")," \u5c31\u662f\u7c7b\u578b\u6ce8\u91ca\n\u4f5c\u7528\u4e8e\u53d8\u91cf\u3001\u51fd\u6570\u53c2\u6570\u4ee5\u53ca\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const person: string = 'olu'\n\nfunction foo(num: number): boolean {\n  return true\n}\nfoo(233)\n\nfunction foo2(num: number): void {\n  console.log(num)\n}\n")),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},": number"),"\u662f\u53c2\u6570\u7c7b\u578b\u6ce8\u91ca\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},":boolean")," \u662f\u8fd4\u56de\u503c\u7c7b\u578b\u6ce8\u91ca\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},": void"),"\u4e5f\u662f\u8fd4\u56de\u503c\u7c7b\u578b\u6ce8\u91ca\uff0c\u4ee3\u8868\u6ca1\u6709\u8fd4\u56de\u503c\u3002"),(0,r.kt)("h2",{id:"string"},"string"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const str: string = 'hello world!'\n")),(0,r.kt)("h2",{id:"number"},"number"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const num: number = 123\n")),(0,r.kt)("h2",{id:"boolean"},"boolean"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bool: boolean = true\n")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4f7f\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u7684\u5bf9\u8c61\u4e0d\u662f\u5e03\u5c14\u503c, \u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"new Boolean()"),"\u8fd4\u56de\u7684\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," \u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bool: boolean = new Boolean(1)\n/* \u62a5\u9519\u4fe1\u606f\uff1a\u4e0d\u80fd\u5c06\u7c7b\u578b\u201cBoolean\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cboolean\u201d\u3002\n  \u201cboolean\u201d\u662f\u57fa\u5143\uff0c\u4f46\u201cBoolean\u201d\u662f\u5305\u88c5\u5668\u5bf9\u8c61\u3002\u5982\u53ef\u80fd\u9996\u9009\u4f7f\u7528\u201cboolean\u201d\u3002\n*/\n")),(0,r.kt)("p",null,"\u76f4\u63a5\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," \u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," \u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bool: boolean = Boolean(1)\n")),(0,r.kt)("h2",{id:"arrays-\u6570\u7ec4"},"Arrays \u6570\u7ec4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type[]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Array<type>")," \u6cdb\u578b\u5199\u6cd5")),(0,r.kt)("p",null,"type \u4e3a\u4efb\u610f\u5408\u6cd5\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let arr1: number[] = [1, 2, 3, 4, 5]\nlet arr2: string[] = ['qq', 'ww', 'ee']\nlet arr3: boolean[] = [true, false, false]\nlet arr4: any[] = [1, '2', [], {}, (): number => 123]\n\nlet arr5: Array<number> = [1, 2, 3, 4, 5]\nlet arr6: Array<string> = ['qq', 'ww', 'ee']\nlet arr7: Array<boolean> = [true, false, false]\nlet arr8: Array<any> = [1, '2', [], {}, (): number => 123]\n")),(0,r.kt)("h3",{id:"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4"},"\u7528\u63a5\u53e3\u8868\u793a\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface NumberArray {\n  [index: number]: number\n}\n\ninterface StringArray {\n  [index: number]: string\n}\n\nlet a1: NumberArray = [1, 2, 3]\nlet a2: StringArray = ['1', '2', 'olu']\n")),(0,r.kt)("h3",{id:"\u591a\u7ef4\u6570\u7ec4"},"\u591a\u7ef4\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let arr9: number[][] = [[1]]\nlet arr10: number[][][] = [[[1]]]\nlet arr11: Array<Array<number>> = [[1]]\nlet arr12: Array<Array<Array<number | string>>> = [[[1, 'olu']]]\n")),(0,r.kt)("h3",{id:"arguments-\u7c7b\u6570\u7ec4"},"arguments \u7c7b\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function Arr (...args: any): void {\n  console.log(arguments)\n  let arr: IArguments = arguments\n}\nArr('olu', 'cute', 'cool')\n")),(0,r.kt)("p",null,"IArguments \u662f TypeScript \u4e2d\u5b9a\u4e49\u597d\u7684\u7c7b\u578b\uff0c\u5b9e\u9645\u4e0a\u662f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IArguments {\n  [index: number]: any,\n  length: number,\n  callee: Function\n}\n")),(0,r.kt)("h2",{id:"any"},"any"),(0,r.kt)("p",null,"\u4e0d\u5e0c\u671b\u67d0\u4e2a\u7279\u5b9a\u503c\u5bfc\u81f4\u7c7b\u578b\u68c0\u67e5\u9519\u8bef\uff0c\u4e5f\u5c31\u662f\u7f16\u8bd1\u5668\u5173\u95ed\u7c7b\u578b\u68c0\u67e5\uff0c\u6240\u6709\u7c7b\u578b\u90fd\u53ef\u4ee5\u8d4b\u503c\u7ed9\u5b83\uff0c\u5b83\u4e5f\u53ef\u4ee5\u88ab\u8d4b\u503c\u7ed9\u5176\u4ed6\u4efb\u4f55\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let power: any\npower = 'olu'\npower = 123\n\nlet num: number = 233\npower = num\nnum = power\n")),(0,r.kt)("p",null,"unknown \u6bd4 any \u66f4\u52a0\u5b89\u5168"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let olu1: any = { a: 1, b: (): number => 123 }\nlet olu2: unknown = { a: 1, b: (): number => 123 }\n\nolu1.a\nolu1.b()\nolu2.a // \u62a5\u9519 \u5bf9\u8c61\u7684\u7c7b\u578b\u4e3a "unknown"\nolu2.b() // \u62a5\u9519 \u5bf9\u8c61\u7684\u7c7b\u578b\u4e3a "unknown"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"any \u7c7b\u578b\u53ef\u4ee5\u5206\u914d\u7ed9\u5176\u4ed6\u7c7b\u578b(\u53ef\u4ee5\u4f5c\u4e3a\u7236\u7c7b\u578b\u548c\u5b50\u7c7b\u578b)"),(0,r.kt)("li",{parentName:"ul"},"unknown \u4e0d\u53ef\u4ee5\u5206\u914d\u7ed9\u5176\u4ed6\u7c7b\u578b(\u53ea\u80fd\u4f5c\u4e3a\u7236\u7c7b\u578b\uff0c\u4e0d\u80fd\u4f5c\u4e3a\u5b50\u7c7b\u578b)")),(0,r.kt)("p",null,"\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\uff0c\u4f7f\u7528 any \u5c31\u8ba9 olu \u53d8\u4e0d\u53ef\u7231\u4e86\uff0c\u4f46\u662f\u4f7f\u7528 unknown olu \u4e5f\u4e0d\u4f1a\u52a0\u73ed"),(0,r.kt)("p",null,"unknown \u53ef\u8d4b\u503c\u5bf9\u8c61\u53ea\u6709 unknown \u548c any"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let str1: string = 'olu\u8d85\u7ea7\u65e0\u654c\u53ef\u7231'\nlet str2: any = 'olu\u4e0d\u53ef\u7231'\nlet str3: unknown = 'olu\u4eca\u5929\u8981\u52a0\u73ed'\nlet str4: unknown = 'olu\u5403\u6b3a\u9a97\u9910\u957f\u8089\u8089'\n\nstr1 = str2\nstr1 = str3 // \u62a5\u9519 \u4e0d\u80fd\u5c06\u7c7b\u578b\u201cunknown\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cstring\u201d\nstr2 = str3\nstr3 = str4\n")),(0,r.kt)("h2",{id:"function"},"function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function foo(num: number): number {\n  return num\n}\n\ninterface User {\n  name: string,\n  age: number\n}\n\nconst fn1: (user: User) => User = (user: User): User => {\n  return user\n}\n\nconsole.log(fn1({name: 'olu', age: 18}))\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u533f\u540d\u51fd\u6570\u904d\u5386\u4e2d\u4f1a\u81ea\u52a8\u63a8\u65ad x \u4e3a string \u7c7b\u578b \ud83d\udc47\ud83c\udffb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const strArr: string[] = ["Olu", "Cool"]\n\nstrArr.forEach(x => {\n  x.toUpperCase()\n})\n')),(0,r.kt)("h2",{id:"objectobject-\u548c-"},"Object\u3001object \u548c {}"),(0,r.kt)("p",null,"\u539f\u578b\u94fe\u9876\u7aef\u662f Object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u90fd\u4e0d\u62a5\u9519\nlet a1: Object = 123\nlet a2: Object = '123'\nlet a3: Object = {}\nlet a4: Object = []\nlet a5: Object = (): number => 233\n")),(0,r.kt)("p",null,"object \u53ea\u80fd\u5206\u914d\u7ed9\u5f15\u7528\u7c7b\u578b\uff0c\u4e0d\u80fd\u5206\u914d\u7ed9\u57fa\u672c\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let a1: object = 123 // \u62a5\u9519 \u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnumber\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cobject\u201d\nlet a2: object = '123' // \u62a5\u9519 \u4e0d\u80fd\u5c06\u7c7b\u578b\u201cstring\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cobject\u201d\nlet a3: object = {}\nlet a4: object = []\nlet a5: object = (): number => 233\n")),(0,r.kt)("p",null,"{}\u5b57\u9762\u91cf \u76f8\u5f53\u4e8e new Object\uff0c\u548c Object\u76f8\u540c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let a1:{} = 123 // new Object\n")),(0,r.kt)("p",null,"\u65e0\u6cd5\u5bf9\u53d8\u91cf\u8fdb\u884c\u66f4\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let a2: {} = {age: 18}\nlet a3: Object = {age: 18}\nlet a4: object = {age: 18}\na2.name = 'olu'\na3.name = 'olu'\na4.name = 'olu'\n")),(0,r.kt)("h2",{id:"object-types"},"Object Types"),(0,r.kt)("p",null,"\u5bf9\u8c61\u5c5e\u6027\u540d\u79f0\u540e\u9762\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," \u4ee3\u8868\u8fd9\u4e2a\u503c\u53ef\u4ee5\u4e0d\u4f20\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"?: string")," \u5c31\u4ee3\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"string | undefined")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function foo3(params: {x: number, y: string}) {\n  console.log(params.x, params.y)\n}\nfoo3({x: 233, y: 'olu'})\n\nfunction foo4(params: {x: number, y?: string}) {\n  console.log(params.x, params.y?.toLocaleLowerCase)\n}\nfoo4({x: 123})\n")),(0,r.kt)("h2",{id:"union-types-\u8054\u5408\u7c7b\u578b"},"Union Types \u8054\u5408\u7c7b\u578b"),(0,r.kt)("p",null,"\u8054\u5408\u7c7b\u578b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," \u5206\u5272\u6bcf\u4e2a\u7c7b\u578b\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u80fd\u8bbf\u95ee\u8054\u5408\u7c7b\u578b\u4e2d\u6240\u6709\u7c7b\u578b\u5171\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5"),"\uff0c\u5426\u5219\u9700\u8981\u5206\u60c5\u51b5\u5904\u7406\u3002\n\u4e0b\u9762\u4f8b\u5b50 foo5 \u63a5\u53d7\u7684\u5f62\u53c2\u7c7b\u578b\u53ef\u4ee5\u662f\u6570\u5b57\u3001\u5b57\u7b26\u4e32\u548c\u6570\u5b57\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function foo6(x: number[] | string) {\n  console.log(x.slice(0, 3))\n}\nfoo6([23333])\nfoo6('2333')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function foo5(id: number | string | number[]) {\n  if (typeof id === 'string') {\n    console.log(id.toLocaleLowerCase())\n  } else if (Array.isArray(id)) {\n    console.log(id.join(', '))\n  } else {\n    console.log(`id's type is number`)\n  }\n}\nfoo5(123)\nfoo5('233')\nfoo5([1, 2, 3])\n")),(0,r.kt)("h2",{id:"type-aliases-\u8054\u5408\u7c7b\u578b"},"Type Aliases \u8054\u5408\u7c7b\u578b"),(0,r.kt)("p",null,"\u4f7f\u7528\u7c7b\u578b\u522b\u540d\u7ed9\u7c7b\u578b\u8d77\u4e00\u4e2a\u65b0\u7684\u540d\u5b57\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u521b\u5efa\u7c7b\u578b\u522b\u540d\uff0c\u5e38\u7528\u4e8e\u8054\u5408\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Point = {\n  x: number\n  y: string\n}\n\nfunction foo7(x: Point) {\n  console.log(x)\n}\nfoo7({x: 123, y: '233'})\n\ntype Id = number | string\nfunction foo8(id: Id) {\n  console.log(id)\n}\nfoo8(233)\nfoo8('233')\n")),(0,r.kt)("p",null,"\u7c7b\u578b\u522b\u540d type \u4e0d\u80fd\u901a\u8fc7\u540c\u540d\u65b9\u5f0f\u53bb\u62d3\u5c55, \u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"&"),"\u7b26\u53f7\u62d3\u5c55\u5408\u5e76"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Animal1 = {\n  name: string\n}\ntype Bear1 = Animal1 & {\n  age: number\n}\nconst bear1: Bear1 = {\n  name: 'weini',\n  age: 23\n}\nconsole.log(bear1.name, bear1.age)\n")),(0,r.kt)("h2",{id:"interfaces-\u63a5\u53e3"},"Interfaces \u63a5\u53e3"),(0,r.kt)("p",null,"\u4f7f\u7528\u63a5\u53e3\u5b9a\u4e49\u5bf9\u8c61\u7684\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Point1 {\n  x: number,\n  y: string\n}\nfunction foo9(pt: Point1) {\n  console.log(pt)\n}\nfoo9({x: 233, y: '233'})\n")),(0,r.kt)("p",null,"\u63a5\u53e3\u662f\u53ef\u4ee5\u62d3\u5c55\u7ee7\u627f\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Animal {\n  name: string\n}\n\ninterface Bear extends Animal {\n  age: number\n}\n\nconst bear: Bear = {\n  name: 'weini',\n  age: 23\n}\nconsole.log(bear.name, bear.age)\n")),(0,r.kt)("p",null,"\u5411\u73b0\u6709\u7684\u63a5\u53e3\u6dfb\u52a0\u65b0\u5b57\u6bb5\uff08\u53ef\u540c\u540d\u65b9\u5f0f\u62d3\u5c55\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyWindow {\n  count: number;\n}\ninterface MyWindow {\n  title: string;\n}\nconst window: MyWindow = {\n  count: 1,\n  title: '233'\n}\n")),(0,r.kt)("h3",{id:"\u53ef\u9009\u5c5e\u6027"},"\u53ef\u9009\u5c5e\u6027"),(0,r.kt)("p",null,"\u8be5\u5c5e\u6027\u53ef\u4ee5\u4e0d\u5b58\u5728, \u4ecd\u7136\u4e0d\u5141\u8bb8\u6dfb\u52a0\u672a\u5b9a\u4e49\u7684\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: string,\n  age?: number\n}\nlet olu: Person = {\n  name: 'olu',\n  // age: 18 // age\u53ef\u4e0d\u58f0\u660e\n}\n")),(0,r.kt)("h3",{id:"\u4efb\u610f\u5c5e\u6027"},"\u4efb\u610f\u5c5e\u6027"),(0,r.kt)("p",null,"\u5e0c\u671b\u63a5\u53e3\u53ef\u4ee5\u6709\u4efb\u610f\u5c5e\u6027\uff0c\u53ef\u4ee5\u4f7f\u7528 ","[propName: string]","\uff0c\u5b9a\u4e49\u4efb\u610f\u5c5e\u6027\u53d6 string \u7c7b\u578b\u7684\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: string,\n  age?: number,\n  [propName: string]: any\n}\nlet olu: Person = {\n  name: 'olu',\n  drink: 'Coke'\n}\n")),(0,r.kt)("p",null,"\u4e00\u65e6\u5b9a\u4e49\u4e86\u4efb\u610f\u5c5e\u6027\uff0c\u786e\u5b9a\u5c5e\u6027\u548c\u53ef\u9009\u5c5e\u6027\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u5176\u7c7b\u578b\u7684\u5b50\u96c6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: number[], // \u7c7b\u578b\u201cnumber[]\u201d\u7684\u5c5e\u6027\u201cname\u201d\u4e0d\u80fd\u8d4b\u7ed9\u201cstring\u201d\u7d22\u5f15\u7c7b\u578b\u201cstring\u201d\n  age?: number, // \u7c7b\u578b\u201cnumber | undefined\u201d\u7684\u5c5e\u6027\u201cage\u201d\u4e0d\u80fd\u8d4b\u7ed9\u201cstring\u201d\u7d22\u5f15\u7c7b\u578b\u201cstring\u201d\n  [propName: string]: string\n}\nlet olu: Person = {\n  name: [1,2],\n  drink: 123 // \u4e0d\u80fd\u5c06\u7c7b\u578b\u201cnumber\u201d\u5206\u914d\u7ed9\u7c7b\u578b\u201cstring\u201d\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"[propName: string]: string")," \u5b9a\u4e49\u4efb\u610f\u5c5e\u6027\u53d6 string\u7c7b\u578b\uff0c\u5df2\u5b9a\u4e49\u7684 name \u5c5e\u6027\u662f\u6570\u5b57\u6570\u7ec4\u4e0d\u7b26\u5408\uff0c\u5df2\u5b9a\u4e49\u7684 age \u5c5e\u6027\u662f number \u6216 undefined \u4e5f\u4e0d\u7b26\u5408\uff0cdrink \u4e5f\u4e0d\u662f string \u7c7b\u578b"),(0,r.kt)("p",null,"\u4e00\u4e2a\u63a5\u53e3\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u4efb\u610f\u5c5e\u6027\uff0c\u5982\u679c\u63a5\u53e3\u4e2d\u6709\u591a\u4e2a\u7c7b\u578b\u7684\u5c5e\u6027\uff0c\u9700\u8981\u5728\u4efb\u610f\u5c5e\u6027\u4e2d\u4f7f\u7528\u8054\u5408\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: number[],\n  age?: number,\n  [propName: string]: string | number[] | undefined | number\n}\nlet olu: Person = {\n  name: [1,2],\n  drink: 123\n}\n")),(0,r.kt)("h3",{id:"\u53ea\u8bfb\u5c5e\u6027"},"\u53ea\u8bfb\u5c5e\u6027"),(0,r.kt)("p",null,"\u8ba9\u5b57\u6bb5\u53ea\u80fd\u5728\u521b\u5efa\u7684\u65f6\u5019\u88ab\u8d4b\u503c\uff0c\u53ea\u8bfb\u7684\u7ea6\u675f\u5b58\u5728\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b21"),"\u7ed9",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u8c61"),"\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u800c\u4e0d\u662f\u7b2c\u4e00\u6b21\u7ed9\u53ea\u8bfb\u5c5e\u6027\u8d4b\u503c\u7684\u65f6\u5019"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: number[],\n  age?: number,\n  readonly hobby: string,\n  cb(): number,\n  [propName: string]: string | number[] | undefined | number | Function\n}\nlet olu: Person = {\n  name: [1,2],\n  drink: 123,\n  hobby: 'sleep',\n  cb: (): number => 123\n}\n\nolu.hobby = 'eat' // \u65e0\u6cd5\u5206\u914d\u5230 \"hobby\" \uff0c\u56e0\u4e3a\u5b83\u662f\u53ea\u8bfb\u5c5e\u6027\n")),(0,r.kt)("h2",{id:"type-assertions-\u7c7b\u578b\u65ad\u8a00"},"Type Assertions \u7c7b\u578b\u65ad\u8a00"),(0,r.kt)("p",null,"\u7c7b\u578b\u65ad\u8a00\u5141\u8bb8\u8f6c\u6362\u4e3a\u66f4\u5177\u4f53\u6216\u4e0d\u592a\u5177\u4f53\u7684\u7c7b\u578b\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;\nconst myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");\n')),(0,r.kt)("p",null,"\u5f3a\u5236\u65ad\u8a00\u65b9\u5f0f\u5982\u4e0b\uff0c\u5148\u8f6c any \u6216 unknown\uff0c\u518d\u8f6c\u5176\u4ed6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const testAssert = ('abcd' as any) as number\nconst testAssert2 = ('abcd' as unknown) as number\n")),(0,r.kt)("h2",{id:"null-and-undefined"},"null and undefined"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"null \u4e0d\u5b58\u5728"),(0,r.kt)("li",{parentName:"ul"},"undefined \u672a\u521d\u59cb\u5316\u7684\u503c")),(0,r.kt)("p",null,"\u786e\u5b9a\u503c\u7c7b\u578b\u4e0d\u53ef\u80fd\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u624d\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const val1: undefined = undefined\nconst val2: null = null\n\nfunction foo10(x: string | null) {\n  if (x === null) {\n    throw new Error(`x is null`)\n  } else {\n    x.toLowerCase()\n  }\n}\n\n// \u53c2\u6570 x \u53ef\u80fd\u4e3a\u7a7a\nfunction foo11(x?: number | null) {\n  // \u4e0d\u505a\u663e\u793a\u68c0\u67e5\uff0c\u4ece\u7c7b\u578b\u4e2d\u5220\u9664 null \u548c undefined\n  x!.toFixed()\n}\n")),(0,r.kt)("h2",{id:"enums"},"Enums"),(0,r.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\u7684\u503c\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u5b57\u7c7b\u578b"),"\u4e5f\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u5b57\u7b26\u4e32\u7c7b\u578b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right,\n}\n\nconsole.log(Direction.Up, Direction.Down) // 1 2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum Direction {\n  Up = 3,\n  Down,\n  Left,\n  Right,\n}\n\nconsole.log(Direction.Up, Direction.Down) // 3 4\n")),(0,r.kt)("p",null,"\u679a\u4e3e\u6210\u5458\u5fc5\u987b\u5177\u6709\u521d\u59cb\u5316\u8868\u8fbe\u5f0f\uff0c\u4e0d\u80fd\u5305\u542b\u8ba1\u7b97\u6210\u5458\u3002\u4e0b\u9762\u8fd9\u6837\u4f1a\u62a5\u9519"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum Direction2 {\n  Up = 'olu'.length,\n  Down,\n  Left,\n  Right,\n}\n")),(0,r.kt)("h2",{id:"bigint"},"bigint"),(0,r.kt)("p",null,"\u975e\u5e38\u5927\u7684\u6574\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onehundred: bigint = BigInt(100)\nconst anotherHundred: bigint = 100n\n")),(0,r.kt)("h2",{id:"symbol"},"symbol"),(0,r.kt)("p",null,"\u5168\u5c40\u552f\u4e00\u5f15\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const name1 = Symbol('name')\nconst name2 = Symbol('name2')\n")))}m.isMDXComponent=!0}}]);