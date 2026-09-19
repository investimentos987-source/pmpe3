import { Reveal, SectionHead } from '../fx';
import { Vote, CalendarDays, Landmark, FileText, Flame, BookOpen } from 'lucide-react';

const timeline = [
  { ano: '1945', titulo: 'Carta da ONU', desc: 'São Francisco: o preâmbulo reafirma a “fé nos direitos humanos fundamentais”.' },
  { ano: '1946', titulo: 'Comissão de DH', desc: 'Criada pelo ECOSOC e presidida por Eleanor Roosevelt: começa a redação.' },
  { ano: '1948', titulo: 'A DUDH nasce', desc: 'Paris, Palais de Chaillot: 48 votos a favor, 0 contra, 8 abstenções e 2 ausências.' },
  { ano: '1950', titulo: 'Dia Internacional', desc: 'A Resolução 423 (V) institui o 10 de dezembro como Dia dos Direitos Humanos.' },
  { ano: '1966', titulo: 'Os dois Pactos', desc: 'PIDCP e PIDESC convertem os direitos declarados em tratados (vigor: 1976).' },
  { ano: '2008', titulo: 'STF — RE 466.343', desc: 'A DUDH não tem status constitucional no Brasil: parâmetro hermenêutico.' },
];

const abstencoes = ['URSS', 'Ucrânia', 'Bielorrússia', 'Tchecoslováquia', 'Polônia', 'Iugoslávia', 'África do Sul', 'Arábia Saudita'];

export default function P1Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto histórico & importância"
          title={
            <>
              Nasceu das cinzas <span className="italic font-light text-gold-3">da guerra</span>
            </>
          }
          desc="Entender o “porquê” do documento é metade do caminho: banca cobra quórum, local, autores e a natureza jurídica da Declaração — tudo isso está aqui."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                A Declaração Universal dos Direitos Humanos é a resposta civilizatória ao horror da Segunda Guerra Mundial e do Holocausto. Em 1945, a Carta das Nações Unidas já registrava, no preâmbulo, a “fé nos direitos humanos fundamentais, na dignidade e no valor da pessoa humana”. Faltava dizer o que eram esses direitos — e é exatamente essa a missão da DUDH: um ideal comum a ser alcançado por todos os povos e nações.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                A redação coube à Comissão de Direitos Humanos da ONU, presidida por <strong className="font-semibold text-ink">Eleanor Roosevelt</strong>. No comitê de redação brilham <strong className="font-semibold text-ink">John Peters Humphrey</strong> (Canadá — primeiro esboço), <strong className="font-semibold text-ink">René Cassin</strong> (França — arquiteto do texto, Nobel da Paz de 1968), <strong className="font-semibold text-ink">Charles Malik</strong> (Líbano — relator) e <strong className="font-semibold text-ink">P. C. Chang</strong> (China — vice-presidente). Detalhe que as bancas amam: foi a indiana <strong className="font-semibold text-ink">Hansa Mehta</strong> quem exigiu “todos os seres humanos” em vez de “todos os homens” no art. 1º.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Em 10 de dezembro de 1948, numa Paris ainda em ruínas, a Assembleia Geral proclamou a Resolução 217 A (III): o primeiro documento universal de direitos humanos da história. Sua força não é a de um tratado — é a de um padrão de consciência jurídica universal que inspirou mais de 70 tratados, dezenas de constituições (inclusive a brasileira de 1988) e, em boa parte, já é reconhecido como costume internacional, senão jus cogens.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    Por que a DUDH cai em <em>toda</em> prova?
                  </h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'É o “marco zero” de qualquer edital de Direitos Humanos.',
                    'Cobre literalidade: trocou uma palavra, virou pegadinha.',
                    'Data, local e quórum são questões diretas de 1 ponto.',
                    'É a régua para interpretar o art. 5º da CF/88 (§§ 1º, 2º e 3º).',
                    'Diferencia 1ª e 2ª gerações/dimensões dos DH.',
                    'Os 30 artigos viram alternativas “copia-e-cola” no Cebraspe.',
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
                  src="images/context-hall.jpg"
                  alt="Assembleia geral em sessão plenária, em preto e branco, evocando a atmosfera de 1948"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">A atmosfera de 1948</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    Sessões plenárias da Assembleia Geral — o mundo votando o que a humanidade deveria ser.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(16,23,37,0.35)]">
                  <div className="flex items-center gap-3">
                    <Vote className="size-5 text-gold-3" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">O placar exato</p>
                  </div>
                  <p className="mt-3 font-display text-4xl font-bold text-ink">
                    48 <span className="text-gold-3">×</span> 0
                    <span className="ml-3 align-middle font-mono text-xs font-normal uppercase tracking-widest text-ink/40">favor × contra</span>
                  </p>
                  <div className="mt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-un">8 abstenções</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {abstencoes.map((p) => (
                        <span key={p} className="rounded-full border border-ink/10 bg-paper px-2.5 py-1 text-[10px] text-ink/60">
                          {p}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-ink/55">
                      Ausentes: <strong>Honduras</strong> e <strong>Iêmen</strong>. Logo, nunca marque “unanimidade” — 8 se abstiveram.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                    <Landmark className="size-5 text-gold-2" />
                    <p className="mt-3 font-display text-2xl font-semibold">Palais de Chaillot</p>
                    <p className="mt-1 text-xs leading-relaxed text-paper/60">
                      Paris — e não Nova York nem Genebra. A ONU ainda não tinha sede própria.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <CalendarDays className="size-5 text-gold-3" />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">10/12</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Dia Internacional dos Direitos Humanos — instituído pela Res. 423 (V), de 1950.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border border-un/25 bg-un/[0.06] p-6">
                  <div className="flex items-center gap-3">
                    <FileText className="size-5 text-un" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-un">Carta Internacional dos DH</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    <strong>DUDH (1948) + PIDCP + PIDESC (1966)</strong> formam a chamada Carta Internacional dos Direitos Humanos. Os Pactos converteram a “promessa” declaratória em obrigações de tratado.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo que a banca cobra</h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {timeline.map((t, i) => (
              <Reveal key={t.ano} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(16,23,37,0.45)]">
                  <span className="absolute -top-3 left-5 rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-widest text-ink">
                    {t.ano}
                  </span>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">{t.titulo}</p>
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
