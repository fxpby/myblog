"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[2601],{28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var s=r(96540);const o={},a=s.createContext(o);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(a.Provider,{value:n},e.children)}},62173:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"coding/design-pattern/bridge-pattern-basics","title":"\u6865\u63a5\u6a21\u5f0f Bridge Pattern","description":"\u4ecb\u7ecd","source":"@site/docs/coding/design-pattern/bridge-pattern-basics.md","sourceDirName":"coding/design-pattern","slug":"/coding/design-pattern/bridge-pattern-basics","permalink":"/docs/coding/design-pattern/bridge-pattern-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/design-pattern/bridge-pattern-basics.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u9002\u914d\u5668\u6a21\u5f0f Adapter Pattern","permalink":"/docs/coding/design-pattern/adapter-pattern-basics"},"next":{"title":"\u8d23\u4efb\u94fe\u6a21\u5f0f Chain of Responsibility Pattern","permalink":"/docs/coding/design-pattern/chain-of-responsibility-pattern-basics"}}');var o=r(74848),a=r(28453);const l={},t="\u6865\u63a5\u6a21\u5f0f Bridge Pattern",c={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u6865\u63a5\u6a21\u5f0f-bridge-pattern",children:"\u6865\u63a5\u6a21\u5f0f Bridge Pattern"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7528\u4e8e\u628a\u62bd\u8c61\u5316\u4e0e\u5b9e\u73b0\u5316\u89e3\u8026"}),"\n",(0,o.jsx)(n.li,{children:"\u4f7f\u5f97\u4e8c\u8005\u53ef\u4ee5\u72ec\u7acb\u53d8\u5316"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u8981\u753b\u56fe\u5f62"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/design-pattern/bridge-pattern/bridge01.png",alt:"draw1"})}),"\n",(0,o.jsx)(n.p,{children:"\u6d89\u53ca\u5230\u989c\u8272\u548c\u5f62\u72b6\uff0c\u53ef\u80fd\u4f1a\u8fd9\u6837\u753b\ud83d\udc47"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class ColorShape {\n  yellowCircle() {\n    console.log(`draw yellow circle`)\n  }\n  greenCircle() {\n    console.log(`draw green circle`)\n  }\n  yellowTriangle() {\n    console.log(`draw yellow Triangle`)\n  }\n  greenTriangle() {\n    console.log(`draw green Triangle`)\n  }\n}\n\nconst draw = new ColorShape();\ndraw.yellowCircle()\ndraw.greenCircle()\ndraw.yellowTriangle()\ndraw.greenTriangle()\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u60f3\u628a\u989c\u8272\u548c\u56fe\u5f62\u5206\u79bb\u5f00\uff0c\u53ef\u4ee5\u8fd9\u6837\ud83d\udc47\ud83c\udffb"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/design-pattern/bridge-pattern/bridge02.png",alt:"draw2"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class Color {\n  constructor(colorName) {\n    this.colorName = colorName\n  }\n}\n\nclass Shape {\n  constructor(shapeName) {\n    this.shapeName = shapeName\n  }\n}\n\nclass Draw {\n  constructor(color, shape) {\n    this.color = color\n    this.shape = shape\n  }\n  draw() {\n    console.log(this.color.colorName, this.shape.shapeName)\n  }\n}\n\nconst yellow = new Color('yellow')\nconst green = new Color('green')\nconst circle = new Shape('circle')\nconst triangle = new Shape('triangle')\nconst yellowCircle = new Draw(yellow, circle)\nyellowCircle.draw()\nconst greenTriangle = new Draw(green, triangle)\ngreenTriangle.draw()\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u4ee5\u540e\u989c\u8272\u6709\u4e5d\u4e5d\u516b\u5341\u4e00\u79cd\u7684\u8bdd\uff0c\u7b2c\u4e00\u79cd\u65b9\u5f0f\u6211\u4eec\u5c31\u8981\u5199...\ud83d\ude25\u8001\u957f\uff0c\u5e76\u4e14\u6bcf\u6b21\u90fd\u9700\u8981\u4fee\u6539 ColorShape \u7c7b\u3002\u5229\u7528\u6865\u63a5\u6a21\u5f0f\u540e\u590d\u6742\u6027\u5c31\u4f1a\u5927\u5927\u964d\u4f4e\uff0c\u53ef\u7075\u6d3b\u7ec4\u5408\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class Color {\n  constructor(colorName) {\n    this.colorName = colorName\n  }\n}\n\nclass Shape {\n  constructor(shapeName) {\n    this.shapeName = shapeName\n  }\n}\n\nclass Draw {\n  constructor(color, shape) {\n    this.color = new Color(color)\n    this.shape = new Shape(shape)\n  }\n  draw() {\n    console.log(this.color.colorName, this.shape.shapeName)\n  }\n\n  getColor() {\n    console.log(this.color.colorName)\n  }\n\n  getShape() {\n    console.log(this.shape.shapeName)\n  }\n}\n\nconst yellowCircle = new Draw('yellow', 'circle')\nyellowCircle.draw()\nconst greenTriangle = new Draw('green', 'triangle')\ngreenTriangle.draw()\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1",children:"\u8bbe\u8ba1\u539f\u5219\u9a8c\u8bc1"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u62bd\u8c61\u548c\u5b9e\u73b0\u5206\u79bb\uff0c\u89e3\u8026"}),"\n",(0,o.jsx)(n.li,{children:"\u7b26\u5408\u5f00\u653e\u5c01\u95ed\u539f\u5219"}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);