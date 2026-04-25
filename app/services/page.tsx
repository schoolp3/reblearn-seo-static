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

      <section className="services-section">
        <div className="services-container">
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

      <section className="process-section">
        <div className="process-container">
          <h2>How We Work</h2>
          <p className="process-intro">
            The first step is always a consultation to understand your situation and determine
            whether our services are a good fit. We don't believe in one-size-fits-all
            evaluations—each case is approached based on the specific questions that need to be
            answered.
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>
                We discuss your concerns, review relevant history, and determine whether an
                evaluation or other service makes sense for your situation.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Intake and Planning</h3>
              <p>
                We gather background information, review records, and design an evaluation approach
                tailored to answer your specific questions.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Assessment</h3>
              <p>
                Testing is scheduled promptly and conducted in a comfortable, supportive
                environment. Most evaluations span 1-2 sessions.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Results and Recommendations</h3>
              <p>
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

      <style jsx>{`
        .services-section {
          padding: 60px 0;
        }
        .services-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .process-section {
          background: var(--card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 60px 0;
        }
        .process-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .process-section h2 {
          font-size: 28px;
          margin: 0 0 16px;
          text-align: center;
        }
        .process-intro {
          font-size: 16px;
          color: var(--muted);
          text-align: center;
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .process-step {
          text-align: center;
        }
        .step-number {
          width: 48px;
          height: 48px;
          background: var(--brand);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          margin: 0 auto 16px;
        }
        .process-step h3 {
          font-size: 16px;
          margin: 0 0 8px;
        }
        .process-step p {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 800px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .process-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .process-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
