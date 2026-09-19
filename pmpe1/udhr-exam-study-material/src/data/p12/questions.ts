import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'SV 11 e SV 26 — Algemas e regime hediondo/tortura',
    enunciado:
      'Julgue o item: segundo Súmula Vinculante 11 do STF, só é lícito o uso de algemas em casos de resistência, fundado receio de fuga ou perigo à integridade física, justificada excepcionalidade por escrito, sob pena de responsabilidade do agente e nulidade da prisão; e, segundo SV 26, para crimes hediondos ou equiparados, como tortura, o juízo da execução deve observar a inconstitucionalidade do regime integral fechado, sem prejuízo de avaliar requisitos objetivos e subjetivos para progressão.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — SV 11 literal (dignidade art.5º III CF + art.5º DUDH + art.7º PIDCP + art.1º CAT) + SV 26 literal (HC 82.959 declarou inconstitucional art.2º §1º Lei 8.072 integral fechado, tortura Lei 9.455 equiparada hediondo pode progredir).',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'RE 466.343 — 4 níveis hierarquia tratados',
    enunciado:
      'Sobre o status dos tratados internacionais no Brasil, conforme STF RE 466.343, assinale a correta:',
    alternativas: [
      'Constituição no topo; tratados de direitos humanos aprovados pelo rito do art.5º §3º (3/5, 2 turnos) têm status de emenda constitucional (ex: CDPD Dec.6.949/09); tratados de direitos humanos não aprovados por esse rito têm status supralegal, acima das leis e abaixo da CF (ex: CADH Dec.678/92, CAT Dec.40/91, CIAPTT Dec.98.386/89, Convenção Guatemala Dec.3.956/01, CEDAW, CIEFDR, Convenção Criança); tratados comuns têm status de lei ordinária.',
      'Todos os tratados de direitos humanos têm status de emenda constitucional.',
      'Tratados supralegais estão abaixo das leis ordinárias.',
      'CDPD tem status supralegal.',
      'Tratados comuns têm status supralegal.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — 4 níveis RE 466.343 literal. B erra: só rito §3º é emenda. C erra: supralegal acima lei. D erra: CDPD é emenda (DL 186/08 + Dec.6.949/09), primeiro tratado com rito §3º. E erra: comuns são legais.',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'ADI 5.357 e LBI — educação inclusiva privada sem taxa extra',
    enunciado:
      'Sobre educação inclusiva, nos termos da LBI e STF ADI 5.357, assinale a correta:',
    alternativas: [
      'É constitucional o art.28 §1º da LBI que obriga instituições privadas de ensino a assegurarem AEE, profissional de apoio, tradutor intérprete Libras, etc., sem cobrança de valores adicionais, concretizando art.208 III e 227 CF e art.24 CDPD (status emenda).',
      'ADI 5.357 declarou inconstitucional art.28 §1º LBI.',
      'Escola privada pode cobrar taxa extra para profissional de apoio.',
      'Educação inclusiva é apenas para rede pública.',
      'CDPD tem status supralegal, não emenda, por isso não pode ser parâmetro.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — ADI 5.357 improcedente, art.28 §1º LBI constitucional, sem taxa extra, base CF + CDPD emenda. B/C/D/E invertem tese e status CDPD (é emenda, pode ser parâmetro ADI).',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Lei 7.716/89 e ADO 26 — racismo, injúria racial, homotransfobia',
    enunciado:
      'Julgue o item: a Lei 7.716/89 define crimes de racismo com pena 1-3 anos e 2-5 anos se por meios de comunicação; o art.2º-A (Lei 14.532/23) tipifica injúria racial com pena 2-5 anos, sendo inafiançável e imprescritível por ser espécie de racismo; e, segundo STF ADO 26 e MI 4.733, homofobia e transfobia configuram racismo social, aplicando-se a Lei 7.716/89 até lei específica, sendo também inafiançáveis e imprescritíveis (CF art.5º XLII).',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — Lei 7.716 art.20 1-3a, §2º mídia 2-5a, art.2º-A injúria racial 2-5a inafiançável imprescritível (STF HC 154.248 e Lei 14.532/23), ADO 26 homotransfobia = racismo social, XLII CF inafiançável imprescritível. Pegadinha: injúria racial prescreve? Não.',
  },
  {
    id: 5,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Lei 9.455/97 — Tortura crime comum 2-8a',
    enunciado:
      'Sobre a Lei 9.455/97, assinale a correta:',
    alternativas: [
      'Tortura é crime comum (particular pode praticar), pena reclusão 2-8 anos, aumento 1/6 a 1/3 se contra criança, gestante, PcD, adolescente, maior de 60 anos, cometido por agente público ou mediante sequestro; se lesão grave 4-10 anos, morte 8-16 anos, omissão 1-4 anos detenção; condenação acarreta perda cargo e interdição dobro prazo pena; inafiançável e insuscetível graça/anistia (CF XLIII), equiparado hediondo, regime inicial fechado mas pode progredir (SV 26).',
      'Tortura exige agente público para configurar.',
      'Tortura é afiançável e suscetível graça.',
      'Omissão diante tortura não é crime.',
      'Tortura exige regime integral fechado sem progressão.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — art.1º Lei 9.455 literal. B erra: crime comum, não exige agente público (mas aumento se público). C erra: XLIII inafiançável sem graça/anistia. D erra: §2º omissão 1-4a detenção. E erra: SV 26 permite progressão, integral fechado inconstitucional.',
  },
  {
    id: 6,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'ECA Súmulas 492, 338, 383, 601 — socioeducativas',
    enunciado:
      'Sobre ECA e jurisprudência STJ, assinale a correta:',
    alternativas: [
      'Súmula 492 STJ: ato infracional análogo ao tráfico por si só não conduz obrigatoriamente à internação; Súmula 338: prescrição penal aplicável medidas socioeducativas; Súmula 383: foro domicílio detentor guarda para ações interesse menor; Súmula 601: juízo execução deve reavaliar no máximo a cada 6 meses internação adolescente art.121 §2º ECA.',
      'Tráfico análogo conduz obrigatoriamente internação.',
      'Prescrição não se aplica a socioeducativa.',
      'Internação não precisa reavaliação.',
      'Foro é sempre da capital.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — Súmulas 492, 338, 383, 601 literais, conectadas com art.121 ECA brevidade/excepcionalidade. B/C/D/E invertem.',
  },
  {
    id: 7,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Maria da Penha Súmulas 588, 589, 600 — medidas protetivas',
    enunciado:
      'Sobre Lei Maria da Penha e STJ, assinale a correta:',
    alternativas: [
      'Súmula 588 STJ: prática crime/contravenção com violência ou grave ameaça no ambiente doméstico impossibilita substituição pena privativa por restritiva direitos; Súmula 589: inaplicável insignificância nos crimes/contravenções contra mulher no âmbito doméstico; Súmula 600: para configuração violência doméstica art.5º Lei 11.340 não se exige coabitação; medidas protetivas urgência têm natureza cautelar satisfativa, independem BO, inquérito, ação penal/cível, sem prazo fixo, enquanto risco.',
      'Aplica-se insignificância em lesão leve doméstica.',
      'Pode substituir pena por cesta básica se violência doméstica.',
      'Exige-se coabitação para violência doméstica.',
      'Medida protetiva exige BO e tem prazo fixo 90 dias.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — Súmulas 588/589/600 + Tema 1.030 STJ medidas protetivas autônomas. B/C/D/E violam súmulas.',
  },
  {
    id: 8,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Estatuto Idoso transporte e BPC + LBI surdez unilateral',
    enunciado:
      'Sobre Estatuto Idoso e LBI, assinale a correta:',
    alternativas: [
      'EPI art.40: transporte interestadual 2 vagas gratuitas por veículo para idosos com renda até 2 SM e 50% desconto demais mesma condição exceder gratuitas; art.34 par único: BPC idoso não entra no cálculo renda familiar per capita para outro BPC idoso ou PcD; STJ Súmula 552: surdez unilateral não se qualifica como PcD para reserva vagas concurso público; STF ADI 5.357: escola privada não pode cobrar taxa extra para profissional apoio PcD.',
      'Transporte idoso é 1 vaga gratuita.',
      'BPC idoso impede outro BPC idoso na família.',
      'Surdez unilateral é PcD para cota.',
      'Escola pode cobrar adicional para apoio PcD.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — art.40 EPI 2 vagas + 50%, art.34 par único BPC não entra cálculo, Súmula 552 STJ surdez unilateral não PcD cota, ADI 5357 sem taxa extra. B/C/D/E invertem.',
  },
  {
    id: 9,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'CAT ONU art.1º D-I-F-A + art.2º jus cogens + art.3º non-refoulement + art.16',
    enunciado:
      'Julgue o item: a Convenção ONU contra Tortura (Dec.40/91) define tortura com 4 elementos — dor aguda física/mental, intencionalidade, finalidade específica (informação/confissão, castigo, intimidação/coação, discriminação) e agente público ou instigação/consentimento/aquiescência, excluindo sanções legítimas; proíbe absolutamente tortura em qualquer circunstância, inclusive guerra ou ordem superior, por ser jus cogens; veda expulsão, devolução ou extradição se razões substanciais risco tortura, considerando quadro sistemático grave e maciço; e proíbe outros tratamentos cruéis, desumanos ou degradantes com agente público, aplicando obrigações de ensino, revisão interrogatório, investigação ex officio e queixa protegida (arts.10-13), sem exigir finalidade específica para esses outros maus-tratos.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — arts.1º, 2º §§2-3, 3º §§1-2 e 16º §1º literais, com distinção tortura (com finalidade) × outros maus-tratos (sem finalidade) mas ambos com agente público e prevenção 10-13.',
  },
  {
    id: 10,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'CF art.5º XLII e XLIII — racismo vs tortura',
    enunciado:
      'Sobre CF art.5º XLII e XLIII, assinale a correta:',
    alternativas: [
      'XLII: racismo inafiançável e imprescritível (Lei 7.716/89, injúria racial art.2º-A, homotransfobia ADO 26); XLIII: tortura, tráfico ilícito entorpecentes, terrorismo e hediondos inafiançáveis e insuscetíveis graça/anistia, mas apenas racismo e ação grupos armados contra ordem constitucional são imprescritíveis (XLII e XLIV), tortura prescreve, embora hediondo equiparado com regime inicial fechado e progressão possível (SV 26).',
      'Tortura é imprescritível.',
      'Racismo é afiançável.',
      'Injúria racial prescreve.',
      'Homofobia não é racismo.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — CF literal. XLII racismo inafiançável imprescritível, XLIII tortura inafiançável sem graça/anistia mas prescreve (imprescritível só XLII e XLIV ação grupos armados). Lei 14.532/23 injúria racial imprescritível como racismo. ADO 26 homotransfobia racismo. SV 26 progressão tortura.',
  },
  {
    id: 11,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Status tratados + bloco constitucionalidade + norma mais benéfica',
    enunciado:
      'Julgue o item: tratados de direitos humanos aprovados pelo rito art.5º §3º CF integram bloco de constitucionalidade e podem ser parâmetro ADI; tratados de direitos humanos supralegais (sem rito §3º) não podem ser parâmetro ADI, mas permitem controle de convencionalidade difuso e concentrado, afastando lei ordinária conflitante por inconvencionalidade; e, em caso de conflito, prevalece norma mais favorável à vítima, conforme art.29 CADH, art.16 §2º CAT, art.41 ECA e art.121 LBI.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — RE 466.343 + bloco constitucionalidade + controle convencionalidade + diálogo fontes norma mais benéfica.',
  },
  {
    id: 12,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'ADPF 347 e SV 11 — sistema carcerário',
    enunciado:
      'Sobre ADPF 347 e SV 11, assinale a correta:',
    alternativas: [
      'ADPF 347 reconheceu estado de coisas inconstitucional no sistema penitenciário brasileiro por violação art.5º III, XLVII, XLVIII, XLIX CF e art.16 CAT (tratamento desumano/degradante), determinando audiências de custódia em 24h, liberação fundo penitenciário, etc.; SV 11 limita uso algemas a resistência, fundado receio fuga ou perigo integridade, justificada por escrito, sob pena nulidade e responsabilidade agente e Estado.',
      'ADPF 347 declarou sistema carcerário constitucional.',
      'Superlotação não é tratamento degradante.',
      'Algemas podem ser regra sem fundamentação.',
      'Audiência custódia não decorre ADPF 347.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — ADPF 347 + SV 11 literais. B/C/D/E negam.',
  },
  {
    id: 13,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Decreto 6.949/09 CDPD emenda + LBI + CC',
    enunciado:
      'Sobre CDPD e LBI, assinale a correta:',
    alternativas: [
      'CDPD aprovada pelo rito art.5º §3º (DL 186/08) e promulgada Dec.6.949/09 com status emenda constitucional, base LBI 13.146/15; LBI art.6º capacidade civil plena PcD, art.85 curatela só patrimonial não alcança corpo, sexualidade, matrimônio, privacidade, educação, saúde, trabalho, voto, art.28 §1º privadas sem taxa extra (ADI 5.357), art.93 Lei 8.213 dispensa PcD só após contratar outra PcD, só conta contratação direta sem aprendiz.',
      'CDPD é supralegal.',
      'PcD não pode casar.',
      'Curatela alcança voto e casamento.',
      'Escola pode cobrar taxa extra e aprendiz PcD conta para cota.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — CDPD emenda + LBI capacidade plena + curatela só patrimonial + ADI 5357 + cota só direta. B/C/D/E invertem.',
  },
  {
    id: 14,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'CF arts.203, 208, 227, 230 — BPC, educação, criança, idoso',
    enunciado:
      'Sobre CF arts.203, 208, 227, 230, assinale a correta:',
    alternativas: [
      'Art.203 V garante 1 SM BPC idoso e PcD sem meios; art.208 III AEE PcD preferencialmente rede regular; art.227 prioridade absoluta criança/adolescente/jovem com dever família, sociedade e Estado, programas prevenção PcD, punição severa abuso sexual; art.230 dever amparar idoso, gratuidade transporte coletivo urbano >65 anos §2º, enquanto EPI art.40 2 vagas gratuitas + 50% interestadual para >60 anos até 2 SM.',
      'BPC exige contribuição.',
      'AEE deve ser segregado, não preferencialmente regular.',
      'Art.227 só dever família.',
      'Gratuidade transporte urbano idoso é 60 anos CF.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — CF literal. B erra: BPC assistencial sem contribuição. C erra: preferencialmente rede regular. D erra: tríade família, sociedade, Estado. E erra: CF 65 anos urbano, EPI 60 anos interestadual.',
  },
  {
    id: 15,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Quadro integrado legislação correlata — 7.716, 9.455, 11.340, 12.288, 6.949, CF',
    enunciado:
      'Julgue o item: a Lei 7.716/89 tipifica racismo com pena 1-3 anos e 2-5 anos se por meios de comunicação e injúria racial 2-5 anos inafiançável imprescritível; a Lei 9.455/97 tipifica tortura 2-8 anos com causas aumento 1/6-1/3, lesão grave 4-10, morte 8-16, omissão 1-4 detenção, perda cargo dobro, inafiançável insuscetível graça/anistia; a Lei 11.340/06 prevê 5 tipos violência (física, psicológica, sexual, patrimonial, moral) e medidas protetivas sem BO, sem coabitação, sem prazo fixo; a Lei 12.288/10 prevê ações afirmativas, ensino história África, proteção religiões matriz africana e SINAPIR; o Decreto 6.949/09 tem status emenda constitucional; e a CF art.5º XLII racismo imprescritível inafiançável, XLIII tortura inafiançável sem graça/anistia, XLI punição discriminação.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — quadro integrado legislação correlata literal, com penas, tipos violência Maria da Penha, ações afirmativas Igualdade Racial, CDPD emenda, CF XLII/XLIII/XLI.',
  },
];
