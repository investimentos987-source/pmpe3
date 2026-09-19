import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  Fundamentos: '#c19a3d',
  'Civis e jurídicos': '#2f6fb4',
  Políticos: '#b04a3c',
  'Econômicos, sociais e culturais': '#0f766e',
  'Cláusulas finais': '#4b5563',
};

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Liberdade, igualdade e fraternidade',
    sintese: 'Todos nascem livres e iguais em dignidade',
    bloco: 'Fundamentos',
    resumo:
      'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns em relação aos outros com espírito de fraternidade.',
    prova:
      'As bancas exploram o verbo NASCER: os direitos são inatos e anteriores ao Estado — não são “concedidos” por ele. Cobram também a tríade liberdade–igualdade–fraternidade e a palavra “dignidade”, matriz do art. 1º, III, da CF/88.',
    pegadinha:
      'Trocar “dignidade e direitos” por “deveres e direitos”; afirmar que o Estado OUTORGA os direitos fundamentais; ou dizer que só cidadãos gozam de igualdade — o texto fala em todos os seres humanos.',
    exemplo:
      'Uma lei que negue acesso à justiça a estrangeiros afronta o art. 1º: a dignidade não depende de nacionalidade — nasce com a pessoa.',
    macete: 'NASCEU, TEM. Direito é do berço, não do balcão do Estado.',
    bancas: ['FGV', 'FCC', 'Cebraspe'],
  },
  {
    n: 2,
    titulo: 'Proibição de distinção (não discriminação)',
    sintese: 'Rol exemplificativo antidiscriminação',
    bloco: 'Fundamentos',
    resumo:
      'Toda pessoa tem capacidade para gozar os direitos e liberdades da Declaração, sem distinção de qualquer espécie (raça, cor, sexo, língua, religião, opinião política ou de outra natureza, origem nacional ou social, riqueza, nascimento ou qualquer outra condição). Veda-se ainda a distinção fundada na condição política, jurídica ou internacional do país ou território de origem.',
    prova:
      'Decore que o rol é EXEMPLIFICATIVO (numerus apertus): termina com “ou qualquer outra condição”. O final do artigo inclui a situação político-jurídica do território (tutela, não autogoverno, soberania limitada) — detalhe que a FCC adora listar.',
    pegadinha:
      'Dizer que o rol é TAXATIVO; suprimir “riqueza” (fortuna) ou “nascimento” da lista; ou afirmar que a proteção vale apenas para nacionais do Estado.',
    exemplo:
      'Concurso público que exclua candidatos por “origem social” viola o art. 2º, ainda que essa vedação não esteja nomeada: o rol aberto a alcança.',
    macete: 'O rol termina com “qualquer outra condição” — se o texto termina ABERTO, a banca não pode fechá-lo.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 3,
    titulo: 'Vida, liberdade e segurança',
    sintese: 'Tri-lex: vida, liberdade e segurança pessoal',
    bloco: 'Civis e jurídicos',
    resumo: 'Todo ser humano tem direito à vida, à liberdade e à segurança pessoal.',
    prova:
      'É o artigo mais curto e um dos mais cobrados: memorize o TRIO exato. É a base remota do direito à vida, do habeas corpus e de todo o art. 5º da CF/88.',
    pegadinha:
      'A troca campeã: “vida, liberdade e PROPRIEDADE” — fórmula do filósofo John Locke, não da DUDH. Também trocam “segurança pessoal” por “saúde” ou “moradia”.',
    exemplo:
      'Omissão do Estado diante de grupos armados que aterrorizam uma comunidade viola a “segurança pessoal” do art. 3º.',
    macete: 'V-L-S: Vida, Liberdade, Segurança. Se vier “propriedade”, é Locke — não é DUDH.',
    bancas: ['AOCP', 'Vunesp', 'Cebraspe'],
  },
  {
    n: 4,
    titulo: 'Proibição da escravidão',
    sintese: 'Escravidão proibida em todas as suas formas',
    bloco: 'Civis e jurídicos',
    resumo:
      'Ninguém será mantido em escravidão ou servidão; a escravidão e o tráfico de escravos são proibidos em todas as suas formas.',
    prova:
      'A expressão “EM TODAS AS SUAS FORMAS” é o ponto de ouro: alcança a escravidão contemporânea, a servidão por dívidas e o tráfico de pessoas. Conecte com o art. 5º, XLVII, da CF (não haverá trabalhos forçados, salvo condenação penal).',
    pegadinha:
      'Suavizar o absoluto: dizer que a Declaração admite trabalho forçado em alguma hipótese. A DUDH não abre exceção no art. 4º.',
    exemplo:
      'Resgate de trabalhadores submetidos a jornada exaustiva em confecção clandestina: aplicação direta do art. 4º e das convenções da OIT.',
    macete: 'Todas as formas = zero brechas. Escravidão não tem “modo de usar” permitido.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 5,
    titulo: 'Proibição da tortura',
    sintese: 'Sem tortura nem tratamento cruel ou degradante',
    bloco: 'Civis e jurídicos',
    resumo:
      'Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.',
    prova:
      'Proibição ABSOLUTA (jus cogens): não admite exceção de guerra, terrorismo ou emergência. O STF reconheceu o “estado de coisas inconstitucional” do sistema prisional (ADPF 347) exatamente nessa lógica. Decore o trio cruel–desumano–degradante.',
    pegadinha:
      'Admitir tortura “excepcional” (a hipotética bomba-relógio); ou dizer que a vedação alcança somente agentes públicos — protege-se também contra particulares.',
    exemplo:
      'Cela superlotada, sem higiene mínima: caracteriza tratamento degradante mesmo sem intenção específica de “torturar”.',
    macete: 'Tortura é nota zero: não existe justificativa que promova.',
    bancas: ['Cebraspe', 'FGV', 'FCC'],
  },
  {
    n: 6,
    titulo: 'Personalidade jurídica universal',
    sintese: 'Pessoa perante a lei, em todos os lugares',
    bloco: 'Civis e jurídicos',
    resumo:
      'Todo ser humano tem o direito de ser, em todos os lugares, reconhecido como pessoa perante a lei.',
    prova:
      'Cobram a UNIVERSALIDADE: o reconhecimento não depende do país, da nacionalidade ou de documentos. É a semente da inviolabilidade do art. 5º, caput, da CF.',
    pegadinha:
      'Restringir o reconhecimento a nacionais ou residentes; confundir “personalidade jurídica” (ser sujeito de direitos) com “capacidade de agir” (exercê-los).',
    exemplo:
      'Refugiado sem documentos continua sendo “pessoa perante a lei”: pode figurar em processo, contratar e acionar o Judiciário.',
    macete: 'RG universal: onde houver uma lei, você é pessoa.',
    bancas: ['Vunesp', 'AOCP'],
  },
  {
    n: 7,
    titulo: 'Igualdade perante a lei',
    sintese: 'Igualdade + igual proteção da lei',
    bloco: 'Civis e jurídicos',
    resumo:
      'Todos são iguais perante a lei e têm direito, sem qualquer distinção, a igual proteção da lei contra todo tipo de discriminação e contra qualquer incitação à discriminação.',
    prova:
      'São DUAS proteções: igualdade perante a lei + igual proteção da lei (contra a discriminação e contra quem INCITA a discriminar). Fundamento da isonomia do art. 5º, caput, da CF.',
    pegadinha:
      'Mencionar apenas uma das duas vertentes; ou afirmar que a intensidade da proteção varia conforme a condição social — o “sem qualquer distinção” é absoluto.',
    exemplo:
      'Campanha que estimule boicote a determinado grupo religioso viola a vedação à “incitação à discriminação”, não apenas a igualdade formal.',
    macete: 'Igualdade em dobro: ser igual E ser protegido igualmente.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 8,
    titulo: 'Recurso efetivo aos tribunais nacionais',
    sintese: 'Remédio judicial primeiro no próprio país',
    bloco: 'Civis e jurídicos',
    resumo:
      'Toda pessoa tem direito a recurso efetivo perante os tribunais nacionais competentes contra atos que violem os direitos fundamentais que lhe sejam reconhecidos pela constituição ou pela lei.',
    prova:
      'O direito internacional exige primeiro o esgotamento da via INTERNA: só depois se cogita de jurisdição internacional. Conecte com os remédios constitucionais do art. 5º, LXVIII e ss., da CF.',
    pegadinha:
      'Afirmar que a vítima provoca DIRETAMENTE um tribunal internacional, sem esgotar os tribunais nacionais — regra clássica invertida pela FGV.',
    exemplo:
      'Mandado de segurança contra ato de autoridade que impede colação de grau: recurso nacional típico da lógica do art. 8º.',
    macete: 'Antes de reclamar em Genebra, bata na porta do juiz daqui.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 9,
    titulo: 'Proibição de prisão arbitrária',
    sintese: 'Sem prisão, detenção ou exílio arbitrários',
    bloco: 'Civis e jurídicos',
    resumo: 'Ninguém será arbitrariamente preso, detido ou exilado.',
    prova:
      'A palavra-chave é ARBITRARIAMENTE: a DUDH não veda a prisão legal (flagrante, ordem judicial fundamentada), veda a prisão sem base legal. Cobram também a proibição do exílio arbitrário.',
    pegadinha:
      'Suprimir “arbitrariamente” e transformar o artigo em “ninguém será preso” — a generalização fraudada é o truque clássico do Cebraspe.',
    exemplo:
      'Condução coercitiva de moradores “por atitude suspeita”, sem flagrante nem mandado: arbitrariedade pura, vedada pelo art. 9º.',
    macete: 'O problema não é prender: é prender no arbítrio.',
    bancas: ['Cebraspe', 'AOCP'],
  },
  {
    n: 10,
    titulo: 'Tribunal independente e imparcial',
    sintese: 'Audiência justa e pública',
    bloco: 'Civis e jurídicos',
    resumo:
      'Toda pessoa tem direito, em plena igualdade, a uma audiência justa e pública por um tribunal independente e imparcial, na determinação de seus direitos e obrigações e de qualquer acusação penal contra ela dirigida.',
    prova:
      'A quádrupla da justiça: audiência JUSTA + PÚBLICA, tribunal INDEPENDENTE + IMPARCIAL. Origem do juiz natural, do contraditório e da ampla defesa (art. 5º, LIV e LV, CF).',
    pegadinha:
      'Trocar “imparcial” por “rápido”; ou dizer que a publicidade da audiência depende da vontade do acusado — em regra, ela é PÚBLICA.',
    exemplo:
      'Caso julgado por magistrado parente de uma das partes viola a imparcialidade exigida pelo art. 10 (suspeição do CPP).',
    macete: 'J-P-I-I: audiência Justa e Pública, tribunal Independente e Imparcial.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 11,
    titulo: 'Presunção de inocência e legalidade penal',
    sintese: 'Inocente até prova + sem lei anterior não há crime',
    bloco: 'Civis e jurídicos',
    resumo:
      '1) Todo acusado de ato delituoso presume-se inocente até que sua culpabilidade tenha sido legalmente provada em julgamento público, com todas as garantias necessárias à defesa. 2) Ninguém será condenado por ato ou omissão que, no momento da prática, não constituía delito perante o direito nacional ou internacional; tampouco se imporá pena mais grave do que a aplicável à época.',
    prova:
      'Dois blocos sempre cobrados: presunção de inocência (que, no Brasil, vale até o trânsito em julgado) e a irretroatividade da lei penal MAIS GRAVOSA (nullum crimen, nulla poena sine lege).',
    pegadinha:
      'Dizer que a presunção se esgota na sentença de 1º grau; autorizar pena posterior mais severa ao fato anterior; ou permitir julgamento sigiloso como regra — o artigo exige julgamento PÚBLICO.',
    exemplo:
      'Conduta lícita em 1947, criminalizada por lei de 1948: quem agiu em 1947 não pode ser condenado; se a lei posterior for mais benéfica, retroage (abolitio criminis).',
    macete: 'Sem lei anterior, sem condenação. Inocente até a prova, público até o fim.',
    bancas: ['Cebraspe', 'FGV', 'AOCP'],
  },
  {
    n: 12,
    titulo: 'Privacidade, honra e reputação',
    sintese: 'Vida privada, casa, carta e fama',
    bloco: 'Civis e jurídicos',
    resumo:
      'Ninguém sofrerá interferências arbitrárias na sua vida privada, na sua família, no seu domicílio ou na sua correspondência, nem ataques à sua honra e reputação. Toda pessoa tem direito à proteção da lei contra tais interferências ou ataques.',
    prova:
      'A banca testa o rol COMPLETO: vida privada, família, domicílio, correspondência + HONRA e REPUTAÇÃO (as duas “esquecidas” que viram pegadinha). É a matriz do art. 5º, X a XII, da CF.',
    pegadinha:
      'Listar só “vida privada, família, domicílio e correspondência” — se faltar honra e reputação, a assertiva pela metade costuma ser o gabarito do erro. E atenção: o filtro é a interferência ARBITRÁRIA (interceptação judicial é lícita).',
    exemplo:
      'Interceptação telefônica sem autorização judicial quebra o núcleo protegido (no Brasil, só por ordem judicial — art. 5º, XII, CF).',
    macete: 'Casa, carta, família e FAMA: minha vida privada ninguém reclama.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 13,
    titulo: 'Liberdade de movimento e residência',
    sintese: 'Circular dentro, sair e regressar',
    bloco: 'Civis e jurídicos',
    resumo:
      '1) Toda pessoa tem direito à liberdade de locomoção e residência dentro das fronteiras de cada Estado. 2) Toda pessoa tem o direito de deixar qualquer país, inclusive o próprio, e de regressar ao seu país.',
    prova:
      'Dois planos: interno (circular e residir livremente) e externo (SAIR de qualquer país — inclusive o seu próprio — e REGRESSAR ao seu país). O retorno é ao SEU país, tema ligado a exílio e banimento.',
    pegadinha:
      'Subordinar a saída do país a autorização estatal; ou dizer que se pode regressar a qualquer país — o direito de retorno vale apenas para o país da própria pessoa.',
    exemplo:
      'Retenção do passaporte como forma de coagir pagamento de dívida cível: restrição arbitrária do direito de sair do país.',
    macete: 'Dentro: vai e mora. Fora: sai e volta — mas só volta ao seu.',
    bancas: ['Cebraspe', 'AOCP'],
  },
  {
    n: 14,
    titulo: 'Direito de asilo',
    sintese: 'Procurar e gozar asilo (caso de perseguição)',
    bloco: 'Civis e jurídicos',
    resumo:
      '1) Toda pessoa vítima de perseguição tem o direito de procurar e de gozar asilo em outros países. 2) Este direito não pode ser invocado em caso de perseguição legitimamente motivada por crime de direito comum ou por atos contrários aos objetivos e princípios das Nações Unidas.',
    prova:
      'A MAIS PEGADOSA DA DECLARAÇÃO: a DUDH garante BUSCAR e GOZAR asilo — não garante OBTER a concessão, que é ato soberano do Estado. Decore as duas exceções do §2º: crime de direito comum e atos contrários à ONU.',
    pegadinha:
      'Trocar “procurar e gozar” por “obter” ou “exigir a concessão”; colocar CRIMES POLÍTICOS entre as exceções do §2º — a exceção é o crime de direito comum (justamente o oposto do político).',
    exemplo:
      'Jornalista perseguido pelo regime pode pedir e fruir asilo no país vizinho; já o estelionatário foragido não invoca o art. 14, pois foge de crime de direito comum.',
    macete: 'Procurar é direito seu; conceder é do Estado. Crime comum fica de fora.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 15,
    titulo: 'Direito a uma nacionalidade',
    sintese: 'Ter, manter e mudar de nacionalidade',
    bloco: 'Civis e jurídicos',
    resumo:
      '1) Todo ser humano tem direito a uma nacionalidade. 2) Ninguém será arbitrariamente privado da sua nacionalidade nem do direito de mudar de nacionalidade.',
    prova:
      'Três verbos: TER (direito originário a uma nacionalidade), MANTER (vedação à privação ARBITRÁRIA — combate à apatridia) e MUDAR (liberdade de renunciar e adquirir outra).',
    pegadinha:
      'Afirmar que a nacionalidade é imutável; ou admitir privação automática “por razões de segurança” sem qualificar a arbitrariedade — o filtro do artigo é exatamente a arbitrariedade.',
    exemplo:
      'Lei que retire automaticamente a nacionalidade de quem se casa com estrangeiro cria apátridas em massa: arbitrariedade vedada pelo §2º.',
    macete: 'Nacionalidade é 3 em 1: nasce com você, ninguém tira no grito e você pode trocar.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 16,
    titulo: 'Casamento e proteção da família',
    sintese: 'Casar com consentimento; família protegida',
    bloco: 'Civis e jurídicos',
    resumo:
      '1) Homens e mulheres em plena idade, sem restrição de raça, nacionalidade ou religião, têm direito a casar e a fundar família, com direitos iguais no casamento, durante o casamento e por ocasião de sua dissolução. 2) O casamento só pode ser celebrado com o consentimento livre e pleno dos futuros cônjuges. 3) A família é o elemento natural e fundamental da sociedade e tem direito à proteção da sociedade e do Estado.',
    prova:
      'Frase camisa 10: “A FAMÍLIA É O ELEMENTO NATURAL E FUNDAMENTAL DA SOCIEDADE”. Cobram também o consentimento LIVRE e PLENO (que veda casamento forçado) e a igualdade de direitos inclusive na DISSOLUÇÃO.',
    pegadinha:
      'Atribuir a frase do “elemento natural e fundamental” ao indivíduo ou ao Estado; dispensar o consentimento de um dos cônjuges; ou limitar a igualdade ao período “durante” o casamento — vale também na dissolução.',
    exemplo:
      'Casamento infantil arranjado pelas famílias: ausência de consentimento livre e pleno — violação direta do §2º.',
    macete: 'Família = fundamento da sociedade. Casamento = dois “SIM”, do altar ao divórcio.',
    bancas: ['FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 17,
    titulo: 'Direito de propriedade',
    sintese: 'Propriedade individual e coletiva',
    bloco: 'Civis e jurídicos',
    resumo:
      '1) Toda pessoa tem direito à propriedade, individual ou coletivamente. 2) Ninguém será arbitrariamente privado da sua propriedade.',
    prova:
      'Dois pontos de ouro: a propriedade admite dupla titularidade (INDIVIDUAL ou COLETIVA); e o óbice é à privação ARBITRÁRIA — a desapropriação legal, por interesse público e com indenização, não viola a DUDH.',
    pegadinha:
      'Enunciar a propriedade como direito ABSOLUTO; ou dizer que qualquer desapropriação é proibida. Repare no padrão da Declaração: só a arbitrariedade é vedada.',
    exemplo:
      'Desapropriar imóvel para construir hospital, com justa indenização, respeita o art. 17; confiscar terras de opositores políticos, não.',
    macete: 'Propriedade tem dono, mas não é dona de tudo: quem vigia é o “arbitrariamente”.',
    bancas: ['AOCP', 'Cebraspe'],
  },
  {
    n: 18,
    titulo: 'Liberdade de pensamento, consciência e religião',
    sintese: 'Crer, mudar de fé e manifestá-la',
    bloco: 'Civis e jurídicos',
    resumo:
      'Toda pessoa tem direito à liberdade de pensamento, de consciência e de religião; este direito inclui a liberdade de mudar de religião ou convicção, bem como a de manifestá-la, só ou em comunidade, em público ou em privado, pelo ensino, pela prática, pelo culto e pela observância.',
    prova:
      'Garante inclusive MUDAR de religião (laicidade em sentido forte) e manifestar a fé PUBLICAMENTE. Cobram o quarteto de manifestação: ensino, prática, culto e observância.',
    pegadinha:
      'Restringir a manifestação ao âmbito privado; negar o direito de mudança religiosa (punição à “apostasia” é incompatível com o art. 18).',
    exemplo:
      'Servidor guardião do sábado dispensado de escalas nesse dia: acomodação razoável inspirada no art. 18.',
    macete: 'Pensar, crer, trocar e praticar — na praça ou em casa.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 19,
    titulo: 'Liberdade de opinião e expressão',
    sintese: 'Opinar e informar sem fronteiras',
    bloco: 'Civis e jurídicos',
    resumo:
      'Toda pessoa tem direito à liberdade de opinião e expressão; este direito inclui a liberdade de, sem interferência, ter opiniões e de procurar, receber e difundir informações e ideias por quaisquer meios de expressão e independentemente de fronteiras.',
    prova:
      'Três verbos-irmãos: PROCURAR, RECEBER e DIFUNDIR informações — o destinatário também é titular do direito. A cláusula “independentemente de fronteiras” é mantra de prova.',
    pegadinha:
      'Reduzir a liberdade a “emitir” opiniões, esquecendo buscar e receber; ou restringir a circulação de ideias ao território nacional — o texto é transfronteiriço.',
    exemplo:
      'Bloqueio estatal de jornais estrangeiros na internet viola o direito de receber informações sem consideração de fronteiras.',
    macete: 'Boca e ouvido sem passaporte: falar, ouvir e espalhar pelo mundo.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 20,
    titulo: 'Liberdade de reunião e associação',
    sintese: 'Reunir e associar-se — ou não',
    bloco: 'Políticos',
    resumo:
      '1) Toda pessoa tem direito à liberdade de reunião e de associação pacíficas. 2) Ninguém pode ser obrigado a fazer parte de uma associação.',
    prova:
      'A metade esquecida é o §2º: a liberdade NEGATIVA de associação (não ser compelido a juntar-se). E atenção ao adjetivo: as reuniões e associações protegidas são as PACÍFICAS.',
    pegadinha:
      'Compatibilizar a DUDH com associação profissional OBRIGATÓRIA; ou suprimir o “pacíficas” para justificar a repressão de marchas ordeiras.',
    exemplo:
      'Lei que obrigue todo jornalista a filiar-se a uma associação oficial fere o §2º do art. 20.',
    macete: 'Juntar a todos é direito; juntar VOCÊ à força é violação.',
    bancas: ['AOCP', 'Cebraspe'],
  },
  {
    n: 21,
    titulo: 'Participação política e função pública',
    sintese: 'Governar, concorrer e votar',
    bloco: 'Políticos',
    resumo:
      '1) Toda pessoa tem o direito de participar do governo de seu país, diretamente ou por representantes livremente escolhidos. 2) Toda pessoa tem direito de igual acesso às funções públicas do seu país. 3) A vontade do povo é a base da autoridade do poder público; deve exprimir-se em eleições periódicas e genuínas, por sufrágio universal e igual, e por voto secreto ou procedimento de votação livre equivalente.',
    prova:
      'O §3º é o queridinho: “a vontade do povo é a BASE da autoridade do poder público” + eleições periódicas, sufrágio UNIVERSAL e IGUAL e voto SECRETO. O §2º (igual acesso a funções públicas) é o fundamento internacional dos concursos.',
    pegadinha:
      'Trocar sufrágio “universal e igual” por “maioritário” ou admitir voto censitário (por renda); dizer que estrangeiros têm igual acesso às funções públicas do país — o texto protege o acesso às funções do SEU país.',
    exemplo:
      'Lei que restrinja o voto a quem possui curso superior afronta o sufrágio universal e igual do §3º.',
    macete: 'Povo na base, urna no jogo: periódica, universal, igual e secreta.',
    bancas: ['FCC', 'Cebraspe', 'FGV'],
  },
  {
    n: 22,
    titulo: 'Segurança social e direitos sociais',
    sintese: 'A mãe dos direitos sociais',
    bloco: 'Econômicos, sociais e culturais',
    resumo:
      'Toda pessoa, como membro da sociedade, tem direito à segurança social e à realização, pelo esforço nacional e pela cooperação internacional e de acordo com a organização e os recursos de cada Estado, dos direitos econômicos, sociais e culturais indispensáveis à sua dignidade e ao livre desenvolvimento da sua personalidade.',
    prova:
      'É a PORTA DE ENTRADA dos direitos econômicos, sociais e culturais: ligam-se à dignidade, exigem ESFORÇO NACIONAL + COOPERAÇÃO INTERNACIONAL e respeitam os RECURSOS de cada Estado (realização PROGRESSIVA — palavra que a FGV adora).',
    pegadinha:
      'Afirmar exigibilidade imediata e idêntica à dos direitos civis, desligada dos recursos estatais; ou cortar a “cooperação internacional” da fórmula do artigo.',
    exemplo:
      'País em desenvolvimento que adere a programa global de vacinação usa exatamente a cooperação internacional prevista no art. 22.',
    macete: 'Social no peito, recurso no bolso: dignidade com esforço nacional e mão internacional.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 23,
    titulo: 'Trabalho, salário igual e sindicatos',
    sintese: 'Trabalho digno + liberdade sindical',
    bloco: 'Econômicos, sociais e culturais',
    resumo:
      '1) Toda pessoa tem direito ao trabalho, à livre escolha do trabalho, a condições equitativas e satisfatórias de trabalho e à proteção contra o desemprego. 2) Toda pessoa, sem qualquer discriminação, tem direito a salário igual por trabalho igual. 3) Todo trabalhador tem direito a remuneração equitativa e satisfatória, que assegure a si e à família uma existência digna, complementada, se necessário, por outros meios de proteção social. 4) Toda pessoa tem direito a fundar sindicatos e a neles se filiar para a proteção de seus interesses.',
    prova:
      'Dupla clássica: “salário igual por trabalho igual” (equiparação — art. 5º, XXX, e art. 7º, XXXII, da CF) e o direito de FUNDAR e FILIAR-SE a sindicatos. A remuneração deve garantir “existência digna”, complementada por proteção social.',
    pegadinha:
      'Trocar “condições equitativas e satisfatórias” por “excelentes”; transformar a liberdade sindical em OBRIGAÇÃO de filiação (a DUDH garante o direito, não o dever).',
    exemplo:
      'Mulher que ganha menos que homem na mesma função e carga horária: violação direta do §2º — e da equiparação constitucional.',
    macete: 'Trabalho 4 estrelas: livre escolha, condições dignas, salário igual e sindicato.',
    bancas: ['FCC', 'AOCP', 'FGV'],
  },
  {
    n: 24,
    titulo: 'Descanso, lazer e férias remuneradas',
    sintese: 'Jornada limitada + férias pagas',
    bloco: 'Econômicos, sociais e culturais',
    resumo:
      'Toda pessoa tem direito ao descanso e ao lazer, especialmente a uma limitação razoável da duração do trabalho e a férias periódicas com direito a remuneração.',
    prova:
      'O trio cobrado: DESCANSO + LAZER + limitação razoável da jornada + FÉRIAS PERIÓDICAS REMUNERADAS. É a matriz do art. 7º, XV a XVII, da CF (jornada, repouso semanal e férias anuais acrescidas de 1/3).',
    pegadinha:
      'Converter as férias em “não remuneradas”; ou tratar o descanso como liberalidade concedida a critério do empregador.',
    exemplo:
      'Escala de 12 horas diárias sem folgas em atividade não essencial rompe a “limitação razoável” do art. 24.',
    macete: 'Trabalhou, descansou, viajou — com salário no bolso.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 25,
    titulo: 'Padrão de vida digno; maternidade e infância',
    sintese: 'Vida digna + cuidado especial a mãe e criança',
    bloco: 'Econômicos, sociais e culturais',
    resumo:
      '1) Toda pessoa tem direito a um padrão de vida capaz de assegurar a si e à sua família saúde e bem-estar, inclusive alimentação, vestuário, habitação, cuidados médicos e serviços sociais necessários, bem como direito à segurança no desemprego, na doença, na invalidez, na viuvez, na velhice ou em outros casos de perda dos meios de subsistência por circunstâncias independentes da sua vontade. 2) A maternidade e a infância têm direito a cuidados e assistência especiais. Todas as crianças, nascidas dentro ou fora do matrimônio, gozam da mesma proteção social.',
    prova:
      'O §2º é top de banca: igual proteção social aos filhos havidos DENTRO ou FORA do matrimônio (eco direto do art. 227, §6º, da CF). O §1º estrutura a seguridade social: saúde, alimentação, habitação, assistência e previdência.',
    pegadinha:
      'Distinguir filhos pelo estado civil dos pais (violado frontalmente pelo §2º); ou reduzir o padrão protegido ao “mínimo de sobrevivência” — o texto fala em saúde e bem-estar.',
    exemplo:
      'Negar pensão ou proteção previdenciária a filho nascido fora do casamento choca-se com o art. 25, §2º — e com a CF.',
    macete: 'Filho é filho — dentro ou fora do cartório. E vida digna é o combo completo.',
    bancas: ['Cebraspe', 'FGV', 'FCC', 'AOCP'],
  },
  {
    n: 26,
    titulo: 'Direito à educação',
    sintese: 'Educação gratuita, obrigatória e por mérito',
    bloco: 'Econômicos, sociais e culturais',
    resumo:
      '1) Direito à instrução, GRATUITA pelo menos nos graus elementar e fundamental; a instrução elementar é OBRIGATÓRIA; a técnico-profissional, acessível em geral; e a superior igualmente acessível a todos EM FUNÇÃO DO MÉRITO. 2) A instrução será orientada para o pleno desenvolvimento da personalidade humana, para o respeito aos direitos humanos e para a compreensão, a tolerância e a amizade entre nações e grupos. 3) Os pais têm direito PRIORITÁRIO de escolher o gênero de instrução a ser ministrada aos filhos.',
    prova:
      'Tabela decorável: GRATUITA → elementar e fundamental; OBRIGATÓRIA → elementar; TÉCNICA → acessível em geral; SUPERIOR → pelo mérito. E o §3º: a PRIORIDADE na escolha da educação é dos PAIS — não do Estado.',
    pegadinha:
      'Dizer que o ensino superior deve ser gratuito ou obrigatório; inverter a prioridade do §3º atribuindo-a ao Estado; esquecer que a gratuidade mínima cobre DOIS graus (elementar E fundamental).',
    exemplo:
      'Ingresso universitário fundado em mérito dialoga com o §1º; já um Estado que impusesse a escola contra a escolha fundamentada dos pais trombaria com o §3º.',
    macete: 'Educação em escadinha: grátis na base, técnica aberta, superior com mérito — e os pais apontam o caminho.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp', 'AOCP'],
  },
  {
    n: 27,
    titulo: 'Vida cultural e proteção do autor',
    sintese: 'Cultura para todos, autor protegido',
    bloco: 'Econômicos, sociais e culturais',
    resumo:
      '1) Toda pessoa tem o direito de participar livremente da vida cultural da comunidade, de fruir das artes e de participar do progresso científico e dos benefícios que dele resultam. 2) Toda pessoa tem direito à proteção dos interesses morais e materiais de qualquer produção científica, literária ou artística de que seja autora.',
    prova:
      'Súmula de prova: DIREITOS AUTORAIS são direitos humanos (§2º — interesses MORAIS e MATERIAIS). O §1º garante ACESSO: participar da vida cultural, fruir das artes e compartilhar o progresso científico.',
    pegadinha:
      'Negar que a propriedade intelectual integre a DUDH; ou reduzir o §1º à “apreciação passiva” — há direito de PARTICIPAR do progresso científico.',
    exemplo:
      'Pesquisadora que tem o artigo plagiado invoca o §2º; comunidade com museus de acesso gratuito realiza o §1º.',
    macete: 'Entrar no museu é direito; assinar a obra, também.',
    bancas: ['FGV', 'AOCP'],
  },
  {
    n: 28,
    titulo: 'Direito a uma ordem social e internacional',
    sintese: 'Ordem que realize os direitos',
    bloco: 'Cláusulas finais',
    resumo:
      'Toda pessoa tem direito a uma ordem social e internacional na qual os direitos e liberdades estabelecidos na presente Declaração possam ser plenamente realizados.',
    prova:
      'Ponte entre direitos individuais e coletivos: a DUDH exige um AMBIENTE nacional e internacional de plena realização — leitura que fundamenta a chamada dimensão solidarista (3ª geração).',
    pegadinha:
      'Lê-lo como mera declaração lírica, sem conteúdo normativo; ou reduzi-lo à competência operacional do Conselho de Segurança — a ordem do art. 28 é estrutural, não militar.',
    exemplo:
      'Regimes de cooperação para o desenvolvimento e a manutenção da paz buscam a “ordem internacional” favorável desenhada pelo art. 28.',
    macete: 'O art. 28 é o palco: sem palco, os outros direitos não sobem ao tablado.',
    bancas: ['FGV'],
  },
  {
    n: 29,
    titulo: 'Deveres e limitações',
    sintese: 'Deveres comunitários + limites legais',
    bloco: 'Cláusulas finais',
    resumo:
      '1) Toda pessoa tem deveres perante a comunidade, sem a qual não é possível o livre e pleno desenvolvimento da sua personalidade. 2) No exercício de seus direitos e liberdades, toda pessoa estará sujeita apenas às limitações determinadas pela lei, com o único fim de assegurar o devido reconhecimento e respeito dos direitos dos outros e de satisfazer às justas exigências da moral, da ordem pública e do bem-estar geral numa sociedade democrática. 3) Em nenhum caso esses direitos poderão ser exercidos em oposição aos fins e princípios das Nações Unidas.',
    prova:
      'O antídoto contra o “absolutismo de direitos”: DEVERES comunitários + LIMITAÇÕES apenas por LEI e com fim legítimo (direitos alheios, moral, ordem pública e bem-estar geral numa sociedade DEMOCRÁTICA). E nunca contra os fins da ONU.',
    pegadinha:
      'Afirmar que os direitos da DUDH são absolutos; admitir limitação por mero ato administrativo (o filtro é a LEI); ou suprimir a cláusula da “sociedade democrática”.',
    exemplo:
      'Lei que pune discurso de ódio limita a liberdade de expressão a partir do §2º: protege direitos de terceiros e o bem-estar de uma sociedade democrática.',
    macete: 'Direito com rédea curta: lei, respeito ao próximo, democracia — e a ONU como teto.',
    bancas: ['Cebraspe', 'FGV'],
  },
  {
    n: 30,
    titulo: 'Cláusula antiabuso',
    sintese: 'Nada autoriza destruir os direitos',
    bloco: 'Cláusulas finais',
    resumo:
      'Nenhuma disposição da presente Declaração pode ser interpretada de forma a conferir a qualquer Estado, grupo ou pessoa o direito de se dedicar a alguma atividade ou de praticar algum ato destinado à destruição de quaisquer dos direitos e liberdades nela estabelecidos.',
    prova:
      'Chave de leitura FINAL: escudo contra instrumentalizações da própria Declaração (Estado autoritário, grupo extremista ou indivíduo). Cobram o trio de destinatários: ESTADO, GRUPO e PESSOA.',
    pegadinha:
      'Restringir a cláusula apenas aos Estados; ou admitir interpretações “evolutivas” que esvaziem direitos em nome de um suposto interesse público — o art. 30 barra exatamente isso.',
    exemplo:
      'Partido que usa as liberdades civis para organizar a supressão das eleições não pode se defender à sombra da DUDH: o art. 30 puxa o tapete.',
    macete: 'O art. 30 é o cadeado: ninguém derruba a casa usando a chave da casa.',
    bancas: ['FGV', 'Cebraspe', 'FCC'],
  },
];
