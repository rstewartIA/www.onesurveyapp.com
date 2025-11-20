import Link from "next/link";
import { cn } from "@/lib/utils";

type SolutionCardProps = {
  title: string;
  description: string;
  href: string;
  accent?: "blue" | "slate" | "sky";
};

const accentClasses: Record<NonNullable<SolutionCardProps["accent"]>, string> = {
  blue: "from-brand-primary/15 via-brand-secondary/10 to-brand-accent/30",
  slate: "from-brand-dark/15 via-brand-primary/10 to-brand-accent/25",
  sky: "from-brand-accent/40 via-brand-primary/10 to-white",
};

export function SolutionCard({ title, description, href, accent = "blue" }: SolutionCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 transition duration-300 group-hover:opacity-70",
          accentClasses[accent]
        )}
      />
      <div className="relative space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-lg bg-brand-accent/40" />
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 text-brand-primary transition group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-primary">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
      </div>
    </Link>
  );
}
