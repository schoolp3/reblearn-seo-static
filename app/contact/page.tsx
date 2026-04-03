import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | RebLearn",
  description:
    "Contact Dennis Saller, LEP for consultation requests, IEE questions, accommodations testing, and district partnerships.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="container">
      <header className="header" style={{ margin: "-28px -18px 24px" }}>
        <div className="container">
          <div className="kicker">RebLearn</div>
          <h1>Contact &amp; scheduling</h1>
          <p className="subhead">
            Scheduling moves forward through consultation—reach out by email or
            phone/text.
          </p>
        </div>
      </header>

      <section className="strip" data-section-name="Contact">
        <h2>Reach Dennis</h2>
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
        <div className="contact-grid">
          <div className="contact-item">
            Email: <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a>
          </div>
          <div className="contact-item">
            Phone/Text: <a href="tel:+16692486602">669‑248‑6602</a>
          </div>
        </div>
      </section>

      <p className="small">
        <Link href="/services">Services</Link> · <Link href="/">Home</Link>
      </p>
      <footer className="footer">© 2026 RebLearn.</footer>
    </main>
  );
}
