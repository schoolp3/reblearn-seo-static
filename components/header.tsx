"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Search, Calendar } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Psychoeducational Evaluations", href: "/services#psychoeducational" },
      { name: "IEE (Independent Evaluations)", href: "/services#iee" },
      { name: "Dyslexia Assessments", href: "/services#dyslexia" },
      { name: "ERMHS Evaluations", href: "/services#ermhs" },
      { name: "FBAs & BIPs", href: "/services#fba" },
      { name: "Academic Testing", href: "/services#academic" },
      { name: "Reading & Writing Intervention", href: "/services#intervention" },
    ],
  },
  { name: "District Contracting", href: "/district-contracting" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  {
    name: "Resources",
    href: "#",
    children: [
      { name: "Screeners", href: "/screeners" },
      { name: "Apps", href: "/apps" },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8C8 8 12 4 16 4C20 4 24 8 24 8V24C24 24 20 28 16 28C12 28 8 24 8 24V8Z" fill="#0f172a" />
              <path d="M12 12L16 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ml-2 text-xl font-bold text-slate-900">RebLearn</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full z-50 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link
            href="https://calendly.com/reblearn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Book a Call
          </Link>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 transition-colors">
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between py-2 text-base font-medium text-slate-900"
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-slate-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="https://calendly.com/reblearn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
