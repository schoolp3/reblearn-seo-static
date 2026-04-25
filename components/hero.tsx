import Link from "next/link";

interface HeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  trustBadges?: string[];
  showContact?: boolean;
  centered?: boolean;
}

export function Hero({
  kicker,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustBadges,
  showContact = false,
  centered = false,
}: HeroProps) {
  return (
    <section className={`hero-section ${centered ? "centered" : ""}`}>
      <div className="hero-container">
        {kicker && <p className="hero-kicker">{kicker}</p>}
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        {(primaryCta || secondaryCta) && (
          <div className="hero-cta-row">
            {primaryCta && (
              primaryCta.href.startsWith("mailto:") || primaryCta.href.startsWith("tel:") ? (
                <a className="btn primary" href={primaryCta.href}>
                  {primaryCta.text}
                </a>
              ) : (
                <Link className="btn primary" href={primaryCta.href}>
                  {primaryCta.text}
                </Link>
              )
            )}
            {secondaryCta && (
              secondaryCta.href.startsWith("mailto:") || secondaryCta.href.startsWith("tel:") ? (
                <a className="btn secondary" href={secondaryCta.href}>
                  {secondaryCta.text}
                </a>
              ) : (
                <Link className="btn secondary" href={secondaryCta.href}>
                  {secondaryCta.text}
                </Link>
              )
            )}
          </div>
        )}

        {showContact && (
          <p className="hero-contact-line">
            Questions? Call or text{" "}
            <a href="tel:+16692486602" className="hero-phone">
              669-248-6602
            </a>
          </p>
        )}

        {trustBadges && trustBadges.length > 0 && (
          <div className="hero-trust">
            {trustBadges.map((badge) => (
              <span key={badge} className="hero-badge">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .hero-section {
          padding: 48px 0 40px;
          border-bottom: 1px solid var(--border);
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }
        .hero-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .centered .hero-container {
          text-align: center;
        }
        .hero-kicker {
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 0 0 12px;
        }
        .hero-title {
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.1;
          margin: 0 0 16px;
          max-width: 800px;
        }
        .centered .hero-title {
          margin-left: auto;
          margin-right: auto;
        }
        .hero-subtitle {
          font-size: 18px;
          color: var(--muted);
          max-width: 640px;
          line-height: 1.6;
          margin: 0 0 24px;
        }
        .centered .hero-subtitle {
          margin-left: auto;
          margin-right: auto;
        }
        .hero-cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .centered .hero-cta-row {
          justify-content: center;
        }
        .hero-contact-line {
          font-size: 16px;
          color: var(--muted);
          margin: 16px 0;
        }
        .hero-phone {
          font-weight: 700;
          color: var(--text);
        }
        .hero-trust {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .centered .hero-trust {
          justify-content: center;
        }
        .hero-badge {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 13px;
          color: var(--muted);
        }
      `}</style>
    </section>
  );
}
