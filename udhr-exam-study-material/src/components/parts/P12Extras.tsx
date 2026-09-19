import { Reveal, SectionHead } from '../fx';
import { Table, FileStack, ScrollText, Shield, Gavel, Users, Scale, BookOpen } from 'lucide-react';

const sumulasByTheme = [
  { tema: 'Algemas/Dignidade', sumulas: 'SV 11', tese: 'Só resistência, fuga, perigo + fundamentada escrita, senão nulidade + responsabilidade agente/Estado — DUDH 5º + CAT art.1/2/16', hex: '#991b1b' },
  { tema: 'Defesa/Processo', sumulas: 'SV 14 + Súmula 523', tese: 'Acesso prova documentada inquérito + falta defesa nulidade absoluta; deficiência precisa prejuízo', hex: '#dc2626' },
  { tema: 'Hediondo/Tortura regime', sumulas: 'SV 26 + Súm. 716,718,719', tese: 'Progressão possível hediondo/tortura (HC 82.959) + regime mais severo precisa motivo concreto art.33 §3º 59 CP', hex: '#e8a36b' },
  { tema: 'Estrangeiro/Non-refoulement', sumulas: 'Súm. 122 STF + CAT art.3', tese: 'Estrangeiro filho/cônjuge BR não expulso + non-refoulement CAT — não extradita/deporta se risco tortura', hex: '#0f766e' },
  { tema: 'Sistema carcerário', sumulas: 'ADPF 347 + SV 11 + art.16 CAT', tese: 'Estado coisas inconstitucional — superlotação = degradante art.16 CAT — audiência custódia 24h', hex: '#991b1b' },
  { tema: 'ECA socioeducativa', sumulas: 'Súm. 492,338,383,601 STJ', tese: 'Tráfico ≠ internação automática; prescrição aplica; foro domicílio guarda; reavaliação 6m art.121 §2º', hex: '#f59e0b' },
  { tema: 'Maria da Penha', sumulas: 'Súm. 588,589,600 + Tema 1.030', tese: 'Sem restritiva com violência, sem insignificância, sem coabitação, protetivas sem BO sem prazo fixo enquanto risco', hex: '#f0a5c0' },
  { tema: 'Idoso/BPC', sumulas: 'REsp 1.221.170 + Tema 1.093', tese: '2 vagas grátis +50% art.40 EPI + art.34 par único BPC não entra cálculo outro BPC + miserabilidade outros elementos', hex: '#0f766e' },
  { tema: 'LBI capacidade/inclusiva', sumulas: 'Súm.552 + ADI 5357', tese: 'Surdez unilateral não PcD cota + privada sem taxa extra apoio — art.28 §1º LBI + ADI 5357 constitucional', hex: '#7c3aed' },
  { tema: 'Igualdade racial', sumulas: 'HC 82.424 Ellwanger + ADO 26 + ADPF 186', tese: 'Raça social, antissemitismo racismo, homotransfobia = racismo Lei 7.716, cotas constitucionais, injúria racial imprescritível Lei 14.532/23', hex: '#991b1b' },
  { tema: 'Ensino religioso/liberdade', sumulas: 'ADI 4439 + RE 1.010.606', tese: 'Ensino religioso facultativo confessional pode, biografias sem censura prévia mas indenização posterior', hex: '#2f6fb4' },
  { tema: 'Status tratados', sumulas: 'RE 466.343 4 níveis', tese: 'CF > DH emenda (CDPD) > DH supralegal (CADH,CAT) > comuns lei + bloco + convencionalidade + norma mais benéfica', hex: '#4b5563' },
];

const quadroLegislacao = [
  { lei: 'Lei 7.716/89 racismo', tipo: 'Crime XLII', pena: '1-3a (mídia 2-5a) + 2º-A injúria 2-5a', nota: 'Inafiançável imprescritível, 20 condutas, raça social Ellwanger, homotransfobia ADO26, injúria racial imprescritível Lei14.532', hex: '#991b1b' },
  { lei: 'Lei 9.455/97 tortura', tipo: 'Crime XLIII', pena: '2-8a (grave 4-10 morte 8-16 omissão 1-4 det)', nota: 'Aumento criança/gestante/PcD/idoso/público/sequestro, perda cargo dobro, inafiançável sem graça/anistia, hediondo, SV26 progressão', hex: '#dc2626' },
  { lei: 'Lei 11.340/06 Maria Penha', tipo: 'Violência gênero', pena: '5 violências física/psico/sexual/patrim/moral', nota: 'Protetivas art.22 cautelar satisfativa sem BO sem coabitação sem prazo fixo, Súmulas 588/589/600', hex: '#e8a36b' },
  { lei: 'Lei 12.288/10 Igualdade Racial', tipo: 'Ações afirmativas', pena: 'Política nacional', nota: 'História África Lei10.639/03, religiões matriz africana, SINAPIR, saúde, trabalho, moradia, ADPF186 cotas', hex: '#0f766e' },
  { lei: 'Dec.6.949/09 CDPD', tipo: 'Tratado emenda', pena: 'Emenda constitucional', nota: 'DL 186/08 rito §3º 3/5 2 turnos — único tratado emenda — bloco constitucionalidade — LBI regulamenta — capacidade plena', hex: '#7c3aed' },
  { lei: 'Dec.40/91 CAT + 98.386/89 CIAPTT + 3.956/01 Guatemala', tipo: 'Supralegal', pena: 'Convencionalidade', nota: 'CAT art1 D-I-F-A art2 jus cogens art3 non-refoulement art16 sem finalidade — supralegais', hex: '#2f6fb4' },
  { lei: 'CF art.5º XLII/XLIII/XLI', tipo: 'Constitucional', pena: 'Cláusulas pétreas DH', nota: 'XLII racismo imprescritível inafiançável, XLIII tortura inafiançável sem graça/anistia, XLI discriminação punível, LVI prova ilícita, LV defesa', hex: '#4b5563' },
  { lei: 'CF 203/208/227/230 + ECA/EPI/LBI', tipo: 'Proteção integral', pena: 'Prioridade absoluta', nota: '203 V BPC 1 SM, 208 III AEE preferencial regular, 227 criança prioridade, 230 idoso 65+ grátis urbano vs EPI 60+ 2 vagas', hex: '#b8a7e9' },
];

const pegadinhasHierarquia = [
  { errada: '“Todo tratado DH é constitucional”', certa: 'Só rito art.5º §3º é emenda (CDPD Dec.6.949). Demais DH supralegais.', art: 'RE 466.343' },
  { errada: '“CDPD é supralegal”', certa: 'Emenda constitucional — DL 186/08 + Dec.6.949/09 — bloco + ADI.', art: 'RE 466.343' },
  { errada: '“Supralegal abaixo da lei”', certa: 'Acima da lei, abaixo CF — afasta lei por inconvencionalidade.', art: 'RE 466.343' },
  { errada: '“Supralegal parâmetro ADI”', certa: 'Só convencionalidade; emenda sim ADI — bloco CF+emenda.', art: 'RE 466.343' },
  { errada: '“Tortura imprescritível”', certa: 'XLIII inafiançável sem graça/anistia; imprescritível XLII racismo e XLIV ação grupos armados.', art: 'CF 5º XLII/XLIII/XLIV' },
  { errada: '“Injúria racial prescreve”', certa: 'Lei 14.532/23 art.2º-A 7.716 2-5a imprescritível inafiançável — STF HC 154.248.', art: 'Lei 7.716 2º-A' },
  { errada: '“Homofobia não é racismo”', certa: 'ADO 26/MI 4733 homotransfobia = racismo social Lei 7.716 até lei específica.', art: 'ADO 26' },
  { errada: '“Tráfico = internação automática”', certa: 'Súmula 492 STJ veda automatismo — art.122 ECA excepcional.', art: 'Súm.492' },
  { errada: '“Maria Penha precisa coabitação/BO/prazo”', certa: 'Súm.600 sem coabitação + Tema 1.030 sem BO sem prazo fixo enquanto risco.', art: 'Súm.600 + T1.030' },
  { errada: '“Surdez unilateral é PcD cota”', certa: 'Súmula 552 STJ não é PcD cota.', art: 'Súm.552' },
  { errada: '“Escola pode cobrar taxa extra apoio”', certa: 'ADI 5357 + art.28 §1º LBI veda taxa extra — inclusiva constitucional.', art: 'ADI 5357' },
  { errada: '“Algemas regra sem fundamentação”', certa: 'SV 11 exige resistência/fuga/perigo + escrito + nulidade + responsabilidade.', art: 'SV 11' },
];

export default function P12Extras() {
  return (
    <section id="extras" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="02"
          eyebrow="Tabelas · Súmulas por tema · Legislação correlata · 4 níveis · 12 pegadinhas clássicas"
          title={
            <>
              <span className="italic font-light text-gold-2">Raio-X final</span> — 12 súmulas × 8 leis × 4 níveis
            </>
          }
          desc="Fechamento da coleção 12 partes: de DUDH 1948 à Lei 14.532/23 injúria racial imprescritível. A espinha dorsal é RE 466.343: 4 níveis — CF > DH emenda (CDPD) > DH supralegal (CADH, CAT, CIAPTT, Guatemala, CEDAW, CIEFDR, Criança) > comuns lei. Daí: bloco constitucionalidade (CF+emenda) e controle convencionalidade (supralegal). SV 11 algemas + SV 26 progressão tortura + Súmulas 588/589/600 Maria Penha + 492/338/601 ECA + 552 LBI + ADI 5357 inclusiva + ADO 26 homotransfobia=racismo + ADPF 347 sistema carcerário + HC 82.424 Ellwanger + leis 7.716/9.455/11.340/12.288 + CDPD emenda."
          dark
        />

        {/* Tabela súmulas por tema */}
        <div className="mt-14">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                <Table className="size-5" />
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">
                Súmulas por tema — 12 teses que decidem a prova
              </h3>
            </div>
          </Reveal>

          <div className="overflow-x-auto rounded-2xl border border-paper/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-paper/5 font-mono text-[10px] uppercase tracking-widest text-paper/50">
                <tr>
                  <th className="px-4 py-3">Tema</th>
                  <th className="px-4 py-3">Súmulas/Teses</th>
                  <th className="px-4 py-3">Tese/resumo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper/10">
                {sumulasByTheme.map((r) => (
                  <tr key={r.tema} className="align-top transition-colors hover:bg-paper/[0.04]">
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wide" style={{ backgroundColor: `${r.hex}20`, color: r.hex }}>
                        {r.tema}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs font-semibold text-paper/80">{r.sumulas}</td>
                    <td className="px-4 py-3 text-xs leading-relaxed text-paper/60">{r.tese}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quadro legislação correlata */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                <FileStack className="size-5" />
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">
                Legislação correlata — quadro integrado DH
              </h3>
            </div>
          </Reveal>

          <div className="overflow-x-auto rounded-2xl border border-paper/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-paper/5 font-mono text-[10px] uppercase tracking-widest text-paper/50">
                <tr>
                  <th className="px-4 py-3">Lei/Dec</th>
                  <th className="px-4 py-3">Tipo</th>
                  <th className="px-4 py-3">Pena/Status</th>
                  <th className="px-4 py-3">Nota DH + pegadinha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper/10">
                {quadroLegislacao.map((r) => (
                  <tr key={r.lei} className="align-top transition-colors hover:bg-paper/[0.04]">
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wide" style={{ backgroundColor: `${r.hex}20`, color: r.hex }}>
                        {r.lei}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-paper/60">{r.tipo}</td>
                    <td className="px-4 py-3 font-mono text-xs text-paper/80">{r.pena}</td>
                    <td className="px-4 py-3 text-xs leading-relaxed text-paper/60">{r.nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 níveis */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-paper/10 bg-paper/[0.04] p-7">
              <div className="flex items-center gap-3">
                <Scale className="size-5 text-gold-2" />
                <h4 className="font-display text-lg font-semibold text-paper">4 níveis RE 466.343 — hierarquia</h4>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ['Nível 1 — CF', 'Topo — parâmetro ADI — XLII/XLIII'],
                  ['Nível 2 — Emenda', 'DH rito §3º 3/5 2 turnos — ex: CDPD Dec.6.949 — bloco — ADI'],
                  ['Nível 3 — Supralegal', 'DH sem rito — CADH, CAT, CIAPTT, Guatemala, CEDAW, CIEFDR, Criança — convencionalidade — inconvencional'],
                  ['Nível 4 — Lei', 'Comuns — cronologia/especialidade — lei ordinária'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3 text-sm">
                    <span className="shrink-0 font-mono text-[11px] font-bold text-gold-2">{k}</span>
                    <span className="text-paper/60">{v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-2xl bg-gold/15 px-4 py-3 text-xs leading-relaxed text-paper/70">
                <strong className="text-gold-2">Regra de ouro:</strong> norma mais benéfica prevalece — art.29 CADH, art.16 §2 CAT, art.41 ECA, art.121 LBI, art.5º §2 CF. Supralegal = convencionalidade; Emenda = constitucionalidade.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent p-7">
              <div className="flex items-center gap-3">
                <Shield className="size-5 text-gold-2" />
                <h4 className="font-display text-lg font-semibold text-paper">Bloco × Convencionalidade</h4>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-paper/70">
                <li><strong className="text-paper">Bloco constitucionalidade:</strong> CF + tratados emenda (CDPD) + princípios — parâmetro ADI/ADC/ADPF — art.102 CF.</li>
                <li><strong className="text-paper">Convencionalidade difuso:</strong> qualquer juiz afasta lei incompatível com supralegal (CADH, CAT) — RE 466.343.</li>
                <li><strong className="text-paper">Convencionalidade concentrado:</strong> STF via ADPF/RE — ADPF 347 sistema carcerário inconstitucional art.16 CAT.</li>
                <li><strong className="text-paper">Norma mais benéfica:</strong> art.29 CADH + art.16 §2 CAT + art.41 ECA + art.121 LBI — prevalece mais favorável vítima DH.</li>
                <li><strong className="text-paper">Pegadinha clássica:</strong> “Tratado supralegal revoga CF” — ERRADO, CF prevalece; supralegal só revoga lei.</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Pegadinhas hierarquia */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                <ScrollText className="size-5" />
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">
                12 pegadinhas clássicas hierarquia — RE 466.343
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pegadinhasHierarquia.map((p, i) => (
              <Reveal key={i} delay={i * 0.02}>
                <div className="h-full rounded-2xl border border-paper/10 bg-paper/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">{p.art}</p>
                  <p className="mt-2 text-sm font-semibold leading-tight text-paper/90 line-through decoration-red-400">{p.errada}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gold-2">✔ {p.certa}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* SV 11 + Maria Penha + ECA cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-3xl border border-paper/10 bg-paper/[0.04] p-6">
              <div className="flex items-center gap-3">
                <Gavel className="size-5 text-gold-2" />
                <h4 className="font-display text-base font-semibold text-paper">SV 11 algemas</h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/60">
                Só resistência, fuga ou perigo + fundamentada escrita, senão nulidade + responsabilidade agente e Estado + crime abuso autoridade Lei 13.869/19 art.13. Concretiza art.5º III CF + DUDH 5º + CAT art.1/2/16.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl border border-paper/10 bg-paper/[0.04] p-6">
              <div className="flex items-center gap-3">
                <Users className="size-5 text-gold-2" />
                <h4 className="font-display text-base font-semibold text-paper">Maria Penha 588/589/600</h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/60">
                588 sem restritiva com violência, 589 sem insignificância, 600 sem coabitação, Tema 1.030 protetivas sem BO sem prazo fixo enquanto risco + art.24-A descumprimento crime.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-paper/10 bg-paper/[0.04] p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="size-5 text-gold-2" />
                <h4 className="font-display text-base font-semibold text-paper">ECA 492/338/383/601</h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-paper/60">
                492 tráfico ≠ internação automática, 338 prescrição aplica socioeducativa, 383 foro domicílio guarda, 601 reavaliação 6m art.121 §2º + art.122 excepcionalidade internação.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
