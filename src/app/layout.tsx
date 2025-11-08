import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onesurveyapp.com"),
  title: {
    default: "OneSurvey | Field-to-Office Security Site Surveys",
    template: "%s | OneSurvey",
  },
  description:
    "OneSurvey unifies field capture, collaborative design, and proposal handoffs for security integrators so projects stay on schedule.",
  keywords: [
    "security site survey software",
    "security system design tool",
    "field-to-office collaboration",
  ],
  authors: [{ name: "OneSurvey" }],
  openGraph: {
    title: "OneSurvey | Field-to-Office Security Site Surveys",
    description:
      "Collaborative surveys, drag-and-drop floor plans, and bid-ready reports in a single platform.",
    url: "https://www.onesurveyapp.com",
    siteName: "OneSurvey",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OneSurvey platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneSurvey | Field-to-Office Security Site Surveys",
    description:
      "Run security site surveys faster with unified workflows from field to office.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
