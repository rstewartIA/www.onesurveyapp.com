import type { Metadata } from "next";
import { resources } from "@/data/marketing";

const contentPillars = [
  {
    title: "Guides & Long-form",
    keywords: ["how to conduct a security site survey", "digitize security survey process"],
    action: "Fuel SEO with tutorials, checklists, and persona-specific how-tos.",
  },
  {
    title: "Comparisons",
    keywords: ["site owl alternative", "system surveyor competitor"],
    action: "Capture solution-aware traffic with unbiased breakdowns and lead magnets.",
  },
  {
    title: "Enablement Kits",
    keywords: ["field technician survey checklist", "security integrator proposal workflow"],
    action: "Convert engaged visitors via gated downloads tied to nurture journeys.",
  },
];

export const metadata: Metadata = {
  title: "Resources",
  description:
    "SEO-driven guides, comparisons, and enablement kits powering the OneSurvey marketing engine.",
  keywords: [
    "how to conduct a security site survey",
    "field technician survey checklist",
    "site owl alternative",
  ],
};

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-cyan-200">Resources</p>
        <h1 className="text-4xl font-semibold text-white">Content engine for demand + SEO</h1>
        <p className="text-base text-slate-300">
          Map every long-tail keyword to a resource type, CTA, and nurture route to sustain pipeline.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        {resources.map((resource) => (
          <article key={resource.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <p className="text-xs uppercase tracking-wide text-cyan-300">{resource.type}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{resource.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{resource.description}</p>
            <button className="mt-4 rounded-full border border-white/30 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/60">
              View brief
            </button>
          </article>
        ))}
      </section>
      <section className="rounded-3xl border border-white/10 bg-slate-950/50 p-8">
        <h2 className="text-3xl font-semibold text-white">Pillars + keyword clusters</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contentPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-white/5 bg-slate-900/40 p-5">
              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{pillar.action}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
                {pillar.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/10 px-2 py-1">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
