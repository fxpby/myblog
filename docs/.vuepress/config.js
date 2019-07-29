module.exports = {
	base: '/myblog/',
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
			{ text: '博文', link: '/note/' },
			{ text: '算法', link: '/algorithm/' },
			{ text: 'Github', link: 'https://github.com/fxpby/' }
		],
		sidebar: {
			'/note/':[
				{
					title: 'HTML',
					collapsable: false,
					children: [
						['/note/HTML/weight','权重'],
						['/note/HTML/negativeMargin','负margin']
					]
				},
				{
					title: 'CSS',
					collapsable: false,
					children: [
						['/note/CSS/BFC','BFC'],
						['/note/CSS/HCenter','水平居中'],
						['/note/CSS/VCenter','垂直居中'],
						['/note/CSS/Flex','Flex布局']
					]
				},
				{
					title: 'JavaScript',
					collapsable: false,
					children: [
						['/note/JavaScript/closure','闭包']
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
						['/note/vue/first','开始']
					]
				}
			],
			'/algorithm/':[
				{
					title: '算法',
					collapsable: false,
					children: [
						['/algorithm/eg/eg1','eg1'],
						['/algorithm/eg/eg2','eg2']
					]
				}
			]		
		},
		sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。 
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间 
		lastUpdated: true
	}
};

