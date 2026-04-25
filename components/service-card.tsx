import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  icon?: React.ReactNode;
}

export function ServiceCard({
  title,
  description,
  href,
  linkText = "Learn more",
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      {icon && (
        <div className="w-12 h-12 bg-[var(--brand)] rounded-xl flex items-center justify-center text-white mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 text-[var(--text)]">{title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">{description}</p>
      {href && (
        <p className="text-sm font-medium">
          {href.startsWith("mailto:") ? (
            <a href={href} className="text-[var(--brand)] no-underline hover:underline">
              {linkText} &rarr;
            </a>
          ) : (
            <Link href={href} className="text-[var(--brand)] no-underline hover:underline">
              {linkText} &rarr;
            </Link>
          )}
        </p>
      )}
    </div>
  );
}
