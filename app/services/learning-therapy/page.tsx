import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Learning Therapy",
  description:
    "Targeted learning therapy for reading, writing, spelling, and executive functioning. Research-based intervention grounded in evaluation findings. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/learning-therapy" },
};

const faqs = [
  {
    question: "What is learning therapy?",
    answer:
      "Learning therapy is targeted, structured support that addresses specific learning weaknesses identified through evaluation. Unlike general tutoring, learning therapy uses evidence-based methods designed to remediate underlying skill deficits in areas like reading, writing, spelling, and executive functioning.",
  },
  {
    question: "How is this different from tutoring?",
    answer:
      "Traditional tutoring typically helps students with current schoolwork. Learning therapy addresses the underlying skills that make learning difficult in the first place. For example, rather than just helping with tonight's reading assignment, learning therapy builds the decoding, fluency, and comprehension skills needed to become a better reader.",
  },
  {
    question: "Do I need an evaluation first?",
    answer:
      "We strongly recommend an evaluation before beginning learning therapy. Understanding the specific pattern of strengths and weaknesses helps us target intervention appropriately and avoid wasting time and effort on approaches that don't match the student's needs.",
  },
  {
    question: "What areas do you address?",
    answer:
      "We provide targeted support for reading (decoding, fluency, comprehension), writing (handwriting, spelling, written expression), and executive functioning (organization, planning, task completion). The specific focus depends on evaluation findings and the student's needs.",
  },
  {
    question: "How often are sessions?",
    answer:
      "Most students benefit from 1-2 sessions per week. Consistency is more important than frequency—regular practice with a structured approach produces better outcomes than sporadic intensive sessions.",
  },
];

export default function LearningTherapyPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="Learning Therapy"
        subtitle="Targeted, research-based support for reading, writing, spelling, and executive functioning. Grounded in evaluation findings, focused on real skill development."
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
              <h2>What We Mean by Learning Therapy</h2>
              <p>
                Learning therapy is not the same as traditional tutoring. While tutoring typically
                helps students keep up with current schoolwork, learning therapy targets the
                underlying skills that make learning difficult in the first place.
              </p>
              <p>
                Our approach is grounded in what evaluation reveals about a student's specific
                learning profile. We use structured, research-based methods that have been shown to
                work for students with learning differences like dyslexia, dysgraphia, and
                executive functioning challenges.
              </p>

              <h2>Areas of Focus</h2>

              <div className="focus-area">
                <h3>Reading</h3>
                <p>
                  For students struggling with reading, we address the specific skills that are
                  causing difficulty:
                </p>
                <ul>
                  <li>Phonemic awareness and phonics for decoding</li>
                  <li>Fluency development for reading speed and accuracy</li>
                  <li>Comprehension strategies for understanding text</li>
                  <li>Vocabulary and language development</li>
                </ul>
              </div>

              <div className="focus-area">
                <h3>Writing and Spelling</h3>
                <p>
                  Writing difficulties often involve multiple overlapping challenges. We work on:
                </p>
                <ul>
                  <li>Spelling patterns and encoding skills</li>
                  <li>Handwriting fluency and legibility</li>
                  <li>Sentence and paragraph construction</li>
                  <li>Planning and organizing written work</li>
                </ul>
              </div>

              <div className="focus-area">
                <h3>Executive Functioning</h3>
                <p>
                  For students who struggle with organization, planning, and follow-through, we
                  develop practical skills and systems:
                </p>
                <ul>
                  <li>Task initiation and completion strategies</li>
                  <li>Organization systems that actually work</li>
                  <li>Time management and planning skills</li>
                  <li>Self-monitoring and self-regulation</li>
                </ul>
              </div>

              <h2>Our Approach</h2>
              <p>
                Effective learning therapy starts with understanding. That's why we recommend
                evaluation first—not to create barriers, but to make sure we're addressing the
                right issues in the right way.
              </p>
              <p>
                Once we understand a student's learning profile, we design intervention that targets
                their specific weaknesses using methods that have research support for their type of
                difficulty. Progress is monitored regularly, and the approach adjusts as the student
                develops skills.
              </p>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>Get Started</h3>
                <p>
                  Interested in learning therapy? Start with a consultation to discuss your
                  situation.
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
                <h3>Start with Evaluation</h3>
                <p>
                  Not sure what's causing the difficulty? An evaluation helps identify the specific
                  issues and guides effective intervention.
                </p>
                <Link href="/services/psychoeducational-evaluations" className="btn secondary sidebar-btn">
                  Learn About Evaluations
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
                    <Link href="/services/testing-accommodations">Testing Accommodations</Link>
                  </li>
                  <li>
                    <Link href="/services/iee">Independent Educational Evaluations</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection title="Common Questions" items={faqs} />

      <CTASection
        headline="Ready to discuss learning support?"
        subtext="Schedule a consultation to talk about your student's needs and determine the best approach."
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
        .focus-area {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .focus-area h3 {
          font-size: 18px;
          margin: 0 0 8px;
        }
        .focus-area p {
          font-size: 15px;
          margin: 0 0 12px;
        }
        .focus-area ul {
          margin: 0;
          padding-left: 20px;
          color: var(--muted);
        }
        .focus-area li {
          margin-bottom: 6px;
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
