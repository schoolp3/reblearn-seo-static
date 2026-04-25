"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[998] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] bg-white z-[999] flex flex-col shadow-[-4px_0_24px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 text-xl font-bold text-[var(--text)] no-underline"
          >
            <Image
              src="/images/reblearn-logo.png"
              alt="RebLearn"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            RebLearn
          </Link>
          <button
            className="bg-transparent border-0 p-2 cursor-pointer text-[var(--text)] -mr-2"
            onClick={onClose}
            aria-label="Close menu"
          >
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

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-3">
          {items.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="flex items-center justify-between w-full px-5 py-4 text-base font-medium text-[var(--text)] bg-transparent border-0 text-left cursor-pointer hover:bg-[var(--card)] active:bg-[var(--card)] transition-colors"
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
                      className={`transition-transform ${expandedItem === item.label ? "rotate-180" : ""}`}
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
                    <div className="bg-[var(--card)] py-2">
                      <Link
                        href={item.href}
                        className="block px-5 py-3 pl-8 text-[15px] text-[var(--muted)] no-underline hover:text-[var(--text)] active:bg-white/50"
                        onClick={onClose}
                      >
                        All Services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 pl-8 text-[15px] text-[var(--muted)] no-underline hover:text-[var(--text)] active:bg-white/50"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-5 py-4 text-base font-medium text-[var(--text)] no-underline hover:bg-[var(--card)] active:bg-[var(--card)] transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Footer with CTAs */}
        <div className="p-5 border-t border-[var(--border)] space-y-4">
          <Link
            href="/schedule"
            className="btn primary w-full justify-center text-base py-3.5 font-semibold"
            onClick={onClose}
          >
            Book a Consultation
          </Link>

          <div className="flex flex-col gap-2.5">
            <a
              href="tel:+16692486602"
              className="flex items-center gap-2.5 px-4 py-3 bg-[var(--card)] rounded-lg text-[15px] font-medium text-[var(--text)] no-underline hover:bg-[var(--border)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call or Text: 669-248-6602
            </a>
            <a
              href="mailto:dennis@reblearn.com"
              className="flex items-center gap-2.5 px-4 py-3 bg-[var(--card)] rounded-lg text-[15px] font-medium text-[var(--text)] no-underline hover:bg-[var(--border)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              dennis@reblearn.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
