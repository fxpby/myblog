(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{443:function(s,t,a){"use strict";a.r(t);var e=a(46),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"查询数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询数据"}},[s._v("#")]),s._v(" 查询数据")]),s._v(" "),a("h2",{attrs:{id:"基本查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本查询"}},[s._v("#")]),s._v(" 基本查询")]),s._v(" "),a("p",[s._v("查询数据库表的数据，使用如下的SQL语句")]),s._v(" "),a("blockquote",[a("p",[s._v("SELECT * FROM <表名>")])]),s._v(" "),a("p",[s._v("假设表名是students，需要查询students表的所有记录，使用如下的SQL语句")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" students"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("其中SELECT是关键字，*表示“所有列”，FROM表示从哪个表查询")]),s._v(" "),a("h2",{attrs:{id:"条件查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件查询"}},[s._v("#")]),s._v(" 条件查询")]),s._v(" "),a("p",[s._v("很多时候，不需要获得一张表所有的记录，而是根据条件选择性地获取指定条件的记录。"),a("br"),s._v("\nSELECT语句可以通过WHERE条件来设定查询条件，查询结果是满足查询条件的记录。"),a("br"),s._v("\n比如指定条件“分数在80分或以上的学生”")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" students "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])])]),a("p",[s._v("WHERE关键字后面的score >= 80是条件，score是列名"),a("br"),s._v("\n由此我们可以知道条件查询的语法是：")]),s._v(" "),a("blockquote",[a("p",[s._v("SELECT * FROM <表名> WHERE <条件表达式>")])]),s._v(" "),a("p",[s._v("条件表达式可以用<条件1>AND<条件2>表达满足条件1并且满足条件2。例如，符合条件“分数在80分或以上”，并且还符合条件“男生”")]),s._v(" "),a("ul",[a("li",[s._v("条件1：根据score列的数据判断：score >= 80;")]),s._v(" "),a("li",[s._v("条件2：根据gender列的数据判断：gender = 'M',注意gender列存储的是字符串，需要用单引号括起来")])]),s._v(" "),a("p",[s._v("可以写出WHERE条件：score >= 80 AND gender = 'M'")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果只需要满足条件1或条件2中的一种的话，可以把AND查询的两个条件改为OR")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("条件3：NOT<条件>，表示“不符合该条件”的记录。例如，条件是“不是二班的学生”，可以先写出“是二班的学生”：class_id = 2,再加上NOT：NOT class_id = 2")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" students "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" class_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("需要注意的是NOT class_id = 2等价于class_id<>2"),a("br"),s._v("\n如果要组合三个或更多的条件，需要用小括号（）表示如何进行条件运算。如查询：分数在80以下或80以上的男生")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" students "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);