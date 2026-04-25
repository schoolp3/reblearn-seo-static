import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Meet Dennis Saller, LEP | RebLearn",
  description:
    "Dennis Saller is a California Licensed Educational Psychologist (LEP #3219) with 26+ years of experience and over 1,000 psychoeducational evaluations. Specializing in dyslexia, dysgraphia, ADHD, and executive functioning.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        kicker="About"
        title="Meet Dennis Saller, LEP"
        subtitle="Licensed Educational Psychologist helping families and schools understand learning differences and find practical solutions."
        centered
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-start">
            <div className="flex justify-center md:justify-start">
              <div className="w-[240px] h-[280px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/dennis-saller.jpg"
                  alt="Dennis Saller, Licensed Educational Psychologist"
                  width={240}
                  height={280}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-[var(--text)] leading-relaxed mb-4">
                Dennis Saller is a Licensed Educational Psychologist in California with more than 26
                years of experience in public education and well over 1,000 psychoeducational
                evaluations completed.
              </p>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
                He created RebLearn to provide clearer evaluations, sharper recommendations, and
                more useful learning support for students with dyslexia, dysgraphia, ADHD, executive
                functioning challenges, reading difficulties, writing problems, and complex learning
                profiles.
              </p>
              <p className="text-base text-[var(--muted)] leading-relaxed">
                Dennis has spent decades seeing how good insights often get buried in long reports,
                weak recommendations, and confusing school processes. RebLearn was built to do the
                opposite: identify the real learning problem, explain it clearly, and connect the
                findings to practical next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Experience */}
      <section className="py-12 bg-[var(--card)] border-t border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-4">Evaluation Experience</h2>
          <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
            Over his career, Dennis has conducted comprehensive psychoeducational evaluations across
            a wide range of settings—public school districts, charter schools, private schools, and
            independent private practice. His evaluation work includes cognitive assessments,
            academic achievement testing, processing evaluations, social-emotional screening, and
            functional behavioral analysis.
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Dennis has particular expertise in evaluating students who have been difficult to
            diagnose—cases where earlier evaluations missed something, where multiple conditions
            overlap, or where the school and family disagree about what the student needs. His
            reports are designed to answer the real questions: What is causing the struggle? What
            does the student actually need? And what should happen next?
          </p>
        </div>
      </section>

      {/* Learning and Literacy Background */}
      <section className="py-12">
        <div className="max-w-[900px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-4">Learning and Literacy Background</h2>
          <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
            Beyond assessment, Dennis has deep experience in reading intervention, structured
            literacy, and learning therapy. He has worked directly with students on decoding,
            fluency, spelling, and written expression—using evidence-based methods grounded in the
            science of reading.
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            This hands-on intervention background shapes how Dennis approaches evaluation. He
            understands what good instruction looks like, what skills need to be targeted, and how
            recommendations translate into actual classroom and tutoring practice. Evaluations from
            RebLearn are not abstract—they connect directly to what teachers, tutors, and parents
            can do.
          </p>
        </div>
      </section>

      {/* Why RebLearn Exists */}
      <section className="py-12 bg-[var(--card)] border-t border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-4">Why RebLearn Exists</h2>
          <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
            After years in public education, Dennis saw the same problems again and again: families
            waiting months for evaluations, reports filled with jargon and filler, recommendations
            that were too vague to implement, and students falling further behind while the system
            moved slowly.
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            RebLearn was created to offer something better. Evaluations that answer the right
            questions. Reports that are clear, not cluttered. Recommendations that tell you exactly
            what to do. And a process that respects families&apos; time and treats their concerns
            seriously.
          </p>
        </div>
      </section>

      {/* Working With Families */}
      <section className="py-12">
        <div className="max-w-[900px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-4">Working With Families</h2>
          <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
            Dennis works directly with families throughout the evaluation process. He listens to
            parent concerns, explains what the testing will involve, and ensures that the final
            report answers the questions that matter most to the family.
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Feedback meetings are thorough but understandable. Families leave knowing what the
            evaluation found, what it means, and what steps to take next—whether that involves
            working with the school, seeking outside tutoring, requesting accommodations, or
            pursuing further services.
          </p>
        </div>
      </section>

      {/* Working With Schools */}
      <section className="py-12 bg-[var(--card)] border-t border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-4">Working With Schools</h2>
          <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
            Dennis also partners with school districts as a contractor, providing psychoeducational
            evaluations when district staff are unavailable or when an outside perspective is
            needed. His reports meet all legal and procedural requirements for special education
            eligibility and IEP development.
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed">
            For Independent Educational Evaluations (IEEs), Dennis provides objective, thorough
            assessments that hold up at IEP meetings and, if necessary, in dispute resolution. His
            goal is always the same: accurate findings and useful recommendations that help the
            student.
          </p>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-12">
        <div className="max-w-[900px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-6">Professional Credentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-[var(--border)] rounded-xl px-6 py-5">
              <h3 className="text-base font-semibold mb-2 text-[var(--text)]">
                Licensed Educational Psychologist
              </h3>
              <p className="text-sm text-[var(--muted)]">California LEP #3219</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl px-6 py-5">
              <h3 className="text-base font-semibold mb-2 text-[var(--text)]">
                School Psychologist Credential
              </h3>
              <p className="text-sm text-[var(--muted)]">State of California</p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl px-6 py-5">
              <h3 className="text-base font-semibold mb-2 text-[var(--text)]">
                26+ Years in Education
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Public schools, private practice, and district contracting
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-xl px-6 py-5">
              <h3 className="text-base font-semibold mb-2 text-[var(--text)]">
                1,000+ Evaluations Completed
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Cognitive, academic, and processing assessments
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Areas of Expertise</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[var(--muted)]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                Psychoeducational evaluation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                Academic assessment
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                Dyslexia and reading difficulties
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                Dysgraphia and writing challenges
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                ADHD and attention concerns
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                Executive functioning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                Reading and writing intervention
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                Intervention planning
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to talk?"
        subtext="Schedule a free consultation to discuss your situation and determine whether an evaluation would be helpful."
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
