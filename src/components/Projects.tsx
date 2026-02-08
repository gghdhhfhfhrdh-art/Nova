import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  tag: string;
  desc: string;
  features: string[];
  gradient: string;
  icon: string;
  link?: string;
  status: string;
  statusColor: string;
}

const projects: Project[] = [
  {
    title: 'NebulaGuard',
    tag: 'Кибербезопасность',
    desc: 'Продвинутая система защиты и мониторинга, обеспечивающая безопасность ваших данных на всех уровнях. Интеллектуальный анализ угроз в реальном времени.',
    features: ['Threat Detection', 'Real-time Monitoring', 'AI Analysis', 'Auto-response'],
    gradient: 'from-nova-accent via-indigo-500 to-nova-cyan',
    icon: '🛡️',
    link: 'https://github.com/gghdhhfhfhrdh-art/NebulaGuard-',
    status: 'Released',
    statusColor: 'bg-green-500',
  },
  {
    title: 'CID-HELPER',
    tag: 'Majestic Dallas',
    desc: 'Топовый CID-помощник для написания отчётов в игре Majestic RP. Автоматизация рутинной работы и генерация профессиональных отчётов за секунды. Лучший инструмент для CID.',
    features: ['Report Builder', 'Auto-format', 'Templates', 'Fast Export'],
    gradient: 'from-nova-gold via-orange-500 to-red-500',
    icon: '📋',
    link: 'https://github.com/gghdhhfhfhrdh-art/CID-HELPER-Majestic-Dallas',
    status: 'Released',
    statusColor: 'bg-green-500',
  },
  {
    title: 'NebulaOS',
    tag: 'Операционная система',
    desc: 'Концептуальная "фейк" ОС с потрясающим UI/UX дизайном. Полная эмуляция десктопного окружения прямо в браузере с эффектами и анимациями.',
    features: ['Desktop UI', 'File Manager', 'Terminal', 'App Store'],
    gradient: 'from-nova-cyan via-teal-500 to-emerald-500',
    icon: '💻',
    link: 'https://github.com/gghdhhfhfhrdh-art/NebulaOS',
    status: 'Released',
    statusColor: 'bg-green-500',
  },
  {
    title: 'Nova Pulse',
    tag: 'Аналитика',
    desc: 'Мощная платформа аналитики данных в реальном времени. Красивые дашборды с интерактивными графиками, уведомления и AI-прогнозирование трендов.',
    features: ['Live Dashboard', 'AI Predictions', 'Alerts', 'Custom Reports'],
    gradient: 'from-nova-pink via-rose-500 to-red-500',
    icon: '📊',
    status: 'In Development',
    statusColor: 'bg-yellow-500',
  },
  {
    title: 'AstraChat',
    tag: 'Мессенджер',
    desc: 'Защищённый мессенджер с end-to-end шифрованием, самоуничтожающимися сообщениями и встроенным AI-ассистентом. Приватность без компромиссов.',
    features: ['E2E Encryption', 'Self-destruct', 'AI Assistant', 'Voice Calls'],
    gradient: 'from-nova-accent2 via-purple-500 to-nova-accent',
    icon: '💬',
    status: 'In Development',
    statusColor: 'bg-yellow-500',
  },
  {
    title: 'Void VPN',
    tag: 'Приватность',
    desc: 'Сверхбыстрый VPN с квантовым шифрованием и нулевыми логами. Защита вашей конфиденциальности на максимальном уровне с серверами в 80+ странах.',
    features: ['Zero Logs', 'Quantum Encryption', '80+ Countries', 'Kill Switch'],
    gradient: 'from-emerald-400 via-teal-500 to-nova-cyan',
    icon: '🔐',
    status: 'Planning',
    statusColor: 'bg-blue-500',
  },
  {
    title: 'StarForge IDE',
    tag: 'Среда разработки',
    desc: 'Облачная IDE нового поколения с AI-автодополнением, встроенным терминалом, live-коллаборацией и поддержкой 50+ языков. Космическая тема по умолчанию.',
    features: ['AI Autocomplete', 'Live Collab', 'Git Integration', '50+ Languages'],
    gradient: 'from-yellow-400 via-amber-500 to-nova-gold',
    icon: '⚡',
    status: 'Planning',
    statusColor: 'bg-blue-500',
  },
  {
    title: 'Nova Sentinel',
    tag: 'Мониторинг',
    desc: 'Интеллектуальная система мониторинга серверов, API и микросервисов. Мгновенные алерты, визуализация нагрузки и автоматическое масштабирование.',
    features: ['Server Monitor', 'API Health', 'Auto-scale', 'Incident Mgmt'],
    gradient: 'from-sky-400 via-blue-500 to-indigo-600',
    icon: '📡',
    status: 'Planning',
    statusColor: 'bg-blue-500',
  },
  {
    title: 'PhantomDB',
    tag: 'База данных',
    desc: 'Распределённая NoSQL база данных с акцентом на скорость и отказоустойчивость. Автоматическая репликация, шардинг и встроенный кеш.',
    features: ['Distributed', 'Auto-sharding', 'Built-in Cache', 'Real-time Sync'],
    gradient: 'from-violet-400 via-fuchsia-500 to-nova-pink',
    icon: '🗄️',
    status: 'Concept',
    statusColor: 'bg-purple-500',
  },
];

function ProjectCard({ project, index, visible }: { project: Project; index: number; visible: boolean }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      className={`relative group transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: visible && isHovered
          ? `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg) scale(1.02)`
          : visible ? 'perspective(1000px) rotateY(0deg) rotateX(0deg)' : 'translateY(4rem)',
        transition: 'transform 0.3s ease, opacity 0.7s ease',
      }}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

      <div className="relative glass-card rounded-3xl overflow-hidden h-full flex flex-col" style={{ transform: 'translateZ(0)' }}>
        {/* Top gradient bar */}
        <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

        {/* Header with icon */}
        <div className="p-7 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-5">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {project.icon}
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${project.statusColor} animate-pulse`} />
              <span className="text-xs text-nova-muted">{project.status}</span>
            </div>
          </div>

          {/* Tag */}
          <span className={`inline-block text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-nova-border mb-3 self-start`}>
            {project.tag}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nova-cyan transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-nova-muted text-sm leading-relaxed mb-5 flex-1">
            {project.desc}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.features.map((f, i) => (
              <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-nova-border/30 text-nova-muted border border-nova-border/50 hover:border-nova-accent/30 transition-colors">
                {f}
              </span>
            ))}
          </div>

          {/* Action */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm btn-3d self-start`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-nova-border text-nova-muted text-sm cursor-default self-start">
              <span className="w-2 h-2 rounded-full bg-nova-accent animate-pulse" />
              Скоро
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filters = [
    { key: 'all', label: 'Все проекты' },
    { key: 'released', label: '🟢 Released' },
    { key: 'dev', label: '🟡 In Dev' },
    { key: 'planned', label: '🔵 Planned' },
  ];

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'released') return p.status === 'Released';
    if (filter === 'dev') return p.status === 'In Development';
    if (filter === 'planned') return p.status === 'Planning' || p.status === 'Concept';
    return true;
  });

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-nova-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nova-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-nova-cyan mb-4 block">Портфолио</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-nova-text bg-clip-text text-transparent">Наши </span>
            <span className="bg-gradient-to-r from-nova-accent to-nova-cyan bg-clip-text text-transparent neon-text-cyan">проекты</span>
          </h2>
          <p className="text-nova-muted max-w-2xl mx-auto text-lg">
            Каждый проект — это уникальное решение, созданное с вниманием к деталям и любовью к технологиям
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-14 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === f.key
                  ? 'bg-nova-accent/20 border-nova-accent/50 text-white shadow-lg shadow-nova-accent/10'
                  : 'bg-nova-border/10 border-nova-border/30 text-nova-muted hover:border-nova-accent/30 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 perspective-1000">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} visible={visible} />
          ))}
        </div>

        {/* Project count */}
        <div className={`text-center mt-14 transition-all duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-nova-muted text-sm">
            <span className="text-2xl font-black bg-gradient-to-r from-nova-accent to-nova-cyan bg-clip-text text-transparent">{projects.length}</span>
            <span className="ml-2">проектов в портфолио</span>
            <span className="mx-2">·</span>
            <span className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">{projects.filter(p => p.status === 'Released').length}</span>
            <span className="ml-2">выпущено</span>
          </p>
        </div>
      </div>
    </section>
  );
}
