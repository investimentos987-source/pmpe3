import { SectionHead, Reveal } from '../fx';
import { Star, GitCompareArrows, ShieldPlus, Users, ArrowRight, Info } from 'lucide-react';

const destaques = [
  {
    art: 'Art. 2º',
    t: 'Criança × adolescente',
    k: 'Criança: até 12 anos INCOMPLETOS. Adolescente: 12 a 18. Excepcionalmente, 18 a 21 nos casos expressos em lei.',
    p: '“Completos” no lugar de “incompletos” — e esquecer o parágrafo único dos 21 anos.',
  },
  {
    art: 'Arts. 1º e 6º',
    t: 'Proteção integral',
    k: 'Doutrina que substituiu a situação irregular; interpreta-se o ECA pelos fins sociais e pela condição peculiar de pessoa em desenvolvimento.',
    p: 'Dizer que o ECA só alcança crianças em risco ou que adotou a situação irregular.',
  },
  {
    art: 'Art. 4º',
    t: 'Prioridade absoluta',
    k: 'Dever da família, comunidade, sociedade em geral e poder público. Quatro “P”: primazia, precedência, preferência e destinação privilegiada.',
    p: 'Atribuir o dever só ao Estado ou condicionar a prioridade ao orçamento.',
  },
  {
    art: 'Arts. 7º–14',
    t: 'Vida e saúde',
    k: 'Prontuário por 18 anos (art. 10); acompanhante em tempo integral (art. 12); suspeita de maus-tratos → Conselho Tutelar (art. 13); vacinação obrigatória (art. 14, §1º).',
    p: 'Exigir confirmação dos maus-tratos ou apontar a polícia como destinatária da notificação.',
  },
  {
    art: 'Art. 19',
    t: 'Convivência familiar',
    k: 'Família natural é a regra; substituta é exceção. Reavaliação a cada 3 meses; acolhimento por até 18 meses; visita a pai/mãe preso sem autorização judicial.',
    p: 'Usar os prazos revogados (6 meses / 2 anos) — a Lei 13.509/2017 mudou tudo.',
  },
  {
    art: 'Art. 25 e 28',
    t: 'Natural, extensa e substituta',
    k: 'Natural: pais ou qualquer deles + descendentes. Extensa: parentes próximos COM convivência e afeto. Substituta: guarda, tutela ou adoção.',
    p: 'Considerar “extensa” qualquer parente, sem convivência; ou exigir os dois genitores na natural.',
  },
  {
    art: 'Arts. 53–59',
    t: 'Educação',
    k: 'Ensino obrigatório e gratuito = DIREITO PÚBLICO SUBJETIVO (art. 54, §1º); creche e pré-escola de 0 a 5 anos; escola avisa o Conselho (art. 56).',
    p: 'Alegar reserva do possível para negar vaga em creche (STF, RE 1.008.166 — tema 548).',
  },
  {
    art: 'Arts. 60–69',
    t: 'Trabalho',
    k: 'ECA diz 14 anos (salvo aprendiz); a CF, após a EC 20/98, exige 16 — aprendiz aos 14. Noturno: 22h às 5h. Nunca insalubre, perigoso ou penoso.',
    p: 'A banca mistura a régua do ECA com a da CF: leia o comando da questão.',
  },
  {
    art: 'Arts. 83–85',
    t: 'Autorização para viajar',
    k: 'Nacional: só CRIANÇA precisa (art. 83). Exterior: criança E adolescente (art. 84). Com estrangeiro residente fora: sempre alvará (art. 85).',
    p: 'Estender o art. 83 ao adolescente — ele viaja sozinho pelo Brasil sem autorização judicial.',
  },
];

const gta: [string, string, string, string][] = [
  ['Natureza do vínculo', 'Precária — regulariza a posse de fato', 'Munus público; substitui o poder familiar', 'Filiação plena e definitiva'],
  ['Base legal', 'Arts. 33 a 35', 'Arts. 36 a 38', 'Arts. 39 a 52-D'],
  ['Poder familiar', 'Não extingue: pais mantêm visitas e alimentos', 'Pressupõe prévia perda ou suspensão', 'Extingue e substitui integralmente'],
  ['Revogabilidade', 'Revogável a qualquer tempo (ouvido o MP)', 'Destituível pelo rito do art. 24', 'IRREVOGÁVEL (art. 39, §1º)'],
  ['Efeito patrimonial', 'Dependente para todos os fins, inclusive previdenciários', 'Administra bens; hipoteca legal se houver patrimônio', 'Direitos sucessórios recíprocos e plenos'],
  ['Idade-limite', 'Criança e adolescente', 'Até 18 anos incompletos', 'Adotando até 18 anos na data do pedido'],
  ['Exige compromisso?', 'Sim, termo nos autos (art. 32)', 'Sim, termo nos autos (art. 32)', 'Não — constitui-se por sentença'],
  ['Cabe a estrangeiro residente fora?', 'Não', 'Não', 'Sim — única via possível (art. 31)'],
];

const medidas = [
  'I — encaminhamento aos pais ou responsável, mediante termo de responsabilidade;',
  'II — orientação, apoio e acompanhamento temporários;',
  'III — matrícula e frequência obrigatórias em estabelecimento oficial de ensino fundamental;',
  'IV — inclusão em serviços e programas oficiais de proteção, apoio e promoção da família;',
  'V — requisição de tratamento médico, psicológico ou psiquiátrico, em regime hospitalar ou ambulatorial;',
  'VI — inclusão em programa oficial ou comunitário de auxílio, orientação e tratamento a alcoólatras e toxicômanos;',
  'VII — acolhimento institucional;',
  'VIII — inclusão em programa de acolhimento familiar;',
  'IX — colocação em família substituta.',
];

const principios100 = [
  'condição da criança e do adolescente como sujeitos de direitos',
  'proteção integral e prioritária',
  'responsabilidade primária e solidária do poder público',
  'interesse superior da criança e do adolescente',
  'privacidade',
  'intervenção precoce',
  'intervenção mínima',
  'proporcionalidade e atualidade',
  'responsabilidade parental',
  'prevalência da família',
  'obrigatoriedade da informação',
  'oitiva obrigatória e participação',
];

const mandamentos = [
  'O ECA (Lei 8.069, de 13/7/1990) adotou a doutrina da PROTEÇÃO INTEGRAL, revogando o Código de Menores e a doutrina da situação irregular.',
  'Art. 2º: criança até 12 anos INCOMPLETOS; adolescente de 12 a 18; excepcionalmente, aplica-se o Estatuto dos 18 aos 21 nos casos expressos em lei.',
  'Art. 4º: o dever é da família, da comunidade, da sociedade em geral e do poder público — com primazia, precedência, preferência e destinação privilegiada de recursos.',
  'Art. 23: pobreza NUNCA justifica a perda ou suspensão do poder familiar; e a condenação criminal só destitui se for crime DOLOSO, apenado com RECLUSÃO, contra o próprio filho ou outro titular do mesmo poder familiar.',
  'Art. 19: reavaliação do acolhimento a cada 3 meses e permanência máxima de 18 meses (Lei 13.509/2017); a família natural tem preferência.',
  'Art. 25: família natural = pais ou qualquer deles + descendentes; extensa = parentes próximos COM convivência e afeto; substituta (art. 28) = guarda, tutela ou adoção.',
  'Guarda é revogável (art. 35); tutela pressupõe perda/suspensão do poder familiar e implica guarda (art. 36); adoção é excepcional e IRREVOGÁVEL (art. 39, §1º).',
  'Art. 42: adota quem tem mais de 18 anos, com 16 anos de diferença mínima; ascendentes e irmãos JAMAIS adotam. Adoção internacional se define pela RESIDÊNCIA, não pela nacionalidade (art. 51).',
  'Art. 54, §1º: o acesso ao ensino obrigatório e gratuito é DIREITO PÚBLICO SUBJETIVO — creche e pré-escola de 0 a 5 anos são judicialmente exigíveis (STF, tema 548).',
  'Viagem: no plano nacional a autorização judicial só é exigida para CRIANÇA (art. 83); ao exterior alcança criança e adolescente (art. 84); com estrangeiro residente no exterior, sempre alvará (art. 85).',
];

export default function P5Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Destaques · G-T-A · medidas de proteção"
          title={
            <>
              O núcleo duro do{' '}
              <span className="italic font-light" style={{ color: '#0f766e' }}>
                Livro I
              </span>
            </>
          }
          desc="Primeiro os pontos que decidem a questão; depois o quadro comparativo guarda × tutela × adoção; e, por fim, a antecipação das medidas de proteção (arts. 98 a 102), que abrem o Livro II e são cobradas junto com a Parte Geral."
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

        {/* B · guarda x tutela x adoção */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <GitCompareArrows className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Guarda <span className="italic font-light text-gold-3">×</span> Tutela{' '}
                <span className="italic font-light text-gold-3">×</span> Adoção
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[46rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[13rem_1fr_1fr_1fr] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Critério</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#7cc0f5' }}>
                    Guarda
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#e3c878' }}>
                    Tutela
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#5eead4' }}>
                    Adoção
                  </p>
                </div>
                {gta.map(([crit, g, t, a], i) => (
                  <div
                    key={crit}
                    className={`grid grid-cols-[13rem_1fr_1fr_1fr] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} transition-colors hover:bg-gold/[0.08]`}
                  >
                    <p className="flex items-center px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">
                      {crit}
                    </p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[13px] leading-snug text-ink/80">{g}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[13px] leading-snug text-ink/80">{t}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[13px] leading-snug text-ink/80">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/[0.1] to-transparent px-5 py-4 text-sm leading-relaxed text-ink/75">
              <Info className="mt-0.5 size-5 shrink-0 text-gold-3" />
              <span>
                <strong>Macete do trio:</strong> guarda se REVOGA, tutela se DESTITUI, adoção não se desfaz. E só a
                ADOÇÃO rompe o vínculo com a família biológica (art. 41) — guarda e tutela convivem com o parentesco
                original.
              </span>
            </p>
          </Reveal>
        </div>

        {/* C · medidas de proteção (antecipação) */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <ShieldPlus className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Antecipando o Livro II: <span className="italic font-light text-gold-3">medidas de proteção (arts. 98 a 102)</span>
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="grain relative h-full overflow-hidden rounded-3xl bg-ink p-7 text-paper md:p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-2">
                  Art. 98 · quando se aplicam
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/75">
                  As medidas são aplicáveis sempre que os direitos forem <strong>ameaçados ou violados</strong>:
                </p>
                <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-paper/70">
                  <li className="flex gap-2.5">
                    <span className="font-display text-gold-2">I</span> por AÇÃO ou OMISSÃO da sociedade ou do Estado;
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-display text-gold-2">II</span> por FALTA, OMISSÃO ou ABUSO dos pais ou responsável;
                  </li>
                  <li className="flex gap-2.5">
                    <span className="font-display text-gold-2">III</span> em razão de SUA PRÓPRIA CONDUTA.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl border border-gold/35 bg-gold/[0.08] p-4">
                  <p className="text-[13px] leading-relaxed text-paper/80">
                    <strong className="text-gold-2">Art. 99:</strong> podem ser aplicadas isolada ou cumulativamente, bem
                    como substituídas a qualquer tempo. <strong className="text-gold-2">Art. 101, §1º:</strong> o
                    acolhimento institucional e o familiar são <strong>provisórios e excepcionais</strong>, servindo de
                    transição para a reintegração familiar ou a colocação em família substituta, e{' '}
                    <strong>não implicam privação de liberdade</strong>.
                  </p>
                </div>
                <p className="mt-5 rounded-2xl border border-paper/15 bg-paper/[0.05] p-4 text-[12.5px] leading-relaxed text-paper/65">
                  <strong className="text-paper">Atenção:</strong> medidas de PROTEÇÃO (art. 101) aplicam-se a crianças e
                  adolescentes em situação de risco. Não confunda com as medidas SOCIOEDUCATIVAS (art. 112), exclusivas
                  do adolescente autor de ato infracional. À criança que pratica ato infracional aplicam-se apenas as
                  medidas do art. 101 (art. 105).
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7 md:p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/45">
                  Art. 101 · as nove medidas específicas de proteção
                </p>
                <ul className="mt-5 space-y-2.5">
                  {medidas.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-[13px] leading-relaxed text-ink/75">
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-teal" />
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-ink/10 pt-6">
                  <div className="flex items-center gap-2.5">
                    <Users className="size-4 text-gold-3" />
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/45">
                      Art. 100, parágrafo único · os 12 princípios
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {principios100.map((p, i) => (
                      <span
                        key={p}
                        className="rounded-full border border-ink/12 bg-paper px-3 py-1.5 text-[11.5px] text-ink/70"
                      >
                        <span className="mr-1.5 font-mono text-[9px] font-bold text-gold-3">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 rounded-xl border-l-[3px] border-brick/60 bg-brick/[0.06] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/70">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-brick">
                      pegadinha ·{' '}
                    </span>
                    a banca troca “intervenção mínima” por “intervenção máxima”, ou inverte “prevalência da família”.
                    Guarde ainda o caput do art. 100: as medidas visam ao FORTALECIMENTO DOS VÍNCULOS familiares e
                    comunitários.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
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
