import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers at OneSurvey - Security Site Survey Software",
  description:
    "Join a team building the future of security site surveys and design workflows.",
};

const benefits = [
  "Collaborative team environment",
  "Flexible work options",
  "Growth and learning budget",
  "Customer impact focus",
];

const roles = [
  { title: "Customer success lead", location: "Remote" },
  { title: "Product designer", location: "Remote" },
  { title: "Solutions consultant", location: "Remote" },
];

export default function CareersPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Careers"
        title="Build the future of site surveys"
        subtitle="Join a team focused on helping integrators deliver better sites."
        primaryCta={{ label: "View open roles", href: "#open-roles" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        media={
          <MediaPlaceholder
            label="Culture photo"
            helper="Add team or workspace photography."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title="What we offer"
            subtitle="We support teams with the resources they need to grow."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-neutral-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open roles"
            title="Join the team"
            subtitle="Current openings are listed below. We are always open to meeting great people."
          />
          <div className="mt-10 grid gap-4">
            {roles.map((role) => (
              <div key={role.title} className="flex flex-col items-start justify-between gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm md:flex-row md:items-center">
                <div>
                  <p className="text-sm font-semibold text-brand-primary">{role.title}</p>
                  <p className="text-xs text-neutral-500">{role.location}</p>
                </div>
                <Button asChild variant="outline">
                  <Link href="/contact">Apply interest</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
