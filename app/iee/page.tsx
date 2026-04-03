import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Independent Educational Evaluations (IEE) | RebLearn",
  description:
    "General information about Independent Educational Evaluations (IEEs) and how to start a conversation with Dennis Saller, LEP.",
  alternates: { canonical: "/iee" },
};

export default function IeePage() {
  return (
    <main className="container">
      <header className="header" style={{ margin: "-28px -18px 24px" }}>
        <div className="container">
          <div className="kicker">RebLearn</div>
          <h1>Independent Educational Evaluations (IEEs)</h1>
          <p className="subhead">
            An IEE can be part of special education processes. Whether an IEE is
            appropriate in your situation is case-specific.
          </p>
        </div>
      </header>

      <section className="note">
        <p className="small" style={{ margin: 0 }}>
          This page is general information only—not legal advice and not a
          determination of eligibility or district obligations.
        </p>
      </section>

      <section className="strip">
        <h2>How to start</h2>
        <p className="small">
          If you are exploring an IEE, email Dennis with the subject line{" "}
          <strong>IEE Inquiry</strong> so your message is easy to route.
        </p>
        <div className="ctaRow">
          <a
            className="btn primary"
            href="mailto:dennis@reblearn.com?subject=IEE%20Inquiry"
          >
            IEE inquiry email
          </a>
          <Link className="btn secondary" href="/contact">
            Contact page
          </Link>
        </div>
      </section>

      <p className="small">
        <Link href="/psychoeducational-evaluation">Evaluations overview</Link> ·{" "}
        <Link href="/">Home</Link>
      </p>
      <footer className="footer">© 2026 RebLearn.</footer>
    </main>
  );
}
