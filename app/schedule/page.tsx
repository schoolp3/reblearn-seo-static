import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description:
    "Schedule a consultation with Dennis Saller, LEP to discuss psychoeducational evaluation, IEE, learning therapy, or other services.",
  alternates: { canonical: "/schedule" },
};

const faqs = [
  {
    question: "What happens during a consultation?",
    answer:
      "A consultation is a brief conversation (typically 15-30 minutes) to discuss your situation, answer initial questions, and determine whether our services are a good fit. There's no obligation—it's an opportunity to learn more before making any decisions.",
  },
  {
    question: "Is there a fee for the consultation?",
    answer:
      "Initial consultations to discuss fit and scope are typically provided at no charge. This allows us to understand your needs and helps you decide whether to move forward.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "We maintain immediate availability for consultations and can typically begin evaluation within 1-2 weeks of intake. Specific timing depends on the scope of the evaluation and current caseload.",
  },
  {
    question: "What should I have ready?",
    answer:
      "It helps to have a brief summary of your concerns, the student's age/grade, and any relevant history (previous evaluations, school concerns, etc.). Don't worry if you don't have everything—we can discuss what's needed during the consultation.",
  },
];

export default function SchedulePage() {
  return (
    <>
      <Hero
        kicker="Get Started"
        title="Schedule a Consultation"
        subtitle="The first step is a conversation. We'll discuss your situation, answer your questions, and determine whether our services are a good fit."
        centered
      />

      <section className="schedule-section">
        <div className="schedule-container">
          <div className="schedule-grid">
            <div className="schedule-main">
              <h2>How to Schedule</h2>
              <p>
                Ready to schedule a consultation? Choose the method that works best for you:
              </p>

              <div className="schedule-options">
                <div className="schedule-option">
                  <div className="option-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="option-content">
                    <h3>Email</h3>
                    <p>
                      Send a message describing your situation and we'll respond with next steps.
                    </p>
                    <a
                      href="mailto:dennis@reblearn.com?subject=Consultation%20Request"
                      className="btn primary"
                    >
                      Email Consultation Request
                    </a>
                  </div>
                </div>

                <div className="schedule-option">
                  <div className="option-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="option-content">
                    <h3>Phone or Text</h3>
                    <p>
                      Call or text to speak directly about your situation and schedule a time.
                    </p>
                    <a href="tel:+16692486602" className="btn primary">
                      Call 669-248-6602
                    </a>
                  </div>
                </div>
              </div>

              <h2>What to Expect</h2>
              <div className="expect-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">1</div>
                  <div className="timeline-content">
                    <h3>Initial Contact</h3>
                    <p>
                      Reach out via email or phone. Include a brief description of your situation
                      and concerns.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">2</div>
                  <div className="timeline-content">
                    <h3>Consultation Call</h3>
                    <p>
                      We schedule a brief conversation to discuss your needs, answer questions, and
                      determine fit.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">3</div>
                  <div className="timeline-content">
                    <h3>Intake and Planning</h3>
                    <p>
                      If we move forward, we gather background information and design an evaluation
                      approach.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">4</div>
                  <div className="timeline-content">
                    <h3>Evaluation</h3>
                    <p>
                      Testing is scheduled promptly. Most evaluations are completed within 2-4 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="schedule-sidebar">
              <div className="sidebar-card">
                <h3>Quick Contact</h3>
                <div className="sidebar-contact">
                  <p>
                    <strong>Dennis Saller, LEP #3219</strong>
                  </p>
                  <p>
                    <a href="tel:+16692486602">669-248-6602</a>
                  </p>
                  <p>
                    <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a>
                  </p>
                </div>
              </div>

              <div className="sidebar-card highlight">
                <h3>Immediate Availability</h3>
                <p>
                  We maintain capacity for new evaluations. Most cases can begin within 1-2 weeks
                  of intake.
                </p>
              </div>

              <div className="sidebar-card">
                <h3>Not Sure Where to Start?</h3>
                <p>
                  That's okay. The consultation is designed to help you figure out the right path.
                  No obligation, no pressure.
                </p>
                <Link href="/services" className="sidebar-link">
                  View all services &rarr;
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection title="Scheduling Questions" items={faqs} />

      <style jsx>{`
        .schedule-section {
          padding: 60px 0;
        }
        .schedule-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .schedule-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 48px;
          align-items: start;
        }
        .schedule-main h2 {
          font-size: 24px;
          margin: 0 0 12px;
        }
        .schedule-main > p {
          font-size: 16px;
          color: var(--muted);
          margin: 0 0 24px;
        }
        .schedule-options {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 48px;
        }
        .schedule-option {
          display: flex;
          gap: 20px;
          padding: 24px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
        }
        .option-icon {
          width: 48px;
          height: 48px;
          background: var(--brand);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }
        .option-content h3 {
          font-size: 18px;
          margin: 0 0 8px;
        }
        .option-content p {
          font-size: 14px;
          color: var(--muted);
          margin: 0 0 16px;
          line-height: 1.6;
        }
        .option-content .btn {
          font-size: 14px;
        }
        .expect-timeline {
          margin-top: 24px;
        }
        .timeline-item {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          position: relative;
        }
        .timeline-item:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 17px;
          top: 44px;
          bottom: -12px;
          width: 2px;
          background: var(--border);
        }
        .timeline-marker {
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
          position: relative;
          z-index: 1;
        }
        .timeline-content h3 {
          font-size: 16px;
          margin: 0 0 6px;
        }
        .timeline-content p {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
          line-height: 1.6;
        }
        .schedule-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .sidebar-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
        }
        .sidebar-card.highlight {
          background: linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%);
          border-color: #a7f3d0;
        }
        .sidebar-card h3 {
          font-size: 16px;
          margin: 0 0 12px;
        }
        .sidebar-card p {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
          line-height: 1.6;
        }
        .sidebar-contact p {
          margin-bottom: 8px;
        }
        .sidebar-contact a {
          color: var(--brand);
        }
        .sidebar-link {
          display: inline-block;
          margin-top: 12px;
          font-size: 14px;
          font-weight: 500;
          color: var(--brand);
        }
        @media (max-width: 900px) {
          .schedule-grid {
            grid-template-columns: 1fr;
          }
          .schedule-option {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
