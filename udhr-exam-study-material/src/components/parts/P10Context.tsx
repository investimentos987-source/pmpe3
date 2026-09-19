import { Reveal, SectionHead } from '../fx';
import { Landmark, Flame, BookOpen, Scale, Gavel, Globe2, ScrollText, HeartPulse, Accessibility, Cpu, Vote, ShieldAlert, Clock3 } from 'lucide-react';

const timeline = [
  { ano: '1988', titulo: 'CF/88', desc: 'Art. 227 e art. 23: dever de proteção à PcD. Base constitucional da inclusão.' },
  { ano: '1999', titulo: 'Guatemala — OEA', desc: 'Convenção Interamericana contra discriminação (Dec. 3.956/2001) — status supralegal.' },
  { ano: '2006', titulo: 'CDPD — ONU', desc: 'Convenção sobre Direitos das PcD, Nova York, 13/12/2006 — paradigma biopsicossocial.' },
  { ano: '2008', titulo: 'DL 186/2008', desc: 'Congresso aprova CDPD pelo rito do art. 5º, §3º — 3/5, 2 turnos.' },
  { ano: '2009', titulo: 'Dec. 6.949', desc: 'Promulga CDPD com status de EMENDA CONSTITUCIONAL — primeiro tratado.' },
  { ano: '2015', titulo: 'LBI — Lei 13.146', desc: 'Estatuto da Pessoa com Deficiência: 127 artigos, internaliza CDPD.' },
  { ano: '2024-25', titulo: 'Atualizações', desc: 'Campanhas acessíveis 14.863/24, comunicação baixa tecnologia 15.249/25, abandono 2-5a 15.163/25.' },
];

const modelos = [
  {
    t: 'Modelo Médico',
    hex: '#991b1b',
    itens: ['Deficiência = doença', 'Foco no indivíduo e no diagnóstico', 'Solução: cura, tratamento, segregação protetora', 'Pessoa como objeto de caridade/assistência', 'Laudo médico como única prova'],
  },
  {
    t: 'Modelo Social (LBI)',
    hex: '#0f766e',
    itens: ['Deficiência = impedimento + barreira', 'Foco na sociedade e nas barreiras', 'Solução: acessibilidade, TA, adaptação razoável, inclusão', 'Pessoa como SUJEITO DE DIREITOS', 'Avaliação biopsicossocial multiprofissional'],
  },
];

const blocos = [
  { t: 'Preliminares', a: '1º–3º', d: 'Conceito, biopsicossocial, dicionário 16 definições', hex: '#c19a3d' },
  { t: 'Igualdade', a: '4º–9º', d: 'Discriminação, vulneráveis, capacidade civil, prioridade 7 incisos', hex: '#0f766e' },
  { t: 'Vida', a: '10º–13º', d: 'Dignidade, autonomia corporal, consentimento e pesquisa', hex: '#7c3aed' },
  { t: 'Hab/Reab', a: '14º–17º', d: 'Direito, diretrizes, garantias, SUS/Suas', hex: '#2f6fb4' },
  { t: 'Saúde', a: '18º–26º', d: 'Integral 11 garantias, prevenção, acompanhante, notificação', hex: '#991b1b' },
  { t: 'Educação', a: '27º–30º', d: 'Inclusiva 19 incisos, sem taxa extra, seletivos acessíveis', hex: '#e8a36b' },
  { t: 'Moradia', a: '31º–33º', d: '4 modalidades, 3% reserva', hex: '#0e7490' },
  { t: 'Trabalho', a: '34º–38º', d: 'Sem aptidão plena, competitiva e com apoio', hex: '#6d28d9' },
  { t: 'Assist/Prev', a: '39º–41º', d: 'BPC/LOAS 1 SM e LC 142', hex: '#15803d' },
  { t: 'Cultura/Transp', a: '42º–52º', d: 'Cultura sem barreira autoral, espetáculos, hotéis 10%, 2%/10%/1-20', hex: '#4b5563' },
  { t: 'Acessibilidade', a: '53º–62º', d: 'Direito, gatilhos art.54, DU regra geral, alvará/habite-se, contas acessíveis', hex: '#b8a7e9' },
  { t: 'Info/Comunicação', a: '63º–73º', d: 'Sites 10% PCs, TV legenda/Libras/audiodescrição, livros sem barreira autoral', hex: '#5eead4' },
  { t: 'TA', a: '74º–75º', d: 'Direito maximiza autonomia, plano 4-2-5 (crédito, importação, pesquisa, tributo, SUS)', hex: '#f08f7c' },
  { t: 'Participação', a: '76º–78º', d: 'Votar/ser votada, sem seção exclusiva, propaganda com art.67, ciência', hex: '#7cc0f5' },
  { t: 'Justiça/Capacidade', a: '79º–87º', d: 'Justiça com TA, cartório capacidade plena, curatela só patrimonial, TDA', hex: '#e3c878' },
  { t: 'Crimes', a: '88º–91º', d: 'Discriminação 1-3a (mídia 2-5a), apropriação 1-4a, abandono 2-5a (8-14 morte), cartão 6m-2a', hex: '#dc2626' },
  { t: 'Cadastro/Auxílios', a: '92º–95º', d: 'Cadastro-Inclusão georreferenciado, auxílio-inclusão, domiciliar', hex: '#0891b2' },
  { t: 'Alterações Legais', a: '96º–113º', d: 'Eleitoral, CLT aprendiz, 7.853 2-5a, FGTS, CDC, 8.213 cota, improbidade', hex: '#7c3aed' },
  { t: 'CC Revolução', a: '114º–116º', d: 'Art.3º só menor 16, testemunha, casamento, curatela compartilhada, TDA 2 apoiadores', hex: '#0f766e' },
  { t: 'Finais', a: '117º–127º', d: 'Cão-guia internacional, táxi 10% condutor, norma mais benéfica, prazos 24/48/84m, 180d', hex: '#4b5563' },
];

export default function P10Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto · modelo social · LBI completa 1-127 · curatela × TDA"
          title={
            <>
              A LBI completa: do modelo social à{' '}
              <span className="italic font-light" style={{ color: '#0f766e' }}>
                revolução da capacidade
              </span>
            </>
          }
          desc="A Lei 13.146/2015 internaliza a CDPD (2006, Dec. 6.949/2009 com status de emenda): troca o laudo médico isolado pela fórmula impedimento de longo prazo + barreiras. A Parte 10 agora cobre os 127 artigos: da definição de deficiência à acessibilidade (53-62), informação/comunicação e livros sem barreira autoral (63-73), tecnologia assistiva e seu plano 4-2-5 (74-75), participação política sem seção exclusiva (76-78), acesso à justiça com TA e cartórios com capacidade plena (79-83), curatela só patrimonial e tomada de decisão apoiada com 2 apoiadores (84-87 e 114-116), crimes 1-3a/2-5a/1-4a/2-5a/6m-2a (88-91 e Lei 7.853 2-5a), Cadastro-Inclusão georreferenciado e auxílio-inclusão (92-95), alterações em 18 leis (96-113) e disposições finais com norma mais benéfica e prazos 24/48/84 meses."
        />

        
        <Reveal>
          <div className="mb-10 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-3">
            <span className="grid size-8 place-items-center rounded-full bg-gold text-ink">
              <Clock3 className="size-4" />
            </span>
            <div className="text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-3">Tempo de leitura focada — sessão completa</p>
              <p className="font-display text-base font-bold text-ink">
                5h00 focado
                <span className="ml-2 font-sans text-xs font-normal text-ink/60">· Contexto 40min + 127 arts 180min + Quadro 30min + Simulado 50min</span>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                Por quase um século o Brasil tratou deficiência como <strong className="font-semibold text-ink">doença</strong>: o <strong className="font-semibold text-ink">modelo médico</strong>. A resposta era clínica — internação, benefício e segregação disfarçada de proteção. A CF/88 (art. 23, II; art. 227, §1º, II) começou a virada, mas a ruptura veio com a <strong className="font-semibold text-ink">Convenção da Guatemala (1999, Dec. 3.956/2001 — supralegal)</strong> e, sobretudo, a <strong className="font-semibold text-ink">CDPD da ONU (2006)</strong>, aprovada pelo rito do art. 5º, §3º (DL 186/2008) e promulgada pelo <strong className="font-semibold text-ink">Decreto 6.949/2009</strong> com status de <strong className="font-semibold text-ink">emenda constitucional</strong> — primeiro tratado com essa hierarquia.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                A <strong className="font-semibold text-ink">Lei 13.146, de 6 de julho de 2015 (LBI)</strong> traduz a CDPD em 127 artigos. O art. 2º fixa a fórmula de ouro: <strong className="font-semibold text-ink">PcD = impedimento de longo prazo (físico, mental, intelectual ou sensorial) + interação com barreiras (urbanísticas, arquitetônicas, transportes, comunicações, atitudinais, tecnológicas) = obstrução da participação plena em igualdade</strong>. Sem barreira, não há deficiência no modelo social. Por isso §1º exige <strong className="font-semibold text-ink">avaliação biopsicossocial</strong> por equipe multiprofissional/interdisciplinar com 4 eixos: funções/estruturas do corpo, fatores socioambientais/psicológicos/pessoais, limitação de atividades e restrição de participação — o F-E-A-P.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                A Parte 10 agora vai além dos direitos até transporte (1-52): <strong className="font-semibold text-ink">Título III da Acessibilidade (53-62)</strong> — acessibilidade como direito, gatilhos do art. 54 (projetos, concessão/permissão/autorização/habilitação, financiamento público, aval União), desenho universal regra geral, alvará e habite-se condicionados, contas em formato acessível e placas com pictogramas em praças (62-A); <strong className="font-semibold text-ink">Informação e comunicação (63-73)</strong> — sites obrigatoriamente acessíveis com símbolo, 10% PCs em telecentros/lan houses, radiodifusão com tripé legenda oculta + janela Libras + audiodescrição, livros sem barreira autoral e com cláusula de impedimento em editais, TA como direito (74) e plano 4 anos renovável, 2 anos avaliado, 5 eixos crédito/importação/pesquisa/tributação/SUS (75); <strong className="font-semibold text-ink">Participação política (76)</strong> — votar e ser votada, vedada seção exclusiva, propaganda eleitoral com art. 67 e auxílio por pessoa de escolha; <strong className="font-semibold text-ink">Justiça e capacidade (79-87)</strong> — justiça com adaptações e TA, capacitação Judiciário/MP/DP/segurança, apenado com acessibilidade, cartórios com capacidade plena e discriminação se negar, curatela só patrimonial/negocial (não alcança corpo, sexualidade, matrimônio, privacidade, educação, saúde, trabalho, voto), extraordinária, proporcional, menor tempo, contas anuais, e <strong className="font-semibold text-ink">TDA facultativa com 2 apoiadores idôneos</strong>; <strong className="font-semibold text-ink">Crimes (88-91)</strong> e <strong className="font-semibold text-ink">Lei 7.853 (98)</strong>; <strong className="font-semibold text-ink">Cadastro-Inclusão e auxílio-inclusão (92-95)</strong>; <strong className="font-semibold text-ink">18 alterações legislativas (96-113)</strong> incluindo CTB, cota PcD, improbidade por falta de acessibilidade; <strong className="font-semibold text-ink">revolução do CC (114-116)</strong> — art. 3º só menor 16 é absolutamente incapaz, PcD testemunha com TA, pode casar, curatela compartilhada, convivência familiar preservada, Título passa a “Tutela, Curatela e TDA” e art. 1.783-A com 11 parágrafos; <strong className="font-semibold text-ink">finais (117-127)</strong> — cão-guia internacional, museus acessíveis, táxi 10% vagas condutor PcD, norma mais benéfica prevalece, prazos 24/48/84 meses e vacatio 180 dias.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative w-full mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que a LBI completa cai tanto?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Art. 2º: longo prazo + barreiras = modelo social; biopsicossocial F-E-A-P.',
                    'Discriminação inclui recusa adaptação razoável e TA; basta efeito.',
                    'Atendimento prioritário 7 incisos: acompanhante exceto IR e tramitação.',
                    'Acessibilidade 53-62: direito, gatilhos art.54, DU regra geral, alvará/habite-se.',
                    'Info 63-73: sites acessíveis 10% PCs, TV legenda/Libras/audiodescrição, livros sem barreira autoral.',
                    'TA 74-75: direito maximiza autonomia + plano 4-2-5 C-I-P-T-S.',
                    'Participação 76: votar/ser votada, sem seção exclusiva, propaganda art.67, auxílio pessoa escolha.',
                    'Justiça 79-83: TA para todos polos, capacitação, cartório capacidade plena.',
                    'Curatela 85: só patrimonial, não alcança existenciais; TDA 116: 2 apoiadores, termo, juiz ouve multi+MP.',
                    'Crimes 88-91: 1-3a (mídia 2-5a), 1-4a, 2-5a (grave 3-7 morte 8-14), 6m-2a; 7.853 2-5a.',
                    'Cadastro-Inclusão georreferenciado + auxílio-inclusão + domiciliar INSS.',
                    'CC 114: só menor 16 absolutamente incapaz; 1.783-A 11 §§ TDA.',
                    'Finais 121/125/127: norma mais benéfica, prazos 24/48/84m, 180d vigência.',
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
                  alt="Mãos humanas diversas, em preto e branco"
                  className="relative w-full h-auto object-cover grayscale contrast-125 aspect-[4/3]"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 rounded-b-3xl bg-ink/85 px-4 py-3 backdrop-blur border-t border-paper/10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">6 de julho de 2015 · 127 artigos</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    LBI completa: inclusão como direito, acessibilidade como pressuposto, capacidade como regra.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 flex flex-col gap-5">
              <Reveal delay={0.2}>
                <div className="relative w-full rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Scale className="size-5" style={{ color: '#0f766e' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">A fórmula + revolução</p>
                  </div>
                  <p className="mt-3 font-display text-3xl font-bold leading-tight">
                    I + B = <span style={{ color: '#0f766e' }}>Obstrução</span> · C = Regra
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">
                    Impedimento longo prazo + barreiras = deficiência. Capacidade civil é REGRA; curatela é extraordinária, só patrimonial, menor tempo. TDA: PcD elege 2 apoiadores de confiança.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-3 gap-4">
                <Reveal delay={0.25}>
                  <div className="relative w-full h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <HeartPulse className="size-5" style={{ color: '#0f766e' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">4 eixos</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">biopsicossocial: função, socioambiental, atividade, participação</p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="relative w-full h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Accessibility className="size-5" style={{ color: '#b8a7e9' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">DU = regra</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">adaptação razoável só se DU comprovadamente impossível</p>
                  </div>
                </Reveal>
                <Reveal delay={0.35}>
                  <div className="relative w-full h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Vote className="size-5" style={{ color: '#7cc0f5' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">Sem seção exclusiva</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">art. 76: voto acessível + auxílio pessoa escolha</p>
                  </div>
                </Reveal>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.4}>
                  <div className="relative w-full rounded-3xl border p-6" style={{ borderColor: '#e3c87860', backgroundColor: '#e3c87814' }}>
                    <div className="flex items-center gap-3">
                      <Gavel className="size-5" style={{ color: '#e3c878' }} />
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#a08020' }}>
                        Curatela × TDA
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      Curatela: só patrimonial/negocial, extraordinária, proporcional, menor tempo, contas anuais. Não alcança voto, casamento, corpo, saúde. TDA: facultativa, 2 apoiadores idôneos, termo, juiz ouve multi+MP, vale contra terceiros se nos limites.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.45}>
                  <div className="relative w-full rounded-3xl border p-6" style={{ borderColor: '#dc262640', backgroundColor: '#dc26240a' }}>
                    <div className="flex items-center gap-3">
                      <ShieldAlert className="size-5" style={{ color: '#dc2626' }} />
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#dc2626' }}>
                        Crimes LBI
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      Discriminação 1-3a (mídia 2-5a) +1/3 cuidado; apropriação 1-4a +1/3 tutor; abandono 2-5a (Lei 15.163/25) grave 3-7 morte 8-14; cartão 6m-2a +1/3 tutor. 7.853: 6 crimes 2-5a.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.5}>
                <div className="relative w-full rounded-3xl border p-6" style={{ borderColor: '#0f766e40', backgroundColor: '#0f766e0a' }}>
                  <div className="flex items-center gap-3">
                    <Cpu className="size-5" style={{ color: '#0f766e' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f766e' }}>
                      CC pós-LBI
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Absolutamente incapaz: só menor 16. Relativamente: ébrios/viciados e quem não puder exprimir vontade. PcD testemunha com TA, casa (1.550 §2º), curatela compartilhada (1.775-A), convivência preservada (1.777). Título IV: Tutela, Curatela e TDA. Art. 1.783-A 11 §§.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Modelo médico <span className="italic font-light text-gold-3">×</span> modelo social
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {modelos.map((m, i) => (
              <Reveal key={m.t} delay={i * 0.08}>
                <div className="relative w-full h-full rounded-3xl border bg-white p-7" style={{ borderColor: `${m.hex}35` }}>
                  <h4 className="font-display text-xl font-bold" style={{ color: m.hex }}>
                    {m.t}
                  </h4>
                  <ul className="mt-5 space-y-2.5">
                    {m.itens.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/70">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ backgroundColor: m.hex }} />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Arquitetura da LBI <span className="italic font-light text-gold-3">— 20 blocos · 127 artigos</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {blocos.map((e, i) => (
              <Reveal key={e.t} delay={i * 0.02}>
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
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo da inclusão no Brasil</h3>
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

        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <ScrollText className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Dicionário da LBI <span className="italic font-light text-gold-3">— 6 barreiras + TA</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              ['Urbanísticas', 'Vias e espaços públicos'],
              ['Arquitetônicas', 'Edifícios públicos e privados'],
              ['Transportes', 'Sistemas e meios'],
              ['Comunicação', 'Expressão e informação'],
              ['Atitudinais', 'Atitudes que impedem participação — a mais cobrada'],
              ['Tecnológicas', 'Acesso às tecnologias'],
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
              <strong className="text-gold-3">Triângulo do apoio:</strong> Atendente pessoal = cuidados básicos vida diária (fora profissões regulamentadas); Profissional de apoio escolar = alimentação, higiene, locomoção no ambiente escolar; Acompanhante = acompanha PcD, podendo ou não ser atendente. <strong className="text-ink">TDA ≠ Curatela:</strong> TDA mantém capacidade, 2 apoiadores confiança, termo, juiz ouve multi+MP; curatela só patrimonial/negocial, extraordinária, proporcional, menor tempo, contas anuais, não alcança voto/casamento/corpo/saúde.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
