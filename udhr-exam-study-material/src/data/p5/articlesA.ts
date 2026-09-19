import type { Artigo } from '../shared';

const PRE = 'Disposições preliminares';
const SAU = 'Vida e saúde';
const LIB = 'Liberdade, respeito e dignidade';
const FAM = 'Convivência familiar';
const GUA = 'Família substituta · guarda e tutela';
const ADO = 'Adoção';

export const artigosA: Artigo[] = [
  {
    n: 1,
    titulo: 'Proteção integral',
    sintese: 'A lei dispõe sobre a proteção integral',
    bloco: PRE,
    destaque: true,
    resumo:
      'Esta Lei dispõe sobre a PROTEÇÃO INTEGRAL à criança e ao adolescente.',
    prova:
      'Artigo de uma linha e de altíssima densidade: consagra a DOUTRINA DA PROTEÇÃO INTEGRAL, que substituiu a doutrina da situação irregular do antigo Código de Menores (Lei 6.697/79). Base: art. 227 da CF/88 e a Convenção da ONU de 1989 (Parte 4 da coleção).',
    pegadinha:
      'Dizer que o ECA adotou a doutrina da “situação irregular” ou que se dirige apenas a crianças em risco/carentes — a proteção integral alcança TODAS as crianças e adolescentes, indistintamente.',
    exemplo:
      'Um adolescente de classe alta vítima de violência doméstica é destinatário do ECA tanto quanto o que vive em situação de rua: a lei é universal.',
    macete: 'ECA = proteção INTEGRAL para TODOS. “Situação irregular” morreu em 1990.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 2,
    titulo: 'Criança e adolescente — conceito',
    sintese: 'Até 12 incompletos / 12 a 18 anos',
    bloco: PRE,
    destaque: true,
    resumo:
      'Considera-se CRIANÇA a pessoa até 12 anos de idade INCOMPLETOS, e ADOLESCENTE aquela entre 12 e 18 anos de idade. Parágrafo único: nos casos EXPRESSOS EM LEI, aplica-se excepcionalmente este Estatuto às pessoas entre 18 e 21 anos de idade.',
    prova:
      'O artigo mais cobrado do ECA. Critério puramente ETÁRIO e objetivo. Guarde os três degraus: criança (0 a 11 anos, ou seja, até 12 INCOMPLETOS), adolescente (12 a 18) e a excepcionalidade dos 18 aos 21 “nos casos expressos em lei” (ex.: art. 121, §5º — liberação compulsória da internação aos 21 anos).',
    pegadinha:
      'Trocar “12 anos incompletos” por “até 12 anos completos”; usar critério biopsicológico ou de discernimento (o critério é só a idade); esquecer o parágrafo único; ou importar a régua da Convenção da ONU, que chama de criança todo menor de 18 (Parte 4 — art. 1º).',
    exemplo:
      'Quem tem 11 anos e 11 meses é CRIANÇA (responde a medidas protetivas do art. 101). No dia do 12º aniversário vira ADOLESCENTE e passa a responder por ato infracional com medidas socioeducativas.',
    macete:
      'CRI-12-ADO-18-EXC-21. E lembre: Convenção da ONU = 1 régua (menor de 18); ECA = 2 réguas.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 3,
    titulo: 'Direitos fundamentais e desenvolvimento',
    sintese: 'Todos os direitos da pessoa humana + os especiais',
    bloco: PRE,
    resumo:
      'A criança e o adolescente gozam de TODOS os direitos fundamentais inerentes à pessoa humana, sem prejuízo da proteção integral, assegurando-se-lhes, por lei ou outros meios, todas as oportunidades e facilidades, a fim de lhes facultar o desenvolvimento FÍSICO, MENTAL, MORAL, ESPIRITUAL e SOCIAL, em condições de liberdade e de dignidade. Parágrafo único: os direitos aplicam-se a todas as crianças e adolescentes, sem discriminação de nascimento, situação familiar, idade, sexo, raça, etnia ou cor, religião ou crença, deficiência, condição pessoal de desenvolvimento e aprendizagem, condição econômica, ambiente social, região e local de moradia ou outra condição que diferencie as pessoas, as famílias ou a comunidade em que vivem.',
    prova:
      'Duas camadas: a criança tem os direitos de QUALQUER pessoa humana + os direitos especiais decorrentes da proteção integral. Decore os cinco eixos do desenvolvimento: físico, mental, moral, espiritual e social.',
    pegadinha:
      'Reduzir os direitos da criança apenas aos previstos no ECA; ou suprimir um dos cinco eixos (o “espiritual” é o mais esquecido). O rol antidiscriminatório do parágrafo único é exemplificativo.',
    exemplo:
      'Adolescente com deficiência tem direito ao mesmo atendimento educacional que os demais — o parágrafo único veda a distinção por condição pessoal de desenvolvimento.',
    macete: 'Desenvolvimento F.M.M.E.S.: Físico, Mental, Moral, Espiritual e Social.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 4,
    titulo: 'Prioridade absoluta',
    sintese: 'Dever de todos + 4 garantias de prioridade',
    bloco: PRE,
    destaque: true,
    resumo:
      'É dever da FAMÍLIA, da COMUNIDADE, da SOCIEDADE EM GERAL e do PODER PÚBLICO assegurar, com ABSOLUTA PRIORIDADE, a efetivação dos direitos referentes à vida, à saúde, à alimentação, à educação, ao esporte, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar e comunitária. Parágrafo único — a garantia de prioridade compreende: a) PRIMAZIA de receber proteção e socorro em quaisquer circunstâncias; b) PRECEDÊNCIA de atendimento nos serviços públicos ou de relevância pública; c) PREFERÊNCIA na formulação e na execução das políticas sociais públicas; d) DESTINAÇÃO PRIVILEGIADA de recursos públicos nas áreas relacionadas com a proteção à infância e à juventude.',
    prova:
      'Campeão de prova junto com o art. 2º. Decore os QUATRO destinatários do dever (família, comunidade, sociedade em geral e poder público) e as QUATRO alíneas da prioridade: primazia, precedência, preferência e destinação privilegiada. Espelha o art. 227, caput, da CF.',
    pegadinha:
      'Atribuir o dever apenas ao Estado (é de todos); trocar “absoluta prioridade” por “prioridade relativa”; ou embaralhar as alíneas — primazia é no SOCORRO, precedência é no ATENDIMENTO, preferência é nas POLÍTICAS e destinação privilegiada é de RECURSOS.',
    exemplo:
      'Em um acidente com várias vítimas, a criança é socorrida primeiro (alínea “a”); no orçamento municipal, a verba da infância não pode ser contingenciada em pé de igualdade com outras (alínea “d”).',
    macete:
      'Os 4 “P” da prioridade: Primazia (socorro), Precedência (atendimento), Preferência (políticas) e Privilegiada destinação (recursos).',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 5,
    titulo: 'Vedação a toda forma de violação',
    sintese: 'Nada de negligência, violência ou opressão',
    bloco: PRE,
    resumo:
      'Nenhuma criança ou adolescente será objeto de qualquer forma de NEGLIGÊNCIA, DISCRIMINAÇÃO, EXPLORAÇÃO, VIOLÊNCIA, CRUELDADE e OPRESSÃO, punido na forma da lei qualquer atentado, por ação ou OMISSÃO, aos seus direitos fundamentais.',
    prova:
      'Sequência decorável de seis condutas vedadas e, sobretudo, a punição tanto por AÇÃO quanto por OMISSÃO. É a cláusula geral de vedação da violência no ECA.',
    pegadinha:
      'Restringir a punição às condutas comissivas (a omissão também é punida); ou tratar a negligência como conduta atípica.',
    exemplo:
      'Pais que deixam o filho sem tratamento médico por desídia respondem por omissão — negligência é tão punível quanto a agressão.',
    macete: 'N.D.E.V.C.O. — e vale para quem faz E para quem deixa de fazer.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 6,
    titulo: 'Interpretação do Estatuto',
    sintese: 'Fins sociais + condição peculiar',
    bloco: PRE,
    destaque: true,
    resumo:
      'Na interpretação desta Lei levar-se-ão em conta os FINS SOCIAIS a que ela se dirige, as exigências do BEM COMUM, os direitos e deveres individuais e coletivos, e a CONDIÇÃO PECULIAR DA CRIANÇA E DO ADOLESCENTE COMO PESSOAS EM DESENVOLVIMENTO.',
    prova:
      'A régua hermenêutica do Estatuto: quatro vetores, sendo o último o mais cobrado — “condição peculiar de pessoa em desenvolvimento”, que também é princípio das medidas socioeducativas (art. 121).',
    pegadinha:
      'Defender interpretação literal e restritiva do ECA; ou suprimir a “condição peculiar de pessoa em desenvolvimento”, que é a marca registrada do artigo.',
    exemplo:
      'Diante de dúvida entre duas leituras possíveis de um dispositivo, o juiz adota a que melhor realiza a proteção — é o art. 6º orientando a decisão.',
    macete: 'Art. 6º: leia sempre pelos olhos de quem ainda está crescendo.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 7,
    titulo: 'Direito à vida e à saúde',
    sintese: 'Nascimento e desenvolvimento sadio',
    bloco: SAU,
    destaque: true,
    resumo:
      'A criança e o adolescente têm direito a proteção à VIDA e à SAÚDE, mediante a efetivação de políticas sociais públicas que permitam o NASCIMENTO e o DESENVOLVIMENTO SADIO E HARMONIOSO, em condições dignas de existência.',
    prova:
      'Abre o Capítulo I dos direitos fundamentais. Palavras-chave: políticas sociais PÚBLICAS, nascimento e desenvolvimento “sadio e harmonioso”, condições dignas de existência. Note que a proteção começa antes do nascimento (tutela do nascituro pela via das políticas de pré-natal).',
    pegadinha:
      'Dizer que o direito à saúde no ECA se resume ao atendimento médico curativo — o artigo fala em políticas públicas e desenvolvimento; ou negar a proteção pré-natal.',
    exemplo:
      'Programa municipal de pré-natal com busca ativa de gestantes é a concretização típica do art. 7º.',
    macete: 'Art. 7º: nascer bem e crescer bem — com política pública, não com sorte.',
    bancas: ['FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 8,
    titulo: 'Atendimento pré-natal e perinatal',
    sintese: 'Gestante e nutriz no SUS',
    bloco: SAU,
    resumo:
      'É assegurado a todas as mulheres o acesso aos programas e às políticas de saúde da mulher e de planejamento reprodutivo e, às GESTANTES, nutrição adequada, atenção humanizada à gravidez, ao parto e ao puerpério e atendimento PRÉ-NATAL, PERINATAL e PÓS-NATAL integral no âmbito do SUS. Destaques: a gestante tem direito a acompanhante de sua preferência durante o pré-natal, o trabalho de parto e o pós-parto imediato; a gestante ou mãe que MANIFESTE INTERESSE EM ENTREGAR SEU FILHO PARA ADOÇÃO receberá assistência psicológica e será encaminhada à Justiça da Infância e da Juventude, sem constrangimento; assegura-se atendimento também a gestantes e mães em situação de privação de liberdade.',
    prova:
      'Artigo reformado pela Lei 13.257/2016 (Marco Legal da Primeira Infância). Cobra-se: o trio pré-natal/perinatal/pós-natal, o direito a ACOMPANHANTE e o acolhimento — sem constrangimento — da mãe que deseja entregar o filho para adoção.',
    pegadinha:
      'Afirmar que a mãe que entrega o filho para adoção comete crime ou sofre sanção: o ECA a protege e a encaminha à Justiça (entrega voluntária, art. 19-A). Também erram ao negar o direito a acompanhante.',
    exemplo:
      'Gestante que declara à maternidade o desejo de entregar o bebê é encaminhada à Vara da Infância, com apoio psicológico — jamais rotulada como criminosa.',
    macete: 'Art. 8º: PRÉ + PERI + PÓS, com acompanhante — e entrega voluntária não é abandono.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 9,
    titulo: 'Aleitamento materno',
    sintese: 'Amamentar, inclusive na prisão',
    bloco: SAU,
    resumo:
      'O poder público, as instituições e os empregadores propiciarão condições adequadas ao ALEITAMENTO MATERNO, inclusive aos filhos de mães submetidas a medida privativa de liberdade. §1º Os profissionais das unidades primárias de saúde desenvolverão ações para o aleitamento até os 6 meses de forma exclusiva e, de forma complementar, até os 2 anos. §2º Os serviços de unidades de terapia intensiva neonatal deverão dispor de banco de leite humano ou unidade de coleta.',
    prova:
      'Dois pontos: o aleitamento é dever tripartite (poder público + instituições + EMPREGADORES) e a garantia expressa às mães PRIVADAS DE LIBERDADE. Grave também as metas: exclusivo até 6 meses, complementar até 2 anos.',
    pegadinha:
      'Excluir os empregadores do dever; ou negar o direito da mãe presa (o artigo é expresso — e conecta com o art. 89 da LEP e o HC 143.641 do STF).',
    exemplo:
      'Empresa obrigada a manter sala de apoio à amamentação e a respeitar as pausas legais cumpre o art. 9º.',
    macete: '6 exclusivo, 2 anos complementar — e a mãe presa também amamenta.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 10,
    titulo: 'Deveres dos hospitais e maternidades',
    sintese: 'Prontuário 18 anos, identificação e testes',
    bloco: SAU,
    resumo:
      'Os hospitais e demais estabelecimentos de atenção à saúde de gestantes, públicos e particulares, são obrigados a: I – manter registro das atividades desenvolvidas, através de prontuários individuais, pelo prazo de 18 ANOS; II – identificar o recém-nascido mediante o registro de sua impressão plantar e digital e da impressão digital da mãe, sem prejuízo de outras formas normatizadas; III – proceder a exames visando ao diagnóstico e terapêutica de anormalidades no metabolismo do recém-nascido, bem como prestar orientação aos pais; IV – fornecer DECLARAÇÃO DE NASCIMENTO onde constem necessariamente as intercorrências do parto e do desenvolvimento do neonato; V – manter alojamento conjunto, possibilitando ao neonato a permanência junto à mãe.',
    prova:
      'Números e listas: prazo de 18 anos do prontuário, impressão plantar do bebê + digital da mãe, teste do pezinho (inciso III), declaração de nascimento e ALOJAMENTO CONJUNTO. Vale para hospitais públicos E particulares.',
    pegadinha:
      'Trocar o prazo do prontuário (5, 10 ou 20 anos) ou dizer que o dever alcança apenas a rede pública; confundir “declaração de nascimento” (hospital) com “certidão de nascimento” (cartório).',
    exemplo:
      'A pulseira de identificação e a coleta da impressão plantar na maternidade são medidas antitroca/antissequestro de bebês previstas no inciso II.',
    macete: 'Prontuário 18 anos · pé do bebê + dedo da mãe · teste do pezinho · alojamento conjunto.',
    bancas: ['FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 11,
    titulo: 'Acesso integral ao SUS',
    sintese: 'Linhas de cuidado e gratuidade',
    bloco: SAU,
    resumo:
      'É assegurado ACESSO INTEGRAL às linhas de cuidado voltadas à saúde da criança e do adolescente, por intermédio do SUS, observado o princípio da equidade no acesso a ações e serviços para promoção, proteção e recuperação da saúde. §1º A criança e o adolescente com DEFICIÊNCIA serão atendidos, sem discriminação ou segregação, em suas necessidades gerais de saúde e específicas de habilitação e reabilitação. §2º Incumbe ao poder público fornecer GRATUITAMENTE, àqueles que necessitarem, medicamentos, órteses, próteses e outras tecnologias assistivas relativas ao tratamento, habilitação ou reabilitação.',
    prova:
      'Três pilares: acesso INTEGRAL, atendimento à deficiência sem segregação e gratuidade de medicamentos, órteses, próteses e tecnologias assistivas. Base de inúmeras ações judiciais de saúde infantil.',
    pegadinha:
      'Condicionar a gratuidade à comprovação de miserabilidade absoluta (o texto diz “àqueles que necessitarem”); ou restringir o fornecimento a medicamentos, esquecendo órteses, próteses e tecnologias assistivas.',
    exemplo:
      'Fornecimento judicial de cadeira de rodas adaptada e de medicamento de alto custo a criança com doença rara apoia-se no §2º.',
    macete: 'SUS integral + deficiência sem segregação + M.O.P.T. grátis (Medicamento, Órtese, Prótese, Tecnologia).',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 12,
    titulo: 'Permanência dos pais na internação',
    sintese: 'Acompanhante em tempo integral',
    bloco: SAU,
    resumo:
      'Os estabelecimentos de atendimento à saúde, inclusive as unidades neonatais, de terapia intensiva e de cuidados intermediários, deverão proporcionar condições para a permanência EM TEMPO INTEGRAL de um dos pais ou responsável, nos casos de internação de criança ou adolescente.',
    prova:
      'Direito a acompanhante em TEMPO INTEGRAL — não em horário de visita. A Lei 13.257/2016 estendeu expressamente às UTIs neonatais e unidades de cuidados intermediários.',
    pegadinha:
      'Limitar a permanência ao “horário de visitas” ou excluir as UTIs; ou exigir que o acompanhante seja necessariamente a mãe (o texto diz um dos pais OU responsável).',
    exemplo:
      'Hospital que proíbe acompanhante em UTI pediátrica viola o art. 12 — e pode responder por infração administrativa (art. 245 e ss.).',
    macete: 'Internou criança, entrou acompanhante — 24 horas, inclusive na UTI.',
    bancas: ['Vunesp', 'AOCP'],
  },
  {
    n: 13,
    titulo: 'Comunicação obrigatória ao Conselho Tutelar',
    sintese: 'Suspeita de maus-tratos → notificação',
    bloco: SAU,
    destaque: true,
    resumo:
      'Os casos de SUSPEITA ou CONFIRMAÇÃO de castigo físico, de tratamento cruel ou degradante e de maus-tratos contra criança ou adolescente serão obrigatoriamente comunicados ao CONSELHO TUTELAR da respectiva localidade, sem prejuízo de outras providências legais. §1º As gestantes ou mães que manifestem interesse em entregar seus filhos para adoção serão obrigatoriamente encaminhadas, sem constrangimento, à Justiça da Infância e da Juventude. §2º Os serviços de saúde em suas diferentes portas de entrada, os serviços de assistência social em seu componente especializado, o CREAS e os demais órgãos do SGD deverão conferir máxima prioridade ao atendimento das crianças na faixa etária da primeira infância com suspeita ou confirmação de violência, preservada a intimidade.',
    prova:
      'Basta a SUSPEITA — não se exige prova. O destinatário é o CONSELHO TUTELAR (não a polícia, não o juiz). Desobedecer configura infração administrativa do art. 245 do ECA (multa de 3 a 20 salários de referência) para médico, professor ou responsável por estabelecimento.',
    pegadinha:
      'Exigir confirmação do maus-tratos para comunicar; apontar o Ministério Público, a autoridade policial ou o juiz como destinatários da comunicação obrigatória; ou dizer que o profissional viola o sigilo ao notificar (não viola — é dever legal).',
    exemplo:
      'Pediatra que identifica hematomas incompatíveis com a versão dos pais deve notificar o Conselho Tutelar imediatamente, ainda que sem certeza da agressão.',
    macete: 'SUSPEITOU? CONSELHO TUTELAR. Não espere a prova — a lei manda avisar na dúvida.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 14,
    titulo: 'Programas de saúde e vacinação',
    sintese: 'Vacinação obrigatória (recomendada)',
    bloco: SAU,
    resumo:
      'O SUS promoverá programas de assistência médica e odontológica para a prevenção das enfermidades que ordinariamente afetam a população infantil, e campanhas de educação sanitária para pais, educadores e alunos. §1º É OBRIGATÓRIA a vacinação das crianças nos casos recomendados pelas autoridades sanitárias. §2º Atendimento odontológico e campanhas de prevenção. §3º Acompanhamento integral do desenvolvimento e prevenção da prematuridade. §4º Atenção à saúde mental, com atendimento à criança vítima de violência. §5º Acompanhamento do desenvolvimento integral na PRIMEIRA INFÂNCIA.',
    prova:
      'O §1º é o campeão: a vacinação é OBRIGATÓRIA nos casos recomendados pelas autoridades sanitárias. O STF (ADI 6.586 e ARE 1.267.879, tema 1.103) firmou que é constitucional a obrigatoriedade, admitindo medidas restritivas indiretas — e que a convicção filosófica ou religiosa dos pais não afasta o dever.',
    pegadinha:
      'Dizer que a vacinação é facultativa por decisão dos pais, ou que o Estado pode vacinar à força (a obrigatoriedade admite sanções indiretas, não vacinação compulsória com uso de força física).',
    exemplo:
      'Pais que se recusam a vacinar o filho podem ser responsabilizados e o caso encaminhado ao Conselho Tutelar; a matrícula escolar pode exigir a caderneta em dia.',
    macete: 'Vacina de criança é OBRIGATÓRIA — crença dos pais não vale como “dispensa médica”.',
    bancas: ['Cebraspe', 'FGV', 'FCC'],
  },
  {
    n: 15,
    titulo: 'Liberdade, respeito e dignidade',
    sintese: 'Sujeitos de direitos em desenvolvimento',
    bloco: LIB,
    resumo:
      'A criança e o adolescente têm direito à LIBERDADE, ao RESPEITO e à DIGNIDADE como pessoas humanas em processo de desenvolvimento e como SUJEITOS DE DIREITOS civis, humanos e sociais garantidos na Constituição e nas leis.',
    prova:
      'Abre o Capítulo II e consagra expressamente a criança como SUJEITO de direitos (e não objeto de tutela) — é a expressão textual da proteção integral. Trio: liberdade, respeito e dignidade.',
    pegadinha:
      'Tratar a criança como “objeto de proteção”; ou omitir um dos três bens jurídicos do trio.',
    exemplo:
      'Adolescente que exige ser ouvido em procedimento que lhe diz respeito invoca sua condição de sujeito de direitos.',
    macete: 'L.R.D. — Liberdade, Respeito, Dignidade. Sujeito, nunca objeto.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 16,
    titulo: 'Conteúdo do direito à liberdade',
    sintese: 'Os 7 incisos da liberdade',
    bloco: LIB,
    destaque: true,
    resumo:
      'O direito à liberdade compreende os seguintes aspectos: I – ir, vir e estar nos logradouros públicos e espaços comunitários, ressalvadas as restrições legais; II – opinião e expressão; III – crença e culto religioso; IV – BRINCAR, praticar esportes e divertir-se; V – participar da vida familiar e comunitária, sem discriminação; VI – participar da vida política, na forma da lei; VII – buscar refúgio, auxílio e orientação.',
    prova:
      'Os sete incisos são cobrados literalmente. Os dois mais “esquecidos” pelos candidatos: o inciso IV (BRINCAR é direito legal, não favor) e o VII (buscar refúgio, auxílio e orientação).',
    pegadinha:
      'Suprimir o “brincar” do rol; afirmar que a liberdade de ir e vir é absoluta (há “restrições legais”, como o art. 83); ou negar a participação política, que existe “na forma da lei”.',
    exemplo:
      'Shopping center que proíbe a permanência de adolescentes desacompanhados, sem base legal, afronta o inciso I.',
    macete: 'Ir/vir · opinar · crer · BRINCAR · conviver · participar · pedir socorro. São 7.',
    bancas: ['FCC', 'Vunesp', 'AOCP'],
  },
  {
    n: 17,
    titulo: 'Direito ao respeito',
    sintese: 'Integridade física, psíquica e moral',
    bloco: LIB,
    resumo:
      'O direito ao respeito consiste na inviolabilidade da integridade FÍSICA, PSÍQUICA e MORAL da criança e do adolescente, abrangendo a preservação da imagem, da identidade, da autonomia, dos valores, ideias e crenças, dos espaços e objetos pessoais.',
    prova:
      'Tríade da integridade (física, psíquica e moral) + o rol de preservação: imagem, identidade, autonomia, valores/ideias/crenças e ESPAÇOS E OBJETOS PESSOAIS — este último é o detalhe que mais cai, pois reconhece privacidade material ao adolescente.',
    pegadinha:
      'Reduzir o respeito à integridade física; ou negar que o adolescente tenha direito a espaços e objetos pessoais mesmo dentro de casa ou de uma entidade de acolhimento.',
    exemplo:
      'Revista arbitrária no armário pessoal de adolescente acolhido, sem justificativa, viola o art. 17.',
    macete: 'F.P.M. + imagem, identidade, autonomia, crenças e o “meu canto e minhas coisas”.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 18,
    titulo: 'Dignidade e proibição do castigo físico',
    sintese: 'Lei Menino Bernardo (arts. 18-A e 18-B)',
    bloco: LIB,
    destaque: true,
    resumo:
      'Art. 18: É dever de TODOS velar pela dignidade da criança e do adolescente, pondo-os a salvo de qualquer tratamento DESUMANO, VIOLENTO, ATERRORIZANTE, VEXATÓRIO ou CONSTRANGEDOR. Art. 18-A (Lei 13.010/2014): têm o direito de ser educados e cuidados SEM O USO DE CASTIGO FÍSICO ou de TRATAMENTO CRUEL OU DEGRADANTE — castigo físico é a ação de natureza disciplinar ou punitiva com uso da força física que resulte em sofrimento físico ou lesão; tratamento cruel ou degradante é a conduta que humilhe, ameace gravemente ou ridicularize. Art. 18-B: os pais, integrantes da família ampliada, responsáveis, agentes públicos executores de medidas socioeducativas ou qualquer pessoa encarregada de cuidar, tratar, educar ou proteger que utilizar castigo físico ou tratamento cruel estará sujeito, sem prejuízo de outras sanções, às medidas de: I – encaminhamento a programa oficial de proteção à família; II – encaminhamento a tratamento psicológico ou psiquiátrico; III – encaminhamento a cursos ou programas de orientação; IV – obrigação de encaminhar a criança a tratamento especializado; V – ADVERTÊNCIA. As medidas serão aplicadas pelo Conselho Tutelar, sem prejuízo de outras providências legais.',
    prova:
      'A “Lei Menino Bernardo” (13.010/2014) é a internalização do art. 19 da Convenção da ONU (Parte 4). Cobra-se: a diferença entre castigo físico (força física → dor ou lesão) e tratamento cruel ou degradante (humilhação, ameaça grave, ridicularização) e o rol de 5 medidas do art. 18-B, aplicadas pelo CONSELHO TUTELAR.',
    pegadinha:
      'Dizer que a lei criminalizou a palmada — ela NÃO criou tipo penal: as consequências do art. 18-B são medidas protetivas/pedagógicas (a mais grave é a advertência), sem prejuízo de eventual crime já previsto (maus-tratos, lesão corporal).',
    exemplo:
      'Mãe que bate no filho com cinto pode ser encaminhada pelo Conselho Tutelar a programa de orientação e advertida — se houver lesão, responde ainda pelo crime correspondente.',
    macete: 'Castigo físico = dor. Cruel/degradante = humilhação. Sanção = medida, não cadeia.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 19,
    titulo: 'Convivência familiar e comunitária',
    sintese: 'Família natural; acolhimento é exceção',
    bloco: FAM,
    destaque: true,
    resumo:
      'É direito da criança e do adolescente ser criado e educado no seio de SUA FAMÍLIA e, EXCEPCIONALMENTE, em FAMÍLIA SUBSTITUTA, assegurada a convivência familiar e comunitária, em ambiente que garanta seu desenvolvimento integral. §1º Toda criança ou adolescente em programa de acolhimento terá sua situação reavaliada, no máximo, a cada 3 MESES, devendo a autoridade judiciária decidir de forma fundamentada pela reintegração familiar ou colocação em família substituta. §2º A permanência em programa de acolhimento não se prolongará por mais de 18 MESES, salvo comprovada necessidade que atenda ao seu superior interesse, devidamente fundamentada. §3º A manutenção ou reintegração na FAMÍLIA NATURAL tem PREFERÊNCIA sobre qualquer outra providência. §4º Será garantida a convivência da criança com a mãe ou o pai PRIVADO DE LIBERDADE, mediante visitas periódicas, independentemente de autorização judicial. Art. 19-A: entrega voluntária do filho para adoção. Art. 19-B: apadrinhamento.',
    prova:
      'Os números são o alvo: reavaliação a cada 3 MESES (a Lei 13.509/2017 reduziu de 6) e permanência máxima de 18 MESES (antes, 2 anos). Guarde também a PREFERÊNCIA da família natural (§3º) e a visita ao pai/mãe preso INDEPENDENTEMENTE de autorização judicial (§4º).',
    pegadinha:
      'Manter os prazos antigos (6 meses / 2 anos); inverter a preferência, colocando a família substituta à frente da natural; ou exigir autorização judicial para a visita ao genitor preso.',
    exemplo:
      'Criança acolhida há 20 meses sem decisão exige justificativa fundamentada nos autos — o prazo-regra do §2º já se esgotou.',
    macete: '3 meses para reavaliar, 18 meses no máximo. Natural na frente, substituta atrás.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 20,
    titulo: 'Igualdade entre os filhos',
    sintese: 'Sem designações discriminatórias',
    bloco: FAM,
    resumo:
      'Os filhos, HAVIDOS OU NÃO DA RELAÇÃO DO CASAMENTO, ou por ADOÇÃO, terão os mesmos direitos e qualificações, proibidas quaisquer designações discriminatórias relativas à filiação.',
    prova:
      'Reprodução do art. 227, §6º, da CF/88 — e eco do art. 25, §2º, da DUDH (Parte 1 da coleção). A igualdade é plena, inclusive para efeitos sucessórios.',
    pegadinha:
      'Admitir distinção sucessória entre filho biológico e adotivo; ou usar as expressões “legítimo/ilegítimo/adulterino”, banidas do ordenamento.',
    exemplo:
      'Filho adotivo herda em igualdade absoluta com o filho biológico — qualquer testamento em sentido contrário é nulo nessa parte.',
    macete: 'Filho é filho. Ponto. Sem adjetivo, sem asterisco.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 21,
    titulo: 'Poder familiar em igualdade',
    sintese: 'Pai e mãe, mesmas condições',
    bloco: FAM,
    resumo:
      'O PODER FAMILIAR será exercido, em igualdade de condições, pelo PAI e pela MÃE, na forma do que dispuser a legislação civil, assegurado a qualquer deles o direito de, em caso de discordância, recorrer à autoridade judiciária competente para a solução da divergência.',
    prova:
      'Note a terminologia: “poder familiar” substituiu “pátrio poder” (alteração da Lei 12.010/2009, alinhada ao Código Civil de 2002). Em caso de divergência entre os pais, quem decide é o JUIZ.',
    pegadinha:
      'Usar “pátrio poder” como termo vigente; ou atribuir ao pai a palavra final em caso de desacordo (a solução é judicial).',
    exemplo:
      'Pais que discordam sobre a escola do filho podem ajuizar ação para que o juiz resolva a divergência.',
    macete: 'Não é pátrio, é FAMILIAR. Empate entre os pais? Desempata o juiz.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 22,
    titulo: 'Deveres dos pais',
    sintese: 'Sustento, guarda e educação',
    bloco: FAM,
    destaque: true,
    resumo:
      'Aos pais incumbe o dever de SUSTENTO, GUARDA e EDUCAÇÃO dos filhos menores, cabendo-lhes ainda, no interesse destes, a obrigação de cumprir e fazer cumprir as determinações judiciais. Parágrafo único (Lei 13.257/2016): a mãe e o pai, ou os responsáveis, têm direitos iguais e deveres e responsabilidades COMPARTILHADOS no cuidado e na educação da criança, devendo ser resguardado o direito de transmissão familiar de suas crenças e culturas, assegurados os direitos da criança previstos nesta Lei.',
    prova:
      'A trinca S.G.E. (sustento, guarda e educação) é cobrada literalmente — e o descumprimento injustificado desses deveres autoriza a perda ou suspensão do poder familiar (art. 24). O parágrafo único consagra o compartilhamento das responsabilidades.',
    pegadinha:
      'Acrescentar ou trocar itens da trinca (por exemplo, “sustento, vigilância e correção”); ou atribuir o cuidado prioritariamente à mãe.',
    exemplo:
      'Pai que se recusa reiteradamente a matricular o filho na escola descumpre o dever de educação — hipótese do art. 24.',
    macete: 'S.G.E.: Sustento, Guarda e Educação — e a conta é dividida entre pai e mãe.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 23,
    titulo: 'Pobreza não retira o poder familiar',
    sintese: 'Falta de recursos não é motivo',
    bloco: FAM,
    destaque: true,
    resumo:
      'A FALTA OU A CARÊNCIA DE RECURSOS MATERIAIS não constitui motivo suficiente para a perda ou a suspensão do poder familiar. §1º Não existindo outro motivo que por si só autorize a decretação da medida, a criança ou o adolescente será mantido em sua família de origem, a qual deverá obrigatoriamente ser incluída em serviços e programas oficiais de proteção, apoio e promoção. §2º A CONDENAÇÃO CRIMINAL do pai ou da mãe não implicará a destituição do poder familiar, exceto na hipótese de condenação por crime DOLOSO sujeito à pena de RECLUSÃO contra o PRÓPRIO FILHO ou contra OUTRO TITULAR DO MESMO PODER FAMILIAR. §3º A condenação por crime de violência doméstica e familiar contra a mãe ou filhos implica a destituição.',
    prova:
      'Dois núcleos de ouro: (1) pobreza NUNCA justifica a perda do poder familiar — é a mais cobrada regra do ECA sobre família; e (2) a fórmula tripla do §2º: crime DOLOSO + pena de RECLUSÃO + vítima sendo o próprio filho ou o outro titular do poder familiar. Faltando um dos três, não há destituição automática.',
    pegadinha:
      'Afirmar que a família pobre pode ter o filho acolhido por insuficiência econômica; ou dizer que qualquer condenação criminal destitui o poder familiar (precisa dos três requisitos cumulativos do §2º).',
    exemplo:
      'Mãe desempregada e sem moradia adequada deve ser incluída em programas de apoio — jamais perder a guarda apenas por isso (§1º).',
    macete: 'Pobreza NÃO separa. Para destituir por crime: DOLOSO + RECLUSÃO + contra o filho ou o cônjuge-titular.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 24,
    titulo: 'Perda e suspensão do poder familiar',
    sintese: 'Procedimento judicial contraditório',
    bloco: FAM,
    resumo:
      'A PERDA e a SUSPENSÃO do poder familiar serão decretadas JUDICIALMENTE, em procedimento CONTRADITÓRIO, nos casos previstos na legislação civil (art. 1.638 do Código Civil), bem como na hipótese de DESCUMPRIMENTO INJUSTIFICADO DOS DEVERES E OBRIGAÇÕES a que alude o art. 22.',
    prova:
      'Reserva de jurisdição + contraditório: nunca por ato administrativo e nunca sem defesa. Duas fontes de hipóteses: o Código Civil e o descumprimento dos deveres do art. 22 do ECA.',
    pegadinha:
      'Admitir destituição pelo Conselho Tutelar (jamais — o Conselho pode requisitar serviços e aplicar medidas do art. 101, mas não destitui); ou dispensar o contraditório em nome da urgência.',
    exemplo:
      'Ação de destituição do poder familiar ajuizada pelo MP tramita com citação dos pais e defesa técnica obrigatória (arts. 155 a 163).',
    macete: 'Só o JUIZ destitui — e só depois de ouvir o outro lado.',
    bancas: ['Cebraspe', 'FCC'],
  },
  {
    n: 25,
    titulo: 'Família natural e família extensa',
    sintese: 'Pais + descendentes / parentes próximos',
    bloco: FAM,
    destaque: true,
    resumo:
      'Entende-se por FAMÍLIA NATURAL a comunidade formada pelos PAIS OU QUALQUER DELES e seus DESCENDENTES. Parágrafo único: entende-se por FAMÍLIA EXTENSA OU AMPLIADA aquela que se estende para além da unidade pais e filhos ou da unidade do casal, formada por PARENTES PRÓXIMOS com os quais a criança ou adolescente CONVIVE e MANTÉM VÍNCULOS de AFINIDADE e AFETIVIDADE.',
    prova:
      'Definições literais e muito cobradas. Família natural = pais (ou um deles) + descendentes. Família extensa exige DOIS requisitos cumulativos: parentesco próximo + convivência com vínculos de afinidade e afetividade. Terceiro conceito: família SUBSTITUTA (art. 28), formada por guarda, tutela ou adoção.',
    pegadinha:
      'Dizer que a família natural exige a presença dos DOIS pais (basta qualquer deles); ou considerar família extensa qualquer parente, mesmo sem convivência afetiva — o vínculo é requisito legal.',
    exemplo:
      'A avó que cria o neto desde bebê integra a família EXTENSA e tem preferência na guarda (art. 28, §3º); o tio distante que nunca conviveu, não.',
    macete:
      'Natural = pai/mãe + filhos. Extensa = parente próximo COM convivência e afeto. Substituta = guarda, tutela ou adoção.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 26,
    titulo: 'Reconhecimento de filhos',
    sintese: 'Conjunta ou separadamente; até por testamento',
    bloco: FAM,
    resumo:
      'Os filhos havidos FORA DO CASAMENTO poderão ser reconhecidos pelos pais, conjunta ou separadamente, no próprio termo de nascimento, por testamento, mediante escritura ou outro documento público, qualquer que seja a origem da filiação. Parágrafo único: o reconhecimento pode preceder o nascimento do filho ou suceder-lhe ao falecimento, se deixar descendentes.',
    prova:
      'Duas ampliações cobradas: o reconhecimento pode ser feito por TESTAMENTO e pode ocorrer ANTES do nascimento (nascituro) ou DEPOIS da morte do filho, se ele deixar descendentes.',
    pegadinha:
      'Exigir a concordância do outro genitor para o reconhecimento unilateral; ou negar o reconhecimento do nascituro.',
    exemplo:
      'Pai que reconhece o filho ainda na gestação, por escritura pública, age validamente nos termos do parágrafo único.',
    macete: 'Reconhecer: junto ou sozinho, antes de nascer ou depois de morrer (se houver netos).',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 27,
    titulo: 'Estado de filiação',
    sintese: 'Personalíssimo, indisponível e imprescritível',
    bloco: FAM,
    resumo:
      'O reconhecimento do ESTADO DE FILIAÇÃO é direito PERSONALÍSSIMO, INDISPONÍVEL e IMPRESCRITÍVEL, podendo ser exercitado contra os pais ou seus herdeiros, sem qualquer restrição, observado o segredo de Justiça.',
    prova:
      'Os três adjetivos são a resposta pronta: personalíssimo, indisponível e imprescritível. O exercício é possível contra os pais OU SEUS HERDEIROS, sob segredo de justiça.',
    pegadinha:
      'Aplicar prazo prescricional à investigação de paternidade (não há); ou dizer que o direito se extingue com a morte do pai — cabe ação contra os herdeiros.',
    exemplo:
      'Pessoa de 50 anos pode ajuizar investigação de paternidade post mortem contra os herdeiros do suposto pai.',
    macete: 'P.I.I.: Personalíssimo, Indisponível, Imprescritível. Filiação não tem prazo de validade.',
    bancas: ['FCC', 'Cebraspe', 'FGV'],
  },
  {
    n: 28,
    titulo: 'Família substituta — regras gerais',
    sintese: 'Guarda, tutela ou adoção',
    bloco: GUA,
    destaque: true,
    resumo:
      'A colocação em FAMÍLIA SUBSTITUTA far-se-á mediante GUARDA, TUTELA ou ADOÇÃO, independentemente da situação jurídica da criança ou adolescente. §1º Sempre que possível, a criança será previamente OUVIDA por equipe interprofissional, e sua opinião devidamente considerada. §2º Tratando-se de maior de 12 ANOS, será necessário seu CONSENTIMENTO, colhido em audiência. §3º Considerar-se-ão o grau de parentesco e a relação de afinidade ou afetividade, a fim de evitar ou minorar as consequências do afastamento. §4º Os GRUPOS DE IRMÃOS serão colocados sob adoção, tutela ou guarda da MESMA FAMÍLIA SUBSTITUTA, ressalvada a comprovada existência de risco de abuso ou outra situação que justifique a excepcionalidade, evitando-se o rompimento definitivo dos vínculos fraternais. §5º A colocação far-se-á gradativamente, com acompanhamento e preparação. §6º Em se tratando de criança INDÍGENA ou QUILOMBOLA: considerar-se-ão sua identidade social e cultural, seus costumes e tradições; haverá intervenção e oitiva de representantes do órgão federal responsável pela política indigenista (FUNAI) e de antropólogos; e a colocação ocorrerá PRIORITARIAMENTE no seio de sua comunidade ou junto a membros da mesma etnia.',
    prova:
      'As três modalidades (guarda, tutela e adoção) e os números: OUVIR sempre que possível; CONSENTIR se maior de 12 anos. Também caem o §4º (irmãos não se separam) e o §6º (criança indígena/quilombola — FUNAI, antropólogos e prioridade na própria comunidade).',
    pegadinha:
      'Trocar a idade do consentimento (não é 16, é 12); confundir “ser ouvida” (todas, sempre que possível) com “consentir” (só a partir de 12 anos em audiência); ou separar grupos de irmãos sem a excepcionalidade comprovada.',
    exemplo:
      'Adolescente de 14 anos que se recusa a ser adotado impede o deferimento: seu consentimento é requisito, colhido em audiência.',
    macete:
      'G.T.A. — Guarda, Tutela, Adoção. Ouvir todos; a partir de 12, CONSENTIR. Irmãos, juntos.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp'],
  },
  {
    n: 29,
    titulo: 'Incompatibilidade com a medida',
    sintese: 'Ambiente familiar inadequado veda a colocação',
    bloco: GUA,
    resumo:
      'Não se deferirá colocação em família substituta a pessoa que revele, por qualquer modo, INCOMPATIBILIDADE com a natureza da medida ou não ofereça AMBIENTE FAMILIAR ADEQUADO.',
    prova:
      'Cláusula aberta de barreira: a análise é concreta e a decisão, judicial, orientada pelo melhor interesse. Aplica-se às três modalidades.',
    pegadinha:
      'Reduzir o requisito à condição econômica do pretendente — o critério é a adequação do ambiente familiar e a compatibilidade com a medida, não a riqueza.',
    exemplo:
      'Pretendente com histórico de violência doméstica revela incompatibilidade com a natureza da medida, ainda que tenha boa situação financeira.',
    macete: 'Art. 29: não basta querer — tem que servir para a criança.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 30,
    titulo: 'Proibição de transferência a terceiros',
    sintese: 'Sem “passar” a criança adiante',
    bloco: GUA,
    resumo:
      'A colocação em família substituta NÃO ADMITIRÁ transferência da criança ou adolescente a TERCEIROS ou a ENTIDADES governamentais ou não governamentais, sem autorização judicial.',
    prova:
      'A colocação é personalíssima em relação à família escolhida: qualquer repasse depende de nova decisão judicial. Impede a “adoção à brasileira” e o comércio informal de crianças.',
    pegadinha:
      'Admitir a transferência mediante simples acordo entre as partes ou documento particular com firma reconhecida.',
    exemplo:
      'Guardiã que “passa” a criança para uma vizinha, sem ir ao juízo, pratica ato nulo e sujeito a responsabilização.',
    macete: 'Criança não é repassada: mudou de casa, mudou por ordem do juiz.',
    bancas: ['Vunesp', 'FCC'],
  },
  {
    n: 31,
    titulo: 'Família substituta estrangeira',
    sintese: 'Excepcional e só por adoção',
    bloco: GUA,
    destaque: true,
    resumo:
      'A colocação em família substituta ESTRANGEIRA constitui medida EXCEPCIONAL, somente admissível na modalidade de ADOÇÃO.',
    prova:
      'Dois filtros no mesmo artigo: excepcionalidade + modalidade única (adoção). Logo, não existe guarda nem tutela deferida a família substituta estrangeira. É a tradução do art. 21, “b”, da Convenção da ONU (Parte 4) — subsidiariedade da adoção internacional.',
    pegadinha:
      'Admitir guarda ou tutela para estrangeiro residente no exterior — só ADOÇÃO; ou tratar a colocação estrangeira como alternativa equivalente à nacional.',
    exemplo:
      'Casal italiano habilitado não pode obter a guarda provisória de criança brasileira para levá-la ao exterior: a via é exclusivamente a adoção internacional (arts. 51 e 52).',
    macete: 'Estrangeiro: só ADOÇÃO, e por exceção. Nada de guarda nem tutela.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 32,
    titulo: 'Termo de compromisso',
    sintese: 'Guarda e tutela exigem compromisso',
    bloco: GUA,
    resumo:
      'Ao assumir a GUARDA ou a TUTELA, o responsável prestará COMPROMISSO de bem e fielmente desempenhar o encargo, mediante TERMO NOS AUTOS.',
    prova:
      'O compromisso é exigido na guarda e na tutela — NÃO na adoção, que se constitui por sentença e cria vínculo de filiação definitivo.',
    pegadinha:
      'Exigir termo de compromisso do adotante (não se exige) ou dispensá-lo do tutor.',
    exemplo:
      'Avó que recebe a guarda do neto assina o termo em audiência, formalizando o encargo.',
    macete: 'Guarda e tutela juram nos autos. Adoção não jura: vira filho.',
    bancas: ['AOCP', 'Vunesp'],
  },
  {
    n: 33,
    titulo: 'Guarda — conceito e efeitos',
    sintese: 'Assistência + dependente para todos os fins',
    bloco: GUA,
    destaque: true,
    resumo:
      'A GUARDA obriga à prestação de assistência MATERIAL, MORAL e EDUCACIONAL à criança ou adolescente, conferindo a seu detentor o direito de OPOR-SE A TERCEIROS, INCLUSIVE AOS PAIS. §1º A guarda destina-se a regularizar a POSSE DE FATO, podendo ser deferida liminar ou incidentalmente nos procedimentos de tutela e adoção (exceto no de adoção por estrangeiros). §2º Excepcionalmente, defere-se a guarda fora dos casos de tutela e adoção, para atender a SITUAÇÕES PECULIARES ou suprir a FALTA EVENTUAL dos pais ou responsável, podendo ser deferido o direito de representação para a prática de atos determinados. §3º A guarda confere à criança ou adolescente a condição de DEPENDENTE, para todos os fins e efeitos de direito, inclusive PREVIDENCIÁRIOS. §4º Salvo expressa e fundamentada determinação em contrário da autoridade judiciária, a guarda NÃO IMPEDE o exercício do direito de VISITAS pelos pais, nem o dever de prestar ALIMENTOS.',
    prova:
      'Quatro pontos: o trio de assistência (material, moral e educacional); a oponibilidade INCLUSIVE AOS PAIS; a condição de dependente para fins previdenciários (§3º); e o §4º — a guarda não suspende visitas nem alimentos dos pais.',
    pegadinha:
      'Dizer que a guarda extingue o poder familiar (não extingue — apenas o limita no que toca à posse/vigilância); ou afirmar que o guardião assume a obrigação alimentar no lugar dos pais.',
    exemplo:
      'Neto sob guarda da avó é seu dependente para fins de plano de saúde e previdência, e o pai continua devendo pensão alimentícia.',
    macete: 'Guarda = M.M.E. + dependente até no INSS + pais seguem visitando e pagando.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 34,
    titulo: 'Acolhimento familiar tem preferência',
    sintese: 'Família acolhedora antes da instituição',
    bloco: GUA,
    resumo:
      'O poder público estimulará, por meio de assistência jurídica, incentivos fiscais e subsídios, o ACOLHIMENTO, sob a forma de GUARDA, de criança ou adolescente AFASTADO DO CONVÍVIO FAMILIAR. §1º A inclusão da criança ou adolescente em programas de ACOLHIMENTO FAMILIAR terá PREFERÊNCIA a seu acolhimento INSTITUCIONAL, observado, em qualquer caso, o caráter TEMPORÁRIO e EXCEPCIONAL da medida. §§2º e 3º Na seleção dos pretendentes, dar-se-á preferência a pessoa ou casal já cadastrado, considerando-se os vínculos.',
    prova:
      'Regra de ouro do sistema de acolhimento: família acolhedora PREFERE ao abrigo. E toda medida de acolhimento é temporária e excepcional (mesma lógica do art. 101, §1º).',
    pegadinha:
      'Inverter a ordem de preferência (institucional antes da familiar); ou tratar o acolhimento como medida definitiva.',
    exemplo:
      'Município que mantém programa de famílias acolhedoras deve encaminhar a criança a elas antes de recorrer ao abrigo.',
    macete: 'Casa de família na frente, abrigo atrás — e sempre por pouco tempo.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 35,
    titulo: 'Revogação da guarda',
    sintese: 'A qualquer tempo, com MP ouvido',
    bloco: GUA,
    resumo:
      'A guarda poderá ser REVOGADA A QUALQUER TEMPO, mediante ato judicial FUNDAMENTADO, ouvido o MINISTÉRIO PÚBLICO.',
    prova:
      'A guarda é PRECÁRIA e revogável a qualquer tempo — em oposição à adoção, que é IRREVOGÁVEL (art. 39, §1º). Requisitos: decisão judicial fundamentada + oitiva do MP.',
    pegadinha:
      'Afirmar que a guarda é definitiva ou irrevogável; ou dispensar a manifestação do Ministério Público.',
    exemplo:
      'Constatados maus-tratos pelo guardião, o juiz revoga a guarda de imediato, após ouvir o MP.',
    macete: 'Guarda se revoga; adoção, nunca. A diferença mais cobrada do bloco.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 36,
    titulo: 'Tutela',
    sintese: 'Até 18 incompletos; pressupõe perda do poder familiar',
    bloco: GUA,
    destaque: true,
    resumo:
      'A TUTELA será deferida, nos termos da lei civil, a pessoa de até 18 ANOS INCOMPLETOS. Parágrafo único: o deferimento da tutela PRESSUPÕE a prévia DECRETAÇÃO DA PERDA OU SUSPENSÃO DO PODER FAMILIAR e implica NECESSARIAMENTE o dever de GUARDA.',
    prova:
      'Três informações cobradas: limite etário (até 18 incompletos); o pressuposto lógico (não há tutela convivendo com poder familiar ativo — é preciso perdê-lo ou suspendê-lo antes); e o efeito automático (tutela SEMPRE implica guarda).',
    pegadinha:
      'Admitir tutela sem prévia perda/suspensão do poder familiar; ou dizer que a tutela dispensa o dever de guarda. Cuidado ainda com a idade: a antiga redação falava em 21 anos.',
    exemplo:
      'Falecidos os pais, o tio nomeado tutor assume também a guarda do sobrinho, independentemente de pedido autônomo.',
    macete: 'Tutela: 18 incompletos + poder familiar já derrubado + guarda vem de brinde.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
  {
    n: 37,
    titulo: 'Tutela testamentária e bens',
    sintese: 'Especialização de hipoteca legal',
    bloco: GUA,
    resumo:
      'O tutor nomeado por TESTAMENTO ou qualquer documento autêntico deverá, no prazo de 30 DIAS após a abertura da sucessão, ingressar com pedido destinado ao controle judicial do ato, devendo especializar hipoteca legal em garantia dos bens do tutelado. Parágrafo único: será dispensada a especialização de hipoteca legal sempre que o tutelado não possuir bens ou rendimentos, ou por qualquer outro motivo devidamente justificado.',
    prova:
      'Prazo de 30 dias e a finalidade da hipoteca legal: proteger o PATRIMÔNIO do tutelado. A dispensa ocorre quando não há bens ou rendimentos.',
    pegadinha:
      'Afirmar que a nomeação testamentária dispensa o controle judicial; ou tornar a hipoteca obrigatória mesmo sem patrimônio.',
    exemplo:
      'Tutor de criança que herdou imóveis deve garantir a administração com hipoteca legal; se a criança nada possui, a exigência é dispensada.',
    macete: 'Tutor de testamento: 30 dias no juiz. Tem bens? Hipoteca. Não tem? Dispensa.',
    bancas: ['Vunesp'],
  },
  {
    n: 38,
    titulo: 'Destituição da tutela',
    sintese: 'Mesmo rito da perda do poder familiar',
    bloco: GUA,
    resumo:
      'Aplica-se à DESTITUIÇÃO DA TUTELA o disposto no art. 24 — ou seja, decretação judicial, em procedimento contraditório, nos casos previstos na legislação civil e por descumprimento injustificado dos deveres do art. 22.',
    prova:
      'Remissão direta ao art. 24: destituir o tutor exige processo judicial com contraditório, tal como a perda do poder familiar.',
    pegadinha: 'Admitir destituição administrativa do tutor ou dispensa do contraditório.',
    exemplo:
      'Tutor que dilapida o patrimônio do tutelado é destituído por sentença, após regular processo.',
    macete: 'Art. 38 = art. 24 aplicado ao tutor. Mesma porta, mesmo rito.',
    bancas: ['AOCP'],
  },
  {
    n: 39,
    titulo: 'Adoção — excepcional e irrevogável',
    sintese: 'Última alternativa; sem procuração',
    bloco: ADO,
    destaque: true,
    resumo:
      'A ADOÇÃO de criança e de adolescente reger-se-á segundo o disposto nesta Lei. §1º A adoção é medida EXCEPCIONAL e IRREVOGÁVEL, à qual se deve recorrer apenas quando ESGOTADOS OS RECURSOS de manutenção da criança ou adolescente na FAMÍLIA NATURAL ou EXTENSA. §2º É VEDADA a adoção POR PROCURAÇÃO. §3º Em caso de conflito entre direitos e interesses do adotando e de outras pessoas, inclusive seus pais biológicos, devem prevalecer os direitos e os interesses do adotando.',
    prova:
      'Quatro adjetivos-chave: excepcional, irrevogável, subsidiária (só após esgotar família natural e extensa) e personalíssima (vedada por procuração). O §3º positiva o melhor interesse como critério de desempate.',
    pegadinha:
      'Dizer que a adoção pode ser revogada por arrependimento dos adotantes (não pode — é irrevogável, ao contrário da guarda e da tutela); ou admitir procuração.',
    exemplo:
      'Casal que se arrepende após a sentença não “devolve” a criança: o vínculo é definitivo, cabendo, no limite, destituição do poder familiar dos adotantes.',
    macete: 'Adoção: EXCEPCIONAL + IRREVOGÁVEL + sem procuração. Família natural e extensa primeiro.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 40,
    titulo: 'Idade do adotando',
    sintese: 'Até 18 anos na data do pedido',
    bloco: ADO,
    resumo:
      'O adotando deve contar com, no máximo, 18 ANOS à data do PEDIDO, salvo se já estiver sob a GUARDA ou TUTELA dos adotantes.',
    prova:
      'O marco é a data do PEDIDO (não a da sentença) — e a exceção salva os casos de guarda/tutela prévia, permitindo a adoção de maiores de 18 anos já criados pelos adotantes.',
    pegadinha:
      'Fixar o limite na data da sentença; ou negar em absoluto a adoção de maior de 18 anos (a ressalva final a autoriza; fora dela, aplica-se o Código Civil).',
    exemplo:
      'Jovem que completou 19 anos durante o processo, tendo o pedido sido protocolado aos 17, pode ser adotado normalmente.',
    macete: 'Conta a idade no PROTOCOLO. Já era guarda/tutela? A idade deixa de importar.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 41,
    titulo: 'Efeitos da adoção',
    sintese: 'Filho para todos os fins; desliga vínculos',
    bloco: ADO,
    destaque: true,
    resumo:
      'A adoção atribui a condição de FILHO ao adotado, com os mesmos direitos e deveres, INCLUSIVE SUCESSÓRIOS, desligando-o de qualquer vínculo com pais e parentes, SALVO OS IMPEDIMENTOS MATRIMONIAIS. §1º Se um dos cônjuges ou concubinos adota o filho do outro, mantêm-se os vínculos de filiação entre o adotado e o cônjuge ou concubino do adotante e os respectivos parentes (ADOÇÃO UNILATERAL). §2º É recíproco o direito sucessório entre o adotado, seus descendentes, o adotante, seus ascendentes, descendentes e colaterais até o 4º grau, observada a ordem de vocação hereditária.',
    prova:
      'A ressalva dos IMPEDIMENTOS MATRIMONIAIS é o ponto de ouro: o vínculo com a família biológica é rompido para tudo, EXCETO para impedir casamento entre parentes consanguíneos. O §1º trata da adoção unilateral (padrasto/madrasta), que preserva o vínculo com o genitor que permanece.',
    pegadinha:
      'Dizer que a adoção rompe TODOS os vínculos sem exceção (esquecendo os impedimentos matrimoniais); ou negar direito sucessório recíproco entre adotado e a família do adotante.',
    exemplo:
      'Adotado não pode casar com sua irmã biológica, ainda que juridicamente não sejam mais parentes — é a ressalva do caput.',
    macete: 'Vira filho para tudo, inclusive herança. Corta tudo — menos o impedimento para casar.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 42,
    titulo: 'Quem pode adotar',
    sintese: '18 anos, 16 de diferença, sem ascendentes/irmãos',
    bloco: ADO,
    destaque: true,
    resumo:
      'Podem adotar os maiores de 18 ANOS, independentemente do estado civil. §1º Não podem adotar os ASCENDENTES e os IRMÃOS do adotando. §2º Para adoção CONJUNTA, é indispensável que os adotantes sejam casados civilmente ou mantenham união estável, comprovada a estabilidade da família. §3º O adotante há de ser, pelo menos, 16 ANOS MAIS VELHO do que o adotando. §4º Os divorciados, os judicialmente separados e os ex-companheiros podem adotar conjuntamente, desde que acordem sobre a guarda e o regime de visitas e que o estágio de convivência tenha sido iniciado na constância do período de convivência. §5º Nos casos do §4º, desde que demonstrado efetivo benefício ao adotando, será assegurada a GUARDA COMPARTILHADA. §6º A adoção poderá ser deferida ao adotante que, após inequívoca manifestação de vontade, VIER A FALECER no curso do procedimento (ADOÇÃO PÓSTUMA).',
    prova:
      'Os três números mágicos: 18 (idade mínima do adotante), 16 (diferença mínima de idade) e a vedação a ASCENDENTES e IRMÃOS (avó não adota neto; irmão não adota irmão). Some a adoção póstuma do §6º, que retroage à data do óbito (art. 47, §7º).',
    pegadinha:
      'Exigir estado civil determinado (não se exige — solteiro adota); trocar a diferença de idade (não é 18, é 16 anos); permitir adoção por avós; ou exigir casamento/união estável para adoção INDIVIDUAL (só a CONJUNTA exige).',
    exemplo:
      'Homem solteiro de 30 anos pode adotar criança de 10 (diferença de 20 anos). Já a avó de 60 não pode adotar o neto, por ser ascendente.',
    macete: '18 para adotar · 16 de diferença · avô e irmão, JAMAIS · conjunta exige casamento/união.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 43,
    titulo: 'Reais vantagens e motivos legítimos',
    sintese: 'O filtro de mérito da adoção',
    bloco: ADO,
    resumo:
      'A adoção será deferida quando apresentar REAIS VANTAGENS para o adotando e fundar-se em MOTIVOS LEGÍTIMOS.',
    prova:
      'Dois requisitos cumulativos e finalísticos. A adoção existe no interesse de quem é adotado, não no dos adotantes — o artigo é a positivação do melhor interesse.',
    pegadinha:
      'Dizer que basta o interesse legítimo dos adotantes; ou tratar “reais vantagens” como vantagem econômica.',
    exemplo:
      'Pedido de adoção motivado por vantagem previdenciária, sem vínculo afetivo real, não preenche o art. 43.',
    macete: 'Vantagem é da CRIANÇA; motivo é do adulto — e os dois têm de existir.',
    bancas: ['FCC', 'Cebraspe'],
  },
  {
    n: 44,
    titulo: 'Tutor e curador só após prestar contas',
    sintese: 'Sem contas, sem adoção',
    bloco: ADO,
    resumo:
      'Enquanto não der conta de sua administração e saldar o seu alcance, não pode o TUTOR ou o CURADOR adotar o pupilo ou o curatelado.',
    prova:
      'Regra antifraude patrimonial: evita que o administrador use a adoção para encobrir má gestão dos bens do tutelado.',
    pegadinha:
      'Afirmar a proibição em caráter absoluto: prestadas as contas e saldado o alcance, a adoção é possível.',
    exemplo:
      'Tutor que ainda não prestou contas do patrimônio do pupilo tem seu pedido de adoção suspenso até a regularização.',
    macete: 'Primeiro presta contas, depois vira pai.',
    bancas: ['AOCP'],
  },
  {
    n: 45,
    titulo: 'Consentimento dos pais e do adotando',
    sintese: 'Pais consentem; maior de 12 também',
    bloco: ADO,
    destaque: true,
    resumo:
      'A adoção DEPENDE DO CONSENTIMENTO dos pais ou do representante legal do adotando. §1º O consentimento será DISPENSADO em relação à criança ou adolescente cujos pais sejam DESCONHECIDOS ou tenham sido DESTITUÍDOS do poder familiar. §2º Em se tratando de adotando MAIOR DE 12 ANOS de idade, será também necessário o SEU CONSENTIMENTO.',
    prova:
      'Duas manifestações: a dos pais (dispensável se desconhecidos ou destituídos) e a do adotando maior de 12 anos (indispensável). O consentimento dos pais é retratável até a publicação da sentença (art. 166, §5º) e deve ser colhido em audiência com assistência de advogado.',
    pegadinha:
      'Trocar 12 por 16 anos; dizer que o consentimento dos pais é irretratável desde a assinatura; ou exigir consentimento de pais já destituídos.',
    exemplo:
      'Mãe que consente com a adoção em audiência pode se retratar até a sentença ser publicada — depois, não mais.',
    macete: 'Pais consentem (salvo desconhecidos/destituídos). A partir de 12, a criança também assina embaixo.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 46,
    titulo: 'Estágio de convivência',
    sintese: '90 dias (nacional) / 30 a 45 (internacional)',
    bloco: ADO,
    destaque: true,
    resumo:
      'A adoção será precedida de ESTÁGIO DE CONVIVÊNCIA, pelo prazo MÁXIMO DE 90 DIAS, observadas a idade da criança ou adolescente e as peculiaridades do caso, PRORROGÁVEL por até igual período, mediante decisão fundamentada. §1º O estágio poderá ser dispensado se o adotando já estiver sob a tutela ou guarda legal do adotante durante tempo suficiente para avaliar a conveniência da constituição do vínculo. §2º A simples GUARDA DE FATO NÃO AUTORIZA, por si só, a dispensa do estágio. §3º Em caso de adoção por pessoa ou casal RESIDENTE FORA DO PAÍS, o estágio será de, no MÍNIMO 30 DIAS e NO MÁXIMO 45 DIAS, prorrogável por até igual período, cumprido NO TERRITÓRIO NACIONAL. §4º O estágio será acompanhado pela equipe interprofissional a serviço da Justiça da Infância e da Juventude.',
    prova:
      'Os prazos são o alvo (Lei 13.509/2017): nacional — até 90 dias, prorrogáveis por igual período; internacional — de 30 a 45 dias, cumprido OBRIGATORIAMENTE em território nacional. E o §2º: guarda de FATO não dispensa o estágio.',
    pegadinha:
      'Trocar os prazos (usar os antigos 30 dias/15 a 45); dizer que o estágio internacional pode ser cumprido no exterior; ou admitir dispensa pela simples guarda de fato.',
    exemplo:
      'Casal português habilitado permanece 40 dias no Brasil convivendo com a criança, sob acompanhamento técnico, antes da sentença.',
    macete: 'Brasil: até 90 (+90). Estrangeiro: 30 a 45, aqui dentro. Guarda de fato não vale passe livre.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP'],
  },
];
