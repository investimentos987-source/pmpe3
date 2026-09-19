export default function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask relative overflow-hidden border-y border-gold/25 bg-ink py-3.5">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
              {t}
            </span>
            <span className="size-1.5 rotate-45 bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
