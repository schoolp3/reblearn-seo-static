import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services for Families, Students, and School Districts",
  description:
    "RebLearn provides psychoeducational evaluations, independent evaluations, learning therapy, district contracting, and testing documentation for students and adults in California.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Psychoeducational Evaluations",
    description:
      "Comprehensive evaluations for learning, attention, academic, cognitive processing, social-emotional, and school-related concerns.",
    whoItHelps: "Students struggling in school, families seeking answers about learning differences, and parents who want a clear understanding of their child's needs.",
    href: "/services/psychoeducational-evaluations",
    linkText: "Learn about evaluations",
  },
  {
    title: "Independent Educational Evaluations",
    description:
      "Outside evaluations for families seeking a clearer second opinion or a more detailed explanation of a student's learning needs.",
    whoItHelps: "Families who disagree with a school district evaluation, want an independent perspective, or need thorough documentation for an IEP meeting.",
    href: "/services/iee",
    linkText: "IEE overview",
  },
  {
    title: "Learning Therapy",
    description:
      "Targeted reading, spelling, writing, executive functioning, and academic support based on assessment and error patterns.",
    whoItHelps: "Students with dyslexia, dysgraphia, ADHD, or other learning differences who need structured, evidence-based intervention.",
    href: "/services/learning-therapy",
    linkText: "Explore learning therapy",
  },
  {
    title: "District Contracting",
    description:
      "Assessment support for districts needing overflow evaluations, IEEs, ERMHS, FBA/BIP, academic testing, and specialized learning disability evaluations.",
    whoItHelps: "School districts facing evaluation backlogs, needing specialized expertise, or seeking a reliable contract assessor.",
    href: "/services/district-contracting",
    linkText: "District services",
  },
  {
    title: "Testing Accommodations",
    description:
      "Documentation for students and adults seeking accommodations on standardized, college, graduate, professional, or certification exams.",
    whoItHelps: "High school students (SAT, ACT), college students, graduate school applicants (GRE, MCAT, LSAT), and professionals (Bar, CPA, medical boards).",
    href: "/services/testing-accommodations",
    linkText: "Learn about accommodations",
  },
  {
    title: "Dyslexia, Dysgraphia, and Dyscalculia Evaluations",
    description:
      "Specialized evaluations that examine written language, reading, spelling, writing, math, processing, and instructional needs.",
    whoItHelps: "Students and adults who suspect a specific learning disability in reading, writing, or math and need a definitive answer and clear recommendations.",
    href: "/services/psychoeducational-evaluations",
    linkText: "Specialized evaluation info",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="Services for Families, Students, and School Districts"
        subtitle="RebLearn provides comprehensive psychoeducational evaluations, independent evaluations, learning therapy, district contracting, and testing documentation for students and adults."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-[var(--text)]">
                  {service.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-sm text-[var(--muted)] mb-6 flex-grow">
                  <span className="font-semibold text-[var(--text)]">Who it helps:</span>{" "}
                  {service.whoItHelps}
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    href={service.href}
                    className="text-[var(--brand)] font-medium hover:underline"
                  >
                    {service.linkText} &rarr;
                  </Link>
                  <Link
                    href="/schedule"
                    className="inline-block text-center bg-[var(--brand)] text-white px-4 py-2 rounded font-medium hover:opacity-90 transition-opacity"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/images/evaluation-report.jpg"
                alt="Psychoeducational evaluation materials and assessment report on a desk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Clear Reports, Practical Recommendations</h2>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
                A good evaluation doesn&apos;t just label a problem—it explains what&apos;s happening and what to do about it. 
                Our reports are written to be clear, useful, and actionable.
              </p>
              <p className="text-base text-[var(--muted)] leading-relaxed">
                Whether you&apos;re seeking school services, accommodations, or outside support, 
                you&apos;ll leave with a clear understanding of your student&apos;s learning profile and concrete next steps.
              </p>
            </div>
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
