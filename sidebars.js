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
  'html': [
    {
      type: 'autogenerated',
      dirName: 'html',
    },
  ],
  'css': [
    'css/box-model',
    'css/BFC',
    'css/HCenter',
    'css/VCenter',
    'css/HVCenter',
    'css/weight',
  ],
  'javascript': [
    'javascript/data-element',
    'javascript/compare-value',
    'javascript/deep-copy',
    'javascript/out-script',
    'javascript/throttle-debounce',
  ],
  'typescript': [
    'typescript/everyday-types',
    'typescript/tsconfig',
    'typescript/typeof-guard',
  ],
  // 'nodejs': [],
  'framework': [
    'framework/runtime-compiletime',
  ],
  'vue2': [
    'vue/vue2/源码-src',
    'vue/vue2/源码-构建',
  ],
  'front-end-engineering': [
    'front-end-engineering/travis-ci-for-vuepress',
    'front-end-engineering/github-action-for-vuepress',
  ],
  'browser': [
    'browser/layout-paint',
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
  'network': [
    'network/http/http-history',
    'network/http/OSI',
    'network/http/shake-hands',
    'network/http/URI-URL-URN',
    'network/http/http-message',
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
      items: [
        'data-structures/tree/binary-search-tree',
      ],
    },
    'data-structures/heap/heap',
    'data-structures/graph/graph',
  ],
  'leetcode': [
    {
      type: 'category',
      label: '栈',
      collapsed: false,
      items: [
        'leetcode/stack/valid-parentheses',
      ],
    },
    {
      type: 'category',
      label: '队列',
      collapsed: false,
      items: [
        'leetcode/queue/number-of-recent-calls',
      ],
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
      ],
    },
  ],
};

module.exports = sidebars;
