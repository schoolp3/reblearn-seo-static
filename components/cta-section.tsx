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
  const sectionClasses = {
    default: "bg-[var(--card)] border border-[var(--border)]",
    dark: "bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white",
    subtle: "bg-transparent",
  };

  const headlineClasses = {
    default: "text-[var(--text)]",
    dark: "text-white",
    subtle: "text-[var(--text)]",
  };

  const subtextClasses = {
    default: "text-[var(--muted)]",
    dark: "text-white/70",
    subtle: "text-[var(--muted)]",
  };

  return (
    <section className={`py-12 px-5 text-center rounded-2xl my-10 mx-auto max-w-[1100px] ${sectionClasses[variant]}`}>
      <div className="max-w-[600px] mx-auto">
        <h2 className={`text-[clamp(24px,4vw,32px)] mb-3 leading-tight ${headlineClasses[variant]}`}>
          {headline}
        </h2>
        {subtext && (
          <p className={`text-base mb-6 leading-relaxed ${subtextClasses[variant]}`}>
            {subtext}
          </p>
        )}

        {(primaryButton || secondaryButton) && (
          <div className="flex gap-3 justify-center flex-wrap">
            {primaryButton && (
              primaryButton.href.startsWith("mailto:") || primaryButton.href.startsWith("tel:") ? (
                <a
                  className={variant === "dark" ? "btn bg-white text-[#0f172a] hover:bg-gray-100" : "btn primary"}
                  href={primaryButton.href}
                >
                  {primaryButton.text}
                </a>
              ) : (
                <Link
                  className={variant === "dark" ? "btn bg-white text-[#0f172a] hover:bg-gray-100" : "btn primary"}
                  href={primaryButton.href}
                >
                  {primaryButton.text}
                </Link>
              )
            )}
            {secondaryButton && (
              secondaryButton.href.startsWith("mailto:") || secondaryButton.href.startsWith("tel:") ? (
                <a
                  className={variant === "dark" ? "btn bg-transparent border-white/30 text-white hover:bg-white/10" : "btn secondary"}
                  href={secondaryButton.href}
                >
                  {secondaryButton.text}
                </a>
              ) : (
                <Link
                  className={variant === "dark" ? "btn bg-transparent border-white/30 text-white hover:bg-white/10" : "btn secondary"}
                  href={secondaryButton.href}
                >
                  {secondaryButton.text}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
