import Link from "next/link";

interface ServicePageLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  notice?: string;
}

export function ServicePageLayout({ children, sidebar, notice }: ServicePageLayoutProps) {
  return (
    <section className="py-16">
      <div className="max-w-[1100px] mx-auto px-5">
        {notice && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-10">
            <p className="text-sm text-blue-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: notice }} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div className="service-content">{children}</div>
          {sidebar && <aside className="flex flex-col gap-6">{sidebar}</aside>}
        </div>
      </div>
    </section>
  );
}

interface SidebarCardProps {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}

export function SidebarCard({ title, children, highlight = false }: SidebarCardProps) {
  if (highlight) {
    return (
      <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
        {children}
      </div>
    );
  }
  
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}

interface RelatedServicesProps {
  services: { label: string; href: string }[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <SidebarCard title="Related Services">
      <ul className="divide-y divide-[var(--border)]">
        {services.map((service) => (
          <li key={service.href} className="py-2.5 first:pt-0 last:pb-0">
            <Link href={service.href} className="text-sm text-[var(--text)] no-underline hover:text-[var(--brand)]">
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </SidebarCard>
  );
}

interface QuickContactSidebarProps {
  ctaText?: string;
  ctaHref?: string;
}

export function QuickContactSidebar({ ctaText = "Schedule Consultation", ctaHref = "/schedule" }: QuickContactSidebarProps) {
  return (
    <SidebarCard title="Quick Contact">
      <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
        Ready to discuss your situation? Reach out to schedule a consultation.
      </p>
      <div className="text-sm mb-4 space-y-3">
        <p>
          <strong>Phone/Text:</strong><br />
          <a href="tel:+16692486602" className="text-[var(--brand)]">669-248-6602</a>
        </p>
        <p>
          <strong>Email:</strong><br />
          <a href="mailto:dennis@reblearn.com" className="text-[var(--brand)]">dennis@reblearn.com</a>
        </p>
      </div>
      <Link href={ctaHref} className="btn primary w-full justify-center">
        {ctaText}
      </Link>
    </SidebarCard>
  );
}
