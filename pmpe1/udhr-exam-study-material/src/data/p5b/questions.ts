import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 121 · internação',
    enunciado:
      'Julgue o item: a medida de internação não comporta prazo determinado, devendo sua manutenção ser reavaliada, mediante decisão fundamentada, no máximo a cada três meses, não podendo o período máximo de internação exceder a cinco anos, com liberação compulsória aos dezoito anos de idade.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO — três números trocados. O art. 121 estabelece: reavaliação no máximo a cada 6 MESES (§2º), período máximo de 3 ANOS (§3º) e liberação compulsória aos 21 ANOS (§5º). A reavaliação trimestral (3 meses) é a do ACOLHIMENTO, prevista no art. 19, §1º — a banca mistura os dois institutos. Decore a sequência “6 · 3 · 21”, e lembre que a internação se rege pelos princípios da brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento.',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 117 e 118 · PSC e LA',
    enunciado:
      'Sobre as medidas socioeducativas de prestação de serviços à comunidade e de liberdade assistida, é correto afirmar que:',
    alternativas: [
      'a prestação de serviços à comunidade não excederá a seis meses, com jornada máxima de oito horas semanais; e a liberdade assistida será fixada pelo prazo mínimo de seis meses, podendo a qualquer tempo ser prorrogada, revogada ou substituída.',
      'a prestação de serviços à comunidade tem prazo mínimo de seis meses e jornada máxima de oito horas diárias.',
      'ambas as medidas têm prazo máximo de seis meses, vedada a prorrogação.',
      'a liberdade assistida tem prazo máximo de seis meses, sendo obrigatória sua conversão em semiliberdade ao término.',
      'a prestação de serviços à comunidade deve ser cumprida exclusivamente em dias úteis, ainda que prejudique a frequência escolar.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O contraste é o coração da questão: a PSC tem prazo MÁXIMO de 6 meses (art. 117) e jornada de até 8 horas SEMANAIS — jamais diárias, pegadinha da alternativa B; a LA tem prazo MÍNIMO de 6 meses (art. 118, §2º), podendo ser prorrogada, revogada ou substituída, ouvidos o orientador, o MP e o defensor. Ainda: a PSC é cumprida aos sábados, domingos e feriados ou em dias úteis, sempre sem prejudicar a escola ou a jornada de trabalho.',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Arts. 126 a 128 · remissão',
    enunciado: 'A respeito do instituto da remissão no ECA, assinale a afirmativa correta.',
    alternativas: [
      'A remissão importa necessariamente o reconhecimento da responsabilidade do adolescente e prevalece para efeito de antecedentes.',
      'Concedida pelo Ministério Público antes de iniciado o procedimento judicial, opera como forma de exclusão do processo; concedida pela autoridade judiciária após iniciado, importa suspensão ou extinção do processo, podendo ser cumulada com medidas socioeducativas, exceto semiliberdade e internação.',
      'A remissão somente pode ser concedida pela autoridade judiciária, sendo vedada sua concessão pelo Ministério Público.',
      'A remissão cumulada com medida socioeducativa é irrecorrível e não admite revisão judicial posterior.',
      'A remissão pode ser cumulada com qualquer medida socioeducativa, inclusive a internação, desde que haja anuência da defesa.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. Reúne os arts. 126, caput e parágrafo único, e 127. Três travas: (i) a remissão NÃO implica reconhecimento de responsabilidade nem gera antecedentes (derruba A); (ii) pode ser ministerial (pré-processual, com homologação judicial — art. 181) ou judicial (derruba C); (iii) admite cumulação com medidas, EXCETO semiliberdade e internação (derruba E). E o art. 128 garante a revisão judicial a qualquer tempo, a pedido do adolescente, do representante legal ou do MP (derruba D). Lembre ainda da Súmula 108 do STJ: a aplicação de medida socioeducativa é competência exclusiva do juiz.',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 136 · Conselho Tutelar',
    enunciado:
      'Julgue o item: compete ao Conselho Tutelar aplicar ao adolescente autor de ato infracional as medidas socioeducativas de advertência e de prestação de serviços à comunidade, bem como decretar a perda do poder familiar dos pais omissos.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO — dois excessos. Primeiro: o Conselho Tutelar NÃO aplica medidas socioeducativas; é órgão não jurisdicional (art. 131) e sua competência se limita às medidas de PROTEÇÃO do art. 101, I a VII, e às medidas aos pais do art. 129, I a VII (art. 136, I e II). A aplicação de medida socioeducativa é exclusiva do juiz — Súmula 108 do STJ. Segundo: a perda do poder familiar depende de decisão judicial em procedimento contraditório (art. 24); ao Conselho cabe apenas REPRESENTAR ao Ministério Público (art. 136, XI). Guarde o tripé do Conselho: atende, requisita e representa.',
  },
  {
    id: 5,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Arts. 131 a 139 · Conselho Tutelar',
    enunciado: 'Quanto ao Conselho Tutelar, assinale a alternativa correta.',
    alternativas: [
      'É órgão permanente e autônomo, não jurisdicional, composto de cinco membros escolhidos pela população local para mandato de quatro anos, permitida recondução mediante novo processo de escolha.',
      'É órgão do Poder Judiciário, composto de três membros nomeados pelo juiz da infância para mandato de três anos.',
      'Suas decisões podem ser revistas administrativamente pelo prefeito municipal ou pelo Conselho Municipal dos Direitos.',
      'Exige-se dos candidatos idade superior a dezoito anos, ensino médio completo e experiência comprovada no atendimento a crianças.',
      'O processo de escolha é conduzido pela Justiça Eleitoral, com posse dos eleitos no primeiro dia útil de janeiro do ano da eleição presidencial.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Reúne os arts. 131 e 132 com precisão. As demais concentram as pegadinhas do tema: o Conselho NÃO integra o Judiciário (é órgão municipal autônomo e não jurisdicional); suas decisões só podem ser revistas pela AUTORIDADE JUDICIÁRIA, a pedido de quem tenha legítimo interesse (art. 137), jamais pelo prefeito ou pelo CMDCA; os requisitos são apenas três — idoneidade moral, idade superior a 21 anos e residir no município (art. 133); e o processo de escolha é responsabilidade do CMDCA, fiscalizado pelo Ministério Público, realizado no primeiro domingo de outubro do ano seguinte ao da eleição presidencial, com posse em 10 de janeiro (art. 139).',
  },
  {
    id: 6,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 122 · hipóteses de internação',
    enunciado:
      'Adolescente é representado pela prática de ato infracional análogo ao tráfico de drogas, sem emprego de violência ou grave ameaça, sendo primário. À luz do ECA e da jurisprudência sumulada do STJ:',
    alternativas: [
      'a internação é obrigatória, dada a natureza hedionda do delito equiparado.',
      'o ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação, pois ausentes a violência e a grave ameaça, a reiteração em infrações graves e o descumprimento reiterado de medida anterior.',
      'cabe internação por prazo determinado de três anos, em razão da gravidade abstrata da conduta.',
      'a internação é vedada em qualquer hipótese quando o adolescente for primário, ainda que o ato tenha sido praticado com violência.',
      'a internação somente pode ser aplicada mediante concordância expressa do Ministério Público e da defesa.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. É a literalidade da SÚMULA 492 DO STJ: “O ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação do adolescente”. O art. 122 traz rol TAXATIVO de três hipóteses — violência ou grave ameaça à pessoa (I), reiteração em infrações graves (II) e descumprimento reiterado e injustificável de medida anterior (III, com teto de 3 meses) —, e o §2º veda a internação havendo outra medida adequada. A alternativa D erra ao afirmar vedação absoluta para o primário: havendo violência, o inciso I autoriza a internação.',
  },
  {
    id: 7,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Arts. 101 e 112 · proteção × socioeducativa',
    enunciado:
      'Criança de dez anos de idade subtrai um aparelho celular de colega na escola. Nos termos do ECA, a autoridade competente:',
    alternativas: [
      'aplicará medida socioeducativa de advertência, por se tratar de ato infracional leve.',
      'aplicará à criança exclusivamente as medidas de proteção previstas no art. 101, podendo o Conselho Tutelar atuar nas hipóteses dos incisos I a VII.',
      'aplicará medida de prestação de serviços à comunidade, limitada a oito horas semanais.',
      'determinará a internação provisória pelo prazo máximo de quarenta e cinco dias, para estudo do caso.',
      'encaminhará o caso à autoridade policial para lavratura de auto de apreensão em flagrante de ato infracional.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O art. 105 é categórico: ao ato infracional praticado por CRIANÇA correspondem as medidas do art. 101 — jamais medidas socioeducativas, que são exclusivas do adolescente (art. 112). A hipótese autorizadora é o art. 98, III (ameaça ou violação de direitos em razão de sua própria conduta). O Conselho Tutelar pode atuar aplicando as medidas dos incisos I a VII do art. 101 (art. 136, I). Todas as demais alternativas aplicam à criança institutos privativos do adolescente — erro estrutural que a banca adora.',
  },
  {
    id: 8,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 243 · bebida alcoólica',
    enunciado:
      'Julgue o item: vender, fornecer, servir, ministrar ou entregar, ainda que gratuitamente, bebida alcoólica a criança ou adolescente constitui infração administrativa punida com multa, sem repercussão criminal.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. Desde a Lei 13.106/2015, a conduta é CRIME, tipificado no art. 243 do ECA, com pena de DETENÇÃO DE 2 A 4 ANOS e multa, se o fato não constituir crime mais grave. Antes da alteração, o fornecimento de bebida a menor era tratado como infração administrativa/contravenção — daí a armadilha. Note que o tipo alcança o fornecimento GRATUITO e também outros produtos que possam causar dependência física ou psíquica, quando sem justa causa. Não confunda com o art. 244 (fogos de estampido: detenção de 6 meses a 2 anos) nem com o art. 242 (arma: reclusão de 3 a 6 anos).',
  },
  {
    id: 9,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Súmulas · STJ e STF',
    enunciado:
      'Sobre o entendimento sumulado dos tribunais superiores a respeito do ECA, assinale a afirmativa INCORRETA.',
    alternativas: [
      'Súmula 500 do STJ: a configuração do crime do art. 244-B do ECA independe da prova da efetiva corrupção do menor, por se tratar de delito formal.',
      'Súmula 492 do STJ: o ato infracional análogo ao tráfico de drogas, por si só, não conduz obrigatoriamente à imposição de medida socioeducativa de internação.',
      'Súmula 342 do STJ: no procedimento para aplicação de medida socioeducativa, é nula a desistência de outras provas em face da confissão do adolescente.',
      'Súmula 108 do STJ: a aplicação de medida socioeducativa ao adolescente pela prática de ato infracional é da competência exclusiva do Ministério Público.',
      'Súmula 605 do STJ: a superveniência da maioridade penal não interfere na apuração de ato infracional nem na aplicabilidade de medida socioeducativa em curso.',
    ],
    gabarito: 3,
    comentario:
      'Gabarito: D (a incorreta). A Súmula 108 do STJ diz exatamente o oposto: “A aplicação de medidas socioeducativas ao adolescente, pela prática de ato infracional, é da competência EXCLUSIVA DO JUIZ”. O Ministério Público pode conceder remissão (art. 126) e propor sua cumulação com medida, mas quem APLICA é sempre a autoridade judiciária. As demais reproduzem corretamente as Súmulas 500, 492, 342 e 605 do STJ. Vale acrescentar a Súmula 338 do STJ (a prescrição penal é aplicável nas medidas socioeducativas) e a Súmula 265 do STJ (é necessária a oitiva do menor antes da regressão da medida).',
  },
  {
    id: 10,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Prescrição e prazos processuais',
    enunciado:
      'A respeito da prescrição e dos prazos nos procedimentos do ECA, é correto afirmar que:',
    alternativas: [
      'as medidas socioeducativas são imprescritíveis, por sua natureza pedagógica, não se lhes aplicando os prazos do Código Penal.',
      'a prescrição penal é aplicável nas medidas socioeducativas, nos termos da Súmula 338 do STJ, computando-se o prazo do Código Penal reduzido pela metade em razão da menoridade; e o prazo máximo e improrrogável para conclusão do procedimento, estando o adolescente internado provisoriamente, é de quarenta e cinco dias.',
      'o prazo máximo para conclusão do procedimento com adolescente internado provisoriamente é de noventa dias, prorrogável uma única vez.',
      'nos procedimentos do ECA os prazos são contados em dias úteis, aplicando-se o prazo em dobro ao Ministério Público.',
      'a prescrição somente alcança as medidas socioeducativas em meio aberto, sendo imprescritível a internação.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. Dois temas reunidos. (i) PRESCRIÇÃO: a Súmula 338 do STJ firmou que “a prescrição penal é aplicável nas medidas socioeducativas”, utilizando-se os prazos do art. 109 do CP, reduzidos pela metade por força do art. 115 do CP (agente menor de 21 anos na data do fato) — o que derruba as alternativas A e E. (ii) PRAZOS: o art. 183 fixa em 45 DIAS o prazo máximo e IMPRORROGÁVEL para conclusão do procedimento com adolescente internado provisoriamente, em sintonia com o art. 108 (derruba C). Por fim, o art. 152, §2º, é expresso: os prazos do ECA são contados em DIAS CORRIDOS, sendo VEDADO o prazo em dobro para a Fazenda Pública e para o Ministério Público (derruba D).',
  },
];
