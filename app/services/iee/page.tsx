import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { ServicePageLayout, SidebarCard, RelatedServices } from "@/components/service-page-layout";

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
        primaryCta={{ text: "IEE Inquiry", href: "mailto:dennis@reblearn.com?subject=IEE%20Inquiry" }}
        secondaryCta={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
      />

      <ServicePageLayout
        notice="<strong>Note:</strong> This page provides general information about Independent Educational Evaluations. It is not legal advice and does not constitute a determination of eligibility or district obligations. Each IEE situation is unique."
        sidebar={
          <>
            <SidebarCard title="IEE Inquiry" highlight>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Ready to discuss your IEE needs? Reach out with your questions.
              </p>
              <a href="mailto:dennis@reblearn.com?subject=IEE%20Inquiry" className="btn bg-white text-[#0f172a] w-full justify-center mb-4 hover:bg-gray-100">
                Email IEE Inquiry
              </a>
              <p className="text-sm">
                <strong>Phone/Text:</strong><br />
                <a href="tel:+16692486602" className="text-blue-300">669-248-6602</a>
              </p>
            </SidebarCard>
            <RelatedServices
              services={[
                { label: "Psychoeducational Evaluations", href: "/services/psychoeducational-evaluations" },
                { label: "Learning Therapy", href: "/services/learning-therapy" },
                { label: "District Contracting", href: "/services/district-contracting" },
              ]}
            />
          </>
        }
      >
        <h2 className="text-2xl font-bold mb-4">What is an IEE?</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          An Independent Educational Evaluation is an evaluation conducted by a qualified professional outside the school district. Parents have the right to request an IEE when they disagree with a school district&apos;s evaluation of their child.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          When done well, an IEE provides a thorough, independent assessment that can help clarify a child&apos;s needs and inform educational planning. The evaluation should be comprehensive, clearly written, and useful for IEP development and school decision-making.
        </p>

        <h2 className="text-2xl font-bold mb-4">When Families Seek an IEE</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">Common reasons families pursue an IEE include:</p>
        <ul className="list-disc pl-5 text-[var(--muted)] mb-8 space-y-3">
          <li><strong className="text-[var(--text)]">Disagreement with school findings</strong> — The school&apos;s evaluation didn&apos;t find what you expected, or you believe it missed important issues</li>
          <li><strong className="text-[var(--text)]">Incomplete evaluation</strong> — The school&apos;s assessment didn&apos;t look at all relevant areas or answer all your questions</li>
          <li><strong className="text-[var(--text)]">Need for independent perspective</strong> — You want an outside opinion before making important educational decisions</li>
          <li><strong className="text-[var(--text)]">Preparing for an IEP meeting</strong> — You want comprehensive, independent data to support your child&apos;s needs</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Our Approach to IEEs</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          We approach each IEE with the same thoroughness and care as any comprehensive psychoeducational evaluation. Our process includes:
        </p>
        <ul className="list-disc pl-5 text-[var(--muted)] mb-8 space-y-2">
          <li>Review of all relevant records and prior evaluations</li>
          <li>Comprehensive assessment tailored to the referral questions</li>
          <li>Clear, well-organized written report</li>
          <li>Specific, actionable recommendations</li>
          <li>Feedback meeting to discuss findings</li>
          <li>Availability to attend IEP meetings when appropriate</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">How to Start</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          If you are exploring an IEE, the first step is a conversation to understand your situation, review the relevant history, and determine whether we are a good fit for your needs.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed">
          Please email with the subject line <strong className="text-[var(--text)]">IEE Inquiry</strong> so your message is routed correctly, or call/text to discuss your situation.
        </p>
      </ServicePageLayout>

      <FAQSection title="Common Questions About IEEs" items={faqs} />

      <CTASection
        headline="Have questions about an IEE?"
        subtext="Each situation is different. Reach out to discuss your circumstances and determine the best path forward."
        primaryButton={{ text: "Email IEE Inquiry", href: "mailto:dennis@reblearn.com?subject=IEE%20Inquiry" }}
        secondaryButton={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
      />
    </>
  );
}
