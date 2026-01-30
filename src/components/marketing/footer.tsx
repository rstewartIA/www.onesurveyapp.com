import Link from "next/link";
import Image from "next/image";

type FooterColumn = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

type FooterProps = {
  columns: FooterColumn[];
};

export function Footer({ columns }: FooterProps) {
  const isExternal = (href: string, external?: boolean) => external || href.startsWith("http");

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
                    {isExternal(link.href, link.external) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                      >
                        <span>{link.label}</span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17l10-10" />
                          <path d="M10 7h7v7" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-wrap items-center gap-4 md:col-span-3 md:col-start-2 md:justify-end">
            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-90"
              aria-label="Download on the App Store"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="block h-12 w-auto"
              />
            </Link>
            <Link
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-90"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={564}
                height={168}
                className="block h-12 w-auto"
              />
            </Link>
          </div>
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


