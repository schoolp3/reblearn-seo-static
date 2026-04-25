import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Independent Educational Evaluations (IEE)",
  description:
    "Independent Educational Evaluations for California families. Thorough, experienced outside evaluation when you need an independent perspective. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/iee" },
};

const faqs = [
  {
    question: "What is an Independent Educational Evaluation (IEE)?",
    answer:
      "An IEE is an evaluation conducted by a qualified professional who is not employed by the school district. Parents may request an IEE when they disagree with the school's evaluation. Under certain circumstances, the district may be required to fund the evaluation.",
  },
  {
    question: "When might I need an IEE?",
    answer:
      "Families typically pursue an IEE when they disagree with the school district's evaluation findings, believe the school's evaluation was incomplete, or want an independent perspective before an important IEP meeting or decision.",
  },
  {
    question: "Will the district pay for the IEE?",
    answer:
      "In some cases, yes. If you disagree with a district evaluation and request an IEE, the district may agree to fund it or may initiate a due process hearing to defend their evaluation. The specifics depend on your situation and the district's response.",
  },
  {
    question: "How is an IEE different from a private evaluation?",
    answer:
      "An IEE is a specific type of private evaluation conducted when parents disagree with a school evaluation. It follows district criteria and may be funded by the district. A private evaluation can be done at any time for any reason, paid for by the family.",
  },
  {
    question: "What happens after the IEE is complete?",
    answer:
      "The IEE report is provided to you and can be shared with the school district. The district must consider the IEE findings in any decisions about your child's education. We can also attend IEP meetings to discuss the findings if helpful.",
  },
];

export default function IEEPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="Independent Educational Evaluations (IEE)"
        subtitle="When you need an experienced, independent perspective on your child's educational needs. Thorough evaluation, clear findings, and defensible reports."
        primaryCta={{
          text: "IEE Inquiry",
          href: "mailto:dennis@reblearn.com?subject=IEE%20Inquiry",
        }}
        secondaryCta={{
          text: "Call 669-248-6602",
          href: "tel:+16692486602",
        }}
      />

      <section className="content-section">
        <div className="content-container">
          <div className="notice-box">
            <p>
              <strong>Note:</strong> This page provides general information about Independent
              Educational Evaluations. It is not legal advice and does not constitute a
              determination of eligibility or district obligations. Each IEE situation is unique.
            </p>
          </div>

          <div className="content-grid">
            <div className="main-content">
              <h2>What is an IEE?</h2>
              <p>
                An Independent Educational Evaluation is an evaluation conducted by a qualified
                professional outside the school district. Parents have the right to request an IEE
                when they disagree with a school district's evaluation of their child.
              </p>
              <p>
                When done well, an IEE provides a thorough, independent assessment that can help
                clarify a child's needs and inform educational planning. The evaluation should be
                comprehensive, clearly written, and useful for IEP development and school
                decision-making.
              </p>

              <h2>When Families Seek an IEE</h2>
              <p>Common reasons families pursue an IEE include:</p>
              <ul>
                <li>
                  <strong>Disagreement with school findings</strong> — The school's evaluation
                  didn't find what you expected, or you believe it missed important issues
                </li>
                <li>
                  <strong>Incomplete evaluation</strong> — The school's assessment didn't look at
                  all relevant areas or answer all your questions
                </li>
                <li>
                  <strong>Need for independent perspective</strong> — You want an outside opinion
                  before making important educational decisions
                </li>
                <li>
                  <strong>Preparing for an IEP meeting</strong> — You want comprehensive,
                  independent data to support your child's needs
                </li>
              </ul>

              <h2>Our Approach to IEEs</h2>
              <p>
                We approach each IEE with the same thoroughness and care as any comprehensive
                psychoeducational evaluation. Our process includes:
              </p>
              <ul>
                <li>Review of all relevant records and prior evaluations</li>
                <li>Comprehensive assessment tailored to the referral questions</li>
                <li>Clear, well-organized written report</li>
                <li>Specific, actionable recommendations</li>
                <li>Feedback meeting to discuss findings</li>
                <li>Availability to attend IEP meetings when appropriate</li>
              </ul>

              <h2>How to Start</h2>
              <p>
                If you are exploring an IEE, the first step is a conversation to understand your
                situation, review the relevant history, and determine whether we are a good fit for
                your needs.
              </p>
              <p>
                Please email with the subject line <strong>IEE Inquiry</strong> so your message is
                routed correctly, or call/text to discuss your situation.
              </p>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card highlight">
                <h3>IEE Inquiry</h3>
                <p>
                  Ready to discuss your IEE needs? Reach out with your questions.
                </p>
                <Link
                  href="mailto:dennis@reblearn.com?subject=IEE%20Inquiry"
                  className="btn primary sidebar-btn"
                >
                  Email IEE Inquiry
                </Link>
                <div className="sidebar-contact">
                  <p>
                    <strong>Phone/Text:</strong>
                    <br />
                    <a href="tel:+16692486602">669-248-6602</a>
                  </p>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Related Services</h3>
                <ul className="sidebar-links">
                  <li>
                    <Link href="/services/psychoeducational-evaluations">
                      Psychoeducational Evaluations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/learning-therapy">Learning Therapy</Link>
                  </li>
                  <li>
                    <Link href="/services/district-contracting">District Contracting</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection title="Common Questions About IEEs" items={faqs} />

      <CTASection
        headline="Have questions about an IEE?"
        subtext="Each situation is different. Reach out to discuss your circumstances and determine the best path forward."
        primaryButton={{
          text: "Email IEE Inquiry",
          href: "mailto:dennis@reblearn.com?subject=IEE%20Inquiry",
        }}
        secondaryButton={{
          text: "Call 669-248-6602",
          href: "tel:+16692486602",
        }}
      />

      <style jsx>{`
        .content-section {
          padding: 60px 0;
        }
        .content-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .notice-box {
          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          padding: 16px 20px;
          margin-bottom: 40px;
        }
        .notice-box p {
          margin: 0;
          font-size: 14px;
          color: #1e40af;
          line-height: 1.6;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 48px;
          align-items: start;
        }
        .main-content h2 {
          font-size: 24px;
          margin: 32px 0 16px;
        }
        .main-content h2:first-child {
          margin-top: 0;
        }
        .main-content p {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 16px;
        }
        .main-content ul {
          margin: 0 0 24px;
          padding-left: 20px;
          color: var(--muted);
        }
        .main-content li {
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .sidebar-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
        }
        .sidebar-card.highlight {
          background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%);
          color: #fff;
          border: none;
        }
        .sidebar-card.highlight h3 {
          color: #fff;
        }
        .sidebar-card.highlight p {
          color: rgba(255, 255, 255, 0.8);
        }
        .sidebar-card.highlight a {
          color: #93c5fd;
        }
        .sidebar-card h3 {
          font-size: 18px;
          margin: 0 0 12px;
        }
        .sidebar-card p {
          font-size: 14px;
          color: var(--muted);
          margin: 0 0 16px;
          line-height: 1.6;
        }
        .sidebar-btn {
          width: 100%;
          justify-content: center;
          margin-bottom: 16px;
        }
        .sidebar-contact p {
          margin: 0;
        }
        .sidebar-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .sidebar-links li {
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
        }
        .sidebar-links li:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .sidebar-links a {
          font-size: 14px;
          color: var(--text);
          text-decoration: none;
        }
        .sidebar-links a:hover {
          color: var(--brand);
        }
        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
