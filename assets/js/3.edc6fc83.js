(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{235:function(t,a,e){},254:function(t,a,e){"use strict";e(235)},271:function(t,a,e){"use strict";var i={name:"Home",components:{NavLink:e(234).a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(e(254),e(10)),s=Object(n.a)(i,(function(){var t=this,a=t._self._c;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n        "+t._s(t.data.heroText||t.$title||"Hello")+"\n      ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return a("div",{key:i,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t._m(0)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[this._v("\n      Copyright © 2021 olumel.top | 津ICP备2021008930号-1\n      "),t("div",{staticStyle:{width:"300px",margin:"0 auto",padding:"20px 0"}},[t("a",{staticStyle:{display:"inline-block","text-decoration":"none",height:"20px","line-height":"20px"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011602000961"}},[t("img",{staticStyle:{float:"left"},attrs:{src:"/myblog/beian.png"}}),this._v(" "),t("p",{staticStyle:{float:"left",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#939393"}},[this._v("\n            津公网安备 12011602000961号\n          ")])])])])}],!1,null,null,null);a.a=s.exports}}]);