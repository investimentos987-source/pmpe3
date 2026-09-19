import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'Definição e Proibição Absoluta (Arts. 1º-3º)': '#991b1b',
  'Criminalização e Jurisdição (Arts. 4º-9º)': '#dc2626',
  'Prevenção e Garantias (Arts. 10º-16º)': '#e8a36b',
  'Comitê CAT — Composição (Arts. 17º-18º)': '#0f766e',
  'Comitê CAT — Procedimentos (Arts. 19º-24º)': '#2f6fb4',
  'Cláusulas Finais e Reservas (Arts. 25º-33º)': '#4b5563',
  'OPCAT e Mecanismo Nacional (Extra-convencional)': '#7c3aed',
};

const A = 'Definição e Proibição Absoluta (Arts. 1º-3º)';
const B = 'Criminalização e Jurisdição (Arts. 4º-9º)';
const C = 'Prevenção e Garantias (Arts. 10º-16º)';
const D = 'Comitê CAT — Composição (Arts. 17º-18º)';
const E = 'Comitê CAT — Procedimentos (Arts. 19º-24º)';
const F = 'Cláusulas Finais e Reservas (Arts. 25º-33º)';
const G = 'OPCAT e Mecanismo Nacional (Extra-convencional)';

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Definição de tortura — elemento intencional + finalidade específica',
    sintese: '4 elementos + sanções legítimas não são tortura',
    bloco: A,
    destaque: true,
    resumo:
      'Art. 1º, §1º — Para fins da Convenção, TORTURA designa qualquer ato pelo qual DORES OU SOFRIMENTOS AGUDOS, FÍSICOS OU MENTAIS, são infligidos INTENCIONALMENTE a uma pessoa a fim de obter dela ou de terceira pessoa INFORMAÇÕES OU CONFISSÕES; de CASTIGÁ-LA por ato que ela ou terceira pessoa tenha cometido ou seja suspeita de ter cometido; de INTIMIDAR OU COAGIR esta pessoa ou outras pessoas; ou por qualquer motivo baseado em DISCRIMINAÇÃO de qualquer natureza; quando tais dores ou sofrimentos são infligidos por FUNCIONÁRIO PÚBLICO ou outra pessoa no exercício de funções públicas, ou por sua instigação, ou com seu CONSENTIMENTO ou AQUIESCÊNCIA. Não se considerará tortura as dores ou sofrimentos que sejam consequência unicamente de SANÇÕES LEGÍTIMAS, ou que sejam inerentes a tais sanções ou delas decorram. §2º — O artigo não restringe instrumento internacional ou legislação nacional de alcance mais amplo.',
    prova:
      'O artigo mais cobrado: 4 ELEMENTOS cumulativos da tortura ONU: 1) dores/sofrimentos agudos físicos ou mentais, 2) INTENCIONALIDADE, 3) FINALIDADE ESPECÍFICA (informação/confissão, castigo, intimidação/coação, discriminação), 4) AGENTE PÚBLICO ou instigação/consentimento/aquiescência. E a exclusão: sanções legítimas NÃO são tortura. Banca troca “agudos” por “leves” ou omite finalidade.',
    pegadinha:
      'Dizer que tortura pode ser culposa; ou que particular sem vínculo público configura tortura ONU (exige agente público — diferente da Lei 9.455/97 que admite particular); ou que sanções legítimas são tortura; ou esquecer discriminação como finalidade.',
    exemplo:
      'Policial que espanca preso para obter confissão com aquiescência do delegado: tortura art.1º (dor aguda + intencional + finalidade confissão + agente público). Sofrimento inerente à prisão legal não é tortura.',
    macete: 'Tortura ONU = D-I-F-A: Dor aguda, Intencional, Finalidade (I-C-I-D: Informação, Castigo, Intimidar, Discriminação), Agente público. Sanção legítima não é tortura.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 2,
    titulo: 'Proibição absoluta — jus cogens, sem exceção',
    sintese: 'Medidas eficazes + nunca se justifica + ordem superior não justifica',
    bloco: A,
    destaque: true,
    resumo:
      'Art. 2º, §1º — Cada Estado Parte tomará medidas eficazes legislativas, administrativas, judiciais ou de outra natureza para IMPEDIR prática de tortura em qualquer território sob sua jurisdição. §2º — Em NENHUM CASO poderão invocar-se circunstâncias excepcionais, como ameaça ou estado de guerra, instabilidade política interna ou qualquer outra emergência pública, como JUSTIFICAÇÃO para tortura. §3º — A ORDEM DE FUNCIONÁRIO SUPERIOR ou autoridade pública NÃO poderá ser invocada como justificação para tortura.',
    prova:
      'Proibição absoluta: caráter JUS COGENS, norma imperativa. Não há estado de necessidade, guerra, terrorismo, emergência que justifique. Ordem superior não exclui responsabilidade. Conecta com art.4º CIAPTT (OEA) e art.1º Lei 9.455/97. Cobradíssimo em Cebraspe.',
    pegadinha:
      'Admitir tortura em caso de terrorismo, guerra, “bomba-relógio” (ticking bomb) ou ordem superior; ou dizer que é crime só se houver lesão grave.',
    exemplo:
      'Comandante que ordena tortura para descobrir esconderijo de bomba: tortura não se justifica — art.2º §§2º-3º — tanto executor quanto mandante respondem.',
    macete: 'Art.2º = tortura NUNCA se justifica. Nem guerra, nem emergência, nem ordem superior. Jus cogens.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 3,
    titulo: 'Non-refoulement — proibição de devolução/extradição/expulsão',
    sintese: 'Razões substanciais + quadro sistemático de violações',
    bloco: A,
    destaque: true,
    resumo:
      'Art. 3º, §1º — Nenhum Estado Parte procederá à EXPULSÃO, DEVOLUÇÃO ou EXTRADIÇÃO de uma pessoa para outro Estado quando houver RAZÕES SUBSTANCIAIS para crer que a mesma corre perigo de ali ser submetida a TORTURA. §2º — Para determinar existência de tais razões, autoridades competentes levarão em conta todas considerações pertinentes, inclusive, quando for o caso, existência no Estado em questão de quadro de VIOLAÇÕES SISTEMÁTICAS, GRAVES E MACIÇAS de direitos humanos.',
    prova:
      'Non-refoulement específico da tortura: não devolver/extraditar/expulsar se risco substancial de tortura. Critério: quadro sistemático grave e maciço de violações no país destino. Conecta com art.33 Convenção Refugiados e art.8º e 13 CIAPTT OEA. STF: HC 148.714 e Extradição 1.462.',
    pegadinha:
      'Exigir certeza absoluta (basta razões substanciais); omitir devolução ou expulsão (só falar extradição); ignorar quadro sistemático como elemento de avaliação.',
    exemplo:
      'Brasil não pode extraditar pessoa para país onde há prática sistemática de tortura contra opositores políticos se houver razões substanciais de risco.',
    macete: 'Art.3º = non-refoulement tortura: não expulsa, não devolve, não extradita se risco substancial + olha quadro sistemático.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 4,
    titulo: 'Obrigação de criminalizar — tentativa, cumplicidade e participação',
    sintese: 'Todos atos tortura crime + penas adequadas gravidade',
    bloco: B,
    destaque: true,
    resumo:
      'Art. 4º, §1º — Cada Estado Parte assegurará que TODOS OS ATOS DE TORTURA sejam considerados CRIMES segundo sua legislação penal. O mesmo aplicar-se-á à TENTATIVA de tortura e a todo ato de qualquer pessoa que constitua CUMPLICIDADE ou PARTICIPAÇÃO na tortura. §2º — Cada Estado punirá estes crimes com PENAS ADEQUADAS que levem em conta sua GRAVIDADE.',
    prova:
      'Criminalização obrigatória: tortura + tentativa + cumplicidade/participação devem ser crimes com penas proporcionais à gravidade. Base para Lei 9.455/97 no Brasil. Banca cobra que tentativa também deve ser crime.',
    pegadinha:
      'Dizer que tentativa não precisa ser criminalizada; ou que pena pode ser branda sem considerar gravidade.',
    exemplo:
      'Brasil cumpre art.4º com Lei 9.455/97 que tipifica tortura, tentativa e aumenta pena se agente público.',
    macete: 'Art.4º = tortura + tentativa + cúmplice = tudo crime com pena grave.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'AOCP'],
  },
  {
    n: 5,
    titulo: 'Jurisdição universal — territorial, nacionalidade e aut dedere aut judicare',
    sintese: '3 bases + cláusula aut dedere aut judicare',
    bloco: B,
    destaque: true,
    resumo:
      'Art. 5º, §1º — Cada Estado Parte tomará medidas para estabelecer sua jurisdição sobre crimes art.4º: a) quando crimes cometidos em território sob sua jurisdição ou a bordo de navio/aeronave registrada no Estado; b) quando suposto autor for NACIONAL do Estado; c) quando VÍTIMA for nacional do Estado e este o considerar apropriado. §2º — Cada Estado tomará medidas para estabelecer jurisdição quando suposto autor se encontre em território sob sua jurisdição e o Estado NÃO EXTRADITE de acordo com art.8º (aut dedere aut judicare). §3º — Convenção não exclui qualquer jurisdição criminal exercida de acordo com direito interno.',
    prova:
      'Jurisdição universal mitigada: territorial (inclui navio/aeronave), personalidade ativa (autor nacional), personalidade passiva facultativa (vítima nacional se considerar apropriado) + jurisdição universal propriamente dita §2º: se autor está no território e não extradita, deve julgar (aut dedere aut judicare). Não exclui outras jurisdições internas.',
    pegadinha:
      'Confundir personalidade passiva como obrigatória (é facultativa “se considerar apropriado”); omitir navio/aeronave; esquecer aut dedere aut judicare.',
    exemplo:
      'Brasileiro tortura estrangeiro no exterior: Brasil tem jurisdição por nacionalidade ativa (art.5º §1º b). Estrangeiro torturador encontrado no Brasil e não extraditado: Brasil deve julgar (art.5º §2º).',
    macete: 'Art.5º = T-A-P-U: Territorial (navio/aeronave), Autor nacional, Passiva vítima nacional (facultativa), Universal se não extradita.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 6,
    titulo: 'Detenção, investigação preliminar e comunicação',
    sintese: 'Detém, investiga, comunica nacionalidade, notifica Estados art.5º',
    bloco: B,
    resumo:
      'Art. 6º, §1º — Todo Estado Parte em cujo território se encontre pessoa suspeita de crime art.4º, se considerar após exame informações que circunstâncias justificam, procederá à DETENÇÃO ou outras medidas legais para assegurar presença. Detenção vigora apenas tempo necessário ao início processo penal ou extradição. §2º — Estado procederá imediatamente a INVESTIGAÇÃO PRELIMINAR dos fatos. §3º — Pessoa detida terá facilidades para comunicar-se imediatamente com representante mais próximo do Estado de nacionalidade ou apátrida residência habitual. §4º — Estado que deteve notificará imediatamente Estados art.5º §1º sobre detenção e circunstâncias. Estado investigação preliminar comunicará sem demora resultados e indicará se pretende exercer jurisdição.',
    prova:
      'Procedimento após encontrar suspeito: detenção temporária para processo/extradição + investigação preliminar imediata + direito comunicação consular + notificação Estados com jurisdição.',
    pegadinha:
      'Dizer que detenção é por tempo indeterminado; ou que comunicação consular é facultativa.',
    exemplo:
      'Estrangeiro suspeito de tortura detido no aeroporto: deve poder falar com consulado e Brasil notifica país da nacionalidade da vítima.',
    macete: 'Art.6º = detém, investiga, avisa consulado, avisa Estados 5º.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 7,
    titulo: 'Aut dedere aut judicare — obrigação de processar se não extraditar',
    sintese: 'Se não extradita, submete a autoridades para processo + garantias',
    bloco: B,
    destaque: true,
    resumo:
      'Art. 7º, §1º — Estado Parte no território sob jurisdição do qual suposto autor crime art.4º for encontrado, se NÃO O EXTRADITAR, obrigar-se-á, nos casos art.5º, a SUBMETER o caso a suas autoridades competentes para fim de ser processado. §2º — Autoridades tomarão decisão conforme mesmas normas aplicáveis a qualquer crime grave. Nos casos art.5º §2º, regras sobre prova não poderão ser menos rigorosas que casos art.5º §1º. §3º — Qualquer pessoa processada por crime art.4º receberá garantias de TRATAMENTO JUSTO em todas fases processo.',
    prova:
      'Princípio aut dedere aut judicare (extradita ou julga) — núcleo da jurisdição universal. Processo com garantias de crime grave e tratamento justo. Prova não pode ser mais branda quando jurisdição universal.',
    pegadinha:
      'Dizer que Estado pode simplesmente liberar se não extraditar; ou que garantias de tratamento justo são dispensáveis.',
    exemplo:
      'Brasil encontra torturador estrangeiro e decide não extraditar: deve processá-lo internamente com garantias.',
    macete: 'Art.7º = não extradita? Então julga — com garantia de crime grave e tratamento justo.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 8,
    titulo: 'Extradição — tortura é crime extraditável',
    sintese: 'Considerado extraditável em tratados + base legal + ficção territorial',
    bloco: B,
    destaque: true,
    resumo:
      'Art. 8º, §1º — Crimes art.4º serão considerados EXTRADITÁVEIS em qualquer tratado extradição existente entre Estados Partes. Estados obrigam-se incluir tais crimes como extraditáveis em todo tratado que vierem concluir. §2º — Se Estado condiciona extradição à existência de tratado e receber pedido de outro com o qual não mantém tratado, poderá considerar Convenção como BASE LEGAL para extradição. Sujeita outras condições lei Estado requerido. §3º — Estados que não condicionam extradição a tratado reconhecerão tais crimes como extraditáveis dentro condições lei Estado requerido. §4º — Crime será considerado para fim extradição como se tivesse ocorrido não apenas onde ocorreu, mas também nos territórios dos Estados chamados a estabelecer jurisdição art.5º §1º (ficção territorial).',
    prova:
      'Extradição facilitada: tortura é extraditável por natureza, Convenção pode ser base legal quando não há tratado, e ficção de que crime ocorreu também nos territórios com jurisdição art.5º §1º facilita extradição.',
    pegadinha:
      'Dizer que tortura não é extraditável; ou que Convenção nunca pode ser base legal; ou ignorar ficção territorial §4º.',
    exemplo:
      'Brasil sem tratado com país X pode usar Convenção como base para extraditar torturador, se lei brasileira permitir.',
    macete: 'Art.8º = tortura sempre extraditável + Convenção pode ser base + finge que ocorreu em todos territórios 5º §1º.',
    bancas: ['FCC', 'FGV', 'Cebraspe'],
  },
  {
    n: 9,
    titulo: 'Assistência judiciária recíproca',
    sintese: 'Maior assistência possível + elementos prova',
    bloco: B,
    resumo:
      'Art. 9º, §1º — Estados Partes prestarão entre si a MAIOR ASSISTÊNCIA POSSÍVEL em relação a procedimentos criminais instaurados relativamente a delitos art.4º, inclusive fornecimento de todos ELEMENTOS DE PROVA necessários para processo que estejam em seu poder. §2º — Cumprirão obrigações conforme quaisquer tratados assistência judiciária recíproca existentes.',
    prova:
      'Cooperação penal: assistência máxima + provas. Conecta com art.8º extradição.',
    pegadinha:
      'Limitar assistência a extradição apenas.',
    exemplo:
      'Brasil fornece laudos e depoimentos a outro Estado que processa torturador.',
    macete: 'Art.9º = ajuda máxima com provas.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 10,
    titulo: 'Educação e treinamento — proibição incorporada',
    sintese: 'Ensino sobre proibição tortura no treinamento de agentes',
    bloco: C,
    destaque: true,
    resumo:
      'Art. 10º, §1º — Cada Estado Parte assegurará que ENSINO e INFORMAÇÃO sobre proibição de tortura sejam plenamente incorporados no TREINAMENTO do pessoal civil ou militar encarregado aplicação da lei, pessoal MÉDICO, FUNCIONÁRIOS PÚBLICOS e quaisquer outras pessoas que possam participar da CUSTÓDIA, INTERROGATÓRIO ou TRATAMENTO de qualquer pessoa submetida a qualquer forma de prisão, detenção ou reclusão. §2º — Cada Estado incluirá referida proibição nas normas ou instruções relativas aos deveres e funções de tais pessoas.',
    prova:
      'Prevenção via educação: treinamento obrigatório sobre proibição tortura para policiais, militares, médicos, funcionários, etc., e inclusão nas normas de serviço. Conecta com art.11.',
    pegadinha:
      'Dizer que treinamento é só para policiais; ou que basta norma penal sem treinamento.',
    exemplo:
      'Academia de polícia que inclui disciplina sobre Convenção e técnicas de interrogatório sem tortura cumpre art.10º.',
    macete: 'Art.10º = ensina que tortura é proibida para quem prende, interroga, cuida.',
    bancas: ['FCC', 'FGV', 'AOCP'],
  },
  {
    n: 11,
    titulo: 'Revisão sistemática de normas de interrogatório e custódia',
    sintese: 'Exame sistemático para evitar tortura',
    bloco: C,
    destaque: true,
    resumo:
      'Art. 11º — Cada Estado Parte manterá SISTEMATICAMENTE SOB EXAME as normas, instruções, métodos e práticas de INTERROGATÓRIO, bem como disposições sobre CUSTÓDIA e tratamento das pessoas submetidas, em qualquer território sob sua jurisdição, a qualquer forma de prisão, detenção ou reclusão, com vistas a EVITAR qualquer caso de tortura.',
    prova:
      'Revisão contínua: normas, instruções, métodos, práticas de interrogatório e custódia devem ser sistematicamente examinadas para prevenir tortura. Base para OPCAT e Mecanismo Nacional de Prevenção.',
    pegadinha:
      'Dizer que revisão é eventual ou facultativa.',
    exemplo:
      'Estado que revisa manual de interrogatório para proibir “pau-de-arara” cumpre art.11º.',
    macete: 'Art.11º = revisa sempre interrogatório e custódia para não torturar.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 12,
    titulo: 'Investigação ex officio — imparcial e imediata',
    sintese: 'Motivos razoáveis → investigação imparcial imediata',
    bloco: C,
    destaque: true,
    resumo:
      'Art. 12º — Cada Estado Parte assegurará que suas autoridades competentes procederão IMEDIATAMENTE a uma INVESTIGAÇÃO IMPARCIAL sempre que houver MOTIVOS RAZOÁVEIS para crer que um ato de tortura tenha sido cometido em qualquer território sob sua jurisdição.',
    prova:
      'Investigação ex officio: basta motivos razoáveis, não precisa queixa formal. Imparcial e imediata. Conecta com art.13 (direito de queixa). Muito cobrado.',
    pegadinha:
      'Exigir queixa da vítima para investigar; ou dizer que investigação pode ser parcial ou tardia.',
    exemplo:
      'Notícia de tortura em presídio veiculada na imprensa gera dever de investigação imediata e imparcial, mesmo sem vítima reclamar.',
    macete: 'Art.12º = motivo razoável → investiga já, imparcial, mesmo sem queixa.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 13,
    titulo: 'Direito de queixa e proteção de vítimas/testemunhas',
    sintese: 'Qualquer pessoa que alegue tortura pode queixar + proteção',
    bloco: C,
    destaque: true,
    resumo:
      'Art. 13º — Cada Estado Parte assegurará a qualquer pessoa que alegue ter sido submetida a tortura em qualquer território sob sua jurisdição o DIREITO DE APRESENTAR QUEIXA perante autoridades competentes, que procederão imediatamente e com imparcialidade ao exame do caso. Serão tomadas medidas para assegurar PROTEÇÃO do queixoso e das TESTEMUNHAS contra qualquer mau tratamento ou intimidação em consequência da queixa ou depoimento prestado.',
    prova:
      'Direito de petição: qualquer pessoa que alegue tortura pode queixar, exame imediato imparcial + proteção contra retaliação para queixoso e testemunhas.',
    pegadinha:
      'Exigir prova prévia para queixa; ou negar proteção a testemunhas.',
    exemplo:
      'Preso que denuncia tortura deve ter queixa examinada imediatamente e proteção contra represália de agentes.',
    macete: 'Art.13º = alegou tortura → pode queixar → exame imediato + protege queixoso e testemunha.',
    bancas: ['FCC', 'FGV', 'Cebraspe'],
  },
  {
    n: 14,
    titulo: 'Direito à reparação, indenização e reabilitação',
    sintese: 'Vítima tem direito reparação + indenização justa + reabilitação completa',
    bloco: C,
    destaque: true,
    resumo:
      'Art. 14º, §1º — Cada Estado Parte assegurará, em seu sistema jurídico, à VÍTIMA de ato de tortura o DIREITO À REPARAÇÃO e a uma INDENIZAÇÃO JUSTA E ADEQUADA, incluídos meios necessários para a mais COMPLETA REABILITAÇÃO possível. Em caso de MORTE da vítima como resultado de ato de tortura, seus DEPENDENTES terão direito à indenização. §2º — Dispositivo não afetará qualquer direito a indenização que vítima ou outra pessoa possam ter em decorrência das leis nacionais.',
    prova:
      'Reparação integral: reparação + indenização justa e adequada + reabilitação mais completa possível (médica, psicológica, social). Dependentes têm direito se morte. Não exclui outros direitos nacionais mais amplos.',
    pegadinha:
      'Limitar a indenização sem reabilitação; ou negar direito a dependentes em caso de morte; ou dizer que exclui outros direitos nacionais.',
    exemplo:
      'Vítima de tortura policial tem direito a tratamento psicológico, fisioterapia, indenização e medidas de reparação simbólica.',
    macete: 'Art.14º = vítima tortura tem reparação + indenização justa + reabilitação completa; morte → dependentes indenizados.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 15,
    titulo: 'Prova obtida sob tortura — inadmissível',
    sintese: 'Declaração sob tortura não pode ser prova, salvo contra torturador',
    bloco: C,
    destaque: true,
    resumo:
      'Art. 15º — Cada Estado Parte assegurará que nenhuma DECLARAÇÃO que se demonstre ter sido prestada como resultado de TORTURA possa ser invocada como PROVA em qualquer processo, salvo contra uma pessoa acusada de tortura como prova de que a declaração foi prestada.',
    prova:
      'Exclusão da prova ilícita por tortura: confissão ou declaração sob tortura é inadmissível em qualquer processo, exceto como prova de que a tortura ocorreu, contra o torturador. Conecta com CF art.5º LVI e CPP. STF: prova ilícita por derivação (frutos da árvore envenenada).',
    pegadinha:
      'Admitir confissão sob tortura como prova contra vítima; ou dizer que pode ser usada livremente.',
    exemplo:
      'Confissão obtida mediante espancamento não pode condenar réu; só pode ser usada para provar que houve tortura contra o policial.',
    macete: 'Art.15º = prova sob tortura = lixo, só serve para provar a tortura contra o torturador.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 16,
    titulo: 'Tratamentos cruéis, desumanos ou degradantes — proibição e prevenção',
    sintese: 'Obrigações arts.10-13 aplicam-se também a outros maus-tratos',
    bloco: C,
    destaque: true,
    resumo:
      'Art. 16º, §1º — Cada Estado Parte se comprometerá a PROIBIR em qualquer território sob sua jurisdição outros atos que constituam TRATAMENTO OU PENAS CRUÉIS, DESUMANOS OU DEGRADANTES que não constituam tortura tal como definida no art.1º, quando tais atos forem cometidos por funcionário público ou outra pessoa no exercício de funções públicas, ou por sua instigação, ou com seu consentimento ou aquiescência. Aplicar-se-ão, em particular, as obrigações dos arts.10, 11, 12 e 13, com substituição das referências a tortura por referências a outras formas de tratamentos ou penas cruéis, desumanos ou degradantes. §2º — Dispositivos da Convenção não restringem outros instrumentos internacionais ou lei nacional que proíba tais tratamentos ou que se refira a extradição ou expulsão.',
    prova:
      'Distinção tortura × outros maus-tratos: tortura exige finalidade específica + intencionalidade + dor aguda + agente público; outros tratamentos cruéis/desumanos/degradantes não exigem finalidade específica mas exigem agente público. Prevenção (ensino, revisão interrogatório, investigação ex officio, direito queixa) aplica-se também a eles. Hierarquia: tortura é mais grave, mas ambos proibidos.',
    pegadinha:
      'Confundir tortura com tratamento desumano; dizer que arts.10-13 não se aplicam a outros maus-tratos; ou exigir finalidade específica para tratamento desumano.',
    exemplo:
      'Superlotação carcerária com condições degradantes, sem finalidade de obter confissão, é tratamento desumano/degradante art.16º, não tortura art.1º, mas Estado deve proibir, treinar, revisar e investigar.',
    macete: 'Art.16º = tortura é topo; outros maus-tratos (cruel/desumano/degradante) também proibidos e com prevenção 10-13, mas sem exigir finalidade específica.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 17,
    titulo: 'Comitê CAT — composição 10 peritos',
    sintese: '10 peritos moral elevada + competência DH + título pessoal + distribuição geográfica',
    bloco: D,
    destaque: true,
    resumo:
      'Art. 17º, §1º — Constituir-se-á COMITÊ CONTRA A TORTURA (CAT) com 10 PERITOS de elevada reputação moral e reconhecida competência em direitos humanos, exercendo funções a título pessoal, com distribuição geográfica equitativa e utilidade de experiência jurídica. §2º — Membros eleitos em votação secreta dentre lista indicada pelos Estados Partes, cada Estado pode indicar 1 nacional, utilidade indicação membros do Comitê DH do PIDCP. §3º — Eleitos em reuniões bienais Estados Partes convocadas Secretário-Geral ONU, quorum 2/3 Estados Partes, eleitos maior número votos e maioria absoluta presentes e votantes. §4º — Primeira eleição máximo 6 meses após entrada vigor Convenção, candidaturas 3 meses após carta Secretário-Geral 4 meses antes, lista alfabética. §5º — Mandato 4 ANOS, reeleição possível, mandato 5 membros primeira eleição expira 2 anos, sorteio presidente reunião. §6º — Se membro falecer, demitir-se ou não puder cumprir, Estado que indicou indica outro perito entre nacionais restante mandato, aprovação maioria Estados Partes (silêncio 6 semanas = aprovação). §7º — Despesas membros por conta Estados Partes.',
    prova:
      'Comitê CAT: 10 peritos, moral elevada, competência DH, título pessoal, geográfica equitativa, experiência jurídica útil, mandato 4 anos, quorum eleição 2/3 Estados Partes, maioria absoluta, primeira eleição 6 meses após vigor, substituição com aprovação tácita 6 semanas.',
    pegadinha:
      'Trocar número 10 por 18 (confunde com Comitê DH PIDCP 18, CERD 18, CRC 18, CEDAW 23); trocar mandato 4 anos por 2; quorum 6 membros confunde com art.18.',
    exemplo:
      'CAT com 10 peritos analisa relatório do Brasil e faz comentários gerais.',
    macete: 'CAT = 10 peritos (moral+competência) + 4 anos + título pessoal + geográfica + quorum eleição 2/3.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'AOCP'],
  },
  {
    n: 18,
    titulo: 'Comitê CAT — mesa, regras, quorum e pessoal',
    sintese: 'Mesa 2 anos, regras procedimento, quorum 6, maioria presentes, SG ONU apoio',
    bloco: D,
    resumo:
      'Art. 18º, §1º — Comitê elegerá sua MESA para período 2 ANOS, reeleição possível. §2º — Comitê estabelecerá suas REGRAS DE PROCEDIMENTO, contendo: a) QUORUM 6 membros; b) decisões por MAIORIA votos membros presentes. §3º — Secretário-Geral ONU colocará à disposição pessoal e serviços necessários desempenho eficaz funções. §4º — SG ONU convocará primeira reunião, após Comitê reúne conforme regras procedimento. §5º — Estados Partes responsáveis gastos reuniões Estados Partes e Comitê, inclusive reembolso gastos ONU §3º.',
    prova:
      'Funcionamento interno CAT: mesa 2 anos, quorum 6 (metade +1 de 10), maioria presentes, SG ONU dá suporte, gastos por Estados Partes.',
    pegadinha:
      'Trocar quorum 6 por 12; mesa 2 anos por 4; dizer que ONU paga tudo.',
    exemplo:
      'Comitê CAT precisa 6 peritos para deliberar; decide por maioria dos presentes.',
    macete: 'CAT funciona: mesa 2a + quorum 6 + maioria presentes + SG ONU ajuda.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 19,
    titulo: 'Relatórios periódicos — 1 ano + 4 anos',
    sintese: 'Estado apresenta relatório 1 ano após vigor + suplementares 4 anos',
    bloco: E,
    destaque: true,
    resumo:
      'Art. 19º, §1º — Estados Partes submeterão ao Comitê, via SG ONU, RELATÓRIOS sobre medidas adotadas cumprimento obrigações Convenção, dentro prazo 1 ANO a contar início vigência Convenção no Estado Parte. A partir de então, relatórios suplementares a cada 4 ANOS sobre novas disposições e outros relatórios que Comitê solicitar. §2º — SG ONU transmitirá relatórios a todos Estados Partes. §3º — Cada relatório examinado pelo Comitê, que poderá fazer COMENTÁRIOS GERAIS que julgar oportunos e transmitir ao Estado interessado, que poderá responder com observações. §4º — Comitê pode incluir comentários + observações Estado em seu relatório anual art.24. Se Estado solicitar, pode incluir cópia relatório apresentado §1º.',
    prova:
      'Sistema de relatórios: inicial 1 ano após vigor para o Estado + periódicos 4 anos + extras se Comitê pedir. Comitê faz comentários gerais (não sentença) e pode publicar em relatório anual.',
    pegadinha:
      'Trocar 1 ano por 6 meses; 4 anos por 2; dizer que comentários são vinculantes como condenação.',
    exemplo:
      'Brasil ratificou 1989, deveria enviar relatório em 1990 e depois a cada 4 anos; CAT faz comentários e Brasil responde.',
    macete: 'Relatórios CAT: 1º em 1 ano + depois 4 em 4 anos + comentários gerais.',
    bancas: ['FCC', 'FGV', 'Cebraspe'],
  },
  {
    n: 20,
    titulo: 'Investigação confidencial de tortura sistemática',
    sintese: 'Informações fidedignas tortura sistemática → investigação confidencial + visita com anuência',
    bloco: E,
    destaque: true,
    resumo:
      'Art. 20º, §1º — Comitê, se receber INFORMAÇÕES FIDEDIGNAS que pareçam indicar de forma fundamentada que TORTURA é praticada SISTEMATICAMENTE no território de Estado Parte, convidará Estado a cooperar exame informações e transmitir observações pertinentes. §2º — Considerando observações Estado + outras informações pertinentes, Comitê poderá, se parecer justificável, designar um ou vários membros para PROCEDER a INVESTIGAÇÃO CONFIDENCIAL e informar urgentemente Comitê. §3º — Investigação, Comitê procurará obter colaboração Estado. Com anuência Estado, investigação poderá incluir VISITA a seu território. §4º — Após examinar conclusões membros §2º, Comitê transmitirá ao Estado interessado, com observações/sugestões pertinentes. §5º — Todos trabalhos §§1-4 CONFIDENCIAIS e procurar-se-á cooperação Estado. Concluídos trabalhos investigação §2º, Comitê poderá, após consultas Estado, incluir RESUMO resultados em relatório anual art.24.',
    prova:
      'Procedimento art.20 é extraordinário: tortura sistemática + informações fidedignas + investigação confidencial + visita só com concordância Estado + confidencialidade + resumo pode ir para relatório anual após consulta. Estado pode fazer reserva art.28 para não reconhecer competência art.20.',
    pegadinha:
      'Dizer que investigação é pública desde início; ou que visita pode ser sem anuência; ou que não precisa ser tortura sistemática (basta caso isolado).',
    exemplo:
      'CAT recebe informe de ONG sobre tortura sistemática em presídios de país X, convida Estado, designa peritos, com anuência visita prisões, relatório confidencial com sugestões, depois resumo no anual.',
    macete: 'Art.20 = tortura SISTEMÁTICA + fidedigna → investigação CONFIDENCIAL + visita só com OK Estado + resumo no anual.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 21,
    titulo: 'Comunicações inter-estatais — Estado × Estado',
    sintese: 'Declaração facultativa + 5 Estados para vigorar + procedimento 3+6+12 meses',
    bloco: E,
    destaque: true,
    resumo:
      'Art. 21º, §1º — Todo Estado Parte poderá declarar a qualquer momento que reconhece competência do Comitê para receber e examinar COMUNICAÇÕES em que um Estado Parte alegue que outro Estado Parte não cumpre obrigações Convenção. Só recebidas se Estado autor também declarou reconhecer competência. Comitê não recebe comunicação relativa a Estado que não declarou. Procedimento: a) Estado considera outro não cumpre → comunicação escrita → Estado destinatário 3 MESES explica com referência procedimentos nacionais/recursos; b) se em 6 MESES questão não dirimida satisfatoriamente, ambos podem submeter ao Comitê via notificação; c) Comitê só trata questão após assegurar ESGOTAMENTO recursos internos, salvo prolongamento injustificado ou improvável melhora vítima; d) reuniões confidenciais; e) bons ofícios para solução amistosa, pode constituir comissão conciliação ad hoc; f) pode solicitar informações pertinentes; g) Estados interessados direito representar e observações verbal/escrito; h) Comitê em 12 MESES após notificação b) apresenta relatório: i) se solução amistosa, breve exposição fatos e solução; ii) se não, breve exposição fatos + texto observações escritas e atas observações orais. Relatório encaminhado Estados interessados. §2º — Disposições entram em vigor quando 5 Estados Partes fizerem declarações §1º. Declarações depositadas SG ONU, cópia demais. Retirada a qualquer momento via notificação SG ONU, sem prejuízo exame questões já transmitidas, não recebe nova comunicação após retirada salvo nova declaração.',
    prova:
      'Queixa inter-estatal facultativa: precisa declaração dos dois Estados, 5 declarações para ativar sistema, procedimento 3 meses resposta + 6 meses negociação + 12 meses relatório Comitê, esgotamento recursos internos, confidencial, bons ofícios, comissão ad hoc.',
    pegadinha:
      'Dizer que qualquer Estado pode queixar sem declaração; ou que entra em vigor com 1 declaração (são 5); trocar prazos 3/6/12.',
    exemplo:
      'Estado A declara art.21, Estado B também declara, A acusa B de não criminalizar tortura, B responde em 3 meses, não resolve em 6, Comitê examina em 12 meses.',
    macete: 'Inter-estatal: facultativa + 5 para ativar + 3-6-12 meses + esgota recursos internos + confidencial.',
    bancas: ['FCC', 'FGV', 'Cebraspe'],
  },
  {
    n: 22,
    titulo: 'Comunicações individuais — petição da vítima',
    sintese: 'Declaração facultativa + 5 Estados + requisitos admissibilidade + confidencial',
    bloco: E,
    destaque: true,
    resumo:
      'Art. 22º, §1º — Todo Estado Parte poderá declarar a qualquer momento que reconhece competência do Comitê para receber e examinar COMUNICAÇÕES enviadas por pessoas sob sua jurisdição, ou em nome delas, que aleguem ser VÍTIMAS de violação por Estado Parte das disposições Convenção. Comitê não recebe comunicação relativa a Estado que não fez declaração. §2º — Inadmissível comunicação anônima, abuso direito, incompatível Convenção. §3º — Sem prejuízo §2º, Comitê levará comunicação ao conhecimento Estado que fez declaração §1º e sobre qual se alega violação. Em 6 MESES Estado submeterá explicações por escrito e se for caso recurso jurídico adotado. §4º — Comitê examinará comunicações à luz de todas informações submetidas pessoa e Estado. §5º — Comitê não examinará comunicação sem assegurar: a) mesma questão não foi nem está sendo examinada perante outra instância internacional investigação/solução; b) pessoa esgotou recursos internos, salvo prolongamento injustificado ou improvável melhora vítima. §6º — Reuniões confidenciais. §7º — Comitê comunicará PARECER ao Estado e à pessoa. §8º — Disposições entram em vigor quando 5 Estados fizerem declarações §1º. Declarações depositadas SG ONU, cópia demais. Retirada a qualquer momento via notificação SG ONU, sem prejuízo exame questões já transmitidas, não recebe nova comunicação após retirada salvo nova declaração.',
    prova:
      'Petição individual facultativa: declaração do Estado, 5 para ativar, inadmissibilidade anônima/abuso/incompatível, 6 meses resposta Estado, esgotamento recursos internos + não litispendência internacional, confidencial, parecer (não sentença). Brasil fez declaração art.22? Sim, em 2006? Na verdade Brasil reconheceu competência? Brasil reconheceu art.22 em 2006 via Decreto 6.365/2008? Cobrado.',
    pegadinha:
      'Dizer que qualquer vítima pode peticionar sem declaração Estado; ou que anônima é admissível; ou que não precisa esgotar recursos internos; ou confundir parecer com condenação vinculante.',
    exemplo:
      'Vítima brasileira de tortura, após esgotar recursos internos, envia comunicação ao CAT alegando violação art.14 reparação; CAT examina se Brasil declarou art.22.',
    macete: 'Individual: facultativa + 5 para ativar + 6 meses Estado + esgota interno + não pode estar em outra instância + anônima não + parecer confidencial.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 23,
    titulo: 'Privilégios e imunidades dos peritos',
    sintese: 'Facilidades, privilégios e imunidades peritos ONU',
    bloco: E,
    resumo:
      'Art. 23º — Membros do Comitê e membros das Comissões de Conciliação ad hoc designados art.21 §1º e) terão direito a facilidades, privilégios e imunidades concedidos a peritos em missões ONU, conforme seções pertinentes Convenção sobre Privilégios e Imunidades das Nações Unidas.',
    prova:
      'Peritos têm imunidade ONU para atuar com independência.',
    pegadinha:
      'Negar imunidade.',
    exemplo:
      'Perito CAT em visita confidencial tem imunidade para não ser processado por Estado visitado.',
    macete: 'Perito CAT = imunidade ONU.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 24,
    titulo: 'Relatório anual do Comitê',
    sintese: 'Comitê apresenta relatório anual a Estados Partes e AG ONU',
    bloco: E,
    resumo:
      'Art. 24º — Comitê apresentará relatório ANUAL sobre suas atividades aos Estados Partes e à Assembleia Geral das Nações Unidas.',
    prova:
      'Transparência: relatório anual para Estados e AG ONU, pode incluir comentários gerais art.19 e resumo investigação art.20.',
    pegadinha:
      'Dizer que relatório é só para SG ONU.',
    exemplo:
      'CAT inclui em relatório anual comentários sobre Brasil e resumo investigação tortura sistemática em outro país.',
    macete: 'CAT faz relatório anual para todos + AG ONU.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 25,
    titulo: 'Assinatura da Convenção',
    sintese: 'Aberta à assinatura todos Estados',
    bloco: F,
    resumo:
      'Art. 25º, §1º — Convenção aberta à ASSINATURA de todos Estados. §2º — Sujeita a RATIFICAÇÃO, instrumentos depositados SG ONU.',
    prova:
      'Cláusula final padrão ONU: assinatura + ratificação.',
    pegadinha:
      'Confundir assinatura com adesão.',
    exemplo:
      'Estado assina 1984 e ratifica 1989.',
    macete: 'Art.25 = assina + ratifica.',
    bancas: ['AOCP'],
  },
  {
    n: 26,
    titulo: 'Adesão',
    sintese: 'Aberta à adesão todos Estados',
    bloco: F,
    resumo:
      'Art. 26º — Convenção aberta à ADESÃO de todos Estados. Adesão via depósito instrumento adesão SG ONU.',
    prova:
      'Adesão para quem não assinou no prazo.',
    pegadinha:
      'Exigir assinatura prévia para adesão.',
    exemplo:
      'Estado que não assinou em 1984 pode aderir em 1995.',
    macete: 'Art.26 = adesão livre.',
    bancas: ['AOCP'],
  },
  {
    n: 27,
    titulo: 'Entrada em vigor — 20 instrumentos + 30 dias',
    sintese: 'Vigor 30 dias após 20º depósito',
    bloco: F,
    destaque: true,
    resumo:
      'Art. 27º, §1º — Convenção entrará em vigor no TRIGÉSIMO DIA a contar da data em que o VIGÉSIMO instrumento de ratificação ou adesão for depositado SG ONU. §2º — Para Estados que ratificarem/aderirem após 20º instrumento, vigor no trigésimo dia após depósito seu instrumento.',
    prova:
      'Regra entrada vigor: 20 ratificações/adesões + 30 dias. Depois, cada Estado 30 dias após seu depósito. Brasil depositou 28/09/1989, vigor 28/10/1989 (art.27 §2º).',
    pegadinha:
      'Trocar 20 por 10 ou 5; ou 30 dias por 90.',
    exemplo:
      'Convenção entrou em vigor internacional 26/06/1987 (após 20º depósito). Para Brasil, 28/10/1989.',
    macete: 'Vigor: 20 + 30 dias; depois cada um 30 dias.',
    bancas: ['FCC', 'FGV', 'AOCP'],
  },
  {
    n: 28,
    titulo: 'Reserva ao art.20 — investigação tortura sistemática',
    sintese: 'Estado pode declarar que não reconhece competência art.20',
    bloco: F,
    destaque: true,
    resumo:
      'Art. 28º, §1º — Cada Estado Parte poderá declarar, por ocasião da assinatura ou ratificação ou adesão, que NÃO RECONHECE competência do Comitê quanto ao disposto no Art.20 (investigação confidencial tortura sistemática). §2º — Estado que formulou reserva §1º poderá a qualquer momento tornar sem efeito reserva via notificação SG ONU.',
    prova:
      'Reserva permitida: art.20 (investigação sistemática). Muitos Estados fizeram. Pode retirar reserva a qualquer tempo. Diferente de art.30 §2º (reserva arbitragem/Corte IJ).',
    pegadinha:
      'Dizer que não pode reservar art.20; ou que reserva é definitiva sem retirada.',
    exemplo:
      'Estado ratifica Convenção mas declara não reconhecer art.20, assim CAT não pode investigar tortura sistemática ali.',
    macete: 'Reserva possível: art.20 (sistemática) + art.30 §2º (arbitragem/Corte). Pode retirar.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 29,
    titulo: 'Emendas à Convenção',
    sintese: 'Proposta + 1/3 pede conferência + maioria presentes + 2/3 aceitam = vigor',
    bloco: F,
    resumo:
      'Art. 29º, §1º — Todo Estado Parte pode propor EMENDA e depositar SG ONU. SG comunica proposta aos Estados, pede notifiquem se desejam conferência para examinar/votar. Se em 4 MESES pelo menos 1/3 Estados se manifestar favor convocação, SG convoca conferência sob auspícios ONU. Emenda adotada por MAIORIA Estados Partes presentes e votantes na conferência será submetida SG à aceitação todos Estados. §2º — Emenda adotada §1º entrará em vigor quando 2/3 Estados Partes notificarem SG que aceitaram conforme procedimentos constitucionais. §3º — Quando em vigor, emendas obrigatórias para Estados que aceitaram, demais permanecem obrigados por Convenção e emendas anteriores aceitas.',
    prova:
      'Procedimento emendas: proposta → 4 meses 1/3 pede conferência → maioria presentes adota → 2/3 aceitam para vigorar. Vincula só quem aceitou.',
    pegadinha:
      'Trocar 1/3 por 2/3 para convocar; ou maioria por unanimidade.',
    exemplo:
      'Emenda proposta, 1/3 Estados pedem conferência em 4 meses, conferência adota por maioria, 2/3 aceitam, entra em vigor para aceitantes.',
    macete: 'Emenda: 1/3 em 4 meses pede conferência + maioria adota + 2/3 aceita = vigor.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 30,
    titulo: 'Solução de controvérsias — arbitragem e Corte Internacional de Justiça',
    sintese: 'Negociação → arbitragem → Corte IJ + reserva possível',
    bloco: F,
    destaque: true,
    resumo:
      'Art. 30º, §1º — Controvérsias entre 2 ou mais Estados Partes sobre interpretação ou aplicação Convenção que não puderem ser dirimidas por NEGOCIAÇÃO serão, a pedido de um deles, submetidas a ARBITRAGEM. Se durante 6 MESES após pedido arbitragem Partes não acordarem termos compromisso arbitragem, qualquer Parte pode submeter controvérsia à CORTE INTERNACIONAL DE JUSTIÇA mediante solicitação conforme Estatuto Corte. §2º — Cada Estado pode, por ocasião assinatura/ratificação/adesão, declarar que NÃO SE CONSIDERA OBRIGADO pelo §1º. Demais Estados não obrigados por §1º com relação a Estado que formulou reserva. §3º — Estado que formulou reserva §2º pode retirá-la a qualquer momento via notificação SG ONU.',
    prova:
      'Solução controvérsias: negociação → arbitragem (6 meses para acordo termos) → Corte IJ. Reserva permitida §2º (segunda reserva além art.28). Pode retirar.',
    pegadinha:
      'Dizer que vai direto para Corte IJ sem arbitragem; ou que reserva não é permitida; ou trocar 6 meses.',
    exemplo:
      'Brasil e país X divergem sobre non-refoulement art.3º, tentam negociação, não resolve, pedem arbitragem, 6 meses sem acordo termos, Brasil leva à Corte IJ.',
    macete: 'Controvérsia: negocia → arbitra (6m) → Corte IJ + reserva possível.',
    bancas: ['FCC', 'FGV', 'Cebraspe'],
  },
  {
    n: 31,
    titulo: 'Denúncia da Convenção',
    sintese: 'Notificação escrita SG ONU + 1 ano efeitos + não afeta fatos anteriores',
    bloco: F,
    resumo:
      'Art. 31º, §1º — Todo Estado Parte pode DENUNCIAR Convenção via notificação escrita SG ONU. Denúncia produz efeitos 1 ANO depois data recebimento notificação SG. §2º — Denúncia não exime Estado obrigações relativas a qualquer ação/omissão ocorrida antes data efeitos denúncia; não suspende exame questões que Comitê já começara examinar antes data efeitos. §3º — A partir data efeitos denúncia Estado, Comitê não dará início exame qualquer nova questão referente ao Estado.',
    prova:
      'Denúncia: 1 ano para produzir efeitos, não retroage para fatos anteriores, não suspende casos já em exame, mas impede novos.',
    pegadinha:
      'Dizer que denúncia tem efeito imediato; ou que exime de fatos anteriores.',
    exemplo:
      'Estado denuncia Convenção em 2020, efeitos 2021, mas responde por tortura cometida em 2019 e casos já em exame continuam.',
    macete: 'Denúncia: 1 ano para valer, não apaga passado, não para casos em andamento, mas bloqueia novos.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 32,
    titulo: 'Notificações do Secretário-Geral',
    sintese: 'SG ONU comunica assinaturas, ratificações, adesões, vigor, emendas, denúncias',
    bloco: F,
    resumo:
      'Art. 32º — SG ONU comunicará a todos Estados membros ONU e todos Estados que assinaram ou aderiram: a) assinaturas, ratificações e adesões arts.25 e 26; b) data entrada vigor Convenção art.27 e data entrada vigor quaisquer emendas art.29; c) denúncias art.31.',
    prova:
      'Função depositário SG ONU: comunica tudo.',
    pegadinha:
      'Omitir emendas ou denúncias.',
    exemplo:
      'SG ONU avisa todos que Brasil ratificou e que Convenção entrou em vigor para Brasil em 28/10/1989.',
    macete: 'SG ONU = cartório da Convenção.',
    bancas: ['AOCP'],
  },
  {
    n: 33,
    titulo: 'Autenticidade dos textos e depósito',
    sintese: '6 línguas autênticas + depósito SG ONU + cópias autenticadas',
    bloco: F,
    resumo:
      'Art. 33º, §1º — Convenção, cujos textos em ÁRABE, CHINÊS, ESPANHOL, FRANCÊS, INGLÊS e RUSSO são igualmente AUTÊNTICOS, será depositada junto SG ONU. §2º — SG ONU encaminhará cópias autenticadas a todos Estados.',
    prova:
      'Cláusula final padrão ONU: 6 línguas oficiais autênticas.',
    pegadinha:
      'Incluir português como língua autêntica original (não é, mas tradução oficial).',
    exemplo:
      'Texto original em 6 línguas, português é tradução oficial Decreto 40/91.',
    macete: '6 línguas ONU autênticas: árabe, chinês, espanhol, francês, inglês, russo.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 34,
    titulo: 'OPCAT — Protocolo Facultativo — Sistema de visitas preventivas',
    sintese: 'Subcomitê Prevenção (SPT) + Mecanismo Nacional de Prevenção (MNPCT)',
    bloco: G,
    destaque: true,
    resumo:
      'OPCAT (2002, Decreto 6.085/2007) — objetivo estabelecer sistema de VISITAS REGULARES efetuadas por órgãos nacionais e internacionais independentes a lugares onde pessoas são privadas de liberdade, com intenção PREVENIR tortura e outros tratamentos cruéis, desumanos ou degradantes (art.1º OPCAT). Cria SUBCOMITÊ DE PREVENÇÃO DA TORTURA (SPT) — órgão internacional com visitas a locais detenção e assessoria. Art.17 OPCAT: cada Estado Parte manterá, designará ou estabelecerá, no máximo 1 ANO após entrada vigor OPCAT ou ratificação/adesão, um ou mais MECANISMOS PREVENTIVOS NACIONAIS INDEPENDENTES para prevenção tortura nível doméstico. Brasil: Lei 12.847/2013 cria Sistema Nacional de Prevenção e Combate à Tortura (SNPCT) e Comitê Nacional (CNPCT) e Mecanismo Nacional (MNPCT) — 11 peritos, mandato 3 anos, autonomia, visitas sem aviso, entrevistas reservadas, relatórios. Decreto 9.831/2019 tentou enfraquecer MNPCT (exoneração, trabalho voluntário) — SPT em 2019 opinou revogação por falta independência; liminar DPU 2ª Região restabeleceu funcionamento. Mecanismos estaduais também possíveis.',
    prova:
      'OPCAT é cobradíssimo: prevenção, não repressão; visitas regulares preventivas sem aviso; SPT internacional + MNPCT nacional independente, 11 peritos, 3 anos, autonomia estrutural/financeira, entrevistas reservadas. Brasil tem SNPCT (Lei 12.847/13). Diferença CAT (repressivo, investiga violação) × SPT/MNPCT (preventivo, visita).',
    pegadinha:
      'Confundir CAT (Comitê contra Tortura) com SPT (Subcomitê Prevenção) ou MNPCT; dizer que OPCAT é repressivo ou que visita precisa aviso ou autorização; dizer que MNPCT é vinculado a polícia.',
    exemplo:
      'MNPCT visita presídio sem aviso, entrevista presos reservadamente, recomenda melhorias para prevenir tortura — OPCAT.',
    macete: 'OPCAT = PREVENIR com visitas: SPT (ONU) + MNPCT (Brasil 11 peritos 3 anos, Lei 12.847/13, independente, sem aviso, entrevista reservada). CAT = reprime violação.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP', 'Vunesp'],
  },
];

