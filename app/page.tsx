import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RebLearn",
  url: "https://www.reblearn.com",
  email: "dennis@reblearn.com",
  telephone: "+1-669-248-6602",
  areaServed: "California",
  description:
    "Psychoeducational evaluations, learning therapy, and Independent Educational Evaluations (IEEs) for families and schools in California.",
  provider: {
    "@type": "Person",
    name: "Dennis Saller",
    jobTitle: "Licensed Educational Psychologist (LEP #3219)",
  },
};

const services = [
  {
    title: "Psychoeducational Evaluations",
    description:
      "Comprehensive evaluations to understand learning, attention, and academic difficulties. Clear findings and practical recommendations for next steps.",
    href: "/services/psychoeducational-evaluations",
    linkText: "Learn about evaluations",
  },
  {
    title: "Independent Educational Evaluations (IEE)",
    description:
      "Thorough, experienced outside evaluations for families seeking an independent perspective on their child's educational needs.",
    href: "/services/iee",
    linkText: "IEE overview",
  },
  {
    title: "Learning Therapy",
    description:
      "Targeted support for reading, writing, spelling, and executive functioning based on evaluation findings and research-based methods.",
    href: "/services/learning-therapy",
    linkText: "Explore learning therapy",
  },
  {
    title: "Testing Accommodations",
    description:
      "Documentation for SAT, ACT, GRE, MCAT, Bar exam, and professional licensing accommodations with thorough evaluation support.",
    href: "/services/testing-accommodations",
    linkText: "Learn about accommodations",
  },
  {
    title: "District Contracting",
    description:
      "Experienced psychoeducational evaluation services for school districts needing reliable assessment capacity and timely case completion.",
    href: "/services/district-contracting",
    linkText: "District services",
  },
  {
    title: "Specialized Assessment",
    description:
      "Focused evaluation for dyslexia, dysgraphia, dyscalculia, ADHD, and executive functioning within a comprehensive assessment framework.",
    href: "mailto:dennis@reblearn.com?subject=Specialized%20Assessment",
    linkText: "Ask about assessment",
  },
];

const faqs = [
  {
    question: "What kinds of learning difficulties do you evaluate?",
    answer:
      "We evaluate a wide range of learning differences including dyslexia, dysgraphia, dyscalculia, ADHD, executive functioning challenges, reading and writing difficulties, and other factors affecting school performance. Each evaluation is tailored to answer the specific questions families and schools need addressed.",
  },
  {
    question: "How is a psychoeducational evaluation different from school testing?",
    answer:
      "A private psychoeducational evaluation typically provides a more comprehensive picture of a student's cognitive, academic, and processing abilities. While school evaluations focus on eligibility for services, private evaluations can explore questions in greater depth and provide detailed recommendations for intervention and support.",
  },
  {
    question: "What is an Independent Educational Evaluation (IEE)?",
    answer:
      "An IEE is an evaluation conducted by a qualified professional outside the school district. Parents may request an IEE when they disagree with the school's evaluation. In appropriate situations, the district may fund the evaluation.",
  },
  {
    question: "How long does the evaluation process take?",
    answer:
      "Most evaluations are completed within 2-4 weeks from intake to final report. Testing sessions typically span 1-2 visits depending on the scope of the evaluation. We prioritize timely completion while ensuring thorough assessment.",
  },
  {
    question: "Do you work with adults seeking testing accommodations?",
    answer:
      "Yes. We provide evaluations for adults seeking documentation for standardized tests (SAT, GRE, MCAT, LSAT), professional licensing exams (Bar, medical boards), and college or graduate school accommodations.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        kicker="Dennis Saller, LEP #3219 · Licensed Educational Psychologist"
        title="Understand why your student is struggling—and what to do next."
        subtitle="Psychoeducational evaluations, Independent Educational Evaluations (IEEs), and learning therapy for California families and schools. Clear findings, research-based recommendations, and practical next steps."
        primaryCta={{
          text: "Schedule a Consultation",
          href: "/schedule",
        }}
        secondaryCta={{
          text: "Explore Services",
          href: "/services",
        }}
        showContact
        trustBadges={[
          "Immediate Availability",
          "26+ Years Experience",
          "1,000+ Evaluations",
          "California Statewide",
        ]}
      />

      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-3">Services</h2>
          <p className="text-base text-[var(--muted)] max-w-[640px] leading-relaxed mb-8">
            Evaluation-focused support for families, schools, and districts. Whether you need
            answers about learning difficulties, accommodations documentation, or district
            assessment capacity, we can help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      <section className="bg-[var(--card)] border-t border-b border-[var(--border)] py-12">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-white shadow-lg flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/dennis-saller.jpg"
                alt="Dennis Saller, Licensed Educational Psychologist"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Meet Dennis Saller, LEP</h2>
              <p className="text-[15px] text-[var(--muted)] leading-relaxed mb-3">
                Dennis Saller is a California Licensed Educational Psychologist with over 26 years
                of experience conducting psychoeducational evaluations. He has completed more than
                1,000 evaluations for students with learning differences, attention difficulties,
                reading and writing challenges, and other school-related concerns.
              </p>
              <p className="text-[15px] text-[var(--muted)] leading-relaxed mb-5">
                Through RebLearn, Dennis helps families understand what is happening with their
                child&apos;s learning and provides clear, practical recommendations—not vague labels or
                generic guidance.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/about" className="btn secondary">
                  About Dennis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to get answers?"
        subtext="Schedule a consultation to discuss your situation. We'll help you understand whether an evaluation makes sense and what to expect."
        primaryButton={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
        secondaryButton={{
          text: "Call 669-248-6602",
          href: "tel:+16692486602",
        }}
        variant="dark"
      />

      <FAQSection items={faqs} />
    </>
  );
}
