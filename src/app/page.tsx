import { HeroSection } from "@/components/marketing/hero-section";
import { TopNav } from "@/components/marketing/top-nav";
import { Footer } from "@/components/marketing/footer";
import { FeatureCard } from "@/components/marketing/feature-card";
import { SolutionCard } from "@/components/marketing/solution-card";
import { Button } from "@/components/ui/button";
import { navigationHierarchy, footerColumns } from "@/data/navigation";
import Link from "next/link";

const featureBlocks = [
  {
    title: "Survey capture",
    description:
      "Use guided checklists, required fields, photos, and notes to capture consistent security site data.",
  },
  {
    title: "Floorplan editor",
    description: "Import plans, set scale, and place devices on accurate floorplan layouts.",
  },
  {
    title: "Device library",
    description: "Maintain approved devices, parts, and accessories so every survey uses the right specs.",
  },
  {
    title: "Photo documentation",
    description: "Organize field photos into clear galleries tied to devices and locations.",
  },
  {
    title: "Assignments and handoff",
    description: "Track tasks and notes so survey findings flow cleanly to install teams.",
  },
  {
    title: "Reporting and exports",
    description: "Generate proposal-ready reports, device inventories, and photo documentation fast.",
  },
];

const differentiators = [
  {
    title: "Floorplan-first security design",
    description:
      "Scale plans, place devices, and use coverage views to confirm intent before proposals go out.",
  },
  {
    title: "Element-level photo documentation",
    description:
      "Photos, notes, and context stay attached to each device so details never get lost.",
  },
  {
    title: "Proposal-ready reporting",
    description:
      "Export floorplan visuals, device inventories, and photo reports without manual cleanup.",
  },
  {
    title: "Device standards built in",
    description:
      "Use the shared device library and templates so every survey uses approved specs.",
  },
];

const howItWorksSteps = [
  {
    title: "Set up the site",
    description: "Create a site, add stakeholders, and define survey scope.",
  },
  {
    title: "Capture the survey",
    description: "Import floorplans, set scale, and walk the site with guided checklists.",
  },
  {
    title: "Map devices and photos",
    description: "Place devices on the plan and attach photos, notes, and assignments.",
  },
  {
    title: "Deliver reports",
    description: "Generate proposal-ready reports, inventories, and handoff packages.",
  },
];

const solutionTiles = [
  {
    title: "Security integrators",
    description:
      "Capture accurate surveys, build clean layouts, and deliver proposal-ready scope packages.",
    href: "/solutions/security-integrators",
    accent: "blue" as const,
  },
  {
    title: "Facility managers",
    description:
      "Keep floorplans and device records current for maintenance and upgrades.",
    href: "/solutions/facility-managers",
    accent: "slate" as const,
  },
  {
    title: "Enterprise teams",
    description:
      "Standardize survey workflows and reporting across multiple locations.",
    href: "/solutions/enterprise-it-operations",
    accent: "sky" as const,
  },
];

const trustLogos = ["Integrator teams", "OEM partners", "Facility groups", "Advisory firms", "Ops leaders"];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-neutral-900">
      <TopNav
        navigation={navigationHierarchy}
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
        secondaryCta={{ label: "Log in", href: "/login" }}
      />

      <main className="flex-1">
        <HeroSection
          eyebrow="OneSurvey"
          title="Security site survey software for floorplan-based planning"
          subtitle="OneSurvey helps security integrators, low-voltage installers, and facilities teams capture site data, map devices on scaled floorplans, and deliver proposal-ready documentation."
          primaryCta={{ label: "Get Started", href: "#cta" }}
          secondaryCta={{ label: "View Product", href: "/product" }}
        />

        <section id="trust" className="bg-white py-14 md:py-18">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">
                  Trusted by security teams
                </p>
                <h2 className="text-2xl font-semibold text-brand-primary">
                  Integrators, facilities, and enterprise ops rely on OneSurvey
                </h2>
              </div>
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {trustLogos.map((name) => (
                  <div
                    key={name}
                    className="flex h-16 items-center justify-center rounded-lg border border-neutral-200 bg-[#F7F9FC] text-sm font-semibold text-neutral-600 shadow-sm"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#F7F9FC] py-18 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">Features</p>
                <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                  Powerful tools for consistent security site surveys
                </h2>
                <p className="text-neutral-600">
                  OneSurvey keeps survey capture, floorplan design, and reporting organized from the first walkthrough to
                  final handoff.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild className="bg-brand-primary text-white hover:bg-brand-secondary">
                  <Link href="/demo">Book a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-200 text-brand-primary hover:border-brand-primary">
                  <Link href="/product/features">View Features</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureBlocks.map((feature) => (
                <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-white py-18 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">Solutions</p>
                <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                  Built for teams that manage complex environments
                </h2>
                <p className="text-neutral-600">
                  OneSurvey supports integrators, facility teams, and enterprise groups with consistent survey workflows.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutionTiles.map((solution) => (
                <SolutionCard
                  key={solution.title}
                  title={solution.title}
                  description={solution.description}
                  href={solution.href}
                  accent={solution.accent}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-[#F7F9FC] py-18 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">How it works</p>
                <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                  From site walk to proposal-ready documentation
                </h2>
                <p className="text-neutral-600">
                  Four steps keep field teams and office teams aligned from walkthrough to handoff.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild className="bg-brand-primary text-white hover:bg-brand-secondary">
                  <Link href="/product">See the workflow</Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-200 text-brand-primary hover:border-brand-primary">
                  <Link href="/demo">Book a Demo</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-brand-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="differentiators" className="bg-white py-18 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">Differentiators</p>
                <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">
                  Built for security survey workflows
                </h2>
                <p className="text-neutral-600">
                  OneSurvey is purpose-built for floorplan-based security planning, not generic work tracking.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild className="bg-brand-primary text-white hover:bg-brand-secondary">
                  <Link href="/product">Explore the product</Link>
                </Button>
                <Button asChild variant="outline" className="border-neutral-200 text-brand-primary hover:border-brand-primary">
                  <Link href="/product/features">View features</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-2xl border border-neutral-200 bg-[#F7F9FC] p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_35%)]" />
          <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Ready to standardize
                </p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Take control of your site surveys
                </h2>
                <p className="text-lg text-white/80">
                  Whether you are standardizing surveys across technicians or organizing site information for long-term
                  planning, OneSurvey gives you a single place to capture, review, and share accurate data.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-brand-accent/60">
                    <Link href="/demo">Book a Demo</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/70 bg-white/15 text-white hover:border-white/80 hover:bg-white/25"
                  >
                    <Link href="/contact">Talk to Sales</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur">
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/10 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/80">OneSurvey</p>
                      <p className="text-lg font-semibold text-white">Take control of your site surveys</p>
                    </div>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Live</span>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                    <div className="h-2 w-3/4 rounded-full bg-white/50" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-white/40" />
                    <div className="mt-2 h-2 w-5/6 rounded-full bg-white/30" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-lg bg-white/10" />
                    <div className="h-16 rounded-lg bg-white/10" />
                    <div className="h-16 rounded-lg bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer columns={footerColumns} />
    </div>
  );
}
