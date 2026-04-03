import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | RebLearn",
  description:
    "Psychoeducational evaluations, IEEs, district contracting, accommodations testing, and targeted learning support with Dennis Saller, LEP.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="container">
      <header className="header" style={{ margin: "-28px -18px 24px" }}>
        <div className="container">
          <div className="kicker">RebLearn</div>
          <h1>Services</h1>
          <p className="subhead">
            Evaluation-first support for families and districts. Fit and scope
            are confirmed in consultation.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>Psychoeducational evaluations</h3>
            <p>
              Clarify learning, attention, and academic concerns with practical
              recommendations.
            </p>
            <p>
              <Link href="/psychoeducational-evaluation">Learn more →</Link>
            </p>
          </div>
          <div className="card">
            <h3>IEE / independent evaluations</h3>
            <p>
              Outside evaluations when an independent perspective is needed.
            </p>
            <p>
              <Link href="/iee">IEE overview →</Link>
            </p>
          </div>
          <div className="card">
            <h3>District contracting</h3>
            <p>Timely, experienced psychoeducational evaluation capacity.</p>
            <p>
              <Link href="/district-contracting">District contracting →</Link>
            </p>
          </div>
          <div className="card">
            <h3>Testing for accommodations</h3>
            <p>Documentation-oriented evaluations for exams when appropriate.</p>
            <p>
              <a href="mailto:dennis@reblearn.com?subject=Accommodations%20Testing">
                Email to discuss →
              </a>
            </p>
          </div>
          <div className="card" id="intervention">
            <h3>Targeted learning support</h3>
            <p>
              Focused support informed by evaluation findings—not a substitute
              for therapy or crisis care.
            </p>
            <p>
              <a href="mailto:dennis@reblearn.com?subject=Targeted%20Learning%20Support">
                Discuss targeted support →
              </a>
            </p>
          </div>
          <div className="card">
            <h3>Specialized assessment</h3>
            <p>
              Dyslexia, dysgraphia, ADHD-related patterns, and executive
              functioning within broader evaluation scope.
            </p>
            <p>
              <a href="mailto:dennis@reblearn.com?subject=Specialized%20Assessment">
                Ask about assessment →
              </a>
            </p>
          </div>
        </div>
      </section>

      <p className="small">
        <Link href="/">← Home</Link> · <Link href="/contact">Contact</Link>
      </p>
      <footer className="footer">© 2026 RebLearn.</footer>
    </main>
  );
}
