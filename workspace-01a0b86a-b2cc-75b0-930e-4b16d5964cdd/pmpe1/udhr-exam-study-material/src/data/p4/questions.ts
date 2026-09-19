import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 1º · definição de criança',
    enunciado:
      'Julgue o item: para os efeitos da Convenção sobre os Direitos da Criança, de 1989, considera-se criança a pessoa com até 12 anos de idade incompletos e adolescente aquela entre 12 e 18 anos de idade, em idêntica sistemática à adotada pelo Estatuto da Criança e do Adolescente.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. A Convenção adota régua ÚNICA: criança é todo ser humano menor de 18 anos, salvo se, pela lei aplicável, a maioridade for alcançada antes (art. 1º). Quem divide em criança (até 12 incompletos) e adolescente (12 a 18) é o ECA, no art. 2º da Lei 8.069/90. A banca inverte propositalmente as duas sistemáticas — é a pegadinha nº 1 deste documento.',
  },
  {
    id: 2,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 3º · melhor interesse',
    enunciado:
      'Sobre o princípio do melhor interesse da criança, consagrado no art. 3º da Convenção sobre os Direitos da Criança, assinale a afirmativa correta.',
    alternativas: [
      'O interesse maior da criança constitui a consideração única e absoluta, afastando a ponderação com quaisquer outros direitos ou interesses em jogo.',
      'Em todas as medidas relativas às crianças, adotadas por instituições públicas ou privadas de bem-estar social, tribunais, autoridades administrativas ou órgãos legislativos, o interesse maior da criança deve ser a consideração primordial.',
      'O princípio vincula apenas o Poder Judiciário, não alcançando órgãos administrativos, legislativos ou instituições privadas.',
      'O princípio somente se aplica às hipóteses de adoção internacional, por expressa restrição do texto convencional.',
      'O princípio possui natureza meramente programática, sendo insuscetível de aplicação direta pelos tribunais nacionais.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. Literalidade do art. 3º, §1º: “consideração PRIMORDIAL” (primary consideration) — não “única” nem “absoluta” (erro da alternativa A). E o rol de destinatários é amplíssimo: público, privado, judicial, administrativo e legislativo (afasta C). Só na ADOÇÃO (art. 21) o interesse da criança é elevado a consideração máxima/paramount.',
  },
  {
    id: 3,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Princípios fundamentais',
    enunciado:
      'Os quatro princípios fundamentais que estruturam a Convenção sobre os Direitos da Criança, segundo o Comitê dos Direitos da Criança, e seus respectivos artigos são:',
    alternativas: [
      'não discriminação (art. 2º); melhor interesse da criança (art. 3º); direito à vida, à sobrevivência e ao desenvolvimento (art. 6º); e respeito à opinião da criança/participação (art. 12).',
      'proteção integral (art. 1º); prioridade absoluta (art. 4º); municipalização (art. 8º); e participação popular (art. 20).',
      'dignidade da pessoa humana (art. 1º); legalidade (art. 5º); devido processo legal (art. 37); e ampla defesa (art. 40).',
      'gratuidade do ensino (art. 28); saúde universal (art. 24); lazer (art. 31); e liberdade religiosa (art. 14).',
      'não discriminação (art. 2º); brevidade (art. 37); excepcionalidade (art. 38); e respeito à condição peculiar de desenvolvimento (art. 40).',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O quarteto clássico: 2 (não discriminação), 3 (melhor interesse), 6 (vida, sobrevivência e desenvolvimento) e 12 (ser ouvida/participação) — memorize “2-3-6-12”. A alternativa B mistura princípios do ECA e da CF; a E embaralha os princípios da internação (brevidade, excepcionalidade e respeito à condição peculiar — ECA, art. 121).',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 37 · privação de liberdade',
    enunciado:
      'Julgue o item conforme o art. 37 da Convenção sobre os Direitos da Criança: é vedada a imposição de pena de morte e de prisão perpétua sem possibilidade de livramento por delitos cometidos por menores de dezoito anos, devendo a privação de liberdade ser utilizada apenas como último recurso e pelo mais breve período de tempo possível.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO. Reprodução fiel das alíneas “a” e “b” do art. 37. Atente aos dois detalhes que a banca costuma adulterar: a vedação é da perpétua SEM POSSIBILIDADE DE LIVRAMENTO (e não de toda e qualquer pena longa) e a privação de liberdade não é proibida — é excepcional (último recurso, menor tempo). Completa o artigo a separação de adultos (alínea “c”) e o direito de impugnar a legalidade da detenção (alínea “d”).',
  },
  {
    id: 5,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Contexto · adoção, vigência e Brasil',
    enunciado:
      'A Convenção sobre os Direitos da Criança foi adotada pela Resolução 44/25 da Assembleia Geral da ONU e promulgada no Brasil, respectivamente, em:',
    alternativas: [
      '20 de novembro de 1989 e pelo Decreto nº 99.710, de 1990.',
      '18 de dezembro de 1979 e pelo Decreto nº 4.377, de 2002.',
      '10 de dezembro de 1948 e pelo Decreto nº 678, de 1992.',
      '25 de novembro de 1981 e pelo Decreto nº 6.949, de 2009.',
      '2 de setembro de 1990 e pela Lei nº 8.069, de 1990.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Adoção em 20/11/1989 (Res. 44/25) e promulgação interna pelo Decreto 99.710, de 21/11/1990 (ratificação em 24/09/1990). Cuidado com as distrações da própria coleção: Dec. 4.377/2002 é o Protocolo Facultativo da CEDAW; Dec. 678/1992 é o Pacto de San José; Dec. 6.949/2009 é a Convenção sobre Pessoas com Deficiência; e 2/9/1990 é a entrada em vigor INTERNACIONAL, ao passo que a Lei 8.069/90 é o ECA.',
  },
  {
    id: 6,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 38 · conflitos armados',
    enunciado:
      'A respeito da participação de crianças em conflitos armados no sistema da Convenção sobre os Direitos da Criança, assinale a afirmativa correta.',
    alternativas: [
      'O texto original da Convenção proíbe o recrutamento de menores de 18 anos, não havendo protocolo posterior sobre a matéria.',
      'O art. 38 da Convenção, em seu texto original, fixa em 15 anos o limite para a participação direta em hostilidades e para o recrutamento, patamar posteriormente elevado para 18 anos pelo Protocolo Facultativo de 2000.',
      'A Convenção é silente quanto a conflitos armados, tema reservado exclusivamente ao direito internacional humanitário.',
      'O art. 38 autoriza o recrutamento a partir dos 12 anos, desde que com consentimento dos pais.',
      'O Protocolo Facultativo de 2000 reduziu para 15 anos o limite previsto originalmente em 18 anos no corpo da Convenção.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O art. 38 é a exceção etária da Convenção — único dispositivo a operar com 15 anos, o que lhe rendeu duras críticas. A correção veio pelo Protocolo Facultativo relativo ao envolvimento de crianças em conflitos armados (2000), que elevou o patamar para 18 anos (no Brasil, Decreto 5.006/2004). A alternativa E inverte exatamente a ordem histórica.',
  },
  {
    id: 7,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 12 · direito de ser ouvida',
    enunciado:
      'Nos termos do art. 12 da Convenção sobre os Direitos da Criança, assinale a alternativa INCORRETA.',
    alternativas: [
      'Assegura-se à criança capaz de formular seus próprios juízos o direito de expressar suas opiniões livremente sobre todos os assuntos a ela relativos.',
      'As opiniões da criança devem ser devidamente levadas em consideração, em função de sua idade e maturidade.',
      'Deve ser proporcionada à criança a oportunidade de ser ouvida em todo processo judicial ou administrativo que a afete.',
      'A oitiva pode ocorrer diretamente ou por intermédio de representante ou de órgão apropriado, em conformidade com as regras processuais da legislação nacional.',
      'A opinião manifestada pela criança vincula obrigatoriamente a autoridade julgadora, que não poderá decidir em sentido diverso.',
    ],
    gabarito: 4,
    comentario:
      'Gabarito: E (a incorreta). A Convenção assegura o direito de ser OUVIDA e de ter a opinião “devidamente levada em conta” conforme idade e maturidade — jamais lhe atribui força vinculante. Ouvir não é obedecer: a autoridade pode decidir em sentido diverso, desde que fundamentadamente e à luz do melhor interesse (art. 3º).',
  },
  {
    id: 8,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Art. 9º · separação dos pais',
    enunciado:
      'Sobre a separação da criança de seus pais, prevista no art. 9º da Convenção sobre os Direitos da Criança, é correto afirmar que:',
    alternativas: [
      'a criança poderá ser separada dos pais por ato administrativo discricionário, dispensada qualquer revisão judicial, sempre que constatada carência de recursos materiais da família.',
      'a criança não será separada dos pais contra a vontade deles, salvo quando autoridades competentes determinarem, em conformidade com a lei e mediante revisão judicial, que tal separação é necessária ao interesse maior da criança, assegurado à criança separada o direito de manter contato direto e regular com ambos os pais, salvo se contrário ao seu interesse.',
      'a separação é automática nos casos em que um dos genitores é preso, vedado à criança qualquer contato posterior.',
      'a criança separada dos pais perde definitivamente o direito de contato com ambos, em favor da estabilidade da nova colocação familiar.',
      'a decisão de separação dispensa a participação dos interessados no procedimento, em razão da urgência que caracteriza tais medidas.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O art. 9º estrutura regra e exceção: separação é excepcional, exige previsão legal, revisão judicial e melhor interesse; todas as partes participam do processo (§2º); e o §3º garante contato direto e regular com AMBOS os pais. A alternativa A embute a pegadinha campeã: pobreza NÃO é motivo de separação (no Brasil, art. 23 do ECA é expresso). O §4º, por sua vez, garante informação sobre o paradeiro quando a separação decorre de prisão do genitor.',
  },
  {
    id: 9,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 32 · trabalho infantil',
    enunciado:
      'Julgue o item: a Convenção sobre os Direitos da Criança estabelece expressamente a idade mínima de dezesseis anos para admissão em emprego, vedando qualquer exceção, inclusive na condição de aprendiz.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O art. 32 NÃO fixa número: determina que cada Estado estabeleça “uma idade mínima” para admissão em emprego, além de regulamentar horários e condições e prever penalidades (o tripé I-H-P). A régua dos 16 anos — com exceção do aprendiz a partir dos 14 — é do direito brasileiro (CF, art. 7º, XXXIII), não do texto convencional. No plano internacional, quem detalha idades é a Convenção 138 da OIT.',
  },
  {
    id: 10,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 43–44 · Comitê e relatórios',
    enunciado:
      'A respeito do órgão de monitoramento da Convenção sobre os Direitos da Criança, assinale a alternativa correta.',
    alternativas: [
      'O Comitê dos Direitos da Criança é composto atualmente por 18 peritos independentes, com mandato de quatro anos, cabendo aos Estados-partes apresentar relatórios no prazo de dois anos após a entrada em vigor da Convenção para o respectivo Estado e, a partir de então, a cada cinco anos.',
      'O Comitê é composto por representantes governamentais indicados pelos Estados, com mandato vitalício, e julga denúncias individuais com força vinculante.',
      'O monitoramento é realizado diretamente pelo UNICEF, órgão ao qual os Estados submetem relatórios anuais obrigatórios.',
      'O Comitê é composto por 23 peritos e recebe relatórios a cada um ano, nos mesmos moldes do Comitê CEDAW.',
      'Não há órgão de monitoramento próprio, competindo ao Conselho de Segurança da ONU fiscalizar o cumprimento da Convenção.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Art. 43: o Comitê nasceu com 10 peritos e passou a 18 por emenda de 1995 (vigor em 2002); peritos independentes, atuando a título pessoal, mandato de 4 anos. Art. 44: relatórios em “2 + 5”. Cuidado com a alternativa D, que importa os números da CEDAW (23 peritos e “1 + 4”), e com a C: o UNICEF participa (art. 45, “a”), mas não é o órgão de monitoramento.',
  },
];
