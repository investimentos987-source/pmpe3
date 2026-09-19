import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'I · Definições e objetivos': '#c19a3d',
  'II · Compromissos e acompanhamento': '#2f6fb4',
  'III · Controvérsias e cláusulas finais': '#4b5563',
};

const A = 'I · Definições e objetivos';
const B = 'II · Compromissos e acompanhamento';
const C = 'III · Controvérsias e cláusulas finais';

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Definições de deficiência e discriminação',
    sintese: 'Deficiência transitória · discriminação até por percepção',
    bloco: A,
    destaque: true,
    resumo:
      'Art. I, § 1º — DEFICIÊNCIA: restrição física, mental ou sensorial, de natureza PERMANENTE OU TRANSITÓRIA, que limita a capacidade de exercer uma ou mais atividades essenciais da vida diária, causada ou agravada pela desigualdade de acesso às oportunidades do meio econômico e social. Art. I, § 2º — DISCRIMINAÇÃO contra as pessoas portadoras de deficiência: a) toda distinção, exclusão ou restrição baseada em deficiência, ANTECEDENTE de deficiência, CONSEQUÊNCIA de deficiência anterior ou PERCEPÇÃO de deficiência presente ou passada, que tenha o EFEITO OU O OBJETIVO de impedir ou anular o reconhecimento, gozo ou exercício dos direitos humanos e liberdades fundamentais; b) a mesma conduta que impeça ou anule o exercício, EM IGUALDADE DE OPORTUNIDADES, dos direitos nos campos político, econômico, social, cultural ou civil.',
    prova:
      'O artigo mais cobrado da Convenção. Três chaves: (i) a deficiência pode ser TRANSITÓRIA — não só permanente; (ii) a discriminação alcança antecedente, consequência anterior e até a PERCEPÇÃO de deficiência (basta que o agente acredite que a pessoa tem ou tinha deficiência); e (iii) basta o EFEITO ou o objetivo de anular direitos — a intenção não é requisito, o efeito concreto também configura.',
    pegadinha:
      'Restringir a deficiência à permanente; exigir deficiência atual comprovada (a percepção do agente basta); exigir dolo ou intenção discriminatória (o efeito discrimina, mesmo sem intenção).',
    exemplo:
      'Candidato com sequela visível de acidente é rejeitado em entrevista por o entrevistador SUPOR deficiência atual: mesmo sem deficiência presente, a conduta cai no § 2º — discriminação por percepção.',
    macete: 'Deficiência pode ser de passagem; discriminar até por achar que é (percepção).',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 2,
    titulo: 'Objetivos — prevenir, eliminar e integrar',
    sintese: 'Prevenir e eliminar a discriminação; integração plena',
    bloco: A,
    destaque: true,
    resumo:
      'Art. II — Os objetivos desta Convenção são PREVENIR e ELIMINAR todas as formas de discriminação contra as pessoas portadoras de deficiência e PROMOVER sua PLENA INTEGRAÇÃO na sociedade.',
    prova:
      'Artigo curtíssimo e cobrado de forma literal: os três verbos — PREVENIR, ELIMINAR e PROMOVER (a integração PLENA). A lógica é de inclusão em igualdade, não de assistência ou segregação protetiva.',
    pegadinha:
      'Trocar “integração plena” por “amparo assistencial” ou “proteção segregada”; omitir a PREVENÇÃO como objetivo autônomo.',
    exemplo:
      'Rampa de acesso em escola pública, vaga de cota em concurso e adaptação razoável no trabalho: os três expressam a integração plena do art. II.',
    macete: 'P.E.P.: Prevenir, Eliminar, Promover — a integração plena de todos.',
    bancas: ['Vunesp', 'AOCP', 'FCC'],
  },
  {
    n: 3,
    titulo: 'Compromissos dos Estados-partes',
    sintese: 'Medidas, cooperação e eliminação gradual de barreiras',
    bloco: B,
    destaque: true,
    resumo:
      'Art. III — Para alcançar os objetivos, os Estados-partes comprometem-se a: adotar medidas LEGISLATIVAS, SOCIAIS, EDUCACIONAIS e TRABALHISTAS necessárias para eliminar a discriminação e proporcionar a plena integração; colaborar na PREVENÇÃO de deficiências e no TRATAMENTO e REABILITAÇÃO; incluir a temática da deficiência nos PROGRAMAS DE DESENVOLVIMENTO; e estimular a eliminação GRADUAL de barreiras ARQUITETÔNICAS, DE TRANSPORTE e DE COMUNICAÇÃO, mediante campanhas de sensibilização.',
    prova:
      'O rol dos compromissos: medidas de quatro naturezas (legislativa, social, educacional e trabalhista), cooperação na prevenção/tratamento/reabilitação, inclusão nos programas de desenvolvimento e eliminação GRADUAL das barreiras — arquitetônicas, de transporte e de comunicação.',
    pegadinha:
      'Dizer que a Convenção exige eliminação IMEDIATA de todas as barreiras (ela admite gradualidade — quem endureceu os prazos foram a LBI e as leis internas posteriores); reduzir os compromissos a recomendações sem força obrigatória.',
    exemplo:
      'Plano municipal de acessibilidade com cronograma de rampas e ônibus adaptados: execução típica do compromisso de eliminação gradual do art. III.',
    macete: 'Compromissos: legislar, cooperar, incluir no desenvolvimento e derrubar barreiras — aos poucos.',
    bancas: ['FCC', 'Cebraspe', 'FGV'],
  },
  {
    n: 4,
    titulo: 'Cooperação e implementação',
    sintese: 'Cooperação técnica entre os Estados da OEA',
    bloco: 'II · Compromissos e acompanhamento',
    resumo:
      'Arts. IV e V — Os Estados-partes se comprometem a COOPERAR entre si e com a Organização dos Estados Americanos para a implementação da Convenção, mediante intercâmbio de informações, cooperação técnica e programas conjuntos, prestando conta das medidas adotadas.',
    prova:
      'A natureza da Convenção da Guatemala é COOPERATIVA: não cria tribunal nem sanções internacionais — a implementação se faz por cooperação técnica e intercâmbio entre Estados.',
    pegadinha:
      'Buscar órgão sancionatório ou tribunal na Convenção da Guatemala (o acompanhamento é político-técnico, pelo CEDDIS — art. VI).',
    exemplo:
      'Intercâmbio entre países da OEA sobre boas práticas de acessibilidade urbana e tecnologia assistiva.',
    macete: 'Guatemala convence, não condena: cooperação técnica entre iguais.',
    bancas: ['AOCP'],
  },
  {
    n: 6,
    titulo: 'Mecanismo de acompanhamento — CEDDIS',
    sintese: 'Comitê da OEA que acompanha a Convenção da Guatemala',
    bloco: B,
    destaque: true,
    resumo:
      'Art. VI — Os Estados-partes se comprometem a apresentar relatórios sobre as medidas legislativas, judiciais e administrativas adotadas para cumprir a Convenção. O ACOMPANHAMENTO é exercido pelo CEDDIS — Comitê para a Eliminação de Todas as Formas de Discriminação contra as Pessoas Portadoras de Deficiência —, comitê vinculado à ORGANIZAÇÃO DOS ESTADOS AMERICANOS, criado pela Assembleia Geral da OEA para monitorar a Convenção da Guatemala.',
    prova:
      'O ponto cobrado: o CEDDIS é comitê da OEA (não da ONU) e acompanha a CONVENÇÃO DA GUATEMALA, recebendo relatórios dos Estados-partes. Não confundir com o Comitê sobre os Direitos das Pessoas com Deficiência da ONU, que monitora a CDPD de 2006.',
    pegadinha:
      'Afirmar que o CEDDIS é comitê da ONU vinculado à CDPD; ou que recebe petições individuais e julga violações (é órgão de acompanhamento de relatórios, sem competência contenciosa).',
    exemplo:
      'O Brasil presta contas ao CEDDIS das políticas de cotas e acessibilidade adotadas no país.',
    macete: 'CEDDIS = OEA + Guatemala (relatórios). Comitê da ONU = CDPD de 2006.',
    bancas: ['FCC', 'Cebraspe', 'AOCP'],
  },
  {
    n: 7,
    titulo: 'Solução de controvérsias',
    sintese: 'Negociação diplomática entre Estados',
    bloco: C,
    resumo:
      'Art. VII — As controvérsias entre Estados-partes sobre a interpretação ou aplicação da Convenção serão resolvidas por NEGOCIAÇÃO DIPLOMÁTICA e demais meios pacíficos de solução.',
    prova:
      'Via DIPLOMÁTICA para controvérsias interestatais: a Convenção da Guatemala não prevê competência da Corte Interamericana para dirimir conflitos entre Estados sobre o seu cumprimento.',
    pegadinha:
      'Atribuir à Corte IDH a solução de controvérsias interestatais sobre a Convenção da Guatemala (o foro é a negociação diplomática).',
    exemplo:
      'Dois países divergem sobre regras de transporte de cães-guia: resolvem por canais diplomáticos, com apoio da OEA.',
    macete: 'Briga de Estado na Guatemala: diplomacia, não tribuna.',
    bancas: ['Vunesp'],
  },
  {
    n: 8,
    titulo: 'Cláusulas finais — norma mais favorável e adesão',
    sintese: 'Prevalece quem protege mais; depósito na OEA',
    bloco: C,
    resumo:
      'Arts. VIII a X — O bloco final dispõe que NADA na Convenção restringe convenções anteriores ou leis internas MAIS FAVORÁVEIS às pessoas portadoras de deficiência (cláusula da norma mais favorável); abre a Convenção à ASSINATURA e RATIFICAÇÃO dos Estados-membros da OEA e à ADESÃO de qualquer outro Estado; e designa a SECRETARIA-GERAL DA OEA como depositária dos instrumentos.',
    prova:
      'Dois pontos: a cláusula da NORMA MAIS FAVORÁVEL (a Convenção é piso, nunca teto — como no art. 41 da Convenção da Criança e art. 29 da CEDAW) e o DEPÓSITO junto à Secretaria-Geral da OEA (não da ONU).',
    pegadinha:
      'Apontar a ONU como depositária da Convenção da Guatemala (é a OEA); ou dizer que a Convenção revoga normas internas mais protetivas.',
    exemplo:
      'Se a lei brasileira garante cota superior à mínima prevista em tratado, prevalece a lei interna — pela cláusula da norma mais favorável.',
    macete: 'Prevalece quem protege mais — e o cofre da Convenção da Guatemala é a OEA.',
    bancas: ['AOCP', 'FCC'],
  },
];
