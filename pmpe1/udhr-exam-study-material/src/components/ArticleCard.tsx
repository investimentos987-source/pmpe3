import { useMemo } from 'react';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Target, AlertTriangle, Lightbulb, Brain, Quote, Star } from 'lucide-react';
import type { Artigo } from '../data/shared';
import { bancaHex } from '../data/shared';
import { Reveal } from './fx';

/* ============================================================
   GRIFO ESTRUTURAL — marca-texto automático do texto dos artigos
   ============================================================ */
const M = {
  caps: 'linear-gradient(transparent 55%, rgba(231,193,92,0.62) 55%)',
  teal: 'linear-gradient(transparent 55%, rgba(75,209,182,0.42) 55%)',
  rose: 'linear-gradient(transparent 55%, rgba(219,112,126,0.38) 55%)',
};

const TEAL_WORDS = new Set([
  'obrigatório', 'obrigatória', 'obrigatórios', 'obrigatórias',
  'gratuito', 'gratuita', 'gratuitos', 'gratuitas', 'gratuidade',
  'exemplificativo', 'exemplificativa', 'irrevogável', 'imprescritível',
  'irrenunciável', 'inalienável', 'inalienáveis', 'absoluta', 'absoluto',
  'universal', 'universais', 'inviolável', 'inerente', 'imediata', 'imediato',
  'prioritário', 'prioritária', 'amplo', 'ampla',
]);

const ROSE_WORDS = new Set([
  'vedado', 'vedada', 'vedados', 'vedadas', 'vedação',
  'proibido', 'proibida', 'proibidos', 'proibidas', 'proibida',
  'jamais', 'nunca', 'exceto', 'excetuadas', 'ressalva', 'ressalvadas',
  'taxativo', 'taxativa', 'arbitrariamente', 'arbitrária', 'arbitrário',
  'cruel', 'degradante', 'desumano', 'último recurso', 'ilegal', 'ilegais',
  'ilícito', 'ilícita', 'revogável', 'precária', 'excepcional', 'excepcionalmente',
  'subsidiária', 'subsidiário', 'incomunicabilidade',
]);

const KEY_RE = new RegExp(
  `último recurso|${[...TEAL_WORDS, ...ROSE_WORDS]
    .filter((w) => w !== 'último recurso')
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')}`,
  'giu'
);

const CAPS_RE = /[A-ZÁÉÍÓÚÂÊÔÃÕÇÀÈÌÒÙ][A-ZÁÉÍÓÚÂÊÔÃÕÇÀÈÌÒÙ0-9º°§()/%.+-]{1,}/g;
const QUOTE_RE = /(“[^”]+”)/g;

function markKeywords(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(KEY_RE.source, 'giu');
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const w = m[0].toLowerCase();
    out.push(
      <span key={out.length} style={{ backgroundImage: TEAL_WORDS.has(w) ? M.teal : M.rose }}>
        {m[0]}
      </span>
    );
    last = m.index + m[0].length;
  }
  out.push(text.slice(last));
  return out;
}

function markCaps(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(CAPS_RE.source, 'g');
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(...markKeywords(text.slice(last, m.index)));
    out.push(
      <span key={out.length} style={{ backgroundImage: M.caps }}>
        {m[0]}
      </span>
    );
    last = m.index + m[0].length;
  }
  out.push(...markKeywords(text.slice(last)));
  return out;
}

function markQuotes(line: string): ReactNode[] {
  return line.split(QUOTE_RE).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ backgroundImage: M.rose }} className="font-medium text-ink">
        {part}
      </span>
    ) : (
      <span key={i}>{markCaps(part)}</span>
    )
  );
}

/* ---- quebra estrutural: incisos, alíneas e parágrafos, um em cada linha ---- */
function autoLines(resumo: string): string[] {
  let t = resumo.replace(/\s+/g, ' ').trim();
  t = t.replace(/\s+(§\s?\d+[º°]?)/g, '\n$1');
  t = t.replace(/\s+(Arts?\.?) (?=\d)/g, '\n$1 ');
  t = t.replace(/\s+(\d{1,2}\) )/g, '\n$1');
  t = t.replace(/\s+([IVXLCDM]{1,4})\s?[–—-]\s/g, '\n$1 – ');
  t = t.replace(/\s+([a-z])\)\s/g, '\n$1) ');
  return t.split('\n').map((s) => s.trim()).filter(Boolean);
}

function ArticleText({ resumo }: { resumo: string }) {
  const lines = useMemo(() => autoLines(resumo), [resumo]);
  return (
    <div className="space-y-3">
      {lines.map((l, i) => {
        const isL2 = /^[a-z][)ºº]\s/.test(l);
        return (
          <p
            key={i}
            className={`font-display text-[15.5px] md:text-base font-normal leading-[2] text-ink/85 text-justify ${
              isL2 ? 'pl-6 border-l-2 border-ink/10' : ''
            }`}
          >
            {markQuotes(l)}
          </p>
        );
      })}
    </div>
  );
}

function Callout({
  icon: Icon,
  label,
  text,
  hex,
}: {
  icon: LucideIcon;
  label: string;
  text: string;
  hex: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5"
      style={{ borderColor: `${hex}30`, backgroundColor: `${hex}0d` }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="grid size-8 shrink-0 place-items-center rounded-xl"
          style={{ backgroundColor: hex, color: '#fdf9ee' }}
        >
          <Icon className="size-4" strokeWidth={2.4} />
        </span>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: hex }}>
          {label}
        </p>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-ink/75">{text}</p>
    </div>
  );
}

export default function ArticleCard({
  artigo,
  index,
  hex,
  range,
}: {
  artigo: Artigo;
  index: number;
  hex: string;
  range: string;
}) {
  return (
    <Reveal delay={Math.min((index % 3) * 0.06, 0.18)}>
      <article
        id={`art-${artigo.n}`}
        className={`group/card relative overflow-hidden rounded-[2rem] border bg-white transition-all duration-500 ${
          artigo.destaque
            ? 'border-gold/60 shadow-[0_30px_80px_-40px_rgba(193,154,61,0.55)] ring-1 ring-gold/40'
            : 'border-ink/10 shadow-[0_24px_60px_-40px_rgba(16,23,37,0.4)] hover:shadow-[0_40px_90px_-45px_rgba(16,23,37,0.55)]'
        }`}
      >
        {/* faixa superior colorida do bloco */}
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${hex}, ${hex}55)` }} />

        {artigo.destaque && (
          <div className="absolute right-6 top-6 z-10 flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 shadow-lg">
            <Star className="size-3 fill-ink text-ink" />
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink">
              Destaque do professor
            </span>
          </div>
        )}

        <div className="p-6 md:p-9">
          {/* cabeçalho */}
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="flex items-start gap-5">
              <div className="hidden select-none flex-col items-center sm:flex">
                <span
                  className="font-display text-6xl font-black leading-none md:text-7xl"
                  style={{ color: `${hex}26`, WebkitTextStroke: `1.5px ${hex}` }}
                >
                  {String(artigo.n).padStart(2, '0')}
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-ink/40">artigo</span>
              </div>
              <div>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em]"
                  style={{ borderColor: `${hex}40`, color: hex, backgroundColor: `${hex}0f` }}
                >
                  <span className="size-1.5 rounded-full" style={{ backgroundColor: hex }} />
                  {artigo.bloco} · {range}
                </span>
                <h3 className="mt-2.5 max-w-2xl font-display text-2xl md:text-[1.9rem] font-semibold leading-tight text-ink">
                  Art. {artigo.n}º · {artigo.titulo}
                </h3>
              </div>
            </div>

            <div className="flex max-w-56 flex-wrap justify-end gap-1.5">
              {artigo.bancas.map((b) => (
                <span
                  key={b}
                  className="rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    borderColor: `${bancaHex[b as keyof typeof bancaHex]}35`,
                    color: bancaHex[b as keyof typeof bancaHex],
                    backgroundColor: `${bancaHex[b as keyof typeof bancaHex]}0d`,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* texto essencial — justificado, estruturado e grifado */}
          <div className="relative mt-7 rounded-2xl border-l-[3px] bg-paper/80 p-5 md:p-7" style={{ borderColor: hex }}>
            <div className="flex items-center gap-2">
              <Quote className="size-4" style={{ color: hex }} />
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: hex }}>
                O que diz o texto
              </p>
              <span className="ml-auto flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.15em] text-ink/40">
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block w-3 h-2 rounded-[1px]" style={{ backgroundImage: M.caps }} />
                  chave
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block w-3 h-2 rounded-[1px]" style={{ backgroundImage: M.teal }} />
                  manda
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block w-3 h-2 rounded-[1px]" style={{ backgroundImage: M.rose }} />
                  veda/ressalva
                </span>
              </span>
            </div>
            <div className="mt-4">
              <ArticleText resumo={artigo.resumo} />
            </div>
          </div>

          {/* quadrante de prova */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Callout icon={Target} label="O que cai na prova" text={artigo.prova} hex="#2f6fb4" />
            <Callout icon={AlertTriangle} label="Pegadinha clássica" text={artigo.pegadinha} hex="#b04a3c" />
            <Callout icon={Lightbulb} label="Exemplo prático" text={artigo.exemplo} hex="#0f766e" />
            <Callout icon={Brain} label="Macete do professor" text={artigo.macete} hex="#9a7a1f" />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
