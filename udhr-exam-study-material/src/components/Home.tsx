import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ScrollText,
  Scale,
  Landmark,
  ArrowRight,
  BookOpenText,
  Target,
  AlertTriangle,
  Brain,
  ListChecks,
  Stamp,
  CheckCircle2,
  Route,
  GraduationCap,
  Layers,
} from 'lucide-react';
import type { View } from '../views';
import { Reveal, EASE } from './fx';
import { bancaHex } from '../data/shared';

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

const modulos: {
  id: View;
  parte: string;
  titulo: string;
  subt: string;
  res: string;
  natureza: string;
  accent: string;
  artigos: number;
  foco: string[];
}[] = [
  {
    id: 'p1',
    parte: 'Parte 1',
    titulo: 'Declaração Universal dos Direitos Humanos',
    subt: 'O ponto zero de todo edital',
    res: 'Res. 217 A (III) · 10/12/1948 · Paris',
    natureza: 'Declaração · proclamatória',
    accent: '#e3c878',
    artigos: 30,
    foco: ['Quórum 48–0–8 e o Palais de Chaillot', 'Asilo: buscar e gozar ≠ obter', 'STF RE 466.343 e a tese superada'],
  },
  {
    id: 'p2',
    parte: 'Parte 2',
    titulo: 'Eliminação da Intolerância Religiosa',
    subt: 'Liberdade de religião e convicção',
    res: 'Res. 36/55 · 25/11/1981 · consenso',
    natureza: 'Declaração · consensual',
    accent: '#5eead4',
    artigos: 8,
    foco: ['Declaração × convenção', 'Definição do art. 2º, §2º', 'Direitos dos pais (art. 5º)'],
  },
  {
    id: 'p3',
    parte: 'Parte 3',
    titulo: 'CEDAW — Direitos da Mulher',
    subt: 'A convenção vinculante da série',
    res: 'Res. 34/180 · 18/12/1979',
    natureza: 'Convenção · tratado + Comitê',
    accent: '#f0a5c0',
    artigos: 30,
    foco: ['Definição sem “preferência” (art. 1º)', 'Medidas especiais temporárias (art. 4º)', 'Lei Maria da Penha e conexões BR'],
  },
  {
    id: 'p4',
    parte: 'Parte 4',
    titulo: 'Convenção sobre os Direitos da Criança',
    subt: 'O tratado mais ratificado do mundo',
    res: 'Res. 44/25 · 20/11/1989 · consenso',
    natureza: 'Convenção · 196 Estados-partes',
    accent: '#7cc0f5',
    artigos: 54,
    foco: ['Os 4 princípios: 2-3-6-12', 'Definição de criança × ECA', 'Justiça juvenil (arts. 37 e 40)'],
  },
  {
    id: 'p5',
    parte: 'Parte 5A',
    titulo: 'ECA — Livro I (Parte Geral)',
    subt: 'A lei brasileira, arts. 1º ao 85',
    res: 'Lei 8.069 · 13/07/1990',
    natureza: 'Lei ordinária · proteção integral',
    accent: '#8ed6a0',
    artigos: 85,
    foco: ['Criança × adolescente (art. 2º)', 'Guarda, tutela e adoção', 'Trabalho, educação e viagem'],
  },
  {
    id: 'p5b',
    parte: 'Parte 5B',
    titulo: 'ECA — Livro II (Parte Especial)',
    subt: 'Arts. 86 ao 267 · o ECA na prática',
    res: 'Política, medidas, Conselho e crimes',
    natureza: 'SINASE · súmulas · prescrição',
    accent: '#f0a5c0',
    artigos: 182,
    foco: ['Socioeducativas e internação (6·3·21)', 'Conselho Tutelar e remissão', 'Crimes, infrações e súmulas do STJ'],
  },
  {
    id: 'p6',
    parte: 'Parte 6',
    titulo: 'Convenção contra a Discriminação Racial',
    subt: 'CIEFDR 1965 + Decreto 4.738/2003',
    res: 'Res. 2106 A (XX) · 21/12/1965 · Dec. 65.810/1969',
    natureza: 'Convenção · 25 artigos + Comitê CERD',
    accent: '#e8a36b',
    artigos: 25,
    foco: ['Definição com “preferência” (art. 1º)', 'Ação afirmativa e ação penal (art. 4º)', 'Petição individual: Dec. 4.738/2003'],
  },
  {
    id: 'p7',
    parte: 'Parte 7',
    titulo: 'Estatuto da Pessoa Idosa',
    subt: 'Lei 10.741/2003 · 118 artigos',
    res: 'Lei 10.741 · 1º/10/2003',
    natureza: 'Microssistema · prioridade absoluta',
    accent: '#b8a7e9',
    artigos: 118,
    foco: ['60 anos (art. 2º) e prioridade P.I.I.', 'Transporte: 10% · 2 vagas · 50%', 'BPC (65/LOAS) e crimes (arts. 93–108)'],
  },
  {
    id: 'p8',
    parte: 'Parte 8',
    titulo: 'Convenção Interamericana contra Tortura',
    subt: 'CIAPTT 1985 × CAT/ONU × Lei 9.455/97',
    res: 'Cartagena 1985 · Dec. 98.386/1989',
    natureza: 'Sistema OEA · jurisdição universal',
    accent: '#f08f7c',
    artigos: 17,
    foco: ['Definição ampla × definição da ONU', 'Obediência hierárquica não justifica', 'Aut dedere aut judicare + Corte IDH'],
  },
  {
    id: 'p9',
    parte: 'Parte 9',
    titulo: 'Convenção da Guatemala — PcD',
    subt: 'Dec. 3.956/2001 × CDPD/ONU × LBI',
    res: 'OEA 1999 · Dec. 3.956/2001',
    natureza: 'Supralegal × emenda × lei ordinária',
    accent: '#9db4ff',
    artigos: 10,
    foco: ['Status: supralegal × emenda × lei', 'Discriminação até por percepção (art. I)', 'CEDDIS e o modelo biopsicossocial'],
  },
];

const perfis = [
  {
    banca: 'Cebraspe' as const,
    assinatura: 'Certo/Errado cirúrgico',
    bullets: ['Troca UM termo do texto (“obter” por “buscar”, “taxativo”, “apenas”).', 'Adora exceções: asilo, art. 29-30 DUDH, limites do art. 1º/1981.', 'Quórum, órgão e natureza jurídica sempre no cardápio.'],
  },
  {
    banca: 'FGV' as const,
    assinatura: 'Interpretação + doutrina',
    bullets: ['Duas alternativas “quase certas”: escolha a MAIS completa.', 'Jurisprudência: RE 466.343, ADI 4.439, status supralegal da CEDAW.', 'Natureza jurídica documento por documento é o prato principal.'],
  },
  {
    banca: 'FCC' as const,
    assinatura: 'Letra fria do texto',
    bullets: ['Enumera artigos e pede “a incorreta” com um termo adulterado.', 'Rols e catálogos: art. 2º DUDH, art. 6º da Decl. 1981, art. 11 CEDAW.', 'Repete temas carimbados — revisitar o erro da prova anterior vale ponto.'],
  },
  {
    banca: 'AOCP' as const,
    assinatura: 'Objetiva, literal e histórica',
    bullets: ['Datas, números e órgãos: 1948, 1981, 1979, resoluções e Assembleia Geral.', 'Enunciados curtos sem enrolação doutrinária.', 'O ponto fácil da prova: ganhe-o com a literalidade.'],
  },
  {
    banca: 'Vunesp' as const,
    assinatura: 'Reprodução direta',
    bullets: ['Reprodução de artigos com um núcleo trocado (propriedade × segurança).', 'Mistura contexto histórico com texto frio.', 'Decore trios e quartetos: eles viram alternativas.'],
  },
];

const passos = [
  { icon: Route, t: '1 · Leia o contexto', d: 'Cada capítulo abre com história, natureza jurídica e o que a banca cobra — metade da batalha.' },
  { icon: BookOpenText, t: '2 · Estude artigo por artigo', d: 'Resumo fiel, foco de prova, pegadinha clássica, exemplo prático e macete em cada card.' },
  { icon: Layers, t: '3 · Revise os quadros', d: 'Conceitos-chave e o quadro sinótico são a leitura da véspera.' },
  { icon: ListChecks, t: '4 · Faça o simulado', d: '10 questões por documento no estilo AOCP, Cebraspe, FGV, FCC e Vunesp, com gabarito comentado.' },
];

export default function Home({ go }: { go: (v: View) => void }) {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsIn = useInView(statsRef, { once: true, margin: '-40px' });
  const s3 = useCounter(9, statsIn);
  const s68 = useCounter(340, statsIn);
  const s30 = useCounter(90, statsIn);
  const s5 = useCounter(5, statsIn);

  return (
    <>
      {/* HERO da série */}
      <section id="topo" className="grain relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <img src="images/hero-globe.jpg" alt="" className="h-full w-full object-cover object-center opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="inline-flex flex-wrap items-center gap-3 rounded-full border border-gold/30 bg-gold/[0.07] px-4 py-2"
          >
            <Landmark className="size-3.5 text-gold-2" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gold-2">
              Sistema ONU/OEA + ECA + DH temáticos · dez módulos · cinco bancas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            className="mt-7 max-w-4xl font-display text-[12vw] font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.2rem]"
          >
            A Coleção dos Direitos Humanos,
            <br />
            <span className="font-light italic text-gold-2">do jeito que a banca cobra.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease: EASE }}
            className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-paper/70"
          >
            Um único material de estudo, artigo por artigo: a <strong className="text-paper">DUDH (1948)</strong>, a{' '}
            <strong className="text-paper">Declaração contra a Intolerância Religiosa (1981)</strong>, a{' '}
            <strong className="text-paper">CEDAW (1979)</strong> e a{' '}
            <strong className="text-paper">Convenção sobre os Direitos da Criança (1989)</strong> — e o{' '}
            <strong className="text-paper">ECA completo, Livros I e II (arts. 1º–267)</strong> — e agora a{' '}
            <strong className="text-paper">CIEFDR (1965) com a Declaração Facultativa (2003)</strong> — e o{' '}
            <strong className="text-paper">Estatuto da Pessoa Idosa (Lei 10.741/2003)</strong>. Artigos com incisos em
            linhas próprias e grifo-colorido, justificados e comentados, quadros sinóticos e 80 questões comentadas no
            estilo AOCP, Cebraspe, FGV, FCC e Vunesp.
          </motion.p>

          <div ref={statsRef} className="mt-14 grid grid-cols-2 divide-x divide-paper/10 border-t border-paper/10 md:grid-cols-4">
            {[
              [s3, '', 'módulos completos'],
              [s68, '', 'artigos analisados'],
              [s30, '', 'questões comentadas'],
              [s5, '', 'bancas mapeadas'],
            ].map(([v, suf, label], i) => (
              <motion.div
                key={label as string}
                initial={{ opacity: 0, y: 20 }}
                animate={statsIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="px-5 py-6 md:px-8"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-paper tabular-nums">
                  {v as number}
                  <span className="text-gold-2">{suf as string}</span>
                </p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">{label as string}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* cards dos módulos */}
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modulos.map((m, i) => (
              <motion.button
                key={m.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                onClick={() => go(m.id)}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border bg-paper/[0.05] p-7 text-left backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-paper/[0.09]"
                style={{ borderColor: `${m.accent}35` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink"
                    style={{ backgroundColor: m.accent }}
                  >
                    {m.parte}
                  </span>
                  <span className="font-display text-4xl font-black tabular-nums" style={{ color: `${m.accent}40` }}>
                    {String(m.artigos).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-2xl md:text-[1.7rem] font-semibold leading-tight text-paper">
                  {m.titulo}
                </h2>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: m.accent }}>
                  {m.subt}
                </p>
                <div className="mt-5 space-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/45">
                  <p className="flex items-center gap-2">
                    <ScrollText className="size-3.5" style={{ color: m.accent }} /> {m.res}
                  </p>
                  <p className="flex items-center gap-2">
                    <Scale className="size-3.5" style={{ color: m.accent }} /> {m.natureza}
                  </p>
                </div>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {m.foco.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] leading-relaxed text-paper/65">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0" style={{ color: m.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <span
                  className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-transform group-hover:translate-x-1"
                  style={{ color: m.accent }}
                >
                  Entrar na {m.parte.toLowerCase()} <ArrowRight className="size-4" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* como usar */}
      <section className="ruled bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mb-10 flex items-center gap-3">
              <GraduationCap className="size-6 text-gold-3" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Como usar este material <span className="italic font-light text-gold-3">em 4 passos</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.07}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(16,23,37,0.5)]">
                  <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                    <p.icon className="size-5" />
                  </span>
                  <p className="mt-4 font-display text-lg font-semibold text-ink">{p.t}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DNA das bancas */}
      <section className="bg-paper-2 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <Stamp className="size-6 text-gold-3" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                O DNA das cinco bancas <span className="italic font-light text-gold-3">— vale para toda a coleção</span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-ink/60">
              Saber o conteúdo é metade do jogo. A outra metade é reconhecer como a sua banca costuma errar — porque ela sempre erra do mesmo jeito.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {perfis.map((p, i) => {
              const hex = bancaHex[p.banca];
              return (
                <Reveal key={p.banca} delay={i * 0.05}>
                  <div
                    className="flex h-full flex-col rounded-3xl border bg-white p-6 transition-transform duration-300 hover:-translate-y-1.5"
                    style={{ borderColor: `${hex}25` }}
                  >
                    <span
                      className="grid size-11 place-items-center rounded-2xl font-display text-lg font-black"
                      style={{ backgroundColor: `${hex}14`, color: hex, border: `1px solid ${hex}30` }}
                    >
                      {p.banca.slice(0, 2)}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-ink">{p.banca}</h3>
                    <p className="mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]" style={{ color: hex }}>
                      {p.assinatura}
                    </p>
                    <ul className="mt-4 flex-1 space-y-2.5">
                      {p.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink/65">
                          <Target className="mt-0.5 size-3.5 shrink-0" style={{ color: hex }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-3xl border border-gold/40 bg-gradient-to-r from-gold/[0.1] to-transparent p-6 md:p-7">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-ink">
                <Brain className="size-5" />
              </span>
              <p className="max-w-3xl text-sm md:text-[15px] leading-relaxed text-ink/75">
                <strong>Resumo da ópera:</strong> Cebraspe troca termos, FGV troca teses, FCC troca incisos, AOCP
                troca datas e a Vunesp troca núcleos. Domine a literalidade dos artigos-chave e todas as cinco jogam
                para você. Depois é só conferir as <AlertTriangle className="inline size-4 text-brick" /> pegadinhas
                clássicas de cada artigo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
