import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Contexto histórico · quórum',
    enunciado:
      'Julgue o item a respeito da aprovação da Declaração Universal dos Direitos Humanos: a DUDH foi adotada por votação unânime da Assembleia Geral da ONU, em sessão realizada na cidade de Nova Iorque, contando com o voto favorável de todos os Estados-membros da organização à época.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. A votação NÃO foi unânime: foram 48 votos favoráveis, nenhum contrário, 8 abstenções (bloco soviético, África do Sul e Arábia Saudita) e 2 ausências (Honduras e Iêmen). A sessão, aliás, ocorreu no Palais de Chaillot, em PARIS — não em Nova Iorque. Cebraspe clássica: dois deslizes no mesmo item.',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 26 · Direito à educação',
    enunciado: 'Nos termos do art. 26 da Declaração Universal dos Direitos Humanos, a instrução',
    alternativas: [
      'será gratuita, pelo menos nos graus elementar e fundamental, sendo a instrução elementar obrigatória.',
      'elementar será facultativa, cabendo aos Estados-membros decidir sobre sua obrigatoriedade.',
      'superior será gratuita e obrigatória, assegurada a todos os cidadãos nacionais.',
      'técnica e profissional será restrita aos maiores de 18 anos, mediante autorização estatal.',
      'será dirigida prioritariamente pelo Estado, que detém preferência absoluta sobre a escolha dos pais.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Literalidade do art. 26: gratuita “pelo menos nos graus elementar e fundamental”; elementar OBRIGATÓRIA; técnica acessível em geral; superior acessível a todos EM FUNÇÃO DO MÉRITO. E, no §3º, a prioridade na escolha da educação dos filhos é dos PAIS — não do Estado.',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Natureza jurídica · STF',
    enunciado:
      'Sobre a natureza jurídica da DUDH no ordenamento internacional e sua recepção pelo direito brasileiro, assinale a afirmativa correta.',
    alternativas: [
      'Trata-se de tratado internacional de direitos humanos ratificado pelo Brasil em 1992, com status supralegal conferido pelo art. 5º, §2º, da Constituição.',
      'Trata-se de mera recomendação política desprovida de qualquer valor normativo, razão pela qual não exerce influência interpretativa sobre os tribunais.',
      'Segundo a posição atual e pacífica do STF, a DUDH possui status de norma supralegal, situando-se acima das leis e logo abaixo da Constituição.',
      'Trata-se de resolução da Assembleia Geral da ONU, dotada de profunda força moral e normativa, mas sem natureza de tratado vinculante; o STF, no RE 466.343, decidiu que ela não possui status de norma constitucional no Brasil.',
      'Trata-se de emenda constitucional implícita em todos os Estados-membros da ONU, prevalecendo sobre as constituições nacionais desde 1948.',
    ],
    gabarito: 3,
    comentario:
      'Gabarito: D. A DUDH é RESOLUÇÃO da Assembleia Geral: declaratória e programática, com força normativa e moral, mas não é tratado vinculante per se. No Brasil, o STF já a tratou como supralegal (RE 80.004/2001), mas superou a tese no RE 466.343 (2008): a DUDH NÃO tem status constitucional — funciona como parâmetro hermenêutico. Cuidado com a alternativa C, que descreve a tese SUPERADA.',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 14 · Direito de asilo',
    enunciado:
      'Julgue o item conforme o art. 14 da DUDH: toda pessoa vítima de perseguição tem o direito de OBTER asilo em outro país, sendo vedado ao Estado de acolhida recusar a concessão quando devidamente requerida.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O art. 14 garante o direito de PROCURAR e de GOZAR asilo — e não de obtê-lo: a CONCESSÃO é ato soberano (e discricionário) do Estado. Além disso, o §2º exclui o asilo em perseguição por crime de direito comum ou por atos contrários aos fins da ONU. A troca “procurar/gozar” por “obter” é a pegadinha mais repetida do documento.',
  },
  {
    id: 5,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Art. 3 · Vida, liberdade e segurança',
    enunciado:
      'Assinale a alternativa que reproduz corretamente o disposto no art. 3º da Declaração Universal dos Direitos Humanos.',
    alternativas: [
      'Todo ser humano tem direito à vida, à liberdade e à segurança pessoal.',
      'Todo ser humano tem direito à vida, à liberdade e à propriedade privada.',
      'Todo ser humano tem direito à vida, à honra e à liberdade de culto.',
      'Todo ser humano tem direito à liberdade, à igualdade e à fraternidade universal.',
      'Todo ser humano tem direito à vida, à saúde plena e à moradia digna.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O art. 3º é enxuto: vida + liberdade + segurança pessoal. A alternativa B reproduz a fórmula de John Locke (vida, liberdade e PROPRIEDADE) — a distração mais famosa deste artigo. Propriedade aparece na DUDH apenas no art. 17.',
  },
  {
    id: 6,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Contexto histórico · órgão, data e local',
    enunciado:
      'A Declaração Universal dos Direitos Humanos foi proclamada por meio da Resolução 217 A (III), em sessão realizada em:',
    alternativas: [
      'Nova Iorque, pelo Conselho de Segurança da ONU, em 26 de junho de 1945.',
      'Genebra, pela Assembleia Geral da ONU, em 1º de janeiro de 1950.',
      'Paris, pela Assembleia Geral da ONU, em 10 de dezembro de 1948.',
      'Haia, pelo Tribunal Internacional de Justiça, em 10 de dezembro de 1948.',
      'Londres, pelo Conselho Econômico e Social da ONU, em 24 de outubro de 1946.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. Resolução 217 A (III) da ASSEMBLEIA GERAL (órgão plenário — nunca Conselho de Segurança ou TIJ), no Palais de Chaillot, PARIS, em 10/12/1948. A data virou o Dia Internacional dos Direitos Humanos (proclamado pela Res. 423 (V), de 1950).',
  },
  {
    id: 7,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 2 · Não discriminação',
    enunciado:
      'A respeito do art. 2º da Declaração Universal dos Direitos Humanos, assinale a alternativa INCORRETA.',
    alternativas: [
      'Veda distinções fundadas em raça, cor, sexo, língua, religião, opinião política ou de outra natureza.',
      'Veda distinção baseada na condição política, jurídica ou internacional do país ou território de que a pessoa seja natural.',
      'O rol de discriminações vedadas é taxativo, esgotando-se nas hipóteses expressamente enumeradas, sem admitir ampliação interpretativa.',
      'A proteção alcança também pessoas originárias de territórios sob tutela ou não dotados de autogoverno.',
      'Assegura a todas as pessoas, sem distinção de qualquer espécie, o gozo dos direitos e liberdades enunciados na Declaração.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C (a incorreta). O rol do art. 2º é EXEMPLIFICATIVO (numerus apertus): termina com “ou qualquer outra condição”, o que admite novas leituras antidiscriminatórias. Quando a banca diz “taxativo”, “somente” ou “exaustivo” no art. 2º, marque o erro sem medo.',
  },
  {
    id: 8,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 30 · Cláusula antiabuso',
    enunciado:
      'O art. 30 da DUDH, tecnicamente denominado cláusula antiabuso, estabelece que:',
    alternativas: [
      'fica instituído um tribunal internacional permanente para julgar violações graves aos direitos proclamados na Declaração.',
      'nenhuma disposição da Declaração pode ser interpretada de modo a conferir a qualquer Estado, grupo ou pessoa o direito de praticar atos destinados à destruição dos direitos e liberdades nela estabelecidos.',
      'os Estados-membros podem suspender ilimitadamente os direitos individuais em situações de emergência nacional autodeclarada.',
      'fica expressamente vedada a pena de morte em todos os Estados-membros da ONU.',
      'é facultada aos Estados a denúncia da Declaração a qualquer tempo, mediante simples notificação ao Secretário-Geral.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O art. 30 fecha a Declaração: ninguém — Estado, GRUPO ou pessoa — pode usar a DUDH para destruí-la. Note os “enfeites” das demais alternativas: tribunal penal (não há), suspensão ilimitada (vedada) e vedação expressa da pena de morte (a DUDH não a trata).',
  },
  {
    id: 9,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'DUDH × pena de morte',
    enunciado:
      'Julgue o item: a Declaração Universal dos Direitos Humanos veda expressamente a pena de morte e a prisão perpétua em todos os Estados-membros da Organização das Nações Unidas.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. A DUDH NÃO trata expressamente de pena de morte nem de prisão perpétua — é silente sobre essas penas. No Brasil, a vedação decorre do art. 5º, XLVII, da CF; no plano internacional, das restrições do Pacto de San José da Costa Rica (art. 4º) e do 2º Protocolo Facultativo ao PIDCP. Cebraspe adora importar a regra constitucional para dentro da Declaração.',
  },
  {
    id: 10,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Art. 11 · Presunção de inocência',
    enunciado:
      'Segundo o art. 11 da Declaração Universal dos Direitos Humanos, é correto afirmar que:',
    alternativas: [
      'todo acusado presume-se inocente até que sua culpabilidade seja legalmente provada em julgamento público, com garantias de defesa, e ninguém será condenado por fato que não constituía delito à época de sua prática, nem submetido a pena mais grave do que a então aplicável.',
      'a presunção de inocência vigora apenas até o julgamento em primeira instância, após o qual o acusado se presume culpado.',
      'a lei penal posterior mais severa aplica-se aos fatos anteriores, desde que aprovada por maioria qualificada do Legislativo.',
      'o julgamento penal deve obrigatoriamente correr em segredo de justiça, em proteção à dignidade do acusado.',
      'a quebra da presunção de inocência autoriza a recusa de defensor em crimes hediondos.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O art. 11 soma duas garantias sagradas: (1) presunção de inocência com julgamento PÚBLICO e garantias de defesa — no Brasil, persiste até o trânsito em julgado (art. 5º, LVII, CF) — e (2) legalidade/anterioridade penal: nullum crimen, nulla poena sine lege, com vedação de pena retroativa mais grave.',
  },
];
