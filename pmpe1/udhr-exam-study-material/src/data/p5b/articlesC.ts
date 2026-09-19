import type { Artigo } from '../shared';

const POL = 'Política de atendimento';
const PRO = 'Medidas de proteção';
const ATO = 'Ato infracional';
const SOC = 'Medidas socioeducativas';

export const artigosC: Artigo[] = [
  {
    n: 86,
    titulo: 'Conjunto articulado de ações',
    sintese: 'União, estados e municípios em rede',
    bloco: POL,
    resumo:
      'A política de atendimento dos direitos da criança e do adolescente far-se-á através de um CONJUNTO ARTICULADO DE AÇÕES GOVERNAMENTAIS E NÃO GOVERNAMENTAIS, da União, dos estados, do Distrito Federal e dos municípios.',
    prova:
      'Abre o Livro II. Palavras-chave: conjunto ARTICULADO, ações governamentais E NÃO governamentais, e os quatro entes federativos. É a base do Sistema de Garantia de Direitos (SGD).',
    pegadinha:
      'Dizer que a política é exclusivamente estatal (o texto inclui as ações não governamentais) ou atribuí-la apenas ao município.',
    exemplo:
      'Rede formada por CRAS, CREAS, escolas, ONGs conveniadas e Conselho Tutelar atuando de forma integrada realiza o art. 86.',
    macete: 'Art. 86: rede, não balcão. Governo + sociedade, nos quatro entes.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 87,
    titulo: 'Linhas de ação',
    sintese: 'As 7 linhas da política de atendimento',
    bloco: POL,
    destaque: true,
    resumo:
      'São LINHAS DE AÇÃO da política de atendimento: I – políticas sociais básicas; II – serviços, programas, projetos e benefícios de ASSISTÊNCIA SOCIAL de garantia de proteção social e de redução de danos; III – serviços especiais de prevenção e atendimento médico e psicossocial às vítimas de negligência, maus-tratos, exploração, abuso, crueldade e opressão; IV – serviço de identificação e localização de pais, responsável, crianças e adolescentes DESAPARECIDOS; V – proteção jurídico-social por entidades de defesa dos direitos da criança e do adolescente; VI – políticas e programas destinados a prevenir ou abreviar o período de afastamento do convívio familiar e a garantir o efetivo exercício do direito à convivência familiar; VII – campanhas de estímulo ao acolhimento sob forma de guarda de crianças e adolescentes afastados do convívio familiar e à ADOÇÃO, especificamente inter-racial, de crianças MAIORES ou de ADOLESCENTES, com necessidades específicas de saúde ou com DEFICIÊNCIAS e de GRUPOS DE IRMÃOS.',
    prova:
      'São SETE linhas (não confunda com as diretrizes do art. 88, que são doze). Cobram-se o inciso IV (crianças desaparecidas) e o VII (campanhas de adoção inter-racial, de maiores, com deficiência e de grupos de irmãos).',
    pegadinha:
      'Trocar “linhas de ação” (art. 87) por “diretrizes” (art. 88) — são artigos diferentes; ou suprimir o inciso IV, o mais esquecido.',
    exemplo:
      'Campanha estadual de “adoção tardia” para adolescentes e grupos de irmãos concretiza o inciso VII.',
    macete: 'Art. 87 = LINHAS (7). Art. 88 = DIRETRIZES (12). Linha vem antes, é menor.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 88,
    titulo: 'Diretrizes da política de atendimento',
    sintese: 'Municipalização, conselhos e fundos',
    bloco: POL,
    destaque: true,
    resumo:
      'São DIRETRIZES da política de atendimento: I – MUNICIPALIZAÇÃO do atendimento; II – criação de CONSELHOS DE DIREITOS municipais, estaduais e nacional — órgãos DELIBERATIVOS e CONTROLADORES das ações em todos os níveis, assegurada a PARTICIPAÇÃO POPULAR PARITÁRIA por meio de organizações representativas; III – criação e manutenção de programas específicos, observada a descentralização político-administrativa; IV – manutenção de FUNDOS nacional, estaduais e municipais vinculados aos respectivos conselhos; V – integração operacional de órgãos do Judiciário, MP, Defensoria, Segurança Pública e Assistência Social para atendimento inicial de adolescente a quem se atribua ato infracional; VI – integração operacional entre Judiciário, MP, Defensoria, Conselho Tutelar e encarregados da execução das políticas sociais para efetivar a agilização do atendimento de crianças e adolescentes inseridos em programas de acolhimento familiar ou institucional; VII – mobilização da opinião pública para a participação dos diversos segmentos da sociedade; VIII a XII – formação continuada, protocolos de escuta especializada, entre outros.',
    prova:
      'O inciso II é campeão: os Conselhos de Direitos (CMDCA, CEDCA, CONANDA) são DELIBERATIVOS e CONTROLADORES, com composição PARITÁRIA (governo + sociedade civil). O inciso I (municipalização) e o IV (fundos vinculados aos conselhos) completam o trio de ouro.',
    pegadinha:
      'Dizer que os Conselhos de Direitos são meramente consultivos (são deliberativos e controladores); confundi-los com o Conselho Tutelar (que é executivo e não formula política); ou afirmar que a composição é majoritariamente governamental.',
    exemplo:
      'O CMDCA delibera sobre a política municipal e gere o Fundo da Infância e Adolescência (FIA); o Conselho Tutelar atende os casos concretos.',
    macete:
      'Conselho de DIREITOS: delibera, controla, é PARITÁRIO e cuida do FUNDO. Conselho TUTELAR: atende o caso. Não se misturam.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 89,
    titulo: 'Função pública relevante',
    sintese: 'Conselheiro: função relevante, sem remuneração no art. 89',
    bloco: POL,
    resumo:
      'A função de membro do CONSELHO NACIONAL e dos conselhos estaduais e municipais dos direitos da criança e do adolescente é considerada de INTERESSE PÚBLICO RELEVANTE e NÃO SERÁ REMUNERADA.',
    prova:
      'Atenção à distinção: o CONSELHEIRO DE DIREITOS não é remunerado (art. 89); já o CONSELHEIRO TUTELAR tem direito a remuneração, férias, 13º e previdência (art. 134).',
    pegadinha:
      'Estender a gratuidade ao conselheiro tutelar — erro clássico. São conselhos e regimes distintos.',
    exemplo:
      'O membro do CMDCA atua voluntariamente; o conselheiro tutelar recebe subsídio previsto em lei municipal.',
    macete: 'Conselho de DIREITOS: honra sem salário. Conselho TUTELAR: salário garantido (art. 134).',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 90,
    titulo: 'Entidades de atendimento e regimes',
    sintese: 'Os 7 regimes + inscrição no CMDCA',
    bloco: POL,
    destaque: true,
    resumo:
      'As entidades de atendimento são responsáveis pela MANUTENÇÃO DAS PRÓPRIAS UNIDADES e pelo planejamento e execução de programas de proteção e socioeducativos destinados a crianças e adolescentes, em regime de: I – ORIENTAÇÃO E APOIO SOCIOFAMILIAR; II – APOIO SOCIOEDUCATIVO EM MEIO ABERTO; III – COLOCAÇÃO FAMILIAR; IV – ACOLHIMENTO INSTITUCIONAL; V – PRESTAÇÃO DE SERVIÇOS À COMUNIDADE; VI – LIBERDADE ASSISTIDA; VII – SEMILIBERDADE; VIII – INTERNAÇÃO. §1º As entidades governamentais e não governamentais deverão proceder à INSCRIÇÃO DE SEUS PROGRAMAS, especificando os regimes de atendimento, junto ao CONSELHO MUNICIPAL DOS DIREITOS da criança e do adolescente, que os manterá registrados e comunicará ao Conselho Tutelar e à autoridade judiciária.',
    prova:
      'Quem registra o PROGRAMA é o Conselho Municipal DOS DIREITOS (CMDCA) — não o Conselho Tutelar, não o juiz. Some o rol de regimes, onde os quatro últimos (V a VIII) coincidem com medidas socioeducativas.',
    pegadinha:
      'Atribuir o registro ao Conselho Tutelar ou ao Juizado; ou dizer que só entidades não governamentais precisam se inscrever (ambas precisam).',
    exemplo:
      'ONG que abre casa de acolhimento deve inscrever o programa no CMDCA, que comunica o Conselho Tutelar e o juízo.',
    macete: 'Programa se inscreve no CMDCA. O Conselho Tutelar só é AVISADO.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 91,
    titulo: 'Registro das entidades não governamentais',
    sintese: 'Registro no CMDCA + hipóteses de negativa',
    bloco: POL,
    resumo:
      'As entidades NÃO GOVERNAMENTAIS somente poderão funcionar depois de REGISTRADAS no Conselho Municipal dos Direitos, o qual comunicará o registro ao Conselho Tutelar e à autoridade judiciária. §1º Será NEGADO o registro à entidade que: a) não ofereça instalações físicas em condições adequadas de habitabilidade, higiene, salubridade e segurança; b) não apresente plano de trabalho compatível com os princípios do Estatuto; c) esteja irregularmente constituída; d) tenha em seus quadros pessoas INIDÔNEAS; e) não se adeque ou deixe de cumprir as resoluções e deliberações relativas à modalidade de atendimento. §2º O registro terá validade MÁXIMA DE 4 ANOS, cabendo ao Conselho Municipal, periodicamente, reavaliar o cabimento de sua renovação.',
    prova:
      'Dois números: cinco hipóteses de negativa (a–e) e validade máxima de 4 ANOS, com reavaliação periódica. O registro é condição para funcionar.',
    pegadinha:
      'Dizer que o registro é permanente ou que vale 2 anos; ou afirmar que entidades governamentais também dependem de registro (elas apenas inscrevem programas — art. 90, §1º).',
    exemplo:
      'Abrigo particular sem alvará sanitário e com plano de trabalho incompatível tem o registro negado com base nas alíneas “a” e “b”.',
    macete: 'ONG: registro no CMDCA, 4 anos no máximo, 5 motivos para levar não.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 92,
    titulo: 'Princípios das entidades de acolhimento',
    sintese: 'Grupos pequenos, irmãos juntos, vínculos preservados',
    bloco: POL,
    destaque: true,
    resumo:
      'As entidades que desenvolvam programas de ACOLHIMENTO FAMILIAR ou INSTITUCIONAL deverão adotar os seguintes princípios: I – preservação dos vínculos familiares e promoção da REINTEGRAÇÃO FAMILIAR; II – integração em família substituta, quando esgotados os recursos de manutenção na família natural ou extensa; III – atendimento PERSONALIZADO e em PEQUENOS GRUPOS; IV – desenvolvimento de atividades em regime de COEDUCAÇÃO; V – NÃO DESMEMBRAMENTO DE GRUPOS DE IRMÃOS; VI – evitar, sempre que possível, a TRANSFERÊNCIA para outras entidades; VII – participação na vida da comunidade local; VIII – preparação gradativa para o desligamento; IX – participação de pessoas da comunidade no processo educativo. §5º As entidades de acolhimento deverão remeter à autoridade judiciária, no máximo a cada 6 MESES, relatório circunstanciado.',
    prova:
      'Nove princípios; os mais cobrados são III (pequenos grupos), V (irmãos não se separam) e VI (evitar transferências). Guarde o prazo do §5º: relatório circunstanciado a cada 6 meses (não confundir com a reavaliação judicial trimestral do art. 19, §1º).',
    pegadinha:
      'Trocar os prazos: reavaliação da situação pelo juiz = 3 meses (art. 19, §1º); relatório da entidade = 6 meses (art. 92, §5º). Também erram ao admitir o desmembramento de irmãos como regra.',
    exemplo:
      'Casa-lar com oito crianças, mantendo três irmãos juntos e enviando relatório semestral ao juízo, cumpre o art. 92.',
    macete: 'Entidade: relatório de 6 em 6. Juiz reavalia de 3 em 3. Irmãos, sempre juntos.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 93,
    titulo: 'Acolhimento em caráter emergencial',
    sintese: 'Sem ordem judicial, comunicar em 24 horas',
    bloco: POL,
    destaque: true,
    resumo:
      'As entidades que mantenham programa de ACOLHIMENTO INSTITUCIONAL poderão, EM CARÁTER EXCEPCIONAL E DE URGÊNCIA, acolher crianças e adolescentes SEM PRÉVIA DETERMINAÇÃO da autoridade competente, fazendo COMUNICAÇÃO DO FATO EM ATÉ 24 HORAS ao Juiz da Infância e da Juventude, sob pena de responsabilidade. Parágrafo único: recebida a comunicação, a autoridade judiciária, ouvido o Ministério Público e se necessário com o apoio do Conselho Tutelar local, tomará as medidas necessárias para promover a imediata reintegração familiar ou, se por qualquer razão não for isso possível ou recomendável, para o encaminhamento a programa de acolhimento familiar, institucional ou a família substituta, observado o disposto no art. 101, §2º.',
    prova:
      'Prazo de ouro: 24 HORAS para comunicar ao JUIZ (não ao Conselho Tutelar, não ao MP). A hipótese é excepcional e de urgência — a regra continua sendo a prévia determinação judicial.',
    pegadinha:
      'Trocar o prazo (48h ou 72h) ou o destinatário da comunicação; ou transformar a exceção em regra de livre acolhimento pela entidade.',
    exemplo:
      'Bebê deixado à porta de um abrigo na madrugada é acolhido de imediato e o fato é comunicado ao juízo no mesmo dia.',
    macete: 'Acolheu sem ordem? 24 HORAS e o JUIZ fica sabendo.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 94,
    titulo: 'Obrigações das entidades de internação',
    sintese: 'Os 20 incisos + separação por critérios',
    bloco: POL,
    resumo:
      'As entidades que desenvolvem programas de INTERNAÇÃO têm as seguintes obrigações, entre outras: observar os direitos e garantias de que são titulares os adolescentes; não restringir nenhum direito que não tenha sido objeto de restrição na decisão de internação; oferecer atendimento personalizado em PEQUENAS UNIDADES e grupos REDUZIDOS; preservar a identidade e oferecer ambiente de respeito e dignidade; diligenciar no sentido do restabelecimento e da preservação dos vínculos familiares; comunicar à autoridade judiciária, periodicamente, os casos em que se mostre inviável ou impossível o reatamento dos vínculos familiares; oferecer instalações físicas em condições adequadas; propiciar escolarização e profissionalização, atividades culturais, esportivas e de lazer, assistência religiosa facultativa, cuidados médicos, psicológicos, odontológicos e farmacêuticos; manter programas destinados ao apoio e acompanhamento de egressos; comunicar ao Ministério Público, de imediato, ocorrência de adolescente ausente; e comunicar à autoridade judiciária, no prazo de 24 HORAS, as INTERNAÇÕES POR ORDEM JUDICIAL. §1º Aplicam-se, no que couber, as obrigações constantes deste artigo às entidades que mantêm programas de acolhimento institucional e familiar.',
    prova:
      'Duas ideias centrais: o internado conserva TODOS os direitos não atingidos pela decisão de internação, e o atendimento deve ocorrer em pequenas unidades e grupos reduzidos. A assistência religiosa é FACULTATIVA.',
    pegadinha:
      'Dizer que a internação suspende automaticamente todos os direitos do adolescente; ou tornar obrigatória a assistência religiosa.',
    exemplo:
      'Unidade socioeducativa que impede visita familiar sem previsão na decisão judicial descumpre a obrigação de não restringir direitos além do determinado.',
    macete: 'Internou: tirou só a liberdade. O resto dos direitos continua de pé.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 95,
    titulo: 'Fiscalização das entidades',
    sintese: 'Judiciário, MP e Conselhos Tutelares',
    bloco: POL,
    destaque: true,
    resumo:
      'As entidades governamentais e não governamentais referidas no art. 90 serão FISCALIZADAS pelo JUDICIÁRIO, pelo MINISTÉRIO PÚBLICO e pelos CONSELHOS TUTELARES.',
    prova:
      'Os três fiscalizadores são cobrados literalmente. Note que o Conselho Municipal de Direitos registra, mas a FISCALIZAÇÃO cabe ao trio do art. 95.',
    pegadinha:
      'Incluir o CMDCA entre os fiscalizadores do art. 95 (ele registra — art. 90 e 91) ou excluir o Conselho Tutelar do rol.',
    exemplo:
      'Conselho Tutelar que visita abrigo e constata irregularidades representa ao MP, que pode ajuizar o procedimento do art. 191.',
    macete: 'Fiscaliza: Juiz, MP e Conselho TUTELAR. Registra: CMDCA.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 96,
    titulo: 'Medidas aplicáveis às entidades',
    sintese: 'Advertência a fechamento da unidade',
    bloco: POL,
    resumo:
      'Art. 97: verificada a ocorrência de irregularidade, poderão ser aplicadas, sem prejuízo da responsabilidade civil e criminal: I – às entidades GOVERNAMENTAIS: a) advertência; b) afastamento provisório de seus dirigentes; c) afastamento definitivo de seus dirigentes; d) fechamento de unidade ou interdição de programa. II – às entidades NÃO GOVERNAMENTAIS: a) advertência; b) suspensão total ou parcial do repasse de verbas públicas; c) interdição de unidades ou suspensão de programa; d) CASSAÇÃO DO REGISTRO. Parágrafo único: em caso de reiteradas infrações cometidas por entidades de atendimento, que coloquem em risco os direitos assegurados nesta Lei, deverá ser o fato comunicado ao Ministério Público ou representada à autoridade judiciária competente para as providências cabíveis, inclusive suspensão das atividades ou dissolução da entidade.',
    prova:
      'Dois rols distintos: à entidade GOVERNAMENTAL não se aplica cassação de registro (ela não tem registro) nem suspensão de verbas; à NÃO GOVERNAMENTAL não se aplica afastamento de dirigentes pelo juízo. A pena mais grave da privada é a CASSAÇÃO DO REGISTRO.',
    pegadinha:
      'Aplicar cassação de registro a entidade pública ou afastamento de dirigentes a entidade privada — a banca embaralha os incisos.',
    exemplo:
      'Abrigo municipal com maus-tratos: afastamento do dirigente. Abrigo particular reincidente: cassação do registro.',
    macete: 'Pública: adverte, afasta dirigente, fecha. Privada: adverte, corta verba, interdita, CASSA.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 98,
    titulo: 'Quando cabem medidas de proteção',
    sintese: 'Ameaça ou violação em 3 hipóteses',
    bloco: PRO,
    destaque: true,
    resumo:
      'As medidas de proteção são aplicáveis sempre que os direitos reconhecidos nesta Lei forem AMEAÇADOS OU VIOLADOS: I – por AÇÃO OU OMISSÃO DA SOCIEDADE OU DO ESTADO; II – por FALTA, OMISSÃO OU ABUSO DOS PAIS OU RESPONSÁVEL; III – EM RAZÃO DE SUA CONDUTA.',
    prova:
      'Três incisos decoráveis. Basta a AMEAÇA — não é preciso a violação consumada. O inciso III é a chave para aplicar medida protetiva à CRIANÇA autora de ato infracional (art. 105).',
    pegadinha:
      'Exigir violação efetiva (a ameaça basta); ou esquecer o inciso III, que permite a medida em razão da conduta do próprio adolescente (ex.: uso de drogas).',
    exemplo:
      'Criança de 10 anos que subtrai um celular recebe medida de proteção do art. 101 com base no art. 98, III — jamais medida socioeducativa.',
    macete: 'Ameaçou ou violou? Protege. Culpa do Estado, dos pais OU dela mesma.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 99,
    titulo: 'Aplicação isolada ou cumulativa',
    sintese: 'Medidas substituíveis a qualquer tempo',
    bloco: PRO,
    resumo:
      'As medidas previstas neste Capítulo poderão ser aplicadas ISOLADA OU CUMULATIVAMENTE, bem como SUBSTITUÍDAS A QUALQUER TEMPO.',
    prova:
      'Flexibilidade total: cumulação e substituição livres, conforme o melhor interesse. A mesma regra vale para as socioeducativas (art. 113, que remete aos arts. 99 e 100).',
    pegadinha:
      'Afirmar que só é possível aplicar uma medida por vez ou que a substituição exige novo processo.',
    exemplo:
      'O juiz aplica simultaneamente matrícula obrigatória (inciso III) e inclusão da família em programa de apoio (inciso IV).',
    macete: 'Medida protetiva é combo: soma, troca e ajusta quando quiser.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 100,
    titulo: 'Princípios que regem as medidas',
    sintese: 'Fortalecer vínculos + 12 princípios',
    bloco: PRO,
    destaque: true,
    resumo:
      'Na aplicação das medidas levar-se-ão em conta as NECESSIDADES PEDAGÓGICAS, preferindo-se aquelas que visem ao FORTALECIMENTO DOS VÍNCULOS FAMILIARES E COMUNITÁRIOS. Parágrafo único — princípios que regem a aplicação: I – condição da criança e do adolescente como SUJEITOS DE DIREITOS; II – PROTEÇÃO INTEGRAL E PRIORITÁRIA; III – RESPONSABILIDADE PRIMÁRIA E SOLIDÁRIA DO PODER PÚBLICO; IV – INTERESSE SUPERIOR da criança e do adolescente; V – PRIVACIDADE; VI – INTERVENÇÃO PRECOCE; VII – INTERVENÇÃO MÍNIMA; VIII – PROPORCIONALIDADE E ATUALIDADE; IX – RESPONSABILIDADE PARENTAL; X – PREVALÊNCIA DA FAMÍLIA; XI – OBRIGATORIEDADE DA INFORMAÇÃO; XII – OITIVA OBRIGATÓRIA E PARTICIPAÇÃO.',
    prova:
      'Os doze princípios caem em bloco e por eliminação. Os mais cobrados: intervenção PRECOCE (agir cedo) × intervenção MÍNIMA (somente o indispensável), prevalência da família e oitiva obrigatória.',
    pegadinha:
      'Trocar “intervenção mínima” por “máxima”; confundir precoce com mínima; ou inverter a prevalência da família por prevalência do Estado.',
    exemplo:
      'Aplicar acolhimento quando bastaria incluir a família em programa de apoio viola a intervenção mínima e a prevalência da família.',
    macete: 'Cedo (precoce) mas pouco (mínima). E sempre ouvindo a criança.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 101,
    titulo: 'As nove medidas de proteção',
    sintese: 'Do termo de responsabilidade à família substituta',
    bloco: PRO,
    destaque: true,
    resumo:
      'Verificada qualquer das hipóteses do art. 98, a autoridade competente poderá determinar, entre outras, as seguintes medidas: I – encaminhamento aos pais ou responsável, mediante TERMO DE RESPONSABILIDADE; II – orientação, apoio e acompanhamento TEMPORÁRIOS; III – MATRÍCULA E FREQUÊNCIA OBRIGATÓRIAS em estabelecimento oficial de ensino fundamental; IV – inclusão em serviços e programas oficiais de proteção, apoio e promoção da FAMÍLIA; V – requisição de TRATAMENTO MÉDICO, psicológico ou psiquiátrico; VI – inclusão em programa de auxílio, orientação e tratamento a ALCOÓLATRAS E TOXICÔMANOS; VII – ACOLHIMENTO INSTITUCIONAL; VIII – inclusão em programa de ACOLHIMENTO FAMILIAR; IX – COLOCAÇÃO EM FAMÍLIA SUBSTITUTA. §1º O acolhimento institucional e o familiar são medidas PROVISÓRIAS E EXCEPCIONAIS, utilizáveis como forma de TRANSIÇÃO para reintegração familiar ou colocação em família substituta, NÃO IMPLICANDO PRIVAÇÃO DE LIBERDADE. §2º Sem prévia determinação judicial, o afastamento da criança do convívio familiar é de competência exclusiva do Conselho Tutelar (art. 136, I), comunicando-se o fato em até 24 horas ao Ministério Público. §3º Documento de identificação e plano individual de atendimento (PIA). §§4º ao 12 – guia de acolhimento, reavaliação e destituição.',
    prova:
      'Decore a ordem das nove medidas — as bancas pedem “qual NÃO é medida de proteção” e inserem advertência, liberdade assistida ou internação (que são socioeducativas). O §1º é fundamental: acolhimento NÃO é privação de liberdade.',
    pegadinha:
      'Colocar medidas socioeducativas no rol do art. 101; ou afirmar que o acolhimento institucional priva a liberdade do acolhido (não priva).',
    exemplo:
      'Adolescente vítima de violência doméstica recebe acolhimento familiar (VIII) enquanto a família é incluída em programa (IV).',
    macete:
      'As três últimas são as mais graves: acolhimento institucional → familiar → família substituta. Acolher NÃO é prender.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 102,
    titulo: 'Registro civil e regularização',
    sintese: 'Certidão gratuita e retificação',
    bloco: PRO,
    resumo:
      'As medidas de proteção de que trata este Capítulo serão acompanhadas da REGULARIZAÇÃO DO REGISTRO CIVIL. §1º Verificada a inexistência de registro anterior, será feito o registro à vista dos elementos disponíveis, mediante requisição da autoridade judiciária. §2º Os registros e certidões necessários à regularização de que trata este artigo são ISENTOS DE MULTAS, CUSTAS E EMOLUMENTOS, gozando de absoluta PRIORIDADE. §§3º a 6º Tratam da retificação, do reconhecimento de paternidade e do procedimento de averiguação oficiosa.',
    prova:
      'Gratuidade e prioridade absoluta na regularização do registro civil — combate ao sub-registro. Conecta com o art. 8º da Convenção da ONU (identidade) e com o art. 102 como dever que acompanha TODA medida protetiva.',
    pegadinha:
      'Cobrar emolumentos pela regularização; ou dizer que a regularização depende de ação autônoma de registro tardio.',
    exemplo:
      'Criança acolhida sem certidão de nascimento tem o registro providenciado por requisição judicial, sem custo algum.',
    macete: 'Protegeu? Documenta — de graça e na frente da fila.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 103,
    titulo: 'Conceito de ato infracional',
    sintese: 'Conduta descrita como crime ou contravenção',
    bloco: ATO,
    destaque: true,
    resumo:
      'Considera-se ATO INFRACIONAL a conduta descrita como CRIME ou CONTRAVENÇÃO PENAL.',
    prova:
      'Definição literal e curtíssima. Note que abrange também as CONTRAVENÇÕES — não apenas crimes. Vale o princípio da legalidade: sem tipo penal correspondente, não há ato infracional.',
    pegadinha:
      'Restringir o conceito aos crimes, excluindo as contravenções; ou dizer que o adolescente comete “crime” (tecnicamente, comete ato infracional).',
    exemplo:
      'Adolescente flagrado com fogos em via pública pratica ato infracional equiparado à contravenção do art. 28 da LCP.',
    macete: 'Ato infracional = crime OU contravenção. Adolescente não comete crime; pratica ato infracional.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 104,
    titulo: 'Inimputabilidade e idade na data do fato',
    sintese: 'Menor de 18 é inimputável; conta a data do ato',
    bloco: ATO,
    destaque: true,
    resumo:
      'São penalmente INIMPUTÁVEIS os MENORES DE 18 ANOS, sujeitos às medidas previstas nesta Lei. Parágrafo único: para os efeitos desta Lei, deve ser considerada a IDADE DO ADOLESCENTE À DATA DO FATO.',
    prova:
      'O parágrafo único é o ponto de ouro: adota-se a TEORIA DA ATIVIDADE — vale a idade na data do FATO, não a da apreensão, do processo ou da sentença. Espelha o art. 228 da CF e o art. 27 do CP.',
    pegadinha:
      'Usar a idade na data da sentença ou da apreensão; ou dizer que o adolescente que completa 18 anos durante o processo passa a responder criminalmente (não passa — continua no ECA).',
    exemplo:
      'Jovem que praticou o ato aos 17 anos e 11 meses e foi apreendido aos 18 responde por ato infracional, podendo cumprir medida até os 21 anos.',
    macete: 'Vale a idade do DIA DO FATO. Fez 18 depois? Continua no ECA.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 105,
    titulo: 'Criança autora de ato infracional',
    sintese: 'Só medidas de proteção (art. 101)',
    bloco: ATO,
    destaque: true,
    resumo:
      'Ao ato infracional praticado por CRIANÇA corresponderão as MEDIDAS PREVISTAS NO ART. 101 (medidas de proteção).',
    prova:
      'Divisor de águas do sistema: CRIANÇA (até 12 incompletos) → apenas medidas de PROTEÇÃO, aplicadas inclusive pelo Conselho Tutelar. ADOLESCENTE (12 a 18) → medidas SOCIOEDUCATIVAS, aplicáveis somente pelo JUIZ.',
    pegadinha:
      'Aplicar medida socioeducativa a criança — erro grave e recorrente. Nem advertência do art. 112, I, cabe: a advertência protetiva à criança é a do art. 129, VII, aos pais, ou medida do art. 101.',
    exemplo:
      'Criança de 11 anos que agride colega recebe, por exemplo, requisição de tratamento psicológico (art. 101, V), nunca liberdade assistida.',
    macete: 'Criança: só art. 101. Adolescente: art. 112. Essa linha nunca se cruza.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 106,
    titulo: 'Apreensão do adolescente',
    sintese: 'Flagrante ou ordem escrita e fundamentada',
    bloco: ATO,
    resumo:
      'Nenhum adolescente será privado de sua liberdade senão em FLAGRANTE de ato infracional ou por ORDEM ESCRITA E FUNDAMENTADA da autoridade judiciária competente. Parágrafo único: o adolescente tem direito à IDENTIFICAÇÃO DOS RESPONSÁVEIS pela sua apreensão, devendo ser informado acerca de seus direitos.',
    prova:
      'Reprodução do art. 5º, LXI, da CF adaptada. Só duas portas: flagrante ou ordem judicial escrita e fundamentada — a autoridade policial NÃO pode determinar a apreensão fora do flagrante.',
    pegadinha:
      'Admitir apreensão por determinação do delegado, do Conselho Tutelar ou do Ministério Público.',
    exemplo:
      'Mandado de busca e apreensão de adolescente evadido de medida exige decisão judicial fundamentada.',
    macete: 'Só se pega adolescente em FLAGRANTE ou com PAPEL DO JUIZ.',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 107,
    titulo: 'Comunicação imediata da apreensão',
    sintese: 'Juiz, família e exame de corpo de delito',
    bloco: ATO,
    resumo:
      'A APREENSÃO de qualquer adolescente e o local onde se encontra recolhido serão INCONTINENTI COMUNICADOS à autoridade judiciária competente e à FAMÍLIA do apreendido ou à pessoa por ele indicada. Parágrafo único: examinar-se-á, DESDE LOGO E SOB PENA DE RESPONSABILIDADE, a possibilidade de LIBERAÇÃO IMEDIATA.',
    prova:
      'Comunicação “incontinenti” (imediata) ao JUIZ e à FAMÍLIA. E o dever de examinar de imediato a liberação — a internação provisória é a última hipótese.',
    pegadinha:
      'Dizer que a comunicação é feita apenas ao Ministério Público; ou ignorar o dever de avaliar a liberação imediata.',
    exemplo:
      'Delegacia que mantém adolescente apreendido sem avisar a família e o juízo sujeita o responsável a sanção.',
    macete: 'Apreendeu: avisa o JUIZ e a FAMÍLIA na hora — e já pensa em soltar.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 108,
    titulo: 'Internação provisória — 45 dias',
    sintese: 'Prazo máximo improrrogável',
    bloco: ATO,
    destaque: true,
    resumo:
      'A internação, ANTES DA SENTENÇA, pode ser determinada pelo prazo MÁXIMO DE 45 DIAS. Parágrafo único: a decisão deverá ser FUNDAMENTADA e basear-se em INDÍCIOS SUFICIENTES DE AUTORIA E MATERIALIDADE, demonstrada a NECESSIDADE IMPERIOSA DA MEDIDA.',
    prova:
      'Número sagrado: 45 DIAS, prazo MÁXIMO e IMPRORROGÁVEL (art. 183). Requisitos cumulativos: fundamentação + indícios de autoria e materialidade + necessidade imperiosa.',
    pegadinha:
      'Trocar por 90 dias (prazo da internação-sanção é 3 meses, coisa diversa) ou admitir prorrogação do prazo de 45 dias.',
    exemplo:
      'Adolescente internado provisoriamente no 46º dia sem sentença deve ser liberado imediatamente — cabe habeas corpus.',
    macete: 'Antes da sentença: 45 dias e acabou. Sem prorrogação, nunca.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 109,
    titulo: 'Identificação compulsória',
    sintese: 'Só em caso de dúvida fundada',
    bloco: ATO,
    resumo:
      'O adolescente CIVILMENTE IDENTIFICADO NÃO SERÁ SUBMETIDO A IDENTIFICAÇÃO COMPULSÓRIA pelos órgãos policiais, de proteção e judiciais, SALVO PARA EFEITO DE CONFRONTAÇÃO, HAVENDO DÚVIDA FUNDADA.',
    prova:
      'Regra e exceção: quem tem identificação civil não é identificado datiloscopicamente, salvo dúvida fundada para confrontação. Espelha o art. 5º, LVIII, da CF.',
    pegadinha:
      'Afirmar que a identificação criminal do adolescente é sempre proibida — a exceção da dúvida fundada existe.',
    exemplo:
      'Adolescente que apresenta RG não é submetido a coleta de digitais, salvo se houver suspeita concreta de falsidade do documento.',
    macete: 'Tem documento? Não se identifica — só na DÚVIDA FUNDADA.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 110,
    titulo: 'Devido processo legal',
    sintese: 'Nenhuma medida sem processo',
    bloco: ATO,
    destaque: true,
    resumo:
      'Art. 110: Nenhum adolescente será privado de sua liberdade sem o DEVIDO PROCESSO LEGAL. Art. 111 — garantias processuais asseguradas: I – pleno e formal CONHECIMENTO DA ATRIBUIÇÃO DE ATO INFRACIONAL, mediante citação ou meio equivalente; II – IGUALDADE NA RELAÇÃO PROCESSUAL, podendo confrontar-se com vítimas e testemunhas e produzir todas as provas necessárias à sua defesa; III – DEFESA TÉCNICA POR ADVOGADO; IV – ASSISTÊNCIA JUDICIÁRIA GRATUITA E INTEGRAL aos necessitados, na forma da lei; V – direito de ser OUVIDO PESSOALMENTE pela autoridade competente; VI – direito de SOLICITAR A PRESENÇA DE SEUS PAIS OU RESPONSÁVEL em qualquer fase do procedimento.',
    prova:
      'Seis garantias do art. 111 — memorize sobretudo a DEFESA TÉCNICA POR ADVOGADO (obrigatória, indisponível) e o direito de ser ouvido pessoalmente. Súmula 342 do STJ: no procedimento para apuração de ato infracional, é nula a desistência de outras provas em face da confissão do adolescente.',
    pegadinha:
      'Admitir processo socioeducativo sem defensor; ou dizer que a confissão dispensa a produção das demais provas (Súmula 342/STJ diz o contrário).',
    exemplo:
      'Sentença que aplica internação sem que o adolescente tenha sido ouvido pessoalmente é nula.',
    macete: 'Adolescente tem MAIS garantias, não menos. Advogado é obrigatório, confissão não basta.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 112,
    titulo: 'As seis medidas socioeducativas',
    sintese: 'Advertência a internação + capacidade e circunstâncias',
    bloco: SOC,
    destaque: true,
    resumo:
      'Verificada a prática de ato infracional, a autoridade competente poderá aplicar ao adolescente as seguintes medidas: I – ADVERTÊNCIA; II – OBRIGAÇÃO DE REPARAR O DANO; III – PRESTAÇÃO DE SERVIÇOS À COMUNIDADE; IV – LIBERDADE ASSISTIDA; V – inserção em regime de SEMILIBERDADE; VI – INTERNAÇÃO em estabelecimento educacional; VII – qualquer uma das previstas no art. 101, I a VI. §1º A medida aplicada ao adolescente levará em conta a sua CAPACIDADE DE CUMPRI-LA, as CIRCUNSTÂNCIAS e a GRAVIDADE DA INFRAÇÃO. §2º Em hipótese alguma e sob pretexto algum será admitida a prestação de TRABALHO FORÇADO. §3º Os adolescentes PORTADORES DE DOENÇA OU DEFICIÊNCIA MENTAL receberão tratamento individual e especializado, em local adequado às suas condições.',
    prova:
      'As seis medidas em ordem crescente de gravidade + a possibilidade de cumular com as protetivas do art. 101, I a VI (note: não cabem as dos incisos VII a IX). O §1º traz a tríade capacidade + circunstâncias + gravidade.',
    pegadinha:
      'Incluir “acolhimento institucional” como socioeducativa (é protetiva) ou permitir a cumulação com o art. 101, VII a IX; e trocar a ordem das medidas.',
    exemplo:
      'Juiz aplica prestação de serviços à comunidade cumulada com requisição de tratamento para dependência química (art. 101, VI).',
    macete:
      'A-R-P-L-S-I: Advertência, Reparar, PSC, Liberdade assistida, Semiliberdade, Internação. Protetivas só até o VI.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 113,
    titulo: 'Aplicação, cumulação e substituição',
    sintese: 'Arts. 99 e 100 valem também aqui',
    bloco: SOC,
    resumo:
      'Art. 113: Aplica-se a este Capítulo o disposto nos arts. 99 e 100 — as medidas podem ser aplicadas isolada ou cumulativamente e substituídas a qualquer tempo, observados os princípios do art. 100. Art. 114: a imposição das medidas previstas nos incisos II a VI do art. 112 PRESSUPÕE A EXISTÊNCIA DE PROVAS SUFICIENTES DA AUTORIA E DA MATERIALIDADE da infração, RESSALVADA A HIPÓTESE DE REMISSÃO. Parágrafo único: a ADVERTÊNCIA poderá ser aplicada sempre que houver PROVA DA MATERIALIDADE E INDÍCIOS SUFICIENTES DE AUTORIA.',
    prova:
      'Distinção fininha e muito cobrada: advertência exige prova da MATERIALIDADE + INDÍCIOS de autoria; as demais medidas (II a VI) exigem PROVAS SUFICIENTES de autoria E materialidade.',
    pegadinha:
      'Igualar o standard probatório de todas as medidas; ou esquecer a ressalva da remissão cumulada com medida.',
    exemplo:
      'Com materialidade comprovada e apenas indícios de autoria, cabe advertência — mas não liberdade assistida.',
    macete: 'Advertência: materialidade + indício. Da II à VI: prova cheia dos dois.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 115,
    titulo: 'Advertência',
    sintese: 'Admoestação verbal reduzida a termo',
    bloco: SOC,
    resumo:
      'A ADVERTÊNCIA consistirá em ADMOESTAÇÃO VERBAL, que será REDUZIDA A TERMO e ASSINADA.',
    prova:
      'É a medida mais branda: verbal, mas formalizada por termo assinado. Aplicada exclusivamente pelo JUIZ (não pelo Conselho Tutelar, não pelo promotor isoladamente — este pode propô-la com remissão).',
    pegadinha:
      'Dizer que a advertência é apenas oral, sem registro; ou atribuir sua aplicação ao Conselho Tutelar (este aplica a advertência do art. 129, VII, aos PAIS).',
    exemplo:
      'Adolescente primário em ato infracional leve recebe advertência em audiência, com termo assinado por ele e pelos pais.',
    macete: 'Falou, escreveu e assinou. Quem adverte adolescente é o JUIZ.',
    bancas: ['FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 116,
    titulo: 'Obrigação de reparar o dano',
    sintese: 'Restituir, ressarcir ou compensar',
    bloco: SOC,
    resumo:
      'Em se tratando de ato infracional com REFLEXOS PATRIMONIAIS, a autoridade poderá determinar, se for o caso, que o adolescente RESTITUA A COISA, PROMOVA O RESSARCIMENTO DO DANO ou, por outra forma, COMPENSE O PREJUÍZO DA VÍTIMA. Parágrafo único: havendo manifesta impossibilidade, a medida poderá ser SUBSTITUÍDA por outra adequada.',
    prova:
      'Três verbos (restituir, ressarcir, compensar) e a exigência de reflexos PATRIMONIAIS. A medida é PERSONALÍSSIMA: não pode ser cumprida pelos pais.',
    pegadinha:
      'Admitir que os pais paguem no lugar do adolescente para extinguir a medida — descaracteriza a natureza pedagógica (a responsabilidade civil dos pais é outra coisa, e corre no juízo cível).',
    exemplo:
      'Adolescente que pichou um muro é obrigado a repintá-lo — compensação do prejuízo.',
    macete: 'R.R.C.: Restitui, Ressarce, Compensa — e quem cumpre é ELE, não o pai.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 117,
    titulo: 'Prestação de serviços à comunidade',
    sintese: '6 meses · 8 horas semanais · sábado, domingo ou feriado',
    bloco: SOC,
    destaque: true,
    resumo:
      'A PRESTAÇÃO DE SERVIÇOS COMUNITÁRIOS consiste na realização de tarefas gratuitas de interesse geral, por período NÃO EXCEDENTE A 6 MESES, junto a entidades assistenciais, hospitais, escolas e outros estabelecimentos congêneres, bem como em programas comunitários ou governamentais. Parágrafo único: as tarefas serão atribuídas conforme as APTIDÕES do adolescente, devendo ser cumpridas durante jornada MÁXIMA DE 8 HORAS SEMANAIS, aos sábados, domingos e feriados ou em dias úteis, de modo a NÃO PREJUDICAR A FREQUÊNCIA À ESCOLA OU À JORNADA NORMAL DE TRABALHO.',
    prova:
      'Dois números indispensáveis: até 6 MESES de duração e no MÁXIMO 8 HORAS SEMANAIS. E a cláusula protetiva: jamais prejudicar escola ou trabalho.',
    pegadinha:
      'Trocar “8 horas semanais” por “8 horas diárias” — pegadinha campeã; ou estender a medida para além de 6 meses.',
    exemplo:
      'Adolescente cumpre 4 horas aos sábados em hospital, por cinco meses, sem faltar às aulas.',
    macete: 'PSC: 6 meses, 8 horas POR SEMANA. Escola e trabalho passam na frente.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 118,
    titulo: 'Liberdade assistida',
    sintese: 'Mínimo 6 meses, com orientador',
    bloco: SOC,
    destaque: true,
    resumo:
      'A LIBERDADE ASSISTIDA será adotada sempre que se afigurar a medida mais adequada para o fim de ACOMPANHAR, AUXILIAR E ORIENTAR o adolescente. §1º A autoridade designará pessoa capacitada para acompanhar o caso (ORIENTADOR), recomendada por entidade ou programa de atendimento. §2º A liberdade assistida será fixada pelo prazo MÍNIMO DE 6 MESES, podendo a qualquer tempo ser PRORROGADA, REVOGADA ou SUBSTITUÍDA por outra medida, ouvido o orientador, o Ministério Público e o defensor. Art. 119 — incumbe ao orientador: I – promover socialmente o adolescente e sua família, inserindo-os em programas de auxílio e assistência social; II – supervisionar a FREQUÊNCIA E O APROVEITAMENTO ESCOLAR, promovendo, inclusive, sua matrícula; III – diligenciar no sentido da PROFISSIONALIZAÇÃO e inserção no mercado de trabalho; IV – apresentar RELATÓRIO DO CASO.',
    prova:
      'Contraste essencial: PSC tem prazo MÁXIMO (6 meses); liberdade assistida tem prazo MÍNIMO (6 meses). As quatro atribuições do orientador (art. 119) também caem.',
    pegadinha:
      'Inverter os prazos, dizendo que a LA tem máximo de 6 meses. O prazo mínimo é dela; a PSC é que tem teto.',
    exemplo:
      'Adolescente em LA é acompanhado por orientador que fiscaliza notas e frequência e o insere em curso profissionalizante.',
    macete: 'PSC: até 6 meses (teto). LA: pelo menos 6 meses (piso). Não troque.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 120,
    titulo: 'Semiliberdade',
    sintese: 'Externas sem autorização; escola obrigatória',
    bloco: SOC,
    destaque: true,
    resumo:
      'O regime de SEMILIBERDADE pode ser determinado desde o início ou como forma de TRANSIÇÃO PARA O MEIO ABERTO, possibilitada a realização de ATIVIDADES EXTERNAS, INDEPENDENTEMENTE DE AUTORIZAÇÃO JUDICIAL. §1º São OBRIGATÓRIAS a ESCOLARIZAÇÃO e a PROFISSIONALIZAÇÃO, devendo, sempre que possível, ser utilizados os recursos existentes na comunidade. §2º A medida NÃO COMPORTA PRAZO DETERMINADO, aplicando-se, no que couber, as disposições relativas à INTERNAÇÃO.',
    prova:
      'Três marcas: pode ser inicial OU de transição; atividades externas são livres (independem de autorização judicial); e não tem prazo determinado, aplicando-se as regras da internação (logo: reavaliação a cada 6 meses, máximo de 3 anos e liberação aos 21).',
    pegadinha:
      'Exigir autorização judicial para as saídas (é o contrário do que ocorre na internação, art. 121, §1º); ou fixar prazo determinado à semiliberdade.',
    exemplo:
      'Adolescente dorme na unidade, mas frequenta escola e curso técnico na cidade sem necessidade de alvará.',
    macete: 'Semiliberdade: sai sem pedir. Internação: só sai com autorização do juiz.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 121,
    titulo: 'Internação — princípios e prazos',
    sintese: '3 anos · reavaliação 6 meses · liberação aos 21',
    bloco: SOC,
    destaque: true,
    resumo:
      'A INTERNAÇÃO constitui medida privativa da liberdade, sujeita aos princípios de BREVIDADE, EXCEPCIONALIDADE e RESPEITO À CONDIÇÃO PECULIAR DE PESSOA EM DESENVOLVIMENTO. §1º Será permitida a realização de ATIVIDADES EXTERNAS, a critério da equipe técnica da entidade, SALVO EXPRESSA DETERMINAÇÃO JUDICIAL EM CONTRÁRIO. §2º A medida NÃO COMPORTA PRAZO DETERMINADO, devendo sua manutenção ser REAVALIADA, mediante decisão fundamentada, NO MÁXIMO A CADA 6 MESES. §3º Em nenhuma hipótese o período máximo de internação excederá a 3 ANOS. §4º Atingido o limite de 3 anos, o adolescente deverá ser liberado, colocado em regime de semiliberdade ou de liberdade assistida. §5º A LIBERAÇÃO SERÁ COMPULSÓRIA AOS 21 ANOS DE IDADE. §6º Em qualquer hipótese a desinternação será precedida de autorização judicial, ouvido o Ministério Público.',
    prova:
      'O artigo mais cobrado do Livro II. Guarde: princípios B-E-R; sem prazo determinado; reavaliação a cada 6 MESES; teto de 3 ANOS; liberação compulsória aos 21 ANOS; desinternação sempre com autorização judicial.',
    pegadinha:
      'Dizer que a internação tem prazo determinado; trocar a reavaliação semestral por trimestral (3 meses é a reavaliação do ACOLHIMENTO, art. 19, §1º); ou afirmar que a liberação compulsória ocorre aos 18 anos.',
    exemplo:
      'Adolescente internado aos 19 anos por ato praticado aos 17: cumprirá no máximo até os 21, ainda que não complete 3 anos.',
    macete: '6 · 3 · 21: reavalia em 6 meses, até 3 anos, fora aos 21. B.E.R. sempre.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 122,
    titulo: 'Hipóteses de internação',
    sintese: 'Os 3 incisos taxativos + Súmula 492',
    bloco: SOC,
    destaque: true,
    resumo:
      'A medida de internação só poderá ser aplicada quando: I – tratar-se de ato infracional cometido mediante GRAVE AMEAÇA OU VIOLÊNCIA A PESSOA; II – por REITERAÇÃO no cometimento de outras infrações GRAVES; III – por DESCUMPRIMENTO REITERADO E INJUSTIFICÁVEL DA MEDIDA ANTERIORMENTE IMPOSTA. §1º O prazo de internação na hipótese do inciso III NÃO PODERÁ SER SUPERIOR A 3 MESES, devendo ser decretada judicialmente após o devido processo legal (internação-sanção). §2º Em nenhuma hipótese será aplicada a internação HAVENDO OUTRA MEDIDA ADEQUADA.',
    prova:
      'Rol TAXATIVO de três hipóteses e o prazo especial de 3 MESES da internação-sanção (inciso III). O §2º consagra a subsidiariedade. Súmula 492 do STJ: o ato infracional análogo ao tráfico de drogas, por si só, NÃO conduz obrigatoriamente à internação (não há violência ou grave ameaça).',
    pegadinha:
      'Internar por tráfico automaticamente (Súmula 492/STJ veda); confundir os 3 MESES da internação-sanção com os 45 DIAS da provisória; ou incluir “gravidade em abstrato do ato” como quarta hipótese.',
    exemplo:
      'Adolescente que descumpre reiteradamente a liberdade assistida pode ser internado por até 3 meses — e não por 3 anos.',
    macete:
      'V.R.D.: Violência/grave ameaça, Reiteração, Descumprimento. O “D” vale só 3 meses. Tráfico sozinho não interna.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 123,
    titulo: 'Local da internação e atividades',
    sintese: 'Separação por idade, compleição e gravidade',
    bloco: SOC,
    resumo:
      'A internação deverá ser cumprida em ENTIDADE EXCLUSIVA PARA ADOLESCENTES, em local distinto do destinado ao abrigo, obedecida rigorosa SEPARAÇÃO POR CRITÉRIOS DE IDADE, COMPLEIÇÃO FÍSICA E GRAVIDADE DA INFRAÇÃO. Parágrafo único: durante o período de internação, inclusive provisória, serão OBRIGATÓRIAS atividades PEDAGÓGICAS.',
    prova:
      'Três critérios de separação (idade, compleição física e gravidade) e a obrigatoriedade das atividades pedagógicas inclusive na internação PROVISÓRIA.',
    pegadinha:
      'Admitir o cumprimento em cadeia pública ou junto com adultos (vedado — cabe habeas corpus); ou dispensar atividades pedagógicas na provisória.',
    exemplo:
      'Unidade que mistura adolescentes de 12 e 19 anos no mesmo alojamento viola o art. 123.',
    macete: 'I.C.G.: Idade, Compleição, Gravidade. E escola até na internação provisória.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 124,
    titulo: 'Direitos do adolescente internado',
    sintese: 'Rol de direitos + visita íntima e incomunicabilidade',
    bloco: SOC,
    destaque: true,
    resumo:
      'São direitos do adolescente privado de liberdade, entre outros: I – entrevistar-se pessoalmente com o representante do Ministério Público; II – peticionar diretamente a qualquer autoridade; III – avistar-se reservadamente com seu defensor; IV – ser informado de sua situação processual sempre que solicitada; V – ser tratado com respeito e dignidade; VI – permanecer internado na MESMA LOCALIDADE ou naquela mais próxima ao domicílio de seus pais; VII – receber VISITAS, ao menos SEMANALMENTE; VIII – corresponder-se com seus familiares e amigos; IX – ter acesso aos objetos necessários à higiene e asseio pessoal; X – habitar alojamento em condições adequadas de higiene e salubridade; XI – receber escolarização e profissionalização; XII – realizar atividades culturais, esportivas e de lazer; XIII – ter acesso aos meios de comunicação social; XIV – receber assistência religiosa, segundo a sua crença, e desde que assim o deseje; XV – manter a posse de seus objetos pessoais e dispor de local seguro para guardá-los; XVI – receber, quando de sua desinternação, os documentos pessoais indispensáveis à vida em sociedade. §1º Em nenhum caso haverá INCOMUNICABILIDADE. §2º A autoridade judiciária poderá suspender temporariamente a visita, inclusive de pais ou responsável, se existirem motivos sérios e fundados de sua prejudicialidade aos interesses do adolescente.',
    prova:
      'Dezesseis direitos. Os mais cobrados: visitas ao menos SEMANAIS (VII), internação na localidade mais próxima da família (VI), assistência religiosa FACULTATIVA (XIV) e a vedação ABSOLUTA à incomunicabilidade (§1º).',
    pegadinha:
      'Admitir incomunicabilidade em caso disciplinar (jamais); tornar a assistência religiosa obrigatória; ou dizer que a visita é mensal.',
    exemplo:
      'Unidade que aplica “castigo” de isolamento com corte de contato viola o §1º — mas o juiz pode suspender visita específica por motivo fundado (§2º).',
    macete: 'Visita toda SEMANA · religião só se quiser · incomunicabilidade NUNCA.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 125,
    titulo: 'Dever de zelar pela integridade',
    sintese: 'Estado responde pelo internado',
    bloco: SOC,
    resumo:
      'É DEVER DO ESTADO ZELAR PELA INTEGRIDADE FÍSICA E MENTAL dos internos, cabendo-lhe adotar as medidas adequadas de CONTENÇÃO E SEGURANÇA.',
    prova:
      'Fundamenta a responsabilidade civil OBJETIVA do Estado por morte ou lesão de adolescente internado (custódia = dever de guarda). Fecha o capítulo das socioeducativas.',
    pegadinha:
      'Exigir prova de culpa do agente estatal para responsabilizar o ente público em caso de morte de interno.',
    exemplo:
      'Rebelião com vítima em unidade socioeducativa gera dever de indenizar, independentemente de culpa individualizada.',
    macete: 'Quem prende, guarda. O Estado responde pelo que acontece lá dentro.',
    bancas: ['FGV', 'Cebraspe'],
  },
];
