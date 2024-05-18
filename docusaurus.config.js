// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'fxpby和olu是好朋友',
  tagline: 'hello world',
  url: 'https://www.olumel.top',
  baseUrl: process.env.DEPLOY_SERVER === 'deploygithub' ? '/myblog/' : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/myblog/img/favicon1.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fxpby', // Usually your GitHub org/user name.
  projectName: 'myblog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@easyops-cn/docusaurus-search-local'],

  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'English',
        path: 'English',
        routeBasePath: 'English',
        sidebarPath: require.resolve('./sidebarsEnglish.js'),
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'music-theory',
        path: 'music-theory',
        routeBasePath: 'music-theory',
        sidebarPath: require.resolve('./sidebarsMusic.js'),
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'workout',
        path: 'workout',
        routeBasePath: 'workout',
        sidebarPath: require.resolve('./sidebarsWorkout.js'),
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-217600182-1',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'fxpby和olu是好朋友',
        hideOnScroll: true,
        logo: {
          alt: '',
          src:
            process.env.DEPLOY_SERVER === 'deploygithub'
              ? '/myblog/img/headImg.jpg'
              : '/img/headImg.jpg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            label: '前端传送门',
            sidebarId: 'html',
            catalog: 'docs/frontend',
            itemType: 'parent',
          },
          {
            position: 'left',
            label: '前端四剑客',
            items: [
              {
                label: 'HTML',
                to: '/docs/html/attrs',
              },
              {
                label: 'CSS',
                to: '/docs/css/box-model',
              },
              {
                label: 'JavaScript',
                to: '/docs/javascript/memory',
              },
              {
                label: 'TypeScript',
                to: '/docs/typescript/basic/ts-type-annotation',
              },
            ],
            catalog: 'docs/frontend',
            itemType: 'child',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'nodejs',
          //   position: 'left',
          //   label: 'Node.js',
          // },
          {
            // type: 'localeDropdown',
            position: 'left',
            label: '框架',
            items: [
              {
                label: '基础知识',
                to: '/docs/framework/runtime-compiletime',
              },
              {
                label: 'Vue2',
                to: '/docs/Vue/vue2/vue2-learn-prepare',
              },
              {
                label: 'React',
                to: '/docs/react/react-re-renders',
              },
            ],
            catalog: 'docs/frontend',
            itemType: 'child',
          },
          {
            type: 'docSidebar',
            sidebarId: 'front-end-engineering',
            position: 'left',
            label: '前端工程化',
            catalog: 'docs/frontend',
            itemType: 'child',
          },
          {
            type: 'docSidebar',
            sidebarId: 'browser',
            position: 'left',
            label: '浏览器',
            catalog: 'docs/frontend',
            itemType: 'child',
          },
          {
            type: 'docSidebar',
            sidebarId: 'design-pattern',
            position: 'left',
            label: '设计模式',
            catalog: 'docs/frontend',
            itemType: 'child',
          },
          {
            type: 'docSidebar',
            sidebarId: 'network',
            position: 'left',
            label: '计算机网络',
            catalog: 'docs/frontend',
            itemType: 'child',
          },
          {
            type: 'docSidebar',
            sidebarId: 'data-structures',
            position: 'left',
            label: '数据结构和算法',
            catalog: 'docs/frontend',
            itemType: 'child',
          },
          {
            type: 'docSidebar',
            sidebarId: 'leetcode',
            position: 'left',
            label: '力扣',
            catalog: 'docs/frontend',
            itemType: 'child',
          },
          {
            to: '/music-theory/音程&度数',
            label: '新大陆',
            position: 'left',
            catalog: 'docs/other',
            itemType: 'parent',
          },
          {
            to: '/workout/rebuilding-milo-intro',
            position: 'left',
            label: '序、前言',
            catalog: 'docs/other',
            itemType: 'child',
          },
          {
            to: '/music-theory/音程&度数',
            label: '音乐',
            position: 'left',
            catalog: 'docs/other',
            itemType: 'child',
          },
          {
            to: '/English/词汇-谐音记忆',
            label: '英语',
            position: 'left',
            catalog: 'docs/other',
            itemType: 'child',
          },
          {
            to: '/blog',
            label: '杂记',
            position: 'left',
            catalog: 'blog',
            itemType: 'parent',
          },
          {
            to: '/blog',
            label: '杂记',
            position: 'left',
            catalog: 'blog',
            itemType: 'child',
          },
          {
            href: 'https://github.com/fxpby',
            label: 'GitHub',
            position: 'right',
            itemType: 'parent',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      tests: {},
      footer: {
        style: 'dark',
        copyright: `
          Copyright © ${new Date().getFullYear()} fxpby和olu是好朋友 olumel.top | <a href="https://beian.miit.gov.cn/" target="_blank">津ICP备2021008930号-1</a>
          <div style="width: 500px; display: flex; align-items: center; margin: 0px auto; padding: 20px 0px;">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011602000961" style="display: inline-block; text-decoration: none; height: 20px; line-height: 20px;">
            <img a=${process.env.DEPLOY_SERVER} src=${
              process.env.DEPLOY_SERVER === 'deploygithub'
                ? '/myblog/img/beian.png'
                : '/img/beian.png'
            } style="float: left;">
            <p style="float: left; height: 20px; line-height: 20px; margin: 0px 0px 0px 5px; color: rgb(147, 147, 147);">
              津公网安备 12011602000961号
            </p>
            </a>
            <a style="margin-left: 10px;" href="mailto:1037345919@qq.com">举报投诉 1037345919@qq.com</a>
          </div>
        `,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
