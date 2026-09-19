import type { Artigo } from '../shared';

const REM = 'Remissão e medidas aos pais';
const CT = 'Conselho Tutelar';
const JUS = 'Acesso à Justiça';

export const artigosD: Artigo[] = [
  {
    n: 126,
    titulo: 'Remissão — conceito e momentos',
    sintese: 'Exclusão pelo MP; suspensão/extinção pelo juiz',
    bloco: REM,
    destaque: true,
    resumo:
      'Antes de iniciado o procedimento judicial, o representante do MINISTÉRIO PÚBLICO poderá conceder a REMISSÃO como forma de EXCLUSÃO DO PROCESSO, atendendo às circunstâncias e consequências do fato, ao contexto social, bem como à personalidade do adolescente e sua maior ou menor participação no ato infracional. Parágrafo único: iniciado o procedimento, a concessão da remissão pela AUTORIDADE JUDICIÁRIA importará na SUSPENSÃO OU EXTINÇÃO DO PROCESSO.',
    prova:
      'Divisão temporal decisiva: ANTES do processo → remissão MINISTERIAL, que EXCLUI o processo (pré-processual); DEPOIS de iniciado → remissão JUDICIAL, que SUSPENDE ou EXTINGUE o processo. A remissão do MP depende de homologação judicial (art. 181).',
    pegadinha:
      'Dizer que o MP pode extinguir processo já iniciado (aí a competência é do juiz) ou que a remissão ministerial dispensa homologação do juízo.',
    exemplo:
      'Promotor concede remissão a adolescente primário em ato infracional leve; o juiz homologa e o processo nem chega a ser instaurado.',
    macete: 'Antes do processo: MP EXCLUI. Depois: juiz SUSPENDE ou EXTINGUE.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 127,
    titulo: 'Efeitos e cumulação da remissão',
    sintese: 'Não é culpa, não é antecedente — e admite medida',
    bloco: REM,
    destaque: true,
    resumo:
      'A remissão NÃO IMPLICA NECESSARIAMENTE O RECONHECIMENTO OU COMPROVAÇÃO DA RESPONSABILIDADE, nem prevalece para efeito de ANTECEDENTES, podendo incluir eventualmente a APLICAÇÃO DE QUALQUER DAS MEDIDAS PREVISTAS EM LEI, EXCETO A COLOCAÇÃO EM REGIME DE SEMILIBERDADE E A INTERNAÇÃO. Art. 128: a medida aplicada por força da remissão poderá ser REVISTA JUDICIALMENTE, a qualquer tempo, mediante pedido expresso do adolescente, de seu representante legal ou do Ministério Público.',
    prova:
      'Tríade de ouro: (1) não reconhece responsabilidade; (2) não gera antecedentes; (3) pode ser CUMULADA com medidas — salvo SEMILIBERDADE e INTERNAÇÃO. Súmula 108 do STJ: a aplicação de medida socioeducativa é competência EXCLUSIVA DO JUIZ.',
    pegadinha:
      'Admitir remissão cumulada com internação ou semiliberdade (vedado); ou afirmar que a remissão vale como antecedente infracional.',
    exemplo:
      'Remissão cumulada com prestação de serviços à comunidade é válida; cumulada com internação, é nula.',
    macete: 'Remissão pode vir com medida — menos as duas que privam liberdade (S e I).',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 129,
    titulo: 'Medidas aplicáveis aos pais',
    sintese: 'Os 10 incisos — do tratamento à destituição',
    bloco: REM,
    destaque: true,
    resumo:
      'São medidas aplicáveis AOS PAIS OU RESPONSÁVEL: I – encaminhamento a serviços e programas oficiais de proteção, apoio e promoção da família; II – inclusão em programa oficial de auxílio, orientação e tratamento a ALCOÓLATRAS E TOXICÔMANOS; III – encaminhamento a tratamento PSICOLÓGICO OU PSIQUIÁTRICO; IV – encaminhamento a CURSOS OU PROGRAMAS DE ORIENTAÇÃO; V – obrigação de MATRICULAR O FILHO e acompanhar sua frequência e aproveitamento escolar; VI – obrigação de ENCAMINHAR A CRIANÇA A TRATAMENTO ESPECIALIZADO; VII – ADVERTÊNCIA; VIII – PERDA DA GUARDA; IX – DESTITUIÇÃO DA TUTELA; X – SUSPENSÃO OU DESTITUIÇÃO DO PODER FAMILIAR. Parágrafo único: na aplicação das medidas dos incisos IX e X, observar-se-á o disposto nos arts. 23 e 24.',
    prova:
      'Dez medidas. Fronteira de competência: o CONSELHO TUTELAR pode aplicar as dos incisos I a VII (art. 136, II); as dos incisos VIII, IX e X são EXCLUSIVAS DO JUIZ.',
    pegadinha:
      'Permitir que o Conselho Tutelar aplique perda de guarda, destituição de tutela ou do poder familiar — jamais: ele apenas REPRESENTA ao MP (art. 136, XI).',
    exemplo:
      'Conselho Tutelar adverte os pais (VII) e os inclui em programa de tratamento (II); se o caso exigir destituição, representa ao Ministério Público.',
    macete: 'Conselho vai do I ao VII. Do VIII ao X, só o JUIZ.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 130,
    titulo: 'Afastamento do agressor',
    sintese: 'Sai o agressor, fica a criança',
    bloco: REM,
    destaque: true,
    resumo:
      'Verificada a hipótese de MAUS-TRATOS, OPRESSÃO OU ABUSO SEXUAL impostos pelos pais ou responsável, a autoridade judiciária poderá determinar, como medida cautelar, o AFASTAMENTO DO AGRESSOR DA MORADIA COMUM. Parágrafo único: da medida cautelar constará a fixação PROVISÓRIA dos ALIMENTOS de que necessitem a criança ou o adolescente dependentes do agressor.',
    prova:
      'Lógica invertida e humanizada: quem sai de casa é o AGRESSOR, não a vítima. E a decisão já fixa alimentos provisórios. A medida é cautelar e privativa do JUIZ.',
    pegadinha:
      'Dizer que a solução legal é acolher a criança (o acolhimento é excepcional — primeiro afasta-se o agressor); ou atribuir a medida ao Conselho Tutelar.',
    exemplo:
      'Padrasto acusado de abuso é afastado do lar por decisão judicial, com pensão fixada de imediato à vítima.',
    macete: 'Art. 130: mala do agressor na porta — e pensão fixada na mesma decisão.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 131,
    titulo: 'Conselho Tutelar — natureza',
    sintese: 'Permanente, autônomo, não jurisdicional',
    bloco: CT,
    destaque: true,
    resumo:
      'O CONSELHO TUTELAR é órgão PERMANENTE e AUTÔNOMO, NÃO JURISDICIONAL, encarregado pela sociedade de ZELAR PELO CUMPRIMENTO DOS DIREITOS da criança e do adolescente, definidos nesta Lei.',
    prova:
      'Os três adjetivos são cobrados literalmente: PERMANENTE (não é temporário), AUTÔNOMO (não subordinado no mérito de suas decisões) e NÃO JURISDICIONAL (não julga, não aplica medida socioeducativa).',
    pegadinha:
      'Chamá-lo de órgão jurisdicional ou dizer que integra o Poder Judiciário — ele é órgão municipal, vinculado administrativamente à estrutura do Executivo, mas autônomo em suas decisões.',
    exemplo:
      'Conselho requisita vaga em creche diretamente à secretaria municipal: atua com autonomia, sem depender de ordem judicial.',
    macete: 'P.A.N.: Permanente, Autônomo, Não jurisdicional. Zela — não julga.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 132,
    titulo: 'Composição e mandato',
    sintese: '5 membros · 4 anos · reconduções',
    bloco: CT,
    destaque: true,
    resumo:
      'Em cada município e em cada região administrativa do Distrito Federal haverá, NO MÍNIMO, 1 (UM) CONSELHO TUTELAR como órgão integrante da administração pública local, composto de 5 (CINCO) MEMBROS, escolhidos pela população local para mandato de 4 (QUATRO) ANOS, permitida RECONDUÇÃO, mediante novo processo de escolha.',
    prova:
      'Números-fixos: no mínimo 1 conselho por município, 5 membros, mandato de 4 anos, recondução permitida por novo processo de escolha (a Lei 12.696/2012 substituiu a antiga regra de “uma recondução”).',
    pegadinha:
      'Dizer que são 3 ou 7 membros; fixar mandato de 3 anos (redação antiga); ou afirmar que é vedada a recondução.',
    exemplo:
      'Município de grande porte pode ter vários conselhos tutelares por região, cada um com cinco conselheiros.',
    macete: '1 conselho (no mínimo) · 5 membros · 4 anos · pode voltar.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 133,
    titulo: 'Requisitos para conselheiro',
    sintese: 'Idoneidade · 21 anos · residir no município',
    bloco: CT,
    destaque: true,
    resumo:
      'Para a candidatura a membro do Conselho Tutelar serão exigidos os seguintes requisitos: I – RECONHECIDA IDONEIDADE MORAL; II – IDADE SUPERIOR A 21 ANOS; III – RESIDIR NO MUNICÍPIO.',
    prova:
      'Apenas TRÊS requisitos legais. O ECA não exige escolaridade mínima, experiência prévia nem formação superior — leis municipais podem acrescentar, mas a pergunta padrão cobra o texto federal.',
    pegadinha:
      'Incluir “ensino médio completo”, “experiência com crianças” ou “idade superior a 18 anos”. E atenção: é MAIS DE 21 anos, não “21 anos completos” genérico.',
    exemplo:
      'Candidato de 20 anos, ainda que trabalhe há anos com adolescentes, não pode concorrer.',
    macete: 'I-21-R: Idoneidade, mais de 21, Residência no município. Só isso.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 134,
    titulo: 'Remuneração e direitos do conselheiro',
    sintese: 'Salário, férias +1/3, 13º e previdência',
    bloco: CT,
    resumo:
      'Lei municipal ou distrital disporá sobre o local, dia e horário de funcionamento do Conselho Tutelar, inclusive quanto à REMUNERAÇÃO dos respectivos membros, aos quais é ASSEGURADO O DIREITO A: I – cobertura PREVIDENCIÁRIA; II – GOZO DE FÉRIAS ANUAIS REMUNERADAS, acrescidas de 1/3; III – LICENÇA-MATERNIDADE; IV – LICENÇA-PATERNIDADE; V – GRATIFICAÇÃO NATALINA. Parágrafo único: constará da lei orçamentária municipal previsão dos recursos necessários ao funcionamento do Conselho Tutelar e à remuneração e formação continuada dos conselheiros.',
    prova:
      'Cinco direitos assegurados (previdência, férias + 1/3, licenças maternidade e paternidade, 13º). Contraste obrigatório com o art. 89: conselheiro DE DIREITOS não é remunerado.',
    pegadinha:
      'Dizer que o conselheiro tutelar exerce função honorífica e gratuita; ou negar-lhe cobertura previdenciária.',
    exemplo:
      'Lei municipal fixa o subsídio dos conselheiros e prevê dotação orçamentária para a formação continuada.',
    macete: 'Conselheiro TUTELAR recebe: INSS, férias +1/3, licenças e 13º.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 136,
    titulo: 'Atribuições do Conselho Tutelar',
    sintese: 'Atende, requisita, representa — mas não julga',
    bloco: CT,
    destaque: true,
    resumo:
      'São atribuições do Conselho Tutelar: I – atender crianças e adolescentes nas hipóteses do art. 98, aplicando as MEDIDAS DO ART. 101, I A VII; II – atender e aconselhar os pais, aplicando as MEDIDAS DO ART. 129, I A VII; III – promover a execução de suas decisões, podendo REQUISITAR SERVIÇOS PÚBLICOS nas áreas de saúde, educação, serviço social, previdência, trabalho e segurança, e REPRESENTAR junto à autoridade judiciária nos casos de descumprimento injustificado de suas deliberações; IV – encaminhar ao Ministério Público notícia de fato que constitua infração administrativa ou penal; V – encaminhar à autoridade judiciária os casos de sua competência; VI – providenciar a medida estabelecida pela autoridade judiciária para o adolescente autor de ato infracional, dentre as previstas no art. 101, I a VI; VII – expedir NOTIFICAÇÕES; VIII – requisitar certidões de nascimento e de óbito quando necessário; IX – assessorar o Poder Executivo local na elaboração da PROPOSTA ORÇAMENTÁRIA; X – representar, em nome da pessoa e da família, contra a violação dos direitos previstos no art. 220, §3º, II, da CF; XI – REPRESENTAR AO MINISTÉRIO PÚBLICO para efeito das ações de PERDA OU SUSPENSÃO DO PODER FAMILIAR, após esgotadas as possibilidades de manutenção na família natural; XII – promover e incentivar a convivência familiar e comunitária. Parágrafo único: se a medida aplicada implicar afastamento do convívio familiar, comunicará incontinenti ao Ministério Público.',
    prova:
      'Três verbos definem o Conselho: ATENDE (aplicando medidas dos arts. 101, I a VII, e 129, I a VII), REQUISITA serviços públicos e REPRESENTA ao MP e ao juiz. Jamais aplica medida socioeducativa nem destitui poder familiar.',
    pegadinha:
      'Afirmar que o Conselho aplica medidas socioeducativas (competência exclusiva do juiz — Súmula 108/STJ); que pode requisitar serviços de SEGURANÇA e força policial para cumprir decisões (pode requisitar serviços, mas não determinar prisão); ou que destitui o poder familiar (apenas representa ao MP — inciso XI).',
    exemplo:
      'Conselho requisita vaga em escola e tratamento psicológico; diante de abuso sexual grave, representa ao MP para ação de destituição.',
    macete: 'ATENDE (101 I-VII / 129 I-VII) · REQUISITA serviço · REPRESENTA. Não julga, não interna, não destitui.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 137,
    titulo: 'Revisão das decisões do Conselho',
    sintese: 'Só a autoridade judiciária revê',
    bloco: CT,
    destaque: true,
    resumo:
      'As decisões do Conselho Tutelar somente poderão ser REVISTAS PELA AUTORIDADE JUDICIÁRIA a pedido de quem tenha LEGÍTIMO INTERESSE.',
    prova:
      'Consequência direta da autonomia do art. 131: nenhum órgão administrativo — prefeito, secretário, CMDCA ou Ministério Público — revê o mérito das decisões do Conselho. Só o JUIZ, e mediante provocação.',
    pegadinha:
      'Admitir revisão pelo CMDCA, pelo prefeito ou de ofício pelo juiz (exige pedido de quem tem legítimo interesse).',
    exemplo:
      'Pai que discorda da medida aplicada pelo Conselho ajuíza pedido de revisão perante a Vara da Infância.',
    macete: 'Quem revê o Conselho é o JUIZ — e só se alguém pedir.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 139,
    titulo: 'Processo de escolha e impedimentos',
    sintese: '1º domingo de outubro · posse em 10 de janeiro',
    bloco: CT,
    destaque: true,
    resumo:
      'Art. 139: O processo para a escolha dos membros do Conselho Tutelar será estabelecido em LEI MUNICIPAL e realizado sob a responsabilidade do CONSELHO MUNICIPAL DOS DIREITOS da criança e do adolescente, e a FISCALIZAÇÃO DO MINISTÉRIO PÚBLICO. §1º O processo de escolha ocorrerá em data UNIFICADA em todo o território nacional a cada 4 anos, no PRIMEIRO DOMINGO DO MÊS DE OUTUBRO do ano subsequente ao da eleição presidencial. §2º A POSSE dos conselheiros ocorrerá no dia 10 DE JANEIRO do ano subsequente ao processo de escolha. §3º No processo de escolha é VEDADO AO CANDIDATO DOAR, OFERECER, PROMETER OU ENTREGAR AO ELEITOR bem ou vantagem pessoal de qualquer natureza, inclusive brindes de pequeno valor. Art. 140: são IMPEDIDOS de servir no mesmo Conselho MARIDO E MULHER, ASCENDENTES E DESCENDENTES, SOGRO E GENRO OU NORA, IRMÃOS, CUNHADOS (durante o cunhadio), TIO E SOBRINHO, PADRASTO OU MADRASTA E ENTEADO. Parágrafo único: estende-se o impedimento ao conselheiro em relação à autoridade judiciária e ao representante do Ministério Público com atuação na Justiça da Infância e da Juventude, em exercício na comarca, foro regional ou distrital.',
    prova:
      'Datas obrigatórias: escolha no PRIMEIRO DOMINGO DE OUTUBRO do ano seguinte à eleição presidencial; posse em 10 DE JANEIRO. Responsável: CMDCA; fiscal: MINISTÉRIO PÚBLICO. E o rol de parentes impedidos do art. 140.',
    pegadinha:
      'Dizer que a Justiça Eleitoral conduz o processo (quem conduz é o CMDCA, com fiscalização do MP); trocar a data da posse; ou esquecer o impedimento em relação ao juiz e ao promotor da comarca.',
    exemplo:
      'Marido e mulher não podem integrar o mesmo Conselho Tutelar, ainda que ambos aprovados no processo de escolha.',
    macete: 'CMDCA organiza · MP fiscaliza · 1º domingo de outubro · posse em 10/1.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 141,
    titulo: 'Acesso à Justiça',
    sintese: 'Defensoria, gratuidade e isenção',
    bloco: JUS,
    resumo:
      'É garantido o ACESSO DE TODA CRIANÇA OU ADOLESCENTE À DEFENSORIA PÚBLICA, ao MINISTÉRIO PÚBLICO e ao PODER JUDICIÁRIO, por qualquer de seus órgãos. §1º A ASSISTÊNCIA JUDICIÁRIA GRATUITA será prestada aos que dela necessitarem, através de defensor público ou advogado nomeado. §2º As ações judiciais da competência da Justiça da Infância e da Juventude são ISENTAS DE CUSTAS E EMOLUMENTOS, ressalvada a hipótese de LITIGÂNCIA DE MÁ-FÉ.',
    prova:
      'Isenção de custas como regra, com uma única ressalva: LITIGÂNCIA DE MÁ-FÉ. Abre o Título VI, que vai do art. 141 ao 224.',
    pegadinha:
      'Afirmar que a isenção é absoluta (há a ressalva) ou condicioná-la à comprovação de hipossuficiência.',
    exemplo:
      'Ação de guarda ajuizada na Vara da Infância não recolhe custas, salvo se reconhecida má-fé processual.',
    macete: 'Grátis na Infância — só paga quem age de má-fé.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 143,
    titulo: 'Sigilo e vedação de divulgação',
    sintese: 'Nome, foto e iniciais fora da imprensa',
    bloco: JUS,
    destaque: true,
    resumo:
      'Art. 143: É VEDADA A DIVULGAÇÃO de atos judiciais, policiais e administrativos que digam respeito a crianças e adolescentes a que se ATRIBUA AUTORIA DE ATO INFRACIONAL. Parágrafo único: qualquer notícia a respeito do fato NÃO PODERÁ IDENTIFICAR a criança ou adolescente, VEDANDO-SE FOTOGRAFIA, REFERÊNCIA A NOME, APELIDO, FILIAÇÃO, PARENTESCO, RESIDÊNCIA e, INCLUSIVE, INICIAIS DO NOME E SOBRENOME. Art. 144: a expedição de cópia ou certidão de atos a que se refere o artigo anterior somente será deferida pela autoridade judiciária competente, se demonstrado o INTERESSE e JUSTIFICADA A FINALIDADE.',
    prova:
      'A vedação alcança até as INICIAIS do nome — detalhe que cai com frequência. Descumprir configura a infração administrativa do art. 247 (multa de 3 a 20 salários de referência, com apreensão da publicação em caso de reincidência).',
    pegadinha:
      'Dizer que a divulgação com iniciais é permitida; ou que a proibição cai quando o adolescente completa 18 anos (o ato foi praticado na menoridade — a proteção permanece).',
    exemplo:
      'Jornal que publica “J.S.M., 16 anos, apreendido por roubo” viola o parágrafo único do art. 143.',
    macete: 'Nem as INICIAIS. Foto, apelido, endereço — nada sai.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 147,
    titulo: 'Competência territorial',
    sintese: 'Domicílio dos pais; lugar da ação ou omissão',
    bloco: JUS,
    destaque: true,
    resumo:
      'A COMPETÊNCIA será determinada: I – pelo DOMICÍLIO DOS PAIS OU RESPONSÁVEL; II – pelo LUGAR ONDE SE ENCONTRE a criança ou adolescente, à falta dos pais ou responsável. §1º Nos casos de ATO INFRACIONAL, será competente a autoridade do LUGAR DA AÇÃO OU OMISSÃO, observadas as regras de conexão, continência e prevenção. §2º A execução das medidas poderá ser delegada à autoridade competente da residência dos pais ou responsável, ou do local onde sediar-se a entidade que abrigar a criança ou adolescente. §3º Em caso de infração cometida através de transmissão simultânea de rádio ou televisão, que atinja mais de uma comarca, será competente, para aplicação da penalidade, a autoridade judiciária do local da sede estadual da emissora ou rede.',
    prova:
      'Regra geral: domicílio dos PAIS (e não da criança). Exceção: ato infracional → lugar da AÇÃO OU OMISSÃO. Súmula 383 do STJ: a competência para processar e julgar as ações conexas de interesse de menor é, em princípio, do foro do domicílio do detentor de sua guarda.',
    pegadinha:
      'Aplicar o domicílio dos pais ao ato infracional — nesse caso vale o lugar do fato; ou usar o lugar do fato para as ações protetivas.',
    exemplo:
      'Adolescente domiciliado em Campinas que pratica roubo em Santos responde perante a Vara da Infância de Santos.',
    macete: 'Proteção: onde moram os PAIS. Ato infracional: onde o FATO aconteceu.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 148,
    titulo: 'Competência da Justiça da Infância',
    sintese: 'Rol do caput e do parágrafo único',
    bloco: JUS,
    resumo:
      'A Justiça da Infância e da Juventude é competente para: I – conhecer de representações promovidas pelo MP para apuração de ATO INFRACIONAL, aplicando as medidas cabíveis; II – conceder a REMISSÃO como forma de suspensão ou extinção do processo; III – conhecer de pedidos de ADOÇÃO e seus incidentes; IV – conhecer de ações civis fundadas em INTERESSES INDIVIDUAIS, DIFUSOS OU COLETIVOS afetos à criança e ao adolescente; V – conhecer de ações decorrentes de irregularidades em ENTIDADES DE ATENDIMENTO, aplicando as medidas cabíveis; VI – aplicar penalidades administrativas nos casos de infrações contra norma de proteção à criança ou adolescente; VII – conhecer de casos encaminhados pelo Conselho Tutelar, aplicando as medidas cabíveis. Parágrafo único: quando se tratar de criança ou adolescente nas hipóteses do ART. 98, é também competente a Justiça da Infância e da Juventude para: a) conhecer de pedidos de GUARDA e TUTELA; b) conhecer de ações de DESTITUIÇÃO DO PODER FAMILIAR, perda ou modificação da tutela ou guarda; c) suprir a capacidade ou o consentimento para o casamento; d) conhecer de pedidos baseados em DISCORDÂNCIA PATERNA OU MATERNA; e) conceder a EMANCIPAÇÃO; f) designar curador especial; g) conhecer de ações de ALIMENTOS; h) determinar o cancelamento, a retificação e o suprimento dos registros de nascimento e óbito.',
    prova:
      'Distinção decisiva: as matérias do CAPUT são competência da Vara da Infância sempre; as do PARÁGRAFO ÚNICO só quando a criança estiver em situação de risco (art. 98) — fora disso, competem à Vara de Família.',
    pegadinha:
      'Afirmar que toda ação de guarda, alimentos ou emancipação tramita na Vara da Infância — só se houver risco (art. 98).',
    exemplo:
      'Disputa de guarda entre pais separados, sem risco, vai para a Vara de Família; se a criança está em situação de risco, vai para a Infância.',
    macete: 'Caput = sempre da Infância. Parágrafo único = só com risco (art. 98).',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 149,
    titulo: 'Portarias e alvarás — rol taxativo',
    sintese: 'Nada de determinações genéricas',
    bloco: JUS,
    destaque: true,
    resumo:
      'Compete à autoridade judiciária DISCIPLINAR, ATRAVÉS DE PORTARIA, OU AUTORIZAR, MEDIANTE ALVARÁ: I – a entrada e permanência de criança ou adolescente, DESACOMPANHADO DOS PAIS OU RESPONSÁVEL, em: a) estádio, ginásio e campo desportivo; b) bailes ou promoções dançantes; c) boate ou congêneres; d) casa que explore comercialmente diversões eletrônicas; e) estúdios cinematográficos, de teatro, rádio e televisão; II – a PARTICIPAÇÃO de criança e adolescente em: a) espetáculos públicos e seus ensaios; b) certames de beleza. §1º Para os fins do disposto neste artigo, a autoridade judiciária levará em conta, dentre outros fatores: princípios do ECA, peculiaridades locais, existência de instalações adequadas, tipo de frequência habitual, adequação do ambiente a eventual participação ou frequência de crianças e adolescentes, natureza do espetáculo. §2º As medidas adotadas na conformidade deste artigo deverão ser FUNDAMENTADAS, CASO A CASO, VEDADAS AS DETERMINAÇÕES DE CARÁTER GERAL.',
    prova:
      'O §2º é o coração do artigo: são VEDADAS portarias genéricas — cada medida exige fundamentação CASO A CASO. O rol de hipóteses é TAXATIVO: o juiz não pode criar restrições fora dele (ex.: “toque de recolher” genérico é ilegal, entendimento consolidado do STJ).',
    pegadinha:
      'Admitir portaria de “toque de recolher” para todos os adolescentes do município; ou ampliar o rol do inciso I.',
    exemplo:
      'Portaria que proíbe genericamente a permanência de menores de 16 anos nas ruas após as 22h é ilegal; alvará para um show específico é válido.',
    macete: 'Caso a caso, sempre. Portaria genérica é nula — e o rol é fechado.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 152,
    titulo: 'Procedimentos e prioridade absoluta',
    sintese: 'CPC subsidiário + tramitação prioritária',
    bloco: JUS,
    resumo:
      'Aos procedimentos regulados nesta Lei aplicam-se SUBSIDIARIAMENTE as normas gerais previstas na legislação processual pertinente. §1º É assegurada, sob pena de responsabilidade, PRIORIDADE ABSOLUTA na tramitação dos processos e procedimentos previstos nesta Lei, assim como na execução dos atos e diligências judiciais a eles referentes. §2º Os prazos estabelecidos nesta Lei e aplicáveis aos seus procedimentos são CONTADOS EM DIAS CORRIDOS, excluído o dia do começo e incluído o dia do vencimento, VEDADO O PRAZO EM DOBRO para a Fazenda Pública e o Ministério Público.',
    prova:
      'O §2º (Lei 13.509/2017) é ouro: no ECA os prazos correm em DIAS CORRIDOS — afastando o CPC/2015, que adota dias úteis — e é VEDADO o prazo em dobro para Fazenda Pública e MP.',
    pegadinha:
      'Aplicar a contagem em dias úteis do CPC ou conceder prazo em dobro ao Ministério Público nos feitos do ECA.',
    exemplo:
      'Prazo de 10 dias para apelação em ação de destituição conta corridos, inclusive sábados e domingos.',
    macete: 'ECA: dias CORRIDOS e sem prazo em dobro — nem para o MP.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 163,
    titulo: 'Perda e suspensão do poder familiar — prazo',
    sintese: '120 dias para concluir o processo',
    bloco: JUS,
    destaque: true,
    resumo:
      'O prazo máximo para CONCLUSÃO DO PROCEDIMENTO de perda ou suspensão do poder familiar será de 120 DIAS, e caberá ao juiz, no caso de notória inviabilidade de manutenção do poder familiar, dirigir esforços para preparar a criança ou o adolescente com vistas à colocação em família substituta. Parágrafo único: a sentença que decretar a perda ou a suspensão do poder familiar será AVERBADA À MARGEM DO REGISTRO DE NASCIMENTO da criança ou do adolescente. (Arts. 155 a 163 regulam o procedimento: legitimidade do MP ou de quem tenha legítimo interesse, citação, contestação em 10 dias, defensor, estudo social e oitiva obrigatória do MP.)',
    prova:
      'Prazo de 120 DIAS para conclusão (Lei 13.509/2017) e a averbação da sentença à margem do registro de nascimento. Legitimidade: MP ou quem tenha legítimo interesse (art. 155).',
    pegadinha:
      'Trocar o prazo (90 ou 180 dias) ou dizer que a sentença gera novo registro (gera averbação — o novo registro é efeito da adoção, art. 47).',
    exemplo:
      'Ação de destituição ajuizada em março deve estar sentenciada até julho, salvo motivo justificado.',
    macete: 'Destituição: 120 dias para decidir e averbação na certidão.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 174,
    titulo: 'Apreensão em flagrante — liberação',
    sintese: 'Regra é liberar aos pais',
    bloco: JUS,
    destaque: true,
    resumo:
      'Comparecendo qualquer dos pais ou responsável, o adolescente será PRONTAMENTE LIBERADO pela autoridade policial, sob termo de compromisso e responsabilidade de sua apresentação ao representante do Ministério Público, no mesmo dia ou, sendo impossível, no primeiro dia útil imediato, EXCETO quando, pela GRAVIDADE DO ATO INFRACIONAL e sua REPERCUSSÃO SOCIAL, deva o adolescente permanecer sob internação para GARANTIA DE SUA SEGURANÇA PESSOAL ou MANUTENÇÃO DA ORDEM PÚBLICA. (Art. 175: não liberado, apresentação imediata ao MP; art. 176: boletim de ocorrência circunstanciada; art. 179: oitiva informal do adolescente pelo MP.)',
    prova:
      'A REGRA é a liberação imediata aos pais; a internação pré-processual é EXCEÇÃO, admitida por gravidade + repercussão social, para segurança pessoal ou ordem pública.',
    pegadinha:
      'Inverter regra e exceção, sustentando que o flagrante de ato infracional grave impõe internação automática.',
    exemplo:
      'Adolescente apreendido por furto é liberado ao pai mediante termo de compromisso de apresentação ao promotor.',
    macete: 'Chegou o pai? Solta. Só não solta se for grave E houver repercussão.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 180,
    titulo: 'Opções do Ministério Público',
    sintese: 'Arquivar, remitir ou representar',
    bloco: JUS,
    destaque: true,
    resumo:
      'Adotadas as providências a que alude o art. 179, o representante do Ministério Público poderá: I – PROMOVER O ARQUIVAMENTO dos autos; II – CONCEDER A REMISSÃO; III – REPRESENTAR à autoridade judiciária para aplicação de medida socioeducativa. (Art. 181: o arquivamento e a remissão serão submetidos à HOMOLOGAÇÃO JUDICIAL; discordando, o juiz remeterá os autos ao PROCURADOR-GERAL DE JUSTIÇA.)',
    prova:
      'Três caminhos do MP após a oitiva informal — memorize a tríade A-R-R. E o controle: arquivamento e remissão dependem de homologação; havendo discordância, o juiz aciona o PROCURADOR-GERAL DE JUSTIÇA (e não o Tribunal).',
    pegadinha:
      'Dizer que o juiz pode simplesmente rejeitar a remissão e prosseguir de ofício — deve remeter ao PGJ, aplicando-se por analogia a lógica do art. 28 do CPP.',
    exemplo:
      'Promotor oferece remissão; o juiz discorda e envia os autos ao PGJ, que insiste na remissão — o juiz então homologa.',
    macete: 'MP: Arquiva, Remite ou Representa. Juiz discordou? Sobe pro PGJ.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 183,
    titulo: 'Prazo do procedimento com internado',
    sintese: '45 dias improrrogáveis',
    bloco: JUS,
    destaque: true,
    resumo:
      'O prazo máximo e IMPRORROGÁVEL para a conclusão do procedimento, ESTANDO O ADOLESCENTE INTERNADO PROVISORIAMENTE, será de 45 DIAS.',
    prova:
      'Reforça o art. 108. A palavra “IMPRORROGÁVEL” é o que a banca busca: ultrapassado o prazo, a internação provisória torna-se ilegal, cabendo relaxamento via habeas corpus. Súmula 265 do STJ: é necessária a oitiva do menor infrator antes de decretar-se a regressão da medida socioeducativa.',
    pegadinha:
      'Admitir prorrogação por excesso de trabalho ou complexidade; ou aplicar os 45 dias a adolescente solto (aí não há esse limite rígido).',
    exemplo:
      'Processo não sentenciado no 46º dia com adolescente internado: liberação imediata, sem prejuízo do prosseguimento do feito.',
    macete: '45 dias com internado — improrrogável, sem desculpa.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 186,
    titulo: 'Audiência de apresentação e continuação',
    sintese: 'Oitiva, defesa e sentença',
    bloco: JUS,
    resumo:
      'Comparecendo o adolescente, seus pais ou responsável, a autoridade judiciária procederá à OITIVA dos mesmos, podendo solicitar opinião de profissional qualificado. §1º Sendo o fato grave, passível de aplicação de medida de internação ou colocação em regime de semiliberdade, a autoridade judiciária, verificando que o adolescente NÃO POSSUI ADVOGADO CONSTITUÍDO, NOMEARÁ DEFENSOR, designando, desde logo, audiência em continuação, podendo determinar diligências e estudo do caso. §§2º a 4º: oitiva de testemunhas, debates orais ou memoriais e sentença. Art. 189: a autoridade judiciária NÃO APLICARÁ QUALQUER MEDIDA desde que reconheça na sentença: I – estar provada a inexistência do fato; II – não haver prova da existência do fato; III – não constituir o fato ato infracional; IV – não existir prova de ter o adolescente concorrido para o ato infracional. Parágrafo único: na hipótese deste artigo, estando o adolescente internado, será IMEDIATAMENTE COLOCADO EM LIBERDADE.',
    prova:
      'As quatro hipóteses do art. 189 espelham as absolvições do art. 386 do CPP. Se internado, a liberação é IMEDIATA. Defesa técnica é obrigatória sempre que cabível internação ou semiliberdade.',
    pegadinha:
      'Dizer que o juiz pode aplicar medida “pedagógica” mesmo sem prova da autoria — impossível diante do art. 189, IV.',
    exemplo:
      'Prova testemunhal frágil e sem reconhecimento leva à improcedência da representação e à liberação imediata do internado.',
    macete: 'Sem fato, sem prova, sem tipicidade ou sem autoria: nada de medida.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 198,
    titulo: 'Recursos no ECA',
    sintese: 'CPC adaptado · prazo 10 dias · sem preparo',
    bloco: JUS,
    destaque: true,
    resumo:
      'Nos procedimentos afetos à Justiça da Infância e da Juventude, inclusive os relativos à execução das medidas socioeducativas, ADOTAR-SE-Á O SISTEMA RECURSAL DO CÓDIGO DE PROCESSO CIVIL, aprovadas as seguintes adaptações: II – em todos os recursos, salvo nos embargos de declaração, o PRAZO PARA O MINISTÉRIO PÚBLICO E PARA A DEFESA SERÁ SEMPRE DE 10 DIAS; III – os recursos terão PREFERÊNCIA DE JULGAMENTO e DISPENSARÃO REVISOR; VII – antes de determinar a remessa dos autos à superior instância, no caso de apelação, ou do instrumento, no caso de agravo, a autoridade judiciária proferirá DESPACHO FUNDAMENTADO, mantendo ou reformando a decisão, no prazo de 5 DIAS (juízo de retratação). Art. 198, §1º: os recursos são ISENTOS DE PREPARO. Art. 199-A: a sentença que deferir a ADOÇÃO produz efeito DESDE LOGO, embora sujeita a apelação, que será recebida EXCLUSIVAMENTE NO EFEITO DEVOLUTIVO, salvo se se tratar de adoção internacional ou se houver perigo de dano irreparável. Art. 199-B: a sentença que destituir ambos ou qualquer dos genitores do poder familiar fica sujeita a apelação, que deverá ser recebida apenas no EFEITO DEVOLUTIVO.',
    prova:
      'Quatro números: prazo ÚNICO de 10 dias (salvo embargos), retratação em 5 dias, isenção de preparo e dispensa de revisor. E os efeitos: adoção e destituição → apelação apenas no EFEITO DEVOLUTIVO (a decisão vale de imediato).',
    pegadinha:
      'Aplicar os prazos diferenciados do CPC (15 dias, dobro para o MP); ou dizer que a apelação em adoção tem efeito suspensivo como regra.',
    exemplo:
      'Sentença de adoção é cumprida imediatamente, com novo registro civil, ainda que pendente apelação.',
    macete: '10 dias para todos · 5 para retratar · sem preparo · adoção e destituição valem JÁ.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 201,
    titulo: 'Atribuições do Ministério Público',
    sintese: 'Fiscal da lei e autor das ações',
    bloco: JUS,
    destaque: true,
    resumo:
      'Compete ao Ministério Público, entre outras atribuições: I – conceder a REMISSÃO como forma de exclusão do processo; II – promover e acompanhar os procedimentos relativos às infrações atribuídas a adolescentes; III – promover e acompanhar as ações de ALIMENTOS e os procedimentos de SUSPENSÃO E DESTITUIÇÃO DO PODER FAMILIAR, nomeação e remoção de tutores, curadores e guardiães; V – promover o INQUÉRITO CIVIL e a AÇÃO CIVIL PÚBLICA para a proteção dos interesses individuais, difusos ou coletivos; VI – instaurar procedimentos administrativos e, para instruí-los: a) expedir NOTIFICAÇÕES para colher depoimentos; b) REQUISITAR informações, exames, perícias e documentos; c) requisitar informações e documentos a particulares e instituições privadas; VIII – zelar pelo efetivo respeito aos direitos e garantias legais assegurados às crianças e adolescentes, promovendo as medidas judiciais e extrajudiciais cabíveis. §3º O representante do Ministério Público, no exercício de suas funções, terá LIVRE ACESSO a todo local onde se encontre criança ou adolescente. §5º Para o exercício da atribuição de que trata este artigo, poderá o representante do Ministério Público: a) reduzir a termo as declarações do reclamante; b) entender-se diretamente com a pessoa ou autoridade reclamada; c) efetuar recomendações visando à melhoria dos serviços públicos e de relevância pública. Art. 204: a falta de intervenção do Ministério Público acarreta a NULIDADE DO FEITO.',
    prova:
      'Guarde o art. 204: ausência de intervenção do MP = NULIDADE. E o livre acesso do §3º a qualquer local onde haja criança ou adolescente. A legitimidade do MP para ação civil pública em defesa de direitos individuais indisponíveis de criança é pacífica (Súmula 594/STJ, sobre alimentos).',
    pegadinha:
      'Dizer que a falta de manifestação do MP é mera irregularidade sanável; ou negar sua legitimidade para exigir vaga em creche via ação civil pública.',
    exemplo:
      'MP ajuíza ACP para obrigar o município a ampliar vagas em creche — legitimidade reconhecida pelo STF (tema 548).',
    macete: 'Sem MP no processo da Infância, o feito é NULO. E ele entra em qualquer lugar.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 208,
    titulo: 'Proteção judicial dos interesses difusos',
    sintese: 'ACP para exigir políticas públicas',
    bloco: JUS,
    destaque: true,
    resumo:
      'Regem-se pelas disposições desta Lei as ações de responsabilidade por OFENSA AOS DIREITOS assegurados à criança e ao adolescente, referentes ao NÃO OFERECIMENTO OU OFERTA IRREGULAR: I – do ensino obrigatório; II – de atendimento educacional especializado aos portadores de deficiência; III – de atendimento em creche e pré-escola às crianças de zero a cinco anos de idade; IV – de ensino noturno regular; V – de programas suplementares de material didático, transporte, alimentação e assistência à saúde; VI – de serviço de assistência social visando à proteção à família, à maternidade, à infância e à adolescência; VII – de acesso às ações e serviços de saúde; VIII – de escolarização e profissionalização dos adolescentes privados de liberdade; IX – de ações, serviços e programas de orientação, apoio e promoção da família; X – de políticas e programas integrados de atendimento à criança e ao adolescente vítima ou testemunha de violência. §1º As hipóteses previstas neste artigo NÃO EXCLUEM da proteção judicial outros interesses individuais, difusos ou coletivos, próprios da infância e da adolescência. (Art. 210: legitimados concorrentes — MP, União, estados, municípios, DF e associações constituídas há pelo menos 1 ano. Art. 212: admissíveis todas as espécies de ações. Art. 213: obrigação de fazer ou não fazer com multa diária.)',
    prova:
      'Rol EXEMPLIFICATIVO (§1º) e legitimidade CONCORRENTE do art. 210 — MP, entes federativos e associações com pelo menos 1 ANO de constituição. É a base das ações que exigem vagas em creche, medicamentos e escolarização de internados.',
    pegadinha:
      'Tratar o rol como taxativo; ou dizer que só o Ministério Público pode ajuizar essas ações (a legitimidade é concorrente).',
    exemplo:
      'Associação de pais constituída há dois anos ajuíza ação para obrigar o estado a garantir transporte escolar rural.',
    macete: 'Rol aberto + legitimados em coro (MP, entes e associação com 1 ano).',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 220,
    titulo: 'Provocação da iniciativa do MP',
    sintese: 'Qualquer pessoa pode representar',
    bloco: JUS,
    resumo:
      'Art. 220: QUALQUER PESSOA poderá e o SERVIDOR PÚBLICO DEVERÁ provocar a iniciativa do Ministério Público, prestando-lhe informações sobre fatos que constituam objeto de ação civil e indicando-lhe os elementos de convicção. Art. 221: se, no exercício de suas funções, os juízes e tribunais tiverem conhecimento de fatos que possam ensejar a propositura de ação civil, remeterão peças ao Ministério Público. Art. 223: o Conselho Tutelar encaminhará ao representante do Ministério Público, para efeito de ajuizamento das ações de sua competência, notícia de fato que constitua infração administrativa ou penal contra os direitos da criança ou adolescente. Art. 224: aplicam-se subsidiariamente, no que couber, as disposições da LEI Nº 7.347, DE 24 DE JULHO DE 1985 (Lei da Ação Civil Pública).',
    prova:
      'Contraste do art. 220: para o particular é FACULDADE (“poderá”); para o servidor público é DEVER (“deverá”). E o art. 224 manda aplicar subsidiariamente a Lei da ACP (7.347/85).',
    pegadinha:
      'Igualar particular e servidor; ou apontar o CDC como norma subsidiária (é a Lei 7.347/85).',
    exemplo:
      'Diretor de escola municipal que constata falta de merenda tem o DEVER de comunicar ao MP; o vizinho, a faculdade.',
    macete: 'Cidadão PODE; servidor DEVE. Subsidiária: Lei da ACP.',
    bancas: ['FCC', 'AOCP'],
  },
];
