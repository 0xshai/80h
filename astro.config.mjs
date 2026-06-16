import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
  title: "Bookmarks",
  defaultLocale: "root",
  locales: { root: { label: "中文", lang: "zh-CN" } },
  ui: {
    'tableOfContents.onThisPage': '目录',
  },
  // ...其余配置不变
}),
