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
  themes: [
    '@easyops-cn/docusaurus-search-local',
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'fxpby和olu是好朋友',
        logo: {
          alt: '',
          src: process.env.DEPLOY_SERVER === 'deploygithub' ? '/myblog/img/headImg.jpg' : '/img/headImg.jpg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'html',
            position: 'left',
            label: 'HTML',
          },
          {
            type: 'docSidebar',
            sidebarId: 'css',
            position: 'left',
            label: 'CSS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'javascript',
            position: 'left',
            label: 'JavaScript',
          },
          {
            type: 'docSidebar',
            sidebarId: 'typescript',
            position: 'left',
            label: 'TypeScript',
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
            label: '框架相关',
            items: [
              {
                label: '基础知识',
                to: '/docs/framework/runtime-compiletime',
              },
              {
                label: 'Vue2',
                to: '/docs/Vue/vue2/源码-src',
              },
            ]
          },
          
          {
            type: 'docSidebar',
            sidebarId: 'front-end-engineering',
            position: 'left',
            label: '前端工程化',
          },
          {
            type: 'docSidebar',
            sidebarId: 'browser',
            position: 'left',
            label: '浏览器',
          },
          {
            type: 'docSidebar',
            sidebarId: 'design-pattern',
            position: 'left',
            label: '设计模式',
          },
          {
            type: 'docSidebar',
            sidebarId: 'network',
            position: 'left',
            label: '计算机网络',
          },
          {
            type: 'docSidebar',
            sidebarId: 'data-structures',
            position: 'left',
            label: '数据结构和算法',
          },
          {
            type: 'docSidebar',
            sidebarId: 'leetcode',
            position: 'left',
            label: '力扣',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/fxpby',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `
          Copyright © ${new Date().getFullYear()} fxpby和olu是好朋友 olumel.top | 津ICP备2021008930号-1
          <div style="width: 300px; margin: 0px auto; padding: 20px 0px;">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011602000961" style="display: inline-block; text-decoration: none; height: 20px; line-height: 20px;">
            <img a=${process.env.DEPLOY_SERVER} src=${process.env.DEPLOY_SERVER === 'deploygithub' ? '/myblog/img/beian.png' : '/img/beian.png'} style="float: left;"> 
            <p style="float: left; height: 20px; line-height: 20px; margin: 0px 0px 0px 5px; color: rgb(147, 147, 147);">
              津公网安备 12011602000961号
            </p>
            </a>
          </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
