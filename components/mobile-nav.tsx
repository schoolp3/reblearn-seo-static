"use client";

import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <>
      <div className="mobile-nav-overlay" onClick={onClose} />
      <div className="mobile-nav-drawer">
        <div className="mobile-nav-header">
          <span className="mobile-nav-logo">RebLearn</span>
          <button className="mobile-nav-close" onClick={onClose} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="mobile-nav-links">
          {items.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="mobile-nav-link mobile-nav-expandable"
                    onClick={() =>
                      setExpandedItem(expandedItem === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{
                        transform: expandedItem === item.label ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  {expandedItem === item.label && (
                    <div className="mobile-nav-submenu">
                      <Link href={item.href} className="mobile-nav-sublink" onClick={onClose}>
                        All Services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="mobile-nav-sublink"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="mobile-nav-link" onClick={onClose}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-nav-footer">
          <Link href="/schedule" className="btn primary mobile-nav-cta" onClick={onClose}>
            Schedule Consultation
          </Link>
          <div className="mobile-nav-contact">
            <a href="tel:+16692486602">669-248-6602</a>
            <span> · </span>
            <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 998;
        }
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85vw);
          background: #fff;
          z-index: 999;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
        }
        .mobile-nav-logo {
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
        }
        .mobile-nav-close {
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          color: var(--text);
        }
        .mobile-nav-links {
          flex: 1;
          overflow-y: auto;
          padding: 16px 0;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 14px 20px;
          font-size: 16px;
          font-weight: 500;
          color: var(--text);
          text-decoration: none;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
        }
        .mobile-nav-link:hover {
          background: var(--card);
        }
        .mobile-nav-submenu {
          background: var(--card);
          padding: 8px 0;
        }
        .mobile-nav-sublink {
          display: block;
          padding: 12px 20px 12px 36px;
          font-size: 15px;
          color: var(--muted);
          text-decoration: none;
        }
        .mobile-nav-sublink:hover {
          color: var(--text);
        }
        .mobile-nav-footer {
          padding: 20px;
          border-top: 1px solid var(--border);
        }
        .mobile-nav-cta {
          width: 100%;
          justify-content: center;
          margin-bottom: 12px;
        }
        .mobile-nav-contact {
          font-size: 13px;
          color: var(--muted);
          text-align: center;
        }
        .mobile-nav-contact a {
          color: var(--muted);
        }
      `}</style>
    </>
  );
}
