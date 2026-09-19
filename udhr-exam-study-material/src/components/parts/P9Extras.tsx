import { SectionHead, Reveal } from '../fx';
import { Star, Scale, Info, ArrowRight, BookMarked } from 'lucide-react';

const destaques = [
  {
    art: 'Art. I, § 1º',
    t: 'Definição de deficiência',
    k: 'Restrição física, mental ou sensorial, PERMANENTE OU TRANSITÓRIA, que limita atividades essenciais da vida diária, agravada pela desigualdade de acesso do meio econômico e social.',
    p: 'Restringir à deficiência permanente ou ignorar a dimensão social (modelo médico puro).',
  },
  {
    art: 'Art. I, § 2º',
    t: 'Definição de discriminação',
    k: 'Distinção, exclusão ou restrição baseada em deficiência, ANTECEDENTE, CONSEQUÊNCIA anterior ou PERCEPÇÃO de deficiência, com efeito OU objetivo de anular direitos.',
    p: 'Exigir deficiência atual comprovada ou dolo — a percepção e o efeito bastam.',
  },
  {
    art: 'Art. I (parte final)',
    t: 'Diferenciação legítima',
    k: 'A diferenciação que não anula direitos — acessibilidade, cotas, adaptação — NÃO é discriminação: promove a igualdade de fato.',
    p: 'Chamar cotas e adaptações de “discriminação reversa”.',
  },
  {
    art: 'Art. II',
    t: 'Objetivos',
    k: 'Prevenir e eliminar todas as formas de discriminação e promover a PLENA INTEGRAÇÃO na sociedade.',
    p: 'Trocar integração plena por amparo assistencial ou proteção segregada.',
  },
  {
    art: 'Art. III',
    t: 'Compromissos',
    k: 'Medidas legislativas, sociais, educacionais e trabalhistas; cooperação na prevenção e reabilitação; eliminação GRADUAL de barreiras arquitetônicas, de transporte e comunicação.',
    p: 'Dizer que a Convenção exige eliminação imediata de todas as barreiras.',
  },
  {
    art: 'Art. VI',
    t: 'CEDDIS',
    k: 'Comitê da OEA que acompanha a Convenção da Guatemala, recebendo relatórios dos Estados-partes.',
    p: 'Confundir com o Comitê da ONU da CDPD — ou dizer que julga petições individuais.',
  },
];

const comparativo: [string, string, string, string][] = [
  ['Instrumento', 'Convenção da Guatemala (OEA)', 'CDPD (ONU)', 'LBI (Brasil)'],
  ['Adoção', 'Cidade da Guatemala, 1999', 'Nova York, 13/12/2006', 'Lei nº 13.146/2015'],
  ['Promulgação no Brasil', 'Decreto 3.956/2001 (rito ordinário)', 'Decreto 6.949/2009 (Dec. Legislativo 186/2008)', 'Sanção presidencial de 6/7/2015'],
  ['Status hierárquico', 'SUPRALEGAL — abaixo da CF, acima das leis', 'EMENDA CONSTITUCIONAL — art. 5º, § 3º', 'Lei ordinária federal'],
  ['Terminologia', '“Pessoa PORTADORA de deficiência”', '“Pessoa COM deficiência”', '“Pessoa COM deficiência” (art. 2º)'],
  ['Definição', 'Restrição física, mental ou sensorial (permanente ou transitória) + desigualdade de acesso', 'Impedimento de longo prazo + interação com barreiras (biopsicossocial)', 'Espelha a CDPD: impedimento de longo prazo + barreiras'],
  ['Discriminação', 'Baseada em deficiência, antecedente, consequência ou PERCEPÇÃO', 'Distinção, exclusão ou restrição; inclui a NEGAÇÃO DE ADAPTAÇÃO RAZOÁVEL', 'Art. 4º: inclusão por motivo de deficiência, em igualdade com as demais'],
  ['Diferenciação legítima', 'Sem efeito de anular direitos: não é discriminação', 'Medidas específicas ≠ discriminação (art. 5º, § 4º)', 'Ações afirmativas e cotas (art. 93: 2% a 5%, empresas com 100+)'],
  ['Acompanhamento', 'CEDDIS — comitê da OEA, relatórios', 'Comitê da ONU sobre Direitos das Pessoas com Deficiência', 'Justiça, MP e conselhos nacionais (CONADE)'],
  ['Extensão', 'Tratado regional focado em NÃO discriminação', 'Tratado universal: 50 artigos, todo o ciclo de direitos', 'Estatuto interno: saúde, educação, trabalho, acessibilidade e crimes'],
];

const mandamentos = [
  'Convenção da Guatemala: OEA, 1999, promulgada pelo Decreto 3.956/2001 — status SUPRALEGAL (rito ordinário, pré-EC 45/2004).',
  'CDPD: ONU, 2006, promulgada pelo Decreto 6.949/2009 — primeiro tratado com status de EMENDA CONSTITUCIONAL (art. 5º, § 3º).',
  'LBI (Lei 13.146/2015): lei ordinária que internaliza a CDPD — o Estatuto da Pessoa com Deficiência brasileiro.',
  'Definição da Guatemala: restrição física, mental ou sensorial, PERMANENTE OU TRANSITÓRIA, limitando atividades essenciais da vida diária, agravada pela desigualdade de acesso do meio econômico e social.',
  'Discriminação da Guatemala: baseada em deficiência, ANTECEDENTE, CONSEQUÊNCIA anterior ou PERCEPÇÃO (presente ou passada) — basta o EFEITO ou o objetivo de anular direitos.',
  'Diferenciação legítima: distinção sem efeito lesivo — acessibilidade, cotas, adaptação — NÃO é discriminação (CDPD, art. 5º, § 4º; LBI, art. 93).',
  'Objetivos (art. II): PREVENIR e ELIMINAR a discriminação e PROMOVER a PLENA INTEGRAÇÃO — P.E.P.',
  'Compromissos (art. III): medidas legislativas, sociais, educacionais e trabalhistas + eliminação GRADUAL de barreiras arquitetônicas, de transporte e de comunicação.',
  'CEDDIS: comitê da OEA que acompanha a Convenção da Guatemala por relatórios — não é o comitê da ONU da CDPD e não julga petições individuais.',
  'Terminologia: a Guatemala diz “portadora”; CDPD e LBI consagram “pessoa COM deficiência” — a deficiência como atributo, e o problema nas BARREIRAS da sociedade.',
];

export default function P9Extras() {
  return (
    <section id="extras" className="ruled relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          num="03"
          eyebrow="Quadro comparativo · os destaques que decidem a questão"
          title={
            <>
              Guatemala <span className="italic font-light" style={{ color: '#9db4ff' }}>×</span> CDPD{' '}
              <span className="italic font-light text-gold-3">×</span> LBI
            </>
          }
          desc="O quadro comparativo pedido por toda banca: as três camadas de proteção à pessoa com deficiência — tratado regional, tratado universal e estatuto interno — lado a lado, com o que cada uma tem de exclusivo."
        />

        {/* A · destaques */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {destaques.map((d, i) => (
            <Reveal key={d.art} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_26px_60px_-35px_rgba(193,154,61,0.6)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ink px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gold-2">
                    {d.art}
                  </span>
                  <Star className="size-4 fill-gold text-gold" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{d.t}</h3>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/70">{d.k}</p>
                <div className="mt-4 rounded-xl border-l-[3px] border-brick/60 bg-brick/[0.06] px-3.5 py-2.5 text-[12px] leading-relaxed text-ink/70">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-brick">pegadinha · </span>
                  {d.p}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* B · quadro comparativo */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <Scale className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Quadro comparativo <span className="italic font-light text-gold-3">— as três normas lado a lado</span>
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-x-auto">
              <div className="min-w-[56rem] overflow-hidden rounded-3xl border border-ink/12 bg-white shadow-[0_28px_70px_-45px_rgba(16,23,37,0.5)]">
                <div className="grid grid-cols-[10.5rem_1fr_1fr_1fr] border-b border-ink/10 bg-ink text-paper">
                  <p className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">Critério</p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#9db4ff' }}>
                    Dec. 3.956/2001
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#7cc0f5' }}>
                    CDPD — Dec. 6.949/2009
                  </p>
                  <p className="border-l border-paper/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#5eead4' }}>
                    Lei 13.146/2015
                  </p>
                </div>
                {comparativo.map(([crit, gua, cdpd, lbi], i) => (
                  <div
                    key={crit}
                    className={`grid grid-cols-[10.5rem_1fr_1fr_1fr] ${i % 2 === 1 ? 'bg-paper/60' : 'bg-white'} transition-colors hover:bg-gold/[0.08]`}
                  >
                    <p className="flex items-center px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50">
                      {crit}
                    </p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12.5px] leading-snug text-ink/80">{gua}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12.5px] leading-snug text-ink/80">{cdpd}</p>
                    <p className="border-l border-ink/10 px-5 py-4 text-[12.5px] leading-snug text-ink/80">{lbi}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/[0.1] to-transparent px-5 py-4 text-sm leading-relaxed text-ink/75">
              <Info className="mt-0.5 size-5 shrink-0 text-gold-3" />
              <span>
                <strong>Como as três convivem:</strong> a Convenção da Guatemala é o PISO regional (não discriminação);
                a CDPD é o teto universal com força de emenda (todos os direitos + adaptação razoável + medidas
                específicas); e a LBI traduz tudo em regras internas aplicáveis — inclusive crimes e cotas. Havendo
                conflito, prevalece a norma MAIS FAVORÁVEL à pessoa com deficiência.
              </span>
            </p>
          </Reveal>
        </div>

        {/* C · ponte com a LBI */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <BookMarked className="size-6 text-gold-3" />
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-ink">
                Da Guatemala à LBI <span className="italic font-light text-gold-3">— o que a lei brasileira internalizou</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Modelo biopsicossocial', 'A LBI abandona o modelo médico: a deficiência resulta da interação entre o impedimento e as BARREIRAS da sociedade (art. 2º).'],
              ['Adaptação razoável', 'Ajustes que garantem acessibilidade; a sua NEGAÇÃO, quando necessária e possível, configura discriminação — herança direta da CDPD.'],
              ['Cotas do art. 93', 'Empresas com 100+ empregados: 2% a 5% dos cargos para pessoa com deficiência, escalonados por faixa de pessoal.'],
              ['Crimes e proteção', 'A LBI tipifica crimes próprios de discriminação (art. 88) e garante atendimento prioritário — reforçando o piso regional da Guatemala.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-display text-lg font-semibold text-ink">{t}</p>
                  <p className="mt-2 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink/70">
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-gold-3" />
                    {d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* D · entendimentos */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Os 10 entendimentos <span className="italic font-light text-gold-3">consolidados</span>
              </h3>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 md:block">
                o checklist final da véspera
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
