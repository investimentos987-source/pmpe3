import { Reveal, SectionHead } from '../fx';
import {
  Landmark,
  Flame,
  BookOpen,
  Scale,
  Globe2,
  ShieldAlert,
  FileSearch,
  Handshake,
} from 'lucide-react';

const sistema = [
  {
    t: 'Organização dos Estados Americanos (OEA)',
    hex: '#2f6fb4',
    d: 'Sistema regional de proteção coletiva dos direitos humanos no hemisfério. Nasce da Carta da OEA (1948, Bogotá) e da Declaração Americana dos Direitos e Deveres do Homem (1948).',
  },
  {
    t: 'Comissão Interamericana (1959) e Corte IDH (1979)',
    hex: '#b04a3c',
    d: 'Órgãos permanentes de monitoramento: a Comissão recebe petições e denúncias e a Corte julga. Fundamento institucional: Pacto de San José da Costa Rica (1969; Brasil: Decreto 678/1992).',
  },
  {
    t: 'Reconhecimento do Brasil como réu',
    hex: '#7c3aed',
    d: 'O Brasil reconheceu a jurisdição contenciosa da Corte Interamericana em 10 de dezembro de 1998 — desde então o país é demandável internacionalmente por violações.',
  },
];

const tres = [
  {
    t: 'CIAPTT — Interamericana',
    hex: '#f08f7c',
    itens: ['Cartagena, 1985 (OEA)', 'Decreto 98.386/1989 (Brasil)', 'Definição AMPLA: qualquer dor', 'Qualquer finalidade, qualquer agente', 'Inclui métodos de obliteração', 'Supralegal no Brasil'],
  },
  {
    t: 'CAT — Convenção da ONU',
    hex: '#2f6fb4',
    itens: ['ONU, 1984 (Dec. 40/1991)', 'Definição RESTRITA: dor GRAVE', 'Finalidade específica no texto', 'Exige oficial ou consentimento estatal', 'Comitê contra Tortura', 'OPCAT: Dec. 5.885/2006'],
  },
  {
    t: 'Lei 9.455/1997 — tortura no CP',
    hex: '#991b1b',
    itens: ['Crime comum: qualquer sujeito', 'Ação penal pública incondicionada', 'Pena de reclusão + qualificadoras', 'IMPRESCRITÍVEL e INAFIANÇÁVEL', 'NÃO é crime hediondo', 'Executa CF, art. 5º, XLIII'],
  },
];

const timeline = [
  { ano: '1948', titulo: 'Declaração Americana', desc: 'A OEA proclama os direitos e deveres do homem na Carta da OEA, pedra do sistema regional.' },
  { ano: '1959–1979', titulo: 'Comissão e Corte IDH', desc: 'Criados os órgãos permanentes que vigiam o Pacto e as convenções temáticas.' },
  { ano: '1969', titulo: 'Pacto de San José', desc: 'A Convenção Americana de Direitos Humanos — a matriz regional (Brasil: Decreto 678/1992).' },
  { ano: '1985', titulo: 'CIAPTT em Cartagena', desc: 'Adotada na Colômbia em 9/12: a convenção regional de combate à tortura.' },
  { ano: '1989', titulo: 'Decreto 98.386', desc: 'Promulgação brasileira: 22/8/1989 — o texto passa a ser norma supralegal no Brasil.' },
  { ano: '1991', titulo: 'Decreto 40/1991', desc: 'A Convenção da ONU contra Tortura também vira norma interna supralegal.' },
  { ano: '1998', titulo: 'Brasil réu na Corte', desc: 'Aceitação da jurisdição contenciosa da Corte IDH: violações passam a ter tribunal.' },
  { ano: '2013', titulo: 'SNPCT', desc: 'Lei 12.845/2013 cria o Sistema Nacional de Prevenção e Combate à Tortura (executa o OPCAT).' },
];

export default function P8Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto · sistema OEA · distinção das três normas"
          title={
            <>
              O sistema interamericano{' '}
              <span className="italic font-light" style={{ color: '#f08f7c' }}>
                contra a tortura
              </span>
            </>
          }
          desc="Na coleção, esta é a Parte de geografia: a Convenção Interamericana deixa de ser um tratado abstrato e entra em um SISTEMA — OEA, Comissão, Corte. E é possível entender o art. 2º comparando-o com o da Convenção da ONU (Decreto 40/1991). Se a banca chama de definição ampla, é sobre a tortura; se chama de definição restrita, também."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                O sistema interamericano nasceu em 1948, no mesmo berço do sistema universal: enquanto a ONU proclamava a DUDH (Parte 1 da coleção), a Organização dos Estados Americanos proclamava a Declaração Americana dos Direitos e Deveres do Homem. O sistema ganhou corro e reforço em 1959, com a Comissão Interamericana de Direitos Humanos, e em 1969 com o Pacto de San José da Costa Rica — a Convenção Americana sobre Direitos Humanos — e em 1979, com a Corte Interamericana, foro judicial permanente que julga os Estados que aceitem sua jurisdição.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Nesse ecossistema, a Convenção Interamericana para Prevenir e Punir a Tortura é o instrumento temático que triggou a luta das Américas contra a tortura: adotada em Cartagena, na Colômbia, em 9 de dezembro de 1985, e promulgada no Brasil pelo Decreto 98.386, de 22 de agosto de 1989 — rito ordinário, anterior à EC 45/2004, portanto <strong className="font-semibold text-ink">norma SUPRALEGAL</strong> no país (logo abaixo da Constituição e acima das leis ordinárias). Vale notar a cautela: ela foi promulgada ANTES da CF/88 — que a acolheu no art. 5º, XLIII.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                A diferença que decide dez em dez questões é compará-la com a Convenção da ONU contra o mesmo tema: enquanto a definição interamericana (art. 2º) é <strong className="font-semibold text-ink">ampla</strong> — qualquer dolor ou sofrimento, qualquer finalidade, qualquer mão, e ainda inclui métodos de obliteração da personalidade —, a definição da ONU (CIEFDR era a melhor comparação?) NÃO: a definição da Convenção da ONU contra a Tortura é <strong className="font-semibold text-ink">restrita</strong>, pois exige dor ou sofrimento graves, finalidade específica no texto e nexo com funcionário público ou consentimento estatal. A complementaridade é também um princípio do direito humanos: o que não cabe na definição restrita não deixa de ser tortura pela Convenção Interamericana, nem de ser tratamento cruel — e tudo isso impõe obrigações ao Estado.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que cai tanto?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'CIAPTT × CAT: a definição ampla × a restrita.',
                    'Decreto 98.386 × Decreto 40 — quem é quem.',
                    'Obediência hierárquica não dá justificativa (art. 4º).',
                    'Não justificativa: nem guerra, nem o perigo do detido.',
                    'Jurisdição universal, não devolução e aut dedere.',
                    'Herzog e Ximenes Lopes: o Brasil na Corte IDH.',
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
                  alt="Velas acesas em uma nave escura, em preto e branco"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">A memória das vítimas</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    Para cada herzog que se tortura às escuras, o sistema interamericano é o último recorte de justiça.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Scale className="size-5" style={{ color: '#f08f7c' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Simplifique assim</p>
                  </div>
                  <p className="mt-3 font-display text-3xl font-bold leading-tight">
                    Interamericana <span style={{ color: '#f08f7c' }}>é mais ampla</span>
                    <br />
                    <span className="text-paper/50">que a ONU.</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">
                    A definição CIAPTT <strong>não exige</strong> agente público, <strong>não exige</strong> dor grave e pega qualquer finalidade — ainda pune os métodos de obliteração da personalidade mesmo sem dor física.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <ShieldAlert className="size-5" style={{ color: '#f08f7c' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">Art. 4º</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Obediência hierárquica não justifica — cuidado: nem o subordinado nem o superior escapam.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <FileSearch className="size-5" style={{ color: '#f08f7c' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">Art. 12–14</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Jurisdição universal, não devolução e extradite-or-prosecute — o trio universal.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#f08f7c40', backgroundColor: '#f08f7c0a' }}>
                  <div className="flex items-center gap-3">
                    <Handshake className="size-5" style={{ color: '#f08f7c' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#f08f7c' }}>
                      Status no Brasil
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Decreto 98.386/1989 e Decreto 40/1991: ambas norma supralegal (anteriores à EC 45/2004). A aceitação da jurisdição da Corte IDH em 1998 fez com violações graves encontrem foro internacional — é por isso que Ximenes Lopes e Herzog desaguaram em San José.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* sistema interamericano */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Globe2 className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                O sistema interamericano <span className="italic font-light text-gold-3">em três pontos</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {sistema.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div
                  className="h-full rounded-3xl border bg-white p-6 transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: `${s.hex}35` }}
                >
                  <span
                    className="inline-flex rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em]"
                    style={{ backgroundColor: `${s.hex}14`, color: s.hex }}
                  >
                    ponto {i + 1}
                  </span>
                  <p className="mt-3 font-display text-lg font-semibold leading-tight text-ink">{s.t}</p>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink/65">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* as três normas */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Interamericana <span className="italic font-light text-gold-3">×</span> ONU{' '}
                <span className="italic font-light text-gold-3">×</span> Lei 9.455/97
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {tres.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.08}>
                <div className="h-full rounded-3xl border bg-white p-7" style={{ borderColor: `${d.hex}45` }}>
                  <h4 className="font-display text-xl font-bold leading-tight text-ink">{d.t}</h4>
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
              <strong className="text-brick">A banca troca as definições propositalmente:</strong> se a questão falar da
              Convenção Interamericana, não marque funcionário público nem dor grave como requisitos; se falar da
              Convenção da ONU contra Tortura, aí sim: dor grave + finalidade específica + nexo estatal. A Lei 9.455/97
              é a norma brasileira: crime comum, ação penal pública incondicionada, reclusão, imprescritível e
              inafiançável.
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo do sistema interamericano</h3>
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
