import { useEffect, useState } from 'react';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => { setMounted(true); }, []);

  // Animated counter
  useEffect(() => {
    if (!mounted) return;
    const target = 9;
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= target) { clearInterval(timer); return target; }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula bg effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-nova-accent/10 blur-[120px] animate-nebula-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-nova-cyan/8 blur-[100px] animate-nebula-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nova-accent2/5 blur-[150px] animate-nebula-pulse" style={{ animationDelay: '4s' }} />

      {/* Orbiting particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        <div className="animate-orbit" style={{ animationDuration: '15s' }}>
          <div className="w-3 h-3 rounded-full bg-nova-accent shadow-lg shadow-nova-accent/50" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        <div className="animate-orbit" style={{ animationDuration: '20s', animationDelay: '3s' }}>
          <div className="w-2 h-2 rounded-full bg-nova-cyan shadow-lg shadow-nova-cyan/50" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        <div className="animate-orbit" style={{ animationDuration: '25s', animationDelay: '7s' }}>
          <div className="w-2 h-2 rounded-full bg-nova-pink shadow-lg shadow-nova-pink/50" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        <div className="animate-orbit" style={{ animationDuration: '12s', animationDelay: '5s' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-nova-gold shadow-lg shadow-nova-gold/50" />
        </div>
      </div>

      {/* 3D Rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full border border-nova-accent/10 animate-rotate-3d" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-nova-cyan/5 animate-rotate-3d" style={{ animationDelay: '2s', animationDirection: 'reverse' }} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-nova-accent2/3 animate-rotate-3d" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-nova-accent/10 border border-nova-accent/20 mb-8 animate-float-slow">
          <div className="w-2 h-2 rounded-full bg-nova-cyan animate-pulse" />
          <span className="text-xs tracking-widest uppercase text-nova-cyan font-medium">Software Studio · Est. 2023</span>
        </div>

        {/* Main title */}
        <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none mb-6">
          <span className="block bg-gradient-to-b from-white via-nova-text to-nova-muted/60 bg-clip-text text-transparent drop-shadow-lg">
            NOVA
          </span>
        </h1>

        {/* Glowing line under title */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-nova-accent to-transparent animate-pulse-glow" />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-nova-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Мы создаём <span className="text-nova-cyan font-semibold">инновационное</span> программное обеспечение, 
          которое раздвигает <span className="text-nova-accent2 font-semibold">границы возможного</span>. 
          От систем безопасности до операционных систем будущего.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-14">
          {[
            { value: `${count}+`, label: 'Проектов' },
            { value: '3', label: 'Выпущено' },
            { value: '24/7', label: 'Разработка' },
            { value: '∞', label: 'Амбиции' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-5xl font-black bg-gradient-to-b from-white to-nova-accent bg-clip-text text-transparent group-hover:from-nova-cyan group-hover:to-nova-accent2 transition-all duration-300">{stat.value}</div>
              <div className="text-xs text-nova-muted uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="btn-3d px-8 py-4 rounded-xl bg-gradient-to-r from-nova-accent to-nova-accent2 text-white font-bold text-lg tracking-wide inline-flex items-center gap-2"
          >
            <span>🚀</span> Наши проекты
          </a>
          <a
            href="https://github.com/gghdhhfhfhrdh-art"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-nova-border text-nova-text font-semibold text-lg hover:border-nova-accent/50 hover:bg-nova-accent/5 transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-nova-muted/50 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-nova-accent/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-nova-accent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
