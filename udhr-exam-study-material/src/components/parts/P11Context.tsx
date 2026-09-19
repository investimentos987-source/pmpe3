import { Reveal, SectionHead } from '../fx';
import { Landmark, Flame, BookOpen, Scale, Gavel, Globe2, ScrollText, ShieldAlert, Users, FileText, Eye, Clock3 } from 'lucide-react';

const timeline = [
  { ano: '1948', titulo: 'DUDH art.5º', desc: 'Ninguém será submetido a tortura ou pena/tratamento cruel, desumano ou degradante.' },
  { ano: '1966', titulo: 'PIDCP art.7º', desc: 'Pacto Internacional Direitos Civis e Políticos repete proibição absoluta.' },
  { ano: '1975', titulo: 'Declaração 1975', desc: 'AG ONU aprova Declaração Proteção contra Tortura — antecedente direto.' },
  { ano: '1984', titulo: 'CAT adotada', desc: 'AG ONU XL Sessão, Nova York, 10/12/1984 adota Convenção contra Tortura.' },
  { ano: '1987', titulo: 'Vigor internacional', desc: 'Entra em vigor 26/06/1987 após 20º depósito — Dia Internacional Apoio Vítimas Tortura.' },
  { ano: '1989', titulo: 'Brasil ratifica', desc: 'DL 4/89 aprova, depósito 28/09/89, vigor Brasil 28/10/89.' },
  { ano: '1991', titulo: 'Dec. 40/91', desc: 'Promulga CAT no Brasil — status supralegal (STF).' },
  { ano: '2002-07', titulo: 'OPCAT', desc: 'Protocolo Facultativo 2002 cria SPT + MNPCT — Decreto 6.085/07.' },
  { ano: '2013', titulo: 'Lei 12.847', desc: 'Cria SNPCT, CNPCT e MNPCT — 11 peritos, 3 anos, autonomia, visitas sem aviso.' },
];

const blocos = [
  { t: 'Definição Absoluta', a: '1º–3º', d: 'Tortura D-I-F-A + jus cogens + non-refoulement', hex: '#991b1b' },
  { t: 'Criminalização', a: '4º–9º', d: 'Crime + tentativa + cumplicidade, jurisdição universal, detenção, aut dedere, extradição, assistência', hex: '#dc2626' },
  { t: 'Prevenção', a: '10º–16º', d: 'Treinamento, revisão interrogatório, ex officio, queixa protegida, reparação, prova ilícita, outros maus-tratos', hex: '#e8a36b' },
  { t: 'CAT composição', a: '17º–18º', d: '10 peritos moral+competência, título pessoal, 4 anos, mesa 2a, quorum 6', hex: '#0f766e' },
  { t: 'CAT procedimentos', a: '19º–24º', d: 'Relatórios 1a+4a, investigação sistemática confidencial + visita com anuência, inter-estatal e individual facultativas 5 Estados, privilégios, anual', hex: '#2f6fb4' },
  { t: 'Finais e Reservas', a: '25º–33º', d: 'Assinatura, adesão, vigor 20+30d, reservas art.20 e 30, emendas 1/3+4m+2/3, denúncia 1a', hex: '#4b5563' },
  { t: 'OPCAT', a: 'Extra', d: 'SPT internacional + MNPCT nacional 11 peritos 3a, preventivo, sem aviso, entrevista reservada', hex: '#7c3aed' },
];

export default function P11Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto · ONU · Comitê CAT 10 peritos · jus cogens · OPCAT"
          title={
            <>
              A Convenção da ONU que tornou a tortura{' '}
              <span className="italic font-light" style={{ color: '#991b1b' }}>absolutamente proibida</span>
            </>
          }
          desc="Adotada em 10/12/1984 (mesma data da DUDH), em vigor internacional em 26/06/1987 (Dia Internacional de Apoio às Vítimas), ratificada pelo Brasil em 28/09/1989 (vigor 28/10/89) e promulgada pelo Decreto 40/1991. Sistema ONU, Comitê CAT com 10 peritos, proibição com status de jus cogens, non-refoulement, jurisdição universal aut dedere aut judicare, criminalização obrigatória, investigação ex officio, reparação com reabilitação completa, prova ilícita, e OPCAT (2002/Decreto 6.085/07) com SPT e MNPCT (Lei 12.847/13)."
        />

        
        <Reveal>
          <div className="mb-10 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-3">
            <span className="grid size-8 place-items-center rounded-full bg-gold text-ink">
              <Clock3 className="size-4" />
            </span>
            <div className="text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-3">Tempo de leitura focada — sessão completa</p>
              <p className="font-display text-base font-bold text-ink">
                2h30 focado
                <span className="ml-2 font-sans text-xs font-normal text-ink/60">· Contexto 25min + 34 arts 60min + Quadro 20min + Simulado 35min</span>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                A tortura é a violação mais antiga e mais grave dos direitos humanos. Depois da <strong className="font-semibold text-ink">DUDH art.5º (1948)</strong> — “ninguém será submetido a tortura” — e do <strong className="font-semibold text-ink">PIDCP art.7º (1966)</strong>, a ONU percebeu que a proibição genérica não bastava: era preciso definir, criminalizar, prevenir, punir e reparar. Em <strong className="font-semibold text-ink">9/12/1975</strong> a AG aprova a Declaração contra Tortura, e em <strong className="font-semibold text-ink">10/12/1984 (XL Sessão, Nova York)</strong> adota a <strong className="font-semibold text-ink">Convenção contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes (CAT)</strong>.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                A CAT entra em vigor internacional em <strong className="font-semibold text-ink">26/06/1987</strong> após o 20º depósito — por isso 26 de junho é o <strong className="font-semibold text-ink">Dia Internacional de Apoio às Vítimas de Tortura</strong> (1997). O Brasil aprova pelo <strong className="font-semibold text-ink">Decreto Legislativo 4/89 (23/05/89)</strong>, deposita carta em <strong className="font-semibold text-ink">28/09/89</strong>, vigor para o Brasil em <strong className="font-semibold text-ink">28/10/89 (art.27 §2º — 30 dias após depósito)</strong> e promulga pelo <strong className="font-semibold text-ink">Decreto 40/1991 (15/02/91, DOU 18/02/91)</strong> com status <strong className="font-semibold text-ink">supralegal</strong> (STF RE 466.343).
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                A grande virada da CAT está no <strong className="font-semibold text-ink">art.1º: 4 elementos cumulativos</strong> — D-I-F-A: <strong className="font-semibold text-ink">Dor aguda</strong> física ou mental, <strong className="font-semibold text-ink">Intencionalidade</strong>, <strong className="font-semibold text-ink">Finalidade específica</strong> (I-C-I-D: Informação/confissão, Castigo, Intimidação/coação, Discriminação) e <strong className="font-semibold text-ink">Agente público</strong> ou instigação/consentimento/aquiescência. Sanções legítimas não são tortura. O <strong className="font-semibold text-ink">art.2º consagra jus cogens</strong>: nenhuma guerra, ameaça de guerra, instabilidade interna, emergência, terrorismo ou ordem superior justifica tortura. O <strong className="font-semibold text-ink">art.3º cria non-refoulement específico</strong>: não expulsar, devolver ou extraditar se razões substanciais de risco de tortura, considerando quadro sistemático grave e maciço.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                O restante da Parte I (4º-16º) é operacional: <strong className="font-semibold text-ink">art.4º criminaliza</strong> tudo (tortura + tentativa + cumplicidade/participação) com penas adequadas à gravidade — base da Lei 9.455/97; <strong className="font-semibold text-ink">art.5º jurisdição universal</strong>: territorial (inclui navio/aeronave), nacionalidade ativa (autor nacional), passiva facultativa (vítima nacional se considerar apropriado) e universal se autor no território e não extradita (<strong className="font-semibold text-ink">aut dedere aut judicare</strong>); <strong className="font-semibold text-ink">art.6º detenção + investigação preliminar + comunicação consular + notificação Estados art.5º</strong>; <strong className="font-semibold text-ink">art.7º aut dedere aut judicare + tratamento justo</strong>; <strong className="font-semibold text-ink">art.8º extradição</strong>: tortura sempre extraditável, Convenção pode ser base legal quando não há tratado, ficção territorial art.5º §1º; <strong className="font-semibold text-ink">art.9º assistência judiciária máxima com provas</strong>.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Prevenção (10º-16º): <strong className="font-semibold text-ink">art.10 ensino</strong> obrigatório sobre proibição no treinamento de quem aplica lei, médicos, funcionários, custódia/interrogatório; <strong className="font-semibold text-ink">art.11 revisão sistemática</strong> normas/métodos interrogatório e custódia; <strong className="font-semibold text-ink">art.12 investigação ex officio imediata e imparcial com motivos razoáveis</strong> (sem queixa); <strong className="font-semibold text-ink">art.13 direito de queixa</strong> com exame imediato imparcial + proteção queixoso/testemunhas; <strong className="font-semibold text-ink">art.14 reparação integral</strong>: reparação + indenização justa e adequada + reabilitação mais completa possível, dependentes se morte; <strong className="font-semibold text-ink">art.15 prova ilícita</strong>: declaração sob tortura inadmissível, salvo contra torturador para provar declaração; <strong className="font-semibold text-ink">art.16 outros maus-tratos</strong>: proíbe cruel/desumano/degradante com agente público, aplica arts.10-13, sem exigir finalidade específica — distinção tortura × tratamento desumano × degradante.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Parte II (17º-24º) cria o <strong className="font-semibold text-ink">Comitê CAT: 10 peritos</strong> (não 18!), moral elevada, competência DH, título pessoal, geográfica equitativa, mandato 4 anos, eleição bienal quorum 2/3 Estados Partes + maioria absoluta, mesa 2 anos, quorum deliberação 6, maioria presentes, SG ONU apoio. Procedimentos: <strong className="font-semibold text-ink">art.19 relatórios 1 ano + 4 anos + comentários gerais</strong>; <strong className="font-semibold text-ink">art.20 investigação confidencial tortura sistemática</strong> com informações fidedignas + visita só com anuência + confidencial + resumo anual após consulta (reserva possível art.28); <strong className="font-semibold text-ink">art.21 inter-estatal facultativa</strong> 5 declarações para ativar, 3 meses resposta + 6 meses negociação + 12 meses relatório, esgotamento recursos internos, confidencial, bons ofícios, comissão ad hoc; <strong className="font-semibold text-ink">art.22 individual facultativa</strong> 5 declarações, inadmissível anônima/abuso/incompatível, 6 meses Estado, não litispendência internacional, parecer confidencial.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Parte III (25º-33º): assinatura, adesão, vigor 20 instrumentos + 30 dias (27), reservas possíveis art.20 e art.30 §1º (arbitragem/Corte IJ) com retirada a qualquer tempo (28 e 30), emendas 1/3 em 4 meses pede conferência + maioria adota + 2/3 aceita (29), controvérsias negociação → arbitragem 6 meses → Corte IJ (30), denúncia 1 ano efeitos sem afetar fatos anteriores (31). E o <strong className="font-semibold text-ink">OPCAT (2002, Dec. 6.085/07)</strong>: sistema preventivo de visitas regulares por SPT (ONU) e MNPCT (Brasil Lei 12.847/13 — 11 peritos, 3 anos, autonomia, sem aviso, entrevistas reservadas). CAT reprime, SPT/MNPCT previne.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative w-full mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que a CAT cai tanto na PMPE?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Definição art.1º: 4 elementos D-I-F-A + sanções legítimas não tortura.',
                    'Jus cogens art.2º: NUNCA se justifica, nem ordem superior.',
                    'Non-refoulement art.3º: não expulsa/devolve/extradita + quadro sistemático.',
                    'Criminalização art.4º: tortura+tentativa+cumplicidade com pena grave.',
                    'Jurisdição art.5º: territorial/navio, autor nacional, vítima nacional facultativa, universal se não extradita.',
                    'Aut dedere aut judicare art.7º + extradição art.8º base legal + ficção territorial.',
                    'Prevenção 10-11: ensino + revisão sistemática interrogatório/custódia.',
                    'Investigação ex officio art.12: motivos razoáveis → imediata imparcial sem queixa.',
                    'Reparação art.14: indenização justa + reabilitação completa + dependentes se morte.',
                    'Prova ilícita art.15: declaração sob tortura inadmissível, só contra torturador.',
                    'Distinção art.16: tortura exige finalidade, outros maus-tratos não, mas ambos com agente público e prevenção 10-13.',
                    'CAT 10 peritos 4 anos, quorum 6, relatórios 1a+4a, investigação sistemática confidencial visita com anuência.',
                    'Comunicações 21-22 facultativas 5 Estados, 3-6-12 meses, esgota recursos, confidencial.',
                    'Reservas art.20 e art.30, denúncia 1 ano, OPCAT preventivo SPT+MNPCT 11 peritos 3a sem aviso.',
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
              <figure className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white isolate">
                <div className="relative w-full absolute -inset-0 translate-x-2 translate-y-2 rounded-3xl border border-gold/20 pointer-events-none z-0" />
                <img
                  src="images/context-candles.jpg"
                  alt="Velas e correntes — símbolo da luta contra tortura"
                  className="relative w-full h-auto object-cover grayscale contrast-125 aspect-[4/3]"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 rounded-b-3xl bg-ink/85 px-4 py-3 backdrop-blur border-t border-paper/10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">10/12/1984 · 26/06/1987 · Dec. 40/91</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    Adotada no dia da DUDH, vigor no Dia Internacional de Apoio às Vítimas.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 flex flex-col gap-5">
              <Reveal delay={0.2}>
                <div className="relative w-full rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <ShieldAlert className="size-5" style={{ color: '#991b1b' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Definição de ouro</p>
                  </div>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight">
                    D-I-F-A + <span style={{ color: '#991b1b' }}>Jus Cogens</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">
                    Dor aguda + Intencional + Finalidade I-C-I-D (Informação, Castigo, Intimidar, Discriminação) + Agente público. Nunca se justifica. Sanção legítima não é tortura.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-3 gap-4">
                <Reveal delay={0.25}>
                  <div className="relative w-full h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Scale className="size-5" style={{ color: '#991b1b' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">10 peritos</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">CAT, moral elevada, competência DH, título pessoal</p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="relative w-full h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Eye className="size-5" style={{ color: '#7c3aed' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">OPCAT</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">SPT + MNPCT 11 peritos 3a, preventivo, sem aviso</p>
                  </div>
                </Reveal>
                <Reveal delay={0.35}>
                  <div className="relative w-full h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Gavel className="size-5" style={{ color: '#dc2626' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">Jus Cogens</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">proibição absoluta, non-refoulement, prova ilícita</p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.4}>
                <div className="relative w-full rounded-3xl border p-6" style={{ borderColor: '#991b1b40', backgroundColor: '#991b1b0a' }}>
                  <div className="flex items-center gap-3">
                    <FileText className="size-5" style={{ color: '#991b1b' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#991b1b' }}>
                      Art.5º + 7º + 8º
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Jurisdição universal: territorial/navio, autor nacional, vítima nacional facultativa, universal se não extradita (aut dedere aut judicare). Extradição sempre possível, Convenção pode ser base legal, ficção territorial art.5º §1º.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.45}>
                <div className="relative w-full rounded-3xl border p-6" style={{ borderColor: '#0f766e40', backgroundColor: '#0f766e0a' }}>
                  <div className="flex items-center gap-3">
                    <Users className="size-5" style={{ color: '#0f766e' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f766e' }}>
                      CAT procedimentos
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Relatórios 1a+4a, investigação sistemática confidencial com visita só com anuência (art.20, reserva possível), inter-estatal e individual facultativas 5 Estados, 3-6-12 meses, esgota recursos, confidencial, parecer/relatório.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Arquitetura da CAT <span className="italic font-light text-gold-3">— 33 artigos + OPCAT</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blocos.map((e, i) => (
              <Reveal key={e.t} delay={i * 0.04}>
                <div
                  className="relative w-full h-full rounded-2xl border bg-white p-5 transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: `${e.hex}35` }}
                >
                  <span
                    className="inline-flex rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em]"
                    style={{ backgroundColor: `${e.hex}14`, color: e.hex }}
                  >
                    {e.t}
                  </span>
                  <p className="mt-3 font-display text-sm font-semibold leading-tight text-ink">arts. {e.a}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-ink/60">{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Globe2 className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo da luta contra tortura</h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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

        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <ScrollText className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Tortura <span className="italic font-light text-gold-3">×</span> outros maus-tratos
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Tortura art.1º', 'Dor aguda + intencional + finalidade I-C-I-D + agente público. Mais grave, jus cogens, criminalização obrigatória.'],
              ['Tratamento cruel/desumano', 'Sofrimento grave, agente público, sem exigir finalidade específica. Ex: espancamento sem interrogatório.'],
              ['Tratamento degradante', 'Humilhação, diminuição dignidade. Ex: condições carcerárias degradantes, revista vexatória.'],
            ].map(([n, d], i) => (
              <Reveal key={n} delay={i * 0.04}>
                <div className="relative w-full h-full rounded-2xl border border-ink/10 bg-white p-4">
                  <p className="font-display text-sm font-bold text-ink">{n}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-ink/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="relative w-full mt-5 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/[0.08] to-transparent px-5 py-4 text-sm leading-relaxed text-ink/70">
              <strong className="text-gold-3">Fórmula CAT:</strong> Tortura = dor aguda + intencional + finalidade específica (informação/confissão, castigo, intimidação/coação, discriminação) + agente público/instigação/consentimento/aquiescência. Sanções legítimas não são tortura. <strong className="text-ink">Outros maus-tratos</strong> = cruel/desumano/degradante com agente público, sem finalidade específica, mas com prevenção arts.10-13. Ambos proibidos, tortura é topo da gravidade.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
