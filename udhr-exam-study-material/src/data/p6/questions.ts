import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 1º · definição de discriminação racial',
    enunciado:
      'Julgue o item conforme o art. 1º da CIEFDR (Decreto nº 65.810/1969): a expressão “discriminação racial” abrange distinção, exclusão ou restrição baseada na raça, cor, descendência ou origem nacional ou étnica, sem abranger, contudo, a hipótese de preferência fundada nesses critérios.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O art. 1º, §1º, inclui expressamente a PREFERÊNCIA: “qualquer distinção, exclusão, restrição ou preferência”. É a diferença clássica com o art. 1º da CEDAW (Parte 3), que fala apenas em “distinção, exclusão ou restrição” (sem preferência). Some-se a esfera de incidência da CIEFDR: a VIDA PÚBLICA (política, econômica, social, cultural ou qualquer outro campo).',
  },
  {
    id: 2,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Normativa interna · decretos',
    enunciado:
      'O Decreto nº 65.810, de 8 de dezembro de 1969, promulga no Brasil o seguinte instrumento internacional:',
    alternativas: [
      'a Convenção Internacional sobre a Eliminação de Todas as Formas de Discriminação Racial (CIEFDR).',
      'a Convenção Interamericana para Prevenir e Punir a Tortura.',
      'a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica).',
      'o Pato Internacional de Direitos Civis e Políticos (PIDCP).',
      'a Declaração Americana dos Direitos e Deveres do Homem.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Decreto 65.810/1969 = CIEFDR, ratificada pelo Brasil em 1968. Cuidado com as “gemélias”: Pacto de San José é Decreto 678/1992; PIDCP é Decreto 592/1992; Pacto Interamericano contra Tortura é Decreto 40/1991. A CIEFDR é também tratado de DH com status supralegal no Brasil (rito ordinário, pré-EC 45/2004).',
  },
  {
    id: 3,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Parte I · arts. 1º a 7',
    enunciado: 'Sobre a Parte I da CIEFDR (arts. 1º a 7), assinale a alternativa INCORRETA.',
    alternativas: [
      'O art. 3º condena a segregação racial e o apartheid, comprometendo os Estados a prevenir, proibir e erradicar todas as práticas dessa natureza nos territórios sob sua jurisdição.',
      'O art. 4º limita-se a exortar os Estados a desestimularem a propaganda racista, sem exigir a criminalização das organizações que promovem a discriminação racial nem da participação nelas.',
      'O art. 6º assegura proteção efetiva e recursos perante os tribunais nacionais, além do direito de reivindicar reparação ou satisfação justa e adequada pelos danos sofridos.',
      'O art. 7º manda adotar medidas no campo do ensino, da educação, da cultura e da informação para combater preconceitos e promover compreensão, tolerância e amizade.',
      'O art. 2º, alínea “d”, obriga os Estados a proibir e acabar com a discriminação racial praticada por qualquer pessoa, grupo ou organização, inclusive particulares.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B (a incorreta). O art. 4º vai MUITO além de “exortar”: obriga os Estados a declarar delito punível a divulgação de ideias de superioridade ou ódio racial, a incitação à discriminação, os atos de violência e a assistência a atividades racistas; e a DECLARAR ILEGAIS e PROIBIR as organizações que promovam a discriminação, punindo até a PARTICIPAÇÃO nelas como crime (alínea “e”). É a base do HC 82.424/2004 (caso Ellwanger — anti-semitismo impresso não é liberdade protegida).',
  },
  {
    id: 4,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Arts. 1º, §4º e 2º, §2º · ações afirmativas',
    enunciado:
      'Sobre as medidas especiais (ações afirmativas) no sistema da CIEFDR, assinale a afirmativa correta.',
    alternativas: [
      'As cotas raciais configuram discriminação racial na definição do art. 1º, por se tratarem de preferência baseada em critérios raros.',
      'As medidas especiais só podem ser permanentes quando destinadas a grupos unicamente étnicos.',
      'Não serão consideradas discriminação racial as medidas especiais tomadas com a única finalidade de permitir progresso adequado de certos grupos raciais ou étnicos, desde que não façam nascer a manutenção de direitos separados e não se prolonguem uma vez atingidos os objetivos.',
      'As ações afirmativas são admissíveis independentemente de finalidade de igualdade, desde que aprovadas pelo Comitê CERD.',
      'As medidas especiais implicam obrigatoriamente o reconhecimento de direitos em condições superiores aos demais grupos.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. O art. 1º, §4º (e o art. 2º, §2º) reconhecem as ações afirmativas como NÃO discriminadoras, com duas travas: não podem manter direitos separados e não podem se prolongar após atingidos os objetivos. É a mesma lógica dos arts. 4º, §1º, e 2º da Convenção da Criança... aliás, da CEDAW (medidas especiais temporárias) — e do fundamento das cotas validadas pelo STF na ADPF 186.',
  },
  {
    id: 5,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Comitê CERD · composição e petição',
    enunciado:
      'Julgue o item: o Comitê sobre a Eliminação da Discriminação Racial, composto por 23 peritos, recebe automaticamente petições individuais de qualquer Estado que seja parte da Convenção.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO — dois erros. (i) O CERD é composto por 18 PERITOS (art. 8): quem tem 23 é o Comitê CEDAW (Parte 3 da coleção). (ii) A petição individual NÃO é automática: depende de DECLARAÇÃO prévia do Estado reconhecendo a competência do Comitê (art. 14). O Brasil a fez pelo DECRETO 4.738, de 2003 — a mesma Declaração Facultativa estudada nesta parte.',
  },
  {
    id: 6,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Art. 5º · rol de direitos',
    enunciado:
      'Nos termos do art. 5º da CIEFDR, os Estados-partes garantirão, sem distinção de raça, cor ou origem nacional ou étnica, o direito de acesso a:',
    alternativas: [
      'todo gênero de lugares e serviços destinados ao uso do público, como transportes, hotéis, restaurantes, cafés, cinemas e parques.',
      'exclusivamente aos tribunais nacionais, vedado o acesso a órgãos estatais administrativos.',
      'locais públicos estatais, sendo facultada a proibição em estabelecimentos privados como hotéis e cinemas.',
      'todos os direitos, ressalvados os econômicos, sociais e culturais, que dependem de disponibilidade orçamentária.',
      'apenas aos serviços de saúde, educação e habitação, conforme os índices reconhecidos.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. A alínea “f” do art. 5º garante literalmente o acesso a lugares e serviços de uso público — e cita transportes, hotéis, restaurantes, cafés, cinemas e parques. O rol de direitos do art. 5º também abrange tribunais (“a”), segurança pessoal (“b”), direitos políticos (“c”), outros civis (“d”) e direitos econômicos, sociais e culturais (“e”) com salário igual por trabalho igual.',
  },
  {
    id: 7,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Decreto 4.738/2003 · requisitos da petição',
    enunciado:
      'Para que um indivíduo possa encaminhar comunicação ao Comitê CERD por violação de direito previsto na CIEFDR, nos termos do Decreto nº 4.738/2003, é requisito essencial:',
    alternativas: [
      'que a comunicação não esteja sendo examinada em outro procedimento de investigação ou de solução internacional e que tenham sido esgotados os recursos internos disponíveis e efetivos.',
      'a representação exclusiva do Ministério Público Federal ou da Defensoria Pública da União.',
      'a apresentação da petição em até 30 dias contados do fato violador, sob pena de decadência.',
      'o pagamento de custas processuais para custeio das sessões de conciliação do Comitê.',
      'a autorização prévia do Poder Judiciário brasileiro.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. As regras do art. 14 da Convenção exigem, para as comunicações individuais: (i) que o caso não esteja sendo examinado em outra via internacional; e (ii) o ESGOTAMENTO dos recursos internos (regra consagrada do esgotamento das instâncias domésticas). A petição é individual (pessoa ou grupo sob jurisdição), não depende de MP/DPU, é gratuita e não precisa de autorização prévia dos tribunais nacionais.',
  },
  {
    id: 8,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Brasil · status e normas brasileiras',
    enunciado: 'Sobre o tratamento da discriminação racial no ordenamento jurídico brasileiro, assinale a afirmativa correta.',
    alternativas: [
      'A CIEFDR foi incorporada com status de emenda constitucional, dada a aprovação pelo art. 5º, §3º, da CF.',
      'A Lei nº 7.716/89 foi substituída integralmente pelo Estatuto da Igualdade Racial (Lei 12.288/2010) em matéria penal.',
      'O racismo é crime inafiançável e imprescritível, sujeito à pena de reclusão (CF, art. 5º, XLII); a CIEFDR possui status de norma supralegal no Brasil (rito ordinário, pré-EC 45/2004); e a Lei 14.532/2023 incluiu a discriminação por religião na Lei 7.716/89.',
      'A injúria racial (CP, art. 140, §3º) é imprescritível e inafiançável, assim como o crime de racismo.',
      'A discriminação por religiões de matriz africana é crime inafiançável desde a Lei 14.532/2023.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. Quatro regras juntas: (i) racismo = reclusão, inafiançável e imprescritível (CF, art. 5º, XLII); (ii) CIEFDR supralegal (Dec. 65.810/1969, anterior à EC 45/04); (iii) a INJÚRIA racial (CP, art. 140, §3º) NÃO é inafiançável nem imprescritível — é crime DISTINTO do racismo; e (iv) a Lei 14.532/2023 estendeu a Lei 7.716/89 à discriminação por RELIGIÃO (intolerância religiosa), penalidade reclusão de 2 a 5 anos e multa — mas foi a própria Lei 14.532 que excluiu intencionalmente essas condutas da imprescriptibilidade e do inafiançamento, limitando-os ao racismo.',
  },
  {
    id: 9,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Racismo × injúria racial × discriminação religiosa',
    enunciado:
      'Julgue o item: por decorrer de discriminação racial motivada por crença religiosa, a injúria racial é inafiançável e imprescritível, não comportando concurso de pessoas.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. A segurança que não exige esforço adicional. (i) O que é inafiançável e imprescritível é o CRIME DE RACISMO (Lei 7.716/89 — CF, art. 5º, XLII), dirigido à coletividade (grupo racial/étnico), não a injúria. (ii) A INJÚRIA RACIAL (CP, art. 140, §3º, por racismo) atinge a honra do indivíduo, é distinta do racismo e NÃO é inafiançável nem imprescritível (prescreve normalmente). (iii) A discriminação religiosa prevista na Lei 7.716/89 após a Lei 14.532/2023 NÃO se equipara ao racismo para efeitos de inafiançabilidade e imprescritibilidade. Cuidado: é a pegadinha da confusão sistemática entre os três tipos penais.',
  },
  {
    id: 10,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Contexto · adoção e vigência',
    enunciado:
      'A Convenção Internacional sobre a Eliminação de Todas as Formas de Discriminação Racial foi adotada pela Resolução nº 2106 A (XX) da Assembleia Geral da ONU e entrou em vigor, respectivamente, em:',
    alternativas: [
      '21 de dezembro de 1965 e 4 de janeiro de 1969.',
      '18 de dezembro de 1979 e 3 de setembro de 1981.',
      '20 de novembro de 1989 e 2 de setembro de 1990.',
      '10 de dezembro de 1948 e 10 de dezembro de 1950.',
      '16 de dezembro de 1966 e 23 de março de 1976.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Adotada em 21/12/1965 (Res. 2106 A (XX)) e em vigor em 4/1/1969, 30 dias após a 12ª ratificação (art. 19). As distrações usam a CEDAW (1979/1981), a Convenção da Criança (1989/1990), a DUDH (1948) e os Pactos (1966/1976). O Brasil assinou em 7/3/1966 e promulgou pelo Decreto 65.810/1969.',
  },
];
