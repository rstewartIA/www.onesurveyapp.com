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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    children: [
      {
        label: "Features overview",
        href: "/product/features",
        description: "Integer nec odio. Praesent libero. Sed cursus ante dapibus.",
      },
      {
        label: "Floorplan editor",
        href: "/product/floorplan-editor",
        description: "Morbi lectus risus, iaculis vel, suscipit quis, luctus non.",
      },
      {
        label: "Asset library",
        href: "/product/asset-library",
        description: "Suspendisse potenti. Sed dignissim lacinia nunc.",
      },
      {
        label: "Survey automation",
        href: "/product/survey-automation",
        description: "Curabitur tortor. Pellentesque nibh. Aenean quam.",
      },
      {
        label: "Reporting & exports",
        href: "/product/reporting-exports",
        description: "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum.",
    children: [
      {
        label: "Security integrators",
        href: "/solutions/security-integrators",
        description: "Praesent mauris. Fusce nec tellus sed augue semper porta.",
      },
      {
        label: "Facility managers",
        href: "/solutions/facility-managers",
        description: "Mauris massa. Vestibulum lacinia arcu eget nulla.",
      },
      {
        label: "Enterprise IT & operations",
        href: "/solutions/enterprise-it-operations",
        description: "Class aptent taciti sociosqu ad litora torquent per conubia.",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    description: "Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus.",
    children: [
      { label: "Blog", href: "/blog", description: "Sed cursus ante dapibus." },
      {
        label: "Guides",
        href: "/guides",
        description: "Nulla quis sem at nibh elementum imperdiet.",
      },
      {
        label: "Documentation",
        href: "/docs",
        description: "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    description: "Maecenas mattis. Sed convallis tristique sem.",
    children: [
      { label: "About", href: "/about", description: "Sed nisi. Nulla quis sem at nibh." },
      { label: "Careers", href: "/careers", description: "Integer nec odio. Praesent libero." },
      { label: "Contact", href: "/contact", description: "Sed cursus ante dapibus diam." },
    ],
  },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features overview", href: "/product/features" },
      { label: "Floorplan editor", href: "/product/floorplan-editor" },
      { label: "Asset library", href: "/product/asset-library" },
      { label: "Survey automation", href: "/product/survey-automation" },
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
      { label: "Documentation", href: "/docs" },
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
