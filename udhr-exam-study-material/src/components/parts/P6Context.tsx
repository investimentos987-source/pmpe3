import { Reveal, SectionHead } from '../fx';
import {
  Landmark,
  Flame,
  BookOpen,
  Users,
  Gavel,
  ScrollText,
  Megaphone,
  ShieldAlert,
  ClipboardCheck,
  Scale,
} from 'lucide-react';

const timeline = [
  { ano: '1948', titulo: 'DUDH', desc: 'Art. 2º veda distinção por raça e cor. A África do Sul se absteve — defendia o apartheid.' },
  { ano: '1960', titulo: 'Sharpeville', desc: 'Massacre de manifestantes pacíficos na África do Sul: o mundo decide agir contra o racismo.' },
  { ano: '1963', titulo: 'Declaração nº 1.904', desc: 'Declaração da ONU sobre a Eliminação de Todas as Formas de Discriminação Racial.' },
  { ano: '1965', titulo: 'CIEFDR adotada', desc: 'Res. 2106 A (XX), 21/12: declaração vira convenção vinculante.' },
  { ano: '1966', titulo: 'Brasil assina', desc: '7/3/1966: abertura das assinaturas; a Convenção entra em vigor em 4/1/1969.' },
  { ano: '1969', titulo: 'Decreto 65.810', desc: 'Promulgação brasileira em 8/12/1969 — norma supralegal (rito comum, pré-EC 45/2004).' },
  { ano: '2003', titulo: 'Decreto 4.738', desc: 'Declaração Facultativa (art. 14): o Brasil reconhece a competência do CERD para petições individuais.' },
];

const partes = [
  { t: 'Parte I', s: 'Direitos e obrigações', a: 'art. 1º–7', hex: '#c19a3d' },
  { t: 'Parte II', s: 'Comitê CERD e petições', a: 'art. 8–16', hex: '#b04a3c' },
  { t: 'Parte III', s: 'Cláusulas finais', a: 'art. 17–25', hex: '#4b5563' },
];

const entendimentos = [
  {
    t: 'Decreto 65.810/1969',
    sub: 'A Convenção no Brasil',
    hex: '#0e7490',
    itens: ['Assinada em 7/3/1966; ratificada em 1968.', 'Promulgada pelo Decreto 65.810, de 8/12/1969.', 'Rito ordinário, antes da EC 45/2004.', 'Logo: norma SUPRALEGAL (STF).', 'Texto em 5 línguas igualmente autênticas.'],
  },
  {
    t: 'Decreto 4.738/2003',
    sub: 'Declaração Facultativa (art. 14)',
    hex: '#b04a3c',
    itens: ['Reconhece a competência do Comitê CERD.', 'Permite comunicações de indivíduos/grupos.', 'Exige esgotamento da via judicial interna.', 'Veda duplo exame em outra via internacional.', 'Queixas são examinadas a título CONFIDENCIAL.'],
  },
];

export default function P6Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto histórico · estrutura · Comitê CERD"
          title={
            <>
              O primeiro tratado racial{' '}
              <span className="italic font-light" style={{ color: '#e8a36b' }}>
                com decisório próprio
              </span>
            </>
          }
          desc="A CIEFDR fechou o ciclo aberto pela DUDH em 1945 e pelo Pacto de 1966: transformou a luta contra o racismo em obrigação internacional com órgão próprio. Era o instrumento direto contra o apartheid — e é com ele que o Brasil, em 2003, abriu a porta das queixas individuais."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                A Convenção Internacional sobre a Eliminação de Todas as Formas de Discriminação Racial nasceu do choque moral do século XX: a vitória sobre o nazifascismo, os processos de descolonização e, sobretudo, o apartheid sul-africano — regime que, em 1960, executou manifestantes pacíficos no Massacre de Sharpeville. A Assembleia Geral respondeu em duas etapas, mesma estratégia repetida às outras partes: primeiro, a <strong className="font-semibold text-ink">Declaração de 1963</strong> (Res. 1.904); depois, a <strong className="font-semibold text-ink">Convenção de 1965</strong> (Res. 2106 A (XX), de 21 de dezembro), vinculante desde 4 de janeiro de 1969. É o único dos grandes tratados de DH da ONU do século XX cujo certame de implementação já conta com um comitê permanente desde o nascimento.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Estruturalmente, a Convenção é dividida em PARTE I (arts. 1º a 7 — definições, deveres estatais e catálogo de direitos), PARTE II (arts. 8 a 16 — funcionamento do Comitê e mecanismos de solução) e PARTE III (arts. 17 a 25 — assinatura, vigência e cláusulas finais). Note o desenho pedagógico: os arts. 1º, §4º, e 2º, §2º, legitimam as ações afirmativas; o art. 4º criminaliza organizações racistas; e o art. 5º reúne civis, políticos, econômicos e sociais num só catálogo, de tribunal a café. O Brasil assinou em 7 de março de 1966 e promulgou em dezembro de 1969 — as regras de supremacia do STF a colocam como norma supralegal, abaixo da Carta e acima das leis ordinárias.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Em 2003, o Brasil assinou o <strong className="font-semibold text-ink">Decreto 4.738</strong>, que formaliza o compromisso do art. 14: reconhece a competência do Comitê CERD para receber e analisar comunicações de pessoas e grupos que se apresentem como vítimas de discriminação racial - desde que esgotada a via nacional e sem duplo julgamento internacional. É o círculo fechado da proteção: o indivíduo que não encontrar reparação efetiva em casa (art. 6º da Convenção) pode levar seu caso ao sistema de Genebra.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que cai tanto?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Art. 1º: incluir “preferência” na definição é a troca campeã.',
                    'Ação afirmativa (arts. 1, §4º e 2, §2º): fundamento das cotas.',
                    'Comitê: 18 peritos × 23 da CEDAW — confusão garantida.',
                    'Decreto 65.810 x Decreto 4.738 — quem promulga o quê.',
                    'Art. 4º: criminalizar até a PARTICIPAÇÃO em grupo racista.',
                    'Esfume entre racismo, injúria racial e discriminação religiosa.',
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                      <BookOpen className="mt-0.5 size-4 shrink-0 text-gold-3" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <figure className="relative">
                <div className="absolute -inset-2 translate-x-4 translate-y-4 rounded-3xl border border-gold/50" />
                <img
                  src="images/context-cedaw.jpg"
                  alt="Sala de conferência internacional, em preto e branco"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">21 de dezembro de 1965</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    A Assembleia Geral aprova o tratado que fez do combate ao racismo obrigação internacional.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Scale className="size-5" style={{ color: '#e8a36b' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">A estrutura em números</p>
                  </div>
                  <p className="mt-3 font-display text-5xl font-bold">
                    25<span style={{ color: '#e8a36b' }}>.</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    artigos em três partes. E <strong>18 peritos</strong> no Comitê — o primeiro tratado dos grandes tratados a nascer com decisório próprio e permanente.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-3 gap-4">
                {partes.map((e, i) => (
                  <Reveal key={e.t} delay={0.25 + i * 0.06}>
                    <div className="h-full rounded-3xl border bg-white p-5" style={{ borderColor: `${e.hex}35` }}>
                      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: e.hex }}>
                        {e.t}
                      </p>
                      <p className="mt-2 font-display text-base font-semibold leading-tight text-ink">{e.s}</p>
                      <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-ink/45">{e.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#e8a36b40', backgroundColor: '#e8a36b0a' }}>
                  <div className="flex items-center gap-3">
                    <Megaphone className="size-5" style={{ color: '#e8a36b' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#e8a36b' }}>Calma com os decretos</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    <strong>Decreto 65.810/1969</strong> = a própria Convenção (o texto internacional inteiro). <strong>Decreto 4.738/2003</strong> = a Declaração Facultativa (a autorização para o CERD receber queixas). A banca troca os dois o tempo inteiro: memoriza por data — <strong>1969 é a CONVENÇÃO; 2003 é a PETIÇÃO</strong>.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* decretos comparativo */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <ScrollText className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Os dois decretos <span className="italic font-light text-gold-3">lado a lado</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {entendimentos.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.1}>
                <div className="h-full rounded-3xl border bg-white p-7" style={{ borderColor: `${d.hex}45` }}>
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl text-paper" style={{ backgroundColor: d.hex }}>
                      {i === 0 ? <Gavel className="size-5" /> : <Megaphone className="size-5" />}
                    </span>
                    <div>
                      <h4 className="font-display text-2xl font-bold text-ink">{d.t}</h4>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: d.hex }}>
                        {d.sub}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {d.itens.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/70">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ backgroundColor: d.hex }} />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-brick/30 bg-brick/[0.07] px-5 py-4 text-sm leading-relaxed text-ink/75">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-brick" />
              <span>
                <strong className="text-brick">Pegadinha da troca de decreto:</strong> a banca diz que “o Decreto
                65.810/2003” ou “o Decreto 4.738/1969”, misturando número e ano. Revise da maneira aprendida ali no
                quadro: <strong>1969 tem 65;</strong> <strong>2003 tem 4</strong>.
              </span>
            </p>
          </Reveal>
        </div>

        {/* comitê */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Users className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Comitê CERD — como funciona <span className="italic font-light text-gold-3">e o que ele não é</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <ClipboardCheck className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  Art. 9 · relatórios
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  1 ano após a entrada em vigor para o Estado e, depois, <strong>a cada 2 ANOS</strong>, e sempre que o Comitê solicitar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <Users className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  Art. 8 · composição
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  <strong>18 peritos</strong> independentes, eleitos em voto secreto, mandato de <strong>4 anos</strong>, atuando a título pessoal.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <Megaphone className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  Art. 14 · petição individual
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  <strong>Facultativa</strong> pela declaração do Estado: o Brasil reconheceu em 2003. Confidencial e não vinculante — recomendação, não condenação.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo do combate mundial ao racismo</h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {timeline.map((t, i) => (
              <Reveal key={t.ano} delay={i * 0.05}>
                <div className="relative h-full rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(16,23,37,0.45)]">
                  <span className="absolute -top-3 left-4 rounded-full bg-gold px-2.5 py-0.5 font-mono text-[9px] font-semibold tracking-widest text-ink">
                    {t.ano}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold leading-tight text-ink">{t.titulo}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/60">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
