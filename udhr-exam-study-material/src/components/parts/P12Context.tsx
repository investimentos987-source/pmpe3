import { Reveal, SectionHead } from '../fx';
import { Landmark, Flame, BookOpen, Scale, Gavel, Globe2, ScrollText, ShieldAlert, Users, FileText, Layers } from 'lucide-react';

const timeline = [
  { ano: '1948', titulo: 'DUDH', desc: 'Art.5º proíbe tortura; base universal DH.' },
  { ano: '1965', titulo: 'CIEFDR', desc: 'Convenção Eliminação Discriminação Racial — Dec.65.810/69.' },
  { ano: '1966', titulo: 'PIDCP/PIDESC', desc: 'Pactos ONU — Dec.592/92 e 591/92 — supralegais.' },
  { ano: '1969', titulo: 'CADH', desc: 'Pacto San José — Dec.678/92 — supralegal — RE 466.343.' },
  { ano: '1979', titulo: 'CEDAW', desc: 'Convenção Mulher — Dec.4.377/02 — supralegal.' },
  { ano: '1984', titulo: 'CAT ONU', desc: 'Convenção Tortura adotada 10/12/84 — Dec.40/91 supralegal.' },
  { ano: '1985', titulo: 'CIAPTT OEA', desc: 'Tortura OEA — Dec.98.386/89 supralegal.' },
  { ano: '1989', titulo: 'Criança + 7.716', desc: 'Convenção Criança + Lei 7.716 racismo XLII imprescritível.' },
  { ano: '1990', titulo: 'ECA', desc: 'Lei 8.069 — proteção integral — arts.1-267.' },
  { ano: '1997', titulo: 'Lei 9.455', desc: 'Crimes tortura 2-8a — inafiançável sem graça/anistia XLIII.' },
  { ano: '1999', titulo: 'Guatemala PcD', desc: 'Dec.3.956/01 supralegal — antecede CDPD.' },
  { ano: '2003', titulo: 'EPI + CERD', desc: 'Lei 10.741 idoso 118 arts + Dec.4.738/03 petição CERD.' },
  { ano: '2006', titulo: 'Maria da Penha', desc: 'Lei 11.340 — 5 violências + protetivas — Súmulas 588/589/600.' },
  { ano: '2008', titulo: 'RE 466.343', desc: 'STF 4 níveis: CF → DH rito §3º emenda → DH supralegal → comuns lei.' },
  { ano: '2009', titulo: 'CDPD emenda', desc: 'DL 186/08 + Dec.6.949/09 — primeiro tratado com rito §3º — emenda.' },
  { ano: '2010', titulo: 'Igualdade Racial', desc: 'Lei 12.288 — ações afirmativas, história África, SINAPIR.' },
  { ano: '2015', titulo: 'LBI + ADPF 347', desc: 'Lei 13.146 LBI 127 arts + ADPF 347 estado coisas inconstitucional carcerário.' },
  { ano: '2016', titulo: 'ADI 5357', desc: 'STF: educação inclusiva privada sem taxa extra constitucional.' },
  { ano: '2019', titulo: 'ADO 26', desc: 'STF: homotransfobia = racismo social Lei 7.716.' },
  { ano: '2023', titulo: 'Lei 14.532', desc: 'Injúria racial art.2º-A Lei 7.716 2-5a imprescritível inafiançável.' },
];

const blocos = [
  { t: 'SV STF', a: 'SV 11,14,26', d: 'Algemas, acesso autos, progressão hediondo/tortura', hex: '#991b1b' },
  { t: 'STF comuns', a: 'Súmulas 523,716,718,719,122', d: 'Defesa, regime, estrangeiro filho BR, ADPF 347', hex: '#dc2626' },
  { t: 'STJ ECA', a: 'Súmulas 338,383,492,601', d: 'Tráfico ≠ internação, prescrição, foro guarda, 6m reavalia', hex: '#e8a36b' },
  { t: 'STJ Maria Penha', a: 'Súmulas 588,589,600', d: 'Sem restritiva com violência, sem insignificância, sem coabitação', hex: '#f0a5c0' },
  { t: 'STJ Idoso/LBI/Racismo', a: '552, BPC, transporte', d: 'Surdez unilateral não PcD cota, 2 vagas grátis+50%, injúria racial imprescritível', hex: '#0f766e' },
  { t: 'STF RG', a: '466,5357,4439,ADO26,347,824', d: '4 níveis, inclusiva sem taxa, ensino religioso, homotransfobia racismo, sistema carcerário, Ellwanger', hex: '#2f6fb4' },
  { t: 'STJ Repetitivos', a: '1.221.170,1.095,1.030,1.927', d: 'Idoso BPC, ECA tráfico, Maria Penha protetivas, LBI capacidade plena', hex: '#5eead4' },
  { t: 'Leis correlatas', a: '7.716,9.455,11.340,12.288', d: 'Racismo, tortura, Maria Penha, Igualdade Racial + CDPD emenda', hex: '#7c3aed' },
  { t: 'CF DH', a: '5º,6º,7º,203,208,227,230', d: 'XLII imprescritível, XLIII sem graça/anistia, BPC, AEE, prioridade absoluta', hex: '#b8a7e9' },
  { t: 'Status tratados', a: '4 níveis', d: 'CF → DH emenda (CDPD) → DH supralegal (CADH,CAT) → comuns lei + bloco + convencionalidade', hex: '#4b5563' },
];

export default function P12Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Contexto · 4 níveis RE 466.343 · supralegal × emenda · bloco constitucionalidade"
          title={
            <>
              Súmulas e jurisprudência: o{' '}
              <span className="italic font-light" style={{ color: '#991b1b' }}>fechamento da coleção</span> de Direitos Humanos
            </>
          }
          desc="Parte 12 integra tudo: STF e STJ, leis correlatas e status dos tratados. A tese que decide 90% das questões é RE 466.343 (2008): 4 níveis — CF no topo, tratados DH com rito art.5º §3º (3/5, 2 turnos) são emenda constitucional (ex: CDPD Dec.6.949/09), tratados DH sem rito são supralegais (ex: CADH Dec.678/92, CAT Dec.40/91, CIAPTT Dec.98.386/89, Convenção Guatemala Dec.3.956/01, CEDAW, CIEFDR, Convenção Criança), tratados comuns são lei ordinária. Daí decorre bloco de constitucionalidade (CF + emenda CDPD) e controle de convencionalidade (supralegal afasta lei por inconvencionalidade). Com SV 11 algemas, SV 26 progressão tortura, Súmulas 588/589/600 Maria da Penha, 492/338/601 ECA, 552 LBI surdez unilateral, ADI 5357 inclusiva sem taxa extra, ADO 26 homotransfobia=racismo, ADPF 347 sistema carcerário inconstitucional, HC 82.424 Ellwanger raça social, e leis 7.716/89, 9.455/97, 11.340/06, 12.288/10."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                Depois de 11 partes de tratados e estatutos, falta a cola que une tudo: <strong className="font-semibold text-ink">súmulas, jurisprudência dominante e legislação correlata</strong>. O STF, no <strong className="font-semibold text-ink">RE 466.343 (2008, caso depositário infiel)</strong>, fixou a <strong className="font-semibold text-ink">teoria dos 4 níveis</strong> que toda banca cobra: <strong className="font-semibold text-ink">1) CF e emendas</strong> no topo; <strong className="font-semibold text-ink">2) tratados DH aprovados pelo rito do art.5º §3º (3/5, 2 turnos, Câmara e Senado)</strong> — status <strong className="font-semibold text-ink">emenda constitucional</strong> — único exemplo até hoje é a <strong className="font-semibold text-ink">CDPD da ONU (DL 186/08 + Dec.6.949/09)</strong> e seu Protocolo Facultativo; <strong className="font-semibold text-ink">3) tratados DH não aprovados por esse rito</strong> — status <strong className="font-semibold text-ink">supralegal</strong> — abaixo CF, acima leis — ex: <strong className="font-semibold text-ink">CADH (Dec.678/92), PIDCP (592/92), PIDESC (591/92), CAT ONU (Dec.40/91), CIAPTT OEA (98.386/89), Convenção Guatemala PcD (3.956/01), CEDAW (4.377/02), CIEFDR (65.810/69), Convenção Criança (99.710/90)</strong>; <strong className="font-semibold text-ink">4) tratados comuns</strong> — status <strong className="font-semibold text-ink">lei ordinária</strong>.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Daí decorrem dois controles: <strong className="font-semibold text-ink">bloco de constitucionalidade</strong> — CF + tratados emenda (CDPD) + princípios — parâmetro de ADI; e <strong className="font-semibold text-ink">controle de convencionalidade</strong> — compatibilidade leis com tratados supralegais (CADH, CAT, etc.) — qualquer juiz pode afastar lei ordinária por inconvencionalidade (difuso) e STF via ADPF/RE. E a regra de ouro: <strong className="font-semibold text-ink">norma mais benéfica prevalece</strong> (art.29 CADH, art.16 §2º CAT, art.41 ECA, art.121 LBI, art.5º §2º CF).
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Nas <strong className="font-semibold text-ink">Súmulas Vinculantes</strong>, as que mais caem em DH: <strong className="font-semibold text-ink">SV 11 algemas</strong> — só resistência, fuga ou perigo, fundamentada escrita, senão nulidade + responsabilidade agente e Estado — concretiza art.5º III CF + art.5º DUDH + art.7º PIDCP + art.1º CAT; <strong className="font-semibold text-ink">SV 14 acesso autos</strong> — defensor acessa prova já documentada em investigação policial — ampla defesa art.5º LV + art.8º CADH + art.7º CAT tratamento justo; <strong className="font-semibold text-ink">SV 26 progressão hediondo/tortura</strong> — inconstitucional regime integral fechado (HC 82.959) — tortura Lei 9.455/97 equiparada hediondo pode progredir com requisitos LEP.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                <strong className="font-semibold text-ink">STF comuns</strong>: Súmula 523 falta defesa nulidade absoluta vs deficiência precisa prejuízo; 716 progressão hediondo/tortura possível, 718/719 regime mais severo precisa motivação concreta art.33 §3º e 59 CP, não só gravidade abstrata; 122 estrangeiro com filho/cônjuge BR não expulso + non-refoulement art.3º CAT; ADPF 347 estado coisas inconstitucional sistema carcerário — superlotação = tratamento degradante art.16 CAT + art.5º III/XLVII/XLVIII/XLIX — audiência custódia 24h.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                Igualdade racial: <strong className="font-semibold text-ink">HC 82.424 Ellwanger</strong> raça é construção social, antissemitismo é racismo; <strong className="font-semibold text-ink">ADO 26/MI 4733</strong> homotransfobia = racismo social Lei 7.716 até lei específica; <strong className="font-semibold text-ink">ADPF 186</strong> cotas raciais constitucionais; <strong className="font-semibold text-ink">Lei 14.532/23</strong> injúria racial art.2º-A Lei 7.716 2-5a inafiançável imprescritível — STF HC 154.248. Criança: RE 1.010.606 biografias sem censura prévia mas indenização posterior, ECA supralegal + art.227 prioridade absoluta.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                <strong className="font-semibold text-ink">STJ DH</strong>: ECA Súmula 492 tráfico ≠ internação automática, 338 prescrição aplica socioeducativa, 383 foro domicílio detentor guarda, 601 reavaliação 6m art.121 §2º; Maria da Penha 588 sem restritiva com violência, 589 sem insignificância, 600 sem coabitação, Tema 1.030 protetivas sem BO sem prazo fixo enquanto risco; Idoso REsp 1.221.170 2 vagas gratuitas + 50% art.40 EPI + art.34 par único BPC não entra cálculo outro BPC, Tema 1.093 outros elementos miserabilidade; LBI Súmula 552 surdez unilateral não PcD cota + ADI 5357 sem taxa extra escola; Racismo AgRg AREsp 1.940.381 injúria racial = racismo imprescritível.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                <strong className="font-semibold text-ink">Legislação correlata</strong>: Lei 7.716/89 20 condutas 1-3a (mídia 2-5a) + 2º-A injúria 2-5a XLII inafiançável imprescritível; Lei 9.455/97 2-8a (grave 4-10 morte 8-16 omissão 1-4 detenção) + aumento criança/gestante/PcD/idoso/público/sequestro + perda cargo dobro + XLIII inafiançável sem graça/anistia + hediondo + SV 26 progressão; Lei 11.340/06 5 violências física/psicológica/sexual/patrimonial/moral + protetivas art.22 cautelar satisfativa sem BO sem coabitação sem prazo; Lei 12.288/10 ações afirmativas + história África Lei 10.639/03 + religiões matriz africana + SINAPIR; Dec.6.949/09 CDPD emenda; CF art.5º XLII/XLIII/XLI/LVI/LV, art.6º sociais, art.7º XXX/XXXI, art.203 V BPC, art.208 III AEE preferencial regular, art.227 prioridade absoluta, art.230 idoso 65+ grátis urbano.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Pegadinhas que mais reprovam</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    '“Todo tratado DH é constitucional” — ERRADO, só rito §3º é emenda (CDPD).',
                    '“CDPD é supralegal” — ERRADO, é emenda.',
                    '“Supralegal abaixo da lei” — ERRADO, acima da lei, abaixo CF.',
                    '“Supralegal parâmetro ADI” — ERRADO, só convencionalidade; emenda sim ADI.',
                    '“Tortura imprescritível” — ERRADO, XLIII inafiançável sem graça/anistia, imprescritível é racismo XLII e ação grupos armados XLIV.',
                    '“Injúria racial prescreve” — ERRADO, Lei 14.532/23 + STF: imprescritível inafiançável como racismo.',
                    '“Homofobia não é racismo” — ERRADO, ADO 26 = racismo social Lei 7.716.',
                    '“ECA é lei ordinária sem status supralegal” — ERRADO, supralegal + art.227 prioridade absoluta.',
                    '“Tráfico = internação automática” — ERRADO, Súmula 492 STJ.',
                    '“Maria Penha precisa coabitação/BO/prazo fixo” — ERRADO, Súmula 600 sem coabitação + Tema 1.030 sem BO sem prazo.',
                    '“Surdez unilateral é PcD cota” — ERRADO, Súmula 552 STJ não é.',
                    '“Escola pode cobrar taxa extra apoio PcD” — ERRADO, ADI 5357 + art.28 §1º LBI veda.',
                    '“BPC idoso impede outro BPC” — ERRADO, art.34 par único EPI não entra cálculo.',
                    '“Algemas regra sem fundamentação” — ERRADO, SV 11 exige resistência/fuga/perigo + escrito + nulidade.',
                    '“Hediondo/tortura integral fechado” — ERRADO, SV 26 + Súmulas 716/718/719 permitem progressão com motivo concreto.',
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
                  alt="Livros e balança — símbolo bloco constitucionalidade"
                  className="relative rounded-3xl border border-ink/15 grayscale contrast-125"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/80 px-4 py-3 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">RE 466.343 · 2008 · 4 níveis</p>
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    CF → DH emenda (CDPD) → DH supralegal (CADH, CAT) → comuns lei. Norma mais benéfica prevalece.
                  </p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Scale className="size-5" style={{ color: '#0f766e' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Teoria 4 níveis</p>
                  </div>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight">
                    CF → <span style={{ color: '#0f766e' }}>Emenda</span> → Supralegal → Lei
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">
                    Emenda = CDPD rito §3º (3/5 2 turnos). Supralegal = CADH, PIDCP, CAT, CIAPTT, Guatemala, CEDAW, CIEFDR, Criança. Comum = lei. Bloco = CF+emenda; Convencionalidade = supralegal.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-3 gap-4">
                <Reveal delay={0.25}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <ShieldAlert className="size-5" style={{ color: '#991b1b' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">SV 11</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">algemas só resistência/fuga/perigo + escrito + nulidade</p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Users className="size-5" style={{ color: '#e8a36b' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">588/589/600</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">Maria Penha sem restritiva, sem insignificância, sem coabitação</p>
                  </div>
                </Reveal>
                <Reveal delay={0.35}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-white p-5">
                    <Gavel className="size-5" style={{ color: '#0f766e' }} />
                    <p className="mt-3 font-display text-2xl font-semibold text-ink">ADO 26</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">homotransfobia = racismo Lei 7.716</p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.4}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#991b1b40', backgroundColor: '#991b1b0a' }}>
                  <div className="flex items-center gap-3">
                    <FileText className="size-5" style={{ color: '#991b1b' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#991b1b' }}>
                      Leis correlatas
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    7.716 racismo 1-3a (mídia 2-5a) + 2º-A injúria 2-5a imprescritível; 9.455 tortura 2-8a (grave 4-10 morte 8-16 omissão 1-4) + perda cargo dobro + XLIII; 11.340 5 violências + protetivas sem BO; 12.288 ações afirmativas + SINAPIR; 6.949 CDPD emenda.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.45}>
                <div className="rounded-3xl border p-6" style={{ borderColor: '#7c3aed40', backgroundColor: '#7c3aed0a' }}>
                  <div className="flex items-center gap-3">
                    <Layers className="size-5" style={{ color: '#7c3aed' }} />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#7c3aed' }}>
                      CF DH
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Art.5º XLII racismo imprescritível inafiançável, XLIII tortura inafiançável sem graça/anistia, XLI discriminação, LVI prova ilícita, LV ampla defesa. Art.203 V BPC 1 SM, 208 III AEE preferencial regular, 227 prioridade absoluta, 230 idoso 65+ grátis urbano.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Landmark className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Arquitetura da Parte 12 <span className="italic font-light text-gold-3">— 10 blocos · 42 marcos</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {blocos.map((e, i) => (
              <Reveal key={e.t} delay={i * 0.03}>
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
                  <p className="mt-3 font-display text-sm font-semibold leading-tight text-ink">{e.a}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-ink/60">{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Globe2 className="size-5 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Linha do tempo DH Brasil — 1948-2023</h3>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {timeline.map((t, i) => (
              <Reveal key={t.ano+t.titulo} delay={i * 0.02}>
                <div className="relative h-full rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(16,23,37,0.45)]">
                  <span className="absolute -top-3 left-4 rounded-full bg-gold px-2.5 py-0.5 font-mono text-[9px] font-semibold tracking-widest text-ink">
                    {t.ano}
                  </span>
                  <p className="mt-2 font-display text-sm font-semibold leading-tight text-ink">{t.titulo}</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-ink/60">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <ScrollText className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                Status tratados <span className="italic font-light text-gold-3">— 4 níveis RE 466.343</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ['Nível 1 — CF', 'Constituição e emendas — topo — parâmetro ADI — ex: art.5º XLII/XLIII'],
              ['Nível 2 — Emenda', 'DH rito art.5º §3º (3/5 2 turnos) — emenda constitucional — ex: CDPD Dec.6.949/09 — bloco constitucionalidade — parâmetro ADI'],
              ['Nível 3 — Supralegal', 'DH sem rito §3º — acima lei, abaixo CF — ex: CADH Dec.678/92, CAT Dec.40/91, CIAPTT 98.386/89, Guatemala 3.956/01, CEDAW, CIEFDR, Criança — controle convencionalidade — inconvencionalidade'],
              ['Nível 4 — Lei', 'Tratados comuns — lei ordinária — cronologia/especialidade — ex: acordos comerciais'],
            ].map(([n, d], i) => (
              <Reveal key={n} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-4">
                  <p className="font-display text-sm font-bold text-ink">{n}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-ink/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-5 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/[0.08] to-transparent px-5 py-4 text-sm leading-relaxed text-ink/70">
              <strong className="text-gold-3">Regra de ouro:</strong> norma mais benéfica prevalece — art.29 CADH, art.16 §2º CAT, art.41 ECA, art.121 LBI, art.5º §2º CF. <strong className="text-ink">Supralegal = controle convencionalidade (inconvencional)</strong>; <strong className="text-ink">Emenda = controle constitucionalidade (ADI)</strong>. RE 466.343 decide 90% das questões de hierarquia.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
