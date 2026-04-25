import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { ServicePageLayout, SidebarCard, RelatedServices } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "District Contracting",
  description:
    "Psychoeducational evaluation services for California school districts. Experienced, reliable assessment capacity with timely case completion. Dennis Saller, LEP #3219.",
  alternates: { canonical: "/services/district-contracting" },
};

export default function DistrictContractingPage() {
  return (
    <>
      <Hero
        kicker="RebLearn Services"
        title="District Contracting"
        subtitle="Experienced psychoeducational evaluation capacity for California school districts. Reliable assessment services, clear reporting, and timely case completion."
        primaryCta={{ text: "District Inquiry", href: "mailto:dennis@reblearn.com?subject=District%20Contracting" }}
        secondaryCta={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
      />

      <ServicePageLayout
        sidebar={
          <>
            <SidebarCard title="District Inquiry" highlight>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Ready to discuss contracting? Reach out for a conversation about your district&apos;s needs.
              </p>
              <a href="mailto:dennis@reblearn.com?subject=District%20Contracting" className="btn bg-white text-[#0f172a] w-full justify-center mb-4 hover:bg-gray-100">
                Email District Inquiry
              </a>
              <p className="text-sm">
                <strong>Phone/Text:</strong><br />
                <a href="tel:+16692486602" className="text-blue-300">669-248-6602</a>
              </p>
            </SidebarCard>
            <RelatedServices services={[
              { label: "Psychoeducational Evaluations", href: "/services/psychoeducational-evaluations" },
              { label: "Independent Educational Evaluations", href: "/services/iee" },
              { label: "About Dennis Saller", href: "/about" },
            ]} />
          </>
        }
      >
        <h2 className="text-2xl font-bold mb-4">Evaluation Support for Districts</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          School districts sometimes need additional psychoeducational evaluation capacity. Whether you&apos;re facing a temporary staffing shortage, a backlog of cases, or need specialized assessment support, RebLearn can help.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          With over 26 years of experience in school-based and private psychoeducational assessment, Dennis Saller provides reliable, experienced evaluation services that integrate smoothly with district workflows.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <ul className="list-disc pl-5 text-[var(--muted)] mb-8 space-y-3">
          <li><strong className="text-[var(--text)]">Psychoeducational evaluations</strong> — Full assessments for initial evaluations, triennial reviews, and other district needs</li>
          <li><strong className="text-[var(--text)]">Specialized assessment</strong> — Evaluation for specific concerns including dyslexia, dysgraphia, attention, and executive functioning</li>
          <li><strong className="text-[var(--text)]">Clear, defensible reports</strong> — Well-organized documentation that supports IEP development and withstands scrutiny</li>
          <li><strong className="text-[var(--text)]">Timely completion</strong> — Reliable scheduling and on-time delivery</li>
          <li><strong className="text-[var(--text)]">IEP meeting participation</strong> — Available to attend meetings and discuss findings when appropriate</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Working Together</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-4">
          Capacity, scope, and contracting details are determined on a case-by-case basis. We work to understand your district&apos;s specific needs and develop an arrangement that makes sense for your situation.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          To discuss district contracting, please use the inquiry form below or email with &quot;District Contracting&quot; in the subject line so your message is routed correctly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-2">Experience</h3>
            <p className="text-sm text-[var(--muted)]">26+ years in school psychology and psychoeducational assessment</p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-2">Volume</h3>
            <p className="text-sm text-[var(--muted)]">Over 1,000 evaluations completed across school and private settings</p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-2">Credentials</h3>
            <p className="text-sm text-[var(--muted)]">Licensed Educational Psychologist (LEP #3219) and School Psychologist</p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-2">Reliability</h3>
            <p className="text-sm text-[var(--muted)]">Clear communication, consistent quality, on-time delivery</p>
          </div>
        </div>
      </ServicePageLayout>

      <CTASection
        headline="Need evaluation capacity for your district?"
        subtext="Let's discuss your needs and determine whether RebLearn is a good fit for your district."
        primaryButton={{ text: "Email District Inquiry", href: "mailto:dennis@reblearn.com?subject=District%20Contracting" }}
        secondaryButton={{ text: "Call 669-248-6602", href: "tel:+16692486602" }}
        variant="dark"
      />
    </>
  );
}
