import { useEffect, useRef, useState } from 'react';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const contacts = [
    { icon: '📧', label: 'Email', value: 'hello@nova-studio.dev', color: 'from-nova-accent to-nova-cyan' },
    { icon: '💬', label: 'Discord', value: 'NOVA Community', color: 'from-indigo-500 to-nova-accent' },
    { icon: '📱', label: 'Telegram', value: '@nova_studio', color: 'from-nova-cyan to-blue-500' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/nova', color: 'from-gray-400 to-gray-600' },
  ];

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-nova-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-nova-accent mb-4 block">Контакты</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-nova-text bg-clip-text text-transparent">Связаться </span>
            <span className="bg-gradient-to-r from-nova-accent to-nova-accent2 bg-clip-text text-transparent neon-text">с нами</span>
          </h2>
          <p className="text-nova-muted max-w-xl mx-auto text-lg">
            Готовы обсудить ваш проект или присоединиться к нашей команде? Напишите нам!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-6 group transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {c.icon}
                </div>
                <p className="text-xs text-nova-muted mb-1">{c.label}</p>
                <p className="text-white font-semibold text-sm">{c.value}</p>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className={`glass-card rounded-3xl p-8 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-xl font-bold text-white mb-6">Отправить сообщение</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs text-nova-muted mb-1 block">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl bg-nova-border/20 border border-nova-border/50 text-white placeholder-nova-muted/50 focus:outline-none focus:border-nova-accent/50 focus:shadow-[0_0_20px_rgba(108,92,231,0.1)] transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-nova-muted mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-nova-border/20 border border-nova-border/50 text-white placeholder-nova-muted/50 focus:outline-none focus:border-nova-accent/50 focus:shadow-[0_0_20px_rgba(108,92,231,0.1)] transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-nova-muted mb-1 block">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full px-4 py-3 rounded-xl bg-nova-border/20 border border-nova-border/50 text-white placeholder-nova-muted/50 focus:outline-none focus:border-nova-accent/50 focus:shadow-[0_0_20px_rgba(108,92,231,0.1)] transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-3d py-3 rounded-xl bg-gradient-to-r from-nova-accent to-nova-accent2 text-white font-bold text-sm tracking-wide"
              >
                🚀 Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
