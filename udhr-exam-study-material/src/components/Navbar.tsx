import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Scale, Menu, X, House } from 'lucide-react';
import type { View } from '../views';

const tabs: { id: View; label: string; short: string }[] = [
  { id: 'home', label: 'Início', short: 'Início' },
  { id: 'p1', label: '1 · DUDH 1948', short: '1 · DUDH' },
  { id: 'p2', label: '2 · Rel. 1981', short: '2 · 36/55' },
  { id: 'p3', label: '3 · CEDAW 1979', short: '3 · CEDAW' },
  { id: 'p4', label: '4 · Criança 1989', short: '4 · CDC' },
  { id: 'p5', label: '5A · ECA I', short: '5A · ECA' },
  { id: 'p5b', label: '5B · ECA II', short: '5B · ECA' },
  { id: 'p6', label: '6 · Racial 65', short: '6 · CERD' },
  { id: 'p7', label: '7 · Idoso 03', short: '7 · EPI' },
  { id: 'p8', label: '8 · Tortura 85', short: '8 · CIAPTT' },
  { id: 'p9', label: '9 · PcD 99', short: '9 · PcD' },
  { id: 'p10', label: '10 · LBI 15', short: '10 · LBI' },
  { id: 'p11', label: '11 · CAT ONU 84', short: '11 · CAT' },
  { id: 'p12', label: '12 · Súmulas + Jurisp', short: '12 · Súm/Jur' },
  { id: 'p13', label: '13 · Quiz Geral Final', short: '13 · Quiz Final' },
];

export default function Navbar({ view, go }: { view: View; go: (v: View) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? 'bg-transparent'
          : 'bg-paper/95 backdrop-blur-xl border-b border-ink/10 shadow-[0_10px_40px_-20px_rgba(16,23,37,0.4)]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 md:px-8">
        <button onClick={() => go('home')} className="group flex items-center gap-3 shrink-0">
          <span
            className={`grid size-9 place-items-center rounded-full border transition-colors ${
              dark
                ? 'border-gold/50 text-gold-2 group-hover:bg-gold/10'
                : 'border-gold-3/50 text-gold-3 group-hover:bg-gold/15'
            }`}
          >
            <Scale className="size-4" strokeWidth={2.2} />
          </span>
          <span className="text-left leading-none">
            <span
              className={`block font-display text-lg font-bold tracking-tight ${
                dark ? 'text-paper' : 'text-ink'
              }`}
            >
              Guia DH<span className={dark ? 'text-gold-2' : 'text-gold-3'}>· Coleção</span>
            </span>
            <span
              className={`mt-0.5 block font-mono text-[9px] uppercase tracking-[0.3em] ${
                dark ? 'text-paper/50' : 'text-ink/50'
              }`}
            >
              Coleção p/ concursos
            </span>
          </span>
        </button>

        {/* Desktop tabs - scrollable */}
        <nav
          className="hidden lg:flex items-center gap-1 overflow-x-auto max-w-[68vw] xl:max-w-[75vw] pl-2"
          style={{ scrollbarWidth: 'none' } as any}
        >
          <div className="flex items-center gap-1">
            {tabs.map((t) => {
              const isActive = view === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => go(t.id)}
                  className={`relative shrink-0 rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.13em] transition-all duration-200 ${
                    isActive
                      ? dark
                        ? 'text-ink bg-gold shadow'
                        : 'text-paper bg-ink shadow'
                      : dark
                        ? 'text-paper/60 hover:text-paper hover:bg-paper/10'
                        : 'text-ink/60 hover:text-ink hover:bg-ink/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="flex items-center gap-1.5">
                    {t.id === 'home' && <House className="size-3" />}
                    <span className="hidden 2xl:inline">{t.label}</span>
                    <span className="2xl:hidden">{t.short}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className={`grid size-10 place-items-center rounded-full border lg:hidden shrink-0 ${
            dark ? 'border-paper/20 text-paper' : 'border-ink/15 text-ink'
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Desktop second row for better visibility on smaller lg screens - shows 10-13 as equal */}
      <div className={`hidden lg:block border-t ${dark ? 'border-paper/10 bg-ink/20' : 'border-ink/5 bg-paper/80'} backdrop-blur-sm`}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-center gap-2 py-2 overflow-x-auto" style={{ scrollbarWidth: 'none' } as any}>
            <span className={`font-mono text-[9px] uppercase tracking-widest shrink-0 ${dark ? 'text-paper/40' : 'text-ink/40'}`}>Acesso rápido:</span>
            {tabs.map((t) => (
              <button
                key={`quick-${t.id}`}
                onClick={() => go(t.id)}
                className={`shrink-0 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide transition-colors ${
                  view === t.id
                    ? 'bg-gold text-ink font-bold'
                    : dark
                      ? 'bg-paper/10 text-paper/70 hover:bg-paper/20 hover:text-paper'
                      : 'bg-ink/5 text-ink/60 hover:bg-ink/10 hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-paper/95 backdrop-blur-xl lg:hidden"
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2 max-h-[70vh] overflow-y-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                go(t.id);
                setOpen(false);
              }}
              className={`rounded-xl px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                view === t.id ? 'bg-gold/15 text-gold-3 font-bold' : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </motion.div>

      {/* scroll progress */}
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-gold-3 via-gold to-gold-2"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
