type LifecycleProps = {
  phases: Array<{ title: string; details: string; keyword: string }>;
};

export function LifecycleSection({ phases }: LifecycleProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-wide text-cyan-200">Lifecycle</p>
        <h2 className="text-3xl font-semibold text-white">Field-to-office clarity at every phase</h2>
        <p className="text-sm text-slate-300">
          Map each stage to the keywords and proof points fueling your SEO plan.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {phases.map((phase) => (
          <article
            key={phase.title}
            className="rounded-2xl border border-white/5 bg-slate-950/40 p-5"
          >
            <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{phase.details}</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-cyan-300">
              Keyword · {phase.keyword}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
