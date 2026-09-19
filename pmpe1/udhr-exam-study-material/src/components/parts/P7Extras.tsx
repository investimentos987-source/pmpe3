import { SectionHead, Reveal } from '../fx';
import { Star, Scale, Hash, BookMarked, ArrowRight, Info } from 'lucide-react';

const destaques = [
  {
    art: 'Art. 2º',
    t: 'Conceito: 60 anos',
    k: 'Idoso = 60 anos ou mais. Os 65 anos pertencem ao BPC (LOAS) e à gratuidade urbana da CF (art. 230, § 2º).',
    p: 'Trocar 60 por 65 — a pegadinha estrutural do estatuto.',
  },
  {
    art: 'Art. 3º',
    t: 'Prioridade absoluta',
    k: 'Obrigação da família, comunidade, sociedade e poder público. Atendimento PREFERENCIAL, IMEDIATO e INDIVIDUALIZADO.',
    p: 'Restringir a prioridade ao Estado ou suprimir o trio P.I.I.',
  },
  {
    art: 'Art. 15',
    t: 'Saúde',
    k: 'Atenção integral pelo SUS, atendimento preferencial, DOMICILIAR, medicamentos de uso continuado GRATUITOS e vacinação.',
    p: 'Condicionar medicamentos gratuitos à miserabilidade.',
  },
  {
    art: 'Arts. 26–28',
    t: 'Trabalho e concursos',
    k: 'Sem limite máximo de idade (inclusive concursos, ressalvadas natureza e exigências do cargo); desempate: idade MAIS ELEVADA.',
    p: 'Inverter o desempate (vence o mais VELHO) ou suprimir a ressalva.',
  },
  {
    art: 'Art. 34',
    t: 'BPC',
    k: 'Insuficiência de meios, nos termos da LOAS: 65 anos, renda per capita de até ¼ do SM, valor de 1 salário mínimo.',
    p: 'Afirmar que o BPC é devido aos 60 anos do EPI.',
  },
  {
    art: 'Arts. 39–42',
    t: 'Transporte',
    k: 'Urbanos: 60+ grátis (CF: 65+). Assentos: 10% identificados. Interestadual: 2 vagas + 50% para renda até 2 SM.',
    p: 'Estender a gratuidade interestadual a todos os idosos.',
  },
  {
    art: 'Art. 38',
    t: 'Moradia',
    k: 'Prioridade na aquisição de imóvel em programas habitacionais públicos + reserva de 3% das unidades.',
    p: 'Trocar os 3% por 5% ou 10%.',
  },
  {
    art: 'Art. 71',
    t: 'Prioridade processual',
    k: 'Tramitação prioritária em QUALQUER instância, como parte OU interveniente — e não cessa com a morte (cônjuge 60+).',
    p: 'Limitar à 1ª instância ou encerrar a prioridade com a morte.',
  },
  {
    art: 'Arts. 96–98',
    t: 'Crimes campeões',
    k: 'Discriminar por idade e desdenhar/humilhar: reclusão 6m–1a. Apropriar-se de proventos e cartão: reclusão 1–4a.',
    p: 'Trocar reclusão por detenção no art. 96.',
  },
];

const numeros: [string, string, string][] = [
  ['60 anos', 'Conceito de pessoa idosa — art. 2º', 'EPI (Lei 10.741/2003)'],
  ['65 anos', 'Gratuidade no transporte urbano — CF, art. 230, § 2º; e BPC (LOAS)', 'CF/88 e LOAS'],
  ['¼ do SM', 'Renda familiar per capita máxima para o BPC', 'LOAS / art. 34 EPI'],
  ['2 SM', 'Teto de renda para as vagas gratuitas e o desconto no interestadual', 'Art. 41'],
  ['2 vagas', 'Gratuitas por veículo no transporte interestadual', 'Art. 41'],
  ['50%', 'Desconto na passagem interestadual (baixa renda)', 'Art. 41'],
  ['10%', 'Assentos reservados e identificados nos coletivos urbanos', 'Art. 40'],
  ['3%', 'Unidades reservadas em programas habitacionais', 'Art. 38'],
  ['R$ 500–1.000', 'Multa administrativa — em dobro na reincidência', 'Arts. 109 e ss.'],
  ['1º/10/2003', 'Publicação da Lei 10.741 (118 artigos)', 'Vigência'],
  ['Idade + elevada', 'Primeiro critério de desempate em concurso público', 'Art. 28'],
  ['P.I.I.', 'Preferencial, Imediato, Individualizado', 'Art. 3º'],
];

const crimes: [string, string, string][] = [
  ['Art. 93 — abandono', 'Detenção 6m–3a + multa', 'Lesão grave: reclusão 1–4a · morte: 2–5a'],
  ['Art. 94 — omissão de socorro', 'Detenção 6m–1a + multa', 'Resultados qualificam para reclusão'],
  ['Art. 95 — exposição a perigo', 'Detenção 2m–1a + multa', 'Degradante, priva alimentos, trabalho excessivo'],
  ['Art. 96 — discriminação', 'Reclusão 6m–1a + multa', '§ único: desdenhar/humilhar por qualquer motivo'],
  ['Arts. 97–98 — apropriação', 'Reclusão 1–4a + multa', '98: mediante cartão magnético'],
  ['Art. 102 — ordem judicial', 'Detenção 6m–1a + multa', 'Deixar de cumprir, atrasar ou frustrar'],
];

const jurisprudencia = [
  { n: 'CF, art. 230, § 2º', t: 'CF', d: '“Aos maiores de 65 anos é assegurada a gratuidade dos transportes coletivos urbanos.” O EPI (art. 39) é MAIS BENÉFICO e amplia a gratuidade para 60 anos — prevalece a norma mais favorável.' },
  { n: 'Prioridade na tramitação', t: 'STJ', d: 'A prioridade do art. 71 alcança qualquer instância e figura (parte ou interveniente), e o STJ a estende aos processos administrativos e à fase de execução — não é benefício restrito ao autor da ação.' },
  { n: 'Sobrevivência da prioridade', t: 'STJ', d: 'A prioridade NÃO cessa com a morte do idoso: estende-se ao cônjuge ou companheiro sobrevivente com 60 anos ou mais, preservando o andamento célere do feito.' },
  { n: 'Consumidor idoso', t: 'STJ', d: 'O idoso é consumidor hipossuficiente por presunção: a jurisprudência aplica o CDC com inversão do ônus da prova e proteção contra cláusulas abusivas (reajustes por faixa etária em planos de saúde).' },
  { n: 'EPI + Maria da Penha', t: 'STJ', d: 'A mulher idosa vítima de violência doméstica acumula as proteções: as medidas protetivas da Lei 11.340/2006 e os direitos e crimes do EPI incidem conjuntamente.' },
  { n: 'Tema 679 (RE 633.782)', t: 'STF', d: 'Sobre o BPC: o STF fixou teses sobre o cálculo da renda e o direito ao benefício assistencial, reforçando a proteção social da pessoa idosa e da pessoa com deficiência.' },
];

const mandamentos = [
  'Idoso = 60 anos ou mais (art. 2º). Os 65 anos são do BPC (LOAS) e da gratuidade urbana na CF (art. 230, § 2º) — réguas distintas.',
  'Prioridade absoluta (art. 3º): família, comunidade, sociedade e poder público, com atendimento PREFERENCIAL, IMEDIATO e INDIVIDUALIZADO.',
  'Saúde (art. 15): atenção integral no SUS, preferencial, DOMICILIAR para quem não se locomove, MEDICAMENTOS de uso continuado GRATUITOS e vacinação.',
  'Acompanhante (art. 17): internado ou em observação, o idoso tem direito à presença de acompanhante.',
  'Trabalho (arts. 27–28): vedado limite máximo de idade, inclusive em concursos (ressalvadas natureza e exigências do cargo); desempate = idade MAIS ELEVADA.',
  'BPC (art. 34): insuficiência de meios, nos termos da LOAS — 65 anos, renda per capita de até ¼ do SM, valor de 1 salário mínimo, sem contribuição.',
  'Transporte (arts. 39–42): urbanos 60+ grátis; 10% dos assentos identificados; interestadual 2 vagas + 50% para renda até 2 SM.',
  'Habitação (art. 38): prioridade na aquisição e 3% das unidades em programas habitacionais públicos.',
  'Acesso à Justiça (art. 71): prioridade na tramitação, em qualquer instância, como parte ou interveniente — não cessa com a morte (cônjuge/companheiro 60+).',
  'Crimes: abandonar (93, detenção 6m–3a), discriminar/desdenhar (96, reclusão 6m–1a), apropriar-se de proventos e cartão (97–98, reclusão 1–4a) e descumprir ordem judicial (102, detenção 6m–1a). Infração administrativa: multa R$ 500 a R$ 1.000, dobrada na reincidência.',
];

export default function P7Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Destaques · números · súmulas e jurisprudência"
          title={
            <>
              A tabela de números <span className="italic font-light" style={{ color: '#b8a7e9' }}>que decide a prova</span>
            </>
          }
          desc="O EPI é o estatuto dos números fixos: 60, 65, 10%, 3%, 2 vagas, 50%, 2 SM, ¼ do salário, R$ 500–1.000. Primeiro os destaques; depois a tabela completa de prazos e números, as penas dos crimes e a jurisprudência dos tribunais superiores."
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

        {/* B · tabela de números */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Hash className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Tabela de prazos e números <span className="italic font-light text-gold-3">importantes</span>
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[44rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[10rem_1fr_13rem] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#b8a7e9' }}>
                    Número
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
                    O que significa
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
                    Onde está
                  </p>
                </div>
                {numeros.map(([n, s, o], i) => (
                  <div
                    key={n}
                    className={`grid grid-cols-[10rem_1fr_13rem] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} transition-colors hover:bg-gold/[0.08]`}
                  >
                    <p className="flex items-center px-5 py-3.5 font-display text-base font-bold" style={{ color: '#7c5cbf' }}>
                      {n}
                    </p>
                    <p className="flex items-center border-l border-ink/10 px-5 py-3.5 text-[13px] leading-snug text-ink/80">{s}</p>
                    <p className="flex items-center border-l border-ink/10 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50">
                      {o}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* C · penas dos crimes */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Crimes em espécie <span className="italic font-light text-gold-3">— penas e qualificadoras</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {crimes.map(([a, p, q], i) => (
              <Reveal key={a} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-display text-base font-bold text-ink">{a}</p>
                  <p className="mt-2 rounded-lg bg-ink px-3 py-1.5 text-[12px] font-semibold text-gold-2 w-fit">{p}</p>
                  <p className="mt-3 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink/70">
                    <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-gold-3" />
                    {q}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/[0.1] to-transparent px-5 py-4 text-sm leading-relaxed text-ink/75">
              <Info className="mt-0.5 size-5 shrink-0 text-gold-3" />
              <span>
                Todos os crimes do EPI são de <strong>AÇÃO PENAL PÚBLICA INCONDICIONADA</strong>, e a esfera penal é
                independente da civil e da administrativa. O crime do art. 96 é o mais cobrado: <strong>reclusão</strong>{' '}
                (e não detenção) — e o parágrafo único alcança quem <em>desdenha, humilha, despreza ou discrimina por
                qualquer motivo</em>.
              </span>
            </p>
          </Reveal>
        </div>

        {/* D · súmulas e jurisprudência */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <BookMarked className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Súmulas e jurisprudência <span className="italic font-light text-gold-3">— STF e STJ</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {jurisprudencia.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-base font-bold leading-tight text-ink">{s.n}</p>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[9px] font-bold"
                      style={{ backgroundColor: s.t === 'CF' ? '#2f6fb41a' : '#991b1b1a', color: s.t === 'CF' ? '#2f6fb4' : '#991b1b' }}
                    >
                      {s.t}
                    </span>
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* E · entendimentos */}
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
