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
            next={{ label: 'Voltar ao início da coleção', onGo: () => go('home') }}
          />
        )}
      </main>
      <Footer go={go} />
    </div>
  );
}
