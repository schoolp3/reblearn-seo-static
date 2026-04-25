import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ContactForm } from "@/components/contact-form";
import { FAQSection } from "@/components/faq-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dennis Saller, LEP for psychoeducational evaluations, IEE questions, accommodations testing, and district partnerships in California.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    question: "What's the best way to reach you?",
    answer:
      "Email is typically the fastest way to get a response. You can also call or text 669-248-6602. For specific inquiries (IEE, district contracting), please include that in your subject line so your message is routed correctly.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "Most inquiries receive a response within 1-2 business days. If you have an urgent matter, please indicate that in your message or call directly.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Include a brief description of your situation, what service you're interested in, and any relevant details (student's age/grade, specific concerns, timeline). This helps us prepare for a meaningful conversation.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, initial consultations can be conducted by phone or video call. Testing is typically conducted in person, though some flexibility may be available depending on the situation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        kicker="Contact RebLearn"
        title="Get in Touch"
        subtitle="Have questions about psychoeducational evaluation, learning therapy, or our other services? Reach out to start a conversation."
        centered
      />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="contact-card">
                <h3>Dennis Saller, LEP #3219</h3>
                <p>Licensed Educational Psychologist</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">Phone/Text</span>
                    <a href="tel:+16692486602" className="contact-value">
                      669-248-6602
                    </a>
                  </div>

                  <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <a href="mailto:dennis@reblearn.com" className="contact-value">
                      dennis@reblearn.com
                    </a>
                  </div>

                  <div className="contact-item">
                    <span className="contact-label">Website</span>
                    <span className="contact-value">RebLearn.com</span>
                  </div>

                  <div className="contact-item">
                    <span className="contact-label">Service Area</span>
                    <span className="contact-value">California Statewide</span>
                  </div>
                </div>
              </div>

              <div className="quick-links">
                <h3>Quick Inquiries</h3>
                <p>For specific service inquiries, use these direct links:</p>
                <div className="quick-link-buttons">
                  <a
                    href="mailto:dennis@reblearn.com?subject=Consultation%20Request"
                    className="btn secondary"
                  >
                    General Consultation
                  </a>
                  <a
                    href="mailto:dennis@reblearn.com?subject=IEE%20Inquiry"
                    className="btn secondary"
                  >
                    IEE Inquiry
                  </a>
                  <a
                    href="mailto:dennis@reblearn.com?subject=District%20Contracting"
                    className="btn secondary"
                  >
                    District Contracting
                  </a>
                  <a
                    href="mailto:dennis@reblearn.com?subject=Accommodations%20Testing"
                    className="btn secondary"
                  >
                    Accommodations Testing
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send a Message</h2>
              <ContactForm subject="Website Contact" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Contact FAQs" items={faqs} />

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to schedule a consultation?</h2>
          <p>
            If you're ready to discuss your situation and determine next steps, head to the
            scheduling page.
          </p>
          <Link href="/schedule" className="btn primary">
            Schedule Consultation
          </Link>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          padding: 60px 0;
        }
        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .contact-info h2,
        .contact-form-wrapper h2 {
          font-size: 24px;
          margin: 0 0 24px;
        }
        .contact-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
        }
        .contact-card h3 {
          font-size: 18px;
          margin: 0 0 4px;
        }
        .contact-card > p {
          font-size: 14px;
          color: var(--muted);
          margin: 0 0 20px;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .contact-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--muted);
        }
        .contact-value {
          font-size: 16px;
          color: var(--text);
        }
        a.contact-value {
          color: var(--brand);
        }
        .quick-links h3 {
          font-size: 18px;
          margin: 0 0 8px;
        }
        .quick-links > p {
          font-size: 14px;
          color: var(--muted);
          margin: 0 0 16px;
        }
        .quick-link-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .quick-link-buttons .btn {
          justify-content: center;
          font-size: 14px;
        }
        .cta-section {
          background: var(--card);
          border-top: 1px solid var(--border);
          padding: 48px 20px;
          text-align: center;
        }
        .cta-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .cta-section h2 {
          font-size: 24px;
          margin: 0 0 12px;
        }
        .cta-section p {
          font-size: 16px;
          color: var(--muted);
          margin: 0 0 24px;
        }
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </>
  );
}
