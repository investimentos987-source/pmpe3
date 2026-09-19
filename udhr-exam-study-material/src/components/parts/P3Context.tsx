import { Reveal, SectionHead } from '../fx';
import {
  Landmark,
  Flame,
  BookOpen,
  Gavel,
  Users,
  FileText,
  ScrollText,
  ClipboardCheck,
  Megaphone,
  ShieldAlert,
} from 'lucide-react';

const timeline = [
  { ano: '1946', titulo: 'CSW', desc: 'Criada a Comissão da Condição Jurídica e Social da Mulher da ONU.' },
  { ano: '1967', titulo: 'DEDIW', desc: 'Declaração sobre a Eliminação da Discriminação contra a Mulher — a precursora não vinculante.' },
  { ano: '1975', titulo: 'Ano da Mulher', desc: 'Ano Internacional da Mulher (México) e início da Década da Mulher (1976–85).' },
  { ano: '1979', titulo: 'CEDAW adotada', desc: 'Res. 34/180, 18/12: nasce a “carta internacional dos direitos das mulheres”.' },
  { ano: '1981', titulo: 'Em vigor', desc: '3/9/1981: 30 dias após a 20ª ratificação — vigência recordista.' },
  { ano: '1984', titulo: 'Brasil ratifica', desc: 'Depósito da ratificação brasileira — rito ordinário, status supralegal.' },
  { ano: '1999', titulo: 'Protocolo Facultativo', desc: 'Queixas individuais e inquéritos; no Brasil, Decreto 4.377/2002.' },
];

export default function P3Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto histórico · objetivo · natureza · comitê"
          title={
            <>
              A declaração <span className="italic font-light" style={{ color: '#c11f5d' }}>virou tratado</span>{' '}
              — e ganhou dentes
            </>
          }
          desc="Na trilogia, este é o capítulo que muda de natureza: depois de uma DECLARAÇÃO genérica (1967) e de duas declarações nos capítulos anteriores, a CEDAW é CONVENÇÃO — vinculante, com órgão próprio de monitoramento e protocolo de queixas."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                As garantias genéricas dos direitos humanos não bastavam: formalmente iguais, as mulheres seguiam excluídas da vida pública, do trabalho, da propriedade e das decisões sobre o próprio corpo. Em 1967, a ONU ensaiou a resposta com a DEDIW — uma declaração, logo, sem força de tratado. O Ano Internacional da Mulher (1975) e a Década da Mulher deram o impulso político final para transformar intenção em obrigação.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Em 18 de dezembro de 1979, a Resolução 34/180 adotou a Convenção sobre a Eliminação de Todas as Formas de Discriminação Contra a Mulher — a CEDAW. O objetivo é o do título: eliminar <em>todas as formas</em> de discriminação, no público e no privado. E o ritmo impressionou: entrou em vigor em 3 de setembro de 1981, apenas 30 dias após a 20ª ratificação — uma das vigências mais rápidas do sistema. Hoje está entre os tratados de direitos humanos mais ratificados do mundo — e, não por acaso, também o <strong className="font-semibold text-ink">campeão de reservas</strong> (art. 28).
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                No Brasil: ratificação depositada em fevereiro de 1984, por <strong className="font-semibold text-ink">rito ordinário e antes da EC 45/2004</strong> — logo, segundo a jurisprudência do STF, a CEDAW tem <strong className="font-semibold text-ink">status de norma supralegal</strong> no ordenamento brasileiro. Seu Protocolo Facultativo (1999), que permite queixas individuais e inquéritos, foi promulgado pelo Decreto 4.377/2002.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que a CEDAW cai tanto?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Natureza convenção × declaração — o contraste com DUDH e 1981.',
                    'A definição do art. 1º “sem preferência” (pegadinha clássica).',
                    'Medidas especiais temporárias (art. 4º) = ação afirmativa.',
                    'Comitê: 23 peritos, relatórios “1 + 4 anos”, recomendações gerais.',
                    'Brasil: supralegalidade, Dec. 4.377/2002 e a ponte com a LMP.',
                    'Art. 14 (mulheres rurais) e art. 16 (família) — campeões de cobrança.',
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
                  src="images/context-cedaw.jpg"
                  alt="Sala de conferência internacional dos anos 1970, em preto e branco"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">A atmosfera de 1979</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    O plenário que transformou a igualdade das mulheres em obrigação internacional.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Gavel className="size-5 text-gold-2" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Natureza jurídica</p>
                  </div>
                  <p className="mt-3 font-display text-4xl font-bold">
                    Convenção<span style={{ color: '#f0a5c0' }}>.</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    Tratado multilateral <strong>vinculante</strong> com órgão próprio de controle — o oposto das declarações dos capítulos 1 e 2. Firmou, cumpre (pacta sunt servanda).
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Users className="size-5" style={{ color: '#c11f5d' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">23 peritos</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Comitê CEDAW em Genebra — peritos independentes, mandatos de 4 anos (art. 17).
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <ScrollText className="size-5" style={{ color: '#c11f5d' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">1999</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Protocolo Facultativo: queixas individuais e inquéritos (BR: Dec. 4.377/2002).
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#c11f5d40', backgroundColor: '#c11f5d0a' }}>
                  <div className="flex items-center gap-3">
                    <FileText className="size-5" style={{ color: '#c11f5d' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#c11f5d' }}>Recorde ambíguo</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Um dos tratados de DH <strong>mais ratificados</strong> do planeta — e também o <strong>campeão de reservas</strong>: só valem as compatíveis com o objeto e propósito da Convenção (art. 28).
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* comitê cedaw — como monitora */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Users className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                O Comitê CEDAW e suas três ferramentas <span className="italic font-light text-gold-3">(e o que ele NÃO é)</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <ClipboardCheck className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">Art. 18 · relatórios</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Cada Estado presta contas: relatório <strong>1 ano</strong> após a entrada em vigor e, depois, ao menos a cada <strong>4 anos</strong> — seguidos de “observações finais” do Comitê.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <Megaphone className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">Art. 21 · recomendações gerais</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  As famosas GR: <strong>GR 19/1992</strong> e <strong>GR 35/2017</strong> consagraram a violência de gênero como forma de discriminação — a ponte jurídica com a Lei Maria da Penha.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <FileText className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">Protocolo · queixas e inquérito</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Desde 1999, o Protocolo Facultativo permite <strong>comunicações individuais</strong> (após esgotar a via interna) e procedimentos de <strong>inquérito</strong> sobre violações graves e sistemáticas.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-brick/30 bg-brick/[0.07] px-5 py-4 text-sm leading-relaxed text-ink/75">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-brick" />
              <span>
                <strong className="text-brick">O que o Comitê NÃO é:</strong> tribunal. Não julga, não condena e não
                aplica sanções. Monitora, dialoga e recomenda — a coerção vem da opinião pública internacional e
                do dever convencional, não de policiais.
              </span>
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo da CEDAW</h3>
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
