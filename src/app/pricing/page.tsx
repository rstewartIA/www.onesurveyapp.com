import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Pricing - Security Site Survey Software",
  description:
    "Flexible plans for integrators, facility teams, and enterprise programs. Start with a pilot and scale to full rollouts.",
};

type Module = {
  id: string;
  label: string;
  color: string;
  Icon: (props: { className?: string }) => ReactElement;
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

const seatAccess: Record<string, string[]> = {
  full: ["survey", "floorplans", "library", "assignments", "reports", "photos"],
  field: ["survey", "assignments", "photos", "floorplans"],
  viewer: ["reports", "floorplans", "library"],
};

type SeatType = {
  name: string;
  description: string;
  color: string;
  Icon: (props: { className?: string }) => ReactElement;
  modules: string[];
};

const seatTypes: SeatType[] = [
  {
    name: "Viewer seat",
    description: "Read-only access to reports, floorplans, and the device library for stakeholders.",
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
    modules: seatAccess.viewer,
  },
  {
    name: "Field seat",
    description: "Field-ready access for capturing surveys, photos, and assignments on site.",
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
    modules: seatAccess.field,
  },
  {
    name: "Full seat",
    description: "Full create/edit access across surveys, floorplans, device library, assignments, and reports.",
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
    modules: seatAccess.full,
  },
];

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
    description: "Best for pilots or small teams validating a new survey workflow.",
    price: "Free",
    priceUnit: "Pilot plan",
    billing: "Billed monthly",
    cta: { label: "Select plan", href: "/contact" },
    seats: [
      { name: "Viewer seat", price: "Included", modules: seatAccess.viewer },
      { name: "Field seat", price: "Included", modules: seatAccess.field },
      { name: "Full seat", price: "Included", modules: seatAccess.full },
    ],
    features: [
      "Core survey capture and floorplan editor",
      "Device library with categories and accessories",
      "Photo documentation for surveys and elements",
      "Standard report exports",
    ],
  },
  {
    name: "Professional",
    description: "For growing integrators who need consistent surveys and reporting.",
    price: "$18",
    priceUnit: "per seat / month",
    billing: "Billed annually",
    badge: "Most popular",
    highlight: true,
    cta: { label: "Select plan", href: "/contact" },
    seats: [
      { name: "Viewer seat", price: "$6", cadence: "/mo", modules: seatAccess.viewer },
      { name: "Field seat", price: "$12", cadence: "/mo", modules: seatAccess.field },
      { name: "Full seat", price: "$18", cadence: "/mo", modules: seatAccess.full },
    ],
    features: [
      "Assignments and handoff workflows",
      "Advanced reporting formats and exports",
      "Device library templates and bulk updates",
      "Team notes and shared context",
    ],
  },
  {
    name: "Organization",
    description: "For multi-team standardization across projects and regions.",
    price: "$28",
    priceUnit: "per seat / month",
    billing: "Billed annually",
    cta: { label: "Select plan", href: "/contact" },
    auxLink: { label: "Contact sales", href: "/contact" },
    seats: [
      { name: "Viewer seat", price: "$12", cadence: "/mo", modules: seatAccess.viewer },
      { name: "Field seat", price: "$20", cadence: "/mo", modules: seatAccess.field },
      { name: "Full seat", price: "$28", cadence: "/mo", modules: seatAccess.full },
    ],
    features: [
      "Organization-wide standards and templates",
      "Seat management with admin and user roles",
      "Portfolio reporting across sites",
      "Priority onboarding for larger teams",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom plan for large portfolios and multi-site rollouts.",
    price: "Custom",
    priceUnit: "Annual contract",
    billing: "Billed annually",
    cta: { label: "Contact sales", href: "/contact" },
    auxLink: { label: "Learn more", href: "/contact" },
    seats: [
      { name: "Viewer seat", price: "Custom", modules: seatAccess.viewer },
      { name: "Field seat", price: "Custom", modules: seatAccess.field },
      { name: "Full seat", price: "Custom", modules: seatAccess.full },
    ],
    features: [
      "Custom seat mix and volume pricing",
      "Multi-site rollout planning",
      "Audit-friendly reporting workflows",
      "Dedicated onboarding guidance",
    ],
  },
];

const planTiers = [
  { id: "starter", label: "Starter" },
  { id: "professional", label: "Professional" },
  { id: "organization", label: "Organization" },
  { id: "enterprise", label: "Enterprise" },
] as const;

type PlanTierId = (typeof planTiers)[number]["id"];
type Availability = boolean | string;

type CompareFeature = {
  name: string;
  detail: string;
  availability: Record<PlanTierId, Availability>;
};

type CompareModule = {
  id: string;
  name: string;
  description: string;
  features: CompareFeature[];
};

const compareModules: CompareModule[] = [
  {
    id: "site-dashboard",
    name: "Site Dashboard (OneSurvey Projects)",
    description: "Organize projects, surveys, reports, and assignments in one workspace.",
    features: [
      {
        name: "Project overview cards",
        detail: "See survey, photo, report, and assignment activity at a glance.",
        availability: { starter: true, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Stage and archive tracking",
        detail: "Track active vs. archived projects and current stage status.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Portfolio filters",
        detail: "Filter by stage, team, or category to find projects quickly.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Project tags and categories",
        detail: "Group work by region, customer, or program for reporting.",
        availability: { starter: "Limited", professional: true, organization: true, enterprise: true },
      },
    ],
  },
  {
    id: "floor-plan-editing",
    name: "Floor Plan Editing",
    description: "Scale, annotate, and place devices on accurate floorplans.",
    features: [
      {
        name: "Scale calibration",
        detail: "Set real-world measurements to keep layouts accurate.",
        availability: { starter: true, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Device placement",
        detail: "Drag and drop devices from the library onto the plan.",
        availability: { starter: true, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Coverage overlays",
        detail: "Visualize device coverage and orientation for reviews.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Annotations and labels",
        detail: "Add walls, zones, and labels to communicate scope clearly.",
        availability: { starter: false, professional: false, organization: true, enterprise: true },
      },
    ],
  },
  {
    id: "survey-capture",
    name: "Survey Capture",
    description: "Standardize what teams capture during security site surveys.",
    features: [
      {
        name: "Survey templates and checklists",
        detail: "Guide technicians through consistent site data capture.",
        availability: { starter: true, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Required fields and validation",
        detail: "Reduce missing data before a survey is marked complete.",
        availability: { starter: true, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Photo and note capture",
        detail: "Attach photos and notes to devices and locations.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
    ],
  },
  {
    id: "assignments",
    name: "Assignments",
    description: "Track tasks and handoffs tied to surveys and elements.",
    features: [
      {
        name: "Task creation and status",
        detail: "Create assignments with clear owners and status tracking.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Due dates and priorities",
        detail: "Keep install teams aligned with timelines and priorities.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Comments and attachments",
        detail: "Share notes, files, and context alongside tasks.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
    ],
  },
  {
    id: "device-library",
    name: "Device Library",
    description: "Maintain approved devices and accessories for consistent designs.",
    features: [
      {
        name: "Device catalog and categories",
        detail: "Organize devices, parts, and accessories by system type.",
        availability: { starter: true, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Templates and packages",
        detail: "Reuse standard device sets across projects.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Bulk updates and imports",
        detail: "Add or update device data at scale when catalogs change.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
    ],
  },
  {
    id: "reporting",
    name: "Reporting",
    description: "Generate proposal-ready reports and installation documentation.",
    features: [
      {
        name: "Survey summaries and inventories",
        detail: "Export clear summaries and device lists for estimating.",
        availability: { starter: true, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Floorplan PDF exports",
        detail: "Share plan visuals with proposals and handoff docs.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
      {
        name: "Photo documentation reports",
        detail: "Package photos with labels and notes for approvals.",
        availability: { starter: false, professional: true, organization: true, enterprise: true },
      },
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

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function AvailabilityCell({ value }: { value: Availability }) {
  if (typeof value === "string") {
    return <span className="text-xs font-semibold text-neutral-500">{value}</span>;
  }
  if (value) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-success/15 text-success">
        <CheckIcon className="h-4 w-4" />
      </span>
    );
  }
  return <span className="inline-flex h-2 w-2 rounded-full bg-neutral-300" />;
}

export default function PricingPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Pricing"
        title="Pick your plan, choose your seats"
        subtitle="Choose viewer, field, or full seats and scale from a pilot to an organization-wide rollout."
        primaryCta={{ label: "Select a plan", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
        supportingText="Talk with our team to build the right mix for your survey workflow."
        media={
          <div className="space-y-4">
            <div
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm motion-safe:animate-[pricing-fade-up_700ms_ease-out_both]"
              style={{ animationDelay: "120ms" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Seat types</p>
              <div className="mt-4 space-y-3">
                {seatTypes.map((seat, index) => (
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
              subtitle="See how each plan bundles seat access and modules for different team sizes."
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

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Seat types"
            title="Not sure which seat is right for you? We have you covered."
            subtitle="Pick the right access level for field teams, project leads, and stakeholders."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {seatTypes.map((seat, index) => (
              <div
                key={seat.name}
                className={`space-y-6 motion-safe:animate-[pricing-fade-up_700ms_ease-out_both] ${
                  index > 0 ? "lg:border-l lg:border-neutral-200 lg:pl-8" : ""
                }`}
                style={{ animationDelay: `${120 + index * 120}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${seat.color}`}>
                    <seat.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-neutral-900">{seat.name}</p>
                    <p className="mt-1 text-sm text-neutral-600">{seat.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {seat.modules.map((moduleId) => {
                    const moduleItem = moduleMap[moduleId];
                    if (!moduleItem) {
                      return null;
                    }
                    return (
                      <li key={`${seat.name}-${moduleItem.id}`} className="flex items-center gap-3 text-sm text-neutral-700">
                        <ModuleBadge moduleItem={moduleItem} size="sm" />
                        <span>{moduleItem.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Compare"
            title="Compare all features"
            subtitle="Review what's included across plans and modules."
          />
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Filter by seat type</span>
              <div className="relative">
                <select
                  className="appearance-none rounded-full border border-neutral-200 bg-white px-4 py-2 pr-9 text-sm font-semibold text-neutral-700 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30"
                  defaultValue="full"
                >
                  <option value="viewer">Viewer seat</option>
                  <option value="field">Field seat</option>
                  <option value="full">Full seat</option>
                </select>
                <ChevronIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              </div>
            </div>
            <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1 text-xs font-semibold text-neutral-600 shadow-sm">
              <button type="button" className="rounded-full bg-brand-primary px-3 py-1 text-white">
                All features
              </button>
              <button type="button" className="px-3 py-1 text-neutral-500 hover:text-neutral-700">
                Key features
              </button>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <div className="min-w-[920px]">
                <div className="grid grid-cols-[minmax(240px,1fr)_repeat(4,minmax(0,130px))_minmax(0,40px)] gap-4 border-b border-neutral-200 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  <div>Features</div>
                  {planTiers.map((planTier) => (
                    <div key={planTier.id} className="text-center">
                      {planTier.label}
                    </div>
                  ))}
                  <div />
                </div>
                <div className="divide-y divide-neutral-200">
                  {compareModules.map((compareModule) => (
                    <details key={compareModule.id} className="group">
                      <summary className="grid cursor-pointer list-none grid-cols-[minmax(240px,1fr)_repeat(4,minmax(0,130px))_minmax(0,40px)] gap-4 px-6 py-4 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 [&::-webkit-details-marker]:hidden">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span>{compareModule.name}</span>
                            <span className="text-xs font-normal text-neutral-500">{compareModule.description}</span>
                          </div>
                        </div>
                        {planTiers.map((planTier) => (
                          <div key={planTier.id} className="flex items-center justify-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-neutral-200" />
                          </div>
                        ))}
                        <div className="flex items-center justify-end">
                          <ChevronIcon className="h-4 w-4 text-neutral-400 transition group-open:rotate-180" />
                        </div>
                      </summary>
                      <div className="border-t border-neutral-200 bg-neutral-50/40">
                        {compareModule.features.map((feature) => (
                          <details key={`${compareModule.id}-${feature.name}`} className="group border-t border-neutral-200 bg-white">
                            <summary className="grid cursor-pointer list-none grid-cols-[minmax(240px,1fr)_repeat(4,minmax(0,130px))_minmax(0,40px)] gap-4 px-6 py-3 text-sm text-neutral-700 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 [&::-webkit-details-marker]:hidden">
                              <div className="flex items-center gap-3 pl-6">
                                <span className="font-medium text-neutral-800">{feature.name}</span>
                              </div>
                              {planTiers.map((planTier) => (
                                <div key={planTier.id} className="flex items-center justify-center">
                                  <AvailabilityCell value={feature.availability[planTier.id]} />
                                </div>
                              ))}
                              <div className="flex items-center justify-end">
                                <ChevronIcon className="h-4 w-4 text-neutral-400 transition group-open:rotate-180" />
                              </div>
                            </summary>
                            <div className="pb-4 pr-6 pl-14 text-sm text-neutral-500">
                              <p className="max-w-2xl">{feature.detail}</p>
                            </div>
                          </details>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
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
