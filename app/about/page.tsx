import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dennis Saller, LEP | RebLearn",
  description:
    "California Licensed Educational Psychologist (LEP #3219) with 26+ years of psychoeducational evaluation experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="container">
      <header className="header" style={{ margin: "-28px -18px 24px" }}>
        <div className="container">
          <div className="kicker">RebLearn</div>
          <h1>About Dennis Saller, LEP</h1>
        </div>
      </header>

      <section className="strip">
        <div className="strip-header">
          <div className="headshot" aria-hidden />
          <div>
            <p className="small">
              Dennis Saller is a California Licensed Educational Psychologist
              with over 26 years of experience conducting psychoeducational
              evaluations for students with learning, attention, reading,
              writing, and other school-related difficulties. Through RebLearn,
              he provides clear evaluation, practical recommendations, and
              experienced support for families and school districts.
            </p>
            <div className="ctaRow">
              <a
                className="btn primary"
                href="mailto:dennis@reblearn.com?subject=Consultation%20Request"
              >
                Book a Consultation
              </a>
              <Link className="btn secondary" href="/services">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <p className="small">
        <Link href="/">← Home</Link>
      </p>
      <footer className="footer">© 2026 RebLearn.</footer>
    </main>
  );
}
