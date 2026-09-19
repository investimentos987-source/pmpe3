import { SectionHead, Reveal } from '../fx';
import { Star, Landmark, BookMarked, ArrowRight, Info } from 'lucide-react';

const destaques = [
  {
    art: 'Art. 1º',
    t: 'Definição de discriminação racial',
    k: 'Distinção, exclusão, restrição ou PREFERÊNCIA por raça, cor, descendência ou origem nacional/étnica, por finalidade ou efeito, na vida pública.',
    p: 'Suprimir a “preferência” — é a principal diferença do art. 1º da CEDAW.',
  },
  {
    art: 'Art. 1º, §4º',
    t: 'Ação afirmativa',
    k: 'Medidas especiais para progresso adequado NÃO são discriminação racial, desde que não mantenham direitos separados e não se prolonguem após a meta.',
    p: 'Dizer que cotas são discriminação reversa — a Convenção as autoriza expressamente.',
  },
  {
    art: 'Art. 4º',
    t: 'Organizações racistas',
    k: 'Criminalizar a propaganda racista, a incitação, a violência e a PARTICIPAÇÃO em organizações que promovam a discriminação.',
    p: 'Liberdade de expressão não protege discurso racista (HC 82.424 — caso Ellwanger).',
  },
  {
    art: 'Art. 5º',
    t: 'Rol de direitos',
    k: 'Civis, políticos, econômicos, sociais e culturais + acesso a todo lugar público (transportes, hotéis, cafés, cinemas, parques).',
    p: 'Restringir o art. 5º aos direitos civis e políticos esquecendo os sociais.',
  },
  {
    art: 'Art. 6º',
    t: 'Recursos efetivos',
    k: 'Tribunais NACIONAIS primeiro: proteção efetiva e reparação justa adequada pela discriminação sofrida.',
    p: 'Afirmar via direta ao Comitê CERD sem esgotar a via interna.',
  },
  {
    art: 'Art. 7º',
    t: 'Educação contra o preconceito',
    k: 'Ensino, educação, cultura e informação para combater preconceitos e promover compreensão, tolerância e amizade.',
    p: 'Reduzir a ação estatal a repressão penal esquecendo a face educativa.',
  },
  {
    art: 'Arts. 8 a 14',
    t: 'Comitê CERD e petição individual',
    k: '18 peritos, 4 anos, relatórios a cada 2 anos. Petição individual só com DECLARAÇÃO do Estado (o Brasil fez em 2003, Dec. 4.738).',
    p: 'Confundir 18 peritos com os 23 da CEDAW; ou tratar a petição como automática.',
  },
  {
    art: 'Arts. 17 a 25',
    t: 'Vigência e Brasil',
    k: 'Vigência em 4/1/1969 (após a 12ª ratificação + 30 dias). Brasil: Decreto 65.810/1969 — norma SUPRALEGAL.',
    p: 'Trocar o decreto/ano ou a exigência de ratificações (é a 12ª, não a 20ª).',
  },
];

const normasBR = [
  ['CF, art. 5º, XLII', 'Racismo: crime INAFIANÇÁVEL e IMPRESCRITÍVEL, sujeito à pena de reclusão.', '#c11f5d'],
  ['Lei 7.716/1989', 'Define os crimes de PRECONCEITO de raça ou de cor (o “crime de racismo”), com pena de detenção/reclusão. Alterada pela Lei 14.532/2023 para incluir a discriminação por RELIGIÃO (reclusão de 2 a 5 anos + multa).', '#0f766e'],
  ['CP, art. 140, §3º', 'INJÚRIA QUALIFICADA POR RACISMO: ofensa à honra individual motivada por raça/cor/etnia — prescreve normalmente e admite fiança (não é o mesmo que racismo).', '#7c3aed'],
  ['Estatuto da Igualdade Racial', 'Lei 12.288/2010: norma de natureza programática e políticas públicas — conceitos de igualdade de oportunidades, políticas setoriais, quilombolas, saúde, educação e cultura.', '#2f6fb4'],
  ['Lei 10.639/2003', 'Ensino obrigatório da história e cultura AFRO-BRASILEIRA e AFRICANA nas escolas — execução do art. 7º da Convenção.', '#c19a3d'],
  ['Convenção Interamericana', 'Pacto de San José (Decreto 678/1992): Brasil tardou a ratificar completamente a jurisdição da Corte IDH apenas em 1998. Não confunda com o CERD: aqui conta a Corte Interamericana.', '#0e7490'],
];

const jurisprudencia = [
  { n: 'CF, art. 5º, XLII', t: 'CF', d: '“A prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei.” É a única infração do rol do art. 5º com imprescritibilidade expressa.' },
  { n: 'HC 82.424', t: 'STF · 2004', d: 'Caso Ellwanger: publicação anti-semita vendida em distribuidora não é exercício legítimo da liberdade de expressão. A Convenção do art. 4º obriga a criminalização da propaganda racista; dignidade humana e igualdade prevalecem.' },
  { n: 'Injúria × racismo', t: 'STF/STJ', d: 'A injúria qualificada por racismo (CP, art. 140, §3º) é distinta do crime de racismo: a primeira afronta a HONRA SUBJETIVA DE UMA VÍTIMA e é punida pela legislação penal comum — prescreve; o racismo atinge a COLETIVIDADE e é inafiançável e imprescritível.' },
  { n: 'Simone André Diniz', t: 'Corte IDH · 2006', d: 'Trabalhadora doméstica negra sofreu discriminação em processo seletivo. Brasil reconheceu a violação, indenizou e se comprometeu a políticas públicas — paradigma de responsabilidade por discriminação no emprego e primeira vitória em solução amistosa em caso de racismo individual na Corte IDH.' },
  { n: 'RE 992.597', t: 'STF · Tema 1193', d: 'A discriminação em razão de cor recorrente no ambiente de trabalho configura ofensa à dignidade admitindo responsabilidade civil objetiva com indenização proporcional — a magnitude da sanção deve ter caráter pedagógico e dissuasório.' },
  { n: 'ADPF 186', t: 'STF · 2012', d: 'STF validou as cotas étnico-raciais em universidades como medidas especiais e temporárias para igualdade de fato — exatamente o modelo dos arts. 1º, §4º, e 2º, §2º, da CIEFDR.' },
];

const mandamentos = [
  'CIEFDR: Resolução 2106 A (XX), de 21/12/1965; em vigor em 4/1/1969; promulgada no Brasil pelo Decreto 65.810/1969 (ritmo ordinário → supralegal).',
  'Definição do art. 1º: DISTINÇÃO, EXCLUSÃO, RESTRIÇÃO ou PREFERÊNCIA por raça, cor, descendência ou origem nacional/étnica, em plano de igualdade, na VIDA PÚBLICA. A CEDAW não tem “preferência” — não misture.',
  'O §4º do art. 1º e o §2º do art. 2º validam as medidas especiais (ações afirmativas): não são discriminação racial se precárias e sem direitos separados.',
  'O art. 4º exige a criminalização da propaganda racista e da própria PARTICIPAÇÃO em organizações racistas — liberdade de expressão não a protege (HC 82.424).',
  'Art. 5º reúne civis, políticos, econômicos e sociais, e a alínea “f” garante acesso a qualquer lugar público — café, cinema, parque e transporte.',
  'Art. 6º: recursos efetivos e reparação começam nos tribunais NACIONAIS; o Comitê só recebe após o esgotamento interno.',
  'Comitê CERD: 18 peritos independentes, 4 anos, relatórios de 2 em 2 anos (CEDAW: 23 peritos, 1 + 4; Criança: 18 peritos, 2 + 5).',
  'A petição individual é FACULTATIVA (art. 14) e depende de declaração estatal — o Brasil a fez pelo DECRETO 4.738/2003.',
  'Nacionalidade e religião não são a mesma coisa: a Convenção cobre discriminação por “origem nacional ou étnica” (critério racial), e não por religião em si — mas o contexto racial pode englobar perseguição a identidades étnicas religiosas.',
  'Brasil: racismo inafiançável e imprescritível (CF, XLII); injúria racial prescreve; discriminação religiosa foi tipificada pela Lei 14.532/2023, sem inafiançamento nem imprescritibilidade.',
];

export default function P6Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Destaques · direito brasileiro · jurisprudência"
          title={
            <>
              Do art. 1º ao{' '}
              <span className="italic font-light" style={{ color: '#e8a36b' }}>
                racismo inafiançável
              </span>
            </>
          }
          desc="Primeiro os artigos que decidem a questão; depois a ponte com o direito penal brasileiro — onde a maioria dos candidatos erra — e as súmulas e julgados marcantes sobre racismo."
        />

        {/* A · destaques */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {destaques.map((d, i) => (
            <Reveal key={d.art} delay={(i % 4) * 0.06}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_26px_60px_-35px_rgba(193,154,61,0.6)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ink px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gold-2">
                    {d.art}
                  </span>
                  <Star className="size-4 fill-gold text-gold" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">{d.t}</h3>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/70">{d.k}</p>
                <div className="mt-4 rounded-xl border-l-[3px] border-brick/60 bg-brick/[0.06] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/70">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-brick">pegadinha · </span>
                  {d.p}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* B · CIEFDR no Brasil */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Da Convenção ao Código Penal <span className="italic font-light text-gold-3">— não troque os institutos</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {normasBR.map(([a, b, hex], i) => (
              <Reveal key={a} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-2xl border bg-white p-5 transition-transform duration-300 hover:-translate-y-1" style={{ borderColor: `${hex}30` }}>
                  <div className="flex items-center gap-3">
                    <span className="size-2.5 rounded-full" style={{ backgroundColor: hex }} />
                    <p className="font-display text-lg font-semibold text-ink">{a}</p>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink/70 flex items-start gap-2.5">
                    <ArrowRight className="mt-0.5 size-4 shrink-0" style={{ color: hex }} />
                    {b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-brick/30 bg-brick/[0.07] px-5 py-4 text-sm leading-relaxed text-ink/75">
              <Info className="mt-0.5 size-5 shrink-0 text-brick" />
              <span>
                <strong className="text-brick">A confusão mortal:</strong> “racismo” (Lei 7.716, art. 20: ofensa
                coletiva → inafiançável e imprescritível), “injúria racial” (CP: honra individual → prescreve) e
                “discriminação religiosa” (Lei 7.716 após 2023: nem inafiançável nem imprescritível). As bancas trocam
                intencionalmente os três institutos. Ademais, a desgraça comum ao crime de racismo é a RECLUSÃO
                (princípio de proporcionalidade, não detenção).
              </span>
            </p>
          </Reveal>
        </div>

        {/* C · jurisprudência */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <BookMarked className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Súmulas e julgados <span className="italic font-light text-gold-3">sobre racismo</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {jurisprudencia.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-base font-bold text-ink">{s.n}</p>
                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[9px] font-bold"
                      style={{ backgroundColor: '#0e74901a', color: '#0e7490' }}
                    >
                      {s.t}
                    </span>
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-6 rounded-3xl border border-gold/40 bg-gradient-to-r from-gold/[0.1] to-transparent p-6">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gold-3">
                Distinção final cobrada: discriminação racial × cor/origem
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                A Convenção menciona raça, cor, DESCENDÊNCIA e origem nacional OU ÉTNICA. Assim, trata-se de um único
                eixo (o critério racial-étnico), não de espécies separadas: discriminar por “cor” ou por “origem” é
                forma de discriminação racial. Já a <strong>religião</strong> não é critério da Convenção (religião tem
                Declaração própria — Parte 2), embora identidades étnicas frequentemente se confundam com filiações
                religiosas. No Brasil, a Lei 14.532/2023 passou a punir como preconceito também a discriminação por
                religião na Lei 7.716/89 — mas sem inafiançamento nem imprescritibilidade.
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
