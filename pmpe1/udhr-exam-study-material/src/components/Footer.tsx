import { Scale, ArrowUp, BookOpen } from 'lucide-react';
import type { View } from '../views';

export default function Footer({ go }: { go: (v: View) => void }) {
  return (
    <footer className="border-t border-gold/20 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-gold/50 text-gold-2">
                <Scale className="size-4" />
              </span>
              <div>
                <p className="font-display text-xl font-bold">
                  Guia DH·ONU <span className="text-gold-2">· Coleção</span>
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-paper/45">
                  10 módulos · 350 artigos · 100 questões
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-paper/55">
              Material de estudo educacional sobre os instrumentos do sistema ONU de direitos humanos, com foco
              nas bancas AOCP, Cebraspe, FGV, FCC e Vunesp.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">Módulos</p>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/60">
                {(
                  [
                    ['Parte 1 · DUDH (1948)', 'p1'],
                    ['Parte 2 · Intolerância Religiosa (1981)', 'p2'],
                    ['Parte 3 · CEDAW (1979)', 'p3'],
                    ['Parte 4 · Direitos da Criança (1989)', 'p4'],
                    ['Parte 5A · ECA — Livro I (arts. 1º–85)', 'p5'],
                    ['Parte 5B · ECA — Livro II (arts. 86–267)', 'p5b'],
                    ['Parte 6 · CIEFDR + CERD (1965/2003)', 'p6'],
                    ['Parte 7 · Estatuto da Pessoa Idosa', 'p7'],
                    ['Parte 8 · Tortura — CIAPTT/ONU', 'p8'],
                    ['Início', 'home'],
                  ] as [string, View][]
                ).map(([label, id]) => (
                  <li key={id}>
                    <button onClick={() => go(id)} className="transition-colors hover:text-gold-2">
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2">Fontes-base</p>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/60">
                <li className="flex items-start gap-2">
                  <BookOpen className="mt-0.5 size-4 shrink-0 text-gold-2/70" />
                  Res. 217 A (III), 10/12/1948 — DUDH
                </li>
                <li>Res. 36/55, 25/11/1981 — Intolerância religiosa</li>
                <li>Res. 34/180, 18/12/1979 — CEDAW</li>
                <li>Res. 44/25, 20/11/1989 — Direitos da Criança</li>
                <li>Res. 2106 A (XX) · Dec. 65.810/1969 — CIEFDR</li>
                <li>Dec. 4.738/2003 — Declaração Facultativa (CERD)</li>
                <li>Lei 10.741/2003 — Estatuto da Pessoa Idosa</li>
                <li>Dec. 98.386/1989 — Convenção Interamericana de Tortura</li>
                <li>Dec. 40/1991 — Convenção ONU contra Tortura</li>
                <li>Lei 9.455/1997 — Crime de tortura (Brasil)</li>
                <li>Dec. 3.956/2001 — Convenção da Guatemala (PcD)</li>
                <li>Dec. 6.949/2009 — CDPD/ONU · Lei 13.146/2015 — LBI</li>
                <li>Lei 10.741/2003 — Estatuto da Pessoa Idosa</li>
                <li>CF/88: art. 5º, art. 226, §7º, art. 227 e art. 230</li>
                <li>ECA — Lei 8.069/90 (Livros I e II)</li>
                <li>SINASE — Lei 12.594/12 · Leis 12.010/09 e 13.106/15</li>
                <li>STJ: Súmulas 108, 265, 338, 342, 492, 500 e 605</li>
                <li>STF: RE 466.343 · ADI 4.439 · RE 1.008.166</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-7 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
            Estude a literalidade · domine as pegadinhas · conquiste a vaga
          </p>
          <a
            href="#topo"
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 transition-colors hover:border-gold/60 hover:text-gold-2"
          >
            <ArrowUp className="size-3.5" />
            voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
