import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/interview-questions-record/",
  title: "Web 前端开发",
  description: "总结 web 前端相关面试题，以及个人技术的文章总结。",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // 导航栏
    nav: [
      { text: "八股文", link: "/eight-part-essay/internet-questions", activeMatch: "/eight-part-essay/" },
      { text: "手撕代码", link: "/tore-code/", activeMatch: "/tore-code/" }
    ],
    // 侧边栏
    sidebar: {
      "/eight-part-essay/": [
        {
          text: "八股文",
          collapsible: true,
          items: [
            { text: "计算机网络", link: "/eight-part-essay/internet-questions" },
            { text: "浏览器", link: "/eight-part-essay/browser-questions" },
            { text: "HTML、CSS", link: "/eight-part-essay/html-css" },
            { text: "Javascript", link: "/eight-part-essay/javascript" },
            { text: "TypeScript", link: "/eight-part-essay/typescript" },
            { text: "移动端", link: "/eight-part-essay/mobile" },
            { text: "Vue2", link: "/eight-part-essay/vue2" },
            { text: "React", link: "/eight-part-essay/react" },
            { text: "Webpack", link: "/eight-part-essay/webpack" },
            { text: "Vite", link: "/eight-part-essay/vite" },
            { text: "Node", link: "/eight-part-essay/node" }
          ]
        }
      ],
      "/tore-code/": [
        {
          text: "JavaScript 手写",
          collapsible: true,
          items: [{ text: "手写 Promise", link: "/tore-code/promise" }]
        }
      ]
    },
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/ShuQingX/interview-questions-record" }],
    lastUpdatedText: "最近更新时间",
    footer: {
      message: "在 MIT 许可下发布。",
      copyright: "版权所有 © 2022-至今 shuqingx"
    },
    editLink: {
      pattern: "https://github.com/ShuQingX/interview-questions-record/blob/main/docs/:path",
      text: "在 GitHub 上编辑此页面"
    },
    // 搜索配置 参考资料
    // https://segmentfault.com/a/1190000041480102
    // https://docsearch.algolia.com/docs/DocSearch-v3
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#algolia-%E6%90%9C%E7%B4%A2
    algolia: {
      apiKey: "aea12a0a4281c855b5d23789e868f378",
      indexName: "interview-questions-record",
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: "XQYLP2L9WC"
    }
  }
});
