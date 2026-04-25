"use client";

import Link from "next/link";
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
      <header className="site-header">
        <div className="header-container">
          <Link href="/" className="logo">
            RebLearn
          </Link>

          <nav className="desktop-nav">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="nav-dropdown"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link href={item.href} className="nav-link">
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{ marginLeft: 4 }}
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
                    <div className="dropdown-menu">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="dropdown-item">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="header-cta">
            <Link href="/schedule" className="btn primary">
              Schedule Consultation
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
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

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border);
        }
        .header-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .logo {
          font-size: 22px;
          font-weight: 700;
          color: var(--text);
          text-decoration: none;
        }
        .logo:hover {
          text-decoration: none;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          display: flex;
          align-items: center;
          padding: 8px 14px;
          font-size: 15px;
          font-weight: 500;
          color: var(--text);
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .nav-link:hover {
          background: var(--card);
          text-decoration: none;
        }
        .nav-dropdown {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 280px;
          padding: 8px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        .dropdown-item {
          display: block;
          padding: 10px 14px;
          font-size: 14px;
          color: var(--text);
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .dropdown-item:hover {
          background: var(--card);
          text-decoration: none;
        }
        .header-cta {
          display: flex;
          align-items: center;
        }
        .header-cta .btn {
          padding: 10px 18px;
          font-size: 14px;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          color: var(--text);
        }
        @media (max-width: 900px) {
          .desktop-nav,
          .header-cta {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
