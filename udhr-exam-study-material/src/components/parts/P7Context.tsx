import { Reveal, SectionHead } from '../fx';
import { Landmark, Flame, BookOpen, Users, Gavel, CalendarHeart, ScrollText, Network } from 'lucide-react';

const timeline = [
  { ano: '1988', titulo: 'CF, art. 230', desc: 'A Constituição impõe à família, à sociedade e ao Estado o dever de amparar as pessoas idosas, com dignidade e bem-estar.' },
  { ano: '1994', titulo: 'Política Nacional do Idoso', desc: 'Lei 8.842/94 organiza a política de atendimento — ainda sem o detalhamento de direitos.' },
  { ano: '2003', titulo: 'Nasce o EPI', desc: 'Lei 10.741, de 1º/10/2003, após longa tramitação: 118 artigos que cobrem do conceito às penas.' },
  { ano: '2009+', titulo: 'EPI como norma especial', desc: 'A jurisprudência consolida o EPI como microssistema de proteção, ao lado do CDC e do ECA.' },
  { ano: '2021', titulo: 'Superendividamento', desc: 'Lei 14.181/21 atualiza o EPI com proteção especial ao idoso superendividado — o estatuto segue vivo.' },
];

const titulos = [
  { t: 'Título I', s: 'Disposições preliminares', a: '1º–5', hex: '#c19a3d' },
  { t: 'Título II', s: 'Direitos fundamentais', a: '6–42', hex: '#0f766e' },
  { t: 'Título III', s: 'Medidas de proteção', a: '43–45', hex: '#7c3aed' },
  { t: 'Título IV', s: 'Política de atendimento', a: '46–68', hex: '#2f6fb4' },
  { t: 'Título V', s: 'Acesso à Justiça', a: '69–92', hex: '#0e7490' },
  { t: 'Título VI', s: 'Crimes', a: '93–108', hex: '#991b1b' },
  { t: 'Título VII', s: 'Infrações e finais', a: '109–118', hex: '#4b5563' },
];

const contrastes = [
  { a: 'ECA (criança)', b: 'EPI (idoso)', hex: '#0f766e' },
  { a: 'Conselho Tutelar aplicando medidas', b: 'Sem conselho tutelar: medidas judiciais e MP', hex: '#7c3aed' },
  { a: 'Criança: até 12 incompletos', b: 'Idoso: 60 anos ou mais', hex: '#c19a3d' },
  { a: 'Medidas socioeducativas', b: 'Crimes próprios com penas', hex: '#991b1b' },
];

export default function P7Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto histórico · estrutura · microssistema"
          title={
            <>
              O ECA da{' '}
              <span className="italic font-light" style={{ color: '#b8a7e9' }}>
                terceira idade
              </span>
            </>
          }
          desc="O Estatuto da Pessoa Idosa é o ECA dos idosos: trocou o modelo assistencialista pelo idoso como SUJEITO DE DIREITOS, com prioridade absoluta e um rol próprio de crimes. 118 artigos que cobrem do conceito (60 anos) à multa administrativa — e a agenda das bancas inteira."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                O Brasil envelhece a uma velocidade sem precedentes: a proporção de pessoas com 60 anos ou mais cresce ano a ano e já supera a de crianças em várias regiões. A resposta jurídica começou na Constituição de 1988 — art. 226? Não: o art. 230, que impõe à família, à sociedade e ao Estado o dever de <strong className="font-semibold text-ink">amparar as pessoas idosas</strong>, assegurando sua participação na comunidade, defendendo sua dignidade e bem-estar e o direito à vida. Seguiu-se a Lei 8.842/1994 (Política Nacional do Idoso), ainda de perfil programático.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Em 1º de outubro de 2003, após longa tramitação no Congresso, a <strong className="font-semibold text-ink">Lei 10.741</strong> operou a virada de paradigma que o ECA havia operado para a infância em 1990: a pessoa idosa deixou de ser objeto de assistência e passou a ser <strong className="font-semibold text-ink">SUJEITO DE DIREITOS</strong>, titular de garantias exigíveis — do atendimento preferencial no banco ao desempate por idade em concurso público, do medicamento gratuito ao crime de humilhação.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Estruturalmente, o EPI é um <strong className="font-semibold text-ink">microssistema</strong>: 118 artigos em sete títulos, que misturam direitos fundamentais (como a DUDH — Parte 1), medidas de proteção e política de atendimento (como o ECA — Partes 5A e 5B), acesso à Justiça com prioridade processual e, ao final, um rol próprio de <strong className="font-semibold text-ink">16 crimes</strong> e infrações administrativas. É a configuração que as bancas amam: normas de direitos humanos, processuais e penais no mesmo diploma legal.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que o EPI cai tanto?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    '60 anos (art. 2º) — a idade que abre tudo.',
                    'P.I.I.: preferencial, imediato e individualizado.',
                    'Transporte: 60 × 65; 10%; 2 vagas + 50%.',
                    'BPC: art. 34 EPI + 65 anos da LOAS.',
                    'Concursos: sem teto de idade + desempate.',
                    'Crime do art. 96: desdenhar e humilhar é crime.',
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
                  alt="Livro de leis aberto sobre mesa de madeira, em preto e branco"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">1º de outubro de 2003</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    A lei que trocou “asilo e caridade” por direito, prioridade e crime.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <CalendarHeart className="size-5" style={{ color: '#b8a7e9' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">O número que abre a lei</p>
                  </div>
                  <p className="mt-3 font-display text-5xl font-bold">
                    60<span style={{ color: '#b8a7e9' }}>.</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    anos, <strong>igual ou superior</strong> — o conceito de pessoa idosa do art. 2º. Os 65 anos pertencem ao BPC (LOAS) e à gratuidade urbana da CF, art. 230, § 2º. Não misture as réguas.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Users className="size-5" style={{ color: '#b8a7e9' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">118</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      artigos em 7 títulos — do conceito de idoso às infrações administrativas.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Gavel className="size-5" style={{ color: '#b8a7e9' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">16</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      crimes próprios (arts. 93 a 108), do abandono à humilhação.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#b8a7e940', backgroundColor: '#b8a7e90a' }}>
                  <div className="flex items-center gap-3">
                    <Network className="size-5" style={{ color: '#b8a7e9' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#b8a7e9' }}>
                      Status no Brasil
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Lei ordinária federal aplicada em conjunto com a CF (art. 230), a LOAS, o CDC (o idoso é consumidor hipossuficiente) e a Lei Maria da Penha quando a vítima idosa é mulher em contexto doméstico — <strong>microssistemas que conversam</strong>.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* estrutura */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                A arquitetura dos 118 artigos <span className="italic font-light text-gold-3">— 7 títulos</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {titulos.map((e, i) => (
              <Reveal key={e.t} delay={i * 0.05}>
                <div
                  className="h-full rounded-2xl border bg-white p-5 transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: `${e.hex}35` }}
                >
                  <span
                    className="inline-flex rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em]"
                    style={{ backgroundColor: `${e.hex}14`, color: e.hex }}
                  >
                    {e.t}
                  </span>
                  <p className="mt-3 font-display text-base font-semibold leading-tight text-ink">{e.s}</p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">arts. {e.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ECA x EPI */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <ScrollText className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                ECA <span className="italic font-light text-gold-3">×</span> EPI — o espelho e as diferenças
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {contrastes.map((c, i) => (
              <Reveal key={c.a} delay={i * 0.06}>
                <div className="grid grid-cols-2 gap-3 rounded-2xl border border-ink/10 bg-white p-4">
                  <div className="rounded-xl bg-paper/80 p-3.5">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-ink/45">ECA</p>
                    <p className="mt-1.5 text-[13px] leading-snug text-ink/75">{c.a}</p>
                  </div>
                  <div className="rounded-xl p-3.5" style={{ backgroundColor: `${c.hex}12` }}>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: c.hex }}>
                      EPI
                    </p>
                    <p className="mt-1.5 text-[13px] leading-snug text-ink/80">{c.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="mt-5 rounded-2xl border border-brick/30 bg-brick/[0.07] px-5 py-4 text-sm leading-relaxed text-ink/75">
              <strong className="text-brick">A pegadinha estrutural:</strong> “o Estatuto da Pessoa Idosa prevê conselho
              tutelar do idoso” — NÃO EXISTE. O EPI tem Conselhos de DIREITOS (política, paritários), mas as medidas de
              proteção são aplicadas pelo JUIZ, com o Ministério Público — não por um órgão extrajudicial.
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo da proteção à velhice</h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-5">
            {timeline.map((t, i) => (
              <Reveal key={t.ano} delay={i * 0.06}>
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
