import React, { useState, useEffect } from 'react';
import { BookOpen, Code, Home, User, Lightbulb, GraduationCap, Github, Mail, Link as LinkIcon, Music2, Award, CalendarDays, MapPin, ExternalLink, Sun, Moon, FolderOpen, Clock, Tag, Users, Image as ImageIcon } from 'lucide-react';

// 你的头像图片
const avatarUrl = 'https://raw.githubusercontent.com/RicerChen/my-image-bed/main/20251109124103841.jpg';

// InfoCard 辅助组件，用于统一卡片样式和处理卡片淡入动画
const InfoCard = ({ title, children, icon: Icon, colorClass, delay = 0, isMounted, isDark = false, scrollId, isVisible = false }) => {
  // 定义颜色类以支持 Tailwind JIT 编译
  const iconColor = {
    'pink-500': 'text-pink-500',
    'purple-500': 'text-purple-500',
    'yellow-500': 'text-yellow-500',
    'green-500': 'text-green-500',
  }[colorClass] || 'text-gray-700';

  return (
    <div
      id={scrollId}
      data-scroll-animate
      className={`
        p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl transition-all duration-700
        hover:scale-[1.02]
        ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${isVisible ? 'scale-105' : 'scale-100'}
      `}
      style={{
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(30px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.35)',
        boxShadow: isDark 
          ? '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)' 
          : '0 8px 32px 0 rgba(255, 192, 203, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
        transitionDelay: isMounted ? `${delay}ms` : '0ms',
      }}
    >
      <div className={`flex items-center mb-2 sm:mb-3 md:mb-4 border-b pb-2 ${isDark ? 'border-white/10' : 'border-pink-200/50'}`}>
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 ${iconColor}`} />
        <h4 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-white' : 'text-pink-800'}`}>{title}</h4>
      </div>
      <div className={isDark ? 'text-white/90' : 'text-pink-700'}>
        {children}
      </div>
    </div>
  );
};

// TechBubble 辅助组件，用于技术栈的泡泡效果
const TechBubble = ({ techName, colorClass }) => (
  <span
    className={`
      inline-block px-4 py-2 m-1 rounded-full text-sm font-medium shadow-md
      text-white transition-all duration-300
      hover:shadow-lg hover:scale-105
      animate-pulse-slow
      ${colorClass}
    `}
  >
    {techName}
  </span>
);

// 主应用组件
const App = () => {
  const [activeTab, setActiveTab] = useState('AboutMe');
  // isMounted 控制主卡片和 InfoCard 的淡入动画
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // 用于跟踪滚动时可见的元素
  const [visibleElements, setVisibleElements] = useState(new Set());
  
  const techStack = [
    { name: 'Java SE', color: 'bg-red-400' },
    { name: 'HTML/CSS/JS', color: 'bg-blue-400' },
    { name: 'Vue', color: 'bg-green-400' },
  ];

  const timeline = [
    { time: '2023 - 至今', title: '软件工程 · 本科', location: '武汉', details: '正在学习中...' },
    { time: '2024', title: '前端进阶 · 实战', location: '远程/校内', details: '系统梳理工程化、组件化与可访问性，打磨个人项目。' },
    { time: '进行中', title: '寻找 2026 寒假 前端/产品实习', location: '优先一线城市', details: '欢迎内推与合作～' },
  ];

  const interests = ['鬼灭之刃', '美术', '开源贡献', '产品设计', '钢琴', '音乐', 'AIGC'];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/RicerChen', icon: Github },
    { label: 'Mail', href: 'mailto:crazier2005@163.com', icon: Mail, isMail: true },
    { label: '主页', href: 'https://lofisu.vercel.app', icon: LinkIcon },
    { label: '音乐', href: 'https://music.163.com/', icon: Music2 },
  ];

  // 朋友圈数据（带tag分类）
  const moments = [
    { id: 1, content: '今天学习了React Hooks的高级用法，收获满满！', tags: ['学习'], date: '2024-12-20' },
    { id: 2, content: '发现了一家超好吃的日料店，推荐给大家！', tags: ['美食'], date: '2024-12-19' },
    { id: 3, content: '完成了个人博客的重构，使用了Glassmorphism设计风格', tags: ['学习'], date: '2024-12-18' },
    { id: 4, content: '周末去看了画展，被艺术家的作品深深震撼', tags: ['美术'], date: '2024-12-17' },
    { id: 5, content: '今天尝试了新的菜谱，虽然失败了但很有趣', tags: ['美食'], date: '2024-12-16' },
  ];

  // 音乐数据（最近喜欢的歌手）
  const favoriteSinger = {
    name: '周杰伦',
    albums: [
      { name: '最伟大的作品', year: '2022' },
      { name: '说好不哭', year: '2019' },
      { name: '等你下课', year: '2018' },
    ],
    currentLyrics: '天青色等烟雨，而我在等你。炊烟袅袅升起，隔江千万里。'
  };

  // 项目数据（占位）
  const projects = [
    {
      id: 1,
      title: '个人博客系统',
      description: '基于 React + Glassmorphism 设计的个人博客，支持暗色模式，响应式布局。',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      status: '进行中',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'AI 学习助手',
      description: '使用 AI 技术帮助记录和学习过程，包含智能推荐和知识图谱功能。',
      tech: ['Vue', 'Node.js', 'AI API'],
      status: '规划中',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Hackathon 项目',
      description: '参与 Hackathon 比赛的项目，关注产品设计和用户体验。',
      tech: ['React', 'TypeScript', 'Design'],
      status: '已完成',
      link: '#',
      github: '#',
    },
  ];

  // 博客文章数据（占位）
  const blogPosts = [
    {
      id: 1,
      title: 'AI 工具使用心得分享',
      excerpt: '记录在使用 AI 工具进行学习和开发过程中的心得体会，包括最佳实践和踩坑经验。',
      date: '2024-12-20',
      tags: ['AI', '学习', '工具'],
      readTime: '5 分钟',
    },
    {
      id: 2,
      title: '前端工程化实践',
      excerpt: '分享前端项目搭建、代码规范、构建优化等工程化实践经验。',
      date: '2024-12-15',
      tags: ['前端', '工程化', 'Vue'],
      readTime: '8 分钟',
    },
    {
      id: 3,
      title: 'Glassmorphism 设计风格探索',
      excerpt: '深入探讨玻璃拟态设计风格在前端开发中的应用，包括实现技巧和视觉效果。',
      date: '2024-12-10',
      tags: ['设计', 'CSS', 'UI'],
      readTime: '6 分钟',
    },
  ];

  useEffect(() => {
    // 组件挂载后延迟一点时间设置 isMounted 为 true，触发所有淡入
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []); // 仅在组件挂载时运行一次

  // 滚动触发动画 - 使用 Intersection Observer
  useEffect(() => {
    let observer = null;
    let elements = [];
    
    // 延迟一下，确保 DOM 已更新
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleElements((prev) => new Set([...prev, entry.target.id]));
            } else {
              setVisibleElements((prev) => {
                const next = new Set(prev);
                next.delete(entry.target.id);
                return next;
              });
            }
          });
        },
        {
          threshold: 0.2, // 当元素 20% 可见时触发
          rootMargin: '-50px 0px', // 提前触发
        }
      );

      // 观察所有可动画的元素
      elements = document.querySelectorAll('[data-scroll-animate]');
      elements.forEach((el) => {
        if (el.id) {
          observer.observe(el);
        }
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      if (observer && elements.length > 0) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [activeTab, isMounted]); // 当切换标签页或组件挂载时重新观察

  // 导航项定义
  const navItems = [
    { id: 'Home', label: '首页', icon: Home, path: '/' },
    { id: 'Blog', label: '博客', icon: BookOpen, path: '/blog' },
    { id: 'Projects', label: '项目', icon: Code, path: '/projects' },
    { id: 'Moments', label: '朋友圈', icon: Users, path: '/moments' },
    { id: 'AboutMe', label: '关于我', icon: User, path: '/about' },
  ];

  // 渲染导航栏
  const Nav = () => (
    <nav 
      className={`flex items-center justify-between p-2 sm:p-3 md:p-4 transition-all duration-300`}
      style={{
        borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 192, 203, 0.2)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.1)',
        boxShadow: isDark 
          ? 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)' 
          : 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)',
      }}
    >
      <div className="flex space-x-1 sm:space-x-2 md:space-x-4 flex-wrap">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === activeTab;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              flex items-center space-x-1 sm:space-x-2 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300
              ${isActive 
                ? `${isDark ? 'text-white' : 'text-pink-700'} transform scale-105` 
                : `${isDark ? 'text-white/80 hover:text-white' : 'text-pink-600 hover:text-pink-800'} hover:-translate-y-0.5` 
              }
              group text-sm sm:text-base
            `}
            style={{ 
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              backgroundColor: isActive 
                ? (isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.4)')
                : 'transparent',
              border: isActive 
                ? (isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.5)')
                : '1px solid transparent',
              boxShadow: isActive 
                ? (isDark 
                  ? '0 4px 16px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)' 
                  : '0 4px 16px 0 rgba(255, 192, 203, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)')
                : 'none',
            }}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-6" />
            <span className="font-medium">{item.label}</span>
          </button>
        );
      })}
      </div>
      <button
        onClick={() => setIsDark(v => !v)}
        className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 group ${isDark ? 'text-white' : 'text-pink-700'}`}
        title={isDark ? '切换浅色' : '切换深色'}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.4)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: isDark 
            ? '0 4px 16px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)' 
            : '0 4px 16px 0 rgba(255, 192, 203, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
        }}
      >
        {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
      </button>
    </nav>
  );

  // 渲染关于我页面内容
  const AboutMeContent = ({ isMounted }) => (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-6 md:space-y-8">
      {/* 头像区域 */}
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src={avatarUrl}
          alt="RicerChen Avatar"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover
                     border-4 border-pink-300 shadow-xl
                     transform transition-transform duration-300 hover:scale-105 hover:rotate-3"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <h2 className={`text-3xl font-bold mt-4 animate-bounce-slow ${isDark ? 'text-white' : 'text-pink-800'}`}>RicerChen</h2>
        <p className={`${isDark ? 'text-white/90' : 'text-pink-700'} text-xl`}>陈碗饭😋</p>
      </div>

      <h3 className={`text-2xl font-bold mb-6 pb-2 ${isDark ? 'text-white border-white/10' : 'text-pink-800 border-pink-300'} border-b`}>
        个人信息概览
      </h3>

      {/* 个人信息概览 - 统一容器，上下布局 */}
      <div
        id="overview-container"
        data-scroll-animate
        className={`
          p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl transition-all duration-700
          hover:scale-[1.01]
          ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          ${visibleElements.has('overview-container') ? 'scale-105' : 'scale-100'}
        `}
        style={{
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: isDark 
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)' 
            : '0 8px 32px 0 rgba(255, 192, 203, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="space-y-6 sm:space-y-8">
          {/* 学业状态 */}
          <div className={`pb-4 sm:pb-6 border-b ${isDark ? 'border-white/10' : 'border-pink-200/50'}`}>
            <div className={`flex items-center mb-3 sm:mb-4`}>
              <GraduationCap className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-500`} />
              <h4 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-white' : 'text-pink-800'}`}>学业状态</h4>
            </div>
            <div className={isDark ? 'text-white/90' : 'text-pink-700'}>
              <p>📚目前软件工程大二在读（＾ν＾）。</p>
            </div>
          </div>

          {/* 技术栈 */}
          <div className={`pb-4 sm:pb-6 border-b ${isDark ? 'border-white/10' : 'border-pink-200/50'}`}>
            <div className={`flex items-center mb-3 sm:mb-4`}>
              <Code className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-green-500`} />
              <h4 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-white' : 'text-pink-800'}`}>技术栈</h4>
            </div>
            <div className={isDark ? 'text-white/90' : 'text-pink-700'}>
              <div className="flex flex-wrap">
                {techStack.map(tech => (
                  <TechBubble key={tech.name} techName={tech.name} colorClass={tech.color} />
                ))}
              </div>
            </div>
          </div>

          {/* GitHub & 内容更新 */}
          <div className={`pb-4 sm:pb-6 border-b ${isDark ? 'border-white/10' : 'border-pink-200/50'}`}>
            <div className={`flex items-center mb-3 sm:mb-4`}>
              <Github className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-yellow-500`} />
              <h4 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-white' : 'text-pink-800'}`}>GitHub & 内容更新</h4>
            </div>
            <div className={isDark ? 'text-white/90' : 'text-pink-700'}>
              <p className="mb-3">
                <a href="https://github.com/Ricer" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} font-semibold hover:underline flex items-center`}>
                  <Github className="w-5 h-5 mr-2" /> github@Ricer
                </a>
              </p>
              <p className="text-sm">
                🍠 陈碗饭 这周开始会持续更新 AI 使用以及学习过程分享～ 欢迎大家一起分享监督～
              </p>
            </div>
          </div>

          {/* 目标与协作 */}
          <div>
            <div className={`flex items-center mb-3 sm:mb-4`}>
              <Lightbulb className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-pink-500`} />
              <h4 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-white' : 'text-pink-800'}`}>目标与协作</h4>
            </div>
            <div className={isDark ? 'text-white/90' : 'text-pink-700'}>
              <p className="mb-3">
                目前在完善前端技术栈和产品经验！希望在26年前找到实习。
              </p>
              <p>
                想找 **Hackthon 队友**，一起交流实现想法～欢迎多多交流，一起进步（＾ν＾）
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 详细信息 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        <InfoCard 
          title="经历时间线" 
          icon={CalendarDays}
          colorClass="purple-500"
          delay={600}
          isMounted={isMounted}
          isDark={isDark}
          scrollId="card-timeline"
          isVisible={visibleElements.has('card-timeline')}
        >
          <ul className="space-y-3">
            {timeline.map((e) => (
              <li key={e.title} className="flex">
                <div className="w-2 h-2 mt-2 mr-3 rounded-full bg-purple-400" />
                <div>
                  <p className={`${isDark ? 'text-white' : 'text-pink-800'} font-semibold`}>{e.title}</p>
                  <p className={`${isDark ? 'text-white/80' : 'text-pink-700'} text-sm flex items-center`}>
                    <CalendarDays className="w-4 h-4 mr-1" /> {e.time}
                    <span className="mx-2">·</span>
                    <MapPin className="w-4 h-4 mr-1" /> {e.location}
                  </p>
                  <p className={`${isDark ? 'text-white/70' : 'text-pink-700'} text-sm mt-1`}>{e.details}</p>
                </div>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard 
          title="联系方式与外链" 
          icon={LinkIcon}
          colorClass="green-500"
          delay={750}
          isMounted={isMounted}
          isDark={isDark}
          scrollId="card-social"
          isVisible={visibleElements.has('card-social')}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.isMail ? undefined : "_blank"}
                    rel={s.isMail ? undefined : "noopener noreferrer"}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${isDark ? 'bg-white/10 text-white' : 'bg-pink-400 text-white'}`}
                  >
                    <Icon className="w-4 h-4 mr-2" /> {s.label}
                    {!s.isMail && <ExternalLink className="w-3 h-3 ml-1 opacity-80" />}
                  </a>
                );
              })}
            </div>
            
            {/* 音乐部分 - 专辑页面滚动和歌词滚动 */}
            <div className="mt-6">
              <h4 className={`text-base font-semibold mb-3 ${isDark ? 'text-white' : 'text-pink-800'}`}>
                最近喜欢的歌手 · {favoriteSinger.name}
              </h4>
              
              {/* 专辑滚动 */}
              <div className="mb-4 overflow-hidden rounded-lg" style={{ height: '140px' }}>
                <div 
                  className="flex space-x-4"
                  style={{
                    width: 'max-content',
                    animation: 'scroll-horizontal 20s linear infinite',
                  }}
                >
                  {[...favoriteSinger.albums, ...favoriteSinger.albums].map((album, idx) => (
                    <div
                      key={idx}
                      className={`flex-shrink-0 w-28 h-28 rounded-lg p-3 flex flex-col justify-center items-center ${
                        isDark ? 'bg-white/10 border border-white/20' : 'bg-pink-100 border border-pink-200'
                      }`}
                      style={{
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 192, 203, 0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Music2 className={`w-6 h-6 mb-2 ${isDark ? 'text-white' : 'text-pink-600'}`} />
                      <div className={`text-xs font-semibold text-center mb-1 ${isDark ? 'text-white' : 'text-pink-800'}`}>
                        {album.name}
                      </div>
                      <div className={`text-xs ${isDark ? 'text-white/60' : 'text-pink-600'}`}>
                        {album.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 歌词滚动 */}
              <div className={`relative overflow-hidden rounded-lg ${isDark ? 'bg-white/5' : 'bg-pink-50'}`} style={{ height: '48px' }}>
                <div 
                  className="absolute flex items-center h-full"
                  style={{
                    whiteSpace: 'nowrap',
                    animation: 'scroll-lyrics 12s linear infinite',
                  }}
                >
                  <span className={`text-sm px-4 ${isDark ? 'text-white/80' : 'text-pink-700'}`}>
                    {favoriteSinger.currentLyrics} · {favoriteSinger.currentLyrics} · {favoriteSinger.currentLyrics} · {favoriteSinger.currentLyrics}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className={`inline-flex items-center px-5 py-2 rounded-xl font-semibold transition-colors ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-yellow-400 text-pink-900 hover:bg-yellow-300'}`}
            >
              <Award className="w-4 h-4 mr-2" /> 下载简历（PDF）
            </a>
          </div>
        </InfoCard>
      </div>

      <InfoCard 
        title="兴趣与标签" 
        icon={Music2}
        colorClass="pink-500"
        delay={900}
        isMounted={isMounted}
        isDark={isDark}
        scrollId="card-interests"
        isVisible={visibleElements.has('card-interests')}
      >
        <div className="flex flex-wrap">
          {interests.map(tag => (
            <span key={tag} className={`inline-block px-4 py-2 m-1 rounded-full text-sm font-medium shadow-md ${isDark ? 'bg-white/10 text-white' : 'bg-pink-300 text-pink-900'}`}>{tag}</span>
          ))}
        </div>
      </InfoCard>
    </div>
  );

  // 渲染项目页面内容
  const ProjectsContent = ({ isMounted }) => (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-6">
      <h3 className={`text-2xl font-bold mb-6 pb-2 ${isDark ? 'text-white border-white/10' : 'text-pink-800 border-pink-300'} border-b`}>
        我的项目
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            data-scroll-animate
            className={`
              p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl transition-all duration-700
              hover:scale-[1.02]
              ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              ${visibleElements.has(`project-${project.id}`) ? 'scale-105' : 'scale-100'}
            `}
            style={{
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(30px) saturate(180%)',
              WebkitBackdropFilter: 'blur(30px) saturate(180%)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: isDark 
                ? '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)' 
                : '0 8px 32px 0 rgba(255, 192, 203, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
              transitionDelay: isMounted ? `${index * 150}ms` : '0ms',
            }}
          >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex items-center flex-1 min-w-0">
                <FolderOpen className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
                <h4 className={`text-lg sm:text-xl font-semibold break-words ${isDark ? 'text-white' : 'text-pink-800'}`}>{project.title}</h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === '已完成' ? 'bg-green-400 text-white' :
                project.status === '进行中' ? 'bg-yellow-400 text-white' :
                'bg-gray-400 text-white'
              }`}>
                {project.status}
              </span>
            </div>
            <p className={`${isDark ? 'text-white/80' : 'text-pink-700'} mb-4 text-sm`}>
              {project.description}
            </p>
            <div className="flex flex-wrap mb-4">
              {project.tech.map(tech => (
                <span key={tech} className={`px-3 py-1 m-1 rounded-full text-xs font-medium ${
                  isDark ? 'bg-white/10 text-white' : 'bg-pink-300 text-pink-900'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-3">
              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-pink-400 text-white hover:bg-pink-500'
                  }`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" /> 查看项目
                </a>
              )}
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-400 text-white hover:bg-gray-500'
                  }`}
                >
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 渲染博客页面内容
  const BlogContent = ({ isMounted }) => (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-6">
      <h3 className={`text-2xl font-bold mb-6 pb-2 ${isDark ? 'text-white border-white/10' : 'text-pink-800 border-pink-300'} border-b`}>
        博客文章
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            id={`post-${post.id}`}
            data-scroll-animate
            className={`
              p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl transition-all duration-700
              hover:scale-[1.01]
              ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              ${visibleElements.has(`post-${post.id}`) ? 'scale-105' : 'scale-100'}
            `}
            style={{
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(30px) saturate(180%)',
              WebkitBackdropFilter: 'blur(30px) saturate(180%)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: isDark 
                ? '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)' 
                : '0 8px 32px 0 rgba(255, 192, 203, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
              transitionDelay: isMounted ? `${index * 150}ms` : '0ms',
            }}
          >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <h4 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-white' : 'text-pink-800'} flex-1 break-words hover:underline cursor-pointer`}>
                {post.title}
              </h4>
            </div>
            <p className={`${isDark ? 'text-white/70' : 'text-pink-700'} mb-4 text-sm leading-relaxed`}>
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex items-center space-x-4 text-xs">
                <span className={`flex items-center ${isDark ? 'text-white/60' : 'text-pink-600'}`}>
                  <Clock className="w-4 h-4 mr-1" /> {post.date}
                </span>
                <span className={isDark ? 'text-white/60' : 'text-pink-600'}>
                  ⏱️ {post.readTime}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDark ? 'bg-white/10 text-white' : 'bg-pink-300 text-pink-900'
                    }`}
                  >
                    <Tag className="w-3 h-3 mr-1" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 渲染朋友圈页面内容
  const MomentsContent = ({ isMounted }) => {
    const [selectedTag, setSelectedTag] = useState('全部');
    const allTags = ['全部', ...new Set(moments.flatMap(m => m.tags))];
    const filteredMoments = selectedTag === '全部' 
      ? moments 
      : moments.filter(m => m.tags.includes(selectedTag));

    return (
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-6">
        <h3 className={`text-2xl font-bold mb-6 pb-2 ${isDark ? 'text-white border-white/10' : 'text-pink-800 border-pink-300'} border-b`}>
          朋友圈
        </h3>

        {/* Tag 分类 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === tag
                  ? isDark 
                    ? 'bg-white/20 text-white' 
                    : 'bg-pink-400 text-white'
                  : isDark
                    ? 'bg-white/10 text-white/80 hover:bg-white/15'
                    : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 朋友圈内容 */}
        <div className="space-y-4">
          {filteredMoments.map((moment, index) => (
            <div
              key={moment.id}
              id={`moment-${moment.id}`}
              data-scroll-animate
              className={`
                p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-700
                hover:scale-[1.01]
                ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                ${visibleElements.has(`moment-${moment.id}`) ? 'scale-105' : 'scale-100'}
              `}
              style={{
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.35)',
                boxShadow: isDark 
                  ? '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)' 
                  : '0 8px 32px 0 rgba(255, 192, 203, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
                transitionDelay: isMounted ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className={`${isDark ? 'text-white' : 'text-pink-800'} text-base sm:text-lg mb-2`}>
                    {moment.content}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {moment.tags.map(tag => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-xs ${
                          isDark ? 'bg-white/10 text-white' : 'bg-pink-200 text-pink-900'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`text-xs ${isDark ? 'text-white/60' : 'text-pink-600'}`}>
                {moment.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 渲染首页内容
  const HomeContent = ({ isMounted }) => (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-6 md:space-y-8">
      {/* 个人信息区域 - 左侧布局 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
        <img
          src={avatarUrl}
          alt="RicerChen Avatar"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover
                     border-2 sm:border-3 md:border-4 border-pink-300 shadow-xl
                     transform transition-transform duration-300 hover:scale-105 hover:rotate-3 flex-shrink-0"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-2">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-pink-800'}`}>
              RicerChen
            </h2>
            <span className={`text-lg sm:text-xl ${isDark ? 'text-white/80' : 'text-pink-700'}`}>
              陈碗饭😋
            </span>
          </div>
          <p className={`${isDark ? 'text-white/80' : 'text-pink-700'} text-sm sm:text-base mb-3`}>
            软件工程大二在读，正在学习前端开发，喜欢产品设计和 AIGC。
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socials.map(s => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all text-sm ${
                    isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-pink-100 hover:bg-pink-200 text-pink-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        <InfoCard 
          title="最新文章" 
          icon={BookOpen}
          colorClass="purple-500"
          delay={0}
          isMounted={isMounted}
          isDark={isDark}
          scrollId="home-latest"
          isVisible={visibleElements.has('home-latest')}
        >
          <p className="mb-2">
            <span className={`${isDark ? 'text-white' : 'text-pink-800'} font-semibold`}>{blogPosts[0]?.title}</span>
          </p>
          <p className={`${isDark ? 'text-white/70' : 'text-pink-700'} text-sm`}>
            {blogPosts[0]?.excerpt.substring(0, 60)}...
          </p>
        </InfoCard>
        <InfoCard 
          title="进行中的项目" 
          icon={Code}
          colorClass="green-500"
          delay={150}
          isMounted={isMounted}
          isDark={isDark}
          scrollId="home-project"
          isVisible={visibleElements.has('home-project')}
        >
          <p className={`${isDark ? 'text-white' : 'text-pink-800'} font-semibold mb-2`}>
            {projects.find(p => p.status === '进行中')?.title || '暂无'}
          </p>
          <p className={`${isDark ? 'text-white/70' : 'text-pink-700'} text-sm`}>
            持续更新中...
          </p>
        </InfoCard>
        <InfoCard 
          title="快速链接" 
          icon={LinkIcon}
          colorClass="yellow-500"
          delay={300}
          isMounted={isMounted}
          isDark={isDark}
          scrollId="home-links"
          isVisible={visibleElements.has('home-links')}
        >
          <div className="space-y-2">
            <a href="https://github.com/Ricer" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} hover:underline flex items-center text-sm`}>
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
            <a href="#" className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} hover:underline flex items-center text-sm`}>
              <BookOpen className="w-4 h-4 mr-2" /> 博客文章
            </a>
            <a href="#" className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'} hover:underline flex items-center text-sm`}>
              <Code className="w-4 h-4 mr-2" /> 项目作品
            </a>
          </div>
        </InfoCard>
      </div>
    </div>
  );

  // 渲染主内容区域
  const ContentArea = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeContent isMounted={isMounted} />;
      case 'AboutMe':
        return <AboutMeContent isMounted={isMounted} />;
      case 'Projects':
        return <ProjectsContent isMounted={isMounted} />;
      case 'Blog':
        return <BlogContent isMounted={isMounted} />;
      case 'Moments':
        return <MomentsContent isMounted={isMounted} />;
      default:
        return (
          <div className={`p-10 text-center ${isDark ? 'text-white' : 'text-pink-800'}`}>
            <h2 className="text-2xl font-semibold">
              {navItems.find(item => item.id === activeTab)?.label} 页面建设中...
            </h2>
            <p className={`${isDark ? 'text-white/70' : 'text-pink-600'} mt-2`}>敬请期待更多精彩内容！</p>
          </div>
        );
    }
  };

  return (
    // 使用自定义的 CSS 动画 keyframes
    <div className="min-h-screen flex items-start justify-center font-sans"
      style={{ 
        background: isDark ? 'linear-gradient(135deg, #0f0f14 0%, #1b1b2a 50%, #242433 100%)' : 'linear-gradient(135deg, #FFC0CB 0%, #ADD8E6 50%, #FAFAD2 100%)',
      }}
    >
      <style>{`
        /* 慢速呼吸式跳动动画 */
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px); 
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out; 
        }

        /* 脉冲式慢速呼吸动画，用于泡泡 */
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
          }
          50% {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
          }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
        }

        /* 字母跳跃动画 */
        @keyframes letter-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .letter-hover {
          display: inline-block;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .letter-hover:hover {
          animation: letter-bounce 0.6s ease;
        }

        /* 水平滚动动画 - 专辑 */
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* 歌词水平滚动动画 */
        @keyframes scroll-lyrics {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

      `}</style>
      <div 
        className={`w-full h-full min-h-screen
                   overflow-hidden
                   transition-all duration-1000 ease-out
                   ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{
          backgroundColor: isDark ? 'rgba(15, 15, 25, 0.25)' : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: isDark 
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' 
            : '0 8px 32px 0 rgba(255, 192, 203, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
        }}
      >
        
        {/* 头部标题与导航 */}
        <header className="p-2 sm:p-3 md:p-4 lg:p-6 pt-3 sm:pt-4 md:pt-6 pb-4 sm:pb-5 md:pb-6 overflow-visible">
          <h1 
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold break-words tracking-wide overflow-visible`} 
            style={{ 
              lineHeight: '1.2', 
              paddingBottom: '0.3em',
              display: 'inline-block',
              width: '100%'
            }}
          >
            {(() => {
              const title = "RicerChen's Blog";
              const letters = title.split('');
              // 计算有效字符数量（不包括空格和标点）
              const validChars = title.replace(/['\s]/g, '').length;
            
              return letters.map((char, index) => {
                // 空格和标点符号不添加动画，但保持样式
                const isSpaceOrPunct = char === ' ' || char === "'" || char === "'";
                
                // 计算当前字符在渐变中的位置
                const charIndex = title.substring(0, index).replace(/['\s]/g, '').length;
                const gradientPosition = validChars > 0 ? charIndex / Math.max(validChars - 1, 1) : 0;
                
                // 根据位置计算颜色（使用 RGB 值）
                let color;
                if (isDark) {
                  color = '#ffffff';
                } else {
                  // 计算渐变颜色：紫色 -> 粉色 -> 黄色
                  let r, g, b;
                  if (gradientPosition <= 0.5) {
                    // 前半部分：紫色(167,139,250) -> 粉色(236,72,153)
                    const t = gradientPosition * 2;
                    r = Math.round(167 + (236 - 167) * t);
                    g = Math.round(139 + (72 - 139) * t);
                    b = Math.round(250 + (153 - 250) * t);
                  } else {
                    // 后半部分：粉色(236,72,153) -> 黄色(253,224,71)
                    const t = (gradientPosition - 0.5) * 2;
                    r = Math.round(236 + (253 - 236) * t);
                    g = Math.round(72 + (224 - 72) * t);
                    b = Math.round(153 + (71 - 153) * t);
                  }
                  color = `rgb(${r}, ${g}, ${b})`;
                }
                
                return (
                  <span
                    key={index}
                    className={isSpaceOrPunct ? '' : 'letter-hover'}
                    style={{
                      color: color,
                      display: 'inline-block',
                    }}
                  >
                    {char}
                  </span>
                );
              });
            })()}
          </h1>
        </header>
        
        <Nav />

        {/* 内容区域 */}
        <main>
          {ContentArea()}
        </main>

        {/* 底部占位符 */}
        <footer className={`p-3 sm:p-4 text-center text-xs sm:text-sm mt-4 sm:mt-6 border-t ${isDark ? 'text-white/70 border-white/10' : 'text-pink-600 border-pink-100/50'}`}>
          © 2024 - 2025 RicerChen. Power by React & Glassmorphism.
        </footer>
      </div>
    </div>
  );
};

export default App;