import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 2º · criança e adolescente',
    enunciado:
      'Julgue o item conforme a Lei nº 8.069/1990: considera-se criança a pessoa até doze anos de idade completos e adolescente aquela entre doze e dezoito anos, sendo vedada, em qualquer hipótese, a aplicação do Estatuto às pessoas maiores de dezoito anos.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO — dois erros no mesmo item. Primeiro: criança é a pessoa até doze anos de idade INCOMPLETOS (ou seja, de 0 a 11 anos), e não “completos”. Segundo: o parágrafo único do art. 2º permite, EXCEPCIONALMENTE e nos casos expressos em lei, a aplicação do Estatuto às pessoas entre 18 e 21 anos — como na liberação compulsória da internação aos 21 anos (art. 121, §5º). A troca de “incompletos” por “completos” é a pegadinha mais repetida de todo o ECA.',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 4º · prioridade absoluta',
    enunciado:
      'Nos termos do art. 4º do ECA, a garantia de prioridade absoluta compreende:',
    alternativas: [
      'primazia de receber proteção e socorro em quaisquer circunstâncias; precedência de atendimento nos serviços públicos ou de relevância pública; preferência na formulação e na execução das políticas sociais públicas; e destinação privilegiada de recursos públicos nas áreas relacionadas com a proteção à infância e à juventude.',
      'exclusivamente a destinação privilegiada de recursos públicos federais para programas de atendimento socioeducativo.',
      'a precedência de atendimento apenas nos serviços de saúde e educação mantidos diretamente pelo poder público.',
      'a primazia no socorro somente em situações de calamidade pública formalmente declarada.',
      'a preferência na execução de políticas públicas, desde que haja disponibilidade orçamentária previamente comprovada pelo ente federado.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Literalidade do parágrafo único do art. 4º — os quatro “P”: Primazia (proteção e socorro), Precedência (atendimento em serviços públicos ou de relevância pública), Preferência (formulação e execução de políticas) e destinação Privilegiada (recursos). Note o erro da alternativa E: a prioridade absoluta NÃO se condiciona a disponibilidade orçamentária — é justamente o contrário, ela vincula a alocação dos recursos. Lembre ainda que o dever é da família, da comunidade, da sociedade em geral e do poder público.',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 25 · família natural e extensa',
    enunciado:
      'Sobre os conceitos de família no Estatuto da Criança e do Adolescente, assinale a afirmativa correta.',
    alternativas: [
      'Família natural é exclusivamente aquela formada pelo casal e seus descendentes, exigindo-se a presença de ambos os genitores.',
      'Família extensa é aquela formada por quaisquer parentes até o quarto grau, independentemente de convivência ou vínculo afetivo.',
      'Família natural é a comunidade formada pelos pais ou qualquer deles e seus descendentes; família extensa ou ampliada é a que se estende para além da unidade pais e filhos ou da unidade do casal, formada por parentes próximos com os quais a criança ou adolescente convive e mantém vínculos de afinidade e afetividade.',
      'Família substituta é sinônimo de família extensa, ambas decorrentes de vínculo biológico.',
      'A colocação em família extensa depende sempre de prévia destituição do poder familiar e de inscrição no cadastro de adoção.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. Reprodução do art. 25, caput e parágrafo único. Guarde os três conceitos: NATURAL (pais ou qualquer deles + descendentes — basta um genitor, o que derruba a alternativa A); EXTENSA (parentes próximos COM convivência e vínculos de afinidade e afetividade — o parentesco isolado não basta, o que derruba a B); e SUBSTITUTA (art. 28: guarda, tutela ou adoção — não é vínculo biológico, o que derruba a D).',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 23 · pobreza e poder familiar',
    enunciado:
      'Julgue o item: a falta ou a carência de recursos materiais constitui motivo suficiente para a perda ou a suspensão do poder familiar, devendo a criança, nessa hipótese, ser encaminhada a programa de acolhimento institucional.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O art. 23, caput, é expresso em sentido oposto: a falta ou carência de recursos materiais NÃO constitui motivo suficiente para a perda ou suspensão do poder familiar. E o §1º completa: não havendo outro motivo que autorize a medida, a criança será MANTIDA em sua família de origem, que deverá obrigatoriamente ser incluída em serviços e programas oficiais de proteção, apoio e promoção. É a mesma lógica do art. 9º da Convenção da ONU (Parte 4): pobreza não separa família — combate-se a pobreza, não a família pobre.',
  },
  {
    id: 5,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Arts. 39 a 42 · adoção',
    enunciado: 'A respeito da adoção no ECA, assinale a alternativa INCORRETA.',
    alternativas: [
      'A adoção é medida excepcional e irrevogável, à qual se deve recorrer apenas quando esgotados os recursos de manutenção da criança ou adolescente na família natural ou extensa.',
      'Podem adotar os maiores de dezoito anos, independentemente do estado civil.',
      'O adotante há de ser, pelo menos, dezesseis anos mais velho do que o adotando.',
      'Os ascendentes e os irmãos do adotando podem adotar, desde que comprovem vínculo afetivo e melhor interesse da criança.',
      'É vedada a adoção por procuração.',
    ],
    gabarito: 3,
    comentario:
      'Gabarito: D (a incorreta). O art. 42, §1º, veda expressamente a adoção por ASCENDENTES e IRMÃOS do adotando — avô não adota neto, irmão não adota irmão, sem qualquer exceção por vínculo afetivo. A vedação evita a confusão de gerações e o uso da adoção para fins previdenciários ou sucessórios. As demais alternativas reproduzem corretamente os arts. 39, §§1º e 2º, e 42, caput e §3º.',
  },
  {
    id: 6,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 19 · acolhimento e prazos',
    enunciado:
      'Quanto ao direito à convivência familiar e comunitária, nos termos do art. 19 do ECA, é correto afirmar que a situação da criança ou adolescente inserido em programa de acolhimento será reavaliada, no máximo, a cada:',
    alternativas: [
      'três meses, não podendo a permanência em programa de acolhimento prolongar-se por mais de dezoito meses, salvo comprovada necessidade que atenda ao seu superior interesse.',
      'seis meses, não podendo a permanência prolongar-se por mais de dois anos, em qualquer hipótese.',
      'doze meses, sendo ilimitado o prazo de permanência em acolhimento institucional.',
      'trinta dias, devendo a criança ser obrigatoriamente encaminhada à adoção após o primeiro relatório desfavorável.',
      'três meses, sendo vedada, em qualquer caso, a permanência superior a seis meses.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Redação dada pela Lei 13.509/2017: reavaliação no máximo a cada 3 MESES (antes eram 6) e permanência máxima de 18 MESES (antes, 2 anos), salvo comprovada necessidade atendendo ao superior interesse, com decisão fundamentada. A alternativa B traz justamente os prazos REVOGADOS — armadilha frequente em provas que reaproveitam questões antigas. Complete o estudo com o §3º (preferência da família natural) e o §4º (visita a pai ou mãe privado de liberdade, independentemente de autorização judicial).',
  },
  {
    id: 7,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Arts. 83 e 84 · autorização para viajar',
    enunciado:
      'João, com 15 anos de idade, pretende viajar sozinho de ônibus para outra unidade da Federação, em território nacional. Maria, com 8 anos, pretende viajar para comarca não contígua, dentro do mesmo estado, na companhia de seu tio maior de idade, com parentesco comprovado documentalmente. À luz do ECA:',
    alternativas: [
      'ambos necessitam de autorização judicial expressa.',
      'João não necessita de autorização judicial, pois o art. 83 exige a autorização apenas para a criança; Maria também está dispensada, por estar acompanhada de colateral maior até o terceiro grau, com parentesco comprovado documentalmente.',
      'João necessita de autorização judicial por ser menor de dezoito anos; Maria está dispensada.',
      'ambos estão dispensados, pois o art. 83 foi revogado pela Lei nº 13.812/2019.',
      'Maria necessita de autorização judicial, pois a dispensa alcança apenas ascendentes, e João está dispensado.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O art. 83, caput, refere-se exclusivamente à CRIANÇA — o adolescente pode viajar desacompanhado dentro do território nacional sem autorização judicial (esta é a pegadinha nº 1 do tema). Quanto a Maria, incide o §1º, “b”, 1: dispensa-se a autorização quando a criança estiver acompanhada de ascendente OU COLATERAL MAIOR ATÉ O TERCEIRO GRAU, com parentesco comprovado documentalmente — e o tio é colateral de 3º grau. Atenção: para viagem ao EXTERIOR a regra muda (art. 84), pois lá o texto alcança criança E adolescente.',
  },
  {
    id: 8,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 13 · comunicação de maus-tratos',
    enunciado:
      'Julgue o item: os casos de suspeita ou confirmação de castigo físico, de tratamento cruel ou degradante e de maus-tratos contra criança ou adolescente serão obrigatoriamente comunicados ao Conselho Tutelar da respectiva localidade, sem prejuízo de outras providências legais.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO. Transcrição literal do art. 13, caput. Três detalhes que a banca costuma adulterar: (i) basta a SUSPEITA — não se exige confirmação; (ii) o destinatário é o CONSELHO TUTELAR, e não a autoridade policial, o Ministério Público ou o juiz; (iii) a comunicação não exclui outras providências. O descumprimento pelo médico, professor ou responsável por estabelecimento de saúde e ensino configura a infração administrativa do art. 245 do ECA, e o dever legal afasta qualquer alegação de quebra de sigilo profissional.',
  },
  {
    id: 9,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Art. 54 · educação como direito público subjetivo',
    enunciado:
      'Município deixa de oferecer vaga em creche a criança de quatro anos de idade, alegando insuficiência de recursos orçamentários e discricionariedade administrativa na formulação de políticas públicas. À luz do ECA e da jurisprudência do STF, é correto afirmar que:',
    alternativas: [
      'a alegação é válida, pois o atendimento em creche configura mera norma programática, insuscetível de controle judicial.',
      'o acesso ao ensino obrigatório e gratuito é direito público subjetivo, e o não oferecimento ou a oferta irregular importa responsabilidade da autoridade competente, sendo legítima a determinação judicial de matrícula em creche e pré-escola para crianças de zero a cinco anos.',
      'a matéria é de competência exclusiva da União, não cabendo responsabilização do município.',
      'o direito só é exigível judicialmente a partir do ensino fundamental, sendo a educação infantil de oferta facultativa.',
      'o Judiciário não pode interferir, sob pena de violação à separação dos poderes, ainda que haja omissão administrativa comprovada.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O art. 54, IV, assegura atendimento em creche e pré-escola às crianças de ZERO A CINCO anos; o §1º qualifica o acesso ao ensino obrigatório e gratuito como DIREITO PÚBLICO SUBJETIVO; e o §2º responsabiliza a autoridade pelo não oferecimento ou oferta irregular. O STF, no RE 1.008.166 (Tema 548, repercussão geral), fixou que é obrigação do Estado assegurar vaga em creche e pré-escola, sendo legítima a intervenção do Judiciário diante da omissão, sem que isso viole a separação dos poderes ou a reserva do possível.',
  },
  {
    id: 10,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 60 e 67 · trabalho do adolescente',
    enunciado:
      'Sobre a profissionalização e a proteção no trabalho no ECA, é correto afirmar:',
    alternativas: [
      'o art. 60 do ECA, em sua literalidade, proíbe qualquer trabalho a menores de quatorze anos, salvo na condição de aprendiz, devendo-se observar que a EC nº 20/1998 elevou a idade mínima constitucional para dezesseis anos, permitido o trabalho a partir dos quatorze apenas como aprendiz; e é vedado ao adolescente o trabalho noturno, assim considerado o realizado entre as vinte e duas horas de um dia e as cinco horas do dia seguinte.',
      'é permitido ao adolescente maior de dezesseis anos o trabalho insalubre, desde que haja autorização dos pais e laudo médico favorável.',
      'o trabalho noturno do adolescente é aquele realizado entre as vinte horas de um dia e as seis horas do dia seguinte.',
      'a vedação ao trabalho perigoso, insalubre ou penoso não alcança o adolescente que trabalha em regime familiar.',
      'a remuneração recebida pelo adolescente em programa de trabalho educativo desfigura o caráter educativo da atividade, convertendo-a em relação de emprego.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Três pontos reunidos: (i) o art. 60 do ECA fala em 14 anos, mas a EC 20/1998 alterou o art. 7º, XXXIII, da CF para 16 anos, salvo aprendiz a partir dos 14 — leia sempre o comando da questão para saber qual régua a banca quer; (ii) o horário noturno do art. 67, I, é de 22h às 5h (a alternativa C altera para 20h–6h); (iii) o rol do art. 67 alcança expressamente o adolescente em REGIME FAMILIAR de trabalho, o que derruba a alternativa D. Por fim, a alternativa E contraria o art. 68, §2º: a remuneração NÃO desfigura o trabalho educativo. E jamais: insalubre, perigoso ou noturno só a partir dos 18 anos.',
  },
];
