import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Dennis Saller, LEP",
  description:
    "California Licensed Educational Psychologist (LEP #3219) with 26+ years of experience in psychoeducational evaluations for learning differences, ADHD, dyslexia, and more.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        kicker="About RebLearn"
        title="Dennis Saller, Licensed Educational Psychologist"
        subtitle="26+ years helping families and schools understand learning differences and find practical solutions."
        centered
      />

      <section className="about-section">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-image">
              <div className="headshot-large" aria-hidden="true" />
            </div>

            <div className="about-content">
              <h2>Background and Experience</h2>
              <p>
                Dennis Saller is a California Licensed Educational Psychologist (LEP #3219) and
                School Psychologist with more than 26 years of experience in psychoeducational
                evaluation, learning differences, and school-based consultation.
              </p>
              <p>
                Over his career, Dennis has conducted well over 1,000 psychoeducational evaluations
                across school and private practice settings. His work spans public school
                evaluations, private evaluations, dyslexia and dysgraphia assessment, ADHD and
                executive functioning evaluation, accommodations testing, and consultation with
                families and schools.
              </p>

              <h2>Approach</h2>
              <p>
                Dennis's approach is grounded in careful assessment, cognitive and academic
                analysis, and practical next steps that parents, schools, and adult clients can
                actually use. RebLearn emphasizes clear evaluation findings and specific
                recommendations—not vague labels or generic guidance.
              </p>
              <p>
                When families come to RebLearn, the goal is to answer the questions that matter:
                Why is my child struggling? What is getting in the way? And what should we do
                about it?
              </p>

              <h2>Areas of Focus</h2>
              <ul className="focus-list">
                <li>Dyslexia and reading difficulties</li>
                <li>Dysgraphia and writing challenges</li>
                <li>Dyscalculia and math difficulties</li>
                <li>ADHD and attention concerns</li>
                <li>Executive functioning</li>
                <li>Psychoeducational evaluation</li>
                <li>Independent Educational Evaluations (IEEs)</li>
                <li>Testing accommodations documentation</li>
                <li>District contracting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="credentials-section">
        <div className="credentials-container">
          <h2>Credentials</h2>
          <div className="credentials-grid">
            <div className="credential-card">
              <h3>Licensed Educational Psychologist</h3>
              <p>California License #3219</p>
            </div>
            <div className="credential-card">
              <h3>School Psychologist</h3>
              <p>California Credential</p>
            </div>
            <div className="credential-card">
              <h3>Experience</h3>
              <p>26+ years in psychoeducational assessment</p>
            </div>
            <div className="credential-card">
              <h3>Evaluations</h3>
              <p>1,000+ completed assessments</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to talk?"
        subtext="Schedule a consultation to discuss your situation and determine whether an evaluation would be helpful."
        primaryButton={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
        secondaryButton={{
          text: "View Services",
          href: "/services",
        }}
      />

      <style jsx>{`
        .about-section {
          padding: 60px 0;
        }
        .about-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 48px;
          align-items: start;
        }
        .headshot-large {
          width: 200px;
          height: 200px;
          border-radius: 16px;
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
          border: 3px solid #fff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        .about-content h2 {
          font-size: 22px;
          margin: 32px 0 12px;
        }
        .about-content h2:first-child {
          margin-top: 0;
        }
        .about-content p {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 12px;
        }
        .focus-list {
          margin: 0;
          padding-left: 20px;
          color: var(--muted);
          line-height: 1.8;
        }
        .focus-list li {
          margin-bottom: 4px;
        }
        .credentials-section {
          background: var(--card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 48px 0;
        }
        .credentials-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .credentials-section h2 {
          font-size: 24px;
          margin: 0 0 24px;
          text-align: center;
        }
        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .credential-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
        }
        .credential-card h3 {
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 8px;
          color: var(--text);
        }
        .credential-card p {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
        }
        @media (max-width: 800px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-image {
            display: flex;
            justify-content: center;
          }
          .credentials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .credentials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
