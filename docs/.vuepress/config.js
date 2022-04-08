module.exports = {
  base: "/myblog/",
  title: "fxpby和olu是好朋友",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "博文", link: "/note/HTML/favicon" },
      { text: "设计模式", link: "/designPattern/uml/uml" },
      { text: "HTTP", link: "/http/http-history" },
      { text: "数据结构和算法", link: "/dataStructures/array/array" },
      { text: "力扣", link: "/leetcode/array/twosum" },
      { text: "副本打怪", link: "/exercise/BitCounting" },
      { text: 'Github', link: 'https://github.com/fxpby/' }
    ],
    sidebar: {
      "/note/": [
        {
          title: "HTML",
          collapsable: false,
          children: [
            ["/note/HTML/attrs", "HTML 属性和 DOM 属性关系"],
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
        {
          title: "JavaScript",
          collapsable: false,
          children: [
            ["/note/JavaScript/data-element", "数据类型"],
            [
              "/note/JavaScript/compare-value",
              "typeof/instanceof/{}.toString 检查类型",
            ],
            ["/note/JavaScript/Copy", "深拷贝"],
          ],
        },
        {
          title: "TypeScript",
          collapsable: false,
          children: [
            ["/note/TypeScript/everyday-types", "数据类型"],
            ["/note/TypeScript/tsconfig", "tsconfig.json 配置"],
            ["/note/TypeScript/typeof-guard", "typeof 类型守卫"],
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
        {
          title: "框架",
          collapsable: false,
          children: [
            ["/framework/runtime-compiletime", "运行时和编译时"],
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
        // 	title: '浏览器兼容性',
        // 	collapsable: false,
        // 	children: [
        // 		['/note/BrowserCompatibility/zone','Invalid Date'],
        // 		['/note/BrowserCompatibility/ie11','IE11相关踩坑']
        // 	]
        // }
      ],
      "/http/": [
        {
          title: "HTTP",
          collapsable: false,
          children: [
            ["/http/http-history", "http 历史"],
            ["/http/OSI", "网络协议分层"],
            ["/http/shake-hands", "三次握手"],
            ["/http/URI-URL-URN", "URI、URL、URN、Data URI、Object URL 和 Blob URL"],
          ],
        },
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
            ["/designPattern/prototype-pattern/base", "原型模式"],
            ["/designPattern/bridge-pattern/base", "桥接模式"],
            ["/designPattern/composite-pattern/base", "组合模式"],
            ["/designPattern/flyweight-pattern/base", "享元模式"],
            ["/designPattern/strategy-pattern/base", "策略模式"],
            ["/designPattern/template-method-pattern/base", "模板方法模式"],
            ["/designPattern/chain-of-responsibility-pattern/base", "职责链模式"],
            ["/designPattern/command-pattern/base", "命令模式"],
            ["/designPattern/memento-pattern/base", "备忘录模式"],
            ["/designPattern/mediator-pattern/base", "中介者模式"],
            ["/designPattern/comprehensive-application/case1", "综合实践-模拟购物车"],
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
