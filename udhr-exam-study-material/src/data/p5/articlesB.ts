import type { Artigo } from '../shared';

const ADO = 'Adoção';
const EDU = 'Educação, cultura, esporte e lazer';
const TRA = 'Profissionalização e trabalho';
const PRV = 'Prevenção';

export const artigosB: Artigo[] = [
  {
    n: 47,
    titulo: 'Sentença e novo registro civil',
    sintese: 'Vínculo por sentença; cancela registro antigo',
    bloco: ADO,
    destaque: true,
    resumo:
      'O vínculo da adoção constitui-se por SENTENÇA JUDICIAL, que será inscrita no registro civil mediante mandado, do qual não se fornecerá certidão. §1º A inscrição consignará o nome dos adotantes como pais, bem como o nome de seus ascendentes. §2º O mandado judicial será arquivado, CANCELANDO-SE o registro original do adotado. §5º A sentença conferirá ao adotado o NOME do adotante e, a pedido de qualquer deles, poderá determinar a modificação do PRENOME. §6º Se a modificação do prenome for requerida pelo adotante, é obrigatória a oitiva do adotando, observado o art. 28, §§1º e 2º. §7º A adoção produz seus efeitos A PARTIR DO TRÂNSITO EM JULGADO da sentença, EXCETO na hipótese de adoção póstuma (art. 42, §6º), caso em que terá FORÇA RETROATIVA À DATA DO ÓBITO. §8º O processo relativo à adoção e outros a ele relacionados serão mantidos em arquivo, admitindo-se seu armazenamento em microfilme ou por outros meios, garantida a sua conservação para consulta a qualquer tempo.',
    prova:
      'Três pontos: a adoção se constitui por SENTENÇA (jamais por escritura ou acordo); o registro original é CANCELADO e não se fornece certidão do mandado (sigilo); e a regra dos efeitos — trânsito em julgado, salvo a póstuma, que RETROAGE à data do óbito (fundamental para a sucessão).',
    pegadinha:
      'Admitir adoção por escritura pública (impossível no ECA); dizer que o registro antigo é apenas averbado (é cancelado); ou aplicar a retroatividade a toda adoção — só na póstuma.',
    exemplo:
      'Adotante que faleceu após manifestar inequívoca vontade tem a sentença retroagindo ao óbito: o adotado herda como filho.',
    macete: 'Sentença → novo registro, o velho morre. Efeito no trânsito; póstuma volta ao óbito.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 48,
    titulo: 'Direito à origem biológica',
    sintese: 'Acesso ao processo após os 18',
    bloco: ADO,
    destaque: true,
    resumo:
      'O adotado tem direito de CONHECER SUA ORIGEM BIOLÓGICA, bem como de obter ACESSO IRRESTRITO ao processo no qual a medida foi aplicada e seus eventuais incidentes, APÓS COMPLETAR 18 ANOS. Parágrafo único: o acesso ao processo poderá ser também deferido ao ADOLESCENTE, a seu pedido, assegurada ORIENTAÇÃO e ASSISTÊNCIA JURÍDICA E PSICOLÓGICA.',
    prova:
      'O marco é 18 anos para o acesso IRRESTRITO — mas o parágrafo único autoriza o acesso antes disso, a pedido do adolescente, com orientação e assistência jurídica e psicológica. É a internalização do art. 8º da Convenção da ONU (identidade — Parte 4).',
    pegadinha:
      'Afirmar que o acesso é vedado em absoluto antes dos 18 anos (o parágrafo único permite ao adolescente, com acompanhamento); ou negar o direito à origem biológica em nome do sigilo da adoção.',
    exemplo:
      'Adolescente de 16 anos pede para conhecer sua história: o juiz pode deferir, com apoio da equipe técnica.',
    macete: '18 = acesso livre. Antes disso, só o adolescente e com equipe do lado.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 49,
    titulo: 'Morte dos adotantes',
    sintese: 'Não restabelece o poder familiar anterior',
    bloco: ADO,
    resumo:
      'A morte dos adotantes NÃO RESTABELECE o poder familiar dos pais naturais.',
    prova:
      'Consequência lógica da irrevogabilidade (art. 39, §1º) e do rompimento de vínculos (art. 41): morto o adotante, abre-se tutela ou nova colocação — jamais o retorno automático aos pais biológicos.',
    pegadinha:
      'Dizer que os pais biológicos “reassumem” o filho com a morte dos adotantes.',
    exemplo:
      'Falecidos os pais adotivos, a criança é colocada sob tutela de parente da família adotiva ou em nova família substituta.',
    macete: 'Morreu o adotante? Não volta ao passado. Adoção não tem marcha-ré.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 50,
    titulo: 'Cadastros de adoção',
    sintese: 'Cadastro + as 3 exceções do §13',
    bloco: ADO,
    destaque: true,
    resumo:
      'A autoridade judiciária manterá, em cada comarca ou foro regional, um REGISTRO DE CRIANÇAS E ADOLESCENTES em condições de serem adotados e outro de PESSOAS INTERESSADAS na adoção. §13 Somente poderá ser deferida adoção em favor de candidato domiciliado no Brasil NÃO CADASTRADO previamente nos termos desta Lei quando: I – se tratar de pedido de ADOÇÃO UNILATERAL; II – for formulada por PARENTE com o qual a criança ou adolescente mantenha vínculos de afinidade e afetividade; III – oriundo o pedido de quem detém a TUTELA OU GUARDA LEGAL de criança MAIOR DE 3 ANOS ou adolescente, desde que o lapso de tempo de convivência comprove a fixação de laços de afinidade e afetividade, e não seja constatada a ocorrência de má-fé ou qualquer das situações previstas nos arts. 237 ou 238 desta Lei.',
    prova:
      'A regra é o CADASTRO; o §13 traz as três exceções taxativas. Decore o inciso III inteiro: tutela ou guarda LEGAL (não de fato) + criança MAIOR DE 3 ANOS + tempo de convivência que comprove os laços + ausência de má-fé. Há ainda o Sistema Nacional de Adoção e Acolhimento (SNA), do CNJ.',
    pegadinha:
      'Ampliar as exceções (dizer que “qualquer pessoa com vínculo afetivo” fura a fila); trocar a idade do inciso III (é maior de 3 anos); ou aceitar guarda DE FATO no lugar da guarda legal.',
    exemplo:
      'Padrasto que adota o enteado (adoção unilateral) não precisa estar no cadastro — exceção do inciso I.',
    macete: 'Fila é regra. Fura a fila só: Unilateral · Parente com vínculo · Guarda/tutela legal de +3 anos.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 51,
    titulo: 'Adoção internacional — conceito',
    sintese: 'Residência habitual em país diverso',
    bloco: ADO,
    destaque: true,
    resumo:
      'Considera-se ADOÇÃO INTERNACIONAL aquela na qual o pretendente possui RESIDÊNCIA HABITUAL EM PAÍS-PARTE DA CONVENÇÃO DE HAIA de 1993, e deseja adotar criança em outro país-parte. §1º A adoção internacional será deferida se: I – restou comprovado que a colocação em família adotiva é a solução adequada; II – foram esgotadas todas as possibilidades de colocação em família adotiva BRASILEIRA, com o esgotamento das tentativas no cadastro nacional; III – em se tratando de adoção de adolescente, este foi consultado e está preparado, mediante parecer da equipe interprofissional, e seu consentimento foi colhido em audiência. §2º Os brasileiros RESIDENTES NO EXTERIOR terão PREFERÊNCIA aos estrangeiros nos casos de adoção internacional.',
    prova:
      'Critério de definição: RESIDÊNCIA HABITUAL do pretendente, e não a nacionalidade. Some a subsidiariedade (esgotar o cadastro nacional — art. 21, “b”, da Convenção da ONU) e a preferência dos brasileiros residentes no exterior (§2º).',
    pegadinha:
      'Definir adoção internacional pela NACIONALIDADE do adotante — brasileiro residente no exterior faz adoção internacional; estrangeiro residente no Brasil faz adoção nacional. Esta é a pegadinha mais comum do tema.',
    exemplo:
      'Casal de brasileiros que mora em Portugal e adota criança no Brasil realiza adoção INTERNACIONAL, com preferência sobre pretendentes estrangeiros.',
    macete: 'Vale onde MORA, não o passaporte. E brasileiro lá fora passa na frente do estrangeiro.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 52,
    titulo: 'Procedimento da adoção internacional',
    sintese: 'Autoridades Centrais, CEJAI e laudos',
    bloco: ADO,
    resumo:
      'A adoção internacional observará procedimento próprio: o pretendente se habilita perante a AUTORIDADE CENTRAL do país de residência, que emite relatório e certificado de habilitação; o dossiê é encaminhado à Autoridade Central Federal brasileira e à Autoridade Central Estadual (CEJAI — Comissão Estadual Judiciária de Adoção Internacional), que expede o LAUDO DE HABILITAÇÃO, com validade máxima de 1 ANO. Somente organismos credenciados e sem fins lucrativos podem intermediar. Arts. 52-A a 52-D tratam da Convenção de Haia de 1993, da atuação das Autoridades Centrais e do não reconhecimento de adoções realizadas em desacordo.',
    prova:
      'Cobram-se os atores: Autoridade Central Federal (Brasil), Autoridades Centrais Estaduais / CEJAI e organismos credenciados SEM FINS LUCRATIVOS. Validade do laudo: 1 ano. Base convencional: Convenção de Haia de 1993 (Decreto 3.087/1999).',
    pegadinha:
      'Admitir intermediação por agência privada com fins lucrativos; ou dizer que a habilitação estrangeira é suficiente, dispensando o crivo brasileiro.',
    exemplo:
      'Casal habilitado na Itália tem o dossiê analisado pela CEJAI do estado onde está a criança antes de qualquer contato.',
    macete: 'Autoridade Central lá + CEJAI aqui + organismo sem lucro. Laudo vale 1 ano.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 53,
    titulo: 'Direito à educação',
    sintese: 'Os 5 incisos do direito do aluno',
    bloco: EDU,
    destaque: true,
    resumo:
      'A criança e o adolescente têm direito à EDUCAÇÃO, visando ao PLENO DESENVOLVIMENTO DE SUA PESSOA, preparo para o EXERCÍCIO DA CIDADANIA e QUALIFICAÇÃO PARA O TRABALHO, assegurando-se-lhes: I – igualdade de condições para o acesso e permanência na escola; II – direito de ser respeitado por seus educadores; III – direito de CONTESTAR CRITÉRIOS AVALIATIVOS, podendo recorrer às instâncias escolares superiores; IV – direito de organização e participação em ENTIDADES ESTUDANTIS; V – acesso à escola pública e gratuita PRÓXIMA DE SUA RESIDÊNCIA, garantindo-se vagas no mesmo estabelecimento a IRMÃOS que frequentem a mesma etapa ou ciclo de ensino da educação básica. Parágrafo único: é direito dos PAIS ou responsáveis ter ciência do processo pedagógico, bem como participar da definição das propostas educacionais. Art. 53-A: é dever da instituição de ensino, clubes e agremiações recreativas comunicar ao Conselho Tutelar casos de maus-tratos, reiteração de faltas, evasão e elevados níveis de repetência.',
    prova:
      'A tríade finalística (desenvolvimento + cidadania + trabalho) e os cinco incisos. Os mais cobrados: III (contestar avaliação e recorrer) e V (escola próxima + vaga para IRMÃOS na mesma unidade). O parágrafo único garante aos PAIS participação pedagógica.',
    pegadinha:
      'Negar ao aluno o direito de contestar nota; suprimir a garantia de vaga para irmãos; ou dizer que a escolha da escola pública é livre (o direito é à escola PRÓXIMA da residência).',
    exemplo:
      'Mãe que consegue transferir a filha para a mesma escola do irmão, na mesma etapa de ensino, exerce o inciso V.',
    macete: 'Acesso · respeito · contestar nota · grêmio · escola perto (com irmãos juntos).',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 54,
    titulo: 'Deveres do Estado na educação',
    sintese: 'Direito público subjetivo ao ensino obrigatório',
    bloco: EDU,
    destaque: true,
    resumo:
      'É DEVER DO ESTADO assegurar: I – ensino fundamental, OBRIGATÓRIO e GRATUITO, inclusive para os que a ele não tiveram acesso na idade própria; II – progressiva extensão da obrigatoriedade e gratuidade ao ENSINO MÉDIO; III – atendimento educacional especializado aos portadores de deficiência, PREFERENCIALMENTE NA REDE REGULAR de ensino; IV – atendimento em CRECHE e PRÉ-ESCOLA às crianças de ZERO A CINCO ANOS de idade; V – acesso aos níveis mais elevados do ensino, da pesquisa e da criação artística, segundo a CAPACIDADE de cada um; VI – oferta de ENSINO NOTURNO regular, adequado às condições do adolescente TRABALHADOR; VII – atendimento no ensino fundamental, através de programas suplementares de MATERIAL DIDÁTICO-ESCOLAR, TRANSPORTE, ALIMENTAÇÃO e ASSISTÊNCIA À SAÚDE. §1º O acesso ao ensino obrigatório e gratuito é DIREITO PÚBLICO SUBJETIVO. §2º O NÃO OFERECIMENTO do ensino obrigatório pelo poder público ou sua OFERTA IRREGULAR importa RESPONSABILIDADE DA AUTORIDADE COMPETENTE. §3º Compete ao poder público RECENSEAR os educandos no ensino fundamental, fazer-lhes a CHAMADA e ZELAR, junto aos pais ou responsável, pela FREQUÊNCIA à escola.',
    prova:
      'O §1º é ouro puro: DIREITO PÚBLICO SUBJETIVO — exigível judicialmente, inclusive por mandado de segurança, sem discricionariedade administrativa. Decore ainda a faixa da creche/pré-escola (0 a 5 anos), a inclusão PREFERENCIAL na rede regular (III) e o tripé do §3º: recensear, chamar e zelar.',
    pegadinha:
      'Dizer que a vaga em creche depende de conveniência orçamentária (o STF, no RE 1.008.166 — tema 548, fixou que o Judiciário pode determinar a matrícula em creche/pré-escola); trocar a faixa etária (0 a 6 é a redação antiga); ou tornar o ensino médio imediatamente obrigatório no texto do ECA (o inciso II fala em extensão PROGRESSIVA).',
    exemplo:
      'Ação judicial que obriga o município a matricular criança de 3 anos em creche é deferida com base no §1º e no tema 548 do STF.',
    macete: 'Fundamental: obrigatório e grátis = DIREITO PÚBLICO SUBJETIVO. Creche: 0 a 5. R.C.Z.: recensear, chamar, zelar.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 55,
    titulo: 'Dever de matricular',
    sintese: 'Obrigação dos pais ou responsável',
    bloco: EDU,
    resumo:
      'Os PAIS ou RESPONSÁVEL têm a OBRIGAÇÃO de MATRICULAR seus filhos ou pupilos na REDE REGULAR DE ENSINO.',
    prova:
      'Dever da família (contrapartida do dever estatal do art. 54). O descumprimento configura a infração administrativa do art. 249 do ECA e pode caracterizar o crime de abandono intelectual (art. 246 do Código Penal).',
    pegadinha:
      'Admitir o ensino domiciliar (homeschooling) como cumprimento do art. 55 — o STF (RE 888.815) decidiu que, sem lei regulamentadora, a modalidade não é permitida no Brasil; o texto exige rede REGULAR.',
    exemplo:
      'Pais que mantêm filho de 8 anos fora da escola são notificados pelo Conselho Tutelar e podem responder por infração administrativa.',
    macete: 'Estado oferece (art. 54), família matricula (art. 55). Faltou um dos dois? Responde.',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 56,
    titulo: 'Comunicação escolar ao Conselho Tutelar',
    sintese: 'Maus-tratos, evasão e repetência',
    bloco: EDU,
    destaque: true,
    resumo:
      'Os DIRIGENTES DE ESTABELECIMENTOS DE ENSINO FUNDAMENTAL comunicarão ao CONSELHO TUTELAR os casos de: I – MAUS-TRATOS envolvendo seus alunos; II – REITERAÇÃO DE FALTAS INJUSTIFICADAS e EVASÃO ESCOLAR, esgotados os recursos escolares; III – ELEVADOS NÍVEIS DE REPETÊNCIA.',
    prova:
      'Três hipóteses, destinatário único: CONSELHO TUTELAR. Note a diferença: nos maus-tratos a comunicação é imediata; na evasão, exige-se o prévio esgotamento dos recursos escolares.',
    pegadinha:
      'Apontar o Ministério Público ou o juiz como destinatários; exigir esgotamento dos recursos escolares também para os maus-tratos (não se exige — é imediato); ou esquecer o inciso III (repetência).',
    exemplo:
      'Diretora que registra 30 faltas injustificadas, após busca ativa e contato com a família sem sucesso, comunica o Conselho Tutelar.',
    macete: 'Escola avisa o CONSELHO: M.E.R. — Maus-tratos, Evasão, Repetência.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 57,
    titulo: 'Pesquisa e inclusão escolar',
    sintese: 'Novas propostas para reinserir excluídos',
    bloco: EDU,
    resumo:
      'O poder público estimulará PESQUISAS, EXPERIÊNCIAS e NOVAS PROPOSTAS relativas a calendário, seriação, currículo, metodologia, didática e avaliação, com vistas à INSERÇÃO DE CRIANÇAS E ADOLESCENTES EXCLUÍDOS do ensino fundamental obrigatório.',
    prova:
      'Artigo de política educacional: a rigidez do modelo escolar deve ceder para reincluir quem está fora — fundamento de EJA, aceleração de estudos e classes de correção de fluxo.',
    pegadinha:
      'Ler o dispositivo como mera recomendação sem destinatário: o sujeito do dever é o PODER PÚBLICO.',
    exemplo:
      'Programa municipal de correção de fluxo para adolescentes com distorção idade-série executa o art. 57.',
    macete: 'Art. 57: se o aluno não cabe no modelo, muda-se o modelo.',
    bancas: ['AOCP'],
  },
  {
    n: 58,
    titulo: 'Valores culturais no processo educacional',
    sintese: 'Cultura local + liberdade de criação',
    bloco: EDU,
    resumo:
      'No processo educacional respeitar-se-ão os VALORES CULTURAIS, ARTÍSTICOS E HISTÓRICOS próprios do contexto social da criança e do adolescente, garantindo-se a estes a LIBERDADE DA CRIAÇÃO e o ACESSO ÀS FONTES DE CULTURA.',
    prova:
      'Diálogo direto com o art. 30 da Convenção da ONU (crianças indígenas e de minorias — Parte 4): a escola não pode apagar a cultura de origem do aluno.',
    pegadinha:
      'Admitir currículo homogêneo que desconsidere o contexto social e cultural, sob o argumento de padronização nacional.',
    exemplo:
      'Escola em comunidade quilombola que inclui a história local no currículo concretiza o art. 58.',
    macete: 'Art. 58: a cultura do aluno entra na sala junto com ele.',
    bancas: ['Vunesp', 'FCC'],
  },
  {
    n: 59,
    titulo: 'Cultura, esporte e lazer pelos municípios',
    sintese: 'Recursos e espaços para a infância',
    bloco: EDU,
    resumo:
      'Os MUNICÍPIOS, com apoio dos ESTADOS e da UNIÃO, estimularão e facilitarão a destinação de RECURSOS e ESPAÇOS para programações culturais, esportivas e de lazer voltadas para a INFÂNCIA e a JUVENTUDE.',
    prova:
      'Protagonismo MUNICIPAL, com apoio dos demais entes — reflexo da municipalização do atendimento (art. 88, I). Encerra o capítulo da educação, cultura, esporte e lazer.',
    pegadinha:
      'Atribuir o protagonismo à União; ou tratar cultura e lazer como despesas facultativas sem qualquer vinculação.',
    exemplo:
      'Praça com quadra e biblioteca infantil mantida pela prefeitura, com repasse estadual, realiza o art. 59.',
    macete: 'Art. 59: quem põe a quadra e a praça de pé é o MUNICÍPIO.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 60,
    titulo: 'Proibição do trabalho infantil',
    sintese: 'ECA diz 14; a CF diz 16 (salvo aprendiz)',
    bloco: TRA,
    destaque: true,
    resumo:
      'É PROIBIDO qualquer trabalho a MENORES DE 14 ANOS de idade, SALVO NA CONDIÇÃO DE APRENDIZ. (Observação obrigatória: a EC 20/1998 alterou o art. 7º, XXXIII, da CF, elevando a idade mínima para 16 ANOS, permitido o trabalho a partir dos 14 apenas como APRENDIZ — o texto do ECA não foi formalmente atualizado, mas prevalece a regra constitucional.)',
    prova:
      'A questão clássica: o ECA, literalmente, fala em 14 anos; a CF, após a EC 20/98, exige 16 anos, salvo aprendiz aos 14. Se a banca pedir “segundo o ECA”, responda 14; se pedir “segundo a Constituição” ou a regra vigente, responda 16 (com aprendizado aos 14).',
    pegadinha:
      'A banca cita “nos termos do ECA” e coloca 16 como gabarito — ou o inverso. Leia o comando! E jamais esqueça a ressalva do aprendiz, que existe nos dois textos.',
    exemplo:
      'Adolescente de 15 anos só pode trabalhar como aprendiz, com contrato especial e frequência escolar; aos 16, pode ter emprego comum (nunca noturno, perigoso ou insalubre antes dos 18).',
    macete: 'ECA = 14 (letra fria). CF/EC 20 = 16, aprendiz aos 14. Insalubre/perigoso/noturno: só aos 18.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 61,
    titulo: 'Legislação especial do trabalho',
    sintese: 'CLT e leis próprias se somam ao ECA',
    bloco: TRA,
    resumo:
      'A PROTEÇÃO AO TRABALHO dos adolescentes é regulada por LEGISLAÇÃO ESPECIAL, sem prejuízo do disposto nesta Lei.',
    prova:
      'Cláusula de diálogo normativo: aplicam-se conjuntamente o ECA, a CLT (arts. 402 a 441) e a Lei da Aprendizagem (10.097/2000). O ECA não revoga nem exclui a legislação trabalhista.',
    pegadinha:
      'Afirmar que o ECA esgota a proteção ao trabalho do adolescente, afastando a CLT.',
    exemplo:
      'Fiscalização do trabalho aplica simultaneamente a CLT e os arts. 60 a 69 do ECA ao flagrar irregularidade com aprendiz.',
    macete: 'Art. 61: ECA + CLT jogam no mesmo time.',
    bancas: ['AOCP'],
  },
  {
    n: 62,
    titulo: 'Conceito de aprendizagem',
    sintese: 'Formação técnico-profissional',
    bloco: TRA,
    resumo:
      'Considera-se APRENDIZAGEM a FORMAÇÃO TÉCNICO-PROFISSIONAL ministrada segundo as DIRETRIZES E BASES DA LEGISLAÇÃO DE EDUCAÇÃO em vigor.',
    prova:
      'A aprendizagem é, antes de tudo, EDUCAÇÃO — está atrelada à LDB, e não à lógica produtiva. Esse é o fundamento dos arts. 63 a 65.',
    pegadinha:
      'Tratar o aprendiz como mão de obra barata sem vínculo com a formação escolar.',
    exemplo:
      'Programa de aprendizagem em instituição do Sistema S combina teoria em sala e prática na empresa.',
    macete: 'Aprendiz não é empregado júnior: é ALUNO que trabalha.',
    bancas: ['FCC'],
  },
  {
    n: 63,
    titulo: 'Princípios da formação técnico-profissional',
    sintese: 'Escola + compatibilidade + horário especial',
    bloco: TRA,
    destaque: true,
    resumo:
      'A formação técnico-profissional obedecerá aos seguintes princípios: I – GARANTIA DE ACESSO E FREQUÊNCIA OBRIGATÓRIA AO ENSINO REGULAR; II – ATIVIDADE COMPATÍVEL com o desenvolvimento do adolescente; III – HORÁRIO ESPECIAL para o exercício das atividades.',
    prova:
      'Três princípios decoráveis. O inciso I é a trava central: sem escola, não há aprendizagem válida — o trabalho jamais pode substituir o ensino regular.',
    pegadinha:
      'Inverter a lógica e admitir que o adolescente abandone a escola para cumprir a jornada do programa.',
    exemplo:
      'Empresa que exige do aprendiz turno que conflita com as aulas viola os incisos I e III.',
    macete: 'E.C.H.: Escola garantida, Compatível com a idade, Horário especial.',
    bancas: ['FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 64,
    titulo: 'Bolsa de aprendizagem',
    sintese: 'Até 14 anos: bolsa, não salário',
    bloco: TRA,
    resumo:
      'Ao adolescente ATÉ 14 ANOS de idade é assegurada BOLSA DE APRENDIZAGEM.',
    prova:
      'Par obrigatório com o art. 65: até 14 anos → BOLSA de aprendizagem; maior de 14 → direitos TRABALHISTAS e PREVIDENCIÁRIOS. As bancas gostam de trocar os dois regimes.',
    pegadinha:
      'Afirmar que o adolescente de 13 anos tem direito a salário e verbas trabalhistas — o regime é de bolsa. (E, na prática, a EC 20/98 só admite o trabalho a partir dos 14, como aprendiz.)',
    exemplo:
      'Programa socioeducativo que remunera adolescente de 14 anos por meio de bolsa formativa segue o art. 64.',
    macete: 'Até 14: BOLSA. Mais de 14: CARTEIRA (art. 65).',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 65,
    titulo: 'Direitos do aprendiz maior de 14',
    sintese: 'Trabalhistas e previdenciários garantidos',
    bloco: TRA,
    resumo:
      'Ao adolescente APRENDIZ, MAIOR DE 14 ANOS, são assegurados os DIREITOS TRABALHISTAS E PREVIDENCIÁRIOS.',
    prova:
      'O aprendiz maior de 14 anos é trabalhador protegido: FGTS (alíquota reduzida de 2%), férias — que devem coincidir com as escolares —, 13º e recolhimento previdenciário.',
    pegadinha:
      'Dizer que o aprendiz não tem vínculo nem direitos trabalhistas por estar “em formação”.',
    exemplo:
      'Aprendiz de 16 anos dispensado sem justa causa recebe as verbas rescisórias correspondentes ao contrato de aprendizagem.',
    macete: 'Aprendiz +14 = CTPS assinada, FGTS e INSS. Aprendiz é trabalhador com escola.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 66,
    titulo: 'Trabalho protegido',
    sintese: 'Adolescente com deficiência',
    bloco: TRA,
    resumo:
      'Ao adolescente PORTADOR DE DEFICIÊNCIA é assegurado TRABALHO PROTEGIDO.',
    prova:
      'Artigo curto e literal. Dialoga com a Lei Brasileira de Inclusão (Lei 13.146/2015) e com o art. 23 da Convenção da ONU sobre os Direitos da Criança (Parte 4).',
    pegadinha:
      'Interpretar “trabalho protegido” como proibição de trabalhar — é o contrário: garantia de condições adequadas e apoio.',
    exemplo:
      'Adolescente com deficiência intelectual inserido em programa de aprendizagem com adaptações e acompanhamento.',
    macete: 'Art. 66: protegido não é excluído — é incluído com suporte.',
    bancas: ['Vunesp', 'AOCP'],
  },
  {
    n: 67,
    titulo: 'Trabalhos vedados ao adolescente',
    sintese: 'Noturno, perigoso, insalubre e escola',
    bloco: TRA,
    destaque: true,
    resumo:
      'Ao adolescente EMPREGADO, APRENDIZ, em REGIME FAMILIAR de trabalho, ALUNO DE ESCOLA TÉCNICA, ASSISTIDO EM ENTIDADE governamental ou não governamental, é VEDADO trabalho: I – NOTURNO, realizado entre as 22 HORAS de um dia e as 5 HORAS do dia seguinte; II – PERIGOSO, INSALUBRE ou PENOSO; III – realizado em LOCAIS PREJUDICIAIS à sua formação e ao seu desenvolvimento físico, psíquico, moral e social; IV – realizado em HORÁRIOS E LOCAIS QUE NÃO PERMITAM A FREQUÊNCIA À ESCOLA.',
    prova:
      'O horário noturno do ECA é 22h–5h (igual ao urbano da CLT). Decore os quatro incisos e, sobretudo, o rol de destinatários: a vedação alcança inclusive o REGIME FAMILIAR de trabalho — trabalhar “para a própria família” não libera nada.',
    pegadinha:
      'Trocar o horário noturno (não é 20h–6h nem 21h–5h); ou excluir o regime familiar e o aprendiz do rol protegido.',
    exemplo:
      'Adolescente de 17 anos escalado das 23h às 4h em padaria da família está em situação irregular — o inciso I não abre exceção familiar.',
    macete: '22 às 5 é proibido. P.I.P. proibido. Local ruim, proibido. Atrapalhou a escola, proibido.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 68,
    titulo: 'Trabalho educativo',
    sintese: 'Pedagogia acima da produção',
    bloco: TRA,
    resumo:
      'O PROGRAMA SOCIAL que tenha por base o TRABALHO EDUCATIVO, sob responsabilidade de entidade governamental ou não governamental SEM FINS LUCRATIVOS, deverá assegurar ao adolescente que dele participe condições de capacitação para o exercício de atividade regular remunerada. §1º Entende-se por trabalho educativo a atividade laboral em que as EXIGÊNCIAS PEDAGÓGICAS relativas ao desenvolvimento pessoal e social do educando PREVALECEM SOBRE O ASPECTO PRODUTIVO. §2º A REMUNERAÇÃO que o adolescente recebe pelo trabalho efetuado ou a participação na venda dos produtos de seu trabalho NÃO DESFIGURA o caráter educativo.',
    prova:
      'O §1º define o critério distintivo (pedagógico > produtivo) e o §2º derruba a intuição comum: receber dinheiro NÃO transforma trabalho educativo em relação de emprego.',
    pegadinha:
      'Afirmar que a remuneração descaracteriza o trabalho educativo; ou admitir programa de trabalho educativo com fins lucrativos.',
    exemplo:
      'ONG que mantém marcenaria-escola e repassa parte da venda aos adolescentes preserva o caráter educativo.',
    macete: 'Pedagogia na frente, produção atrás — e o pagamento não estraga a natureza educativa.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 69,
    titulo: 'Profissionalização e proteção no trabalho',
    sintese: 'Condição peculiar + capacitação adequada',
    bloco: TRA,
    resumo:
      'O adolescente tem direito à PROFISSIONALIZAÇÃO e à PROTEÇÃO NO TRABALHO, observados os seguintes aspectos, entre outros: I – RESPEITO À CONDIÇÃO PECULIAR DE PESSOA EM DESENVOLVIMENTO; II – CAPACITAÇÃO PROFISSIONAL ADEQUADA AO MERCADO DE TRABALHO.',
    prova:
      'Encerra o capítulo com dois princípios-síntese. Note o “entre outros”: o rol é EXEMPLIFICATIVO. O inciso I repete a chave interpretativa do art. 6º.',
    pegadinha:
      'Tratar o rol como taxativo; ou dissociar a profissionalização da condição de pessoa em desenvolvimento.',
    exemplo:
      'Curso profissionalizante desatualizado, sem inserção real no mercado, frustra o inciso II.',
    macete: 'Art. 69: formar sem esquecer que ainda é gente em formação.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 70,
    titulo: 'Dever de prevenção',
    sintese: 'Prevenir é dever de TODOS',
    bloco: PRV,
    destaque: true,
    resumo:
      'É DEVER DE TODOS PREVENIR a ocorrência de AMEAÇA ou VIOLAÇÃO dos direitos da criança e do adolescente. Art. 70-A: a União, os Estados, o DF e os Municípios deverão atuar de forma articulada na elaboração de POLÍTICAS PÚBLICAS E NA EXECUÇÃO DE AÇÕES DESTINADAS A COIBIR O USO DE CASTIGO FÍSICO ou de tratamento cruel ou degradante (campanhas, formação de profissionais, apoio às famílias, inclusão nos currículos escolares). Art. 70-B: as entidades públicas e privadas que atuem nas áreas de saúde, educação, assistência social, esporte, cultura, lazer, segurança pública e direitos humanos deverão contar com profissionais capacitados a reconhecer e comunicar ao Conselho Tutelar suspeitas ou casos de maus-tratos.',
    prova:
      'Abre o Título III (Da Prevenção). O dever é universal e alcança tanto a AMEAÇA quanto a VIOLAÇÃO — prevenção primária. Os arts. 70-A e 70-B vieram com a Lei 13.010/2014 (Lei Menino Bernardo).',
    pegadinha:
      'Restringir o dever de prevenção ao poder público ou condicioná-lo à violação já consumada (a ameaça basta).',
    exemplo:
      'Campanha escolar sobre educação não violenta e capacitação de professores para identificar sinais de violência cumprem os arts. 70-A e 70-B.',
    macete: 'Prevenir é de TODOS — e antes mesmo de a violação acontecer.',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 71,
    titulo: 'Informação, cultura e lazer adequados',
    sintese: 'Produtos e serviços compatíveis com a idade',
    bloco: PRV,
    resumo:
      'A criança e o adolescente têm direito a INFORMAÇÃO, CULTURA, LAZER, ESPORTES, DIVERSÕES, ESPETÁCULOS e PRODUTOS E SERVIÇOS que RESPEITEM SUA CONDIÇÃO PECULIAR DE PESSOA EM DESENVOLVIMENTO.',
    prova:
      'É o fundamento de toda a prevenção especial (arts. 74 a 85) e da classificação indicativa. Espelha o art. 17 da Convenção da ONU (Parte 4).',
    pegadinha:
      'Ler o artigo apenas como direito de acesso, esquecendo o filtro da adequação (“respeitem sua condição peculiar”).',
    exemplo:
      'Aplicativo infantil que exibe publicidade de bebida alcoólica desrespeita o art. 71 (e o art. 79).',
    macete: 'Art. 71: entretenimento sim — do tamanho da idade.',
    bancas: ['Vunesp'],
  },
  {
    n: 72,
    titulo: 'Rol não exaustivo',
    sintese: 'Outras obrigações preventivas existem',
    bloco: PRV,
    resumo:
      'As obrigações previstas nesta Lei NÃO EXCLUEM da PREVENÇÃO ESPECIAL outras decorrentes dos PRINCÍPIOS por ela adotados.',
    prova:
      'Cláusula de abertura: o rol de deveres preventivos é EXEMPLIFICATIVO, permitindo a incidência de novas obrigações extraídas dos princípios do Estatuto.',
    pegadinha: 'Afirmar que só existem as obrigações expressamente listadas nos arts. 74 a 85.',
    exemplo:
      'Novas formas de exposição digital de crianças podem gerar deveres preventivos ainda não escritos em 1990.',
    macete: 'Art. 72: a lista é aberta — princípio também obriga.',
    bancas: ['AOCP'],
  },
  {
    n: 73,
    titulo: 'Responsabilidade por inobservância',
    sintese: 'Pessoa física ou jurídica responde',
    bloco: PRV,
    resumo:
      'A INOBSERVÂNCIA das normas de prevenção importará em RESPONSABILIDADE DA PESSOA FÍSICA OU JURÍDICA, nos termos desta Lei.',
    prova:
      'Fecha as disposições gerais da prevenção e remete às infrações administrativas dos arts. 245 a 258-C (multa, fechamento, suspensão de atividades). Alcança pessoas jurídicas.',
    pegadinha:
      'Restringir a responsabilidade às pessoas físicas ou dizer que a violação só gera consequência penal.',
    exemplo:
      'Casa noturna que permite a entrada de adolescentes responde por infração administrativa com multa e possível fechamento.',
    macete: 'Art. 73: descumpriu a prevenção, pagou — inclusive a empresa.',
    bancas: ['FCC'],
  },
  {
    n: 74,
    titulo: 'Classificação indicativa',
    sintese: 'Poder público regula; responsável afixa aviso',
    bloco: PRV,
    destaque: true,
    resumo:
      'O PODER PÚBLICO, através do órgão competente, REGULARÁ as diversões e espetáculos públicos, informando sobre a NATUREZA deles, as FAIXAS ETÁRIAS a que não se recomendem, locais e horários em que sua apresentação se mostre INADEQUADA. Parágrafo único: os responsáveis pelas diversões e espetáculos públicos deverão AFIXAR, em lugar VISÍVEL e de fácil acesso, à entrada do local de exibição, informação destacada sobre a natureza do espetáculo e a faixa etária especificada no certificado de classificação.',
    prova:
      'A classificação é INDICATIVA (recomendação de faixa etária), não é censura prévia — o STF, na ADI 2.404, declarou inconstitucional a expressão que tornava vinculante o horário de exibição na TV. Mas a informação continua OBRIGATÓRIA.',
    pegadinha:
      'Dizer que a classificação indicativa foi extinta pelo STF (não foi — permanece obrigatória como informação; o que caiu foi o caráter impositivo do horário na TV); ou dispensar a afixação do aviso.',
    exemplo:
      'Cinema deve exibir na bilheteria a faixa etária de cada sessão; a emissora informa a classificação antes do programa (art. 76, parágrafo único).',
    macete: 'Classificar é INDICAR (e informar é obrigatório). Proibir horário na TV, não — ADI 2.404.',
    bancas: ['Cebraspe', 'FGV', 'FCC'],
  },
  {
    n: 75,
    titulo: 'Acesso a diversões e espetáculos',
    sintese: 'Menor de 10 anos, só acompanhado',
    bloco: PRV,
    destaque: true,
    resumo:
      'Toda criança ou adolescente terá ACESSO às diversões e espetáculos públicos CLASSIFICADOS COMO ADEQUADOS À SUA FAIXA ETÁRIA. Parágrafo único: as crianças MENORES DE 10 ANOS somente poderão ingressar e permanecer nos locais de apresentação ou exibição QUANDO ACOMPANHADAS DOS PAIS OU RESPONSÁVEL.',
    prova:
      'O número 10 é o alvo. Menor de 10 anos: entrada apenas acompanhada dos pais ou responsável, mesmo que o espetáculo seja livre. De 10 anos em diante: entrada desacompanhada, respeitada a faixa etária.',
    pegadinha:
      'Trocar 10 por 12 anos (confundindo com o conceito de criança do art. 2º) — são regras diferentes; ou dizer que a criança pode entrar sozinha em sessão livre.',
    exemplo:
      'Criança de 9 anos não entra sozinha nem em filme classificado como livre; a de 11 pode.',
    macete: 'Menos de 10, só de mãos dadas. O 12 é para definir criança — aqui o número é 10.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 76,
    titulo: 'Rádio e televisão',
    sintese: 'Horário infanto-juvenil e aviso de classificação',
    bloco: PRV,
    resumo:
      'As EMISSORAS DE RÁDIO E TELEVISÃO somente exibirão, no horário recomendado para o público infanto-juvenil, PROGRAMAS COM FINALIDADES EDUCATIVAS, ARTÍSTICAS, CULTURAIS E INFORMATIVAS. Parágrafo único: nenhum espetáculo será apresentado ou anunciado sem AVISO DE SUA CLASSIFICAÇÃO, ANTES DE SUA TRANSMISSÃO, apresentação ou exibição.',
    prova:
      'Quatro finalidades (educativas, artísticas, culturais e informativas) e o dever de anunciar a classificação ANTES da exibição — dever que sobreviveu integralmente à ADI 2.404.',
    pegadinha:
      'Suprimir uma das quatro finalidades; ou afirmar que o aviso pode ser exibido durante ou após o programa.',
    exemplo:
      'Emissora que exibe programa adulto na faixa vespertina infantil viola o caput e está sujeita a sanção administrativa.',
    macete: 'E.A.C.I. no horário da criançada — e o aviso vem SEMPRE antes.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 77,
    titulo: 'Vídeos e locação',
    sintese: 'Respeito à classificação na venda/aluguel',
    bloco: PRV,
    resumo:
      'Os proprietários, diretores, gerentes e funcionários de empresas que explorem a VENDA OU ALUGUEL de fitas de programação em vídeo cuidarão para que NÃO HAJA VENDA OU LOCAÇÃO EM DESACORDO com a classificação atribuída pelo órgão competente. Parágrafo único: as fitas a que alude este artigo deverão exibir, no invólucro, informação sobre a natureza da obra e a faixa etária a que se destina.',
    prova:
      'Artigo datado (era das videolocadoras), mas aplicável por analogia a mídias e conteúdos digitais. A responsabilidade alcança desde o proprietário até o funcionário.',
    pegadinha:
      'Considerar o dispositivo revogado — não foi; segue vigente e fundamenta sanções administrativas.',
    exemplo:
      'Loja que vende jogo classificado para maiores de 18 anos a criança sujeita-se à infração do art. 257.',
    macete: 'Art. 77: da locadora ao streaming, a faixa etária manda.',
    bancas: ['AOCP'],
  },
  {
    n: 78,
    titulo: 'Publicações impróprias',
    sintese: 'Embalagem lacrada com advertência',
    bloco: PRV,
    resumo:
      'As REVISTAS E PUBLICAÇÕES contendo material IMPRÓPRIO OU INADEQUADO a crianças e adolescentes deverão ser comercializadas em EMBALAGEM LACRADA, com a ADVERTÊNCIA de seu conteúdo. Parágrafo único: as editoras cuidarão para que as capas que contenham mensagens pornográficas ou obscenas sejam protegidas com EMBALAGEM OPACA.',
    prova:
      'Dois níveis: conteúdo impróprio → embalagem LACRADA com advertência; capa pornográfica/obscena → embalagem OPACA. As bancas trocam os adjetivos.',
    pegadinha:
      'Inverter “lacrada” e “opaca”; ou dizer que tais publicações são proibidas (não são — apenas têm a comercialização condicionada).',
    exemplo:
      'Banca de jornal que expõe revista adulta sem invólucro opaco comete infração administrativa.',
    macete: 'Conteúdo → LACRADA. Capa → OPACA.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 79,
    titulo: 'Publicações infanto-juvenis',
    sintese: 'Sem álcool, tabaco, armas e munições',
    bloco: PRV,
    resumo:
      'As revistas e publicações DESTINADAS AO PÚBLICO INFANTO-JUVENIL não poderão conter ilustrações, fotografias, legendas, crônicas ou anúncios de BEBIDAS ALCOÓLICAS, TABACO, ARMAS e MUNIÇÕES, e deverão respeitar os VALORES ÉTICOS E SOCIAIS da pessoa e da família.',
    prova:
      'Rol vedado com quatro itens: bebida alcoólica, tabaco, armas e munições. Vale tanto para conteúdo editorial quanto para publicidade.',
    pegadinha:
      'Incluir itens que não estão no rol (medicamentos, jogos de azar) ou suprimir munições, que costuma ser esquecida.',
    exemplo:
      'Revista infantil que publica anúncio de cigarro eletrônico viola o art. 79.',
    macete: 'Na revista da criança: nada de B.T.A.M. — Bebida, Tabaco, Armas, Munições.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 80,
    titulo: 'Bilhar, sinuca e casas de jogos',
    sintese: 'Entrada e permanência proibidas',
    bloco: PRV,
    resumo:
      'Os responsáveis por estabelecimentos que explorem comercialmente BILHAR, SINUCA ou CONGÊNERE ou por CASAS DE JOGOS, assim entendidas as que realizem apostas, ainda que eventualmente, cuidarão para que NÃO SEJA PERMITIDA A ENTRADA E A PERMANÊNCIA de crianças e adolescentes no local, AFIXANDO AVISO para orientação do público.',
    prova:
      'Vedação dupla (entrar e permanecer) + dever de AFIXAR AVISO. Alcança crianças E adolescentes, sem exceção de acompanhamento pelos pais — diferente do art. 82 (hotel) e do art. 75 (espetáculos).',
    pegadinha:
      'Admitir a entrada se acompanhado dos pais — aqui NÃO há essa ressalva; ou excluir estabelecimentos que apostam apenas “eventualmente” (o texto os inclui).',
    exemplo:
      'Adolescente de 17 anos acompanhado do pai não pode permanecer em casa de sinuca comercial.',
    macete: 'Sinuca e aposta: proibido mesmo com os pais. Diferente de cinema e hotel.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 81,
    titulo: 'Produtos de venda proibida',
    sintese: 'Os 6 incisos da proibição',
    bloco: PRV,
    destaque: true,
    resumo:
      'É PROIBIDA A VENDA à criança ou ao adolescente de: I – ARMAS, MUNIÇÕES E EXPLOSIVOS; II – BEBIDAS ALCOÓLICAS; III – produtos cujos componentes possam causar DEPENDÊNCIA FÍSICA OU PSÍQUICA ainda que por utilização indevida; IV – FOGOS DE ESTAMPIDO E DE ARTIFÍCIO, exceto aqueles que, pelo seu reduzido potencial, sejam incapazes de provocar qualquer dano físico em caso de utilização indevida; V – REVISTAS E PUBLICAÇÕES a que alude o art. 78; VI – BILHETES LOTÉRICOS e equivalentes.',
    prova:
      'Seis incisos decoráveis. Os mais cobrados: III (cola de sapateiro, solventes — “ainda que por utilização indevida”), IV (exceção dos fogos de reduzido potencial) e VI (bilhete lotérico). Vender bebida alcoólica a menor é CRIME do art. 243 do ECA.',
    pegadinha:
      'Proibir todos os fogos sem a exceção legal; esquecer os bilhetes lotéricos; ou dizer que vender bebida a adolescente é mera infração administrativa (é crime — art. 243).',
    exemplo:
      'Loja que vende cola de sapateiro a adolescente responde pelo inciso III, ainda que o produto tenha uso lícito.',
    macete: 'A.B.D.F.R.L.: Armas, Bebidas, Dependência, Fogos, Revistas, Loteria.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 82,
    titulo: 'Hospedagem',
    sintese: 'Só autorizado ou acompanhado',
    bloco: PRV,
    resumo:
      'É PROIBIDA A HOSPEDAGEM de criança ou adolescente em HOTEL, MOTEL, PENSÃO ou estabelecimento congênere, SALVO SE AUTORIZADO OU ACOMPANHADO pelos PAIS OU RESPONSÁVEL.',
    prova:
      'A ressalva é alternativa (“autorizado OU acompanhado”) — basta uma das hipóteses. Hospedar em desacordo é CRIME do art. 250 do ECA (na verdade, infração administrativa com pena de multa e fechamento).',
    pegadinha:
      'Exigir cumulativamente autorização E acompanhamento; ou estender ao art. 80 a mesma ressalva (lá não há).',
    exemplo:
      'Adolescente em viagem escolar hospeda-se com autorização escrita dos pais — hipótese válida do art. 82.',
    macete: 'Hotel: autorizado OU acompanhado (um dos dois basta).',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 83,
    titulo: 'Viagem nacional',
    sintese: 'Só CRIANÇA precisa de autorização',
    bloco: PRV,
    destaque: true,
    resumo:
      'Nenhuma CRIANÇA poderá viajar para FORA DA COMARCA onde reside, desacompanhada dos pais ou dos responsáveis, sem EXPRESSA AUTORIZAÇÃO JUDICIAL. §1º A autorização NÃO SERÁ EXIGIDA quando: a) tratar-se de COMARCA CONTÍGUA à da residência da criança, se na mesma unidade da Federação, ou incluída na mesma REGIÃO METROPOLITANA; b) a criança estiver ACOMPANHADA: 1) de ASCENDENTE ou COLATERAL MAIOR, ATÉ O TERCEIRO GRAU, comprovado documentalmente o parentesco; 2) de PESSOA MAIOR, expressamente autorizada pelo pai, mãe ou responsável. §2º A autoridade judiciária poderá, a pedido dos pais ou responsável, conceder autorização VÁLIDA POR DOIS ANOS.',
    prova:
      'A pegadinha nº 1 do Título III: o artigo fala apenas em CRIANÇA — o ADOLESCENTE viaja no território nacional desacompanhado SEM autorização judicial. Decore também o “colateral maior até o 3º grau” (irmão, tio) e a validade bienal do §2º.',
    pegadinha:
      'Trocar “criança” por “criança e adolescente”; usar 2º ou 4º grau em vez do TERCEIRO; ou exigir autorização para comarca contígua/mesma região metropolitana.',
    exemplo:
      'Criança de 8 anos viajando com o tio (colateral de 3º grau), com documento que comprove o parentesco, dispensa alvará judicial. Já um adolescente de 15 anos pode viajar sozinho de ônibus para outro estado.',
    macete: 'Art. 83 = CRIANÇA. Adolescente roda o Brasil sozinho. Colateral até o 3º grau. Alvará vale 2 anos.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 84,
    titulo: 'Viagem ao exterior',
    sintese: 'Dispensa com ambos ou com um autorizado',
    bloco: PRV,
    destaque: true,
    resumo:
      'Quando se tratar de VIAGEM AO EXTERIOR, a autorização é DISPENSÁVEL se a CRIANÇA OU ADOLESCENTE: I – estiver ACOMPANHADO DE AMBOS OS PAIS ou responsável; II – viajar na companhia de UM DOS PAIS, AUTORIZADO EXPRESSAMENTE PELO OUTRO, através de documento com FIRMA RECONHECIDA.',
    prova:
      'Mudança de sujeito: aqui o texto alcança CRIANÇA E ADOLESCENTE (diferente do art. 83, restrito à criança). Fora das duas hipóteses de dispensa, exige-se autorização judicial. Observação: a Lei 13.812/2019 e as normas do CNJ admitem autorização por escrito de ambos os pais, com firma reconhecida, em vez de alvará.',
    pegadinha:
      'Restringir o art. 84 à criança (erro — é criança OU adolescente); dispensar o reconhecimento de firma; ou dizer que a autorização de um só dos pais basta quando a criança viaja sozinha.',
    exemplo:
      'Adolescente de 16 anos viajando à Argentina só com a mãe precisa de autorização do pai com firma reconhecida.',
    macete: 'Exterior: os DOIS juntos, ou UM com papel firmado do outro. Aqui vale para criança E adolescente.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 85,
    titulo: 'Saída do país com estrangeiro',
    sintese: 'Sempre com autorização judicial',
    bloco: PRV,
    destaque: true,
    resumo:
      'Sem PRÉVIA E EXPRESSA AUTORIZAÇÃO JUDICIAL, nenhuma CRIANÇA OU ADOLESCENTE NASCIDO EM TERRITÓRIO NACIONAL poderá sair do País em companhia de ESTRANGEIRO RESIDENTE OU DOMICILIADO NO EXTERIOR.',
    prova:
      'Regra absoluta, sem exceções no dispositivo: é o antídoto contra o tráfico internacional e as adoções irregulares. Requisitos cumulativos: nascido no Brasil + companhia de estrangeiro residente/domiciliado no exterior.',
    pegadinha:
      'Admitir a saída com autorização apenas dos pais (aqui não basta — exige-se alvará judicial); ou aplicar a regra a estrangeiro residente NO BRASIL (o texto exige residência ou domicílio no exterior).',
    exemplo:
      'Tia italiana, residente em Roma, que deseja levar a sobrinha brasileira para passar férias na Itália precisa de autorização judicial, ainda que os pais concordem.',
    macete: 'Brasileirinho + estrangeiro que mora fora = SÓ COM O JUIZ. Sem exceção.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
];
