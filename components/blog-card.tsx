import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category?: string;
  readTime?: string;
}

export function BlogCard({
  title,
  excerpt,
  slug,
  date,
  category,
  readTime,
}: BlogCardProps) {
  return (
    <article className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <Link href={`/blog/${slug}`} className="block p-6 no-underline text-inherit">
        <div className="flex gap-3 items-center mb-3 text-xs text-[var(--muted)]">
          {category && (
            <span className="bg-[var(--brand)] text-white px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider">
              {category}
            </span>
          )}
          <span>{date}</span>
          {readTime && <span>{readTime}</span>}
        </div>
        <h3 className="text-xl font-semibold mb-2.5 text-[var(--text)] leading-tight">{title}</h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{excerpt}</p>
        <span className="text-sm font-medium text-[var(--brand)]">Read more &rarr;</span>
      </Link>
    </article>
  );
}
