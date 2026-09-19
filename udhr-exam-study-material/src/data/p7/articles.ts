import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'Título I · Preliminares': '#c19a3d',
  'Título II · Direitos fundamentais': '#0f766e',
  'Título III · Medidas de proteção': '#7c3aed',
  'Título IV · Política de atendimento': '#2f6fb4',
  'Título V · Acesso à Justiça': '#0e7490',
  'Título VI · Crimes': '#991b1b',
  'Título VII · Infrações e finais': '#4b5563',
};

const A = 'Título I · Preliminares';
const B = 'Título II · Direitos fundamentais';
const C = 'Título III · Medidas de proteção';
const D = 'Título IV · Política de atendimento';
const E = 'Título V · Acesso à Justiça';
const F = 'Título VI · Crimes';
const G = 'Título VII · Infrações e finais';

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Proteção, conceito de idoso e prioridade',
    sintese: '60 anos (art. 2º) + prioridade absoluta',
    bloco: A,
    destaque: true,
    resumo:
      'Art. 1º — É assegurada à pessoa idosa a proteção à vida e à dignidade, com os direitos à vida, à saúde, à alimentação, à educação, à cultura, ao esporte, ao lazer, ao trabalho, à cidadania, à liberdade, ao respeito e à convivência familiar e comunitária. Art. 2º — CONCEITO: considera-se pessoa idosa aquela com idade IGUAL OU SUPERIOR A 60 ANOS. Art. 3º — obrigação da FAMÍLIA, da COMUNIDADE, da SOCIEDADE e do PODER PÚBLICO, com ABSOLUTA PRIORIDADE; parágrafo único: atendimento PREFERENCIAL, IMEDIATO e INDIVIDUALIZADO, dentre outras vantagens legais. Art. 4º — vedadas negligência, discriminação, violência, crueldade e opressão, por AÇÃO ou OMISSÃO. Art. 5º — dever de TODOS prevenir a ameaça ou violação aos seus direitos.',
    prova:
      'O trio do art. 3º (preferencial, imediato e individualizado) e a idade de 60 anos são presença quase garantida. O conceito está no ART. 2º — e não no art. 1º — detalhe que as bancas exploram. E a prioridade não é só do Estado: é corresponsabilidade de família, comunidade e sociedade.',
    pegadinha:
      'Colocar os 60 anos no art. 1º (está no art. 2º); trocar para 65 anos; restringir a prioridade ao Poder Público; ou suprimir “ação ou omissão” do art. 4º.',
    exemplo:
      'Fila própria com senha diferenciada em banco e posto de saúde é o atendimento “preferencial, imediato e individualizado” do art. 3º em funcionamento.',
    macete: 'TÍTULO I: 60 anos no art. 2º. Prioridade P.I.I.: Preferencial, Imediato, Individualizado.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 6,
    titulo: 'Direito à vida',
    sintese: 'Envelhecimento saudável com políticas públicas',
    bloco: B,
    resumo:
      'Art. 6º — É dever do Estado garantir à pessoa idosa a proteção à VIDA E À SAÚDE, mediante a EFETIVAÇÃO DE POLÍTICAS PÚBLICAS SOCIAIS que permitam um ENVELHECIMENTO SAUDÁVEL E DIGNO, além de condições de autonomia e participação na comunidade.',
    prova:
      'Assim como no art. 7º do ECA (Parte 5A), o direito à vida aqui é PRESTACIONAL: exige políticas públicas de envelhecimento ativo, não apenas a abstenção de causar a morte. A expressão “envelhecimento saudável” é cobrada.',
    pegadinha:
      'Reduzir o direito à vida à dimensão negativa (não matar), ignorando o dever positivo estatal de promoção.',
    exemplo:
      'Programas de centros de convivência, atividade física orientada e rastreio de doenças crônicas concretizam o art. 6º.',
    macete: 'Art. 6º: viver e envelhecer BEM — com política pública, não com sorte.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 7,
    titulo: 'Liberdade, respeito e dignidade',
    sintese: 'Igreja, opinião, locomoção + vedação ao assistencialismo',
    bloco: B,
    resumo:
      'Arts. 7º a 12. Art. 7º — direito à LIBERDADE, compreendendo: opinião e expressão; crença e culto religioso; comunicação; participação na vida familiar e comunitária; LOMOÇÃO; e reserva à intimidade. Art. 8º — direito ao RESPEITO, sendo dever de todos velar pela dignidade do idoso, colocando-o a salvo de qualquer tratamento DESUMANO, VIOLENTO, ATERRORIZANTE, VEXATÓRIO OU CONSTRANGEDOR. Art. 9º — direito à DIGNIDADE: viver com dignidade, sem discriminação e com participação social. Arts. 10 e 11 — deveres de família, comunidade, sociedade e Estado; e prioridade nas políticas. Art. 12 — os casos de SUSPEITA OU CONFIRMAÇÃO de MAUS-TRATOS serão obrigatoriamente COMUNICADOS às autoridades competentes.',
    prova:
      'O rol do art. 7º espelha o art. 16 do ECA. E o art. 12 traz a comunicação OBRIGATÓRIA de maus-tratos — basta a SUSPEITA, e qualquer cidadão pode (e os serviços de saúde devem) comunicar.',
    pegadinha:
      'Exigir confirmação do mau-trato para notificar; ou omitir do rol a reserva à intimidade e a locomoção.',
    exemplo:
      'Enfermeira que suspeita de hematomas recorrentes em idoso acolhido deve comunicar de imediato — não espera a prova cabal.',
    macete: 'L.R.D. (liberdade, respeito, dignidade) + suspeitou maus-tratos, comunica.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 13,
    titulo: 'Direito aos alimentos',
    sintese: 'Obrigação familiar recíproca com prioridade',
    bloco: B,
    resumo:
      'Arts. 13 e 14 — A pessoa idosa tem direito a ALIMENTOS, garantidos pela obrigação RECÍPROCA dos membros da família, na forma da lei civil, compreendendo o sustento, a moradia e os cuidados indispensáveis. As ações de alimentos em que figure parte pessoa idosa tramitam com PRIORIDADE, observadas as regras processuais de proteção do Título V.',
    prova:
      'A obrigação alimentar é RECÍPROCA (como no direito civil: ascendentes e descendentes). O diferencial do EPI é a PRIORIDADE processual dessas ações. Conecte com o crime de abandono (art. 93): descumprir dever alimentar gerencial pode virar crime.',
    pegadinha:
      'Dizer que a obrigação é apenas dos filhos (é recíproca) ou que depende de prévia manifesta de necessidade econômica do idoso em qualquer hipótese.',
    exemplo:
      'Idoso que não pode custear seu sustento ajuíza ação de alimentos contra os filhos, que tramita com prioridade na Vara (Única da) Família.',
    macete: 'Alimentos: recíprocos e com fila prioritária.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 15,
    titulo: 'Saúde — atenção integral e preferencial',
    sintese: 'SUS preferencial + remédios + domiciliar',
    bloco: B,
    destaque: true,
    resumo:
      'Art. 15 — É assegurada à pessoa idosa a ATENÇÃO INTEGRAL À SAÚDE, pelo SUS, com acesso universal e igualitário, incluindo atenção especial às doenças que afetam preferencialmente os idosos. GARANTIAS: § atendimento PREFERENCIAL; atendimento DOMICILIAR quando houver impossibilidade de locomoção; fornecimento GRATUITO de MEDICAMENTOS, especialmente os de USO CONTINUADO, bem como órteses e próteses; e campanhas periódicas de VACINAÇÃO para a população idosa.',
    prova:
      'O quarteto de ouro: preferencial, DOMICILIAR, MEDICAMENTOS de uso continuado GRATUITOS e VACINAÇÃO. A preferência no SUS não é mera cortesia — é norma legal. O domiciliar atende o idoso impossibilitado de se locomover.',
    pegadinha:
      'Condicionar os medicamentos gratuitos à miserabilidade (a regra legal não exige); tratar o domiciliar como regra (é para quem não se locomove); ou esquecer a vacinação.',
    exemplo:
      'Idoso hipertenso recebe losartana gratuitamente na farmácia municipal; idoso acamado é visitado pela equipe de saúde da família.',
    macete: 'Art. 15 = P.D.M.V.: Preferencial, Domiciliar, Medicamentos, Vacinação.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 16,
    titulo: 'Saúde — acompanhante e instituições',
    sintese: 'Internou: direito a acompanhante',
    bloco: B,
    resumo:
      'Arts. 16 a 19. Art. 16 — atendimento DOMICILIAR E INSTITUCIONAL para idosos com deficiência ou com limitação incapacitante. Art. 17 — ao idoso INTERNADO ou EM OBSERVAÇÃO é assegurado o DIREITO A ACOMPANHANTE, devendo o órgão de saúde e as instituições e seguradoras prestarem as informações necessárias. Arts. 18 e 19 — as instituições de saúde devem atender critérios de qualidade e garantir direitos; e os casos de suspeita ou confirmação de MAUS-TRATOS serão comunicados às autoridades, em qualquer circunstância.',
    prova:
      'O direito ao ACOMPANHANTE (art. 17) vale para internação OU simples observação — não só em UTI. Instituições de saúde respondem por irregularidades e devem comunicar maus-tratos.',
    pegadinha:
      'Limitar o acompanhante à UTI (vale para internação e observação em geral); dizer que planos e seguradoras não custeiam a diária de acompanhante.',
    exemplo:
      'Idoso em observação por 24h em Pronto Socorro tem direito à permanência do filho ao seu lado, com cobertura da diária pelo plano de saúde.',
    macete: 'Internou ou observou: entra acompanhante. E plano paga.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 20,
    titulo: 'Educação, cultura, esporte e lazer',
    sintese: 'Currículo com conteúdo sobre o envelhecimento',
    bloco: B,
    resumo:
      'Arts. 20 a 25 — A pessoa idosa tem direito à EDUCAÇÃO, respeitadas sua identidade, suas necessidades e aspirações, com metodologias adequadas e aproveitamento de sua EXPERIÊNCIA e conhecimentos. Os CURRÍCULOS ESCOLARES de todos os níveis incluirão conteúdo sobre o PROCESSO DE ENVELHECIMENTO e o RESPEITO E VALORIZAÇÃO da pessoa idosa. É assegurada a participação em atividades culturais, artísticas, esportivas e de lazer, como diretores, atletas ou espectadores, com prioridade no acesso a espaços e eventos públicos.',
    prova:
      'O ponto cobrado é o CURRÍCULO: conteúdo obrigatório sobre o processo de envelhecimento, respeito e valorização do idoso em todos os níveis de ensino. Também caem a metodologia adequada e o aproveitamento da experiência do idoso.',
    pegadinha:
      'Dizer que o direito à educação do idoso é mera recomendação programática; ou restringir o conteúdo curricular ao ensino fundamental.',
    exemplo:
      'Escola municipal que desenvolve projeto intergeracional “avô na sala de aula” cumpre o art. 22 do EPI.',
    macete: 'Currículo: envelhecer, respeitar, valorizar — em TODOS os níveis.',
    bancas: ['FCC', 'Vunesp'],
  },
  {
    n: 26,
    titulo: 'Profissionalização e trabalho',
    sintese: 'Sem teto de idade + desempate pela idade',
    bloco: B,
    destaque: true,
    resumo:
      'Arts. 26 a 28. Art. 26 — direito ao EXERCÍCIO DE ATIVIDADE PROFISSIONAL, respeitada sua condição física, intelectual e psicológica. Art. 27 — VEDADA a discriminação e a FIXAÇÃO DE LIMITE MÁXIMO DE IDADE para admissão a qualquer trabalho ou emprego, INCLUSIVE PARA CONCURSOS, RESSALVADAS as naturezas e as exigências do cargo. Art. 28 — o PRIMEIRO CRITÉRIO DE DESEMPATE em CONCURSO PÚBLICO será a IDADE, dando-se PREFERÊNCIA AO DE IDADE MAIS ELEVADA.',
    prova:
      'A dupla de ouro: art. 27 (sem limite máximo de idade, inclusive em concursos, com a ressalva da natureza/exigências do cargo) e art. 28 (primeiro critério de desempate = idade MAIS ELEVADA). Presença garantida em prova.',
    pegadinha:
      'Trocar “limite máximo” por “limite mínimo”; suprimir a RESSALVA das exigências do cargo (carreiras como PM exigem idade máxima); ou dar o desempate ao candidato mais novo.',
    exemplo:
      'Empate entre candidatos de 62 e 30 anos em concurso: o de 62 leva a vaga. Já a PM pode fixar idade máxima, pois a natureza do cargo exige.',
    macete: 'Sem teto de idade (salvo exigência do cargo); empate? vence o mais VELHO.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 29,
    titulo: 'Previdência social',
    sintese: 'Benefícios assegurados e revisão',
    bloco: B,
    resumo:
      'Arts. 29 a 32 — São assegurados à pessoa idosa os benefícios previdenciários, com vedação de práticas DISCRIMINATÓRIAS por idade e garantia de REVISÃO e reajuste periódico dos valores, na forma da legislação previdenciária. Os proventos e benefícios não podem ser utilizados como critério de diferenciação ou exclusão.',
    prova:
      'Bloco programático que costuma aparecer como alternativa correta em “assinale a Incorreta”. Grave: vedada a discriminação etária na previdência e assegurada a revisão dos benefícios.',
    pegadinha:
      'Confundir com o BPC (art. 34), que é ASSISTÊNCIA social (não exige contribuição), enquanto a previdência é contributiva.',
    exemplo:
      'Autarquia que nega revisão de proventos por prática de discriminação de idade viola o bloco do art. 29 a 32.',
    macete: 'Previdência: contribui e recebe. Assistência (BPC): precisa e recebe.',
    bancas: ['AOCP', 'FCC'],
  },
  {
    n: 33,
    titulo: 'Assistência social e o BPC',
    sintese: 'BPC: art. 34 EPI + 65 anos da LOAS',
    bloco: B,
    destaque: true,
    resumo:
      'Arts. 33 a 36. Art. 33 — a ASSISTÊNCIA SOCIAL é prestada a quem dela necessitar, INDEPENDENTEMENTE DE CONTRIBUIÇÃO à seguridade social, nos termos da LOAS. Art. 34 — aos idosos que comprovem INSUFICIÊNCIA DE MEIOS, próprios ou da família, é assegurado o BENEFÍCIO DE PRESTAÇÃO CONTINUADA (BPC), correspondente a 1 SALÁRIO MÍNIMO, nos termos da Lei Orgânica da Assistência Social — que exige 65 ANOS de idade e renda familiar per capita de até ¼ DO SALÁRIO MÍNIMO. Arts. 35 e 36 — regras de convivência do benefício com o acolhimento institucional, sem perda de direitos assistenciais.',
    prova:
      'O cruzamento campeão: o EPI define idoso como 60 anos, mas o BPC-idade (LOAS, art. 20) exige 65 ANOS. O art. 34 remete à LOAS — não cria regime próprio. Insuficiência de meios = renda per capita de até ¼ do salário mínimo.',
    pegadinha:
      'Afirmar que o BPC é devido aos 60 anos do EPI (a LOAS exige 65); ou que o BPC exige contribuição previdenciária (é assistência, não previdência).',
    exemplo:
      'Idoso de 66 anos, sem renda e com família sem condições de mantê-lo, recebe 1 salário mínimo mensal pelo BPC/INSS.',
    macete: 'BPC: art. 34 no EPI, 65 anos na LOAS e ¼ de SM por cabeça.',
    bancas: ['Cebraspe', 'FGV', 'AOCP', 'Vunesp'],
  },
  {
    n: 37,
    titulo: 'Habitação e moradia digna',
    sintese: 'Prioridade + 3% das unidades',
    bloco: B,
    destaque: true,
    resumo:
      'Arts. 37 e 38. Art. 37 — a pessoa idosa tem direito a MORADIA DIGNA, no seio da família natural ou substituta, ou em entidade de acolhimento, com ADAPTAÇÃO da moradia às suas limitações e preferências. Art. 38 — nos PROGRAMAS HABITACIONAIS públicos ou com recursos públicos, o idoso tem PRIORIDADE na aquisição de imóvel para moradia própria e é garantida a RESERVA DE 3% DAS UNIDADES para atendimento às pessoas idosas.',
    prova:
      'O número é a resposta pronta: 3% DAS UNIDADES habitacionais + prioridade na aquisição de imóvel para moradia própria nos programas públicos.',
    pegadinha:
      'Trocar os 3% por 5% ou 10%; ou estender a reserva a programas privados sem recursos públicos.',
    exemplo:
      'Conjunto habitacional do programa municipal com 200 unidades deve reservar 6 delas para idosos, com prioridade na aquisição.',
    macete: 'Moradia: prioridade na compra e 3% das unidades reservadas.',
    bancas: ['FCC', 'AOCP', 'Cebraspe'],
  },
  {
    n: 39,
    titulo: 'Transporte — gratuidade e assentos',
    sintese: '60 grátis (urbanos) · 10% assentos · 2+50% (interestadual)',
    bloco: B,
    destaque: true,
    resumo:
      'Arts. 39 a 42. Art. 39 — GRATUIDADE nos TRANSPORTES COLETIVOS PÚBLICOS URBANOS para idosos com 60 ANOS OU MAIS (a CF, art. 230, § 2º, garante aos 65+; o EPI AMPLIA para 60). Art. 40 — reserva de 10% DOS ASSENTOS, devidamente IDENTIFICADOS como preferenciais, nos veículos de transporte coletivo. Art. 41 — no transporte INTERESTADUAL: 2 VAGAS GRATUITAS por veículo para idosos com renda igual ou inferior a 2 SALÁRIOS MÍNIMOS, e DESCONTO DE 50% no valor das passagens para os idosos de baixa renda que excederem as vagas gratuitas. Art. 42 — prioridade no embarque e regras de sinalização.',
    prova:
      'Tabela decorável: urbanos 60+ grátis; 10% dos assentos identificados; interestadual 2 vagas + 50% para renda até 2 SM. O contraste 60 (EPI) × 65 (CF, art. 230, § 2º) é a pegadinha estrutural do tema.',
    pegadinha:
      'Estender a gratuidade TOTAL do interestadual a todos os idosos (só 2 vagas para baixa renda + 50%); trocar os 10% de assentos; usar 65 anos como regra do EPI.',
    exemplo:
      'Idoso de 63 anos usa o ônibus urbano gratuitamente; no interestadual, idoso de baixa renda ocupa uma das 2 vagas gratuitas — e, se lotadas, paga metade da passagem.',
    macete: 'Urbanos: 60 grátis · assentos: 10% · interestadual: 2 vagas + 50% (até 2 SM).',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 43,
    titulo: 'Medidas de proteção',
    sintese: 'Sem conselho tutelar; medidas judiciais',
    bloco: C,
    resumo:
      'Arts. 43 a 45 — As medidas de proteção são aplicáveis sempre que os direitos do idoso forem AMEAÇADOS OU VIOLADOS: I – por ação ou omissão da SOCIEDADE OU DO ESTADO; II – por falta, omissão ou ABUSO da família, curador ou entidade de atendimento; III – em razão de sua CONDIÇÃO PESSOAL. As medidas incluem encaminhamento à família ou curador, orientação e apoio temporário, requisição de tratamento, afastamento DO AGRESSOR DA MORADIA COMUM em caso de violência, e proteção JUDICIAL, podendo chegar à CURATELA do idoso incapaz, com atuação do Ministério Público.',
    prova:
      'Estrutura espelhada no art. 98 do ECA (as três hipóteses). O afastamento do agressor da moradia comum é a medida de urgência típica. E atenção: NO EPI NÃO EXISTE CONSELHO TUTELAR — as medidas são judicialmente aplicadas, com MP; os Conselhos do Idoso são de política (de direitos), não aplicam medidas a casos concretos.',
    pegadinha:
      'Atribuir a um “conselho tutelar do idoso” a aplicação de medidas (não existe no EPI — invenção da banca); exigir violação consumada (a ameaça basta).',
    exemplo:
      'Juiz afasta da casa o filho que agride a mãe idosa — medida do art. 44, sem retirar a vítima do lar.',
    macete: 'Medidas judiciais (e MP) — no EPI não há conselho tutelar.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 46,
    titulo: 'Política de atendimento',
    sintese: 'Rede articulada e prioridade orçamentária',
    bloco: D,
    resumo:
      'Arts. 46 e 47 — A política de atendimento far-se-á por CONJUNTO ARTICULADO DE AÇÕES GOVERNAMENTAIS E NÃO GOVERNAMENTAIS, da União, estados, DF e municípios, com PRIORIDADE no atendimento e nas políticas públicas, e participação dos Conselhos de Direitos da Pessoa Idosa — órgãos deliberativos e controladores, com participação popular paritária, nos níveis municipal, estadual e nacional.',
    prova:
      'Espelha o art. 88 do ECA: municipalização, conselhos deliberativos PARITÁRIOS e fundos. Os Conselhos do Idoso (municipal, estadual, nacional — este último regulamentado por decreto) deliberam sobre a POLÍTICA; o atendimento concreto é da rede de serviços e da Justiça.',
    pegadinha:
      'Atribuir aos Conselhos do Idoso a aplicação de medidas protetivas a casos concretos (função inexistente — diferente do Conselho Tutelar do ECA).',
    exemplo:
      'CMDI (Conselho Municipal dos Direitos do Idoso) aprova o plano municipal e fiscaliza o fundo, mas não “aplica medida” a idoso específico.',
    macete: 'Conselho do Idoso = política (delibera e controla). Caso concreto = Justiça/MP.',
    bancas: ['FCC', 'AOCP', 'Cebraspe'],
  },
  {
    n: 48,
    titulo: 'Entidades de atendimento e fiscalização',
    sintese: 'ILPI: excepcional, comunicada ao MP, fiscalizada',
    bloco: D,
    destaque: true,
    resumo:
      'Arts. 48 a 58 — As ENTIDADES DE ATENDIMENTO (governamentais e não governamentais — hoje as ILPIs, instituições de longa permanência) funcionam mediante REGISTRO E PADRÕES DE QUALIDADE, mantendo programas de assistência integral, preservando os vínculos familiares e a autonomia dos idosos. As entidades são obrigadas a COMUNICAR IRREGULARIDADES ao MINISTÉRIO PÚBLICO, que pode fiscalizá-las (art. 58: fiscalização pelo poder público). Os idosos acolhidos mantêm seus direitos, inclusive de visitas e convivência.',
    prova:
      'Dois deveres estruturais: comunicar IRREGULARIDADES ao MP e submeter-se à FISCALIZAÇÃO. E a filosofia: a institucionalização é EXCEPCIONAL — a entidade complementa, não substitui a família (como no art. 19 do ECA).',
    pegadinha:
      'Tratar a ILPI como solução prioritária (é excepcional); ou dizer que a fiscalização cabe apenas à vigilância sanitária (além dela: MP, poder público e Judiciário).',
    exemplo:
      'ILPI que detecta violação de direitos internos comunica ao MP, que instaura procedimento e fiscaliza a entidade.',
    macete: 'ILPI: excepcional · irregularidade chega ao MP · fiscalização sempre.',
    bancas: ['Cebraspe', 'FCC', 'Vunesp'],
  },
  {
    n: 59,
    titulo: 'Sanções civis e administrativas às entidades',
    sintese: 'Advertência → multa → suspensão → encerramento',
    bloco: D,
    resumo:
      'Arts. 59 a 68 — Verificada irregularidade na entidade de atendimento, sem prejuízo da responsabilidade civil e penal, podem ser aplicadas sanções: ADVERTÊNCIA; MULTA; SUSPENSÃO PARCIAL das atividades; e ENCERRAMENTO da entidade, assegurados a ampla defesa e o contraditório, com providências para o realojamento dos idosos acolhidos.',
    prova:
      'A escala de sanções (advertência, multa, suspensão parcial, encerramento) e a garantia de defesa prévia. O encerramento vem com o dever de realojamento — a lei não desampara os acolhidos.',
    pegadinha:
      'Admitir encerramento sumário sem contraditório; ou omitir o realojamento dos idosos.',
    exemplo:
      'Entidade com irregularidades graves é suspensa parcialmente, com transferência temporária dos idosos a outras unidades, até a regularização.',
    macete: 'Entidade que erra: advertiu → multou → suspendeu → fechou (com realojamento).',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 69,
    titulo: 'Acesso à Justiça e prioridade processual',
    sintese: 'Tramitação prioritária em qualquer instância',
    bloco: E,
    destaque: true,
    resumo:
      'Arts. 69 a 71 — É dever do Estado assegurar à pessoa idosa a proteção judicial. Art. 71 — é assegurada PRIORIDADE NA TRAMITAÇÃO DOS PROCESSOS E PROCEDIMENTOS E NA EXECUÇÃO DOS ATOS E DILIGÊNCIAS JUDICIAIS em que figure como PARTE OU INTERVENIENTE pessoa com idade igual ou superior a 60 ANOS, EM QUALQUER INSTÂNCIA. Parágrafo único — a prioridade NÃO CESSA COM A MORTE do beneficiado, estendendo-se em favor do cônjuge ou companheiro sobrevivente com 60 anos ou mais.',
    prova:
      'Artigo campeão do Título V. Guarde: (i) PARTE OU INTERVENIENTE (não só autor); (ii) QUALQUER INSTÂNCIA; (iii) alcança processos e procedimentos (a jurisprudência do STJ estende aos administrativos e à execução); (iv) NÃO CESSA COM A MORTE — estende-se ao cônjuge/companheiro de 60+.',
    pegadinha:
      'Limitar a prioridade à primeira instância ou à posição de autor; ou dizer que a morte do idoso encerra a prioridade (ela sobrevive ao cônjuge/companheiro idoso).',
    exemplo:
      'Ação de indenização movida por idoso de 70 anos tramita à frente das demais; falecendo, a viúva de 67 mantém a prioridade.',
    macete: 'Art. 71: qualquer instância, parte OU interveniente — e não morre com o titular.',
    bancas: ['Cebraspe', 'FGV', 'FCC', 'Vunesp'],
  },
  {
    n: 72,
    titulo: 'Ministério Público',
    sintese: 'Notifica, requere, investiga e propõe a ação',
    bloco: E,
    resumo:
      'Arts. 72 a 80 — Compete ao MINISTÉRIO PÚBLICO defender os direitos da pessoa idosa: expedir NOTIFICAÇÕES, REQUISITAR informações e documentos, instaurar INQUÉRITO CIVIL, promover a AÇÃO CIVIL PÚBLICA, intervir nas ações em que haja interesse de idoso, e atuar como curador especial quando necessário. O MP pode requisitar forças policiais e ter LIVRE ACESSO a entidades de atendimento.',
    prova:
      'As quatro ferramentas: notificar, requisitar, investigar (inquérito civil) e propor a ACP. O MP intervém obrigatoriamente nas ações que envolvam interesses de idosos.',
    pegadinha:
      'Negar legitimidade ao MP para a ação civil pública em favor de idosos (art. 201 do EPI + art. 21 da LAP? — na verdade: art. 81 do EPI e Lei 7.347/85); ou dispensar sua intervenção nas ações de interesse do idoso.',
    exemplo:
      'MP instaura inquérito civil após denúncia de maus-tratos em ILPI e propõe ação civil pública com pedido de liminar.',
    macete: 'MP do idoso: notifica, requere, investiga e propõe — e entra em qualquer casa de acolhimento.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 81,
    titulo: 'Ação civil pública e proteção processual',
    sintese: 'Tutela coletiva e individual dos direitos do idoso',
    bloco: E,
    resumo:
      'Arts. 81 a 92 — As ações civis públicas serão usadas para a DEFESA dos interesses e direitos COLETIVOS OU DIFUSOS das pessoas idosas, prejudicados ou ameaçados por entidades públicas ou privadas, sem prejuízo da legitimação individual. Os legitimados incluem o MINISTÉRIO PÚBLICO, os Estados, o DF, os municípios e as ASSOCIAÇÕES que tenham entre seus fins a defesa dos direitos do idoso. A proteção processual alcança a inversão do ônus da prova a favor do idoso hipossuficiente em relações de consumo.',
    prova:
      'A tutela é COLETIVA (ACP) e individual (ações próprias), com legitimação CONCORRENTE — a associação (com fins de defesa do idoso) pode ajuizar, além do MP. A inversão do ônus da prova ao idoso consumidor hipossuficiente é uma proteção processual relevante (diálogo com o CDC).',
    pegadinha:
      'Exigir deliberação assemblear específica para a associação atuar (basta incluir os fins no estatuto, conforme a jurisprudência e a LAP); ou negar a inversão do ônus da prova ao idoso.',
    exemplo:
      'Associação de aposentados propõe ação civil pública contra plano de saúde que reajusta mensalidades por faixa etária.',
    macete: 'ACP coletiva + ação individual + inversão do ônus a favor do idoso consumidor.',
    bancas: ['FGV', 'FCC'],
  },
  {
    n: 93,
    titulo: 'Crime — abandono de pessoa idosa',
    sintese: 'Detenção 6m a 3a; resultados qualificam',
    bloco: F,
    destaque: true,
    resumo:
      'Art. 93 — ABANDONAR pessoa idosa em hospital, casa de saúde, entidade de asilo ou congêneres, OU NÃO PROVER SUAS NECESSIDADES BÁSICAS, quando obrigado por LEI OU CONTRATO: pena — DETENÇÃO DE 6 MESES A 3 ANOS E MULTA. Parágrafo único — se do abandono resulta LESÃO CORPORAL DE NATUREZA GRAVE: RECLUSÃO DE 1 A 4 ANOS; se resulta MORTE: RECLUSÃO DE 2 A 5 ANOS.',
    prova:
      'Crime próprio (exige obrigação por LEI OU CONTRATO) e comum (qualquer pessoa pode praticá-lo). O parágrafo único majora para RECLUSÃO quando o resultado é lesão grave (1 a 4 anos) ou morte (2 a 5 anos).',
    pegadinha:
      'Trocar a pena do caput para reclusão (é detenção); omitir a modalidade omissiva (não prover necessidades básicas); ou trocar os patamares das qualificadoras.',
    exemplo:
      'Filho, obrigado por lei a sustentar a mãe idosa, deixa de fornecer medicamentos e alimentos, causando lesão à saúde dela: abandono qualificado.',
    macete: 'Abandono: detenção 6m–3a; lesão grave vira RECLUSÃO 1–4; morte, 2–5.',
    bancas: ['Cebraspe', 'FCC', 'FGV'],
  },
  {
    n: 94,
    titulo: 'Crimes — omissão de socorro e exposição a perigo',
    sintese: 'Não socorrer · condições degradantes · trabalho excessivo',
    bloco: F,
    resumo:
      'Art. 94 — DEIXAR DE PRESTAR ASSISTÊNCIA ao idoso, quando possível fazê-lo sem risco pessoal, em situação de iminente perigo, ou pedir em caso de urgência auxílio da autoridade pública: pena — detenção de 6 meses a 1 ano e multa. Art. 95 — EXPOR A PERIGO a integridade e a saúde, física ou psíquica, do idoso, SUBMETENDO-O a condições DESUMANAS OU DEGRADANTES, ou PRIVANDO-O DE ALIMENTOS E CUIDADOS INDISPENSAVEIS, quando obrigado a fazê-lo, ou SUJEITANDO-O A TRABALHO EXCESSIVO OU INADEQUADO: pena — detenção de 2 meses a 1 ano e multa. Os resultados de lesão grave e morte QUALIFICAM os crimes, elevando a pena.',
    prova:
      'Art. 94 é a versão idosa da omissão de socorro (CP, art. 135). No art. 95, decore os três núcleos: condições desumanas/degradantes, privação de alimentos e cuidados, e TRABALHO EXCESSIVO OU INADEQUADO — a proteção do idoso trabalhador.',
    pegadinha:
      'Exigir risco pessoal para o socorro do art. 94 (a lei diz “quando possível fazê-lo SEM risco pessoal” — o risco dispensa o dever); ou esquecer a modalidade do trabalho excessivo.',
    exemplo:
      'Empregador que submete idoso a jornadas exaustivas incompatíveis com sua saúde pratica o crime do art. 95.',
    macete: '94: socorra ou chame a polícia. 95: degradar, privar ou exaurir — crime.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 96,
    titulo: 'Crime — discriminação por idade e humilhação',
    sintese: 'Discriminar por idade · desdenhar e humilhar',
    bloco: F,
    destaque: true,
    resumo:
      'Art. 96 — DISCRIMINAR pessoa idosa, IMPEDINDO OU DIFICULTANDO seu acesso a OPERAÇÕES BANCÁRIAS, aos MEIOS DE TRANSPORTE, ao DIREITO DE CONTRATAR ou por QUALQUER OUTRO MEIO OU INSTRUMENTO necessário ao exercício da cidadania, POR MOTIVO DE IDADE: pena — RECLUSÃO DE 6 MESES A 1 ANO E MULTA. Parágrafo único — na MESMA PENA incorre quem DESDENHAR, HUMILHAR, DESPREZAR OU DISCRIMINAR pessoa idosa, POR QUALQUER MOTIVO.',
    prova:
      'O crime mais cobrado do EPI. Caput: discriminação POR MOTIVO DE IDADE que impeça o exercício da cidadania (banco, transporte, contratar). Parágrafo único: DESDENHAR, HUMILHAR, DESPREZAR OU DISCRIMINAR POR QUALQUER MOTIVO — a proteção à dignidade sem exigência do motivo etário.',
    pegadinha:
      'Classificar desdenhar/humilhar como mera contravenção ou ilícito civil (é crime, com a MESMA pena do caput); ou exigir que a humilhação decorra de motivo de idade (o parágrafo único admite QUALQUER motivo).',
    exemplo:
      'Gerente de banco que dificulta a abertura de conta de idoso “por causa da idade”, e o neto que ridiculariza o avô em público: ambos praticam o art. 96.',
    macete: '96 caput: idade + cidadania. § único: desdenhar/humilhar por QUALQUER motivo — mesma pena.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 97,
    titulo: 'Crimes — patrimônio e finanças do idoso',
    sintese: 'Apropriação de proventos · cartão · transações forçadas',
    bloco: F,
    destaque: true,
    resumo:
      'Arts. 97 a 100. Art. 97 — APROPRIAR-SE DE OU DESVIAR BENS, PROVENTOS, PENSÃO OU QUALQUER OUTRO RENDIMENTO do idoso, dando-lhe aplicação diversa da de sua finalidade: pena — RECLUSÃO DE 1 A 4 ANOS E MULTA. Art. 98 — mesma conduta MEDIANTE O USO DE CARTÃO MAGNÉTICO ou outro meio eletrônico de acesso à conta do idoso: pena — RECLUSÃO DE 1 A 4 ANOS E MULTA. Arts. 99 e 100 — RETER O CARTÃO MAGNÉTICO ou documentos pessoais do idoso para ASSEGURAR O RECEBIMENTO DE DÍVIDA, e CONSTRANGER o idoso a efetuar SAQUES, DEPÓSITOS ou TRANSAÇÕES financeiras em benefício de terceiro: figuras penais próprias do bloco patrimonial.',
    prova:
      'Os crimes de apropriação (97) e cartão magnético (98) têm pena idêntica: RECLUSÃO DE 1 A 4 ANOS E MULTA. O objeto material inclui BENS, PROVENTOS, PENSÃO E RENDIMENTOS. Reter cartão para garantir dívida e constranger a transações completam a tutela patrimonial.',
    pegadinha:
      'Trocar reclusão por detenção nos arts. 97/98; ou ignorar que a modalidade cartão magnético é figura AUTÔNOMA (art. 98), não mera majorante.',
    exemplo:
      'Filho que saca a aposentadoria da mãe pelo cartão dela, sem autorização, e gasta em proveito próprio: art. 98.',
    macete: '97 = apropria-se. 98 = cartão. Ambos: reclusão 1–4 + multa.',
    bancas: ['Cebraspe', 'FCC', 'AOCP'],
  },
  {
    n: 101,
    titulo: 'Crimes — ordem judicial, saúde e cobrança',
    sintese: 'Descumprir ordem judicial e negar atendimento',
    bloco: F,
    resumo:
      'Arts. 101 a 104 — O bloco pune: DEIXAR DE CUMPRIR, ATASAR OU FRUSTRAR A EXECUÇÃO DE ORDEM JUDICIAL expedida nas ações em que for parte ou interveniente o idoso (art. 102: detenção de 6 meses a 1 ano e multa); RECUSAR, RETARDAR OU OMITIR ATENDIMENTO DE SAÚDE, sem justa causa, por profissional de saúde ou membro de instituição (art. 103: detenção de 6 meses a 1 ano e multa, qualificada pelos resultados de lesão grave e morte); e COBRAR valores relativos a dívida do idoso MEDIANTE AMEAÇA, COAÇÃO OU QUALQUER MEIO DE CONSTRANGIMENTO físico ou moral (art. 104), além de figuras complementares de proteção institucional e financeira (art. 101).',
    prova:
      'Decore a dupla “deixar de cumprir, atrasar ou frustrar” (102) e o trio “recusar, retardar ou omitir” (103) — com a cláusula “SEM JUSTA CAUSA” para o caso de saúde. A cobrança vexatória de dívida do idoso (104) também é tema recorrente.',
    pegadinha:
      'Trocar os núcleos dos artigos (misturar “recusar atendimento” com “descumprir ordem judicial”); ou suprimir a exigência da “sem justa causa” no art. 103.',
    exemplo:
      'Hospital que retarda atendimento de urgência a idoso sem justa causa, e credor que cobra dívida na porta do idoso com ameaças: arts. 103 e 104.',
    macete: '102: não cumpre ordem judicial. 103: nega saúde (sem justa causa). 104: cobra com ameaça.',
    bancas: ['Cebraspe', 'FGV', 'FCC'],
  },
  {
    n: 105,
    titulo: 'Crimes — espetáculos, procuração e omissões',
    sintese: 'Exibir degradantemente · abusar da curatela · não comunicar',
    bloco: F,
    resumo:
      'Arts. 105 a 108 — Fecham o título: EXIBIR pessoa idosa em ESPETÁCULOS OU DIVERSÕES PÚBLICAS de conteúdo DEGRADANTE OU HUMILHANTE (105); INDUZIR pessoa idosa SEM DISCERNIMENTO de seus atos a OUTORGAR PROCURAÇÃO para fins de administração ou disposição de bens (106); figuras de ABUSO DE CURATELA E TUTELA, alcançando quem se apropria de bens sob sua guarda ou administração (107); e a OMISSÃO de comunicação à autoridade competente dos casos de MAUS-TRATOS de que se tenha conhecimento, na forma da lei (108).',
    prova:
      'O par clássico é 105 (espetáculos degradantes — dignidade) e 106 (induzir idoso SEM DISCERNIMENTO a outorgar procuração — tutela patrimonial). O art. 108 fecha com a omissão de comunicação de maus-tratos.',
    pegadinha:
      'Exigir lucro no art. 105 (o crime é a exposição degradante, independe de lucro); ou omitir o requisito do “sem discernimento” no art. 106.',
    exemplo:
      'Programa de TV que expõe idoso em situação humilhante para audiência, e o sobrinho que faz o tio com Alzheimer assinar procuração para vender o imóvel: arts. 105 e 106.',
    macete: '105: palco degradante. 106: procuração sem discernimento. 108: calou diante do mau-trato? Crime.',
    bancas: ['FCC', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 109,
    titulo: 'Infrações administrativas e disposições finais',
    sintese: 'Multa de R$ 500 a R$ 1.000 (dobro na reincidência)',
    bloco: G,
    destaque: true,
    resumo:
      'Arts. 109 a 118 — O bloco final define as INFRAÇÕES ADMINISTRATIVAS contra a pessoa idosa (descumprimento das normas de proteção — prioridade, gratuidade, assentos, atendimento — por pessoa física ou jurídica), punidas com MULTA DE R$ 500,00 A R$ 1.000,00, APLICADA EM DOBRO EM CASO DE REINCIDÊNCIA, sem prejuízo das responsabilidades civil e penal cabíveis. O título encerra com as revogações (art. 117) e a entrada em vigor da Lei nº 10.741, de 1º DE OUTUBRO DE 2003.',
    prova:
      'Os valores são a resposta pronta: multa de R$ 500 a R$ 1.000, DOBRADA na reincidência. E a independência das esferas: a infração administrativa NÃO afasta a responsabilidade civil e penal.',
    pegadinha:
      'Trocar os valores da multa ou omitir a dobra na reincidência; ou dizer que a punição administrativa exclui a penal (as esferas são independentes).',
    exemplo:
      'Loja que não dá atendimento preferencial ao idoso é multada em R$ 500; reincidindo, paga o dobro — sem prejuízo de eventual ação civil.',
    macete: 'Infração administrativa: R$ 500 a R$ 1.000 — e a segunda vez é o dobro.',
    bancas: ['AOCP', 'FCC', 'Cebraspe'],
  },
];
