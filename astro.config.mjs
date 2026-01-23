import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.DEPLOY_SERVER === 'deploygithub';

export default defineConfig({
  site: 'https://serendipityhaven.com',
  base: isGitHubPages ? '/myblog/' : '/',

  integrations: [
    starlight({
      title: '邂逅大大小小陆',
      description: '遇见是缘分，感谢你的驻足',
      defaultLocale: 'zh-CN',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      logo: {
        src: './public/img/favicon1.jpg',
      },
      social: {
        github: 'https://github.com/fxpby',
      },
      favicon: '/img/favicon1.jpg',
      head: [
        // Google Analytics
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=GTM-TSG5B2CH',
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-TSG5B2CH', { anonymize_ip: true });
            gtag('config', 'UA-217600182-1', { anonymize_ip: true });
          `,
        },
      ],
      sidebar: [
        {
          label: '编程',
          collapsed: true,
          items: [
            {
              label: '前端四剑客',
              items: [
                { label: 'HTML', autogenerate: { directory: 'coding/html' } },
                { label: 'CSS', autogenerate: { directory: 'coding/css' } },
                { label: 'JavaScript', autogenerate: { directory: 'coding/javascript' } },
                { label: 'TypeScript', autogenerate: { directory: 'coding/typescript' } },
              ],
            },
            {
              label: '前端框架',
              items: [
                { label: 'Vue', autogenerate: { directory: 'coding/framework/vue' } },
                { label: 'React', autogenerate: { directory: 'coding/framework/react' } },
                { label: 'Supabase', autogenerate: { directory: 'coding/framework/supabase' } },
              ],
            },
            { label: '前端工程化', autogenerate: { directory: 'coding/front-end-engineering' } },
            { label: '浏览器', autogenerate: { directory: 'coding/browser' } },
            { label: '设计模式', autogenerate: { directory: 'coding/design-pattern' } },
            { label: '计算机网络', autogenerate: { directory: 'coding/network' } },
            { label: '数据结构', autogenerate: { directory: 'coding/data-structures' } },
            { label: '算法', autogenerate: { directory: 'coding/algorithm' } },
            { label: '力扣', autogenerate: { directory: 'coding/leetcode' } },
            { label: '数据库', autogenerate: { directory: 'coding/database' } },
          ],
        },
        {
          label: '锻炼',
          collapsed: true,
          items: [
            { label: 'NSCA-CSCS', autogenerate: { directory: 'workout/nsca-cscs' } },
            { label: '物理治疗', autogenerate: { directory: 'workout/physical-therapy' } },
            { label: '重建米洛', autogenerate: { directory: 'workout/rebuilding-milo' } },
            { label: '训练计划', autogenerate: { directory: 'workout/training-program' } },
          ],
        },
        {
          label: '营养科学',
          collapsed: true,
          items: [
            { label: '维生素', autogenerate: { directory: 'nutrition-science/vitamin' } },
            { label: '减脂', autogenerate: { directory: 'nutrition-science/fat-loss' } },
            { label: '抗衰老', autogenerate: { directory: 'nutrition-science/anti-aging' } },
            { label: '功能性营养素', autogenerate: { directory: 'nutrition-science/functional-nutrients' } },
            { label: '医学基础', autogenerate: { directory: 'nutrition-science/medical-basic' } },
          ],
        },
        {
          label: '功能医学',
          collapsed: true,
          autogenerate: { directory: 'functional-medicine' },
        },
        {
          label: '基础乐理',
          collapsed: true,
          autogenerate: { directory: 'music-theory' },
        },
        {
          label: '菜谱',
          collapsed: true,
          autogenerate: { directory: 'dishes' },
        },
        {
          label: '阅读',
          collapsed: true,
          autogenerate: { directory: 'reading' },
        },
        {
          label: '摄影',
          collapsed: true,
          autogenerate: { directory: 'photography' },
        },
        {
          label: 'AI',
          collapsed: true,
          autogenerate: { directory: 'ai' },
        },
        {
          label: '工具',
          collapsed: true,
          autogenerate: { directory: 'tools' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
    react(),
    sitemap(),
  ],

  vite: {
    ssr: {
      noExternal: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
    },
  },
});
