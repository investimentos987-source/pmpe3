import { SectionHead, Reveal } from '../fx';
import { Star, Scale, Info, ArrowRight, Hash, ShieldAlert, Gavel, Eye } from 'lucide-react';

const destaques = [
  {
    art: 'Art. 1º',
    t: 'Definição D-I-F-A',
    k: 'Dor aguda física/mental + Intencional + Finalidade I-C-I-D (Informação/confissão, Castigo, Intimidar/coagir, Discriminação) + Agente público/instigação/consentimento/aquiescência. Sanções legítimas não tortura.',
    p: 'Particular sem vínculo público não é tortura ONU; culposa não; sem finalidade não; sanção legítima é tortura.',
  },
  {
    art: 'Art. 2º',
    t: 'Jus cogens absoluto',
    k: 'Medidas eficazes para impedir, NENHUMA circunstância excepcional justifica (guerra, terrorismo, emergência), ordem superior não justifica.',
    p: 'Admitir ticking bomb ou ordem superior como justificativa.',
  },
  {
    art: 'Art. 3º',
    t: 'Non-refoulement',
    k: 'Não expulsar/devolver/extraditar se razões substanciais risco tortura + considera quadro sistemático grave e maciço violações no país destino.',
    p: 'Só extradição; certeza absoluta; quadro sistemático irrelevante.',
  },
  {
    art: 'Art. 4º-5º',
    t: 'Criminalização e jurisdição',
    k: 'Tortura+tentativa+cumplicidade/participação crimes com penas graves. Jurisdição: territorial/navio/aeronave, autor nacional, vítima nacional facultativa, universal se não extradita (aut dedere).',
    p: 'Tentativa não precisa criminalizar; vítima nacional obrigatória; esquecer navio/aeronave.',
  },
  {
    art: 'Art. 7º-8º',
    t: 'Aut dedere + extradição',
    k: 'Se não extradita, julga com garantias crime grave e tratamento justo. Tortura sempre extraditável, Convenção pode ser base legal sem tratado, ficção territorial art.5º §1º.',
    p: 'Pode liberar sem julgar; Convenção nunca base legal; negar ficção territorial.',
  },
  {
    art: 'Arts. 10º-13º',
    t: 'Prevenção',
    k: 'Ensino proibição no treinamento aplicação lei, médico, custódia/interrogatório; revisão sistemática interrogatório/custódia; investigação ex officio imediata imparcial com motivos razoáveis; queixa com proteção.',
    p: 'Investigação exige queixa; treinamento só polícia; sem proteção testemunha.',
  },
  {
    art: 'Art. 14º-15º',
    t: 'Reparação e prova ilícita',
    k: 'Vítima reparação + indenização justa e adequada + reabilitação mais completa possível; morte → dependentes. Declaração sob tortura inadmissível, salvo contra torturador para provar declaração.',
    p: 'Só indenização sem reabilitação; prova sob tortura válida; dependentes sem direito.',
  },
  {
    art: 'Art. 16º',
    t: 'Outros maus-tratos',
    k: 'Proíbe cruel/desumano/degradante com agente público, sem finalidade específica, aplica arts.10-13. Distinção tortura (topo) × cruel × degradante.',
    p: 'Exigir finalidade para tratamento desumano; dizer 10-13 não aplicam a art.16.',
  },
  {
    art: 'Arts. 17º-20º',
    t: 'CAT e sistemática',
    k: 'CAT 10 peritos moral+competência DH título pessoal 4a, bienal quorum 2/3 maioria absoluta, mesa 2a quorum 6 maioria presentes, relatórios 1a+4a, investigação confidencial tortura sistemática fidedigna + visita com anuência + resumo anual.',
    p: '10→18 peritos; 4a→2a; quorum 6→10; visita sem anuência; pública desde início.',
  },
  {
    art: 'OPCAT',
    t: 'SPT + MNPCT',
    k: 'OPCAT 2002 Dec.6.085/07 preventivo visitas regulares SPT internacional + MNPCT nacional independente 11 peritos 3a autonomia sem aviso entrevista reservada Lei 12.847/13; CAT reprime, SPT/MNPCT previne.',
    p: 'OPCAT repressivo; CAT=SPT; MNPCT precisa aviso; vinculado polícia.',
  },
];

const quadroONUOEALei: [string, string, string, string][] = [
  ['Instrumento', 'ONU Dec.40/91 (CAT) — 33 arts', 'OEA Dec.98.386/89 (CIAPTT) — 17 arts', 'Brasil Lei 9.455/97'],
  ['Definição', 'Dor aguda + intencional + finalidade I-C-I-D + agente público/instigação/consentimento/aquiescência; exclui sanções legítimas', 'Mais ampla: inclui métodos que anulam personalidade ou diminuem capacidade física/mental mesmo sem dor, sofrimento; não exige finalidade específica; agente público', 'Art.1º: I constranger com violência/grave ameaça causando sofrimento físico/mental para obter info/confissão, provocar ação/omissão, discriminar; II submeter sob guarda/poder/situação com sofrimento; §1º omissão; crime comum (particular pode)'],
  ['Agente', 'Público ou instigação/consentimento/aquiescência', 'Público ou instigação, empregado público ou particular agindo como tal', 'Comum, mas causa aumento se agente público'],
  ['Finalidade', 'Exige: info/confissão, castigo, intimidar/coagir, discriminação', 'Não exige finalidade específica, basta método anula personalidade', 'Exige nas hipóteses I (info, ação/omissão, discriminação), não exige em II (guarda)'],
  ['Proibição', 'Absoluta jus cogens, nenhuma circunstância excepcional, ordem superior não justifica (art.2º)', 'Absoluta, nenhuma circunstância justifica, ordem superior não exclui responsabilidade (art.4º CIAPTT)', 'Inafiançável e insuscetível graça/anistia CF art.5º XLIII, hediondo equiparado'],
  ['Non-refoulement', 'Art.3º: não expulsar/devolver/extraditar se razões substanciais risco + quadro sistemático', 'Art.13: não extraditar se fundadas razões crer risco tortura, risco vida, julgamento desumano', 'Não trata, mas CF e jurisprudência aplicam'],
  ['Criminalização', 'Art.4º: tortura+tentativa+cumplicidade/participação crimes penas graves', 'Art.6º: criminalizar tortura e tentativa, penas severas considerando gravidade', 'Lei 9.455: pena 2-8a, aumento 1/6-1/3, perda cargo, interdição'],
  ['Jurisdição', 'Art.5º: territorial/navio/aeronave, autor nacional, vítima nacional facultativa, universal se não extradita', 'Art.12: ampla, territorial, autor nacional, vítima nacional, quando vítima ou autor no território', 'Territorial + extraterritorial CP'],
  ['Extradição', 'Art.8º: sempre extraditável, base legal sem tratado, ficção territorial art.5º §1º', 'Art.13: extraditável em tratados, pode usar Convenção como base, não extradita se risco tortura', 'Extraditável, mas non-refoulement limita'],
  ['Investigação', 'Art.12 ex officio motivos razoáveis imediata imparcial + art.13 queixa protegida + art.20 sistemática confidencial visita com anuência', 'Art.12 ex officio + art.8 direito queixa, investigação imediata, art.9 impossibilidade invocação emergência', 'Investigação obrigatória, ação pública incondicionada'],
  ['Prova', 'Art.15 inadmissível declaração sob tortura salvo contra torturador', 'Art.10 inadmissível declaração sob tortura salvo contra torturador', 'CF art.5º LVI + CPP prova ilícita'],
  ['Reparação', 'Art.14 reparação + indenização justa + reabilitação completa + dependentes se morte', 'Art.9 reparação + indenização adequada + dependentes', 'Lei 9.455 + CC + CF direito indenização'],
  ['Prevenção', 'Art.10 ensino + art.11 revisão sistemática + OPCAT preventivo SPT+MNPCT', 'Art.7 treinamento + art.11 revisão', 'Lei 12.847/13 SNPCT, MNPCT, CNPCT'],
  ['Comitê', 'CAT 10 peritos 4a, relatórios 1a+4a, investigação sistemática, inter-estatal e individual facultativas 5 Estados', 'Comissão e Corte IDH, sem comitê próprio', 'Sem comitê, Judiciário e MP'],
  ['Status BR', 'Supralegal (RE 466.343)', 'Supralegal', 'Lei ordinária federal'],
];

const tabelaJuris: [string, string, string][] = [
  ['STF RE 466.343', 'Status supralegal tratados DH não aprovados rito art.5º §3º', 'CAT e CIAPTT são supralegais, abaixo CF e acima leis'],
  ['STF HC 70389 e ADI 1.263', 'Tortura inafiançável e insuscetível graça/anistia', 'CF art.5º XLIII + Lei 9.455/97'],
  ['STF HC 82.959 e Súmula 698', 'Regime inicial fechado tortura', 'STF declarou inconstitucional regime integral fechado, mas hediondo equiparado exige regime inicial fechado? Súmula 698: não se exige integral'],
  ['STF Ext 1.462 e HC 148.714', 'Non-refoulement', 'Não extraditar se risco tortura, avaliação quadro sistemático'],
  ['STJ Súmula 419', 'Prova ilícita por tortura', 'Prova obtida mediante tortura ilícita, contamina derivadas (frutos árvore envenenada)'],
  ['STJ HC 96.374 e 142.513', 'Lei 9.455/97 crime comum', 'Particular pode ser autor, desnecessário agente público, mas aumento se agente público'],
  ['Corte IDH Caso Herzog vs Brasil', 'Tortura e desaparecimento forçado', 'Brasil responsável por não investigar tortura e morte Herzog, violação arts.5º e 8º CADH + CAT'],
  ['Corte IDH Caso Ximenes Lopes vs Brasil', 'Tratamento desumano pessoa com deficiência mental', 'Violação integridade pessoal, dever prevenir e investigar, reparação integral'],
  ['Corte IDH Caso Escher vs Brasil', 'Interceptação e tortura', 'Prova ilícita e dever investigação ex officio'],
  ['CAT Comentário Geral 2', 'Jus cogens e prevenção', 'Proibição absoluta, medidas eficazes, não derrogável, prevenção inclui revisão e treinamento'],
  ['CAT Comentário Geral 3', 'Reparação art.14', 'Reparação inclui restituição, compensação, reabilitação, satisfação, garantias não repetição'],
];

const numeros: [string, string, string][] = [
  ['D-I-F-A', '4 elementos tortura ONU', 'Art.1º — Dor aguda, Intencional, Finalidade I-C-I-D, Agente público'],
  ['Jus cogens', 'Proibição absoluta', 'Art.2º — nunca justifica, nem ordem superior'],
  ['3 modalidades', 'Non-refoulement', 'Art.3º — não expulsar/devolver/extraditar'],
  ['10 peritos', 'Comitê CAT', 'Art.17 — moral elevada, competência DH, título pessoal, 4a'],
  ['6 membros', 'Quorum deliberação CAT', 'Art.18 — maioria presentes'],
  ['2 anos', 'Mesa CAT', 'Art.18 §1º'],
  ['1 ano + 4 anos', 'Relatórios periódicos', 'Art.19 — inicial 1a + suplementares 4a'],
  ['Fidedigna + sistemática', 'Investigação confidencial', 'Art.20 — visita só com anuência, confidencial'],
  ['5 Estados', 'Ativação comunicações 21 e 22', 'Arts.21 §2º e 22 §8º'],
  ['3-6-12 meses', 'Inter-estatal', 'Art.21 — 3m resposta + 6m negociação + 12m relatório'],
  ['6 meses', 'Individual resposta Estado', 'Art.22 §3º'],
  ['20 + 30 dias', 'Entrada vigor Convenção', 'Art.27 — 20 instrumentos + 30d'],
  ['Reservas art.20 e 30', 'Reservas possíveis', 'Arts.28 e 30 §2º — pode retirar'],
  ['4 meses + 1/3 + 2/3', 'Emendas', 'Art.29 — 1/3 em 4m pede conferência + maioria adota + 2/3 aceita'],
  ['6 meses + Corte IJ', 'Controvérsias', 'Art.30 — negociação → arbitragem 6m → Corte IJ'],
  ['1 ano', 'Denúncia efeitos', 'Art.31 — 1a para valer, não apaga passado'],
  ['6 línguas', 'Textos autênticos', 'Art.33 — árabe, chinês, espanhol, francês, inglês, russo'],
  ['11 peritos 3 anos', 'MNPCT Brasil', 'Lei 12.847/13 + OPCAT'],
  ['2-8 anos', 'Pena Lei 9.455/97', 'Aumento 1/6-1/3'],
];

const mandamentos = [
  'Definição ONU art.1º: 4 elementos D-I-F-A — Dor aguda física/mental + Intencional + Finalidade I-C-I-D (Informação/confissão, Castigo, Intimidar/coagir, Discriminação) + Agente público ou instigação/consentimento/aquiescência. Sanções legítimas não são tortura. Particular sem vínculo público NÃO é tortura ONU (mas é na Lei 9.455/97).',
  'Proibição absoluta art.2º jus cogens: nenhuma guerra, ameaça guerra, instabilidade política interna, emergência pública, terrorismo, ticking bomb justifica; ordem superior não justifica. Art.4º CIAPTT OEA idem.',
  'Non-refoulement art.3º: não expulsar, não devolver, não extraditar se razões substanciais risco tortura; avalia quadro sistemático grave e maciço violações no país destino. Conecta com refúgio e extradição STF.',
  'Criminalização art.4º: tortura + tentativa + cumplicidade/participação = crimes com penas adequadas gravidade — base Lei 9.455/97. Jurisdição art.5º: territorial/navio/aeronave, autor nacional, vítima nacional facultativa, universal se autor no território e não extradita (aut dedere aut judicare).',
  'Procedimento art.6º-9º: detenção temporária para processo/extradição + investigação preliminar imediata + comunicação consular + notificação Estados art.5º; art.7º aut dedere aut judicare com garantias crime grave e tratamento justo; art.8º extradição sempre extraditável + Convenção pode ser base legal sem tratado + ficção territorial art.5º §1º; art.9º assistência máxima com provas.',
  'Prevenção art.10-11: ensino proibição no treinamento aplicação lei, médico, funcionários, custódia/interrogatório + inclusão nas normas serviço + revisão sistemática normas/métodos interrogatório e custódia para evitar tortura — base OPCAT.',
  'Investigação e queixa art.12-13: ex officio imediata imparcial com motivos razoáveis (sem queixa) + direito qualquer pessoa que alegue tortura apresentar queixa com exame imediato imparcial + proteção queixoso/testemunhas contra retaliação.',
  'Reparação e prova art.14-15: vítima direito reparação + indenização justa e adequada + reabilitação mais completa possível, dependentes se morte, sem prejuízo outros direitos nacionais mais amplos; prova sob tortura inadmissível em qualquer processo, salvo contra torturador como prova declaração.',
  'Outros maus-tratos art.16: proíbe cruel/desumano/degradante com agente público, sem exigir finalidade específica, aplica obrigações arts.10-13; distinção tortura (topo gravidade com finalidade) × cruel × desumano × degradante (humilhação).',
  'Comitê CAT arts.17-18: 10 peritos (não 18!), moral elevada, competência DH, título pessoal, geográfica equitativa, experiência jurídica útil, mandato 4 anos reeleição, eleição bienal quorum 2/3 Estados Partes maioria absoluta, primeira eleição 6 meses após vigor, substituição aprovação tácita 6 semanas, mesa 2 anos, quorum deliberação 6, maioria presentes, SG ONU apoio.',
  'Procedimentos CAT arts.19-24: relatórios inicial 1 ano após vigor para Estado + suplementares 4 anos + extras + comentários gerais + relatório anual art.24; investigação confidencial tortura sistemática fidedigna + visita só com anuência + confidencial + resumo anual após consulta (reserva possível art.28); inter-estatal art.21 facultativa 5 Estados para ativar 3-6-12 meses esgota recursos internos confidencial bons ofícios ad hoc; individual art.22 facultativa 5 Estados anônima inadmissível abuso incompatível 6 meses Estado não litispendência internacional parecer confidencial.',
  'Finais e OPCAT arts.25-33 + extra: assinatura/ratificação/adesão SG ONU, vigor 20+30d (27), reservas art.20 (sistemática) e art.30 §1º (arbitragem/Corte IJ) podem ser retiradas, emendas 1/3 em 4 meses pede conferência maioria adota 2/3 aceita vincula só aceitantes, controvérsias negociação→arbitragem 6 meses→Corte IJ, denúncia 1 ano efeitos sem apagar passado, 6 línguas autênticas árabe/chinês/espanhol/francês/inglês/russo. OPCAT 2002 Dec.6.085/07: preventivo visitas regulares SPT internacional + MNPCT nacional independente Lei 12.847/13 11 peritos 3 anos autonomia sem aviso entrevista reservada, CAT reprime violação, SPT/MNPCT previne.',
];

export default function P11Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Quadro ONU × OEA × Lei 9.455/97 · jurisprudência · números"
          title={
            <>
              O que decide a prova: <span className="italic font-light" style={{ color: '#991b1b' }}>D-I-F-A, jus cogens, non-refoulement, 10 peritos, OPCAT</span>
            </>
          }
          desc="Os 10 destaques de ouro, o quadro completo ONU × OEA × Lei brasileira, jurisprudência STF/STJ/Corte IDH e a tabela de números que a banca troca."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {destaques.map((d, i) => (
            <Reveal key={d.art} delay={(i % 5) * 0.04}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_26px_60px_-35px_rgba(193,154,61,0.6)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ink px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-gold-2">{d.art}</span>
                  <Star className="size-4 fill-gold text-gold" />
                </div>
                <h3 className="mt-4 font-display text-[15px] font-semibold leading-tight text-ink">{d.t}</h3>
                <p className="mt-3 flex-1 text-[11.5px] leading-relaxed text-ink/70">{d.k}</p>
                <div className="mt-4 rounded-xl border-l-[3px] border-brick/60 bg-brick/[0.06] px-3.5 py-2.5 text-[10.5px] leading-relaxed text-ink/70">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-brick">pegadinha · </span>{d.p}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Quadro completo <span className="italic font-light text-gold-3">— ONU (Dec.40/91) × OEA (Dec.98.386/89) × Lei 9.455/97</span>
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[84rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[9rem_1fr_1fr_1fr] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Critério</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#991b1b' }}>ONU Dec.40/91 (CAT)</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#f08f7c' }}>OEA Dec.98.386/89 (CIAPTT)</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f766e' }}>Lei 9.455/97 Brasil</p>
                </div>
                {quadroONUOEALei.map(([crit, onu, oea, lei], i) => (
                  <div key={crit} className={`grid grid-cols-[9rem_1fr_1fr_1fr] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} hover:bg-gold/[0.08]`}>
                    <p className="flex items-center px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">{crit}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12px] leading-snug text-ink/80">{onu}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12px] leading-snug text-ink/80">{oea}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12px] leading-snug text-ink/80">{lei}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/[0.1] to-transparent px-5 py-4 text-sm leading-relaxed text-ink/75">
              <Info className="mt-0.5 size-5 shrink-0 text-gold-3" />
              <span>
                <strong>Como as três convivem:</strong> ONU define com 4 elementos + finalidade específica + agente público; OEA é mais ampla (anula personalidade mesmo sem dor); Lei brasileira é crime comum (particular pode) + inafiançável/insuscetível graça/anistia (CF XLIII) + hediondo equiparado + pena 2-8a com causas aumento. Prevalece sempre a norma mais favorável à vítima (art.1º §2º CAT e art.16 §2º). Tortura é jus cogens — proibição absoluta.
              </span>
            </p>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Gavel className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Jurisprudência <span className="italic font-light text-gold-3">— STF, STJ e Corte IDH</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tabelaJuris.map(([t, d, e], i) => (
              <Reveal key={t} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-display text-base font-bold text-ink">{t}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-gold-3">{d}</p>
                  <p className="mt-2 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink/70">
                    <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-gold-3" />
                    {e}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Hash className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Tabela de números <span className="italic font-light text-gold-3">que decidem a questão</span>
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[44rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[10rem_1fr_13rem] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#991b1b' }}>Número</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">O que significa</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Onde está</p>
                </div>
                {numeros.map(([n, s, o], i) => (
                  <div key={n} className={`grid grid-cols-[10rem_1fr_13rem] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} hover:bg-gold/[0.08]`}>
                    <p className="flex items-center px-5 py-3.5 font-display text-base font-bold" style={{ color: '#991b1b' }}>{n}</p>
                    <p className="flex items-center border-l border-ink/10 px-5 py-3.5 text-[13px] leading-snug text-ink/80">{s}</p>
                    <p className="flex items-center border-l border-ink/10 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50">{o}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Os 12 entendimentos <span className="italic font-light text-gold-3">consolidados — CAT</span>
              </h3>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 md:block">checklist final véspera</p>
            </div>
          </Reveal>
          <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
            {mandamentos.map((m, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.3)}>
                <div className="group flex gap-5 border-b border-ink/10 pb-6">
                  <span className="font-display text-4xl font-black leading-none text-gold-3/90 tabular-nums transition-transform duration-300 group-hover:-translate-y-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm md:text-[14px] leading-relaxed text-ink/75">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
              <div className="flex items-center gap-3">
                <Eye className="size-5 text-gold-3" />
                <h3 className="font-display text-xl font-semibold text-ink">CAT × CIAPTT × Lei 9.455/97 — como estudar</h3>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  'ONU CAT Dec.40/91: 33 arts, 10 peritos, D-I-F-A, jus cogens, non-refoulement, aut dedere, extradição base legal, prova ilícita, reparação completa.',
                  'OEA CIAPTT Dec.98.386/89: 17 arts, definição mais ampla (anula personalidade sem dor), sem finalidade específica, investigação ex officio, non-refoulement art.13.',
                  'Lei 9.455/97: crime comum (particular pode), 2-8 anos, aumento 1/6-1/3 (criança, idoso, deficiente, gestante, agente público), perda cargo, inafiançável e insuscetível graça/anistia, hediondo equiparado.',
                  'OPCAT: preventivo, não repressivo; SPT internacional + MNPCT nacional 11 peritos 3a Lei 12.847/13 autonomia sem aviso entrevista reservada; CAT reprime violação.',
                  'Números que decidem: 10 peritos CAT, quorum 6, mesa 2a, relatórios 1a+4a, 5 Estados para ativar comunicações, 3-6-12 meses inter-estatal, 6 meses individual, 20+30d vigor, reservas art.20 e 30, denúncia 1a, 6 línguas.',
                  'Jurisprudência: STF supralegal, non-refoulement Ext 1.462, STJ prova ilícita tortura contamina derivadas, Corte IDH Herzog e Ximenes Lopes.',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                    <ShieldAlert className="mt-0.5 size-4 shrink-0 text-gold-3" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
