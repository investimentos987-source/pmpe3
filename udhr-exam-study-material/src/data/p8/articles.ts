import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'I · Definição, obrigações e responsáveis': '#b04a3c',
  'II · Asilo, investigação e jurisdição universal': '#2f6fb4',
  'III · Cláusulas finais': '#4b5563',
};

const A = 'I · Definição, obrigações e responsáveis';
const B = 'II · Asilo, investigação e jurisdição universal';
const C = 'III · Cláusulas finais';

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'O compromisso de prevenir e punir',
    sintese: 'Dupla obrigação: impedir e castigar',
    bloco: A,
    resumo:
      'Os Estados-partes COMPROMETEM-SE A PREVENIR E A PUNIR A TORTURA de acordo com a presente Convenção.',
    prova:
      'Um artigo de uma linha com duas obrigações: não basta o Estado simplesmente não praticar tortura — ele deve medidas ATIVAS tanto de prevenção (infraestrutura, fiscalização, políticas) quanto de repressão (criminalização e investigação penal).',
    pegadinha:
      'Admitir que a Convenção apenas proclama uma proibição moral; a lógica é de estado positivo: prevenção e punição são deveres legais inexoráveis.',
    exemplo:
      'No Brasil, o Sistema Nacional de Prevenção e Combate à Tortura (Lei 12.845/2013) e a Lei 9.455/1997 são a resposta aos dois braços do art. 1º.',
    macete: 'Art. 1º: as duas brigas da Convenção — PREVENIR e PUNIR.',
    bancas: ['AOCP'],
  },
  {
    n: 2,
    titulo: 'Definição de tortura — muito mais ampla que a da ONU',
    sintese: 'Qualquer dor, qualquer fim · obliteração da personalidade',
    bloco: A,
    destaque: true,
    resumo:
      'Considera-se TORTURA todo ato pelo qual, intencionalmente, se inflige a uma pessoa dores ou sofrimentos físicos ou mentais — com fins de INVESTIGAÇÃO CRIMINAL, como meio de INTIMIDAÇÃO, como CASTIGO PESSOAL, como medida PREVENTIVA, como PENA ou com QUALQUER OUTRA FINALIDADE. Considera-se tortura também o emprego, sobre uma pessoa, de métodos que tenham por fim OBLITERAR A PERSONALIDADE da vítima ou diminuir sua capacidade física ou mental, AINDA QUE tais métodos não provoquem dor física ou angústia mental.',
    prova:
      'A definição mais cobrada do documento, justamente pela comparação com a Convenção da ONU (Decreto 40/1991): (i) qualquer finalidade basta (a ONU lista finalidades específicas: informação/confissão, punição, intimidação ou discriminação); (ii) NÃO se exige gravidade da dor (a ONU exige dor ou sofrimentos GRAVES); (iii) NÃO se exige a participação de agente público (a ONU exige autoridade ou consentimento estatal); e (iv) inclui os métodos de obliteração da personalidade, mesmo sem dor física.',
    pegadinha:
      'Importar as exigências da definição da ONU (“funcionário público”, “dor grave”, “lista taxativa de finalidades”) para a leitura interamericana. Se a questão falar da Convenção Interamericana: qualquer dor, qualquer fim, qualquer mão.',
    exemplo:
      'Tratamento psiquiátrico não consentido visando apagar a personalidade da vítima — ainda que não cause dor física — configura tortura pelo segundo núcleo do artigo, de obliteração da personalidade.',
    macete:
      'CIAPTT: qualquer dor, qualquer fim, qualquer mão. CAT/ONU: dor grave + finalidade específica + funcionário público. Não misture as réguas.',
    bancas: ['Cebraspe', 'FGV', 'FCC', 'Vunesp'],
  },
  {
    n: 3,
    titulo: 'Quem responde pelo crime de tortura',
    sintese: 'Funcionário que manda, faz, instiga ou não impede',
    bloco: A,
    destaque: true,
    resumo:
      'São responsáveis pelo crime de tortura: a) o funcionário ou servidor público que, agindo NESSA QUALIDADE, ordenar, instigar ou induzir a sua prática, COMETER DIRETAMENTE tais atos ou, PODENDO IMPEDI-LOS, NÃO IMPEDIR; b) a pessoa que, por INSTIGAÇÃO do funcionário público referido, ordenar, instigar ou induzir a prática da tortura, a cometer diretamente ou dela for CÚMPLICE.',
    prova:
      'Dois círculos: o do AGENTE PÚBLICO (ordena, instiga, comete, ou RESPONDE POR OMISSÃO quando podia impedir) e o do PARTICULAR, que só entra se instigado por funcionário público. A omissão do superior hierárquico é o ponto que as bancas mais punem: “podendo impedir, não impediu” = responde igualmente.',
    pegadinha:
      'Afirmar que a omissão não caracteriza o crime; dizer que o particular responde em qualquer caso (ele precisa da instigação do agente público); ou ignorar a responsabilidade por execução direta.',
    exemplo:
      'Delegado que permanece ao lado da sala, ciente da sessão e sem intervir, responde por omissão nos moldes da alínea “a” — mesmo sem tocar na vítima.',
    macete: 'AGENTE: manda, instiga, faz ou omite. PARTICULAR: só se instigado pelo agente.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 4,
    titulo: 'Proibição da obediência hierárquica como justificativa',
    sintese: 'Ordem de cima não dá salvo-conduto',
    bloco: A,
    destaque: true,
    resumo:
      'O fato de ter-se agido por ORDEM DE UM SUPERIOR HIERÁRQUICO NÃO ISENTARÁ da responsabilidade penal correspondente.',
    prova:
      'Isenção de responsabilidade penal é expressamente vedada — e vale para o SUBORDINADO (que segue a ordem) e para o SUPERIOR (que a emite, pelo art. 3º). No Brasil, diálogo direto com o art. 21 do Código Penal: o estrito cumprimento legal do dever só exclui a culpabilidade quando a ordem NÃO É MANIFESTAMENTE ILEGAL.',
    pegadinha:
      'Admitir a obediência hierárquica como excludente geral de ilicitude quando a ordem é ilegal ou manifestamente abusiva; ou limitar a isenção ao subordinado, poupando o superior.',
    exemplo:
      'Agente penitenciário que, por ordem direta do diretor da unidade, submete um detido a sanduíche físico ou a um castigo desumano não pode invocar a ordem recebida como excludente: a ordem era manifestamente ilegal, e o art. 4º veda a obediência hierárquica como justificativa.',
    macete: 'Ordem de cima não justifica: o subordinado pesa, o superior também — todos respondem.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 5,
    titulo: 'Nenhuma circunstância justifica a tortura',
    sintese: 'Nem guerra, nem emergência, nem o perigo do detido',
    bloco: A,
    resumo:
      'Não se poderá invocar nem admitir como justificativa do crime de tortura a existência de circunstâncias como ESTADO DE GUERRA, AMEAÇA DE GUERRA, ESTADO DE SÍTIO ou de EMERGÊNCIA, conflito ou PERTURBAÇÃO INTERNA, SUSPENSÃO DE GARANTIAS CONSTITUCIONAIS, INSTABILIDADE POLÍTICA INTERNA ou outras comoções ou calamidades públicas. Tampouco será justificativa o CARÁTER PERIGOSO DO DETIDO, a ausência de prova de sua possível criminalidade ou a malignidade da alegação.',
    prova:
      'Proibição ABSOLUTA — nível de jus cogens: veda expressamente justificativas de estado de exceção e argumentos utilitaristas (o detido é perigoso, há perigo iminente, falta prova). É o mesmo bloco do PIDCP e da CAT, mas com detalhamento que a FGV e a Cebraspe amam:',
    pegadinha:
      'Admitir a justificativa de “bomba-relógio” ou proteção da ordem pública; ou dizer que a suspensão de garantias abre exceção para castigos corporais.',
    exemplo:
      'Na pandemia, o isolamento prisional podia ser reforçado, mas nunca justificou castigo desumano, muito menos tortura — o art. 5º continua inteiro.',
    macete: 'Nem guerra, nem sítio, nem detido perigoso: tortura nunca tem justificativa.',
    bancas: ['Cebraspe', 'FGV'],
  },
  {
    n: 6,
    titulo: 'Punir severamente os atos de tortura',
    sintese: 'Penalidade séria + extensão aos tratamentos degradantes',
    bloco: A,
    resumo:
      'Os Estados-partes adotarão as medidas necessárias para que os atos de tortura sejam SEVERAMENTE PUNIDOS de acordo com sua legislação interna, estendendo-se a prevenção e a punição também a outras formas de TRATAMENTO CRUEL, DESUMANO OU DEGRADANTE.',
    prova:
      'Duas camadas: punição grave para o crime principal e proteção ampliada contra o tratamento degradante — a mesma tríade cruel-desumano-degradante do art. 5 da DUDH (Parte 1).',
    pegadinha:
      'Restringir a norma à tortura “estrita”, sem abrangência dos tratamentos degradantes que não a configuram integralmente.',
    exemplo:
      'As qualificadoras da Lei 9.455/1997, que majoram a pena quando a tortura resulta em lesão corporal grave ou morte, cumprem a exigência de punição severa prevista no artigo.',
    macete: 'Tortura se pune severamente; degradante também se pune.',
    bancas: ['FCC'],
  },
  {
    n: 7,
    titulo: 'Prevenção nas instituições penais e de detenção',
    sintese: 'Inspeção, equipe treinada e médico presente',
    bloco: A,
    resumo:
      'Os Estados-partes adotarão medidas para impedir e eliminar a prática de tortura em instituições penais e de detenção: INSPEÇÃO sistemática e adequada dos centros de detenção; FORMAÇÃO PENITENCIÁRIA E POLICIAL capacitada; e ATENDIMENTO MÉDICO e cuidados de saúde aos detidos, garantindo o seu TRATAMENTO HUMANO.',
    prova:
      'O braço institucional da prevenção. No Brasil, dialoga com a Comissão Penitenciária de Investigação das mortes em custódia, com a legislação penitenciária e com o Sistema Nacional de Prevenção e Combate à Tortura (SNPCT, Lei 12.845/2013).',
    pegadinha:
      'Restringir a obrigação a praxes administrativas ordinárias, sem formação específica ou assistência de saúde aos custodiados.',
    exemplo:
      'Relatório do SNPCT após visita a institutos penitenciários federais e inspeção médica regular dos detidos: exatamente o que o art. 7º exige.',
    macete: 'Prisão sem tortura pede três: inspeção regular, equipe treinada e médico disponível.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 8,
    titulo: 'Direito da vítima: exame independente e reparação',
    sintese: 'Autoridade competente e INDEPENDENTE + saúde, dignidade e honra',
    bloco: B,
    destaque: true,
    resumo:
      'Os Estados-partes garantirão a toda pessoa que alegue ser vítima de tortura o direito de se submeter a um EXAME DO SEU CASO por uma AUTORIDADE COMPETENTE E INDEPENDENTE. De igual modo, a vítima terá direito a RECEBER REPARAÇÃO e aos meios para a recuperação de sua SAÚDE, DIGNIDADE e HONRA.',
    prova:
      'O requisito que a banca mais pune: a autoridade não pode ser apenas “competente” — deve ser INDEPENDENTE (não podem que internos da mesma corporação investiguem). E o trio da reparação: saúde, dignidade e honra.',
    pegadinha:
      'Suprimir a independência da autoridade examinadora; ou reduzir a reparação ao dano material, ignorando saúde, dignidade e honra.',
    exemplo:
      'Inquérito sobre tortura em delegacia conduzido pelo MP, com perícia independente da polícia responsável e indenização judicial à vítima.',
    macete: 'Exame: competente E independente. Reparação: saúde + dignidade + honra.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 9,
    titulo: 'Assegurar que vítimas processem sob a jurisdição',
    sintese: 'Extraditar ou processar — sem abrigo à identidade',
    bloco: B,
    destaque: true,
    resumo:
      'Os Estados-partes adotarão medidas para assegurar que as vítimas de tortura possam processar sob a sua jurisdição. Se a pessoa acusada de tortura se encontrar em seu território e não for extraditada ao Estado que o requer, submeter-se-á o caso às suas próprias AUTORIDADES COMPETENTES para efeito de processo. Nenhum Estado parte poderá invocar razões políticas ou circunstâncias excepcionais para recusar a perseguição penal.',
    prova:
      'É a semente do princípio AUT DEDERE AUT JUDICARE (extraditar ou julgar) que o art. 14 completa. O local do crime não é um destino livre para o agressor — o Estado de acolhida também responde.',
    pegadinha:
      'Afirmar que só o Estado onde ocorreu o crime pode processá-lo; ou admitir que a natureza da acusação (estória de necessidade) dispense o processo.',
    exemplo:
      'O Brasil, ao abrigar um acusado de tortura, processando-o aqui quando a extradição não puder ser franqueada: o braço interno da perseguição universal.',
    macete: 'Vítima pode processar aqui; Estado não é refúgio para o torturador.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 10,
    titulo: 'Direito de asilo e extradições preservados',
    sintese: 'A Convenção não toca o asilo',
    bloco: B,
    resumo:
      'Nenhuma disposição da presente Convenção será interpretada como limitação do DIREITO DE ASILO, nem como alteradora das obrigações dos Estados-partes em matéria de EXTRADIÇÃO.',
    prova:
      'Ponte com o art. 14 da DUDH (Parte 1 da coleção): a proteção humanitária ao perseguido não é afetada pela Convenção — ela coexiste com os deveres de extradição e não os inverte.',
    pegadinha:
      'Afirmar que a Convenção cria um direito universal ao asilo ou que a extradição de um acusado de tortura é negociável.',
    exemplo:
      'Pessoa perseguida politicamente que sofreu tortura refugia-se em nosso território sem interferir nas trocas extradicionais entre países aliados.',
    macete: 'Direitos de asilo e extradições permanecem como estão.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 11,
    titulo: 'Investigação imediata ante denúncia ou crença fundada',
    sintese: 'Basta uma crença bem fundamentada',
    bloco: B,
    resumo:
      'Se houver DENÚNCIA ou CRENÇA BEM FUNDAMENTADA de que foi cometido um ato de tortura dentro de sua jurisdição, os Estados-partes garantirão que suas respectivas autoridades procedam IMEDIATAMENTE a uma avaliação e, se for o caso, procedam à investigação e submissão às autoridades competentes.',
    prova:
      'A exigência é a mera denúncia ou crença bem fundamentada — não se pode exigir prova cabal para investigar e a resposta tem de ser IMEDIATA.',
    pegadinha:
      'Adjetivar a obrigação para exigir prova prévia ou inquirição preliminar longa; ou limiti-la ao local da prisão.',
    exemplo:
      'Notícia de brutalidade em cela de flagrante exige abertura imediata de investigação, antes mesmo do relato formal da vítima.',
    macete: 'Crença bem fundamentada = exame instantâneo, sem devagar.',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 12,
    titulo: 'Jurisdição universal, não devolução e extradite-or-prosecute',
    sintese: 'Art. 12 julga aqui · art. 13 não devolve · art. 14 entrega ou julga',
    bloco: B,
    destaque: true,
    resumo:
      'Art. 12 — Todo Estado tomará medidas para estabelecer sua JURISDIÇÃO CRIMINAL sobre o crime previsto nesta Convenção, ainda que o ato tenha sido cometido FORA DE SEU TERRITÓRIO (jurisdição universal). Art. 13 — Nenhum Estado EXPULSARÁ, DEVOLVERÁ OU EXTRADITARÁ uma pessoa para um Estado quando existam razões BEM FUNDAMENTAS PARA CRER que estará em perigo de ser TORTURADA (não devolução — NON-REFOULEMENT). Art. 14 — Se o Estado que não conceder a extradição, submeterá o caso às suas próprias AUTORIDADES COMPETENTES para PROCESSO, como se o crime tivesse sido cometido dentro de sua jurisdição (princípio AUT DEDERE AUT JUDICARE — extraditar ou julgar).',
    prova:
      'O trio universal da perseguição penal: JULGAR AQUI (12), NÃO DEVOLVER SE HOUVER RISCO (13) e ENTREGAR OU JULGAR (14). O princípio do art. 13 iguala-se aos da Convenção da ONU e do refúgio: ninguém é devolvido ao torturador; e o art. 14 garante que “esconder” não dá impunidade.',
    pegadinha:
      'Afirmar que a extradição é sempre obrigatória (não é: é vedada quando haja risco fundado de tortura); confundir a não devolução com repatriação consentida (o non-refoulement é incondicional); ou afirmar que o Estado que não extradita fica isento de processar (inverte-se a regra: não extraditando, é obrigado a julgar).',
    exemplo:
      'Torturador da ditadura argentina detido em São Paulo: o Brasil não o extradita para país com tortura reconhecida e pode processá-lo aqui, em plena jurisdição universal.',
    macete: 'Trio da universalidade: (12) julgue aqui, (13) não devolva ao torturador, (14) entregue ou julgue.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 13,
    titulo: 'Assinatura, vigência e adesão',
    sintese: 'Acessível a qualquer Estado',
    bloco: C,
    resumo:
      'Arts. 15 a 17 — A Convenção fica ABERTA à assinatura dos Estados-membros da OEA e à ADESÃO de qualquer Estado; entra em vigor para cada Estado a partir da data do depósito do instrumento de ratificação ou adesão junto ao Secretário-Geral da Organização dos Estados Americanos. Foi adoptada em 9 de dezembro de 1985 em Cartagena, Colômbia e promulgada no Brasil pelo Decreto 98.386/1989.',
    prova:
      'O fechamento do documento e os dados-chave: ratificação, adesão (aberta a qualquer Estado) e vigência por Estado-membro. O Brasil assinou em 1986 e promulgou com Decreto 98.386/1989 — rito ordinário, anterior à EC 45/2004, logo norma SUPRALEGAL no Brasil.',
    pegadinha:
      'Trocar o decreto/ano; ou usar a vigência global para um só momento comum (o prazo varia por Estado).',
    exemplo:
      'No Brasil, a Convenção vigora como norma supralegal — abaixo da Constituição e acima de leis ordinárias.',
    macete: 'Convenção de 1985, Cartagena — Decreto 98.386/1989 — supralegal.',
    bancas: ['AOCP', 'Vunesp'],
  },
];
