import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'Parte I · Fundamentos e obrigações': '#c19a3d',
  'Parte II · Política e nacionalidade': '#7c3aed',
  'Parte III · Igualdade socioeconômica': '#0f766e',
  'Parte IV · Lei e família': '#c11f5d',
  'Parte V · Comitê CEDAW': '#2f6fb4',
  'Parte VI · Cláusulas finais': '#4b5563',
};

const I = 'Parte I · Fundamentos e obrigações';
const II = 'Parte II · Política e nacionalidade';
const III = 'Parte III · Igualdade socioeconômica';
const IV = 'Parte IV · Lei e família';
const V = 'Parte V · Comitê CEDAW';
const VI = 'Parte VI · Cláusulas finais';

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Definição de discriminação contra a mulher',
    sintese: 'Distinção, exclusão ou restrição por sexo',
    bloco: I,
    destaque: true,
    resumo:
      '“Discriminação contra a mulher” é qualquer distinção, exclusão ou restrição baseada no sexo que tenha por efeito ou finalidade prejudicar ou anular o reconhecimento, gozo ou exercício pelas mulheres — INDEPENDENTEMENTE de seu estado civil, em igualdade com os homens — dos direitos humanos e liberdades fundamentais nos campos político, econômico, social, cultural, civil ou qualquer outro.',
    prova:
      'A definição mais cobrada da Convenção. Três segredos: (i) o trio é distinção–exclusão–restrição, SEM “preferência” (diferente da Declaração de 1981!); (ii) “efeito OU finalidade” alcança a discriminação indireta; (iii) “independentemente do estado civil” é o final que as bancas cortam.',
    pegadinha:
      'Acrescentar “preferência” ao rol (espelho indevido da Declaração racial/religiosa); exigir intenção discriminatória; ou suprimir “independentemente do estado civil”.',
    exemplo:
      'Empresa que não contrata mulheres casadas porque “podem engravidar”: distinção baseada no sexo com efeito excludente — violação direta do art. 1º.',
    macete: 'DER sem P: Distinção, Exclusão, Restrição — e NADA de preferência. Efeito OU finalidade, casada ou solteira.',
    bancas: ['FCC', 'Cebraspe', 'FGV'],
  },
  {
    n: 2,
    titulo: 'Obrigações gerais dos Estados',
    sintese: 'Condenar, constitucionalizar, legislar e revogar',
    bloco: I,
    resumo:
      'Os Estados-partes condenam a discriminação em todas as suas formas e comprometem-se a: incorporar o princípio da igualdade à constituição ou legislação; adotar leis proibitivas com sanções; REVOGAR leis e costumes discriminatórios; eliminar a discriminação cometida por qualquer pessoa, organização ou empresa; e abster-se de todo ato discriminatório no serviço público.',
    prova:
      'Dois ouros: a vedação é HORIZONTAL (atinge particulares: “qualquer pessoa, organização ou empresa”) e o dever de REVOGAR normas discriminatórias — combater também é apagar o passado.',
    pegadinha:
      'Limitar as obrigações a atos estatais; ou dizer que basta “não discriminar” — a Convenção exige AÇÃO positiva, inclusive legislativa e de costumes.',
    exemplo:
      'No Brasil: previsão expressa do art. 5º, I, da CF, a Lei 7.716/89 e a fiscalização do MPT contra anúncios de emprego sexistas materializam o art. 2º.',
    macete: 'Constitui, proíbe, sanciona, REVOGA — e vale contra empresa, ONG e qualquer um.',
    bancas: ['FCC', 'FGV'],
  },
  {
    n: 3,
    titulo: 'Medidas para o pleno desenvolvimento da mulher',
    sintese: 'Ação estatal em todos os campos',
    bloco: I,
    resumo:
      'Os Estados tomarão, em todos os campos — em particular no político, social, econômico e cultural — todas as medidas apropriadas, inclusive legislativas, para assegurar à mulher o pleno desenvolvimento e progresso, com o objetivo de lhe garantir o exercício e gozo dos direitos humanos e liberdades fundamentais em igualdade com o homem.',
    prova:
      'É a cláusula da realização PLENA: não basta declarar igualdade formal — o Estado deve promover a igualdade material (de fato), o que prepara o terreno do art. 4º.',
    pegadinha:
      'Reduzir a atuação estatal aos campos civil e político; o “em particular” mostra que o rol NÃO é fechado: são todos os campos.',
    exemplo:
      'Programas federais de capacitação profissional e empreendedorismo feminino realizam a lógica do art. 3º.',
    macete: 'Art. 3º: igualdade de papel não basta — o Estado constrói a igualdade de verdade.',
    bancas: ['AOCP', 'Cebraspe'],
  },
  {
    n: 4,
    titulo: 'Medidas especiais temporárias (ação afirmativa)',
    sintese: 'MET não é discriminação + maternidade',
    bloco: I,
    destaque: true,
    resumo:
      '1) As medidas especiais TEMPORÁRIAS destinadas a acelerar a igualdade de fato entre homens e mulheres NÃO serão consideradas discriminação, e deverão ser interrompidas quando alcançados os objetivos de igualdade de oportunidade e tratamento. 2) As medidas especiais destinadas a PROTEGER A MATERNIDADE não serão consideradas discriminatórias.',
    prova:
      'O fundamento internacional das AÇÕES AFIRMATIVAS: reparação histórica não é “discriminação reversa”. Dois requisitos eternos de prova: finalidade de acelerar a igualdade DE FATO e CARÁTER TEMPORÁRIO (cessam ao atingir o objetivo). §2º solo: proteger a maternidade.',
    pegadinha:
      'Chamar as medidas de “discriminação contrária”; tratá-las como PERMANENTES; ou esquecer que a cláusula da maternidade tem parágrafo próprio (não depende da temporariedade).',
    exemplo:
      'Cotas de no mínimo 30% de candidaturas femininas (Lei 9.504/97) e ações afirmativas em concursos universitários: METs do art. 4º em ação — válidas enquanto a igualdade de fato não chegar.',
    macete: 'MET = Mãe Excepcional Temporária? Não: Medida Especial TEMPORÁRIA — nasce com prazo de validade. Maternidade está FORA da conta.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'AOCP'],
  },
  {
    n: 5,
    titulo: 'Modificar padrões socioculturais e estereótipos',
    sintese: 'Mudar a cultura, não só a lei',
    bloco: I,
    resumo:
      'Os Estados tomarão medidas para: a) modificar os padrões sociais e culturais de conduta, a fim de eliminar preconceitos e práticas consuetudinárias baseados na ideia de inferioridade ou superioridade de um dos sexos ou em papéis estereotipados; b) garantir que a educação familiar reconheça a maternidade como função social e a RESPONSABILIDADE COMUM do homem e da mulher na criação e desenvolvimento dos filhos — sempre no interesse primordial das crianças.',
    prova:
      'A Convenção ataca a raiz: o machismo é CULTURAL, e a lei sozinha não basta. A alínea “b” é cobrada: criação dos filhos é responsabilidade COMUM (não da mãe), e a maternidade é função social.',
    pegadinha:
      'Atribuir a educação dos filhos prioritariamente à mulher; ou dizer que a CEDAW se limita à esfera jurídica, sem alcançar costumes e estereótipos.',
    exemplo:
      'Material didático que desfaça papéis estereotipados (“médico homem, dona de casa mulher”) implementa a alínea “a” do art. 5º.',
    macete: 'Art. 5º mexe na cultura: fora estereótipo! Filho é obra à dois — não tarefa de mãe.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 6,
    titulo: 'Tráfico de mulheres e exploração da prostituição',
    sintese: 'Supressão de todas as formas',
    bloco: I,
    resumo:
      'Os Estados-partes tomarão todas as medidas apropriadas, inclusive legislativas, para SUPRIMIR todas as formas de tráfico de mulheres e de exploração da prostituição das mulheres.',
    prova:
      'Objeto preciso: tráfico de pessoas (para fim sexual ou laboral) e EXPLORAÇÃO da prostituição — a Convenção combate a exploração (aliciadores, rufiões), em consonância com o art. 4º da DUDH.',
    pegadinha:
      'Dizer que a CEDAW criminaliza a prostituição da própria mulher adulta — o alvo normativo é o tráfico e a exploração por terceiros.',
    exemplo:
      'Operação da Polícia Federal desarticulando rede de aliciamento de mulheres para o exterior: dever do art. 6º em cumprimento.',
    macete: 'Art. 6º: contra tráfico e cafetinagem — supressão total, sem meio-termo.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 7,
    titulo: 'Vida política e pública',
    sintese: 'Votar, ser eleita, governar, associar-se',
    bloco: II,
    destaque: true,
    resumo:
      'Igualdade na vida política e pública: direito de votar em todas as eleições e referendos e de ser elegível para todos os órgãos; participar da formulação da política governamental e ocupar cargos públicos em TODOS os níveis; e participar de organizações e associações não governamentais.',
    prova:
      'Três frentes: eleitoral (votar/ser elegível), administrativa (formular políticas e ocupar qualquer cargo público) e associativa (ONGs — a alínea que as bancas esquecem). É o fundamento internacional das cotas de candidaturas femininas.',
    pegadinha:
      'Suprimir a participação em ONGs do rol; condicionar o voto a requisitos diferentes dos exigidos aos homens; restringir cargos militares ou judiciais.',
    exemplo:
      'Lei 9.504/97 (mínimo de 30% e máximo de 70% por sexo nas chapas) é a tradução do art. 7º para o sistema eleitoral brasileiro.',
    macete: 'Urna, cargo e ONG: a política completa da mulher — em TODOS os níveis.',
    bancas: ['FCC', 'Cebraspe', 'AOCP'],
  },
  {
    n: 8,
    titulo: 'Representação internacional',
    sintese: 'Representar o país mundo afora',
    bloco: II,
    destaque: true,
    resumo:
      'Os Estados garantirão à mulher, em igualdade com o homem, a oportunidade de representar seu governo no plano internacional e de participar dos trabalhos das organizações internacionais.',
    prova:
      'Representação DIPLOMÁTICA e multilateral em igualdade: embaixadoras, delegadas, juízas internacionais. A banca testa se o candidato sabe que o art. 8º sai das fronteiras nacionais.',
    pegadinha:
      'Dizer que a garantia se restringe a “cargos técnicos”; ou condicioná-la à proporção de mulheres no serviço exterior de cada país — o texto não admite condição.',
    exemplo:
      'Nomeação de diplomata brasileira para presidir órgão de tratado da ONU: exercício concreto do art. 8º.',
    macete: 'Art. 8º = passaporte diplomático: o mundo também é posto de trabalho dela.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 9,
    titulo: 'Nacionalidade',
    sintese: 'Casar não troca passaporte',
    bloco: II,
    destaque: true,
    resumo:
      '1) Igualdade com os homens para adquirir, conservar ou MUDAR de nacionalidade: nem o casamento com estrangeiro nem a mudança de nacionalidade do marido alteram automaticamente a da mulher. 2) Igualdade também quanto à nacionalidade DOS FILHOS.',
    prova:
      'Dois núcleos: a nacionalidade da mulher é AUTÔNOMA (não gruda na do marido) e a transmissão da nacionalidade aos filhos é igual — nada de regras patrilineares.',
    pegadinha:
      'Afirmar que casar com estrangeiro acarreta perda/automaticidade de nacionalidade; ou que só o pai transmite a nacionalidade aos filhos.',
    exemplo:
      'Leis que historicamente retiravam a nacionalidade de quem se casava com estrangeiro (comuns até o século XX) são exatamente o que o art. 9º proíbe.',
    macete: 'Art. 9º: o passaporte é DELA — e passa aos filhos igual ao do pai.',
    bancas: ['FCC', 'AOCP', 'Cebraspe'],
  },
  {
    n: 10,
    titulo: 'Educação',
    sintese: 'Mesma escola, mesmo livro, mesma chance',
    bloco: III,
    destaque: true,
    resumo:
      'Igualdade plena na educação: mesmas condições de orientação profissional, currículos, exames, corpo docente, instalações e bolsas; eliminação de papéis estereotipados em todos os níveis; coeducação; mesmas oportunidades no esporte e na cultura física; redução da evasão escolar feminina; e acesso a informações de saúde, inclusive sobre PLANAGEM FAMILIAR.',
    prova:
      'Sequência viva de prova: eliminar estereótipos; combater a EVASÃO feminina; informação sobre planejamento familiar dentro da educação. A coeducação (mesma escola) é vista como instrumento de igualdade.',
    pegadinha:
      'Dizer que a CEDAW incentiva escolas separadas por sexo; ou retirar o planejamento familiar e o esporte do escopo educacional.',
    exemplo:
      'Programa que oferece creche no campus para reduzir a evasão de mães estudantes: política pública à luz do art. 10.',
    macete: 'Art. 10: currículo igual, estereótipo fora, evasão no chão — e planejamento familiar na mochila.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 11,
    titulo: 'Emprego e trabalho',
    sintese: 'Igualdade no trabalho + valor igual',
    bloco: III,
    destaque: true,
    resumo:
      '1) Direito inalienável ao trabalho em igualdade: mesmas oportunidades, livre escolha da profissão, promoção e estabilidade; remuneração igual, incluídos benefícios, e IGUALDADE DE TRATAMENTO POR TRABALHO DE IGUAL VALOR; seguridade e saúde no trabalho. 2) Proibição de dispensa por gravidez, licença-maternidade ou estado civil; licença-maternidade remunerada sem perda de emprego nem de antiguidade; incentivo à rede de assistência infantil; proteção especial à grávida em trabalho comprovadamente nocivo.',
    prova:
      'A fórmula campeã da FGV: “trabalho de IGUAL VALOR” — não se limita ao “mesmo cargo/função”. Some: vedação de dispensa por gravidez/estado civil, licença remunerada e creches (art. 11, §2º, “c”).',
    pegadinha:
      'Restringir a equiparação salarial a funções idênticas; admitir estabilidade apenas “quando houver convenção coletiva” — a proibição de dispensa por gravidez é norma da CEDAW em si.',
    exemplo:
      'Equiparação salarial entre enfermagem (predominância feminina) e função técnica equivalente (predominância masculina), de valor comparável, realiza o “igual valor” do art. 11. No Brasil, reforços: CF art. 7º, XXX, e Lei 14.611/2023.',
    macete: 'Art. 11: não é “mesmo cargo”, é MESMO VALOR. E grávida não é motivo de rua: licença paga e emprego garantido.',
    bancas: ['FGV', 'FCC', 'Cebraspe'],
  },
  {
    n: 12,
    titulo: 'Saúde',
    sintese: 'Saúde igual + ciclo gravídico protegido',
    bloco: III,
    destaque: true,
    resumo:
      '1) Igualdade de acesso aos serviços de saúde, incluídos os de planejamento familiar. 2) Serviços apropriados em relação à gravidez, o parto e o pós-parto — gratuitos quando necessário — e nutrição adequada durante a gestação e a lactação.',
    prova:
      'Dois andares: acesso geral em igualdade (com planejamento familiar dentro) e o ciclo gravídico completo — pré-natal, parto, puerpério e nutrição — com gratuidade quando necessária.',
    pegadinha:
      'Retirar o planejamento familiar do art. 12º; ou limitar a proteção ao parto — a Convenção cobre gravidez, confinamento e PÓS-PARTO.',
    exemplo:
      'O pré-natal universal do SUS e o programa de aleitamento materno materializam o art. 12º no Brasil.',
    macete: 'Art. 12: do exame ao leite — gravidez, parto e pós-parto, grátis quando precisar.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 13,
    titulo: 'Vida econômica e social',
    sintese: 'Crédito próprio sem aval de ninguém',
    bloco: III,
    resumo:
      'Igualdade na vida econômica e social: direito a benefícios familiares; direito a empréstimos bancários, hipotecas e outras formas de crédito financeiro; e direito de participar de atividades recreativas, do esporte e de todos os aspectos da vida cultural.',
    prova:
      'O “crédito sem marido”: em muitos países (e no Brasil, até o Código Civil garantir plena capacidade), mulher casada dependia de autorização do cônjuge para contratos financeiros — o art. 13 enterra essa tutela.',
    pegadinha:
      'Subordinar empréstimos e hipotecas à anuência do cônjuge; esquecer que até esporte e recreação estão no rol.',
    exemplo:
      'Financiamento habitacional contratado por mulher sem aval do marido: normalidade construída pelo art. 13.',
    macete: 'Art. 13: benefício, banco e lazer — a carteira e o fim de semana também são iguais.',
    bancas: ['Vunesp', 'AOCP'],
  },
  {
    n: 14,
    titulo: 'Mulheres das zonas rurais',
    sintese: 'O campo entra na Convenção',
    bloco: III,
    destaque: true,
    resumo:
      'Os Estados reconhecerão os problemas particulares das mulheres rurais e seu papel significativo na sobrevivência econômica da família, garantindo-lhes: participação no planejamento do desenvolvimento; saúde adequada (inclusive planejamento familiar); seguridade social; formação e educação; organização e cooperativas; crédito e empréstimos; e condições de vida adequadas (moradia, saneamento, água, energia, transporte e comunicações).',
    prova:
      'Número 1 da curiosidade de banca: a CEDAW “foi pioneira ao tratar expressamente das mulheres RURAIS” — artigo único no Direito dos Tratados de DH. O rol detalhado (cooperativas, crédito, saneamento) vira alternativa.',
    pegadinha:
      'Dizer que a CEDAW é um instrumento “urbano”; ou que o art. 14 limita-se a garantir voto às agricultoras — o artigo é socioeconômico e amplo.',
    exemplo:
      'Linhas de crédito rural exclusivas para agricultoras familiares e programas de cisternas com protagonismo feminino: desenho do art. 14.',
    macete: 'Art. 14: roça com lugar de fala — saúde, crédito, cooperativa e água encanada.',
    bancas: ['FCC', 'AOCP', 'Cebraspe'],
  },
  {
    n: 15,
    titulo: 'Igualdade perante a lei',
    sintese: 'Capacidade civil plena',
    bloco: IV,
    resumo:
      '1) Igualdade perante a lei. 2) Idêntica capacidade legal em matéria civil: contratar, administrar bens e participar em igualdade de todos os estágios do processo judicial. 3) São NULOS os contratos e instrumentos que restrinjam a capacidade legal da mulher. 4) Igualdade quanto à liberdade de locomoção e à escolha de residência e domicílio.',
    prova:
      'Capacidade jurídica PLENA — e o dispositivo juridicamente afiado: cláusulas que restrinjam a capacidade da mulher são NULAS de pleno direito (nulidade, não anulabilidade).',
    pegadinha:
      'Admitir capacidade reduzida da mulher casada (resquício histórico); ou dizer que a nulidade do §3º depende de sentença — o texto a declara nula.',
    exemplo:
      'Contrato que imponha à mulher assinatura do marido como condição de validade: nulo pelo art. 15, §3º.',
    macete: 'Art. 15: capacidade total; quem limitar, nasce falando para o vazio.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 16,
    titulo: 'Casamento e relações familiares',
    sintese: 'Simétricos do altar à guarda; criança não casa',
    bloco: IV,
    destaque: true,
    resumo:
      '1) Igualdade plena: casar; escolher livremente o cônjuge; direitos e deveres iguais durante o casamento e na dissolução; iguais direitos sobre os filhos (incluída a guarda); iguais direitos pessoais (escolher profissão, ocupação e SOBRENOME); iguais direitos patrimoniais; e a mesma liberdade para decidir sobre o número e o espaçamento dos filhos, com acesso à informação e aos meios. 2) O noivado e o casamento de CRIANÇA não terão efeito legal, devendo os Estados fixar idade mínima e tornar obrigatório o registro do casamento.',
    prova:
      'O artigo mais denso: igualdade até no SOBRENOME e número/espaçamento de filhos decididos em liberdade (CF art. 226, §7º, espelha). E o §2º mata mitos: casamento infantil é ineficaz, com registro civil obrigatório.',
    pegadinha:
      'Dizer que a guarda “segue automaticamente a mãe” — é igualdade, não preferência; afirmar que o Estado pode impor o número de filhos (a liberdade é DO CASAL); exigir idade mínima apenas para a noiva.',
    exemplo:
      'Casamento de adolescente de 14 anos “regularizado” informalmente: sem efeito legal pelo art. 16, §2º — e no Brasil o ECA e a jurisprudência também vedam o reconhecimento.',
    macete: 'Art. 16: do altar à guarda, tudo espelhado. Filhos? O casal decide quantos. Criança no altar? ZERO efeito legal.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'Vunesp', 'AOCP'],
  },
  {
    n: 17,
    titulo: 'Criação e composição do Comitê CEDAW',
    sintese: 'Comitê de peritos independentes',
    bloco: V,
    destaque: false,
    resumo:
      'Institui o Comitê sobre a Eliminação da Discriminação contra a Mulher: inicialmente 18 peritos, passando a 23 após a 35ª ratificação. Peritos de alta reputação moral e competência, eleitos pelos Estados-partes por voto secreto, atuando a título pessoal, com mandato de 4 anos e distribuição geográfica equitativa.',
    prova:
      'Números marcantes: 18 → 23 peritos; mandato de 4 anos; peritos INDEPENDENTES (não diplomatas), eleitos pelos Estados-partes. O Comitê reúne-se em Genebra.',
    pegadinha:
      'Chamar o Comitê de tribunal julgador; dizer que os peritos recebem instruções dos seus governos (atuam a título pessoal); fixar mandato de 2 ou 6 anos.',
    exemplo:
      'Perito brasileiro eleito para o Comitê vota relatório contra o próprio país se necessário — atua a título pessoal.',
    macete: 'Art. 17: 18 viram 23, peritos sem patrão, 4 anos de casa por vez.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 18,
    titulo: 'Relatórios periódicos dos Estados',
    sintese: 'Prestação de contas: 1 ano, depois 4',
    bloco: V,
    resumo:
      'Os Estados-partes apresentam ao Comitê relatório sobre as medidas adotadas, no prazo de 1 ANO após a entrada em vigor para o Estado e, depois, ao menos a cada 4 ANOS, e ainda sempre que o Comitê os solicitar.',
    prova:
      'O principal motor de monitoramento é o RELATÓRIO (não julgamento): 1 ano no início, depois ao menos a cada 4 anos — decore a fórmula “1 + 4”.',
    pegadinha:
      'Fixar periodicidade anual ou semestral; ou dizer que os relatórios são enviados ao Conselho de Segurança — destino: o Comitê CEDAW.',
    exemplo:
      'Brasil envia relatório consolidado de políticas de igualdade e recebe do Comitê “observações finais” com cobranças concretas.',
    macete: 'Art. 18: primeiro ano entrega, depois de quatro em quatro — e quando o Comitê chamar.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 19,
    titulo: 'Regimento interno do Comitê',
    sintese: 'O Comitê edita suas regras',
    bloco: V,
    resumo: 'O Comitê adota seu próprio regimento interno.',
    prova:
      'Autonomia processual: quem faz as regras de funcionamento é o próprio Comitê — não a Assembleia Geral nem os Estados-partes.',
    pegadinha: 'Atribuir o regimento da AG ou do ECOSOC.',
    exemplo: 'Definição pelo Comitê de prazos e forma dos diálogos construtivos com os Estados.',
    macete: 'Art. 19: casa própria, regra própria.',
    bancas: ['AOCP'],
  },
  {
    n: 20,
    titulo: 'Sessões do Comitê',
    sintese: 'Reuniões em regra anuais',
    bloco: V,
    resumo:
      'O Comitê reunir-se-á normalmente uma vez por ano por um prazo determinado pelos Estados-partes, mediante aprovação pela Assembleia Geral.',
    prova: 'A regra nominal é a sessão anual (na prática, o Comitê ampliou suas sessões com a demanda crescente).',
    pegadinha: 'Fixar obrigatoriedade de sessões trimestrais no texto da Convenção.',
    exemplo: 'Sessões em Genebra com diálogo construtivo Estado–Comitê.',
    macete: 'Art. 20: agenda do Comitê — no mínimo, anual.',
    bancas: ['Vunesp'],
  },
  {
    n: 21,
    titulo: 'Recomendações gerais do Comitê',
    sintese: 'O Comitê fala: sugestões e recomendações',
    bloco: V,
    destaque: true,
    resumo:
      'O Comitê faz relatório anual de suas atividades à Assembleia Geral, por intermédio do ECOSOC, e pode formular SUGESTÕES E RECOMENDAÇÕES GERAIS baseadas no exame dos relatórios e informações recebidos.',
    prova:
      'Aqui nascem as famosas RECOMENDAÇÕES GERAIS — logo as duas campeãs: GR 19/1992 (violência contra a mulher é forma de discriminação) e GR 35/2017 (a atualiza). É por elas que a LMP conversa com a CEDAW.',
    pegadinha:
      'Dizer que a Convenção já trata expressamente de violência doméstica — o texto é silente; a cobertura veio pela GR 19 (e pela Convenção de Belém do Pará). Não confunda: sugestões ≠ decisões condenatórias.',
    exemplo:
      'A Lei Maria da Penha implementa, no Brasil, a leitura da GR 19: violência de gênero como discriminação proibida pelo art. 1º.',
    macete: 'Art. 21: o Comitê não julga, RECOMENDA — e da recomendação 19 nasceu a ponte para a Maria da Penha.',
    bancas: ['FGV', 'Cebraspe', 'FCC'],
  },
  {
    n: 22,
    titulo: 'Participação das agências especializadas',
    sintese: 'Porta aberta para o sistema ONU',
    bloco: V,
    resumo:
      'Os organismos especializados da ONU têm direito a representação na consideração da aplicação da Convenção nas áreas de sua competência, podendo o Comitê convidá-los a apresentar relatórios.',
    prova:
      'Ouvidos abertos: UNICEF, UNESCO, OIT, ONU Mulheres e demais agências podem colaborar com o monitoramento — participação institucional ampliada.',
    pegadinha: 'Restringir o monitoramento a peritos do Comitê, excluindo agências e sociedade civil da conversa.',
    exemplo: 'Contribuições da ONU Mulheres às sessões de avaliação de relatórios de Estados.',
    macete: 'Art. 22: a família ONU inteira ajuda a vigiar.',
    bancas: ['Vunesp'],
  },
  {
    n: 23,
    titulo: 'Salvaguarda da norma mais favorável',
    sintese: 'Ganha quem protege mais',
    bloco: VI,
    resumo:
      'Nenhuma disposição da Convenção afetará as normas mais propícias à realização da igualdade entre homens e mulheres contidas na legislação interna ou em qualquer outra convenção internacional em vigor para o Estado.',
    prova:
      'Cláusula pró-maior proteção: a CEDAW é piso, nunca teto. Se a lei interna for mais protetiva, ela prevalece.',
    pegadinha: 'Inverter: dizer que a Convenção revoga ou reduz garantias internas mais amplas.',
    exemplo: 'A CF brasileira continua valendo integralmente — o que excede a CEDAW em proteção não é tocado.',
    macete: 'Art. 23: CEDAW é chão; teto é o céu.',
    bancas: ['FGV'],
  },
  {
    n: 24,
    titulo: 'Dever de plena realização',
    sintese: 'Fazer tudo o que for necessário',
    bloco: VI,
    resumo:
      'Os Estados-partes comprometem-se a adotar todas as medidas necessárias em nível nacional para alcançar a plena realização dos direitos reconhecidos na Convenção.',
    prova: 'É o compromisso-índice de resultado: medidas legislativas, administrativas e de qualquer natureza — a Convenção quer efeito prático.',
    pegadinha: 'Dizer que basta a ratificação formal, dispensando medidas internas de implementação.',
    exemplo: 'Planos nacionais de políticas para as mulheres, com orçamento próprio, implementam o art. 24.',
    macete: 'Art. 24: ratificou? Agora corre atrás.',
    bancas: ['AOCP'],
  },
  {
    n: 25,
    titulo: 'Abertura à adesão dos Estados',
    sintese: 'Clube aberto a todos os Estados',
    bloco: VI,
    resumo:
      'A Convenção está aberta à assinatura por todos os Estados; sujeita-se a ratificação, e permanece aberta à adesão.',
    prova: 'Formas de adesão: assinatura + ratificação, ou adesão direta. A CEDAW está entre os tratados de DH com mais Estados-partes (perto da universalidade).',
    pegadinha: 'Restringir a adesão aos Estados-membros da ONU de 1979.',
    exemplo: 'Brasil: ratificação depositada em fevereiro de 1984 — um dos primeiros países a aderir.',
    macete: 'Art. 25: porta aberta — assina, ratifica ou adere.',
    bancas: ['Vunesp'],
  },
  {
    n: 26,
    titulo: 'Emendas à Convenção',
    sintese: 'Mudar? A Assembleia decide',
    bloco: VI,
    resumo:
      'Qualquer Estado-parte pode requerer a revisão da Convenção mediante notificação ao Secretário-Geral; a Assembleia Geral decidirá sobre as providências.',
    prova: 'Quem propõe é Estado-parte; quem decide é a Assembleia Geral da ONU — fluxo comum das cláusulas de revisão.',
    pegadinha: 'Atribuir o poder de emenda ao Comitê CEDAW ou ao Conselho de Segurança.',
    exemplo: 'Requerimento formal de revisão encaminhado ao Secretário-Geral das Nações Unidas.',
    macete: 'Art. 26: Estado pede, AG decide.',
    bancas: ['AOCP'],
  },
  {
    n: 27,
    titulo: 'Entrada em vigor',
    sintese: '20 ratificações + 30 dias',
    bloco: VI,
    resumo:
      'A Convenção entraria em vigor 30 dias após o depósito do 20º instrumento de ratificação ou adesão. Entrou em vigor em 3 de setembro de 1981 — poucos meses após a adoção, ritmo recorde à época.',
    prova:
      'Dois números: 20º instrumento + 30 dias. E a data: 3/9/1981 — a Convenção de 1979 entrou em vigor ANTES de muitos tratados anteriores. O Brasil depositou sua ratificação em 1984.',
    pegadinha: 'Trocar o quorum (50, 35) ou a data da vigência (1979 — a adoção!).',
    exemplo: 'Depósito do 20º instrumento em julho de 1981 → vigência automática 30 dias depois.',
    macete: 'Art. 27: chegou em 20, espera 30 dias. Adotada em 79, viva desde 81.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 28,
    titulo: 'Reservas',
    sintese: 'Reserva sim, traição não',
    bloco: VI,
    destaque: true,
    resumo:
      'Os Estados podem fazer reservas no ato de assinatura, ratificação ou adesão. NÃO será permitida reserva incompatível com o OBJETO E PROPÓSITO da Convenção. As reservas podem ser retiradas a qualquer tempo.',
    prova:
      'A CEDAW é campeã de reservas no sistema de tratados de DH — e justamente por isso a banca cobra o filtro: compatibilidade com o objeto e propósito. Reservas incompatíveis são inválidas.',
    pegadinha: 'Dizer que a Convenção veda qualquer reserva (ou que reservas são irrevogáveis — podem ser retiradas a qualquer tempo).',
    exemplo: 'Reservas ao art. 16 (família) fundadas em direitos religiosos internos foram questionadas pelo Comitê por esvaziarem o objeto da Convenção.',
    macete: 'Art. 28: reserva é tempero; se vira prato diferente, o garçom devolve.',
    bancas: ['FGV', 'Cebraspe'],
  },
  {
    n: 29,
    titulo: 'Solução de controvérsias entre Estados',
    sintese: 'Conversa, árbitro, Haia',
    bloco: VI,
    resumo:
      'Controvérsias entre Estados-partes sobre interpretação ou aplicação: tentativa de solução por NEGOCIAÇÃO; não solucionada, ARBITRAGEM; se em 6 meses não houver acordo sobre a arbitragem, qualquer das partes pode levar o caso ao TRIBUNAL INTERNACIONAL DE JUSTIÇA.',
    prova:
      'A escada da solução interestatal: negociação → arbitragem → TIJ, com prazo de 6 meses para destravar. O Brasil fez reserva a este artigo ao ratificar (não se submete automaticamente à cláusula).',
    pegadinha: 'Mandar direto ao Conselho de Segurança; ou tratar o TIJ como instância penal.',
    exemplo: 'Dois Estados divergem sobre reserva ao art. 16: negociação, arbitragem e, em última instância, a Haia.',
    macete: 'Art. 29: escada da briga — mesa, árbitro, Haia.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 30,
    titulo: 'Depósito e línguas oficiais',
    sintese: 'Guarda do Secretário-Geral',
    bloco: VI,
    resumo:
      'A Convenção é depositada junto ao Secretário-Geral das Nações Unidas; seus textos em árabe, chinês, espanhol, francês, inglês e russo são igualmente autênticos.',
    prova: 'Depositário = Secretário-Geral (regra dos tratados multilaterais da ONU). Seis línguas oficiais com o mesmo valor.',
    pegadinha: 'Nominar a Alta Comissária de DH depositária; ou dizer que apenas inglês e francês são autênticos.',
    exemplo: 'Instrumentos de ratificação de todos os Estados dormem nos arquivos do Secretário-Geral, em Nova York.',
    macete: 'Art. 30: os originais moram com o chefe da casa — em seis idiomas.',
    bancas: ['Vunesp'],
  },
];
