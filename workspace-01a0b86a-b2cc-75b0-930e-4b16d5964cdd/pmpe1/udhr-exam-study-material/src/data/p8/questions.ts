import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 2º · definição interamericana × ONU',
    enunciado:
      'Julgue o item: a definição de tortura da Convenção Interamericana para Prevenir e Punir a Tortura exige, como a Convenção da ONU contra a Tortura, dor ou sofrimento de natureza grave e participação de funcionário público, sendo insuficiente a conduta com fins de intimidação.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. A definição interamericana (art. 2º) é mais AMPLA: qualquer ato intentional que inflige dores ou sofrimentos físicos ou mentais — incluindo fins de investigação criminal, intimidação, castigo pessoal, prevenção, pena ou QUALQUER OUTRA FINALIDADE — sem exigir gravidade nem participação de funcionário público. A definição da ONU (Decreto 40/1991) é mais restrita: exige dor GRAVE, finalidade específica (informação/confissão, punição, intimidação ou coerção) e nexo com funcionário público ou consentimento estatal. E a Interamericana ainda alcança métodos de obliteração da personalidade, mesmo sem dor física.',
  },
  {
    id: 2,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Contexto · promulgação no Brasil',
    enunciado:
      'A Convenção Interamericana para Prevenir e Punir a Tortura e a Convenção das Nações Unidas contra a Tortura foram promulgadas no Brasil, respectivamente, pelos decretos:',
    alternativas: [
      'Decreto nº 98.386/1989 e Decreto nº 40/1991.',
      'Decreto nº 40/1991 e Decreto nº 98.386/1989.',
      'Decreto nº 592/1992 e Decreto nº 678/1992.',
      'Decreto nº 65.810/1969 e Decreto nº 4.738/2003.',
      'Decreto nº 9.455/1997 e Decreto nº 5.885/2006.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Convenção INTERAMERICANA (OEA, Cartagena, 1985) = DECRETO 98.386/1989; Convenção da ONU contra Tortura (1984) = DECRETO 40/1991. Lei 9.455/1997 é a lei interna do crime de tortura — não é decreto. Os demais são distrações da própria coleção: Dec. 592/92 (PIDCP), Dec. 678/92 (Pacto de San José), Dec. 65.810/69 (CIEFDR), Dec. 5.885/2006 (OPCAT, protocolo facultativo da CAT).',
  },
  {
    id: 3,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 3º e 4 · responsáveis e hierarquia',
    enunciado: 'Nos termos da Convenção Interamericana para Prevenir e Punir a Tortura, é correto afirmar:',
    alternativas: [
      'o funcionário público que, podendo impedir a prática de tortura, não a impede, responde criminalmente, e o fato de ter-se agido por ordem de superior hierárquico não isenta da responsabilidade penal.',
      'a responsabilidade penal só ocorre quando há execução direta, sendo a mera omissão de impedir sempre isenta.',
      'a obediência hierárquica isenta o subordinado, restando a responsabilidade apenas do superior.',
      'o crime de tortura só pode ser praticado por agentes públicos, vedada a conduta de particulares.',
      'em caso de perigo do detido, a obediência hierárquica autoriza a prática de tortura preventiva.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. O art. 3º responde também pela omissão (o funcionário público que podia impedir e não impediu) e o art. 4º é categórico: a ordem de superior NÃO isenta a responsabilidade penal — nem do subordinado nem do superior. O crime não é exclusivo de agentes públicos (o particular pode responder por instigação). E o caráter perigoso do detido jamais justifica tortura (art. 5º).',
  },
  {
    id: 4,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 5º · justificativas excluídas',
    enunciado:
      'Julgue o item: estando o país em estado de emergência ou o detido sendo considerado perigoso, a tortura pode ser admitida como medida necessária para preservar a ordem pública.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 1,
    comentario:
      'ERRADO. O art. 5º é absoluto: não se pode invocar nem admitir como justificativa estado de guerra, ameaça de guerra, estado de sítio, emergência, conflito interno, suspensão de garantias constitucionais, instabilidade política ou calamidades públicas — e, expressamente, nem o caráter perigoso do detido, a falta de prova ou a malignidade da alegação. A proibição da tortura é incondicionada (jus cogens).',
  },
  {
    id: 5,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Art. 8º · direito da vítima',
    enunciado:
      'Assinale a alternativa que reproduz corretamente o direito da pessoa que alega ser vítima de tortura, na forma do art. 8º da Convenção Interamericana.',
    alternativas: [
      'Apenas reparação pecuniária, vedada a autoridade de saúde psicológica.',
      'Direito de se submeter a um exame do seu caso por autoridade competente e independente, além de reparação e meios para recuperação de sua saúde, dignidade e honra.',
      'Direito a exame pela mesma corporação responsável pela prática, com reparação apenas patrimonial.',
      'Simples medida de gratuidade judiciária, sem qualquer obrigação de exame.',
      'Direito de investigar o caso pessoalmente, substituindo a autoridade competente.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. O art. 8º garante exame do caso por AUTORIDADE COMPETENTE E INDEPENDENTE (não pela própria corporação que torturou) e REPARAÇÃO com meios para recuperação da SAÚDE, DIGNIDADE e HONRA — mais do que dano material simples.',
  },
  {
    id: 6,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 12 a 14 · mecanismos universais',
    enunciado:
      'Sobre os mecanismos de perseguição penal previstos na Convenção Interamericana para Prevenir e Punir a Tortura, assinale a alternativa INCORRETA.',
    alternativas: [
      'Todo Estado tomará medidas para estabelecer sua jurisdição criminal sobre o crime, ainda que praticado fora de seu território (jurisdição universal).',
      'Nenhum Estado poderá expulsar, devolver ou extraditar pessoa quando houver razões bem fundamentadas para crer que estará em perigo de ser torturada no país de destino.',
      'O Estado que decidir não extraditar o acusado de tortura deve submeter o caso às suas próprias autoridades competentes para processo, como se o crime tivesse sido cometido em sua jurisdição (aut dedere aut judicare).',
      'A extradição para país em que haja risco de tortura é obrigatória quando houver tratado extradicionário, ainda que se confira a perseguição ao território.',
    ],
    gabarito: 3,
    comentario:
      'Gabarito: D (a incorreta). A regra é exatamente o oposto: a NÃO DEVOLUÇÃO (non-refoulement) é incondicional quando houver razões bem fundamentadas de risco de tortura no país de destino — nenhum tratado de extradição a afasta. Os mecanismos de jurisdição universal (art. 12), não devolução (art. 13) e aut dedere aut judicare (art. 14) configuram a perseguição penal universal.',
  },
  {
    id: 7,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Quadro CIAPTT × ONU × Lei 9.455/97',
    enunciado:
      'Sobre a tortura no ordenamento internacional e brasileiro, assinale a afirmativa correta.',
    alternativas: [
      'A definição interamericana exige funcionário público e dor grave, sendo mais restrita que a da Convenção da ONU.',
      'A Convenção da ONU tem definição mais ampla que a interamericana, pois abrange qualquer finalidade.',
      'A definição interamericana é mais ampla que a da Convenção da ONU, pois não exige a participação de agente público nem dor grave, alcançando qualquer finalidade; e a Lei 9.455/1997 tipifica o crime de tortura no Brasil como ação pública incondicionada, imprescritível e inafiançável.',
      'A Lei 9.455/1997 prevê tortura apenas por agentes públicos, vedada a relação de particular.',
      'A Lei 9.455/1997 é menos ampla que a Convenção da ONU por abarcar apenas atos sem resultados qualificadores.',
    ],
    gabarito: 2,
    comentario:
      'Gabarito: C. Reúne o eixo central da Parte: CIAPTT (qualquer dor, qualquer fim, qualquer mão) é mais ampla que a CAT/ONU (dor grave + finalidade específica + funcionário público ou consentimento estatal); e a Lei 9.455/1997 tipifica a tortura como crime comum — ação penal pública incondicionada, imprescritível e inafiançável — sendo qualquer pessoa sujeito ativo, sem exigir natureza funcional (embora o funcionário tenha condição específica quando age por dever). As alternativas A e B invertem as réguas.',
  },
  {
    id: 8,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 14 · aut dedere aut judicare',
    enunciado:
      'Julgue o item: segundo a Convenção Interamericana, se o Estado parte não conceder a extradição de pessoa acusada de tortura, deverá submeter o caso às suas próprias autoridades competentes para processo, como se o crime tivesse ocorrido em sua jurisdição.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO. É a regra do princípio aut dedere aut judicare — extraditar ou julgar — expressa no art. 14 da Convenção Interamericana. O Estado que acolhe um acusado de tortura não pode oferecer-lhe refúgio de impunidade: ou extradita, ou processa com a mesma gravidade como se o crime tivesse ocorrido em sua jurisdição.',
  },
  {
    id: 9,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Caso Vladimir Herzog · Corte IDH',
    enunciado:
      'Sobre o caso Vladimir Herzog julgado pela Corte Interamericana de Direitos Humanos, é correto afirmar que:',
    alternativas: [
      'a Corte condenou o Brasil, em 2018, por violação do direiro à vida, à integridade pessoal e aos direitos à verdade e à justiça, determinando a investigação dos fatos, a divulgação pública da sentença e medidas de reparação.',
      'a Corte absolveu o Brasil, por reconhecer que os fatos ocorreram antes da ratificação.',
      'o caso foi julgado pela Corte Europeia e não pela Interamericana.',
      'a Corte determinou apenas indenização pecuniária, sem exigir investigação.',
      'o caso Herzog não tombou em instância internacional por impossibilidade afativa de extradição do Estado venezuelano.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A. Em 2018, a Corte IDH condenou o Brasil no caso Vladimir Herzog — jornalista torturado e morto no DOI-CODI em 1975, durante a ditadura — pelas violações do direito à vida, à integridade pessoal, à verdade, à justiça e às garantias judiciais, ordenando: investigação dos fatos, punição dos responsáveis, divulgação pública da sentença (na mídia de circulação nacional e em São Paulo) e criação de projeto de jornalismo em homenagem à liberdade de imprensa. É o caso brasileiro emblemático da responsabilidade por tortura da ditadura.',
  },
  {
    id: 10,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Lei 9.455/97 · natureza do crime de tortura',
    enunciado: 'Sobre o crime de tortura definido pela Lei nº 9.455/1997, assinale a afirmativa correta.',
    alternativas: [
      'O crime de tortura previsto nela é crime hediondo, por força da própria lei de tipificação.',
      'O crime de tortura é de ação penal pública incondicionada, imprescritível e inafiançável, não se enquadrando, entretanto, automaticamente, no rol dos crimes hediondos da Lei 8.072/1990.',
      'O crime de tortura apenas pode ser praticado por funcionários públicos.',
      'O crime de tortura é imprescritível, mas admite fiança em todas as suas formas.',
      'Os resultados de lesão grave e morte não majoram a pena, que é sempre de detenção.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B. A Lei 9.455/1997 define o crime de tortura como de AÇÃO PENAL PÚBLICA INCONDICIONADA, IMPRESCRITÍVEL E INAFIANÇÁVEL (art. 5º) — mas não constitui crime hediondo por força do rol da Lei 8.072/1990 (a qualificação de “hedionda” é erro recorrente das bancas: inafiançável e imprescritível ≠ hediondo). Os crimes envolvem qualquer sujeito ativo (comum), embora a conduta abranjas funcionários públicos, e os resultados de lesão grave e morte qualificam a pena de reclusão.',
  },
];
