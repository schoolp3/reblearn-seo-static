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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="hero">
        <div className="container">
          <div className="kicker">
            Dennis Saller, LEP #3219 • Licensed Educational Psychologist
          </div>
          <h1>
            Psychoeducational Evaluations, IEEs, and District
            Contracting—Available Now
          </h1>
          <p className="subhead">
            Serving school districts and families with experienced
            psychoeducational evaluations, timely scheduling, and clear,
            research-based recommendations.
          </p>
          <div className="ctaRow">
            <a
              className="btn primary"
              href="mailto:dennis@reblearn.com?subject=Consultation%20Request"
            >
              Book a Consultation
            </a>
            <Link className="btn secondary" href="/services">
              Explore Services
            </Link>
          </div>
          <div className="hero-contact">
            Questions first?
            <br />
            Call or text{" "}
            <a className="phone" href="tel:+16692486602">
              669-248-6602
            </a>
          </div>
          <div className="trust">
            <span className="pill">Immediate Availability</span>
            <span className="pill">IEEs &amp; District Contracting</span>
            <span className="pill">26+ Years Experience</span>
          </div>
        </div>
      </header>
      <main className="container">
        <section className="section">
          <h2>Services and specialties</h2>
          <div className="grid">
            <div className="card">
              <h3>Psychoeducational Evaluations</h3>
              <p>
                Comprehensive evaluations to identify learning, attention,
                academic, and other school-related difficulties and provide
                clear recommendations for next steps.
              </p>
              <p>
                <Link data-cta-type="service" href="/psychoeducational-evaluation">
                  Learn about evaluations →
                </Link>
              </p>
            </div>
            <div className="card">
              <h3>IEE / Independent Evaluations</h3>
              <p>
                Independent Educational Evaluations for families seeking a
                thorough, experienced, and clearly written outside evaluation.
              </p>
              <p>
                <a
                  data-cta-type="service"
                  href="mailto:dennis@reblearn.com?subject=IEE%20Inquiry"
                >
                  IEE inquiry →
                </a>
              </p>
            </div>
            <div className="card">
              <h3>District Contracting</h3>
              <p>
                Psychoeducational evaluation support for school districts
                needing experienced, reliable assessment services and timely
                case completion.
              </p>
              <p>
                <a
                  data-cta-type="service"
                  href="mailto:dennis@reblearn.com?subject=District%20Contracting"
                >
                  Discuss contracting →
                </a>
              </p>
            </div>
            <div className="card">
              <h3>Testing for Accommodations</h3>
              <p>
                Evaluations for students and adults seeking documentation for
                accommodations on standardized, professional, or licensing
                exams.
              </p>
              <p>
                <a
                  data-cta-type="service"
                  href="mailto:dennis@reblearn.com?subject=Accommodations%20Testing"
                >
                  Ask about accommodations →
                </a>
              </p>
            </div>
            <div className="card">
              <h3>Targeted Learning Support</h3>
              <p>
                Focused support informed by evaluation findings to address
                specific learning, writing, reading, attention, and academic
                weaknesses.
              </p>
              <p>
                <a
                  data-cta-type="service"
                  href="mailto:dennis@reblearn.com?subject=Targeted%20Learning%20Support"
                >
                  Discuss targeted support →
                </a>
              </p>
            </div>
            <div className="card">
              <h3>Specialized Assessment</h3>
              <p>
                Assessment for dyslexia, dysgraphia, ADHD, executive
                functioning, and related learning difficulties as part of a
                broader evaluation picture.
              </p>
              <p>
                <a
                  data-cta-type="service"
                  href="mailto:dennis@reblearn.com?subject=Specialized%20Assessment"
                >
                  Ask about assessment →
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="strip-header">
            <div className="headshot" aria-hidden />
            <div>
              <h2>Meet Dennis Saller, LEP</h2>
              <p className="small">
                Dennis Saller is a California Licensed Educational Psychologist
                with over 26 years of experience conducting psychoeducational
                evaluations for students with learning, attention, reading,
                writing, and other school-related difficulties. Through
                RebLearn, he provides clear evaluation, practical
                recommendations, and experienced support for families and
                school districts.
              </p>
              <div className="ctaRow">
                <Link className="btn secondary" href="/about">
                  About Dennis
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="strip" data-section-name="Contact">
          <h2>Contact Dennis</h2>
          <p className="small">
            Fast response for consultation requests, IEE questions, and
            district partnerships.
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

        <footer className="footer">© 2026 RebLearn.</footer>
      </main>
    </>
  );
}
