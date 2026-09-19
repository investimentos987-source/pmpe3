import { SectionHead, Reveal } from '../fx';
import { Star, GitCompareArrows, Gavel, Timer, BookMarked, Info, ShieldAlert } from 'lucide-react';

const destaques = [
  {
    art: 'Arts. 86–97',
    t: 'Política de atendimento',
    k: '7 linhas de ação (87) e 12 diretrizes (88): municipalização, conselhos paritários e deliberativos, fundos. Registro no CMDCA; fiscalização por Judiciário, MP e Conselho Tutelar (95).',
    p: 'Trocar “linhas” por “diretrizes”; ou pôr o CMDCA como fiscalizador (ele registra).',
  },
  {
    art: 'Arts. 98–102',
    t: 'Medidas de proteção',
    k: 'Cabem na ameaça OU violação, por ação/omissão do Estado, falta dos pais ou conduta da própria criança. Nove medidas (101); acolhimento é provisório e NÃO priva liberdade.',
    p: 'Inserir socioeducativas no rol do art. 101 ou dizer que acolher é privar de liberdade.',
  },
  {
    art: 'Arts. 103–105',
    t: 'Ato infracional',
    k: 'Crime ou contravenção (103); vale a idade na DATA DO FATO (104); criança recebe só medida protetiva (105).',
    p: 'Usar a idade da sentença; ou aplicar socioeducativa a criança.',
  },
  {
    art: 'Art. 108',
    t: 'Internação provisória',
    k: 'Máximo de 45 DIAS, improrrogável (art. 183), com decisão fundamentada e indícios de autoria e materialidade.',
    p: 'Confundir com os 3 meses da internação-sanção do art. 122, III.',
  },
  {
    art: 'Art. 112',
    t: 'As 6 socioeducativas',
    k: 'Advertência, reparar o dano, PSC, liberdade assistida, semiliberdade e internação — cumuláveis com o art. 101, I a VI.',
    p: 'Permitir cumulação com os incisos VII a IX do art. 101 (acolhimento e família substituta).',
  },
  {
    art: 'Arts. 121–122',
    t: 'Internação',
    k: '“6 · 3 · 21”: reavaliação semestral, teto de 3 anos, liberação aos 21. Três hipóteses taxativas; internação-sanção de até 3 meses.',
    p: 'Internar por tráfico automaticamente — Súmula 492/STJ veda.',
  },
  {
    art: 'Arts. 126–128',
    t: 'Remissão',
    k: 'MP antes do processo (exclui); juiz depois (suspende ou extingue). Não é culpa nem antecedente; cumula com medidas, salvo semiliberdade e internação.',
    p: 'Admitir remissão com internação; ou dispensar a homologação judicial da remissão ministerial.',
  },
  {
    art: 'Arts. 131–140',
    t: 'Conselho Tutelar',
    k: 'Permanente, autônomo e NÃO jurisdicional; 5 membros, 4 anos, recondução. Requisitos: idoneidade, +21 anos e residir no município.',
    p: 'Dizer que aplica medida socioeducativa ou que suas decisões são revistas pelo prefeito.',
  },
  {
    art: 'Arts. 141–224',
    t: 'Acesso à Justiça',
    k: 'Isenção de custas (141); sigilo total, nem iniciais (143); competência pelo domicílio dos pais, salvo ato infracional (147); prazos em dias corridos e recursos em 10 dias (152 e 198).',
    p: 'Aplicar dias úteis do CPC ou prazo em dobro ao MP.',
  },
];

const socio: [string, string, string, string][] = [
  ['I – Advertência', 'Admoestação verbal reduzida a termo', 'Instantânea', 'Materialidade + indícios de autoria (art. 114, p.ú.)'],
  ['II – Obrigação de reparar o dano', 'Restituir, ressarcir ou compensar', 'Até a reparação; substituível se impossível', 'Ato com reflexos patrimoniais'],
  ['III – Prestação de serviços à comunidade', 'Tarefas gratuitas de interesse geral', 'MÁXIMO 6 meses · 8h semanais', 'Sem prejuízo da escola ou do trabalho'],
  ['IV – Liberdade assistida', 'Acompanhar, auxiliar e orientar, com orientador', 'MÍNIMO 6 meses · prorrogável', 'Medida mais adequada ao acompanhamento'],
  ['V – Semiliberdade', 'Atividades externas sem autorização judicial', 'Sem prazo determinado (regras da internação)', 'Inicial ou transição para o meio aberto'],
  ['VI – Internação', 'Privação de liberdade em unidade exclusiva', '6 meses (reavaliar) · 3 anos (teto) · 21 (liberação)', 'Só nas 3 hipóteses do art. 122'],
];

const comparativo: [string, string, string][] = [
  ['Base legal', 'Arts. 98 a 102', 'Arts. 112 a 125'],
  ['Destinatário', 'Criança E adolescente', 'Somente ADOLESCENTE (12 a 18)'],
  ['Pressuposto', 'Direitos ameaçados ou violados (art. 98)', 'Prática de ato infracional comprovada (art. 114)'],
  ['Natureza', 'Protetiva e pedagógica', 'Pedagógica com conteúdo sancionatório'],
  ['Quem aplica', 'Juiz e também o Conselho Tutelar (art. 101, I a VII)', 'EXCLUSIVAMENTE o juiz (Súmula 108/STJ)'],
  ['Privação de liberdade', 'Nunca — acolhimento não priva liberdade (art. 101, §1º)', 'Sim: semiliberdade e internação'],
  ['Criança autora de ato infracional', 'Aplicável (art. 105)', 'Jamais aplicável'],
  ['Cumulação', 'Isolada ou cumulativa (art. 99)', 'Cumulável, inclusive com o art. 101, I a VI'],
  ['Prazo', 'Enquanto durar a situação de risco; reavaliação periódica', 'Prazos legais próprios (6 meses, 3 anos, 45 dias)'],
];

const sumulas = [
  { n: 'Súmula 108', t: 'STJ', d: 'A aplicação de medidas socioeducativas ao adolescente, pela prática de ato infracional, é da competência EXCLUSIVA DO JUIZ.' },
  { n: 'Súmula 265', t: 'STJ', d: 'É necessária a OITIVA DO MENOR INFRATOR antes de decretar-se a regressão da medida socioeducativa.' },
  { n: 'Súmula 338', t: 'STJ', d: 'A PRESCRIÇÃO PENAL É APLICÁVEL nas medidas socioeducativas.' },
  { n: 'Súmula 342', t: 'STJ', d: 'No procedimento para aplicação de medida socioeducativa, é NULA A DESISTÊNCIA DE OUTRAS PROVAS em face da confissão do adolescente.' },
  { n: 'Súmula 383', t: 'STJ', d: 'A competência para processar e julgar as ações conexas de interesse de menor é, em princípio, do foro do DOMICÍLIO DO DETENTOR DE SUA GUARDA.' },
  { n: 'Súmula 492', t: 'STJ', d: 'O ato infracional análogo ao TRÁFICO DE DROGAS, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação.' },
  { n: 'Súmula 500', t: 'STJ', d: 'A configuração do crime do art. 244-B do ECA (corrupção de menores) INDEPENDE DA PROVA da efetiva corrupção do menor, por se tratar de delito FORMAL.' },
  { n: 'Súmula 605', t: 'STJ', d: 'A superveniência da MAIORIDADE PENAL não interfere na apuração de ato infracional nem na aplicabilidade de medida socioeducativa em curso.' },
  { n: 'Súmula 594', t: 'STJ', d: 'O Ministério Público tem legitimidade ativa para ajuizar AÇÃO DE ALIMENTOS em proveito de criança ou adolescente, independentemente do exercício do poder familiar, de o menor se encontrar nas situações do art. 98 ou de ter representante legal.' },
  { n: 'Tema 548', t: 'STF', d: 'É obrigação do Estado assegurar às crianças de até 5 anos ATENDIMENTO EM CRECHE E PRÉ-ESCOLA (RE 1.008.166), sendo legítima a intervenção do Judiciário diante da omissão.' },
  { n: 'ADI 3.446', t: 'STF', d: 'Confirmada a constitucionalidade de dispositivos do ECA, inclusive quanto às infrações administrativas e à atuação do Conselho Tutelar.' },
  { n: 'Súmula 74', t: 'STJ', d: 'Para efeitos penais, o RECONHECIMENTO DA MENORIDADE do réu requer prova por documento hábil — relevante na apuração da idade à data do fato (art. 104, p.ú.).' },
];

const mandamentos = [
  'Política de atendimento: 7 linhas de ação (art. 87) e 12 diretrizes (art. 88), com municipalização, conselhos PARITÁRIOS e DELIBERATIVOS e fundos vinculados.',
  'Conselho de DIREITOS delibera a política e não é remunerado (art. 89); Conselho TUTELAR atende o caso, tem 5 membros, mandato de 4 anos e é remunerado (arts. 132 e 134).',
  'Medida de proteção cabe a criança e adolescente, na ameaça ou violação; medida socioeducativa só ao ADOLESCENTE e só pelo JUIZ (Súmula 108/STJ).',
  'À criança autora de ato infracional aplicam-se exclusivamente as medidas do art. 101 (art. 105).',
  'Internação provisória: 45 dias, improrrogáveis (arts. 108 e 183). Internação-sanção por descumprimento reiterado: até 3 meses (art. 122, §1º).',
  'Internação definitiva: sem prazo certo, reavaliação a cada 6 meses, teto de 3 anos e liberação compulsória aos 21 anos (art. 121).',
  'PSC: máximo de 6 meses e 8 horas SEMANAIS. Liberdade assistida: mínimo de 6 meses. Semiliberdade: atividades externas independem de autorização judicial.',
  'Remissão: pelo MP antes do processo (exclusão, com homologação judicial) ou pelo juiz depois (suspensão/extinção); não gera antecedentes e não se cumula com semiliberdade nem internação.',
  'A prescrição penal é aplicável às medidas socioeducativas (Súmula 338/STJ), com os prazos do art. 109 do CP reduzidos pela metade (art. 115 do CP).',
  'Crimes do ECA são de ação penal pública INCONDICIONADA (art. 227). Vender bebida a menor é CRIME desde 2015 (art. 243: detenção de 2 a 4 anos e multa).',
];

export default function P5bExtras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Socioeducativas · comparativo · prescrição · súmulas"
          title={
            <>
              O que separa{' '}
              <span className="italic font-light" style={{ color: '#c11f5d' }}>
                proteger de responsabilizar
              </span>
            </>
          }
          desc="O quadro das seis medidas socioeducativas com seus prazos, a tabela que distingue medida de proteção de medida socioeducativa, o regime da prescrição no ECA e o mapa completo das súmulas do STJ e do STF cobradas em prova."
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

        {/* B · quadro das socioeducativas */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Gavel className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Quadro sinótico das <span className="italic font-light text-gold-3">medidas socioeducativas</span>
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[52rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[15rem_1fr_1fr_1fr] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#f0a5c0' }}>
                    Medida (art. 112)
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
                    Em que consiste
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">
                    Prazo
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
                    Requisito / observação
                  </p>
                </div>
                {socio.map(([m, c, p, r], i) => (
                  <div
                    key={m}
                    className={`grid grid-cols-[15rem_1fr_1fr_1fr] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} transition-colors hover:bg-gold/[0.08]`}
                  >
                    <p className="flex items-center px-5 py-4 text-[13px] font-semibold text-ink">{m}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[13px] leading-snug text-ink/75">{c}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[13px] font-medium leading-snug" style={{ color: '#a8175a' }}>
                      {p}
                    </p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[13px] leading-snug text-ink/70">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/[0.1] to-transparent px-5 py-4 text-sm leading-relaxed text-ink/75">
              <Info className="mt-0.5 size-5 shrink-0 text-gold-3" />
              <span>
                <strong>Macete dos prazos:</strong> PSC tem TETO de 6 meses; LA tem PISO de 6 meses; internação
                provisória tem 45 dias; internação-sanção, 3 meses; internação comum, reavaliação a cada 6 meses, até 3
                anos, liberação aos 21. Semiliberdade não tem prazo — segue as regras da internação.
              </span>
            </p>
          </Reveal>
        </div>

        {/* C · comparativo */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <GitCompareArrows className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Medida de proteção <span className="italic font-light text-gold-3">×</span> Medida socioeducativa
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
              <div className="grid grid-cols-[8rem_1fr] border-b border-ink/10 bg-ink text-paper md:grid-cols-[13rem_1fr_1fr]">
                <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 md:px-6">Critério</p>
                <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] md:px-6" style={{ color: '#5eead4' }}>
                  Proteção
                </p>
                <p className="hidden border-l border-paper/10 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] md:block" style={{ color: '#f0a5c0' }}>
                  Socioeducativa
                </p>
              </div>
              {comparativo.map(([crit, prot, soc], i) => (
                <div
                  key={crit}
                  className={`grid grid-cols-[8rem_1fr] md:grid-cols-[13rem_1fr_1fr] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} transition-colors hover:bg-gold/[0.08]`}
                >
                  <p className="flex items-center px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50 md:px-6">
                    {crit}
                  </p>
                  <p className="flex items-start border-l border-ink/10 px-5 py-4 text-[13px] leading-snug text-ink/80 md:px-6">
                    <span className="mr-2.5 mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-teal" />
                    {prot}
                  </p>
                  <p className="col-start-2 flex items-start border-l border-t border-dashed border-ink/10 px-5 py-4 text-[13px] leading-snug text-ink/80 md:col-start-3 md:border-t-0 md:px-6">
                    <span className="mr-2.5 mt-1.5 inline-block size-1.5 shrink-0 rounded-full" style={{ backgroundColor: '#c11f5d' }} />
                    {soc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* D · prescrição */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Timer className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                A prescrição no ECA <span className="italic font-light text-gold-3">— Súmula 338 do STJ</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="grain relative h-full overflow-hidden rounded-3xl bg-ink p-7 text-paper md:p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-2">
                  Como calcular
                </p>
                <ol className="mt-5 space-y-4 text-[13.5px] leading-relaxed text-paper/75">
                  <li className="flex gap-3">
                    <span className="font-display text-xl font-bold text-gold-2">1</span>
                    Identifique a pena MÁXIMA em abstrato do crime correspondente ao ato infracional.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-xl font-bold text-gold-2">2</span>
                    Encontre o prazo prescricional no art. 109 do Código Penal.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-xl font-bold text-gold-2">3</span>
                    REDUZA PELA METADE, por força do art. 115 do CP (agente menor de 21 anos na data do fato).
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-xl font-bold text-gold-2">4</span>
                    Para medidas sem prazo determinado (internação e semiliberdade), o STJ considera o prazo de 3 anos como parâmetro — prescrição em 4 anos, reduzida a 2.
                  </li>
                </ol>
                <div className="mt-6 rounded-2xl border border-gold/35 bg-gold/[0.08] p-4">
                  <p className="text-[13px] leading-relaxed text-paper/80">
                    <strong className="text-gold-2">Exemplo:</strong> ato infracional análogo a furto simples (pena
                    máxima de 4 anos) → prescrição de 8 anos pelo art. 109, IV, do CP → reduzida à metade = 4 ANOS.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="h-full rounded-3xl border border-brick/35 bg-brick/[0.06] p-7">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="size-5 text-brick" />
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brick">
                    Pegadinhas de prescrição
                  </p>
                </div>
                <ul className="mt-5 space-y-3.5 text-[13px] leading-relaxed text-ink/75">
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brick" />
                    “Medidas socioeducativas são imprescritíveis pelo caráter pedagógico” — <strong>ERRADO</strong> (Súmula 338).
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brick" />
                    “Aplica-se o prazo do CP sem redução” — <strong>ERRADO</strong>: reduz-se pela metade (art. 115 do CP).
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brick" />
                    “Só as medidas em meio aberto prescrevem” — <strong>ERRADO</strong>: alcança todas, inclusive a internação.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brick" />
                    “A maioridade extingue a medida em curso” — <strong>ERRADO</strong>: Súmula 605/STJ; a extinção se dá aos 21 (art. 121, §5º).
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* E · súmulas */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <BookMarked className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Súmulas e teses <span className="italic font-light text-gold-3">do STJ e do STF</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sumulas.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.05}>
                <div className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="shrink-0">
                    <span
                      className="grid size-11 place-items-center rounded-xl font-mono text-[10px] font-bold"
                      style={{
                        backgroundColor: s.t === 'STF' ? '#2f6fb414' : '#c11f5d14',
                        color: s.t === 'STF' ? '#2f6fb4' : '#c11f5d',
                        border: `1px solid ${s.t === 'STF' ? '#2f6fb430' : '#c11f5d30'}`,
                      }}
                    >
                      {s.t}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-ink">{s.n}</p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/70">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* F · entendimentos */}
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
