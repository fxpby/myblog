module.exports = {
	base: '/myblog/',
	title: "fxpby's blog",
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			// {
			// 	text: '笔记', items: [
			// 		{ text: 'HTML', link: '/note/HTML/' },
			// 		{ text: 'CSS', link: '/note/CSS/' },
			// 		{ text: 'JavaScript', link: '/note/JavaScript/' },
			// 		{ text: 'node.js', link: '/note/node.js/' },
			// 		{ text: 'Vue', link: '/note/vue/' }
			// 	]
			// },
			{ text: '博文', link: '/note/HTML/Semantics' },
			{ text: '算法', link: '/algorithm/leetcode/twosum' }
			// ,
			// { text: 'SQL', link: '/sql/' },
			// { text: 'Github', link: 'https://github.com/fxpby/' }
		],
		sidebar: {
			'/note/':[
				{
					title: 'HTML',
					collapsable: false,
					children: [
						// ['/note/HTML/negativeMargin','负margin'],
						['/note/HTML/Semantics','HTML5语义化'],
						['/note/HTML/HTML5DOM','HTML5 DOM']

					]
				},
				{
					title: 'CSS',
					collapsable: false,
					children: [
						['/note/CSS/BFC','BFC'],
						['/note/CSS/HCenter','水平居中'],
						['/note/CSS/VCenter','垂直居中'],
						['/note/CSS/HVCenter','水平垂直居中'],
						['/note/CSS/Flex','Flex布局'],
						['/note/CSS/weight','权重']
					]
				},
				{
					title: 'ES6',
					collapsable: false,
					children: [
						['/note/ES6/es6','es6']
					]
				},
				{
					title: 'JavaScript',
					collapsable: false,
					children: [
						// ['/note/JavaScript/closure','闭包'],
						['/note/JavaScript/RegExp','正则'],
						['/note/JavaScript/this','this词法'],
						['/note/JavaScript/Hoisting','变量提升'],
						['/note/JavaScript/Copy','深拷贝']

					]
				},
				{
					title: 'Node.js',
					collapsable: false,
					children: [
						['/note/node.js/npm','安装npm']
					]
				},
				{
					title: 'Vue',
					collapsable: false,
					children: [
						['/note/vue/ref','ref与$refs'],
						['/note/vue/set','$set的使用'],
						['/note/vue/watch','watch监听'],
						['/note/vue/emit','子组件调用父组件方法']
					]
				},
				{
					title: 'npm',
					collapsable: false,
					children: [
						['/note/npm/init','修改elementUI上传npm总结']
					]
				}
			],
			'/algorithm/':[
				{
					title: 'leetcode',
					collapsable: false,
					children: [
						['/algorithm/leetcode/twosum','两数之和']
					]
				}
			]
			// ,
			// '/sql/':[
			// 	{
			// 		title: 'sql',
			// 		collapsable: false,
			// 		children: [
			// 			['/sql/searchdata/','查询数据']
			// 		]
			// 	}
			// ]	
		},
		sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。 
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间 
		lastUpdated: true
	}
};

