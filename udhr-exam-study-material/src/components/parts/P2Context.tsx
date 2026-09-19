import { Reveal, SectionHead } from '../fx';
import { FileText, Landmark, Flame, BookOpen, Handshake, Scale, Gavel, Scroll, Radio, CalendarDays } from 'lucide-react';

const timeline = [
  { ano: '1948', titulo: 'DUDH, art. 18', desc: 'A liberdade de pensamento, consciência e religião entra no catálogo universal.' },
  { ano: '1962', titulo: 'Os trabalhos começam', desc: 'A ONU inicia projetos para combater especificamente a intolerância religiosa.' },
  { ano: '1966', titulo: 'PIDCP, art. 18', desc: 'O Pacto transforma a liberdade religiosa em obrigação convencional vinculante.' },
  { ano: '1981', titulo: 'Declaração 36/55', desc: 'Aprovada por consenso em 25/11: instrumento mundial contra a intolerância religiosa.' },
  { ano: '1986', titulo: 'Relator Especial', desc: 'Criado o mandato do Relator Especial sobre liberdade de religião ou convicção.' },
  { ano: '1993', titulo: 'Comentário Geral 22', desc: 'O Comitê de DH interpreta o art. 18 do PIDCP — leitura-chave do documento.' },
  { ano: '2019', titulo: 'Dia das Vítimas', desc: 'Res. 73/296: 22 de agosto vira Dia Internacional das Vítimas de Violência Religiosa.' },
];

export default function P2Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto histórico · objetivo · natureza jurídica"
          title={
            <>
              A convenção que não nasceu, <span className="italic font-light text-gold-3">a declaração que venceu</span>
            </>
          }
          desc="A história deste documento explica a pergunta mais cobrada: por que a ONU fez uma CONVENÇÃO contra a discriminação racial (1965), mas apenas uma DECLARAÇÃO contra a intolerância religiosa (1981)? Spoiler: Guerra Fria e dissenso sobre proselitismo."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                A liberdade religiosa já estava no art. 18 da DUDH (1948) e viraria obrigação de tratado no art. 18 do PIDCP (1966). Por que, então, um instrumento próprio? Porque a intolerância religiosa seguia sendo uma das faces mais cruéis da discriminação no século XX — e a comunidade internacional queria um texto capaz de nomeá-la, defini-la e combatê-la com precisão. Os trabalhos começaram nos anos 1960, no mesmo espírito que produziu os instrumentos contra a discriminação racial.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                O plano original era ousado: uma declaração e uma <strong className="font-semibold text-ink">convenção</strong> contra a intolerância religiosa. Mas enquanto o tema racial avançou (Declaração de 1963 e Convenção de 1965), o religioso travou: Guerra Fria, regimes oficialmente ateus, países com religião de Estado e divergências insuperáveis sobre conversão, proselitismo e apostasia. A saída diplomática foi o consenso possível: em 25 de novembro de 1981, a Assembleia Geral proclamou a Resolução 36/55 <strong className="font-semibold text-ink">sem votação — por consenso pleno</strong>.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                O objetivo é declarado no título: eliminar <em>todas as formas</em> de intolerância e de discriminação fundadas na religião ou nas convicções — complementando, e nunca substituindo, a DUDH e os Pactos (é o que garante o art. 8º). Sua força não é a de tratado, mas de padrão universal consensual: em 1986, ela se tornou a <strong className="font-semibold text-ink">base do mandato do Relator Especial sobre liberdade de religião ou de convicção</strong>.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que este documento cai tanto?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Data, órgão e resolução: 25/11/1981, AG, Res. 36/55 — ponto fácil.',
                    'Declaração × Convenção: a distinção mais binária do internacional.',
                    'A definição do art. 2º, §2º, vira alternativa quase integral.',
                    'Direitos dos pais (art. 5º) + ensino religioso na CF (art. 210, §1º).',
                    'O rol de 9 liberdades do art. 6º rende itens “copia-e-troca”.',
                    'Consenso × placar da DUDH: comparativo clássico de prova.',
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
                  src="images/context-candles.jpg"
                  alt="Velas acesas em uma nave de catedral, em preto e branco"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">O objeto da proteção</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    Culto, consciência e convicção — a esfera que o art. 1º declara intocável.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Handshake className="size-5 text-gold-2" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Como foi aprovada</p>
                  </div>
                  <p className="mt-3 font-display text-4xl font-bold">Consenso<span className="text-gold-2">.</span></p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    Adotada <strong>sem votação</strong> — nenhum placar existe. Se a questão citar número de votos, está inventado. Compare: a DUDH teve 48–0–8 (+2 ausentes).
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Radio className="size-5 text-gold-3" />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">1986</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Criado o Relator Especial sobre liberdade de religião ou convicção — fiscal do documento.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <CalendarDays className="size-5 text-gold-3" />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">22 ago</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Desde 2019 (Res. 73/296), Dia Internacional das Vítimas de Violência Religiosa.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border border-un/25 bg-un/[0.06] p-6">
                  <div className="flex items-center gap-3">
                    <FileText className="size-5 text-un" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-un">Art. 18 × 2</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    A Declaração <strong>detalha</strong> o art. 18 da DUDH e o art. 18 do PIDCP — primeiro declaratório, segundo vinculante. Prova ama cobrar esse trio.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* declaração x convenção */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Declaração <span className="italic font-light text-gold-3">×</span> Convenção — a distinção de ouro
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-3xl border border-gold/40 bg-white p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-gold text-ink">
                    <Scroll className="size-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-3">Partes 1 e 2 da trilogia</p>
                    <h4 className="font-display text-2xl font-bold text-ink">Declaração</h4>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    ['Base normativa', 'Resolução da AG — aqui, a Res. 36/55 (1981) e a 217 A III (1948).'],
                    ['Vinculação', 'Não cria obrigações de tratado; força normativa, moral e hermenêutica.'],
                    ['Controle', 'Sem comitê próprio nem denúncias individuais (monitorada pelo Relator Especial).'],
                    ['Exemplos', 'DUDH (1948) e esta Declaração de 1981.'],
                  ].map(([k, v]) => (
                    <li key={k} className="border-b border-ink/10 pb-3 last:border-0">
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40">{k}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/75">{v}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl border border-teal/40 bg-white p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-teal text-paper">
                    <Gavel className="size-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">Parte 3 da trilogia</p>
                    <h4 className="font-display text-2xl font-bold text-ink">Convenção (tratado)</h4>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    ['Base normativa', 'Tratado multilateral — aberto a assinatura e ratificação.'],
                    ['Vinculação', 'Obriga juridicamente os Estados-partes (pacta sunt servanda).'],
                    ['Controle', 'Comitês próprios, relatórios e, às vezes, denúncias individuais.'],
                    ['Exemplos', 'CEDAW (1979), PIDCP, PIDESC (1966), CERD, Convenção contra a Tortura.'],
                  ].map(([k, v]) => (
                    <li key={k} className="border-b border-ink/10 pb-3 last:border-0">
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/40">{k}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/75">{v}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="mt-5 rounded-2xl border border-brick/30 bg-brick/[0.07] px-5 py-4 text-sm leading-relaxed text-ink/75">
              <strong className="text-brick">Pegadinha-chave:</strong> a banca chama o documento de 1981 de
              “convenção”, “tratado” ou “pacto” — erro certeiro. E lembre: a ONU obteve convenção contra a
              discriminação <em>racial</em> (1965); para a <em>religiosa</em>, o consenso só coube na declaração.
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo da liberdade religiosa</h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {timeline.map((t, i) => (
              <Reveal key={t.ano} delay={i * 0.06}>
                <div className="relative h-full rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(16,23,37,0.45)]">
                  <span className="absolute -top-3 left-5 rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-widest text-ink">
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
