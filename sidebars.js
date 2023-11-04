/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  html: [
    {
      type: 'autogenerated',
      dirName: 'html',
    },
  ],
  css: [
    'css/box-model',
    'css/BFC',
    'css/HCenter',
    'css/VCenter',
    'css/HVCenter',
    'css/weight',
  ],
  javascript: [
    'javascript/memory',
    'javascript/data-element',
    'javascript/compare-value',
    'javascript/higher-order-function',
    'javascript/deep-copy',
    'javascript/out-script',
    'javascript/throttle-debounce',
    'javascript/compose-pipe',
    'javascript/this',
    'javascript/apply-call-bind',
    {
      type: 'category',
      label: 'Promise',
      collapsed: true,
      items: [
        'javascript/promise/traffic-light/1-exercise-traffic-light',
        'javascript/promise/serial/1-exercise-serial-request',
      ],
    },
  ],
  typescript: [
    {
      type: 'category',
      label: '基础',
      collapsed: false,
      items: [
        'typescript/basic/ts-type-annotation',
        'typescript/basic/ts-primitive-data-types',
        'typescript/basic/ts-array',
        'typescript/basic/ts-object',
        'typescript/basic/ts-function',
        'typescript/basic/ts-any',
        'typescript/basic/ts-interfaces',
        'typescript/basic/ts-union-types',
        'typescript/basic/ts-discriminated-union',
        'typescript/basic/ts-operator',
        'typescript/basic/ts-type-assertions',
        'typescript/basic/ts-cross-types',
        'typescript/basic/ts-built-in-objects',
      ],
    },
    {
      type: 'category',
      label: '进阶',
      collapsed: false,
      items: [
        'typescript/advance/type-aliases',
        'typescript/advance/ts-class',
        'typescript/advance/ts-tuple',
        'typescript/advance/ts-enum',
        'typescript/advance/ts-three-diagonal',
        'typescript/advance/ts-generics',
        'typescript/advance/ts-utility',
        'typescript/advance/ts-mixins',
        'typescript/advance/ts-decorator',
      ],
    },
    'typescript/tsconfig',
    'typescript/typeof-guard',
  ],
  // 'nodejs': [],
  framework: ['framework/runtime-compiletime'],
  vue2: [
    'vue/vue2/vue2-learn-prepare',
    'vue/vue2/vue2-build',
    'vue/vue2/vue2-init-process',
    'vue/vue2/vue2-reactivity',
  ],
  'front-end-engineering': [
    'front-end-engineering/travis-ci-for-vuepress',
    'front-end-engineering/github-action-for-vuepress',
    'front-end-engineering/build-frontend-project-standardization',
    {
      type: 'category',
      label: '持续集成与部署',
      collapsed: false,
      items: [
        'front-end-engineering/cicd/cicd-intro',
        'front-end-engineering/cicd/jenkins-intro',
        'front-end-engineering/release-strategy/frontend-release-strategy',
        'front-end-engineering/release-strategy/backend-release-strategy',
        'front-end-engineering/deploy/environment-deploy',
      ],
    },
    {
      type: 'category',
      label: 'npm',
      items: ['front-end-engineering/npm/npm-scoped-packages'],
    },
    {
      type: 'category',
      label: 'nginx',
      items: ['nginx/nginx-cors', 'nginx/nginx-cache/nginx-cache-directive'],
    },
  ],
  browser: [
    'browser/layout-paint',
    'browser/browser-storage-caching-scheme',
    'browser/browser-router',
  ],
  'design-pattern': [
    'design-pattern/uml/uml-basics',
    'design-pattern/object-oriented/object-oriented-basics',
    'design-pattern/design-principle/design-principle-basics',
    'design-pattern/factory-pattern/factory-pattern-basics',
    'design-pattern/singleton-pattern/singleton-pattern-basics',
    'design-pattern/adapter-pattern/adapter-pattern-basics',
    'design-pattern/decorator-pattern/decorator-pattern-basics',
    'design-pattern/proxy-pattern/proxy-pattern-basics',
    'design-pattern/facade-pattern/facade-pattern-basics',
    'design-pattern/observer-pattern/observer-pattern-basics',
    'design-pattern/iterator-pattern/iterator-pattern-basics',
    'design-pattern/state-pattern/state-pattern-basics',
    'design-pattern/prototype-pattern/prototype-pattern-basics',
    'design-pattern/bridge-pattern/bridge-pattern-basics',
    'design-pattern/composite-pattern/composite-pattern-basics',
    'design-pattern/flyweight-pattern/flyweight-pattern-basics',
    'design-pattern/strategy-pattern/strategy-pattern-basics',
    'design-pattern/template-method-pattern/template-method-pattern-basics',
    'design-pattern/chain-of-responsibility-pattern/chain-of-responsibility-pattern-basics',
    'design-pattern/command-pattern/command-pattern-basics',
    'design-pattern/memento-pattern/memento-pattern-basics',
    'design-pattern/mediator-pattern/mediator-pattern-basics',
    'design-pattern/comprehensive-application/comprehensive-application-case',
  ],
  network: [
    'network/http/http-history',
    'network/http/OSI',
    'network/http/tcp-ip',
    'network/http/shake-hands',
    'network/http/URI-URL-URN',
    'network/http/http-message',
    {
      type: 'category',
      label: '缓存',
      collapsed: false,
      items: [
        'network/cache/network-http-cache',
        'network/cache/frontend-http-cache-solution',
        'network/cache/browser-load-mode-http-cache',
        'network/cache/memory-cache-disk-cache',
        'network/cache/bfcache',
        'network/cache/service-worker-cache',
        'network/cache/cache-algorithm',
      ],
    },
  ],
  'data-structures': [
    'data-structures/time-complexity/time-complexity',
    'data-structures/space-complexity/space-complexity',
    'data-structures/array/array',
    'data-structures/stack/stack-array',
    {
      type: 'category',
      label: '队列',
      items: [
        'data-structures/queue/queue',
        'data-structures/queue/deque',
        'data-structures/queue/hotpotato',
        'data-structures/queue/palindrome-checker',
      ],
    },
    {
      type: 'category',
      label: '链表',
      items: [
        'data-structures/linkedList/linked-list',
        'data-structures/linkedList/doubly-linked-list',
        'data-structures/linkedList/circular-linked-list',
        'data-structures/linkedList/sorted-linked-list',
      ],
    },
    'data-structures/set/set',
    'data-structures/dictionary/dictionary',
    {
      type: 'category',
      label: '散列表',
      items: [
        'data-structures/hashtable/hashtable',
        'data-structures/hashtable/hashtable-separate-chaining',
      ],
    },
    {
      type: 'category',
      label: '树',
      items: ['data-structures/tree/binary-search-tree'],
    },
    'data-structures/heap/heap',
    'data-structures/graph/graph',
    {
      type: 'category',
      label: '排序算法',
      collapsed: false,
      items: [
        'algorithm/sorting-algorithm/bubble-sort',
        'algorithm/sorting-algorithm/selection-sort',
        'algorithm/sorting-algorithm/insertion-sort',
        'algorithm/sorting-algorithm/merge-sort',
        'algorithm/sorting-algorithm/quick-sort',
      ],
    },
    {
      type: 'category',
      label: '搜索算法',
      items: ['algorithm/search-algorithm/binary-search'],
    },
    {
      type: 'category',
      label: '位运算',
      collapsed: false,
      items: [
        'algorithm/bitwise-operation/bitwise-operation',
        'algorithm/bitwise-operation/bitwise-operation-add',
      ],
    },
  ],
  leetcode: [
    {
      type: 'category',
      label: '栈',
      collapsed: false,
      items: ['leetcode/stack/valid-parentheses'],
    },
    {
      type: 'category',
      label: '队列',
      collapsed: false,
      items: ['leetcode/queue/number-of-recent-calls'],
    },
    {
      type: 'category',
      label: '链表',
      collapsed: false,
      items: [
        'leetcode/linkedList/add-two-numbers',
        'leetcode/linkedList/linked-list-cycle',
        'leetcode/linkedList/remove-duplicates-from-sorted-list',
        'leetcode/linkedList/reverse-linked-list',
        'leetcode/linkedList/delete-node-in-a-linked-list',
        'leetcode/linkedList/merge-two-sorted-lists',
      ],
    },
    {
      type: 'category',
      label: '数组',
      collapsed: false,
      items: [
        'leetcode/array/twosum',
        'leetcode/array/remove-duplicates-from-sorted-array',
        'leetcode/array/remove-element',
        'leetcode/array/search-insert-position',
        'leetcode/array/move-zeroes',
        'leetcode/array/sort-colors',
        'leetcode/array/intersection-of-two-arrays-ii',
        'leetcode/array/contains-duplicate',
        'leetcode/array/sort-array-by-parity',
        'leetcode/array/sort-array-by-parity-ii',
        'leetcode/array/minimum-size-subarray-sum',
      ],
    },
    {
      type: 'category',
      label: '字典',
      collapsed: false,
      items: [
        'leetcode/dictionary/longest-substring-without-repeating-characters',
        'leetcode/dictionary/minimum-window-substring',
      ],
    },
    {
      type: 'category',
      label: '树',
      collapsed: false,
      items: [
        'leetcode/tree/minimum-depth-of-binary-tree',
        'leetcode/tree/maximum-depth-of-binary-tree',
        'leetcode/tree/binary-tree-level-order-traversal',
        'leetcode/tree/binary-tree-right-side-view',
        'leetcode/tree/binary-tree-inorder-traversal',
        'leetcode/tree/invert-binary-tree',
        'leetcode/tree/same-tree',
        'leetcode/tree/symmetric-tree',
      ],
    },
    {
      type: 'category',
      label: '图',
      collapsed: false,
      items: ['leetcode/graph/pacific-atlantic-water-flow'],
    },
    {
      type: 'category',
      label: '堆',
      collapsed: false,
      items: [
        'leetcode/heap/kth-largest-element-in-an-array',
        'leetcode/heap/top-k-frequent-elements',
        'leetcode/heap/merge-k-sorted-lists',
      ],
    },
    {
      type: 'category',
      label: '二分查找',
      collapsed: false,
      items: ['leetcode/binary-search/guess-number-higher-or-lower'],
    },
    {
      type: 'category',
      label: '动态规划',
      collapsed: false,
      items: [
        'leetcode/dynamic-programming/climbing-stairs',
        'leetcode/dynamic-programming/house-robber',
        'leetcode/dynamic-programming/house-robber-ii',
      ],
    },
    {
      type: 'category',
      label: '贪心算法',
      collapsed: false,
      items: ['leetcode/greedy-algorithm/assign-cookies'],
    },
    {
      type: 'category',
      label: '双指针',
      collapsed: false,
      items: [
        'leetcode/two-pointers/is-subsequence',
        'leetcode/two-pointers/valid-palindrome',
      ]
    }
  ],
};

module.exports = sidebars;
