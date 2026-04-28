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
      { label: "Independent Educational Evaluations", href: "/services/iee" },
      { label: "Learning Therapy", href: "/services/learning-therapy" },
      { label: "District Contracting", href: "/services/district-contracting" },
      { label: "Testing for Accommodations", href: "/services/testing-accommodations" },
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
        <div className="max-w-[1100px] mx-auto px-5 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 text-[22px] font-bold text-[var(--text)] no-underline hover:no-underline shrink-0">
            <Image
              src="/images/reblearn-logo.png"
              alt="RebLearn"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="hidden sm:inline">RebLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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
                    className="flex items-center px-3 py-2 text-[15px] font-medium text-[var(--text)] no-underline rounded-lg transition-colors hover:bg-[var(--card)] hover:no-underline"
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`ml-1 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
                    <div className="absolute top-full left-0 min-w-[280px] p-2 bg-white border border-[var(--border)] rounded-xl shadow-lg mt-0.5">
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
                  className="px-3 py-2 text-[15px] font-medium text-[var(--text)] no-underline rounded-lg transition-colors hover:bg-[var(--card)] hover:no-underline"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+16692486602"
              className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors no-underline"
            >
              669-248-6602
            </a>
            <Link href="/schedule" className="btn primary text-sm px-5 py-2.5 font-semibold">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden bg-transparent border-0 p-2.5 cursor-pointer text-[var(--text)] -mr-2"
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
