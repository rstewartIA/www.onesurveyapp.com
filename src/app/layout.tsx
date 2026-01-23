import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneSurvey - Smart Site Surveys, Asset Mapping & Facility Documentation",
  description:
    "OneSurvey is a modern survey and site documentation platform for security integrators, facility managers, and enterprise teams. Capture site data, plan devices, manage floorplans, and generate consistent documentation -faster and with greater accuracy.",
  keywords: [
    "site survey software",
    "facility documentation tool",
    "security integrator platform",
    "asset mapping",
    "floorplan editor",
    "project walkthrough software",
    "survey workflow tool",
    "site assessment platform",
    "physical security planning",
  ],
  openGraph: {
    title: "OneSurvey - Site Surveys Made Simple and Accurate",
    description:
      "Capture, plan, and document your sites with a unified cloud platform. OneSurvey helps teams map devices, standardize surveys, and maintain clear facility records across every location.",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "https://onesurvey.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}

