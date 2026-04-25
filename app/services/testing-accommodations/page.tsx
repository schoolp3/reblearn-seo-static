import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { ServicePageLayout, QuickContactSidebar, RelatedServices } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Testing Accommodations",
  description:
    "Psychoeducational evaluations for testing accommodations on SAT, ACT, GRE, MCAT, LSAT, Bar exam, and professional licensing exams. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/testing-accommodations" },
  openGraph: {
    title: "Testing Accommodations | RebLearn",
    description:
      "Documentation for accommodations on SAT, ACT, GRE, MCAT, LSAT, Bar exam, and professional licensing exams.",
  },
};

const faqs = [
  { question: "What accommodations can be documented?", answer: "Common accommodations include extended time, separate testing room, breaks, use of a computer, reader services, and others depending on the documented disability and the requirements of the specific testing agency." },
  { question: "What tests do you provide documentation for?", answer: "We provide evaluations for standardized tests (SAT, ACT, GRE, GMAT, LSAT, MCAT), professional licensing exams (Bar exam, medical boards, CPA), and college or graduate school accommodations. Requirements vary by agency." },
  { question: "Do I need a new evaluation if I had one as a child?", answer: "It depends. Many testing agencies require recent documentation (typically within 3-5 years). If your previous evaluation is older, you may need updated testing to meet current requirements." },
  { question: "Will my accommodations be approved?", answer: "We cannot guarantee approval—that decision is made by the testing agency. However, we provide thorough evaluation and clear documentation that addresses the specific requirements agencies look for." },
  { question: "How long does the process take?", answer: "Most evaluations can be completed within 2-4 weeks. Plan ahead—testing agencies often require advance application and may have their own processing timelines." },
];

export default function TestingAccommodationsPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="Testing Accommodations"
        subtitle="Documentation for accommodations on standardized tests, professional licensing exams, and academic settings. Thorough evaluation, clear documentation."
        primaryCta={{ text: "Schedule Consultation", href: "/schedule" }}
        secondaryCta={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
      />

      <ServicePageLayout
        sidebar={
          <>
            <QuickContactSidebar />
            <RelatedServices services={[
              { label: "Psychoeducational Evaluations", href: "/services/psychoeducational-evaluations" },
              { label: "Learning Therapy", href: "/services/learning-therapy" },
              { label: "About Dennis Saller", href: "/about" },
            ]} />
          </>
        }
      >
        <h2 className="text-2xl font-bold mb-4">Accommodations Documentation</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          Many students and adults with learning disabilities, ADHD, and other conditions are entitled to accommodations on standardized tests and professional exams. To receive these accommodations, testing agencies typically require current documentation from a qualified professional.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          We provide comprehensive psychoeducational evaluations designed to meet the documentation requirements of major testing agencies. Our reports clearly document the disability, explain how it affects testing performance, and support the need for specific accommodations.
        </p>

        <h2 className="text-2xl font-bold mb-6">Tests and Exams We Support</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-3">College Entrance Exams</h3>
            <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>SAT (College Board)</li>
              <li>ACT</li>
              <li>AP Exams</li>
            </ul>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-3">Graduate and Professional School</h3>
            <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>GRE</li>
              <li>GMAT</li>
              <li>LSAT</li>
              <li>MCAT</li>
            </ul>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-3">Professional Licensing</h3>
            <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>Bar Exam</li>
              <li>Medical Boards (USMLE, COMLEX)</li>
              <li>CPA Exam</li>
              <li>Other professional licensing exams</li>
            </ul>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-3">Academic Accommodations</h3>
            <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>College and university disability services</li>
              <li>Graduate school accommodations</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">What the Evaluation Includes</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          An accommodations evaluation typically includes assessment of cognitive abilities, academic achievement, and relevant processing areas. The specific tests administered depend on the documentation requirements and the nature of the disability being documented.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          The written report documents the disability, provides the diagnostic basis, explains the functional limitations, and clearly connects these to the need for specific accommodations. Reports are designed to meet the requirements of testing agencies and include the information they look for in making accommodation decisions.
        </p>

        <h2 className="text-2xl font-bold mb-4">Important Considerations</h2>
        <ul className="list-disc pl-5 text-[var(--muted)] space-y-3">
          <li><strong className="text-[var(--text)]">Plan ahead:</strong> Testing agencies have their own timelines. Apply for accommodations well before your intended test date.</li>
          <li><strong className="text-[var(--text)]">Check requirements:</strong> Different agencies have different documentation requirements. We can help you understand what&apos;s needed.</li>
          <li><strong className="text-[var(--text)]">History matters:</strong> Agencies often look for a documented history of the condition, not just current testing. Gather relevant records.</li>
          <li><strong className="text-[var(--text)]">No guarantees:</strong> We provide thorough documentation, but the accommodation decision is made by the testing agency.</li>
        </ul>
      </ServicePageLayout>

      <FAQSection title="Common Questions" items={faqs} />

      <CTASection
        headline="Need accommodations documentation?"
        subtext="Schedule a consultation to discuss your situation, understand the requirements, and plan your evaluation."
        primaryButton={{ text: "Schedule Consultation", href: "/schedule" }}
        secondaryButton={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
      />
    </>
  );
}
