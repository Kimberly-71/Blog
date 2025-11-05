import { useEffect, useState } from 'react'
import './App.css'

export default function App(){
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  useEffect(()=>{ document.body.className = theme; localStorage.setItem('theme', theme) },[theme])
  const posts = [
    { title: "用 ECharts 做一个仪表盘", date: "2025-09-21", excerpt: "讲解如何从零搭建企业级仪表盘。" },
    { title: "D3 时间轴实战", date: "2025-08-10", excerpt: "一步步实现可缩放时间轴并绑定事件。" },
    { title: "前端性能优化清单", date: "2025-06-03", excerpt: "常见性能问题与解决方案集合。" }
  ]
  return (
    <main className="page">
      <header className="header">
        <div className="container">
          <h1>Ricer</h1>
          <nav>
            <a href="/docs/">Notes</a>
            <button onClick={()=>setTheme(t=> t==='dark'?'light':'dark')}>{theme==='dark'?'☀️':'🌙'}</button>
          </nav>
        </div>
      </header>

      <section className="hero container">
        <img className="avatar" src="https://picsum.photos/seed/ricer/300" alt="Ricer avatar" />
        <div>
          <h2>Hi, I'm <span className="accent">Ricer</span></h2>
          <p>前端工程师 · 数据可视化 · 技术笔记</p>
        </div>
      </section>

      <section className="container posts">
        <h2>最新文章</h2>
        <div className="grid">
          {posts.map((p, i)=>(
            <article className="card" key={i}>
              <h3>{p.title}</h3>
              <small>{p.date}</small>
              <p>{p.excerpt}</p>
              <a href={`/docs/posts/${i+1}.html`}>阅读全文 →</a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer container">
        <small>© {new Date().getFullYear()} Ricer · Built with React + Vite</small>
      </footer>
    </main>
  )
}
