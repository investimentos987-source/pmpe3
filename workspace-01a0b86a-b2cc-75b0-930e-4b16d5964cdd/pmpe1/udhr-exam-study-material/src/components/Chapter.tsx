import type { ComponentType, ReactNode } from 'react';
import ChapterHero, { type HeroCfg } from './ChapterHero';
import Ticker from './Ticker';
import ArticlesSection from './ArticlesSection';
import Synoptic from './Synoptic';
import Quiz from './Quiz';
import type { Artigo, Questao } from '../data/shared';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './fx';

export interface ChapterCfg {
  hero: HeroCfg;
  tickerItems: string[];
  artigos: Artigo[];
  blocoHex: Record<string, string>;
  artigosTitulo: ReactNode;
  artigosDesc: string;
  synopticGhost: string;
  synopticDesc: string;
  questoes: Questao[];
  quizDesc: string;
  Context: ComponentType;
  Extras: ComponentType;
}

export default function Chapter({
  cfg,
  next,
}: {
  cfg: ChapterCfg;
  next?: { label: string; onGo: () => void };
}) {
  return (
    <>
      <ChapterHero cfg={cfg.hero} />
      <Ticker items={cfg.tickerItems} />
      <cfg.Context />
      <ArticlesSection
        artigos={cfg.artigos}
        blocoHex={cfg.blocoHex}
        num="02"
        titulo={cfg.artigosTitulo}
        desc={cfg.artigosDesc}
      />
      <cfg.Extras />
      <Synoptic
        artigos={cfg.artigos}
        blocoHex={cfg.blocoHex}
        num="04"
        ghost={cfg.synopticGhost}
        desc={cfg.synopticDesc}
      />
      <Ticker items={cfg.tickerItems} />
      <Quiz questoes={cfg.questoes} num="05" desc={cfg.quizDesc} />
      {next && (
        <section className="bg-ink pb-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <button
                onClick={next.onGo}
                className="group flex w-full items-center justify-between gap-6 rounded-[2rem] border border-gold/35 bg-gradient-to-r from-gold/[0.12] to-transparent p-8 text-left transition-all hover:border-gold/70 hover:from-gold/[0.2] md:p-10"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-2">
                    Continue a coleção
                  </p>
                  <p className="mt-2 font-display text-2xl md:text-3xl font-semibold text-paper">
                    {next.label}
                  </p>
                </div>
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gold text-ink transition-transform group-hover:scale-110">
                  <ArrowRight className="size-6" />
                </span>
              </button>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
