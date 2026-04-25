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
    <article className="blog-card">
      <Link href={`/blog/${slug}`} className="blog-card-link">
        <div className="blog-card-meta">
          {category && <span className="blog-category">{category}</span>}
          <span className="blog-date">{date}</span>
          {readTime && <span className="blog-read-time">{readTime}</span>}
        </div>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <span className="blog-card-cta">Read more &rarr;</span>
      </Link>

      <style jsx>{`
        .blog-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .blog-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }
        .blog-card-link {
          display: block;
          padding: 24px;
          text-decoration: none;
          color: inherit;
        }
        .blog-card-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 12px;
          font-size: 13px;
          color: var(--muted);
        }
        .blog-category {
          background: var(--brand);
          color: #fff;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .blog-card-title {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 10px;
          color: var(--text);
          line-height: 1.3;
        }
        .blog-card-excerpt {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 16px;
        }
        .blog-card-cta {
          font-size: 14px;
          font-weight: 500;
          color: var(--brand);
        }
      `}</style>
    </article>
  );
}
