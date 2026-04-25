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
    <section className="faq-section">
      {title && <h2 className="faq-title">{title}</h2>}
      <div className="faq-list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="faq-icon"
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
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-section {
          max-width: 800px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .faq-title {
          font-size: 28px;
          margin: 0 0 24px;
          text-align: center;
        }
        .faq-list {
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
        }
        .faq-item {
          border-bottom: 1px solid var(--border);
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
          text-align: left;
          cursor: pointer;
          transition: background 0.15s;
        }
        .faq-question:hover {
          background: var(--card);
        }
        .faq-icon {
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .faq-item.open .faq-icon {
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 0 20px 18px;
        }
        .faq-answer p {
          margin: 0;
          font-size: 15px;
          color: var(--muted);
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
