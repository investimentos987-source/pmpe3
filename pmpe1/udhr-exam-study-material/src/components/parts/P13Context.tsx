import { Reveal, SectionHead } from '../fx';
import { Target, Flame, BookOpen, Trophy, Layers, GraduationCap, Clock, Brain, CheckCircle2 } from 'lucide-react';

const blocosQuiz = [
  { cor: '#3b82f6', label: 'BLOCO 1', titulo: 'FÁCEIS — Aquecimento', qtd: '10 Qs', desc: 'Conhecimento básico literal de cada documento: DUDH 30 arts 48-0-8 art.5º tortura art.14 buscar/gozar, 1981 8 arts consenso 9 liberdades, CEDAW sem preferência 23 peritos, Criança <18 4 princípios 2-3-6-12, ECA 12 incompletos/12-18, CIEFDR com preferência Dec.4738 petição, EPI 60 anos 2 vagas+50%, CIAPTT qualquer outro fim, Guatemala percepção, LBI capacidade plena CDPD emenda CAT D-I-F-A.' },
  { cor: '#eab308', label: 'BLOCO 2', titulo: 'INTERMEDIÁRIAS — Interpretação', qtd: '20 Qs', desc: 'Comparação entre documentos, aplicação prática, status supralegal vs emenda, curatela só patrimonial vs TDA 2 apoiadores, transporte 2 vagas + BPC art.34 par único, non-refoulement CAT art.3º + CIAPTT art.11-12 + Súmula 122, jus cogens art.2º, Guatemala supralegal vs CDPD emenda, LBI crimes + ADI 5357 sem taxa, 4 níveis RE 466, 7.716 + 2º-A injúria, 9.455 pena, Maria Penha 5 violências, 12.288 ações afirmativas, CAT art.15 prova ilícita art.16 sem finalidade.' },
  { cor: '#dc2626', label: 'BLOCO 3', titulo: 'DIFÍCEIS — Pegadinhas FGV/Cebraspe', qtd: '20 Qs', desc: 'Jurisprudência que reprova: SV 11 algemas resistência/fuga/perigo escrito nulidade Estado, SV 14 já documentado, SV 26 progressão possível, 716/718/719 motivo concreto art.33 §3º 59 CP, Súmula 122 filho BR não expulso + non-refoulement, ADPF 347 estado coisas inconstitucional art.16 CAT, Ellwanger raça social + ADO26 homotransfobia racismo, Súmulas 492 tráfico≠internação 338 prescrição 383 foro guarda 601 6m reavalia, 588 sem restritiva violência 589 sem insignificância 600 sem coabitação Tema1030 sem BO sem prazo, REsp 1.221.170 BPC não entra cálculo Tema1093 outros elementos, Súmula 552 surdez unilateral não cota + ADI 5357, Lei 14.532 injúria racial imprescritível, CAT vs CIAPTT D-I-F-A vs qualquer outro fim, art.6º detenção art.7º aut dedere art.8º extradição ficção territorial, art.12 ex officio art.13 queixa protegida art.14 reparação reabilitação, art.20 sistemática confidencial visita anuência art.21 5 Estados 3-6-12m art.22 individual 6m, OPCAT SPT+MNPCT 11 peritos 3a sem aviso, CDPD art.24 inclusiva art.12 capacidade art.27 trabalho, art.93 cota só direta art.34 par único BPC art.40 2 vagas, bloco vs convencionalidade norma mais benéfica.' },
  { cor: '#111827', label: 'BLOCO 4', titulo: 'C/E — Dissertativo Cebraspe', qtd: '10 Qs', desc: '10 itens C/E com justificativa completa integrando tudo: DUDH+CAT+SV11+SV26, CEDAW+Maria Penha+588/589/600+Tema1030, ECA art.2º+19 3m/18m+121 6m/3a/21a+492, art.83 só criança vs art.84 criança e adolescente+85 estrangeiro, CIEFDR+7.716+2º-A+ADO26+Ellwanger+ADPF186, EPI 40+34+CF230 65a+REsp1.221.170, CIAPTT vs CAT vs Lei 9.455 crime comum, Guatemala percepção+CDPD emenda+LBI curatela só patrimonial+TDA 2 apoiadores, RE 466 4 níveis+bloco+convencionalidade+mais benéfica, quadro geral integração todas súmulas e leis.' },
];

const correcoesECA = [
  { err: 'Art.19 §1º 6 meses', ok: '3 MESES reavaliação acolhimento (Lei 13.509/17)', tema: 'Acolhimento' },
  { err: 'Art.19 §2º 2 anos', ok: '18 MESES permanência máxima acolhimento', tema: 'Acolhimento' },
  { err: 'Art.83 criança e adolescente', ok: 'Art.83 só CRIANÇA viagem nacional', tema: 'Viagem' },
  { err: 'Art.84 só criança', ok: 'Art.84 CRIANÇA E ADOLESCENTE exterior', tema: 'Viagem' },
  { err: 'Guarda fato dispensa estágio', ok: 'Art.46 §2º guarda fato NÃO dispensa estágio', tema: 'Adoção' },
  { err: 'Adoção revogável', ok: 'Art.39 §1º irrevogável', tema: 'Adoção' },
  { err: 'Ascendentes/irmãos podem adotar', ok: 'Art.42 §1º veda ascendentes irmãos', tema: 'Adoção' },
  { err: 'PSC 8h diárias máximo 6m mínimo', ok: 'Art.117 até 6 MESES 8h SEMANAIS', tema: 'PSC' },
  { err: 'LA máximo 6m', ok: 'Art.118 mínimo 6 MESES piso', tema: 'LA' },
  { err: 'Semiliberdade precisa autorização externas', ok: 'Art.120 independente autorização judicial', tema: 'Semiliberdade' },
  { err: 'Internação prazo determinado 3m reavalia', ok: 'Art.121 sem prazo determinado reavalia 6 MESES teto 3 ANOS liberação 21 ANOS', tema: 'Internação' },
  { err: 'Internação-sanção 3 anos', ok: 'Art.122 §1º III até 3 MESES', tema: 'Internação-sanção' },
  { err: 'Tráfico interna automática', ok: 'Súmula 492 STJ veda automatismo', tema: 'Súmula 492' },
  { err: 'Corrupção menores precisa efetiva corrupção', ok: 'Súmula 500 STJ delito formal', tema: 'Súmula 500' },
  { err: 'Prazo recurso 15 dias úteis dobro MP', ok: 'Art.198 10 DIAS corridos sem dobro vedado', tema: 'Recurso' },
];

export default function P13Context() {
  return (
    <section id="contexto" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="01"
          eyebrow="Quiz Geral Final · 60 questões · 4 blocos · revisão completa 12 partes · correções ECA I e II"
          title={
            <>
              A prova final: <span className="italic font-light" style={{ color: '#991b1b' }}>60 questões</span> que cobrem tudo
            </>
          }
          desc="Parte 13 fecha a coleção 12 partes com um simulado geral nos moldes AOCP, Cebraspe, FGV, FCC e Vunesp: 10 fáceis (aquecimento literal), 20 intermediárias (interpretação e comparação), 20 difíceis (pegadinhas jurisprudência SV 11/14/26, Súmulas 588/589/600, 492/338/383/601, 552, RE 466 4 níveis, ADI 5357, ADO 26, ADPF 347, HC 82.424, Lei 14.532) e 10 C/E dissertativas estilo Cebraspe com justificativa completa. Cada questão traz banca-alvo, 5 alternativas (ou C/E), gabarito e comentário com por que correta certa, por que incorretas erradas, pegadinha, dispositivo legal e macete. Ao final, gabarito geral compilado, tabela desempenho por tema, diagnóstico e plano revisão."
        />

        
        <Reveal>
          <div className="mb-10 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-3">
            <span className="grid size-8 place-items-center rounded-full bg-gold text-ink">
              <Clock3 className="size-4" />
            </span>
            <div className="text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-3">Tempo de leitura focada — sessão completa</p>
              <p className="font-display text-base font-bold text-ink">
                3h00 focado
                <span className="ml-2 font-sans text-xs font-normal text-ink/60">· Bloco 1 20min + Bloco 2 50min + Bloco 3 70min + Bloco 4 40min + Revisão 20min</span>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="dropcap text-base md:text-lg leading-relaxed text-ink/80">
                Você estudou <strong className="font-semibold text-ink">12 partes, 545 marcos e 145 questões</strong>. Agora é hora de amarrar tudo em <strong className="font-semibold text-ink">60 questões finais</strong> que simulam a prova real. A lógica dos 4 blocos replica a escalada da banca: <strong className="font-semibold text-ink">Bloco 1 fácil</strong> testa literalidade que a AOCP ama — datas, números, conceitos (DUDH 48-0-8, 1981 8 arts consenso, CEDAW sem preferência 23 peritos, Criança &lt;18 4 princípios 2-3-6-12, ECA 12 incompletos/12-18, CIEFDR com preferência Dec.4.738 petição, EPI 60 anos 2 vagas+50%, CIAPTT qualquer outro fim, Guatemala percepção, LBI capacidade plena CDPD emenda CAT D-I-F-A). <strong className="font-semibold text-ink">Bloco 2 intermediário</strong> compara documentos — DUDH buscar/gozar vs CF LII não extradição político, 1981 pais educam + interesse maior + ADI 4439 ensino religioso facultativo confessional, CEDAW art.4º temporária vs Maria Penha sem coabitação sem BO 5 violências, Convenção Criança interesse maior primordial + oitiva + ECA 3m/18m, ECA art.4º 4Ps + art.13 suspeita Conselho, guarda M-M-E dependente revogável vs tutela 18 incompletos + perda poder familiar vs adoção 18/16 sem ascendentes irmãos irrevogável sem procuração, socioeducativas 6 A-R-P-L-S-I + 6-3-21 B-E-R + V-R-D 3 meses sanção, CIEFDR ação afirmativa + 7.716 1-3a/2-5a + 2º-A 2-5a imprescritível, EPI 2 vagas+50% + BPC art.34 par único, CIAPTT non-refoulement + jurisdição universal, CAT jus cogens + non-refoulement, Guatemala supralegal vs CDPD emenda vs LBI lei, curatela só patrimonial vs TDA 2 apoiadores, crimes LBI + ADI 5357 sem taxa, RE 466 4 níveis, etc.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                <strong className="font-semibold text-ink">Bloco 3 difícil</strong> é onde a FGV e Cebraspe reprovam: troca um termo — <strong className="font-semibold text-ink">SV 11</strong> exige resistência/fuga/perigo + escrito + nulidade + responsabilidade agente e Estado, não regra sem fundamentação; <strong className="font-semibold text-ink">SV 14</strong> já documentado, não diligência futura; <strong className="font-semibold text-ink">SV 26</strong> progressão hediondo/tortura possível HC 82.959, não integral fechado; <strong className="font-semibold text-ink">Súmulas 716/718/719</strong> regime precisa motivo concreto art.33 §3º 59 CP, não gravidade abstrata; <strong className="font-semibold text-ink">Súmula 122</strong> estrangeiro filho/cônjuge BR não expulso + CAT art.3º non-refoulement quadro sistemático; <strong className="font-semibold text-ink">ADPF 347</strong> estado coisas inconstitucional art.16 CAT degradante + custódia 24h; <strong className="font-semibold text-ink">HC 82.424 Ellwanger</strong> raça social antissemitismo racismo + <strong className="font-semibold text-ink">ADO 26</strong> homotransfobia racismo Lei 7.716; <strong className="font-semibold text-ink">STJ 492</strong> tráfico não internação automática <strong className="font-semibold text-ink">338</strong> prescrição <strong className="font-semibold text-ink">383</strong> foro guarda <strong className="font-semibold text-ink">601</strong> 6m reavalia; <strong className="font-semibold text-ink">588</strong> sem restritiva com violência <strong className="font-semibold text-ink">589</strong> sem insignificância <strong className="font-semibold text-ink">600</strong> sem coabitação <strong className="font-semibold text-ink">Tema 1030</strong> sem BO sem prazo enquanto risco; <strong className="font-semibold text-ink">REsp 1.221.170</strong> BPC não entra cálculo <strong className="font-semibold text-ink">Tema 1093</strong> outros elementos miserabilidade; <strong className="font-semibold text-ink">Súmula 552</strong> surdez unilateral não PcD cota + <strong className="font-semibold text-ink">ADI 5357</strong> sem taxa extra; <strong className="font-semibold text-ink">Lei 14.532</strong> injúria racial 2-5a imprescritível inafiançável + AgRg 1.940.381; CAT vs CIAPTT D-I-F-A vs qualquer outro fim, art.6º detenção art.7º aut dedere art.8º extradição ficção territorial, art.12 ex officio art.13 queixa protegida art.14 reparação reabilitação dependentes, art.20 sistemática confidencial visita anuência art.21 5 Estados 3-6-12m art.22 individual 6m, OPCAT SPT+MNPCT 11 peritos 3a sem aviso entrevistas privadas, CDPD art.24 inclusiva art.12 capacidade art.27 trabalho, art.93 cota só direta aprendiz não conta art.34 par único BPC art.40 2 vagas, bloco CF+emenda ADI vs convencionalidade supralegal inconvencional difuso + norma mais benéfica art.29 CADH.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80">
                <strong className="font-semibold text-ink">Bloco 4 C/E dissertativo</strong> traz 10 itens estilo Cebraspe com justificativa completa, integrando DUDH+CAT+SV11+SV26, CEDAW+Maria Penha+588/589/600+Tema1030, ECA art.2º+19 3m/18m+121 6m/3a/21a+492, art.83 só criança vs art.84 criança e adolescente+85 estrangeiro, CIEFDR+7.716+2º-A+ADO26+Ellwanger+ADPF186, EPI 40+34+CF230 65a+REsp1.221.170, CIAPTT vs CAT vs Lei 9.455 crime comum, Guatemala percepção+CDPD emenda+LBI curatela só patrimonial+TDA 2 apoiadores, RE 466 4 níveis+bloco+convencionalidade+mais benéfica, quadro geral integração todas súmulas e leis. Ao final, você terá gabarito geral, tabela desempenho por tema e plano de revisão.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative w-full mt-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
                    <Flame className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink">Correções ECA I e II — letra de lei revisada</h3>
                </div>
                <p className="mt-3 text-sm text-ink/60">Revisão completa para não cair nas pegadinhas que mais reprovam:</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {correcoesECA.map((c, i) => (
                    <div key={i} className="relative w-full rounded-2xl border border-ink/10 bg-white p-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">{c.tema}</p>
                      <p className="mt-1 text-xs font-semibold text-red-600 line-through">❌ {c.err}</p>
                      <p className="mt-1 text-xs font-semibold text-green-700">✔ {c.ok}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <div className="grid gap-4">
              {blocosQuiz.map((b, i) => (
                <Reveal key={b.label} delay={i * 0.05}>
                  <div className="relative w-full rounded-3xl border bg-white p-6" style={{ borderColor: `${b.cor}30` }}>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white" style={{ backgroundColor: b.cor }}>
                        {b.label}
                      </span>
                      <span className="font-mono text-[10px] text-ink/50">{b.qtd}</span>
                    </div>
                    <h4 className="mt-3 font-display text-lg font-semibold text-ink">{b.titulo}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-ink/60">{b.desc}</p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.25}>
                <div className="relative w-full rounded-3xl border border-ink/10 bg-ink p-6 text-paper">
                  <div className="flex items-center gap-3">
                    <Clock className="size-5 text-gold-2" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Sugestão de tempo</p>
                  </div>
                  <p className="mt-3 font-display text-xl font-bold">3h simulado completo</p>
                  <ul className="mt-4 space-y-2 text-sm text-paper/60">
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-gold-2" />Bloco 1: 20 min (2 min/Q)</li>
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-gold-2" />Bloco 2: 50 min (2,5 min/Q)</li>
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-gold-2" />Bloco 3: 70 min (3,5 min/Q)</li>
                    <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 text-gold-2" />Bloco 4: 40 min (4 min/Q) + revisão 20 min tabela desempenho</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="relative w-full rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/15 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <Brain className="size-5 text-gold-3" />
                    <h4 className="font-display text-base font-semibold text-ink">Como usar comentários</h4>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    Cada questão traz: <strong>banca-alvo</strong>, <strong>gabarito</strong>, <strong>por que correta certa</strong>, <strong>por que incorretas erradas</strong>, <strong>pegadinha</strong>, <strong>dispositivo legal</strong> e <strong>macete</strong>. Anote erros por tema na tabela do Extras e volte ao prompt da parte correspondente (ex: errou art.83 → revise P5A art.83).
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <GraduationCap className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Estrutura do Quiz — 60 questões, 5 bancas, 13 temas</h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Temas', 'DUDH, Intolerância 1981, CEDAW, Criança 1989, ECA I 1-85, ECA II 86-267, CIEFDR+4738, Idoso 10.741, CIAPTT, Guatemala, LBI 13.146, CAT 40/91+OPCAT, Súmulas/Jurisprudência 4 níveis'],
              ['Bancas', 'AOCP literal datas/números, Cebraspe C/E troca um termo, FGV mais completa interpretação, FCC letra fria enumera, Vunesp reprodução direta'],
              ['Meta', 'Bloco 1 ≥80%, Bloco 2 ≥70%, Bloco 3 ≥60%, Bloco 4 ≥70% → média ≥70% = aprovado DH'],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.05}>
                <div className="relative w-full h-full rounded-2xl border border-ink/10 bg-white p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold-3">{k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
