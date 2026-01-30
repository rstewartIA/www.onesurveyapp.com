export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
};

export const navigationHierarchy: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Product",
    href: "/product",
    children: [
      {
        label: "Features",
        href: "/product/features"
      },
      {
        label: "Floorplan editor",
        href: "/product/floorplan-editor"
      },
      {
        label: "Device library",
        href: "/product/asset-library"
      },
      {
        label: "Survey workflow",
        href: "/product/survey-automation"
      },
      {
        label: "Reporting & exports",
        href: "/product/reporting-exports"
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Security integrators",
        href: "/solutions/security-integrators"
      },
      {
        label: "Facility managers",
        href: "/solutions/facility-managers"
      },
      {
        label: "Enterprise IT & operations",
        href: "/solutions/enterprise-it-operations"
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      {
        label: "Guides",
        href: "/guides"
      },
      {
        label: "Help center",
        href: "/docs"
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/product/features" },
      { label: "Floorplan editor", href: "/product/floorplan-editor" },
      { label: "Device library", href: "/product/asset-library" },
      { label: "Survey workflow", href: "/product/survey-automation" },
      { label: "Reporting & exports", href: "/product/reporting-exports" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Security integrators", href: "/solutions/security-integrators" },
      { label: "Facility managers", href: "/solutions/facility-managers" },
      { label: "Enterprise IT & operations", href: "/solutions/enterprise-it-operations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Help center", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
