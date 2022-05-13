/*
 * @Author: liyi
 * @Date: 2022-05-13 09:32:01
 * @LastEditors: liyi
 * @LastEditTime: 2022-05-13 11:14:08
 * @Description: 配置项
 */
module.exports = {
  title: "手札",
  description: "BoneSakura 的 私人笔记",
  base: "/Note/", // git仓库名称
  locales: {
    "/": {
      lang: "zh-CN", // 网站默认语言配置
    },
  },
  theme: "reco",
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: "首页", link: "/" },
      {
        text: "BoneSkura 的 私人笔记",
        items: [
          { text: "Github", link: "https://github.com/lyrebirth" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/2146687086501672",
          },
        ],
      },
    ],
    // 左侧目录配置
    sidebar: [
      {
        title: "介绍",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "项目介绍", path: "/" }],
      },
      {
        title: "JavaScript",
        path: "/javascript/content",
        children: [
          { title: "基础", path: "/javascript/content" },
          { title: "ES6", path: "/javascript/es6" },
        ],
      },
      {
        title: "TypeScript",
        path: "/typescript/Genericity",
        children: [{ title: "泛型", path: "/typescript/Genericity" }],
      },
    ],
    subSidebar: "auto", // 自动侧边栏
  },
};
