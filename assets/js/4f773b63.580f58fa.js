"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8333],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>C});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(t),C=a,u=s["".concat(p,".").concat(C)]||s[C]||c[C]||o;return t?r.createElement(u,i(i({ref:n},m),{},{components:t})):r.createElement(u,i({ref:n},m))}));function C(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},81068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const o={id:"react-elements-children-parents",title:"React elements, children, parents \u548c re-render",tags:["react","re-render"]},i=void 0,l={unversionedId:"react/react-elements-children-parents",id:"react/react-elements-children-parents",title:"React elements, children, parents \u548c re-render",description:"1. \u4ee4\u4eba\u8ff7\u60d1\u7684 children \u4f7f\u7528\u65b9\u5f0f",source:"@site/docs/react/react-elements-children-parents.md",sourceDirName:"react",slug:"/react/react-elements-children-parents",permalink:"/myblog/docs/react/react-elements-children-parents",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-elements-children-parents.md",tags:[{label:"react",permalink:"/myblog/docs/tags/react"},{label:"re-render",permalink:"/myblog/docs/tags/re-render"}],version:"current",frontMatter:{id:"react-elements-children-parents",title:"React elements, children, parents \u548c re-render",tags:["react","re-render"]},sidebar:"React",previous:{title:"React \u91cd\u65b0\u6e32\u67d3(re-render)",permalink:"/myblog/docs/react/react-re-renders"}},p={},d=[{value:"1. \u4ee4\u4eba\u8ff7\u60d1\u7684 children \u4f7f\u7528\u65b9\u5f0f",id:"1-\u4ee4\u4eba\u8ff7\u60d1\u7684-children-\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"1.1 \u8ff7\u60d1\u70b91: \u4e3a\u4ec0\u4e48\u4f5c\u4e3a children \u901a\u8fc7 props \u4f20\u9012\uff0c\u5b50\u7ec4\u4ef6\u6ca1\u6709 re-render",id:"11-\u8ff7\u60d1\u70b91-\u4e3a\u4ec0\u4e48\u4f5c\u4e3a-children-\u901a\u8fc7-props-\u4f20\u9012\u5b50\u7ec4\u4ef6\u6ca1\u6709-re-render",level:3},{value:"1.2 \u8ff7\u60d1\u70b92\uff1a\u5f53 children \u4f5c\u4e3a render function \u65f6\uff0c\u59cb\u7ec8 re-render",id:"12-\u8ff7\u60d1\u70b92\u5f53-children-\u4f5c\u4e3a-render-function-\u65f6\u59cb\u7ec8-re-render",level:3},{value:"1.3 \u8ff7\u60d1\u70b93\uff1aReact.memo \u4ec5\u7f13\u5b58\u7236\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u4ecd re-render\uff0c\u5305\u88f9\u4e86\u5b50\u7ec4\u4ef6\u4e0d\u9700\u8981\u5305\u88f9\u7236\u7ec4\u4ef6",id:"13-\u8ff7\u60d1\u70b93reactmemo-\u4ec5\u7f13\u5b58\u7236\u7ec4\u4ef6\u5b50\u7ec4\u4ef6\u4ecd-re-render\u5305\u88f9\u4e86\u5b50\u7ec4\u4ef6\u4e0d\u9700\u8981\u5305\u88f9\u7236\u7ec4\u4ef6",level:3},{value:"1.4 \u8ff7\u60d1\u70b94\uff1a\u4f7f\u7528 useCallback \u5305\u88f9 render function\uff0c\u4ecd re-render",id:"14-\u8ff7\u60d1\u70b94\u4f7f\u7528-usecallback-\u5305\u88f9-render-function\u4ecd-re-render",level:3},{value:"2. \u63a2\u7d22 React \u7684 <code>children</code> \u662f\u4ec0\u4e48",id:"2-\u63a2\u7d22-react-\u7684-children-\u662f\u4ec0\u4e48",level:2},{value:"3. \u63a2\u7d22 React Element",id:"3-\u63a2\u7d22-react-element",level:2},{value:"4. \u63a2\u7d22\u66f4\u65b0 Element",id:"4-\u63a2\u7d22\u66f4\u65b0-element",level:2},{value:"5. \u89e3\u5f00\u8ff7\u60d1",id:"5-\u89e3\u5f00\u8ff7\u60d1",level:2},{value:"5.1 \u8ff7\u60d1\u70b91: \u4e3a\u4ec0\u4e48\u4f5c\u4e3a children \u901a\u8fc7 props \u4f20\u9012\uff0c\u5b50\u7ec4\u4ef6\u6ca1\u6709 re-render",id:"51-\u8ff7\u60d1\u70b91-\u4e3a\u4ec0\u4e48\u4f5c\u4e3a-children-\u901a\u8fc7-props-\u4f20\u9012\u5b50\u7ec4\u4ef6\u6ca1\u6709-re-render",level:3},{value:"5.2 \u8ff7\u60d1\u70b92: \u5f53 children \u4f5c\u4e3a render function \u65f6\uff0c\u59cb\u7ec8 re-render",id:"52-\u8ff7\u60d1\u70b92-\u5f53-children-\u4f5c\u4e3a-render-function-\u65f6\u59cb\u7ec8-re-render",level:3},{value:"5.3 \u8ff7\u60d1\u70b93: React.memo \u4ec5\u7f13\u5b58\u7236\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u4ecd re-render, \u5305\u88f9\u4e86\u5b50\u7ec4\u4ef6\u4e0d\u9700\u8981\u5305\u88f9\u7236\u7ec4\u4ef6",id:"53-\u8ff7\u60d1\u70b93-reactmemo-\u4ec5\u7f13\u5b58\u7236\u7ec4\u4ef6\u5b50\u7ec4\u4ef6\u4ecd-re-render-\u5305\u88f9\u4e86\u5b50\u7ec4\u4ef6\u4e0d\u9700\u8981\u5305\u88f9\u7236\u7ec4\u4ef6",level:3},{value:"5.4 \u8ff7\u60d1\u70b94: \u4f7f\u7528 useCallback \u5305\u88f9 render function\uff0c\u4ecd re-render",id:"54-\u8ff7\u60d1\u70b94-\u4f7f\u7528-usecallback-\u5305\u88f9-render-function\u4ecd-re-render",level:3}],m={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u4ee4\u4eba\u8ff7\u60d1\u7684-children-\u4f7f\u7528\u65b9\u5f0f"},"1. \u4ee4\u4eba\u8ff7\u60d1\u7684 children \u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"\u60f3\u8c61\u4e00\u4e2a\u573a\u666f\uff0c\u91cc\u9762\u6709\u9891\u7e41\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u53d8\u5316\uff0c\u5982\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"onMouseMove")," \u56de\u8c03\u4e2d\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const MovingComponent = () => {\n  const [state, setState] = useState({x: 100, y: 100})\n\n  return (\n    <div\n      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}\n      style={{left: state.x, top: state.y}}\n    >\n      <ChildComponent />\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"React \u7ec4\u4ef6\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u66f4\u65b0\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u81ea\u8eab\u53ca",(0,a.kt)("strong",{parentName:"p"},"\u6240\u6709"),"\u5b50\u7ec4\u4ef6\uff0c\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u6bcf\u6b21\u79fb\u52a8\u9f20\u6807\u90fd\u4f1a\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \uff0c\u8fdb\u800c\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c\u8fd9\u6837\u5b50\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u4e5f\u4f1a ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u6bd4\u8f83\u590d\u6742\u6c89\u91cd\uff0c\u8fd9\u9891\u7e41\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u4f1a\u5e26\u6765\u6027\u80fd\u95ee\u9898"),(0,a.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo"),", \u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u5916\u90e8\u63d0\u53d6, \u5c06\u5176\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u4f20\u9012"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="MovingComponent"',title:'"MovingComponent"'},"const MovingComponent = ({children}) => {\n  const [state, setState] = useState({x: 100, y: 100})\n\n  return (\n    <div\n      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}\n      style={{left: state.x, top: state.y}}\n    >\n      {/* children \u4e0d\u4f1a re-render */}\n      {children}\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"\u518d\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u7ec4\u5408\u5728\u4e00\u8d77"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeOutsideComponent"',title:'"SomeOutsideComponent"'},"const SomeOutsideComponent = () => {\n  return (\n    <MovingComponent>\n      <ChildComponent />\n    </MovingComponent>\n  )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u73b0\u5728\u5c5e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"SomeOutsideComponent"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"SomeOutsideComponent")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," \u7684\u7236\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u8fd9\u6837\u505a\u4e4b\u540e\u53d1\u73b0\u79fb\u52a8\u9f20\u6807\u5c31\u4e0d\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u4e86\uff0c\u4f46\u662f\u6709\u51e0\u4e2a\u4ee4\u4eba\u8ff7\u60d1\u7684\u70b9\uff0c\u63a5\u4e0b\u6765\u4e00\u8d77\u6765\u770b\u4e0b"),(0,a.kt)("h3",{id:"11-\u8ff7\u60d1\u70b91-\u4e3a\u4ec0\u4e48\u4f5c\u4e3a-children-\u901a\u8fc7-props-\u4f20\u9012\u5b50\u7ec4\u4ef6\u6ca1\u6709-re-render"},"1.1 \u8ff7\u60d1\u70b91: \u4e3a\u4ec0\u4e48\u4f5c\u4e3a children \u901a\u8fc7 props \u4f20\u9012\uff0c\u5b50\u7ec4\u4ef6\u6ca1\u6709 re-render"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," \u89e6\u53d1\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u5374\u6ca1\u6709\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")),(0,a.kt)("h3",{id:"12-\u8ff7\u60d1\u70b92\u5f53-children-\u4f5c\u4e3a-render-function-\u65f6\u59cb\u7ec8-re-render"},"1.2 \u8ff7\u60d1\u70b92\uff1a\u5f53 children \u4f5c\u4e3a render function \u65f6\uff0c\u59cb\u7ec8 re-render"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u4f5c\u4e3a\u4e00\u4e2a render function \u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u5c31\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),", \u5373\u4f7f\u5b83\u5e76\u4e0d\u4f9d\u8d56\u4e8e\u5df2\u7ecf\u6539\u53d8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const MovingComponent = ({children}) => {\n  const [state, setState] = useState({x: 100, y: 100})\n\n  return (\n    <div\n      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}\n      style={{left: state.x, top: state.y}}\n    >\n      {children({data: 'something'})}\n    </div>\n  )\n}\n\n// SomeOutsideComponent \u4e0d\u4f1a re-render\nconst SomeOutsideComponent = () => {\n  return (\n    <MovingComponent>\n      {/* ChildComponent \u4f1a\u5728 MovingComponent state \u6539\u53d8\u65f6 \u89e6\u53d1 re-render\uff0c\u5373\u4f7f\u6ca1\u6709\u4f20\u9012props */}\n      {() => <ChildComponent />}\n    </MovingComponent>\n  )\n}\n")),(0,a.kt)("p",null,"  \u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"SomeOutsideComponent")," \u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c\u4f46\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"render function")," \u4f7f\u7528\u65f6\uff0c\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u4f20\u9012\uff0c\u4e5f\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")),(0,a.kt)("h3",{id:"13-\u8ff7\u60d1\u70b93reactmemo-\u4ec5\u7f13\u5b58\u7236\u7ec4\u4ef6\u5b50\u7ec4\u4ef6\u4ecd-re-render\u5305\u88f9\u4e86\u5b50\u7ec4\u4ef6\u4e0d\u9700\u8981\u5305\u88f9\u7236\u7ec4\u4ef6"},"1.3 \u8ff7\u60d1\u70b93\uff1aReact.memo \u4ec5\u7f13\u5b58\u7236\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u4ecd re-render\uff0c\u5305\u88f9\u4e86\u5b50\u7ec4\u4ef6\u4e0d\u9700\u8981\u5305\u88f9\u7236\u7ec4\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"React.memo"),"\uff0c\u5982\u679c\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"SomeOutsideComponent")," \u5f15\u5165\u4e00\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u5e76\u5c1d\u8bd5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," \u963b\u6b62 ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u7f13\u5b58\u7236\u7ec4\u4ef6\uff0c\u4e0d\u7f13\u5b58\u5b50\u7ec4\u4ef6"',title:'"\u7f13\u5b58\u7236\u7ec4\u4ef6\uff0c\u4e0d\u7f13\u5b58\u5b50\u7ec4\u4ef6"'},"const MovingComponent = ({children}) => {\n  const [state, setState] = useState({x: 100, y: 100})\n\n  return (\n    <div\n      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}\n      style={{left: state.x, top: state.y}}\n    >\n      {children({data: 'something'})}\n    </div>\n  )\n}\n\nconst MovingComponentMemo = React.memo(MovingComponent)\n\nconst SomeOutsideComponent = () => {\n  const [state, setState] = useState()\n\n  return (\n    <MovingComponentMemo>\n      {/* \u7236\u7ec4\u4ef6 state \u53d8\u5316\u65f6 re-render\uff0c\u5b50\u7ec4\u4ef6\u4e5f\u4f1a\u89e6\u53d1 re-render */}\n      <ChildComponent/>\n    </MovingComponentMemo>\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u53ea\u7f13\u5b58\u5b50\u7ec4\u4ef6\uff0c\u4e0d\u7f13\u5b58\u7236\u7ec4\u4ef6"',title:'"\u53ea\u7f13\u5b58\u5b50\u7ec4\u4ef6\uff0c\u4e0d\u7f13\u5b58\u7236\u7ec4\u4ef6"'},"const MovingComponent = ({children}) => {\n  const [state, setState] = useState({x: 100, y: 100})\n\n  return (\n    <div\n      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}\n      style={{left: state.x, top: state.y}}\n    >\n      {children({data: 'something'})}\n    </div>\n  )\n}\n\nconst ChildComponentMemo = React.memo(ChildComponent)\n\nconst SomeOutsideComponent = () => {\n  const [state, setState] = useState()\n\n  return (\n    <MovingComponent>\n      {/* \u7236\u7ec4\u4ef6 state \u53d8\u5316\u65f6 re-render\uff0c\u5b50\u7ec4\u4ef6 \u4e0d\u4f1a \u89e6\u53d1 re-render */}\n      <ChildComponentMemo/>\n    </MovingComponent>\n  )\n}\n")),(0,a.kt)("h3",{id:"14-\u8ff7\u60d1\u70b94\u4f7f\u7528-usecallback-\u5305\u88f9-render-function\u4ecd-re-render"},"1.4 \u8ff7\u60d1\u70b94\uff1a\u4f7f\u7528 useCallback \u5305\u88f9 render function\uff0c\u4ecd re-render"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const SomeOutsideComponent = () => {\n  const [state, setState] = useState()\n\n  const child = useCallback(() => <ChildComponent />, [])\n\n  return (\n    <MovingComponent>\n      {/* \u5c3d\u7ba1\u7528 useCallback \u5305\u88f9\u7f13\u5b58\u4e86\uff0c\u4f46\u662f\u8fd8\u662f re-render */}\n      {child}\n    </MovingComponent>\n  )\n}\n")),(0,a.kt)("h2",{id:"2-\u63a2\u7d22-react-\u7684-children-\u662f\u4ec0\u4e48"},"2. \u63a2\u7d22 React \u7684 ",(0,a.kt)("inlineCode",{parentName:"h2"},"children")," \u662f\u4ec0\u4e48"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const Parent = ({children}) => {\n  return <>{children}</>\n}\n\n<parent>\n  <Child />\n</parent>\n")),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u4ee3\u7801\u770b\uff0c\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u5c31\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"props")),"\uff0c\u6211\u4eec\u4f7f\u7528\u65f6\u8981\u4e48\u89e3\u6784\uff0c\u8981\u4e48\u5c31 ",(0,a.kt)("inlineCode",{parentName:"p"},"props.children")),(0,a.kt)("p",null,"\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u8fd9\u4e48\u5199, \u6548\u679c\u4e00\u6837\u4e00\u6837\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Parent children={<Child />} />\n")),(0,a.kt)("p",null,"\u548c\u5176\u4ed6\u7684 prop \u4e00\u6837\uff0c\u4e5f\u53ef\u4ee5\u5c06\u7ec4\u4ef6\u4f5c\u4e3a Element, Function, Component \u4f20\u9012"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="render function in children"',title:'"render',function:!0,in:!0,'children"':!0},"// \u4f5c\u4e3a props\n<Parent children={() => <Child />} />\n\n<Parent>\n  {() => <Child />}\n</Parent>\n\nconst Parent = ({children}) => {\n  return <>{children()}</>\n}\n")),(0,a.kt)("h2",{id:"3-\u63a2\u7d22-react-element"},"3. \u63a2\u7d22 React Element"),(0,a.kt)("p",null,"\u4e0b\u9762\u8fd9\u884c\u4ee3\u7801\u53d1\u751f\u4e86\u4ec0\u4e48"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const child = <Child />\n")),(0,a.kt)("p",null,"\u53ef\u80fd\u6709\u4eba\u4f1a\u8bf4\u8fd9\u662f\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"rendered"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Child")," \u7ec4\u4ef6\u7684 \u6e32\u67d3\u5468\u671f\u5f00\u59cb\uff0cbut\uff0c\u4e0d\u592a\u5bf9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Child />")," \u88ab\u79f0\u4e3a\u5143\u7d20\uff0c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createElement()")," \u7684\u8bed\u6cd5\u7cd6, \u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5bf9\u8c61\u63cf\u8ff0\u4e86 \u5b9e\u9645\u5728 render tree \u4e2d\u51fa\u73b0\u65f6\uff0c\u5e0c\u671b\u5728\u5c4f\u5e55\u4e0a\u770b\u5230\u7684\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"React.createElement(\n  type,\n  [props],\n  [...children]\n)\n// \u521b\u5efa\u5e76\u8fd4\u56de\u7ed9\u5b9a\u7c7b\u578b\u7684\u65b0 React \u5143\u7d20\u3002\n// \u7c7b\u578b\u53c2\u6570\u53ef\u4ee5\u662f\u6807\u7b7e\u540d\u79f0\u5b57\u7b26\u4e32\uff08\u5982 'div' \u6216 'span' \uff09\u3001React \u7ec4\u4ef6\u7c7b\u578b\uff08\u7c7b\u6216\u51fd\u6570\uff09\u6216 React \u7247\u6bb5\u7c7b\u578b\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const child = <Child />;\n// \u7b49\u540c\u4e8e\nconst child = React.createElement(Child, null, null);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53ea\u6709"),"\u5728\u8fd4\u56de\u7ed3\u679c\uff08\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\u76f8\u5f53\u4e8e\u201c\u6e32\u67d3\u5185\u5bb9\u201d\uff09\uff0c\u5e76\u4e14",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u6709"),"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Parent")," \u7ec4\u4ef6\u6e32\u67d3\u81ea\u5df1",(0,a.kt)("strong",{parentName:"p"},"\u540e"),"\uff0c\u624d\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"Child")," \u7ec4\u4ef6\u7684\u5b9e\u9645\u6e32\u67d3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const Parent = () => {\n  const child = <Child/>\n\n  return <>{child}</>\n}\n")),(0,a.kt)("h2",{id:"4-\u63a2\u7d22\u66f4\u65b0-element"},"4. \u63a2\u7d22\u66f4\u65b0 Element"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Element")," \u662f",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u53d8\u5bf9\u8c61"),"\uff0c\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Element")," \u5e76\u89e6\u53d1\u5176\u76f8\u5e94\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u7684\u552f\u4e00\u65b9\u6cd5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"re-create")," \u4e00\u4e2a\u81ea\u8eab\u5bf9\u8c61\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u8fc7\u7a0b\u53d1\u751f\u7684\u5c31\u662f\u8fd9\u4e2a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const Parent = () => {\n  // child definition object will be re-created.\n  // so Child component will be re-rendered when Parent re-renders\n  const child = <Child />;\n\n  return <div>{child}</div>;\n};\n")),(0,a.kt)("p",null,"\u5982\u679c Parent \u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"child")," \u5e38\u91cf\u5c06\u4f1a\u4ece\u5934\u5f00\u59cb\u91cd\u65b0\u521b\u5efa\uff0c\u4ece React \u7684\u89d2\u5ea6\u770b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"child"),"\u662f\u4e00\u4e2a\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"re-recreated")," \u4e86\u5bf9\u8c61), \u4f46\u662f\u4f4d\u7f6e\u548c\u7c7b\u578b\u5b8c\u5168\u76f8\u540c\uff0c\u6240\u4ee5 React \u53ea\u4f1a\u7528\u65b0\u6570\u636e\u66f4\u65b0\u73b0\u6709\u5df2\u7ecf\u5b58\u5728\u7684\u7ec4\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u5df2\u7ecf\u5b58\u5728\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Child"),"\uff09"),(0,a.kt)("p",null,"\u8fd9\u4e5f\u6b63\u662f\u7f13\u5b58\uff08memoization\uff09\u53ef\u4ee5\u53d1\u6325\u4f5c\u7528\u7684\u539f\u56e0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u4f7f\u7528 React.memo \u5305\u88f9 Child"',title:'"\u4f7f\u7528',"React.memo":!0,"\u5305\u88f9":!0,'Child"':!0},"const ChildMemo = React.memo(Child)\n\nconst Parent = () => {\n  const child = <ChildMemo />\n\n  return <>{child}</>\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u4f7f\u7528 useMemo"',title:'"\u4f7f\u7528','useMemo"':!0},"const Parent = () => {\n  const child = useMemo(() => <Child/>, [])\n\n  return <>{child}</>\n}\n")),(0,a.kt)("p",null,"\u5b9a\u4e49\u7684\u5bf9\u8c61\u4e0d\u4f1a\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"re-created"),"\uff0cReact \u8ba4\u4e3a\u5b83\u4e0d\u9700\u8981\u66f4\u65b0\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Child")," \u4e5f\u4e0d\u4f1a ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")),(0,a.kt)("h2",{id:"5-\u89e3\u5f00\u8ff7\u60d1"},"5. \u89e3\u5f00\u8ff7\u60d1"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u63a2\u7d22\u8fc7\u7a0b\uff0c\u6211\u4eec\u6536\u96c6\u5230\u4e86\u4e0b\u8ff0\u7ebf\u7d22\uff0c\u73b0\u5728\u7528\u8fd9\u4e9b\u7ebf\u7d22\u89e3\u5f00\u8ff7\u60d1\u5427"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"const child = <Child/>")," \u53ea\u662f\u521b\u5efa\u4e86\u4e00\u4e2a Element\uff0c\u5373\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u5e76",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u662f render"),",\u5e76\u4e14\u662f\u5b9a\u4e49\u4e86\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u53ef\u53d8\u5bf9\u8c61")),(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u7684\u7ec4\u4ef6\u53ea\u6709\u5728\u5b9e\u9645\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"render tree")," \u4e2d\u51fa\u73b0\u65f6\u624d\u4f1a ",(0,a.kt)("inlineCode",{parentName:"li"},"render"),"\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u5728\u6700\u540e\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"return"),"\u4e2d"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"re-create")," \u5b9a\u4e49\u5bf9\u8c61\u4f1a\u89e6\u53d1\u76f8\u5173\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"re-render"))),(0,a.kt)("h3",{id:"51-\u8ff7\u60d1\u70b91-\u4e3a\u4ec0\u4e48\u4f5c\u4e3a-children-\u901a\u8fc7-props-\u4f20\u9012\u5b50\u7ec4\u4ef6\u6ca1\u6709-re-render"},"5.1 \u8ff7\u60d1\u70b91: \u4e3a\u4ec0\u4e48\u4f5c\u4e3a children \u901a\u8fc7 props \u4f20\u9012\uff0c\u5b50\u7ec4\u4ef6\u6ca1\u6709 re-render"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const MovingComponent = ({children}) => {\n  const [state, setState] = useState({x: 100, y: 100})\n\n  return (\n    <div\n      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}\n      style={{left: state.x, top: state.y}}\n    >\n      {/* children \u4e0d\u4f1a re-render */}\n      {children}\n    </div>\n  )\n}\n\nconst SomeOutsideComponent = () => {\n  return (\n    <MovingComponent>\n      <ChildComponent />\n    </MovingComponent>\n  )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"SomeOutsideComponent")," \u7ec4\u4ef6\u4e2d\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ChildComponent/>")," \u5143\u7d20\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u6539\u53d8\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c\u4f46\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u6ca1\u6709\u53d8\u5316\uff0c\u6240\u4ee5\u6765\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),"\uff08\u5b9a\u4e49\u7684\u5bf9\u8c61\uff09\u6ca1\u6709\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"re-create"),"\uff0c\u6240\u4ee5\u6700\u7ec8\u4e0d\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")),(0,a.kt)("h3",{id:"52-\u8ff7\u60d1\u70b92-\u5f53-children-\u4f5c\u4e3a-render-function-\u65f6\u59cb\u7ec8-re-render"},"5.2 \u8ff7\u60d1\u70b92: \u5f53 children \u4f5c\u4e3a render function \u65f6\uff0c\u59cb\u7ec8 re-render"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const MovingComponent = ({children}) => {\n  const [state, setState] = useState({x: 100, y: 100})\n\n  return (\n    <div\n      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}\n      style={{left: state.x, top: state.y}}\n    >\n      {children({data: 'something'})}\n    </div>\n  )\n}\n\n// SomeOutsideComponent \u4e0d\u4f1a re-render\nconst SomeOutsideComponent = () => {\n  return (\n    <MovingComponent>\n      {/* ChildComponent \u4f1a\u5728 MovingComponent state \u6539\u53d8\u65f6 \u89e6\u53d1 re-render\uff0c\u5373\u4f7f\u6ca1\u6709\u4f20\u9012props */}\n      {() => <ChildComponent />}\n    </MovingComponent>\n  )\n}\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u662f\u4e00\u4e2a\u51fd\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),"(\u5b9a\u4e49\u7684\u5bf9\u8c61)\u662f\u8c03\u7528\u51fd\u6570\u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," \u5185\u90e8\u8c03\u7528\u8be5\u51fd\u6570\uff0c\u4e5f\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," \u6bcf\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u65f6\u90fd\u4f1a\u8c03\u7528\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-create")," \u5b9a\u4e49\u7684\u5bf9\u8c61 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ChildComponent/>"),",\u8fd9\u5c31\u662f\u89e6\u53d1\u5176 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u7684\u539f\u56e0"),(0,a.kt)("h3",{id:"53-\u8ff7\u60d1\u70b93-reactmemo-\u4ec5\u7f13\u5b58\u7236\u7ec4\u4ef6\u5b50\u7ec4\u4ef6\u4ecd-re-render-\u5305\u88f9\u4e86\u5b50\u7ec4\u4ef6\u4e0d\u9700\u8981\u5305\u88f9\u7236\u7ec4\u4ef6"},"5.3 \u8ff7\u60d1\u70b93: React.memo \u4ec5\u7f13\u5b58\u7236\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u4ecd re-render, \u5305\u88f9\u4e86\u5b50\u7ec4\u4ef6\u4e0d\u9700\u8981\u5305\u88f9\u7236\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u7f13\u5b58\u7236\u7ec4\u4ef6\uff0c\u4e0d\u7f13\u5b58\u5b50\u7ec4\u4ef6"',title:'"\u7f13\u5b58\u7236\u7ec4\u4ef6\uff0c\u4e0d\u7f13\u5b58\u5b50\u7ec4\u4ef6"'},"const MovingComponent = ({children}) => {\n  const [state, setState] = useState({x: 100, y: 100})\n\n  return (\n    <div\n      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}\n      style={{left: state.x, top: state.y}}\n    >\n      {children({data: 'something'})}\n    </div>\n  )\n}\n\nconst MovingComponentMemo = React.memo(MovingComponent)\n\nconst SomeOutsideComponent = () => {\n  const [state, setState] = useState()\n\n  return (\n    <MovingComponentMemo>\n      {/* \u7236\u7ec4\u4ef6 state \u53d8\u5316\u65f6 re-render\uff0c\u5b50\u7ec4\u4ef6\u4e5f\u4f1a\u89e6\u53d1 re-render */}\n      <ChildComponent/>\n    </MovingComponentMemo>\n  )\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u5b50\u7ec4\u4ef6\u662f props\uff0c\u548c\u4e0b\u9762\u8fd9\u79cd\u5199\u6cd5\u76f8\u7b49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const SomeOutsideComponent = () => {\n  // ...\n  return <MovingComponentMemo children={<ChildComponent />} />;\n};\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u6211\u4eec\u53ea\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponentMemo")," \u8fdb\u884c\u4e86\u7f13\u5b58\uff0c\u4f46\u662f\u4ed6\u4ecd\u7136\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," ",(0,a.kt)("inlineCode",{parentName:"p"},"prop"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u63a5\u53d7\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Element")," \uff08object\uff09\u3002\u6bcf\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")," \u65f6\u90fd\u4f1a ",(0,a.kt)("inlineCode",{parentName:"p"},"re-create")," \u8fd9\u4e2a\u5bf9\u8c61\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"memoized")," \u7ec4\u4ef6\u4f1a\u5c1d\u8bd5\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u68c0\u67e5\uff0c\u68c0\u67e5\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," ",(0,a.kt)("inlineCode",{parentName:"p"},"prop")," \u6539\u53d8\uff0c\u5c31\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponentMemo")," ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),", \u8fd9\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u7684\u5b9a\u4e49\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"re-create"),"\uff0c\u6240\u4ee5\u4e5f\u4f1a\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")),(0,a.kt)("h3",{id:"54-\u8ff7\u60d1\u70b94-\u4f7f\u7528-usecallback-\u5305\u88f9-render-function\u4ecd-re-render"},"5.4 \u8ff7\u60d1\u70b94: \u4f7f\u7528 useCallback \u5305\u88f9 render function\uff0c\u4ecd re-render"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const SomeOutsideComponent = () => {\n  const [state, setState] = useState()\n\n  const child = useCallback(() => <ChildComponent />, [])\n\n  return (\n    <MovingComponent>\n      {/* \u5c3d\u7ba1\u7528 useCallback \u5305\u88f9\u7f13\u5b58\u4e86\uff0c\u4f46\u662f\u8fd8\u662f re-render */}\n      {child}\n    </MovingComponent>\n  )\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801 ",(0,a.kt)("inlineCode",{parentName:"p"},"child")," \u4f5c\u4e3a\u51fd\u6570\u8fdb\u884c\u4f20\u9012\uff0c\u4e14\u88ab\u7f13\u5b58\uff0c\u4f46\u662f\u4ecd\u7136 ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c\u548c\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u7b49\u540c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const SomeOutsideComponent = () => {\n  const [state, setState] = useState()\n\n  const child = useCallback(() => <ChildComponent />, [])\n\n  return (\n    <MovingComponent children={child} />\n  )\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u963b\u6b62 ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c\u9700\u8981\u4e0d\u5728\u8fd9\u91cc\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," \u7f13\u5b58\uff0c\u53ea\u662f\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u5305\u88f9\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo")," \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"MovingComponent")," ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render"),"\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," \u51fd\u6570\u4f1a\u88ab\u89e6\u53d1\uff0c\u4f46\u662f\u5b83\u7684\u7ed3\u679c\u88ab\u7f13\u5b58\uff0c\u6240\u4ee5\u6700\u7ec8 ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," \u4e0d\u4f1a ",(0,a.kt)("inlineCode",{parentName:"p"},"re-render")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const SomeOutsideComponent = () => {\n  const [state, setState] = useState()\n\n  const child = useCallback(() => <ChildComponent />, [])\n  const ChildComponentMemo = React.memo(ChildComponent);\n\n  return (\n    <MovingComponent>\n      {() => <ChildComponentMemo />}  \n    <MovingComponent/>\n  )\n}\n")))}c.isMDXComponent=!0}}]);