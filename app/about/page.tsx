import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Dennis Saller, LEP",
  description:
    "California Licensed Educational Psychologist (LEP #3219) with 26+ years of experience in psychoeducational evaluations for learning differences, ADHD, dyslexia, and more.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        kicker="About RebLearn"
        title="Dennis Saller, Licensed Educational Psychologist"
        subtitle="26+ years helping families and schools understand learning differences and find practical solutions."
        centered
      />

      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-start">
            <div className="flex justify-center md:justify-start">
              <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden border-3 border-white shadow-lg">
                <Image
                  src="/images/dennis-saller.jpg"
                  alt="Dennis Saller, Licensed Educational Psychologist"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-[22px] font-bold mb-3">Background and Experience</h2>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-3">
                Dennis Saller is a California Licensed Educational Psychologist (LEP #3219) and
                School Psychologist with more than 26 years of experience in psychoeducational
                evaluation, learning differences, and school-based consultation.
              </p>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-3">
                Over his career, Dennis has conducted well over 1,000 psychoeducational evaluations
                across school and private practice settings. His work spans public school
                evaluations, private evaluations, dyslexia and dysgraphia assessment, ADHD and
                executive functioning evaluation, accommodations testing, and consultation with
                families and schools.
              </p>

              <h2 className="text-[22px] font-bold mt-8 mb-3">Approach</h2>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-3">
                Dennis&apos;s approach is grounded in careful assessment, cognitive and academic
                analysis, and practical next steps that parents, schools, and adult clients can
                actually use. RebLearn emphasizes clear evaluation findings and specific
                recommendations—not vague labels or generic guidance.
              </p>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-3">
                When families come to RebLearn, the goal is to answer the questions that matter:
                Why is my child struggling? What is getting in the way? And what should we do
                about it?
              </p>

              <h2 className="text-[22px] font-bold mt-8 mb-3">Areas of Focus</h2>
              <ul className="pl-5 text-[var(--muted)] leading-loose list-disc">
                <li>Dyslexia and reading difficulties</li>
                <li>Dysgraphia and writing challenges</li>
                <li>Dyscalculia and math difficulties</li>
                <li>ADHD and attention concerns</li>
                <li>Executive functioning</li>
                <li>Psychoeducational evaluation</li>
                <li>Independent Educational Evaluations (IEEs)</li>
                <li>Testing accommodations documentation</li>
                <li>District contracting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--card)] border-t border-b border-[var(--border)] py-12">
        <div className="max-w-[1000px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-6 text-center">Credentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-[var(--border)] rounded-xl px-5 py-6 text-center">
              <h3 className="text-[15px] font-semibold mb-2 text-[var(--text)]">Licensed Educational Psychologist</h3>
              <p className="text-sm text-[var(--muted)]">California License #3219</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl px-5 py-6 text-center">
              <h3 className="text-[15px] font-semibold mb-2 text-[var(--text)]">School Psychologist</h3>
              <p className="text-sm text-[var(--muted)]">California Credential</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl px-5 py-6 text-center">
              <h3 className="text-[15px] font-semibold mb-2 text-[var(--text)]">Experience</h3>
              <p className="text-sm text-[var(--muted)]">26+ years in psychoeducational assessment</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl px-5 py-6 text-center">
              <h3 className="text-[15px] font-semibold mb-2 text-[var(--text)]">Evaluations</h3>
              <p className="text-sm text-[var(--muted)]">1,000+ completed assessments</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to talk?"
        subtext="Schedule a consultation to discuss your situation and determine whether an evaluation would be helpful."
        primaryButton={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
        secondaryButton={{
          text: "View Services",
          href: "/services",
        }}
      />
    </>
  );
}
