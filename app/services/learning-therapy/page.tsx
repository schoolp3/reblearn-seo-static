import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { ServicePageLayout, SidebarCard, RelatedServices } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "Learning Therapy",
  description:
    "Targeted learning therapy for reading, writing, spelling, and executive functioning. Research-based intervention grounded in evaluation findings. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/learning-therapy" },
};

const faqs = [
  { question: "What is learning therapy?", answer: "Learning therapy is targeted, structured support that addresses specific learning weaknesses identified through evaluation. Unlike general tutoring, learning therapy uses evidence-based methods designed to remediate underlying skill deficits in areas like reading, writing, spelling, and executive functioning." },
  { question: "How is this different from tutoring?", answer: "Traditional tutoring typically helps students with current schoolwork. Learning therapy addresses the underlying skills that make learning difficult in the first place. For example, rather than just helping with tonight's reading assignment, learning therapy builds the decoding, fluency, and comprehension skills needed to become a better reader." },
  { question: "Do I need an evaluation first?", answer: "We strongly recommend an evaluation before beginning learning therapy. Understanding the specific pattern of strengths and weaknesses helps us target intervention appropriately and avoid wasting time and effort on approaches that don't match the student's needs." },
  { question: "What areas do you address?", answer: "We provide targeted support for reading (decoding, fluency, comprehension), writing (handwriting, spelling, written expression), and executive functioning (organization, planning, task completion). The specific focus depends on evaluation findings and the student's needs." },
  { question: "How often are sessions?", answer: "Most students benefit from 1-2 sessions per week. Consistency is more important than frequency—regular practice with a structured approach produces better outcomes than sporadic intensive sessions." },
];

export default function LearningTherapyPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="Learning Therapy"
        subtitle="Targeted, research-based support for reading, writing, spelling, and executive functioning. Grounded in evaluation findings, focused on real skill development."
        primaryCta={{ text: "Schedule Consultation", href: "/schedule" }}
        secondaryCta={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
      />

      <ServicePageLayout
        sidebar={
          <>
            <SidebarCard title="Get Started">
              <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                Interested in learning therapy? Start with a consultation to discuss your situation.
              </p>
              <div className="text-sm mb-4 space-y-3">
                <p><strong>Phone/Text:</strong><br /><a href="tel:+16692486602" className="text-[var(--brand)]">669-248-6602</a></p>
                <p><strong>Email:</strong><br /><a href="mailto:dennis@reblearn.com" className="text-[var(--brand)]">dennis@reblearn.com</a></p>
              </div>
              <Link href="/schedule" className="btn primary w-full justify-center">Schedule Consultation</Link>
            </SidebarCard>
            <SidebarCard title="Start with Evaluation">
              <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                Not sure what&apos;s causing the difficulty? An evaluation helps identify the specific issues and guides effective intervention.
              </p>
              <Link href="/services/psychoeducational-evaluations" className="btn secondary w-full justify-center">Learn About Evaluations</Link>
            </SidebarCard>
            <RelatedServices services={[
              { label: "Psychoeducational Evaluations", href: "/services/psychoeducational-evaluations" },
              { label: "Testing Accommodations", href: "/services/testing-accommodations" },
              { label: "Independent Educational Evaluations", href: "/services/iee" },
            ]} />
          </>
        }
      >
        <h2 className="text-2xl font-bold mb-4">What We Mean by Learning Therapy</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          Learning therapy is not the same as traditional tutoring. While tutoring typically helps students keep up with current schoolwork, learning therapy targets the underlying skills that make learning difficult in the first place.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          Our approach is grounded in what evaluation reveals about a student&apos;s specific learning profile. We use structured, research-based methods that have been shown to work for students with learning differences like dyslexia, dysgraphia, and executive functioning challenges.
        </p>

        <h2 className="text-2xl font-bold mb-6">Areas of Focus</h2>
        
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 mb-5">
          <h3 className="text-lg font-semibold mb-2">Reading</h3>
          <p className="text-[15px] text-[var(--muted)] mb-3">For students struggling with reading, we address the specific skills that are causing difficulty:</p>
          <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1.5">
            <li>Phonemic awareness and phonics for decoding</li>
            <li>Fluency development for reading speed and accuracy</li>
            <li>Comprehension strategies for understanding text</li>
            <li>Vocabulary and language development</li>
          </ul>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 mb-5">
          <h3 className="text-lg font-semibold mb-2">Writing and Spelling</h3>
          <p className="text-[15px] text-[var(--muted)] mb-3">Writing difficulties often involve multiple overlapping challenges. We work on:</p>
          <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1.5">
            <li>Spelling patterns and encoding skills</li>
            <li>Handwriting fluency and legibility</li>
            <li>Sentence and paragraph construction</li>
            <li>Planning and organizing written work</li>
          </ul>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 mb-8">
          <h3 className="text-lg font-semibold mb-2">Executive Functioning</h3>
          <p className="text-[15px] text-[var(--muted)] mb-3">For students who struggle with organization, planning, and follow-through, we develop practical skills and systems:</p>
          <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1.5">
            <li>Task initiation and completion strategies</li>
            <li>Organization systems that actually work</li>
            <li>Time management and planning skills</li>
            <li>Self-monitoring and self-regulation</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          Effective learning therapy starts with understanding. That&apos;s why we recommend evaluation first—not to create barriers, but to make sure we&apos;re addressing the right issues in the right way.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed">
          Once we understand a student&apos;s learning profile, we design intervention that targets their specific weaknesses using methods that have research support for their type of difficulty. Progress is monitored regularly, and the approach adjusts as the student develops skills.
        </p>
      </ServicePageLayout>

      <FAQSection title="Common Questions" items={faqs} />

      <CTASection
        headline="Ready to discuss learning support?"
        subtext="Schedule a consultation to talk about your student's needs and determine the best approach."
        primaryButton={{ text: "Schedule Consultation", href: "/schedule" }}
        secondaryButton={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
      />
    </>
  );
}
