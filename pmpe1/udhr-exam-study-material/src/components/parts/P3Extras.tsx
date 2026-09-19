import { SectionHead, Reveal } from '../fx';
import { Star, Landmark, HeartHandshake, ArrowRight } from 'lucide-react';

const destaques = [
  { art: 'Art. 1º', t: 'Definição de discriminação', k: 'Distinção, exclusão ou restrição por sexo — efeito OU finalidade, casada ou solteira.', p: 'Sem “preferência”: quem espelha a Declaração racial/religiosa erra.' },
  { art: 'Art. 4º', t: 'Medidas especiais temporárias', k: 'Ação afirmativa para acelerar a igualdade DE FATO; cessa ao atingir o objetivo. Maternidade protegida tem parágrafo próprio.', p: 'Não é “discriminação reversa” nem medida permanente.' },
  { art: 'Arts. 7º–8º', t: 'Direitos políticos', k: 'Votar, ser eleita, formular políticas, ocupar qualquer cargo, participar de ONGs (7º); representar o país e organismos internacionais (8º).', p: 'A alínea das ONGs é a que as bancas “esquecem”.' },
  { art: 'Art. 9º', t: 'Nacionalidade', k: 'Autonomia: casar com estrangeiro não muda; nem a troca do marido. Igualdade na transmissão aos filhos.', p: 'Nada de nacionalidade automática pelo casamento.' },
  { art: 'Art. 10', t: 'Educação', k: 'Currículos, exames, bolsas e esporte iguais; fim dos estereótipos; combate à evasão; info de planejamento familiar.', p: 'A CEDAW não incentiva escolas separadas por sexo.' },
  { art: 'Art. 11º', t: 'Emprego', k: 'Salário igual também para trabalho de IGUAL VALOR; veda dispensa por gravidez/estado civil; licença paga; creches.', p: '“Mesmo cargo” ≠ “igual valor” — a FGV cobra a diferença.' },
  { art: 'Art. 12º', t: 'Saúde', k: 'Acesso igual + planejamento familiar; gravidez, parto E pós-parto, gratuitos quando necessário, com nutrição.', p: 'Cortar o planejamento familiar ou o puerpério é o erro armado.' },
  { art: 'Art. 14', t: 'Mulheres das zonas rurais', k: 'Pioneiro entre os tratados de DH: planejamento do desenvolvimento, saúde, cooperativas, crédito e saneamento.', p: 'Não é só voto nem só herança: é socioeconômico e amplo.' },
  { art: 'Art. 16', t: 'Família e casamento', k: 'Igualdade total — guarda, sobrenome, propriedade, número e espaçamento dos filhos; casamento infantil SEM efeito legal.', p: 'Guarda não “segue automaticamente a mãe”: é simetria.' },
];

const normaBR = [
  ['CEDAW', 'Ratificada em 1984 (rito ordinário, pré-EC 45/2004) → status SUPRALEGAL (STF).'],
  ['Protocolo Facultativo (1999)', 'Promulgado pelo Decreto 4.377/2002 — queixas individuais ao Comitê.'],
  ['GR 19/1992 (violência = discriminação)', 'Fundamenta a Lei Maria da Penha (Lei 11.340/2006) junto à Convenção de Belém do Pará (1994, BR 1995).'],
  ['Art. 4º (medidas especiais)', 'Cotas de candidaturas: Lei 9.504/97 — mínimo de 30% e máximo de 70% por sexo.'],
  ['Art. 11º (trabalho e salário)', 'CF art. 7º, XXX, e Lei 14.611/2023 (igualdade salarial e critérios remuneratórios).'],
  ['Art. 12º/16º (saúde e planejamento)', 'CF art. 226, §7º: planejamento familiar é livre decisão do casal.'],
  ['Devida diligência (violência)', 'Lei 13.104/2015: feminicídio como crime autônomo no CP.'],
  ['DUDH + CF', 'Art. 5º, I: “homens e mulheres são iguais em direitos e obrigações”.'],
];

const mandamentos = [
  'A CEDAW é CONVENÇÃO (Res. 34/180, 18/12/1979): tratado vinculante — nada de “decisão meramente recomendatória”. Vigência: 3/9/1981.',
  'Definição do art. 1º: distinção, exclusão ou restrição — SEM preferência — por efeito OU finalidade, independentemente do estado civil.',
  'Medidas especiais temporárias (art. 4º) e proteção à maternidade (§2º) NÃO são discriminação.',
  'Comitê CEDAW (art. 17): 18 → 23 peritos independentes, 4 anos; monitora por relatórios (1 + 4) e recomendações gerais — não é tribunal.',
  'Violência doméstica não consta do TEXTO: cobertura via GR 19/1992 e GR 35/2017; norma dura é a Convenção de Belém do Pará + LMP.',
  'Art. 11º exige igualdade salarial também para trabalho de IGUAL VALOR (não apenas função idêntica).',
  'Art. 14 (mulheres rurais) e art. 16 (família; casamento infantil sem efeito legal) são os “queridinhos” das bancas.',
  'Reservas (art. 28): permitidas, desde que compatíveis com o objeto e propósito — e a CEDAW é campeã de reservas.',
  'Brasil: ratificação de 1984 → norma SUPRALEGAL; Protocolo Facultativo, Decreto 4.377/2002; LMP invoca CEDAW + Belém do Pará na própria ementa.',
  'A Convenção exige ação positiva contra a discriminação privada (art. 2º) e a mudança dos padrões culturais e estereótipos (art. 5º).',
];

export default function P3Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Destaques especiais + CEDAW no Brasil"
          title={
            <>
              Os 9 artigos que{' '}
              <span className="italic font-light" style={{ color: '#c11f5d' }}>
                dominam as provas
              </span>
            </>
          }
          desc="O núcleo estratégico da Convenção em formato de revisão: o kernel de cada artigo campeão e a pegadinha que o acompanha. Depois, a ponte obrigatória com o direito brasileiro."
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

        {/* B · CEDAW no Brasil */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <HeartHandshake className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Da Convenção à Lei Maria da Penha <span className="italic font-light text-gold-3">— a ponte que a banca cobra</span>
              </h3>
            </div>
          </Reveal>

          <Reveal>
            <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-paper md:p-10">
              <div className="grid items-start gap-8 lg:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-2">
                    Lei 11.340/2006 · por dentro da ementa
                  </p>
                  <blockquote className="mt-5 font-display text-xl md:text-2xl font-light italic leading-snug text-paper/90">
                    “Cria mecanismos para coibir a violência doméstica e familiar contra a mulher, nos termos do art.
                    226, §8º, da Constituição Federal, da{' '}
                    <span className="not-italic font-semibold text-gold-2">Convenção sobre a Eliminação de Todas as Formas
                    de Discriminação contra a Mulher</span> e da{' '}
                    <span className="not-italic font-semibold text-gold-2">Convenção Interamericana para Prevenir,
                    Punir e Erradicar a Violência contra a Mulher</span> [...]”
                  </blockquote>
                  <p className="mt-5 text-sm leading-relaxed text-paper/65">
                    Leitura de banca: a LMP tem <strong>três</strong> patamares — constitucional (art. 226, §8º),
                    universal (CEDAW, com a GR 19/1992) e regional (<strong>Convenção de Belém do Pará</strong>, 1994,
                    ratificada pelo Brasil em 1995). Questão que omitir um dos dois pilares internacionais está errada
                    pela metade.
                  </p>
                </div>
                <div className="rounded-3xl border border-paper/12 bg-paper/[0.04] p-6">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-paper/50">
                    O que a LMP trouxe (e conecta ao texto)
                  </p>
                  <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-paper/70">
                    <li className="flex gap-2.5"><ArrowRight className="mt-0.5 size-4 shrink-0 text-gold-2" /> Art. 5º: violência como “ação ou omissão baseada no gênero” — é a definição da CEDAW (art. 1º) + GR 19 aplicadas.</li>
                    <li className="flex gap-2.5"><ArrowRight className="mt-0.5 size-4 shrink-0 text-gold-2" /> Medidas protetivas de urgência — devida diligência exigida pela Belém do Pará.</li>
                    <li className="flex gap-2.5"><ArrowRight className="mt-0.5 size-4 shrink-0 text-gold-2" /> Juizados/Varas especializadas e assistência integral — realização dos arts. 2º e 11º-12º da Convenção.</li>
                    <li className="flex gap-2.5"><ArrowRight className="mt-0.5 size-4 shrink-0 text-gold-2" /> Proteção independente de estado civil/convivência: lésbicas e trans incluídas pela leitura de “mulher” na LMP (STJ/STF).</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* tabela norma BR */}
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
              <div className="grid grid-cols-[1fr] border-b border-ink/10 bg-ink text-paper md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
                <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2 md:px-6">
                  Instrumento brasileiro
                </p>
                <p className="hidden border-l border-paper/10 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] md:block" style={{ color: '#f0a5c0' }}>
                  Como se conecta à CEDAW
                </p>
              </div>
              {normaBR.map(([a, b], i) => (
                <div
                  key={a}
                  className={`grid grid-cols-[1fr] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} transition-colors hover:bg-gold/[0.07]`}
                >
                  <p className="flex items-center gap-2 px-5 py-4 text-sm font-semibold text-ink md:border-r md:border-ink/10 md:px-6">
                    <Landmark className="size-4 shrink-0 text-gold-3" />
                    {a}
                  </p>
                  <p className="flex items-center border-t border-dashed border-ink/10 px-5 py-4 text-[13px] leading-relaxed text-ink/70 md:border-t-0 md:px-6">
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* C · entendimentos */}
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
