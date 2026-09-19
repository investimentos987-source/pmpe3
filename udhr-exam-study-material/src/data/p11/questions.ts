import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 1º — Definição de tortura',
    enunciado:
      'Julgue o item: para os fins da Convenção contra a Tortura (Decreto 40/1991), tortura designa qualquer ato pelo qual dores ou sofrimentos agudos, físicos ou mentais, são infligidos intencionalmente a uma pessoa com finalidade de obter informações ou confissões, castigá-la, intimidá-la ou coagi-la ou por motivo baseado em discriminação, quando infligidos por funcionário público ou outra pessoa no exercício de funções públicas, ou por sua instigação, ou com seu consentimento ou aquiescência, não se considerando tortura as dores ou sofrimentos consequência unicamente de sanções legítimas ou inerentes a elas.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — art.1º §1º literal, com 4 elementos D-I-F-A: Dor aguda, Intencional, Finalidade (I-C-I-D), Agente público/instigação/consentimento/aquiescência. Exclusão sanções legítimas. Pegadinha: particular sem vínculo público NÃO configura tortura ONU (diferente da Lei 9.455/97 que admite particular); exige intencionalidade e finalidade específica.',
  },
  {
    id: 2,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 2º — Proibição absoluta jus cogens',
    enunciado:
      'Sobre a proibição da tortura na Convenção da ONU (Decreto 40/1991), assinale a correta:',
    alternativas: [
      'Cada Estado tomará medidas eficazes para impedir tortura em território sob sua jurisdição; em nenhum caso poderão invocar-se circunstâncias excepcionais, como guerra, ameaça de guerra, instabilidade política interna ou emergência pública como justificação; e ordem de superior ou autoridade pública não pode ser invocada como justificação.',
      'A tortura pode ser justificada em caso de guerra contra terrorismo ou para salvar vidas (ticking bomb).',
      'Ordem de superior exclui responsabilidade penal do executor.',
      'A proibição de tortura é norma dispositiva, podendo ser afastada por tratado posterior.',
      'A Convenção admite tortura se prevista em lei nacional.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — art.2º §§1-3 literal, proibição absoluta jus cogens. B erra: art.2º §2º veda justificativa por circunstâncias excepcionais, inclusive guerra. C erra: §3º veda ordem superior como justificação. D erra: jus cogens é imperativa, não dispositiva. E erra: nenhuma lei nacional justifica.',
  },
  {
    id: 3,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 3º — Non-refoulement',
    enunciado:
      'Nos termos do art.3º da Convenção contra a Tortura, é correto afirmar:',
    alternativas: [
      'Nenhum Estado Parte procederá à expulsão, devolução ou extradição de pessoa para outro Estado quando houver razões substanciais para crer que corre perigo de ser submetida a tortura; para determinar tais razões, autoridades levarão em conta quadro de violações sistemáticas, graves e maciças de direitos humanos no Estado em questão.',
      'A proibição aplica-se apenas à extradição, não à expulsão ou devolução.',
      'Exige-se certeza absoluta de que pessoa será torturada.',
      'O quadro de violações sistemáticas no país destino é irrelevante.',
      'A Convenção permite devolução se houver acordo diplomático de não torturar.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — art.3º §§1-2 literal. B erra: inclui expulsão, devolução e extradição. C erra: basta razões substanciais, não certeza absoluta. D erra: §2º manda considerar quadro sistemático grave e maciço. E erra: não há exceção por garantia diplomática no texto convencional (jurisprudência exige avaliação efetiva).',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Arts. 4º, 5º e 7º — Criminalização e jurisdição universal',
    enunciado:
      'Julgue o item: cada Estado Parte deve assegurar que todos os atos de tortura, sua tentativa e cumplicidade ou participação sejam crimes com penas adequadas à gravidade; deve estabelecer jurisdição quando crime cometido em território sob sua jurisdição ou a bordo de navio/aeronave registrada, quando autor for nacional, quando vítima for nacional se considerar apropriado, e quando autor se encontre em seu território e não extradite (aut dedere aut judicare); se não extraditar, deve submeter caso a autoridades para processo com garantias de tratamento justo.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — arts.4º §§1-2, 5º §§1-2 e 7º §§1-3 literais. Criminalização inclui tentativa e cumplicidade. Jurisdição: territorial (navio/aeronave), personalidade ativa obrigatória, passiva facultativa (“se considerar apropriado”), universal se não extradita. Aut dedere aut judicare + tratamento justo.',
  },
  {
    id: 5,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 16 — Tortura × tratamento cruel, desumano ou degradante',
    enunciado:
      'Sobre a distinção entre tortura e outros tratamentos na Convenção da ONU, assinale a correta:',
    alternativas: [
      'Tortura exige dores agudas, intencionalidade, finalidade específica (informação/confissão, castigo, intimidação/coação, discriminação) e agente público ou instigação/consentimento/aquiescência; outros tratamentos cruéis, desumanos ou degradantes não exigem finalidade específica, mas exigem agente público ou aquiescência, e a eles aplicam-se as obrigações de ensino (art.10), revisão interrogatório/custódia (art.11), investigação ex officio (art.12) e direito de queixa com proteção (art.13).',
      'Tratamento desumano exige finalidade específica de obter confissão.',
      'Tortura pode ser culposa e sem agente público.',
      'Arts.10 a 13 não se aplicam a tratamentos cruéis, desumanos ou degradantes.',
      'Sanções legítimas são consideradas tortura.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts.1º e 16º §1º literais. B erra: finalidade específica é só tortura, não outros maus-tratos. C erra: tortura exige intencionalidade e agente público. D erra: art.16 §1º aplica expressamente arts.10-13 a outros maus-tratos. E erra: art.1º §1º final exclui sanções legítimas.',
  },
  {
    id: 6,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 10-15 — Prevenção, investigação e prova ilícita',
    enunciado:
      'Nos termos da Convenção contra a Tortura, é correto afirmar:',
    alternativas: [
      'Ensino sobre proibição de tortura deve ser incorporado no treinamento de pessoal civil ou militar de aplicação da lei, médico, funcionários públicos e outros que participem de custódia, interrogatório ou tratamento; normas de interrogatório e custódia devem ser sistematicamente examinadas; autoridades procederão imediatamente a investigação imparcial sempre que houver motivos razoáveis para crer que tortura foi cometida; qualquer pessoa que alegue tortura tem direito de queixa com exame imediato imparcial e proteção contra retaliação; vítima tem direito a reparação, indenização justa e reabilitação mais completa possível, dependentes indenizados se morte; declaração sob tortura não pode ser prova, salvo contra torturador como prova de que foi prestada.',
      'Investigação exige queixa formal da vítima.',
      'Prova obtida sob tortura pode ser usada contra a vítima se corroborada.',
      'Treinamento sobre proibição é facultativo.',
      'Vítima não tem direito a reabilitação, apenas indenização.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts.10 §1º, 11, 12, 13, 14 §1º e 15 literais. B erra: art.12 investigação ex officio com motivos razoáveis, sem queixa. C erra: art.15 inadmissibilidade absoluta, só vale contra torturador para provar declaração. D erra: art.10 ensino obrigatório. E erra: art.14 inclui reabilitação mais completa possível.',
  },
  {
    id: 7,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Arts. 17-20 — Comitê CAT',
    enunciado:
      'Sobre o Comitê contra a Tortura (CAT), nos termos da Convenção, assinale a correta:',
    alternativas: [
      'Comitê composto por 10 peritos de elevada reputação moral e reconhecida competência em direitos humanos, título pessoal, distribuição geográfica equitativa, mandato 4 anos, eleitos em reuniões bienais com quorum 2/3 Estados Partes e maioria absoluta; mesa 2 anos, quorum deliberação 6 membros, maioria presentes; relatórios Estados: inicial 1 ano após vigor + suplementares 4 anos; investigação confidencial se informações fidedignas indicarem tortura sistemática, com visita só com anuência do Estado, confidencial, resumo pode ir para relatório anual após consulta.',
      'Comitê possui 18 peritos.',
      'Mandato é de 2 anos sem reeleição.',
      'Quorum de deliberação é de 10 membros.',
      'Investigação de tortura sistemática é pública e visita independe de anuência.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts.17 §§1,3,5 (10 peritos, 4 anos, bienal, quorum 2/3, maioria absoluta), 18 §§1-2 (mesa 2 anos, quorum 6, maioria presentes), 19 §1º (1 ano + 4 anos), 20 §§1-5 (fidedignas, sistemática, confidencial, visita com anuência). B erra: 10, não 18 (18 é Comitê DH, CERD, CRC). C erra: 4 anos com reeleição. D erra: quorum 6. E erra: confidencial e anuência para visita.',
  },
  {
    id: 8,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Arts. 21-22 — Comunicações inter-estatal e individual + reservas arts.28 e 30',
    enunciado:
      'Julgue o item: comunicações inter-estatais (art.21) e individuais (art.22) exigem declaração facultativa do Estado reconhecendo competência do Comitê, entram em vigor quando 5 Estados fizerem tais declarações, exigem esgotamento de recursos internos salvo prolongamento injustificado ou improvável melhora, e são examinadas em reuniões confidenciais, com parecer/relatório; além disso, a Convenção permite reservas aos arts.20 (investigação tortura sistemática) e 30 §1º (arbitragem/Corte IJ), que podem ser retiradas a qualquer momento.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — arts.21 §§1-2, 22 §§1,5,8 e 28 §§1-2, 30 §§2-3 literais. Facultativas, 5 declarações para ativar, esgotamento recursos internos com exceções, confidenciais, relatório/parecer. Reservas possíveis: art.20 e art.30 §1º (não art.3º ou 4º). Podem ser retiradas.',
  },
  {
    id: 9,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'OPCAT — Protocolo Facultativo e MNPCT',
    enunciado:
      'Sobre o Protocolo Facultativo à Convenção contra a Tortura (OPCAT), assinale a correta:',
    alternativas: [
      'OPCAT (2002, Decreto 6.085/2007) cria sistema preventivo de visitas regulares a locais de privação de liberdade por órgãos internacionais (Subcomitê de Prevenção — SPT) e nacionais independentes (Mecanismo Nacional de Prevenção — MNPCT); Brasil criou SNPCT pela Lei 12.847/2013, com CNPCT e MNPCT composto por 11 peritos, mandato 3 anos, autonomia, visitas sem aviso, entrevistas reservadas; SPT em 2019 opinou pela revogação do Decreto 9.831/2019 por falta de independência do MNPCT.',
      'OPCAT é repressivo, investiga casos concretos após denúncia.',
      'MNPCT precisa de aviso prévio e autorização do Estado para visitar.',
      'CAT e SPT são o mesmo órgão.',
      'MNPCT é vinculado à polícia e ao sistema penitenciário.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — OPCAT art.1º objetivo preventivo, SPT internacional, art.17 MNPCT nacional independente 1 ano para criar, Brasil Lei 12.847/13 11 peritos 3 anos, autonomia, sem aviso, entrevista reservada, Decreto 9.831/19 enfraqueceu, SPT opinou revogação, liminar DPU 2ª Região restabeleceu. B erra: preventivo, não repressivo. C erra: sem aviso e sem autorização. D erra: CAT reprime violação, SPT previne. E erra: independente, não vinculado.',
  },
  {
    id: 10,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Quadro comparativo ONU x OEA x Lei 9.455/97 + jus cogens',
    enunciado:
      'Sobre o quadro comparativo da tortura no sistema ONU, OEA e Brasil, assinale a correta:',
    alternativas: [
      'ONU Decreto 40/91: definição com 4 elementos (dor aguda + intencional + finalidade específica + agente público/instigação/consentimento/aquiescência), exclui sanções legítimas, proibição absoluta jus cogens, non-refoulement art.3º, criminalização art.4º, jurisdição universal art.5º §2º, extradição art.8º com base legal e ficção territorial, prova ilícita art.15, reparação art.14 com reabilitação; OEA Decreto 98.386/89: definição mais ampla (inclui métodos que anulam personalidade mesmo sem dor), não exige finalidade específica, proíbe em qualquer circunstância, ordem superior não justifica, jurisdição ampla, extradição; Lei 9.455/97: crime comum (não só agente público), inafiançável e insuscetível graça/anistia (CF art.5º XLIII), imprescritível? Não, mas hediondo equiparado, pena 2-8 anos, causas aumento, efeito condenação perda cargo, regime inicial fechado (STF declarou inconstitucional integral).',
      'ONU exige apenas dor, sem intencionalidade ou finalidade.',
      'OEA exige finalidade específica e exclui métodos sem dor.',
      'Lei 9.455/97 exige agente público e admite anistia.',
      'Tortura não é jus cogens e pode ser justificada por emergência.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — síntese comparativa cobrada: ONU 4 elementos + finalidade I-C-I-D + agente público + sanções legítimas não tortura + jus cogens + non-refoulement + aut dedere + extradição base legal + prova ilícita + reparação completa; OEA definição art.2º mais ampla (inclui métodos tendentes a anular personalidade ou diminuir capacidade física/mental mesmo sem dor), também proíbe sempre, ordem superior não justifica, art.12 investigação ex officio, art.13 extradição; Lei 9.455/97 art.1º: I constranger com violência/grave ameaça causando sofrimento físico/mental para obter info/confissão, provocar ação/omissão, discriminar; II submeter pessoa sob guarda/poder/situação com sofrimento; §1º omissão; crime comum, não exige agente público (mas causa aumento se agente público), inafiançável e insuscetível graça/anistia CF XLIII, hediondo equiparado Lei 8.072, pena 2-8a, aumento 1/6-1/3 se criança, idoso, deficiente, gestante, agente público, crime por grupo, sequestro, etc., perda cargo, interdição direitos. STF: HC 70389, Súmula 698? Tortura imprescritível? Não, mas inafiançável e insuscetível graça/anistia. Corte IDH: Caso Herzog e Ximenes Lopes.',
  },
];
