import type { Artigo } from '../data/shared';
import { SectionHead, Reveal } from './fx';
import { Rows3 } from 'lucide-react';

export default function Synoptic({
  artigos,
  blocoHex,
  num = '04',
  ghost,
  desc,
}: {
  artigos: Artigo[];
  blocoHex: Record<string, string>;
  num?: string;
  ghost: string;
  desc: string;
}) {
  return (
    <section id="quadro" className="grain relative overflow-hidden bg-ink py-24 md:py-32 text-paper">
      <div className="pointer-events-none absolute -right-16 top-10 hidden select-none font-display text-[13rem] font-black leading-none outline-paper xl:block">
        {ghost}
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          dark
          num={num}
          eyebrow="Revisão relâmpago · véspera de prova"
          title={
            <>
              Quadro sinótico <span className="italic font-light text-gold-2">dos {artigos.length} artigos</span>
            </>
          }
          desc={desc}
        />

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-paper/12 bg-paper/[0.04] backdrop-blur-sm">
            {/* header */}
            <div className="hidden grid-cols-[5.5rem_1.1fr_1.4fr_auto] items-center gap-4 border-b border-gold/25 bg-gold/[0.07] px-6 py-4 md:grid">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">Artigo</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">Direito</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">Síntese</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">Parte</p>
            </div>
            <div className="divide-y divide-paper/[0.07]">
              {artigos.map((a, i) => {
                const hex = blocoHex[a.bloco] ?? '#c19a3d';
                return (
                  <Reveal key={a.n} delay={Math.min(i * 0.02, 0.2)} y={12}>
                    <a
                      href={`#art-${a.n}`}
                      className="group grid grid-cols-[4rem_1fr] items-center gap-x-4 gap-y-1 px-5 py-4 transition-colors duration-300 hover:bg-gold/[0.07] md:grid-cols-[5.5rem_1.1fr_1.4fr_auto] md:px-6"
                    >
                      <span className="font-display text-2xl font-bold text-gold-2 tabular-nums md:text-3xl">
                        {String(a.n).padStart(2, '0')}
                      </span>
                      <span className="font-display text-base font-medium text-paper md:text-lg">
                        {a.titulo}
                        {a.destaque && <span className="ml-2 align-middle text-gold-2">★</span>}
                      </span>
                      <span className="col-start-2 text-[13px] leading-snug text-paper/55 md:col-start-3">
                        {a.sintese}
                      </span>
                      <span className="col-start-2 mt-1 flex items-center gap-2 md:col-start-4 md:mt-0">
                        <span className="size-2 rounded-full" style={{ backgroundColor: hex }} />
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em]" style={{ color: hex }}>
                          {a.bloco}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex items-center gap-3 text-paper/40">
            <Rows3 className="size-4" />
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]">
              Clique em qualquer linha para revisitar o artigo completo
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
