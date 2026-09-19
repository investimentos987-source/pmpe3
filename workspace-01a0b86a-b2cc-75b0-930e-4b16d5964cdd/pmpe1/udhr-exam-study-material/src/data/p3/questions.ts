import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Natureza jurídica · convenção × declaração',
    enunciado:
      'Julgue o item a respeito da CEDAW: por ter sido adotada por resolução da Assembleia Geral da ONU, a Convenção sobre a Eliminação de Todas as Formas de Discriminação Contra a Mulher possui natureza meramente declaratória e recomendatória, não criando obrigações jurídicas para os Estados que dela se tornam partes.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. Apesar de adotada por resolução da AG (34/180), trata-se de CONVENÇÃO — tratado multilateral aberto à ratificação: VINCULA os Estados-partes (vigência em 3/9/1981) e conta com órgão próprio de monitoramento (Comitê CEDAW). É o contrário das declarações dos capítulos anteriores (DUDH e 1981). Resolução da AG pode “dar à luz” tratado: quem define a natureza é o instrumento, não o envelope.',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 1º · definição de discriminação',
    enunciado:
      'Conforme o art. 1º da CEDAW, a expressão “discriminação contra a mulher” significa qualquer:',
    alternativas: [
      'distinção, exclusão ou restrição baseada no sexo, que tenha por efeito ou finalidade prejudicar ou anular o reconhecimento, gozo ou exercício pelas mulheres, independentemente de seu estado civil, dos direitos humanos e das liberdades fundamentais.',
      'distinção, exclusão, restrição ou preferência baseada no sexo, que apenas tenha por finalidade prejudicar o exercício de direitos pelas mulheres casadas.',
      'ato estatal doloso destinado a impedir a participação das mulheres na vida política nacional.',
      'política pública de ação afirmativa que diferencie mulheres de homens no acesso a cargos públicos.',
      'restrição baseada no sexo que produza efeito discriminatório apenas quando praticada por autoridades públicas.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Três travas para conferir na prova: (1) o trio é distinção–exclusão–restrição, SEM “preferência”; (2) efeito OU finalidade — abrange discriminação indireta, sem comprovação de dolo; (3) “independentemente do estado civil”. As demais falham nos três pontos ou restringem o sujeito ao Estado.',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 4º · medidas especiais temporárias',
    enunciado:
      'No que se refere às medidas especiais temporárias previstas no art. 4º da CEDAW, assinale a afirmativa correta.',
    alternativas: [
      'Configuram discriminação reversa, razão pela qual foram posteriormente afastadas pela jurisprudência dos comitês da ONU.',
      'Devem ser mantidas permanentemente, mesmo após alcançada a igualdade de fato, sob pena de regressão normativa.',
      'Não serão consideradas discriminação desde que destinadas a acelerar a igualdade de fato entre homens e mulheres, devendo ser interrompidas quando alcançados os objetivos de igualdade de oportunidade e tratamento; tampouco são discriminatórias as medidas destinadas a proteger a maternidade.',
      'Somente são admitidas no campo educacional, sendo vedadas na vida política e no trabalho.',
      'Dependem de autorização prévia do Comitê CEDAW para cada Estado que pretenda adotá-las.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. O art. 4º é o alicerce jurídico-internacional das ações afirmativas: reparação histórica não é discriminação reversa. Guardiãs da legitimidade: finalidade (acelerar igualdade DE FATO) e TEMPORARIEDADE (cessa quando alcançado o objetivo). E o §2º protege a maternidade sem exigir temporariedade. No Brasil, as cotas de candidaturas (Lei 9.504/97) são a aplicação clássica.',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Comitê CEDAW · competências',
    enunciado:
      'Julgue o item: o Comitê CEDAW, órgão de monitoramento instituído pelo art. 17 da Convenção, tem competência para julgar e condenar Estados-partes por violações, impondo-lhes sanções econômicas quando constatada a prática de discriminação contra a mulher.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O Comitê é órgão de MONITORAMENTO, não tribunal: examina relatórios periódicos (art. 18), dialoga com os Estados e formula observações finais, sugestões e recomendações gerais (art. 21). Sem poder sancionatório. A via de queixas individuais e inquéritos só existe pelo Protocolo Facultativo de 1999 — e ainda assim não é “condenação penal”.',
  },
  {
    id: 5,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Contexto histórico · adoção e vigência',
    enunciado:
      'A Convenção sobre a Eliminação de Todas as Formas de Discriminação Contra a Mulher (CEDAW) foi adotada e entrou em vigor, respectivamente, em:',
    alternativas: [
      '18 de dezembro de 1979 e 3 de setembro de 1981.',
      '25 de novembro de 1981 e 10 de dezembro de 1982.',
      '20 de novembro de 1989 e 2 de setembro de 1990.',
      '10 de dezembro de 1948 e 1º de janeiro de 1950.',
      '16 de dezembro de 1966 e 3 de janeiro de 1976.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Adotada pela Resolução 34/180 em 18/12/1979; vigência 30 dias após o 20º instrumento de ratificação — em 3/9/1981, ritmo recordista. As distrações reaproveitam a Declaração de 1981 (religiosa), a Convenção da Criança (1989), a DUDH (1948) e os Pactos (1966).',
  },
  {
    id: 6,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 7º–8º · direitos políticos',
    enunciado: 'Sobre os direitos das mulheres na vida política e pública previstos nos arts. 7º e 8º da CEDAW, assinale a alternativa INCORRETA.',
    alternativas: [
      'É assegurado às mulheres o direito de votar em todas as eleições e referendos públicos e de ser elegível para todos os órgãos eleitos por votação popular.',
      'É assegurada a participação na formulação da política governamental e o acesso a cargos públicos em todos os níveis governamentais.',
      'É garantida a participação em organizações e associações não governamentais de interesse público e político.',
      'É assegurada a oportunidade de representar o governo no plano internacional e participar dos trabalhos de organizações internacionais.',
      'O exercício dos direitos políticos pela mulher condiciona-se à observância de requisitos de instrução e renda, desde que idênticos aos exigidos dos homens.',
    ],
    gabarito: 4,
    comentario:
      'Gabarito: E (a incorreta). A CEDAW garante os direitos em igualdade em relação aos homens — mas NÃO introduz requisitos censitários nem de instrução (“desde que iguais” não salva o item: a redação cria condicionante inexistente). Os arts. 7º (eleições, cargos, ONGs) e 8º (representação internacional) são garantias diretas.',
  },
  {
    id: 7,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Art. 9º · nacionalidade',
    enunciado:
      'Nos termos do art. 9º da CEDAW, é correto afirmar que:',
    alternativas: [
      'a mulher que contrai casamento com estrangeiro perde automaticamente sua nacionalidade de origem, salvo opção expressa pela do marido.',
      'grantir-se-á à mulher igualdade de direitos com o homem para adquirir, conservar ou mudar de nacionalidade, sendo certo que nem o casamento com estrangeiro nem a mudança de nacionalidade do marido alteram automaticamente a da mulher, cabendo-lhe ainda igualdade quanto à nacionalidade dos filhos.',
      'a nacionalidade dos filhos seguirá sempre a do pai, em respeito ao princípio da unidade familiar.',
      'a mudança de nacionalidade da mulher casada depende de autorização do marido e do Estado da família.',
      'o casamento com estrangeiro acarreta a atribuição automática da nacionalidade do marido à esposa.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. Autonomia plena da nacionalidade feminina: casar não troca passaporte, o marido não “leva” a nacionalidade da mulher, e a transmissão aos filhos é igualitária. As demais alternativas reproduzem regras historicamente vigentes em vários países — justamente o que o art. 9º veio enterrar.',
  },
  {
    id: 8,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'CEDAW no Brasil · status e conexões',
    enunciado:
      'Sobre a recepção da CEDAW pelo ordenamento jurídico brasileiro, assinale a afirmativa correta.',
    alternativas: [
      'O Brasil ratificou a Convenção em 1984, por rito ordinário e antes da EC 45/2004, razão pela qual ela possui, segundo a jurisprudência do STF, status de norma supralegal; seu Protocolo Facultativo foi promulgado pelo Decreto 4.377/2002, e a Lei Maria da Penha explicitamente a invoca como fundamento.',
      'O Brasil ratificou a Convenção com quórum de emenda constitucional, conferindo-lhe automaticamente status equivalente ao de norma constitucional desde 1984.',
      'A Convenção jamais foi ratificada pelo Brasil por incompatibilidade com o art. 5º da Constituição Federal.',
      'A Lei Maria da Penha implementa exclusivamente a Convenção de Belém do Pará, sem qualquer relação com a CEDAW.',
      'O Protocolo Facultativo à CEDAW foi incorporado pelo Decreto 6.949/2009, destinado originalmente aos direitos das pessoas com deficiência.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Ratificação de 1984, rito comum, ANTES da EC 45/2004 → norma de direitos humanos SUPRALEGAL (ato jurídico do STF); Protocolo Facultativo = Dec. 4.377/2002 (o Dec. 6.949/2009 é o da Convenção sobre Pessoas com Deficiência — distração clássica); e a própria ementa da Lei 11.340/2006 cita a Convenção de Belém do Pará E a CEDAW.',
  },
  {
    id: 9,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Violência doméstica × texto convencional',
    enunciado:
      'Julgue o item: a CEDAW trata expressamente da violência doméstica e familiar contra a mulher, dispondo inclusive sobre medidas protetivas de urgência e prisão preventiva do agressor.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O TEXTO da Convenção é silente quanto à violência doméstica. A cobertura vem por interpretação: a Recomendação Geral nº 19 (1992) do Comitê — atualizada pela GR 35 (2017) — reconhece a violência de gênero como FORMA DE DISCRIMINAÇÃO sob o art. 1º. No plano normativo, quem regula medidas protetivas e prisão é a Convenção de Belém do Pará (1994) e, no Brasil, a Lei Maria da Penha (2006).',
  },
  {
    id: 10,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Art. 14 · mulheres das zonas rurais',
    enunciado:
      'A respeito do art. 14 da CEDAW, dedicado às mulheres das zonas rurais, é correto afirmar:',
    alternativas: [
      'Foi pioneiro no direito dos tratados de direitos humanos ao tratar expressamente das mulheres rurais, assegurando-lhes participação no planejamento do desenvolvimento, saúde, seguridade social, formação, cooperativas, crédito e condições de vida adequadas.',
      'Restringe-se a garantir às mulheres rurais o direito ao voto nas eleições municipais.',
      'Dispõe exclusivamente sobre a herança de terras entre cônjuges lavradores.',
      'Aplicável somente aos Estados-partes em desenvolvimento, mediante prévia declaração.',
      'Trata das mulheres urbanas que migram para o campo em busca de emprego formal.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O art. 14 é a curiosidade campeã: único preceito de tratado universal de DH dedicado às mulheres RURAIS, com rol socioeconômico amplo (saúde, seguridade, cooperativas, crédito, saneamento). Não é voto, não é herança, não é só país em desenvolvimento.',
  },
];
