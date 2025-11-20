"use client";

import Link from "next/link";
import { useRef, useState, type FocusEvent, type MouseEvent } from "react";
import type { NavigationItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavDropdownProps = {
  item: NavigationItem;
};

export function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  if (!item.children || item.children.length === 0) {
    return null;
  }

  const handleTriggerLeave = (event: MouseEvent<HTMLButtonElement>) => {
    const next = event.relatedTarget as Node | null;
    if (next && menuRef.current?.contains(next)) return;
    setOpen(false);
  };

  const handleMenuLeave = (event: MouseEvent<HTMLDivElement>) => {
    const next = event.relatedTarget as Node | null;
    if (next && triggerRef.current?.contains(next)) return;
    setOpen(false);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <div className="relative" onBlur={handleBlur}>
      <button
        ref={triggerRef}
        type="button"
        className="flex items-center gap-1 rounded-md px-2 py-1 text-neutral-700 transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={handleTriggerLeave}
        onFocus={() => setOpen(true)}
      >
        {item.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cn("h-4 w-4 transition-transform text-neutral-500", open && "rotate-180 text-brand-primary")}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        ref={menuRef}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={handleMenuLeave}
        className={cn(
          "absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-3 shadow-lg transition-all duration-200",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="grid gap-2">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block rounded-lg border border-transparent px-3 py-2 transition hover:border-brand-primary/30 hover:bg-brand-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              <div className="text-sm font-semibold text-neutral-900">{child.label}</div>
              {child.description && <p className="mt-1 text-xs text-neutral-500">{child.description}</p>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
