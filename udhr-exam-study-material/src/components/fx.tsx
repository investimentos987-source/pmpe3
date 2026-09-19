import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  num,
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  num: string;
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-6xl md:text-7xl font-black leading-none outline-gold select-none">
            {num}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
        </div>
        <p
          className={`mt-6 font-mono text-[11px] md:text-xs uppercase tracking-[0.35em] ${
            dark ? 'text-gold-2' : 'text-gold-3'
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 font-display text-4xl md:text-6xl font-semibold leading-[1.04] tracking-tight ${
            dark ? 'text-paper' : 'text-ink'
          }`}
        >
          {title}
        </h2>
        {desc && (
          <p
            className={`mt-5 max-w-2xl text-base md:text-lg leading-relaxed ${
              dark ? 'text-paper/65' : 'text-ink/65'
            }`}
          >
            {desc}
          </p>
        )}
      </Reveal>
    </div>
  );
}
