import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "OneSurvey FAQs - Survey, Design, and Reporting Questions",
  description:
    "Get answers to common questions about OneSurvey workflows, device libraries, reporting, and onboarding.",
};

const faqs = [
  {
    question: "What does OneSurvey replace in our current workflow?",
    answer:
      "OneSurvey replaces fragmented survey notes, floorplan markups, photo folders, and manual report assembly with one unified workspace that connects every survey detail to the final deliverable.",
  },
  {
    question: "Who uses OneSurvey day to day?",
    answer:
      "Security integrators, low voltage installers, facility managers, and site teams use it to capture site data, document devices, and coordinate reporting.",
  },
  {
    question: "Can we standardize surveys across multiple technicians?",
    answer:
      "Yes. Teams can align on consistent survey steps, device metadata, and reporting outputs so every site follows the same quality standard.",
  },
  {
    question: "How does the floorplan workflow work?",
    answer:
      "Import a plan, set scale, and place devices directly on the drawing. Each placement carries notes, photos, and metadata for clean handoff.",
  },
  {
    question: "What is the device library used for?",
    answer:
      "The device library keeps approved hardware, accessories, and part details organized so technicians place consistent devices and reporting stays accurate.",
  },
  {
    question: "Does OneSurvey support reporting and exports?",
    answer:
      "Yes. Reports pull data, photos, and device details into proposal ready documentation with exportable formats.",
  },
  {
    question: "How do we handle photos and notes?",
    answer:
      "Photos and notes attach to specific devices, rooms, or surveys so context is never lost when reports are generated.",
  },
  {
    question: "Is OneSurvey built for multi site or enterprise teams?",
    answer:
      "Yes. Organizations can manage multiple sites, roles, and teams while keeping survey standards consistent.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a demo and we will walk you through your workflow, recommend a rollout plan, and share next steps for onboarding.",
  },
];

export default function FaqsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        subtitle="Clear answers to the most common questions from survey and site teams."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Help center"
            title="Get quick answers"
            subtitle="If you do not see your question here, contact the team for a tailored walkthrough."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-primary">{item.question}</h3>
                <p className="mt-3 text-sm text-neutral-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Need clarity"
        title="Talk to our team"
        description="Share your workflow and we will show how OneSurvey standardizes surveys, documentation, and reporting."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />
    </MarketingShell>
  );
}
