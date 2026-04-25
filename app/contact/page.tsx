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

      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-1">Dennis Saller, LEP #3219</h3>
                <p className="text-sm text-[var(--muted)] mb-5">Licensed Educational Psychologist</p>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Phone/Text</span>
                    <a href="tel:+16692486602" className="text-base text-[var(--brand)]">669-248-6602</a>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Email</span>
                    <a href="mailto:dennis@reblearn.com" className="text-base text-[var(--brand)]">dennis@reblearn.com</a>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Website</span>
                    <span className="text-base text-[var(--text)]">RebLearn.com</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Service Area</span>
                    <span className="text-base text-[var(--text)]">California Statewide</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Inquiries</h3>
                <p className="text-sm text-[var(--muted)] mb-4">For specific service inquiries, use these direct links:</p>
                <div className="flex flex-col gap-2.5">
                  <a href="mailto:dennis@reblearn.com?subject=Consultation%20Request" className="btn secondary text-sm justify-center">
                    General Consultation
                  </a>
                  <a href="mailto:dennis@reblearn.com?subject=IEE%20Inquiry" className="btn secondary text-sm justify-center">
                    IEE Inquiry
                  </a>
                  <a href="mailto:dennis@reblearn.com?subject=District%20Contracting" className="btn secondary text-sm justify-center">
                    District Contracting
                  </a>
                  <a href="mailto:dennis@reblearn.com?subject=Accommodations%20Testing" className="btn secondary text-sm justify-center">
                    Accommodations Testing
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm subject="Website Contact" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Contact FAQs" items={faqs} />

      <section className="bg-[var(--card)] border-t border-[var(--border)] py-12 text-center">
        <div className="max-w-[600px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-3">Ready to schedule a consultation?</h2>
          <p className="text-base text-[var(--muted)] mb-6">
            If you&apos;re ready to discuss your situation and determine next steps, head to the
            scheduling page.
          </p>
          <Link href="/schedule" className="btn primary">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
