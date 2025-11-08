import type { Metadata } from "next";
import { featureHighlights } from "@/data/marketing";

const modules = [
  {
    title: "Survey Capture",
    points: [
      "Offline-first mobile experience with geo-tags and media buckets.",
      "Device library with smart defaults for cameras, readers, and sensors.",
      "Automatic sync to office dashboards the moment connectivity returns.",
    ],
  },
  {
    title: "Collaborative Design",
    points: [
      "Drag devices onto CAD or floor plans with snap lines and zones.",
      "Commenting, approvals, and version history keep teams aligned.",
      "Persona-specific views surface what PMs, techs, or exec sponsors need.",
    ],
  },
  {
    title: "Reporting & Proposals",
    points: [
      "Bid-ready exports with bill of materials, diagrams, and annotations.",
      "ROI calculator blocks highlight time savings per persona.",
      "Native integrations push updates into CRM and project tools.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Features",
  description:
    "Survey capture, collaborative design, and proposal automation workflows tailored to security integrators.",
  keywords: [
    "security system design tool",
    "drag and drop floor plan design",
    "security project lifecycle management",
  ],
};

export default function FeaturesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-cyan-200">Features</p>
        <h1 className="text-4xl font-semibold text-white">Design, document, and hand off in one platform</h1>
        <p className="text-base text-slate-300">
          This plan mirrors the messaging framework so marketing, design, and engineering stay in sync as modules ship.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-2">
        {featureHighlights.map((feature) => (
          <article key={feature.title} className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <h2 className="text-2xl font-semibold text-white">{feature.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-cyan-300">Proof · {feature.stat}</p>
          </article>
        ))}
      </section>
      <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
        <h2 className="text-3xl font-semibold text-white">Module deep dives</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {modules.map((module) => (
            <article key={module.title} className="rounded-2xl border border-white/5 bg-slate-950/40 p-5">
              <h3 className="text-xl font-semibold text-white">{module.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {module.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
