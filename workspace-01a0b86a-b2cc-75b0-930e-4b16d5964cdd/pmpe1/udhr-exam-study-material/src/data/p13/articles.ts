import type { Artigo } from '../shared';

export const blocoHex: Record<string, string> = {
  'Revisão Geral — Metodologia': '#991b1b',
  'Parte 1 — DUDH 1948': '#e3c878',
  'Parte 2 — Intolerância Religiosa 1981': '#5eead4',
  'Parte 3 — CEDAW 1979': '#f0a5c0',
  'Parte 4 — Convenção Criança 1989': '#7cc0f5',
  'Parte 5A — ECA Geral arts.1-85': '#8ed6a0',
  'Parte 5B — ECA Especial arts.86-267': '#f0a5c0',
  'Parte 6 — CIEFDR 1965 + Dec.4.738/03': '#e8a36b',
  'Parte 7 — Estatuto Idoso 10.741/03': '#b8a7e9',
  'Parte 8 — CIAPTT OEA 1985': '#f08f7c',
  'Parte 9 — Guatemala PcD 1999': '#9db4ff',
  'Parte 10 — LBI 13.146/15 completa': '#0f766e',
  'Parte 11-12 — CAT ONU 40/91 + OPCAT + Súmulas/Jurisprudência': '#4b5563',
};

const R = 'Revisão Geral — Metodologia';
const P1 = 'Parte 1 — DUDH 1948';
const P2 = 'Parte 2 — Intolerância Religiosa 1981';
const P3 = 'Parte 3 — CEDAW 1979';
const P4 = 'Parte 4 — Convenção Criança 1989';
const P5A = 'Parte 5A — ECA Geral arts.1-85';
const P5B = 'Parte 5B — ECA Especial arts.86-267';
const P6 = 'Parte 6 — CIEFDR 1965 + Dec.4.738/03';
const P7 = 'Parte 7 — Estatuto Idoso 10.741/03';
const P8 = 'Parte 8 — CIAPTT OEA 1985';
const P9 = 'Parte 9 — Guatemala PcD 1999';
const P10 = 'Parte 10 — LBI 13.146/15 completa';
const P11 = 'Parte 11-12 — CAT ONU 40/91 + OPCAT + Súmulas/Jurisprudência';

export const artigos: Artigo[] = [
  {
    n: 1,
    titulo: 'Quiz Geral — como usar esta Parte 13 (60 questões, 4 blocos)',
    sintese: 'Metodologia 10 fáceis + 20 intermediárias + 20 difíceis + 10 C/E',
    bloco: R,
    destaque: true,
    resumo:
      'Parte 13 é a revisão final da coleção 12 partes: DUDH 1948, Declaração Intolerância Religiosa 36/55 1981, CEDAW 1979, Convenção Criança 1989, ECA Livro I arts.1-85 e Livro II arts.86-267 (corrigido: art.19 §1º reavaliação 3 MESES não 6, §2º permanência acolhimento 18 MESES não 2 anos, art.83 viagem nacional só CRIANÇA, art.84 exterior CRIANÇA E ADOLESCENTE, art.101 9 medidas proteção com acolhimento NÃO é privação liberdade §1º, art.112 6 socioeducativas + art.101 I-VI, art.121 princípios B-E-R brevidade/excepcionalidade/respeito + 6 MESES reavalia + 3 ANOS teto + 21 ANOS liberação compulsória, art.122 taxativo V.R.D. violência/grave ameaça/reiteração/descumprimento 3 MESES internação-sanção + Súmula 492 tráfico não internação automática, art.198 10 DIAS prazo recurso sem preparo), CIEFDR 1965 Dec.65.810/69 + Dec.4.738/03 petição individual CERD, EPI Lei 10.741/03 118 arts 60 anos + 2 vagas grátis +50% art.40 + art.34 par único BPC não entra cálculo, CIAPTT Dec.98.386/89 definição ampla art.2º sem exigir finalidade específica vs CAT, Guatemala Dec.3.956/01 supralegal definição discriminação por percepção, LBI 13.146/15 127 arts modelo social + capacidade plena art.6º + curatela só patrimonial art.85 + TDA 2 apoiadores art.1.783-A + crimes 1-3a/2-5a + ADI 5.357 sem taxa extra, CAT ONU Dec.40/91 33 arts D-I-F-A art.1º + jus cogens art.2º + non-refoulement art.3º + prova ilícita art.15 + outros maus-tratos art.16 + CAT 10 peritos 4a quorum 6 + OPCAT SPT+MNPCT 11 peritos 3a sem aviso + Parte 12 SV 11 algemas SV 14 acesso autos SV 26 progressão tortura Súmulas 588/589/600 Maria Penha 492/338/383/601 ECA 552 surdez unilateral RE 466.343 4 níveis CF>emenda CDPD>supralegal>lei + bloco + convencionalidade + norma mais benéfica. Metodologia: Bloco 1 fácil aquecimento, Bloco 2 intermediário comparação, Bloco 3 difícil pegadinhas jurisprudência, Bloco 4 C/E dissertativo Cebraspe.',
    prova:
      'O quiz cobre 5 bancas: AOCP literal datas/números, Cebraspe C/E troca um termo, FGV interpretação mais completa, FCC letra fria enumera artigos, Vunesp reprodução direta. Cada questão traz banca-alvo, gabarito e comentário com por que correta certa e por que incorretas erradas + pegadinha + dispositivo + macete.',
    pegadinha:
      'Pular Bloco 1 achando fácil — ele fixa base para não errar Bloco 3; confundir art.83 (só criança) com art.84 (criança e adolescente); trocar 3 meses/18 meses ECA art.19.',
    exemplo:
      'Estude 10 fáceis em 20 min, 20 intermediárias em 50 min, 20 difíceis em 70 min, 10 C/E em 40 min = 3h simulado completo, depois tabela desempenho por tema.',
    macete: 'Faça na ordem: fácil → intermediário → difícil → C/E. Anote erros por tema e volte ao prompt da parte correspondente.',
    bancas: ['AOCP', 'Cebraspe', 'FGV', 'FCC', 'Vunesp'],
  },
  {
    n: 2,
    titulo: 'Parte 1 — DUDH 1948 revisada (30 arts, Res.217 A III)',
    sintese: 'Base universal: art.1º liberdade igualdade dignidade + art.5º tortura',
    bloco: P1,
    destaque: true,
    resumo:
      'DUDH 10/12/1948 Paris, 30 arts, Res.217 A III, natureza declaratória proclamatória não vinculante mas jus cogens costume. Arts ouro: art.1º todos nascem livres e iguais dignidade direitos, art.3º vida liberdade segurança, art.5º ninguém submetido tortura nem tratamento cruel desumano degradante (base SV 11 algemas + CAT), art.14 asilo buscar e gozar (não obter), art.19 liberdade opinião expressão, art.29 deveres comunidade + limitações. Quórum 48-0-8 (48 favor, 0 contra, 8 abstenções). STF RE 466.343 superou tese DUDH supralegal? Não, DUDH não é tratado, é declaração.',
    prova:
      'DUDH cai como base: art.5º tortura conecta CAT art.1º e Lei 9.455 e SV 11; art.14 asilo buscar e gozar ≠ obter (Cebraspe adora); art.2º rol discriminação exemplificativo raça cor sexo língua religião opinião origem riqueza nascimento. Art.25 maternidade infância direitos especiais.',
    pegadinha:
      '“DUDH vinculante como tratado” — ERRADO, declaratória; “asilo obter” — ERRADO, buscar e gozar; “quórum unânime” — ERRADO, 48-0-8.',
    exemplo:
      'Questão: “Art.5º DUDH proíbe tortura” — CERTO, base para CAT art.1º D-I-F-A.',
    macete: 'DUDH = 30 arts, 48-0-8, art.5º tortura, art.14 buscar e gozar, não obter.',
    bancas: ['AOCP', 'Cebraspe', 'FCC'],
  },
  {
    n: 3,
    titulo: 'Parte 2 — Declaração Intolerância Religiosa 1981 (Res.36/55)',
    sintese: '8 arts, liberdade pensamento consciência religião convicção',
    bloco: P2,
    destaque: true,
    resumo:
      'Res.36/55 AG ONU 25/11/1981, 8 arts, por consenso sem votação, declaratória não vinculante. Art.1º liberdade pensamento consciência religião: ter, mudar, manifestar culto, observância, prática, ensino, individual ou coletivo, público ou privado. Art.2º definição intolerância/discriminação religiosa. Art.5º direitos pais educar filhos conforme convicção + interesse maior criança. Art.6º 9 liberdades: culto, reunião, instituição, ensino, dia descanso, etc. Limitações art.1º §3º só por lei necessárias proteger segurança ordem saúde moral direitos alheios. Conecta CF art.5º VI/VIII, art.210 §1º ensino religioso facultativo ADI 4439.',
    prova:
      'Cai: natureza declaratória vs convenção (CEDAW é convenção vinculante), art.6º 9 direitos, pais educam filhos, limitações taxativas. Comparação DUDH art.18.',
    pegadinha:
      '“Convenção vinculante 1981” — ERRADO, declaração; “liberdade absoluta sem limite” — ERRADO, §3º limitações legais necessárias.',
    exemplo:
      'Pais podem educar filho conforme religião, mas não podem negar vacinação obrigatória (saúde pública limita).',
    macete: '1981 = 8 arts, consenso, 9 liberdades art.6º, pais educam + interesse maior criança.',
    bancas: ['FGV', 'Cebraspe'],
  },
  {
    n: 4,
    titulo: 'Parte 3 — CEDAW 1979 (30 arts, Res.34/180, Comitê 23 peritos)',
    sintese: 'Definição discriminação sem preferência + medidas especiais temporárias',
    bloco: P3,
    destaque: true,
    resumo:
      'CEDAW 18/12/1979, vigor 03/09/81, Brasil 1984 supralegal Dec.4.377/02, 30 arts 6 partes, Comitê 23 peritos. Art.1º definição discriminação mulher: qualquer distinção exclusão restrição baseada sexo que prejudique reconhecimento gozo exercício direitos, independe estado civil. Sem “preferência” (difere CIEFDR que tem preferência). Art.4º medidas especiais temporárias para acelerar igualdade de fato não são discriminação, cessam quando objetivo alcançado. Art.11 trabalho igualdade, art.16 família. Protocolo Facultativo Dec.4.316/02 petição individual + investigação. Conecta Maria Penha Lei 11.340.',
    prova:
      'Foco: art.1º sem preferência, art.4º ação afirmativa temporária, Comitê 23 peritos, status supralegal (não emenda), petição individual Protocolo.',
    pegadinha:
      '“CEDAW tem preferência” — ERRADO, CIEFDR tem; “medida especial é discriminação” — ERRADO, art.4º não é.',
    exemplo:
      'Cotas para mulheres em política são medidas especiais temporárias art.4º CEDAW, não discriminam.',
    macete: 'CEDAW = sem preferência + art.4º ação afirmativa temporária OK + 23 peritos + supralegal.',
    bancas: ['FGV', 'FCC', 'AOCP'],
  },
  {
    n: 5,
    titulo: 'Parte 4 — Convenção Criança 1989 (54 arts, Res.44/25, 196 Estados)',
    sintese: '4 princípios: 2 não discriminação, 3 interesse maior, 6 vida/sobrevivência, 12 oitiva',
    bloco: P4,
    destaque: true,
    resumo:
      'Convenção Criança 20/11/1989 consenso, vigor 02/09/90, Brasil Dec.99.710/90 supralegal, 54 arts, 196 Estados-partes mais ratificada, Comitê 18 peritos relatórios 2 anos + 5 em 5 anos. Definição criança art.1º todo menor 18 anos salvo maioridade anterior (difere ECA 2 réguas). Princípios: art.2º não discriminação, art.3º interesse maior primordial, art.6º vida sobrevivência desenvolvimento, art.12 oitiva participação. Art.19 proteção violência, art.37 tortura proibida + privação liberdade último recurso menor tempo + separado adultos, art.40 justiça juvenil garantias. Conecta ECA art.227 prioridade absoluta.',
    prova:
      '4 princípios 2-3-6-12 mais cobrados; definição criança <18 vs ECA criança até 12 incompletos adolescente 12-18; art.37 vs ECA art.121 B-E-R + 6-3-21.',
    pegadinha:
      '“ECA e Convenção mesma definição criança” — ERRADO, Convenção 1 régua <18, ECA 2 réguas; “interesse maior só família” — ERRADO, art.3º todas medidas relativas criança.',
    exemplo:
      'Criança 17 anos é criança na Convenção, adolescente no ECA.',
    macete: 'Convenção = <18 é criança + 4 princípios 2-3-6-12 + art.37 B-E-R.',
    bancas: ['FCC', 'FGV', 'AOCP'],
  },
  {
    n: 6,
    titulo: 'Parte 5A — ECA Geral arts.1-85 revisado e corrigido',
    sintese: 'Proteção integral + art.2º 12 incompletos/12-18/18-21 excepcional + 4 Ps art.4º',
    bloco: P5A,
    destaque: true,
    resumo:
      'ECA Lei 8.069/90, 267 arts, doutrina proteção integral substituiu situação irregular Código Menores 6.697/79. CORREÇÕES: art.1º proteção integral todos, art.2º criança até 12 incompletos adolescente 12-18, par único 18-21 casos expressos lei (ex art.121 §5º 21 anos liberação compulsória), art.3º direitos fundamentais + 5 eixos F-M-M-E-S físico mental moral espiritual social + rol antidiscriminatório exemplificativo, art.4º dever família comunidade sociedade poder público + absoluta prioridade 4 Ps primazia socorro precedência atendimento preferência políticas privilegiada recursos, art.6º interpretação fins sociais bem comum condição peculiar pessoa desenvolvimento, art.8º pré perinatal pós-natal + acompanhante + entrega voluntária art.19-A sem constrangimento, art.10 prontuário 18 anos + plantar bebê + digital mãe, art.11 SUS integral + M.O.P.T. medicamentos órteses próteses tecnologias grátis, art.12 acompanhante tempo integral inclusive UTI, art.13 suspeita maus-tratos Conselho Tutelar (não MP) + multa art.245 3-20 salários dobro reincidência, art.14 vacinação obrigatória casos recomendados STF ADI 6586, art.16 liberdade 7 incisos ir vir opinião crença brincar conviver política refúgio, art.17 respeito F-P-M física psíquica moral + imagem identidade autonomia espaços objetos pessoais, art.18-A/B Lei Menino Bernardo 13.010/14 castigo físico vs cruel degradante + 5 medidas Conselho Tutelar advertência, art.19 CORRIGIDO §1º reavaliação acolhimento 3 MESES (não 6, Lei 13.509/17), §2º permanência máxima 18 MESES (não 2 anos), §3º preferência família natural, §4º visita pai/mãe preso independente autorização judicial, art.20 igualdade filhos sem designações discriminatórias, art.21 poder familiar igualdade pai mãe juiz desempata, art.22 S-G-E sustento guarda educação + compartilhado, art.23 pobreza não retira poder familiar + inclusão programas + §2º destituição só crime DOLOSO + RECLUSÃO + contra filho ou outro titular, art.24 perda suspensão judicial contraditório, art.25 natural pais ou qualquer deles + descendentes, extensa parente próximo + convivência + afinidade afetividade, art.28 G-T-A guarda tutela adoção + ouvir sempre que possível + consentimento >12 anos audiência + irmãos mesma família + indígena quilombola FUNAI antropólogos prioridade comunidade, art.31 estrangeira excepcional só adoção, art.33 guarda M-M-E material moral educacional + opor-se inclusive pais + dependente previdenciário + não impede visitas alimentos, art.34 acolhimento familiar preferência institucional temporário excepcional, art.35 revogável qualquer tempo fundamentada MP ouvido, art.36 tutela até 18 incompletos + pressupõe perda suspensão poder familiar + implica guarda, art.39 adoção excepcional irrevogável sem procuração melhor interesse, art.40 adotando até 18 data pedido salvo guarda tutela, art.41 filho para todos fins inclusive sucessório desliga vínculos salvo impedimentos matrimoniais + unilateral preserva vínculo genitor, art.42 18 anos adotante + 16 diferença + veda ascendentes irmãos + conjunta casamento união estável + divorciados podem conjunta + póstuma retroage óbito, art.45 consentimento pais dispensado desconhecidos destituídos + adotando >12 consentimento + retratável até publicação sentença, art.46 estágio convivência até 90 dias prorrogável igual período + dispensa tutela guarda legal tempo suficiente + guarda fato NÃO dispensa + internacional 30-45 dias território nacional equipe interprofissional.',
    prova:
      'ECA Geral é o mais cobrado: art.2º conceito, art.4º 4Ps, art.13 suspeita Conselho, art.19 3m/18m, art.28 G-T-A + >12 consentimento, art.33 guarda, art.42 18/16/veda ascendentes irmãos, art.45 consentimento, art.46 90 dias/30-45 dias.',
    pegadinha:
      'Manter prazos antigos 6m/2a art.19 — ERRADO, agora 3m/18m Lei 13.509; dizer art.83 adolescente também — ERRADO, só criança; guarda fato dispensa estágio — ERRADO, §2º art.46 veda; adoção revogável — ERRADO, irrevogável; ascendentes podem adotar — ERRADO, veda.',
    exemplo:
      'Criança acolhida 20 meses sem decisão fundamentada viola art.19 §2º 18 meses; criança 8 anos com tio 3º grau dispensa autorização viagem nacional art.83.',
    macete: 'ECA Geral: 12 incompletos/12-18/18-21, 4Ps primazia precedência preferência privilegiada, 3m reavalia 18m máximo, G-T-A ouvir todos consentir >12, guarda M-M-E dependente, adoção 18/16 sem ascendentes irmãos, estágio 90/30-45 Brasil.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 7,
    titulo: 'Parte 5B — ECA Especial arts.86-267 revisado (política, proteção, ato, socioeducativa, CT, justiça, crimes)',
    sintese: 'Corrigido: art.101 9 medidas, art.112 6 socioeducativas + 101 I-VI, art.121 6-3-21 B-E-R, art.122 V-R-D 3 meses sanção',
    bloco: P5B,
    destaque: true,
    resumo:
      'ECA Especial: art.86 conjunto articulado governamentais não governamentais União estados DF municípios, art.87 7 linhas ação (básicas, assistência, prevenção vítimas, desaparecidos, jurídico-social, convivência familiar, campanhas adoção inter-racial maiores PcD irmãos) vs art.88 12 diretrizes municipalização conselhos direitos deliberativos controladores paritários fundos CMDCA, art.89 conselho direitos interesse público relevante não remunerado vs art.134 conselheiro tutelar remunerado previdência férias 1/3 licenças 13º, art.90 8 regimes orientação apoio sociofamiliar apoio meio aberto colocação familiar acolhimento institucional PSC LA semiliberdade internação + inscrição programas CMDCA, art.91 ONG registro CMDCA 5 hipóteses negativa + validade 4 anos, art.92 9 princípios acolhimento personalizado pequenos grupos irmãos juntos evitar transferência + relatório 6 meses entidade vs reavaliação juiz 3 meses art.19, art.93 acolhimento emergencial sem ordem judicial comunicação 24h JUIZ, art.95 fiscalização Judiciário MP Conselhos Tutelares, art.97 medidas entidades governamentais advertência afastamento dirigentes fechamento vs não governamentais advertência suspensão verba interdição cassação registro, art.98 ameaça violação 3 hipóteses ação omissão sociedade Estado falta omissão abuso pais conduta criança, art.99 isolada cumulativa substituível qualquer tempo, art.100 12 princípios sujeitos direitos proteção integral prioridade interesse superior privacidade intervenção precoce mínima proporcionalidade responsabilidade parental prevalência família obrigatoriedade informação oitiva, art.101 9 medidas I termo responsabilidade II orientação apoio temporários III matrícula frequência obrigatórias IV inclusão programas família V tratamento médico psicológico psiquiátrico VI alcoólatras toxicômanos VII acolhimento institucional VIII acolhimento familiar IX família substituta + §1º acolhimento provisório excepcional transição NÃO priva liberdade, art.102 registro civil gratuito prioridade, art.103 ato infracional crime ou contravenção, art.104 inimputáveis <18 + idade data fato teoria atividade, art.105 criança só art.101, art.106 flagrante ou ordem escrita fundamentada judicial, art.107 comunicação incontinenti juiz família + liberação imediata, art.108 internação antes sentença máximo 45 dias improrrogável + fundamentada + indícios autoria materialidade + necessidade imperiosa, art.110 devido processo + art.111 6 garantias conhecimento atribuição igualdade defesa técnica advogado assistência judiciária gratuita oitiva pessoal presença pais + Súmula 342 STJ confissão não dispensa outras provas, art.112 6 socioeducativas A-R-P-L-S-I advertência reparação dano PSC LA semiliberdade internação + VII 101 I-VI + §1º capacidade circunstâncias gravidade + §2º sem trabalho forçado + §3º doença deficiência mental tratamento especializado, art.113 99 e 100 aplicam + art.114 II-VI provas suficientes autoria materialidade ressalvada remissão + advertência prova materialidade indícios autoria, art.115 advertência admoestação verbal termo assinado juiz, art.116 reparar dano R-R-C restituir ressarcir compensar personalíssima, art.117 PSC até 6 meses + 8 horas semanais sábado domingo feriado ou dias úteis sem prejudicar escola trabalho + aptidões, art.118 LA sempre que adequada acompanhar auxiliar orientar + orientador + mínimo 6 meses prorrogável revogável substituível + art.119 orientador promover família frequência escolar profissionalização relatório, art.120 semiliberdade desde início ou transição meio aberto + externas independente autorização judicial + obrigatórias escolarização profissionalização + sem prazo determinado aplica internação, art.121 CORRIGIDO B-E-R brevidade excepcionalidade respeito + externas critério equipe salvo determinação judicial contrário + sem prazo determinado + reavaliação 6 MESES + máximo 3 ANOS + liberação compulsória 21 ANOS + desinternação autorização judicial MP ouvido, art.122 taxativo 3 hipóteses I violência grave ameaça pessoa II reiteração graves III descumprimento reiterado injustificável medida anterior + §1º inciso III até 3 MESES internação-sanção + §2º havendo outra adequada não interna + Súmula 492 tráfico não internação automática, art.123 entidade exclusiva adolescentes local distinto abrigo separação I-C-G idade compleição gravidade + pedagógicas obrigatórias inclusive provisória, art.124 16 direitos visita semanal mesma localidade religiosa facultativa incomunicabilidade NUNCA §1º + juiz pode suspender visita §2º, art.126 remissão MP exclusão processo antes procedimento vs judicial suspensão extinção depois + art.127 não implica reconhecimento responsabilidade nem antecedentes + pode cumular medidas exceto semiliberdade internação + revisível qualquer tempo + Súmula 108 STJ juiz exclusivo medida socioeducativa, art.129 10 medidas pais I-VII Conselho Tutelar pode VIII-X só juiz, art.130 afastamento agressor moradia comum cautelar juiz + alimentos provisórios, art.131 Conselho Tutelar P-A-N permanente autônomo não jurisdicional zelar direitos, art.132 mínimo 1 Conselho 5 membros 4 anos recondução novo processo, art.133 requisitos I-R: idoneidade moral + >21 anos + residir município (sem escolaridade federal), art.134 remuneração salário férias 1/3 licença maternidade paternidade gratificação natalina previdência + previsão orçamentária, art.136 atribuições atende 101 I-VII 129 I-VII requisita serviços públicos representa MP juiz notifica certidões assessora orçamento representa perda suspensão poder familiar após esgotadas manutenção família natural + afastamento comunica MP incontinenti, art.137 revisão decisões só autoridade judiciária pedido legítimo interesse, art.139 escolha 1º domingo outubro ano subsequente presidencial posse 10 janeiro CMDCA organiza MP fiscaliza + vedado doar vantagem + art.140 impedimentos marido mulher ascendentes descendentes sogro genro nora irmãos cunhados tio sobrinho padrasto madrasta enteado + juiz promotor comarca, art.141 acesso Defensoria MP Judiciário + assistência gratuita + isenção custas salvo má-fé, art.143 vedação divulgação ato infracional fotografia nome apelido filiação parentesco residência inclusive iniciais + art.247 multa 3-20 salários apreensão reincidência, art.147 competência domicílio pais ou lugar criança falta pais + ato infracional lugar ação omissão + Súmula 383 foro domicílio detentor guarda, art.148 caput sempre Infância vs parágrafo único só com risco art.98 guarda tutela destituição suprimento casamento discordância paterna emancipação curador alimentos registro, art.149 portaria alvará rol taxativo entrada permanência desacompanhado estádio ginásio baile boate diversões eletrônicas estúdios + participação espetáculos beleza + fundamentada caso a caso vedadas gerais toque recolher ilegal, art.152 CPC subsidiário + prioridade absoluta + prazos dias corridos vedado dobro Fazenda MP, art.163 120 dias conclusão perda suspensão + averbação margem registro nascimento, art.174 regra liberação pais termo compromisso apresentação MP mesmo dia ou 1º útil exceto gravidade repercussão segurança pessoal ordem pública, art.180 MP arquivar remitir representar + art.181 homologação judicial discordância PGJ, art.183 45 dias improrrogável conclusão procedimento internado, art.189 4 hipóteses absolvição inexistência fato sem prova existência não constitui ato sem prova autoria + liberação imediata, art.198 sistema recursal CPC adaptado 10 dias MP defesa sem revisor retratação 5 dias isenção preparo + art.199-A adoção efeito desde logo devolutivo salvo internacional perigo dano + art.199-B destituição devolutivo, art.201 MP livre acesso local criança + art.204 falta intervenção nulidade + Súmula 594 alimentos ACP, art.208 rol exemplificativo ensino saúde + art.210 legitimados concorrentes MP União estados municípios DF associações 1 ano + art.212 todas ações + art.213 multa diária, art.220 qualquer pessoa pode servidor deve provocar MP + art.224 subsidiária Lei 7.347 ACP, art.225 crimes ação pública incondicionada + CP PG CPP, art.228 229 registro identificação maternidade 6m-2a culposo 2-6m multa únicos culposos, art.230-235 liberdade 6m-2a detenção + art.235 estourar prazo crime, art.237 subtrair 2-6a + 238 vender filho paga recompensa 1-4a ambos lados + 239 envio exterior 4-6a violência 6-8a, art.240-241-E pornografia produção 4-8a vender 4-8a divulgar 3-6a possuir 1-4a montagem 1-3a aliciar 1-3a aumento cargo parentesco, art.242 arma 3-6a reclusão gratuito também, art.243 bebida alcoólica 2-4a detenção multa crime desde 2015, art.244 fogos 6m-2a + 244-A prostituição exploração sexual 4-10a + 244-B corrupção menores 1-4a Súmula 500 formal independe efetiva corrupção + eletrônico + aumento hediondo 1/3, art.245 infração não comunicar maus-tratos médico professor responsável 3-20 salários dobro reincidência, art.249 descumprir poder familiar 3-20 salários, art.250 hospedagem multa fechamento 15 dias reincidência <30 dias fecha definitivo licença cassada, art.252-258 diversões 3-20 salários 255 20-100 salários fechamento 15 dias, art.258-A cadastro multa 1k-3k, art.258-B não encaminhar entrega voluntária 1k-3k, art.258-C venda proibida art.81 3-20 salários interdição, art.260 FIA 1% PJ lucro real 6% PF + Conselho Direitos fixa critérios, art.267 revogação expressa Código Menores 6.697/79 vacatio 90 dias.',
    prova:
      'ECA Especial corrige prazos e competências que mais caem: art.19 3m/18m, art.83 só criança, art.101 não priva liberdade, art.112 6 medidas, art.121 6-3-21, art.122 V-R-D 3 meses sanção, art.198 10 dias corridos, art.240-244-B crimes, art.245 multa, Súmulas 492/338/383/601.',
    pegadinha:
      'Manter 6m/2a art.19 antigo; dizer art.101 priva liberdade; confundir PSC 6 meses máximo vs LA 6 meses mínimo; dizer tráfico interna automática; exigir prova efetiva corrupção art.244-B (Súmula 500 formal); art.83 adolescente também; hospedagem exige autorizado E acompanhado (é OU).',
    exemplo:
      'Adolescente tráfico primário sem violência: Súmula 492 não interna; PSC 8h semanais não diárias; LA mínimo 6 meses.',
    macete: 'Especial: 3m reavalia acolhimento, 6m relatório entidade e reavalia internação, 45 dias provisória improrrogável, 3 meses sanção, 3 anos teto, 21 liberação, 10 dias recurso corrido, 6-3-21, V-R-D, PSC 6m 8h semanais, LA 6m piso, S500 formal.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'Vunesp', 'AOCP'],
  },
  {
    n: 8,
    titulo: 'Parte 6 — CIEFDR 1965 + Dec.4.738/03 petição individual',
    sintese: 'Definição com preferência + ação afirmativa + 18 peritos CERD',
    bloco: P6,
    destaque: true,
    resumo:
      'CIEFDR Res.2106 A XX 21/12/1965 vigor 04/01/69 Dec.65.810/69 supralegal 25 arts Comitê CERD 18 peritos. Art.1º §1º definição discriminação racial distinção exclusão restrição preferência baseada raça cor descendência origem nacional étnica que anule restrinja reconhecimento gozo exercício direitos. Com preferência (difere CEDAW). Art.1º §4º medidas especiais temporárias ação afirmativa não discriminação desde que não mantenham direitos separados e cessem objetivo. Art.4º condena propaganda racista criminaliza. Dec.4.738/03 declara art.14 CIEFDR competência CERD receber petições individuais. Conecta Lei 7.716/89 XLII inafiançável imprescritível + 2º-A injúria racial 2-5a imprescritível + ADO 26 homotransfobia racismo.',
    prova:
      'Foco: definição com preferência, ação afirmativa art.1º §4º, art.4º criminalizar, Comitê 18 peritos, petição individual Dec.4738/03.',
    pegadinha:
      '“CIEFDR sem preferência” — ERRADO, tem; “CEDAW com preferência” — ERRADO, não tem; “petição individual não existe” — ERRADO, Dec.4738/03 reconhece.',
    exemplo:
      'Cotas raciais são medidas especiais art.1º §4º CIEFDR + ADPF 186 constitucional.',
    macete: 'CIEFDR = com preferência + ação afirmativa OK + 18 peritos + petição Dec.4738.',
    bancas: ['FGV', 'Cebraspe', 'FCC'],
  },
  {
    n: 9,
    titulo: 'Parte 7 — Estatuto Idoso 10.741/03 (118 arts, 60 anos)',
    sintese: 'Prioridade absoluta + transporte 2 grátis +50% + BPC art.34 par único',
    bloco: P7,
    destaque: true,
    resumo:
      'EPI Lei 10.741 01/10/2003 118 arts 7 títulos 60 anos conceito art.1º-2º prioridade absoluta art.3º. Direitos fundamentais vida saúde alimentação educação cultura esporte lazer trabalho previdência assistência habitação transporte. Art.15 saúde SUS integral + medicamentos gratuitos, art.20 BPC 1 SM 65 anos LOAS mas EPI 60 anos prioridade, art.34 BPC par único BPC idoso não entra cálculo renda familiar per capita outro BPC idoso/PcD + STJ REsp 1.221.170 + Tema 1093 miserabilidade outros elementos, art.40 transporte interestadual 2 vagas gratuitas +50% desconto >60 até 2 SM + municipal urbano CF 230 §2º >65 grátis, art.71 prioridade tramitação P.I.I. 60 anos, art.93-108 16 crimes próprios 2-5a etc. Conecta CF 230.',
    prova:
      'Números: 60 anos EPI vs 65 CF urbano vs 65 BPC LOAS; 2 vagas grátis +50%; BPC não impede outro BPC art.34 par único; prioridade P.I.I.',
    pegadinha:
      'Trocar 60 por 65 EPI; dizer 1 vaga grátis; BPC impede outro BPC; transporte só municipal.',
    exemplo:
      'Idoso 62 anos renda 1,5 SM viaja interestadual grátis 2 vagas; família com idoso BPC pode outro idoso BPC.',
    macete: 'EPI = 60 anos + 2 grátis +50% + BPC não bloqueia outro BPC + 65 urbano CF.',
    bancas: ['AOCP', 'FCC', 'Vunesp'],
  },
  {
    n: 10,
    titulo: 'Parte 8 — CIAPTT OEA 1985 (Cartagena, Dec.98.386/89, 17 arts)',
    sintese: 'Definição ampla art.2º sem exigir finalidade específica, non-refoulement',
    bloco: P8,
    destaque: true,
    resumo:
      'CIAPTT Cartagena 09/12/1985 Dec.98.386/89 supralegal 17 arts sistema OEA. Art.1º prevenir punir tortura. Art.2º definição ampla: todo ato intencional que cause pena sofrimento físico mental com fins investigação criminal, intimidação, castigo pessoal, medida preventiva, pena ou qualquer outro fim (qualquer outro fim = mais amplo que CAT). Art.3º responsáveis autor que ordena instiga induz, omissão agente público, etc. Art.4º obediência hierárquica não justifica. Art.6º criminalização. Art.8º investigação ex officio quando há denúncia. Art.11 não extraditar se fundadas razões risco tortura. Art.12 non-refoulement devolução proibida. Jurisdição universal art.12? Na verdade art.12 CIAPTT e art.5º CAT. Corte IDH casos Herzog Ximenes Lopes.',
    prova:
      'Comparação CAT vs CIAPTT: CAT art.1º D-I-F-A exige finalidade I-C-I-D + agente público; CIAPTT art.2º mais amplo “qualquer outro fim”. Ambas non-refoulement, obediência hierárquica não justifica.',
    pegadinha:
      'Dizer CIAPTT exige finalidade específica taxativa — ERRADO, “qualquer outro fim”; dizer obediência superior justifica — ERRADO, art.4º não.',
    exemplo:
      'Tortura para castigo pessoal sem investigar crime: CIAPTT art.2º configura, CAT art.1º também (castigo).',
    macete: 'CIAPTT = definição ampla qualquer outro fim + non-refoulement + ordem superior não justifica.',
    bancas: ['FGV', 'Cebraspe'],
  },
  {
    n: 11,
    titulo: 'Parte 9 — Guatemala PcD 1999 (Dec.3.956/01, 10 arts, supralegal)',
    sintese: 'Discriminação por deficiência + percepção + antecedente + diferenciação',
    bloco: P9,
    destaque: true,
    resumo:
      'Convenção Interamericana Eliminação Discriminação PcD Guatemala 07/06/1999 Dec.3.956/01 supralegal 10 arts. Art.I §1 deficiência restrição física mental sensorial permanente transitória que limita capacidade exercer atividades essenciais vida diária causada ou agravada ambiente econômico social. §2 a) discriminação toda distinção exclusão restrição baseada deficiência, antecedente deficiência, consequência deficiência anterior ou percepção deficiência presente passada que anule restrinja reconhecimento gozo exercício direitos (até percepção = mais amplo). §2 b) diferenciação não é discriminação: distinção exclusão restrição baseada deficiência quando necessária promover integração social desenvolvimento pessoal e não limite em si direito igualdade e não obrigue aceitar diferenciação. Art.II objetivos prevenção eliminação discriminação, Art.III medidas legislativas sociais educacionais laborais, Art.V CEDDIS Comitê. Conecta CDPD emenda Dec.6.949/09 e LBI.',
    prova:
      'Definição discriminação inclui percepção, antecedente, consequência anterior — mais ampla; diferenciação art.I §2 b não é discriminação se necessária integração e não limite direito igualdade.',
    pegadinha:
      'Confundir discriminação com diferenciação; dizer Guatemala é emenda — ERRADO, supralegal, emenda é CDPD.',
    exemplo:
      'Negar emprego por perceber deficiência futura = discriminação Guatemala.',
    macete: 'Guatemala = percepção conta + diferenciação não é discriminação se promove integração + supralegal vs CDPD emenda.',
    bancas: ['FCC', 'AOCP', 'FGV'],
  },
  {
    n: 12,
    titulo: 'Parte 10 — LBI 13.146/15 completa (127 arts, modelo social, 20 blocos)',
    sintese: 'Capacidade plena art.6º + curatela só patrimonial art.85 + TDA 2 apoiadores + crimes + ADI 5357',
    bloco: P10,
    destaque: true,
    resumo:
      'LBI 06/07/2015 127 arts 180 dias vacatio + prazos 24/48/84m. Base CDPD emenda Dec.6.949/09 norma mais benéfica art.121 LBI. Modelo social art.2º biopsicossocial impedimento longo prazo interação barreiras. Art.4º discriminação inclusive recusa adaptação razoável. Art.6º capacidade civil plena PcD casar constituir união estável exercer direitos sexuais reprodutivos. Art.8º dever todos comunicar violência. Art.11-26 saúde 11 garantias consentimento. Art.27-30 educação 19 incisos inclusiva sem taxa extra art.28 §1º ADI 5357 constitucional + AEE preferencial regular. Art.32-33 moradia 3% programas. Art.34-38 trabalho sem aptidão plena + art.93 Lei 8.213 cota PcD 2-5% 100-1200 empregados só contratação direta sem aprendiz art.93 §1º + dispensa só após contratar outra PcD. Art.39-42 transporte 2%/10%/1-20. Art.53-62 acessibilidade DU regra geral + exceção comprovada transformação + art.45 hotéis 10% quartos acessíveis + art.44 cinema. Art.63-73 info comunicação livros sem barreira autoral + sites 10% PCs + TV tripé legenda Libras audiodescrição. Art.74-75 TA direito + plano 4-2-5 nacional. Art.76-78 participação política sem seção exclusiva. Art.79-83 justiça com TA + cartórios capacidade plena. Art.84-87 curatela extraordinária proporcional menor tempo só patrimonial art.85 não alcança corpo sexualidade matrimônio privacidade educação saúde trabalho voto + art.1.767 CC só não exprimir vontade + art.1.768 própria pessoa promove curatela + art.1.771 entrevista equipe multi + art.1.775-A curatela compartilhada + Título IV CC Tutela Curatela TDA. Art.1.783-A TDA elege ≥2 idôneos vínculos confiança termo limites compromissos prazo juiz ouve multi MP validade terceiros contra-assinatura risco prejuízo juiz decide denúncia negligência destituição término qualquer tempo. Art.88-91 crimes discriminação 1-3a reclusão abandonar 2-5a reter cartão 6m-2a detenção apropriar proventos 1-4a. Art.92-95 Cadastro-Inclusão georreferenciado + auxílio-inclusão. Art.96-113 18 alterações legislativas. Art.114 CC revolução art.3º absolutamente incapazes só <16 art.4º relativamente II ébrios viciados III não exprimir vontade art.228 §2º testemunha PcD com TA art.1518/1548/1550 §2º casamento PcD mental intelectual etc. Art.117-119 cão-guia todos transportes inclusive internacional origem BR museus táxi 10% vagas condutores PcD veículo adaptado. Art.124-127 prazos 48m art.28 §2º I-II Libras 84m art.44 §6 cinema Lei 14.159/21 24m art.45 hotéis 10% 48m art.49 fretamento + vigência 180 dias.',
    prova:
      'LBI completa: modelo social, capacidade plena, curatela só patrimonial, TDA 2 apoiadores, acessibilidade DU, crimes, cota só direta, ADI 5357 sem taxa extra, prazos 24/48/84m.',
    pegadinha:
      'Curatela total por deficiência — ERRADO, só patrimonial; PcD não pode casar — ERRADO, art.6º pode; escola pode cobrar taxa extra — ERRADO, ADI 5357 veda; aprendiz PcD conta cota — ERRADO, só direta; cota PcD só 2% — ERRADO, 2-5%.',
    exemplo:
      'Escola cobra R$500 apoio aluno autista viola ADI 5357 + art.28 §1º LBI crime art.88.',
    macete: 'LBI = capacidade plena + curatela só dinheiro + TDA 2 apoiadores + sem taxa extra + cota só direta + DU regra.',
    bancas: ['FCC', 'FGV', 'Cebraspe', 'AOCP', 'Vunesp'],
  },
  {
    n: 13,
    titulo: 'Partes 11-12 — CAT ONU Dec.40/91 + OPCAT + Súmulas/Jurisprudência + 4 níveis',
    sintese: 'D-I-F-A + jus cogens + non-refoulement + prova ilícita + 10 peritos + RE 466 4 níveis',
    bloco: P11,
    destaque: true,
    resumo:
      'CAT ONU 10/12/84 vigor 26/06/87 Dec.40/91 supralegal 33 arts Comitê CAT 10 peritos 4a quorum 6 relatórios 1a+4a investigação sistemática confidencial visita anuência art.20 comunicações facultativas 5 Estados 3-6-12m art.21 6m art.22 reservas art.20 e 30. Art.1º D-I-F-A dor aguda física mental intencional finalidade I-C-I-D informação confissão castigo intimidação coação discriminação agente público instigação consentimento aquiescência + exclui sanções legítimas. Art.2º jus cogens proibição absoluta tortura sem exceção guerra instabilidade ordem superior art.2º §2-3 + art.4º. Art.3º non-refoulement não extraditar deportar expulsar se razões substanciais risco tortura + quadro sistemático grave maciço + Súmula 122 STF estrangeiro filho cônjuge BR não expulso. Art.4º criminalização. Art.5º jurisdição universal territorial nacionalidade vítima agressor presença. Art.6º detenção investigação. Art.7º aut dedere aut judicare. Art.8º extradição base legal ficção territorial. Art.10-13 prevenção ensino revisão interrogatório ex officio queixa protegida. Art.14 reparação reabilitação. Art.15 prova ilícita exceto contra torturador. Art.16 outros maus-tratos sem finalidade mas com agente público aplica 10-13. OPCAT 2002 Dec.6.085/07 preventivo SPT Subcomitê Prevenção + MNPCT Lei 12.847/13 11 peritos 3a visitas sem aviso. Parte 12: SV 11 algemas resistência fuga perigo escrito nulidade + responsabilidade agente Estado, SV 14 acesso prova documentada, SV 26 progressão hediondo tortura HC 82.959, Súmulas 716 progressão 718/719 regime motivação concreta art.33 §3º 59 CP não gravidade abstrata 523 falta defesa nulidade absoluta, 122 non-refoulement, ADPF 347 estado coisas inconstitucional art.16 CAT, STF racial Ellwanger raça social ADO26 homotransfobia racismo Lei 7716 ADPF186 cotas Lei 14.532 injúria racial 2-5a imprescritível inafiançável, STJ 588 sem restritiva com violência 589 sem insignificância 600 sem coabitação Tema 1030 protetivas sem BO sem prazo enquanto risco 492 tráfico não internação 338 prescrição 383 foro guarda 601 6m reavalia EPI art.40 2 vagas +50% art.34 par único BPC não entra cálculo Súmula 552 surdez unilateral não PcD cota ADI 5357 sem taxa extra, RE 466.343 4 níveis CF > DH rito §3º emenda CDPD Dec.6949 > DH sem rito supralegal CADH Dec.678 CAT Dec.40 CIAPTT Dec.98386 Guatemala Dec.3956 CEDAW CIEFDR Criança > comuns lei + bloco constitucionalidade CF+emenda + convencionalidade supralegal + norma mais benéfica art.29 CADH art.16 §2 CAT art.41 ECA art.121 LBI.',
    prova:
      'CAT completa + OPCAT + súmulas + 4 níveis é o fechamento: D-I-F-A, jus cogens, non-refoulement, aut dedere, prova ilícita, 10 peritos, 11 peritos OPCAT, SV 11, SV 26, 588/589/600, 492/601, 552, RE 466.',
    pegadinha:
      'CAT exige agente público (sim) vs Lei 9455 crime comum (particular pode); CAT outros maus-tratos sem finalidade; supralegal abaixo lei; CDPD supralegal; tortura imprescritível; injúria racial prescreve; tráfico interna automática; Maria Penha precisa coabitação/BO.',
    exemplo:
      'Juiz fixa regime fechado só por gravidade abstrata viola Súmulas 718/719; algema sem fundamentação viola SV 11 + art.5º III CF + art.5º DUDH.',
    macete: 'CAT = D-I-F-A + jus cogens + non-refoulement + aut dedere + prova ilícita + 10 peritos + OPCAT 11 peritos sem aviso + SV 11 algemas só resistência/fuga/perigo + SV 26 pode progredir + RE 466 4 níveis CF→emenda CDPD→supralegal→lei.',
    bancas: ['Cebraspe', 'FCC', 'FGV', 'AOCP', 'Vunesp'],
  },
];
