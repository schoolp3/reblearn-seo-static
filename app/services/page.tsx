import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Psychoeducational evaluations, Independent Educational Evaluations (IEEs), learning therapy, testing accommodations, and district contracting with Dennis Saller, LEP.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Psychoeducational Evaluations",
    description:
      "Comprehensive evaluations to clarify learning, attention, and academic difficulties. We assess cognitive abilities, academic skills, and processing to understand why a student is struggling and provide specific recommendations for support.",
    href: "/services/psychoeducational-evaluations",
    linkText: "Learn about evaluations",
  },
  {
    title: "Independent Educational Evaluations (IEE)",
    description:
      "When families need an outside perspective, an IEE provides thorough, independent assessment. We work with families navigating the IEE process and provide clear, defensible evaluation reports.",
    href: "/services/iee",
    linkText: "IEE overview",
  },
  {
    title: "Learning Therapy",
    description:
      "Targeted, research-based support for reading, writing, spelling, and executive functioning. Our approach is grounded in evaluation findings and uses structured, evidence-based methods to address specific weaknesses.",
    href: "/services/learning-therapy",
    linkText: "Explore learning therapy",
  },
  {
    title: "Testing Accommodations",
    description:
      "Documentation for accommodations on standardized tests and professional exams. We provide thorough evaluation and clear documentation for SAT, ACT, GRE, MCAT, LSAT, Bar exam, and other testing situations.",
    href: "/services/testing-accommodations",
    linkText: "Learn about accommodations",
  },
  {
    title: "District Contracting",
    description:
      "Experienced psychoeducational evaluation capacity for school districts. We provide reliable, timely assessment services with clear reporting and defensible findings for districts needing additional evaluation support.",
    href: "/services/district-contracting",
    linkText: "District services",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="Evaluation and support to understand learning differences"
        subtitle="Whether you need answers about why your child is struggling, documentation for accommodations, or evaluation capacity for your district, we can help. Each service starts with understanding your specific situation."
        primaryCta={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
        secondaryCta={{
          text: "Call 669-248-6602",
          href: "tel:+16692486602",
        }}
      />

      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                linkText={service.linkText}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--card)] border-t border-b border-[var(--border)] py-16">
        <div className="max-w-[900px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-4 text-center">How We Work</h2>
          <p className="text-base text-[var(--muted)] text-center max-w-[700px] mx-auto mb-10 leading-relaxed">
            The first step is always a consultation to understand your situation and determine
            whether our services are a good fit. We don&apos;t believe in one-size-fits-all
            evaluations—each case is approached based on the specific questions that need to be
            answered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--brand)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-base font-semibold mb-2">Consultation</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                We discuss your concerns, review relevant history, and determine whether an
                evaluation or other service makes sense for your situation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--brand)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-base font-semibold mb-2">Intake and Planning</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                We gather background information, review records, and design an evaluation approach
                tailored to answer your specific questions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--brand)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-base font-semibold mb-2">Assessment</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Testing is scheduled promptly and conducted in a comfortable, supportive
                environment. Most evaluations span 1-2 sessions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--brand)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-base font-semibold mb-2">Results and Recommendations</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                You receive a clear written report and a feedback meeting to discuss findings,
                answer questions, and plan next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Not sure which service you need?"
        subtext="That's okay. Schedule a consultation and we'll help you figure out the best path forward based on your situation."
        primaryButton={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
        secondaryButton={{
          text: "Contact Us",
          href: "/contact",
        }}
      />
    </>
  );
}
