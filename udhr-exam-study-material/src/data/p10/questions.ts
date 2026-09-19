import type { Questao } from '../shared';

export const questoes: Questao[] = [
  {
    id: 1,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 2º — Conceito de PcD e modelo social',
    enunciado:
      'Julgue o item: considera-se pessoa com deficiência, nos termos da Lei nº 13.146/2015, aquela que tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas, sendo a avaliação da deficiência, quando necessária, biopsicossocial, realizada por equipe multiprofissional e interdisciplinar.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO. Art. 2º, caput e §1º, literal. A LBI consagra o MODELO SOCIAL/BIOPSICOSSOCIAL: impedimento de longo prazo + barreiras = obstrução. A avaliação biopsicossocial considera: I funções e estruturas do corpo, II fatores socioambientais/psicológicos/pessoais, III limitação desempenho atividades, IV restrição participação. Trocar “longo prazo” por “permanente” ou dizer que avaliação é só médica torna o item ERRADO — mas aqui está correto.',
  },
  {
    id: 2,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Art. 4º — Discriminação e adaptação razoável',
    enunciado:
      'Nos termos da Lei nº 13.146/2015, considera-se discriminação em razão da deficiência:',
    alternativas: [
      'toda forma de distinção, restrição ou exclusão, por ação ou omissão, que tenha o propósito ou o efeito de prejudicar, impedir ou anular o reconhecimento ou o exercício dos direitos e liberdades fundamentais de pessoa com deficiência, incluindo a recusa de adaptações razoáveis e de fornecimento de tecnologias assistivas.',
      'apenas a conduta dolosa, com intenção específica de prejudicar pessoa com deficiência, excluída a recusa de adaptações razoáveis.',
      'toda distinção baseada em deficiência, inclusive as ações afirmativas e cotas destinadas a promover igualdade.',
      'somente a conduta praticada pelo Estado, não alcançando particulares.',
      'a conduta que, embora prejudique PcD, seja justificada por critério econômico.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — art. 4º, §1º, literal. Destaques: ação OU omissão, propósito OU efeito (basta efeito), e INCLUI recusa de adaptações razoáveis e TA. B erra ao exigir dolo e excluir adaptação razoável; C erra porque ação afirmativa NÃO é discriminação (§2º); D erra porque particulares também discriminam; E erra porque justificativa econômica não afasta discriminação.',
  },
  {
    id: 3,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Arts. 6º e 12 — Capacidade civil e consentimento',
    enunciado:
      'Sobre a capacidade civil e o consentimento da pessoa com deficiência, de acordo com a Lei Brasileira de Inclusão, assinale a afirmativa correta.',
    alternativas: [
      'A deficiência afeta a plena capacidade civil, impedindo a pessoa com deficiência de casar-se, constituir união estável e exercer guarda, tutela, curatela e adoção.',
      'A pessoa com deficiência não poderá ser obrigada a se submeter a intervenção clínica ou cirúrgica, a tratamento ou a institucionalização forçada, sendo seu consentimento prévio, livre e esclarecido indispensável para tratamento, procedimento, hospitalização e pesquisa científica; em caso de curatela, deve ser assegurada sua participação no maior grau possível.',
      'A esterilização compulsória da pessoa com deficiência é permitida mediante autorização judicial.',
      'A pesquisa científica envolvendo PcD em curatela é livre, independentemente de benefício direto.',
      'O consentimento da PcD pode ser suprido livremente pela família, sem forma legal.',
    ],
    gabarito: 1,
    comentario:
      'Gabarito: B — arts. 6º, 11 e 12. Art. 6º: deficiência NÃO afeta plena capacidade civil (pode casar, união estável, guarda, tutela, curatela, adoção). Art. 11: vedada intervenção/tratamento/institucionalização forçada. Art. 12: consentimento prévio, livre e esclarecido indispensável; curatela participa ao máximo. A erra (capacidade plena); C erra (esterilização compulsória VEDADA, art. 6º, IV); D erra (pesquisa com curatelado é EXCEPCIONAL, com benefício direto e sem alternativa); E erra (suprimento na forma da lei, não livre pela família).',
  },
  {
    id: 4,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Art. 9º — Atendimento prioritário',
    enunciado:
      'De acordo com o art. 9º da Lei nº 13.146/2015, a pessoa com deficiência tem direito a atendimento prioritário, sobretudo com a finalidade de, EXCETO:',
    alternativas: [
      'proteção e socorro em quaisquer circunstâncias.',
      'recebimento de restituição de imposto de renda.',
      'tramitação processual e procedimentos judiciais e administrativos em que for parte ou interessada, em todos os atos e diligências.',
      'atendimento em todas as instituições e serviços de atendimento ao público.',
      'obtenção gratuita de medicamentos de uso continuado, independentemente de protocolo clínico.',
    ],
    gabarito: 4,
    comentario:
      'Gabarito: E — art. 9º lista 7 finalidades: I proteção e socorro, II atendimento instituições públicas, III recursos humanos/tecnológicos, IV pontos parada/estações/terminais acessíveis e segurança embarque/desembarque, V acesso informações e comunicação acessível, VI restituição IR, VII tramitação processual (parte ou interessada). Medicamentos não está no art. 9º (está no art. 18, §4º, XI). Além disso, §1º: direitos extensivos a acompanhante/atendente, EXCETO VI e VII; §2º: emergência condicionada a protocolos médicos.',
  },
  {
    id: 5,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 28 — Educação inclusiva e instituições privadas',
    enunciado:
      'Julgue o item: às instituições privadas de ensino, de qualquer nível e modalidade, aplica-se obrigatoriamente o disposto nos incisos I, II, III, V, VII, VIII, IX, X, XI, XII, XIII, XIV, XV, XVI, XVII e XVIII do caput do art. 28 da Lei nº 13.146/2015, sendo vedada a cobrança de valores adicionais de qualquer natureza em suas mensalidades, anuidades e matrículas no cumprimento dessas determinações.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO. Art. 28, §1º, literal. A rede privada deve cumprir sistema inclusivo, AEE, medidas individualizadas, estudo de caso, participação família, práticas pedagógicas inclusivas, formação professores, Libras/Braille/TA, acesso superior, conteúdos curriculares sobre PcD, jogos/lazer, acessibilidade edificações, profissional apoio escolar e articulação intersetorial, SEM cobrança adicional. A proibição de taxa extra é o ponto mais cobrado. STF declarou constitucional (ADI 5357).',
  },
  {
    id: 6,
    banca: 'Vunesp',
    formato: 'multipla',
    tema: 'Art. 30 — Processos seletivos',
    enunciado:
      'Nos processos seletivos para ingresso e permanência em cursos de IES e educação profissional e tecnológica, a Lei nº 13.146/2015 determina:',
    alternativas: [
      'atendimento preferencial à PcD, formulário com campos para recursos de acessibilidade e TA, provas em formatos acessíveis, recursos previamente solicitados e escolhidos pelo candidato, dilação de tempo inclusive nas atividades acadêmicas, critérios de avaliação que considerem singularidade linguística da PcD e tradução completa do edital em Libras.',
      'apenas atendimento preferencial, sem outras medidas.',
      'dilação de tempo apenas na prova, vedada nas atividades acadêmicas.',
      'tradução do edital apenas em Braille, dispensada Libras.',
      'critérios de avaliação idênticos para todos, vedada consideração da singularidade linguística.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — art. 30, I a VII, literal. Destaques: dilação vale para exame E atividades acadêmicas (mediante solicitação e comprovação); singularidade linguística (surdos: português L2) deve ser considerada; edital completo em Libras. B a E omitem ou invertem medidas.',
  },
  {
    id: 7,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 34 a 37 — Trabalho',
    enunciado:
      'Sobre o direito ao trabalho da pessoa com deficiência, nos termos da LBI, é correto afirmar:',
    alternativas: [
      'É vedada restrição ao trabalho da PcD e qualquer discriminação em razão de sua condição, inclusive nas etapas de recrutamento, seleção, contratação, admissão, exames admissional e periódico, permanência no emprego, ascensão profissional e reabilitação profissional, bem como exigência de aptidão plena; constitui modo de inclusão a colocação competitiva, com acessibilidade, TA e adaptação razoável, podendo ocorrer por meio de trabalho com apoio.',
      'É permitida exigência de aptidão plena para todos os cargos.',
      'A colocação competitiva dispensa acessibilidade e adaptação razoável.',
      'O trabalho com apoio é segregado e não se articula com políticas públicas.',
      'Entidades contratadas para processo seletivo privado não precisam observar a LBI.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts. 34, §3º e 37, literal. B erra: aptidão plena VEDADA. C erra: colocação competitiva EXIGE acessibilidade, TA e adaptação razoável. D erra: trabalho com apoio tem diretrizes de suporte individualizado, agente facilitador, respeito vocação, apoio empregador, avaliações periódicas, articulação intersetorial e participação sociedade civil. E erra: art. 38 obriga entidade contratada para processo seletivo público OU privado a observar LBI e normas acessibilidade.',
  },
  {
    id: 8,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Arts. 40 e 41 — BPC e aposentadoria',
    enunciado:
      'Assinale a alternativa correta sobre assistência e previdência social da pessoa com deficiência, nos termos da Lei nº 13.146/2015:',
    alternativas: [
      'É assegurado à PcD que não possua meios para prover subsistência nem de tê-la provida por família benefício mensal de 1 salário mínimo, nos termos da LOAS (Lei 8.742/1993), e à PcD segurada do RGPS direito à aposentadoria nos termos da LC 142/2013.',
      'O BPC exige contribuição previdenciária prévia de 12 meses.',
      'A aposentadoria da PcD é regida pela CLT, sem lei complementar específica.',
      'O BPC corresponde a meio salário mínimo.',
      'Assistência e previdência são idênticas, ambas exigem contribuição.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts. 40 e 41, literais. BPC = assistencial, NÃO exige contribuição, 1 SM, LOAS; aposentadoria PcD = previdenciária, exige qualidade segurado RGPS, LC 142/2013 (requisitos diferenciados por grau deficiência). B, C, D, E trocam valores, exigências e naturezas.',
  },
  {
    id: 9,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Arts. 26 e 22 — Notificação e acompanhante',
    enunciado:
      'Julgue os itens: I – Os casos de suspeita ou confirmação de violência contra PcD são objeto de notificação compulsória pelos serviços de saúde públicos e privados à autoridade policial, ao MP e aos Conselhos dos Direitos da PcD; II – À PcD internada ou em observação é assegurado direito a acompanhante ou atendente pessoal em tempo integral, devendo eventual impossibilidade ser justificada por escrito pelo profissional de saúde responsável, com adoção de providências para suprir a ausência.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — ambos os itens literais. I: art. 26, caput — suspeita OU confirmação, serviços públicos E privados, 3 destinos: polícia + MP + Conselhos PcD; conceito violência: ação/omissão, público/privado, morte/dano/sofrimento físico/psicológico. II: art. 22, caput e §§1º-2º — internada OU observação, acompanhante OU atendente, tempo integral, impossibilidade justificada por escrito e suprida.',
  },
  {
    id: 10,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 47, 51 e 52 — Estacionamento, táxi e locadoras',
    enunciado:
      'Sobre transporte e mobilidade, a Lei nº 13.146/2015 estabelece, respectivamente, para estacionamento, táxis e locadoras:',
    alternativas: [
      '2% das vagas reservadas, com mínimo 1 vaga sinalizada próxima a acesso de pedestres, credencial fornecida por órgãos de trânsito válida nacionalmente, infração gravíssima; 10% frota táxi acessível, vedada cobrança diferenciada; locadoras 1 veículo adaptado a cada 20, com câmbio automático, direção hidráulica, vidros elétricos e comandos manuais de freio e embreagem.',
      '5% vagas estacionamento, 5% táxi e 1/10 locadoras.',
      '1% vagas, táxi isento e locadoras 1/50.',
      '2% vagas sem mínimo, táxi 20% e locadoras sem requisitos.',
      'Reserva apenas em estacionamento público, não em privado de uso coletivo.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts. 47 (2% vagas, mínimo 1, próximas acesso pedestres, sinalizadas, credencial órgão trânsito, válida todo território, infração art. 181 XX CTB gravíssima), 51 (10% táxi acessível, sem tarifa diferenciada, incentivos fiscais) e 52 (1/20 locadoras, requisitos: câmbio automático, direção hidráulica, vidros elétricos, comandos manuais freio e embreagem). B a E trocam percentuais, requisitos e abrangência (art. 47 vale para aberto ao público, uso público, privado uso coletivo E vias públicas).',
  },


  {
    id: 11,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 53-60 — Acessibilidade e desenho universal',
    enunciado:
      'Sobre acessibilidade, nos termos da LBI, assinale a correta:',
    alternativas: [
      'Acessibilidade é direito que garante à PcD ou com mobilidade reduzida viver de forma independente e exercer cidadania e participação social; desenho universal é regra geral e, quando comprovadamente não possa ser empreendido, deve ser adotada adaptação razoável; concessão e renovação de alvará de funcionamento e emissão de carta de habite-se são condicionadas à observação e certificação das regras de acessibilidade.',
      'Acessibilidade é mera recomendação técnica, sem exigibilidade.',
      'Desenho universal é exceção, sendo a adaptação razoável a regra geral.',
      'Alvará de funcionamento independe de acessibilidade, exigindo-se apenas habite-se.',
      'Projetos de meio físico, transporte e informação podem ignorar desenho universal desde a concepção.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts. 53, 55 §1º §2º e 60 §1º §2º, literais. Art. 53 define acessibilidade como direito. Art. 55: DU regra geral, adaptação razoável exceção comprovada, e desde a concepção políticas públicas devem considerar DU, com inclusão curricular e pesquisa. Art. 60: planos diretores, códigos obras, EIV, fiscalização e prevenção incêndio orientam-se por acessibilidade; alvará e habite-se condicionados. B a E invertem regra/exceção e dispensam exigências.',
  },
  {
    id: 12,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Arts. 63, 67, 68, 74 — Internet, radiodifusão, livros e TA',
    enunciado:
      'Nos termos da LBI, sobre informação, comunicação e tecnologia assistiva, é correto afirmar:',
    alternativas: [
      'É obrigatória acessibilidade em sítios da internet de empresas com sede ou representação no País e órgãos de governo, com símbolo em destaque; telecentros comunitários com recursos federais e lan houses devem ser acessíveis e garantir 10% computadores com recursos para PcD visual, mínimo 1; serviços de radiodifusão devem permitir legenda oculta, janela Libras e audiodescrição; poder público deve adotar cláusula de impedimento em editais de compras de livros para editoras que não ofertem formatos acessíveis; e é garantido à PcD acesso à TA que maximize autonomia, mobilidade e qualidade de vida.',
      'Sites privados estão dispensados de acessibilidade.',
      'Telecentros e lan houses precisam apenas de 1% computadores acessíveis.',
      'Radiodifusão exige apenas legenda, dispensando Libras e audiodescrição.',
      'Editoras que não oferecem formato acessível podem participar normalmente de editais de compra de livros.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts. 63 caput §1º §2º §3º (10% computadores), 67 I-III (legenda oculta, janela Libras, audiodescrição), 68 §1º (cláusula impedimento), 74 (TA maximiza autonomia). B erra: empresas privadas também obrigadas. C erra: 10%, não 1%. D erra: tripé cumulativo. E erra: §1º veda participação editora sem acessível.',
  },
  {
    id: 13,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 75 — Plano de TA e Art. 73-A — Campanhas acessíveis',
    enunciado:
      'Julgue o item: o poder público desenvolverá plano específico de medidas para TA, renovado a cada 4 anos, avaliado pelo menos a cada 2 anos, com finalidades de facilitar crédito especializado com linhas subsidiadas, agilizar importação, fomentar pesquisa e produção nacional, eliminar/reduzir tributação e facilitar inclusão de novos recursos de TA no SUS; e campanhas sociais, preventivas e educativas devem ser acessíveis à PcD.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — art. 75 caput I-V e par único (4 anos renovação, 2 anos avaliação, 5 eixos C-I-P-T-S) + art. 73-A (Lei 14.863/2024) campanhas acessíveis. A banca costuma trocar prazos 4 e 2 ou omitir tributação/SUS.',
  },
  {
    id: 14,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Art. 76 — Participação política',
    enunciado:
      'Julgue o item: é assegurado à PcD direito de votar e ser votada, com garantia de procedimentos, instalações, materiais e equipamentos de votação acessíveis e de fácil compreensão, vedada instalação de seções exclusivas para PcD; propaganda eleitoral obrigatória e debates na TV devem possuir recursos de legenda oculta, janela Libras e audiodescrição; e, quando necessário e a seu pedido, a PcD pode ser auxiliada na votação por pessoa de sua escolha.',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — art. 76 §1º I (acessível, fácil compreensão, VEDADA seção exclusiva), III (propaganda eleitoral e debates com art.67), IV (auxiliada por pessoa de sua escolha). §2º ainda garante participação em ONGs, partidos e organizações representativas. Pegadinha: dizer que seção exclusiva é permitida ou que auxílio deve ser mesário — ERRADO.',
  },
  {
    id: 15,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 79-87 — Justiça e capacidade: curatela x TDA',
    enunciado:
      'Sobre acesso à Justiça e capacidade civil, nos termos da LBI e CC alterado, assinale a correta:',
    alternativas: [
      'Curatela afeta tão somente atos de natureza patrimonial e negocial, não alcançando direito ao próprio corpo, sexualidade, matrimônio, privacidade, educação, saúde, trabalho e voto; é extraordinária, proporcional, dura menor tempo possível, com sentença motivada e contas anuais; é facultada tomada de decisão apoiada, em que PcD elege pelo menos 2 pessoas idôneas, com vínculos e confiança, mediante termo com limites, compromissos e prazo, com oitiva pessoal do requerente e apoiadores por juiz assistido por equipe multidisciplinar e MP, com validade perante terceiros se nos limites.',
      'Curatela alcança direitos existenciais como voto e casamento, retirando-os automaticamente.',
      'Tomada de decisão apoiada exige apenas 1 apoiador e retira capacidade da pessoa apoiada.',
      'Serviços notariais podem exigir curatela para lavrar escritura de PcD.',
      'Documentos oficiais exigem termo de curatela para emissão.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts. 84 §3º §4º, 85 caput §1º §2º, 86, 83, 116 (CC art.1.783-A). B erra: §1º art.85 veda alcance a existenciais. C erra: TDA mínimo 2 apoiadores, mantém capacidade, validade terceiros se nos limites (§4º). D erra: art.83 veda negar/obstar serviços notariais por deficiência e reconhece capacidade plena, descumprimento = discriminação. E erra: art.86 veda exigir curatela para documentos oficiais.',
  },
  {
    id: 16,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Arts. 88-91 — Crimes LBI',
    enunciado:
      'Sobre os crimes previstos na LBI, assinale a afirmativa correta:',
    alternativas: [
      'Praticar, induzir ou incitar discriminação por deficiência: reclusão 1-3 anos e multa, aumentada 1/3 se vítima sob cuidado do agente e 2-5 anos se por meios de comunicação; apropriar-se/desviar bens, proventos, pensão, benefícios, remuneração ou rendimento PcD: reclusão 1-4 anos; abandonar PcD em hospital, casa saúde ou abrigo: reclusão 2-5 anos (Lei 15.163/2025), 3-7 se lesão grave, 8-14 se morte, mesmas penas para quem não prover necessidades básicas; reter/utilizar cartão magnético ou documento PcD para vantagem indevida: detenção 6m-2a, aumento 1/3 se tutor/curador.',
      'Discriminação por deficiência é contravenção com detenção 6 meses.',
      'Apropriação de BPC por curador não tem aumento de pena.',
      'Abandono de PcD ainda tem pena 6 meses a 3 anos, sem qualificadoras.',
      'Retenção de cartão é atípica se visar vantagem indevida.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts. 88 (1-3a, 2-5a mídia, +1/3 cuidado, busca/apreensão/interdição antes, destruição depois), 89 (1-4a, +1/3 tutor/curador/síndico etc/ofício), 90 (2-5a atual, 3-7 grave, 8-14 morte, + não prover), 91 (6m-2a detenção, +1/3 tutor/curador). B a E trocam penas, ignoram aumentos e qualificadoras da Lei 15.163/2025.',
  },
  {
    id: 17,
    banca: 'AOCP',
    formato: 'multipla',
    tema: 'Arts. 92-95 — Cadastro, auxílio-inclusão e atendimento domiciliar',
    enunciado:
      'Sobre Cadastro-Inclusão, auxílio-inclusão e atendimento domiciliar, nos termos da LBI, é correto afirmar:',
    alternativas: [
      'Cadastro-Inclusão é registro público eletrônico georreferenciado para coletar, processar, sistematizar e disseminar informações socioeconômicas da PcD e barreiras, administrado pelo Executivo federal, com dados integrados de censos e políticas públicas, confidencialidade e disseminação em formatos acessíveis; auxílio-inclusão é devido à PcD moderada ou grave que receba BPC e passe a exercer atividade remunerada como segurado obrigatório RGPS ou que tenha recebido BPC nos últimos 5 anos e exerça atividade RGPS; é vedado exigir comparecimento de PcD perante órgãos públicos quando deslocamento imponha ônus desproporcional, com atendimento domiciliar e perícia INSS domiciliar garantida.',
      'Cadastro-Inclusão divulga dados pessoais sem salvaguarda.',
      'Auxílio-inclusão é devido a PcD leve que recebe BPC.',
      'É permitido exigir comparecimento mesmo com ônus desproporcional.',
      'Perícia INSS domiciliar é vedada.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — arts. 92 caput §1º-§6º, 94 I-II, 95 caput I-II e par único. B erra: §4º exige confidencialidade. C erra: só moderada/grave. D e E erram: art.95 veda exigir comparecimento com ônus desproporcional e garante atendimento domiciliar inclusive perícia INSS.',
  },
  {
    id: 18,
    banca: 'Cebraspe',
    formato: 'certo-errado',
    tema: 'Arts. 98, 101, 103 — Lei 7.853 crimes, Lei 8.213 cota, improbidade',
    enunciado:
      'Julgue o item: a Lei 7.853/89 prevê crime de recusar, cobrar valores adicionais, suspender, procrastinar, cancelar ou cessar inscrição de aluno por deficiência, com reclusão 2-5 anos; a Lei 8.213 determina que dispensa de PcD ou reabilitado ao final de contrato >90 dias ou imotivada por prazo indeterminado só após contratação de outro PcD/reabilitado, que a reserva considera apenas contratação direta excluído aprendiz PcD e que no requerimento de benefício INSS não se exige termo de curatela; e deixar de cumprir requisitos de acessibilidade é ato de improbidade que atenta contra princípios (art. 11, IX, Lei 8.429).',
    alternativas: ['Certo', 'Errado'],
    gabarito: 0,
    comentario:
      'CERTO — art.98 (Lei 7.853 art.8º I, 2-5a), art.101 (Lei 8.213 art.93 §1º dispensa só com outra contratação, §3º só direta excluído aprendiz, art.110-A sem termo curatela), art.103 (Lei 8.429 art.11 IX). Aumento 1/3 se vítima <18 e se urgência/emergência (art.8º §1º e §4º Lei 7.853) complementa, mas item já correto.',
  },
  {
    id: 19,
    banca: 'FGV',
    formato: 'multipla',
    tema: 'Arts. 114-116 — CC: capacidade e TDA',
    enunciado:
      'Sobre as alterações do Código Civil pela LBI, assinale a correta:',
    alternativas: [
      'São absolutamente incapazes apenas menores de 16 anos; são relativamente incapazes ébrios habituais, viciados em tóxico e aqueles que por causa transitória ou permanente não puderem exprimir vontade; PcD pode testemunhar em igualdade com TA; PcD mental/intelectual em idade núbia pode contrair matrimônio expressando vontade diretamente ou por meio de responsável/curador; processo de curatela pode ser promovido pela própria pessoa, com entrevista pessoal por juiz assistido por equipe multidisciplinar, limites segundo potencialidades circunscritos a art.1.782, escolha curador considerando vontade/preferências, ausência conflito, proporcionalidade, com possibilidade curatela compartilhada e preservação convivência familiar; e foi criado Capítulo III Tomada de Decisão Apoiada (art.1.783-A) com 2 apoiadores idôneos vínculos confiança, termo, oitiva, validade terceiros, contra-assinatura, divergência com risco vai a juiz ouvido MP, denúncia, destituição, término a qualquer tempo.',
      'Deficiência ainda gera incapacidade absoluta.',
      'PcD não pode testemunhar nem casar.',
      'Curatela é regra geral e dura indefinidamente sem contas.',
      'TDA retira capacidade e exige 1 apoiador.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — art.114 (CC art.3º só menor 16, art.4º II-III, art.228 §2º testemunha, art.1.550 §2º casamento, art.1.768 própria pessoa, art.1.771 entrevista multi, art.1.772 limites art.1.782 e vontade, art.1.775-A compartilhada, art.1.777 convivência) e art.116 (art.1.783-A 11 parágrafos). B a E invertem revolução da capacidade.',
  },
  {
    id: 20,
    banca: 'FCC',
    formato: 'multipla',
    tema: 'Arts. 121, 125, 127 — Norma mais benéfica, prazos e vigência',
    enunciado:
      'Sobre disposições finais da LBI, assinale a correta:',
    alternativas: [
      'Direitos, prazos e obrigações da LBI não excluem outros já estabelecidos em outras legislações e tratados internacionais, prevalecendo norma mais benéfica à PcD; prazos a partir da vigência: art.28 §2º I e II (tradutores Libras) 48 meses, art.44 §6º (cinema acessível todas sessões) 84 meses (Lei 14.159/2021), art.45 (hotéis 10% dormitórios) 24 meses, art.49 (fretamento/turismo) 48 meses; LBI entra em vigor após 180 dias de publicação oficial.',
      'LBI revoga normas anteriores mais benéficas.',
      'Cinema acessível tem prazo 24 meses.',
      'Hotéis têm prazo 48 meses.',
      'LBI entrou em vigor na data da publicação.',
    ],
    gabarito: 0,
    comentario:
      'Gabarito: A — art.121 caput e par único (norma mais benéfica prevalece), art.125 I-IV (48m Libras, 84m cinema atual, 24m hotéis, 48m fretamento), art.127 (180 dias vacatio). B erra: não exclui, prevalece mais benéfica. C erra: cinema 84m. D erra: hotéis 24m. E erra: 180 dias.',
  },
];
