import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '2023',
    quarter: 'Q1',
    title: 'Рождение NOVA',
    desc: 'UBOCKA основал компанию NOVA. Первые идеи, первые строчки кода, начало великого пути.',
    icon: '🌟',
    color: 'from-nova-gold to-orange-500',
  },
  {
    year: '2023',
    quarter: 'Q3',
    title: 'NebulaGuard v1.0',
    desc: 'Запуск первого продукта — системы безопасности NebulaGuard. Открытый исходный код на GitHub.',
    icon: '🛡️',
    color: 'from-nova-accent to-nova-cyan',
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: 'CID-HELPER Release',
    desc: 'Выход топового CID-помощника для Majestic RP. Мгновенно стал незаменимым инструментом для игроков.',
    icon: '📋',
    color: 'from-nova-gold to-red-500',
  },
  {
    year: '2024',
    quarter: 'Q2',
    title: 'NebulaOS Alpha',
    desc: 'Запуск концептуальной операционной системы NebulaOS. Фейк ОС с реальным космическим дизайном.',
    icon: '💻',
    color: 'from-nova-cyan to-emerald-500',
  },
  {
    year: '2024',
    quarter: 'Q3',
    title: 'LM ARENA присоединяется',
    desc: 'В команду приходит UI/UX дизайнер LM ARENA. Все проекты получают новый визуальный уровень.',
    icon: '🎨',
    color: 'from-nova-pink to-red-500',
  },
  {
    year: '2024',
    quarter: 'Q4',
    title: 'Nova Pulse & AstraChat',
    desc: 'Начата разработка платформы аналитики и защищённого мессенджера. Команда растёт.',
    icon: '🚀',
    color: 'from-nova-accent2 to-nova-accent',
  },
  {
    year: '2025',
    quarter: 'Будущее',
    title: 'Новые горизонты',
    desc: 'StarForge IDE, Nova Sentinel, Void VPN, PhantomDB — амбициозные проекты на горизонте. Ищем Security Engineer!',
    icon: '🔮',
    color: 'from-violet-500 to-nova-pink',
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-nova-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-nova-gold mb-4 block">История</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-nova-text bg-clip-text text-transparent">Наш </span>
            <span className="bg-gradient-to-r from-nova-gold to-orange-500 bg-clip-text text-transparent">путь</span>
          </h2>
          <p className="text-nova-muted max-w-xl mx-auto text-lg">
            От первой идеи до портфолио из 9 проектов — история NOVA
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-nova-accent via-nova-cyan via-nova-gold to-nova-accent2 opacity-30" />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex items-center mb-12 md:mb-16 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Mobile layout: always left aligned */}
                <div className="flex md:hidden items-start gap-4 w-full pl-2">
                  {/* Dot */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-xl shadow-lg z-10 shrink-0`}>
                    {m.icon}
                  </div>
                  {/* Content */}
                  <div className="glass-card rounded-2xl p-5 flex-1">
                    <span className={`text-xs font-bold bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                      {m.year} · {m.quarter}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{m.title}</h3>
                    <p className="text-nova-muted text-sm">{m.desc}</p>
                  </div>
                </div>

                {/* Desktop layout: alternating */}
                <div className={`hidden md:flex items-center w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="glass-card rounded-2xl p-6 inline-block group hover:scale-[1.02] transition-transform duration-300">
                      <span className={`text-xs font-bold bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                        {m.year} · {m.quarter}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-2">{m.title}</h3>
                      <p className="text-nova-muted text-sm">{m.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-xl shadow-lg z-10 hover:scale-110 transition-transform duration-300`}>
                      {m.icon}
                    </div>
                  </div>

                  {/* Empty */}
                  <div className="w-5/12" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
