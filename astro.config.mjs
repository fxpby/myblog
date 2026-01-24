import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const isGitHubPages = process.env.DEPLOY_SERVER === "deploygithub";

export default defineConfig({
  site: "https://serendipityhaven.com",
  base: isGitHubPages ? "/myblog/" : "/",

  integrations: [
    starlight({
      title: "邂逅大大小小陆",
      description: "遇见是缘分，感谢你的驻足",
      defaultLocale: "zh-CN",
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      logo: {
        src: "./public/img/favicon1.jpg",
      },
      social: {
        github: "https://github.com/fxpby",
      },
      favicon: "/img/favicon1.jpg",
      head: [
        // Google Analytics
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=GTM-TSG5B2CH",
          },
        },
        {
          tag: "script",
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
          label: "编程",
          collapsed: true,
          items: [
            {
              label: "前端四剑客",
              items: [
                { label: "HTML", autogenerate: { directory: "coding/html" } },
                { label: "CSS", autogenerate: { directory: "coding/css" } },
                {
                  label: "JavaScript",
                  autogenerate: { directory: "coding/javascript" },
                },
                {
                  label: "TypeScript",
                  items: [
                    {
                      label: "基础",
                      autogenerate: { directory: "coding/typescript/basic" },
                    },
                    {
                      label: "进阶",
                      autogenerate: { directory: "coding/typescript/advance" },
                    },
                    {
                      label: "类型体操",
                      autogenerate: {
                        directory: "coding/typescript/type-challenge",
                      },
                    },
                  ],
                },
              ],
            },
            {
              label: "前端框架",
              items: [
                {
                  label: "Vue",
                  autogenerate: { directory: "coding/framework/vue" },
                },
                {
                  label: "React",
                  autogenerate: { directory: "coding/framework/react" },
                },
                {
                  label: "Supabase",
                  autogenerate: { directory: "coding/framework/supabase" },
                },
              ],
            },
            {
              label: "前端工程化",
              items: [
                {
                  slug: "coding/front-end-engineering/build-frontend-project-standardization",
                },
                { slug: "coding/front-end-engineering/babel" },
                { slug: "coding/front-end-engineering/jsdoc" },
                {
                  slug: "coding/front-end-engineering/github-action-for-vuepress",
                },
                { slug: "coding/front-end-engineering/travis-ci-for-vuepress" },
                {
                  label: "发布策略",
                  autogenerate: {
                    directory: "coding/front-end-engineering/release-strategy",
                  },
                },
                {
                  label: "部署",
                  autogenerate: {
                    directory: "coding/front-end-engineering/deploy",
                  },
                },
                {
                  label: "CI/CD",
                  autogenerate: {
                    directory: "coding/front-end-engineering/cicd",
                  },
                },
                {
                  label: "Docker",
                  autogenerate: {
                    directory: "coding/front-end-engineering/docker",
                  },
                },
                {
                  label: "npm",
                  autogenerate: {
                    directory: "coding/front-end-engineering/npm",
                  },
                },
                {
                  label: "Webpack",
                  autogenerate: {
                    directory: "coding/front-end-engineering/webpack",
                  },
                },
              ],
            },
            { label: "浏览器", autogenerate: { directory: "coding/browser" } },
            {
              label: "设计模式",
              autogenerate: { directory: "coding/design-pattern" },
            },
            {
              label: "计算机网络",
              items: [
                {
                  label: "缓存",
                  autogenerate: { directory: "coding/network/cache" },
                },
                {
                  label: "HTTP",
                  autogenerate: { directory: "coding/network/http" },
                },
              ],
            },
            {
              label: "数据结构",
              items: [
                {
                  label: "时间复杂度",
                  autogenerate: {
                    directory: "coding/data-structures/time-complexity",
                  },
                },
                {
                  label: "空间复杂度",
                  autogenerate: {
                    directory: "coding/data-structures/space-complexity",
                  },
                },
                {
                  label: "数组",
                  autogenerate: { directory: "coding/data-structures/array" },
                },
                {
                  label: "栈",
                  autogenerate: { directory: "coding/data-structures/stack" },
                },
                {
                  label: "队列",
                  autogenerate: { directory: "coding/data-structures/queue" },
                },
                {
                  label: "链表",
                  autogenerate: {
                    directory: "coding/data-structures/linkedList",
                  },
                },
                {
                  label: "集合",
                  autogenerate: { directory: "coding/data-structures/set" },
                },
                {
                  label: "字典",
                  autogenerate: {
                    directory: "coding/data-structures/dictionary",
                  },
                },
                {
                  label: "哈希表",
                  autogenerate: {
                    directory: "coding/data-structures/hashtable",
                  },
                },
                {
                  label: "树",
                  autogenerate: { directory: "coding/data-structures/tree" },
                },
                {
                  label: "图",
                  autogenerate: { directory: "coding/data-structures/graph" },
                },
                {
                  label: "堆",
                  autogenerate: { directory: "coding/data-structures/heap" },
                },
              ],
            },
            {
              label: "算法",
              items: [
                {
                  label: "排序算法",
                  autogenerate: {
                    directory: "coding/algorithm/sorting-algorithm",
                  },
                },
                {
                  label: "搜索算法",
                  autogenerate: {
                    directory: "coding/algorithm/search-algorithm",
                  },
                },
                {
                  label: "位运算",
                  autogenerate: {
                    directory: "coding/algorithm/bitwise-operation",
                  },
                },
                {
                  label: "随机算法",
                  autogenerate: {
                    directory: "coding/algorithm/random-algorithm",
                  },
                },
              ],
            },
            { label: "力扣", autogenerate: { directory: "coding/leetcode" } },
            // { label: "数据库", autogenerate: { directory: "coding/database" } },
          ],
        },
        {
          label: "锻炼",
          collapsed: true,
          items: [
            {
              label: "周期训练设计",
              autogenerate: { directory: "workout/training-program" },
            },
            {
              label: "《肌骨重建》",
              autogenerate: { directory: "workout/rebuilding-milo" },
            },
            {
              label: "NSCA CSCS",
              autogenerate: { directory: "workout/nsca-cscs" },
            },
            {
              label: "物理治疗",
              autogenerate: { directory: "workout/physical-therapy" },
            },
          ],
        },
        {
          label: "营养科学",
          collapsed: true,
          items: [
            {
              label: "功能营养素",
              autogenerate: {
                directory: "nutrition-science/functional-nutrients",
              },
            },
            {
              label: "维生素",
              autogenerate: { directory: "nutrition-science/vitamin" },
            },
            {
              label: "医学常识",
              autogenerate: { directory: "nutrition-science/medical-basic" },
            },
            {
              label: "科学减脂",
              autogenerate: { directory: "nutrition-science/fat-loss" },
            },
            {
              label: "抗衰老",
              autogenerate: { directory: "nutrition-science/anti-aging" },
            },
          ],
        },
        {
          label: "功能医学",
          collapsed: true,
          items: [
            {
              label: "内分泌系统与激素",
              autogenerate: {
                directory: "functional-medicine/endocrine-system-and-hormones",
              },
            },
          ],
        },
        {
          label: "基础乐理",
          collapsed: true,
          autogenerate: { directory: "music-theory" },
        },
        {
          label: "菜谱",
          collapsed: true,
          items: [
            { slug: "dishes/dishes-design-principle" },
            { label: "汤", autogenerate: { directory: "dishes/soup" } },
          ],
        },
        {
          label: "阅读",
          collapsed: true,
          autogenerate: { directory: "reading" },
        },
        {
          label: "摄影",
          collapsed: true,
          items: [
            {
              label: "《iPhone手机摄影指南》",
              autogenerate: {
                directory: "photography/iPhone-photography-guide",
              },
            },
          ],
        },
        {
          label: "AI",
          collapsed: true,
          items: [
            { slug: "ai/api-toolchain" },
            { slug: "ai/bilibili-subtitles-process" },
            { slug: "ai/sse-mcp-server" },
            { label: "n8n", autogenerate: { directory: "ai/n8n" } },
          ],
        },
        {
          label: "工具",
          collapsed: true,
          items: [
            {
              label: "Obsidian",
              autogenerate: { directory: "tools/obsidian" },
            },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
      components: {
        Footer: "./src/components/Footer.astro",
        Header: "./src/components/Header.astro",
      },
    }),
    react(),
    sitemap(),
  ],

  vite: {
    resolve: {
      alias: {
        "@babel/runtime/helpers/extends": "@babel/runtime/helpers/esm/extends",
        "@babel/runtime/helpers/objectWithoutPropertiesLoose":
          "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",
        "@babel/runtime/helpers/inheritsLoose":
          "@babel/runtime/helpers/esm/inheritsLoose",
        "@babel/runtime/helpers/assertThisInitialized":
          "@babel/runtime/helpers/esm/assertThisInitialized",
        "@babel/runtime/helpers/defineProperty":
          "@babel/runtime/helpers/esm/defineProperty",
      },
    },
    ssr: {
      noExternal: [
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
      ],
    },
    optimizeDeps: {
      include: [
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
      ],
    },
  },
});
