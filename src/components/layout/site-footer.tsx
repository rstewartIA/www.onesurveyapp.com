import Link from "next/link";
import { navigationLinks } from "@/data/marketing";

const footerLinks = [
  { label: "Security", href: "/resources/security" },
  { label: "Docs", href: "/resources/docs" },
  { label: "Status", href: "https://status.onesurveyapp.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">OneSurvey</p>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            Built by integrators to deliver faster, more accurate security site surveys from field to office.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {navigationLinks.concat(footerLinks).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} OneSurvey. All rights reserved.</p>
      </div>
    </footer>
  );
}
