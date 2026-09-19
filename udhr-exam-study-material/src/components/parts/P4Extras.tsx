import { SectionHead, Reveal } from '../fx';
import { Star, Scale, Landmark, GitCompareArrows } from 'lucide-react';

const destaques = [
  {
    art: 'Art. 1º',
    t: 'Definição de criança',
    k: 'Menor de 18 anos — régua ÚNICA —, salvo se a maioridade for atingida antes pela lei aplicável.',
    p: 'A CDC não usa a palavra “adolescente”: quem separa criança (até 12 incompletos) e adolescente (12–18) é o ECA.',
  },
  {
    art: 'Art. 3º',
    t: 'Melhor interesse',
    k: 'Consideração PRIMORDIAL em todas as medidas — públicas, privadas, judiciais, administrativas e legislativas.',
    p: '“Primordial” ≠ “única/absoluta”. Só na adoção (art. 21) o interesse vira consideração máxima.',
  },
  {
    art: 'Art. 8º',
    t: 'Identidade',
    k: 'Preservar nacionalidade, nome e RELAÇÕES FAMILIARES — e dever do Estado de restabelecê-los quando usurpados.',
    p: 'Identidade não é só o nome; e o §2º impõe restabelecimento ativo (o “artigo argentino”).',
  },
  {
    art: 'Art. 9º',
    t: 'Separação dos pais',
    k: 'Exceção com revisão judicial e melhor interesse; direito a contato direto e regular com AMBOS os pais.',
    p: 'Pobreza jamais é motivo de separação (no Brasil, art. 23 do ECA é expresso).',
  },
  {
    art: 'Arts. 13–15',
    t: 'Expressão, religião e associação',
    k: 'Expressão sem fronteiras (13); fé da criança com orientação dos pais (14); associação e reunião pacíficas (15).',
    p: 'Não confunda o art. 12 (ser ouvida no processo) com o art. 13 (liberdade de expressão em geral).',
  },
  {
    art: 'Arts. 32–36',
    t: 'Proteção contra exploração',
    k: 'Trabalho (32), drogas (33), sexual (34), sequestro/venda/tráfico (35) e a cláusula residual (36).',
    p: 'O art. 32 NÃO fixa idade mínima em número — manda cada Estado fixá-la.',
  },
  {
    art: 'Arts. 37–40',
    t: 'Crianças em conflito com a lei',
    k: 'Sem morte nem perpétua sem livramento; privação como último recurso e pelo menor tempo (37); devido processo, duplo grau e desjudicialização (40).',
    p: 'A Convenção não proíbe privar de liberdade — excepcionaliza; e não fixa idade de responsabilidade penal.',
  },
  {
    art: 'Arts. 43–44',
    t: 'Comitê e relatórios',
    k: '18 peritos independentes (eram 10), mandato de 4 anos; relatórios “2 + 5”.',
    p: 'Não troque com a CEDAW: lá são 23 peritos e relatórios “1 + 4”.',
  },
  {
    art: 'Art. 41',
    t: 'Norma mais favorável',
    k: 'Se a lei interna protege mais, prevalece a lei interna — a Convenção é piso, não teto.',
    p: 'É por isso que o ECA, mais detalhado, se aplica sem conflito com a Convenção.',
  },
];

const comparativo: [string, string, string][] = [
  ['Natureza', 'Tratado internacional (Res. 44/25, ONU) — vinculante entre Estados', 'Lei ordinária federal (Lei 8.069/1990) — norma interna brasileira'],
  ['Data', 'Adotada em 20/11/1989; vigor internacional em 2/9/1990', 'Sancionado em 13/7/1990; vigor a partir de outubro de 1990'],
  ['Status no Brasil', 'Supralegal (Dec. 99.710/1990 — rito ordinário, pré-EC 45/2004)', 'Legal (abaixo da CF e da própria Convenção)'],
  ['Faixa etária', 'Criança = todo ser humano menor de 18 anos (régua única)', 'Criança até 12 anos incompletos; adolescente de 12 a 18 anos (art. 2º)'],
  ['Terminologia', 'Usa apenas “criança” (child)', 'Distingue criança e adolescente em todo o texto'],
  ['Doutrina', 'Consagra a proteção integral e a criança como sujeito de direitos', 'Mesma doutrina, já anunciada pelo art. 227 da CF/88'],
  ['Ato infracional', 'Fixa garantias (arts. 37 e 40), mas não define idade penal nem medidas', 'Detalha o rito e as 6 medidas socioeducativas (arts. 103 a 128)'],
  ['Prioridade absoluta', 'Interesse maior como consideração primordial (art. 3º)', 'Prioridade absoluta expressa e detalhada (art. 4º, parágrafo único)'],
  ['Monitoramento', 'Comitê da ONU: relatórios “2 + 5” e recomendações', 'Conselhos de Direitos e Conselhos Tutelares; MP e Judiciário'],
  ['Sanções', 'Sem sanção jurídica direta: constrangimento internacional', 'Prevê crimes e infrações administrativas (arts. 225 a 258-C)'],
];

const mandamentos = [
  'Adotada pela Res. 44/25, em 20/11/1989, POR CONSENSO; em vigor internacional em 2/9/1990. É o tratado de DH mais ratificado do mundo (196 Estados) — os EUA assinaram, mas não ratificaram.',
  'É CONVENÇÃO (vinculante), e não declaração: no Brasil, ratificada em 24/9/1990 e promulgada pelo Decreto 99.710/1990, com status SUPRALEGAL.',
  'Art. 1º: criança é todo menor de 18 anos, salvo maioridade antecipada pela lei aplicável — a divisão criança/adolescente é do ECA, não da Convenção.',
  'Os 4 princípios são “2-3-6-12”: não discriminação, melhor interesse, vida/sobrevivência/desenvolvimento e participação.',
  'No art. 3º o interesse da criança é consideração PRIMORDIAL; apenas na adoção (art. 21) é elevado a consideração máxima.',
  'Art. 12: a criança é ouvida e sua opinião pesa conforme idade e maturidade — mas nunca vincula a autoridade.',
  'Art. 37: proibidas pena de morte e perpétua SEM possibilidade de livramento para fatos anteriores aos 18; privação de liberdade é último recurso, pelo menor tempo e com separação dos adultos.',
  'Art. 32 e art. 40 não trazem números: idade mínima para trabalho e idade de responsabilidade penal são fixadas por cada Estado (no Brasil, 16/14-aprendiz e 18 anos).',
  'Art. 38 opera com 15 anos — única exceção etária do texto —, corrigida para 18 pelo Protocolo Facultativo de 2000 (Dec. 5.006/2004).',
  'Comitê (art. 43): 10 → 18 peritos independentes, mandato de 4 anos; relatórios em “2 + 5” (art. 44). E o art. 41 garante que a norma interna mais favorável prevalece.',
];

export default function P4Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Destaques especiais + Convenção × ECA"
          title={
            <>
              Os artigos que{' '}
              <span className="italic font-light" style={{ color: '#2f6fb4' }}>
                decidem a questão
              </span>
            </>
          }
          desc="Primeiro o núcleo duro da Convenção em formato de revisão rápida; depois, o comparativo que as bancas brasileiras adoram: onde a Convenção e o ECA se encontram — e onde se separam."
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

        {/* B · comparativo com o ECA */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <GitCompareArrows className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Convenção <span className="italic font-light text-gold-3">×</span> ECA — o comparativo definitivo
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border p-7" style={{ borderColor: '#2f6fb455', background: 'linear-gradient(135deg, rgba(47,111,180,0.10), transparent)' }}>
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl text-paper" style={{ backgroundColor: '#2f6fb4' }}>
                    <Scale className="size-6" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: '#2f6fb4' }}>
                      Plano internacional
                    </p>
                    <h4 className="font-display text-2xl md:text-3xl font-semibold text-ink">Convenção (1989)</h4>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  54 artigos, linguagem principiológica e universal. Fixa o <strong>piso mínimo</strong> que todo
                  Estado-parte deve garantir — e deixa a cada país o detalhamento.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border p-7" style={{ borderColor: '#0f766e55', background: 'linear-gradient(135deg, rgba(15,118,110,0.10), transparent)' }}>
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-teal text-paper">
                    <Landmark className="size-6" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal">Plano interno</p>
                    <h4 className="font-display text-2xl md:text-3xl font-semibold text-ink">ECA — Lei 8.069/1990</h4>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  267 artigos de regulamentação minuciosa: conselhos, medidas protetivas, socioeducativas, crimes e
                  procedimentos. É a Convenção <strong>traduzida em engrenagem</strong>.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-6 overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
              <div className="grid grid-cols-[6.5rem_1fr] border-b border-ink/10 bg-ink text-paper md:grid-cols-[11rem_1fr_1fr]">
                <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 md:px-6">Critério</p>
                <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] md:px-6" style={{ color: '#7cc0f5' }}>
                  Convenção (1989)
                </p>
                <p className="hidden border-l border-paper/10 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] md:block" style={{ color: '#5eead4' }}>
                  ECA (1990)
                </p>
              </div>
              {comparativo.map(([crit, conv, eca], i) => (
                <div
                  key={crit}
                  className={`grid grid-cols-[6.5rem_1fr] md:grid-cols-[11rem_1fr_1fr] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} transition-colors hover:bg-gold/[0.08]`}
                >
                  <p className="flex items-center px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/50 md:px-6">
                    {crit}
                  </p>
                  <p className="flex items-start border-l border-ink/10 px-5 py-4 text-[13px] font-medium leading-snug text-ink md:px-6">
                    <span className="mr-2.5 mt-1.5 inline-block size-1.5 shrink-0 rounded-full" style={{ backgroundColor: '#2f6fb4' }} />
                    {conv}
                  </p>
                  <p className="col-start-2 flex items-start border-l border-t border-dashed border-ink/10 px-5 py-4 text-[13px] leading-snug text-ink/70 md:col-start-3 md:border-t-0 md:px-6 md:text-ink">
                    <span className="mr-2.5 mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-teal" />
                    {eca}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.1] to-transparent p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gold-3">
                  A pergunta que sempre vem
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                  “O ECA contraria a Convenção ao criar a categoria adolescente?” <strong>Não.</strong> Pelo art. 41,
                  prevalece a norma mais favorável: o ECA detalha e amplia a proteção dentro da mesma faixa dos 18
                  anos. Convenção e ECA são complementares — a régua etária final é idêntica.
                </p>
              </div>
              <div className="rounded-3xl border border-brick/35 bg-brick/[0.06] p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brick">
                  Ordem cronológica (cai muito)
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                  CF/88 (art. 227) → <strong>ECA em 13/7/1990</strong> → ratificação brasileira em{' '}
                  <strong>24/9/1990</strong> → Decreto 99.710 em 21/11/1990. Ou seja: o ECA foi publicado{' '}
                  <em>antes</em> da promulgação interna da Convenção — embora inspirado por ela.
                </p>
              </div>
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
