import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'О нас', href: '#about' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Технологии', href: '#tech' },
    { label: 'Команда', href: '#team' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-nova-bg/80 backdrop-blur-xl border-b border-nova-border shadow-lg shadow-nova-accent/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-br from-nova-accent to-nova-cyan rounded-lg animate-pulse-glow" />
            <div className="absolute inset-[2px] bg-nova-dark rounded-lg flex items-center justify-center">
              <span className="text-xl font-black bg-gradient-to-r from-nova-accent to-nova-cyan bg-clip-text text-transparent">N</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-wider">
            <span className="bg-gradient-to-r from-nova-accent via-nova-cyan to-nova-accent2 bg-clip-text text-transparent animate-text-shimmer">NOVA</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-nova-muted hover:text-nova-text transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-nova-accent to-nova-cyan group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block btn-3d px-5 py-2 rounded-lg bg-gradient-to-r from-nova-accent to-nova-accent2 text-white text-sm font-semibold"
        >
          Связаться
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`w-6 h-0.5 bg-nova-text transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-nova-text transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-nova-text transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-nova-dark/95 backdrop-blur-xl border-b border-nova-border px-6 pb-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-nova-muted hover:text-nova-text transition-colors border-b border-nova-border/30"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
