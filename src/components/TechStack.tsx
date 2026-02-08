import { useEffect, useRef, useState } from 'react';

const technologies = [
  { name: 'React', icon: '⚛️', color: '#61DAFB', level: 95 },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6', level: 92 },
  { name: 'Python', icon: '🐍', color: '#3776AB', level: 90 },
  { name: 'Node.js', icon: '🟢', color: '#339933', level: 88 },
  { name: 'Rust', icon: '🦀', color: '#CE422B', level: 75 },
  { name: 'C++', icon: '⚙️', color: '#00599C', level: 82 },
  { name: 'Docker', icon: '🐳', color: '#2496ED', level: 85 },
  { name: 'AWS', icon: '☁️', color: '#FF9900', level: 80 },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169E1', level: 88 },
  { name: 'Redis', icon: '🔴', color: '#DC382D', level: 84 },
  { name: 'GraphQL', icon: '◆', color: '#E10098', level: 78 },
  { name: 'Kubernetes', icon: '☸️', color: '#326CE5', level: 72 },
];

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="tech" className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nova-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-nova-accent2 mb-4 block">Технологии</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-nova-text bg-clip-text text-transparent">Наш </span>
            <span className="bg-gradient-to-r from-nova-accent2 to-nova-pink bg-clip-text text-transparent">стек</span>
          </h2>
          <p className="text-nova-muted max-w-2xl mx-auto text-lg">
            Мы используем самые современные и надёжные технологии для создания наших продуктов
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 group cursor-default transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                <span className="font-bold text-white text-sm">{tech.name}</span>
              </div>

              {/* Skill bar */}
              <div className="h-1.5 rounded-full bg-nova-border/30 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1500 ease-out"
                  style={{
                    width: visible ? `${tech.level}%` : '0%',
                    backgroundColor: tech.color,
                    boxShadow: `0 0 10px ${tech.color}50`,
                    transitionDelay: `${i * 100 + 500}ms`,
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-xs text-nova-muted">{tech.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating 3D cube decoration */}
        <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 perspective-1000">
          <div className="w-32 h-32 animate-rotate-3d preserve-3d">
            <div className="absolute inset-0 border border-nova-accent/20 rounded-2xl" style={{ transform: 'translateZ(64px)' }} />
            <div className="absolute inset-0 border border-nova-cyan/10 rounded-2xl" style={{ transform: 'translateZ(-64px)' }} />
            <div className="absolute inset-0 border border-nova-accent2/10 rounded-2xl" style={{ transform: 'rotateY(90deg) translateZ(64px)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
