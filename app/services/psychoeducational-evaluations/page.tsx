import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { ServicePageLayout, QuickContactSidebar, RelatedServices } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Psychoeducational Evaluations",
  description:
    "Comprehensive psychoeducational evaluations for learning differences, ADHD, dyslexia, dysgraphia, and academic difficulties in California. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/psychoeducational-evaluations" },
  openGraph: {
    title: "Psychoeducational Evaluations | RebLearn",
    description:
      "Comprehensive evaluations for learning, attention, and academic difficulties. Clear findings and practical recommendations for families and schools.",
  },
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
        primaryCta={{ text: "Schedule Consultation", href: "/schedule" }}
        secondaryCta={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
        trustBadges={["26+ Years Experience", "1,000+ Evaluations", "LEP #3219", "California Statewide"]}
      />

      <ServicePageLayout
        sidebar={
          <>
            <QuickContactSidebar />
            <RelatedServices
              services={[
                { label: "Independent Educational Evaluations", href: "/services/iee" },
                { label: "Learning Therapy", href: "/services/learning-therapy" },
                { label: "Testing Accommodations", href: "/services/testing-accommodations" },
              ]}
            />
          </>
        }
      >
        <h2 className="text-2xl font-bold mb-4">What is a Psychoeducational Evaluation?</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          A psychoeducational evaluation is a comprehensive assessment that examines how a student thinks, learns, and processes information. It helps answer important questions: Why is my child struggling in school? What is getting in the way of learning? What kind of support would actually help?
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          The evaluation looks at cognitive abilities, academic skills, and specific processing areas to build a complete picture of strengths and weaknesses. The goal is not just to identify problems, but to understand the underlying patterns and provide clear, actionable recommendations.
        </p>

        <h2 className="text-2xl font-bold mb-4">When is an Evaluation Helpful?</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">A psychoeducational evaluation may be appropriate when you have concerns about:</p>
        <ul className="list-disc pl-5 text-[var(--muted)] mb-8 space-y-3">
          <li><strong className="text-[var(--text)]">Reading difficulties</strong> — slow or effortful reading, trouble with decoding, poor comprehension, suspected dyslexia</li>
          <li><strong className="text-[var(--text)]">Writing challenges</strong> — poor handwriting, difficulty organizing written work, trouble with spelling, suspected dysgraphia</li>
          <li><strong className="text-[var(--text)]">Math difficulties</strong> — trouble with number sense, math facts, problem-solving, suspected dyscalculia</li>
          <li><strong className="text-[var(--text)]">Attention and focus</strong> — difficulty sustaining attention, distractibility, impulsivity, suspected ADHD</li>
          <li><strong className="text-[var(--text)]">Executive functioning</strong> — poor organization, trouble with planning, difficulty following through on tasks</li>
          <li><strong className="text-[var(--text)]">Uneven academic performance</strong> — bright in some areas but struggling in others</li>
          <li><strong className="text-[var(--text)]">School concerns</strong> — preparing for IEP meetings, seeking a 504 plan, or needing documentation for services</li>
        </ul>

        <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
        <div className="space-y-6">
          {[
            { step: 1, title: "Consultation", desc: "We discuss your concerns, review relevant history, and confirm that evaluation is the right next step for your situation." },
            { step: 2, title: "Intake and Records Review", desc: "We gather developmental, educational, and medical history. You complete intake forms and we review relevant records." },
            { step: 3, title: "Testing Sessions", desc: "Testing is conducted over 1-2 sessions in a comfortable setting. We assess cognitive abilities, academic skills, and relevant processing areas." },
            { step: 4, title: "Report and Feedback", desc: "You receive a detailed written report with clear findings and specific recommendations. We meet to discuss results and answer questions." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="w-9 h-9 bg-[var(--brand)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="text-[17px] font-semibold mb-1.5">{item.title}</h3>
                <p className="text-[15px] text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ServicePageLayout>

      <FAQSection title="Common Questions" items={faqs} />

      <CTASection
        headline="Ready to get answers?"
        subtext="Schedule a consultation to discuss your concerns and determine whether an evaluation is the right next step."
        primaryButton={{ text: "Schedule Consultation", href: "/schedule" }}
        secondaryButton={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
        variant="dark"
      />
    </>
  );
}
