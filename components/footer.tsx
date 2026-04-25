import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              RebLearn
            </Link>
            <p className="footer-tagline">
              Psychoeducational evaluations and learning support for California families and schools.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/services/psychoeducational-evaluations">Psychoeducational Evaluations</Link>
                </li>
                <li>
                  <Link href="/services/iee">Independent Evaluations (IEE)</Link>
                </li>
                <li>
                  <Link href="/services/learning-therapy">Learning Therapy</Link>
                </li>
                <li>
                  <Link href="/services/testing-accommodations">Testing Accommodations</Link>
                </li>
                <li>
                  <Link href="/services/district-contracting">District Contracting</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/schedule">Schedule Consultation</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="tel:+16692486602">669-248-6602</a>
                </li>
                <li>
                  <a href="mailto:dennis@reblearn.com">dennis@reblearn.com</a>
                </li>
                <li>Dennis Saller, LEP #3219</li>
                <li>California</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RebLearn. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: var(--card);
          border-top: 1px solid var(--border);
          margin-top: 60px;
        }
        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 20px 24px;
        }
        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 48px;
        }
        .footer-logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--text);
          text-decoration: none;
        }
        .footer-tagline {
          margin-top: 12px;
          font-size: 14px;
          color: var(--muted);
          max-width: 280px;
          line-height: 1.6;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .footer-column h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer-column ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-column li {
          margin-bottom: 10px;
          font-size: 14px;
          color: var(--muted);
        }
        .footer-column a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer-column a:hover {
          color: var(--brand);
        }
        .footer-bottom {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .footer-bottom p {
          font-size: 13px;
          color: var(--muted);
          margin: 0;
        }
        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
