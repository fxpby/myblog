module.exports = {
  base: "/myblog/",
  title: "fxpby和olu是好朋友",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      // {
      // 	text: '笔记', items: [
      // 		{ text: 'HTML', link: '/note/HTML/' },
      // 		{ text: 'CSS', link: '/note/CSS/' },
      // 		{ text: 'JavaScript', link: '/note/JavaScript/' },
      // 		{ text: 'node.js', link: '/note/node.js/' },
      // 		{ text: 'Vue', link: '/note/vue/' }
      // 	]
      // },
      { text: "博文", link: "/note/HTML/favicon" },
      { text: "设计模式", link: "/designPattern/uml/uml" },
      { text: "数据结构和算法", link: "/dataStructures/array/array" },
      { text: "力扣", link: "/leetcode/array/twosum" },
      { text: "副本打怪", link: "/exercise/BitCounting" },
      // ,
      // { text: 'SQL', link: '/sql/' },
      // { text: 'Github', link: 'https://github.com/fxpby/' }
    ],
    sidebar: {
      "/note/": [
        {
          title: "HTML",
          collapsable: false,
          children: [
            // ['/note/HTML/negativeMargin','负margin'],
            ["/note/HTML/Semantics", "HTML5语义化"],
            ["/note/HTML/HTML5DOM", "HTML5 DOM"],
            ["/note/HTML/favicon", "favicon相关粗略总结"],
          ],
        },
        {
          title: "CSS",
          collapsable: false,
          children: [
            ["/note/CSS/BFC", "BFC"],
            ["/note/CSS/HCenter", "水平居中"],
            ["/note/CSS/VCenter", "垂直居中"],
            ["/note/CSS/HVCenter", "水平垂直居中"],
            ["/note/CSS/Flex", "Flex布局"],
            ["/note/CSS/weight", "权重"],
          ],
        },
        // {
        //   title: "ES6",
        //   collapsable: false,
        //   children: [["/note/ES6/es6", "es6"]],
        // },
        {
          title: "JavaScript",
          collapsable: false,
          children: [
            // ['/note/JavaScript/closure','闭包'],
            ["/note/JavaScript/data-element", "数据类型"],
            [
              "/note/JavaScript/compare-value",
              "typeof/instanceof/{}.toString 检查类型",
            ],
            ["/note/JavaScript/type-transform", "类型转换"],
            // ["/note/JavaScript/RegExp", "正则"],
            // ["/note/JavaScript/this", "this词法"],
            // ["/note/JavaScript/Hoisting", "变量提升"],
            ["/note/JavaScript/Copy", "深拷贝"],
          ],
        },
        {
          title: "前端工程化",
          collapsable: false,
          children: [
            [
              "/note/front-end-engineering/travis-ci-for-vuepress",
              "初探Travis CI: 实现VuePress自动化部署",
            ],
            [
              "/note/front-end-engineering/github-action-for-vuepress",
              "初探GitHub Actions: 实现VuePress自动化部署",
            ],
          ],
        },
        // {
        //   title: "Node.js",
        //   collapsable: false,
        //   children: [["/note/node.js/npm", "安装npm"]],
        // },
        {
          title: "Vue",
          collapsable: false,
          children: [
            ["/note/vue/ref", "ref与$refs"],
            ["/note/vue/set", "$set的使用"],
            ["/note/vue/watch", "watch监听"],
            ["/note/vue/emit", "子组件调用父组件方法"],
          ],
        },
        {
          title: "npm",
          collapsable: false,
          children: [["/note/npm/init", "修改elementUI上传npm总结"]],
        },
        // {
        // 	title: '重学JS',
        // 	collapsable: false,
        // 	children: [
        // 		['/note/restartJS/dataType','数据类型']
        // 	]
        // },
        // {
        // 	title: '浏览器兼容性',
        // 	collapsable: false,
        // 	children: [
        // 		['/note/BrowserCompatibility/zone','Invalid Date'],
        // 		['/note/BrowserCompatibility/ie11','IE11相关踩坑']
        // 	]
        // }
      ],
      "/designPattern/": [
        {
          title: "设计模式",
          collapsable: false,
          children: [
            ["/designPattern/uml/uml", "uml 类图"],
            ["/designPattern/object-oriented/object-oriented", "面向对象"],
            ["/designPattern/design-principle/design-principle", "设计原则"],
            ["/designPattern/factory-pattern/base", "工厂模式"],
            ["/designPattern/singleton-pattern/base", "单例模式"],
            ["/designPattern/adapter-pattern/base", "适配器模式"],
            ["/designPattern/decorator-pattern/base", "装饰器模式"],
            ["/designPattern/proxy-pattern/base", "代理模式"],
            ["/designPattern/facade-pattern/base", "外观模式"],
            ["/designPattern/observer-pattern/base", "观察者模式"],
            ["/designPattern/iterator-pattern/base", "迭代器模式"],
            ["/designPattern/state-pattern/base", "状态模式"],
          ],
        },
      ],
      "/dataStructures/": [
        {
          title: "时间复杂度",
          collapsable: false,
          children: [["/dataStructures/timeComplexity/timeComplexity", "时间复杂度"]],
        },
        {
          title: "空间复杂度",
          collapsable: false,
          children: [["/dataStructures/spaceComplexity/spaceComplexity", "空间复杂度"]],
        },
        {
          title: "数组",
          collapsable: false,
          children: [["/dataStructures/array/array", "数组"]],
        },
        {
          title: "栈",
          collapsable: false,
          children: [["/dataStructures/stack/stack-array", "栈"]],
        },
        {
          title: "队列",
          collapsable: false,
          children: [
            ["/dataStructures/queue/queue", "队列"],
            ["/dataStructures/queue/deque", "双端队列"],
            ["/dataStructures/queue/hotpotato", "循环队列 - 击鼓传花"],
            ["/dataStructures/queue/palindromeChecker", "回文检查器"],
          ],
        },
        {
          title: "链表",
          collapsable: false,
          children: [
            ["/dataStructures/linkedList/linkedlist", "单向链表"],
            ["/dataStructures/linkedList/doublyLinkedList", "双向链表"],
            ["/dataStructures/linkedList/circularLinkedList", "循环链表"],
            ["/dataStructures/linkedList/sortedLinkedList", "有序链表"],
          ],
        },
        {
          title: "集合",
          collapsable: false,
          children: [["/dataStructures/set/set", "集合"]],
        },
        {
          title: "字典",
          collapsable: false,
          children: [["/dataStructures/dictionary/dictionary", "字典"]],
        },
        {
          title: "散列表",
          collapsable: false,
          children: [
            ["/dataStructures/hashtable/hashtable", "散列表"],
            [
              "/dataStructures/hashtable/hashtableSeparateChaining",
              "散列表 - 链地址法",
            ],
          ],
        },
        {
          title: "树",
          collapsable: false,
          children: [["/dataStructures/tree/binarySearchTree", "二叉搜索树"]],
        },
        {
          title: "二叉堆",
          collapsable: false,
          children: [["/dataStructures/heap/heap", "二叉堆"]],
        },
        {
          title: "图",
          collapsable: false,
          children: [["/dataStructures/graph/graph", "图"]],
        },
      ],
      "/leetcode/": [
        {
          title: "栈",
          collapsable: false,
          children: [
            ["/leetcode/stack/valid-parentheses", "20.有效的括号"],
          ],
        },
        {
          title: "队列",
          collapsable: false,
          children: [
            ["/leetcode/queue/number-of-recent-calls", "933.最近的请求次数"],
          ],
        },
        {
          title: "链表",
          collapsable: false,
          children: [
            ["/leetcode/linkedList/add-two-numbers", "2.两数相加"],
            ["/leetcode/linkedList/linked-list-cycle", "141.环形链表"],
            ["/leetcode/linkedList/remove-duplicates-from-sorted-list", "83.删除排序链表中的重复元素"],
            ["/leetcode/linkedList/reverse-linked-list", "206.反转单链表"],
            ["/leetcode/linkedList/delete-node-in-a-linked-list", "237.删除链表中的节点"],
          ],
        },
        {
          title: "数组",
          collapsable: false,
          children: [
            ["/leetcode/array/twosum", "两数之和"],
            [
              "/leetcode/array/remove-duplicates-from-sorted-array",
              "删除排序数组中的重复项",
            ],
            ["/leetcode/array/remove-element", "移除指定元素"],
            ["/leetcode/array/search-insert-position", "搜索插入位置"],
          ],
        },
      ],
      "/exercise/": [
        {
          title: "codewar",
          collapsable: false,
          children: [
            ["/exercise/BitCounting", "Bit Counting"],
            ["/exercise/WhoLikesIt", "Who likes it"],
            ["/exercise/ExtractDomain", "Extract the domain name from a URL"],
            ["/exercise/CountingDuplicates", "Counting Duplicates"],
          ],
        },
      ],
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
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    lastUpdated: false,
  },
  head: [
    [
      "script",
      {},
      `
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?560be5dada9664ddc2907a2c2e79f23b";
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();
		`,
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?cd09cc141cdd07e547a366648c6dd0c4";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  plugins: [
    ['vuepress-plugin-mermaidjs'],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-217600182-1'
      }
    ]
  ],
};
