export default {
  title: "Ricer's Notes",
  description: "前端 · 数据可视化 · 技术笔记",
  base: "/docs/",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/posts/1' }
    ],
    sidebar: {
      '/posts/': [
        { text: '用 ECharts 做仪表盘', link: '/posts/1' },
        { text: 'D3 时间轴实战', link: '/posts/2' },
        { text: '前端性能优化清单', link: '/posts/3' }
      ]
    }
  }
}
