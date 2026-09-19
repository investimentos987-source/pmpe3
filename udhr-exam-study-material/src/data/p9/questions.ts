import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Status no Brasil — Guatemala × ONU',
    enunciado:
      'Julgue o item: a Convenção Interamericana para a Eliminação de Todas as Formas de Discriminação contra as Pessoas Portadoras de Deficiência (Convenção da Guatemala) foi incorporada ao ordenamento jurídico brasileiro com status de emenda constitucional, na forma do art. 5º, § 3º, da Constituição Federal.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. A Convenção da Guatemala foi aprovada pelo rito ORDINÁRIO (Decreto Legislativo nº 198/2001) e promulgada pelo DECRETO Nº 3.956/2001 — logo, tem status de norma SUPRALEGAL (abaixo da Constituição e acima das leis), como os demais tratados de direitos humanos anteriores à EC 45/2004. Quem tem status de EMENDA CONSTITUCIONAL é a Convenção da ONU sobre os Direitos das Pessoas com Deficiência (CDPD, 2006), aprovada pelo quórum qualificado do art. 5º, § 3º (Decreto Legislativo 186/2008) e promulgada pelo Decreto 6.949/2009. Essa dupla de status é a pegadinha mais rentável do tema.',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. I, § 1º · definição de deficiência',
    enunciado:
      'Nos termos do art. I da Convenção da Guatemala (Decreto nº 3.956/2001), o termo “deficiência” significa:',
    alternativas: [
      'uma restrição física, mental ou sensorial, de natureza permanente ou transitória, que limita a capacidade de exercer uma ou mais atividades essenciais da vida diária, causada ou agravada pela desigualdade de acesso às oportunidades do meio econômico e social.',
      'uma afecção exclusivamente médica, de natureza permanente, diagnosticável por perícia oficial.',
      'qualquer limitação corporal, ainda que não restrinja atividades da vida diária.',
      'a inaptidão total e permanente para o trabalho, comprovada por perícia previdenciária.',
      'um impedimento exclusivamente congênito, de natureza física ou sensorial.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. A definição do art. I, § 1º, tem três marcas cobradas: (i) restrição física, mental OU sensorial; (ii) natureza PERMANENTE OU TRANSITÓRIA — a deficiência temporária também conta; e (iii) causa ou agravamento pela DESIGUALDADE DE ACESSO às oportunidades do meio econômico e social — a dimensão SOCIAL da deficiência, superação do modelo puramente médico.',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. I, § 2º · discriminação e diferenciação',
    enunciado:
      'Sobre a definição de discriminação e sua distinção em relação à diferenciação legítima, prevista no art. I da Convenção da Guatemala, assinale a afirmativa correta.',
    alternativas: [
      'Só configura discriminação a conduta dolosa baseada em deficiência atual, comprovada por perícia.',
      'Configura discriminação toda distinção, exclusão ou restrição baseada em deficiência, antecedente de deficiência, consequência de deficiência anterior ou percepção de deficiência presente ou passada, que tenha o efeito ou o objetivo de impedir ou anular o reconhecimento, gozo ou exercício dos direitos humanos e liberdades fundamentais; a diferenciação sem esse efeito lesivo — como as medidas de acessibilidade e de inclusão — não constitui discriminação.',
      'Toda distinção baseada em deficiência é discriminatória, inclusive as cotas e as adaptações razoáveis.',
      'A discriminação exige que a vítima seja pessoa com deficiência permanente grave.',
      'A diferenciação só é legítima quando determinada por decisão judicial.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. Duas faces do art. I, § 2º: a discriminação alcança deficiência, ANTECEDENTE, CONSEQUÊNCIA anterior e até PERCEPÇÃO de deficiência — bastando o EFEITO ou o objetivo de anular direitos; e a diferenciação que não produz esse efeito lesivo (medidas de acessibilidade, cotas, adaptações — hoje chamadas de ações afirmativas e ajustes razoáveis) NÃO é discriminação. A alternativa C é o clássico erro da “discriminação reversa”, rejeitado também pela CDPD (art. 5º, § 4º) e pela LBI.',
  },
  {
    id: 4,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Promulgação — decretos corretos',
    enunciado:
      'A Convenção da Guatemala (1999) e a Convenção da ONU sobre os Direitos das Pessoas com Deficiência (2006) foram promulgadas no Brasil, respectivamente, pelos decretos:',
    alternativas: [
      'Decreto nº 3.956/2001 e Decreto nº 6.949/2009.',
      'Decreto nº 6.949/2009 e Decreto nº 3.956/2001.',
      'Decreto nº 98.386/1989 e Decreto nº 40/1991.',
      'Decreto nº 65.810/1969 e Decreto nº 4.738/2003.',
      'Decreto nº 592/1992 e Decreto nº 678/1992.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Convenção da Guatemala = DECRETO 3.956/2001 (supralegal); Convenção da ONU sobre Direitos das Pessoas com Deficiência (CDPD) = DECRETO 6.949/2009 (emenda constitucional). As distrações reaproveitam os demais decretos da coleção: 98.386/89 (Convenção Interamericana de Tortura — Parte 8), 40/91 (CAT/ONU), 65.810/69 (CIEFDR), 4.738/03 (declaração facultativa CERD), 592/92 (PIDCP) e 678/92 (Pacto de San José).',
  },
  {
    id: 5,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Diferenciação × discriminação',
    enunciado:
      'Julgue o item: para a Convenção da Guatemala, toda distinção ou preferência baseada em deficiência configura discriminação, inclusive as medidas de acessibilidade, as cotas e as adaptações razoáveis destinadas a promover a integração social da pessoa com deficiência.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. A discriminação do art. I, § 2º, exige o EFEITO OU O OBJETIVO de impedir ou anular direitos — sem esse núcleo lesivo, a diferenciação é legítima e, ao contrário de discriminar, PROMOVE a igualdade: são as medidas de acessibilidade, as cotas e as adaptações razoáveis. A CDPD (art. 5º, § 4º) e a LBI consolidaram a mesma lógica: medidas específicas para acelerar a igualdade de fato NÃO são discriminação. Chamar isso de “discriminação reversa” é o erro que a banca induz.',
  },
  {
    id: 6,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Art. II · objetivos',
    enunciado: 'Assinale a alternativa que reproduz corretamente os objetivos da Convenção da Guatemala (art. II).',
    alternativas: [
      'A prevenção e a eliminação de todas as formas de discriminação contra as pessoas portadoras de deficiência e a promoção de sua plena integração na sociedade.',
      'A concessão de amparo assistencial e internação digna às pessoas portadoras de deficiência.',
      'A criação de um fundo internacional de indenizações para vítimas de discriminação.',
      'A padronização dos critérios médicos de incapacidade em toda a América.',
      'A instituição de um tribunal interamericano para julgar casos individuais de discriminação.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Art. II é curto e literal: PREVENIR e ELIMINAR todas as formas de discriminação contra pessoas portadoras de deficiência e PROMOVER sua PLENA INTEGRAÇÃO na sociedade. Guarde os três verbos (P.E.P. — Prevenir, Eliminar, Promover): a lógica é de inclusão em igualdade, não de assistência (erro da alternativa B), de indenização, de padronização médica ou de tribunal (nada disso existe na Convenção).',
  },
  {
    id: 7,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'CDPD · status de emenda constitucional',
    enunciado:
      'Julgue o item: a Convenção da ONU sobre os Direitos das Pessoas com Deficiência, aprovada pelo Congresso Nacional pelo quórum de três quintos, em dois turnos (Decreto Legislativo nº 186/2008) e promulgada pelo Decreto nº 6.949/2009, equivale a emenda constitucional, nos termos do art. 5º, § 3º, da Constituição Federal.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO. A CDPD (Nova York, 2006) foi o primeiro tratado aprovado pelo rito qualificado do art. 5º, § 3º, da CF (três quintos, dois turnos em cada Casa — Decreto Legislativo 186/2008) e promulgada pelo Decreto 6.949/2009: status de EMENDA CONSTITUCIONAL. Daí a distinção estrutural da Parte 9: Guatemala (2001) é SUPRALEGAL; CDPD (2009) é constitucional; e a LBI (2015) é lei ordinária que internaliza a CDPD no Brasil.',
  },
  {
    id: 8,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. VI · CEDDIS',
    enunciado: 'Sobre o mecanismo de acompanhamento da Convenção da Guatemala, é correto afirmar:',
    alternativas: [
      'o CEDDIS — Comitê para a Eliminação de Todas as Formas de Discriminação contra as Pessoas Portadoras de Deficiência — é comitê vinculado à Organização dos Estados Americanos que acompanha a Convenção da Guatemala, recebendo relatórios dos Estados-partes sobre as medidas adotadas.',
      'o CEDDIS é comitê da Organização das Nações Unidas que monitora a Convenção da ONU sobre os Direitos das Pessoas com Deficiência.',
      'o CEDDIS é tribunal interamericano com competência para julgar petições individuais.',
      'o CEDDIS é órgão do Mercosul encarregado da política de acessibilidade.',
      'a Convenção da Guatemala não prevê qualquer mecanismo de acompanhamento.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O CEDDIS é comitê da OEA — não da ONU — que acompanha a CONVENÇÃO DA GUATEMALA por meio de relatórios dos Estados-partes. A alternativa B descreve o Comitê sobre os Direitos das Pessoas com Deficiência da ONU, que monitora a CDPD de 2006 — a troca entre os dois comitês é a pegadinha clássica. E o CEDDIS não julga petições individuais (não é tribunal).',
  },
  {
    id: 9,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'LBI · internalização da CDPD',
    enunciado:
      'Sobre a relação entre a Convenção da Guatemala, a CDPD e a Lei Brasileira de Inclusão da Pessoa com Deficiência (Lei nº 13.146/2015), assinale a afirmativa correta.',
    alternativas: [
      'A LBI adota o termo “pessoa portadora de deficiência”, seguindo a Convenção da Guatemala.',
      'A LBI consagra o modelo médico de deficiência, centrado na limitação individual.',
      'A LBI internaliza o modelo social ou biopsicossocial da CDPD: pessoa COM deficiência é aquela que tem impedimento de longo prazo que, em interação com barreiras, pode obstruir sua participação plena na sociedade; garante adaptação razoável e reserva cargos para pessoa com deficiência em empresas com 100 ou mais empregados, entre 2% e 5% dos cargos.',
      'A LBI revogou a Convenção da Guatemala, que deixou de ser aplicada no Brasil.',
      'A LBI veda as cotas para pessoa com deficiência por configurarem discriminação.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. A LBI (Lei 13.146/2015, Estatuto da Pessoa com Deficiência) internaliza a CDPD: conceito BIOPICOSSOCIAL (impedimento de longo prazo + interação com BARREIRAS), terminologia “pessoa COM deficiência” (não “portadora” — erro da alternativa A), modelo social (não médico — erro da B), adaptação razoável e cotas do art. 93 (2% a 5% dos cargos em empresas com 100+ empregados, escalonados). A Convenção da Guatemala segue vigente como norma supralegal — piso protetivo que a LBI amplia.',
  },
  {
    id: 10,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Quadro geral das três normas',
    enunciado:
      'Considerando a Convenção da Guatemala, a Convenção da ONU sobre os Direitos das Pessoas com Deficiência e a Lei Brasileira de Inclusão, assinale a alternativa correta quanto ao status hierárquico no Brasil.',
    alternativas: [
      'As três normas têm idêntico status de emenda constitucional.',
      'A Convenção da Guatemala tem status de lei ordinária; a CDPD, de supralegal; e a LBI, de emenda constitucional.',
      'A Convenção da Guatemala tem status de norma supralegal (Decreto 3.956/2001); a CDPD equivale a emenda constitucional (Decreto 6.949/2009); e a LBI é lei ordinária federal (2015).',
      'A LBI, por ser posterior, prevalece sobre a Constituição e sobre as convenções internacionais.',
      'A CDPD e a Convenção da Guatemala têm ambas status de norma supralegal.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. A tríade hierárquica da Parte 9: CONVENÇÃO DA GUATEMALA = SUPRALEGAL (Dec. 3.956/2001, rito ordinário pré-EC 45/2004); CDPD = EMENDA CONSTITUCIONAL (Dec. 6.949/2009, rito do art. 5º, § 3º); LBI = LEI ORDINÁRIA (2015). Como todas protegem o mesmo bem, o critério de desempate prático é a norma MAIS FAVORÁVEL à pessoa com deficiência — não o status formal.',
  },
];
