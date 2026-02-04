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
  label: "Drag & drop + survey design",
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
  label: "Photo capture + notes",
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
  label: "Read-only access",
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
    "gallery",
    "attachments",
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
    description: "Read-only access to sites, surveys, data tables, reports, and photos.",
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
    description: "Capture photos, add comments, and complete assignments onsite.",
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
    description: "Create sites and surveys, edit layouts, and generate reports.",
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

const professionalPricingByCycle: Record<
  BillingCycle,
  { price: string; priceUnit: string; seats: Seat[] }
> = {
  annual: {
    price: "$18",
    priceUnit: "per seat / month, billed annually",
    seats: [
      { name: "Viewer seat", price: "$6", cadence: "/mo", modules: professionalSeatModules.viewer },
      { name: "Field seat", price: "$12", cadence: "/mo", modules: professionalSeatModules.field },
      { name: "Full seat", price: "$18", cadence: "/mo", modules: professionalSeatModules.full },
    ],
  },
  monthly: {
    price: "$24",
    priceUnit: "per seat / month, billed monthly",
    seats: [
      { name: "Viewer seat", price: "$8", cadence: "/mo", modules: professionalSeatModules.viewer },
      { name: "Field seat", price: "$16", cadence: "/mo", modules: professionalSeatModules.field },
      { name: "Full seat", price: "$24", cadence: "/mo", modules: professionalSeatModules.full },
    ],
  },
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Best for small teams validating a new site survey workflow. Includes one personal Full seat.",
    price: "Free",
    priceUnit: "Starter plan",
    cta: { label: "Select plan", href: "/contact" },
    seats: [],
    features: [
      "Sites + Surveys workspace",
      "Site Data tabs: Survey, Installation, Element, Bill of Materials",
      "Core reports: Floorplan, BOM, and data tables",
      "Site gallery + attachments",
    ],
  },
  {
    name: "Professional",
    description: "For growing teams that need consistent site surveys, assignments, and reporting.",
    price: professionalPricingByCycle.annual.price,
    priceUnit: professionalPricingByCycle.annual.priceUnit,
    badge: "Most popular",
    highlight: true,
    cta: { label: "Select plan", href: "/contact" },
    seats: professionalPricingByCycle.annual.seats,
    features: [
      "Assignments + My Assignments",
      "Field photo capture + comments",
      "Reports: floorplans, BOM, and data exports",
      "Photo Report + report history",
      "OneSnap sessions + photo capture",
    ],
  },
  {
    name: "Organization",
    description: "For multi-team standardization across sites and regions with governance controls.",
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
      "Element library customization (fields, variations, accessories)",
      "WiseEyes AI quality checks (usage-based credits)",
      "Organization audit logs + admin settings",
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
      "WiseEyes AI with expanded usage credits",
      "Advanced reporting packages + rollout planning",
      "Custom seat mix, volume pricing, and onboarding",
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
  seatMin?: SeatFilter;
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

const seatLevel: Record<SeatFilter, number> = {
  viewer: 1,
  field: 2,
  full: 3,
};

const seatRequirementLabel: Record<SeatFilter, string> = {
  viewer: "Viewer seat",
  field: "Field seat",
  full: "Full seat",
};

const compareModules: CompareModule[] = [
  {
    id: "projects",
    name: "Sites",
    description: "Create, organize, and manage security sites and stakeholder access.",
    features: [
      {
        name: "Site list + search",
        detail: "Browse all sites, filter by status, and jump into a site workspace.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Site workspace tabs",
        detail: "Surveys, Site Data, Gallery, Attachments, Reports, Tickets, and Assignments in one workspace.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "View site team + contacts",
        detail: "See assigned members, client contacts, and access roles for each site.",
        availability: availabilityAll,
      },
      {
        name: "Create or edit sites",
        detail: "Create sites and update core details (Full seat; Manager role can edit any site).",
        availability: availabilityAll,
        seatMin: "full",
      },
      {
        name: "Stage tracking + archive",
        detail: "Update stage/status; archive or restore sites (Manager role required).",
        availability: availabilityPro,
        seatMin: "full",
      },
    ],
  },
  {
    id: "surveys",
    name: "Surveys",
    description: "Floorplan-based survey editor for device placement and coverage planning.",
    features: [
      {
        name: "View surveys + floorplans",
        detail: "Open plans, review layouts, and inspect element context across a site.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Create surveys + upload floorplans",
        detail: "Start new surveys and upload floorplans for each site.",
        availability: availabilityAll,
        isKey: true,
        seatMin: "full",
      },
      {
        name: "Scale + measurement tools",
        detail: "Set real-world scale for accurate distances and coverage.",
        availability: availabilityAll,
        seatMin: "full",
      },
      {
        name: "Drag-and-drop element placement",
        detail: "Place, move, and label elements directly on the floorplan.",
        availability: availabilityAll,
        isKey: true,
        seatMin: "full",
      },
      {
        name: "Field photos + comments",
        detail: "Capture element photos and add onsite notes or comments.",
        availability: availabilityAll,
        isKey: true,
        seatMin: "field",
      },
      {
        name: "Field of View (FoV) overlays",
        detail: "Visualize camera coverage and orientation on the plan.",
        availability: availabilityPro,
        seatMin: "full",
      },
      {
        name: "Draw mode (walls + markups)",
        detail: "Draw walls, zones, labels, and markup annotations on the plan.",
        availability: availabilityPro,
        seatMin: "full",
      },
      {
        name: "Paths between elements",
        detail: "Draw paths between elements for cabling and connectivity context.",
        availability: availabilityAll,
        seatMin: "full",
      },
      {
        name: "Swap elements + visibility filters",
        detail: "Swap devices and filter by category or visibility rules.",
        availability: availabilityPro,
        seatMin: "full",
      },
    ],
  },
  {
    id: "site-data",
    name: "Site Data",
    description: "Structured data tables that roll up survey and installation details.",
    features: [
      {
        name: "Survey Information table",
        detail: "Survey-level status, notes, and operational tracking fields.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Installation Information table",
        detail: "Installation status fields and progress tracking across elements.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Element Information table",
        detail: "Element labels, categories, and field values in a sortable grid.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Bill of Materials rollups",
        detail: "Material summaries grouped by element category and library.",
        availability: availabilityAll,
      },
      {
        name: "Custom element fields + accessories",
        detail: "Configure element fields, variations, and accessories (Manager role required).",
        availability: availabilityOrg,
        seatMin: "full",
      },
      {
        name: "Export tables to spreadsheets",
        detail: "Generate XLSX exports for Survey, Installation, and Element data.",
        availability: availabilityAll,
        seatMin: "full",
      },
    ],
  },
  {
    id: "assignments",
    name: "Assignments",
    description: "Task workflows tied to sites and elements.",
    features: [
      {
        name: "Assignments list + My Assignments",
        detail: "Track open tasks by site and see personal task queues.",
        availability: availabilityPro,
        isKey: true,
        seatMin: "field",
      },
      {
        name: "Create assignments linked to elements",
        detail: "Create tasks tied to elements or site areas.",
        availability: availabilityPro,
        seatMin: "field",
      },
      {
        name: "Status, priority, and due dates",
        detail: "Track progress, priority, and deadlines.",
        availability: availabilityPro,
        seatMin: "field",
      },
      {
        name: "Comments + attachments",
        detail: "Collaborate with notes and files on each task.",
        availability: availabilityPro,
        seatMin: "field",
      },
      {
        name: "Assign or reassign teammates",
        detail: "Assign owners and reassign tasks (Full seat required).",
        availability: availabilityPro,
        seatMin: "full",
      },
      {
        name: "Complete assignments in the field",
        detail: "Mark tasks complete from web or mobile workflows.",
        availability: availabilityPro,
        seatMin: "field",
      },
    ],
  },
  {
    id: "tickets",
    name: "Tickets",
    description: "Issue and service tracking for ongoing site work (module entitlement required).",
    features: [
      {
        name: "Create + view tickets",
        detail: "Log issues per site and track ticket lists and detail views.",
        availability: availabilityOrg,
        isKey: true,
      },
      {
        name: "Status workflow + priorities",
        detail: "Update ticket status, category, and priority.",
        availability: availabilityOrg,
      },
      {
        name: "Ticket comments",
        detail: "Collaborate with ticket comments and updates.",
        availability: availabilityOrg,
      },
      {
        name: "Followers + notifications",
        detail: "Follow tickets and manage notification updates.",
        availability: availabilityOrg,
        seatMin: "field",
      },
      {
        name: "Attach files to tickets",
        detail: "Upload attachments and reference files on tickets.",
        availability: availabilityOrg,
        seatMin: "field",
      },
      {
        name: "Assign or reassign tickets",
        detail: "Assign ticket owners (Full seat required).",
        availability: availabilityOrg,
        seatMin: "full",
      },
    ],
  },
  {
    id: "reports",
    name: "Reports",
    description: "Generate deliverables for proposals, installs, and handoff documentation.",
    features: [
      {
        name: "View and download reports",
        detail: "Access report history and download generated files.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Floorplan PDF reports",
        detail: "Export floorplan layouts for proposals and reviews.",
        availability: availabilityAll,
        isKey: true,
        seatMin: "full",
      },
      {
        name: "Bill of Materials reports",
        detail: "Generate BOM exports for estimating and procurement.",
        availability: availabilityAll,
        seatMin: "full",
      },
      {
        name: "Survey + Installation data reports",
        detail: "Export Survey, Installation, and Element information.",
        availability: availabilityAll,
        seatMin: "full",
      },
      {
        name: "Photo Reports",
        detail: "Create photo-based documentation reports.",
        availability: availabilityPro,
        seatMin: "full",
      },
      {
        name: "Spreadsheet exports (XLSX)",
        detail: "Export data tables for downstream workflows.",
        availability: availabilityAll,
        seatMin: "full",
      },
    ],
  },
  {
    id: "gallery",
    name: "Gallery",
    description: "Photo library for site documentation.",
    features: [
      {
        name: "Site gallery + albums",
        detail: "Browse all photos across a site or by album.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Upload photos",
        detail: "Add photos to site galleries and element records.",
        availability: availabilityAll,
        seatMin: "field",
      },
      {
        name: "Create and organize albums",
        detail: "Group photos into albums for handoff and review.",
        availability: availabilityAll,
        seatMin: "full",
      },
      {
        name: "Delete or replace photos",
        detail: "Remove outdated photos (Full seat required).",
        availability: availabilityAll,
        seatMin: "full",
      },
    ],
  },
  {
    id: "attachments",
    name: "Attachments",
    description: "Files, drawings, and documents stored per site.",
    features: [
      {
        name: "View and download attachments",
        detail: "Access files, drawings, and supporting documents per site.",
        availability: availabilityAll,
        isKey: true,
      },
      {
        name: "Upload attachments",
        detail: "Upload files and reference documents to a site.",
        availability: availabilityAll,
        seatMin: "field",
      },
      {
        name: "Delete attachments",
        detail: "Remove outdated files from a site.",
        availability: availabilityAll,
        seatMin: "field",
      },
    ],
  },
  {
    id: "onesnap",
    name: "OneSnap",
    description: "Fast photo capture for quick site walks (module entitlement required).",
    features: [
      {
        name: "View OneSnap sessions + albums",
        detail: "Access session lists, albums, and photo sets.",
        availability: availabilityLimited,
        isKey: true,
      },
      {
        name: "Create sessions + capture photos",
        detail: "Start sessions and capture photos onsite.",
        availability: availabilityLimited,
        seatMin: "field",
      },
      {
        name: "Edit labels + organize photos",
        detail: "Rename photos and adjust album organization.",
        availability: availabilityLimited,
        seatMin: "field",
      },
      {
        name: "Create albums + archive sessions",
        detail: "Organize sessions with albums and archive when complete.",
        availability: availabilityLimited,
        seatMin: "full",
      },
      {
        name: "Delete photos or sessions",
        detail: "Delete photos or sessions (Full seat; Manager role required for session deletion).",
        availability: availabilityLimited,
        seatMin: "full",
      },
      {
        name: "Public album links + OneSnap reports",
        detail: "Share album links and generate OneSnap reports.",
        availability: availabilityLimited,
        seatMin: "full",
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
    const allowedModules = new Set(seatCompareModuleMap[seatFilter] ?? compareModuleIds);
    return compareModules
      .filter((compareModule) => allowedModules.has(compareModule.id))
      .map((compareModule) => {
        const filteredFeatures =
          featureView === "key"
            ? compareModule.features.filter((feature) => feature.isKey)
            : compareModule.features;
        const featuresWithSeatAccess = filteredFeatures.map((feature) => {
          const seatMin = feature.seatMin ?? "viewer";
          const meetsSeat = seatLevel[seatFilter] >= seatLevel[seatMin];
          const availabilityByPlan = planTiers.reduce<Record<PlanTierId, Availability>>(
            (acc, planTier) => {
              const baseValue = feature.availability[planTier.id];
              if (meetsSeat) {
                acc[planTier.id] = baseValue;
              } else if (baseValue === false) {
                acc[planTier.id] = false;
              } else {
                acc[planTier.id] = seatRequirementLabel[seatMin];
              }
              return acc;
            },
            { ...feature.availability }
          );
          return { ...feature, availability: availabilityByPlan };
        });
        return { ...compareModule, features: featuresWithSeatAccess };
      })
      .filter((compareModule) => compareModule.features.length > 0);
  }, [seatFilter, featureView]);

  const displayPlans = useMemo(
    () =>
      plans.map((plan) => {
        if (plan.name !== "Professional") return plan;
        const pricing = professionalPricingByCycle[billingCycle];
        return {
          ...plan,
          price: pricing.price,
          priceUnit: pricing.priceUnit,
          seats: pricing.seats,
        };
      }),
    [billingCycle]
  );

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
              {displayPlans.map((plan, index) => (
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
                    <div className="min-h-[32px] md:min-h-[40px]">
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
                      {plan.seats.length > 0 ? (
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-brand-primary">
                            {plan.name === "Enterprise"
                              ? "Custom pricing · contact sales"
                              : "Per-seat pricing shown below"}
                          </p>
                          {plan.name === "Enterprise" && (
                            <p className="text-xs text-neutral-500">
                              Tailored seat mix, modules, and rollout support.
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <p className="text-2xl font-semibold text-brand-primary">{plan.price}</p>
                          {plan.priceUnit && <p className="text-xs text-neutral-500">{plan.priceUnit}</p>}
                        </div>
                      )}
                      <p className={`text-sm text-neutral-600 ${plan.seats.length > 0 ? "mt-3" : "mt-2"}`}>
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="min-h-0 md:min-h-[276px]">
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
                    <div className="min-h-0 md:min-h-[20px]">
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
                    <div className="min-h-0 md:min-h-[252px]">
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
            <div className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-white p-1 text-xs font-semibold text-neutral-600 shadow-sm self-start">
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
              <div className="min-w-[760px] sm:min-w-[920px]">
                <div className="grid grid-cols-[minmax(240px,1fr)_repeat(4,minmax(0,130px))_minmax(0,40px)] gap-3 sm:gap-4 border-b border-neutral-200 px-4 sm:px-6 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
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
                      <summary className="grid cursor-pointer list-none grid-cols-[minmax(240px,1fr)_repeat(4,minmax(0,130px))_minmax(0,40px)] gap-3 sm:gap-4 px-4 sm:px-6 py-4 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 [&::-webkit-details-marker]:hidden">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span>{compareModule.name}</span>
                            <span className="text-xs font-normal text-neutral-500">{compareModule.description}</span>
                          </div>
                        </div>
                        {planTiers.map((planTier) => (
                          <div key={planTier.id} className="flex items-center justify-center" />
                        ))}
                        <div className="flex items-center justify-end">
                          <ChevronIcon className="h-4 w-4 text-neutral-400 transition group-open:rotate-180" />
                        </div>
                      </summary>
                      <div className="border-t border-neutral-200 bg-neutral-50/40">
                        {compareModule.features.map((feature) => (
                          <details key={`${compareModule.id}-${feature.name}`} className="group border-t border-neutral-200 bg-white">
                            <summary className="grid cursor-pointer list-none grid-cols-[minmax(240px,1fr)_repeat(4,minmax(0,130px))_minmax(0,40px)] gap-3 sm:gap-4 px-4 sm:px-6 py-3 text-sm text-neutral-700 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 [&::-webkit-details-marker]:hidden">
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
                            <div className="pb-4 pr-4 pl-12 sm:pr-6 sm:pl-14 text-sm text-neutral-500">
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
