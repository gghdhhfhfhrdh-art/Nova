import { useEffect, useRef, useState } from 'react';

const teamMembers = [
  {
    name: 'UBOCKA',
    role: 'CEO & Founder',
    desc: 'Визионер и основатель NOVA. Определяет стратегическое направление, ведёт компанию к новым горизонтам и вдохновляет команду на свершения.',
    avatar: '👑',
    gradient: 'from-nova-gold via-amber-500 to-orange-500',
    skills: ['Leadership', 'Strategy', 'Vision', 'Management'],
    ring: 'ring-nova-gold/30',
  },
  {
    name: 'UBOCKA',
    role: 'Lead Developer',
    desc: 'Главный разработчик и архитектор всех проектов NOVA. Full-stack мастер, стоящий за NebulaGuard, CID-HELPER и NebulaOS.',
    avatar: '💻',
    gradient: 'from-nova-accent via-indigo-500 to-nova-cyan',
    skills: ['Full-Stack', 'Architecture', 'Python', 'TypeScript'],
    ring: 'ring-nova-accent/30',
  },
  {
    name: 'LM ARENA',
    role: 'UI/UX Designer',
    desc: 'Создатель космических интерфейсов NOVA. Каждый пиксель, каждая анимация, каждый градиент — дело рук этого мастера дизайна.',
    avatar: '🎨',
    gradient: 'from-nova-pink via-rose-500 to-red-500',
    skills: ['UI Design', 'UX Research', 'Figma', '3D/Motion'],
    ring: 'ring-nova-pink/30',
  },
  {
    name: 'Поиск...',
    role: 'Security Engineer',
    desc: 'Мы ищем талантливого специалиста по кибербезопасности! Если ты эксперт — присоединяйся к NOVA и защищай будущее вместе с нами.',
    avatar: '🔒',
    gradient: 'from-gray-500 via-gray-600 to-gray-700',
    skills: ['Cybersecurity', 'Pentest', 'Crypto', 'DevSecOps'],
    ring: 'ring-gray-500/30',
    isHiring: true,
  },
];

export function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="team" className="relative py-32 px-6" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-nova-pink/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-nova-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-nova-pink mb-4 block">Команда</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-nova-text bg-clip-text text-transparent">Наша </span>
            <span className="bg-gradient-to-r from-nova-pink to-nova-accent2 bg-clip-text text-transparent">команда</span>
          </h2>
          <p className="text-nova-muted max-w-2xl mx-auto text-lg">
            Талантливые люди, объединённые страстью к технологиям и инновациям
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={`glass-card rounded-3xl p-8 text-center group relative overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              } ${member.isHiring ? 'border-dashed' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Hiring badge */}
              {member.isHiring && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-nova-accent/20 border border-nova-accent/40 animate-pulse">
                  <span className="text-xs text-nova-accent font-bold">HIRING</span>
                </div>
              )}

              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 transition-all duration-500 ring-4 ${member.ring}`}>
                  {member.avatar}
                </div>
                <div className={`absolute -inset-3 rounded-full bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                {/* Status indicator */}
                {!member.isHiring ? (
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-nova-dark animate-pulse" />
                ) : (
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-nova-accent border-2 border-nova-dark animate-pulse flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">?</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-1 relative z-10">{member.name}</h3>
              <p className={`text-sm bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-bold mb-4 relative z-10`}>
                {member.role}
              </p>
              <p className="text-nova-muted text-sm leading-relaxed mb-6 relative z-10">{member.desc}</p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 relative z-10">
                {member.skills.map((skill, j) => (
                  <span key={j} className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                    member.isHiring
                      ? 'bg-nova-border/20 text-nova-muted/50 border-nova-border/30'
                      : 'bg-nova-border/30 text-nova-muted border-nova-border/50 group-hover:border-nova-accent/30'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA for hiring */}
              {member.isHiring && (
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-nova-accent/40 text-nova-accent text-sm font-semibold hover:bg-nova-accent/10 transition-all duration-300 relative z-10"
                >
                  <span>✉️</span> Откликнуться
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Join us banner */}
        <div className={`mt-16 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-nova-accent/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-nova-pink/10 rounded-full blur-[60px]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Хочешь в команду NOVA? 🚀</h3>
              <p className="text-nova-muted">
                Мы всегда ищем талантливых людей. Разработчики, дизайнеры, security-эксперты — присоединяйся!
              </p>
            </div>
            <a
              href="#contact"
              className="btn-3d px-8 py-4 rounded-xl bg-gradient-to-r from-nova-accent to-nova-accent2 text-white font-bold text-sm tracking-wide whitespace-nowrap"
            >
              Присоединиться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
