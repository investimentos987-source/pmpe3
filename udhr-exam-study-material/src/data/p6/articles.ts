import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'I · Direitos e obrigações (1º–7)': '#c19a3d',
  'II · Comitê CERD e petição (8–16)': '#b04a3c',
  'III · Cláusulas finais (17–25)': '#4b5563',
};

const A = 'I · Direitos e obrigações (1º–7)';
const B = 'II · Comitê CERD e petição (8–16)';
const C = 'III · Cláusulas finais (17–25)';

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Definição de discriminação racial e ação afirmativa',
    sintese: 'Distinção, exclusão, restrição ou PREFERÊNCIA',
    bloco: A,
    destaque: true,
    resumo:
      '§1º “Discriminação racial” significa qualquer DISTINÇÃO, EXCLUSÃO, RESTRIÇÃO ou PREFERÊNCIA baseada na RAÇA, COR, DESCENDÊNCIA ou ORIGEM NACIONAL OU ÉTNICA, que tenha por finalidade ou por efeito anular ou restringir o reconhecimento, gozo ou exercício, em plano de igualdade, dos direitos humanos e liberdades fundamentais no campo político, econômico, social, cultural ou em qualquer outro campo da VIDA PÚBLICA. §2º A Convenção NÃO se aplica a distinções feitas pelo Estado entre cidadãos e não cidadãos. §3º Nada nela afeta as disposições legais sobre nacionalidade, cidadania ou naturalização, contanto que tais disposições NÃO discriminem nenhuma nacionalidade em particular. §4º NÃO serão consideradas discriminação racial as MEDIDAS ESPECIAIS tomadas com a única finalidade de permitir progresso adequado a certos grupos raciais ou étnicos, assegurando-lhes o gozo da igualdade — desde que NÃO façam nascer a manutenção de direitos separados para os diferentes grupos e NÃO se prolonguem uma vez atingidos os objetivos.',
    prova:
      'A definição mais cobrada. Três contrastes com a CEDAW (Parte 3): (i) aqui o rol INCLUI “preferência”; (ii) inclui DESCENDÊNCIA e ORIGEM NACIONAL/ÉTNICA (a CEDAW fala só de sexo); (iii) a esfera é a VIDA PÚBLICA (a CEDAW inclui eventos privados). E o §4º é o embrião das cotas: ação afirmativa NÃO é discriminação racial.',
    pegadinha:
      'Suprimir “preferência” (importando erradamente a definição da CEDAW); dizer que abrangem discriminações na vida privada; ou afirmar que medidas especiais configuram discriminação reversa — o §4º as exclui expressamente.',
    exemplo:
      'Cotas raciais em universidades e concursos: medidas especiais temporárias previstas no §4º — o STF validou esse modelo constitucional (ADPF 186, cotas raciais na UnB).',
    macete:
      'D.E.R.P. — Distinção, Exclusão, Restrição ou PREFERÊNCIA (na CEDAW não tem o “P”). Efeito OU finalidade, limitado à vida PÚBLICA.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 2,
    titulo: 'Obrigações dos Estados e ação afirmativa',
    sintese: 'Abster-se, revogar leis e agir contra particulares',
    bloco: A,
    destaque: true,
    resumo:
      '§1º Os Estados-partes condenam a discriminação racial e comprometem-se a: não praticá-la (a); não patrocinar, defender ou apoiar discriminação por qualquer pessoa ou organização (b); adotar medidas eficazes para rever políticas e REVOGAR leis ou regulamentos que a criem ou perpetuem (c); PROIBIR e acabar com a discriminação racial por qualquer pessoa, grupo ou organização (d — vedação HORIZONTAL, alcança particulares); e estimular organizações multirraciais de integração (e). §2º Os Estados tomarão, quando as circunstâncias o exigirem, MEDIDAS ESPECIAIS para assegurar o adequado desenvolvimento e a proteção de certos grupos raciais ou indivíduos pertencentes a eles, visando garantir-lhes em condições de igualdade o gozo pleno de direitos humanos — medidas que NÃO constituirão discriminação racial, desde que NÃO se tornem permanentes e NÃO mantenham direitos desiguais uma vez alcançados os objetivos.',
    prova:
      'Guarde a letra “d”: a obrigação alcança PARTICULARES e ORGANIZAÇÕES PRIVADAS (como no art. 2º da Declaração 1981 — Parte 2). Some-se o dever de REVOGAR leis discriminatórias e o §2º sobre medidas especiais (regra idêntica ao §4º do art. 1º).',
    pegadinha:
      'Restringir as obrigações ao Poder Público; ou afirmar que a Convenção proíbe toda e qualquer medida diferenciada entre grupos — as medidas especiais são expressamente admitidas.',
    exemplo:
      'A Lei 7.716/89 (crimes de preconceito racial no Brasil) e a punição a clubes que recusam sócios negros são execução direta da alínea “d”.',
    macete: 'Art. 2º: Estado não discrimina, não apoia, REVOGA — e obriga o PARTICULAR a não discriminar também.',
    bancas: ['FCC', 'Cebraspe', 'AOCP'],
  },
  {
    n: 3,
    titulo: 'Condenação da segregação racial e do apartheid',
    sintese: 'Prevenir, proibir e erradicar',
    bloco: A,
    resumo:
      'Os Estados-partes condenam a SEGREGAÇÃO RACIAL e o APARTHEID e comprometem-se a PREVENIR, PROIBIR e ERRADICAR todas as práticas dessa natureza nos territórios sob sua jurisdição.',
    prova:
      'Artigo curto e nominal: o foco histórico é o apartheid sul-africano (razão pela qual a África do Sul também se absteve na DUDH em 1948 — Parte 1). Os três verbos (prevenir, proibir e erradicar) são cobrados em conjunto.',
    pegadinha:
      'Dizer que a Convenção apenas “recomenda” o combate ao apartheid; ou reduzir o artigo à condemnação moral sem práticas concretas.',
    exemplo:
      'O regime sul-africano foi declarado incompatível com a Convenção e sofreu sanções do sistema; o art. 3º é a base textual desse posicionamento do Direito Internacional.',
    macete: 'P.P.E.: Prevenir, Proibir, Erradicar — tudo em nome do fim do apartheid.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 4,
    titulo: 'Proibição de organizações racistas',
    sintese: 'Crime a propaganda e a participação',
    bloco: A,
    destaque: true,
    resumo:
      'Os Estados-partes condenam toda propaganda e todas as ORGANIZAÇÕES baseadas em ideias ou teorias da SUPERIORIDADE de uma raça ou grupo étnico, bem como as que tentem justificar ou promover o ÓDIO e a DISCRIMINAÇÃO RACIAL, e comprometem-se a adotar medidas para erradicar incitação à discriminação, declarando delito punível por lei: a) a divulgação de ideias fundadas em superioridade ou ódio racial; b) a INCITAÇÃO à discriminação racial; c) todos os atos de VIOLÊNCIA ou a incitação a esses atos contra qualquer raça ou grupo étnico; d) a prestação de assistência a atividades racistas, incluído o seu financiamento; e) DECLARAR ILEGAIS E PROIBIR as organizações que promovam e incitem à discriminação racial e PUNIR, com crime, a participação em tais organizações.',
    prova:
      'O artigo mais operacional: obriga os Estados a CRIMINALIZAR não só a propaganda racista, mas também a mera PARTICIPAÇÃO em organizações racistas. No Brasil, é a base internacional do crime de racismo (Lei 7.716/89) e do crime da preconceito religioso, e inspirou o HC 82.424/STF (caso Ellwanger, 2004): discurso de ódio anti-semita não goza de proteção.',
    pegadinha:
      'Dizer que a liberdade de expressão protege a propaganda racista (o art. 4º é exceção incompatível); ou esquecer a criminalização da PARTICIPAÇÃO (alínea “e”), reduzindo o artigo à propaganda.',
    exemplo:
      'No Brasil, manter associação, partido ou publicação neonazista/anti-semita não é exercício da liberdade de expressão: é crime — cumprimento exato do art. 4º.',
    macete: 'Art. 4º: ideia de superioridade + ódio = crime. E só FILIAR-SE a grupo racista já basta.',
    bancas: ['Cebraspe', 'FGV', 'FCC'],
  },
  {
    n: 5,
    titulo: 'Igualdade perante a lei — catálogo de direitos',
    sintese: 'Os direitos civis, políticos e sociais listados',
    bloco: A,
    destaque: true,
    resumo:
      'Os Estados garantirão o direito de igualdade perante a lei, SEM DISTINÇÃO de raça, cor ou origem nacional ou étnica, nos direitos a seguir: a) igualdade perante tribunais e órgãos de justiça; b) segurança pessoal e proteção contra violência e lesões corporais; c) direitos POLÍTICOS: votar e ser elegível, participar do governo e acessar funções públicas; d) outros direitos civis: liberdade de circular e residir, sair do país e voltar, nacionalidade, casamento e família, propriedade individual e coletiva, herança, pensamento/consciência/religião, opinião e expressão, reunião e associação pacíficas; e) direitos ECONÔMICOS, SOCIAIS e CULTURAIS: trabalho, livre escolha, condições justas, proteção contra o desemprego, SALÁRIO IGUAL POR TRABALHO IGUAL, remuneração justa, sindicalização, habitação, saúde pública, asistencia médica, seguridade social e serviços sociais, instrução e formação profissional e participação em atividades culturais; f) direito de acesso a todo gênero de LUGARES E SERVIÇOS destinados ao uso do público, como transportes, hotéis, restaurantes, cafés, cinemas e parques.',
    prova:
      'O rol da alínea “e” lembra o PIDESC, mas com a marca racial: salário igual por trabalho igual e habitação. O detalhe diferenciador é a alínea “f”: acesso a LUGARES PÚBLICOS — a banca adora perguntar se cinemas, hotéis e parques estão no texto (estão).',
    pegadinha:
      'Restringir o art. 5º aos direitos civis e políticos (ele reúne civis, políticos, econômicos, sociais e culturais); ou suprimir a alínea “f”.',
    exemplo:
      'Hotel que recusa hóspedes por cor de pele viola a alínea “f” do art. 5º — e no Brasil responderia por crime de preconceito (Lei 7.716/89, art. 5º).',
    macete: 'Art. 5º: TODOS os direitos, de tribunal a café — até o parque e o ônibus entram.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 6,
    titulo: 'Recursos efetivos e reparação',
    sintese: 'Tribunais nacionais + reparação justa',
    bloco: A,
    destaque: true,
    resumo:
      'Os Estados assegurarão a todos, sob sua jurisdição, PROTEÇÃO EFETIVA e RECURSOS PERANTE OS TRIBUNAIS NACIONAIS competentes e demais órgãos estatais contra atos de discriminação racial que violem seus direitos humanos e liberdades fundamentais contrários a esta Convenção, bem como o direito de reivindicar a esses tribunais REPARAÇÃO OU SATISFAÇÃO JUSTA E ADEQUADA por danos sofridos em razão de tal discriminação.',
    prova:
      'Duplo dever: disponibilizar RECURSO EFETIVO (não meramente formal) e garantir a REPARAÇÃO pelo dano. Note: tribunais NACIONAIS primeiro — o que reforça a regra do esgotamento da via interna antes da petição ao CERD (art. 14).',
    pegadinha:
      'Afirmar que a vítima pode recorrer DIRETAMENTE ao Comitê CERD sem provocar a via nacional — o art. 6º garante os recursos, e o art. 14 só recebe a petição APÓS o esgotamento dos recursos internos.',
    exemplo:
      'Trabalhadora que sofre discriminação em seleção de emprego ajuíza ação indenizatória no Brasil (caso Simone André Diniz, que depois chegou à Corte Interamericana).',
    macete: 'Art. 6º: primeiro o recurso AQUI, com reparação completa. Comitê vem depois.',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 7,
    titulo: 'Educação e combate ao preconceito',
    sintese: 'Ensino, cultura e informação tolerantes',
    bloco: A,
    destaque: true,
    resumo:
      'Os Estados comprometem-se a adotar medidas imediatas e eficazes, especialmente no campo do ENSINO, DA EDUCAÇÃO, DA CULTURA e DA INFORMAÇÃO, de modo a COMBAR PRECONCEITOS que conduzam à discriminação racial e a promover a compreensão, a TOLERÂNCIA e a AMIZADE entre nações e grupos raciais ou étnicos, assim como a difundir os objetivos e princípios da Carta da ONU, da DUDH e da Declaração sobre eliminação de discriminação racial de 1963.',
    prova:
      'O quarteto de vetores (ensino, educação, cultura e informação) + o trio de finalidades (compreensão, tolerância e amizade). No Brasil, conecta com a Lei 10.639/2003 (ensino de história afro-brasileira) e com o Estatuto da Igualdade Racial.',
    pegadinha:
      'Restringir a medida a campanhas policiais; ou omitir a menção expressa à CARTA, à DUDH e à Declaração de 1963 — o art. 7º remete às três sempre.',
    exemplo:
      'A obrigatoriedade do ensino da história e cultura afro-brasileira e africana (Lei 10.639/2003) é a execução doméstica típica do art. 7º.',
    macete: 'Art. 7º: ensino, educação, cultura e informação — contra o preconceito, pela amizade.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 8,
    titulo: 'Comitê CERD — composição e relatórios',
    sintese: '18 peritos · 4 anos · relatórios a cada 2 anos',
    bloco: B,
    destaque: true,
    resumo:
      'Art. 8: Constitui-se o COMITÊ SOBRE A ELIMINAÇÃO DA DISCRIMINAÇÃO RACIAL, composto por 18 PERITOS de grande reputação moral e reconhecida imparcialidade, eleitos pelos Estados-partes dentre seus cidadãos, que exercem funções a TÍTULO PESSOAL, com mandato de 4 ANOS e representação geográfica equitativa. Art. 9: os Estados-partes apresentam relatórios sobre medidas adotadas e progressos no prazo de UM ANO após a entrada em vigor para o Estado e, a seguir, DE DOIS EM DOIS ANOS, e ainda quando o Comitê solicitar. Art. 10: o Comitê elabora seu próprio regimento.', 
    prova:
      'Números marcantes: 18 PERITOS (mesma quantidade atual do Comitê dos Direitos da Criança — atenção para não trocar: CEDAW tem 23!), mandato de 4 anos, atuando a título pessoal; relatórios iniciais em 1 ano e depois a cada 2 ANOS (biênio).',
    pegadinha:
      'Trocar o número de peritos (CONFUSÃO CAMPEÃ com a CEDAW: 23) ou a periodicidade dos relatórios (CEDAW é 1 + 4; Criança é 2 + 5; CERD é 1 + 2).',
    exemplo:
      'O Brasil apresenta relatórios bienais ao CERD e recebe “observações finais” com recomendações sobre quilombolas, povos indígenas e violência policial.',
    macete: 'CERD: 18 peritos, 4 anos, relatório de 2 em 2. CEDAW: 23. Criança: 18 e 2+5. Não misture.',
    bancas: ['FCC', 'Cebraspe', 'AOCP'],
  },
  {
    n: 9,
    titulo: 'Controvérsias interestatais',
    sintese: 'Denúncia entre Estados e conciliação',
    bloco: B,
    resumo:
      'Arts. 11 a 13: se um Estado-parte estimar que outro não está cumprindo a Convenção, pode levar o caso aos CONHECIMENTO do COMITÊ. O Comitê envia a denúncia ao Estado interessado, que responde por escrito em 3 MESES. Se a questão não for resolvida por negociação bilateral ou por outro procedimento aberto, o presidente do Comitê designa uma COMISSÃO AD HOC de 5 MEMBROS, com aprovação unânime das partes, para bons ofícios e conciliação; a comissão examina os fatos e apresenta relatório com suas conclusões e recomendações ao presidente do Comitê, que as comunica aos Estados interessados. ',
    prova:
      'Mecanismo interestatal raramente usado, mas estrutura cobrada: denúncia de Estado contra Estado → resposta em 3 meses → comissão ad hoc de 5 membros para conciliação. Não há decisão condenatória.',
    pegadinha:
      'Afirmar que o Comitê julga e condena Estados em litígios interestatais — a comissão é de bons ofícios e conciliação, sem sanção.',
    exemplo:
      'Estado X acusa Estado Y de manter leis segregacionistas: o CERD media por comissão de conciliação, conforme arts. 11 a 13.',
    macete: 'Estado contra Estado: resposta em 3 meses, comissão de 5 — concilia, não condena.',
    bancas: ['FGV', 'Vunesp'],
  },
  {
    n: 10,
    titulo: 'Petição individual (art. 14) + Decreto 4.738/2003',
    sintese: 'Declaração Facultativa: o brasileiro pode recorrer ao Comitê',
    bloco: B,
    destaque: true,
    resumo:
      'Art. 14: Um Estado-parte pode, a qualquer tempo, declarar que reconhece a competência do Comitê para RECEBER E EXAMINAR comunicações de indivíduos ou grupos de indivíduos desenvolvimento sob sua jurisdição que se apresentem como vítimas de violação de direitos estabelecidos nesta Convenção. Nenhuma comunicação será recebida pelo Comitê se disser respeito a Estado que NÃO tenha feito tal declaração. O Comitê não admite comunicações anônimas; cada Estado que faça a declaração estabelecerá ou indicará um órgão nacional para receber petições. DECRETO Nº 4.738 (2003): promulga a declaração brasileira, aprovada pelo Congresso para reconhecer a competência do Comitê CERD a examinar denúncias de violação de direitos humanos na Convenção.',
    prova:
      'O ponto de junção dos dois instrumentos da Parte 6: a petição INDIVIDUAL é FACULTATIVA e exige declaração prévia do Estado. O Brasil a reconheceu pelo DECRETO 4.738 (2003), o que permite que vítimas recorra ao CERD após o esgotamento dos recursos internos e desde que o caso não esteja sendo examinado em outra via internacional.',
    pegadinha:
      'Afirmar que o Comitê recebe petições automaticamente de qualquer Estado-parte (depende da declaração individual); ou dizer que a declaração é irretratável (o art. 14 permite retirada mediante notificação).',
    exemplo:
      'Brasileiro que se julga vítima de discriminação racial e esgotou o Judiciário nacional pode encaminhar comunicação individual ao Comitê CERD, em Genebra.',
    macete: 'Art. 14 = faculdade do Estado; Dec. 4.738 = o Brasil disse SIM. Via interna primeiro.',
    bancas: ['Cebraspe', 'FGV', 'FCC', 'Vunesp'],
  },
  {
    n: 11,
    titulo: 'Cláusulas finais (arts. 17–25)',
    sintese: 'Vigência: 12ª ratificação + 30 dias → 4/1/1969',
    bloco: C,
    destaque: true,
    resumo:
      'A Convenção fica aberta à assinatura e ratificação por qualquer Estado-membro da ONU, de suas agências especializadas, e a qualquer Estado convidado pela Assembleia Geral; aberta também a ADESÃO. Entrará em vigor 30 DIAS após o depósito no Secretário-Geral do 12º instrumento de ratificação ou adesão — a Convenção entrou em vigor em 4 DE JANEIRO DE 1969. Prevalece a norma mais favorável ao indivíduo; controvérsias sobre interpretação ou aplicação podem ser levadas ao Tribunal Internacional de Justiça, mediante negociação ou arbitragem, mediante requerimento de qualquer das partes; o texto em chinês, espanhol, francês, inglês e russo é igualmente autêntico.',
    prova:
      'Números e data: 12ª ratificação + 30 dias → 4/1/1969. O BRASIL assinou em 7 de março de 1966 e promulgou pelo DECRETO 65.810, de 8 de dezembro de 1969. Rito ordinário, antes da EC 45/2004 → status de norma SUPRALEGAL no Brasil (STF).',
    pegadinha:
      'Trocar a exigência de número de ratificações (12ª — a Convenção da Criança exige a 20ª; a CEDAW entrou na 20ª+) ou a data da promulgação brasileira (cai o Decreto 65.810/1969 em bloco).',
    exemplo:
      'Prova brasileira: “A CIEFDR foi promulgada pelo Decreto nº 65.810/1969” — gabarito direto da Vunesp/AOCP.',
    macete: '12 instrumentos + 30 dias = 4/1/1969. Brasil: Decreto 65.810/1969 — supralegal.',
    bancas: ['AOCP', 'FCC', 'Vunesp'],
  },
];
