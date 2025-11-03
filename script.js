// small front-end behaviors: theme toggle + mock posts
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();

  // theme persistence
  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') document.body.classList.add('light');

  themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
  });

  // mock posts - in real site you'd fetch from API or read markdown
  const posts = [
    {title: "用 ECharts 做一个仪表盘", excerpt: "讲解如何从零搭建企业级仪表盘，包含数据拉取与交互设计。", date: "2025-09-21"},
    {title: "D3 时间轴实战", excerpt: "一步步实现可缩放时间轴并绑定事件。", date: "2025-08-10"},
    {title: "前端性能优化清单", excerpt: "常见性能问题与解决方案集合。", date: "2025-06-03"}
  ];

  const postList = document.getElementById('postList');
  posts.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${p.title}</h3><small style="color:var(--muted)">${p.date}</small><p style="margin-top:10px">${p.excerpt}</p><a class="link" href="#">阅读全文 →</a>`;
    postList.append(card);
  });

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
