import { HeroSection } from "@/components/marketing/hero-section";
import { TopNav } from "@/components/marketing/top-nav";
import { Footer } from "@/components/marketing/footer";
import { FeatureCard } from "@/components/marketing/feature-card";
import { SolutionCard } from "@/components/marketing/solution-card";
import { Button } from "@/components/ui/button";
import { navigationHierarchy, footerColumns } from "@/data/navigation";

const featureBlocks = [
  {
    title: "Drag-and-drop editor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at urna nec lacus convallis faucibus.",
  },
  {
    title: "Smart asset library",
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum nisi ultricies.",
  },
  {
    title: "Survey workflow",
    description: "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.",
  },
  {
    title: "Collaboration tools",
    description: "Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor.",
  },
  {
    title: "Documentation & reporting",
    description: "Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum lorem ipsum dolor sit.",
  },
];

const solutionTiles = [
  {
    title: "Security Integrators",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus.",
    href: "/solutions/security-integrators",
    accent: "blue" as const,
  },
  {
    title: "Facility Managers",
    description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis.",
    href: "/solutions/facility-managers",
    accent: "slate" as const,
  },
  {
    title: "Enterprise Teams",
    description: "Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    href: "/solutions/enterprise-it-operations",
    accent: "sky" as const,
  },
];

const trustLogos = ["Security Integrators", "OEM Partners", "Facilities Teams", "Advisory Firms", "Ops Leaders"];

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
          eyebrow="Enterprise survey cloud"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          primaryCta={{ label: "Get Started", href: "#cta" }}
          secondaryCta={{ label: "View Product", href: "/product" }}
        />

        <section id="trust" className="bg-white py-14 md:py-18">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">Trusted by</p>
                <h2 className="text-2xl font-semibold text-brand-primary">Lorem ipsum dolor sit amet partners</h2>
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
                <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">Lorem ipsum dolor sit amet</h2>
                <p className="text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
              </div>
              <div className="flex gap-3">
                <Button className="bg-brand-primary text-white hover:bg-brand-secondary">Book a Demo</Button>
                <Button variant="outline" className="border-neutral-200 text-brand-primary hover:border-brand-primary">
                  View Features
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
                <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">Lorem ipsum dolor sit amet</h2>
                <p className="text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur.
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

        <section id="cta" className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_35%)]" />
          <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">CTA</p>
                <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet consectetur.</h2>
                <p className="text-lg text-brand-accent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel
                  eu leo. Cras mattis consectetur purus sit amet fermentum.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button size="lg" className="bg-white text-brand-primary hover:bg-brand-accent/60">
                    Book a Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/60 text-white hover:bg-white hover:text-brand-primary"
                  >
                    Start Free
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur">
                <div className="space-y-3 text-sm text-brand-accent">
                  <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/10 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/80">Placeholder</p>
                      <p className="text-lg font-semibold text-white">Lorem ipsum dolor</p>
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
