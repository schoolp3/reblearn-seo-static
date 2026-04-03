import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "District Contracting | RebLearn",
  description:
    "Psychoeducational evaluation support for California school districts with Dennis Saller, LEP.",
  alternates: { canonical: "/district-contracting" },
};

export default function DistrictContractingPage() {
  return (
    <main className="container">
      <header className="header" style={{ margin: "-28px -18px 24px" }}>
        <div className="container">
          <div className="kicker">RebLearn</div>
          <h1>District contracting</h1>
          <p className="subhead">
            Experienced psychoeducational evaluation capacity for districts
            prioritizing clear reporting and timely case completion.
          </p>
        </div>
      </header>

      <section className="strip">
        <p className="small">
          Capacity, scope, and contracting details are case-specific. For
          district-specific contracting questions, please use the inquiry path
          below so your message is routed correctly.
        </p>
        <div className="ctaRow">
          <a
            className="btn primary"
            href="mailto:dennis@reblearn.com?subject=District%20Contracting"
          >
            District contracting inquiry
          </a>
          <a className="btn secondary" href="tel:+16692486602">
            Call/Text: 669‑248‑6602
          </a>
        </div>
      </section>

      <p className="small">
        <Link href="/services">Services</Link> · <Link href="/">Home</Link>
      </p>
      <footer className="footer">© 2026 RebLearn.</footer>
    </main>
  );
}
