import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schedule a Consultation | RebLearn",
  description:
    "Schedule a consultation with Dennis Saller, LEP to discuss psychoeducational evaluation, IEE, learning therapy, or other services.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[700px] mx-auto px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Schedule a Consultation
        </h1>
        
        <p className="text-lg text-[var(--muted)] leading-relaxed mb-12 max-w-[600px] mx-auto">
          The first step is a brief conversation to understand the concern, determine whether 
          RebLearn is a good fit, and identify the most appropriate next step.
        </p>

        <div className="flex flex-col gap-4 max-w-[400px] mx-auto mb-12">
          <a
            href="#"
            className="btn primary text-base py-4 px-8 rounded-xl"
          >
            Book Online
          </a>
          
          <a
            href="tel:+16692486602"
            className="btn secondary text-base py-4 px-8 rounded-xl"
          >
            Call or Text 669-248-6602
          </a>
          
          <a
            href="mailto:dennis@reblearn.com?subject=Consultation%20Request"
            className="btn secondary text-base py-4 px-8 rounded-xl"
          >
            Email dennis@reblearn.com
          </a>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 text-left max-w-[500px] mx-auto">
          <h2 className="text-base font-semibold mb-3">
            Requesting an Independent Educational Evaluation?
          </h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Please include the district name, student age/grade, and whether you already 
            have a written district response.
          </p>
        </div>

        <p className="mt-12 text-sm text-[var(--muted)]">
          Not sure where to start?{" "}
          <Link href="/contact" className="text-[var(--brand)] font-medium hover:underline">
            Contact us
          </Link>{" "}
          or{" "}
          <Link href="/services" className="text-[var(--brand)] font-medium hover:underline">
            view our services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
