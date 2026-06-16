import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Bookmarks",
      defaultLocale: "root",
      locales: { root: { label: "中文", lang: "zh-CN" } },
      sidebar: [
        {
          label: "工具 & 开发",
          items: [
            { label: "编程工具", slug: "bookmarks" },
            { label: "浏览器", slug: "bookmarks" },
            { label: "设计", slug: "bookmarks" },
            { label: "系统工具", slug: "bookmarks" },
          ],
        },
        {
          label: "媒体 & 文件",
          items: [
            { label: "图像处理", slug: "bookmarks" },
            { label: "视频处理", slug: "bookmarks" },
            { label: "视频播放", slug: "bookmarks" },
            { label: "下载工具", slug: "bookmarks" },
          ],
        },
        {
          label: "效率 & 协作",
          items: [
            { label: "笔记", slug: "bookmarks" },
            { label: "办公", slug: "bookmarks" },
            { label: "效率工具", slug: "bookmarks" },
            { label: "翻译工具", slug: "bookmarks" },
            { label: "输入法", slug: "bookmarks" },
          ],
        },
        {
          label: "安全 & 隐私",
          items: [
            { label: "密码管理", slug: "bookmarks" },
            { label: "双因素认证", slug: "bookmarks" },
            { label: "加密云盘", slug: "bookmarks" },
            { label: "文件同步", slug: "bookmarks" },
            { label: "邮箱", slug: "bookmarks" },
          ],
        },
        {
          label: "AI & 学习",
          items: [
            { label: "AI 工具", slug: "bookmarks" },
            { label: "本地 AI", slug: "bookmarks" },
            { label: "学习工具", slug: "bookmarks" },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
