import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`}>
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed === "") {
        flushList();
        return;
      }

      // Headers
      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(<h2 key={index}>{trimmed.slice(3)}</h2>);
        return;
      }

      if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(<h3 key={index}>{trimmed.slice(4)}</h3>);
        return;
      }

      // List items
      if (trimmed.startsWith("- ")) {
        inList = true;
        // Handle bold text in list items
        const itemText = trimmed.slice(2).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
        listItems.push(itemText);
        return;
      }

      // Regular paragraph
      flushList();
      // Handle bold text
      const processed = trimmed.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p key={index} dangerouslySetInnerHTML={{ __html: processed }} />
      );
    });

    flushList();
    return elements;
  };

  return (
    <>
      <article className="blog-post">
        <header className="post-header">
          <div className="header-container">
            <Link href="/blog" className="back-link">
              &larr; Back to Blog
            </Link>
            <div className="post-meta">
              <span className="post-category">{post.category}</span>
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
          </div>
        </header>

        <div className="post-content">
          <div className="content-container">{renderContent(post.content)}</div>
        </div>

        <div className="post-footer">
          <div className="footer-container">
            <div className="author-box">
              <div className="author-avatar" aria-hidden="true" />
              <div className="author-info">
                <p className="author-name">Dennis Saller, LEP</p>
                <p className="author-bio">
                  Licensed Educational Psychologist with 26+ years of experience in
                  psychoeducational evaluation and learning differences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        headline="Have questions about your child's learning?"
        subtext="Schedule a consultation to discuss your concerns and determine whether an evaluation would be helpful."
        primaryButton={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
        secondaryButton={{
          text: "View Services",
          href: "/services",
        }}
      />

      <style jsx>{`
        .blog-post {
          padding-bottom: 40px;
        }
        .post-header {
          padding: 48px 0 40px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border-bottom: 1px solid var(--border);
        }
        .header-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .back-link {
          display: inline-block;
          font-size: 14px;
          color: var(--muted);
          text-decoration: none;
          margin-bottom: 24px;
        }
        .back-link:hover {
          color: var(--brand);
        }
        .post-meta {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 16px;
          font-size: 13px;
          color: var(--muted);
        }
        .post-category {
          background: var(--brand);
          color: #fff;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        h1 {
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .post-excerpt {
          font-size: 18px;
          color: var(--muted);
          line-height: 1.6;
          margin: 0;
        }
        .post-content {
          padding: 48px 0;
        }
        .content-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .content-container :global(h2) {
          font-size: 24px;
          margin: 40px 0 16px;
        }
        .content-container :global(h3) {
          font-size: 18px;
          margin: 28px 0 12px;
        }
        .content-container :global(p) {
          font-size: 17px;
          line-height: 1.8;
          color: var(--muted);
          margin: 0 0 20px;
        }
        .content-container :global(ul) {
          margin: 0 0 24px;
          padding-left: 24px;
        }
        .content-container :global(li) {
          font-size: 16px;
          line-height: 1.7;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .content-container :global(strong) {
          color: var(--text);
          font-weight: 600;
        }
        .post-footer {
          border-top: 1px solid var(--border);
          padding-top: 40px;
        }
        .footer-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .author-box {
          display: flex;
          gap: 20px;
          align-items: center;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
        }
        .author-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
          flex-shrink: 0;
        }
        .author-name {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 4px;
          color: var(--text);
        }
        .author-bio {
          font-size: 14px;
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .author-box {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
