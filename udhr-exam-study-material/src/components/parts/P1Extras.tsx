import { SectionHead, Reveal } from '../fx';
import { Scale, HandHeart, Info } from 'lucide-react';

type Linha = { rotulo: string; cp: string; desc: string };

const linhas: Linha[] = [
  { rotulo: 'Artigos', cp: '1º ao 21', desc: '22 ao 27' },
  { rotulo: 'O que são', cp: 'Liberdades — direitos de não ser impedido', desc: 'Prestações — direitos de receber do Estado' },
  { rotulo: 'Papel do Estado', cp: 'Abstenção — dever negativo de respeitar', desc: 'Ação positiva — dever de realizar e prover' },
  { rotulo: 'Exigibilidade', cp: 'Imediata e direta, para todos', desc: 'Progressiva, conforme os recursos de cada Estado (art. 22)' },
  { rotulo: 'Geração (Karel Vasak)', cp: '1ª geração / 1ª dimensão', desc: '2ª geração / 2ª dimensão' },
  { rotulo: 'Pacto vinculante (1966)', cp: 'PIDCP — Pacto de Direitos Civis e Políticos', desc: 'PIDESC — Pacto de Direitos Econômicos, Sociais e Culturais' },
  { rotulo: 'Exemplos', cp: 'Vida, liberdade, devido processo legal, voto', desc: 'Trabalho, educação, saúde, seguridade, cultura' },
];

const mandamentos = [
  'A DUDH é resolução da Assembleia Geral — documento declaratório e programático; não é tratado vinculante per se.',
  'Tem profunda força normativa e moral: padrão comum mínimo; boa parte de seu núcleo já é vista como costume internacional (e até jus cogens).',
  'No Brasil, o STF decidiu (RE 466.343/2008): a DUDH NÃO tem status de norma constitucional. A tese da supralegalidade (RE 80.004/2001) foi superada.',
  'Placar: 48 votos a favor, 0 contra, 8 abstenções e 2 ausências. Nunca foi unanimidade nem consenso absoluto.',
  'Proclamada pela ASSEMBLEIA GERAL, no Palais de Chaillot, em Paris — não no Conselho de Segurança, não em Nova York.',
  'Asilo (art. 14): direito de buscar e gozar — a concessão é ato soberano do Estado. Exceções: crime de direito comum e atos contra a ONU.',
  'A DUDH não veda expressamente a pena de morte nem a prisão perpétua — isso vem da CF brasileira e de tratados posteriores.',
  'O rol antidiscriminatório do art. 2º é exemplificativo; nenhum direito é absoluto (art. 29) e ninguém pode usar a DUDH para destruí-la (art. 30).',
  'Carta Internacional dos Direitos Humanos = DUDH + PIDCP + PIDESC (1966, em vigor desde 1976).',
  'Dia Internacional dos Direitos Humanos: 10 de dezembro — instituído pela Resolução 423 (V), de 1950.',
];

export default function P1Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Comparativo estratégico + entendimentos"
          title={
            <>
              Civis &amp; Políticos <span className="italic font-light text-gold-3">×</span> Econômicos, Sociais &amp; Culturais
            </>
          }
          desc="A distinção mais cobrada em teoria: quem exige abstenção, quem exige ação, quem é imediato e quem é progressivo. Guarde a tabela — e o rodapé dela."
        />

        {/* cabeçalho dos painéis */}
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/[0.12] to-transparent p-7">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-gold text-ink">
                  <Scale className="size-6" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-3">Dimensão I</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Direitos civis e políticos</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                A “liberdade-escudo”: o Estado não pode tocar. Herdeiros das revoluções liberais dos séculos XVIII–XIX.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-teal/40 bg-gradient-to-br from-teal/[0.1] to-transparent p-7">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-teal text-paper">
                  <HandHeart className="size-6" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal">Dimensão II</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Direitos econômicos, sociais e culturais</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                A “igualdade-ponte”: o Estado precisa agir, dentro da organização e dos recursos de que dispõe.
              </p>
            </div>
          </Reveal>
        </div>

        {/* tabela comparativa */}
        <Reveal delay={0.15}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
            <div className="grid grid-cols-[6.5rem_1fr] border-b border-ink/10 bg-ink text-paper md:grid-cols-[11rem_1fr_1fr]">
              <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 md:px-6">Critério</p>
              <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-gold-2 md:px-6">
                Civis &amp; Políticos
              </p>
              <p className="hidden border-l border-paper/10 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] md:block" style={{ color: '#5eead4' }}>
                Econ., Sociais &amp; Culturais
              </p>
            </div>
            {linhas.map((l, i) => (
              <div
                key={l.rotulo}
                className={`grid grid-cols-[6.5rem_1fr] md:grid-cols-[11rem_1fr_1fr] ${
                  i % 2 === 1 ? 'bg-paper/60' : 'bg-white'
                } transition-colors hover:bg-gold/[0.08]`}
              >
                <p className="flex items-center px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/50 md:px-6">
                  {l.rotulo}
                </p>
                <p className="flex items-center border-l border-ink/10 px-5 py-4 text-sm font-medium leading-snug text-ink md:px-6">
                  <span className="mr-2.5 inline-block size-1.5 shrink-0 rounded-full bg-gold" />
                  {l.cp}
                </p>
                <p className="col-start-2 flex items-center border-l border-ink/10 border-t border-dashed px-5 py-4 text-sm leading-snug text-ink/70 md:col-start-3 md:border-t-0 md:px-6 md:text-ink">
                  <span className="mr-2.5 inline-block size-1.5 shrink-0 rounded-full bg-teal" />
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* nota de ouro */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex gap-4 rounded-3xl border border-un/30 bg-un/[0.06] p-6 md:p-7">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-un text-paper">
              <Info className="size-5" />
            </span>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-un">
                Fecho de prova — não marque hierarquia
              </p>
              <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-ink/75">
                Desde a <strong>Declaração de Viena (1993)</strong>, os direitos humanos são declarados{' '}
                <strong>universais, indivisíveis, interdependentes e inter-relacionados</strong>: não há hierarquia
                entre civis/políticos e econômicos/sociais/culturais. E lembre: os arts. 28 a 30 são o fechamento
                estrutural do documento (ordem, limites e cláusula antiabuso).
              </p>
            </div>
          </div>
        </Reveal>

        {/* mandamentos */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Os 10 entendimentos <span className="italic font-light text-gold-3">consolidados</span>
              </h3>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 md:block">
                resolvem 90% das questões
              </p>
            </div>
          </Reveal>
          <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
            {mandamentos.map((m, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.3)}>
                <div className="group flex gap-5 border-b border-ink/10 pb-6">
                  <span className="font-display text-4xl font-black leading-none text-gold-3/90 tabular-nums transition-transform duration-300 group-hover:-translate-y-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm md:text-[15px] leading-relaxed text-ink/75">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
