import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'I · Princípios e definição': '#c19a3d',
  'II · Civis e identidade': '#2f6fb4',
  'III · Família e cuidados': '#7c3aed',
  'IV · Saúde, educação e lazer': '#0f766e',
  'V · Proteção especial': '#b04a3c',
  'VI · Implementação e Comitê': '#0e7490',
  'VII · Cláusulas finais': '#4b5563',
};

const A = 'I · Princípios e definição';
const B = 'II · Civis e identidade';
const C = 'III · Família e cuidados';
const D = 'IV · Saúde, educação e lazer';
const E = 'V · Proteção especial';
const F = 'VI · Implementação e Comitê';
const G = 'VII · Cláusulas finais';

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Definição de criança',
    sintese: 'Menor de 18 — salvo maioridade antes',
    bloco: A,
    destaque: true,
    resumo:
      'Considera-se CRIANÇA todo ser humano com menos de 18 anos de idade, a não ser que, em conformidade com a lei aplicável à criança, a maioridade seja alcançada antes.',
    prova:
      'Definição etária única: a Convenção NÃO divide criança e adolescente — todos abaixo de 18 são “criança”. O ECA (Lei 8.069/90, art. 2º) é que separa: criança até 12 anos INCOMPLETOS e adolescente entre 12 e 18 anos. Essa comparação é a questão mais repetida do documento.',
    pegadinha:
      'Importar a régua do ECA para a Convenção (dizer que a CDC define adolescente); esquecer a ressalva final (“salvo se a maioridade for alcançada antes”, conforme a lei aplicável); ou fixar a idade em 16 ou 21 anos.',
    exemplo:
      'Um jovem de 16 anos emancipado pelo casamento pode atingir a maioridade civil antes dos 18 — a ressalva do art. 1º acomoda essa hipótese sem quebrar a Convenção.',
    macete:
      'CDC: menos de 18 = criança, ponto. ECA: 0–11 criança, 12–17 adolescente. Uma régua lá fora, duas aqui dentro.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 2,
    titulo: 'Não discriminação',
    sintese: '1º princípio: nenhuma criança de fora',
    bloco: A,
    destaque: true,
    resumo:
      '1) Os Estados respeitarão os direitos da Convenção a cada criança sujeita à sua jurisdição, SEM DISTINÇÃO de raça, cor, sexo, idioma, religião, opinião política ou de outra natureza, origem nacional, étnica ou social, posição econômica, deficiência, nascimento ou qualquer outra condição — da criança, de seus pais ou de seus representantes legais. 2) Adotarão medidas para proteger a criança contra discriminação ou punição em razão da condição, atividades, opiniões ou crenças de seus pais ou familiares.',
    prova:
      'É o 1º PRINCÍPIO FUNDAMENTAL. Dois detalhes de ouro: a proteção cobre condições DA CRIANÇA e também DOS PAIS (§2º — filho não paga pelo que o pai pensa); e o rol é exemplificativo (“qualquer outra condição”). Note ainda “deficiência” expressa no texto.',
    pegadinha:
      'Restringir a proteção à criança nacional do Estado — o critério é estar sob a JURISDIÇÃO (inclui migrantes e refugiadas); ou tratar o rol como taxativo.',
    exemplo:
      'Escola que recusa matrícula de criança filha de presidiário ou de imigrante irregular viola o art. 2º nos dois parágrafos.',
    macete: 'Art. 2º: a criança não herda o “rótulo” dos pais. Jurisdição, não nacionalidade.',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 3,
    titulo: 'Melhor interesse da criança',
    sintese: '2º princípio: consideração primordial',
    bloco: A,
    destaque: true,
    resumo:
      '1) Em TODAS as medidas relativas às crianças — adotadas por instituições públicas ou privadas de bem-estar social, tribunais, autoridades administrativas ou órgãos legislativos — o interesse maior da criança será a CONSIDERAÇÃO PRIMORDIAL. 2) Os Estados comprometem-se a assegurar a proteção e o cuidado necessários ao bem-estar da criança, considerando os direitos e deveres dos pais e responsáveis. 3) As instituições, serviços e estabelecimentos de cuidado devem obedecer a padrões de segurança, saúde, número e competência do pessoal e supervisão.',
    prova:
      'O 2º PRINCÍPIO e a norma mais citada da Convenção. Guarde a fórmula exata: “consideração PRIMORDIAL” (primary consideration) — e não “única” ou “exclusiva”. Alcança os quatro poderes/atores: público, privado, judicial, administrativo e legislativo.',
    pegadinha:
      'Trocar “consideração primordial” por “consideração única/absoluta/exclusiva” — erro clássico, pois o interesse da criança é ponderado com outros direitos (salvo na adoção, art. 21, onde é PARAMOUNT: consideração máxima).',
    exemplo:
      'Em disputa de guarda, o juiz pode contrariar a vontade dos dois genitores se o melhor interesse do filho assim exigir — é o art. 3º em ação (no Brasil, art. 227 da CF e art. 100 do ECA).',
    macete:
      'Primordial ≠ única. No art. 3º é “primordial”; só na ADOÇÃO (art. 21) vira “consideração máxima”.',
    bancas: ['Cebraspe', 'FGV', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 4,
    titulo: 'Medidas de implementação',
    sintese: 'Máximo dos recursos disponíveis',
    bloco: A,
    resumo:
      'Os Estados adotarão todas as medidas administrativas, legislativas e de outra natureza para a implementação dos direitos da Convenção. Quanto aos direitos econômicos, sociais e culturais, adotarão tais medidas até o MÁXIMO DOS RECURSOS DISPONÍVEIS e, quando necessário, no âmbito da cooperação internacional.',
    prova:
      'A cláusula que divide as duas naturezas: direitos civis e políticos → implementação imediata; direitos econômicos, sociais e culturais → “até o máximo dos recursos disponíveis” (realização progressiva, como no art. 22 da DUDH e no PIDESC).',
    pegadinha:
      'Dizer que TODOS os direitos da Convenção dependem de disponibilidade orçamentária — a limitação de recursos só alcança os DESC; ou suprimir a cooperação internacional.',
    exemplo:
      'Um Estado não pode alegar “falta de verba” para deixar de registrar nascimentos (direito civil, art. 7º), mas pode escalonar a universalização de creches em cronograma orçamentário.',
    macete: 'Civil é já; social é o máximo que o cofre permitir — com ajuda internacional se preciso.',
    bancas: ['FGV', 'Cebraspe'],
  },
  {
    n: 5,
    titulo: 'Orientação dos pais e capacidades em evolução',
    sintese: 'Autonomia progressiva da criança',
    bloco: A,
    resumo:
      'Os Estados respeitarão as responsabilidades, direitos e deveres dos pais, da família ampliada, da comunidade ou dos responsáveis legais de, em consonância com a EVOLUÇÃO DAS CAPACIDADES da criança, orientá-la quanto ao exercício dos direitos reconhecidos na Convenção.',
    prova:
      'Aqui nasce a “autonomia progressiva”: quanto mais madura a criança, menor a intervenção dos pais e maior o espaço de decisão própria. Repare que o texto reconhece a FAMÍLIA AMPLIADA e a comunidade, conforme o costume local.',
    pegadinha:
      'Ler o artigo como poder absoluto dos pais sobre a criança: o papel deles é ORIENTAR o exercício dos direitos dela, não substituí-la nem suprimi-los.',
    exemplo:
      'Adolescente de 16 anos tem voz decisiva sobre tratamento de saúde simples; uma criança de 6 anos, não. Mesma norma, capacidades diferentes.',
    macete: 'Art. 5º: os pais são guia, não dono. Cresceu em maturidade, cresceu em autonomia.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 6,
    titulo: 'Vida, sobrevivência e desenvolvimento',
    sintese: '3º princípio: viver e desenvolver-se',
    bloco: B,
    destaque: true,
    resumo:
      '1) Os Estados reconhecem que toda criança tem o direito INERENTE à vida. 2) Assegurarão ao MÁXIMO a sobrevivência e o desenvolvimento da criança.',
    prova:
      'O 3º PRINCÍPIO FUNDAMENTAL. A Convenção vai além de “não matar”: exige sobrevivência E desenvolvimento (físico, mental, espiritual, moral, psicológico e social, na leitura do Comitê). O direito à vida é “inerente”.',
    pegadinha:
      'Reduzir o artigo ao direito à vida (dimensão negativa), esquecendo o dever positivo de garantir desenvolvimento; ou dizer que a Convenção define o início da vida — ela é deliberadamente silente (a questão ficou para cada Estado).',
    exemplo:
      'Programas de redução da mortalidade infantil e de primeira infância (creche, nutrição, estímulo) concretizam o §2º — não basta a criança sobreviver, ela precisa desenvolver-se.',
    macete: 'Art. 6º: viver é o piso; desenvolver-se é o dever.',
    bancas: ['Cebraspe', 'AOCP', 'FCC'],
  },
  {
    n: 7,
    titulo: 'Registro, nome e nacionalidade',
    sintese: 'Existir no papel desde o nascimento',
    bloco: B,
    resumo:
      '1) A criança será registrada IMEDIATAMENTE após o nascimento e terá direito, desde o nascimento, a um nome, a uma nacionalidade e, na medida do possível, a conhecer seus pais e a ser cuidada por eles. 2) Os Estados zelarão pela aplicação desses direitos, sobretudo quando a criança ficaria APÁTRIDA em caso contrário.',
    prova:
      'Quatro direitos no mesmo artigo: registro IMEDIATO, nome, nacionalidade e conhecer/ser cuidada pelos pais. O §2º é a cláusula antiapatridia. Note a expressão mitigada “na medida do possível” quanto a conhecer os pais.',
    pegadinha:
      'Afirmar que a criança tem direito ABSOLUTO de conhecer os pais (o texto diz “na medida do possível” — compatível com adoção e parto anônimo em alguns países); ou permitir o registro “em prazo razoável” em vez de imediato.',
    exemplo:
      'O sub-registro civil no Brasil é combatido com cartórios em maternidades e gratuidade da primeira via — art. 7º aplicado (Lei 9.534/97).',
    macete: 'Art. 7º: nasceu → registrou, nome, nacionalidade e pais. Ninguém nasce invisível.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 8,
    titulo: 'Preservação da identidade',
    sintese: 'Nacionalidade, nome e relações familiares',
    bloco: B,
    destaque: true,
    resumo:
      '1) Os Estados comprometem-se a respeitar o direito da criança de PRESERVAR SUA IDENTIDADE, inclusive a nacionalidade, o nome e as relações familiares, de acordo com a lei, sem interferências ilícitas. 2) Quando privada ilegalmente de algum ou de todos os elementos de sua identidade, os Estados prestarão assistência e proteção adequadas para RESTABELECER rapidamente sua identidade.',
    prova:
      'O célebre “artigo argentino”: proposto após o sequestro e a apropriação de bebês de desaparecidos na ditadura argentina. Decore a TRÍADE da identidade: nacionalidade + nome + relações familiares — e o dever de RESTABELECÊ-LA quando violada.',
    pegadinha:
      'Reduzir a identidade ao nome; ou esquecer o §2º (dever ativo de restabelecer). Note: a identidade inclui as RELAÇÕES FAMILIARES, não só os dados de registro.',
    exemplo:
      'O trabalho das Avós da Praça de Maio, que restitui a identidade biológica de netos apropriados, é a materialização histórica do art. 8º.',
    macete: 'Identidade 3 em 1: Nome, Nacionalidade e Família (N-N-F). Tirou? O Estado devolve.',
    bancas: ['FGV', 'Cebraspe', 'FCC'],
  },
  {
    n: 9,
    titulo: 'Separação dos pais',
    sintese: 'Só por decisão judicial e no interesse dela',
    bloco: C,
    destaque: true,
    resumo:
      '1) A criança NÃO será separada dos pais contra a vontade deles, salvo quando autoridades competentes determinarem, conforme a lei e mediante REVISÃO JUDICIAL, que tal separação é necessária ao interesse maior da criança (ex.: maus-tratos, descuido, pais que vivem separados e se deve decidir o local de residência). 2) Todas as partes interessadas participarão do processo e poderão manifestar suas opiniões. 3) A criança separada de um ou de ambos os pais tem direito de manter relações pessoais e CONTATO DIRETO com ambos, de modo regular — salvo se contrário ao seu interesse maior. 4) Quando a separação resultar de ato do Estado (detenção, prisão, exílio, deportação, morte), o Estado fornecerá informações essenciais sobre o paradeiro do familiar ausente, salvo prejuízo à criança.',
    prova:
      'Regra + exceção: a separação é EXCEÇÃO, exige revisão judicial e interesse maior da criança. O §3º garante convivência com AMBOS os pais — matriz internacional da guarda compartilhada e do direito de visita. O §4º alcança a criança cujo pai está preso.',
    pegadinha:
      'Admitir separação por decisão puramente administrativa e sem revisão judicial; ou por POBREZA da família — carência de recursos não é motivo (no Brasil, art. 23 do ECA é expresso nesse sentido).',
    exemplo:
      'Acolhimento institucional de criança por maus-tratos exige processo com contraditório e reavaliação periódica; já a falta de dinheiro dos pais jamais justifica a retirada.',
    macete:
      'Separar é exceção com juiz. Pobreza não separa. E quem se separa mantém CONTATO com os dois.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 10,
    titulo: 'Reunião familiar e circulação entre países',
    sintese: 'Reunificação: positiva, humanitária e rápida',
    bloco: C,
    resumo:
      '1) Pedidos de criança ou de seus pais para entrar ou sair de um Estado com vistas à REUNIÃO FAMILIAR serão atendidos de forma POSITIVA, HUMANITÁRIA e RÁPIDA, sem consequências adversas para os solicitantes e familiares. 2) A criança cujos pais residam em Estados diferentes tem o direito de manter relações pessoais e contato direto regular com ambos; os Estados respeitarão o direito de sair de qualquer país e de entrar no próprio, sujeito apenas às restrições legais necessárias à segurança nacional, ordem pública, saúde, moral ou direitos alheios.',
    prova:
      'Tríade de adjetivos: positiva, humanitária e rápida. E a garantia de que pedir reunião familiar não pode gerar represália (“sem consequências adversas”) — tema quente em política migratória.',
    pegadinha:
      'Transformar o dispositivo em direito automático de imigração: o Estado deve tratar o pedido de modo positivo, mas conserva o controle migratório dentro dos limites do §2º.',
    exemplo:
      'Criança refugiada no Brasil pleiteando visto para a mãe que ficou no país de origem: o pedido deve ser processado com prioridade e sem penalizar a família.',
    macete: 'Reunião familiar é P.H.R.: Positiva, Humanitária e Rápida.',
    bancas: ['FGV', 'AOCP'],
  },
  {
    n: 11,
    titulo: 'Transferência ilícita e retenção no exterior',
    sintese: 'Contra o sequestro internacional',
    bloco: C,
    resumo:
      '1) Os Estados adotarão medidas para lutar contra a transferência ilegal de crianças para o exterior e a RETENÇÃO ILÍCITA delas fora do país. 2) Para tanto, promoverão a conclusão de acordos bilaterais ou multilaterais e a adesão a acordos existentes.',
    prova:
      'É a ponte com a Convenção da Haia de 1980 sobre Aspectos Civis do Sequestro Internacional de Crianças (no Brasil, Decreto 3.413/2000). O foco é o sequestro PARENTAL (subtração por um dos genitores), não o rapto por estranhos — este está no art. 35.',
    pegadinha:
      'Confundir o art. 11 (transferência/retenção ilícita, típica de conflito entre pais) com o art. 35 (sequestro, venda e tráfico de crianças). São artigos distintos.',
    exemplo:
      'Genitor que leva o filho para outro país em férias e não retorna: caso típico de retenção ilícita, resolvido pela via da Haia/autoridade central.',
    macete: 'Art. 11 = briga de pais atravessando fronteira. Art. 35 = tráfico. Não misture.',
    bancas: ['FGV', 'Cebraspe'],
  },
  {
    n: 12,
    titulo: 'Direito de ser ouvida (participação)',
    sintese: '4º princípio: a criança tem voz',
    bloco: B,
    destaque: true,
    resumo:
      '1) Os Estados assegurarão à criança CAPAZ DE FORMULAR SEUS PRÓPRIOS JUÍZOS o direito de expressar suas opiniões livremente sobre todos os assuntos que a afetem, levando-se devidamente em conta essas opiniões em função da IDADE e da MATURIDADE. 2) Para tanto, será dada à criança a oportunidade de ser ouvida em todo PROCESSO JUDICIAL OU ADMINISTRATIVO que a afete, diretamente ou por representante/órgão apropriado, conforme as regras processuais.',
    prova:
      'O 4º PRINCÍPIO FUNDAMENTAL (participação). Dois filtros: a criança deve ser capaz de formar juízo próprio, e o PESO da opinião varia com idade e maturidade. No Brasil, eco no art. 100, XII, e art. 28, §1º, do ECA (escuta especializada e depoimento especial: Lei 13.431/2017).',
    pegadinha:
      'Dizer que a opinião da criança é VINCULANTE ou decisiva — ela deve ser “devidamente levada em conta”, não obedecida; ou restringir a escuta a processos judiciais (também há os administrativos).',
    exemplo:
      'Em ação de guarda, o juiz ouve o adolescente de 15 anos e fundamenta por que seguiu (ou não) sua vontade — participação real, não simbólica.',
    macete: 'Ouvir ≠ obedecer. Quanto mais idade e maturidade, mais peso tem a voz.',
    bancas: ['Cebraspe', 'FGV', 'FCC', 'Vunesp'],
  },
  {
    n: 13,
    titulo: 'Liberdade de expressão',
    sintese: 'Procurar, receber e divulgar ideias',
    bloco: B,
    destaque: true,
    resumo:
      '1) A criança tem direito à liberdade de expressão, incluindo a liberdade de procurar, receber e divulgar informações e ideias de todo tipo, sem fronteiras, de forma oral, escrita, impressa, artística ou por qualquer outro meio de sua escolha. 2) O exercício pode estar sujeito apenas às restrições previstas EM LEI e necessárias para o respeito aos direitos ou à reputação de terceiros, ou para a proteção da segurança nacional, da ordem pública, da saúde ou da moral públicas.',
    prova:
      'Espelha o art. 19 da DUDH aplicado à criança: procurar + receber + divulgar, inclusive por meios ARTÍSTICOS e sem consideração de fronteiras. Restrições só por LEI e com finalidade taxativa.',
    pegadinha:
      'Confundir art. 12 (ser ouvida em processos que a afetam) com art. 13 (liberdade de expressão geral) — são direitos diferentes; ou admitir censura por mera conveniência administrativa.',
    exemplo:
      'Grêmio estudantil que publica jornal crítico à direção da escola exerce o art. 13; a escola não pode censurá-lo sem base legal.',
    macete: 'Art. 12 = voz DENTRO do processo. Art. 13 = voz no MUNDO.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 14,
    titulo: 'Pensamento, consciência e religião',
    sintese: 'Fé da criança + orientação dos pais',
    bloco: B,
    destaque: true,
    resumo:
      '1) Os Estados respeitarão o direito da criança à liberdade de pensamento, de consciência e de crença. 2) Respeitarão também os direitos e deveres dos PAIS ou representantes legais de orientar a criança no exercício desse direito, de modo compatível com a evolução de suas capacidades. 3) A liberdade de professar a própria religião ou crenças estará sujeita apenas às limitações prescritas em LEI e necessárias para proteger a segurança, a ordem, a saúde ou a moral públicas ou os direitos e liberdades fundamentais dos demais.',
    prova:
      'Ponte direta com a Parte 2 da trilogia (Declaração de 1981): mesmo desenho de reserva legal e fins taxativos. A diferença é o §2º: aqui os pais ORIENTAM conforme a evolução das capacidades — a titular do direito é a CRIANÇA.',
    pegadinha:
      'Dizer que a religião da criança é definida pelos pais: eles orientam, não determinam; e a orientação diminui conforme a criança amadurece (art. 5º).',
    exemplo:
      'Adolescente que decide não participar de culto obrigatório na escola tem sua consciência protegida — ainda que os pais professem aquela fé.',
    macete: 'A fé é dela; a bússola é dos pais — e a bússola encolhe conforme ela cresce.',
    bancas: ['FGV', 'FCC', 'Cebraspe'],
  },
  {
    n: 15,
    titulo: 'Associação e reunião pacífica',
    sintese: 'Grêmio, coletivo e roda de amigos',
    bloco: B,
    destaque: true,
    resumo:
      '1) Os Estados reconhecem o direito da criança à liberdade de ASSOCIAÇÃO e à liberdade de realizar REUNIÕES PACÍFICAS. 2) Não serão impostas restrições ao exercício desses direitos além das estabelecidas em conformidade com a lei e que sejam necessárias, numa sociedade DEMOCRÁTICA, ao interesse da segurança e da ordem públicas, da saúde, da moral pública ou dos direitos e liberdades dos demais.',
    prova:
      'Fecha o trio das liberdades civis da criança (13–14–15). Palavras cobradas: associação, reuniões PACÍFICAS e a cláusula da “sociedade democrática”.',
    pegadinha:
      'Afirmar que só adultos podem fundar associações; ou suprimir o adjetivo “pacíficas” para legitimar dispersão de manifestações estudantis ordeiras.',
    exemplo:
      'Criação de grêmio estudantil e assembleias de alunos: direito assegurado (no Brasil, Lei 7.398/85 garante a organização dos grêmios).',
    macete: 'Criança também faz grêmio: associação e reunião — pacíficas, sempre.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 16,
    titulo: 'Privacidade e honra',
    sintese: 'Vida privada, família, casa, carta e honra',
    bloco: B,
    resumo:
      '1) Nenhuma criança será objeto de interferências ARBITRÁRIAS ou ILEGAIS em sua vida particular, família, domicílio ou correspondência, nem de atentados ilegais à sua honra e reputação. 2) A criança tem direito à proteção da lei contra tais interferências ou atentados.',
    prova:
      'É o art. 12 da DUDH em versão infantil. Lembre-se do rol completo — privacidade, família, domicílio, correspondência + HONRA e REPUTAÇÃO — e do duplo filtro: arbitrária OU ilegal.',
    pegadinha:
      'Esquecer honra e reputação; ou sustentar que o poder familiar autoriza devassa ilimitada — a privacidade da criança também vale perante os pais, à luz do art. 5º.',
    exemplo:
      'Divulgação de imagem de adolescente em ato infracional pela imprensa é vedada (no Brasil, art. 143 do ECA) — aplicação direta do art. 16.',
    macete: 'A criança também tem cadeado na porta e na fama.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 17,
    titulo: 'Acesso à informação e meios de comunicação',
    sintese: 'Mídia que informa e protege',
    bloco: B,
    resumo:
      'Os Estados reconhecem a função importante dos meios de comunicação e assegurarão o acesso da criança a informações de fontes nacionais e internacionais voltadas ao seu bem-estar social, espiritual, moral, saúde física e mental. Para tanto: estimularão a difusão de materiais benéficos; a cooperação internacional; a produção e difusão de livros infantis; o atendimento às necessidades linguísticas de crianças indígenas e minoritárias; e a elaboração de DIRETRIZES para proteger a criança de informações prejudiciais ao seu bem-estar (arts. 13 e 18 observados).',
    prova:
      'Duplo movimento: promover o acesso a boa informação E proteger de conteúdo nocivo (é a base internacional da classificação indicativa). Detalhe cobrado: atenção às necessidades linguísticas de crianças indígenas e de minorias.',
    pegadinha:
      'Ler o artigo como autorização de censura ampla: as diretrizes protetivas devem respeitar os arts. 13 (expressão) e 18 (responsabilidade dos pais).',
    exemplo:
      'A classificação indicativa brasileira (art. 74 do ECA) e a produção de livros infantis em línguas indígenas dialogam com o art. 17.',
    macete: 'Art. 17: abrir a porta da boa informação e filtrar a porta da nociva.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 18,
    titulo: 'Responsabilidade comum dos pais',
    sintese: 'Pai e mãe juntos; Estado apoia',
    bloco: C,
    resumo:
      '1) Os Estados envidarão esforços para assegurar o reconhecimento do princípio de que AMBOS os pais têm obrigações COMUNS na educação e no desenvolvimento da criança — cabendo-lhes a responsabilidade primordial, tendo o interesse maior da criança como preocupação fundamental. 2) O Estado prestará assistência adequada aos pais e responsáveis e assegurará o desenvolvimento de instituições e serviços de cuidado infantil. 3) Os Estados adotarão medidas para que as crianças cujos pais TRABALHEM tenham direito a serviços e instalações de cuidado (creches).',
    prova:
      'Três camadas: responsabilidade COMUM de pai e mãe (nada de “a mãe cuida”); responsabilidade PRIMORDIAL dos pais com apoio estatal (subsidiariedade); e o dever de creches para filhos de trabalhadores (§3º — eco do art. 7º, XXV, da CF).',
    pegadinha:
      'Inverter a ordem e dizer que o Estado tem responsabilidade primordial — ela é dos PAIS, com assistência estatal; ou omitir o dever de creche.',
    exemplo:
      'Rede pública de creches em horário compatível com a jornada de trabalho é execução direta do art. 18, §3º.',
    macete: 'Pais na frente, Estado no apoio — e creche para quem trabalha.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 19,
    titulo: 'Proteção contra violência e maus-tratos',
    sintese: 'Zero violência, inclusive dos pais',
    bloco: E,
    resumo:
      '1) Os Estados adotarão todas as medidas legislativas, administrativas, sociais e educacionais para proteger a criança contra TODA FORMA de violência física ou mental, abuso ou tratamento negligente, maus-tratos ou exploração, inclusive abuso sexual, enquanto estiver sob a guarda dos pais, de representante legal ou de qualquer outra pessoa responsável. 2) Essas medidas devem incluir procedimentos eficazes de programas sociais, prevenção, identificação, notificação, investigação, tratamento e acompanhamento — e, quando apropriado, intervenção judiciária.',
    prova:
      'A expressão-chave: “TODA FORMA de violência física ou mental” — o Comitê lê como vedação inclusive do castigo físico “educativo” (palmada) e da humillação. Note que a proteção vale sobretudo contra quem tem a guarda.',
    pegadinha:
      'Admitir castigo físico “moderado” com finalidade educativa — incompatível com o art. 19; ou restringir a proteção à violência física, esquecendo a mental e a negligência.',
    exemplo:
      'No Brasil, a Lei 13.010/2014 (“Lei Menino Bernardo”) veda castigo físico e tratamento cruel ou degradante — internalização do art. 19.',
    macete: 'Art. 19: nenhuma palmada é “pedagógica”. Violência física OU mental, zero.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 20,
    titulo: 'Criança privada do meio familiar',
    sintese: 'Proteção alternativa com continuidade',
    bloco: C,
    resumo:
      '1) A criança temporária ou permanentemente privada de seu meio familiar, ou cujo interesse maior exija que não permaneça nele, terá direito a PROTEÇÃO E ASSISTÊNCIA ESPECIAIS do Estado. 2) Os Estados garantirão cuidados alternativos conforme a lei. 3) Entre eles: colocação em lar de adoção, a “kafalah” do direito islâmico, adoção ou, se necessário, colocação em instituições adequadas — considerando-se sempre a CONTINUIDADE da educação e a origem étnica, religiosa, cultural e linguística da criança.',
    prova:
      'Dois pontos de ouro: a menção expressa à KAFALAH (institutо islâmico de acolhimento sem vínculo de filiação) e o dever de respeitar a continuidade cultural, religiosa e linguística. A institucionalização aparece por último (“se necessário”).',
    pegadinha:
      'Tratar a instituição como primeira opção — a lógica é a excepcionalidade e a preferência familiar (no Brasil, art. 19, §1º, e art. 101, §1º, do ECA).',
    exemplo:
      'Criança indígena acolhida deve, preferencialmente, permanecer na comunidade ou com família da mesma etnia (ECA, art. 28, §6º).',
    macete: 'Família primeiro; instituição por último. E não se apaga a cultura da criança.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 21,
    titulo: 'Adoção',
    sintese: 'Interesse maior é consideração PRIMORDIAL',
    bloco: C,
    destaque: true,
    resumo:
      'Os Estados que admitem a adoção assegurarão que o INTERESSE MAIOR da criança seja a consideração primordial e que: a) a adoção seja autorizada por autoridades competentes, conforme a lei, com informação fidedigna e consentimento informado dos interessados; b) a ADOÇÃO INTERNACIONAL seja considerada meio alternativo de cuidado, caso a criança não possa ser colocada em lar de adoção ou cuidada adequadamente em seu país de origem (SUBSIDIARIEDADE); c) a criança adotada em outro país goze de salvaguardas e normas equivalentes às da adoção nacional; d) a adoção internacional não resulte em benefícios financeiros indevidos; e) promover acordos internacionais sobre o tema.',
    prova:
      'Aqui o interesse da criança é “THE paramount consideration” — consideração MÁXIMA (grau superior ao art. 3º, que é “primordial” entre outras). E a regra de ouro: a adoção internacional é SUBSIDIÁRIA (medida excepcional, quando esgotadas as alternativas no país de origem).',
    pegadinha:
      'Inverter a subsidiariedade, colocando a adoção internacional em pé de igualdade com a nacional; ou permitir ganho financeiro na intermediação.',
    exemplo:
      'No Brasil, a adoção internacional só ocorre após esgotadas as buscas no cadastro nacional (ECA, art. 31 e art. 51) — pura aplicação da alínea “b”.',
    macete: 'Adoção: interesse MÁXIMO da criança; e o passaporte vem por último.',
    bancas: ['FCC', 'Cebraspe', 'FGV'],
  },
  {
    n: 22,
    titulo: 'Crianças refugiadas',
    sintese: 'Proteção + busca dos familiares',
    bloco: E,
    resumo:
      '1) A criança que solicite refúgio ou seja considerada refugiada receberá proteção e assistência humanitária adequadas, acompanhada ou não dos pais. 2) Os Estados cooperarão com a ONU e organizações competentes para PROTEGER a criança e LOCALIZAR seus pais ou familiares, a fim de obter as informações necessárias à reunião familiar; não sendo possível localizá-los, a criança receberá a mesma proteção de qualquer outra criança privada de seu meio familiar (art. 20).',
    prova:
      'Duas obrigações: proteção humanitária e busca ativa de familiares. E a cláusula de equiparação: criança refugiada desacompanhada = criança privada do meio familiar (art. 20).',
    pegadinha:
      'Condicionar a proteção ao reconhecimento formal da condição de refugiada — o texto alcança quem apenas SOLICITA refúgio; ou exigir a presença dos pais.',
    exemplo:
      'Adolescente venezuelano desacompanhado na fronteira: acolhimento imediato, busca de familiares e, na falta deles, medida protetiva como qualquer criança brasileira sem família.',
    macete: 'Refugiada sozinha = criança sem família: mesma proteção, sem discussão.',
    bancas: ['FGV', 'AOCP'],
  },
  {
    n: 23,
    titulo: 'Crianças com deficiência',
    sintese: 'Vida plena, digna e com autonomia',
    bloco: D,
    resumo:
      '1) A criança com deficiência (mental ou física) deverá desfrutar de vida plena e decente, em condições que garantam dignidade, autonomia e participação ativa na comunidade. 2) Reconhece-se o direito a cuidados especiais, com assistência adequada aos responsáveis, conforme os recursos disponíveis. 3) A assistência será GRATUITA sempre que possível, considerando a situação econômica dos pais, e destinada a assegurar acesso efetivo à educação, capacitação, saúde, reabilitação, preparação para o emprego e recreação — visando à máxima INTEGRAÇÃO SOCIAL e ao desenvolvimento individual. 4) Intercâmbio internacional de informações, com atenção especial aos países em desenvolvimento.',
    prova:
      'Palavras de prova: dignidade, autonomia, participação ativa e gratuidade “sempre que possível”. É o embrião da Convenção sobre os Direitos das Pessoas com Deficiência (2006, no Brasil com status de EMENDA CONSTITUCIONAL — Dec. 6.949/2009).',
    pegadinha:
      'Reduzir o artigo a “assistência médica”; ou confundir os decretos: 99.710/1990 é a CDC; 6.949/2009 é a Convenção sobre Pessoas com Deficiência.',
    exemplo:
      'Matrícula em escola comum com apoio especializado (educação inclusiva, Lei 13.146/2015) realiza o objetivo de máxima integração social.',
    macete: 'Art. 23: não é caridade, é INTEGRAÇÃO com autonomia.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 24,
    titulo: 'Saúde e serviços médicos',
    sintese: 'Mais alto padrão + fim de práticas nocivas',
    bloco: D,
    resumo:
      '1) Direito de gozar do MAIS ALTO PADRÃO POSSÍVEL de saúde e dos serviços para tratamento e recuperação, sem que nenhuma criança seja privada do acesso. 2) Medidas: reduzir a mortalidade infantil; assistência médica e cuidados primários; combater a doença e a desnutrição (inclusive com alimentos nutritivos e água potável); assistência pré e pós-natal às mães; informação e educação sobre saúde, nutrição, aleitamento materno, higiene, saneamento e prevenção de acidentes; e serviços de planejamento familiar. 3) Os Estados adotarão medidas eficazes para ABOLIR PRÁTICAS TRADICIONAIS PREJUDICIAIS à saúde da criança. 4) Cooperação internacional, com atenção aos países em desenvolvimento.',
    prova:
      'O §3º é queridinho: obrigação de abolir práticas tradicionais nocivas — leitura consagrada contra a mutilação genital feminina e o casamento infantil. Cultura NÃO justifica dano à saúde da criança.',
    pegadinha:
      'Relativizar o §3º em nome do respeito cultural; ou trocar “mais alto padrão possível de saúde” por “atendimento básico mínimo”.',
    exemplo:
      'Campanhas de aleitamento materno e o combate internacional à mutilação genital feminina são as duas faces do art. 24.',
    macete: 'Saúde no padrão máximo — e tradição não passa na frente do corpo da criança.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 25,
    titulo: 'Revisão periódica da colocação',
    sintese: 'Acolhimento sob reavaliação constante',
    bloco: C,
    resumo:
      'A criança internada em estabelecimento pelas autoridades competentes para fins de atendimento, proteção ou tratamento de saúde física ou mental tem direito à REVISÃO PERIÓDICA do tratamento e de todos os aspectos relativos à sua internação.',
    prova:
      'Artigo curto e cobrado: nenhuma colocação é definitiva por inércia — há dever de reavaliação periódica. No Brasil, o ECA determina reavaliação do acolhimento no máximo a cada 3 meses (art. 19, §1º).',
    pegadinha:
      'Dizer que a revisão ocorre apenas a pedido da família ou do Ministério Público — ela é um dever automático das autoridades.',
    exemplo:
      'Audiência concentrada semestral nas Varas da Infância para reavaliar todas as crianças acolhidas: aplicação do art. 25.',
    macete: 'Art. 25: quem foi colocado precisa ser revisto — acolhimento não é depósito.',
    bancas: ['Vunesp', 'FCC'],
  },
  {
    n: 26,
    titulo: 'Previdência e seguro social',
    sintese: 'A criança como beneficiária',
    bloco: D,
    resumo:
      '1) Reconhece-se a toda criança o direito de usufruir da PREVIDÊNCIA SOCIAL, inclusive do seguro social, devendo os Estados adotar as medidas necessárias para a plena consecução desse direito conforme a legislação nacional. 2) Os benefícios serão concedidos considerando os recursos e a situação da criança e dos responsáveis por sua manutenção, bem como qualquer outra consideração relativa à solicitação.',
    prova:
      'A criança é titular de direito previdenciário/assistencial — não mero apêndice do adulto. É a base internacional de benefícios como o BPC e programas de transferência de renda.',
    pegadinha:
      'Dizer que a criança só pode ser dependente, nunca beneficiária; ou desconsiderar o critério de renda do §2º.',
    exemplo:
      'Pensão por morte ao filho menor e o Benefício de Prestação Continuada para criança com deficiência são concretizações do art. 26.',
    macete: 'Art. 26: a criança tem CPF na seguridade.',
    bancas: ['AOCP'],
  },
  {
    n: 27,
    titulo: 'Nível de vida adequado',
    sintese: 'Pais pagam; Estado complementa; pensão se cobra',
    bloco: D,
    resumo:
      '1) Direito a um nível de vida adequado ao desenvolvimento físico, mental, espiritual, moral e social. 2) Cabe aos PAIS ou responsáveis a responsabilidade PRIMORDIAL de propiciar as condições de vida necessárias, dentro de suas possibilidades e meios financeiros. 3) O Estado adotará medidas para ajudar os pais, oferecendo, em caso de necessidade, assistência material e programas de apoio — especialmente quanto a nutrição, vestuário e habitação. 4) Os Estados tomarão medidas para assegurar o PAGAMENTO DA PENSÃO ALIMENTÍCIA pelos pais ou responsáveis, inclusive quando residam no exterior, promovendo acordos internacionais.',
    prova:
      'O §4º é ouro: dever estatal de assegurar a cobrança de ALIMENTOS, inclusive no exterior (Convenção de Nova York sobre Prestação de Alimentos — no Brasil, Dec. 56.826/1965). O trio nutrição, vestuário e habitação também cai.',
    pegadinha:
      'Atribuir ao Estado a responsabilidade primordial pelo sustento — ela é dos pais, “dentro de suas possibilidades”, com apoio subsidiário do Estado.',
    exemplo:
      'Execução de alimentos contra genitor residente no exterior, via autoridade central e cooperação jurídica internacional: art. 27, §4º.',
    macete: 'Art. 27: pai paga, Estado ajuda — e a fronteira não livra ninguém da pensão.',
    bancas: ['FCC', 'FGV'],
  },
  {
    n: 28,
    titulo: 'Direito à educação',
    sintese: 'Primário obrigatório e gratuito; disciplina digna',
    bloco: D,
    resumo:
      '1) Direito à educação, em igualdade de oportunidades, devendo os Estados: a) tornar o ensino PRIMÁRIO OBRIGATÓRIO e GRATUITO para todos; b) estimular o ensino secundário (geral e profissional), tornando-o disponível e acessível, com gratuidade e assistência financeira quando necessário; c) tornar o ensino SUPERIOR acessível a todos com base na CAPACIDADE (mérito); d) tornar disponíveis informações e orientação educacional e profissional; e) adotar medidas para estimular a FREQUÊNCIA e reduzir a EVASÃO escolar. 2) A DISCIPLINA ESCOLAR deve ser aplicada de modo compatível com a DIGNIDADE humana da criança e com a Convenção. 3) Cooperação internacional, com atenção aos países em desenvolvimento.',
    prova:
      'Escadinha idêntica à do art. 26 da DUDH: primário obrigatório e gratuito; secundário acessível; superior pelo mérito. O §2º (disciplina compatível com a dignidade) é exclusivo desta Convenção e veda castigo físico na escola.',
    pegadinha:
      'Dizer que a Convenção exige ensino superior gratuito ou obrigatório; ou ignorar o §2º e admitir punições humilhantes “pedagógicas”.',
    exemplo:
      'Suspender aluno é possível; expô-lo a ridículo público ou castigo físico, não — o §2º proíbe.',
    macete: 'Grátis e obrigatório só o primário. Superior pelo mérito. E disciplina sem humilhação.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 29,
    titulo: 'Objetivos da educação',
    sintese: 'Para que serve educar',
    bloco: D,
    resumo:
      '1) A educação deve estar orientada para: a) desenvolver a personalidade, as aptidões e a capacidade mental e física da criança em todo o seu potencial; b) imbuir o respeito aos direitos humanos e liberdades fundamentais e à Carta da ONU; c) imbuir o respeito aos PAIS, à identidade cultural, ao idioma e aos valores da criança, do país de residência e do país de origem, e às civilizações diferentes; d) preparar a criança para uma vida responsável em sociedade livre, com espírito de compreensão, paz, tolerância, igualdade de sexos e amizade entre todos os povos; e) imbuir o respeito ao MEIO AMBIENTE. 2) Nada impedirá a liberdade de particulares de criar e dirigir instituições de ensino, observados os princípios do §1º e os padrões mínimos do Estado.',
    prova:
      'Os cinco objetivos (a–e) são cobrados por eliminação: o mais “esquecido” é o respeito ao MEIO AMBIENTE (alínea “e”) e a igualdade de SEXOS (alínea “d”). O §2º garante a liberdade de ensino privado, com padrões mínimos.',
    pegadinha:
      'Negar que o meio ambiente conste dos objetivos educacionais da Convenção; ou dizer que a escola privada não se sujeita aos princípios do §1º.',
    exemplo:
      'Educação ambiental e projetos de cultura de paz no currículo: art. 29 em sala de aula.',
    macete: 'Educar para: personalidade, DH, cultura/pais, paz e igualdade, e MEIO AMBIENTE.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 30,
    titulo: 'Crianças indígenas e de minorias',
    sintese: 'Cultura, religião e idioma próprios',
    bloco: D,
    resumo:
      'Nos Estados onde existam minorias étnicas, religiosas ou linguísticas, ou pessoas de origem indígena, não será negado à criança que pertença a tais minorias ou que seja indígena o direito de, em comunidade com os demais membros de seu grupo, ter sua própria cultura, professar e praticar sua própria religião e utilizar seu próprio IDIOMA.',
    prova:
      'A tríade protegida: CULTURA + RELIGIÃO + IDIOMA, sempre “em comunidade com os demais membros do grupo” (dimensão coletiva). Menção expressa às crianças indígenas.',
    pegadinha:
      'Reduzir o artigo à língua; ou tratá-lo como direito meramente individual — a fruição é comunitária.',
    exemplo:
      'Educação escolar indígena bilíngue e intercultural (CF, art. 210, §2º; ECA, art. 58) concretiza o art. 30.',
    macete: 'Art. 30: C.R.I. — Cultura, Religião e Idioma, junto com os seus.',
    bancas: ['Vunesp', 'FCC'],
  },
  {
    n: 31,
    titulo: 'Lazer, brincar e cultura',
    sintese: 'Brincar é direito humano',
    bloco: D,
    resumo:
      '1) Direito ao DESCANSO e ao LAZER, ao divertimento e às atividades recreativas próprias da idade, bem como à livre participação na vida cultural e artística. 2) Os Estados respeitarão e promoverão o direito da criança de participar plenamente da vida cultural e artística e estimularão a oferta de oportunidades adequadas e igualitárias de atividade cultural, artística, recreativa e de lazer.',
    prova:
      'O “artigo do brincar”: o lúdico é direito autônomo, e não recompensa. Combinação de prova: descanso + lazer + brincar + vida cultural e artística.',
    pegadinha:
      'Tratar o lazer como mera recomendação sem densidade normativa; ou deixar de citar a participação na vida CULTURAL e ARTÍSTICA.',
    exemplo:
      'Escola que suprime o recreio como punição coletiva contraria o art. 31 (e a dignidade disciplinar do art. 28, §2º).',
    macete: 'Art. 31: brincar não é prêmio — é direito.',
    bancas: ['Vunesp', 'AOCP'],
  },
  {
    n: 32,
    titulo: 'Trabalho infantil e exploração econômica',
    sintese: 'Idade mínima, horário e sanções',
    bloco: E,
    destaque: true,
    resumo:
      '1) Direito de estar protegida contra a EXPLORAÇÃO ECONÔMICA e contra o desempenho de qualquer trabalho perigoso, que interfira em sua educação ou seja nocivo à sua saúde e ao desenvolvimento físico, mental, espiritual, moral ou social. 2) Os Estados adotarão medidas legislativas, administrativas, sociais e educacionais para: a) estabelecer uma IDADE MÍNIMA para admissão em emprego; b) regulamentar HORÁRIOS e CONDIÇÕES de trabalho; c) prever PENALIDADES e sanções para assegurar o cumprimento.',
    prova:
      'A Convenção NÃO fixa a idade mínima em número: manda cada Estado fixá-la (diálogo com as Convenções 138 e 182 da OIT). Decore o tripé do §2º: idade mínima + horários/condições + penalidades.',
    pegadinha:
      'Afirmar que a CDC estabelece 14, 16 ou 18 anos como idade mínima universal — ela não fixa; no Brasil a régua é da CF (art. 7º, XXXIII): proibido abaixo de 16, salvo aprendiz a partir de 14; e nunca noturno, perigoso ou insalubre antes dos 18.',
    exemplo:
      'Programa Jovem Aprendiz a partir dos 14 anos, com jornada compatível e frequência escolar, é compatível com o art. 32.',
    macete: 'Art. 32 = I.H.P.: Idade mínima, Horário, Penalidade. O número quem dá é o país.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 33,
    titulo: 'Drogas e substâncias psicotrópicas',
    sintese: 'Proteger do uso e do uso como “mula”',
    bloco: E,
    destaque: true,
    resumo:
      'Os Estados adotarão todas as medidas apropriadas — inclusive legislativas, administrativas, sociais e educacionais — para proteger a criança contra o USO ILÍCITO de entorpecentes e substâncias psicotrópicas e para impedir que seja UTILIZADA na produção e no tráfico dessas substâncias.',
    prova:
      'Dupla proteção que a banca adora separar: (1) contra o consumo e (2) contra o USO DA CRIANÇA na produção/tráfico — ou seja, a criança recrutada pelo tráfico é VÍTIMA, não apenas infratora.',
    pegadinha:
      'Mencionar só a proteção contra o consumo, esquecendo a instrumentalização no tráfico.',
    exemplo:
      'Adolescente aliciado como “avião” pelo tráfico deve receber medidas protetivas além da resposta socioeducativa — o art. 33 o reconhece como vítima de exploração.',
    macete: 'Art. 33: não usar E não ser usada.',
    bancas: ['Cebraspe', 'AOCP'],
  },
  {
    n: 34,
    titulo: 'Exploração e abuso sexual',
    sintese: 'Prostituição, pornografia e atividade sexual',
    bloco: E,
    destaque: true,
    resumo:
      'Os Estados se comprometem a proteger a criança contra TODAS as formas de exploração e abuso sexual, adotando medidas nacionais, bilaterais e multilaterais para impedir: a) o incentivo ou a coação para que se dedique a qualquer atividade sexual ilegal; b) a exploração no uso para a PROSTITUIÇÃO ou outras práticas sexuais ilegais; c) a exploração no uso em espetáculos ou materiais PORNOGRÁFICOS.',
    prova:
      'Três alíneas (atividade sexual ilegal, prostituição, pornografia) e três níveis de cooperação (nacional, bilateral e multilateral). Conecte com o Protocolo Facultativo de 2000 sobre venda, prostituição e pornografia infantil (BR: Dec. 5.007/2004).',
    pegadinha:
      'Falar em “consentimento” da criança para relativizar a exploração — juridicamente irrelevante; ou esquecer a alínea da pornografia.',
    exemplo:
      'Crimes dos arts. 240 e 241 do ECA (produção e divulgação de cena de sexo com criança) são a face penal brasileira do art. 34.',
    macete: 'Art. 34: A.P.P. — Atividade sexual, Prostituição, Pornografia. Nada disso se consente.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 35,
    titulo: 'Sequestro, venda e tráfico',
    sintese: 'Criança não é mercadoria',
    bloco: E,
    destaque: true,
    resumo:
      'Os Estados tomarão todas as medidas de caráter nacional, bilateral e multilateral necessárias para impedir o SEQUESTRO, a VENDA ou o TRÁFICO de crianças para qualquer fim ou sob qualquer forma.',
    prova:
      'Três verbos: sequestro, venda e tráfico — “para qualquer fim ou sob qualquer forma” (adoção ilegal, trabalho, órgãos, exploração sexual). Não confunda com o art. 11 (transferência ilícita por um dos pais).',
    pegadinha:
      'Restringir o tráfico à finalidade sexual: o artigo é aberto quanto ao fim; ou fundir art. 35 com art. 11.',
    exemplo:
      'Rede que “vende” bebês para adoções irregulares no exterior viola simultaneamente os arts. 21 e 35.',
    macete: 'Art. 35: S.V.T. — Sequestro, Venda, Tráfico. Qualquer fim, qualquer forma.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 36,
    titulo: 'Outras formas de exploração',
    sintese: 'Cláusula de fechamento protetiva',
    bloco: E,
    destaque: true,
    resumo:
      'Os Estados protegerão a criança contra TODAS AS DEMAIS FORMAS de exploração que sejam prejudiciais para qualquer aspecto de seu bem-estar.',
    prova:
      'É a cláusula-vassoura (residual): fecha o bloco 32–36 e alcança explorações não nomeadas — mendicância forçada, exploração em redes sociais/mídia, uso político etc.',
    pegadinha:
      'Tratar os arts. 32 a 35 como rol exaustivo de explorações — o art. 36 existe justamente para impedir essa leitura.',
    exemplo:
      'Adulto que expõe criança em conteúdo digital para lucro, em condições prejudiciais ao seu bem-estar, atrai o art. 36.',
    macete: 'Art. 36 é a peneira fina: o que escapou dos anteriores cai aqui.',
    bancas: ['FGV', 'Cebraspe'],
  },
  {
    n: 37,
    titulo: 'Tortura, pena e privação de liberdade',
    sintese: 'Último recurso, breve prazo, sem perpétua',
    bloco: E,
    destaque: true,
    resumo:
      'Os Estados zelarão para que: a) nenhuma criança seja submetida a tortura nem a tratamento ou pena cruel, desumano ou degradante — NÃO se imporá PENA DE MORTE nem PRISÃO PERPÉTUA SEM POSSIBILIDADE DE LIVRAMENTO por delitos cometidos por menores de 18 anos; b) nenhuma criança seja privada de liberdade de forma ilegal ou arbitrária — a detenção será usada apenas como ÚLTIMO RECURSO e pelo MAIS BREVE PERÍODO possível; c) toda criança privada de liberdade seja tratada com humanidade e respeito à dignidade e às necessidades de sua idade, ficando SEPARADA DOS ADULTOS (salvo se o contrário atender seu interesse maior) e mantendo contato com a família por correspondência e visitas, salvo circunstâncias excepcionais; d) tenha direito à assistência jurídica e a impugnar a legalidade da privação perante autoridade competente, com decisão rápida.',
    prova:
      'Artigo campeão do bloco penal. Grave: proibida pena de morte e perpétua SEM possibilidade de soltura para fatos praticados antes dos 18; privação como ÚLTIMO RECURSO e pelo MENOR TEMPO; separação de adultos; direito de impugnar a legalidade.',
    pegadinha:
      'Afirmar que a Convenção proíbe toda e qualquer privação de liberdade de adolescentes (não: ela a excepcionaliza); ou dizer que veda a prisão perpétua de forma simples — o texto veda a perpétua SEM possibilidade de livramento.',
    exemplo:
      'Internação do adolescente no Brasil: prazo máximo de 3 anos, reavaliação semestral e liberação compulsória aos 21 (ECA, art. 121) — desenho do art. 37, “b”.',
    macete: 'ÚLTIMO recurso, MENOR tempo, LONGE de adulto. Morte e perpétua eterna: jamais.',
    bancas: ['Cebraspe', 'FGV', 'FCC', 'AOCP'],
  },
  {
    n: 38,
    titulo: 'Conflitos armados',
    sintese: 'O artigo dos 15 anos (corrigido em 2000)',
    bloco: E,
    resumo:
      '1) Os Estados respeitarão as normas do direito humanitário aplicáveis em conflitos armados. 2) Adotarão todas as medidas possíveis para que menores de 15 ANOS não participem diretamente de hostilidades. 3) Abster-se-ão de RECRUTAR menores de 15 anos; ao recrutar entre 15 e 18 anos, darão prioridade aos mais velhos. 4) Adotarão medidas para assegurar proteção e cuidado às crianças afetadas por conflito armado.',
    prova:
      'A grande curiosidade: este é o ÚNICO artigo que adota 15 anos (e não 18) — foi a norma mais criticada da Convenção. O Protocolo Facultativo de 2000 elevou o patamar para 18 anos (no Brasil, Decreto 5.006/2004).',
    pegadinha:
      'Dizer que a Convenção proíbe o recrutamento de menores de 18 no próprio texto — no corpo da CDC o limite é 15; a elevação veio pelo PROTOCOLO FACULTATIVO.',
    exemplo:
      'Um Estado que recruta jovens de 16 anos não viola o art. 38 da CDC em si, mas viola o Protocolo de 2000, se dele for parte.',
    macete: 'CDC = 15. Protocolo 2000 = 18. O artigo “errado” que o protocolo consertou.',
    bancas: ['FGV', 'Cebraspe', 'FCC'],
  },
  {
    n: 39,
    titulo: 'Recuperação e reintegração social',
    sintese: 'Cuidar de quem foi vítima',
    bloco: E,
    resumo:
      'Os Estados adotarão todas as medidas apropriadas para estimular a RECUPERAÇÃO FÍSICA E PSICOLÓGICA e a REINTEGRAÇÃO SOCIAL de toda criança vítima de qualquer forma de abandono, exploração, abuso, tortura, tratamento cruel, desumano ou degradante, ou de conflitos armados. A recuperação e a reintegração ocorrerão em ambiente que estimule a SAÚDE, o RESPEITO PRÓPRIO e a DIGNIDADE da criança.',
    prova:
      'A face reparadora da Convenção: não basta punir o agressor, é preciso restaurar a vítima. Trio do ambiente: saúde + respeito próprio + dignidade.',
    pegadinha:
      'Restringir o artigo às vítimas de conflito armado — ele alcança abandono, exploração, abuso e tortura; ou reduzir a “tratamento médico”, ignorando a reintegração social.',
    exemplo:
      'Rede de atendimento psicossocial a crianças vítimas de violência sexual (CREAS, Lei 13.431/2017) executa o art. 39.',
    macete: 'Art. 39: depois do resgate vem o recomeço — corpo, mente e volta à vida.',
    bancas: ['Vunesp', 'FCC'],
  },
  {
    n: 40,
    titulo: 'Justiça juvenil (criança em conflito com a lei)',
    sintese: 'Devido processo + alternativas à judicialização',
    bloco: E,
    destaque: true,
    resumo:
      '1) A criança acusada de infringir a lei penal deve ser tratada de modo compatível com seu senso de DIGNIDADE e valor, fortalecendo o respeito aos direitos humanos e levando em conta sua idade e a importância de promover sua REINTEGRAÇÃO e o desempenho de papel construtivo na sociedade. 2) Garantias mínimas: legalidade e anterioridade; PRESUNÇÃO DE INOCÊNCIA; informação sem demora das acusações; assistência jurídica; decisão sem demora por autoridade competente, independente e imparcial, em audiência justa, com assistência jurídica e, salvo se contrário ao seu interesse, com a presença dos pais; não ser obrigada a testemunhar ou declarar-se culpada; DUPLO GRAU (recurso a instância superior); intérprete gratuito; e respeito PLENO à sua VIDA PRIVADA em todas as fases. 3) Os Estados buscarão estabelecer uma IDADE MÍNIMA de responsabilidade penal e, sempre que possível, medidas para tratar dessas crianças SEM RECORRER A PROCEDIMENTOS JUDICIAIS, respeitados os direitos humanos e as garantias legais. 4) Alternativas à institucionalização: orientação, supervisão, aconselhamento, liberdade vigiada, colocação em lar substituto, programas de educação e formação profissional.',
    prova:
      'O “devido processo legal juvenil”: presunção de inocência, defesa, duplo grau, intérprete, não autoincriminação e privacidade plena. O §3º manda fixar idade mínima (sem definir o número) e privilegiar a DESJUDICIALIZAÇÃO; o §4º lista as alternativas à internação.',
    pegadinha:
      'Dizer que a Convenção fixa a idade mínima de responsabilidade penal — ela apenas determina que cada Estado a estabeleça (no Brasil: 18 anos, CF art. 228; adolescente de 12 a 18 responde por ato infracional no ECA).',
    exemplo:
      'Remissão concedida pelo Ministério Público antes de iniciado o processo (ECA, art. 126) é exatamente a “medida sem recorrer a procedimentos judiciais” do §3º.',
    macete:
      'Art. 40: garantias de adulto + cuidado de criança. Idade mínima quem fixa é o país; internar é o último dos últimos.',
    bancas: ['Cebraspe', 'FGV', 'FCC', 'Vunesp'],
  },
  {
    n: 41,
    titulo: 'Norma mais favorável',
    sintese: 'Prevalece quem protege mais',
    bloco: F,
    resumo:
      'Nada do estipulado na Convenção afetará disposições MAIS CONDUCENTES à realização dos direitos da criança que estejam contidas na legislação de um Estado-parte ou no direito internacional vigente para esse Estado.',
    prova:
      'Princípio pro homine / pro infante: a Convenção é PISO mínimo, nunca teto. Se o ECA for mais protetivo, aplica-se o ECA.',
    pegadinha:
      'Sustentar que a Convenção revoga normas internas mais favoráveis, ou que uniformiza para baixo.',
    exemplo:
      'O ECA prevê proteção integral e prioridade absoluta em grau superior ao texto convencional: prevalece o ECA, por força do art. 41.',
    macete: 'Art. 41: vence quem protege mais — sempre.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 42,
    titulo: 'Divulgação da Convenção',
    sintese: 'Dar a conhecer a adultos e crianças',
    bloco: F,
    resumo:
      'Os Estados-partes comprometem-se a dar aos adultos E às crianças amplo conhecimento dos princípios e disposições da Convenção, mediante meios eficazes e apropriados.',
    prova:
      'Obrigação de DIVULGAÇÃO com duplo destinatário: adultos e crianças. Artigo curto que costuma aparecer como alternativa esquecida.',
    pegadinha: 'Dizer que a divulgação se dirige apenas a agentes públicos ou apenas a adultos.',
    exemplo: 'Cartilhas escolares e campanhas sobre direitos da criança cumprem o art. 42.',
    macete: 'Art. 42: direito que ninguém conhece não se exerce — divulgue para os dois públicos.',
    bancas: ['AOCP'],
  },
  {
    n: 43,
    titulo: 'Comitê dos Direitos da Criança',
    sintese: '18 peritos independentes, mandato de 4 anos',
    bloco: F,
    destaque: true,
    resumo:
      'Cria-se o COMITÊ PARA OS DIREITOS DA CRIANÇA, encarregado de examinar os progressos dos Estados. Composto originalmente por 10 peritos — número elevado para 18 por emenda aprovada em 1995 (em vigor desde 2002) — de elevada autoridade moral e reconhecida competência, eleitos pelos Estados-partes em VOTAÇÃO SECRETA, atuando a TÍTULO PESSOAL, com distribuição geográfica equitativa e mandato de 4 ANOS, reelegíveis.',
    prova:
      'Números de prova: 10 → 18 peritos; mandato de 4 anos; peritos INDEPENDENTES (não representam governos); sede em Genebra. Compare com o Comitê CEDAW (18 → 23) da Parte 3.',
    pegadinha:
      'Manter “10 peritos” sem mencionar a ampliação; dizer que os peritos são delegados dos Estados; ou tratar o Comitê como corte judicial.',
    exemplo:
      'Perita brasileira eleita ao Comitê participa do exame do relatório do próprio Brasil atuando a título pessoal.',
    macete: 'CDC: 10 → 18 peritos. CEDAW: 18 → 23. Ambos com mandato de 4 anos.',
    bancas: ['FCC', 'Cebraspe', 'AOCP'],
  },
  {
    n: 44,
    titulo: 'Relatórios periódicos',
    sintese: 'Prestação de contas: 2 anos, depois 5',
    bloco: F,
    destaque: true,
    resumo:
      'Os Estados apresentam relatórios ao Comitê sobre as medidas adotadas e os progressos alcançados: no prazo de 2 ANOS a contar da entrada em vigor da Convenção para o Estado e, a partir de então, a cada 5 ANOS. Os relatórios indicarão fatores e dificuldades que afetem o cumprimento e devem ser amplamente DIVULGADOS no país.',
    prova:
      'Fórmula “2 + 5”. Atenção ao contraste que as bancas exploram: CEDAW é “1 + 4” (art. 18); a Convenção da Criança é “2 + 5”. Some o dever de dar ampla divulgação interna ao relatório.',
    pegadinha:
      'Trocar os prazos entre as convenções (dizer “1 + 4” aqui) ou omitir a publicidade interna dos relatórios.',
    exemplo:
      'Relatório periódico do Brasil ao Comitê, seguido das “observações finais” com recomendações sobre trabalho infantil e sistema socioeducativo.',
    macete: 'Criança: 2 + 5. Mulher (CEDAW): 1 + 4. Não troque os números.',
    bancas: ['FCC', 'AOCP', 'Cebraspe'],
  },
  {
    n: 45,
    titulo: 'UNICEF e agências especializadas',
    sintese: 'O Comitê não trabalha sozinho',
    bloco: F,
    resumo:
      'Para a implementação efetiva da Convenção: a) o UNICEF e os organismos especializados podem participar do exame das disposições em sua esfera de competência; b) o Comitê pode transmitir a eles relatórios que contenham PEDIDOS DE ASSESSORAMENTO OU ASSISTÊNCIA TÉCNICA; c) o Comitê pode recomendar à Assembleia Geral que solicite ao Secretário-Geral ESTUDOS sobre questões específicas; d) o Comitê pode formular SUGESTÕES E RECOMENDAÇÕES GERAIS, transmitidas aos Estados interessados e à Assembleia Geral.',
    prova:
      'Aqui está a base das “Observações/Comentários Gerais” do Comitê (alínea “d”) e a participação institucional do UNICEF (alínea “a”) — o único órgão nomeado expressamente.',
    pegadinha:
      'Dizer que o UNICEF julga violações ou que as recomendações do Comitê são vinculantes — são sugestões e recomendações.',
    exemplo:
      'Comentário Geral nº 14 (2013), sobre o direito da criança de ter seu melhor interesse como consideração primordial, nasce dessa competência.',
    macete: 'Art. 45: UNICEF entra, o Comitê recomenda, a AG pede estudos.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 46,
    titulo: 'Assinatura',
    sintese: 'Aberta a todos os Estados',
    bloco: G,
    resumo: 'A presente Convenção está aberta à assinatura de todos os Estados.',
    prova: 'Abertura universal à assinatura — é a porta de entrada formal ao tratado.',
    pegadinha: 'Restringir a assinatura a membros da ONU ou a signatários de outros tratados.',
    exemplo: 'O Brasil assinou em 26 de janeiro de 1990, primeiro dia de abertura para assinaturas.',
    macete: 'Art. 46: porta aberta a todo Estado.',
    bancas: ['Vunesp'],
  },
  {
    n: 47,
    titulo: 'Ratificação',
    sintese: 'Depósito junto ao Secretário-Geral',
    bloco: G,
    resumo:
      'A Convenção está sujeita a RATIFICAÇÃO; os instrumentos de ratificação serão depositados junto ao Secretário-Geral das Nações Unidas.',
    prova: 'Assinar ≠ ratificar: a vinculação jurídica nasce com o depósito do instrumento de ratificação.',
    pegadinha: 'Afirmar que a simples assinatura obriga o Estado nos termos do tratado.',
    exemplo: 'Brasil: assinatura em 26/01/1990 e ratificação em 24/09/1990 (promulgação: Decreto 99.710/1990).',
    macete: 'Art. 47: assinou é namoro; ratificou é casamento.',
    bancas: ['AOCP'],
  },
  {
    n: 48,
    titulo: 'Adesão',
    sintese: 'Entrar depois, direto',
    bloco: G,
    resumo:
      'A Convenção permanecerá aberta à ADESÃO de qualquer Estado; os instrumentos de adesão serão depositados junto ao Secretário-Geral.',
    prova: 'Adesão é a via de ingresso para quem não assinou no prazo — mesmo efeito jurídico da ratificação.',
    pegadinha: 'Dizer que só se pode ingressar por assinatura seguida de ratificação.',
    exemplo: 'Estados criados após 1990 aderiram diretamente à Convenção.',
    macete: 'Art. 48: perdeu a assinatura? Adere e pronto.',
    bancas: ['Vunesp'],
  },
  {
    n: 49,
    titulo: 'Entrada em vigor',
    sintese: '20 instrumentos + 30 dias → 2/9/1990',
    bloco: G,
    destaque: true,
    resumo:
      '1) A Convenção entra em vigor no trigésimo dia após a data em que tenha sido depositado o 20º instrumento de ratificação ou adesão. 2) Para cada Estado que ratifique ou adira depois, entra em vigor no 30º dia após o depósito de seu próprio instrumento.',
    prova:
      'Números e datas: 20º instrumento + 30 dias → vigência internacional em 2 DE SETEMBRO DE 1990, menos de um ano após a adoção (20/11/1989) — um recorde de velocidade, comparável à CEDAW (art. 27).',
    pegadinha:
      'Confundir adoção (20/11/1989) com entrada em vigor (2/9/1990); ou trocar o quórum de 20 por 35/50.',
    exemplo:
      'O Brasil ratificou em 24/09/1990: para nós, a Convenção passou a vigorar 30 dias depois, sendo promulgada pelo Decreto 99.710, de 21/11/1990.',
    macete: 'Adotada em 20/11/1989 · em vigor em 2/9/1990 · Brasil: Dec. 99.710/1990.',
    bancas: ['AOCP', 'FCC', 'Cebraspe'],
  },
  {
    n: 50,
    titulo: 'Emendas',
    sintese: 'Propõe o Estado, decide a AG',
    bloco: G,
    resumo:
      'Qualquer Estado-parte pode propor emenda ao Secretário-Geral, que a comunicará aos demais, consultando-os sobre a convocação de conferência. Aprovada a emenda pela maioria dos presentes e votantes e pela Assembleia Geral, entra em vigor quando aceita por dois terços dos Estados-partes, obrigando apenas os que a aceitarem.',
    prova:
      'Foi por este caminho que o número de peritos do Comitê subiu de 10 para 18 (emenda de 1995, em vigor em 2002). A emenda só vincula quem a aceita.',
    pegadinha: 'Dizer que a emenda obriga automaticamente todos os Estados-partes.',
    exemplo: 'Emenda ao art. 43, §2º: a ampliação do Comitê seguiu exatamente este rito.',
    macete: 'Art. 50: emenda vale só para quem disse sim.',
    bancas: ['FGV'],
  },
  {
    n: 51,
    titulo: 'Reservas',
    sintese: 'Nada incompatível com o objeto',
    bloco: G,
    destaque: true,
    resumo:
      '1) O Secretário-Geral receberá e comunicará a todos os Estados o texto das reservas feitas no momento da ratificação ou adesão. 2) NÃO será permitida reserva INCOMPATÍVEL COM O OBJETO E PROPÓSITO da Convenção. 3) As reservas podem ser retiradas a qualquer momento mediante notificação ao Secretário-Geral, que informará os demais Estados.',
    prova:
      'Mesmo filtro da CEDAW (art. 28): reservas são possíveis, salvo as incompatíveis com objeto e propósito — e sempre retiráveis. Este é o artigo que sustenta as críticas do Comitê a reservas amplas.',
    pegadinha:
      'Dizer que a Convenção proíbe qualquer reserva, ou que a reserva é definitiva e irretratável.',
    exemplo:
      'Reservas que esvaziem o art. 14 (liberdade religiosa da criança) são frequentemente contestadas por incompatibilidade com o objeto do tratado.',
    macete: 'Art. 51: pode temperar, não pode descaracterizar o prato — e dá para tirar o tempero depois.',
    bancas: ['FGV', 'Cebraspe'],
  },
  {
    n: 52,
    titulo: 'Denúncia',
    sintese: 'Sair? Só com aviso e 1 ano',
    bloco: G,
    resumo:
      'Um Estado-parte pode denunciar a Convenção mediante notificação ESCRITA ao Secretário-Geral; a denúncia produz efeito UM ANO após a data de recebimento da notificação.',
    prova:
      'Dois elementos: forma escrita e prazo de 1 ano (vacatio de saída). Curiosidade de prova: a CEDAW (Parte 3) não prevê cláusula de denúncia — esta prevê.',
    pegadinha: 'Dizer que a denúncia tem efeito imediato ou que a Convenção é indenunciável.',
    exemplo: 'Notificação protocolada hoje só produziria efeitos daqui a doze meses.',
    macete: 'Art. 52: quem quer sair avisa por escrito e espera um ano.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 53,
    titulo: 'Depositário',
    sintese: 'Guarda com o Secretário-Geral',
    bloco: G,
    resumo: 'O Secretário-Geral das Nações Unidas é designado DEPOSITÁRIO da Convenção.',
    prova: 'Regra padrão dos tratados multilaterais da ONU: o depositário é sempre o Secretário-Geral.',
    pegadinha: 'Apontar o UNICEF, o Comitê ou a Alta Comissária de DH como depositário.',
    exemplo: 'Todos os instrumentos de ratificação e reservas ficam arquivados em Nova York.',
    macete: 'Art. 53: o cofre é do Secretário-Geral.',
    bancas: ['Vunesp'],
  },
  {
    n: 54,
    titulo: 'Textos autênticos',
    sintese: 'Seis idiomas com igual valor',
    bloco: G,
    resumo:
      'O original da Convenção — cujos textos em árabe, chinês, espanhol, francês, inglês e russo são igualmente AUTÊNTICOS — será depositado junto ao Secretário-Geral das Nações Unidas.',
    prova:
      'Fecha a Convenção com as seis línguas oficiais da ONU, todas com o mesmo valor jurídico — igual ao art. 30 da CEDAW.',
    pegadinha: 'Dizer que apenas o inglês e o francês fazem fé, ou incluir o português entre os autênticos.',
    exemplo: 'Divergência de tradução se resolve comparando os seis textos oficiais — o português é versão, não original.',
    macete: 'Art. 54: seis idiomas, um só valor. Português não está na lista.',
    bancas: ['Vunesp', 'AOCP'],
  },
];
