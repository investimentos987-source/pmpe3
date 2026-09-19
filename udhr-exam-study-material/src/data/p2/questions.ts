export type Formato = 'certo-errado' | 'multipla';

export interface Questao {
  id: number;
  banca: 'Cebraspe' | 'FCC' | 'FGV' | 'AOCP' | 'Vunesp';
  formato: Formato;
  tema: string;
  enunciado: string;
  alternativas: string[];
  gabarito: number; // índice da alternativa correta
  comentario: string;
}

export const bancaHex: Record<Questao['banca'], string> = {
  Cebraspe: '#2f6fb4',
  FGV: '#c2571f',
  FCC: '#0f766e',
  AOCP: '#6d28d9',
  Vunesp: '#15803d',
};

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Contexto histórico · forma de aprovação',
    enunciado:
      'Julgue o item a respeito da Declaração sobre a Eliminação de Todas as Formas de Intolerância e de Discriminação Fundadas na Religião ou nas Convicções: o documento foi proclamado pela Assembleia Geral da ONU mediante votação nominal, com maioria simples de votos, após intensas disputas registradas em plenário.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. A Declaração foi proclamada pela Resolução 36/55, de 25/11/1981, e adotada POR CONSENSO — sem votação nominal. Esse é o contraste que a banca adora com a DUDH (48 votos a favor, 0 contra, 8 abstenções e 2 ausências). Se fala em placar, está inventado.',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Natureza jurídica · declaração × convenção',
    enunciado:
      'Quanto à natureza jurídica da Declaração proclamada pela Resolução 36/55, de 25 de novembro de 1981, é correto afirmar que se trata de:',
    alternativas: [
      'convenção internacional vinculante, dotada de comitê próprio de monitoramento e procedimento de denúncias individuais.',
      'resolução da Assembleia Geral com natureza declaratória: não é tratado, não cria obrigações convencionais nem órgão próprio de controle, mas constitui padrão normativo consensual que fundamenta, inclusive, o mandato do Relator Especial sobre liberdade de religião ou convicção.',
      'protocolo facultativo ao Pacto Internacional de Direitos Civis e Políticos, dependente de ratificação depositada junto ao Secretário-Geral.',
      'decisão do Conselho de Segurança da ONU adotada sob o Capítulo VII da Carta, com efeitos obrigatórios para todos os membros.',
      'tratado multilateral aberto à ratificação desde 1982, em vigor para os Estados que dele se tornaram partes.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O ponto central da Parte 2: DECLARAÇÃO ≠ CONVENÇÃO. Declaração é resolução da AG — sem vinculação de tratado, sem comitê próprio (isso é típico de convenções como o Pactos, a CERD ou a CEDAW). Ainda assim, seu valor normativo é enorme: consenso plenário e base do mandato do Relator Especial (1986).',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 2, §2º · a definição',
    enunciado:
      'Sobre o conceito de “intolerância e discriminação baseadas na religião ou convicção” previsto no art. 2º, §2º, da Declaração de 1981, assinale a afirmativa correta.',
    alternativas: [
      'Exige comprovada finalidade discriminatória do agente, aferida a partir de seu dolo específico.',
      'Restringe-se a atos praticados por autoridades estatais no exercício de funções públicas.',
      'Abrange qualquer distinção, exclusão, restrição ou preferência baseada na religião ou convicção que tenha por finalidade OU por efeito anular ou restringir o exercício igualitário de direitos — alcançando, portanto, inclusive a discriminação indireta.',
      'Limita-se a atos de violência física contra templos e comunidades religiosas organizadas.',
      'Aplica-se exclusivamente a crenças teístas reconhecidas oficialmente pelos Estados-membros.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. A fórmula “finalidade OU efeito” dispensa a prova da intenção: basta o RESULTADO excludente (discriminação indireta). Some-se a horizontalidade do art. 2º, §1º (Estado, instituição, grupo e pessoa), e você tem a definição completa — e a alternativa certa.',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 1º, §3º · limites à manifestação',
    enunciado:
      'Julgue o item conforme o art. 1º da Declaração de 1981: a liberdade de manifestar a religião ou a convicção, por consistir em direito fundamental, não admite qualquer espécie de limitação normativa.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O núcleo de TER/escolher (forum internum) é absoluto, mas a MANIFESTAÇÃO pode ser limitada — desde que por LEI e apenas para proteger segurança, ordem, saúde, moral públicas ou direitos e liberdades fundamentais alheios (art. 1º, §3º). Rol taxativo + reserva legal = desenho idêntico ao do art. 18 do PIDCP.',
  },
  {
    id: 5,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Contexto histórico · data, órgão e resolução',
    enunciado:
      'A Declaração sobre a Eliminação de Todas as Formas de Intolerância e de Discriminação Fundadas na Religião ou nas Convicções foi proclamada, por meio da Resolução 36/55, em:',
    alternativas: [
      '10 de dezembro de 1948, pela Assembleia Geral das Nações Unidas, em Paris.',
      '25 de novembro de 1981, pela Assembleia Geral das Nações Unidas.',
      '25 de novembro de 1981, pelo Conselho de Segurança das Nações Unidas.',
      '20 de novembro de 1989, pelo Conselho Econômico e Social das Nações Unidas.',
      '22 de agosto de 2019, pela Comissão de Direitos Humanos das Nações Unidas.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. Data de memória obrigatória: 25/11/1981, Resolução 36/55, ASSEMBLEIA GERAL. As distrações usam a DUDH (10/12/1948), o Conselho de Segurança (nunca proclama declarações de DH) e a Convenção sobre os Direitos da Criança (20/11/1989).',
  },
  {
    id: 6,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Art. 6º · catálogo de liberdades',
    enunciado:
      'Segundo o art. 6º da Declaração de 1981, a liberdade de pensamento, de consciência, de religião ou de convicção inclui, entre outras, a liberdade de:',
    alternativas: [
      'cultuar ou reunir-se e manter locais de culto; fabricar e usar objetos rituais; ensinar a religião em lugares apropriados; receber contribuições voluntárias; formar, designar, eleger ou escolher, inclusive por sucessão, os próprios líderes; e observar dias de descanso e celebrar feriados e cerimônias conforme seus preceitos.',
      'receber contribuições obrigatórias dos fiéis, a título de taxação religiosa institucionalizada.',
      'impor o ensino confessional obrigatório nas escolas públicas, independentemente da vontade dos pais.',
      'exigir subsídios estatais diretos para a construção de templos, como direito subjetivo do grupo religioso.',
      'escolher seus líderes, sendo-lhe vedada, porém, qualquer forma de designação por sucessão hereditária.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Reprodução fiel do rol exemplificativo (9 alíneas, “entre outras”). Os erros clássicos estão nas demais: contribuições são VOLUNTÁRIAS; a sucessão é EXPRESSAMENTE admitida; e o art. 6º não trata de ensino obrigatório nem de subsídio — não confunda com os direitos dos pais (art. 5º).',
  },
  {
    id: 7,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 5º · direitos dos pais',
    enunciado:
      'A respeito dos direitos dos pais e da proteção da criança previstos no art. 5º da Declaração de 1981, assinale a alternativa INCORRETA.',
    alternativas: [
      'Os pais, ou os responsáveis legais, têm o direito de organizar a vida no seio da família de acordo com sua religião ou convicção.',
      'Toda criança tem direito de acesso à educação em matéria de religião ou convicção conforme a vontade de seus pais ou responsáveis legais.',
      'As práticas de uma religião ou convicção na qual a criança é educada não devem ser prejudiciais a sua saúde física ou mental nem a seu pleno desenvolvimento.',
      'A criança pode ser compelida a receber ensino sobre religião ou convicção contra a vontade de seus pais, desde que ocorra em escola pública e em caráter obrigatório para todos os alunos.',
      'Na educação religiosa da criança, o interesse superior dela deve ser considerado o princípio orientador.',
    ],
    gabarito: 3,
    comentario:
      'Gabarito: D (a incorreta). O art. 5º, n. 2, veda EXATAMENTE compelir a criança a receber ensino religioso contra a vontade dos pais — pouco importa que a escola seja pública ou a turma, uniforme. No Brasil, a lógica é a mesma: ensino religioso facultativo (CF, art. 210, §1º; STF, ADI 4.439).',
  },
  {
    id: 8,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Coerção · forum internum',
    enunciado:
      'No que se refere à proteção do núcleo interno da liberdade religiosa (forum internum) pela Declaração de 1981, assinale a afirmativa correta.',
    alternativas: [
      'Ninguém pode sofrer coerção que comprometa sua liberdade de ter uma religião ou convicção de sua escolha — proteção absoluta que abrange também a liberdade de não adotar religião alguma.',
      'Sanções por apostasia são admitidas quando previstas na legislação religiosa interna das comunidades.',
      'A vedação à coerção restringe-se a atos do Poder Público, não alcançando particulares e instituições privadas.',
      'A proteção contra coerção aplica-se exclusivamente a crianças e adolescentes.',
      'O proselitismo coercitivo é tolerado quando exercido dentro da própria família.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Art. 1º, §2º (ninguém será objeto de coerção) + art. 5º, n. 6 (a criança tampouco). O forum internum — crer, não crer, trocar — é inalcançável. E a vedação é horizontal: art. 2º, §1º, alcançando Estado, instituição, grupo e pessoa.',
  },
  {
    id: 9,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Âmbito de proteção · religião e convicção',
    enunciado:
      'Julgue o item: a proteção conferida pela Declaração de 1981 restringe-se às crenças teístas organizadas em instituições religiosas formalmente registradas junto ao Estado.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O binômio “religião OU convicção” (belief) é amplo: abrange convicções teísticas, NÃO teísticas e até ATEÍSTICAS, assim como o direito de não professar crença alguma — leitura consolidada pelo Comentário Geral n. 22 (1993) do Comitê de Direitos Humanos da ONU sobre o art. 18 do PIDCP.',
  },
  {
    id: 10,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Art. 5º, n. 5 · saúde da criança',
    enunciado:
      'Nos termos do art. 5º, n. 5, da Declaração de 1981, as práticas de uma religião ou convicção em que a criança é educada:',
    alternativas: [
      'são absolutamente vedadas, pois a formação religiosa infantil configura coerção por natureza.',
      'devem ser suprimidas pelo Estado sempre que pertencerem a minorias não institucionalizadas.',
      'não podem ser prejudiciais à saúde física ou mental da criança nem ao seu pleno desenvolvimento, em sintonia com os limites do art. 1º, §3º, da própria Declaração.',
      'somente configuram violação quando envolvem violência física intencional comprovada.',
      'estão fora do alcance da Declaração, pois constituem assunto exclusivamente familiar.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. O direito dos pais é real, mas não absoluto: o freio é a saúde física/mental e o pleno desenvolvimento da criança — a mesma lógica que levou o STF a autorizar transfusão de sangue em menor para preservar-lhe a vida, ainda contra objeção religiosa dos pais (RE 1.169.456).',
  },
];
