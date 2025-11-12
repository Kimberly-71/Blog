# RicerChen's Blog

基于 React + Vite + Tailwind CSS 构建的个人博客，采用 Glassmorphism 设计风格。

## 功能特性

- 🎨 玻璃拟态（Glassmorphism）设计风格
- 🌙 暗色/浅色模式切换
- 📱 响应式布局
- 📝 博客文章展示
- 💼 项目作品展示
- 👤 个人介绍页面
- ✨ 流畅的动画效果

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

浏览器访问 `http://localhost:5173` 即可预览。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
Blog-2/
├── src/
│   ├── main.jsx          # React 入口文件
│   └── index.css         # 全局样式（Tailwind CSS）
├── Blog-2.jsx           # 主应用组件
├── index.html            # HTML 模板
├── package.json          # 项目配置
├── vite.config.js        # Vite 配置
├── tailwind.config.js    # Tailwind CSS 配置
└── postcss.config.js     # PostCSS 配置
```

## 技术栈

- React 18
- Vite
- Tailwind CSS
- Lucide React (图标库)

## 自定义配置

### 修改个人信息

编辑 `Blog-2.jsx` 文件中的以下内容：

- `avatarUrl`: 头像图片 URL
- `techStack`: 技术栈列表
- `timeline`: 经历时间线
- `socials`: 社交链接
- `interests`: 兴趣标签
- `projects`: 项目列表
- `blogPosts`: 博客文章列表

## 许可证

MIT


