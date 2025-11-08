import Link from "next/link";
import { navigationLinks } from "@/data/marketing";

const ctas = [
  { label: "Book a demo", href: "/contact", variant: "primary" },
  { label: "Start pilot", href: "/contact?type=pilot", variant: "ghost" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          OneSurvey
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          {ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                cta.variant === "primary"
                  ? "bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                  : "border border-white/30 text-white hover:border-white/60",
              ].join(" ")}
            >
              {cta.label}
            </Link>
          ))}
        </div>
        <details className="md:hidden">
          <summary className="cursor-pointer rounded-full border border-white/20 px-3 py-1 text-sm">
            Menu
          </summary>
          <div className="absolute right-4 mt-2 flex w-56 flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/95 p-4 text-sm shadow-xl">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-1 text-slate-100">
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-white/10 pt-2">
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={[
                    "block rounded-full px-3 py-2 text-center font-semibold",
                    cta.variant === "primary"
                      ? "bg-cyan-400 text-slate-900"
                      : "border border-white/30 text-white",
                  ].join(" ")}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
