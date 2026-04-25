import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Psychoeducational Evaluations",
  description:
    "Comprehensive psychoeducational evaluations for learning differences, ADHD, dyslexia, dysgraphia, and academic difficulties in California. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/psychoeducational-evaluations" },
};

const faqs = [
  {
    question: "What does a psychoeducational evaluation include?",
    answer:
      "A comprehensive evaluation typically includes assessment of cognitive abilities, academic achievement, and relevant processing areas (such as language, memory, attention, and executive functioning). The specific tests used depend on the questions being answered and the concerns being evaluated.",
  },
  {
    question: "How long does the evaluation take?",
    answer:
      "Most evaluations are completed within 2-4 weeks from intake to final report. Testing sessions typically span 1-2 visits lasting 2-4 hours each, depending on the scope of the evaluation and the student's age and needs.",
  },
  {
    question: "Is this therapy?",
    answer:
      "No. Psychoeducational evaluation is assessment-focused: we clarify what is happening, document the findings, and provide recommendations for next steps. We are not a therapy practice, though we can help connect families with appropriate support providers.",
  },
  {
    question: "Will the evaluation diagnose my child?",
    answer:
      "A psychoeducational evaluation can identify learning disabilities, patterns consistent with ADHD, and other conditions within the scope of educational psychology. We provide clear findings and, where appropriate, diagnostic conclusions that can support school services and accommodations.",
  },
  {
    question: "Can the results be used for an IEP or 504 plan?",
    answer:
      "Yes. Our evaluation reports are designed to be useful for school meetings, IEP development, and 504 planning. We provide clear documentation of findings and specific recommendations that schools can use in their decision-making.",
  },
];

export default function PsychoeducationalEvaluationsPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="Psychoeducational Evaluations"
        subtitle="Comprehensive evaluation to understand learning, attention, and academic difficulties. Clear findings and practical recommendations for families and schools."
        primaryCta={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
        secondaryCta={{
          text: "Call 669-248-6602",
          href: "tel:+16692486602",
        }}
        trustBadges={[
          "26+ Years Experience",
          "1,000+ Evaluations",
          "LEP #3219",
          "California Statewide",
        ]}
      />

      <section className="content-section">
        <div className="content-container">
          <div className="content-grid">
            <div className="main-content">
              <h2>What is a Psychoeducational Evaluation?</h2>
              <p>
                A psychoeducational evaluation is a comprehensive assessment that examines how a
                student thinks, learns, and processes information. It helps answer important
                questions: Why is my child struggling in school? What is getting in the way of
                learning? What kind of support would actually help?
              </p>
              <p>
                The evaluation looks at cognitive abilities, academic skills, and specific
                processing areas to build a complete picture of strengths and weaknesses. The goal
                is not just to identify problems, but to understand the underlying patterns and
                provide clear, actionable recommendations.
              </p>

              <h2>When is an Evaluation Helpful?</h2>
              <p>A psychoeducational evaluation may be appropriate when you have concerns about:</p>
              <ul>
                <li>
                  <strong>Reading difficulties</strong> — slow or effortful reading, trouble with
                  decoding, poor comprehension, suspected dyslexia
                </li>
                <li>
                  <strong>Writing challenges</strong> — poor handwriting, difficulty organizing
                  written work, trouble with spelling, suspected dysgraphia
                </li>
                <li>
                  <strong>Math difficulties</strong> — trouble with number sense, math facts,
                  problem-solving, suspected dyscalculia
                </li>
                <li>
                  <strong>Attention and focus</strong> — difficulty sustaining attention,
                  distractibility, impulsivity, suspected ADHD
                </li>
                <li>
                  <strong>Executive functioning</strong> — poor organization, trouble with planning,
                  difficulty following through on tasks
                </li>
                <li>
                  <strong>Uneven academic performance</strong> — bright in some areas but struggling
                  in others
                </li>
                <li>
                  <strong>School concerns</strong> — preparing for IEP meetings, seeking a 504 plan,
                  or needing documentation for services
                </li>
              </ul>

              <h2>What to Expect</h2>
              <div className="process-list">
                <div className="process-item">
                  <div className="process-num">1</div>
                  <div>
                    <h3>Consultation</h3>
                    <p>
                      We discuss your concerns, review relevant history, and confirm that evaluation
                      is the right next step for your situation.
                    </p>
                  </div>
                </div>
                <div className="process-item">
                  <div className="process-num">2</div>
                  <div>
                    <h3>Intake and Records Review</h3>
                    <p>
                      We gather developmental, educational, and medical history. You complete intake
                      forms and we review relevant records.
                    </p>
                  </div>
                </div>
                <div className="process-item">
                  <div className="process-num">3</div>
                  <div>
                    <h3>Testing Sessions</h3>
                    <p>
                      Testing is conducted over 1-2 sessions in a comfortable setting. We assess
                      cognitive abilities, academic skills, and relevant processing areas.
                    </p>
                  </div>
                </div>
                <div className="process-item">
                  <div className="process-num">4</div>
                  <div>
                    <h3>Report and Feedback</h3>
                    <p>
                      You receive a detailed written report with clear findings and specific
                      recommendations. We meet to discuss results and answer questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>Quick Contact</h3>
                <p>
                  Ready to discuss your situation? Reach out to schedule a consultation.
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
                    <Link href="/services/iee">Independent Educational Evaluations</Link>
                  </li>
                  <li>
                    <Link href="/services/learning-therapy">Learning Therapy</Link>
                  </li>
                  <li>
                    <Link href="/services/testing-accommodations">Testing Accommodations</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection title="Common Questions" items={faqs} />

      <CTASection
        headline="Ready to get answers?"
        subtext="Schedule a consultation to discuss your concerns and determine whether an evaluation is the right next step."
        primaryButton={{
          text: "Schedule Consultation",
          href: "/schedule",
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
        .main-content ul {
          margin: 0 0 24px;
          padding-left: 20px;
          color: var(--muted);
        }
        .main-content li {
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .process-list {
          margin-top: 24px;
        }
        .process-item {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }
        .process-num {
          width: 36px;
          height: 36px;
          background: var(--brand);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }
        .process-item h3 {
          font-size: 17px;
          margin: 0 0 6px;
        }
        .process-item p {
          margin: 0;
          font-size: 15px;
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
          .sidebar {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .sidebar-card {
            flex: 1;
            min-width: 280px;
          }
        }
      `}</style>
    </>
  );
}
