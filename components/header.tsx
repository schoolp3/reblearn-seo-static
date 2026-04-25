"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MobileNav } from "./mobile-nav";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Psychoeducational Evaluations", href: "/services/psychoeducational-evaluations" },
      { label: "Independent Educational Evaluations (IEE)", href: "/services/iee" },
      { label: "Learning Therapy", href: "/services/learning-therapy" },
      { label: "Testing Accommodations", href: "/services/testing-accommodations" },
      { label: "District Contracting", href: "/services/district-contracting" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-[1100px] mx-auto px-5 py-3.5 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 text-[22px] font-bold text-[var(--text)] no-underline hover:no-underline">
            <Image
              src="/images/reblearn-logo.png"
              alt="RebLearn"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            RebLearn
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-3.5 py-2 text-[15px] font-medium text-[var(--text)] no-underline rounded-lg transition-colors hover:bg-[var(--card)] hover:no-underline"
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 min-w-[280px] p-2 bg-white border border-[var(--border)] rounded-xl shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3.5 py-2.5 text-sm text-[var(--text)] no-underline rounded-lg transition-colors hover:bg-[var(--card)] hover:no-underline"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-2 text-[15px] font-medium text-[var(--text)] no-underline rounded-lg transition-colors hover:bg-[var(--card)] hover:no-underline"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/schedule" className="btn primary text-sm px-4 py-2.5">
              Schedule Consultation
            </Link>
          </div>

          <button
            className="lg:hidden bg-transparent border-0 p-2 cursor-pointer text-[var(--text)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
      />
    </>
  );
}
