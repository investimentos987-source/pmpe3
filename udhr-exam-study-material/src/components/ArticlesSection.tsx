import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Artigo } from '../data/shared';
import { SectionHead, Reveal } from './fx';
import ArticleCard from './ArticleCard';
import { LayoutGrid, MousePointerClick } from 'lucide-react';

export interface BlocoInfo {
  nome: string;
  hex: string;
  range: string;
  count: number;
}

export function getBlocos(artigos: Artigo[], blocoHex: Record<string, string>): BlocoInfo[] {
  const map = new Map<string, number[]>();
  artigos.forEach((a) => {
    const arr = map.get(a.bloco) ?? [];
    arr.push(a.n);
    map.set(a.bloco, arr);
  });
  return Array.from(map.entries()).map(([nome, nums]) => {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return {
      nome,
      hex: blocoHex[nome] ?? '#101725',
      range: min === max ? `art. ${min}º` : `art. ${min}º–${max}`,
      count: nums.length,
    };
  });
}

export default function ArticlesSection({
  artigos,
  blocoHex,
  num = '02',
  titulo = 'artigo por artigo',
  desc,
}: {
  artigos: Artigo[];
  blocoHex: Record<string, string>;
  num?: string;
  titulo?: ReactNode;
  desc: string;
}) {
  const [filtro, setFiltro] = useState<string>('Todos');
  const blocos = useMemo(() => getBlocos(artigos, blocoHex), [artigos, blocoHex]);

  const lista = useMemo(
    () => (filtro === 'Todos' ? artigos : artigos.filter((a) => a.bloco === filtro)),
    [filtro, artigos]
  );

  const rangeOf = (bloco: string) => blocos.find((b) => b.nome === bloco)?.range ?? '';

  return (
    <section id="artigos" className="relative bg-paper-2/60 py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num={num}
          eyebrow="Análise artigo por artigo"
          title={titulo}
          desc={desc}
        />

        {/* filtros */}
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45">
              <LayoutGrid className="size-3.5" /> parte
            </span>
            {[{ nome: 'Todos', hex: '#101725', range: `${artigos.length} art.`, count: artigos.length }, ...blocos].map((f) => {
              const active = filtro === f.nome;
              return (
                <button
                  key={f.nome}
                  onClick={() => setFiltro(f.nome)}
                  className="rounded-full border px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
                  style={
                    active
                      ? { backgroundColor: f.hex, borderColor: f.hex, color: '#fdf9ee', boxShadow: `0 10px 25px -12px ${f.hex}` }
                      : { borderColor: `${f.hex}45`, color: f.hex, backgroundColor: 'transparent' }
                  }
                >
                  {f.nome === 'Todos' ? `Todos · ${f.count}` : `${f.nome} · ${f.count}`}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* mapa dos artigos */}
        <Reveal delay={0.08}>
          <div className="mb-12 rounded-3xl border border-ink/10 bg-white/70 p-5 md:p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <MousePointerClick className="size-4 text-gold-3" />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                Mapa de navegação — clique para pular ao artigo
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {artigos.map((a) => {
                const hex = blocoHex[a.bloco] ?? '#101725';
                const visivel = filtro === 'Todos' || a.bloco === filtro;
                return (
                  <a
                    key={a.n}
                    href={`#art-${a.n}`}
                    title={`Art. ${a.n}º — ${a.titulo}`}
                    className="grid h-9 min-w-9 place-items-center rounded-lg border px-2 font-mono text-[11px] font-medium transition-all duration-200 hover:scale-110"
                    style={{
                      borderColor: `${hex}50`,
                      color: visivel ? hex : `${hex}45`,
                      backgroundColor: visivel ? `${hex}12` : 'transparent',
                      textDecoration: 'none',
                    }}
                  >
                    {a.n}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* lista */}
        <div className="grid gap-8 md:gap-10">
          {lista.map((a, i) => (
            <ArticleCard key={a.n} artigo={a} index={i} hex={blocoHex[a.bloco] ?? '#101725'} range={rangeOf(a.bloco)} />
          ))}
        </div>
      </div>
    </section>
  );
}
