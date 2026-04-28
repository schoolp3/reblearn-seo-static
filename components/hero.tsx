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
    <section className="py-12 pb-10 border-b border-[var(--border)] bg-gradient-to-b from-white to-slate-50">
      <div className={`max-w-[1100px] mx-auto px-5 ${centered ? "text-center" : ""}`}>
        {kicker && (
          <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-3">
            {kicker}
          </p>
        )}
        <h1 className={`text-[clamp(32px,5vw,48px)] leading-tight mb-4 max-w-[800px] ${centered ? "mx-auto" : ""}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg text-[var(--muted)] max-w-[640px] leading-relaxed mb-6 ${centered ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className={`flex gap-3 flex-wrap mb-5 ${centered ? "justify-center" : ""}`}>
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
          <p className="text-base text-[var(--muted)] my-4">
            Questions? Call or text{" "}
            <a href="tel:+16692486602" className="font-bold text-[var(--text)]">
              669-248-6602
            </a>
          </p>
        )}

        {trustBadges && trustBadges.length > 0 && (
          <div className={`flex gap-2.5 flex-wrap mt-5 ${centered ? "justify-center" : ""}`}>
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="bg-white border border-[var(--border)] rounded-full px-3.5 py-2 text-xs text-[var(--muted)]"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
