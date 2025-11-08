import type { Metadata } from "next";

const formFields = [
  { label: "Full name", type: "text" },
  { label: "Work email", type: "email" },
  { label: "Company", type: "text" },
  { label: "Team size", type: "text" },
  { label: "What would you like to explore?", type: "textarea" },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with the OneSurvey team to book a demo, launch a pilot, or reach support.",
  keywords: ["security integrator software demo", "onesurvey contact"],
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-cyan-200">Contact</p>
        <h1 className="text-4xl font-semibold text-white">Let’s shorten your next rollout</h1>
        <p className="text-sm text-slate-300">
          Book a demo, request a pilot, or connect with support. The form is wired for future automation hooks.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        <form className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
          {formFields.map((field) => (
            <label key={field.label} className="block text-sm text-slate-200">
              {field.label}
              {field.type === "textarea" ? (
                <textarea
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-sm text-white"
                  rows={4}
                  placeholder="Share timelines, goals, or integrations."
                />
              ) : (
                <input
                  type={field.type}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-sm text-white"
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              )}
            </label>
          ))}
          <button
            type="submit"
            className="w-full rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Book a demo
          </button>
        </form>
        <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
          <h2 className="text-2xl font-semibold text-white">Need something else?</h2>
          <ul className="mt-4 space-y-4 text-sm text-slate-200">
            <li>
              <p className="font-semibold">Support</p>
              <p>support@onesurveyapp.com</p>
            </li>
            <li>
              <p className="font-semibold">Sales</p>
              <p>sales@onesurveyapp.com</p>
            </li>
            <li>
              <p className="font-semibold">Office</p>
              <p>2041 Innovation Way, Austin, TX</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
