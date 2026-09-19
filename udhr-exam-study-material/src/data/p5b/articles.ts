import type { Artigo } from '../shared';
import { artigosC } from './articlesC';
import { artigosD } from './articlesD';
import { artigosE } from './articlesE';

export const blocoHex: Record<string, string> = {
  'Política de atendimento': '#c19a3d',
  'Medidas de proteção': '#0f766e',
  'Ato infracional': '#b04a3c',
  'Medidas socioeducativas': '#c11f5d',
  'Remissão e medidas aos pais': '#7c3aed',
  'Conselho Tutelar': '#2f6fb4',
  'Acesso à Justiça': '#0e7490',
  Crimes: '#991b1b',
  'Infrações administrativas': '#a16207',
  'Disposições finais': '#4b5563',
};

export const artigos: Artigo[] = [...artigosC, ...artigosD, ...artigosE];
