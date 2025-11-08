import { HeroSection } from "@/components/sections/hero";
import { ValueGrid } from "@/components/sections/value-grid";
import { PersonaGrid } from "@/components/sections/persona-grid";
import { LifecycleSection } from "@/components/sections/lifecycle";
import { ResourceTeasers } from "@/components/sections/resource-teasers";
import { CtaBand } from "@/components/sections/cta-band";
import {
  featureHighlights,
  lifecyclePhases,
  personas,
  resources,
} from "@/data/marketing";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, productSchema } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <div className="space-y-10">
        <HeroSection
          eyebrow="Strategy → Execution"
          title="Run security site surveys 3× faster with unified field-to-office workflows."
          subtitle="Digitize capture, design, approvals, and proposals in one Next.js-powered marketing experience tuned for SEO and conversions."
          highlights={[
            { label: "Avg. cycle reduction", value: "37%" },
            { label: "Deployment time", value: "< 7 days" },
            { label: "Personas targeted", value: "3 core roles" },
          ]}
        />
        <ValueGrid
          title="Everything your marketing site must articulate"
          subtitle="Map features to search intent and conversion copy so prospects instantly see value."
          items={featureHighlights}
        />
        <PersonaGrid personas={personas} />
        <LifecycleSection phases={lifecyclePhases} />
        <ResourceTeasers items={resources} />
        <CtaBand />
      </div>
      <JsonLd data={organizationSchema()} id="organization-schema" />
      <JsonLd data={productSchema()} id="product-schema" />
    </>
  );
}
