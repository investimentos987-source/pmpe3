import { Reveal, SectionHead } from '../fx';
import { Landmark, Flame, BookOpen, Scale, Gavel, Globe2, ScrollText, Layers } from 'lucide-react';

const timeline = [
  { ano: '1981', titulo: 'Ano Internacional das PcD', desc: 'A ONU dedica o ano às pessoas com deficiência e aprova o Programa de Ação Mundial (1982).' },
  { ano: '1993', titulo: 'Normas de Igualdade', desc: 'As Normas sobre Igualdade de Oportunidades da ONU — ainda sem força de tratado.' },
  { ano: '1999', titulo: 'Convenção da Guatemala', desc: 'A OEA aprova, em 7/6/1999, a primeira convenção interamericana sobre deficiência.' },
  { ano: '2001', titulo: 'Decreto 3.956', desc: 'O Brasil promulga (8/10/2001): rito ordinário — status SUPRALEGAL.' },
  { ano: '2006', titulo: 'CDPD — Nova York', desc: 'A ONU aprova a Convenção sobre os Direitos das Pessoas com Deficiência (13/12/2006).' },
  { ano: '2009', titulo: 'Decreto 6.949', desc: 'Aprovada pelo rito do art. 5º, § 3º (Dec. Legislativo 186/2008): status de EMENDA CONSTITUCIONAL.' },
  { ano: '2015', titulo: 'LBI', desc: 'A Lei 13.146/2015 internaliza a CDPD: o Estatuto da Pessoa com Deficiência brasileiro.' },
];

const tres = [
  {
    t: 'Convenção da Guatemala — OEA (1999)',
    hex: '#9db4ff',
    itens: ['Decreto 3.956/2001', 'Status SUPRALEGAL no Brasil', 'Terminologia: “pessoa PORTADORA”', 'Definição: restrição física, mental ou sensorial (permanente ou transitória) + meio social', 'Discriminação: até por percepção de deficiência', 'Acompanhamento: CEDDIS (comitê da OEA)'],
  },
  {
    t: 'CDPD — ONU (2006)',
    hex: '#2f6fb4',
    itens: ['Decreto 6.949/2009', 'Status de EMENDA CONSTITUCIONAL', 'Terminologia: “pessoa COM deficiência”', 'Definição: biopsicossocial — impedimento + barreiras', '50 artigos + Protocolo Facultativo', 'Acompanhamento: Comitê da ONU'],
  },
  {
    t: 'LBI — Brasil (2015)',
    hex: '#0f766e',
    itens: ['Lei 13.146/2015 — Estatuto', 'LEI ORDINÁRIA federal', '“Pessoa COM deficiência” (art. 2º)', 'Modelo biopsicossocial espelhado na CDPD', 'Adaptação razoável + cotas art. 93 (2% a 5%, 100+ empregados)', 'Crimes próprios (art. 88 e ss.)'],
  },
];

export default function P9Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto · sistema OEA · a tríade dos status"
          title={
            <>
              A Convenção da Guatemala e a{' '}
              <span className="italic font-light" style={{ color: '#9db4ff' }}>
                revolução dos status
              </span>
            </>
          }
          desc="A Convenção da Guatemala é o primeiro tratado interamericano dedicado às pessoas com deficiência — e a peça que, com a CDPD da ONU (2006) e a LBI (2015), forma a tríade hierárquica mais cobrada em prova: supralegal, emenda constitucional e lei ordinária, todas a serviço da mesma pessoa."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                A história da proteção internacional às pessoas com deficiência é uma história de mudança de paradigma. Por décadas prevaleceu o MODELO MÉDICO-ASSISTENCIAL: a deficiência era vista como doença ou incapacidade a ser tratada, e a resposta do Estado era a segregação protetora — internações, benefícios e exclusão disfarçada de cuidado. A virada começou na ONU (Ano Internacional de 1981, Programa de Ação Mundial de 1982, Normas de Igualdade de 1993) e ganhou força de tratado nas Américas: em 7 de junho de 1999, na Cidade da Guatemala, a Assembleia Geral da OEA aprovou a <strong className="font-semibold text-ink">Convenção Interamericana para a Eliminação de Todas as Formas de Discriminação contra as Pessoas Portadoras de Deficiência</strong>.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                O Brasil a promulgou pelo <strong className="font-semibold text-ink">Decreto nº 3.956, de 8 de outubro de 2001</strong> — rito ordinário, anterior à EC 45/2004, portanto com status de <strong className="font-semibold text-ink">norma SUPRALEGAL</strong>, abaixo da Constituição e acima das leis. É a mesma hierarquia das demais convenções interamericana e ONU anteriores a 2004 que já estudamos (tortura — Parte 8; CIEFDR — Parte 6).
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Sete anos depois, a ONU deu o passo definitivo: a <strong className="font-semibold text-ink">Convenção sobre os Direitos das Pessoas com Deficiência (CDPD)</strong>, adotada em Nova York em 13 de dezembro de 2006, foi incorporada pelo Brasil pelo rito qualificado do art. 5º, § 3º, da CF (Decreto Legislativo 186/2008 — três quintos, dois turnos) e promulgada pelo <strong className="font-semibold text-ink">Decreto nº 6.949/2009</strong>: <strong className="font-semibold text-ink">status de EMENDA CONSTITUCIONAL</strong>, o primeiro tratado da história brasileira a alcançá-lo. Por fim, a <strong className="font-semibold text-ink">Lei 13.146/2015 (LBI)</strong> internalizou a CDPD no plano legislativo. Guatemala, CDPD e LBI formam assim três camadas de proteção — e a regra de ouro do sistema: prevalece sempre a norma mais favorável.
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
                    'Status: supralegal (2001) × emenda (2009) × lei (2015).',
                    'Deficiência PERMANENTE OU TRANSITÓRIA + meio social.',
                    'Discriminação por PERCEPÇÃO e antecedente.',
                    'Diferenciação legítima: cotas e acessibilidade ≠ discriminação.',
                    'CEDDIS (OEA) × Comitê da ONU — troca clássica.',
                    '“Pessoa COM deficiência” × “portadora” — terminologia.',
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
                  src="images/context-hall.jpg"
                  alt="Plenário de assembleia internacional, em preto e branco"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">Cidade da Guatemala, 1999</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    A OEA transforma a luta antidiscriminação em tratado regional.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Scale className="size-5" style={{ color: '#9db4ff' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">A escadinha hierárquica</p>
                  </div>
                  <p className="mt-3 font-display text-3xl font-bold leading-tight">
                    Supralegal <span style={{ color: '#9db4ff' }}>·</span> Emenda <span style={{ color: '#9db4ff' }}>·</span> Lei
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">
                    Guatemala (Dec. 3.956/2001) fica abaixo da CF e acima das leis; CDPD (Dec. 6.949/2009) equivale a emenda constitucional; LBI (2015) é lei ordinária. No conflito, prevalece a norma MAIS FAVORÁVEL — o critério material, não o formal.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-3 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Gavel className="size-5" style={{ color: '#9db4ff' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">1999</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">adoção na Guatemala, pela OEA</p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Globe2 className="size-5" style={{ color: '#9db4ff' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">2009</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">CDPD vira emenda constitucional</p>
                  </div>
                </Reveal>
                <Reveal delay={0.35}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Layers className="size-5" style={{ color: '#9db4ff' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">2015</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">LBI internaliza a CDPD</p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.4}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#9db4ff40', backgroundColor: '#9db4ff0a' }}>
                  <div className="flex items-center gap-3">
                    <ScrollText className="size-5" style={{ color: '#9db4ff' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#9db4ff' }}>
                      Terminologia importa
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    A Guatemala (1999) ainda diz “pessoa <strong>PORTADORA</strong> de deficiência”; a CDPD e a LBI consagram “pessoa <strong>COM</strong> deficiência”. A troca não é estética: o novo termo afirma que a deficiência é um atributo da pessoa — não algo que ela “carrega” — e desloca o problema para as <strong>barreiras</strong> da sociedade.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* as três normas */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                As três camadas de proteção <span className="italic font-light text-gold-3">— lado a lado</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {tres.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.08}>
                <div className="h-full rounded-3xl border bg-white p-7" style={{ borderColor: `${d.hex}45` }}>
                  <h4 className="font-display text-xl font-bold leading-tight text-ink">{d.t}</h4>
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
        </div>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo da proteção internacional</h3>
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
