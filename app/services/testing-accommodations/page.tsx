import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Testing Accommodations",
  description:
    "Psychoeducational evaluations for testing accommodations on SAT, ACT, GRE, MCAT, LSAT, Bar exam, and professional licensing exams. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/testing-accommodations" },
};

const faqs = [
  {
    question: "What accommodations can be documented?",
    answer:
      "Common accommodations include extended time, separate testing room, breaks, use of a computer, reader services, and others depending on the documented disability and the requirements of the specific testing agency.",
  },
  {
    question: "What tests do you provide documentation for?",
    answer:
      "We provide evaluations for standardized tests (SAT, ACT, GRE, GMAT, LSAT, MCAT), professional licensing exams (Bar exam, medical boards, CPA), and college or graduate school accommodations. Requirements vary by agency.",
  },
  {
    question: "Do I need a new evaluation if I had one as a child?",
    answer:
      "It depends. Many testing agencies require recent documentation (typically within 3-5 years). If your previous evaluation is older, you may need updated testing to meet current requirements.",
  },
  {
    question: "Will my accommodations be approved?",
    answer:
      "We cannot guarantee approval—that decision is made by the testing agency. However, we provide thorough evaluation and clear documentation that addresses the specific requirements agencies look for.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Most evaluations can be completed within 2-4 weeks. Plan ahead—testing agencies often require advance application and may have their own processing timelines.",
  },
];

export default function TestingAccommodationsPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="Testing Accommodations"
        subtitle="Documentation for accommodations on standardized tests, professional licensing exams, and academic settings. Thorough evaluation, clear documentation."
        primaryCta={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
        secondaryCta={{
          text: "Call 669-248-6602",
          href: "tel:+16692486602",
        }}
      />

      <section className="content-section">
        <div className="content-container">
          <div className="content-grid">
            <div className="main-content">
              <h2>Accommodations Documentation</h2>
              <p>
                Many students and adults with learning disabilities, ADHD, and other conditions are
                entitled to accommodations on standardized tests and professional exams. To receive
                these accommodations, testing agencies typically require current documentation from
                a qualified professional.
              </p>
              <p>
                We provide comprehensive psychoeducational evaluations designed to meet the
                documentation requirements of major testing agencies. Our reports clearly document
                the disability, explain how it affects testing performance, and support the need
                for specific accommodations.
              </p>

              <h2>Tests and Exams We Support</h2>

              <div className="test-category">
                <h3>College Entrance Exams</h3>
                <ul>
                  <li>SAT (College Board)</li>
                  <li>ACT</li>
                  <li>AP Exams</li>
                </ul>
              </div>

              <div className="test-category">
                <h3>Graduate and Professional School</h3>
                <ul>
                  <li>GRE</li>
                  <li>GMAT</li>
                  <li>LSAT</li>
                  <li>MCAT</li>
                </ul>
              </div>

              <div className="test-category">
                <h3>Professional Licensing</h3>
                <ul>
                  <li>Bar Exam</li>
                  <li>Medical Boards (USMLE, COMLEX)</li>
                  <li>CPA Exam</li>
                  <li>Other professional licensing exams</li>
                </ul>
              </div>

              <div className="test-category">
                <h3>Academic Accommodations</h3>
                <ul>
                  <li>College and university disability services</li>
                  <li>Graduate school accommodations</li>
                </ul>
              </div>

              <h2>What the Evaluation Includes</h2>
              <p>
                An accommodations evaluation typically includes assessment of cognitive abilities,
                academic achievement, and relevant processing areas. The specific tests administered
                depend on the documentation requirements and the nature of the disability being
                documented.
              </p>
              <p>
                The written report documents the disability, provides the diagnostic basis, explains
                the functional limitations, and clearly connects these to the need for specific
                accommodations. Reports are designed to meet the requirements of testing agencies
                and include the information they look for in making accommodation decisions.
              </p>

              <h2>Important Considerations</h2>
              <ul>
                <li>
                  <strong>Plan ahead:</strong> Testing agencies have their own timelines. Apply for
                  accommodations well before your intended test date.
                </li>
                <li>
                  <strong>Check requirements:</strong> Different agencies have different
                  documentation requirements. We can help you understand what's needed.
                </li>
                <li>
                  <strong>History matters:</strong> Agencies often look for a documented history of
                  the condition, not just current testing. Gather relevant records.
                </li>
                <li>
                  <strong>No guarantees:</strong> We provide thorough documentation, but the
                  accommodation decision is made by the testing agency.
                </li>
              </ul>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>Get Started</h3>
                <p>
                  Need accommodations documentation? Start with a consultation to discuss your
                  situation and requirements.
                </p>
                <div className="sidebar-contact">
                  <p>
                    <strong>Phone/Text:</strong>
                    <br />
                    <a href="tel:+16692486602">669-248-6602</a>
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <br />
                    <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a>
                  </p>
                </div>
                <Link href="/schedule" className="btn primary sidebar-btn">
                  Schedule Consultation
                </Link>
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
                    <Link href="/about">About Dennis Saller</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection title="Common Questions" items={faqs} />

      <CTASection
        headline="Need accommodations documentation?"
        subtext="Schedule a consultation to discuss your situation, understand the requirements, and plan your evaluation."
        primaryButton={{
          text: "Schedule Consultation",
          href: "/schedule",
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
        .main-content > ul {
          margin: 0 0 24px;
          padding-left: 20px;
          color: var(--muted);
        }
        .main-content > ul li {
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .test-category {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 16px;
        }
        .test-category h3 {
          font-size: 16px;
          margin: 0 0 12px;
        }
        .test-category ul {
          margin: 0;
          padding-left: 20px;
          color: var(--muted);
        }
        .test-category li {
          margin-bottom: 4px;
          font-size: 14px;
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
        .sidebar-contact p {
          margin-bottom: 12px;
        }
        .sidebar-contact a {
          color: var(--brand);
        }
        .sidebar-btn {
          width: 100%;
          justify-content: center;
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
