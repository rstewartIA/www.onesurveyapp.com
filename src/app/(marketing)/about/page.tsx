import type { Metadata } from "next";

const milestones = [
  { year: "2021", detail: "Prototyped survey workflow with three integrator design partners." },
  { year: "2022", detail: "Expanded to lifecycle visibility and proposal automation." },
  { year: "2024", detail: "Launched marketing revamp + analytics stack to scale demand." },
];

const trustSignals = [
  "SOC 2 Type II controls in progress",
  "Axis + Genetec ecosystem partners",
  "Dedicated onboarding squad for enterprise rollouts",
];

export const metadata: Metadata = {
  title: "About",
  description: "OneSurvey’s mission, milestones, and trust signals for security integrators.",
  keywords: ["security integrator platform", "security site survey software"],
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-cyan-200">About</p>
        <h1 className="text-4xl font-semibold text-white">Built by integrators to modernize security projects</h1>
        <p className="text-base text-slate-300">
          Use this template to house credibility copy, leadership bios, and partner badges once assets are ready.
        </p>
      </header>
      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
        <h2 className="text-3xl font-semibold text-white">Milestones</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {milestones.map((milestone) => (
            <article key={milestone.year} className="rounded-2xl border border-white/5 bg-slate-950/40 p-5">
              <p className="text-sm uppercase tracking-wide text-cyan-300">{milestone.year}</p>
              <p className="mt-2 text-sm text-slate-300">{milestone.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="rounded-3xl border border-white/10 bg-slate-950/50 p-8">
        <h2 className="text-3xl font-semibold text-white">Trust signals & enablement</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-200">
          {trustSignals.map((signal) => (
            <li key={signal} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>{signal}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
