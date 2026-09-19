import { SectionHead, Reveal } from '../fx';
import { Star, Scale, Info, ArrowRight, BookMarked, Hash, ShieldAlert, Gavel, FileText } from 'lucide-react';

const destaques = [
  {
    art: 'Art. 2º',
    t: 'Conceito e biopsicossocial',
    k: 'Impedimento LONGO PRAZO (física, mental, intelectual, sensorial) + BARREIRAS = obstrução. Avaliação MULTI e INTERDISCIPLINAR: função, socioambiental, atividade, participação.',
    p: 'Trocar longo prazo por permanente; dizer que avaliação é só médica.',
  },
  {
    art: 'Art. 4º, §1º',
    t: 'Discriminação',
    k: 'Distinção, restrição ou exclusão por ação/omissão, propósito OU efeito, incluindo recusa adaptação razoável e TA. PcD não obrigada a ação afirmativa.',
    p: 'Exigir dolo; excluir recusa adaptação razoável da discriminação.',
  },
  {
    art: 'Art. 9º',
    t: 'Atendimento prioritário',
    k: '7 finalidades: proteção/socorro, atendimento público, recursos, transporte acessível, informação, restituição IR, tramitação (parte OU interessada). Acompanhante/atendente exceto IR e tramitação.',
    p: 'Incluir acompanhante na restituição IR.',
  },
  {
    art: 'Art. 53-60',
    t: 'Acessibilidade geral',
    k: 'Acessibilidade é direito. Gatilhos art.54: projetos, concessão/permissão/autorização/habilitação, financiamento público, aval União. DU regra geral, adaptação razoável exceção. Alvará e habite-se condicionados.',
    p: 'Inverter DU regra/exceção; dizer alvará independe acessibilidade.',
  },
  {
    art: 'Art. 63/67/68',
    t: 'Info, TV e livros',
    k: 'Sites empresas+governo obrigatoriamente acessíveis, símbolo destaque, 10% PCs telecentros/lan houses. TV: legenda oculta + janela Libras + audiodescrição. Livros: cláusula impedimento edital, sem barreira autoral, formato digital acessível.',
    p: 'Dizer site privado dispensado; TV só legenda; editora sem acessível pode participar.',
  },
  {
    art: 'Arts. 74-75',
    t: 'TA e plano 4-2-5',
    k: 'TA direito maximiza autonomia, mobilidade, qualidade vida. Plano 4 anos renova, 2 avalia: crédito subsidiado, importação ágil, pesquisa nacional, tributação reduzida, inclusão SUS.',
    p: 'Trocar prazos 4 e 2; omitir tributação/SUS.',
  },
  {
    art: 'Art. 76',
    t: 'Participação política',
    k: 'Votar e ser votada, procedimentos/instalações acessíveis, VEDADA seção exclusiva, incentivo candidatura, propaganda eleitoral e debates com art.67, auxílio votação por pessoa de escolha, participação ONGs/partidos.',
    p: 'Admitir seção exclusiva; auxílio deve ser mesário.',
  },
  {
    art: 'Arts. 84-85/114-116',
    t: 'Curatela × TDA — revolução CC',
    k: 'Curatela só patrimonial/negocial, extraordinária, proporcional, menor tempo, contas anuais, não alcança existenciais (corpo, sexo, casamento, privacidade, educação, saúde, trabalho, voto). TDA facultativa, 2 apoiadores idôneos vínculos confiança, termo, juiz ouve multi+MP, vale contra terceiros se nos limites.',
    p: 'Estender curatela a voto/casamento; TDA 1 apoiador ou retira capacidade.',
  },
  {
    art: 'Arts. 88-91',
    t: 'Crimes LBI',
    k: 'Discriminação 1-3a (mídia 2-5a) +1/3 cuidado, busca/apreensão/interdição antes, destruição depois. Apropriação 1-4a +1/3 tutor/ofício. Abandono 2-5a (15.163/25) grave 3-7 morte 8-14 + não prover. Cartão 6m-2a +1/3 tutor.',
    p: 'Usar pena antiga 6m-3a abandono; trocar reclusão por detenção.',
  },
  {
    art: 'Art. 121/125/127',
    t: 'Finais',
    k: 'Norma mais benéfica prevalece. Prazos: Libras 48m, cinema 84m, hotéis 24m, fretamento 48m. Vacatio 180 dias. Avaliação biopsicossocial 2 anos.',
    p: 'Trocar cinema 84 por 48; hotéis 24 por 48; vigência imediata.',
  },
];

const quadroCuratelaTDA: [string, string, string][] = [
  ['Natureza', 'Medida protetiva EXTRAORDINÁRIA, judicial, substitui vontade no patrimonial', 'Apoio facultativo, PcD MANTÉM capacidade, apoiadores auxiliam'],
  ['Quem pede', 'MP, cônjuge, parente, própria pessoa (art.1.768)', 'Própria PcD indica 2 apoiadores'],
  ['Apoiadores/curador', 'Curador nomeado juiz, considera vontade/preferências, pode ser compartilhada', 'Mínimo 2 pessoas idôneas, vínculos e confiança, termo com limites/prazo'],
  ['Alcance', 'Só patrimonial/negocial (art.85), não alcança existenciais', 'Atos da vida civil definidos no termo, nos limites acordados'],
  ['Duração', 'Menor tempo possível, proporcional, contas ANUAIS', 'Prazo no termo, pode terminar a qualquer tempo pela apoiada'],
  ['Validade terceiros', 'Representa/assiste conforme limites', 'Validade sem restrições se nos limites (§4º art.1.783-A)'],
  ['Divergência', 'Juiz decide conforme interesses', 'Negócio com risco/prejuízo relevante + divergência = juiz + MP decide'],
  ['Controle', 'Contas anuais, MP fiscaliza', 'Denúncia por negligência/pressão, destituição, prestação contas no que couber'],
];

const tabelaCC: [string, string, string][] = [
  ['Art. 3º', 'Absolutamente incapazes só menores 16', 'Revoga I, II, III deficiência'],
  ['Art. 4º', 'Relativamente: ébrios habituais/viciados + quem não puder exprimir vontade', 'Muda redação, mantém proporcionalidade'],
  ['Art. 228', 'Revoga II, III; PcD testemunha com TA §2º', 'Igualdade testemunhal'],
  ['Art. 1.518', 'Pais/tutores revogar autorização até celebração casamento', 'Ajuste redação'],
  ['Art. 1.548 I', 'Revogado', 'Fim nulidade casamento por deficiência'],
  ['Art. 1.550 §2º', 'PcD mental/intelectual idade núbil pode casar, vontade direta ou via responsável/curador', 'Capacidade matrimonial'],
  ['Art. 1.557 III', 'Defeito físico irremediável que NÃO caracterize deficiência + moléstia grave transmissível', 'Ajuste não discriminação'],
  ['Art. 1.557 IV', 'Revogado', ''],
  ['Art. 1.767', 'I quem não puder exprimir vontade; II revogado; III ébrios/viciados; IV revogado', 'Curatela só quem não exprime'],
  ['Art. 1.768', 'Processo curatela pode ser promovido pela própria pessoa', 'Autonomia'],
  ['Art. 1.769', 'MP só promove curatela deficiência mental/intelectual etc', 'Legitimidade restrita'],
  ['Art. 1.771', 'Juiz assistido equipe multi entrevista pessoalmente interditando', 'Garantia'],
  ['Art. 1.772', 'Juiz determina limites segundo potencialidades, circunscrito art.1.782, considera vontade/preferências', 'Proporcionalidade'],
  ['Art. 1.775-A', 'Curatela compartilhada mais de uma pessoa', 'Novidade'],
  ['Art. 1.777', 'Preserva convivência familiar/comunitária, evita recolhimento', 'Inclusão'],
  ['Art. 1.783-A', 'TDA: 2 apoiadores idôneos, termo, juiz multi+MP, validade terceiros, contra-assinatura, risco vai a juiz, denúncia, término', '11 §§ — Capítulo novo'],
];

const tabelaCrimes: [string, string, string, string][] = [
  ['Art. 88', 'Discriminação', 'Reclusão 1-3a multa; mídia 2-5a; +1/3 sob cuidado; busca/apreensão/interdição antes; destruição depois', 'Comunicação social agrava'],
  ['Art. 89', 'Apropriação/desvio BPC etc', 'Reclusão 1-4a multa; +1/3 tutor/curador/síndico etc ou ofício/profissão', 'Tutor/curador agrava'],
  ['Art. 90', 'Abandono hospital/abrigo', 'Reclusão 2-5a (15.163/25); grave 3-7a; morte 8-14a; não prover necessidades básicas mesma pena', 'Penas majoradas 2025'],
  ['Art. 91', 'Retenção cartão/doc', 'Detenção 6m-2a multa; +1/3 tutor/curador; fim vantagem indevida', 'Detenção, não reclusão'],
  ['Lei 7.853 art.8º', 'Recusa escola, concurso, emprego, saúde, ordem judicial, dados; plano saúde', 'Reclusão 2-5a; +1/3 <18; urgência +1/3; responsabilidade administrador', '6 condutas'],
];

const numeros: [string, string, string][] = [
  ['Longo prazo', 'Duração impedimento art.2º', 'Não é permanente'],
  ['4 eixos', 'Biopsicossocial F-E-A-P', 'Art.2º §1º'],
  ['7 finalidades', 'Atendimento prioritário art.9º', 'P-A-R-T-I-R-T'],
  ['11 garantias', 'Saúde art.18 §4º', 'D-H-A-V-P-G-S-I-P-C-O'],
  ['19 incisos', 'Educação art.28', 'Maior artigo LBI'],
  ['3% unidades', 'Reserva habitacional PcD', 'Art.32 I — 1 vez só'],
  ['10% dormitórios', 'Hotéis acessíveis', 'Art.45 — mínimo 1'],
  ['2% vagas', 'Estacionamento PcD mobilidade', 'Art.47 — mínimo 1, credencial nacional'],
  ['10% táxi', 'Frota acessível passageiros', 'Art.51 — sem tarifa extra'],
  ['10% vagas condutor', 'Vagas táxi para condutor PcD', 'Art.119 — carro próprio adaptado'],
  ['1/20 locadoras', 'Veículo adaptado C-D-V-C', 'Art.52'],
  ['10% computadores', 'Telecentros/lan houses', 'Art.63 §3º — mínimo 1'],
  ['4-2-5', 'Plano TA: 4 anos renova, 2 avalia, 5 eixos', 'Art.75'],
  ['2 apoiadores', 'TDA mínimo', 'Art.1.783-A'],
  ['1-3a / 2-5a', 'Discriminação / mídia', 'Art.88'],
  ['1-4a', 'Apropriação', 'Art.89'],
  ['2-5a / 3-7 / 8-14', 'Abandono / grave / morte', 'Art.90 Lei 15.163/25'],
  ['6m-2a', 'Retenção cartão', 'Art.91'],
  ['2-5a', 'Crimes Lei 7.853', 'Art.98 — 6 condutas'],
  ['48/84/24/48m', 'Prazos Libras/cinema/hotel/fretamento', 'Art.125'],
  ['180 dias', 'Vacatio LBI', 'Art.127'],
  ['2 anos', 'Avaliação biopsicossocial', 'Art.124'],
];

const mandamentos = [
  'PcD = impedimento LONGO PRAZO (física, mental, intelectual, sensorial) + BARREIRAS (urbanísticas, arquitetônicas, transportes, comunicações, atitudinais, tecnológicas) = obstrução participação plena. Sem barreira, não há deficiência no modelo social. Avaliação biopsicossocial F-E-A-P multi/interdisciplinar, telemedicina/documental possível.',
  'Discriminação (art.4º §1º): distinção/restrição/exclusão por ação/omissão, propósito OU efeito, incluindo RECUSA ADAPTAÇÃO RAZOÁVEL e TA. Não obrigada a ação afirmativa. Acessibilidade é direito (art.53) que garante vida independente e cidadania.',
  'Atendimento prioritário 7 finalidades (art.9º): proteção/socorro, atendimento público, recursos, transporte acessível, info acessível, restituição IR, tramitação (parte OU interessada). Acompanhante/atendente exceto IR/tramitação. Saúde 11 garantias (art.18 §4º) + acompanhante tempo integral (22) + notificação compulsória suspeita OU confirmação violência (26) público+privado → polícia+MP+Conselhos.',
  'Acessibilidade Título III (53-62): gatilhos art.54 (projetos, concessão/permissão/autorização/habilitação, financiamento público, aval União). DU regra geral, adaptação razoável exceção comprovada. Desde concepção políticas públicas consideram DU. Alvará e habite-se condicionados (art.60). Contas formato acessível a pedido (62) + placas pictogramas baixa tecnologia em praças (62-A).',
  'Informação e comunicação (63-73): sites empresas+governo obrigatoriamente acessíveis com símbolo; telecentros/lan houses 10% PCs acessíveis PcD visual mínimo 1; telecom pleno acesso; telefonia com indicação/ampliação sonora incentivada; radiodifusão tripé legenda oculta + janela Libras + audiodescrição (67); livros formatos acessíveis sem barreira autoral (42 §1º), edital com cláusula impedimento editora sem acessível (68 §1º), digital com leitor tela; consumidor info clara + anúncios com art.67 custeados fornecedor + bulas acessíveis a pedido (69); eventos científico-culturais privados mínimo art.67 (70), públicos acessibilidade total (71); pesquisa com dinheiro público contempla TA (72); capacitação Libras, guia-intérprete, Braille, audiodescrição, estenotipia, legendagem (73) + campanhas acessíveis (73-A).',
  'TA (74-75): direito a produtos/recursos/estratégias que maximizem autonomia, mobilidade, qualidade vida. Plano 4 anos renova, 2 avalia, 5 eixos: crédito subsidiado, importação ágil/prioritária, fomento pesquisa/produção nacional, tributação reduzida/eliminada, inclusão SUS.',
  'Participação política (76): direitos políticos igualdade, votar e ser votada, procedimentos/instalações acessíveis fácil compreensão, VEDADA seção exclusiva, incentivo candidatura e funções públicas com TA, propaganda eleitoral obrigatória e debates TV com art.67, livre exercício voto com auxílio pessoa escolha a pedido, participação ONGs, partidos, organizações representativas. Ciência (77-78): fomento prevenção/tratamento, TA e social, pós-graduação, TICs como superação limitações, governo eletrônico acessível.',
  'Justiça e capacidade (79-87): acesso justiça igualdade com adaptações/TA, capacitação Judiciário/MP/DP/segurança/penitenciário, apenado PcD acessibilidade, DP/MP garantem direitos. TA para todos polos (parte, testemunha, advogado, defensor, juiz, MP) + acesso todos atos processuais inclusive advocacia (80). Sanções penais garantem direitos (81). Art.82 vetado. Cartórios não podem negar/obstar, capacidade plena, descumprir = discriminação (83). Capacidade legal regra (84), curatela extraordinária proporcional menor tempo + contas anuais, TDA facultativa (84). Curatela só patrimonial/negocial (85), não alcança corpo, sexualidade, matrimônio, privacidade, educação, saúde, trabalho, voto; sentença motivada; institucionalizado preferência vínculo familiar/afitivo/comunitário. Documentos oficiais sem curatela (86). Curador provisório relevância/urgência, ouvido MP, de ofício ou requerimento (87).',
  'Crimes (88-91 e 98): discriminação 1-3a (mídia 2-5a) +1/3 cuidado, busca/apreensão/interdição antes, destruição depois (88); apropriação/desvio bens/proventos/pensão/benefícios/remuneração/rendimento 1-4a +1/3 tutor/curador/síndico/liquidatário/inventariante/testamenteiro/depositário/ofício (89); abandono hospital/casa saúde/abrigo 2-5a (Lei 15.163/25) grave 3-7 morte 8-14 + não prover necessidades básicas (90); retenção cartão/meio eletrônico/documento para vantagem indevida 6m-2a detenção +1/3 tutor/curador (91); Lei 7.853 art.8º 6 crimes 2-5a (recusa escola, concurso, emprego, saúde, ordem judicial, dados) +1/3 <18, urgência +1/3, responsabilidade administrador, plano saúde (98).',
  'Cadastro e auxílios (92-95): Cadastro-Inclusão público eletrônico georreferenciado, socioeconômico + barreiras, Executivo federal, integração censos/políticas, convênios, confidencialidade, finalidades políticas públicas/estudos, formatos acessíveis (92); controle interno/externo fiscaliza (93); auxílio-inclusão moderada/grave BPC que entra RGPS ou BPC últimos 5 anos + atividade RGPS (94); vedado exigir comparecimento com ônus desproporcional, atendimento domiciliar residência ou procurador, perícia INSS domiciliar, saúde e Suas domiciliar (95).',
  'Alterações legislativas (96-113): Código Eleitoral 135 §6-A TRE instruções locais votação acessíveis entorno+transporte (96); CLT 428 §6º escolaridade aprendiz PcD por habilidades, §8º 18+ CTPS+entidade qualificada, 433 I inadaptação só se com acessibilidade/TA/apoio (97); Lei 7.853 ações coletivas MP/DP/entes/associação >1 ano/autarquia/empresa pública/fundação (98); FGTS órtese/prótese (99); CDC info acessível e formatos acessíveis a pedido (100); Lei 8.213 dependentes deficiência grave, dispensa PcD só com outra contratação, só direta excluído aprendiz, INSS sem termo curatela (101); Rouanet formato acessível quando possível (102); improbidade art.11 IX deixar cumprir acessibilidade (103); licitações reserva PcD + acessibilidade preferência e execução com fiscalização (104); LOAS conceito LBI + estágio/aprendizagem não conta renda + outros elementos miserabilidade (105); 106 vetado; Lei 9.029 deficiência no rol discriminação trabalho + reintegração (107); IR preferência restituição PcD/dependente (108); CTB praias e estacionamentos privados como vias, vagas sinalizadas, CNH auditiva com legenda/Libras/intérprete (109); Lei Pelé 2,7% loterias 62,96% COB 37,04% CPB (110); Lei 10.048 prioritário PcD, idoso 60+, gestante, lactante, criança colo, obeso (111); Lei 10.098 conceitos LBI, passeio público, semáforo sonoro suave, tátil alerta, carros/cadeiras rodas shoppings (112); Estatuto Cidade calçadas e plano rotas acessíveis integrado transporte (113).',
  'CC revolução (114-116): absolutamente incapazes só menores 16 (art.3º revoga I-III), relativamente ébrios/viciados + quem não puder exprimir vontade (art.4º), PcD testemunha com TA (228 §2º), pode casar idade núbia direta ou via responsável/curador (1.550 §2º), curatela quem não puder exprimir vontade (1.767 I), própria pessoa pode pedir (1.768), MP só mental/intelectual (1.769), juiz multi entrevista (1.771), limites segundo potencialidades circunscritos 1.782 + vontade/preferências (1.772), compartilhada (1.775-A), convivência preservada (1.777); Título IV “Tutela, Curatela e TDA” (115); TDA art.1.783-A 11 §§: 2 apoiadores idôneos vínculos confiança, termo limites/compromissos/prazo, pedido pela apoiada, juiz multi+MP ouve, validade terceiros se nos limites, terceiro pode pedir contra-assinatura, risco/prejuízo + divergência = juiz+MP, denúncia negligência/pressão, destituição, término a qualquer tempo, saída apoiador condicionada juiz, contas curatela (116).',
  'Finais (117-127): cão-guia PcD visual todos transportes e estabelecimentos, internacional origem Brasil (117); museus acessibilidade (118); táxi outorga 10% vagas condutores PcD carro próprio conduzido adaptado, remanescentes demais (119); relatórios circunstanciados cumprimento prazos 10.048/10.098 em 1 ano ao MP/regulação (120); direitos/prazos LBI não excluem outros, norma mais benéfica prevalece (121); regulamento ME/EPP LC123 (122); revogações CC (123); avaliação biopsicossocial instrumentos até 2 anos (124); prazos escalonados 48m Libras, 84m cinema, 24m hotéis, 48m fretamento (125); prorroga IPI veículos PcD até 31/12/21 (126); vacatio 180 dias (127). Jurisprudência: STF ADI 5357 constitucionalidade educação inclusiva privada sem taxa extra; STJ Súmula planos saúde não podem excluir PcD; ADI 2.649 e 3.243 transporte; RE 440.028 acessibilidade; Tema 1.093 STJ BPC.',
];

export default function P10Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="LBI completa · curatela × TDA · CC · crimes · jurisprudência"
          title={
            <>
              O que a banca não perdoa: <span className="italic font-light" style={{ color: '#0f766e' }}>curatela só patrimonial, TDA 2 apoiadores, crimes e CC</span>
            </>
          }
          desc="Parte 10 agora é a LBI inteira (1-127). Aqui estão os quadros que decidem prova: curatela × TDA, impactos no CC, crimes com penas atualizadas (Lei 15.163/25), números que não podem trocar, e jurisprudência STF/STJ."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {destaques.map((d, i) => (
            <Reveal key={d.art} delay={(i % 5) * 0.04}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_26px_60px_-35px_rgba(193,154,61,0.6)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ink px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-gold-2">{d.art}</span>
                  <Star className="size-4 fill-gold text-gold" />
                </div>
                <h3 className="mt-4 font-display text-[15px] font-semibold leading-tight text-ink">{d.t}</h3>
                <p className="mt-3 flex-1 text-[11.5px] leading-relaxed text-ink/70">{d.k}</p>
                <div className="mt-4 rounded-xl border-l-[3px] border-brick/60 bg-brick/[0.06] px-3.5 py-2.5 text-[10.5px] leading-relaxed text-ink/70">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-brick">pegadinha · </span>{d.p}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Gavel className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">Curatela <span className="italic font-light text-gold-3">×</span> Tomada de Decisão Apoiada</h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[62rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[9rem_1fr_1fr] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Critério</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#e3c878' }}>Curatela (arts. 84-85, 1.767-1.777)</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f766e' }}>TDA (art. 1.783-A — 11 §§)</p>
                </div>
                {quadroCuratelaTDA.map(([crit, cur, tda], i) => (
                  <div key={crit} className={`grid grid-cols-[9rem_1fr_1fr] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} hover:bg-gold/[0.08]`}>
                    <p className="flex items-center px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">{crit}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12px] leading-snug text-ink/80">{cur}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12px] leading-snug text-ink/80">{tda}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <FileText className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">Impactos da LBI no Código Civil <span className="italic font-light text-gold-3">— arts. 114-116</span></h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[52rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[8rem_1fr_14rem] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f766e' }}>Dispositivo</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Nova redação / efeito</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">O que muda</p>
                </div>
                {tabelaCC.map(([disp, nova, muda], i) => (
                  <div key={disp} className={`grid grid-cols-[8rem_1fr_14rem] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} hover:bg-gold/[0.08]`}>
                    <p className="flex items-center px-5 py-3.5 font-display text-sm font-bold" style={{ color: '#0f766e' }}>{disp}</p>
                    <p className="border-l border-ink/10 px-5 py-3.5 text-[12px] leading-snug text-ink/80">{nova}</p>
                    <p className="border-l border-ink/10 px-5 py-3.5 text-[11px] leading-snug text-ink/60">{muda}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <ShieldAlert className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">Crimes da LBI <span className="italic font-light text-gold-3">— penas atualizadas Lei 15.163/25</span></h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[60rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[8rem_12rem_1fr_10rem] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#dc2626' }}>Artigo</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Conduta</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Pena</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Detalhe</p>
                </div>
                {tabelaCrimes.map(([art, cond, pena, det], i) => (
                  <div key={art} className={`grid grid-cols-[8rem_12rem_1fr_10rem] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} hover:bg-gold/[0.08]`}>
                    <p className="flex items-center px-5 py-3.5 font-display text-sm font-bold text-ink">{art}</p>
                    <p className="border-l border-ink/10 px-5 py-3.5 text-[12px] leading-snug text-ink/80">{cond}</p>
                    <p className="border-l border-ink/10 px-5 py-3.5 text-[12px] leading-snug text-ink/80">{pena}</p>
                    <p className="border-l border-ink/10 px-5 py-3.5 text-[11px] leading-snug text-ink/60">{det}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Hash className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">Tabela de números <span className="italic font-light text-gold-3">que decidem a questão</span></h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[44rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[10rem_1fr_13rem] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#0f766e' }}>Número</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">O que significa</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Onde está</p>
                </div>
                {numeros.map(([n, s, o], i) => (
                  <div key={n} className={`grid grid-cols-[10rem_1fr_13rem] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} hover:bg-gold/[0.08]`}>
                    <p className="flex items-center px-5 py-3.5 font-display text-base font-bold" style={{ color: '#0f766e' }}>{n}</p>
                    <p className="flex items-center border-l border-ink/10 px-5 py-3.5 text-[13px] leading-snug text-ink/80">{s}</p>
                    <p className="flex items-center border-l border-ink/10 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50">{o}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <BookMarked className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Leis conexas e jurisprudência <span className="italic font-light text-gold-3">— o que a banca cruza</span></h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['CDPD × LBI × CF', 'CDPD Dec. 6.949/09 = emenda constitucional (art.5º §3º). LBI 2015 = lei ordinária que internaliza CDPD. ADI 5357 STF: constitucional educação inclusiva sem taxa extra em privadas. Guatemala Dec. 3.956/01 = supralegal.'],
              ['STF — ADI 5357 e transporte', 'ADI 5357: STF declarou constitucional art.28 §1º (privadas sem taxa extra). ADI 2.649: transporte interestadual acessível. Tema 1.093 STJ BPC: outros elementos miserabilidade além ¼ SM (art.105 §11).'],
              ['STJ — planos e BPC', 'Súmula STJ: planos saúde não podem excluir PcD nem cobrar diferenciado (arts.20 e 23 LBI). BPC: RE 580.963 e Tema 1.093: conceito PcD art.2º + barreiras + vulnerabilidade.'],
              ['Trabalho — cotas', 'Lei 8.213 art.93: empresas 100+ empregados 2% a 5% PcD. Art.93 §1º LBI: dispensa PcD só após contratar outra. §3º só conta contratação direta, aprendiz PcD excluído. Art.36 §6º LBI: habilitação na empresa conta para cota se tempo determinado.'],
              ['Transporte — CTB', 'Art.47 LBI → CTB art.181 XX: estacionar em vaga PcD sem credencial = gravíssima. Credencial nacional, vinculada PcD mobilidade. Art.86-A CTB vagas sinalizadas. Art.147-A CNH auditiva com legenda/Libras/intérprete.'],
              ['Educação — Libras e Rouanet', 'Lei 10.436/02 + Dec.5.626/05 + LBI 28 IV: educação bilíngue Libras L1, português escrito L2; tradutor intérprete médio+proficiência básica, superior graduação. Rouanet art.102: projeto cultural só com incentivo se acessível quando possível.'],
              ['Improbidade e licitação', 'Art.103: deixar cumprir acessibilidade = improbidade princípios art.11 IX Lei 8.429. Art.104: licitação reserva PcD + acessibilidade como critério preferência e execução com fiscalização (66-A).'],
              ['LOAS e IR', 'Art.105: LOAS conceito PcD LBI + estágio/aprendizagem não conta renda + outros elementos miserabilidade. Art.108: IR preferência restituição PcD ou dependente PcD. Art.99: FGTS órtese/prótese.'],
              ['Cão-guia e museus', 'Art.117: Lei 11.126 cão-guia todos transportes e estabelecimentos, internacional origem Brasil. Art.118: museus acessibilidade a todas. Art.119: táxi 10% vagas condutores PcD carro próprio adaptado.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-display text-base font-bold text-ink">{t}</p>
                  <p className="mt-2 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink/70">
                    <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-gold-3" />
                    {d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink">Os 12 entendimentos <span className="italic font-light text-gold-3">consolidados — LBI completa</span></h3>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 md:block">checklist final véspera</p>
            </div>
          </Reveal>
          <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
            {mandamentos.map((m, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.3)}>
                <div className="group flex gap-5 border-b border-ink/10 pb-6">
                  <span className="font-display text-4xl font-black leading-none text-gold-3/90 tabular-nums transition-transform duration-300 group-hover:-translate-y-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm md:text-[14px] leading-relaxed text-ink/75">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.09] to-transparent p-7 md:p-8">
              <div className="flex items-center gap-3">
                <Scale className="size-5 text-gold-3" />
                <h3 className="font-display text-xl font-semibold text-ink">Como estudar a LBI completa para PMPE</h3>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  'Parte A (1-52): conceito, discriminação, prioridade 7 incisos, saúde 11 garantias, educação 19 incisos, trabalho sem aptidão plena, BPC × aposentadoria.',
                  'Parte B (53-127): acessibilidade como direito, DU regra geral, alvará/habite-se condicionados, sites 10% PCs, TV tripé, livros sem barreira autoral.',
                  'TA 74-75: direito + plano 4-2-5; participação 76: sem seção exclusiva, propaganda art.67, auxílio pessoa escolha.',
                  'Justiça 79-83: TA todos polos, cartório capacidade plena = discriminação se negar; curatela só patrimonial, TDA 2 apoiadores.',
                  'Crimes 88-91 atualizados Lei 15.163/25: 2-5a abandono, grave 3-7, morte 8-14; 7.853 2-5a 6 condutas + menor 18 + urgência.',
                  'Alterações 96-113: cota PcD só direta sem aprendiz, dispensa só com outra, improbidade sem acessibilidade, licitação com fiscalização.',
                  'CC 114-116: só menor 16 absolutamente incapaz; PcD testemunha, casa, curatela compartilhada, TDA 11 §§.',
                  'Finais 121/125/127: norma mais benéfica, prazos 48m Libras, 84m cinema, 24m hotéis, 48m fretamento, 180d vacatio.',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                    <Info className="mt-0.5 size-4 shrink-0 text-gold-3" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
