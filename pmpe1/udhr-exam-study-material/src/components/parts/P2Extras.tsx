import { SectionHead, Reveal } from '../fx';
import {
  Crosshair,
  Church,
  Compass,
  Users,
  AlertTriangle,
  Baby,
  Gavel,
  BookOpen,
  GraduationCap,
  HeartPulse,
} from 'lucide-react';

const verbos = [
  { v: 'Distinção', d: 'tratar diferente sem justificativa' },
  { v: 'Exclusão', d: 'deixar fora por causa da fé' },
  { v: 'Restrição', d: 'limitar o exercício do direito' },
  { v: 'Preferência', d: 'favorecer indevidamente uma crença' },
];

const paisArt5 = [
  { n: 'I', t: 'Pais/responsáveis organizam a vida familiar conforme a própria religião ou convicção.' },
  { n: 'II', t: 'A criança tem acesso à educação religiosa conforme a vontade dos pais — e NÃO pode ser compelida a ensino religioso contra ela.' },
  { n: 'III', t: 'A criança é protegida de qualquer discriminação e educada em espírito de tolerância e paz.' },
  { n: 'IV', t: 'Sem guarda dos pais, consideram-se os desejos que eles expressaram.' },
  { n: 'V', t: 'Práticas religiosas da criação não podem lesar saúde física/mental nem o pleno desenvolvimento (limites do art. 1º, §3º).' },
  { n: 'VI', t: 'A criança, sempre com dignidade, jamais sofrerá coerção na liberdade de ter ou escolher religião.' },
];

const mandamentos = [
  'Aprovada por CONSENSO, sem votação, em 25/11/1981 — Resolução 36/55 da Assembleia Geral da ONU.',
  'É DECLARAÇÃO: não é convenção nem tratado; sem comitê próprio e sem denúncias individuais — mas é padrão normativo consensual.',
  'Desde 1986 sustenta o mandato do Relator Especial sobre liberdade de religião ou de convicção (o “fiscal” do documento).',
  'Protege religião E convicção — teístas, não teístas e ateus; inclui o direito de NÃO ter religião (Comentário Geral 22/1993).',
  'Forum internum absoluto (ninguém sofre coerção); manifestação limitável apenas por LEI e para fins taxativos (art. 1º, §3º).',
  'A definição do art. 2º, §2º, capta a discriminação INDIRETA: “finalidade OU efeito” + distinção, exclusão, restrição ou preferência + vedação horizontal (particulares).',
  'Pais conduzem a educação religiosa dos filhos; a criança jamais é compelida; interesse superior da criança; freio: saúde física e mental (art. 5º, n. 5).',
  'O art. 8º é salvaguarda: a Declaração nunca reduz direitos da DUDH e dos Pactos. No Brasil: CF art. 5º, VI-VIII, e ensino religioso facultativo (art. 210, §1º; ADI 4.439).',
];

export default function P2Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Conceitos estratégicos"
          title={
            <>
              O que a banca chama de <span className="italic font-light text-gold-3">essencial</span>
            </>
          }
          desc="Três blocos respondem 80% das questões sobre a Declaração: a definição exata de intolerância/discriminação, a fronteira entre religião e convicção, e os direitos dos pais sobre a educação religiosa dos filhos."
        />

        {/* A · definição */}
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-ink p-7 text-paper md:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 hidden select-none font-display text-[10rem] font-black leading-none outline-paper lg:block">
              2.2
            </div>
            <div className="flex items-center gap-2.5">
              <Crosshair className="size-5 text-gold-2" />
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-2">
                Art. 2º, §2º · a definição de intolerância e discriminação
              </p>
            </div>
            <blockquote className="mt-6 max-w-4xl font-display text-xl md:text-3xl font-light italic leading-snug text-paper/90">
              “Qualquer distinção, exclusão, restrição ou preferência baseada na religião ou convicção que
              tenha por <span className="not-italic font-semibold text-gold-2">finalidade</span> ou por{' '}
              <span className="not-italic font-semibold text-gold-2">efeito</span> anular ou restringir o
              reconhecimento, gozo ou exercício dos direitos humanos e das liberdades fundamentais numa base
              de igualdade.”
            </blockquote>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {verbos.map((x) => (
                <div
                  key={x.v}
                  className="rounded-2xl border border-paper/12 bg-paper/[0.05] p-4 transition-colors hover:border-gold/40"
                >
                  <p className="font-display text-lg font-semibold text-gold-2">{x.v}</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/55">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gold/35 bg-gold/[0.08] p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gold-2">
                  Finalidade OU efeito
                </p>
                <p className="mt-2 text-sm leading-relaxed text-paper/75">
                  Dispensa provar a intenção: basta o resultado excludente. É a porta da{' '}
                  <strong>discriminação indireta</strong> — o “OU” é a troca campeã do Cebraspe.
                </p>
              </div>
              <div className="rounded-2xl border p-5" style={{ borderColor: 'rgba(15,118,110,0.4)', backgroundColor: 'rgba(15,118,110,0.12)' }}>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: '#5eead4' }}>
                  Horizontalidade — art. 2º, §1º
                </p>
                <p className="mt-2 text-sm leading-relaxed text-paper/75">
                  Vedado discriminar por <strong>Estado, instituição, grupo de pessoas ou pessoa</strong>: a
                  proteção também corre entre particulares (efeitos horizontais).
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* B · religião x convicção */}
        <div className="mt-14">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Compass className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Liberdade de religião <span className="italic font-light text-gold-3">×</span> liberdade de convicção
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-3xl border border-gold/40 bg-white p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-gold text-ink">
                    <Church className="size-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-3">Face 1</p>
                    <h4 className="font-display text-2xl font-bold text-ink">Religião</h4>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/70">
                  <li className="flex gap-2.5"><BookOpen className="mt-0.5 size-4 shrink-0 text-gold-3" /> Sistema compartilhado de crenças, em geral com dimensão transcendente.</li>
                  <li className="flex gap-2.5"><BookOpen className="mt-0.5 size-4 shrink-0 text-gold-3" /> Tem culto, textos, ritos, comunidade e instituições.</li>
                  <li className="flex gap-2.5"><BookOpen className="mt-0.5 size-4 shrink-0 text-gold-3" /> Ex.: catolicismo, islamismo, judaísmo, umbanda, budismo, candomblé.</li>
                  <li className="flex gap-2.5"><BookOpen className="mt-0.5 size-4 shrink-0 text-gold-3" /> Manifesta-se pelo culto, observância, prática e ensino (art. 1º).</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl border border-teal/40 bg-white p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-teal text-paper">
                    <Compass className="size-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">Face 2 · “belief”</p>
                    <h4 className="font-display text-2xl font-bold text-ink">Convicção</h4>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/70">
                  <li className="flex gap-2.5"><BookOpen className="mt-0.5 size-4 shrink-0 text-teal" /> Sistema de concepção de vida e de mundo — com ou sem transcendência.</li>
                  <li className="flex gap-2.5"><BookOpen className="mt-0.5 size-4 shrink-0 text-teal" /> Alcança teístas não organizados, não teístas, agnósticos e humanistas seculares.</li>
                  <li className="flex gap-2.5"><BookOpen className="mt-0.5 size-4 shrink-0 text-teal" /> Inclui o ateísmo e o direito de NÃO professar crença alguma (Comentário Geral 22/1993).</li>
                  <li className="flex gap-2.5"><BookOpen className="mt-0.5 size-4 shrink-0 text-teal" /> Não exige culto nem instituição — mas exige seriedade e coerência (não é mera opinião passageira).</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="mt-5 rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm leading-relaxed text-ink/70">
              <strong className="text-ink">Núcleo comum:</strong> a liberdade interna (forum internum) é absoluta nas
              duas faces — ninguém sofre coerção. O que admite limites legais é apenas a manifestação (forum
              externum), nos moldes do art. 1º, §3º.
            </p>
          </Reveal>
        </div>

        {/* C · direitos dos pais */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Users className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Direitos dos pais na educação religiosa <span className="italic font-light text-gold-3">— muito cobrado</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal delay={0.05} className="lg:col-span-7">
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7 md:p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/45">
                  Art. 5º mapeado — seis comandos
                </p>
                <ol className="mt-6 space-y-5">
                  {paisArt5.map((p) => (
                    <li key={p.n} className="flex gap-4">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-ink font-display text-sm font-bold text-gold-2">
                        {p.n}
                      </span>
                      <p className="text-sm leading-relaxed text-ink/75">{p.t}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
            <div className="lg:col-span-5">
              <div className="grid h-full gap-6">
                <Reveal delay={0.1}>
                  <div className="rounded-3xl border border-un/25 bg-white p-7">
                    <div className="flex items-center gap-3">
                      <Gavel className="size-5 text-un" />
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-un">
                        No Brasil hoje — conexões de prova
                      </p>
                    </div>
                    <ul className="mt-5 space-y-3.5 text-[13px] leading-relaxed text-ink/70">
                      <li className="flex gap-2.5">
                        <GraduationCap className="mt-0.5 size-4 shrink-0 text-un" />
                        <span><strong>CF, art. 210, §1º:</strong> ensino religioso FACULTATIVO, de matrícula opcional, em horário regular de escolas públicas.</span>
                      </li>
                      <li className="flex gap-2.5">
                        <GraduationCap className="mt-0.5 size-4 shrink-0 text-un" />
                        <span><strong>STF, ADI 4.439 (2017):</strong> é constitucional o ensino religioso CONFESSIONAL nas escolas públicas — desde que a matrícula siga facultativa.</span>
                      </li>
                      <li className="flex gap-2.5">
                        <HeartPulse className="mt-0.5 size-4 shrink-0 text-un" />
                        <span><strong>STF, RE 1.169.456:</strong> a recusa religiosa dos pais não impede transfusão de sangue necessária para preservar a vida da criança — aplicação do art. 5º, n. 5.</span>
                      </li>
                      <li className="flex gap-2.5">
                        <Baby className="mt-0.5 size-4 shrink-0 text-un" />
                        <span><strong>Lei 11.635/2007:</strong> Dia Nacional de Combate à Intolerância Religiosa — 21 de janeiro.</span>
                      </li>
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="rounded-3xl border border-brick/35 bg-brick/[0.06] p-7">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="size-5 text-brick" />
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brick">
                        Pegadinha do bloco
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">
                      “A prioridade dos pais é absoluta.” <strong>Errado:</strong> o princípio orientador é o
                      interesse superior da criança, e o art. 5º, n. 5, freia práticas lesivas à saúde física ou
                      mental. Direito dos pais sim — direito dos pais <em>contra</em> a criança, nunca.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* D · mandamentos */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Os 8 entendimentos <span className="italic font-light text-gold-3">consolidados</span>
              </h3>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 md:block">
                um por artigo — decore antes da prova
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
