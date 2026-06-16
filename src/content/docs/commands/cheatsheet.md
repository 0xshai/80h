---
title: "常用命令速查"
description: "个人常用命令汇总：网站维护、Git、Scoop、多媒体处理等。"
---

## 网站维护

### 推送更新到 GitHub

```powershell
git add .
git commit -m "描述改动内容"
git push origin main
```

### 本地预览

```powershell
pnpm dev
```

### 强制清除缓存重启

```powershell
Remove-Item -Recurse -Force .astro, node_modules/.cache -ErrorAction SilentlyContinue
pnpm dev
```

### 重新生成 lockfile（依赖出问题时）

```powershell
Remove-Item pnpm-lock.yaml
pnpm install
```

---

## 网站内容管理

### 加一篇工具说明文章

1. 新建 `src/content/docs/tools/文件名.md`，写入 frontmatter：

```markdown
---
title: "文章标题"
description: "一句话描述"
---
```

2. `astro.config.mjs` 的 sidebar 对应分组里加一行：

```js
{ label: "显示名称", slug: "tools/文件名" }
```

### 加书签工具

编辑 `src/data/bookmarks.ts`，在对应分类的 `items` 里加：

```ts
{ name: '工具名', url: 'https://...', desc: '一句话描述', opensource: true }
```

### 加新书签分类

1. `bookmarks.ts` 新增对象：

```ts
{ category: '新分类', icon: '🔧', items: [...] }
```

2. `bookmarks.mdx` 加两行：

```mdx
## 新分类
<BookmarkGrid category="新分类" />
```

3. `BookmarkGrid.astro` 的 `iconMap` 加对应图标映射。

### 加左侧目录分组

`astro.config.mjs` 的 sidebar 加：

```js
{
  label: "分组名称",
  items: [
    { label: "页面名", slug: "路径/文件名" },
  ],
},
```

---

## Git 常用命令

```powershell
# 查看状态
git status

# 查看提交历史
git log --oneline -10

# 切换远程地址（SSH）
git remote set-url origin git@github.com:0xshai/仓库名.git

# 拉取最新代码
git pull origin main

# 查看远程地址
git remote -v

# 撤销最后一次提交（保留文件改动）
git reset --soft HEAD~1

# 丢弃所有本地改动
git reset --hard HEAD

# 查看某文件改动
git diff 文件路径
```

---

## Scoop 常用命令

```powershell
# 安装软件
scoop install 软件名

# 卸载软件
scoop uninstall 软件名

# 更新所有软件
scoop update *

# 更新 Scoop 本身
scoop update

# 查看已安装列表
scoop list

# 搜索软件
scoop search 关键词

# 清理旧版本
scoop cleanup *

# 查看软件信息
scoop info 软件名

# 添加 bucket
scoop bucket add extras
scoop bucket add versions
```

---

## 多媒体处理

### ImageMagick 批量转 AVIF

```powershell
magick mogrify -format avif -quality 80 *.jpg
```

### HandBrake CLI（AV1 编码）

```powershell
HandBrakeCLI -i 输入.mp4 -o 输出.mp4 --encoder svt_av1 --quality 30 --encoder-preset 6
```

### FFmpeg 常用

```powershell
# 查看文件信息
ffmpeg -i 文件名

# 转换格式
ffmpeg -i 输入.mp4 输出.mkv

# 无损剪切（不重新编码）
ffmpeg -i 输入.mp4 -ss 00:01:00 -to 00:02:00 -c copy 输出.mp4

# 提取音频
ffmpeg -i 输入.mp4 -vn -acodec copy 输出.aac
```

---

## Windows PowerShell 常用

```powershell
# 查看文件内容
Get-Content 文件路径

# 查看文件指定行（如第 10-20 行）
Get-Content 文件路径 | Select-Object -Index (9..19)

# 搜索文件内容
Select-String -Path 文件路径 -Pattern "关键词"

# 删除文件夹
Remove-Item -Recurse -Force 文件夹路径

# 新建文件夹
New-Item -ItemType Directory -Path 文件夹路径

# 复制文件
Copy-Item 源路径 目标路径

# 查看端口占用
netstat -ano | findstr :4321
```

---

## Git 提交信息规范

```
feat: 新功能
fix: 修复问题
docs: 文档改动
style: 样式调整
refactor: 重构
chore: 杂项（依赖更新等）
```

示例：`git commit -m "feat: 新增工具说明分类"`
