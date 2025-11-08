type ValueGridProps = {
  items: Array<{ title: string; description: string; stat?: string }>;
  title: string;
  subtitle: string;
};

export function ValueGrid({ items, title, subtitle }: ValueGridProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
      <div>
        <p className="text-sm uppercase tracking-wide text-cyan-200">Platform</p>
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-base text-slate-300">{subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/5 bg-slate-950/40 p-6 shadow-inner"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              {item.stat && (
                <span className="text-sm font-mono text-cyan-300">{item.stat}</span>
              )}
            </div>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
