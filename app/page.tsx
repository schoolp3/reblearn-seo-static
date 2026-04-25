import Link from "next/link";
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

      <section className="services-section">
        <div className="section-container">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Evaluation-focused support for families, schools, and districts. Whether you need
            answers about learning difficulties, accommodations documentation, or district
            assessment capacity, we can help.
          </p>

          <div className="services-grid">
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

      <section className="about-strip">
        <div className="strip-container">
          <div className="about-content">
            <div className="headshot" aria-hidden="true" />
            <div className="about-text">
              <h2>Meet Dennis Saller, LEP</h2>
              <p>
                Dennis Saller is a California Licensed Educational Psychologist with over 26 years
                of experience conducting psychoeducational evaluations. He has completed more than
                1,000 evaluations for students with learning differences, attention difficulties,
                reading and writing challenges, and other school-related concerns.
              </p>
              <p>
                Through RebLearn, Dennis helps families understand what is happening with their
                child's learning and provides clear, practical recommendations—not vague labels or
                generic guidance.
              </p>
              <div className="about-cta">
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

      <style jsx>{`
        .services-section {
          padding: 60px 0;
        }
        .section-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section-title {
          font-size: 32px;
          margin: 0 0 12px;
        }
        .section-subtitle {
          font-size: 17px;
          color: var(--muted);
          max-width: 640px;
          line-height: 1.6;
          margin: 0 0 32px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .about-strip {
          background: var(--card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 48px 0;
        }
        .strip-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .about-content {
          display: flex;
          gap: 32px;
          align-items: flex-start;
        }
        .headshot {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
          border: 3px solid #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          flex-shrink: 0;
        }
        .about-text h2 {
          font-size: 24px;
          margin: 0 0 16px;
        }
        .about-text p {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 12px;
        }
        .about-cta {
          margin-top: 20px;
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .about-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .about-cta {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
