import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://shaifx.vercel.app",
  integrations: [
    starlight({
      title: "闪光小破站",
      defaultLocale: "root",
      locales: { root: { label: "中文", lang: "zh-CN" } },
      sidebar: [
        { label: "书签", slug: "bookmarks" },
        { label: "命令速查", slug: "commands/cheatsheet" },
        {
          label: "工具说明",
          items: [
            { label: "mpv 播放器", slug: "tools/mpv" },
            { label: "Lazygit 使用指南", slug: "tools/lazygit" },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
