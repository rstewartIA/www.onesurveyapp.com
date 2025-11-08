import Link from "next/link";

type Resource = {
  title: string;
  description: string;
  type: string;
};

type ResourceTeasersProps = {
  items: Resource[];
};

export function ResourceTeasers({ items }: ResourceTeasersProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-cyan-200">Resources</p>
          <h2 className="text-3xl font-semibold text-white">SEO + enablement fuel</h2>
          <p className="text-sm text-slate-300">
            Pair long-tail keywords with gated assets and proof to convert traffic into demos.
          </p>
        </div>
        <Link
          href="/resources"
          className="mt-3 inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-white/60"
        >
          Explore hub
        </Link>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((resource) => (
          <article key={resource.title} className="rounded-2xl border border-white/5 bg-slate-950/40 p-5">
            <p className="text-xs uppercase tracking-wide text-cyan-300">{resource.type}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{resource.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{resource.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
