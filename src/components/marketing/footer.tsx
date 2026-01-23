import Link from "next/link";
import Image from "next/image";

type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

type FooterProps = {
  columns: FooterColumn[];
};

export function Footer({ columns }: FooterProps) {
  return (
    <footer className="bg-[#0B1B2D] text-neutral-200">
      <div className="container mx-auto px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/OS-logo.png"
                  alt="OneSurvey logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">OneSurvey</div>
                <p className="text-xs text-brand-accent">Smart site surveys, asset mapping & facility documentation</p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              OneSurvey is a modern survey and site documentation platform for security integrators, facility managers,
              and enterprise teams. Capture site data, plan devices, manage floorplans, and generate consistent
              documentation -faster and with greater accuracy.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{column.title}</h4>
              <ul className="space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-neutral-400">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>(c) {new Date().getFullYear()} OneSurvey. All rights reserved.</div>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="transition hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-white">
                Terms
              </Link>
              <Link href="/status" className="transition hover:text-white">
                Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


