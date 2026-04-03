import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RebLearn",
  url: "https://www.reblearn.com",
  email: "dennis@reblearn.com",
  telephone: "+1-669-248-6602",
  areaServed: "California",
  description:
    "Psychoeducational evaluations for dyslexia, ADHD, IEP/504 supports, and Independent Educational Evaluations (IEEs).",
  provider: {
    "@type": "Person",
    name: "Dennis Saller",
    jobTitle: "Licensed Educational Psychologist (LEP #3219)",
  },
};

export const metadata: Metadata = {
  title: "Psychoeducational Evaluation Consult | Dennis Saller, LEP",
  description:
    "Start with a psychoeducational evaluation consult for dyslexia, dysgraphia, ADHD, and IEP/504 support. Dennis Saller, LEP #3219 serving California and the Bay Area.",
  alternates: { canonical: "/psychoeducational-evaluation" },
  openGraph: {
    title: "Psychoeducational Evaluation Consult | Dennis Saller, LEP",
    description:
      "Start with a psychoeducational evaluation consult for dyslexia, dysgraphia, ADHD, and IEP/504 support in California and the Bay Area.",
    type: "website",
    url: "https://www.reblearn.com/psychoeducational-evaluation",
  },
};

export default function PsychoeducationalEvaluationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="header">
        <div className="container">
          <div className="kicker">RebLearn • Psychoeducational Evaluations</div>
          <div className="lead-id">Dennis Saller, LEP #3219</div>
          <h1>Psychoeducational evaluation consult for learning differences.</h1>
          <p className="subhead">
            Focused guidance on dyslexia, dysgraphia, ADHD, IEP/504 supports,
            and IEE eligibility for California and Bay Area families.
          </p>
          <div className="ctaRow">
            <a
              className="btn primary"
              href="mailto:dennis@reblearn.com?subject=Consultation%20Request"
            >
              Book a Consultation
            </a>
            <a className="btn secondary" href="tel:+16692486602">
              Call/Text: 669‑248‑6602
            </a>
          </div>
          <div className="trust">
            <span className="pill">26+ years</span>
            <span className="pill">1,000+ evaluations</span>
            <span className="pill">LEP #3219</span>
            <span className="pill">California / Bay Area</span>
            <span className="pill">Dyslexia • Dysgraphia • ADHD</span>
          </div>
        </div>
      </header>
      <main className="container">
        <h2>Good fit for</h2>
        <ul>
          <li>IEP/504 questions: eligibility, accommodations, services</li>
          <li>
            Suspected dyslexia/dysgraphia: reading, spelling, writing output
          </li>
          <li>
            Attention/executive functioning concerns consistent with ADHD
            patterns
          </li>
          <li>IEE requests (district-funded) with authorization</li>
        </ul>

        <h2>What happens next</h2>
        <ol>
          <li>
            <strong>Book a consultation</strong>
          </li>
          <li>
            <strong>Intake</strong> + records request
          </li>
          <li>
            <strong>Testing</strong> scheduled promptly
          </li>
          <li>
            <strong>Report + results meeting</strong> with a clear action plan
          </li>
        </ol>

        <h2>FAQ</h2>
        <div className="faq">
          <details>
            <summary>Is this therapy?</summary>
            <div className="small">
              This pathway is evaluation-first: clarify needs, document them,
              and build a practical plan.
            </div>
          </details>
          <details>
            <summary>How do we start?</summary>
            <div className="small">
              Email{" "}
              <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a> or
              call/text{" "}
              <a href="tel:+16692486602">669‑248‑6602</a>.
            </div>
          </details>
        </div>

        <section className="strip">
          <h2>Who this is for</h2>
          <ul>
            <li>
              Families seeking clarity on dyslexia, dysgraphia, ADHD, or
              executive functioning.
            </li>
            <li>Parents preparing for IEP/504 meetings or considering an IEE.</li>
            <li>
              Schools and districts needing a fast, defensible evaluation
              pathway.
            </li>
          </ul>
          <h2>What to expect</h2>
          <ul>
            <li>Brief consult to confirm fit and scope.</li>
            <li>Records review and streamlined intake.</li>
            <li>Testing scheduled promptly with clear next steps.</li>
          </ul>
          <div className="ctaRow">
            <a
              className="btn primary"
              href="mailto:dennis@reblearn.com?subject=Consultation%20Request"
            >
              Book a Consultation
            </a>
            <a className="btn secondary" href="tel:+16692486602">
              Call/Text: 669‑248‑6602
            </a>
          </div>
        </section>

        <section className="strip" data-section-name="Contact">
          <h2>Contact Dennis</h2>
          <p className="small">
            Fast response for consultation requests, IEE questions, and
            district partnerships.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              Email:{" "}
              <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a>
            </div>
            <div className="contact-item">
              Phone/Text:{" "}
              <a href="tel:+16692486602">669‑248‑6602</a>
            </div>
          </div>
        </section>

        <div className="note">
          <strong>Quick start:</strong> email{" "}
          <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a> or
          call/text <a href="tel:+16692486602">669‑248‑6602</a>.{" "}
          <Link href="/">← Home</Link>
        </div>
        <footer className="footer">© 2026 RebLearn.</footer>
      </main>
    </>
  );
}
