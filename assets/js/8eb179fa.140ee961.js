"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[2150],{28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>d});var c=l(96540);const r={},i=c.createContext(r);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(i.Provider,{value:n},e.children)}},72471:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"coding/network/http/URI-URL-URN","title":"URI\u3001URL\u3001URN\u3001Data URI \u548c Object URL/Blob URL","description":"URI","source":"@site/docs/coding/network/http/URI-URL-URN.md","sourceDirName":"coding/network/http","slug":"/coding/network/http/URI-URL-URN","permalink":"/myblog/docs/coding/network/http/URI-URL-URN","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/network/http/URI-URL-URN.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u7f51\u7edc\u534f\u8bae\u5206\u5c42","permalink":"/myblog/docs/coding/network/http/OSI"},"next":{"title":"\u524d\u7aef\u5b89\u5168","permalink":"/myblog/docs/coding/network/http/fe-safeness"}}');var r=l(74848),i=l(28453);const s={},d="URI\u3001URL\u3001URN\u3001Data URI \u548c Object URL/Blob URL",t={},o=[{value:"URI",id:"uri",level:2},{value:"\u901a\u7528\u683c\u5f0f",id:"\u901a\u7528\u683c\u5f0f",level:3},{value:"URL",id:"url",level:2},{value:"\u6807\u51c6\u683c\u5f0f",id:"\u6807\u51c6\u683c\u5f0f",level:3},{value:"Specific Schemes",id:"specific-schemes",level:3},{value:"URN",id:"urn",level:2},{value:"Data URI",id:"data-uri",level:2},{value:"\u8bed\u6cd5\u683c\u5f0f",id:"\u8bed\u6cd5\u683c\u5f0f",level:3},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:3},{value:"Object URL / Blob URL",id:"object-url--blob-url",level:2},{value:"Blob URL \u5bf9\u6bd4 Data URI \u7684\u4f18\u70b9",id:"blob-url-\u5bf9\u6bd4-data-uri-\u7684\u4f18\u70b9",level:3},{value:"\u7ec3\u624b\uff1a\u5c06\u5bf9\u8c61\u4e0b\u8f7d\u4e3a\u4e00\u4e2a <code>xxx.json</code> \u6587\u4ef6",id:"\u7ec3\u624b\u5c06\u5bf9\u8c61\u4e0b\u8f7d\u4e3a\u4e00\u4e2a-xxxjson-\u6587\u4ef6",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"uriurlurndata-uri-\u548c-object-urlblob-url",children:"URI\u3001URL\u3001URN\u3001Data URI \u548c Object URL/Blob URL"})}),"\n",(0,r.jsx)(n.h2,{id:"uri",children:"URI"}),"\n",(0,r.jsx)(n.p,{children:"Uniform Resource Identifier \u7edf\u4e00\u8d44\u6e90\u6807\u5fd7\u7b26"}),"\n",(0,r.jsxs)(n.p,{children:["\u5305\u542b ",(0,r.jsx)(n.code,{children:"URL"})," \u548c ",(0,r.jsx)(n.code,{children:"URN"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u7528\u683c\u5f0f",children:"\u901a\u7528\u683c\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"[\u534f\u8bae\u540d]://[\u7528\u6237\u540d]:[\u5bc6\u7801]@[\u4e3b\u673a\u540d]:[\u7aef\u53e3]/[\u8def\u5f84]?[\u67e5\u8be2\u53c2\u6570]#[\u7247\u6bb5ID]"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/http/uri-eg2.png",alt:"uri"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["authority: \u7528\u6237\u8ba4\u8bc1",(0,r.jsx)(n.br,{}),"\n","fragment: \u7247\u6bb5\u6807\u8bc6\u7b26\uff0chash \u53c2\u6570"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"url",children:"URL"}),"\n",(0,r.jsx)(n.p,{children:"Uniform Resource Locator \u7edf\u4e00\u8d44\u6e90\u5b9a\u4f4d\u7b26"}),"\n",(0,r.jsx)(n.h3,{id:"\u6807\u51c6\u683c\u5f0f",children:"\u6807\u51c6\u683c\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"protocol://<user>:<password>@<host>:<port>/<url-path>"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6ca1\u6709 port \u9ed8\u8ba4 80 \u7aef\u53e3",(0,r.jsx)(n.br,{}),"\n","url-path: /[\u8def\u5f84]?[\u67e5\u8be2\u53c2\u6570]#[\u7247\u6bb5 ID]"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"specific-schemes",children:"Specific Schemes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ftp File Transfer protocol"}),"\n",(0,r.jsx)(n.li,{children:"http Hypertext Transfer Protocol"}),"\n",(0,r.jsx)(n.li,{children:"gopher The Gopher protocol"}),"\n",(0,r.jsx)(n.li,{children:"mailto Electronic mail address"}),"\n",(0,r.jsx)(n.li,{children:"news USENET news"}),"\n",(0,r.jsx)(n.li,{children:"nntp USENET news using NNTP access"}),"\n",(0,r.jsx)(n.li,{children:"telnet Reference to interactive sessions"}),"\n",(0,r.jsx)(n.li,{children:"wais Wide Area Information Servers"}),"\n",(0,r.jsx)(n.li,{children:"file Host-specific file names"}),"\n",(0,r.jsx)(n.li,{children:"prospero Prospero Directory Service"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc1738#section-3.1",children:"Internet URL \u901a\u7528\u8bed\u6cd5 rfc1738"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"urn",children:"URN"}),"\n",(0,r.jsxs)(n.p,{children:["Uniform Resource Name \u7edf\u4e00\u8d44\u6e90\u540d\u79f0\uff0c\u662f ",(0,r.jsx)(n.code,{children:"URI"})," \u7684\u5386\u53f2\u540d\u5b57\uff0c\u5df2\u7ecf\u88ab ",(0,r.jsx)(n.code,{children:"URI"})," \u53d6\u4ee3"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u8d44\u6e90\u79fb\u52a8\u4e4b\u540e\u8fd8\u80fd\u591f\u88ab\u627e\u5230"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u5305\u542b\u4efb\u4f55\u534f\u8bae"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"data-uri",children:"Data URI"}),"\n",(0,r.jsxs)(n.p,{children:["\u534f\u8bae\u4e3a ",(0,r.jsx)(n.code,{children:"data:"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bed\u6cd5\u683c\u5f0f",children:"\u8bed\u6cd5\u683c\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"data:[<media type>][;base64],<data>"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data:"}),": \u534f\u8bae"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"media type"}),": MIME, \u9ed8\u8ba4\u4e3a text/plain;charset=US-ASCII"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"base64"}),": base64 \u7f16\u7801\uff0c\u5982\u679c\u6ca1\u6709\u6307\u51fa\u4e3a base64 \u7f16\u7801\uff0c\u6309\u7167 URI \u7f16\u7801"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": ",(0,r.jsx)(n.code,{children:"Data URI"})," \u627f\u8f7d\u5185\u5bb9","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6570\u636e\u4e3a\u6587\u672c\u7c7b\u578b: \u53ef\u4ee5\u76f4\u63a5\u5c06\u6587\u672c\u5d4c\u5165 (\u6839\u636e\u6587\u6863\u7c7b\u578b\uff0c\u4f7f\u7528\u5408\u9002\u7684\u5b9e\u4f53\u5b57\u7b26\u6216\u8f6c\u4e49\u5b57\u7b26)"}),"\n",(0,r.jsx)(n.li,{children:"\u6570\u636e\u4e3a\u4e8c\u8fdb\u5236\u7c7b\u578b: \u53ef\u4ee5\u5c06\u6570\u636e\u8fdb\u884c base64 \u7f16\u7801\u4e4b\u540e\u518d\u8fdb\u884c\u5d4c\u5165"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f18\u70b9",children:"\u4f18\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u6570\u636e\u5d4c\u5165\u6587\u4ef6\u5185\u90e8\uff0c\u53ef\u4ee5\u51cf\u5c11\u4e00\u6b21 HTTP \u8bf7\u6c42\uff0c\u6bd4\u5982 ",(0,r.jsx)(n.code,{children:"webpack"})," \u4e2d\uff0c ",(0,r.jsx)(n.code,{children:"url-loader"})," \u4f1a\u5c06\u5f15\u5165\u7684\u56fe\u7247\u7f16\u7801\uff0c\u751f\u6210 ",(0,r.jsx)(n.code,{children:"dataURI"}),", \u76f8\u5f53\u4e8e\u628a\u56fe\u7247\u6570\u636e\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\uff0c\u518d\u628a\u5b57\u7b26\u4e32\u6253\u5305\u5230\u6587\u4ef6\u4e2d\uff0c\u6700\u7ec8\u5f15\u5165\u6587\u4ef6\u5373\u53ef\u8bbf\u95ee\u56fe\u7247\uff08\u5982\u679c\u56fe\u7247\u6bd4\u8f83\u5927\uff0c\u56fe\u7247\u7f16\u7801\u4f1a\u6d88\u8017\u6027\u80fd\uff0c",(0,r.jsx)(n.code,{children:"url-loader"}),"\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"limit"})," \u53c2\u6570\u6765\u63a7\u5236\uff0c\u5927\u4e8e ",(0,r.jsx)(n.code,{children:"limit"})," \u7684\u4f7f\u7528",(0,r.jsx)(n.code,{children:"file-loader"})," \u8fdb\u884c\u64cd\u4f5c\uff09\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6587\u4ef6\u4f53\u79ef\u589e\u5927\r\n",(0,r.jsx)(n.code,{children:"Data URI"})," \u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Base64"})," \u7f16\u7801\uff0c\u6bcf\u4e2a char \u5728 JavaScript \u4e2d\u5360\u7528\u4e24\u4e2a\u5b57\u8282, \u6700\u7ec8\u5c06\u4f1a\u6bd4\u539f\u6587\u4ef6\u5927 1.37 \u500d+814 \u5b57\u8282\uff08\u5934\u90e8\uff09"]}),"\n",(0,r.jsx)(n.li,{children:"\u963b\u585e\u6e32\u67d3\r\n\u963b\u585e\u9875\u9762\u7ee7\u7eed\u89e3\u6790\u548c\u6e32\u67d3"}),"\n",(0,r.jsxs)(n.li,{children:["\u56fe\u7247\u65e0\u6cd5\u4f7f\u7528 HTTP \u7f13\u5b58\r\n",(0,r.jsx)(n.code,{children:"Data URI"})," \u65e0\u6cd5\u4f7f\u7528\u72ec\u7acb\u7684 HTTP \u7f13\u5b58\uff0c\u4f46\u662f\u6bd4\u5982 HTML \u6587\u4ef6\u53ef\u4ee5\u7f13\u5b58\uff08\u540c\u65f6\u7f13\u5b58\u4e86 ",(0,r.jsx)(n.code,{children:"Data URI"}),"\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6790\u8f83\u6162\uff0c\u79fb\u52a8\u7aef\u660e\u663e\r\n",(0,r.jsx)(n.code,{children:"Data URI"})," \u5185\u5bb9\u7531\u6d4f\u89c8\u5668\u89e3\u7801\u56de\u539f\u59cb\u5f62\u5f0f\uff0c\u989d\u5916\u6d88\u8017\u6027\u80fd\uff08CPU\u3001\u7535\u91cf\uff09\uff0c\u6d4f\u89c8\u5668\u6bcf\u6b21\u9875\u9762\u6e32\u67d3\u65f6\u5fc5\u987b\u89e3\u7801\u56fe\u50cf\uff0c\u4e8c\u8fdb\u5236\u56fe\u50cf\u6ca1\u6709\u989d\u5916\u7684\u89e3\u7801\u6b65\u9aa4"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5b58\u50a8\u56fe\u7247\uff0c\u51cf\u5c11 HTTP \u8bf7\u6c42"}),"\n",(0,r.jsx)(n.li,{children:"\u672c\u5730\u8bfb\u53d6\u6587\u4ef6\uff0c\u56fe\u7247\u9884\u89c8"}),"\n",(0,r.jsx)(n.li,{children:"\u524d\u7aef\u6587\u4ef6\u4e0b\u8f7d"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"object-url--blob-url",children:"Object URL / Blob URL"}),"\n",(0,r.jsxs)(n.p,{children:["\u5141\u8bb8 ",(0,r.jsx)(n.code,{children:"Blob"}),"\u3001",(0,r.jsx)(n.code,{children:"File"}),"\u3001",(0,r.jsx)(n.code,{children:"MediaSource"})," \u505a\u4e3a ",(0,r.jsx)(n.code,{children:"URL \u6e90"}),"\uff0c\u53ef\u4ee5\u7528\u4e8e\u5bfc\u822a\uff08\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"img src"}),"\uff09\u6216\u8005\u672c\u5730\u4e0b\u8f7d\uff0c\u8fd9\u4e9b ",(0,r.jsx)(n.code,{children:"URL"})," \u53ea\u80fd\u5728\u6d4f\u89c8\u5668\u5185\u90e8\u751f\u6210\uff0c\u4e14\u53ea\u80fd\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u4f7f\u7528"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<input type="file" name="file" id="file" />\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'document.getElementById("file").addEventListener("change", (ev) => {\r\n  const url = URL.createObjectURL(ev.target.files[0]);\r\n  console.log(url);\r\n  // \'blob:http://localhost:5500/3708d657-3b56-434a-958f-8a353d595c07\'\r\n  const img = document.createElement("img");\r\n  img.src = url;\r\n  img.addEventListener("load", () => {\r\n    document.body.appendChild(img);\r\n  });\r\n});\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"URL.createObjectURL()"}),"\r\n",(0,r.jsx)(n.code,{children:"URL.createObjectURL()"})," \u9759\u6001\u65b9\u6cd5\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"DOMString"}),"\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u8868\u793a\u53c2\u6570\u4e2d\u7ed9\u51fa\u7684\u5bf9\u8c61\u7684",(0,r.jsx)(n.code,{children:"URL"}),"\u3002\u8fd9\u4e2a ",(0,r.jsx)(n.code,{children:"URL"})," \u7684\u751f\u547d\u5468\u671f\u548c\u521b\u5efa\u5b83\u7684\u7a97\u53e3\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"document"})," \u7ed1\u5b9a\u3002\u8fd9\u4e2a\u65b0\u7684 ",(0,r.jsx)(n.code,{children:"URL \u5bf9\u8c61"}),"\u8868\u793a\u6307\u5b9a\u7684 ",(0,r.jsx)(n.code,{children:"File \u5bf9\u8c61"}),"\u6216 ",(0,r.jsx)(n.code,{children:"Blob \u5bf9\u8c61"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"URL.revokeObjectURL()"}),"\r\n",(0,r.jsx)(n.code,{children:"URL.revokeObjectURL()"})," \u9759\u6001\u65b9\u6cd5\u7528\u6765\u91ca\u653e\u4e00\u4e2a\u4e4b\u524d\u5df2\u7ecf\u5b58\u5728\u7684\u3001\u901a\u8fc7\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"URL.createObjectURL()"})," \u521b\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"URL \u5bf9\u8c61"}),"\u3002\u5f53\u4f60\u7ed3\u675f\u4f7f\u7528\u67d0\u4e2a",(0,r.jsx)(n.code,{children:"URL \u5bf9\u8c61"}),"\u4e4b\u540e\uff0c\u5e94\u8be5\u901a\u8fc7\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u6765\u8ba9\u6d4f\u89c8\u5668\u77e5\u9053\u4e0d\u7528\u5728\u5185\u5b58\u4e2d\u7ee7\u7eed\u4fdd\u7559\u5bf9\u8fd9\u4e2a\u6587\u4ef6\u7684\u5f15\u7528\u4e86"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"blob-url-\u5bf9\u6bd4-data-uri-\u7684\u4f18\u70b9",children:"Blob URL \u5bf9\u6bd4 Data URI \u7684\u4f18\u70b9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f53\u79ef\u66f4\u5c0f","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Blob URL"})," \u4f7f\u7528\u4e8c\u8fdb\u5236"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Data URI"})," \u4e3a ",(0,r.jsx)(n.code,{children:"Base64"}),"\u3001",(0,r.jsx)(n.code,{children:"URI \u7f16\u7801"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u901f\u5ea6\u66f4\u5feb","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Blob"})," \u53ea\u662f\u5b57\u8282\u5e8f\u5217\uff0c\u6d4f\u89c8\u5668\u5c06\u5176\u8bc6\u522b\u4e3a\u5b57\u8282\u6d41"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Data URI"})," \u5177\u6709\u89e3\u7801\u5f00\u9500"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5f02\u6b65\u52a0\u8f7d","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Blob URL"})," \u52a0\u8f7d\u6587\u4ef6\u4e3a\u540c\u6b65"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FileReader"})," \u52a0\u8f7d\u6587\u4ef6\u4e3a ",(0,r.jsx)(n.code,{children:"Data URI"})," \u4e3a\u5f02\u6b65"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u7ec3\u624b\u5c06\u5bf9\u8c61\u4e0b\u8f7d\u4e3a\u4e00\u4e2a-xxxjson-\u6587\u4ef6",children:["\u7ec3\u624b\uff1a\u5c06\u5bf9\u8c61\u4e0b\u8f7d\u4e3a\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"xxx.json"})," \u6587\u4ef6"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<button id="btn">\u70b9\u6211\u4e0b\u8f7d json \u6587\u4ef6</button>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const btn = document.getElementById("btn");\r\nbtn.addEventListener("click", () => {\r\n  const data = JSON.stringify({ name: "olu", age: 18 });\r\n  const blobURL = new Blob([data], { type: "text/json" });\r\n  const link = document.createElement("a");\r\n  link.style.display = "none";\r\n  link.download = `xxx.json`;\r\n  /**\r\n   * \u4f7f\u7528 Blob \u521b\u5efa\u4e00\u4e2a\u6307\u5411\u7c7b\u578b\u5316\u6570\u7ec4\u7684URL\r\n   * \u4f1a\u4ea7\u751f\u4e00\u4e2a\u7c7b\u4f3c blob:d3958f5c-0777-0845-9dcf-2cb28783acaf \u8fd9\u6837\u7684URL\u5b57\u7b26\u4e32\r\n   * \u53ef\u4ee5\u50cf\u4f7f\u7528\u666e\u901a URL \u90a3\u6837\u4f7f\u7528\u5b83\uff0c\u6bd4\u5982\u7528\u5728 img.src \u4e0a\r\n   **/\r\n  link.href = URL.createObjectURL(blobURL);\r\n  document.body.appendChild(link);\r\n  link.click();\r\n\r\n  // \u5220\u9664DOM\u3001\u91ca\u653e\u5bf9\u8c61URL\r\n  setTimeout(() => {\r\n    document.body.removeChild(link);\r\n    URL.revokeObjectURL(blobURL);\r\n  }, 200);\r\n});\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);