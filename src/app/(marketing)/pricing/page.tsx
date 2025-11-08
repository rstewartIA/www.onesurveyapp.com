import type { Metadata } from "next";

const plans = [
  {
    name: "Team",
    price: "$89",
    cadence: "per user / mo",
    highlights: ["Core survey capture", "Floor plan markup", "Standard support"],
  },
  {
    name: "Business",
    price: "$139",
    cadence: "per user / mo",
    highlights: [
      "Advanced workflows",
      "Proposal builder + ROI blocks",
      "CRM + project tool integrations",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual agreement",
    highlights: [
      "Dedicated onboarding squad",
      "Executive reporting suite",
      "SSO, SOC 2, priority support",
    ],
  },
];

const faqs = [
  {
    question: "How fast can we launch?",
    answer: "Most teams complete onboarding in under two weeks with our playbook, templates, and guided data import.",
  },
  {
    question: "Do you support offline capture?",
    answer: "Yes. Field techs can capture data without connectivity; OneSurvey syncs automatically once back online.",
  },
  {
    question: "What about data ownership?",
    answer: "You own all survey data and exports. We provide encrypted backups plus export tooling for archival needs.",
  },
];

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flexible plans for teams digitizing security site surveys and proposals.",
  keywords: ["security proposal software", "security asset management platform"],
};

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <p className="text-sm uppercase tracking-wide text-cyan-200">Pricing</p>
        <h1 className="text-4xl font-semibold text-white">Flexible plans for rollout-ready teams</h1>
        <p className="mt-2 text-sm text-slate-300">
          Anchor ROI proof, CTA hierarchy, and FAQ schema here to boost conversions and search visibility.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={[
              "rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center",
              plan.featured ? "ring-2 ring-cyan-400" : "",
            ].join(" ")}
          >
            <p className="text-sm uppercase tracking-wide text-cyan-200">{plan.name}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
            <p className="text-xs uppercase tracking-wide text-slate-400">{plan.cadence}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {plan.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
              {plan.featured ? "Schedule walkthrough" : "Request quote"}
            </button>
          </article>
        ))}
      </section>
      <section className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
        <h2 className="text-3xl font-semibold text-white">FAQ + schema targets</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-white/5 bg-slate-950/40 p-5">
              <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
