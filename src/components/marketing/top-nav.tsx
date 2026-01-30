"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/data/navigation";
import { NavDropdown } from "./nav-dropdown";
import { MobileNav } from "./mobile-nav";

type TopNavProps = {
  navigation: NavigationItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function TopNav({
  navigation,
  primaryCta = { label: "Book a Demo", href: "/demo" },
  secondaryCta = { label: "Log in", href: "/login" },
}: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileDialogId = "mobile-nav-dialog";

  useEffect(() => {
    const { body } = document;
    const navTargets = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));

    const restoreAriaHidden = () => {
      navTargets.forEach((element) => {
        if (!element.hasAttribute("data-nav-aria-hidden")) return;
        const previous = element.getAttribute("data-nav-aria-hidden");
        if (previous) {
          element.setAttribute("aria-hidden", previous);
        } else {
          element.removeAttribute("aria-hidden");
        }
        element.removeAttribute("data-nav-aria-hidden");
      });
    };

    if (mobileOpen) {
      body.classList.add("nav-open-mobile");
      navTargets.forEach((element) => {
        if (!element.hasAttribute("data-nav-aria-hidden")) {
          const previous = element.getAttribute("aria-hidden");
          element.setAttribute("data-nav-aria-hidden", previous ?? "");
        }
        element.setAttribute("aria-hidden", "true");
      });
    } else {
      body.classList.remove("nav-open-mobile");
      restoreAriaHidden();
    }
    return () => {
      body.classList.remove("nav-open-mobile");
      restoreAriaHidden();
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9">
                <Image
                  src="/OS-logo.png"
                  alt="OneSurvey logo"
                  fill
                  className="object-contain"
                  sizes="36px"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-brand-primary">OneSurvey</span>
                <span className="hidden text-xs text-neutral-500 sm:block">
                  Smart Site Surveys, Asset Mapping & Facility Documentation
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-700">
            {navigation.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-2 py-1 text-neutral-700 transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {secondaryCta && (
              <Button asChild variant="ghost" size="sm" className="text-neutral-700 hover:text-brand-primary">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
            {primaryCta && (
              <Button asChild size="sm" className="bg-brand-primary text-white hover:bg-brand-secondary">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
          </div>

          <div className="flex lg:hidden items-center gap-3">
            {primaryCta && (
              <Button
                asChild
                size="sm"
                className="rounded-full bg-brand-primary px-4 text-white shadow-sm hover:bg-brand-secondary"
              >
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-sm transition hover:border-brand-primary hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls={mobileDialogId}
            aria-haspopup="dialog"
          >
              <div className="space-y-1">
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-current transition-transform",
                    mobileOpen && "translate-y-1.5 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-current transition-opacity",
                    mobileOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-current transition-transform",
                    mobileOpen && "-translate-y-1.5 -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        navigation={navigation}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        onClose={() => setMobileOpen(false)}
        dialogId={mobileDialogId}
      />
    </>
  );
}
