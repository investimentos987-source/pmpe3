import { Reveal, SectionHead } from '../fx';
import {
  Landmark,
  Flame,
  BookOpen,
  Network,
  Gavel,
  Scale,
  Users,
  ShieldCheck,
  Building2,
  ScrollText,
} from 'lucide-react';

const titulos = [
  { t: 'Título I', s: 'Política de atendimento', a: '86 – 97', hex: '#c19a3d' },
  { t: 'Título II', s: 'Medidas de proteção', a: '98 – 102', hex: '#0f766e' },
  { t: 'Título III', s: 'Prática de ato infracional', a: '103 – 128', hex: '#c11f5d' },
  { t: 'Título IV', s: 'Medidas aos pais ou responsável', a: '129 – 130', hex: '#7c3aed' },
  { t: 'Título V', s: 'Conselho Tutelar', a: '131 – 140', hex: '#2f6fb4' },
  { t: 'Título VI', s: 'Acesso à Justiça', a: '141 – 224', hex: '#0e7490' },
  { t: 'Título VII', s: 'Crimes e infrações administrativas', a: '225 – 258-C', hex: '#991b1b' },
  { t: 'Disp. finais', s: 'Vigência e revogação', a: '259 – 267', hex: '#4b5563' },
];

const eixos = [
  {
    t: 'Defesa',
    hex: '#0e7490',
    icon: Gavel,
    d: 'Judiciário, Ministério Público, Defensoria Pública, Segurança Pública e Conselhos Tutelares — responsabilização e exigibilidade dos direitos.',
  },
  {
    t: 'Promoção',
    hex: '#0f766e',
    icon: ShieldCheck,
    d: 'Políticas sociais básicas, assistência social e serviços de proteção — saúde, educação, cultura e convivência familiar.',
  },
  {
    t: 'Controle',
    hex: '#c19a3d',
    icon: Users,
    d: 'Conselhos de Direitos (CONANDA, CEDCA, CMDCA), conferências e fóruns da sociedade civil — deliberação e fiscalização das políticas.',
  },
];

const orgaos = [
  {
    nome: 'Conselho de Direitos (CMDCA)',
    hex: '#c19a3d',
    itens: ['Delibera e controla a POLÍTICA', 'Composição PARITÁRIA', 'Gere o Fundo (FIA)', 'Registra entidades e programas', 'Função NÃO remunerada (art. 89)'],
  },
  {
    nome: 'Conselho Tutelar',
    hex: '#2f6fb4',
    itens: ['Atende o CASO CONCRETO', '5 membros eleitos, 4 anos', 'Aplica arts. 101, I-VII e 129, I-VII', 'Requisita serviços e representa ao MP', 'REMUNERADO (art. 134)'],
  },
];

const timeline = [
  { ano: '1990', titulo: 'ECA', desc: 'Lei 8.069/90 estrutura o Livro II: política, medidas, ato infracional, Conselho Tutelar e justiça.' },
  { ano: '2006', titulo: 'SINASE (Resolução)', desc: 'CONANDA aprova o Sistema Nacional de Atendimento Socioeducativo como parâmetro nacional.' },
  { ano: '2009', titulo: 'Lei 12.010', desc: 'Reforma a convivência familiar, prazos de acolhimento e procedimentos judiciais.' },
  { ano: '2012', titulo: 'Lei 12.594 · SINASE', desc: 'O SINASE vira LEI: regula a execução das medidas socioeducativas e o PIA.' },
  { ano: '2012', titulo: 'Lei 12.696', desc: 'Conselho Tutelar: mandato de 4 anos, recondução e direitos trabalhistas dos conselheiros.' },
  { ano: '2015', titulo: 'Lei 13.106', desc: 'Vender bebida alcoólica a menor deixa de ser infração administrativa e passa a ser CRIME (art. 243).' },
  { ano: '2017', titulo: 'Lei 13.509 / 13.431', desc: 'Novos prazos de adoção e destituição; sistema de escuta especializada e depoimento especial.' },
];

export default function P5bContext() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Parte especial · sistema de garantia · SINASE"
          title={
            <>
              Da declaração de direitos{' '}
              <span className="italic font-light" style={{ color: '#c11f5d' }}>
                à máquina que os efetiva
              </span>
            </>
          }
          desc="Se o Livro I diz QUAIS são os direitos, o Livro II diz COMO eles se realizam: quem executa a política, quem aplica medidas, como se apura o ato infracional, o que faz o Conselho Tutelar, como se acessa a Justiça e o que acontece com quem viola a lei. São 182 artigos — e a parte mais cobrada em concursos."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                O Livro II é a engenharia do Estatuto. Ele abre com a POLÍTICA DE ATENDIMENTO (arts. 86 a 97), que organiza o Sistema de Garantia de Direitos em torno de três eixos — promoção, defesa e controle — e de duas diretrizes que mudaram o mapa do atendimento no Brasil: a MUNICIPALIZAÇÃO e a criação de CONSELHOS DE DIREITOS paritários, deliberativos e gestores de fundos próprios.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Em seguida vêm os dois trilhos que jamais se cruzam: as MEDIDAS DE PROTEÇÃO (arts. 98 a 102), destinadas a quem tem direitos ameaçados ou violados, e as MEDIDAS SOCIOEDUCATIVAS (arts. 112 a 125), respostas exclusivas ao ADOLESCENTE autor de ato infracional. À criança que pratica ato infracional aplicam-se apenas medidas protetivas (art. 105) — essa fronteira é a pergunta número um do módulo.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Depois, o Estatuto cria o <strong className="font-semibold text-ink">Conselho Tutelar</strong> (arts. 131 a 140), órgão permanente, autônomo e não jurisdicional; desenha o <strong className="font-semibold text-ink">acesso à Justiça</strong> (arts. 141 a 224), com varas especializadas, procedimentos próprios, sistema recursal adaptado e ação civil pública para exigir políticas públicas; e fecha com o rol de <strong className="font-semibold text-ink">crimes</strong> (arts. 225 a 244-B) e <strong className="font-semibold text-ink">infrações administrativas</strong> (arts. 245 a 258-C). Desde 2012, a execução das medidas socioeducativas é detalhada pela <strong className="font-semibold text-ink">Lei do SINASE (12.594/2012)</strong>, que complementa — e não substitui — o ECA.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que o Livro II decide a prova?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Art. 121: “6 · 3 · 21” é presença quase obrigatória.',
                    'Prazos: 45 dias (provisória) × 3 meses (sanção) × 6 meses.',
                    'Conselho de Direitos × Conselho Tutelar: troca clássica.',
                    'Remissão: quem concede, quando e com qual medida.',
                    'Súmulas 108, 265, 338, 342, 492 e 500 do STJ.',
                    'Crimes: bebida (243), corrupção (244-B) e pornografia (240).',
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
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">Parte Especial</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    Arts. 86 a 267: a parte do ECA que transforma direito em procedimento.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <ScrollText className="size-5 text-gold-2" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">O Livro II em números</p>
                  </div>
                  <p className="mt-3 font-display text-5xl font-bold">
                    182<span style={{ color: '#f0a5c0' }}>.</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    artigos (86 a 267), distribuídos em <strong>7 títulos</strong>: política, proteção, ato infracional, medidas aos pais, Conselho Tutelar, Justiça e responsabilização.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Gavel className="size-5" style={{ color: '#c11f5d' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">6 · 3 · 21</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Internação: reavalia em 6 meses, teto de 3 anos, liberação compulsória aos 21.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Building2 className="size-5" style={{ color: '#c11f5d' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">SINASE</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Lei 12.594/2012: execução das medidas socioeducativas e Plano Individual de Atendimento.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#c11f5d40', backgroundColor: '#c11f5d0a' }}>
                  <div className="flex items-center gap-3">
                    <Scale className="size-5" style={{ color: '#c11f5d' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#c11f5d' }}>
                      A fronteira que nunca se cruza
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    <strong>CRIANÇA</strong> (até 12 incompletos) que pratica ato infracional → apenas medidas de PROTEÇÃO (art. 105). <strong>ADOLESCENTE</strong> (12 a 18) → medidas SOCIOEDUCATIVAS, aplicadas exclusivamente pelo JUIZ (Súmula 108/STJ).
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* eixos do SGD */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Network className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Sistema de Garantia de Direitos <span className="italic font-light text-gold-3">— os três eixos</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {eixos.map((e, i) => (
              <Reveal key={e.t} delay={i * 0.08}>
                <div
                  className="h-full rounded-3xl border bg-white p-6 transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: `${e.hex}35` }}
                >
                  <span
                    className="grid size-11 place-items-center rounded-2xl"
                    style={{ backgroundColor: `${e.hex}14`, color: e.hex, border: `1px solid ${e.hex}30` }}
                  >
                    <e.icon className="size-5" />
                  </span>
                  <p className="mt-4 font-display text-xl font-semibold text-ink">{e.t}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/65">{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* conselhos */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Users className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Conselho de <span className="italic font-light text-gold-3">Direitos</span> × Conselho{' '}
                <span className="italic font-light text-gold-3">Tutelar</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {orgaos.map((o, i) => (
              <Reveal key={o.nome} delay={i * 0.1}>
                <div className="h-full rounded-3xl border bg-white p-7" style={{ borderColor: `${o.hex}45` }}>
                  <div className="flex items-center gap-3">
                    <span className="size-3 rounded-full" style={{ backgroundColor: o.hex }} />
                    <h4 className="font-display text-xl font-bold text-ink">{o.nome}</h4>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {o.itens.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/70">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ backgroundColor: o.hex }} />
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
              <strong className="text-brick">Pegadinha nº 1 do módulo:</strong> a banca troca os dois conselhos. Quem
              formula e controla a POLÍTICA é o Conselho de Direitos (CMDCA), paritário e não remunerado; quem atende o
              CASO concreto é o Conselho Tutelar, eleito pela população e remunerado. E quem registra programas é o
              CMDCA (art. 90), enquanto a FISCALIZAÇÃO das entidades cabe ao Judiciário, ao MP e ao Conselho Tutelar
              (art. 95).
            </p>
          </Reveal>
        </div>

        {/* estrutura */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                A arquitetura do Livro II <span className="italic font-light text-gold-3">(arts. 86 a 267)</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                As reformas que caem na prova
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {timeline.map((t, i) => (
              <Reveal key={t.titulo} delay={i * 0.05}>
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
