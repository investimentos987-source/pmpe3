import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ChevronDown, ArrowRight } from 'lucide-react';

function useCounter(target: number, start: boolean, duration = 1.8) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / (duration * 1000));
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return v;
}

const ROMAN8 = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

function VoteDial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const fav = useCounter(48, inView);
  const size = 340;
  const c = size / 2;
  const R = 146;
  return (
    <div ref={ref} className="relative grid place-items-center">
      <motion.svg
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="max-w-[320px] md:max-w-[380px]"
        initial={{ opacity: 0, rotate: -14, scale: 0.92 }}
        animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <circle cx={c} cy={c} r={R + 22} fill="none" stroke="rgba(227,200,120,0.14)" strokeWidth="1" strokeDasharray="2 6" />
        {Array.from({ length: 56 }).map((_, i) => {
          const ang = (-90 + i * (360 / 56)) * (Math.PI / 180);
          const inner = R - (i < 48 ? 16 : 9);
          return (
            <line
              key={i}
              x1={c + inner * Math.cos(ang)}
              y1={c + inner * Math.sin(ang)}
              x2={c + R * Math.cos(ang)}
              y2={c + R * Math.sin(ang)}
              stroke={i < 48 ? '#e3c878' : 'rgba(84,154,212,0.55)'}
              strokeWidth={i < 48 ? 3 : 2}
              strokeLinecap="round"
            />
          );
        })}
        <circle cx={c} cy={c} r={R - 34} fill="none" stroke="rgba(227,200,120,0.2)" strokeWidth="1" />
      </motion.svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-7xl md:text-8xl font-black leading-none text-paper tabular-nums">
            {fav}
            <span className="text-gold-2">–0</span>
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/55 leading-relaxed">
            votos a favor · 0 contra
            <br />
            <span className="text-un-2">8 abstenções</span> · 2 ausências
          </p>
        </div>
      </div>
      <div className="absolute -bottom-2 rounded-full border border-gold/30 bg-ink/70 px-4 py-1.5 backdrop-blur">
        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-gold-2">Assembleia Geral · ONU</p>
      </div>
    </div>
  );
}

function Rosette() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const size = 340;
  const c = size / 2;
  const R = 138;
  return (
    <div ref={ref} className="relative grid place-items-center">
      <motion.svg
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="max-w-[320px] md:max-w-[380px]"
        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.g
          style={{ transformOrigin: `${c}px ${c}px` }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
        >
          <circle cx={c} cy={c} r={R + 14} fill="none" stroke="rgba(227,200,120,0.22)" strokeWidth="1" strokeDasharray="3 8" />
          <circle cx={c} cy={c} r={R - 34} fill="none" stroke="rgba(94,234,212,0.18)" strokeWidth="1" strokeDasharray="2 7" />
        </motion.g>
        {ROMAN8.map((r, i) => {
          const ang = (-90 + i * 45) * (Math.PI / 180);
          const x = c + R * Math.cos(ang);
          const y = c + R * Math.sin(ang);
          const ix = c + (R - 34) * Math.cos(ang);
          const iy = c + (R - 34) * Math.sin(ang);
          return (
            <g key={r}>
              <line x1={ix} y1={iy} x2={x} y2={y} stroke="rgba(227,200,120,0.25)" strokeWidth="1" />
              <circle cx={x} cy={y} r={25} fill="#101725" stroke="#c19a3d" strokeWidth="1.4" />
              <text
                x={x}
                y={y + 4.5}
                textAnchor="middle"
                className="fill-[#e3c878]"
                style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700 }}
              >
                {r}
              </text>
            </g>
          );
        })}
        <circle cx={c} cy={c} r={R - 62} fill="rgba(16,23,37,0.65)" stroke="rgba(227,200,120,0.35)" strokeWidth="1" />
      </motion.svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-paper/45">Resolução</p>
          <p className="mt-1 font-display text-5xl md:text-6xl font-black leading-none text-paper tabular-nums">
            36<span className="text-gold-2">/</span>55
          </p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.3em] leading-relaxed text-gold-2/90">
            consenso pleno
            <br />
            <span className="text-paper/40">sem votação nominal</span>
          </p>
        </div>
      </div>
      <div className="absolute -bottom-2 rounded-full border border-gold/30 bg-ink/70 px-4 py-1.5 backdrop-blur">
        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-gold-2">8 artigos · 25/11/1981</p>
      </div>
    </div>
  );
}

function SealNum({
  accent,
  count = 30,
  top = 'Resolução',
  res = '34/180',
  mid = 'convenção · tratado',
  midAccent = 'vinculante · com comitê',
  footer = '30 artigos · 18/12/1979',
}: {
  accent: string;
  count?: number;
  top?: string;
  res?: string;
  mid?: string;
  midAccent?: string;
  footer?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const size = 340;
  const c = size / 2;
  const R = 148;
  const [rA, rB] = res.includes('/') ? res.split('/') : [res, ''];
  return (
    <div ref={ref} className="relative grid place-items-center">
      <motion.svg
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="max-w-[320px] md:max-w-[380px]"
        initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.g
          style={{ transformOrigin: `${c}px ${c}px` }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
        >
          <circle cx={c} cy={c} r={R + 12} fill="none" stroke="rgba(227,200,120,0.15)" strokeWidth="1" strokeDasharray="2 7" />
        </motion.g>
        {Array.from({ length: count }).map((_, i) => {
          const ang = (-90 + i * (360 / count)) * (Math.PI / 180);
          const x = c + R * Math.cos(ang);
          const y = c + R * Math.sin(ang);
          const glow = i % 5 === 0;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={glow ? 6 : 3.4}
              fill={glow ? '#e3c878' : accent}
              opacity={glow ? 1 : 0.85}
            />
          );
        })}
        <circle cx={c} cy={c} r={R - 30} fill="none" stroke="rgba(227,200,120,0.25)" strokeWidth="1" />
        <circle cx={c} cy={c} r={R - 66} fill="rgba(16,23,37,0.65)" stroke={`${accent}66`} strokeWidth="1.2" />
      </motion.svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-paper/45">{top}</p>
          <p className={`mt-1 font-display ${rB ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'} font-black leading-none text-paper tabular-nums`}>
            {rA}
            {rB && (
              <span style={{ color: accent }}>/</span>
            )}
            {rB}
          </p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.3em] leading-relaxed text-paper/60">
            {mid}
            <br />
            <span style={{ color: accent }}>{midAccent}</span>
          </p>
        </div>
      </div>
      <div className="absolute -bottom-2 rounded-full border border-gold/30 bg-ink/70 px-4 py-1.5 backdrop-blur">
        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-gold-2">{footer}</p>
      </div>
    </div>
  );
}

function Seal54({ accent }: { accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const size = 340;
  const c = size / 2;
  const R = 146;
  return (
    <div ref={ref} className="relative grid place-items-center">
      <motion.svg
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="max-w-[320px] md:max-w-[380px]"
        initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.g
          style={{ transformOrigin: `${c}px ${c}px` }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 140, ease: 'linear' }}
        >
          <circle cx={c} cy={c} r={R + 14} fill="none" stroke="rgba(227,200,120,0.16)" strokeWidth="1" strokeDasharray="2 8" />
        </motion.g>
        {/* 54 traços = 54 artigos; destaque nos 4 princípios */}
        {Array.from({ length: 54 }).map((_, i) => {
          const art = i + 1;
          const principio = art === 2 || art === 3 || art === 6 || art === 12;
          const ang = (-90 + i * (360 / 54)) * (Math.PI / 180);
          const inner = R - (principio ? 20 : 10);
          return (
            <line
              key={i}
              x1={c + inner * Math.cos(ang)}
              y1={c + inner * Math.sin(ang)}
              x2={c + R * Math.cos(ang)}
              y2={c + R * Math.sin(ang)}
              stroke={principio ? '#e3c878' : accent}
              strokeWidth={principio ? 4 : 2}
              strokeLinecap="round"
              opacity={principio ? 1 : 0.7}
            />
          );
        })}
        <circle cx={c} cy={c} r={R - 36} fill="none" stroke="rgba(227,200,120,0.22)" strokeWidth="1" />
        <circle cx={c} cy={c} r={R - 70} fill="rgba(16,23,37,0.65)" stroke={`${accent}66`} strokeWidth="1.2" />
      </motion.svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-paper/45">Resolução</p>
          <p className="mt-1 font-display text-5xl md:text-6xl font-black leading-none text-paper tabular-nums">
            44<span style={{ color: accent }}>/</span>25
          </p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.3em] leading-relaxed text-paper/60">
            196 estados-partes
            <br />
            <span className="text-gold-2">o mais ratificado do mundo</span>
          </p>
        </div>
      </div>
      <div className="absolute -bottom-2 rounded-full border border-gold/30 bg-ink/70 px-4 py-1.5 backdrop-blur">
        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-gold-2">54 artigos · 20/11/1989</p>
      </div>
    </div>
  );
}

function SealEca({ accent }: { accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const size = 340;
  const c = size / 2;
  const R = 146;
  return (
    <div ref={ref} className="relative grid place-items-center">
      <motion.svg
        width="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="max-w-[320px] md:max-w-[380px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.g
          style={{ transformOrigin: `${c}px ${c}px` }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 150, ease: 'linear' }}
        >
          <circle cx={c} cy={c} r={R + 13} fill="none" stroke="rgba(227,200,120,0.16)" strokeWidth="1" strokeDasharray="2 9" />
        </motion.g>
        {/* 85 marcas = arts. 1º ao 85; blocos temáticos destacados */}
        {Array.from({ length: 85 }).map((_, i) => {
          const art = i + 1;
          const chave = [2, 4, 13, 19, 25, 33, 39, 54, 60, 83].includes(art);
          const ang = (-90 + i * (360 / 85)) * (Math.PI / 180);
          const inner = R - (chave ? 20 : 8);
          return (
            <line
              key={i}
              x1={c + inner * Math.cos(ang)}
              y1={c + inner * Math.sin(ang)}
              x2={c + R * Math.cos(ang)}
              y2={c + R * Math.sin(ang)}
              stroke={chave ? '#e3c878' : accent}
              strokeWidth={chave ? 4 : 1.8}
              strokeLinecap="round"
              opacity={chave ? 1 : 0.6}
            />
          );
        })}
        <circle cx={c} cy={c} r={R - 36} fill="none" stroke="rgba(227,200,120,0.2)" strokeWidth="1" />
        <circle cx={c} cy={c} r={R - 70} fill="rgba(16,23,37,0.65)" stroke={`${accent}66`} strokeWidth="1.2" />
      </motion.svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-paper/45">Lei federal</p>
          <p className="mt-1 font-display text-5xl md:text-6xl font-black leading-none text-paper tabular-nums">
            8.069<span style={{ color: accent }}>/90</span>
          </p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.3em] leading-relaxed text-paper/60">
            livro I · parte geral
            <br />
            <span className="text-gold-2">proteção integral</span>
          </p>
        </div>
      </div>
      <div className="absolute -bottom-2 rounded-full border border-gold/30 bg-ink/70 px-4 py-1.5 backdrop-blur">
        <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-gold-2">arts. 1º ao 85 · 13/07/1990</p>
      </div>
    </div>
  );
}

export interface HeroCfg {
  parte: string;
  accent: string;
  image: string;
  ghost: string;
  titleTop: string;
  titleBottom: string;
  officialName: string;
  quote: string;
  quoteRef: string;
  chips: { icon: LucideIcon; text: string }[];
  stats: { value: number; suffix?: string; label: string }[];
  dial: 'votes' | 'rosette' | 'seal' | 'crc' | 'eca';
  sealCfg?: {
    count?: number;
    top?: string;
    res?: string;
    mid?: string;
    midAccent?: string;
    footer?: string;
  };
  menuExtras: string;
}

export default function ChapterHero({ cfg }: { cfg: HeroCfg }) {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsIn = useInView(statsRef, { once: true, margin: '-40px' });
  const { accent } = cfg;

  return (
    <section id="topo" className="grain relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <img src={cfg.image} alt="" className="h-full w-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>

      <div className="pointer-events-none absolute -right-8 top-16 hidden select-none font-display text-[16rem] font-black leading-none outline-paper xl:block">
        {cfg.ghost}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-0 pt-32 md:px-8 md:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <span
                className="rounded-full px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink"
                style={{ backgroundColor: accent }}
              >
                {cfg.parte}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.07] px-4 py-2">
                <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-gold-2">
                  Guia DH·ONU · coleção para concursos
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-[11vw] font-bold leading-[1.0] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.4rem]"
            >
              {cfg.titleTop}
              <br />
              <span className="font-light italic" style={{ color: accent === '#c19a3d' ? '#e3c878' : accent }}>
                {cfg.titleBottom}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-xl font-mono text-[10px] md:text-[11px] uppercase leading-relaxed tracking-[0.18em] text-paper/45"
            >
              {cfg.officialName}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl border-l-2 pl-5 font-display text-lg md:text-2xl font-light italic leading-relaxed text-paper/80"
              style={{ borderColor: accent }}
            >
              {cfg.quote}
              <span className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.3em] text-gold-2">
                {cfg.quoteRef}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {cfg.chips.map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/[0.06] px-4 py-2 text-xs text-paper/75"
                >
                  <c.icon className="size-3.5 text-gold-2" /> {c.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em]"
            >
              {[
                ['Contexto', '#contexto'],
                ['Artigos', '#artigos'],
                [cfg.menuExtras, '#extras'],
                ['Quadro', '#quadro'],
                ['Simulado', '#simulado'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-paper/20 px-4 py-2 text-paper/70 transition-all hover:border-gold/60 hover:text-gold-2"
                >
                  {label}
                  <ArrowRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5"
          >
            {cfg.dial === 'votes' && <VoteDial />}
            {cfg.dial === 'rosette' && <Rosette />}
            {cfg.dial === 'seal' && cfg.sealCfg && <SealNum accent={accent} {...cfg.sealCfg} />}
            {cfg.dial === 'crc' && <Seal54 accent={accent} />}
            {cfg.dial === 'eca' && <SealEca accent={accent} />}
          </motion.div>
        </div>

        <div
          ref={statsRef}
          className="mt-14 grid grid-cols-2 divide-x divide-paper/10 border-t border-paper/10 md:grid-cols-4"
        >
          {cfg.stats.map((s, i) => (
            <Stat key={s.label} {...s} inView={statsIn} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="flex items-center justify-center gap-2 py-6 text-paper/45"
        >
          <ChevronDown className="size-4" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">role para estudar</span>
          <ChevronDown className="size-4" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, inView, delay }: { value: number; suffix?: string; label: string; inView: boolean; delay: number }) {
  const v = useCounter(value, inView, 1.6);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="px-5 py-5 md:px-8 md:py-6"
    >
      <p className="font-display text-4xl md:text-5xl font-bold text-paper tabular-nums">
        {v}
        {suffix && <span className="text-gold-2">{suffix}</span>}
      </p>
      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">{label}</p>
    </motion.div>
  );
}
