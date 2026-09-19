import type { Artigo } from '../shared';

const CRI = 'Crimes';
const INF = 'Infrações administrativas';
const FIN = 'Disposições finais';

export const artigosE: Artigo[] = [
  {
    n: 225,
    titulo: 'Crimes — regras gerais',
    sintese: 'Ação pública incondicionada + CP/CPP subsidiários',
    bloco: CRI,
    destaque: true,
    resumo:
      'Art. 225: Este Capítulo dispõe sobre CRIMES praticados contra a criança e o adolescente, por AÇÃO OU OMISSÃO, sem prejuízo do disposto na legislação penal. Art. 226: aplicam-se aos crimes definidos nesta Lei as normas da PARTE GERAL DO CÓDIGO PENAL e, quanto ao processo, as pertinentes ao CÓDIGO DE PROCESSO PENAL. Art. 227: os crimes definidos nesta Lei são de AÇÃO PÚBLICA INCONDICIONADA.',
    prova:
      'Três informações sempre cobradas: os crimes do ECA são de AÇÃO PENAL PÚBLICA INCONDICIONADA (sem representação da vítima), aplicam-se a Parte Geral do CP e o rito do CPP, e a punição alcança ação E omissão.',
    pegadinha:
      'Exigir representação dos pais para a persecução penal; ou dizer que os crimes do ECA afastam integralmente o Código Penal.',
    exemplo:
      'Mesmo que a família não deseje processar, o MP oferece denúncia por crime do ECA — a ação é incondicionada.',
    macete: 'Crime do ECA: MP age sozinho, sempre. Parte Geral do CP vale.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 228,
    titulo: 'Crimes de registro e identificação',
    sintese: 'Maternidade que não registra ou não identifica',
    bloco: CRI,
    resumo:
      'Art. 228: Deixar o encarregado de serviço ou o dirigente de estabelecimento de atenção à saúde de gestante de MANTER REGISTRO das atividades ou de FORNECER À PARTURIENTE OU A SEU RESPONSÁVEL, POR OCASIÃO DA ALTA MÉDICA, DECLARAÇÃO DE NASCIMENTO, onde constem as intercorrências do parto e do desenvolvimento do neonato — Pena: detenção de 6 meses a 2 anos (se culposo: 2 a 6 meses ou multa). Art. 229: deixar o médico, enfermeiro ou dirigente de identificar corretamente o neonato e a parturiente, por ocasião do parto, ou deixar de proceder aos exames referidos no art. 10 — Pena: detenção de 6 meses a 2 anos (culposo: 2 a 6 meses ou multa).',
    prova:
      'São os crimes que protegem o direito à identidade desde o nascimento (arts. 7º a 10 do Livro I). Note que admitem modalidade CULPOSA — exceção no ECA.',
    pegadinha:
      'Afirmar que todos os crimes do ECA são exclusivamente dolosos: os arts. 228 e 229 têm forma culposa expressa.',
    exemplo:
      'Maternidade que dá alta sem entregar a declaração de nascido vivo pratica o crime do art. 228.',
    macete: 'Arts. 228-229: os crimes da maternidade — e os únicos com forma culposa.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 230,
    titulo: 'Privação ilegal da liberdade',
    sintese: 'Apreender fora das hipóteses legais',
    bloco: CRI,
    destaque: true,
    resumo:
      'Art. 230: PRIVAR A CRIANÇA OU O ADOLESCENTE DE SUA LIBERDADE, procedendo à sua apreensão SEM ESTAR EM FLAGRANTE DE ATO INFRACIONAL OU INEXISTINDO ORDEM ESCRITA da autoridade judiciária competente — Pena: detenção de 6 meses a 2 anos. Parágrafo único: incide na mesma pena aquele que procede à APREENSÃO SEM OBSERVÂNCIA DAS FORMALIDADES LEGAIS. Art. 231: deixar a autoridade policial responsável pela apreensão de fazer IMEDIATA COMUNICAÇÃO à autoridade judiciária competente e à família do apreendido ou à pessoa por ele indicada — Pena: detenção de 6 meses a 2 anos. Art. 232: submeter criança ou adolescente sob sua autoridade, guarda ou vigilância a VEXAME OU A CONSTRANGIMENTO — Pena: detenção de 6 meses a 2 anos. Art. 234: deixar a autoridade competente, sem justa causa, de ORDENAR A IMEDIATA LIBERAÇÃO de criança ou adolescente, tão logo tenha conhecimento da ilegalidade da apreensão — Pena: detenção de 6 meses a 2 anos. Art. 235: descumprir, injustificadamente, PRAZO fixado nesta Lei em benefício de adolescente privado de liberdade — Pena: detenção de 6 meses a 2 anos.',
    prova:
      'Bloco de crimes contra a liberdade: todos com pena de DETENÇÃO DE 6 MESES A 2 ANOS. O art. 235 é o que pune o descumprimento dos prazos (ex.: estourar os 45 dias da internação provisória).',
    pegadinha:
      'Dizer que o excesso de prazo gera apenas consequência processual — ele é CRIME (art. 235); ou confundir o art. 232 (vexame) com tortura (Lei 9.455/97, mais grave).',
    exemplo:
      'Delegado que mantém adolescente apreendido sem comunicar o juízo comete o crime do art. 231.',
    macete: 'Arts. 230 a 235: todos 6 meses a 2 anos. Estourou prazo do internado? Crime.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 236,
    titulo: 'Impedir ação de agentes do sistema',
    sintese: 'Obstar conselheiro, juiz, promotor',
    bloco: CRI,
    resumo:
      'IMPEDIR OU EMBARAÇAR a ação de autoridade judiciária, membro do Conselho Tutelar ou representante do Ministério Público no exercício de função prevista nesta Lei — Pena: detenção de 6 meses a 2 anos.',
    prova:
      'Protege a atuação dos três atores do sistema de garantia. “Embaraçar” basta — não é preciso impedir totalmente.',
    pegadinha:
      'Restringir o tipo à autoridade judiciária, excluindo conselheiro tutelar e promotor.',
    exemplo:
      'Diretor de abrigo que nega entrada a conselheiro tutelar em fiscalização pratica o art. 236.',
    macete: 'Atrapalhou juiz, promotor ou conselheiro? Art. 236.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 237,
    titulo: 'Subtração e envio ao exterior',
    sintese: 'Colocação em lar substituto e adoção ilegal',
    bloco: CRI,
    resumo:
      'Art. 237: SUBTRAIR criança ou adolescente ao poder de quem o tenha sob sua guarda em virtude de lei ou ordem judicial, com o fim de COLOCAÇÃO EM LAR SUBSTITUTO — Pena: reclusão de 2 a 6 anos e multa. Art. 238: PROMETER OU EFETIVAR A ENTREGA DE FILHO OU PUPILO A TERCEIRO, MEDIANTE PAGA OU RECOMPENSA — Pena: reclusão de 1 a 4 anos e multa; parágrafo único: incide nas mesmas penas quem oferece ou efetiva a paga ou recompensa. Art. 239: PROMOVER OU AUXILIAR A EFETIVAÇÃO DE ATO DESTINADO AO ENVIO DE CRIANÇA OU ADOLESCENTE PARA O EXTERIOR com inobservância das formalidades legais ou com o fito de obter lucro — Pena: reclusão de 4 a 6 anos e multa; parágrafo único: se há emprego de violência, grave ameaça ou fraude — reclusão de 6 a 8 anos, além da pena correspondente à violência.',
    prova:
      'Três tipos que combatem o comércio de crianças. Penas em escala: art. 238 (1 a 4 anos) < art. 237 (2 a 6) < art. 239 (4 a 6, ou 6 a 8 com violência). O art. 238 pune AMBOS os lados (quem entrega e quem paga).',
    pegadinha:
      'Dizer que só o pai que entrega responde no art. 238 — o parágrafo único alcança quem paga; ou trocar as penas entre os tipos.',
    exemplo:
      'Casal que “compra” recém-nascido de gestante em situação de rua: ambos respondem pelo art. 238.',
    macete: 'Vendeu filho: 238 (os dois lados). Levou pro exterior: 239 — a pena mais alta.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 240,
    titulo: 'Pornografia infantil — produção',
    sintese: 'Produzir ou dirigir cena de sexo explícito',
    bloco: CRI,
    destaque: true,
    resumo:
      'PRODUZIR, REPRODUZIR, DIRIGIR, FOTOGRAFAR, FILMAR OU REGISTRAR, por qualquer meio, cena de sexo explícito ou pornográfica, envolvendo criança ou adolescente — Pena: reclusão de 4 a 8 anos e multa. §1º Incorre nas mesmas penas quem AGENCIA, FACILITA, RECRUTA, COAGE ou de qualquer modo INTERMEDEIA a participação, ou ainda quem com esses contracena. §2º Aumento de 1/3 se o agente comete o crime: I – no exercício de cargo ou função pública ou a pretexto de exercê-la; II – prevalecendo-se de relações domésticas, de coabitação ou de hospitalidade; ou III – prevalecendo-se de relações de parentesco, ou na condição de tutor, curador, preceptor, empregador ou de quem tenha assumido, por lei ou outra forma, obrigação de cuidado, proteção ou vigilância.',
    prova:
      'Pena de RECLUSÃO DE 4 A 8 ANOS e multa — a mais alta do bloco de produção. Os arts. 241 a 241-E completam o sistema: vender (241: 4 a 8 anos), divulgar/publicar na internet (241-A: 3 a 6), ADQUIRIR OU POSSUIR (241-B: 1 a 4), simular com montagem (241-C: 1 a 3) e aliciar pela internet (241-D: 1 a 3).',
    pegadinha:
      'Dizer que a simples posse de material pornográfico infantil é atípica — é crime do art. 241-B; ou confundir as penas dos arts. 240 e 241-B.',
    exemplo:
      'Quem apenas armazena arquivos no celular responde pelo art. 241-B; quem produz o vídeo, pelo art. 240.',
    macete: 'Produzir 240 · vender 241 · divulgar 241-A · POSSUIR 241-B · montagem 241-C · aliciar 241-D.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 242,
    titulo: 'Venda de arma a menor',
    sintese: 'Arma, munição ou explosivo',
    bloco: CRI,
    resumo:
      'VENDER, FORNECER ainda que gratuitamente ou ENTREGAR, de qualquer forma, a criança ou adolescente ARMA, MUNIÇÃO OU EXPLOSIVO — Pena: reclusão de 3 a 6 anos.',
    prova:
      'Pena de RECLUSÃO de 3 a 6 anos, sem multa. Note que o fornecimento GRATUITO também é crime. Compare com o art. 243 (bebida) e o art. 244 (fogos).',
    pegadinha:
      'Aplicar o Estatuto do Desarmamento em detrimento do ECA: prevalece o art. 242 por especialidade quanto ao destinatário menor de idade.',
    exemplo:
      'Adulto que empresta revólver a adolescente responde pelo art. 242, ainda que sem lucro.',
    macete: 'Arma para menor: 3 a 6 anos de RECLUSÃO — até de graça é crime.',
    bancas: ['FCC', 'Cebraspe', 'AOCP'],
  },
  {
    n: 243,
    titulo: 'Bebida alcoólica e produtos que causam dependência',
    sintese: 'Detenção de 2 a 4 anos e multa',
    bloco: CRI,
    destaque: true,
    resumo:
      'VENDER, FORNECER, SERVIR, MINISTRAR OU ENTREGAR, ainda que gratuitamente, de qualquer forma, a criança ou a adolescente, BEBIDA ALCOÓLICA ou, SEM JUSTA CAUSA, OUTROS PRODUTOS CUJOS COMPONENTES POSSAM CAUSAR DEPENDÊNCIA FÍSICA OU PSÍQUICA — Pena: DETENÇÃO DE 2 (DOIS) A 4 (QUATRO) ANOS, e MULTA, se o fato não constitui crime mais grave.',
    prova:
      'Alteração da Lei 13.106/2015: vender bebida alcoólica a menor deixou de ser contravenção/infração administrativa e virou CRIME, com detenção de 2 a 4 anos e multa. É pergunta recorrente.',
    pegadinha:
      'Classificar a venda de bebida a menor como mera infração administrativa (era assim antes de 2015) ou como contravenção do art. 63 da LCP.',
    exemplo:
      'Bar que serve cerveja a adolescente de 16 anos: crime do art. 243, além das sanções administrativas ao estabelecimento.',
    macete: 'Bebida a menor = CRIME (2 a 4 anos), desde 2015. Fogos = art. 244.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 244,
    titulo: 'Fogos, exploração sexual e corrupção de menores',
    sintese: '244, 244-A e 244-B (Súmula 500)',
    bloco: CRI,
    destaque: true,
    resumo:
      'Art. 244: VENDER, FORNECER ainda que gratuitamente OU ENTREGAR a criança ou adolescente FOGOS DE ESTAMPIDO OU DE ARTIFÍCIO, exceto os de reduzido potencial incapazes de provocar dano físico — Pena: detenção de 6 meses a 2 anos e multa. Art. 244-A: SUBMETER criança ou adolescente à PROSTITUIÇÃO OU À EXPLORAÇÃO SEXUAL — Pena: reclusão de 4 a 10 anos e multa, além da pena correspondente à violência. Art. 244-B: CORROMPER OU FACILITAR A CORRUPÇÃO de menor de 18 anos, com ele praticando infração penal ou induzindo-o a praticá-la — Pena: reclusão de 1 a 4 anos; §1º incorre nas mesmas penas quem pratica as condutas por meio eletrônico; §2º as penas aumentam de 1/3 se a infração cometida ou induzida estiver incluída no rol do art. 1º da Lei 8.072/90 (crimes hediondos).',
    prova:
      'O art. 244-B é campeão: SÚMULA 500 DO STJ — “A configuração do crime do art. 244-B do ECA independe da prova da efetiva corrupção do menor, por se tratar de delito FORMAL”. Ou seja, mesmo o adolescente já corrompido gera o crime.',
    pegadinha:
      'Exigir prova de que o menor foi efetivamente corrompido (Súmula 500 dispensa); ou dizer que o crime é material.',
    exemplo:
      'Adulto que pratica roubo acompanhado de adolescente responde pelo roubo em concurso com o art. 244-B, independentemente dos antecedentes do jovem.',
    macete: 'Art. 244-B é FORMAL (Súmula 500/STJ): basta praticar com o menor.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 245,
    titulo: 'Infração: não comunicar maus-tratos',
    sintese: 'Médico, professor e responsável — multa',
    bloco: INF,
    destaque: true,
    resumo:
      'Deixar o MÉDICO, PROFESSOR ou RESPONSÁVEL POR ESTABELECIMENTO DE ATENÇÃO À SAÚDE E DE ENSINO FUNDAMENTAL, PRÉ-ESCOLA OU CRECHE, de comunicar à autoridade competente os casos de que tenha conhecimento, envolvendo SUSPEITA OU CONFIRMAÇÃO DE MAUS-TRATOS contra criança ou adolescente — Pena: MULTA DE 3 A 20 SALÁRIOS DE REFERÊNCIA, aplicando-se o DOBRO em caso de REINCIDÊNCIA.',
    prova:
      'É a sanção do dever do art. 13. Números: multa de 3 a 20 salários de referência, dobrada na reincidência. Natureza: INFRAÇÃO ADMINISTRATIVA, não crime.',
    pegadinha:
      'Tratar a omissão como crime (é infração administrativa, art. 245) ou incluir no rol profissionais não listados (o tipo é fechado: médico, professor e responsável por estabelecimento).',
    exemplo:
      'Professora que silencia diante de sinais evidentes de espancamento responde por infração administrativa com multa.',
    macete: 'Não avisou maus-tratos? 3 a 20 salários — e o dobro na segunda vez.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 249,
    titulo: 'Descumprir dever do poder familiar',
    sintese: 'Multa de 3 a 20 salários',
    bloco: INF,
    resumo:
      'DESCUMPRIR, DOLOSA OU CULPOSAMENTE, os DEVERES INERENTES AO PODER FAMILIAR ou decorrente de TUTELA OU GUARDA, bem assim DETERMINAÇÃO DA AUTORIDADE JUDICIÁRIA OU CONSELHO TUTELAR — Pena: multa de 3 a 20 salários de referência, aplicando-se o dobro em caso de reincidência.',
    prova:
      'Sanciona inclusive o descumprimento de determinação do CONSELHO TUTELAR — reforço da autoridade do órgão. Admite forma CULPOSA.',
    pegadinha:
      'Dizer que só o descumprimento de ordem judicial é punível — a determinação do Conselho Tutelar também gera multa.',
    exemplo:
      'Pais que ignoram a determinação do Conselho de matricular o filho na escola são multados com base no art. 249.',
    macete: 'Ignorou o juiz OU o Conselho Tutelar? 3 a 20 salários.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 250,
    titulo: 'Hospedagem irregular',
    sintese: 'Multa e fechamento do estabelecimento',
    bloco: INF,
    resumo:
      'HOSPEDAR criança ou adolescente DESACOMPANHADO DOS PAIS OU RESPONSÁVEL, OU SEM AUTORIZAÇÃO ESCRITA desses ou da autoridade judiciária, em hotel, pensão, motel ou congênere — Pena: multa. §1º Em caso de REINCIDÊNCIA, sem prejuízo da pena de multa, a autoridade judiciária poderá determinar o FECHAMENTO DO ESTABELECIMENTO POR ATÉ 15 DIAS. §2º Se comprovada a reincidência em período inferior a 30 dias, o estabelecimento será definitivamente FECHADO e terá sua LICENÇA CASSADA.',
    prova:
      'Escalonamento das sanções: multa → fechamento por até 15 dias → fechamento definitivo e cassação da licença (reincidência em menos de 30 dias). Sanção do dever do art. 82.',
    pegadinha:
      'Confundir os prazos: 15 dias é o fechamento temporário; 30 dias é o intervalo que caracteriza a reincidência qualificada.',
    exemplo:
      'Motel autuado duas vezes em 20 dias por hospedar adolescentes é fechado definitivamente.',
    macete: 'Multa → 15 dias fechado → reincidiu em menos de 30 dias: fecha de vez.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 252,
    titulo: 'Infrações de diversões e espetáculos',
    sintese: 'Aviso de classificação e entrada indevida',
    bloco: INF,
    resumo:
      'Art. 252: Deixar o responsável por diversão ou espetáculo público de AFIXAR, EM LUGAR VISÍVEL E DE FÁCIL ACESSO, à entrada do local de exibição, informação destacada sobre a natureza da diversão ou espetáculo e a faixa etária especificada no certificado de classificação — Pena: multa de 3 a 20 salários de referência, dobrada em caso de reincidência. Art. 253: anunciar peças teatrais, filmes ou congêneres sem indicar a faixa etária — multa de 3 a 20 salários. Art. 255: exibir filme, trailer, peça, amostra ou congênere classificado pelo órgão competente como INADEQUADO às crianças ou adolescentes admitidos ao espetáculo — multa de 20 a 100 salários de referência; em caso de reincidência, a autoridade judiciária poderá determinar a SUSPENSÃO DO ESPETÁCULO OU O FECHAMENTO DO ESTABELECIMENTO POR ATÉ 15 DIAS. Art. 258: deixar o responsável pelo estabelecimento ou o empresário de OBSERVAR O QUE DISPÕE ESTA LEI SOBRE O ACESSO de criança ou adolescente aos locais de diversão, ou sobre sua participação no espetáculo — multa de 3 a 20 salários; em caso de reincidência, fechamento por até 15 dias.',
    prova:
      'Duas faixas de multa: a comum, de 3 a 20 salários de referência, e a agravada do art. 255, de 20 a 100 salários. Fechamento por até 15 dias na reincidência.',
    pegadinha:
      'Uniformizar todas as multas em 3 a 20 salários — o art. 255 é mais grave (20 a 100).',
    exemplo:
      'Cinema que exibe filme impróprio para o público presente é multado na faixa de 20 a 100 salários.',
    macete: 'Regra: 3 a 20. Exibir conteúdo inadequado (255): 20 a 100.',
    bancas: ['FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 258,
    titulo: 'Infrações finais e venda proibida',
    sintese: '258-A, 258-B e 258-C',
    bloco: INF,
    resumo:
      'Art. 258-A: deixar a autoridade competente de providenciar a instalação e operacionalização dos cadastros previstos no art. 50 e no §11 do art. 101 — Pena: multa de 1.000 a 3.000 reais. Art. 258-B: deixar o médico, enfermeiro ou dirigente de estabelecimento de atenção à saúde de gestante de efetuar IMEDIATO ENCAMINHAMENTO À AUTORIDADE JUDICIÁRIA de caso de que tenha conhecimento de mãe ou gestante interessada em ENTREGAR SEU FILHO PARA ADOÇÃO — Pena: multa de 1.000 a 3.000 reais; parágrafo único: incorre na mesma pena o funcionário de programa oficial ou comunitário destinado à garantia do direito à convivência familiar que deixa de efetuar a comunicação. Art. 258-C: descumprir a proibição do art. 81 (venda de produtos proibidos) — Pena: multa de 3 a 20 salários de referência; em caso de reincidência, INTERDIÇÃO DO ESTABELECIMENTO ATÉ O CUMPRIMENTO DA OBRIGAÇÃO.',
    prova:
      'O art. 258-B protege a ENTREGA VOLUNTÁRIA (art. 13, §1º, e art. 19-A): quem deixa de encaminhar a gestante à Justiça é multado em R$ 1.000 a R$ 3.000. E o 258-C sanciona a venda de armas, bebidas, fogos e loterias do art. 81.',
    pegadinha:
      'Punir criminalmente a gestante que deseja entregar o filho — ela é protegida; punido é quem NÃO a encaminha ao Judiciário.',
    exemplo:
      'Hospital que ignora o pedido de entrega voluntária e simplesmente aciona o Conselho Tutelar como “abandono” pode ser multado.',
    macete: '258-B: não encaminhou a mãe que quer entregar? R$ 1.000 a 3.000.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 260,
    titulo: 'Fundos da infância e doações dedutíveis',
    sintese: 'FIA: 1% PJ e 6% PF (IR)',
    bloco: FIN,
    destaque: true,
    resumo:
      'Os contribuintes poderão efetuar DOAÇÕES aos FUNDOS DOS DIREITOS DA CRIANÇA E DO ADOLESCENTE nacional, distrital, estaduais ou municipais, DEVIDAMENTE COMPROVADAS, sendo essas INTEGRALMENTE DEDUZIDAS DO IMPOSTO DE RENDA, obedecidos os seguintes limites: I – 1% (UM POR CENTO) do imposto sobre a renda devido apurado pelas PESSOAS JURÍDICAS tributadas com base no lucro real; II – 6% (SEIS POR CENTO) do imposto sobre a renda apurado pelas PESSOAS FÍSICAS na Declaração de Ajuste Anual. §2º Os Conselhos Municipais, Estaduais e Nacional fixarão critérios de utilização, através de planos de aplicação, das doações subsidiadas e demais receitas. §5º Observado o limite do inciso I, as pessoas jurídicas podem deduzir até 1% do imposto devido. Art. 260-A a 260-L: tratam da destinação na declaração, do recibo e da vedação de vinculação a entidade específica.',
    prova:
      'Percentuais decoráveis: 1% para PESSOA JURÍDICA (lucro real) e 6% para PESSOA FÍSICA. Quem gere e fixa os critérios de aplicação é o CONSELHO DE DIREITOS, não o Executivo isoladamente.',
    pegadinha:
      'Inverter os percentuais (6% PJ e 1% PF) — troca clássica; ou dizer que o doador escolhe livremente a entidade beneficiária.',
    exemplo:
      'Empresa tributada pelo lucro real destina 1% do IR devido ao FIA municipal, com aplicação definida pelo CMDCA.',
    macete: 'PJ = 1%. PF = 6%. Quem manda no dinheiro é o Conselho de DIREITOS.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 265,
    titulo: 'Disposições finais e vigência',
    sintese: 'Revogação do Código de Menores',
    bloco: FIN,
    resumo:
      'Art. 265: a União fica autorizada a abrir crédito especial para adaptação de suas unidades de internação às diretrizes desta Lei. Art. 266: esta Lei entra em vigor 90 (NOVENTA) DIAS após sua publicação. Parágrafo único: durante o período de vacância deverão ser promovidas atividades e campanhas de divulgação e esclarecimentos acerca do disposto nesta Lei. Art. 267: REVOGAM-SE as Leis nº 4.513, de 1964, e nº 6.697, de 10 de outubro de 1979 (CÓDIGO DE MENORES), e as demais disposições em contrário.',
    prova:
      'Duas informações: vacatio legis de 90 DIAS (publicada em 16/7/1990, vigorou a partir de outubro) e a revogação EXPRESSA do Código de Menores (Lei 6.697/79) e da Lei da FUNABEM (4.513/64).',
    pegadinha:
      'Dizer que o ECA entrou em vigor na data da publicação; ou que o Código de Menores foi apenas tacitamente revogado (a revogação é expressa, art. 267).',
    exemplo:
      'Fatos ocorridos em agosto de 1990 ainda se regiam pelo Código de Menores — o ECA só passou a viger em outubro.',
    macete: '90 dias de vacância · revogação EXPRESSA do Código de Menores.',
    bancas: ['FCC', 'AOCP', 'Vunesp'],
  },
];
