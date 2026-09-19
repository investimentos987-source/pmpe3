import { SectionHead, Reveal } from '../fx';
import { Star, Scale, Gavel, Landmark, Info } from 'lucide-react';

const destaques = [
  {
    art: 'Art. 2º',
    t: 'Definição de tortura',
    k: 'Qualquer ato intencional que inflija dores ou sofrimentos físicos ou mentais — qualquer finalidade, qualquer mão — incluindo métodos de obliteração da personalidade, mesmo sem dor física.',
    p: 'Importar da ONU a exigência de funcionário público e de dor grave.',
  },
  {
    art: 'Art. 3º',
    t: 'Quem responde',
    k: 'O agente público que ordena, instiga, comete ou, podendo impedir, não impede; e o particular que, instigado pelo funcionário, ordena, instiga, comete ou é cúmplice.',
    p: 'Dizer que a omissão não caracteriza o crime ou que o particular responde sempre.',
  },
  {
    art: 'Art. 4º',
    t: 'Obediência hierárquica',
    k: 'O fato de agir por ordem de superior hierárquico NÃO isenta da responsabilidade penal — nem para o subordinado nem para o superior.',
    p: 'Tratar a ordem de cima como excludente geral de ilicitude.',
  },
  {
    art: 'Art. 5º',
    t: 'Nenhuma justificativa',
    k: 'Nem estado de guerra, sítio, emergência, conflito interno, suspensão de garantias nem o caráter perigoso do detido justificam a tortura.',
    p: 'Admitir a justificativa da “bomba-relógio” ou da ordem pública.',
  },
  {
    art: 'Art. 8º',
    t: 'Direito da vítima',
    k: 'Exame do caso por autoridade competente E INDEPENDENTE, mais reparação e meios para recuperar saúde, dignidade e honra.',
    p: 'Suprimir a independência ou reduzir a reparação ao dano material.',
  },
  {
    art: 'Arts. 12–14',
    t: 'Jurisdição universal e devolução',
    k: 'Jurisdição criminal ainda que o crime tenha sido fora do território (12); não devolução quando haja risco fundado de tortura (13); extraditar ou julgar — aut dedere aut judicare (14).',
    p: 'Afirmar extradição sempre obrigatória ou que quem não extradita não processa.',
  },
];

const comparativo: [string, string, string, string][] = [
  ['Instrumento', 'CIAPTT — Convenção Interamericana', 'CAT — Convenção da ONU', 'Lei 9.455/1997 (Brasil)'],
  ['Adoção / vigência', 'Cartagena 1985 · vigor 1987', 'ONU 1984 · vigor 1987', 'Lei interna de 1º/1/1997'],
  ['Definição de tortura', 'Qualquer dor/sofrimento, físico ou mental', 'Dor ou sofrimento GRAVES', 'Sofrimento físico ou mental (violência ou grave ameaça)'],
  ['Finalidade exigida', 'Qualquer finalidade basta (rol aberto)', 'Finalidade específica do rol (informação, punição, intimidação, coerção)', 'Finalidades próprias do caput (informação/confissão, ação/omissão criminosa, discriminação ou punição)'],
  ['Agente público', 'NÃO se exige (mas o art. 3º o tipifica especialmente)', 'EXIGE-SE autoridade pública ou consentimento/aquiescência estatal', 'Crime comum: qualquer sujeito ativo'],
  ['Obrigações-centrais', 'Prevenir, punir, investigar, extraditar ou julgar; não julgamento de habitantes', 'Criminalizar, prevenir, monitorar, não devolver', 'Punir: reclusão + qualificadoras por lesão grave e morte'],
  ['Complementos de proteção', 'Métodos de obliteração da personalidade', 'Não devolução e Subcomitê de Prevenção (OPCAT)', 'Tortura de preso (§ 1º) e discriminação racial/religiosa'],
  ['Controle internacional', 'Comissão e Corte Interamericanas', 'Comitê contra Tortura (CAT) + SPT (OPCAT, Dec. 5.885/2006)', 'Formulação brasileira; sem comitê internacional próprio'],
  ['Brasil — promulgação', 'Decreto 98.386/1989 (supralegal)', 'Decreto nº 40/1991 (supralegal)', 'Lei 9.455/1997 — ação penal pública incondicionada'],
];

const jurisprudencia = [
  {
    n: 'Velásquez Rodríguez',
    local: 'Corte IDH · Honduras · 1988',
    hex: '#2f6fb4',
    d: 'A primeira sentença da Corte Interamericana: desaparecimento forçado sob regime hondurenho; o dever positivo do Estado de investigar denúncias bem fundamentadas — não basta tramitar um mero formulário. Fundamento do princípio “evidence means must investigate” que seguirá todo o sistema.',
  },
  {
    n: 'Villagrán Morales',
    local: 'Corte IDH · Guatemala · 1999',
    hex: '#7c3aed',
    d: 'Agentes do Estado guatemalteco executaram crianças de rua após maus-tratos: a Corte condenou pela violação à vida, à integridade pessoal e à proteção da infância, afirmando a maior responsabilidade estatal quando a vítima é vulnerável.',
  },
  {
    n: 'Ximenes Lopes',
    local: 'Corte IDH · BRASIL · 2006',
    hex: '#f08f7c',
    d: 'A primeira condenação do Brasil por atos de tortura e de falium de investigação: Damião Ximenes Lopes, internado em hospital psiquiátrico no Ceará, morreu após maus-tratos e privações. A Corte condenou por violação do direito à integridade, à vida e às garantias judiciais, determinando investigação e mudança institucional da saúde mental, incluindo o direito de ser tratado em ambiente digno.',
  },
  {
    n: 'Vladimir Herzog',
    local: 'Corte IDH · BRASIL · 2018',
    hex: '#991b1b',
    d: 'O jornalista Vladimir Herzog foi torturado e morto no DOI-CODI de São Paulo, em 1975, durante a ditadura. A Corte condenou o Brasil por violação do direito à vida, à integridade, à verdade e à justiça, ordenando investigação dos fatos, assegurar a verdade sobre o caso, divulgar a sentença em ampla mídia e criação de projeto de jornalismo em homenagem à liberdade de imprensa.',
  },
];

const mandamentos = [
  'CIAPTT (Cartagena, 1985) foi promulgada pelo Decreto 98.386/1989; a Convenção da ONU contra Tortura, pelo Decreto 40/1991; o protocolo facultativo da CAT (OPCAT), pelo Decreto 5.885/2006.',
  'A definição interamericana é AMPLA: qualquer dor ou sofrimento, qualquer finalidade, qualquer mão — e ainda pune métodos de obliteração da personalidade, mesmo sem dor física.',
  'A definição da ONU é RESTRITA: exige dor GRAVE, finalidade específica do texto e nexo com funcionário público ou consentimento estatal.',
  'O art. 3º responsabiliza o agente público que ordena, instiga, comete ou, podendo impedir, não impede; e o particular que, instigado pelo funcionário, ordena, instiga, comete ou é cúmplice.',
  'O art. 4º é taxativo: a ordem de superior hierárquico NÃO isenta — nem o subordinado nem o superior.',
  'O art. 5º é absoluto: nem estado de guerra, sítio, emergência, suspensão de garantias nem o caráter perigoso do detido justificam a tortura.',
  'O art. 8º garante à vítima exame por autoridade competente e INDEPENDENTE, mais reparação e meios para recuperar saúde, dignidade e honra.',
  'Os arts. 12 a 14 são o sistema universal: julgar mesmo fora do território (universal), não devolver quando haja risco de tortura (non-refoulement) e extraditar ou julgar (aut dedere aut judicare).',
  'A Lei 9.455/1997 (tortura no Brasil) é ação penal pública incondicionada, crime comum, pena de reclusão com qualificadoras por lesão grave e morte, IMPRESCRITÍVEL e INAFIANÇÁVEL — mas NÃO está no rol dos crimes hediondos.',
  'Corte IDH: os dois casos brasileiros de tortura — Ximenes Lopes (2006), interno de hospital psiquiátrico no Ceará que morreu sob maus-tratos, com falha estatal na investigação; e Herzog (2018), jornalista morto no DOI-CODI da ditadura, com dever de investigar e divulgar a verdade.',
];

export default function P8Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Quadro comparativo · jurisprudência e casos brasileiros"
          title={
            <>
              Interamericana <span className="italic font-light" style={{ color: '#f08f7c' }}>×</span> ONU{' '}
              <span className="italic font-light text-gold-3">×</span> Lei 9.455
            </>
          }
          desc="O quadro que a banca cobra lateralmente: as três fontes da tortura, lado a lado. Depois, a jurisprudência da Corte Interamericana com os dois casos brasileiros emblemáticos: Ximenes Lopes e Vladimir Herzog."
        />

        {/* A · destaques */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {destaques.map((d, i) => (
            <Reveal key={d.art} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_26px_60px_-35px_rgba(193,154,61,0.6)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ink px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gold-2">
                    {d.art}
                  </span>
                  <Star className="size-4 fill-gold text-gold" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{d.t}</h3>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/70">{d.k}</p>
                <div className="mt-4 rounded-xl border-l-[3px] border-brick/60 bg-brick/[0.06] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/70">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-brick">pegadinha · </span>
                  {d.p}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* B · quadro comparativo */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Quadro sinótico <span className="italic font-light text-gold-3">— as três normas lado a lado</span>
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[56rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[10.5rem_1fr_1fr_1fr] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Critério</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#f08f7c' }}>
                    Interamericana
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#7cc0f5' }}>
                    Convenção da ONU
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#e3c878' }}>
                    Lei 9.455/97
                  </p>
                </div>
                {comparativo.map(([crit, ia, onu, lei], i) => (
                  <div
                    key={crit}
                    className={`grid grid-cols-[10.5rem_1fr_1fr_1fr] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} transition-colors hover:bg-gold/[0.08]`}
                  >
                    <p className="flex items-center px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">
                      {crit}
                    </p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12.5px] leading-snug text-ink/80">{ia}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12.5px] leading-snug text-ink/80">{onu}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12.5px] leading-snug text-ink/80">{lei}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/[0.1] to-transparent px-5 py-4 text-sm leading-relaxed text-ink/75">
              <Info className="mt-0.5 size-5 shrink-0 text-gold-3" />
              <span>
                <strong>Macete do trio:</strong> Interamericana porta ABERTA (qualquer dor, fim, mão) · Convenção da
                ONU porta FECHADA (dor grave + finalidade do texto + autoridade) · Lei 9.455/97 porta PRÓPRIA (crime
                comum, ação incondicionada, reclusão, imprescritível e inafiançável — e não esquece preso, nem raça/religião).
              </span>
            </p>
          </Reveal>
        </div>

        {/* C · jurisprudência */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Gavel className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Jurisprudência da Corte Interamericana <span className="italic font-light text-gold-3">— com os casos brasileiros</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {jurisprudencia.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 0.08}>
                <div
                  className="flex h-full flex-col rounded-3xl border bg-white p-7 transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: `${s.hex}35` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xl font-bold leading-tight text-ink">{s.n}</p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: s.hex }}>
                        {s.local}
                      </p>
                    </div>
                    <Landmark className="size-5 shrink-0" style={{ color: `${s.hex}80` }} />
                  </div>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-6 rounded-3xl border border-brick/30 bg-brick/[0.07] p-6 md:p-7">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brick">
                Sobre Vladimir Herzog — o que decidiu a Corte em 2018
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                A sentença do caso Vladimir Herzog condenou o Brasil por: <strong>(i)</strong> não cumprir o dever de
                investigar sua morte e tortura no DOI-CODI; <strong>(ii)</strong> violar o direito à vida, à
                integridade pessoal, à verdade e à justiça, além da liberdade de expressão e das garantias judiciais; e
                <strong>(iii)</strong> ela determinou: iniciativa de investigação pelos responsáveis, <strong>divulgação
                pública</strong> da sentença (mídia nacional e São Paulo), implementação de um <strong>projeto de
                jornalismo</strong> em memória de Herzog e medidas para evitar repetição. A punição aos responsáveis pro
                Estado era (e continua) pauta de cumprimento judicial — é a prova de que a tortura não tem prazo de
                validade para o sistema interamericano.
              </p>
            </div>
          </Reveal>
        </div>

        {/* D · entendimentos */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Os 10 entendimentos <span className="italic font-light text-gold-3">consolidados</span>
              </h3>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 md:block">
                o checklist final da véspera
              </p>
            </div>
          </Reveal>
          <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
            {mandamentos.map((m, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.3)}>
                <div className="group flex gap-5 border-b border-ink/10 pb-6">
                  <span className="font-display text-4xl font-black leading-none text-gold-3/90 tabular-nums transition-transform duration-300 group-hover:-translate-y-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm md:text-[15px] leading-relaxed text-ink/75">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
