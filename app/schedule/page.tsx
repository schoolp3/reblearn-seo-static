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

      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-3">How to Schedule</h2>
              <p className="text-base text-[var(--muted)] mb-6">
                Ready to schedule a consultation? Choose the method that works best for you:
              </p>

              <div className="flex flex-col gap-5 mb-12">
                <div className="flex flex-col sm:flex-row gap-5 p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl">
                  <div className="w-12 h-12 bg-[var(--brand)] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                      Send a message describing your situation and we&apos;ll respond with next steps.
                    </p>
                    <a href="mailto:dennis@reblearn.com?subject=Consultation%20Request" className="btn primary text-sm">
                      Email Consultation Request
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl">
                  <div className="w-12 h-12 bg-[var(--brand)] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone or Text</h3>
                    <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                      Call or text to speak directly about your situation and schedule a time.
                    </p>
                    <a href="tel:+16692486602" className="btn primary text-sm">
                      Call 669-248-6602
                    </a>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Initial Contact", desc: "Reach out via email or phone. Include a brief description of your situation and concerns." },
                  { step: 2, title: "Consultation Call", desc: "We schedule a brief conversation to discuss your needs, answer questions, and determine fit." },
                  { step: 3, title: "Intake and Planning", desc: "If we move forward, we gather background information and design an evaluation approach." },
                  { step: 4, title: "Evaluation", desc: "Testing is scheduled promptly. Most evaluations are completed within 2-4 weeks." },
                ].map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4 relative">
                    {i < arr.length - 1 && (
                      <div className="absolute left-[17px] top-[44px] bottom-[-12px] w-0.5 bg-[var(--border)]" />
                    )}
                    <div className="w-9 h-9 bg-[var(--brand)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 relative z-10">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1.5">{item.title}</h3>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6">
                <h3 className="text-base font-semibold mb-3">Quick Contact</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Dennis Saller, LEP #3219</strong></p>
                  <p><a href="tel:+16692486602" className="text-[var(--brand)]">669-248-6602</a></p>
                  <p><a href="mailto:dennis@reblearn.com" className="text-[var(--brand)]">dennis@reblearn.com</a></p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 border border-emerald-200 rounded-2xl p-6">
                <h3 className="text-base font-semibold mb-3">Immediate Availability</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  We maintain capacity for new evaluations. Most cases can begin within 1-2 weeks of intake.
                </p>
              </div>

              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6">
                <h3 className="text-base font-semibold mb-3">Not Sure Where to Start?</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  That&apos;s okay. The consultation is designed to help you figure out the right path. No obligation, no pressure.
                </p>
                <Link href="/services" className="inline-block mt-3 text-sm font-medium text-[var(--brand)]">
                  View all services &rarr;
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection title="Scheduling Questions" items={faqs} />
    </>
  );
}
