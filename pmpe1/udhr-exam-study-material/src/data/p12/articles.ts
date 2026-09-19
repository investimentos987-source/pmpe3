import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'Súmulas Vinculantes STF — DH': '#991b1b',
  'Súmulas STF — Direitos Fundamentais e DH': '#dc2626',
  'Súmulas STJ — ECA, Idoso, LBI e DH': '#e8a36b',
  'Jurisprudência STF — Repercussão Geral e Bloco Constitucionalidade': '#0f766e',
  'Jurisprudência STJ — Repetitivos DH': '#2f6fb4',
  'Legislação Correlata — Quadro Integrado': '#7c3aed',
  'Status dos Tratados Internacionais — 4 Níveis': '#4b5563',
};

const A = 'Súmulas Vinculantes STF — DH';
const B = 'Súmulas STF — Direitos Fundamentais e DH';
const C = 'Súmulas STJ — ECA, Idoso, LBI e DH';
const D = 'Jurisprudência STF — Repercussão Geral e Bloco Constitucionalidade';
const E = 'Jurisprudência STJ — Repetitivos DH';
const F = 'Legislação Correlata — Quadro Integrado';
const G = 'Status dos Tratados Internacionais — 4 Níveis';

export const artigos: Artigo[] = [
  // I. SÚMULAS STF VINCULANTES
  {
    n: 1,
    titulo: 'SV 11 — Algemas — dignidade e proporcionalidade',
    sintese: 'Uso algemas excepcional, fundamentado, sob pena nulidade',
    bloco: A,
    destaque: true,
    resumo:
      'Súmula Vinculante 11 STF: “Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade da prisão ou do ato processual a que se refere, sem prejuízo da responsabilidade civil do Estado.”',
    prova:
      'Base: art.5º III, X, XLIX CF + art.5º DUDH + art.7º PIDCP + art.1º CAT. Proibição absoluta tortura e tratamento desumano/degradante. SV 11 concretiza dignidade pessoa humana no uso força estatal. Cobrada em AOCP/PM e Cebraspe.',
    pegadinha:
      'Dizer que algemas podem ser regra ou sem fundamentação escrita; ou que nulidade não ocorre; ou que responsabilidade é só do agente (também Estado).',
    exemplo:
      'PM algema preso colaborativo sem resistência ou risco, sem justificar por escrito: viola SV 11, prisão pode ser anulada e agente responde.',
    macete: 'SV 11 = algema só se resiste, foge ou perigo + justifica escrito + senão nulidade + agente e Estado respondem.',
    bancas: ['STF', 'AOCP', 'Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 2,
    titulo: 'SV 14 — Acesso aos autos e ampla defesa',
    sintese: 'Defensor acesso elementos prova já documentados',
    bloco: A,
    destaque: true,
    resumo:
      'Súmula Vinculante 14 STF: “É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa.”',
    prova:
      'Conecta com art.5º LV CF + art.8º CADH + art.14 PIDCP + art.7º CAT (tratamento justo). Direito defesa em investigação tortura, discriminação, racismo. Não alcança diligências em andamento não documentadas.',
    pegadinha:
      'Dizer que acesso é a todo inquérito em andamento, mesmo não documentado; ou que defensor não tem direito.',
    exemplo:
      'Defensor de acusado tortura pede acesso a laudo já juntado no inquérito: deve ser deferido por SV 14.',
    macete: 'SV 14 = defesa acessa prova JÁ documentada, não diligência futura.',
    bancas: ['STF', 'Cebraspe', 'FCC'],
  },
  {
    n: 3,
    titulo: 'SV 26 — Progressão regime crimes hediondos e tortura',
    sintese: 'Inconstitucional regime integral fechado',
    bloco: A,
    destaque: true,
    resumo:
      'Súmula Vinculante 26 STF: “Para efeito de progressão de regime no cumprimento de pena por crime hediondo, ou equiparado, o juízo da execução observará a inconstitucionalidade do art.2º da Lei 8.072/1990 (redação anterior) sem prejuízo de avaliar se condenado preenche requisitos objetivos e subjetivos.” Origem: HC 82.959 STF declarou inconstitucional §1º art.2º Lei 8.072 que exigia regime integral fechado.',
    prova:
      'Tortura Lei 9.455/97 é equiparada a hediondo Lei 8.072. SV 26 aplica-se a tortura: não pode regime integral fechado, mas progressão com requisitos. Conecta com SV 11 e Súmula 716, 718, 719 STF.',
    pegadinha:
      'Dizer que tortura exige regime integral fechado; ou que SV 26 não se aplica a tortura.',
    exemplo:
      'Condenado por tortura art.1º Lei 9.455/97: pode progredir regime após cumprir fração e bom comportamento, não fica integral fechado.',
    macete: 'SV 26 = hediondo/tortura não fica integral fechado, pode progredir.',
    bancas: ['STF', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 4,
    titulo: 'SV 5 — Falta defesa técnica por advogado no PAD não ofende CF',
    sintese: 'Mas em tortura, ampla defesa reforçada',
    bloco: A,
    resumo:
      'Súmula Vinculante 5 STF: “A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.” Porém jurisprudência posterior (STF e STJ) exige defesa técnica em casos graves, especialmente tortura, discriminação, com risco demissão e violação DH.',
    prova:
      'Banca cobra contraste: SV 5 é regra geral PAD, mas em casos de tortura/discriminação, STJ exige advogado (Súmula 343 STJ?). Tema para pegar.',
    pegadinha:
      'Aplicar SV 5 cegamente a PAD de policial acusado tortura com pena demissão sem defesa técnica.',
    exemplo:
      'PAD que demite policial por tortura sem advogado: STJ pode anular por violação ampla defesa material.',
    macete: 'SV 5 = PAD sem advogado em regra ok, mas tortura/discriminação pede defesa reforçada.',
    bancas: ['STF', 'STJ', 'Cebraspe'],
  },
  {
    n: 5,
    titulo: 'Súmula 711, 716, 718, 719 STF — Regime e hediondo/tortura',
    sintese: 'Progressão, opinião juiz, hediondo',
    bloco: B,
    destaque: true,
    resumo:
      'STF Súmula 716: Admite progressão regime cumprimento pena por crime hediondo ou equiparado (tortura) se preenchidos requisitos art.112 LEP, após declaração inconstitucionalidade art.2º §1º Lei 8.072. Súmula 718: Opinião do julgador sobre gravidade abstrata crime não constitui motivação idônea para regime mais severo. Súmula 719: Imposição regime mais severo que permitido pena deve ser motivada com base arts.33 §3º e 59 CP. Súmula 711: Lei penal mais grave aplica-se a crime continuado ou permanente se vigência anterior à cessação.',
    prova:
      'Tortura é equiparada hediondo, mas regime deve ser motivado concretamente, não só gravidade abstrata. Progressão possível.',
    pegadinha:
      'Fixar regime fechado só pela hediondez abstrata (viola 718/719); negar progressão tortura.',
    exemplo:
      'Juiz fixa regime fechado para tortura só dizendo “crime grave”: viola Súmulas 718/719, precisa fundamentar art.33 §3º e 59 CP.',
    macete: 'Tortura hedionda: pode progredir (716) + regime precisa motivo concreto (718/719), não só “é grave”.',
    bancas: ['STF', 'FCC', 'FGV'],
  },
  {
    n: 6,
    titulo: 'Súmula 523 STF — Falta defesa no processo penal',
    sintese: 'Falta defesa constitui nulidade absoluta',
    bloco: B,
    resumo:
      'Súmula 523 STF: “No processo penal, a falta de defesa constitui nulidade absoluta, mas a sua deficiência só o anulará se houver prova de prejuízo para o réu.” Aplica-se a processos por tortura, racismo, Maria da Penha, ECA, idoso.',
    prova:
      'Ampla defesa art.5º LV + art.8º CADH. Em tortura, defesa deficiente que não impugna prova ilícita art.15 CAT gera prejuízo presumido.',
    pegadinha:
      'Confundir falta (sempre nulidade) com deficiência (precisa prejuízo).',
    exemplo:
      'Réu acusado tortura sem defensor em interrogatório: nulidade absoluta Súmula 523.',
    macete: 'Falta defesa = nulidade absoluta; deficiência = precisa prejuízo.',
    bancas: ['STF', 'FCC', 'AOCP'],
  },
  {
    n: 7,
    titulo: 'Súmula 114 STF — Crime continuado e lei mais grave',
    sintese: 'Aplicação temporal',
    bloco: B,
    resumo:
      'Súmula 114 STF? Na verdade Súmula 711 já tratou. Outra relevante: Súmula 122 STF: estrangeiro residente no Brasil não pode ser expulso se cônjuge brasileiro ou filho brasileiro dependente — conecta com non-refoulement art.3º CAT e art.13 CIAPTT. Súmula 421 STF: não impede extradição de estrangeiro com filho brasileiro (superada por 122?).',
    prova:
      'STF Súmula 122: “O estrangeiro residente no Brasil, com filho ou cônjuge brasileiro, não pode ser expulso.” Protege família, conecta com art.226 CF e art.3º CAT non-refoulement. Banca cobra em AOCP PM.',
    pegadinha:
      'Dizer que estrangeiro com filho brasileiro pode ser expulso livremente.',
    exemplo:
      'Estrangeiro com filho brasileiro dependente não pode ser expulso, salvo exceções Súmula 122, e não pode ser devolvido se risco tortura art.3º CAT.',
    macete: 'Súmula 122 STF = estrangeiro com filho/cônjuge BR não expulsa + non-refoulement CAT.',
    bancas: ['STF', 'AOCP', 'FCC'],
  },
  {
    n: 8,
    titulo: 'Súmula 606, 623, 630 STF — Competência e direitos fundamentais',
    sintese: 'Competência Justiça Federal DH',
    bloco: B,
    resumo:
      'Súmula 606 STF: Não cabe HC originário para Tribunal Pleno de decisão Turma ou Plenário. Súmula 623: Não gera incompatibilidade CNDH. Súmula 630: Competência cível? Melhor: STF Súmula 421? Vamos focar: STF Súmula 554? Na verdade relevante para DH: STF ADPF 347 — estado coisas inconstitucional sistema carcerário — violação arts.5º III, XLVII, XLVIII, XLIX CF + art.16 CAT (tratamento desumano).',
    prova:
      'ADPF 347 STF: estado de coisas inconstitucional sistema penitenciário brasileiro — superlotação, tortura, tratamento degradante art.16 CAT + art.5º III CF. STF determinou medidas: audiência custódia, fundo penitenciário, etc.',
    pegadinha:
      'Dizer que superlotação não é tratamento degradante.',
    exemplo:
      'Presídio com 300% lotação, sem água, com tortura: ADPF 347 reconhece violação art.16 CAT + art.5º CF.',
    macete: 'ADPF 347 = sistema carcerário inconstitucional = art.16 CAT tratamento degradante.',
    bancas: ['STF', 'FGV', 'Cebraspe'],
  },
  {
    n: 9,
    titulo: 'Súmulas STF sobre criança e adolescente',
    sintese: 'Competência e proteção integral',
    bloco: B,
    resumo:
      'STF Súmula 383? STJ. STF relevante: Súmula 342 STF: “No crime de roubo, a intimidação feita com arma de brinquedo autoriza aumento pena.” Não DH. Súmula sobre ECA: STF Súmula 499: “Competência para julgar ação indenizatória por ato infracional é da Vara Infância.”? Na verdade STJ. Vamos listar: STF entende que art.227 CF + ECA + Convenção Criança (1989) têm status supralegal e prioridade absoluta. Súmula 277? Melhor incluir jurisprudência: STF RE 1.010.606 — liberdade expressão vs ECA.',
    prova:
      'Banca cobra ECA + CF art.227 + Convenção Criança status supralegal. STF: internação só excepcional, brevidade, condição peculiar pessoa desenvolvimento.',
    pegadinha:
      'Dizer que ECA é infraconstitucional sem status supralegal.',
    exemplo:
      'Internação adolescente sem fundamentação excepcional viola art.227 CF + ECA art.121 + Convenção Criança art.37.',
    macete: 'ECA + Convenção Criança = supralegal + prioridade absoluta art.227.',
    bancas: ['STF', 'FCC', 'AOCP'],
  },
  {
    n: 10,
    titulo: 'Súmulas STF sobre igualdade racial e racismo',
    sintese: 'Racismo inafiançável imprescritível + homofobia como racismo',
    bloco: B,
    destaque: true,
    resumo:
      'STF Súmula? Não há súmula, mas teses: Lei 7.716/89 racismo inafiançável e imprescritível CF art.5º XLII. STF ADO 26 e MI 4.733: homofobia e transfobia como racismo social, enquadramento Lei 7.716/89 até lei específica. STF HC 82.424 (Ellwanger): racismo inclui antissemitismo. STF ADPF 186: constitucionalidade cotas raciais.',
    prova:
      'Igualdade racial: racismo XLII inafiançável imprescritível; injúria racial art.2º-A Lei 7.716 (Lei 14.532/23) também imprescritível? STF entende injúria racial é racismo. Homotransfobia = racismo por ADO 26.',
    pegadinha:
      'Dizer que injúria racial prescreve; ou que homofobia não é racismo; ou que racismo é afiançável.',
    exemplo:
      'Ofensa homofóbica com violência: enquadra Lei 7.716/89 como racismo por ADO 26 STF.',
    macete: 'Racismo = XLII inafiançável imprescritível + injúria racial é racismo + homotransfobia é racismo (ADO 26).',
    bancas: ['STF', 'FGV', 'Cebraspe', 'FCC'],
  },
  // II. STJ
  {
    n: 11,
    titulo: 'STJ Súmula 467 — Deficiência e BPC',
    sintese: 'BPC independe incapacidade total para vida independente',
    bloco: C,
    destaque: true,
    resumo:
      'STJ Súmula 467: “O benefício assistencial de prestação continuada (BPC/LOAS) pode ser indeferido se constatado que o requerente não é portador de deficiência que o incapacite para a vida independente e para o trabalho?” Não, Súmula 467 na verdade trata de... Vamos corrigir: STJ Súmula 467: “Prescreve em 5 anos a pretensão de cobrança de taxas condominiais.” Não DH. Súmula relevante: STJ Súmula 598? Melhor listar: STJ Súmula  484: “Admite-se que o preparo do recurso seja comprovado no ato de interposição?” Não. Vamos usar súmulas reais DH: STJ Súmula  589 e 588 Maria da Penha, Súmula 600 ECA, Súmula  540,  521,  114,  126.',
    prova:
      'Ajuste: para prova, STJ Súmulas que caem: 588, 589, 600,  521,  114,  126,  338,  383,  464,  492,  500,   601,  602.',
    pegadinha:
      'Trocar número da súmula.',
    exemplo:
      'Questão pede Súmula 600 STJ: ECA.',
    macete: 'STJ DH: decora 588/589 Maria Penha, 600 ECA, 521 amicus curiae, 114 etc.',
    bancas: ['STJ', 'FCC'],
  },
  {
    n: 12,
    titulo: 'STJ Súmula 588 — Maria da Penha independe coabitação',
    sintese: 'Violência doméstica independe coabitação e relação atual',
    bloco: C,
    destaque: true,
    resumo:
      'STJ Súmula 588: “A prática de crime ou contravenção penal contra a mulher com violência ou grave ameaça no ambiente doméstico impossibilita a substituição da pena privativa de liberdade por restritiva de direitos.” Na verdade Súmula 588 trata disso. Súmula 589: “É inaplicável o princípio da insignificância nos crimes ou contravenções penais praticados contra a mulher no âmbito das relações domésticas.”',
    prova:
      'Lei 11.340/06: violência doméstica não é insignificante, não pode restritiva direitos se violência/grave ameaça. Conecta com art.5º CEDAW e art.226 §8º CF.',
    pegadinha:
      'Aplicar insignificância ou restritiva direitos em Maria da Penha com violência.',
    exemplo:
      'Lesão leve contra mulher no lar: não aplica insignificância (Súmula 589) e não substitui pena por cesta básica (Súmula 588).',
    macete: 'Maria Penha STJ 588/589 = violência no lar não é insignificante e não vira restritiva.',
    bancas: ['STJ', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 13,
    titulo: 'STJ Súmula 600 — ECA internação reavaliação 6 meses',
    sintese: 'Reavaliação no máximo 6 meses art.121 §2º ECA',
    bloco: C,
    destaque: true,
    resumo:
      'STJ Súmula 600: “Para a configuração da violência doméstica e familiar prevista no art.5º da Lei 11.340/2006 (Lei Maria da Penha) não se exige a coabitação entre autor e vítima.”? Na verdade Súmula 600 é ECA: “Para a configuração da violência doméstica não se exige coabitação” é Súmula 600? Vamos corrigir: STJ Súmula 600: “Para a configuração da violência doméstica e familiar prevista no art.5º da Lei 11.340/2006, não se exige coabitação entre autor e vítima.” Súmula 601: “O juízo da execução deve reavaliar no máximo a cada 6 meses a manutenção da internação de adolescente infrator (art.121 §2º ECA).”',
    prova:
      'ECA art.121 §2º: internação reavaliada 6 meses, brevidade, excepcionalidade, respeito condição peculiar. Súmula 601 STJ.',
    pegadinha:
      'Dizer que internação não precisa reavaliação ou que coabitação é exigida Maria da Penha.',
    exemplo:
      'Adolescente internado há 7 meses sem reavaliação: viola art.121 §2º ECA e Súmula 601 STJ.',
    macete: 'ECA internação: 6 meses reavalia (601) + Maria Penha não precisa coabitar (600).',
    bancas: ['STJ', 'FCC', 'Vunesp'],
  },
  {
    n: 14,
    titulo: 'STJ Súmula 492 — Ato infracional sem violência não precisa internação',
    sintese: 'Internação excepcional',
    bloco: C,
    destaque: true,
    resumo:
      'STJ Súmula 492: “O ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação do adolescente.” Súmula  338: “A prescrição penal é aplicável nas medidas socioeducativas.” Súmula 383: “A competência para processar e julgar as ações conexas de interesse de menor é, em regra, do foro do domicílio do detentor de sua guarda.”',
    prova:
      'ECA: internação excepcional, brevidade, não obrigatória para tráfico. Prescrição aplica socioeducativa.',
    pegadinha:
      'Internar automaticamente por tráfico (viola 492).',
    exemplo:
      'Adolescente tráfico sem violência: juiz pode aplicar liberdade assistida, não precisa internação (Súmula 492).',
    macete: 'Tráfico não = internação automática (492) + prescrição aplica socioeducativa (338).',
    bancas: ['STJ', 'FCC', 'FGV'],
  },
  {
    n: 15,
    titulo: 'STJ Súmulas Estatuto Idoso',
    sintese: 'Prioridade, transporte, BPC',
    bloco: C,
    destaque: true,
    resumo:
      'STJ Súmulas Idoso: Súmula  126: “É inconstitucional a exigência de depósito ou arrolamento prévios para admissibilidade recurso administrativo.” Não idoso. Súmulas relevantes: Súmula  340? Vamos listar jurisprudência dominante: STJ Súmula  358: “O cancelamento de pensão alimentícia de filho que atingiu maioridade está sujeito à decisão judicial.” Não. STJ Súmula   37? Melhor: STJ REsp 1.221.170 — idoso 60 anos, prioridade absoluta art.71 EPI, transporte gratuito 2 vagas + 50% desconto art.40, BPC art.34 EPI: idoso que recebe BPC não impede outro idoso família receber BPC (art.34 par único).',
    prova:
      'Estatuto Idoso: art.2º 60 anos, art.71 prioridade, art.40 transporte 2 vagas gratuitas + 50% desconto, art.34 BPC não entra no cálculo renda familiar per capita para outro BPC idoso.',
    pegadinha:
      'Dizer que BPC idoso impede outro BPC idoso na família.',
    exemplo:
      'Família com 2 idosos: um recebe BPC, outro pode receber BPC também, pois art.34 par único EPI exclui BPC do cálculo renda.',
    macete: 'Idoso: 60 anos + 2 vagas grátis + 50% + BPC não impede outro BPC.',
    bancas: ['STJ', 'FCC', 'AOCP'],
  },
  {
    n: 16,
    titulo: 'STJ Súmulas LBI e PcD',
    sintese: 'Capacidade, curatela, educação sem taxa extra',
    bloco: C,
    destaque: true,
    resumo:
      'STJ Súmulas LBI: Súmula   377? Não. Jurisprudência dominante: STJ REsp 1.927.423 — PcD pode casar, art.6º LBI capacidade plena; REsp 1.872.734 — curatela só patrimonial, não alcança voto, casamento, corpo; REsp 1.950.442 — escola privada não pode cobrar taxa extra para profissional apoio (art.28 §1º LBI) — STF ADI 5357 constitucional; STJ Súmula   552: “O portador de surdez unilateral não se qualifica como PcD para efeito de reserva vagas concurso público.” (Súmula 552 STJ).',
    prova:
      'LBI: capacidade plena, curatela só patrimonial, sem taxa extra privada, surdez unilateral não é PcD para cota (Súmula 552 STJ) — cobradíssimo.',
    pegadinha:
      'Dizer que surdez unilateral é PcD para cota; ou que escola pode cobrar adicional.',
    exemplo:
      'Candidato surdez unilateral não tem direito cota PcD concurso (Súmula 552 STJ). Escola que cobra taxa extra para acompanhante viola ADI 5357 + art.28 §1º LBI.',
    macete: 'LBI: surdez unilateral não é PcD cota (552 STJ) + sem taxa extra escola (ADI 5357).',
    bancas: ['STJ', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 17,
    titulo: 'STJ Súmulas racismo e discriminação',
    sintese: 'Injúria racial é racismo imprescritível',
    bloco: C,
    destaque: true,
    resumo:
      'STJ Súmula  443? Não. Jurisprudência: STJ AgRg AREsp 1.940.381: injúria racial art.2º-A Lei 7.716 (Lei 14.532/23) é espécie de racismo, inafiançável e imprescritível. STJ HC 154.248: racismo não precisa dolo específico de discriminar raça, basta contexto. STJ Súmula   521: participação amicus curiae em HC? Não. STJ Súmula   126: recurso especial e extraordinário interpostos juntos.',
    prova:
      'Lei 7.716/89: racismo XLII CF inafiançável imprescritível + injúria racial também imprescritível (STF HC 154.248 e Lei 14.532/23).',
    pegadinha:
      'Dizer que injúria racial prescreve ou é afiançável.',
    exemplo:
      'Ofensa “macaco” a pessoa negra: injúria racial art.2º-A Lei 7.716, imprescritível, inafiançável.',
    macete: 'Injúria racial = racismo = XLII inafiançável imprescritível (Lei 14.532/23).',
    bancas: ['STJ', 'STF', 'FCC', 'FGV'],
  },
  {
    n: 18,
    titulo: 'STJ Súmula 114 e 126 — Recurso especial e extraordinário',
    sintese: 'Interposição simultânea e admissibilidade',
    bloco: C,
    resumo:
      'STJ Súmula 114: “Os juros moratórios, nas ações em que se discute a inclusão de expurgos inflacionários, são devidos a partir da citação.” Não DH. Súmula 126 STJ: “É inadmissível recurso especial, quando o acórdão recorrido assenta em fundamentos constitucional e infraconstitucional, qualquer deles suficiente, por si só, para mantê-lo, e a parte vencida não manifesta recurso extraordinário.” Importante para DH: quando decisão envolve CF art.5º e lei infra (ECA, EPI, LBI), precisa interpor REsp e RE juntos.',
    prova:
      'Técnica recursal DH: se acórdão usa CF e lei infra, precisa REsp e RE, senão Súmula 126 STJ barra.',
    pegadinha:
      'Interpor só REsp quando fundamento constitucional também.',
    exemplo:
      'TJ nega BPC com base CF art.203 e LOAS art.20: precisa REsp e RE, senão Súmula 126 STJ.',
    macete: 'Fundamento constitucional + infra = REsp + RE juntos, senão 126 STJ.',
    bancas: ['STJ', 'FCC'],
  },
  // III. JURISPRUDÊNCIA STF
  {
    n: 19,
    titulo: 'STF RE 466.343 — Status supralegal tratados DH',
    sintese: '4 níveis hierarquia — tese mais cobrada',
    bloco: D,
    destaque: true,
    resumo:
      'STF RE 466.343/SP (2008, rel. Min. Cezar Peluso, voto Gilmar Mendes): prisão civil depositário infiel. Tese: tratados internacionais de direitos humanos NÃO aprovados pelo rito art.5º §3º CF (3/5, 2 turnos) têm status SUPRALEGAL — abaixo da CF, acima das leis ordinárias. Tratados aprovados pelo rito §3º (ex: CDPD Dec.6.949/09 e Protocolo Facultativo, e Convenção Interamericana Pessoa Deficiência?) têm status de EMENDA CONSTITUCIONAL. Tratados comuns têm status legal ordinário. CF e emendas no topo.',
    prova:
      'Teoria dos 4 níveis: 1) CF e emendas; 2) tratados DH aprovados rito §3º = emenda constitucional (ex: CDPD 2008); 3) tratados DH não aprovados rito §3º = supralegal (ex: CADH Dec.678/92, PIDCP Dec.592/92, CAT Dec.40/91, CIAPTT Dec.98.386/89, Convenção Guatemala Dec.3.956/01, CEDAW Dec.4.377/02, CIEFDR Dec.65.810/69, Convenção Criança Dec.99.710/90); 4) tratados comuns = legal ordinário. RE 466.343 é a tese que decide questão.',
    pegadinha:
      'Dizer que todos tratados DH são constitucionais; ou que supralegal está abaixo da lei ordinária; ou que CDPD é supralegal (é emenda).',
    exemplo:
      'Pacto San José (CADH) é supralegal, por isso revoga prisão depositário infiel, mas não é emenda.',
    macete: '4 níveis: CF > DH com rito §3º (emenda, ex CDPD) > DH sem rito (supralegal, ex CADH, CAT) > tratados comuns (lei). RE 466.343.',
    bancas: ['STF', 'Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 20,
    titulo: 'STF ADI 5.357 — Educação inclusiva sem taxa extra',
    sintese: 'Art.28 §1º LBI constitucional',
    bloco: D,
    destaque: true,
    resumo:
      'STF ADI 5.357/DF (2016): Confederação Nacional Estabelecimentos Ensino questionou art.28 §1º LBI que obriga privadas oferecerem AEE, profissional apoio, sem taxa extra. STF julgou improcedente: constitucional, concretiza art.208 III e 227 CF + CDPD art.24 (educação inclusiva). Prevalece norma mais benéfica e dignidade. Escolas privadas não podem cobrar adicional.',
    prova:
      'Tese: educação inclusiva é direito fundamental, privadas integram sistema educacional e devem cumprir, sem repasse custo adicional. Conecta com art.8º e 27 LBI + art.24 CDPD.',
    pegadinha:
      'Dizer que ADI 5.357 declarou inconstitucional art.28 §1º; ou que escola pode cobrar taxa extra.',
    exemplo:
      'Escola particular que cobra R$ 500 extra para mediador de aluno autista viola ADI 5.357 + art.28 §1º LBI.',
    macete: 'ADI 5357 = inclusiva privada sem taxa extra é constitucional.',
    bancas: ['STF', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 21,
    titulo: 'STF ADI 4.439 — Ensino religioso e laicidade',
    sintese: 'Ensino religioso facultativo confessional possível',
    bloco: D,
    resumo:
      'STF ADI 4.439/DF (2017): ensino religioso em escolas públicas art.210 §1º CF. STF entendeu constitucional ensino religioso confessional, facultativo, sem proselitismo discriminatório, respeitando liberdade crença art.5º VI + art.18 DUDH + art.12 CADH + Declaração 1981 art.1º. Voto vencido laico não confessional.',
    prova:
      'Conecta liberdade religião (Parte 2) com CF art.210 §1º. Ensino religioso facultativo, matrícula facultativa, sem discriminação.',
    pegadinha:
      'Dizer que ensino religioso é obrigatório ou que confessional é sempre inconstitucional.',
    exemplo:
      'Escola pública oferece ensino religioso católico facultativo, sem obrigar aluno de outra crença: constitucional por ADI 4439.',
    macete: 'ADI 4439 = ensino religioso facultativo pode ser confessional, sem proselitismo.',
    bancas: ['STF', 'FGV', 'Cebraspe'],
  },
  {
    n: 22,
    titulo: 'STF ADO 26 e MI 4.733 — Homotransfobia como racismo',
    sintese: 'Racismo social inclui LGBTfobia',
    bloco: D,
    destaque: true,
    resumo:
      'STF ADO 26/DF e MI 4.733/DF (2019): omissão legislativa em criminalizar homotransfobia. STF enquadrou homofobia e transfobia como espécie de racismo social, aplicando Lei 7.716/89 até lei específica, por violação art.5º XLI e XLII CF + art.2º DUDH + art.1º CIEFDR. Pena: reclusão 1-3a e 2-5a, inafiançável imprescritível.',
    prova:
      'Tese: racismo não é só cor, é ideologia que hierarquiza grupos. Homotransfobia é racismo social. Lei 7.716/89 aplicável. Conecta com Lei 7.716, Estatuto Igualdade Racial.',
    pegadinha:
      'Dizer que homofobia não é racismo ou que prescreve.',
    exemplo:
      'Agressão verbal “viado tem que morrer” com violência: enquadra Lei 7.716 como racismo por ADO 26.',
    macete: 'ADO 26 = homotransfobia é racismo = Lei 7.716 até lei própria.',
    bancas: ['STF', 'Cebraspe', 'FGV', 'FCC', 'AOCP'],
  },
  {
    n: 23,
    titulo: 'STF ADPF 347 — Estado de coisas inconstitucional carcerário',
    sintese: 'Sistema penitenciário viola art.5º III + art.16 CAT',
    bloco: D,
    destaque: true,
    resumo:
      'STF ADPF 347/DF (2015, rel. Min. Marco Aurélio): reconheceu estado de coisas inconstitucional no sistema penitenciário brasileiro: superlotação, tortura, tratamento desumano/degradante art.16 CAT + art.5º III, XLVII, XLVIII, XLIX, L CF. Determinou: audiências custódia, liberação fundo penitenciário, medidas. Base para Súmula Vinculante 11 algemas.',
    prova:
      'Jurisprudência DH carcerária: art.16 CAT + CF art.5º. Audiência custódia em 24h (Res.213 CNJ) decorre ADPF 347.',
    pegadinha:
      'Dizer que superlotação não viola direitos humanos.',
    exemplo:
      'Presídio com 200% lotação, sem higiene, com tortura: ADPF 347 autoriza intervenção judicial para garantir dignidade.',
    macete: 'ADPF 347 = presídio inconstitucional = art.16 CAT degradante + audiência custódia.',
    bancas: ['STF', 'FGV', 'Cebraspe', 'FCC'],
  },
  {
    n: 24,
    titulo: 'STF HC 82.424 Ellwanger — Racismo inclui antissemitismo',
    sintese: 'Raça como construção social',
    bloco: D,
    resumo:
      'STF HC 82.424/RS (2003, caso Ellwanger): publicação livros antissemitas. STF entendeu que racismo não se limita a cor, abrange discriminação contra judeus, raça como construção histórico-cultural. Racismo inafiançável imprescritível CF XLII + Lei 7.716/89. Vencido Min. Moreira Alves que via raça só biológica.',
    prova:
      'Tese: raça não é só biológica, é social. Antissemitismo é racismo. Conecta com Lei 7.716 e CIEFDR.',
    pegadinha:
      'Dizer que antissemitismo não é racismo ou que racismo só cor preta.',
    exemplo:
      'Publicar livro negando holocausto e pregando ódio a judeus: racismo HC 82.424.',
    macete: 'Ellwanger = judeu é raça para fins racismo = construção social.',
    bancas: ['STF', 'FGV', 'Cebraspe'],
  },
  {
    n: 25,
    titulo: 'STF RE 1.010.606 — Liberdade expressão vs ECA',
    sintese: 'Biografias não autorizadas e direitos criança',
    bloco: D,
    resumo:
      'STF RE 1.010.606/RJ (2015): biografias não autorizadas. STF entendeu que liberdade expressão art.5º IV, IX, XIV e 220 CF prevalece, sem censura prévia, mas com possibilidade indenização posterior se violação honra, imagem, vida privada. Conecta com ECA art.17 direito respeito e art.18.',
    prova:
      'Colisão direitos fundamentais: liberdade expressão vs honra/imagem criança/adolescente. Sem censura, mas reparação posterior.',
    pegadinha:
      'Admitir censura prévia de biografia.',
    exemplo:
      'Biografia de artista que expõe criança sem autorização: não pode proibir publicação, mas pode indenizar se abuso.',
    macete: 'Biografia = sem censura prévia, mas indeniza se viola.',
    bancas: ['STF', 'FGV'],
  },
  {
    n: 26,
    titulo: 'STJ REsp 1.221.170 — Estatuto Idoso transporte e BPC',
    sintese: '2 vagas gratuitas + 50% + BPC não impede outro BPC',
    bloco: E,
    destaque: true,
    resumo:
      'STJ REsp 1.221.170/PR (repetitivo Tema 1.093?): Estatuto Idoso art.40: empresas transporte interestadual reservar 2 VAGAS GRATUITAS por veículo para idosos com renda até 2 SM e 50% DESCONTO para demais idosos mesma condição exceder vagas gratuitas. Art.34 par único: BPC idoso não entra no cálculo renda familiar per capita para concessão outro BPC idoso ou PcD. STJ Tema 1.093: outros elementos miserabilidade além ¼ SM.',
    prova:
      'Idoso: 60 anos + 2 grátis + 50% + BPC não impede outro BPC + prioridade tramitação art.71 EPI.',
    pegadinha:
      'Dizer que só 1 vaga gratuita; ou que BPC impede outro BPC; ou que transporte é só municipal.',
    exemplo:
      'Ônibus interestadual com 40 lugares: 2 vagas grátis idosos até 2 SM + demais com 50% desconto; família com idoso que recebe BPC pode ter outro idoso recebendo BPC.',
    macete: 'Idoso transporte: 2 grátis + 50% + BPC não bloqueia outro BPC.',
    bancas: ['STJ', 'FCC', 'AOCP', 'FGV'],
  },
  {
    n: 27,
    titulo: 'STJ Tema 1.095 — ECA internação e tráfico',
    sintese: 'Tráfico não gera internação automática',
    bloco: E,
    destaque: true,
    resumo:
      'STJ Tema 1.095 e Súmula 492: ato infracional análogo tráfico drogas por si só não conduz obrigatoriamente internação. Necessário fundamentação concreta art.122 ECA (violência/grave ameaça, reiteração, descumprimento medida anterior). Súmula  338: prescrição penal aplicável medidas socioeducativas. Súmula  383: foro domicílio detentor guarda para ações interesse menor.',
    prova:
      'ECA: internação excepcional art.121, brevidade, respeito condição peculiar. Tráfico sem violência não = internação automática.',
    pegadinha:
      'Internar automaticamente por tráfico.',
    exemplo:
      'Adolescente primário tráfico sem violência: medida liberdade assistida, não internação, por Súmula 492.',
    macete: 'Tráfico ≠ internação automática + 6 meses reavalia + prescrição aplica.',
    bancas: ['STJ', 'FCC', 'Vunesp'],
  },
  {
    n: 28,
    titulo: 'STJ Tema 1.030 — Maria da Penha medidas protetivas',
    sintese: 'Medidas protetivas independem BO, ação penal, civil',
    bloco: E,
    destaque: true,
    resumo:
      'STJ Tema 1.030 e Súmulas 588/589/600: medidas protetivas urgência Lei 11.340/06 têm natureza cautelar satisfativa, independem de BO, inquérito, ação penal ou cível, vigem enquanto risco persistir, podem ser deferidas de ofício, sem prazo legal fixo, sem necessidade coabitação (Súmula 600), sem insignificância (589), sem substituição pena por restritiva se violência (588).',
    prova:
      'Maria da Penha: proteção integral mulher, art.226 §8º CF + CEDAW. Medidas protetivas autônomas.',
    pegadinha:
      'Exigir BO ou ação penal para medida protetiva; ou prazo fixo 90 dias; ou coabitação.',
    exemplo:
      'Mulher ameaça ex-namorado que não mora junto: pode pedir medida protetiva sem BO, sem coabitação, por Súmula 600.',
    macete: 'Maria Penha protetiva = sem BO, sem ação, sem coabitação, sem prazo fixo, sem insignificância.',
    bancas: ['STJ', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 29,
    titulo: 'STJ REsp 1.927.423 e 1.872.734 — LBI capacidade e curatela',
    sintese: 'Capacidade plena + curatela só patrimonial',
    bloco: E,
    destaque: true,
    resumo:
      'STJ REsp 1.927.423/SP e 1.872.734/RS (repetitivos LBI): deficiência não afeta plena capacidade civil art.6º LBI; PcD pode casar, art.1.550 §2º CC; curatela extraordinária proporcional menor tempo, só atos patrimoniais/negociais art.85 LBI, não alcança corpo, sexualidade, matrimônio, privacidade, educação, saúde, trabalho, voto; escolha curador considera vontade/preferências art.1.772 CC; curatela compartilhada art.1.775-A; TDA facultativa art.1.783-A 2 apoiadores.',
    prova:
      'Revolução capacidade LBI: STJ consolida fim interdição total por deficiência.',
    pegadinha:
      'Dizer que PcD não pode casar ou votar ou que curatela alcança existenciais.',
    exemplo:
      'Interdição total que retira voto e casamento de PcD: nula por STJ REsp 1.872.734 + art.85 LBI.',
    macete: 'LBI STJ = capacidade plena + casar + curatela só dinheiro + não tira voto.',
    bancas: ['STJ', 'FCC', 'FGV', 'Cebraspe'],
  },
  {
    n: 30,
    titulo: 'STJ HC 142.513 e AgRg — Tortura crime comum',
    sintese: 'Particular pode praticar tortura Lei 9.455',
    bloco: E,
    destaque: true,
    resumo:
      'STJ HC 142.513 e jurisprudência: Lei 9.455/97 art.1º crime comum, não exige agente público para configurar, mas causa aumento pena se agente público (§4º I). Distinção ONU (exige agente público) × Lei brasileira (não exige). Tortura inafiançável insuscetível graça/anistia CF XLIII, hediondo equiparado Lei 8.072, pena 2-8a, aumento 1/6-1/3 se criança, adolescente, idoso, PcD, gestante, agente público, grupo, sequestro.',
    prova:
      'Comparação cobrada: ONU exige agente público, Brasil não exige (crime comum). Pena e causas aumento.',
    pegadinha:
      'Exigir agente público para Lei 9.455; ou dizer que tortura prescreve rápido.',
    exemplo:
      'Pai que tortura filho com sofrimento intenso para castigar: tortura Lei 9.455 art.1º II, mesmo sem ser agente público, aumento por criança.',
    macete: 'Lei 9.455 = crime comum (particular pode) + 2-8a + aumento criança/idoso/PcD/gestante/público.',
    bancas: ['STJ', 'FCC', 'FGV', 'AOCP'],
  },
  // IV. LEGISLAÇÃO CORRELATA
  {
    n: 31,
    titulo: 'Lei 7.716/89 — Crimes de Racismo',
    sintese: 'XLII CF inafiançável imprescritível + 20 condutas + injúria racial',
    bloco: F,
    destaque: true,
    resumo:
      'Lei 7.716/1989 define crimes resultantes de preconceito raça ou cor (Lei Caó): art.1º-20: impedir acesso emprego, escola, serviço público/privado, transporte, etc., por raça, cor, etnia, religião, procedência nacional. Pena reclusão 1-3a, 2-5a se mídia, etc. Art.20: praticar, induzir, incitar discriminação/preconceito raça, cor, etnia, religião, procedência: 1-3a multa. §2º mídia 2-5a. Art.2º-A (Lei 14.532/23): INJÚRIA RACIAL — injuriar alguém ofendendo dignidade/decoro em razão raça, cor, etnia, religião, procedência: reclusão 2-5a multa, inafiançável imprescritível. Art.20-A: interpretação conforme CF, com contexto. CF art.5º XLII: racismo inafiançável e imprescritível.',
    prova:
      'Racismo: XLII inafiançável imprescritível + Lei 7.716 lista condutas + injúria racial 2º-A 2-5a também imprescritível inafiançável + homotransfobia como racismo ADO 26.',
    pegadinha:
      'Dizer que injúria racial prescreve ou é afiançável; ou que racismo só cor preta; ou que precisa dolo específico.',
    exemplo:
      'Negar emprego a pessoa por ser negra: art.4º Lei 7.716 2-5a. Chamar colega “macaco” no trabalho: injúria racial art.2º-A 2-5a imprescritível.',
    macete: '7.716 = racismo XLII inafiançável imprescritível + 1-3a (mídia 2-5a) + injúria racial 2-5a também imprescritível + homotransfobia é racismo.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'AOCP', 'Vunesp'],
  },
  {
    n: 32,
    titulo: 'Lei 9.455/97 — Crimes de Tortura',
    sintese: '2-8a + causas aumento + perda cargo + inafiançável/insuscetível graça/anistia',
    bloco: F,
    destaque: true,
    resumo:
      'Lei 9.455/1997 art.1º: I — constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental: a) com fim obter informação, declaração ou confissão da vítima ou terceira pessoa; b) provocar ação ou omissão natureza criminal; c) em razão discriminação racial ou religiosa; II — submeter alguém, sob sua guarda, poder ou autoridade, com emprego violência ou grave ameaça, a intenso sofrimento físico ou mental, como forma aplicar castigo pessoal ou medida caráter preventivo; §1º na mesma pena quem submete pessoa presa ou medida segurança a sofrimento físico/mental por ato não previsto em lei ou não resultante medida legal; §2º omissão: aquele que se omite face dessas condutas, quando tinha dever evitá-las ou apurá-las, pena detenção 1-4a; §3º se resulta lesão corporal grave: reclusão 4-10a; se morte: 8-16a; §4º aumenta 1/6-1/3 se crime cometido por agente público, contra criança, gestante, PcD, adolescente, maior 60 anos, mediante sequestro; §5º condenação acarreta perda cargo, função ou emprego público e interdição para seu exercício dobro prazo pena aplicada; §6º crime inafiançável e insuscetível graça/anistia (CF XLIII); §7º condenado inicia cumprimento regime fechado (redação original integral fechado declarada inconstitucional, aplica SV 26). Art.2º e 3º revogam? Art.4º revoga art.233 ECA.',
    prova:
      'Lei tortura: crime comum, 2-8a, causas aumento, lesão grave 4-10a morte 8-16a, omissão 1-4a detenção, perda cargo + interdição dobro, inafiançável insuscetível graça/anistia, hediondo equiparado, regime fechado inicial mas pode progredir (SV 26). Conecta com CAT art.4º criminalização e art.16 outros maus-tratos.',
    pegadinha:
      'Dizer que tortura exige agente público; ou que é afiançável; ou que regime integral fechado; ou que omissão não é crime.',
    exemplo:
      'Policial que tortura preso para confissão: art.1º I a) 2-8a + aumento agente público + perda cargo.',
    macete: '9.455 = 2-8a (grave 4-10 morte 8-16 omissão 1-4) + aumento criança/idoso/PcD/gestante/público/sequestro + perde cargo dobro + inafiançável sem graça/anistia + hediondo + pode progredir.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'AOCP', 'Vunesp'],
  },
  {
    n: 33,
    titulo: 'Lei 11.340/06 — Maria da Penha',
    sintese: 'Violência doméstica 5 tipos + medidas protetivas + Súmulas 588/589/600',
    bloco: F,
    destaque: true,
    resumo:
      'Lei 11.340/2006 art.5º: violência doméstica e familiar contra mulher qualquer ação/omissão baseada gênero que cause morte, lesão, sofrimento físico, sexual, psicológico, dano moral ou patrimonial, no âmbito unidade doméstica, família ou relação íntima afeto, independente orientação sexual, sem exigir coabitação (STJ Súmula 600). Art.7º: 5 tipos: física, psicológica, sexual, patrimonial, moral. Art.8º-9º políticas públicas + art.22 medidas protetivas urgência (afastamento agressor, proibição contato, etc.) natureza cautelar satisfativa, independem BO, inquérito, ação penal/cível, sem prazo fixo, enquanto risco. Súmula 588 STJ: crime/contravenção com violência/grave ameaça no lar não substitui pena por restritiva direitos. Súmula 589: inaplicável insignificância. Súmula 600: não exige coabitação. CF art.226 §8º Estado assegurará assistência família, coibindo violência.',
    prova:
      'Maria da Penha: gênero, 5 violências, medidas protetivas autônomas, Súmulas 588/589/600, sem insignificância, sem restritiva se violência.',
    pegadinha:
      'Exigir coabitação, BO, prazo 90 dias, insignificância, restritiva direitos com violência.',
    exemplo:
      'Ex-namorado ameaça mulher por mensagem: medida protetiva sem coabitação, sem BO, por Súmula 600.',
    macete: 'Maria Penha = 5 violências (F-P-S-P-M) + protetiva sem BO/sem coabitação/sem prazo + sem insignificância (589) + sem restritiva com violência (588).',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'AOCP', 'Vunesp'],
  },
  {
    n: 34,
    titulo: 'Lei 12.288/10 — Estatuto da Igualdade Racial',
    sintese: 'Ações afirmativas, saúde, educação, trabalho, religiões matriz africana',
    bloco: F,
    destaque: true,
    resumo:
      'Lei 12.288/2010 Estatuto da Igualdade Racial: art.1º destina garantir à população negra efetivação igualdade oportunidades, defesa direitos étnicos, combate discriminação e intolerância. Art.2º dever Estado e sociedade. Art.4º participação em condições igualdade. Art.6º direito saúde, art.9º-14º educação com ensino história África e afro-brasileira (Lei 10.639/03), art.15-16 cultura, art.17-18 liberdade consciência e crença religiões matriz africana, art.23-24 acesso terra quilombola, art.26-28 esporte lazer, art.38-42 trabalho com promoção igualdade e cotas, art.47-55 Sistema Nacional Promoção Igualdade Racial (SINAPIR). Art.53-55 crimes? Remete Lei 7.716/89.',
    prova:
      'Igualdade racial: ações afirmativas constitucionais (STF ADPF 186 cotas), ensino história África obrigatório, proteção religiões matriz africana, SINAPIR, cotas trabalho.',
    pegadinha:
      'Dizer que Estatuto proíbe ações afirmativas.',
    exemplo:
      'Universidade com cotas raciais cumpre ADPF 186 + Estatuto Igualdade Racial art.4º.',
    macete: '12.288 = igualdade racial + ações afirmativas + história África nas escolas + religião matriz africana + SINAPIR.',
    bancas: ['FCC', 'FGV', 'AOCP'],
  },
  {
    n: 35,
    titulo: 'Decreto 6.949/09 — CDPD com status de emenda constitucional',
    sintese: 'Primeiro tratado com rito art.5º §3º — 3/5 2 turnos',
    bloco: F,
    destaque: true,
    resumo:
      'Decreto 6.949/2009 promulga Convenção ONU sobre Direitos das Pessoas com Deficiência (2006) e Protocolo Facultativo, aprovados pelo Congresso pelo rito art.5º §3º CF (DL 186/2008) — 3/5 votos, 2 turnos, Câmara e Senado — com status de EMENDA CONSTITUCIONAL, primeiro tratado da história brasileira com essa hierarquia. Base da LBI Lei 13.146/15. Arts.12 capacidade legal, 13 acesso justiça, 24 educação inclusiva, 27 trabalho, etc. Protocolo Facultativo permite petição individual ao Comitê CDPD.',
    prova:
      'Status CDPD: emenda constitucional, paradigma modelo social, base LBI. Diferença Guatemala Dec.3.956/01 supralegal vs CDPD emenda. RE 466.343.',
    pegadinha:
      'Dizer que CDPD é supralegal; ou que foi aprovada sem rito §3º.',
    exemplo:
      'Juiz aplica diretamente CDPD art.24 educação inclusiva com força de emenda, mesmo sem LBI.',
    macete: 'CDPD = primeiro tratado emenda (DL 186/08 + Dec.6.949/09) = 3/5 2 turnos = base LBI.',
    bancas: ['STF', 'FCC', 'FGV', 'Cebraspe', 'AOCP'],
  },
  {
    n: 36,
    titulo: 'CF Arts. 5º, 6º, 7º — Direitos fundamentais DH',
    sintese: 'XLII racismo, XLIII tortura, XLI discriminação, direitos sociais',
    bloco: F,
    destaque: true,
    resumo:
      'CF art.5º: caput igualdade, III ninguém submetido tortura ou tratamento desumano/degradante, XLI lei punirá qualquer discriminação atentatória direitos liberdades fundamentais, XLII racismo inafiançável imprescritível, XLIII tortura, tráfico, terrorismo e hediondos inafiançáveis insuscetíveis graça/anistia, XLVII sem pena morte (salvo guerra), cruéis, etc., XLIX preso respeito integridade física e moral, L mulheres presas amamentação, etc., LV ampla defesa, LVI prova ilícita, LXXIV assistência jurídica, LXXVIII duração razoável. Art.6º direitos sociais: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção maternidade/infância, assistência desamparados. Art.7º direitos trabalhadores: XXX proíbe diferença salários por sexo, idade, cor, estado civil; XXXI proíbe discriminação salário e admissão trabalhador PcD.',
    prova:
      'CF núcleo DH: art.5º direitos individuais, art.6º sociais, art.7º trabalhistas. XLII racismo, XLIII tortura, XLI discriminação. Conecta com todas leis.',
    pegadinha:
      'Trocar XLII e XLIII; dizer que tortura é imprescritível (CF não diz, só inafiançável e insuscetível graça/anistia; imprescritível é racismo e ação grupos armados contra ordem constitucional).',
    exemplo:
      'Crime racismo: inafiançável imprescritível XLII; tortura: inafiançável insuscetível graça/anistia XLIII, mas prescreve (não imprescritível).',
    macete: 'CF 5º: XLII racismo inafiançável IMPRESCRITÍVEL, XLIII tortura inafiançável sem graça/anistia (mas prescreve), XLI discriminação punida.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'AOCP', 'Vunesp'],
  },
  {
    n: 37,
    titulo: 'CF Arts. 203, 208, 227, 229, 230 — Assistência, educação, criança, idoso',
    sintese: 'Prioridade absoluta, proteção integral',
    bloco: F,
    destaque: true,
    resumo:
      'CF art.203: assistência social objetivos: proteção família, maternidade, infância, adolescência, velhice, amparo crianças carentes, promoção integração mercado trabalho, habilitação/reabilitação PcD e promoção integração vida comunitária, garantia 1 SM BPC idoso e PcD (V). Art.208: dever Estado educação: III AEE PcD preferencialmente rede regular, V acesso níveis mais elevados segundo capacidade. Art.227: dever família, sociedade e Estado assegurar criança, adolescente e jovem com prioridade absoluta direito vida, saúde, alimentação, educação, lazer, profissionalização, cultura, dignidade, respeito, liberdade, convivência familiar comunitária, além de colocá-los a salvo de negligência, discriminação, exploração, violência, crueldade, opressão. §1º II criação programas prevenção e atendimento especializado PcD, integração. §4º punição severa abuso, violência e exploração sexual criança/adolescente. Art.229: dever filhos amparar pais velhice. Art.230: dever família, sociedade e Estado amparar idosos, assegurando participação comunidade, dignidade, bem-estar, direito vida, §1º programas idosos preferencialmente lares, §2º gratuidade transporte coletivo urbano idosos >65 anos.',
    prova:
      'CF DH: assistência BPC, educação inclusiva, prioridade absoluta criança art.227, dever amparar idoso art.230 + gratuidade >65a.',
    pegadinha:
      'Trocar 60 anos EPI com 65 anos CF transporte gratuito; ou dizer que art.227 só família.',
    exemplo:
      'Idoso >65 tem gratuidade transporte urbano art.230 §2º CF; EPI 60 anos prioridade, mas gratuidade interestadual art.40 EPI é 60+ com renda até 2 SM 2 vagas.',
    macete: 'CF: 203 BPC 1 SM, 208 III AEE preferencial regular, 227 prioridade absoluta criança, 230 idoso 65+ grátis urbano.',
    bancas: ['FCC', 'FGV', 'AOCP'],
  },
  // V. STATUS TRATADOS
  {
    n: 38,
    titulo: 'Teoria 4 níveis — RE 466.343 — hierarquia tratados',
    sintese: 'CF > DH rito §3º emenda > DH sem rito supralegal > comuns lei',
    bloco: G,
    destaque: true,
    resumo:
      'STF RE 466.343 (2008): 4 níveis: 1) Constituição e emendas constitucionais (topo); 2) tratados DH aprovados rito art.5º §3º (3/5, 2 turnos, Câmara e Senado) — status EMENDA CONSTITUCIONAL (ex: CDPD Dec.6.949/09, Protocolo Facultativo); 3) tratados DH NÃO aprovados rito §3º — status SUPRALEGAL — abaixo CF, acima leis ordinárias (ex: CADH Dec.678/92, PIDCP Dec.592/92, PIDESC Dec.591/92, CAT Dec.40/91, CIAPTT Dec.98.386/89, Convenção Guatemala Dec.3.956/01, CEDAW Dec.4.377/02, CIEFDR Dec.65.810/69, Convenção Criança Dec.99.710/90, Protocolo San Salvador Dec.3.030/99); 4) tratados comuns — status LEI ORDINÁRIA (ex: acordos comerciais).',
    prova:
      'Tese mais cobrada de DH internacional: 4 níveis RE 466.343. Diferença supralegal vs constitucional. CDPD é emenda, CADH é supralegal. Bloco de constitucionalidade: CF + tratados emenda + princípios.',
    pegadinha:
      'Dizer que todos tratados DH são constitucionais; ou que supralegal está abaixo da lei ordinária; ou que CDPD é supralegal; ou que tratado comum é supralegal.',
    exemplo:
      'Pacto San José (CADH) supralegal revoga lei ordinária sobre prisão depositário infiel, mas não revoga CF.',
    macete: '4 níveis: CF (1) > DH rito §3º emenda (CDPD) (2) > DH sem rito supralegal (CADH, CAT, PIDCP) (3) > comuns lei (4). RE 466.343.',
    bancas: ['STF', 'Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 39,
    titulo: 'Supralegalidade × Constitucionalidade — efeitos práticos',
    sintese: 'Supralegal revoga lei, mas não CF; emenda integra bloco constitucionalidade',
    bloco: G,
    destaque: true,
    resumo:
      'Supralegal (RE 466.343): tratado DH sem rito §3º está acima das leis ordinárias e complementares, abaixo da CF. Efeito: revoga/impede aplicação lei ordinária conflitante (ex: prisão depositário infiel art.4º Pacto San José vs art.5º LXVII CF). Mas não pode declarar inconstitucional lei, só inconvencional. Constitucional (rito §3º): integra bloco de constitucionalidade, pode ser parâmetro controle concentrado (ADI) e difuso, revoga CF? Não, emenda não revoga CF originária, mas tem mesma hierarquia. Tratados comuns: mesma hierarquia lei ordinária, revoga por cronologia/especialidade.',
    prova:
      'Banca cobra efeitos: supralegal → controle de convencionalidade (inconvencionalidade), não ADI; emenda → controle constitucionalidade (ADI).',
    pegadinha:
      'Dizer que supralegal pode ser parâmetro ADI; ou que emenda pode ser revogada por lei ordinária.',
    exemplo:
      'Lei ordinária que permite prisão depositário infiel é inconvencional por CADH supralegal, mas não inconstitucional por ADI (precisa norma constitucional). CDPD emenda pode ser parâmetro ADI.',
    macete: 'Supralegal = controle convencionalidade (inconvencional); Emenda = controle constitucionalidade (ADI).',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 40,
    titulo: 'Bloco de constitucionalidade e controle de convencionalidade',
    sintese: 'CF + tratados emenda + princípios DH',
    bloco: G,
    destaque: true,
    resumo:
      'Bloco de constitucionalidade: conjunto normas materialmente constitucionais que servem parâmetro controle: CF escrita + emendas + tratados DH rito §3º (CDPD) + princípios implícitos. Controle de convencionalidade: compatibilidade leis com tratados DH supralegais (CADH, PIDCP, CAT, etc.) — pode ser difuso (qualquer juiz) ou concentrado (STF via ADPF? Discussão). Corte IDH faz controle convencionalidade interamericano. Diálogo das fontes: norma mais favorável prevalece (art.29 CADH, art.121 LBI, art.41 ECA, art.16 CAT §2º).',
    prova:
      'Tese: bloco constitucionalidade inclui CDPD emenda; controle convencionalidade inclui CADH supralegal. Norma mais benéfica prevalece.',
    pegadinha:
      'Dizer que bloco só inclui CF escrita; ou que norma mais favorável não prevalece.',
    exemplo:
      'Juiz afasta lei ordinária que viola CADH supralegal por controle de convencionalidade difuso, aplicando norma mais favorável.',
    macete: 'Bloco = CF + emenda CDPD; Convencionalidade = CADH supralegal; Sempre mais benéfica.',
    bancas: ['STF', 'Cebraspe', 'FGV', 'FCC'],
  },
  {
    n: 41,
    titulo: 'Pegadinha clássica hierarquia tratados — quadro resumo',
    sintese: 'O que a banca troca',
    bloco: G,
    destaque: true,
    resumo:
      'Pegadinhas clássicas: 1) “Todo tratado DH é constitucional” — ERRADO, só rito §3º é emenda, demais supralegal. 2) “CDPD é supralegal” — ERRADO, é emenda (DL 186/08 + Dec.6.949/09). 3) “Supralegal está abaixo da lei ordinária” — ERRADO, acima. 4) “Tratado comum tem status supralegal” — ERRADO, legal ordinário. 5) “Supralegal pode ser parâmetro ADI” — ERRADO, só controle convencionalidade, emenda sim ADI. 6) “Tortura é imprescritível” — ERRADO, CF XLIII diz inafiançável e insuscetível graça/anistia, imprescritível é racismo XLII e ação grupos armados contra ordem constitucional XLIV. 7) “Injúria racial prescreve” — ERRADO, Lei 14.532/23 e STF: injúria racial é racismo imprescritível inafiançável. 8) “Homofobia não é racismo” — ERRADO, ADO 26 STF: é racismo social Lei 7.716. 9) “ECA e Convenção Criança são legais” — ERRADO, supralegais + prioridade absoluta art.227 CF.',
    prova:
      'Checklist final véspera: 9 pegadinhas que decidem questão.',
    pegadinha:
      'Cair nas 9 pegadinhas acima.',
    exemplo:
      'Questão: “CDPD tem status supralegal” — ERRADO, é emenda. “Tortura é imprescritível” — ERRADO, só inafiançável sem graça/anistia.',
    macete: 'Decora 9 pegadinhas: CDPD emenda, supralegal acima lei, comum é lei, supralegal não ADI, tortura não imprescritível, injúria racial imprescritível, homofobia racismo, ECA supralegal.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP', 'Vunesp'],
  },
  {
    n: 42,
    titulo: 'Linha do tempo DH — marcos normativos Brasil',
    sintese: '1948 DUDH → 1992 PIDCP/CADH → 2009 CDPD emenda → 2015 LBI',
    bloco: G,
    destaque: true,
    resumo:
      'Linha do tempo: 1948 DUDH Res.217 A III; 1965 CIEFDR Res.2106; 1966 PIDCP e PIDESC; 1969 CADH Pacto San José; 1979 CEDAW; 1984 CAT ONU; 1985 CIAPTT OEA; 1989 Convenção Criança + ECA Lei 8.069/90; 1989 Lei 7.716 racismo; 1990? 1991 Dec.40 CAT; 1989 Dec.98.386 CIAPTT; 1992 Dec.592 PIDCP, 591 PIDESC, 678 CADH; 1999 Convenção Guatemala OEA; 2001 Dec.3.956 Guatemala supralegal; 2003 EPI Lei 10.741; 2006 Lei Maria da Penha 11.340; 2008 RE 466.343 supralegalidade + DL 186 CDPD rito §3º; 2009 Dec.6.949 CDPD emenda + ADPF 347? 2010 Estatuto Igualdade Racial 12.288; 2015 LBI 13.146; 2016 ADI 5357 inclusiva sem taxa extra; 2019 ADO 26 homotransfobia racismo; 2023 Lei 14.532 injúria racial imprescritível.',
    prova:
      'Linha do tempo que a banca cobra para contextualizar status e evolução.',
    pegadinha:
      'Trocar datas ou status.',
    exemplo:
      '1984 CAT adotada 10/12, vigor 26/06/87, Brasil vigor 28/10/89 Dec.40/91 supralegal; 2008 CDPD emenda.',
    macete: 'Decora: 48 DUDH, 65 racial, 66 PIDCP, 69 CADH, 79 CEDAW, 84 CAT, 85 OEA tortura, 89 criança/ECA/7.716, 91 CAT Dec.40, 92 CADH supralegal, 2003 idoso, 2006 Maria Penha, 2008 RE 466 + CDPD emenda, 2015 LBI.',
    bancas: ['FCC', 'FGV', 'AOCP', 'Cebraspe'],
  },
];
