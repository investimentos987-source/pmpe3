import { Reveal, SectionHead } from '../fx';
import {
  Landmark,
  Flame,
  BookOpen,
  Users,
  Globe2,
  ClipboardCheck,
  Megaphone,
  ShieldAlert,
  Ban,
  Heart,
  Sprout,
  MessageCircle,
  FileText,
} from 'lucide-react';

const principios = [
  {
    n: '01',
    art: 'Art. 2º',
    icon: Ban,
    hex: '#2f6fb4',
    t: 'Não discriminação',
    d: 'Todos os direitos a TODA criança sob a jurisdição do Estado, sem distinção — e sem que ela pague pela condição, opinião ou crença dos pais (§2º).',
    k: 'Jurisdição, não nacionalidade.',
  },
  {
    n: '02',
    art: 'Art. 3º',
    icon: Heart,
    hex: '#c11f5d',
    t: 'Melhor interesse da criança',
    d: 'Em TODAS as medidas — públicas ou privadas, judiciais, administrativas ou legislativas — o interesse maior da criança é a consideração PRIMORDIAL.',
    k: 'Primordial, não “única”. Na adoção (art. 21) vira máxima.',
  },
  {
    n: '03',
    art: 'Art. 6º',
    icon: Sprout,
    hex: '#0f766e',
    t: 'Vida, sobrevivência e desenvolvimento',
    d: 'Direito inerente à vida + dever de assegurar ao MÁXIMO a sobrevivência e o desenvolvimento (físico, mental, moral, espiritual e social).',
    k: 'Viver é o piso; desenvolver-se é o dever.',
  },
  {
    n: '04',
    art: 'Art. 12',
    icon: MessageCircle,
    hex: '#c19a3d',
    t: 'Respeito à opinião (participação)',
    d: 'A criança capaz de formar juízo próprio expressa sua opinião em tudo que a afeta, com peso conforme idade e maturidade — inclusive em processos judiciais e administrativos.',
    k: 'Ouvir ≠ obedecer.',
  },
];

const timeline = [
  { ano: '1924', titulo: 'Declaração de Genebra', desc: 'Primeiro texto internacional sobre direitos da criança, da Liga das Nações (Eglantyne Jebb).' },
  { ano: '1948', titulo: 'DUDH, art. 25', desc: '“A maternidade e a infância têm direito a cuidados e assistência especiais.”' },
  { ano: '1959', titulo: 'Declaração dos Direitos da Criança', desc: 'Res. 1386 (XIV): 10 princípios — mas ainda uma DECLARAÇÃO, sem força vinculante.' },
  { ano: '1979', titulo: 'Ano Internacional da Criança', desc: 'A Polônia propõe transformar a declaração de 1959 em convenção: começam 10 anos de redação.' },
  { ano: '1989', titulo: 'A Convenção nasce', desc: 'Res. 44/25, de 20/11: adotada por CONSENSO na Assembleia Geral.' },
  { ano: '1990', titulo: 'Vigor + Brasil', desc: 'Em vigor em 2/9/1990; Brasil ratifica em 24/9 e promulga pelo Decreto 99.710/1990.' },
  { ano: '2000', titulo: 'Dois Protocolos', desc: 'Conflitos armados (idade para 18) e venda/prostituição/pornografia infantil.' },
  { ano: '2011', titulo: '3º Protocolo', desc: 'Procedimento de COMUNICAÇÕES individuais ao Comitê (em vigor em 2014) — o Brasil não é parte.' },
];

export default function P4Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto · 4 princípios · Comitê"
          title={
            <>
              O tratado mais ratificado{' '}
              <span className="italic font-light" style={{ color: '#2f6fb4' }}>
                da história
              </span>
            </>
          }
          desc="196 Estados-partes — nenhum outro tratado de direitos humanos chegou tão perto da universalidade. Aqui a criança deixa de ser objeto de tutela e vira SUJEITO de direitos: é a virada da doutrina da situação irregular para a proteção integral."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                A proteção internacional da infância começou cedo — Declaração de Genebra (1924), art. 25 da DUDH (1948), Declaração dos Direitos da Criança (1959) —, mas sempre em textos declaratórios, de boa intenção e nenhuma obrigação. Em 1979, o Ano Internacional da Criança, a Polônia propôs converter a declaração de 1959 em tratado. Foram dez anos de negociação, artigo por artigo, até 20 de novembro de 1989.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Naquele dia, a Assembleia Geral adotou <strong className="font-semibold text-ink">por consenso</strong> a Resolução 44/25. O resultado foi um documento singular: reúne no mesmo texto direitos civis, políticos, econômicos, sociais e culturais — indivisíveis — e realiza uma troca de paradigma. A criança deixa de ser “menor”, objeto de intervenção, e passa a ser <strong className="font-semibold text-ink">sujeito de direitos</strong>, titular de voz (art. 12) e de autonomia progressiva (art. 5º). É a consagração da <strong className="font-semibold text-ink">doutrina da proteção integral</strong>.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                O Brasil chegou antes: a CF/88 já trazia a proteção integral no art. 227, e o <strong className="font-semibold text-ink">ECA (Lei 8.069, de 13/7/1990)</strong> foi promulgado meses antes da nossa ratificação (24/9/1990, Decreto 99.710/1990) — por isso se diz que o ECA é filho da Convenção ainda em gestação, redigido sob inspiração direta do texto que se desenhava em Nova York.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Por que a CDC cai tanto?</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Art. 1º × ECA: a diferença de definição é questão garantida.',
                    'Os 4 princípios (2-3-6-12) viram alternativa direta.',
                    '“Consideração primordial” × “única”: a troca clássica.',
                    'Art. 37 e 40: garantias penais juvenis em peso.',
                    'Comitê: 10 → 18 peritos e relatórios “2 + 5”.',
                    'Art. 38 (15 anos) e o Protocolo de 2000 que corrigiu para 18.',
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
                  src="images/context-crc.jpg"
                  alt="Sala de aula vazia com carteiras de madeira e luz entrando pelas janelas, em preto e branco"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">A virada de 1989</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    De objeto de tutela a sujeito de direitos — a criança ganha voz, e o Estado, deveres.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Globe2 className="size-5 text-gold-2" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Alcance</p>
                  </div>
                  <p className="mt-3 font-display text-5xl font-bold">
                    196<span style={{ color: '#7cc0f5' }}>.</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    Estados-partes: o tratado de DH <strong>mais ratificado do mundo</strong>. Curiosidade de prova: os <strong>Estados Unidos assinaram, mas nunca ratificaram</strong> — são o único Estado-membro da ONU fora da Convenção.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <Users className="size-5" style={{ color: '#2f6fb4' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">18 peritos</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Comitê dos Direitos da Criança (art. 43): começou com 10, ampliado por emenda de 1995.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-6">
                    <FileText className="size-5" style={{ color: '#2f6fb4' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">2 + 5</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      Relatórios (art. 44): 2 anos após a vigência e, depois, a cada 5 anos.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.35}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#2f6fb440', backgroundColor: '#2f6fb40a' }}>
                  <div className="flex items-center gap-3">
                    <Landmark className="size-5" style={{ color: '#2f6fb4' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#2f6fb4' }}>
                      Status no Brasil
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Ratificada em <strong>24/9/1990</strong> e promulgada pelo <strong>Decreto 99.710/1990</strong>. Rito ordinário, anterior à EC 45/2004 → norma <strong>SUPRALEGAL</strong> (STF), abaixo da CF e acima das leis — mesmo status da CEDAW (Parte 3).
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 4 princípios */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <Heart className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Os 4 princípios fundamentais <span className="italic font-light text-gold-3">— o “2-3-6-12”</span>
              </h3>
            </div>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-ink/60">
              O Comitê dos Direitos da Criança elegeu quatro artigos como princípios gerais: eles não são apenas direitos
              autônomos — funcionam como <strong>lentes de interpretação</strong> de todos os outros 50 artigos. Se a
              banca pedir “os princípios fundamentais”, a resposta é sempre 2, 3, 6 e 12.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principios.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-2"
                  style={{ borderColor: `${p.hex}30`, boxShadow: '0 24px 60px -45px rgba(16,23,37,0.5)' }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="grid size-12 place-items-center rounded-2xl"
                      style={{ backgroundColor: `${p.hex}14`, color: p.hex, border: `1px solid ${p.hex}30` }}
                    >
                      <p.icon className="size-6" />
                    </span>
                    <span className="font-display text-4xl font-black" style={{ color: `${p.hex}30` }}>
                      {p.n}
                    </span>
                  </div>
                  <span
                    className="mt-5 inline-flex w-fit rounded-full px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
                    style={{ backgroundColor: `${p.hex}12`, color: p.hex }}
                  >
                    {p.art}
                  </span>
                  <h4 className="mt-3 font-display text-xl font-semibold leading-tight text-ink">{p.t}</h4>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/65">{p.d}</p>
                  <p
                    className="mt-4 rounded-xl border-l-[3px] px-3.5 py-2.5 text-[12px] font-medium leading-relaxed text-ink/75"
                    style={{ borderColor: p.hex, backgroundColor: `${p.hex}0c` }}
                  >
                    {p.k}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* comitê */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Users className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                O Comitê dos Direitos da Criança <span className="italic font-light text-gold-3">e suas ferramentas</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <ClipboardCheck className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  Arts. 43–44 · relatórios
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  <strong>18 peritos independentes</strong> (eram 10), mandato de <strong>4 anos</strong>, eleitos em votação secreta. Relatórios em <strong>“2 + 5”</strong>, seguidos de observações finais.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <Megaphone className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  Art. 45 · comentários gerais
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Sugestões e recomendações gerais — como o <strong>Comentário Geral nº 14 (2013)</strong>, sobre o melhor interesse. O <strong>UNICEF</strong> participa expressamente do monitoramento (alínea “a”).
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-ink text-gold-2">
                  <FileText className="size-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45">
                  3 protocolos facultativos
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  <strong>2000:</strong> conflitos armados (idade → 18) e venda/prostituição/pornografia — ambos vigentes no Brasil (Dec. 5.006 e 5.007/2004). <strong>2011:</strong> comunicações individuais — o Brasil NÃO é parte.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-brick/30 bg-brick/[0.07] px-5 py-4 text-sm leading-relaxed text-ink/75">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-brick" />
              <span>
                <strong className="text-brick">Atenção:</strong> o Comitê NÃO é tribunal — não julga nem sanciona.
                Examina relatórios, dialoga e recomenda. Só pelo <em>3º Protocolo</em> (2011) existem comunicações
                individuais, e ainda assim sem natureza de condenação penal.
              </span>
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo da infância no direito internacional</h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {timeline.map((t, i) => (
              <Reveal key={t.ano} delay={i * 0.05}>
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
