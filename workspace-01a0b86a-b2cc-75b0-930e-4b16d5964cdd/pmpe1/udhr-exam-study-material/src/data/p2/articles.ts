export type Bloco =
  | 'Liberdade & limites'
  | 'Não discriminação'
  | 'Deveres dos Estados'
  | 'Família, educação & culto'
  | 'Cláusulas finais';

export interface Artigo {
  n: number;
  titulo: string;
  sintese: string;
  bloco: Bloco;
  resumo: string;
  prova: string;
  pegadinha: string;
  exemplo: string;
  macete: string;
  bancas: string[];
}

export const blocoHex: Record<Bloco, string> = {
  'Liberdade & limites': '#c19a3d',
  'Não discriminação': '#b04a3c',
  'Deveres dos Estados': '#2f6fb4',
  'Família, educação & culto': '#0f766e',
  'Cláusulas finais': '#4b5563',
};

export const blocoRange: Record<Bloco, string> = {
  'Liberdade & limites': 'art. 1º',
  'Não discriminação': 'art. 2º–3',
  'Deveres dos Estados': 'art. 4º',
  'Família, educação & culto': 'art. 5–6',
  'Cláusulas finais': 'art. 7–8',
};

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Liberdade de ter e manifestar religião ou convicção',
    sintese: 'Ter, escolher e manifestar — com limites legais',
    bloco: 'Liberdade & limites',
    resumo:
      '1) Toda pessoa tem direito à liberdade de pensamento, de consciência e de religião — incluída a liberdade de TER a religião ou convicção de sua escolha e de MANIFESTÁ-LA, individual ou coletivamente, em público ou em privado, pelo culto, pela observância, pela prática e pelo ensino. 2) Ninguém será objeto de COERÇÃO capaz de comprometer sua liberdade de ter uma religião ou convicção de sua escolha. 3) A liberdade de manifestar só pode ser limitada POR LEI e apenas quando necessário para proteger a segurança, a ordem, a saúde ou a moral públicas, ou os direitos e liberdades fundamentais alheios.',
    prova:
      'Estrutura em 3 andares: (1) o núcleo interno — ter/escolher (forum internum) — é ABSOLUTO; (2) vedação expressa da COERÇÃO; (3) a manifestação (forum externum) admite limites, mas SÓ por lei e SÓ para fins exaustivos: segurança, ordem, saúde, moral públicas e direitos alheios. É o mesmo desenho do art. 18 do PIDCP — as bancas cobram os dois em conjunto.',
    pegadinha:
      'Dizer que a liberdade é ilimitada (o §3º limita a manifestação); ou admitir restrições por “costumes”, “tradição local” ou simples portaria administrativa — o filtro exigido é a LEI, e o rol do §3º é taxativo.',
    exemplo:
      'Lei que exige autorização policial prévia para cultos ao ar livre é formalmente legal — legítima apenas se necessária à ordem e à segurança. Já proibir um culto porque “incomoda a maioria do bairro” não se enquadra em nenhum dos fins do §3º.',
    macete:
      'Núcleo absoluto, manifestação com rédea: S.O.S + M.D. — Segurança, Ordem, Saúde + Moral e Direitos alheios. E só por LEI.',
    bancas: ['Cebraspe', 'FGV', 'FCC'],
  },
  {
    n: 2,
    titulo: 'Proibição de discriminação e definição-chave',
    sintese: 'Vedação ampla + a definição de intolerância',
    bloco: 'Não discriminação',
    resumo:
      '1) Ninguém será objeto de discriminação por parte de qualquer ESTADO, INSTITUIÇÃO, GRUPO de pessoas ou PESSOA, por motivos de religião ou convicção. 2) Define-se “intolerância e discriminação baseadas na religião ou convicção”: qualquer distinção, exclusão, restrição ou preferência fundada na religião ou convicção que tenha por FINALIDADE ou por EFEITO anular ou restringir o reconhecimento, gozo ou exercício, em condições de igualdade, dos direitos humanos e liberdades fundamentais.',
    prova:
      'O §1º vincula QUATRO sujeitos — Estado, instituição, grupo e pessoa (vedação HORIZONTAL: particulares também discriminam). O §2º é a definição mais cobrada do documento: quatro verbos (distinção, exclusão, restrição, preferência) + “finalidade OU efeito”, fórmula que abarca a discriminação INDIRETA, mesmo sem intenção.',
    pegadinha:
      'Restringir a proteção a atos do Poder Público; exigir dolo ou intenção discriminatória — basta o EFEITO. Também trocam “preferência” por “privilégio” e adulteram a fórmula “anular ou restringir”.',
    exemplo:
      'Empresa que exige disponibilidade total aos sábados e demite um guardião do sábado talvez não tenha “finalidade” discriminatória — mas o efeito prático é excludente: configura o modelo do §2º.',
    macete:
      'DERP: Distinção, Exclusão, Restrição, Preferência — com ideia OU efeito. Não adianta dizer “não foi por querer”.',
    bancas: ['FCC', 'FGV', 'Cebraspe'],
  },
  {
    n: 3,
    titulo: 'Discriminação = afronta à dignidade humana',
    sintese: 'Discriminar é renegar a Carta da ONU',
    bloco: 'Não discriminação',
    resumo:
      'A discriminação entre seres humanos por motivos de religião ou convicção constitui afronta à dignidade humana e renega os princípios da Carta das Nações Unidas; deve ser condenada como violação dos direitos humanos e liberdades fundamentais proclamados na DUDH e detalhados nos Pactos Internacionais, e como OBSTÁCULO às relações amistosas e pacíficas entre as nações.',
    prova:
      'É o artigo-“ponte”: amarra a Declaração a três textos — Carta da ONU, DUDH e Pactos de 1966. A tríade cobrada: (i) afronta à dignidade; (ii) renega a Carta; (iii) obstáculo à PAZ e às relações amistosas entre as nações.',
    pegadinha:
      'Afirmar que a discriminação religiosa viola apenas a própria Declaração de 1981; suprimir o componente da paz internacional; ou trocar “afronta à dignidade” por “mero desconforto social”.',
    exemplo:
      'Ataques a templos e terreiros não são “vandalismo qualquer”: no plano internacional configuram violação de dignidade e ameaça à convivência pacífica — no Brasil, reação reforçada pela Lei 7.716/89 (preconceito religioso).',
    macete: 'Trilogia da condenação: Dignidade + Carta + Paz. Quem discrimina afronta os três de uma vez.',
    bancas: ['AOCP', 'FGV'],
  },
  {
    n: 4,
    titulo: 'Deveres estatais de prevenção e legislação',
    sintese: 'Medidas efetivas + legislar (e revogar)',
    bloco: 'Deveres dos Estados',
    resumo:
      '1) Todos os Estados tomarão medidas efetivas para prevenir e eliminar a discriminação por motivos de religião ou convicção no reconhecimento, exercício e gozo dos direitos humanos e liberdades fundamentais, em TODOS os campos da vida civil, econômica, política, social e cultural. 2) Os Estados envidarão todos os esforços para ADOTAR ou REVOGAR leis, quando necessário, a fim de proibir essa discriminação, e tomarão medidas apropriadas contra a intolerância em matéria de religião ou convicção.',
    prova:
      'Dois deveres: (i) medidas EFETIVAS — em todos os campos (civil, econômico, político, social e cultural); (ii) dever LEGISLATIVO — adotar leis protetivas e REVOGAR as discriminatórias. A banca adora o “revogar”: combater a discriminação também é tirar leis preconceituosas do ordenamento.',
    pegadinha:
      'Limitar o dever estatal aos campos civil e político; ou dizer que o §2º trata apenas de criar leis novas — as bancas costumam suprimir a revogação.',
    exemplo:
      'No Brasil, o §2º aparece na Lei 7.716/89 (crimes de preconceito, incluída a religião) e na Lei 11.635/2007, que institui o Dia Nacional de Combate à Intolerância Religiosa (21 de janeiro).',
    macete: 'O Estado faz 2: MEDE e REVOGA. Medidas efetivas em todo campo + tesoura nas leis discriminatórias.',
    bancas: ['FCC', 'AOCP'],
  },
  {
    n: 5,
    titulo: 'Família e educação religiosa dos filhos',
    sintese: 'Pais conduzem; interesse da criança orienta',
    bloco: 'Família, educação & culto',
    resumo:
      '1) Os pais (ou responsáveis legais) têm direito de organizar a vida familiar segundo sua religião ou convicção, atenta a educação moral que desejam para os filhos. 2) Toda criança tem direito de acesso à educação em matéria de religião conforme a vontade dos pais/responsáveis e NÃO pode ser compelida a receber ensino religioso contra essa vontade — tendo como princípio orientador o interesse superior da criança. 3) A criança será protegida de qualquer discriminação por religião e educada em espírito de compreensão, tolerância e paz. 4) Se não estiver sob guarda, devem-se considerar os desejos expressos pelos pais. 5) As práticas religiosas da criação NÃO podem prejudicar a saúde física ou mental nem o pleno desenvolvimento da criança (limites do art. 1º, §3º). 6) A criança será tratada com dignidade e jamais coagida em sua liberdade de ter ou escolher uma religião ou convicção.',
    prova:
      'O artigo queridinho das bancas: (i) direito dos pais de conduzir a vida familiar conforme sua fé; (ii) VEDAÇÃO de compelir a criança a ensino religioso contra a vontade DOS PAIS; (iii) o INTERESSE SUPERIOR da criança como princípio orientador; (iv) o freio: práticas religiosas não podem lesar saúde física ou mental. Conecte com CF art. 210, §1º (ensino religioso facultativo) e STF ADI 4.439.',
    pegadinha:
      'Afirmar que o Estado tem prioridade sobre os pais; ou que os direitos parentais são ilimitados — o §5º barra práticas lesivas à saúde. E o detalhe mortal: a não-compulsão mede-se pela vontade DOS PAIS (não da escola, não da maioria da classe).',
    exemplo:
      'Escola pública que condiciona nota à presença em culto ou aula confessional obrigatória viola o §2º. Já o ensino religioso facultativo, com matrícula opcional, respeita a Declaração e a CF (STF, ADI 4.439). E o STF já autorizou transfusão de sangue em criança para preservar sua vida, ainda contra objeção religiosa dos pais (RE 1.169.456).',
    macete: 'Pais no volante, criança no cinto: a vontade é dos pais, o interesse maior é dela — e a saúde é o freio.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'Vunesp'],
  },
  {
    n: 6,
    titulo: 'Catálogo de liberdades do culto',
    sintese: '9 liberdades exemplificativas',
    bloco: 'Família, educação & culto',
    resumo:
      'O direito à liberdade inclui, ENTRE OUTRAS (rol EXEMPLIFICATIVO): a) cultuar ou reunir-se e manter locais de culto; b) manter instituições beneficentes e humanitárias; c) fabricar, adquirir e usar objetos e materiais dos ritos; d) escrever, editar e difundir publicações; e) ensinar a religião ou convicção em lugares apropriados; f) receber contribuições financeiras e outras, VOLUNTÁRIAS, de pessoas e instituições; g) formar, designar, eleger ou escolher por SUCESSÃO os próprios líderes; h) observar dias de descanso e celebrar feriados e cerimônias conforme os preceitos; i) manter comunicações nacionais e internacionais em matéria de religião.',
    prova:
      'São NOVE liberdades e o rol é aberto (“entre outras”). As mais cobradas: locais de culto (a), objetos rituais (c), contribuições VOLUNTÁRIAS (f), escolha dos líderes — inclusive por SUCESSÃO (g) — e dias de descanso sagrados (h). A FCC e a Vunesp adoram transformar as alíneas em alternativas.',
    pegadinha:
      'Tratar o rol como taxativo; trocar contribuições “voluntárias” por “obrigatórias”; suprimir a sucessão na designação de líderes; ou MISTURAR o art. 6 com os direitos dos pais, que estão no art. 5º — confusão campeã de prova.',
    exemplo:
      'Município que veda a abertura de templo em área residencial sem fundamento de ordem pública fere a alínea “a”. Regra de trabalho que pune funcionário por recusar plantão no seu dia sagrado tensiona a alínea “h”.',
    macete:
      'Lugar, objeto, publicação, ensino, dinheiro VOLUNTÁRIO, líder (até por sucessão), descanso sagrado e contato internacional = a vila completa do culto.',
    bancas: ['FCC', 'AOCP', 'Vunesp'],
  },
  {
    n: 7,
    titulo: 'Efetividade na legislação nacional',
    sintese: 'Direitos devem funcionar na prática',
    bloco: 'Cláusulas finais',
    resumo:
      'Os direitos e liberdades proclamados nesta Declaração deverão ser garantidos na legislação nacional, de modo que toda pessoa possa deles se valer NA PRÁTICA.',
    prova:
      'É a cláusula da EFETIVIDADE: não basta reconhecer no papel — a legislação interna precisa tornar os direitos operáveis. A banca conecta com a teoria da eficácia das normas e com a dignidade concreta.',
    pegadinha:
      'Afirmar que a efetividade depende de a Declaração ser ratificada como tratado — mesmo sem ser convenção, o art. 7 chama os Estados a internalizar seus comandos.',
    exemplo:
      'O Brasil atende ao art. 7º com o art. 5º, VI a VIII, da CF (crença, assistência religiosa, escusa/objeção de consciência) e com legislação ordinária antidiscriminação.',
    macete: 'O art. 7º é o “na prática”: direito de gaveta não vale nada.',
    bancas: ['AOCP', 'Cebraspe'],
  },
  {
    n: 8,
    titulo: 'Cláusula de salvaguarda',
    sintese: 'Nada diminui direitos já reconhecidos',
    bloco: 'Cláusulas finais',
    resumo:
      'Nenhuma disposição desta Declaração será interpretada de modo a restringir ou derrogar qualquer direito definido na Declaração Universal dos Direitos Humanos e nos Pactos Internacionais de Direitos Humanos.',
    prova:
      'Regra hermenêutica pró-proteção MÁXIMA: a Declaração não pode ser invocada para DIMINUIR direitos já garantidos pela DUDH e pelos Pactos. É irmã do art. 5º, §2º, da CF (os direitos enumerados não excluem outros).',
    pegadinha:
      'Inverter a lógica: dizer que a Declaração de 1981 substitui a DUDH, prevalece sobre os Pactos ou autoriza interpretações restritivas “evolutivas”. Ela complementa — nunca restringe.',
    exemplo:
      'Uma tese que negasse a ateus a proteção do art. 1º cairia na hora: a DUDH (art. 18) e o PIDCP já protegem a liberdade de convicção de ateus e agnósticos — e o art. 8º bloqueia qualquer redução.',
    macete: 'O art. 8º é um guarda-chuva: só abre, nunca fecha.',
    bancas: ['FGV', 'Cebraspe'],
  },
];
