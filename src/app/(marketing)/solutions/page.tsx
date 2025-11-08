import type { Metadata } from "next";

const solutions = [
  {
    title: "Security Integrators",
    pains: [
      "Fragmented survey inputs create scope creep.",
      "Stakeholders wait days for updated diagrams.",
      "Difficult to prove ROI during competitive bids.",
    ],
    value: "Dashboard views tie surveys, designs, and approvals together so PMs always know status.",
    cta: "Talk to sales",
  },
  {
    title: "Field Technicians",
    pains: [
      "Paper checklists and disconnected photos cause rework.",
      "No offline support when visiting remote facilities.",
      "Handwritten notes rarely make it back to HQ.",
    ],
    value: "Mobile-first capture logs devices, issues, and media offline with automatic sync later.",
    cta: "Start pilot",
  },
  {
    title: "Enterprise Security Teams",
    pains: [
      "Limited visibility into multi-site rollouts.",
      "Compliance evidence scattered across silos.",
      "Vendors deliver inconsistent documentation.",
    ],
    value: "Executive dashboards, exportable reports, and integration hooks deliver full lifecycle context.",
    cta: "Schedule executive demo",
  },
];

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Persona-aligned messaging for integrators, field technicians, and enterprise security teams.",
  keywords: [
    "field-to-office collaboration software",
    "security integrator collaboration",
    "enterprise security visibility",
  ],
};

export default function SolutionsPage() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-sm uppercase tracking-wide text-cyan-200">Solutions</p>
        <h1 className="text-4xl font-semibold text-white">Tailor the narrative to each buyer group</h1>
        <p className="mt-2 max-w-3xl text-base text-slate-300">
          Use this page to connect use cases with the SEO keyword clusters and CTAs in your messaging framework.
        </p>
      </header>
      <section className="grid gap-6">
        {solutions.map((solution) => (
          <article
            key={solution.title}
            className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">{solution.title}</h2>
                <p className="text-sm text-slate-300">{solution.value}</p>
              </div>
              <button className="mt-4 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60 md:mt-0">
                {solution.cta}
              </button>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-200 md:grid-cols-3">
              {solution.pains.map((pain) => (
                <div key={pain} className="rounded-2xl border border-white/5 bg-slate-950/30 p-4">
                  {pain}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
