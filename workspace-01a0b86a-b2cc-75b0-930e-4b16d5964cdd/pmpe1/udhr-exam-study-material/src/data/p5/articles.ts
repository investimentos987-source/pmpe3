import type { Artigo } from '../shared';
import { artigosA } from './articlesA';
import { artigosB } from './articlesB';

export const blocoHex: Record<string, string> = {
  'Disposições preliminares': '#c19a3d',
  'Vida e saúde': '#b04a3c',
  'Liberdade, respeito e dignidade': '#7c3aed',
  'Convivência familiar': '#c11f5d',
  'Família substituta · guarda e tutela': '#2f6fb4',
  Adoção: '#0e7490',
  'Educação, cultura, esporte e lazer': '#0f766e',
  'Profissionalização e trabalho': '#a16207',
  Prevenção: '#4b5563',
};

export const artigos: Artigo[] = [...artigosA, ...artigosB];
