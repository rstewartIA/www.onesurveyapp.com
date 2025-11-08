export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OneSurvey",
    url: "https://www.onesurveyapp.com",
    logo: "https://www.onesurveyapp.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/onesurvey",
      "https://twitter.com/onesurvey",
    ],
    description:
      "OneSurvey powers unified, field-to-office security site surveys for integrators and enterprise teams.",
  };
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "OneSurvey Platform",
    description:
      "End-to-end security site survey, design, and proposal software for integrators.",
    brand: "OneSurvey",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
  };
}
