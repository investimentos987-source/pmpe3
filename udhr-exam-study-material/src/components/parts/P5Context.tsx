import { Reveal, SectionHead } from '../fx';
import {
  Landmark,
  Flame,
  BookOpen,
  Scale,
  Gavel,
  Baby,
  ShieldCheck,
  Layers,
  ScrollText,
  AlertTriangle,
} from 'lucide-react';

const estrutura = [
  { t: 'Título I', s: 'Disposições preliminares', a: 'arts. 1º a 6º', hex: '#c19a3d' },
  { t: 'Título II', s: 'Direitos fundamentais (5 capítulos)', a: 'arts. 7º a 69', hex: '#c11f5d' },
  { t: 'Título III', s: 'Da prevenção (geral e especial)', a: 'arts. 70 a 85', hex: '#4b5563' },
];

const capitulos = [
  ['Cap. I', 'Vida e saúde', 'arts. 7º–14'],
  ['Cap. II', 'Liberdade, respeito e dignidade', 'arts. 15–18-B'],
  ['Cap. III', 'Convivência familiar e comunitária', 'arts. 19–52-D'],
  ['Cap. IV', 'Educação, cultura, esporte e lazer', 'arts. 53–59'],
  ['Cap. V', 'Profissionalização e proteção no trabalho', 'arts. 60–69'],
];

const doutrinas = [
  {
    t: 'Situação irregular',
    sub: 'Código de Menores (1979) — REVOGADO',
    hex: '#b04a3c',
    itens: [
      '“Menor” como OBJETO de tutela do Estado.',
      'Lei dirigida apenas ao menor carente, abandonado ou infrator.',
      'Juiz de Menores com poder quase ilimitado e discricionário.',
      'Internação como resposta à pobreza; sem contraditório pleno.',
      'Não distinguia carência social de conduta infracional.',
    ],
  },
  {
    t: 'Proteção integral',
    sub: 'CF/88 (art. 227) + Convenção ONU + ECA',
    hex: '#0f766e',
    itens: [
      'Criança e adolescente como SUJEITOS de direitos (art. 15).',
      'Lei universal: vale para TODAS as crianças, sem rótulo.',
      'Prioridade absoluta e corresponsabilidade (art. 4º).',
      'Pobreza não autoriza afastamento familiar (art. 23).',
      'Descentralização e participação: Conselhos e municipalização.',
    ],
  },
];

const timeline = [
  { ano: '1927', titulo: 'Código Mello Mattos', desc: 'Primeiro Código de Menores da América Latina — doutrina do “menor em situação irregular”.' },
  { ano: '1979', titulo: 'Código de Menores', desc: 'Lei 6.697/79 consolida a situação irregular; o “menor” é objeto de intervenção, não sujeito.' },
  { ano: '1988', titulo: 'CF, art. 227', desc: 'A Constituição adota a proteção integral e a prioridade absoluta — matriz do ECA.' },
  { ano: '1989', titulo: 'Convenção da ONU', desc: 'Parte 4 da coleção: o tratado que inspira a redação do Estatuto brasileiro.' },
  { ano: '13/07/1990', titulo: 'Nasce o ECA', desc: 'Lei 8.069/90 revoga o Código de Menores e inaugura o sistema de garantia de direitos.' },
  { ano: '2009', titulo: 'Lei Nacional da Adoção', desc: 'Lei 12.010/09 reformula convivência familiar, cadastros e prazos de acolhimento.' },
  { ano: '2014', titulo: 'Lei Menino Bernardo', desc: 'Lei 13.010/14 insere os arts. 18-A, 18-B, 70-A e 70-B: educação sem castigo físico.' },
  { ano: '2016–17', titulo: 'Primeira Infância e Lei 13.509', desc: 'Marco Legal da Primeira Infância (13.257/16) e nova reforma da adoção (13.509/17).' },
];

export default function P5Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto · doutrina · estrutura do Livro I"
          title={
            <>
              A Convenção de 1989{' '}
              <span className="italic font-light" style={{ color: '#0f766e' }}>
                virou lei brasileira
              </span>
            </>
          }
          desc="Depois de quatro documentos internacionais, a coleção desce ao direito interno. O ECA é a tradução nacional da proteção integral — e o estatuto mais cobrado em concursos de todas as cinco bancas. Esta Parte 5-A cobre o Livro I (Parte Geral): arts. 1º ao 85."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                Por mais de sessenta anos o Brasil tratou sua infância pobre pela lógica do “menor”: o Código Mello Mattos (1927) e o Código de Menores (1979) organizavam-se em torno da DOUTRINA DA SITUAÇÃO IRREGULAR, que não via sujeitos de direitos, e sim objetos de intervenção. Carência material, abandono e ato infracional eram tratados na mesma prateleira, e o Juiz de Menores decidia com discricionariedade quase absoluta.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                A virada veio com o <strong className="font-semibold text-ink">art. 227 da Constituição de 1988</strong>, redigido sob influência direta dos trabalhos que resultariam na Convenção da ONU de 1989 (nossa Parte 4). Em 13 de julho de 1990, a <strong className="font-semibold text-ink">Lei 8.069</strong> revogou o Código de Menores e inaugurou a DOUTRINA DA PROTEÇÃO INTEGRAL: toda criança e todo adolescente, sem exceção, passam a ser sujeitos de direitos, com prioridade absoluta e corresponsabilidade da família, da comunidade, da sociedade e do poder público.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Um detalhe cronológico que as bancas adoram: o <strong className="font-semibold text-ink">ECA (13/7/1990) é anterior à promulgação interna da Convenção</strong> (Decreto 99.710, de 21/11/1990) — foi escrito sob inspiração do texto internacional ainda em tramitação. O Livro I, objeto desta parte, é a “parte geral”: define conceitos, enuncia os direitos fundamentais e fecha com as regras de prevenção. O Livro II (parte especial), com política de atendimento, medidas protetivas, ato infracional, Conselho Tutelar, acesso à justiça e crimes, fica para a Parte 5-B.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que o Livro I cai tanto?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Art. 2º e art. 4º: presença quase garantida em qualquer prova.',
                    'Conceitos de família natural, extensa e substituta (art. 25 e 28).',
                    'Prazos da adoção e do acolhimento, alterados em 2017.',
                    'Art. 13 e art. 56: quem comunica o quê ao Conselho Tutelar.',
                    'Art. 60 × EC 20/98: a idade do trabalho (14 ou 16?).',
                    'Arts. 83 a 85: viagem — só “criança” no plano nacional.',
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
                  src="images/context-eca.jpg"
                  alt="Livro de leis aberto sobre mesa de madeira ao lado de um catavento de papel, em preto e branco"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">13 de julho de 1990</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    A lei que trocou a palavra “menor” por criança e adolescente — sujeitos de direitos.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <ScrollText className="size-5 text-gold-2" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">A lei em números</p>
                  </div>
                  <p className="mt-3 font-display text-5xl font-bold">
                    267<span style={{ color: '#8ed6a0' }}>.</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    artigos no total, divididos em <strong>Livro I (Parte Geral, arts. 1º–85)</strong> e Livro II (Parte Especial, arts. 86–267). Esta parte cobre os <strong>85 primeiros</strong>.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Baby className="size-5" style={{ color: '#0f766e' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">12 / 18</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Criança: até 12 <strong>incompletos</strong>. Adolescente: 12 a 18. Excepcional: até 21 (art. 2º).
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Gavel className="size-5" style={{ color: '#0f766e' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">Art. 227</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Fundamento constitucional: dever da família, da sociedade e do Estado, com absoluta prioridade.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#0f766e40', backgroundColor: '#0f766e0a' }}>
                  <div className="flex items-center gap-3">
                    <Layers className="size-5 text-teal" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">Hierarquia das normas</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    CF/88 (art. 227) → Convenção da ONU de 1989 (<strong>supralegal</strong>, Dec. 99.710/90) → <strong>ECA</strong> (lei ordinária federal). Havendo conflito aparente, prevalece a norma <strong>mais favorável</strong> à criança (art. 41 da Convenção).
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* doutrinas */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Situação irregular <span className="italic font-light text-gold-3">×</span> Proteção integral
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {doutrinas.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.1}>
                <div
                  className="h-full rounded-3xl border bg-white p-7 md:p-8"
                  style={{ borderColor: `${d.hex}45` }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid size-11 place-items-center rounded-2xl text-paper"
                      style={{ backgroundColor: d.hex }}
                    >
                      {i === 0 ? <AlertTriangle className="size-5" /> : <ShieldCheck className="size-5" />}
                    </span>
                    <div>
                      <h4 className="font-display text-2xl font-bold text-ink">{d.t}</h4>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: d.hex }}>
                        {d.sub}
                      </p>
                    </div>
                  </div>
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
          <Reveal delay={0.15}>
            <p className="mt-5 rounded-2xl border border-brick/30 bg-brick/[0.07] px-5 py-4 text-sm leading-relaxed text-ink/75">
              <strong className="text-brick">Pegadinha clássica:</strong> a banca afirma que o ECA “adotou a doutrina da
              situação irregular” ou que se aplica “apenas a crianças em situação de risco”. Errado nas duas pontas: o
              Estatuto adotou a <strong>proteção integral</strong> e alcança <strong>todas</strong> as crianças e
              adolescentes, independentemente de classe social ou situação familiar.
            </p>
          </Reveal>
        </div>

        {/* estrutura do livro I */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Layers className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                A arquitetura do Livro I <span className="italic font-light text-gold-3">(arts. 1º a 85)</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {estrutura.map((e, i) => (
              <Reveal key={e.t} delay={i * 0.08}>
                <div
                  className="h-full rounded-3xl border bg-white p-6 transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: `${e.hex}35` }}
                >
                  <span
                    className="inline-flex rounded-full px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
                    style={{ backgroundColor: `${e.hex}14`, color: e.hex }}
                  >
                    {e.t}
                  </span>
                  <p className="mt-3 font-display text-lg font-semibold leading-tight text-ink">{e.s}</p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">{e.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <div className="mt-5 overflow-hidden rounded-3xl border border-ink/12 bg-white">
              <div className="border-b border-ink/10 bg-ink px-6 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">
                  Título II · os cinco capítulos dos direitos fundamentais
                </p>
              </div>
              {capitulos.map(([c, nome, arts], i) => (
                <div
                  key={c}
                  className={`grid grid-cols-[5rem_1fr_auto] items-center gap-3 px-5 py-3.5 md:px-6 ${
                    i % 2 === 1 ? 'bg-paper/60' : 'bg-white'
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink/45">{c}</span>
                  <span className="text-sm font-medium text-ink">{nome}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold-3">{arts}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Linha do tempo da infância no Brasil
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
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
