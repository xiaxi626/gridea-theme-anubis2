# Anubis2 for Gridea Pro

> Hugo Anubis2 主题的 Gridea Pro 移植版本（v23）

## 已实现功能

### 页面与路由

| 路由 | 模板 | 说明 |
|------|------|------|
| `/` | `index.html` | 首页，文章列表 + 分页 |
| `/blog/` | `blog.html` | 博客页，与首页相同结构但无标题 |
| `/memos/` | `memos.html` | 闪念页，热力图 + 闪念列表 + 前端分页 |
| `/post/:slug/` | `post.html` | 文章详情页 |
| `/archives/` | `archives.html` | 归档页，日期滑动切换 + 紧凑列表 |
| `/tags/` | `tags.html` | 标签汇总页，无框标签云 |
| `/tags/:slug/` | `tag.html` | 单个标签下的文章列表 |
| `/links/` | `links.html` | 友链页 |
| `/about/` | `about.html` | 关于页 |

### 主题与外观

- 🌓 **深浅色主题切换** — 支持跟随系统、手动切换，`html` 强制 `overflow-y: scroll` 避免页面切换时内容左右移动
- 🎨 **主题色可配置** — 通过 `primaryColor` 自定义链接和高亮颜色
- 📱 **响应式布局** — 适配桌面和移动端
- 🇨🇳 **中国备案支持** — ICP 备案和公网安备，带公安备案图标

### 文章功能

- 📝 **文章摘要** — 列表页显示文章预览，优先使用 `post.summary`，无摘要时自动从 `post.content` 截取前 150 字
- 📋 **代码复制按钮** — 一键复制代码块内容
- 📑 **自动目录（TOC）** — 根据文章字数阈值自动生成，按 h2/h3/h4 级别缩进，仅最高级标题加粗，点击平滑滚动定位
- 🔗 **相关文章推荐** — 基于标签的相关文章，在文章底部显示
- 🏷️ **文章置顶** — 置顶文章带星标标识
- 🖼️ **特色图片** — 文章支持封面图显示

### 数学公式与图表

- 📊 **MathJax 数学公式** — 全局开启时所有页面加载，关闭时仅文章页面加载；支持 `$...$` 和 `$$...$$` 语法
- 📈 **Mermaid 图表** — 文章中支持甘特图、流程图等 Mermaid 语法渲染

### 闪念（Memos）

- 🔥 **GitHub 风格热力图** — 显示过去一年闪念活跃度，flex 布局无边框效果，绿色系配色（`#ebedf0` → `#216e39`），完整 53 周自适应显示
- 📋 **闪念列表** — 左侧绿色边框卡片样式（参考 amore 模板），内容超长自动折叠 + 渐变遮罩 + 展开按钮
- 🏷️ **闪念标签** — 绿色文字，无填充背景（仅闪念页标签为绿色，其他页面标签保持主题色）
- 📄 **前端分页** — 每页 20 条，上一页/下一页控件

### 归档页

- 📅 **日期滑动切换** — 显示从当前月份到最早文章年份的所有年月，支持鼠标拖动和触摸滑动（带惯性），当前页有文章的日期可点击跳转，无文章的日期置灰显示
- 📋 **紧凑列表** — 标题和标签紧凑排列，间距优化

### 标签页

- ☁️ **标签云** — 无边框纯文字标签，悬浮时背景变色 + 文字变白，无下划线

### 社交与导航

- 🌐 **社交图标** — 支持 GitHub、Twitter/X、LinkedIn、Telegram、YouTube、Email、RSS 等
- 📰 **RSS 订阅** — RSS 图标链接（RSS 源由 Gridea Pro 后台自动生成）
- 🧭 **导航菜单** — 通过 Gridea Pro 后台配置

### 其他

- 💬 **评论系统** — 支持 Gridea Pro 标准评论容器
- 🎯 **自定义注入** — 支持 Head/Footer 自定义代码注入（统计代码、评论 SDK 等）
- 🎨 **自定义 CSS** — 可追加自定义样式
- 🔗 **外链新窗口** — 可配置外链是否在新标签页打开

## 配置说明

### 基础设置

| 配置项 | 说明 |
|--------|------|
| `subtitle` | 站点副标题 |
| `postsPerPage` | 每页文章数 |
| `footerCopyright` | 页脚版权文字（留空显示默认） |
| `hideFooterAttribution` | 隐藏页脚版权归属 |
| `icpBeian` | ICP 备案号 |
| `policeBeian` | 公网安备号 |

### 外观设置

| 配置项 | 说明 |
|--------|------|
| `colorTheme` | 默认配色（auto/light/dark） |
| `enableColorThemeSwitcher` | 启用主题切换按钮 |
| `primaryColor` | 主题色（链接和高亮颜色） |

### 文章设置

| 配置项 | 说明 |
|--------|------|
| `enableSummary` | 启用文章摘要预览 |
| `enableReadMoreButton` | 启用阅读更多按钮 |
| `enableCopyCodeButton` | 启用代码复制按钮 |
| `tocWordCount` | 目录显示阈值（文章字数超过此值时显示，0 禁用） |
| `readNextPosts` | 相关文章数量（0 禁用） |
| `openInNewTab` | 外链新窗口打开 |

### 高级功能

| 配置项 | 说明 |
|--------|------|
| `enableMathGlobally` | 全局启用 MathJax（开启后所有页面加载，关闭后仅文章页面加载） |
| `customCss` | 自定义 CSS |
| `headerScript` | Head 注入代码（统计代码等） |
| `footerScript` | Footer 注入代码（评论 SDK 等） |

### 社交设置

| 配置项 | 说明 |
|--------|------|
| `githubUrl` | GitHub 链接 |
| `twitterUrl` | Twitter/X 链接 |
| `linkedinUrl` | LinkedIn 链接 |
| `emailAddress` | Email 地址 |
| `telegramUrl` | Telegram 链接 |
| `youtubeUrl` | YouTube 链接 |
| `enableRssIcon` | 显示 RSS 图标 |

### 评论设置

| 配置项 | 说明 |
|--------|------|
| `enableComments` | 启用评论容器 |

## 目录结构

```
anubis2/
├── config.json              # 主题配置项定义
├── screenshot.png           # 主题预览图
├── templates/
│   ├── base.html            # 基础布局（含完整 CSS 变量和样式）
│   ├── index.html           # 首页
│   ├── blog.html            # 博客页
│   ├── post.html            # 文章详情页（含 Mermaid、MathJax）
│   ├── archives.html        # 归档页（含日期滑动切换 JS）
│   ├── tags.html            # 标签汇总页
│   ├── tag.html             # 单个标签页
│   ├── memos.html           # 闪念页（含热力图、分页 JS）
│   ├── links.html           # 友链页
│   ├── about.html           # 关于页
│   ├── 404.html             # 404 页面
│   └── partials/
│       ├── header.html      # 页头（导航 + 社交图标）
│       ├── footer.html      # 页脚（版权 + 备案）
│       ├── post-card.html   # 文章卡片（含摘要逻辑）
│       ├── post-meta.html   # 文章元信息（日期、标签、分类）
│       ├── pagination.html  # 分页控件
│       ├── toc.html         # 目录（JS 动态生成 + 级别缩进）
│       ├── social-icons.html # 社交图标集合
│       ├── icon.html        # 图标组件
│       └── comments.html    # 评论容器
└── assets/
    ├── styles/
    │   └── main.css         # 主样式（外部 CSS 文件）
    ├── scripts/
    │   └── main.js          # 主脚本（主题切换、代码复制等）
    └── media/
        └── images/
        └── icons/
            ├── fa-icons/    # FontAwesome 风格图标
            └── tabler-icons/ # Tabler 风格图标
```

## 待验证 / 待调整功能

以下功能已在模板中实现代码，但需要在实际使用中验证效果：

- **Mermaid 图表渲染** — 需要文章中使用 ` ```mermaid ` 代码块，渲染依赖 CDN 加载 mermaid@10
- **代码块行号** — 当前有代码高亮样式，行号显示取决于 Gridea Pro 的 Markdown 渲染器是否生成行号
- **表格斑马纹** — CSS 已定义表格样式，实际效果取决于文章中的 Markdown 表格
- **Shortcodes（Note/Tip/Warning/Caution）** — CSS 已定义样式，需要 Gridea Pro 支持对应的 HTML 输出
- **文章摘要** — 优先使用 `post.summary`，若无则从 `post.content` 截取，效果取决于 Gridea Pro 提供的变量
- **相关文章推荐** — 依赖 `post.relatedPosts` 变量，需验证 Gridea Pro 是否提供
- **RSS 订阅源** — `/atom.xml` 由 Gridea Pro 后台自动生成，主题仅提供 RSS 图标链接，需确认后台已启用 RSS

## 未实现功能

- **语言切换** — 原模板支持多语言切换（English/Chinese/Polski），因 Gridea Pro 的 `languages` 变量行为未确认，暂未移植
- **搜索功能** — 原模板无内置搜索，Gridea Pro 也未提供搜索 API
- **代码块行号** — 依赖 Gridea Pro 渲染器支持

## 安装

1. 下载本主题文件夹
2. 放入 Gridea Pro 的 `themes` 目录
3. 在 Gridea Pro 设置中选择 `anubis2` 主题
4. 在主题配置中按需调整各项设置

## 致谢

- 原主题：[Hugo Anubis2](https://github.com/hugo-theme-anubis2/hugo-theme-anubis2)
- 样式参考：[amore (Jinja2)](https://github.com/wzulli/amore-jinja2)
- 目标框架：[Gridea Pro](https://github.com/Gridea-Pro/gridea-pro)

## 许可证

MIT License
