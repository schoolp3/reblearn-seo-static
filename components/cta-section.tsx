import Link from "next/link";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: "default" | "dark" | "subtle";
}

export function CTASection({
  headline,
  subtext,
  primaryButton,
  secondaryButton,
  variant = "default",
}: CTASectionProps) {
  const variantClass = `cta-${variant}`;

  return (
    <section className={`cta-section ${variantClass}`}>
      <div className="cta-container">
        <h2 className="cta-headline">{headline}</h2>
        {subtext && <p className="cta-subtext">{subtext}</p>}

        {(primaryButton || secondaryButton) && (
          <div className="cta-buttons">
            {primaryButton && (
              primaryButton.href.startsWith("mailto:") || primaryButton.href.startsWith("tel:") ? (
                <a className={`btn ${variant === "dark" ? "primary-light" : "primary"}`} href={primaryButton.href}>
                  {primaryButton.text}
                </a>
              ) : (
                <Link className={`btn ${variant === "dark" ? "primary-light" : "primary"}`} href={primaryButton.href}>
                  {primaryButton.text}
                </Link>
              )
            )}
            {secondaryButton && (
              secondaryButton.href.startsWith("mailto:") || secondaryButton.href.startsWith("tel:") ? (
                <a className={`btn ${variant === "dark" ? "secondary-light" : "secondary"}`} href={secondaryButton.href}>
                  {secondaryButton.text}
                </a>
              ) : (
                <Link className={`btn ${variant === "dark" ? "secondary-light" : "secondary"}`} href={secondaryButton.href}>
                  {secondaryButton.text}
                </Link>
              )
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .cta-section {
          padding: 48px 20px;
          text-align: center;
          border-radius: 20px;
          margin: 40px auto;
          max-width: 1100px;
        }
        .cta-default {
          background: var(--card);
          border: 1px solid var(--border);
        }
        .cta-dark {
          background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%);
          color: #fff;
        }
        .cta-subtle {
          background: transparent;
          border: none;
        }
        .cta-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .cta-headline {
          font-size: clamp(24px, 4vw, 32px);
          margin: 0 0 12px;
          line-height: 1.2;
        }
        .cta-dark .cta-headline {
          color: #fff;
        }
        .cta-subtext {
          font-size: 16px;
          color: var(--muted);
          margin: 0 0 24px;
          line-height: 1.6;
        }
        .cta-dark .cta-subtext {
          color: rgba(255, 255, 255, 0.7);
        }
        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        :global(.btn.primary-light) {
          background: #fff;
          color: #0f172a;
        }
        :global(.btn.secondary-light) {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.3);
          color: #fff;
        }
        :global(.btn.secondary-light:hover) {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}
