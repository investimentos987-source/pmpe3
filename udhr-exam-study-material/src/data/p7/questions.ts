import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 2º · conceito de pessoa idosa',
    enunciado:
      'Julgue o item conforme o Estatuto da Pessoa Idosa: considera-se pessoa idosa, para os efeitos da Lei nº 10.741/2003, aquela com idade igual ou superior a 65 (sessenta e cinco) anos.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O art. 2º do EPI fixa 60 ANOS (idade igual ou superior) — e não 65. Os 65 anos aparecem em dois outros momentos que as bancas usam como distração: o BPC/LOAS (benefício de prestação continuada) e a gratuidade no transporte urbano pela CF, art. 230, § 2º. O EPI é mais benéfico e amplia a gratuidade urbana para 60. E atenção à pegadinha estrutural: o conceito está no art. 2º, não no art. 1º.',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 3º · prioridade de atendimento',
    enunciado:
      'Nos termos do art. 3º da Lei nº 10.741/2003, o direito à prioridade do idoso compreende o atendimento:',
    alternativas: [
      'preferencial, imediato e individualizado junto aos estabelecimentos públicos e privados prestadores de serviços.',
      'preferencial e coletivo, condicionado à disponibilidade de pessoal nos estabelecimentos públicos.',
      'razoável, observada a ordem cronológica de chegada em fila única.',
      'preferencial apenas nos órgãos públicos, sendo facultativo nos estabelecimentos privados.',
      'imediato somente nos serviços de saúde, aplicando-se aos demais a regra geral de fila.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O parágrafo único do art. 3º assegura atendimento PREFERENCIAL, IMEDIATO E INDIVIDUALIZADO junto a estabelecimentos públicos E PRIVADOS prestadores de serviços. Grave o trio “P.I.I.” — preferencial, imediato, individualizado. E lembre: a prioridade é obrigação da família, da comunidade, da sociedade e do poder público, com absoluta prioridade.',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 41 · transporte interestadual',
    enunciado:
      'Sobre o transporte coletivo interestadual no Estatuto da Pessoa Idosa, assinale a afirmativa correta.',
    alternativas: [
      'Todos os idosos têm direito à gratuidade integral nas passagens interestaduais, independentemente de renda.',
      'O idoso tem direito a 50% de desconto em qualquer passagem interestadual, sem limite de renda.',
      'São reservadas 2 (duas) vagas gratuitas por veículo para idosos com renda igual ou inferior a 2 (dois) salários mínimos, garantido ainda desconto de 50% nas passagens para os idosos de baixa renda que excederem essas vagas.',
      'A gratuidade interestadual é concedida apenas aos idosos com idade igual ou superior a 70 anos.',
      'As vagas gratuitas são 10% do total de assentos do veículo, para idosos de qualquer renda.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. Art. 41 do EPI: no transporte interestadual, 2 VAGAS GRATUITAS por veículo para idosos com renda ≤ 2 SALÁRIOS MÍNIMOS + DESCONTO DE 50% nas passagens para idosos de baixa renda que excederem as vagas. A pegadinha A (gratuidade total para todos) ignora o filtro de renda — a gratuidade plena é a regra apenas dos transportes URBANOS (art. 39, 60 anos). E 10% são os ASSENTOS reservados nos veículos urbanos (art. 40) — alternativa E mistura os blocos.',
  },
  {
    id: 4,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Art. 34 · Benefício de Prestação Continuada',
    enunciado:
      'A respeito do benefício de prestação continuada previsto no Estatuto da Pessoa Idosa, assinale a alternativa correta.',
    alternativas: [
      'É devido a toda pessoa com idade igual ou superior a 60 anos, independentemente de renda.',
      'É assegurado aos idosos que comprovem insuficiência de meios para a subsistência, próprio ou familiar, nos termos da Lei Orgânica da Assistência Social, que exige, entre outros requisitos, idade mínima de 65 anos.',
      'Exige contribuição previdenciária mínima de 180 contribuições mensais.',
      'É concedido apenas a idosos acolhidos em entidades de longa permanência.',
      'Corresponde a 2 salários mínimos mensais, pagos pela previdência social a título de aposentadoria por idade.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O art. 34 do EPI assegura o BPC ao idoso com INSUFICIÊNCIA DE MEIOS, nos termos da LOAS — que exige 65 ANOS e renda familiar per capita de até ¼ do salário mínimo, no valor de 1 salário mínimo, SEM contribuição previdenciária (é assistência social, não previdência). A pegadinha A importa os 60 anos do conceito de idoso (art. 2º) para o BPC; a E confunde BPC com aposentadoria por idade.',
  },
  {
    id: 5,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Arts. 27 e 28 · trabalho e concurso público',
    enunciado:
      'Julgue o item: na admissão do idoso em qualquer trabalho ou emprego, é vedada a discriminação e a fixação de limite máximo de idade, inclusive para concursos, ressalvadas as naturezas e as exigências do cargo; e, em concurso público, o primeiro critério de desempate será a idade, dando-se preferência ao candidato de idade mais elevada.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO. Reprodução fiel dos arts. 27 e 28 do EPI. São duas regras que andam juntas: a vedação de LIMITE MÁXIMO de idade (inclusive em concursos, com a ressalva das naturezas e exigências do cargo — por isso carreiras como a PM podem fixar idade máxima) e o PRIMEIRO critério de desempate em concurso público: a IDADE, com preferência ao de IDADE MAIS ELEVADA — vence o mais velho, não o mais novo.',
  },
  {
    id: 6,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Arts. 39 e 40 · transporte urbano',
    enunciado:
      'Assinale a alternativa que reproduz corretamente as regras do Estatuto da Pessoa Idosa sobre o transporte coletivo urbano.',
    alternativas: [
      'Gratuidade para idosos com idade igual ou superior a 60 anos e reserva de 10% dos assentos, devidamente identificados, nos veículos.',
      'Gratuidade para idosos com idade igual ou superior a 65 anos, sem previsão de reserva de assentos.',
      'Desconto de 50% para idosos de qualquer idade e reserva de 5% dos assentos.',
      'Gratuidade apenas para idosos com renda inferior a dois salários mínimos, com reserva de 3% dos assentos.',
      'Gratuidade para idosos a partir de 60 anos e reserva de 2 vagas gratuitas por veículo.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Arts. 39 e 40: gratuidade nos transportes coletivos públicos urbanos para 60 ANOS OU MAIS (o EPI é mais benéfico que a CF, art. 230, § 2º, que garante aos 65+) e reserva de 10% DOS ASSENTOS, devidamente identificados como preferenciais. As distrações trocam idades (65), percentuais (5%, 3%) e importam as “2 vagas” do transporte INTERESTADUAL (art. 41) — cada número tem endereço certo.',
  },
  {
    id: 7,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 96, parágrafo único · discriminação e humilhação',
    enunciado:
      'Julgue o item: de acordo com o Estatuto da Pessoa Idosa, desdenhar, humilhar, desprezar ou discriminar pessoa idosa, por qualquer motivo, constitui crime, sujeito à mesma pena do crime de discriminação por motivo de idade.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO. É a literalidade do parágrafo único do art. 96 do EPI: “Na mesma pena incorre quem desdenhar, humilhar, desprezar ou discriminar pessoa idosa, por qualquer motivo.” O caput pune a discriminação POR MOTIVO DE IDADE que impeça o exercício da cidadania (operações bancárias, transporte, direito de contratar) com reclusão de 6 meses a 1 ano e multa; o parágrafo único dispensa o motivo etário — a humilhação do idoso é crime por si só.',
  },
  {
    id: 8,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 93 e 97 · crimes em espécie',
    enunciado:
      'Sobre os crimes previstos no Estatuto da Pessoa Idosa, assinale a alternativa INCORRETA.',
    alternativas: [
      'Abandonar pessoa idosa em hospital, casa de saúde, entidade de asilo ou congêneres, ou não prover suas necessidades básicas, quando obrigado por lei ou contrato: pena de detenção de 6 meses a 3 anos e multa.',
      'Apropriar-se de ou desviar bens, proventos, pensão ou qualquer outro rendimento do idoso, dando-lhe aplicação diversa da de sua finalidade: pena de reclusão de 1 a 4 anos e multa.',
      'Apropriar-se de ou desviar bens ou rendimentos do idoso mediante o uso de cartão magnético: pena de reclusão de 1 a 4 anos e multa.',
      'Discriminar pessoa idosa, impedindo ou dificultando o acesso a operações bancárias ou aos meios de transporte, por motivo de idade: pena de detenção de 6 meses a 1 ano e multa.',
      'Se do abandono resultar lesão corporal de natureza grave, a pena será de reclusão de 1 a 4 anos; se resultar morte, de reclusão de 2 a 5 anos.',
    ],
    gabarito: 3,
    comentario:
      'Gabarito: D (a incorreta). O crime do art. 96 é punido com RECLUSÃO de 6 meses a 1 ano e multa — e não DETENÇÃO. É a troca clássica da banca: no EPI, a discriminação e a humilhação do idoso rendem reclusão. As demais alternativas reproduzem corretamente o art. 93 (detenção 6m–3a; qualificadoras 1–4 e 2–5 anos de reclusão) e os arts. 97 e 98 (reclusão 1–4 + multa).',
  },
  {
    id: 9,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 71 · prioridade na tramitação',
    enunciado:
      'A respeito da prioridade processual da pessoa idosa, prevista no art. 71 da Lei nº 10.741/2003, assinale a afirmativa correta.',
    alternativas: [
      'A prioridade alcança apenas os processos de primeira instância em que o idoso figure como autor.',
      'É assegurada prioridade na tramitação dos processos e procedimentos e na execução dos atos e diligências judiciais em que figure como parte ou interveniente pessoa com idade igual ou superior a 60 anos, em qualquer instância.',
      'A prioridade cessa imediatamente com a morte do idoso, retornando o processo à ordem comum.',
      'A prioridade não se aplica a processos de execução, por ausência de contraditório.',
      'A prioridade depende de requerimento do advogado e de comprovação de hipossuficiência econômica.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. Art. 71 do EPI, na íntegra: prioridade na TRAMITAÇÃO dos processos e procedimentos e na EXECUÇÃO dos atos e diligências judiciais em que figure como PARTE OU INTERVENIENTE pessoa com 60 anos ou mais, EM QUALQUER INSTÂNCIA. Não depende de hipossuficiência nem de requerimento. E o parágrafo único vai além: a prioridade NÃO CESSA COM A MORTE do beneficiado, estendendo-se ao cônjuge ou companheiro sobrevivente com 60 anos ou mais.',
  },
  {
    id: 10,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Arts. 109 e ss. · infrações administrativas',
    enunciado:
      'Sobre as infrações administrativas contra a pessoa idosa, previstas na Lei nº 10.741/2003, é correto afirmar que:',
    alternativas: [
      'são punidas com multa de R$ 500,00 a R$ 1.000,00, aplicada em dobro em caso de reincidência, sem prejuízo das responsabilidades civil e penal cabíveis.',
      'são punidas exclusivamente com advertência, reservando-se a multa às pessoas jurídicas.',
      'são punidas com multa de R$ 1.000,00 a R$ 5.000,00, vedada a majoração por reincidência.',
      'a punição administrativa exclui a responsabilização penal pelo mesmo fato.',
      'são punidas com multa de R$ 100,00 a R$ 500,00, aplicável apenas a órgãos públicos.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O bloco final do EPI (arts. 109 a 118) fixa a multa administrativa de R$ 500,00 A R$ 1.000,00, APLICADA EM DOBRO EM CASO DE REINCIDÊNCIA, sem prejuízo das responsabilidades civil e penal — as esferas são independentes. Grave os dois números e a dobra: é a resposta pronta da AOCP e da FCC no tema.',
  },
];
