"use client";

import type { ReactElement } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";

type BillingCycle = "annual" | "monthly";
type FeatureView = "all" | "key";
type SeatFilter = "viewer" | "field" | "full";

type Module = {
  id: string;
  label: string;
  color: string;
  Icon: (props: { className?: string }) => ReactElement;
};

const modules: Module[] = [
  {
    id: "projects",
    label: "Sites",
    color: "bg-slate-100 text-slate-700 ring-slate-200",
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
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16" />
        <path d="M9 4v16" />
      </svg>
    ),
  },
  {
    id: "surveys",
    label: "Surveys",
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
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 4.5h6" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    id: "site-data",
    label: "Site Data",
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
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M4 10h16" />
        <path d="M9 5v14" />
      </svg>
    ),
  },
  {
    id: "assignments",
    label: "Assignments",
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
    id: "tickets",
    label: "Tickets",
    color: "bg-orange-100 text-orange-700 ring-orange-200",
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
        <path d="M4 7h16v10H4z" />
        <path d="M9 7v10" />
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
    id: "gallery",
    label: "Gallery",
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
  {
    id: "attachments",
    label: "Attachments",
    color: "bg-indigo-100 text-indigo-700 ring-indigo-200",
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
        <path d="M8 12l4-4a3 3 0 1 1 4 4l-6 6a4 4 0 0 1-6-6l6-6" />
      </svg>
    ),
  },
  {
    id: "onesnap",
    label: "OneSnap",
    color: "bg-violet-100 text-violet-700 ring-violet-200",
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
];

const moduleMap = modules.reduce<Record<string, Module>>((acc, moduleItem) => {
  acc[moduleItem.id] = moduleItem;
  return acc;
}, {});

const dragDropModule: Module = {
  id: "drag-drop",
  label: "Drag + drop layout",
  color: "bg-cyan-100 text-cyan-700 ring-cyan-200",
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
      <path d="M7 3v4M3 7h4" />
      <rect x="10" y="10" width="10" height="10" rx="2" />
      <path d="M13 10V7a2 2 0 0 0-2-2H7" />
    </svg>
  ),
};

const photoDocsModule: Module = {
  id: "photo-docs",
  label: "Photo capture + documentation",
  color: "bg-lime-100 text-lime-700 ring-lime-200",
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
      <rect x="3" y="7" width="13" height="12" rx="2" />
      <path d="M7 7l2-3h4l2 3" />
      <circle cx="9.5" cy="13" r="2.5" />
      <path d="M18 10h3v9a2 2 0 0 1-2 2h-5" />
    </svg>
  ),
};

const readCommentModule: Module = {
  id: "read-comment",
  label: "Read + comment only",
  color: "bg-slate-100 text-slate-700 ring-slate-200",
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
      <path d="M7 19l2-2h4l2 2" />
    </svg>
  ),
};

const seatModuleOverrides: Partial<
  Record<SeatFilter, { replaceId: string; items: Module[] }>
> = {
  viewer: { replaceId: "surveys", items: [readCommentModule] },
  full: { replaceId: "surveys", items: [dragDropModule, photoDocsModule] },
  field: { replaceId: "surveys", items: [photoDocsModule] },
};

const seatAccess: Record<string, string[]> = {
  full: [
    "projects",
    "surveys",
    "site-data",
    "assignments",
    "tickets",
    "reports",
    "gallery",
    "attachments",
    "onesnap",
  ],
  field: [
    "projects",
    "surveys",
    "assignments",
    "tickets",
    "onesnap",
  ],
  viewer: [
    "projects",
    "surveys",
    "tickets",
    "onesnap",
  ],
};

const professionalSeatModules = {
  viewer: seatAccess.viewer.filter((moduleId) => moduleId !== "tickets"),
  field: seatAccess.field.filter((moduleId) => moduleId !== "tickets"),
  full: seatAccess.full.filter((moduleId) => moduleId !== "tickets"),
};

const organizationSeatModules = {
  viewer: seatAccess.viewer,
  field: seatAccess.field,
  full: seatAccess.full,
};

const enterpriseSeatModules = organizationSeatModules;

type SeatType = {
  id: SeatFilter;
  name: string;
  description: string;
  color: string;
  Icon: (props: { className?: string }) => ReactElement;
  modules: string[];
};

const seatTypes: SeatType[] = [
  {
    id: "viewer",
    name: "Viewer seat",
    description: "Non-billable. View and comment access across sites and reports.",
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
    id: "field",
    name: "Field seat",
    description: "Billable. Field workflows for onsite capture and updates.",
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
    id: "full",
    name: "Full seat",
    description: "Billable. Full authoring and management workflows.",
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
    description: "Best for small teams validating a new survey workflow. Includes one personal Full seat.",
    price: "Free",
    priceUnit: "Starter plan",
    cta: { label: "Select plan", href: "/contact" },
    seats: [],
    features: [
      "Sites and Surveys workspace",
      "Site Data tabs: Survey Information, Installation Information, Element Information, Bill of Materials",
      "Reports: Floor Plans, Bill of Materials, Element/Survey/Installation Information",
      "Gallery and Attachments",
    ],
  },
  {
    name: "Professional",
    description: "For growing integrators who need consistent surveys and reporting.",
    price: "$18",
    priceUnit: "per seat / month",
    badge: "Most popular",
    highlight: true,
    cta: { label: "Select plan", href: "/contact" },
    seats: [
      { name: "Viewer seat", price: "$6", cadence: "/mo", modules: professionalSeatModules.viewer },
      { name: "Field seat", price: "$12", cadence: "/mo", modules: professionalSeatModules.field },
      { name: "Full seat", price: "$18", cadence: "/mo", modules: professionalSeatModules.full },
    ],
    features: [
      "Assignments + My Assignments",
      "Reports: Floor Plans, Bill of Materials, Survey/Installation/Element Information",
      "Photo Report + report history",
      "OneSnap: Gallery, Albums, and Map",
    ],
  },
  {
    name: "Organization",
    description: "For multi-team standardization across sites and regions.",
    price: "$28",
    priceUnit: "per seat / month",
    cta: { label: "Select plan", href: "/contact" },
    auxLink: { label: "Contact sales", href: "/contact" },
    seats: [
      { name: "Viewer seat", price: "$12", cadence: "/mo", modules: organizationSeatModules.viewer },
      { name: "Field seat", price: "$20", cadence: "/mo", modules: organizationSeatModules.field },
      { name: "Full seat", price: "$28", cadence: "/mo", modules: organizationSeatModules.full },
    ],
    features: [
      "Tickets for site issue tracking",
      "Element customization (fields, variations, accessories)",
      "WiseEyes AI (credits limited to 'x' tokens)",
      "Portfolio reporting across sites",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom plan for large portfolios and multi-site rollouts.",
    price: "Custom",
    priceUnit: "Annual contract",
    cta: { label: "Contact sales", href: "/contact" },
    auxLink: { label: "Learn more", href: "/contact" },
    seats: [
      { name: "Viewer seat", price: "Custom", modules: enterpriseSeatModules.viewer },
      { name: "Field seat", price: "Custom", modules: enterpriseSeatModules.field },
      { name: "Full seat", price: "Custom", modules: enterpriseSeatModules.full },
    ],
    features: [
      "All Organization features and modules",
      "WiseEyes AI with expanded token credits",
      "Advanced reporting packages + multi-site rollout planning",
      "Custom seat mix and volume pricing + dedicated onboarding",
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
  isKey?: boolean;
};

type CompareModule = {
  id: string;
  name: string;
  description: string;
  features: CompareFeature[];
};

const availabilityAll: Record<PlanTierId, Availability> = {
  starter: true,
  professional: true,
  organization: true,
  enterprise: true,
};

const availabilityPro: Record<PlanTierId, Availability> = {
  starter: false,
  professional: true,
  organization: true,
  enterprise: true,
};

const availabilityOrg: Record<PlanTierId, Availability> = {
  starter: false,
  professional: false,
  organization: true,
  enterprise: true,
};

const availabilityLimited: Record<PlanTierId, Availability> = {
  starter: "Limited",
  professional: true,
  organization: true,
  enterprise: true,
};

const compareModules: CompareModule[] = [
  {
    id: "projects",
    name: "Sites",
    description: "Organize sites and open the full site workspace.",
    features: [
      {
        name: "Sites list + search",
        detail: "View sites, search by name, and jump into site detail pages.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Site detail workspace",
        detail: "Access Surveys, Site Data, Attachments, Reports, Gallery, Tickets, and Assignments tabs.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Site team access",
        detail: "Set Edit, Restricted Edit, or View access per site member.",
        availability: availabilityAll,
      },
      {
        name: "Stage and archive tracking",
        detail: "Track active vs archived sites and current stage status.",
        availability: availabilityPro,
      },
    ],
  },
  {
    id: "surveys",
    name: "Surveys",
    description: "Floor plan workflows for capturing and mapping site surveys.",
    features: [
      {
        name: "Floor plan upload",
        detail: "Create surveys by uploading or importing floor plans.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Scale setting",
        detail: "Set real-world scale for accurate measurements.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Element placement",
        detail: "Place elements directly on the floor plan layout.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Element detail sidebar",
        detail: "Element Info, Element Photos, Element Assignments, Element Tickets, and Element Path tabs.",
        availability: availabilityAll,
      },
      {
        name: "Field of View (FoV) overlays",
        detail: "Visualize element coverage and orientation on the plan.",
        availability: availabilityPro,
      },
      {
        name: "Element visibility filters",
        detail: "Filter elements by category, search, and visibility rules.",
        availability: availabilityAll,
      },
      {
        name: "Swap elements",
        detail: "Swap an element for another while preserving placement and data.",
        availability: availabilityPro,
      },
    ],
  },
  {
    id: "site-data",
    name: "Site Data",
    description: "Structured data tabs for reporting and field review.",
    features: [
      {
        name: "Survey Information",
        detail: "Survey-level details and operational status views.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Installation Information",
        detail: "Installation tracking fields and status reporting.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Element Information",
        detail: "Element-level data, labels, and field values.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Bill of Materials",
        detail: "Material summaries grouped by element category and library.",
        availability: availabilityAll,
      },
    ],
  },
  {
    id: "assignments",
    name: "Assignments",
    description: "Task workflows connected to sites and elements.",
    features: [
      {
        name: "Assignments list",
        detail: "Create and manage assignments by site or element.",
        availability: availabilityPro,
        isKey: true,
      },
      {
        name: "Status + priority",
        detail: "Track assignment status and priority levels.",
        availability: availabilityPro,
        isKey: true,
      },
      {
        name: "Due dates",
        detail: "Set deadlines and keep field teams on schedule.",
        availability: availabilityPro,
      },
      {
        name: "Assignment comments",
        detail: "Collaborate with comments on each assignment.",
        availability: availabilityPro,
      },
      {
        name: "Assignment attachments",
        detail: "Attach files and reference material to tasks.",
        availability: availabilityPro,
      },
      {
        name: "My Assignments view",
        detail: "Personalized assignment list for each user.",
        availability: availabilityPro,
      },
      {
        name: "Element-linked assignments",
        detail: "Tie assignments directly to elements on the floor plan.",
        availability: availabilityPro,
      },
    ],
  },
  {
    id: "tickets",
    name: "Tickets",
    description: "Ticketing workflows for service and issue tracking.",
    features: [
      {
        name: "Tickets list",
        detail: "Create and manage tickets across sites.",
        availability: availabilityOrg,
        isKey: true,
      },
      {
        name: "Ticket status workflow",
        detail: "Track ticket status updates and progress.",
        availability: availabilityOrg,
      },
      {
        name: "Ticket comments",
        detail: "Collaborate with ticket comments and updates.",
        availability: availabilityOrg,
      },
      {
        name: "Element-linked tickets",
        detail: "Connect tickets to specific elements or locations.",
        availability: availabilityOrg,
        isKey: true,
      },
      {
        name: "My Tickets + Following",
        detail: "Quick views for assigned or followed tickets.",
        availability: availabilityOrg,
      },
    ],
  },
  {
    id: "reports",
    name: "Reports",
    description: "Generate site reports and exportable deliverables.",
    features: [
      {
        name: "Floor Plans report",
        detail: "Generate PDF floor plan reports from surveys.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Bill of Materials report",
        detail: "Create Bill of Materials reports for estimating.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Element Information report",
        detail: "Element-level data reports for proposals and documentation.",
        availability: availabilityAll,
      },
      {
        name: "Installation Information report",
        detail: "Installation tracking reports with status fields.",
        availability: availabilityAll,
      },
      {
        name: "Survey Information report",
        detail: "Survey data reports with operational and installation fields.",
        availability: availabilityAll,
      },
      {
        name: "Photo Report",
        detail: "Photo-based documentation reports for approvals.",
        availability: availabilityPro,
      },
      {
        name: "Spreadsheet exports (XLSX)",
        detail: "Export Element, Installation, and Survey Information spreadsheets.",
        availability: availabilityAll,
      },
      {
        name: "Report history + downloads",
        detail: "Track report status and download generated files.",
        availability: availabilityAll,
      },
    ],
  },
  {
    id: "gallery",
    name: "Gallery",
    description: "Centralized site photo management.",
    features: [
      {
        name: "Site Gallery",
        detail: "View all site photos in one gallery.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Albums",
        detail: "Organize photos into site albums.",
        availability: availabilityAll,
      },
      {
        name: "All Photos view",
        detail: "Access full photo lists across the site.",
        availability: availabilityAll,
      },
    ],
  },
  {
    id: "attachments",
    name: "Attachments",
    description: "Site file uploads and document storage.",
    features: [
      {
        name: "Site attachments",
        detail: "Upload and store site files and documents.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Downloads + sharing",
        detail: "Download attachments for proposals and handoffs.",
        availability: availabilityAll,
      },
    ],
  },
  {
    id: "onesnap",
    name: "OneSnap",
    description: "Photo capture and documentation workflows.",
    features: [
      {
        name: "OneSnap Gallery",
        detail: "Capture and organize OneSnap photo sets.",
        availability: availabilityLimited,
        isKey: true,
      },
      {
        name: "Albums",
        detail: "Create albums for organizing OneSnap photos.",
        availability: availabilityLimited,
      },
      {
        name: "Map",
        detail: "Map-based OneSnap photo views.",
        availability: availabilityLimited,
      },
      {
        name: "Reports",
        detail: "Generate OneSnap reports for documentation.",
        availability: availabilityLimited,
      },
      {
        name: "Archive",
        detail: "Archive completed OneSnap collections.",
        availability: availabilityLimited,
      },
      {
        name: "Floor Plan Builder",
        detail: "Create simple floor plans for OneSnap collections.",
        availability: availabilityLimited,
      },
      {
        name: "Public album links",
        detail: "Share OneSnap albums with public links when needed.",
        availability: availabilityLimited,
      },
    ],
  },
];

const compareModuleIds = compareModules.map((moduleItem) => moduleItem.id);

const seatCompareModuleMap: Record<SeatFilter, string[]> = {
  viewer: seatAccess.viewer,
  field: seatAccess.field,
  full: compareModuleIds,
};

const faqs = [
  {
    question: "Can we start small?",
    answer:
      "Yes. We can scope a rollout around a few sites or a single site before expanding.",
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
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");
  const [seatFilter, setSeatFilter] = useState<SeatFilter>("full");
  const [featureView, setFeatureView] = useState<FeatureView>("all");

  const filteredModules = useMemo(() => {
    const allowedModules = seatCompareModuleMap[seatFilter] ?? compareModuleIds;
    return compareModules
      .filter((compareModule) => allowedModules.includes(compareModule.id))
      .map((compareModule) => {
        const filteredFeatures =
          featureView === "key"
            ? compareModule.features.filter((feature) => feature.isKey)
            : compareModule.features;
        return { ...compareModule, features: filteredFeatures };
      })
      .filter((compareModule) => compareModule.features.length > 0);
  }, [seatFilter, featureView]);

  return (
    <MarketingShell>
      <PageHero
        eyebrow="Pricing"
        title="Pick your plan, choose your seats"
        subtitle="Choose viewer, field, or full seats and scale from a small team to an organization-wide rollout."
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
                      <p className="text-lg font-semibold text-neutral-900">{plan.name}</p>
                      {plan.name === "Professional" && plan.badge && (
                        <span className="inline-flex rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <div className="min-h-[40px]">
                      {plan.name === "Professional" ? (
                        <div
                          className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-white p-1 text-xs font-semibold text-neutral-600 shadow-sm"
                          role="group"
                          aria-label="Billing cycle"
                        >
                          <button
                            type="button"
                            onClick={() => setBillingCycle("annual")}
                            className={`rounded-full px-3 py-1 transition ${
                              billingCycle === "annual"
                                ? "bg-brand-primary text-white"
                                : "text-neutral-500 hover:text-neutral-700"
                            }`}
                            aria-pressed={billingCycle === "annual"}
                          >
                            Annual
                          </button>
                          <button
                            type="button"
                            onClick={() => setBillingCycle("monthly")}
                            className={`rounded-full px-3 py-1 transition ${
                              billingCycle === "monthly"
                                ? "bg-brand-primary text-white"
                                : "text-neutral-500 hover:text-neutral-700"
                            }`}
                            aria-pressed={billingCycle === "monthly"}
                          >
                            Monthly
                          </button>
                        </div>
                      ) : plan.name === "Organization" || plan.name === "Enterprise" ? (
                        <span className="text-xs text-neutral-500">Annual plan</span>
                      ) : null}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-semibold text-brand-primary">{plan.price}</p>
                        {plan.priceUnit && <p className="text-xs text-neutral-500">{plan.priceUnit}</p>}
                      </div>
                      <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>
                    </div>
                  </div>

                    <div className="min-h-[276px]">
                    {plan.seats.length > 0 && (
                      <div className="space-y-3">
                        {plan.seats.map((seat) => (
                          <div key={`${plan.name}-${seat.name}`} className="rounded-xl border border-neutral-200 bg-white p-3">
                            <div className="flex items-center justify-between gap-2 text-sm font-semibold text-neutral-900">
                              <span>{seat.name}</span>
                              <span className="text-base text-brand-primary">
                                {seat.price}
                                {seat.cadence && (
                                  <span className="text-xs font-normal text-neutral-500">{seat.cadence}</span>
                                )}
                              </span>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {seat.modules
                                .filter((moduleId) => moduleId !== "site-elements")
                                .map((moduleId) => {
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
                    )}
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
                    <div className="min-h-[20px]">
                      {plan.auxLink ? (
                        <Link
                          href={plan.auxLink.href}
                          className="text-xs font-semibold text-brand-primary underline-offset-4 hover:underline"
                        >
                          {plan.auxLink.label}
                        </Link>
                      ) : (
                        <span aria-hidden="true" />
                      )}
                    </div>
                    <div className="min-h-[252px]">
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
            subtitle="Pick the right access level for field teams, site leads, and stakeholders."
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
                  {seat.modules
                    .filter((moduleId) => moduleId !== "site-elements")
                    .flatMap((moduleId) => {
                      const override = seatModuleOverrides[seat.id];
                      if (override && moduleId === override.replaceId) {
                        return override.items;
                      }
                      const moduleItem = moduleMap[moduleId];
                      return moduleItem ? [moduleItem] : [];
                    })
                    .map((moduleItem) => (
                      <li
                        key={`${seat.name}-${moduleItem.id}`}
                        className="flex items-center gap-3 text-sm text-neutral-700"
                      >
                        <ModuleBadge moduleItem={moduleItem} size="sm" />
                        <span>{moduleItem.label}</span>
                      </li>
                    ))}
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
                  value={seatFilter}
                  onChange={(event) => setSeatFilter(event.target.value as SeatFilter)}
                  aria-label="Filter by seat type"
                >
                  <option value="viewer">Viewer seat</option>
                  <option value="field">Field seat</option>
                  <option value="full">Full seat</option>
                </select>
                <ChevronIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              </div>
            </div>
            <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1 text-xs font-semibold text-neutral-600 shadow-sm">
              <button
                type="button"
                onClick={() => setFeatureView("all")}
                className={`rounded-full px-3 py-1 transition ${
                  featureView === "all"
                    ? "bg-brand-primary text-white"
                    : "text-neutral-500 hover:text-neutral-700"
                }`}
                aria-pressed={featureView === "all"}
              >
                All features
              </button>
              <button
                type="button"
                onClick={() => setFeatureView("key")}
                className={`rounded-full px-3 py-1 transition ${
                  featureView === "key"
                    ? "bg-brand-primary text-white"
                    : "text-neutral-500 hover:text-neutral-700"
                }`}
                aria-pressed={featureView === "key"}
              >
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
                  {filteredModules.map((compareModule) => (
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
        description="Tell us about your sites and we will map the right plan for your workflow."
        primaryCta={{ label: "Talk to sales", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
      />
    </MarketingShell>
  );
}
