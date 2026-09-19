import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Questao } from '../data/shared';
import { bancaHex } from '../data/shared';
import { SectionHead, Reveal } from './fx';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  MessageSquareQuote,
  BadgeCheck,
  ListChecks,
  MousePointer2,
} from 'lucide-react';

const letters = ['A', 'B', 'C', 'D', 'E'];

interface Resp {
  sel: number | null;
  revelada: boolean;
}

function QuestionCard({
  q,
  ordem,
  resp,
  onSelect,
  onConfirm,
}: {
  q: Questao;
  ordem: number;
  resp?: Resp;
  onSelect: (i: number) => void;
  onConfirm: () => void;
}) {
  const hex = bancaHex[q.banca];
  const revelada = resp?.revelada ?? false;
  const sel = resp?.sel ?? null;

  return (
    <Reveal delay={Math.min((ordem % 2) * 0.06, 0.12)}>
      <div className="overflow-hidden rounded-3xl border border-paper/12 bg-paper/[0.045] backdrop-blur-sm">
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${hex}, transparent)` }} />
        <div className="p-6 md:p-8">
          {/* header */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-display text-3xl font-black text-gold-2 tabular-nums">
              Q{String(q.id).padStart(2, '0')}
            </span>
            <span
              className="rounded-full border px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em]"
              style={{ borderColor: `${hex}50`, color: hex, backgroundColor: `${hex}14` }}
            >
              {q.banca}
            </span>
            <span className="rounded-full border border-paper/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/55">
              {q.formato === 'certo-errado' ? 'Certo ou Errado' : 'Múltipla escolha'}
            </span>
            <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.2em] text-gold-2/80">
              {q.tema}
            </span>
          </div>

          <p className="mt-5 text-[15px] md:text-base leading-relaxed text-paper/85">{q.enunciado}</p>

          {/* alternativas */}
          <div className={`mt-6 grid gap-2.5 ${q.formato === 'certo-errado' ? 'sm:grid-cols-2' : ''}`}>
            {q.alternativas.map((alt, i) => {
              const isSel = sel === i;
              const isCert = i === q.gabarito;
              let cls = 'border-paper/15 text-paper/75 hover:border-gold/50 hover:bg-gold/[0.06]';
              if (!revelada && isSel) cls = 'border-gold bg-gold/[0.12] text-paper';
              if (revelada && isCert) cls = 'border-emerald-400/70 bg-emerald-500/[0.12] text-paper';
              if (revelada && isSel && !isCert) cls = 'border-red-400/70 bg-red-500/[0.12] text-paper';
              if (revelada && !isSel && !isCert) cls = 'border-paper/10 text-paper/35 opacity-60';

              const badge = q.formato === 'certo-errado' ? (i === 0 ? 'C' : 'E') : letters[i];

              return (
                <button
                  key={i}
                  onClick={() => onSelect(i)}
                  disabled={revelada}
                  className={`group flex items-start gap-3.5 rounded-2xl border text-left transition-all duration-300 ${cls} ${!revelada ? 'cursor-pointer' : 'cursor-default'}`}
                  style={{ padding: '1rem 1.15rem' }}
                >
                  <span
                    className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border font-mono text-[11px] font-bold ${
                      revelada && isCert
                        ? 'border-emerald-400 bg-emerald-500 text-ink'
                        : revelada && isSel && !isCert
                          ? 'border-red-400 bg-red-500 text-paper'
                          : !revelada && isSel
                            ? 'border-gold bg-gold text-ink'
                            : 'border-paper/25 text-paper/60'
                    }`}
                  >
                    {badge}
                  </span>
                  <span className="flex-1 text-[13.5px] leading-relaxed">{alt}</span>
                  {revelada && isCert && <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />}
                  {revelada && isSel && !isCert && <XCircle className="mt-0.5 size-5 shrink-0 text-red-400" />}
                </button>
              );
            })}
          </div>

          {/* ação / gabarito */}
          {!revelada ? (
            <div className="mt-5 flex items-center gap-4">
              <button
                onClick={onConfirm}
                disabled={sel === null}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                  sel === null
                    ? 'cursor-not-allowed border border-paper/15 text-paper/30'
                    : 'bg-gold text-ink hover:bg-gold-2 hover:shadow-[0_14px_40px_-12px_rgba(193,154,61,0.7)]'
                }`}
              >
                <MousePointer2 className="size-4" />
                Responder
              </button>
              {sel === null && (
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/35">
                  escolha uma alternativa
                </p>
              )}
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 14, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/[0.08] p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <MessageSquareQuote className="size-5 text-gold-2" />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gold-2">
                      Gabarito comentado do professor
                    </p>
                    <span
                      className={`ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em] ${
                        sel === q.gabarito ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      <BadgeCheck className="size-3.5" />
                      {q.formato === 'certo-errado'
                        ? `Gabarito: ${q.alternativas[q.gabarito]}`
                        : `Gabarito: letra ${letters[q.gabarito]}`}
                    </span>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-paper/80">{q.comentario}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Quiz({
  questoes,
  num = '05',
  titulo,
  desc,
}: {
  questoes: Questao[];
  num?: string;
  titulo?: string;
  desc: string;
}) {
  const [resp, setResp] = useState<Record<number, Resp>>({});
  const respondidas = questoes.filter((q) => resp[q.id]?.revelada).length;
  const acertos = questoes.filter((q) => resp[q.id]?.revelada && resp[q.id].sel === q.gabarito).length;
  const completo = respondidas === questoes.length;

  const msg =
    acertos >= 9
      ? 'Nível aprovação em primeiro lugar. Sustente o ritmo!'
      : acertos >= 7
        ? 'Muito bom! Revise os macetes das que errou.'
        : acertos >= 5
          ? 'No caminho — revise o quadro sinótico e refaça.'
          : 'Volte aos artigos com calma: o simulado estará aqui esperando.';

  return (
    <section id="simulado" className="grain relative bg-ink-2 py-24 md:py-32 text-paper">
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <SectionHead
          dark
          num={num}
          eyebrow="Simulado comentado"
          title={
            titulo ?? (
              <>
                {questoes.length} questões, <span className="italic font-light text-gold-2">estilo de banca</span>
              </>
            )
          }
          desc={desc}
        />

        {/* placar */}
        <div>
          <div className="sticky top-20 z-20 mb-10 rounded-3xl border border-paper/12 bg-ink/85 p-5 backdrop-blur-xl md:p-6">
            <div className="flex flex-wrap items-center gap-5 md:gap-8">
              <div className="flex items-center gap-3.5">
                <span className="grid size-12 place-items-center rounded-2xl bg-gold text-ink">
                  <ListChecks className="size-6" />
                </span>
                <div>
                  <p className="font-display text-3xl font-black leading-none text-paper tabular-nums">
                    {acertos}
                    <span className="text-paper/40">/{respondidas}</span>
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-paper/45">
                    acertos / respondidas
                  </p>
                </div>
              </div>
              <div className="min-w-40 flex-1">
                <div className="mb-1.5 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-paper/45">
                  <span>progresso</span>
                  <span>
                    {respondidas}/{questoes.length}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-paper/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-gold-3 via-gold to-gold-2"
                    animate={{ width: `${(respondidas / questoes.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
              <button
                onClick={() => setResp({})}
                className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/60 transition-colors hover:border-gold/50 hover:text-gold-2"
              >
                <RotateCcw className="size-3.5" />
                Refazer
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {questoes.map((q, i) => (
            <QuestionCard
              key={q.id}
              q={q}
              ordem={i}
              resp={resp[q.id]}
              onSelect={(idx) => {
                if (resp[q.id]?.revelada) return;
                setResp((r) => ({ ...r, [q.id]: { sel: idx, revelada: false } }));
              }}
              onConfirm={() => setResp((r) => ({ ...r, [q.id]: { sel: r[q.id]?.sel ?? null, revelada: true } }))}
            />
          ))}
        </div>

        <AnimatePresence>
          {completo && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.14] to-transparent p-8 text-center md:p-10"
            >
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-gold text-ink">
                <Trophy className="size-8" />
              </span>
              <p className="mt-5 font-display text-4xl md:text-5xl font-bold text-paper tabular-nums">
                {acertos} <span className="text-paper/40">de {questoes.length}</span>
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-paper/70">{msg}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href="#quadro"
                  className="rounded-full border border-paper/25 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/75 transition-colors hover:border-gold/60 hover:text-gold-2"
                >
                  Revisar quadro sinótico
                </a>
                <button
                  onClick={() => setResp({})}
                  className="rounded-full bg-gold px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-2"
                >
                  Refazer o simulado
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
