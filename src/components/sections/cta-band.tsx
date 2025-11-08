import Link from "next/link";

export function CtaBand() {
  return (
    <section className="rounded-3xl border border-cyan-400/40 bg-gradient-to-r from-cyan-400/20 via-transparent to-transparent p-8 text-center">
      <h2 className="text-3xl font-semibold text-white">
        Ready to digitize your next survey?
      </h2>
      <p className="mt-2 text-sm text-slate-200">
        Launch a pilot in under a week with our onboarding playbook plus template library.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/contact"
          className="rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-cyan-300"
        >
          Book a demo
        </Link>
        <Link
          href="/pricing"
          className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/60"
        >
          Compare plans
        </Link>
      </div>
    </section>
  );
}
