import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const fs = require("fs");
const toolbarCodingHTML = fs.readFileSync(
  "./src/snippets/coding.html",
  "utf-8"
);

const config: Config = {
  title: "邂逅大大小小陆",
  // tagline: "遇见是缘分，感谢你的驻足",
  tagline: "感谢你的驻足，网站加速装修中...🐢🐢🐢",

  favicon: "img/favicon1.jpg",

  // Set the production url of your site here
  url: "https://serendipityhaven.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fxpby", // Usually your GitHub org/user name.
  projectName: "myblog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleAnalytics: {
          trackingID: "UA-217600182-1",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "GTM-TSG5B2CH",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar: {
      title: "邂逅大大小小陆",
      logo: {
        alt: "My Site Logo",
        src: "img/favicon1.jpg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   type: "html",
        //   position: "right",
        //   value: "<button>Give feedback</button>",
        // },
        {
          label: "编程",
          type: "dropdown",
          className: "dyte-dropdown",
          items: [
            {
              type: "html",
              value: toolbarCodingHTML,
              className: "dyte-dropdown",
            },
          ],
        },
        {
          label: "锻炼",
          to: "/docs/workout/training-program/cycle-calc",
        },
        {
          label: "运动营养",
          to: "/docs/nutrition-for-exercise-science/medical-basic/thyroid",
        },
        {
          label: "基础乐理",
          to: "/docs/music-theory/音程&度数",
        },
        {
          href: "https://github.com/fxpby",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `
          Copyright © ${new Date().getFullYear()} 邂逅大大小小陆 serendipityhaven.com | <a href="https://beian.miit.gov.cn/" target="_blank">津ICP备2021008930号-2</a>
          <div style="justify-content: center; display: flex; align-items: center; margin: 0px auto; padding: 20px 0px;">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011602000961" style="display: inline-block; text-decoration: none; height: 20px; line-height: 20px;">
            <img a=${process.env.DEPLOY_SERVER} src=${
        process.env.DEPLOY_SERVER === "deploygithub"
          ? "/myblog/img/beian.png"
          : "/img/beian.png"
      } style="float: left;">
            
            </a>
            <a style="margin-left: 10px;" href="mailto:1037345919@qq.com">举报投诉 1037345919@qq.com</a>
          </div>
        `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
