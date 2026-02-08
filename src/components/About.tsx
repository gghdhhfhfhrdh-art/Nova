import { useEffect, useRef, useState } from 'react';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const values = [
    {
      icon: '⚡',
      title: 'Скорость',
      desc: 'Молниеносная разработка без компромиссов в качестве. Agile-подход к каждому проекту.',
      color: 'from-nova-cyan to-blue-500',
    },
    {
      icon: '🛡️',
      title: 'Безопасность',
      desc: 'Защита данных и систем — наш приоритет. NebulaGuard — живой пример этого.',
      color: 'from-nova-accent to-nova-accent2',
    },
    {
      icon: '🎨',
      title: 'Дизайн',
      desc: 'Интерфейсы, которые вдохновляют и удивляют. Космическая эстетика во всём.',
      color: 'from-nova-pink to-red-500',
    },
    {
      icon: '🔮',
      title: 'Инновации',
      desc: 'Передовые технологии для задач будущего. Мы создаём то, чего ещё не существует.',
      color: 'from-nova-gold to-orange-500',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-nova-accent mb-4 block">О компании</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-nova-text bg-clip-text text-transparent">Кто мы </span>
            <span className="bg-gradient-to-r from-nova-accent to-nova-cyan bg-clip-text text-transparent neon-text">такие</span>
          </h2>
          <p className="text-nova-muted max-w-2xl mx-auto text-lg">
            NOVA — студия разработки ПО, основанная UBOCKA. Мы создаём инструменты нового поколения — 
            от систем кибербезопасности до полноценных операционных систем и игровых утилит.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-8 text-center group transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Icon */}
              <div className="relative inline-flex mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {v.icon}
                </div>
                <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{v.title}</h3>
              <p className="text-nova-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Big statement */}
        <div className={`mt-20 glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-nova-accent/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-nova-cyan/10 rounded-full blur-[60px]" />
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl font-bold leading-relaxed">
              <span className="text-white">"Мы не просто пишем код — </span>
              <span className="bg-gradient-to-r from-nova-accent via-nova-cyan to-nova-accent2 bg-clip-text text-transparent">
                мы создаём будущее"
              </span>
            </p>
            <p className="text-nova-muted mt-6 text-lg">— UBOCKA, CEO & Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
