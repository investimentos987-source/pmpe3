import { Reveal, SectionHead } from '../fx';
import { Trophy, Target, BookOpen, CheckCircle2, AlertTriangle, Flame, GraduationCap, Heart } from 'lucide-react';

const gabaritoGeral = [
  { id: 1, g: 'A', tema: 'DUDH art.1º/5º/14' },
  { id: 2, g: 'A', tema: 'Intolerância 1981 art.1º/5º/6º' },
  { id: 3, g: 'A', tema: 'CEDAW art.1º sem preferência' },
  { id: 4, g: 'A', tema: 'Criança <18 4 princípios 2-3-6-12' },
  { id: 5, g: 'A', tema: 'ECA art.2º 12 inc/12-18/18-21' },
  { id: 6, g: 'A', tema: 'CIEFDR com preferência Dec.4738' },
  { id: 7, g: 'A', tema: 'EPI 60 anos 2 vagas+50%' },
  { id: 8, g: 'A', tema: 'CIAPTT art.2º qualquer outro fim' },
  { id: 9, g: 'A', tema: 'Guatemala percepção diferenciação' },
  { id: 10, g: 'A', tema: 'LBI capacidade CDPD emenda CAT D-I-F-A' },
  { id: 11, g: 'A', tema: 'DUDH buscar/gozar + CF LII + RE466' },
  { id: 12, g: 'A', tema: '1981 pais + interesse maior + ADI4439' },
  { id: 13, g: 'A', tema: 'CEDAW art.4º + Maria Penha 5 violências' },
  { id: 14, g: 'A', tema: 'Criança interesse maior + oitiva + ECA 3m/18m' },
  { id: 15, g: 'A', tema: 'ECA art.4º 4Ps + art.13 suspeita Conselho' },
  { id: 16, g: 'A', tema: 'ECA guarda tutela adoção 18/16 veda' },
  { id: 17, g: 'A', tema: 'ECA socioeducativas 6-3-21 V-R-D S492' },
  { id: 18, g: 'A', tema: 'CIEFDR ação afirmativa + 7.716' },
  { id: 19, g: 'A', tema: 'EPI 2 vagas + BPC art.34 + CF 65 urbano' },
  { id: 20, g: 'A', tema: 'CIAPTT non-refoulement + jurisdição universal' },
  { id: 21, g: 'A', tema: 'CAT art.2º jus cogens + art.3º non-refoulement' },
  { id: 22, g: 'A', tema: 'Guatemala supralegal vs CDPD emenda vs LBI lei' },
  { id: 23, g: 'A', tema: 'LBI curatela só patrimonial vs TDA 2 apoiadores' },
  { id: 24, g: 'A', tema: 'LBI crimes + ADI5357 sem taxa' },
  { id: 25, g: 'A', tema: 'RE 466 4 níveis' },
  { id: 26, g: 'A', tema: '7.716 + 2º-A injúria 2-5a imprescritível' },
  { id: 27, g: 'A', tema: '9.455 2-8a/4-10/8-16/1-4 perda cargo dobro' },
  { id: 28, g: 'A', tema: 'Maria Penha 5 violências sem coabitação sem BO' },
  { id: 29, g: 'A', tema: '12.288 ações afirmativas história África SINAPIR' },
  { id: 30, g: 'A', tema: 'CAT art.15 prova ilícita art.16 sem finalidade' },
  { id: 31, g: 'A', tema: 'DUDH art.5º + SV11 algemas' },
  { id: 32, g: 'A', tema: 'SV14 já documentado + SV26 progressão' },
  { id: 33, g: 'A', tema: 'Súmulas 716/718/719 motivo concreto' },
  { id: 34, g: 'A', tema: 'Súmula122 filho BR + CAT art.3º' },
  { id: 35, g: 'A', tema: 'ADPF347 inconstitucional + art.16 CAT' },
  { id: 36, g: 'A', tema: 'Ellwanger raça social + ADO26 homotransfobia' },
  { id: 37, g: 'A', tema: 'Súmula492 tráfico≠internação + 338 prescrição' },
  { id: 38, g: 'A', tema: 'Súmula383 foro + 601 6m reavalia' },
  { id: 39, g: 'A', tema: '588 sem restritiva 589 sem insignificância 600 sem coabitação Tema1030' },
  { id: 40, g: 'A', tema: 'REsp1.221.170 BPC não entra + Tema1093' },
  { id: 41, g: 'A', tema: 'Súmula552 surdez não cota + ADI5357' },
  { id: 42, g: 'A', tema: 'Lei14.532 injúria racial imprescritível' },
  { id: 43, g: 'A', tema: 'CAT D-I-F-A vs CIAPTT qualquer outro fim' },
  { id: 44, g: 'A', tema: 'CAT art.6º detenção art.7º aut dedere art.8º extradição' },
  { id: 45, g: 'A', tema: 'CAT art.12 ex officio art.13 queixa art.14 reparação' },
  { id: 46, g: 'A', tema: 'CAT art.20 sistemática + art.21 5 Estados + art.22 individual' },
  { id: 47, g: 'A', tema: 'OPCAT SPT+MNPCT 11 peritos 3a sem aviso' },
  { id: 48, g: 'A', tema: 'CDPD art.24 inclusiva art.12 capacidade art.27 trabalho' },
  { id: 49, g: 'A', tema: 'LBI art.93 cota só direta + art.34 BPC + art.40 2 vagas' },
  { id: 50, g: 'A', tema: 'Bloco vs convencionalidade + mais benéfica' },
  { id: 51, g: 'C', tema: 'C/E DUDH+CAT+SV11+SV26' },
  { id: 52, g: 'C', tema: 'C/E CEDAW+Maria Penha+588/589/600' },
  { id: 53, g: 'C', tema: 'C/E ECA art.2º+19 3m/18m+121 6m/3a/21a' },
  { id: 54, g: 'C', tema: 'C/E ECA art.83 só criança vs 84 criança e adolescente' },
  { id: 55, g: 'C', tema: 'C/E CIEFDR+7.716+2º-A+ADO26+Ellwanger' },
  { id: 56, g: 'C', tema: 'C/E EPI 40+34+CF230 65a' },
  { id: 57, g: 'C', tema: 'C/E CIAPTT vs CAT vs 9.455 crime comum' },
  { id: 58, g: 'C', tema: 'C/E Guatemala percepção+CDPD emenda+LBI curatela+TDA' },
  { id: 59, g: 'C', tema: 'C/E RE466 4 níveis+bloco+convencionalidade+mais benéfica' },
  { id: 60, g: 'C', tema: 'C/E Quadro geral integração' },
];

const desempenhoTemplate = [
  { tema: 'DUDH 1948', n: 4, ref: 'P1 arts.1º,5º,14, quórum 48-0-8' },
  { tema: 'Intolerância Religiosa 1981', n: 3, ref: 'P2 arts.1º,5º,6º 9 liberdades ADI 4439' },
  { tema: 'CEDAW 1979', n: 4, ref: 'P3 art.1º sem preferência art.4º temporária 23 peritos' },
  { tema: 'Convenção Criança 1989', n: 4, ref: 'P4 <18 4 princípios 2-3-6-12 art.37 B-E-R' },
  { tema: 'ECA Geral 1-85', n: 12, ref: 'P5A art.2º 12 inc/12-18, art.4º 4Ps, art.13 suspeita Conselho, art.19 3m/18m, G-T-A 18/16 veda, estágio 90/30-45' },
  { tema: 'ECA Especial 86-267', n: 14, ref: 'P5B 7 linhas vs 12 diretrizes, Conselho Direitos vs Tutelar, 101 9 medidas, 112 6 socioeducativas, 121 6-3-21 B-E-R, 122 V-R-D 3m sanção, Súmulas 492/338/383/601/500, 198 10 dias corridos' },
  { tema: 'CIEFDR + Dec.4.738', n: 4, ref: 'P6 com preferência ação afirmativa 18 peritos petição Dec.4738 + Lei 7.716' },
  { tema: 'Estatuto Idoso', n: 5, ref: 'P7 60 anos 2 vagas+50% BPC art.34 par único CF 230 65 urbano' },
  { tema: 'CIAPTT OEA', n: 4, ref: 'P8 art.2º qualquer outro fim art.4º ordem não justifica non-refoulement 11-12' },
  { tema: 'Guatemala PcD', n: 3, ref: 'P9 percepção antecedente diferenciação vs discriminação supralegal' },
  { tema: 'LBI 13.146', n: 8, ref: 'P10 capacidade plena art.6º curatela só patrimonial art.85 TDA 2 apoiadores crimes ADI 5357 sem taxa cota só direta' },
  { tema: 'CAT ONU + OPCAT', n: 10, ref: 'P11 D-I-F-A jus cogens non-refoulement aut dedere prova ilícita 10 peritos 11 peritos OPCAT sem aviso' },
  { tema: 'Súmulas/Jurisprudência + 4 níveis', n: 15, ref: 'P12 SV 11/14/26 716/718/719 122 ADPF347 Ellwanger ADO26 588/589/600 Tema1030 492/601 552 RE466 4 níveis bloco convencionalidade mais benéfica + leis 7.716/9.455/11.340/12.288' },
];

export default function P13Extras() {
  return (
    <section id="extras" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="02"
          eyebrow="Gabarito geral · Tabela desempenho por tema · Diagnóstico · Plano revisão · Mensagem final"
          title={
            <>
              <span className="italic font-light text-gold-2">Raio-X final</span> — onde você brilhou e onde voltar
            </>
          }
          desc="Parte 13 não termina quando você acerta 60 questões — termina quando você sabe exatamente onde errou e o que revisar. Abaixo, gabarito geral compilado (60 Qs), tabela de desempenho por tema para preencher (Nº Questões / Acertos / % Aproveitamento), diagnóstico automático por faixa, sugestão de revisão por tema com referência ao prompt de estudo (P1 a P12) e mensagem motivacional final."
          dark
        />

        {/* Gabarito geral */}
        <div className="mt-14">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                <Trophy className="size-5" />
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">Gabarito geral compilado — 60 questões</h3>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gabaritoGeral.map((g) => (
              <Reveal key={g.id} delay={g.id * 0.01}>
                <div className="flex items-center justify-between rounded-2xl border border-paper/10 bg-paper/[0.04] px-4 py-3">
                  <span className="font-mono text-[11px] text-paper/50">Q{g.id.toString().padStart(2, '0')}</span>
                  <span className="font-mono text-xs font-bold text-gold-2">{g.g}</span>
                  <span className="truncate text-[10px] text-paper/40">{g.tema}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-4 text-sm leading-relaxed text-paper/70">
              <strong className="text-gold-2">Como usar:</strong> Bloco 1 Q01-Q10, Bloco 2 Q11-Q30, Bloco 3 Q31-Q50, Bloco 4 Q51-Q60. Todas as objetivas gabarito A (proposital para focar no comentário, não no chute) e C/E gabarito C (certo) — o aprendizado está no comentário com por que incorretas erradas + pegadinha + dispositivo + macete.
            </p>
          </Reveal>
        </div>

        {/* Tabela desempenho */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                <Target className="size-5" />
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">Tabela de desempenho por tema — preencha seus acertos</h3>
            </div>
          </Reveal>

          <div className="overflow-x-auto rounded-2xl border border-paper/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-paper/5 font-mono text-[10px] uppercase tracking-widest text-paper/50">
                <tr>
                  <th className="px-4 py-3">Tema</th>
                  <th className="px-4 py-3">Nº Questões</th>
                  <th className="px-4 py-3">Acertos (preencher)</th>
                  <th className="px-4 py-3">% Aproveitamento</th>
                  <th className="px-4 py-3">Referência revisão</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper/10">
                {desempenhoTemplate.map((r) => (
                  <tr key={r.tema} className="hover:bg-paper/[0.04]">
                    <td className="px-4 py-3 font-semibold text-paper/80">{r.tema}</td>
                    <td className="px-4 py-3 font-mono text-paper/60">{r.n}</td>
                    <td className="px-4 py-3 text-paper/40">__ / {r.n}</td>
                    <td className="px-4 py-3 text-paper/40">__ %</td>
                    <td className="px-4 py-3 text-xs text-paper/40">{r.ref}</td>
                  </tr>
                ))}
                <tr className="bg-gold/10 font-bold">
                  <td className="px-4 py-3 text-gold-2">TOTAL</td>
                  <td className="px-4 py-3 font-mono text-gold-2">60</td>
                  <td className="px-4 py-3 text-gold-2">__ / 60</td>
                  <td className="px-4 py-3 text-gold-2">__ %</td>
                  <td className="px-4 py-3 text-xs text-gold-2">Meta ≥70% = 42 acertos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Diagnóstico */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-3xl border border-green-500/20 bg-green-500/10 p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-green-400" />
                <h4 className="font-display text-base font-semibold text-paper">≥70% — Aprovado DH 💪</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                <strong className="text-paper">Pontos fortes:</strong> literalidade dominada, prazos ECA corrigidos 3m/18m e 6-3-21, 4 níveis RE 466, SV 11/26, 588/589/600, 492/601. <strong className="text-paper">Revisar:</strong> apenas detalhes Bloco 3 que errou (ex: 718/719 motivo concreto, 552 surdez, art.20 CAT sistemática).
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="size-5 text-yellow-400" />
                <h4 className="font-display text-base font-semibold text-paper">50-69% — Quase lá ⚠️</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                <strong className="text-paper">Pontos fortes:</strong> Bloco 1 ok, base sólida. <strong className="text-paper">Revisar:</strong> Bloco 2 intermediário comparação status supralegal vs emenda, curatela só patrimonial vs TDA 2 apoiadores, transporte 2 vagas + BPC art.34 par único, non-refoulement. Volte aos prompts P5A/P5B (ECA corrigido), P10 LBI, P11 CAT, P12 súmulas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
              <div className="flex items-center gap-3">
                <Flame className="size-5 text-red-400" />
                <h4 className="font-display text-base font-semibold text-paper"> &lt;50% — Base em construção 🔥</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                <strong className="text-paper">Foco:</strong> refazer Bloco 1 até ≥80% antes de avançar. <strong className="text-paper">Revisar:</strong> P1 DUDH 30 arts 48-0-8 buscar/gozar, P2 1981 8 arts 9 liberdades, P3 CEDAW sem preferência 23 peritos, P4 Criança &lt;18 2-3-6-12, P5A/B ECA 12 inc/12-18 3m/18m 6-3-21 V-R-D 3 meses sanção PSC 6m 8h semanais LA 6m piso, P6 CIEFDR com preferência Dec.4738, P7 EPI 60 anos, P8 CIAPTT qualquer outro fim, P9 Guatemala percepção, P10 LBI 127 arts, P11 CAT D-I-F-A, P12 4 níveis.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Plano revisão por tema */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                <BookOpen className="size-5" />
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">Sugestão de revisão por tema — com referência ao prompt</h3>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Errou DUDH (Q1,11,31,51)', 'P1: releia arts.1º,5º,14, quórum 48-0-8, buscar/gozar vs obter, art.5º base SV 11 e CAT.'],
              ['Errou Intolerância 1981 (Q2,12)', 'P2: 8 arts consenso, art.1º liberdade, art.5º pais educam + interesse maior, art.6º 9 liberdades, limitações §3º, ADI 4439 ensino religioso facultativo confessional.'],
              ['Errou CEDAW (Q3,13,52)', 'P3: art.1º sem preferência (CIEFDR com), art.4º medidas especiais temporárias não discriminação, 23 peritos, supralegal, Protocolo Facultativo petição, conecta Maria Penha.'],
              ['Errou Criança 1989 (Q4,14)', 'P4: <18 1 régua vs ECA 2 réguas, 4 princípios 2-3-6-12, art.37 B-E-R + separado adultos, Comitê 18 peritos relatórios 2a+5a.'],
              ['Errou ECA Geral 1-85 (Q5,15,16,53,54)', 'P5A corrigido: art.2º 12 inc/12-18/18-21, art.4º 4Ps primazia socorro precedência atendimento preferência políticas privilegiada recursos, art.13 suspeita Conselho multa art.245 3-20, art.19 3m/18m visita preso independente, art.28 G-T-A ouvir>12 consentir irmãos juntos indígena FUNAI, art.33 guarda M-M-E dependente revogável, art.39 adoção irrevogável sem procuração, art.42 18/16 veda ascendentes irmãos, art.45 consentimento retratável até sentença, art.46 estágio 90/30-45 Brasil guarda fato não dispensa.'],
              ['Errou ECA Especial 86-267 (Q17,37,38,53,54)', 'P5B corrigido: art.87 7 linhas vs art.88 12 diretrizes Conselho Direitos deliberativo controlador paritário vs Tutelar P-A-N permanente autônomo não jurisdicional, art.90 8 regimes inscrição CMDCA, art.91 ONG 4 anos, art.92 9 princípios irmãos juntos relatório 6m vs reavalia juiz 3m, art.93 24h juiz emergencial, art.95 fiscalização Judiciário MP Tutelar, art.97 medidas gov vs não gov, art.98 ameaça violação 3 hipóteses, art.100 12 princípios, art.101 9 medidas acolhimento não priva liberdade, art.103 ato infracional crime ou contravenção, art.104 idade data fato, art.105 criança só 101, art.106 flagrante ou ordem escrita fundamentada, art.108 45 dias improrrogável, art.112 6 medidas A-R-P-L-S-I + 101 I-VI, art.117 PSC até 6m 8h semanais, art.118 LA mínimo 6m, art.120 semiliberdade externas independente autorização, art.121 6-3-21 B-E-R, art.122 V-R-D 3 meses sanção Súmula 492 tráfico não internação, art.124 16 direitos visita semanal incomunicabilidade nunca, art.126 remissão MP exclusão vs judicial suspensão extinção não implica responsabilidade nem antecedentes exceto semiliberdade internação Súmula 108 juiz exclusivo, art.129 pais I-VII Conselho VIII-X juiz, art.130 afastamento agressor, art.131 P-A-N, art.132 5 membros 4 anos, art.133 I-21-R, art.134 remuneração, art.136 atende requisita representa, art.137 revisão só juiz, art.139 1º domingo outubro posse 10 janeiro CMDCA MP fiscaliza art.140 impedimentos, art.143 vedação divulgação inclusive iniciais, art.147 domicílio pais vs lugar ação ato infracional Súmula 383 foro guarda, art.148 caput sempre Infância vs par único só risco art.98, art.149 portaria alvará rol taxativo vedadas gerais toque recolher, art.152 dias corridos vedado dobro, art.163 120 dias averbação, art.174 regra liberação pais, art.180 MP arquivar remitir representar homologação PGJ, art.183 45 dias improrrogável, art.189 absolvição 4 hipóteses, art.198 10 dias sem preparo retratação 5 dias adoção devolutivo, art.201 MP livre acesso art.204 nulidade, art.208 rol exemplificativo ACP legitimados 1 ano, art.220 qualquer pessoa pode servidor deve Lei 7.347, crimes 225 incondicionada 228 229 culposos 6m-2a 230-235 6m-2a 235 prazo crime 237 2-6a 238 1-4a ambos lados 239 4-6a/6-8a 240-241-E pornografia 4-8a/3-6a/1-4a/1-3a/1-3a 242 arma 3-6a 243 bebida 2-4a crime 244 fogos 6m-2a 244-A prostituição 4-10a 244-B corrupção 1-4a Súmula 500 formal, infrações 245 3-20 249 3-20 250 multa 15 dias <30 dias fecha definitivo 252-258 3-20 255 20-100 258-A 1k-3k 258-B 1k-3k entrega voluntária 258-C 3-20, art.260 FIA 1% PJ 6% PF Conselho Direitos fixa, art.267 revogação expressa Código Menores 90 dias vacatio.'],
              ['Errou CIEFDR/Dec.4738/Racismo (Q6,18,26,34,36,42,55,60)', 'P6: com preferência §1º + ação afirmativa §4º + art.4º criminaliza + 18 peritos + Dec.4.738 petição art.14 + Lei 7.716 1-3a/2-5a + 2º-A 2-5a imprescritível inafiançável + ADO26 homotransfobia racismo + Ellwanger raça social + ADPF186 cotas.'],
              ['Errou Idoso (Q7,19,40,56)', 'P7: 60 anos EPI vs 65 CF urbano vs 65 BPC LOAS, art.40 2 vagas+50%, art.34 par único BPC não entra, art.71 P.I.I., REsp 1.221.170, Tema 1093 outros elementos miserabilidade.'],
              ['Errou CIAPTT (Q8,20,43,57)', 'P8: art.2º qualquer outro fim mais amplo que CAT D-I-F-A, art.4º ordem não justifica, art.11-12 non-refoulement, jurisdição universal, Corte IDH Herzog Ximenes Lopes.'],
              ['Errou Guatemala (Q9,22,58)', 'P9: art.I §1 deficiência + §2 a) discriminação percepção antecedente consequência + §2 b) diferenciação não discriminação se integra, supralegal vs CDPD emenda, CEDDIS.'],
              ['Errou LBI (Q10,23,24,41,48,49,58)', 'P10: 127 arts modelo social art.2º biopsicossocial, art.4º discriminação recusa adaptação razoável, art.6º capacidade plena casar, art.28 §1º sem taxa extra ADI 5357, art.34-38 trabalho sem aptidão plena art.93 cota 2-5% só direta aprendiz não conta dispensa só após outra, art.40 2%/10%/1-20, art.53-62 DU regra, art.63-73 info livros sem barreira autoral sites 10% TV tripé, art.74-75 TA plano 4-2-5, art.76-78 política sem seção exclusiva, art.79-83 justiça TA, art.84-87 curatela só patrimonial art.85 não corpo/voto/casamento art.1.783-A TDA ≥2 apoiadores, art.88-91 crimes 1-3a/2-5a/6m-2a/1-4a, art.92-95 Cadastro georreferenciado auxílio-inclusão, art.96-113 18 alterações, CC revolução art.3º só <16 absolutamente incapaz, prazos 48m 84m 24m 48m vigência 180 dias.'],
              ['Errou CAT/OPCAT (Q21,30,44,45,46,47,57)', 'P11: art.1º D-I-F-A, art.2º jus cogens sem exceção guerra ordem não justifica, art.3º non-refoulement razões substanciais quadro sistemático, art.4º criminalização, art.5º jurisdição universal, art.6º detenção investigação, art.7º aut dedere, art.8º extradição base legal ficção territorial, art.10-13 prevenção ensino revisão ex officio queixa protegida, art.14 reparação reabilitação dependentes, art.15 prova ilícita exceto contra torturador, art.16 outros maus-tratos sem finalidade agente público 10-13, CAT 10 peritos 4a quorum 6 relatórios 1a+4a art.20 sistemática confidencial visita anuência reservas art.20 e 30 art.21 5 Estados 3-6-12m art.22 individual 6m, OPCAT SPT+MNPCT 11 peritos 3a sem aviso entrevistas privadas Lei 12.847/13 SNPCT.'],
              ['Errou Súmulas/Jurisprudência/4 níveis/leis correlatas (Q25,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,50,51,52,59,60)', 'P12: SV 11 algemas resistência fuga perigo escrito nulidade agente Estado, SV 14 já documentado, SV 26 progressão HC 82.959, Súmulas 716 progressão 718/719 motivo concreto art.33 §3º 59 CP, 523 falta defesa nulidade absoluta, 122 filho cônjuge BR não expulso non-refoulement, ADPF 347 estado coisas inconstitucional art.16 CAT custódia 24h, Ellwanger raça social ADO26 homotransfobia racismo Lei 7.716 ADPF186 cotas Lei 14.532 injúria racial 2-5a imprescritível inafiançável, STJ 588 sem restritiva violência 589 sem insignificância 600 sem coabitação Tema1030 sem BO sem prazo enquanto risco 492 tráfico não internação 338 prescrição 383 foro guarda 601 6m reavalia 552 surdez unilateral não cota, RE 466 4 níveis CF>emenda CDPD Dec.6.949>supralegal CADH Dec.678 CAT Dec.40 CIAPTT Dec.98.386 Guatemala Dec.3.956 CEDAW CIEFDR Criança>lei comum + bloco CF+emenda ADI + convencionalidade supralegal inconvencional + norma mais benéfica art.29 CADH art.16 §2 CAT art.41 ECA art.121 LBI, leis 7.716 1-3a/2-5a 2º-A 2-5a, 9.455 2-8a grave 4-10 morte 8-16 omissão 1-4 perda cargo dobro XLIII inafiançável sem graça anistia hediondo SV26, 11.340 5 violências F-P-S-P-M protetivas sem BO sem coabitação sem prazo, 12.288 ações afirmativas história África matriz africana SINAPIR, CF XLII racismo imprescritível inafiançável XLIII tortura inafiançável sem graça anistia XLI discriminação.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.02}>
                <div className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-2">{t}</p>
                  <p className="mt-2 text-xs leading-relaxed text-paper/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mensagem motivacional */}
        <Reveal delay={0.15}>
          <div className="mt-16 rounded-[2rem] border border-gold/40 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-gold text-ink">
                <Heart className="size-6" />
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-paper">Mensagem do professor — você está pronto 💪</h3>
            </div>
            <p className="mt-6 text-base leading-relaxed text-paper/70">
              Se você chegou até a Parte 13, você já fez o que 90% dos candidatos não fazem: estudou <strong className="text-paper">545 artigos, 13 módulos, 205 questões</strong> com letra de lei corrigida, jurisprudência dominante e pegadinhas mapeadas por banca. Você corrigiu o ECA I e II — 3 meses/18 meses, só criança vs criança e adolescente, guarda fato não dispensa estágio, adoção irrevogável, 18/16 veda ascendentes irmãos, PSC 6m 8h semanais, LA mínimo 6m, semiliberdade sem autorização, internação 6-3-21 B-E-R V-R-D 3 meses sanção, Súmulas 492/500, recurso 10 dias corridos sem dobro.
            </p>
            <p className="mt-4 text-base leading-relaxed text-paper/70">
              Você dominou <strong className="text-paper">RE 466.343</strong> — 4 níveis CF → emenda CDPD → supralegal CADH/CAT → lei — e a regra de ouro: <strong className="text-paper">norma mais benéfica prevalece</strong> (art.29 CADH, art.16 §2º CAT, art.41 ECA, art.121 LBI). Você sabe que <strong className="text-paper">SV 11</strong> só permite algemas com resistência/fuga/perigo + escrito + nulidade, <strong className="text-paper">SV 26</strong> permite progressão tortura, <strong className="text-paper">Súmulas 588/589/600</strong> blindam Maria da Penha sem coabitação sem BO sem insignificância sem restritiva, <strong className="text-paper">Súmula 492</strong> impede internação automática por tráfico, <strong className="text-paper">Súmula 552</strong> diz surdez unilateral não é cota, <strong className="text-paper">ADI 5357</strong> veda taxa extra, <strong className="text-paper">ADO 26</strong> enquadra homotransfobia como racismo, <strong className="text-paper">Lei 14.532</strong> torna injúria racial imprescritível inafiançável.
            </p>
            <p className="mt-4 text-base leading-relaxed text-paper/70">
              Na véspera, releia: <strong className="text-paper">P5A/B ECA corrigido</strong> (3m/18m, 6-3-21, V-R-D, 10 dias corridos), <strong className="text-paper">P10 LBI</strong> (capacidade plena, curatela só patrimonial, TDA 2 apoiadores, sem taxa extra, cota só direta), <strong className="text-paper">P11 CAT</strong> (D-I-F-A, jus cogens, non-refoulement, aut dedere, prova ilícita, 10 peritos, OPCAT 11 peritos sem aviso), <strong className="text-paper">P12 4 níveis</strong> + quadro leis 7.716/9.455/11.340/12.288. E confie: a banca troca um termo — você já mapeou todos.
            </p>
            <p className="mt-6 font-display text-xl font-semibold text-gold-2">
              Vai lá e passa. A coleção está completa. O resto é você. 💪📚⚖️
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-widest text-paper/40">
              <span className="rounded-full border border-paper/10 px-3 py-1">13 módulos</span>
              <span className="rounded-full border border-paper/10 px-3 py-1">545 artigos revisados</span>
              <span className="rounded-full border border-paper/10 px-3 py-1">205 questões comentadas</span>
              <span className="rounded-full border border-paper/10 px-3 py-1">5 bancas mapeadas</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
