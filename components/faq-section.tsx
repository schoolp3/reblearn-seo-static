"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

export function FAQSection({ title = "Frequently Asked Questions", items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-[800px] mx-auto my-10 px-5">
      {title && <h2 className="text-3xl mb-6 text-center">{title}</h2>}
      <div className="border border-[var(--border)] rounded-2xl overflow-hidden bg-white">
        {items.map((item, index) => (
          <div
            key={index}
            className={`border-b border-[var(--border)] last:border-b-0`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-transparent text-base font-semibold text-[var(--text)] text-left cursor-pointer transition-colors hover:bg-[var(--card)]"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4">
                <p className="text-[15px] text-[var(--muted)] leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
