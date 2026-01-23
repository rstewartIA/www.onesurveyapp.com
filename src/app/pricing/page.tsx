import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Pricing for Security Integrators",
  description:
    "Flexible plans for integrators and enterprise teams. Start with a pilot and scale to full rollouts.",
};

type Module = {
  id: string;
  label: string;
  color: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const modules: Module[] = [
  {
    id: "floorplans",
    label: "Floor plans",
    color: "bg-sky-100 text-sky-700 ring-sky-200",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M9 5v14" />
        <path d="M4 12h16" />
      </svg>
    ),
  },
  {
    id: "assignments",
    label: "Assignments",
    color: "bg-amber-100 text-amber-700 ring-amber-200",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 6h12" />
        <path d="M8 12h12" />
        <path d="M8 18h12" />
        <path d="M4 6l1.5 1.5L7 6" />
        <path d="M4 12l1.5 1.5L7 12" />
        <path d="M4 18l1.5 1.5L7 18" />
      </svg>
    ),
  },
  {
    id: "reports",
    label: "Reports",
    color: "bg-emerald-100 text-emerald-700 ring-emerald-200",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19h16" />
        <path d="M8 16V9" />
        <path d="M12 16V6" />
        <path d="M16 16v-7" />
      </svg>
    ),
  },
  {
    id: "survey",
    label: "Survey capture",
    color: "bg-blue-100 text-blue-700 ring-blue-200",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 4.5h6" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    id: "library",
    label: "Device library",
    color: "bg-rose-100 text-rose-700 ring-rose-200",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="7" height="7" rx="1" />
        <rect x="13" y="4" width="7" height="7" rx="1" />
        <rect x="4" y="13" width="7" height="7" rx="1" />
        <rect x="13" y="13" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: "photos",
    label: "Photo reports",
    color: "bg-teal-100 text-teal-700 ring-teal-200",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="7" width="16" height="12" rx="2" />
        <path d="M9 7l2-3h2l2 3" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
];

const moduleMap = modules.reduce<Record<string, Module>>((acc, moduleItem) => {
  acc[moduleItem.id] = moduleItem;
  return acc;
}, {});

type SeatPreview = {
  name: string;
  description: string;
  color: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const seatTypePreview: SeatPreview[] = [
  {
    name: "Full seat",
    description: "Lorem ipsum dolor sit amet.",
    color: "bg-brand-primary/15 text-brand-primary",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M5 19c1.5-3 5-5 7-5s5.5 2 7 5" />
      </svg>
    ),
  },
  {
    name: "Field seat",
    description: "Lorem ipsum dolor sit amet.",
    color: "bg-brand-accent/60 text-brand-dark",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
  {
    name: "Viewer seat",
    description: "Lorem ipsum dolor sit amet.",
    color: "bg-neutral-100 text-neutral-700",
    Icon: ({ className }) => (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const seatAccess: Record<string, string[]> = {
  full: ["survey", "floorplans", "library", "assignments", "reports", "photos"],
  field: ["survey", "assignments", "photos", "floorplans"],
  viewer: ["reports", "floorplans", "library"],
};

type Seat = {
  name: string;
  price: string;
  cadence?: string;
  modules: string[];
};

type Plan = {
  name: string;
  description: string;
  price: string;
  priceUnit?: string;
  billing?: string;
  badge?: string;
  cta: { label: string; href: string };
  auxLink?: { label: string; href: string };
  seats: Seat[];
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Free",
    priceUnit: "Lorem ipsum",
    billing: "Billed monthly",
    cta: { label: "Select plan", href: "/contact" },
    seats: [
      { name: "Full seat", price: "Included", modules: seatAccess.full },
      { name: "Field seat", price: "Included", modules: seatAccess.field },
      { name: "Viewer seat", price: "Included", modules: seatAccess.viewer },
    ],
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Ut labore et dolore",
    ],
  },
  {
    name: "Professional",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$18",
    priceUnit: "per seat / month",
    billing: "Billed annually",
    badge: "Most popular",
    highlight: true,
    cta: { label: "Select plan", href: "/contact" },
    seats: [
      { name: "Full seat", price: "$18", cadence: "/mo", modules: seatAccess.full },
      { name: "Field seat", price: "$12", cadence: "/mo", modules: seatAccess.field },
      { name: "Viewer seat", price: "$6", cadence: "/mo", modules: seatAccess.viewer },
    ],
    features: [
      "Magna aliqua ut enim",
      "Minim veniam quis",
      "Nostrud exercitation ullamco",
      "Laboris nisi ut aliquip",
    ],
  },
  {
    name: "Organization",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$28",
    priceUnit: "per seat / month",
    billing: "Billed annually",
    cta: { label: "Select plan", href: "/contact" },
    auxLink: { label: "Contact sales", href: "/contact" },
    seats: [
      { name: "Full seat", price: "$28", cadence: "/mo", modules: seatAccess.full },
      { name: "Field seat", price: "$20", cadence: "/mo", modules: seatAccess.field },
      { name: "Viewer seat", price: "$12", cadence: "/mo", modules: seatAccess.viewer },
    ],
    features: [
      "Duis aute irure dolor",
      "In reprehenderit in voluptate",
      "Velit esse cillum dolore",
      "Eu fugiat nulla pariatur",
    ],
  },
  {
    name: "Enterprise",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "Custom",
    priceUnit: "Annual contract",
    billing: "Billed annually",
    cta: { label: "Contact sales", href: "/contact" },
    auxLink: { label: "Learn more", href: "/contact" },
    seats: [
      { name: "Full seat", price: "Custom", modules: seatAccess.full },
      { name: "Field seat", price: "Custom", modules: seatAccess.field },
      { name: "Viewer seat", price: "Custom", modules: seatAccess.viewer },
    ],
    features: [
      "Excepteur sint occaecat",
      "Cupidatat non proident",
      "Sunt in culpa qui",
      "Officia deserunt mollit",
    ],
  },
];

const faqs = [
  {
    question: "Can we start with a pilot?",
    answer:
      "Yes. We can scope a pilot around a few sites or a single project before rolling out wider.",
  },
  {
    question: "Do you offer onboarding?",
    answer:
      "Onboarding and training are included based on plan. We will tailor it to your workflow.",
  },
  {
    question: "Can we export reports?",
    answer:
      "Yes. OneSurvey supports PDF and spreadsheet exports for survey and installation data.",
  },
  {
    question: "Is there a contract term?",
    answer:
      "Plan terms are flexible. We will review options based on your rollout size.",
  },
];

const badgeSizes = {
  xs: { wrapper: "h-6 w-6", icon: "h-3.5 w-3.5" },
  sm: { wrapper: "h-7 w-7", icon: "h-4 w-4" },
  md: { wrapper: "h-9 w-9", icon: "h-5 w-5" },
};

function ModuleBadge({ moduleItem, size = "sm" }: { moduleItem: Module; size?: "xs" | "sm" | "md" }) {
  const sizing = badgeSizes[size];
  return (
    <span
      className={`inline-flex ${sizing.wrapper} items-center justify-center rounded-lg ring-1 ${moduleItem.color}`}
      title={moduleItem.label}
    >
      <moduleItem.Icon className={sizing.icon} />
    </span>
  );
}

function ModuleChip({ moduleItem }: { moduleItem: Module }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
      <ModuleBadge moduleItem={moduleItem} size="xs" />
      <span>{moduleItem.label}</span>
    </span>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Pricing"
        title="Pick your plan, choose your seats"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        primaryCta={{ label: "Select a plan", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
        supportingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        media={
          <div className="space-y-4">
            <div
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm motion-safe:animate-[pricing-fade-up_700ms_ease-out_both]"
              style={{ animationDelay: "120ms" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Seat types</p>
              <div className="mt-4 space-y-3">
                {seatTypePreview.map((seat, index) => (
                  <div
                    key={seat.name}
                    className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 motion-safe:animate-[pricing-fade-up_700ms_ease-out_both]"
                    style={{ animationDelay: `${180 + index * 80}ms` }}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${seat.color}`}
                    >
                      <seat.Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{seat.name}</p>
                      <p className="text-xs text-neutral-500">{seat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm motion-safe:animate-[pricing-fade-up_700ms_ease-out_both]"
              style={{ animationDelay: "220ms" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Modules</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {modules.map((moduleItem) => (
                  <ModuleChip key={moduleItem.id} moduleItem={moduleItem} />
                ))}
              </div>
            </div>
          </div>
        }
      />

      <section className="relative overflow-hidden bg-white py-18 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 right-16 h-64 w-64 rounded-full bg-brand-accent/40 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Plans"
              title="Compare seat types and module access"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
            />
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1 text-xs font-semibold text-neutral-600 shadow-sm">
                <span className="rounded-full bg-brand-primary px-3 py-1 text-white">Annual</span>
                <span className="px-3 py-1">Monthly</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Prices in USD</span>
            </div>
          </div>

          <div
            className="mt-8 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm motion-safe:animate-[pricing-fade-up_700ms_ease-out_both]"
            style={{ animationDelay: "80ms" }}
          >
            <p className="text-sm font-semibold text-neutral-700">Seats give you access to OneSurvey modules:</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {modules.map((moduleItem) => (
                <ModuleChip key={moduleItem.id} moduleItem={moduleItem} />
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="grid divide-y divide-neutral-200 md:grid-cols-2 md:divide-y-0 md:divide-x xl:grid-cols-4">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`flex h-full flex-col gap-6 p-6 motion-safe:animate-[pricing-fade-up_700ms_ease-out_both] ${
                    plan.highlight ? "bg-brand-primary/5" : "bg-white"
                  }`}
                  style={{ animationDelay: `${120 + index * 120}ms` }}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-neutral-900">{plan.name}</p>
                        {plan.badge && (
                          <span className="mt-2 inline-flex rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      {plan.billing && <span className="text-xs text-neutral-500">{plan.billing}</span>}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-semibold text-brand-primary">{plan.price}</p>
                        {plan.priceUnit && <p className="text-xs text-neutral-500">{plan.priceUnit}</p>}
                      </div>
                      <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.seats.map((seat) => (
                      <div key={`${plan.name}-${seat.name}`} className="rounded-xl border border-neutral-200 bg-white p-3">
                        <div className="flex items-center justify-between gap-2 text-sm font-semibold text-neutral-900">
                          <span>{seat.name}</span>
                          <span className="text-base text-brand-primary">
                            {seat.price}
                            {seat.cadence && <span className="text-xs font-normal text-neutral-500">{seat.cadence}</span>}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {seat.modules.map((moduleId) => {
                            const moduleItem = moduleMap[moduleId];
                            if (!moduleItem) {
                              return null;
                            }
                            return (
                              <ModuleBadge
                                key={`${seat.name}-${moduleItem.id}`}
                                moduleItem={moduleItem}
                                size="xs"
                              />
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-4">
                    <Button
                      asChild
                      variant={plan.highlight ? "default" : "outline"}
                      className={`w-full ${
                        plan.highlight
                          ? "bg-brand-primary text-white hover:bg-brand-secondary"
                          : "border-neutral-200 text-brand-primary hover:border-brand-primary hover:bg-brand-accent/20"
                      }`}
                    >
                      <Link href={plan.cta.href}>{plan.cta.label}</Link>
                    </Button>
                    {plan.auxLink && (
                      <Link
                        href={plan.auxLink.href}
                        className="text-xs font-semibold text-brand-primary underline-offset-4 hover:underline"
                      >
                        {plan.auxLink.label}
                      </Link>
                    )}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Included</p>
                      <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <CheckIcon className="mt-0.5 h-4 w-4 text-success" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about pricing?"
            subtitle="Here are the most common questions from integrators and operations teams."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-primary">{faq.question}</h3>
                <p className="mt-3 text-sm text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Lets talk"
        title="Get a plan built for your team"
        description="Tell us about your projects and we will map the right plan for your workflow."
        primaryCta={{ label: "Talk to sales", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
      />
    </MarketingShell>
  );
}
