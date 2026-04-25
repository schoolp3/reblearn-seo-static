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
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      {href && (
        <p className="service-link">
          {href.startsWith("mailto:") ? (
            <a href={href}>{linkText} &rarr;</a>
          ) : (
            <Link href={href}>{linkText} &rarr;</Link>
          )}
        </p>
      )}

      <style jsx>{`
        .service-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .service-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }
        .service-icon {
          width: 48px;
          height: 48px;
          background: var(--brand);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin-bottom: 16px;
        }
        .service-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 8px;
          color: var(--text);
        }
        .service-description {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 12px;
        }
        .service-link {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
        }
        .service-link a {
          color: var(--brand);
          text-decoration: none;
        }
        .service-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
