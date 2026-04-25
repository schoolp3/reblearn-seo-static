import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "District Contracting",
  description:
    "Psychoeducational evaluation services for California school districts. Experienced, reliable assessment capacity with timely case completion. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/district-contracting" },
};

export default function DistrictContractingPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="District Contracting"
        subtitle="Experienced psychoeducational evaluation capacity for California school districts. Reliable assessment services, clear reporting, and timely case completion."
        primaryCta={{
          text: "District Inquiry",
          href: "mailto:dennis@reblearn.com?subject=District%20Contracting",
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
              <h2>Evaluation Support for Districts</h2>
              <p>
                School districts sometimes need additional psychoeducational evaluation capacity.
                Whether you're facing a temporary staffing shortage, a backlog of cases, or need
                specialized assessment support, RebLearn can help.
              </p>
              <p>
                With over 26 years of experience in school-based and private psychoeducational
                assessment, Dennis Saller provides reliable, experienced evaluation services that
                integrate smoothly with district workflows.
              </p>

              <h2>What We Offer</h2>
              <ul>
                <li>
                  <strong>Psychoeducational evaluations</strong> — Full assessments for initial
                  evaluations, triennial reviews, and other district needs
                </li>
                <li>
                  <strong>Specialized assessment</strong> — Evaluation for specific concerns
                  including dyslexia, dysgraphia, attention, and executive functioning
                </li>
                <li>
                  <strong>Clear, defensible reports</strong> — Well-organized documentation that
                  supports IEP development and withstands scrutiny
                </li>
                <li>
                  <strong>Timely completion</strong> — Reliable scheduling and on-time delivery
                </li>
                <li>
                  <strong>IEP meeting participation</strong> — Available to attend meetings and
                  discuss findings when appropriate
                </li>
              </ul>

              <h2>Working Together</h2>
              <p>
                Capacity, scope, and contracting details are determined on a case-by-case basis. We
                work to understand your district's specific needs and develop an arrangement that
                makes sense for your situation.
              </p>
              <p>
                To discuss district contracting, please use the inquiry form below or email with
                "District Contracting" in the subject line so your message is routed correctly.
              </p>

              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>Experience</h3>
                  <p>26+ years in school psychology and psychoeducational assessment</p>
                </div>
                <div className="benefit-card">
                  <h3>Volume</h3>
                  <p>Over 1,000 evaluations completed across school and private settings</p>
                </div>
                <div className="benefit-card">
                  <h3>Credentials</h3>
                  <p>Licensed Educational Psychologist (LEP #3219) and School Psychologist</p>
                </div>
                <div className="benefit-card">
                  <h3>Reliability</h3>
                  <p>Clear communication, consistent quality, on-time delivery</p>
                </div>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card highlight">
                <h3>District Inquiry</h3>
                <p>
                  Ready to discuss contracting? Reach out for a conversation about your
                  district's needs.
                </p>
                <Link
                  href="mailto:dennis@reblearn.com?subject=District%20Contracting"
                  className="btn primary sidebar-btn"
                >
                  Email District Inquiry
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
                    <Link href="/services/iee">Independent Educational Evaluations</Link>
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

      <CTASection
        headline="Need evaluation capacity for your district?"
        subtext="Let's discuss your needs and determine whether RebLearn is a good fit for your district."
        primaryButton={{
          text: "Email District Inquiry",
          href: "mailto:dennis@reblearn.com?subject=District%20Contracting",
        }}
        secondaryButton={{
          text: "Call 669-248-6602",
          href: "tel:+16692486602",
        }}
        variant="dark"
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
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 32px;
        }
        .benefit-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
        }
        .benefit-card h3 {
          font-size: 16px;
          margin: 0 0 8px;
        }
        .benefit-card p {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
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
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
