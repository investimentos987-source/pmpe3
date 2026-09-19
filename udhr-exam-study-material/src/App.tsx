import { useEffect, useState } from 'react';
import { CalendarDays, MapPin, FileText, Handshake, Landmark, Gavel, Users } from 'lucide-react';
import type { View } from './views';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Chapter, { type ChapterCfg } from './components/Chapter';
import Footer from './components/Footer';
import P1Context from './components/parts/P1Context';
import P1Extras from './components/parts/P1Extras';
import P2Context from './components/parts/P2Context';
import P2Extras from './components/parts/P2Extras';
import P3Context from './components/parts/P3Context';
import P3Extras from './components/parts/P3Extras';
import { artigos as artigosP1, blocoHex as blocoP1 } from './data/p1/articles';
import { questoes as questoesP1 } from './data/p1/questions';
import { artigos as artigosP2, blocoHex as blocoP2 } from './data/p2/articles';
import { questoes as questoesP2 } from './data/p2/questions';
import { artigos as artigosP3, blocoHex as blocoP3 } from './data/p3/articles';
import { questoes as questoesP3 } from './data/p3/questions';
import P4Context from './components/parts/P4Context';
import P4Extras from './components/parts/P4Extras';
import { artigos as artigosP4, blocoHex as blocoP4 } from './data/p4/articles';
import { questoes as questoesP4 } from './data/p4/questions';
import P5Context from './components/parts/P5Context';
import P5Extras from './components/parts/P5Extras';
import { artigos as artigosP5, blocoHex as blocoP5 } from './data/p5/articles';
import { questoes as questoesP5 } from './data/p5/questions';
import P5bContext from './components/parts/P5bContext';
import P5bExtras from './components/parts/P5bExtras';
import { artigos as artigosP5b, blocoHex as blocoP5b } from './data/p5b/articles';
import { questoes as questoesP5b } from './data/p5b/questions';
import P6Context from './components/parts/P6Context';
import P6Extras from './components/parts/P6Extras';
import { artigos as artigosP6, blocoHex as blocoP6 } from './data/p6/articles';
import { questoes as questoesP6 } from './data/p6/questions';
import P7Context from './components/parts/P7Context';
import P7Extras from './components/parts/P7Extras';
import { artigos as artigosP7, blocoHex as blocoP7 } from './data/p7/articles';
import { questoes as questoesP7 } from './data/p7/questions';
import P8Context from './components/parts/P8Context';
import P8Extras from './components/parts/P8Extras';
import { artigos as artigosP8, blocoHex as blocoP8 } from './data/p8/articles';
import { questoes as questoesP8 } from './data/p8/questions';
import P9Context from './components/parts/P9Context';
import P9Extras from './components/parts/P9Extras';
import { artigos as artigosP9, blocoHex as blocoP9 } from './data/p9/articles';
import { questoes as questoesP9 } from './data/p9/questions';
import P10Context from './components/parts/P10Context';
import P10Extras from './components/parts/P10Extras';
import { artigos as artigosP10, blocoHex as blocoP10 } from './data/p10/articles';
import { questoes as questoesP10 } from './data/p10/questions';
import P11Context from './components/parts/P11Context';
import P11Extras from './components/parts/P11Extras';
import { artigos as artigosP11, blocoHex as blocoP11 } from './data/p11/articles';
import { questoes as questoesP11 } from './data/p11/questions';
import P12Context from './components/parts/P12Context';
import P12Extras from './components/parts/P12Extras';
import { artigos as artigosP12, blocoHex as blocoP12 } from './data/p12/articles';
import { questoes as questoesP12 } from './data/p12/questions';
import P13Context from './components/parts/P13Context';
import P13Extras from './components/parts/P13Extras';
import { artigos as artigosP13, blocoHex as blocoP13 } from './data/p13/articles';
import { questoes as questoesP13 } from './data/p13/questions';

const BANCAS_CHIP = 'Banca-alvo: AOCP · Cebraspe · FGV · FCC · Vunesp';

const ticker = (arts: { n: number; sintese: string }[]) =>
  arts.map((a) => `Art. ${a.n}º — ${a.sintese}`);

const P1: ChapterCfg = {
  hero: {
    parte: 'Parte 1 · DUDH 1948',
    accent: '#e3c878',
    image: 'images/hero-globe.jpg',
    ghost: '1948',
    titleTop: 'Declaração Universal',
    titleBottom: 'dos Direitos Humanos',
    officialName: 'Resolução nº 217 A (III) · Assembleia Geral das Nações Unidas · Paris',
    quote: '“Todos os seres humanos nascem livres e iguais em dignidade e em direitos.”',
    quoteRef: 'Art. 1º · o mais lido das provas',
    chips: [
      { icon: CalendarDays, text: '10 de dezembro de 1948' },
      { icon: MapPin, text: 'Palais de Chaillot · Paris' },
      { icon: FileText, text: BANCAS_CHIP },
    ],
    stats: [
      { value: 30, label: 'artigos analisados' },
      { value: 5, label: 'blocos temáticos' },
      { value: 10, label: 'questões comentadas' },
      { value: 78, suffix: ' anos', label: 'caindo em prova' },
    ],
    dial: 'votes',
    menuExtras: 'Comparativo',
    tempoLeitura: '2h30 focado',
    tempoDetalhe: 'Contexto 20min + 30 arts 70min + Quadro 15min + Simulado 30min',
  },
  tickerItems: ticker(artigosP1),
  artigos: artigosP1,
  blocoHex: blocoP1,
  artigosTitulo: (
    <>
      Os 30 artigos, <span className="italic font-light text-gold-3">sem escapatória</span>
    </>
  ),
  artigosDesc:
    'Para cada artigo: o que diz o texto, o que as bancas mais cobram, a pegadinha clássica, um exemplo prático e o macete do professor.',
  synopticGhost: 'XXX',
  synopticDesc:
    'Leia este quadro no dia anterior à prova: número, direito-chave, síntese e bloco. Se você reconhecer as 30 linhas em menos de cinco minutos, está aprovado na literalidade.',
  questoes: questoesP1,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado. Responda, confirme e leia o comentário: é assim que se estuda.',
  Context: P1Context,
  Extras: P1Extras,
};

const P2: ChapterCfg = {
  hero: {
    parte: 'Parte 2 · Res. 36/55',
    accent: '#5eead4',
    image: 'images/hero-stained.jpg',
    ghost: '1981',
    titleTop: 'Eliminação da Intolerância',
    titleBottom: 'e da Discriminação Religiosa',
    officialName:
      'Declaração sobre a Eliminação de Todas as Formas de Intolerância e de Discriminação Fundadas na Religião ou nas Convicções',
    quote: '“Toda pessoa tem direito à liberdade de pensamento, de consciência e de religião.”',
    quoteRef: 'Art. 1º · o coração do documento',
    chips: [
      { icon: CalendarDays, text: '25 de novembro de 1981' },
      { icon: Handshake, text: 'Aprovada por consenso — sem votação' },
      { icon: Landmark, text: BANCAS_CHIP },
    ],
    stats: [
      { value: 8, label: 'artigos analisados' },
      { value: 9, label: 'liberdades do art. 6º' },
      { value: 10, label: 'questões comentadas' },
      { value: 45, suffix: ' anos', label: 'em vigor na ONU' },
    ],
    dial: 'rosette',
    menuExtras: 'Conceitos',
    tempoLeitura: '1h30 focado',
    tempoDetalhe: 'Contexto 15min + 8 arts 25min + Quadro 10min + Simulado 30min',
  },
  tickerItems: ticker(artigosP2),
  artigos: artigosP2,
  blocoHex: blocoP2,
  artigosTitulo: (
    <>
      Os 8 artigos, <span className="italic font-light text-gold-3">palavra por palavra</span>
    </>
  ),
  artigosDesc:
    'Documento curto, cobrança densa: para cada artigo, o que diz o texto, o que as bancas cobram, a pegadinha clássica, um exemplo prático e o macete do professor.',
  synopticGhost: 'VIII',
  synopticDesc:
    'Leia este quadro no dia anterior à prova: se você reconhecer as 8 linhas em menos de dois minutos, a literalidade está dominada.',
  questoes: questoesP2,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado. Responda, confirme e leia o comentário: é assim que se estuda.',
  Context: P2Context,
  Extras: P2Extras,
};

const P3: ChapterCfg = {
  hero: {
    parte: 'Parte 3 · CEDAW 1979',
    accent: '#f0a5c0',
    image: 'images/hero-cedaw.jpg',
    ghost: '1979',
    titleTop: 'Convenção CEDAW',
    titleBottom: 'Contra a Discriminação da Mulher',
    officialName:
      'Convenção sobre a Eliminação de Todas as Formas de Discriminação Contra a Mulher — Resolução 34/180 · Assembleia Geral da ONU',
    quote: '“Qualquer distinção, exclusão ou restrição baseada no sexo [...] é discriminação contra a mulher.”',
    quoteRef: 'Art. 1º · a definição de ouro',
    chips: [
      { icon: CalendarDays, text: '18 de dezembro de 1979' },
      { icon: Gavel, text: 'Convenção vinculante · vigência 3/9/1981' },
      { icon: Users, text: 'Comitê CEDAW · 23 peritos' },
    ],
    stats: [
      { value: 30, label: 'artigos analisados' },
      { value: 23, label: 'peritos no Comitê' },
      { value: 10, label: 'questões comentadas' },
      { value: 1984, label: 'Brasil ratifica (supralegal)' },
    ],
    dial: 'seal',
    sealCfg: {},
    menuExtras: 'Destaques',
    tempoLeitura: '2h30 focado',
    tempoDetalhe: 'Contexto 20min + 30 arts 70min + Quadro 15min + Simulado 30min',
  },
  tickerItems: ticker(artigosP3),
  artigos: artigosP3,
  blocoHex: blocoP3,
  artigosTitulo: (
    <>
      Os 30 artigos, em{' '}
      <span className="italic font-light text-gold-3">seis partes</span>
    </>
  ),
  artigosDesc:
    'Da definição às cláusulas finais, organizados pelas seis partes da Convenção — com destaque dourado para os 9 artigos que dominam as provas.',
  synopticGhost: 'XXX',
  synopticDesc:
    'O mapa completo da Convenção em uma tela: parte, direito-chave e síntese. Os marcados com ★ são os destaques especiais do professor.',
  questoes: questoesP3,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado. Responda, confirme e leia o comentário: é assim que se estuda.',
  Context: P3Context,
  Extras: P3Extras,
};

const P4: ChapterCfg = {
  hero: {
    parte: 'Parte 4 · Criança 1989',
    accent: '#7cc0f5',
    image: 'images/hero-crc.jpg',
    ghost: '1989',
    titleTop: 'Convenção sobre os',
    titleBottom: 'Direitos da Criança',
    officialName:
      'Resolução 44/25 · Assembleia Geral das Nações Unidas · adotada por consenso · 196 Estados-partes',
    quote: '“Em todas as medidas relativas às crianças, o interesse maior da criança será a consideração primordial.”',
    quoteRef: 'Art. 3º · o princípio dos princípios',
    chips: [
      { icon: CalendarDays, text: '20 de novembro de 1989' },
      { icon: Gavel, text: 'Convenção vinculante · vigor 2/9/1990' },
      { icon: Users, text: 'Comitê · 18 peritos · relatórios 2 + 5' },
    ],
    stats: [
      { value: 54, label: 'artigos analisados' },
      { value: 4, label: 'princípios fundamentais' },
      { value: 10, label: 'questões comentadas' },
      { value: 196, label: 'Estados-partes' },
    ],
    dial: 'crc',
    menuExtras: 'Destaques & ECA',
    tempoLeitura: '3h00 focado',
    tempoDetalhe: 'Contexto 25min + 54 arts 90min + Quadro 20min + Simulado 35min',
  },
  tickerItems: ticker(artigosP4),
  artigos: artigosP4,
  blocoHex: blocoP4,
  artigosTitulo: (
    <>
      Os 54 artigos, <span className="italic font-light text-gold-3">do art. 1º ao 54</span>
    </>
  ),
  artigosDesc:
    'A Convenção inteira, organizada em sete blocos temáticos — com destaque dourado para os artigos que decidem a questão na prova.',
  synopticGhost: 'LIV',
  synopticDesc:
    'O mapa completo da Convenção: artigo, direito-chave, síntese e bloco. Os marcados com ★ são os destaques especiais do professor.',
  questoes: questoesP4,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado. Responda, confirme e leia o comentário: é assim que se estuda.',
  Context: P4Context,
  Extras: P4Extras,
};

const P5: ChapterCfg = {
  hero: {
    parte: 'Parte 5 · ECA Livro I',
    accent: '#8ed6a0',
    image: 'images/hero-eca.jpg',
    ghost: '1990',
    titleTop: 'Estatuto da Criança',
    titleBottom: 'e do Adolescente · Parte Geral',
    officialName:
      'Lei nº 8.069, de 13 de julho de 1990 · Livro I — Parte Geral · arts. 1º ao 85 · doutrina da proteção integral',
    quote: '“Considera-se criança a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos.”',
    quoteRef: 'Art. 2º · o artigo mais cobrado do ECA',
    chips: [
      { icon: CalendarDays, text: '13 de julho de 1990' },
      { icon: Gavel, text: 'Revogou o Código de Menores (Lei 6.697/79)' },
      { icon: Users, text: 'CF art. 227 + Convenção ONU 1989' },
    ],
    stats: [
      { value: 85, label: 'artigos analisados' },
      { value: 9, label: 'blocos temáticos' },
      { value: 10, label: 'questões comentadas' },
      { value: 267, label: 'artigos na lei inteira' },
    ],
    dial: 'eca',
    menuExtras: 'Destaques & G-T-A',
    tempoLeitura: '3h30 focado',
    tempoDetalhe: 'Contexto 30min + 85 arts 120min + Quadro 20min + Simulado 35min',
  },
  tickerItems: ticker(artigosP5),
  artigos: artigosP5,
  blocoHex: blocoP5,
  artigosTitulo: (
    <>
      Os 85 artigos do <span className="italic font-light text-gold-3">Livro I</span>
    </>
  ),
  artigosDesc:
    'Da definição de criança às regras de viagem, artigo por artigo, em nove blocos temáticos — com destaque dourado para os dispositivos que decidem a questão na prova.',
  synopticGhost: 'LXXXV',
  synopticDesc:
    'O mapa completo da Parte Geral: artigo, direito-chave, síntese e bloco. Os marcados com ★ são os destaques especiais do professor.',
  questoes: questoesP5,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado. Responda, confirme e leia o comentário: é assim que se estuda.',
  Context: P5Context,
  Extras: P5Extras,
};

const P5B: ChapterCfg = {
  hero: {
    parte: 'Parte 5B · ECA Livro II',
    accent: '#f0a5c0',
    image: 'images/hero-eca.jpg',
    ghost: 'II',
    titleTop: 'ECA — Parte Especial',
    titleBottom: 'Medidas, Conselho Tutelar e Justiça',
    officialName:
      'Lei nº 8.069/1990 · Livro II — Parte Especial · arts. 86 ao 267 · política de atendimento, medidas, ato infracional, Conselho Tutelar, acesso à Justiça, crimes e infrações',
    quote: '“A internação constitui medida privativa da liberdade, sujeita aos princípios de brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento.”',
    quoteRef: 'Art. 121 · o artigo mais cobrado do Livro II',
    chips: [
      { icon: Gavel, text: 'Internação: 6 meses · 3 anos · 21 anos' },
      { icon: Users, text: 'Conselho Tutelar: 5 membros · 4 anos' },
      { icon: CalendarDays, text: 'SINASE · Lei 12.594/2012' },
    ],
    stats: [
      { value: 182, label: 'artigos (86 a 267)' },
      { value: 6, label: 'medidas socioeducativas' },
      { value: 12, label: 'súmulas mapeadas' },
      { value: 10, label: 'questões comentadas' },
    ],
    dial: 'eca',
    menuExtras: 'Socioeducativas & Súmulas',
    tempoLeitura: '4h30 focado',
    tempoDetalhe: 'Contexto 35min + 182 arts 150min + Quadro 25min + Simulado 45min',
  },
  tickerItems: ticker(artigosP5b),
  artigos: artigosP5b,
  blocoHex: blocoP5b,
  artigosTitulo: (
    <>
      Do art. 86 ao 267, <span className="italic font-light text-gold-3">o ECA na prática</span>
    </>
  ),
  artigosDesc:
    'Política de atendimento, medidas de proteção, ato infracional, socioeducativas, Conselho Tutelar, acesso à Justiça, crimes e infrações administrativas — com destaque dourado para os dispositivos que decidem a questão.',
  synopticGhost: 'CCLXVII',
  synopticDesc:
    'O mapa completo da Parte Especial: artigo, tema-chave, síntese e bloco. Os marcados com ★ são os destaques especiais do professor.',
  questoes: questoesP5b,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado e súmulas dos tribunais superiores. Responda, confirme e leia o comentário.',
  Context: P5bContext,
  Extras: P5bExtras,
};

const P6: ChapterCfg = {
  hero: {
    parte: 'Parte 6 · CIEFDR + CERD',
    accent: '#e8a36b',
    image: 'images/hero-globe.jpg',
    ghost: '1965',
    titleTop: 'Convenção contra a',
    titleBottom: 'Discriminação Racial',
    officialName:
      'Convenção Internacional sobre a Eliminação de Todas as Formas de Discriminação Racial · Res. 2106 A (XX), 21/12/1965 · Decreto nº 65.810/1969 · + Declaração Facultativa, Decreto nº 4.738/2003',
    quote: '“Qualquer distinção, exclusão, restrição ou preferência baseada na raça, cor, descendência ou origem nacional ou étnica.”',
    quoteRef: 'Art. 1º, §1º · a definição cobradíssima',
    chips: [
      { icon: CalendarDays, text: '21 de dezembro de 1965' },
      { icon: Gavel, text: 'Convenção vinculante · vigor 4/1/1969' },
      { icon: Users, text: 'Comitê CERD · 18 peritos · 2003' },
    ],
    stats: [
      { value: 25, label: 'artigos analisados' },
      { value: 18, label: 'peritos no Comitê' },
      { value: 10, label: 'questões comentadas' },
      { value: 2003, label: 'petição individual (Dec.)' },
    ],
    dial: 'seal',
    sealCfg: {
      count: 25,
      res: '65',
      mid: 'convenção · tratado',
      midAccent: 'CERD · 18 peritos',
      footer: '25 artigos · Dec. 65.810/1969',
    },
    menuExtras: 'Destaques & BR',
    tempoLeitura: '2h00 focado',
    tempoDetalhe: 'Contexto 20min + 25 arts 50min + Quadro 15min + Simulado 30min',
  },
  tickerItems: ticker(artigosP6),
  artigos: artigosP6,
  blocoHex: blocoP6,
  artigosTitulo: (
    <>
      Os arts. 1º a 25, <span className="italic font-light text-gold-3">com os destaques dourados</span>
    </>
  ),
  artigosDesc:
    'Texto em incisos um a um, com grifo colorido automático e justificação — destaque dourado para os artigos que decidem a questão na prova.',
  synopticGhost: 'XXV',
  synopticDesc:
    'O mapa completo da CIEFDR e do Comitê: artigo, direito-chave, síntese e bloco. Os marcados com ★ são os destaques especiais do professor.',
  questoes: questoesP6,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado e jurisprudência destacada. Responda, confirme e leia o comentário.',
  Context: P6Context,
  Extras: P6Extras,
};

const P7: ChapterCfg = {
  hero: {
    parte: 'Parte 7 · Lei 10.741/2003',
    accent: '#b8a7e9',
    image: 'images/hero-cedaw.jpg',
    ghost: '2003',
    titleTop: 'Estatuto da',
    titleBottom: 'Pessoa Idosa',
    officialName:
      'Lei nº 10.741, de 1º de outubro de 2003 · 118 artigos em 7 títulos · prioridade absoluta, direitos fundamentais, medidas de proteção, política de atendimento, acesso à justiça, crimes e infrações administrativas',
    quote: '“Considera-se pessoa idosa aquela com idade igual ou superior a 60 (sessenta) anos.”',
    quoteRef: 'Art. 2º · o conceito mais cobrado',
    chips: [
      { icon: CalendarDays, text: '1º de outubro de 2003' },
      { icon: Gavel, text: '118 artigos · 16 crimes próprios' },
      { icon: Users, text: 'Prioridade absoluta · CF art. 230' },
    ],
    stats: [
      { value: 118, label: 'artigos na lei' },
      { value: 60, label: 'anos — o conceito de idoso' },
      { value: 16, label: 'crimes em espécie' },
      { value: 10, label: 'questões comentadas' },
    ],
    dial: 'seal',
    sealCfg: {
      count: 118,
      top: 'Lei federal',
      res: '10.741',
      mid: 'estatuto · 118 artigos',
      midAccent: 'prioridade absoluta',
      footer: 'Lei 10.741/2003 · 1º/10/2003',
    },
    menuExtras: 'Destaques & Números',
    tempoLeitura: '3h30 focado',
    tempoDetalhe: 'Contexto 30min + 118 arts 120min + Quadro 20min + Simulado 35min',
  },
  tickerItems: ticker(artigosP7),
  artigos: artigosP7,
  blocoHex: blocoP7,
  artigosTitulo: (
    <>
      Do art. 1º ao 118, <span className="italic font-light text-gold-3">em 7 títulos</span>
    </>
  ),
  artigosDesc:
    'Do conceito de idoso (60 anos) às infrações administrativas, em blocos temáticos com incisos um a um, grifo colorido e justificação — com destaque dourado para os dispositivos que decidem a questão na prova.',
  synopticGhost: 'CXVIII',
  synopticDesc:
    'O mapa completo do Estatuto por capítulos: artigo, tema-chave, síntese e título. Os marcados com ★ são os destaques especiais do professor.',
  questoes: questoesP7,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado, a tabela de números do estatuto e os crimes em espécie. Responda, confirme e leia o comentário.',
  Context: P7Context,
  Extras: P7Extras,
};

const P8: ChapterCfg = {
  hero: {
    parte: 'Parte 8 · Tortura — sistema interamericano',
    accent: '#f08f7c',
    image: 'images/hero-stained.jpg',
    ghost: '1985',
    titleTop: 'Convenção Interamericana',
    titleBottom: 'para Prevenir e Punir a Tortura',
    officialName:
      'Cartagena, Colômbia · 9 de dezembro de 1985 · promulgada no Brasil pelo Decreto nº 98.386/1989 · sistema OEA e Corte Interamericana · comparada à Convenção da ONU (Decreto nº 40/1991) e à Lei nº 9.455/1997',
    quote: '“O fato de ter-se agido por ordem de superior hierárquico não isentará da responsabilidade penal correspondente.”',
    quoteRef: 'Art. 4º · a isenção que não existe',
    chips: [
      { icon: CalendarDays, text: 'Cartagena · 9 de dezembro de 1985' },
      { icon: Gavel, text: 'Decreto 98.386/1989 · norma supralegal' },
      { icon: Users, text: 'Comissão e Corte Interamericanas (Corte IDH)' },
    ],
    stats: [
      { value: 17, label: 'artigos analisados' },
      { value: 3, label: 'normas confrontadas' },
      { value: 4, label: 'casos da Corte IDH' },
      { value: 10, label: 'questões comentadas' },
    ],
    dial: 'seal',
    sealCfg: {
      count: 17,
      top: 'Convenção Interamericana',
      res: '98/386',
      mid: 'prevenir e punir',
      midAccent: 'jurisdição universal',
      footer: '17 artigos · Dec. 98.386/1989',
    },
    menuExtras: 'Quadro & Jurisprudência',
    tempoLeitura: '2h00 focado',
    tempoDetalhe: 'Contexto 20min + 17 arts 40min + Quadro 15min + Simulado 35min',
  },
  tickerItems: ticker(artigosP8),
  artigos: artigosP8,
  blocoHex: blocoP8,
  artigosTitulo: (
    <>
      Os arts. 1º a 17, <span className="italic font-light" style={{ color: '#f08f7c' }}>artigo por artigo</span>
    </>
  ),
  artigosDesc:
    'Da definição ampla do art. 2º à jurisdição universal e à não devolução, com incisos um a um, grifo colorido e justificação — comparada à Convenção da ONU e à Lei nº 9.455/1997.',
  synopticGhost: 'XVII',
  synopticDesc:
    'O mapa completo da Convenção: artigo, tema-chave, síntese e bloco. Os marcados com ★ são os destaques especiais do professor.',
  questoes: questoesP8,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado e a jurisprudência da Corte Interamericana (Herzog e Ximenes Lopes). Responda, confirme e leia o comentário.',
  Context: P8Context,
  Extras: P8Extras,
};

const P9: ChapterCfg = {
  hero: {
    parte: 'Parte 9 · PcD — Convenção da Guatemala',
    accent: '#9db4ff',
    image: 'images/hero-crc.jpg',
    ghost: '1999',
    titleTop: 'Convenção da Guatemala',
    titleBottom: 'Discriminação e Deficiência',
    officialName:
      'Convenção Interamericana para a Eliminação de Todas as Formas de Discriminação contra as Pessoas Portadoras de Deficiência · OEA, Cidade da Guatemala, 1999 · Decreto nº 3.956/2001 · comparada à CDPD da ONU (Decreto 6.949/2009) e à Lei 13.146/2015 (LBI)',
    quote: '“Toda distinção, exclusão ou restrição baseada em deficiência, antecedente de deficiência, consequência de deficiência anterior ou percepção de deficiência presente ou passada…”',
    quoteRef: 'Art. I, § 2º · a definição mais ampla do sistema',
    chips: [
      { icon: CalendarDays, text: 'Cidade da Guatemala · 7 de junho de 1999' },
      { icon: Gavel, text: 'Decreto 3.956/2001 · status supralegal' },
      { icon: Users, text: 'CDPD: emenda constitucional · LBI: lei ordinária' },
    ],
    stats: [
      { value: 10, label: 'artigos analisados' },
      { value: 3, label: 'normas confrontadas' },
      { value: 10, label: 'questões comentadas' },
      { value: 2001, label: 'promulgação brasileira' },
    ],
    dial: 'seal',
    sealCfg: {
      count: 10,
      top: 'Convenção Interamericana',
      res: '3/956',
      mid: 'Convenção da Guatemala',
      midAccent: 'supralegal no Brasil',
      footer: '10 artigos · Dec. 3.956/2001',
    },
    menuExtras: 'Quadro & LBI',
    tempoLeitura: '1h45 focado',
    tempoDetalhe: 'Contexto 15min + 10 arts 30min + Quadro 15min + Simulado 35min',
  },
  tickerItems: ticker(artigosP9),
  artigos: artigosP9,
  blocoHex: blocoP9,
  artigosTitulo: (
    <>
      Do art. I ao X, <span className="italic font-light" style={{ color: '#9db4ff' }}>artigo por artigo</span>
    </>
  ),
  artigosDesc:
    'Das definições do art. I (deficiência, discriminação e diferenciação) às cláusulas finais, com incisos um a um, grifo colorido e justificação — e a tríade de status: supralegal, emenda constitucional e lei ordinária.',
  synopticGhost: 'X',
  synopticDesc:
    'O mapa completo da Convenção da Guatemala: artigo, tema-chave, síntese e bloco. Os marcados com ★ são os destaques especiais do professor.',
  questoes: questoesP9,
  quizDesc:
    'Questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — incluindo itens de Certo/Errado e a tríade de status (Guatemala, CDPD e LBI). Responda, confirme e leia o comentário.',
  Context: P9Context,
  Extras: P9Extras,
};

const P10: ChapterCfg = {
  hero: {
    parte: 'Parte 10 · LBI — Lei 13.146/2015',
    accent: '#0f766e',
    image: 'images/hero-eca.jpg',
    ghost: '2015',
    titleTop: 'Estatuto da Pessoa',
    titleBottom: 'com Deficiência — LBI Completa',
    officialName:
      'Lei nº 13.146, de 6 de julho de 2015 · Arts. 1º ao 127º · LBI completa: direitos fundamentais, acessibilidade (53-62), info/comunicação/livros/TA (63-75), participação política (76-78), justiça e capacidade (79-87), crimes (88-91), cadastro/auxílios (92-95), 18 alterações legislativas (96-113), CC revolução e TDA (114-116), disposições finais (117-127) · base CDPD Dec. 6.949/2009 (emenda)',
    quote: '“A deficiência não afeta a plena capacidade civil da pessoa, inclusive para casar-se e constituir união estável.”',
    quoteRef: 'Art. 6º + Art. 84 — capacidade é regra, curatela extraordinária',
    chips: [
      { icon: CalendarDays, text: '6 de julho de 2015 · 127 artigos · 180d vacatio' },
      { icon: Gavel, text: 'Base CDPD 2006 · Dec. 6.949/2009 (emenda) · norma mais benéfica' },
      { icon: Users, text: '20 blocos · curatela só patrimonial × TDA 2 apoiadores · crimes 1-3a/2-5a' },
    ],
    stats: [
      { value: 127, label: 'artigos analisados (LBI completa)' },
      { value: 20, label: 'blocos temáticos' },
      { value: 20, label: 'questões comentadas' },
      { value: 2015, label: 'Lei Brasileira de Inclusão' },
    ],
    dial: 'seal',
    sealCfg: {
      count: 127,
      top: 'Lei federal',
      res: '13.146',
      mid: 'estatuto · 127 artigos',
      midAccent: 'modelo social + TDA',
      footer: 'Lei 13.146/2015 · 6/7/2015 · 180 dias',
    },
    menuExtras: 'Curatela × TDA & Crimes',
    tempoLeitura: '5h00 focado',
    tempoDetalhe: 'Contexto 40min + 127 arts 180min + Quadro 30min + Simulado 50min',
  },
  tickerItems: ticker(artigosP10),
  artigos: artigosP10,
  blocoHex: blocoP10,
  artigosTitulo: (
    <>
      Do art. 1º ao 127º, <span className="italic font-light" style={{ color: '#0f766e' }}>LBI completa artigo por artigo</span>
    </>
  ),
  artigosDesc:
    'A LBI inteira, do conceito biopsicossocial (art. 2º) à vigência 180 dias (art. 127): igualdade, saúde 11 garantias, educação 19 incisos sem taxa extra, moradia 3%, trabalho sem aptidão plena, transporte 2%/10%/1-20, acessibilidade como direito e DU regra geral, sites 10% PCs, TV legenda/Libras/audiodescrição, livros sem barreira autoral, TA direito + plano 4-2-5, participação política sem seção exclusiva, justiça com TA, cartórios capacidade plena, curatela só patrimonial × TDA 2 apoiadores (11 §§), crimes 1-3a/2-5a/1-4a/2-5a/6m-2a e Lei 7.853 2-5a, Cadastro-Inclusão georreferenciado, auxílio-inclusão, alterações CC (só menor 16 absolutamente incapaz) e 18 leis, norma mais benéfica e prazos 24/48/84m.',
  synopticGhost: 'CXXVII',
  synopticDesc:
    'O mapa completo da LBI 1-127: artigo, tema-chave, síntese e bloco. Os marcados com ★ são os destaques de ouro — curatela só patrimonial, TDA 2 apoiadores, crimes, CC, prazos. Leia na véspera.',
  questoes: questoesP10,
  quizDesc:
    '20 questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — Parte A (modelo social, discriminação, prioridade, saúde, educação, trabalho, BPC, transporte) + Parte B (acessibilidade DU, sites 10%, TV tripé, livros, TA 4-2-5, participação sem seção exclusiva, justiça com TA, curatela × TDA, crimes 1-3a/2-5a/1-4a/2-5a/6m-2a, cadastro, cota PcD só direta, improbidade acessibilidade, CC revolução, norma mais benéfica, prazos). Responda, confirme e leia o comentário.',
  Context: P10Context,
  Extras: P10Extras,
};

const P11: ChapterCfg = {
  hero: {
    parte: 'Parte 11 · CAT ONU — Decreto 40/1991',
    accent: '#991b1b',
    image: 'images/hero-stained.jpg',
    ghost: '1984',
    titleTop: 'Convenção da ONU contra',
    titleBottom: 'Tortura — Decreto 40/1991',
    officialName:
      'Convenção contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes · AG ONU 10/12/1984 · vigor internacional 26/06/1987 · DL 4/89 · depósito Brasil 28/09/89 · vigor Brasil 28/10/89 · Decreto 40/1991 · 33 artigos · Comitê CAT 10 peritos · OPCAT 2002 Dec.6.085/07 · MNPCT Lei 12.847/13',
    quote: '“Para os fins da presente Convenção, tortura designa qualquer ato pelo qual dores ou sofrimentos agudos, físicos ou mentais, são infligidos intencionalmente [...] por funcionário público ou outra pessoa no exercício de funções públicas.”',
    quoteRef: 'Art. 1º · definição D-I-F-A + finalidade I-C-I-D + agente público',
    chips: [
      { icon: CalendarDays, text: '10/12/1984 adotada · 26/06/1987 vigor · Dec.40/91' },
      { icon: Gavel, text: 'Jus cogens · non-refoulement art.3º · aut dedere art.7º · prova ilícita art.15' },
      { icon: Users, text: 'CAT 10 peritos 4a · OPCAT SPT+MNPCT 11 peritos 3a · 7 blocos' },
    ],
    stats: [
      { value: 34, label: 'artigos analisados + OPCAT' },
      { value: 7, label: 'blocos temáticos' },
      { value: 10, label: 'questões comentadas' },
      { value: 1984, label: 'Convenção ONU' },
    ],
    dial: 'seal',
    sealCfg: {
      count: 34,
      top: 'Convenção ONU',
      res: '40/91',
      mid: 'CAT · 33 artigos + OPCAT',
      midAccent: 'jus cogens · 10 peritos',
      footer: 'Dec.40/1991 · 10/12/1984 · 26/06/1987',
    },
    menuExtras: 'Quadro ONU×OEA×Lei 9.455',
    tempoLeitura: '2h30 focado',
    tempoDetalhe: 'Contexto 25min + 34 arts 60min + Quadro 20min + Simulado 35min',
  },
  tickerItems: ticker(artigosP11),
  artigos: artigosP11,
  blocoHex: blocoP11,
  artigosTitulo: (
    <>
      Do art. 1º ao 33º + OPCAT, <span className="italic font-light" style={{ color: '#991b1b' }}>artigo por artigo</span>
    </>
  ),
  artigosDesc:
    'A CAT completa: definição D-I-F-A (dor aguda, intencional, finalidade I-C-I-D, agente público), jus cogens art.2º, non-refoulement art.3º, criminalização art.4º, jurisdição universal art.5º, detenção art.6º, aut dedere art.7º, extradição art.8º com base legal e ficção territorial, assistência art.9º, prevenção ensino art.10 + revisão art.11, ex officio art.12, queixa protegida art.13, reparação art.14 com reabilitação, prova ilícita art.15, outros maus-tratos art.16, CAT 10 peritos 4a quorum 6, relatórios 1a+4a, investigação sistemática confidencial visita com anuência art.20, comunicações facultativas 5 Estados 3-6-12m art.21 e 6m art.22, reservas art.20 e 30, emendas, denúncia 1a, 6 línguas, e OPCAT preventivo SPT+MNPCT 11 peritos 3a sem aviso.',
  synopticGhost: 'XXXIII',
  synopticDesc:
    'O mapa completo da CAT ONU: artigo, tema-chave, síntese e bloco. Os marcados com ★ são os destaques de ouro — D-I-F-A, jus cogens, non-refoulement, aut dedere, 10 peritos, OPCAT. Leia na véspera.',
  questoes: questoesP11,
  quizDesc:
    '10 questões inéditas no padrão AOCP, Cebraspe, FGV, FCC e Vunesp — definição tortura D-I-F-A, jus cogens, non-refoulement, criminalização, jurisdição universal, aut dedere, extradição, prevenção, ex officio, reparação, prova ilícita, outros maus-tratos, CAT 10 peritos, relatórios 1a+4a, investigação sistemática, comunicações 5 Estados, reservas, OPCAT SPT+MNPCT. Responda, confirme e leia o comentário.',
  Context: P11Context,
  Extras: P11Extras,
};

const P12: ChapterCfg = {
  hero: {
    parte: 'Parte 12 · Súmulas, Jurisprudência e Legislação Correlata DH',
    accent: '#991b1b',
    image: 'images/context-candles.jpg',
    ghost: '12',
    titleTop: 'Súmulas, Jurisprudência',
    titleBottom: 'Dominante e Legislação Correlata',
    officialName:
      'STF Súmulas Vinculantes 11 algemas, 14 acesso autos, 26 progressão hediondo/tortura + Súmulas 523 defesa, 716/718/719 regime, 122 estrangeiro filho BR non-refoulement + ADPF 347 estado coisas inconstitucional + STJ Súmulas 588/589/600 Maria Penha, 492/338/383/601 ECA, 552 surdez unilateral + RE 466.343 4 níveis CF>DH emenda (CDPD Dec.6.949)>DH supralegal (CADH Dec.678, CAT Dec.40, CIAPTT Dec.98.386, Guatemala Dec.3.956)>comuns lei + bloco constitucionalidade + convencionalidade + norma mais benéfica + ADI 5357 inclusiva sem taxa + ADO 26 homotransfobia=racismo + HC 82.424 Ellwanger raça social + Leis 7.716/89 racismo, 9.455/97 tortura, 11.340/06 Maria Penha, 12.288/10 Igualdade Racial',
    quote: '“A Constituição e os tratados de direitos humanos com status de emenda formam o bloco de constitucionalidade; os tratados supralegais formam o parâmetro de convencionalidade — e a norma mais benéfica sempre prevalece.”',
    quoteRef: 'RE 466.343 (2008) + art.29 CADH + art.16 §2º CAT + art.5º §2º CF — a tese que decide 90% das questões',
    chips: [
      { icon: CalendarDays, text: '2008 RE 466.343 · 2009 CDPD emenda · 2019 ADO 26 · 2023 Lei 14.532 injúria racial' },
      { icon: Gavel, text: 'SV 11 algemas + SV 26 progressão tortura + 588/589/600 Maria Penha + 492/338/601 ECA + 552 LBI' },
      { icon: Users, text: '7 blocos · 42 marcos · 12 súmulas por tema · 8 leis correlatas · 4 níveis · 12 pegadinhas' },
    ],
    stats: [
      { value: 42, label: 'marcos analisados' },
      { value: 7, label: 'blocos temáticos' },
      { value: 15, label: 'questões integradas' },
      { value: 2008, label: 'RE 466.343 — 4 níveis' },
    ],
    dial: 'seal',
    sealCfg: {
      count: 42,
      top: 'Súmulas + Jurisprudência',
      res: '12/DH',
      mid: 'SV + STF + STJ + leis',
      midAccent: '4 níveis · bloco',
      footer: '42 marcos · RE 466.343 · CDPD emenda',
    },
    menuExtras: 'Súmulas por tema & 4 níveis',
    tempoLeitura: '3h00 focado',
    tempoDetalhe: 'Contexto 30min + 42 marcos 80min + Quadro 20min + Simulado 45min',
  },
  tickerItems: ticker(artigosP12),
  artigos: artigosP12,
  blocoHex: blocoP12,
  artigosTitulo: (
    <>
      Os 42 marcos, <span className="italic font-light" style={{ color: '#991b1b' }}>súmulas + jurisprudência + leis</span>
    </>
  ),
  artigosDesc:
    'O fechamento da coleção 12 partes: SV 11 algemas (resistência+fuga+perigo+escrito+nulidade), SV 14 acesso prova documentada, SV 26 progressão hediondo/tortura (HC 82.959), Súmulas 716/718/719 regime motivação concreta, 523 falta defesa nulidade absoluta, 122 estrangeiro filho BR + non-refoulement CAT art.3º, ADPF 347 estado coisas inconstitucional art.16 CAT, ECA 492 tráfico≠internação 338 prescrição 383 foro guarda 601 6m reavalia, Maria Penha 588 sem restritiva com violência 589 sem insignificância 600 sem coabitação Tema 1.030 sem BO sem prazo, Idoso REsp 1.221.170 2 vagas+50% art.40 + art.34 par único BPC, LBI Súmula 552 surdez unilateral não PcD cota + ADI 5357 sem taxa extra, Racial Ellwanger raça social + ADO26 homotransfobia=racismo Lei 7.716 + ADPF186 cotas + Lei 14.532 injúria racial imprescritível, RE 466.343 4 níveis CF>emenda (CDPD)>supralegal (CADH,CAT,CIAPTT,Guatemala,CEDAW,CIEFDR,Criança)>lei + bloco + convencionalidade + norma mais benéfica, Leis 7.716/9.455/11.340/12.288 + CDPD emenda + CF XLII/XLIII/XLI/203/208/227/230.',
  synopticGhost: 'XLII',
  synopticDesc:
    'O mapa completo da Parte 12: marco, tema-chave, síntese e bloco. Os marcados com ★ são os destaques de ouro — SV 11, SV 26, RE 466.343 4 níveis, ADO 26, ADI 5357, Súmulas 588/589/600, 492/601, 552. Leia na véspera.',
  questoes: questoesP12,
  quizDesc:
    '15 questões inéditas integrando súmulas+jurisprudência+legislação: SV11/SV26, RE 466.343 4 níveis, ADI 5357 inclusiva, 7.716+ADO26 racismo/injúria racial 2-5a inafiançável imprescritível+homotransfobia, 9.455 tortura 2-8a, ECA 492/338/383/601, Maria Penha 588/589/600 protetivas, EPI+BPC+Súmula552+ADI5357, CAT art1 D-I-F-A art2 jus cogens art3 non-refoulement art16, CF XLII/XLIII, bloco+convencionalidade+norma mais benéfica, ADPF 347+SV11, CDPD emenda+LBI, CF 203/208/227/230, quadro integrado 7.716/9.455/11.340/12.288/6.949/CF.',
  Context: P12Context,
  Extras: P12Extras,
};

const P13: ChapterCfg = {
  hero: {
    parte: 'Parte 13 · Quiz Geral Final — 60 questões integradas',
    accent: '#111827',
    image: 'images/hero-globe.jpg',
    ghost: '13',
    titleTop: 'Quiz Geral Final',
    titleBottom: '60 questões — 4 blocos — 13 temas',
    officialName:
      'Revisão final integrando DUDH 1948 30 arts Res.217 A III 48-0-8 art.5º tortura art.14 buscar/gozar, Declaração Intolerância Religiosa 36/55 1981 8 arts consenso 9 liberdades art.6º pais educam interesse maior ADI 4439 ensino religioso facultativo confessional, CEDAW 1979 30 arts 23 peritos sem preferência art.1º art.4º medidas especiais temporárias, Convenção Criança 1989 54 arts 196 Estados 18 peritos <18 4 princípios 2-3-6-12 art.37 B-E-R, ECA Lei 8.069/90 267 arts proteção integral corrigido art.19 §1º 3 MESES §2º 18 MESES art.83 só CRIANÇA art.84 criança e adolescente art.46 estágio até 90 dias 30-45 dias internacional guarda fato não dispensa adoção irrevogável 18/16 veda ascendentes irmãos art.101 9 medidas não priva liberdade art.112 6 socioeducativas A-R-P-L-S-I art.117 PSC até 6m 8h semanais art.118 LA mínimo 6m art.120 semiliberdade externas independente autorização art.121 6-3-21 B-E-R art.122 V-R-D 3 meses sanção Súmula 492 tráfico não internação Súmula 500 formal art.198 10 dias corridos sem dobro sem preparo, CIEFDR 1965 Dec.65.810/69 25 arts com preferência ação afirmativa 18 peritos Dec.4.738/03 petição individual, EPI 10.741/03 118 arts 60 anos 2 vagas grátis+50% art.40 BPC art.34 par único não entra cálculo CF 230 §2º 65 urbano, CIAPTT Dec.98.386/89 17 arts definição ampla qualquer outro fim art.4º ordem não justifica non-refoulement 11-12 jurisdição universal, Guatemala Dec.3.956/01 10 arts supralegal percepção diferenciação, LBI 13.146/15 127 arts modelo social capacidade plena art.6º curatela só patrimonial art.85 TDA 2 apoiadores art.1.783-A crimes 1-3a/2-5a ADI 5357 sem taxa extra cota só direta art.93, CAT Dec.40/91 33 arts D-I-F-A art.1º jus cogens art.2º non-refoulement art.3º aut dedere art.7º prova ilícita art.15 outros art.16 10 peritos 4a quorum 6 OPCAT Dec.6.085/07 SPT+MNPCT 11 peritos 3a sem aviso Lei 12.847/13, Parte 12 SV 11 algemas SV 14 acesso autos SV 26 progressão 716/718/719 motivo concreto 122 filho BR não expulso ADPF 347 inconstitucional art.16 CAT Ellwanger raça social ADO26 homotransfobia racismo 588/589/600 Maria Penha sem coabitação sem BO sem insignificância sem restritiva Tema1030 492/338/383/601 ECA 552 surdez unilateral RE 466 4 níveis CF>emenda CDPD>supralegal>lei bloco convencionalidade mais benéfica leis 7.716 1-3a/2-5a 2º-A 2-5a imprescritível inafiançável 9.455 2-8a/4-10/8-16/1-4 perda cargo dobro XLIII inafiançável sem graça 11.340 5 violências 12.288 ações afirmativas',
    quote: '“Você estudou 545 artigos e 145 questões. Agora são 60 finais que decidem: 10 fáceis para aquecer, 20 intermediárias para comparar, 20 difíceis para pegar na pegadinha, 10 C/E para fechar como Cebraspe — com gabarito, por que correta certa, por que incorretas erradas, pegadinha, dispositivo e macete.”',
    quoteRef: 'Parte 13 — metodologia 3h simulado + tabela desempenho por tema + diagnóstico + plano revisão P1 a P12',
    chips: [
      { icon: CalendarDays, text: '60 questões: 10 fáceis + 20 intermediárias + 20 difíceis + 10 C/E dissertativas' },
      { icon: Gavel, text: '5 bancas: AOCP literal, Cebraspe C/E, FGV mais completa, FCC letra fria, Vunesp reprodução + correções ECA 3m/18m 6-3-21 V-R-D' },
      { icon: Users, text: '13 temas: DUDH, 1981, CEDAW, Criança, ECA I, ECA II, CIEFDR+4738, Idoso, CIAPTT, Guatemala, LBI, CAT+OPCAT, Súmulas 4 níveis + leis correlatas' },
    ],
    stats: [
      { value: 60, label: 'questões integradas finais' },
      { value: 4, label: 'blocos: fácil/interm/difícil/C-E' },
      { value: 13, label: 'temas revisados P1 a P12' },
      { value: 205, label: 'questões totais coleção' },
    ],
    dial: 'seal',
    sealCfg: {
      count: 60,
      top: 'Quiz Geral Final',
      res: '13/DH',
      mid: '60 Qs · 4 blocos · 13 temas',
      midAccent: 'correções ECA · 4 níveis',
      footer: '60 Qs · 205 totais · 558 arts revisados',
    },
    menuExtras: 'Gabarito geral & Desempenho',
    tempoLeitura: '3h00 focado',
    tempoDetalhe: 'Bloco 1 20min + Bloco 2 50min + Bloco 3 70min + Bloco 4 40min + Revisão 20min',
  },
  tickerItems: ticker(artigosP13),
  artigos: artigosP13,
  blocoHex: blocoP13,
  artigosTitulo: (
    <>
      Os 13 resumos finais, <span className="italic font-light" style={{ color: '#111827' }}>revisão P1 a P12 corrigida</span>
    </>
  ),
  artigosDesc:
    '13 resumos que revisam toda coleção com correções ECA I e II: P1 DUDH 30 arts 48-0-8 art.5º tortura art.14 buscar/gozar, P2 1981 8 arts consenso 9 liberdades pais educam interesse maior ADI 4439, P3 CEDAW sem preferência 23 peritos art.4º temporária, P4 Criança <18 4 princípios 2-3-6-12, P5A ECA Geral 1-85 corrigido 3m/18m art.83 só criança art.84 criança e adolescente G-T-A 18/16 veda ascendentes irmãos irrevogável sem procuração estágio 90/30-45 Brasil guarda fato não dispensa, P5B ECA Especial 86-267 corrigido 7 linhas vs 12 diretrizes Conselho Direitos deliberativo paritário vs Tutelar P-A-N 5 membros 4 anos 3 requisitos I-21-R remuneração 10 dias corridos sem dobro 6-3-21 B-E-R V-R-D 3 meses sanção Súmulas 492/500 PSC 6m 8h semanais LA 6m piso semiliberdade sem autorização internação 6-3-21 45 dias provisória improrrogável crimes infrações FIA 1% PJ 6% PF, P6 CIEFDR com preferência Dec.4738 petição Lei 7.716, P7 EPI 60 anos 2 vagas+50% BPC art.34 par único, P8 CIAPTT qualquer outro fim ordem não justifica non-refoulement, P9 Guatemala percepção diferenciação supralegal vs CDPD emenda, P10 LBI 127 arts capacidade plena curatela só patrimonial TDA 2 apoiadores sem taxa extra ADI 5357 cota só direta, P11 CAT D-I-F-A jus cogens non-refoulement aut dedere prova ilícita 10 peritos OPCAT 11 peritos sem aviso, P12 SV 11/14/26 716/718/719 122 ADPF347 Ellwanger ADO26 588/589/600 Tema1030 492/601 552 RE466 4 níveis CF→emenda CDPD→supralegal→lei bloco convencionalidade mais benéfica leis 7.716/9.455/11.340/12.288.',
  synopticGhost: 'LX',
  synopticDesc:
    'O mapa final da coleção: 13 temas, síntese e bloco. Os marcados com ★ são os destaques de ouro — ECA corrigido 3m/18m 6-3-21 V-R-D, RE 466 4 níveis, SV 11/26, 588/589/600, 492/601, 552, ADI 5357, ADO26, Lei 14.532, CAT D-I-F-A. Leia na véspera.',
  questoes: questoesP13,
  quizDesc:
    '60 questões inéditas integrando tudo: Bloco 1 FÁCIL 10 Qs aquecimento literal DUDH art.1º/5º/14, 1981 art.1º/5º/6º, CEDAW sem preferência, Criança <18 2-3-6-12, ECA art.2º, CIEFDR com preferência Dec.4738, EPI 60 anos 2 vagas+50%, CIAPTT qualquer outro fim, Guatemala percepção, LBI capacidade CDPD emenda CAT D-I-F-A; Bloco 2 INTERM 20 Qs interpretação comparação DUDH buscar/gozar vs CF LII RE466, 1981 pais interesse maior ADI4439, CEDAW art.4º + Maria Penha 5 violências sem coabitação sem BO, Criança interesse maior oitiva ECA 3m/18m, ECA art.4º 4Ps art.13 suspeita Conselho, guarda tutela adoção 18/16 veda, socioeducativas 6-3-21 V-R-D S492, CIEFDR ação afirmativa + 7.716, EPI 2 vagas BPC art.34 CF 65 urbano, CIAPTT non-refoulement jurisdição universal, CAT jus cogens non-refoulement, Guatemala supralegal vs CDPD emenda vs LBI lei, curatela só patrimonial vs TDA 2 apoiadores, crimes LBI ADI5357, RE466 4 níveis, 7.716+2º-A injúria, 9.455 pena, Maria Penha 5 violências protetivas, 12.288 ações afirmativas, CAT art.15 prova ilícita art.16 sem finalidade; Bloco 3 DIFÍCIL 20 Qs pegadinhas FGV/Cebraspe SV11 algemas SV14 já documentado SV26 progressão 716/718/719 motivo concreto Súmula122 filho BR + CAT art.3º ADPF347 art.16 CAT Ellwanger raça social ADO26 homotransfobia Súmulas 492/338/383/601 588/589/600 Tema1030 REsp1.221.170 BPC não entra Tema1093 Súmula552 surdez não cota ADI5357 Lei14.532 injúria racial imprescritível CAT vs CIAPTT D-I-F-A vs qualquer outro fim art.6º detenção art.7º aut dedere art.8º extradição ficção territorial art.12 ex officio art.13 queixa art.14 reparação art.20 sistemática confidencial visita anuência art.21 5 Estados 3-6-12m art.22 individual 6m OPCAT SPT+MNPCT 11 peritos 3a sem aviso CDPD art.24 inclusiva art.12 capacidade art.27 trabalho art.93 cota só direta art.34 BPC art.40 2 vagas bloco vs convencionalidade mais benéfica; Bloco 4 C/E 10 Qs dissertativas Cebraspe com justificativa completa integrando DUDH+CAT+SV11+SV26, CEDAW+Maria Penha, ECA art.2º+19 3m/18m+121 6m/3a/21a, art.83 só criança vs art.84 criança e adolescente, CIEFDR+7.716+2º-A+ADO26+Ellwanger, EPI 40+34+CF230 65a, CIAPTT vs CAT vs 9.455 crime comum, Guatemala percepção+CDPD emenda+LBI curatela+TDA, RE466 4 níveis+bloco+convencionalidade+mais benéfica, quadro geral integração.',
  Context: P13Context,
  Extras: P13Extras,
};

export default function App() {
  const [view, setView] = useState<View>('home');

  const go = (v: View) => {
    setView(v);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [view]);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <Navbar view={view} go={go} />
      <main>
        {view === 'home' && <Home go={go} />}
        {view === 'p1' && (
          <Chapter
            key="p1"
            cfg={P1}
            next={{ label: 'Parte 2 · Eliminação da Intolerância Religiosa (1981)', onGo: () => go('p2') }}
          />
        )}
        {view === 'p2' && (
          <Chapter
            key="p2"
            cfg={P2}
            next={{ label: 'Parte 3 · CEDAW — Direitos da Mulher (1979)', onGo: () => go('p3') }}
          />
        )}
        {view === 'p3' && (
          <Chapter
            key="p3"
            cfg={P3}
            next={{ label: 'Parte 4 · Convenção sobre os Direitos da Criança (1989)', onGo: () => go('p4') }}
          />
        )}
        {view === 'p4' && (
          <Chapter
            key="p4"
            cfg={P4}
            next={{ label: 'Parte 5 · ECA — Livro I, Parte Geral (arts. 1º a 85)', onGo: () => go('p5') }}
          />
        )}
        {view === 'p5' && (
          <Chapter
            key="p5"
            cfg={P5}
            next={{ label: 'Parte 5B · ECA — Livro II, Parte Especial (arts. 86 a 267)', onGo: () => go('p5b') }}
          />
        )}
        {view === 'p5b' && (
          <Chapter
            key="p5b"
            cfg={P5B}
            next={{ label: 'Parte 6 · CIEFDR — Discriminação Racial e Comitê CERD', onGo: () => go('p6') }}
          />
        )}
        {view === 'p6' && (
          <Chapter
            key="p6"
            cfg={P6}
            next={{ label: 'Parte 7 · Estatuto da Pessoa Idosa (Lei 10.741/2003)', onGo: () => go('p7') }}
          />
        )}
        {view === 'p7' && (
          <Chapter
            key="p7"
            cfg={P7}
            next={{ label: 'Parte 8 · Convenção Interamericana contra Tortura (Declaração 1985)', onGo: () => go('p8') }}
          />
        )}
        {view === 'p8' && (
          <Chapter
            key="p8"
            cfg={P8}
            next={{ label: 'Parte 9 · Convenção da Guatemala — Discriminação e Deficiência', onGo: () => go('p9') }}
          />
        )}
        {view === 'p9' && (
          <Chapter
            key="p9"
            cfg={P9}
            next={{ label: 'Parte 10 · LBI — Estatuto da Pessoa com Deficiência (Arts. 1º–127º — LBI Completa)', onGo: () => go('p10') }}
          />
        )}
        {view === 'p10' && (
          <Chapter
            key="p10"
            cfg={P10}
            next={{ label: 'Parte 11 · CAT ONU — Convenção contra Tortura (Decreto 40/1991)', onGo: () => go('p11') }}
          />
        )}
        {view === 'p11' && (
          <Chapter
            key="p11"
            cfg={P11}
            next={{ label: 'Parte 12 · Súmulas, Jurisprudência Dominante e Legislação Correlata DH', onGo: () => go('p12') }}
          />
        )}
        {view === 'p12' && (
          <Chapter
            key="p12"
            cfg={P12}
            next={{ label: 'Parte 13 · Quiz Geral Final — 60 questões integradas', onGo: () => go('p13') }}
          />
        )}
        {view === 'p13' && (
          <Chapter
            key="p13"
            cfg={P13}
            next={{ label: 'Voltar ao início da coleção', onGo: () => go('home') }}
          />
        )}
      </main>
      <Footer go={go} />
    </div>
  );
}
