export interface Artigo {
  n: number;
  titulo: string;
  sintese: string;
  bloco: string;
  resumo: string;
  prova: string;
  pegadinha: string;
  exemplo: string;
  macete: string;
  bancas: string[];
  destaque?: boolean;
}

export type Formato = 'certo-errado' | 'multipla';

export interface Questao {
  id: number;
  banca: 'Cebraspe' | 'FCC' | 'FGV' | 'AOCP' | 'Vunesp';
  formato: Formato;
  tema: string;
  enunciado: string;
  alternativas: string[];
  gabarito: number;
  comentario: string;
}

export interface ChapterStat {
  value: number;
  suffix?: string;
  label: string;
}

export const bancaHex: Record<Questao['banca'], string> = {
  Cebraspe: '#2f6fb4',
  FGV: '#c2571f',
  FCC: '#0f766e',
  AOCP: '#6d28d9',
  Vunesp: '#15803d',
};
