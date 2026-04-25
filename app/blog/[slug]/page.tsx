import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts";

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
    description: post.description,
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

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="mb-6 pl-6">
            {listItems.map((item, i) => (
              <li key={i} className="text-base leading-relaxed text-[var(--muted)] mb-2.5" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
        listItems = [];
      }
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
        elements.push(<h2 key={index} className="text-2xl font-bold mt-10 mb-4">{trimmed.slice(3)}</h2>);
        return;
      }

      if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(<h3 key={index} className="text-lg font-semibold mt-7 mb-3">{trimmed.slice(4)}</h3>);
        return;
      }

      // List items
      if (trimmed.startsWith("- ")) {
        const itemText = trimmed.slice(2).replace(/\*\*([^*]+)\*\*/g, "<strong class='text-[var(--text)] font-semibold'>$1</strong>");
        listItems.push(itemText);
        return;
      }

      // Regular paragraph
      flushList();
      const processed = trimmed.replace(/\*\*([^*]+)\*\*/g, "<strong class='text-[var(--text)] font-semibold'>$1</strong>");
      elements.push(
        <p key={index} className="text-[17px] leading-loose text-[var(--muted)] mb-5" dangerouslySetInnerHTML={{ __html: processed }} />
      );
    });

    flushList();
    return elements;
  };

  return (
    <>
      <article className="pb-10">
        <header className="py-12 pb-10 bg-gradient-to-b from-white to-slate-50 border-b border-[var(--border)]">
          <div className="max-w-[720px] mx-auto px-5">
            <Link href="/blog" className="inline-block text-sm text-[var(--muted)] no-underline mb-6 hover:text-[var(--brand)]">
              &larr; Back to Blog
            </Link>
            <div className="flex gap-4 items-center mb-4 text-xs text-[var(--muted)]">
              <span className="bg-[var(--brand)] text-white px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-[clamp(28px,4vw,40px)] leading-tight mb-4">{post.title}</h1>
            <p className="text-lg text-[var(--muted)] leading-relaxed">{post.description}</p>
          </div>
        </header>

        <div className="py-12">
          <div className="max-w-[720px] mx-auto px-5">{renderContent(post.content)}</div>
        </div>

        <div className="border-t border-[var(--border)] pt-10">
          <div className="max-w-[720px] mx-auto px-5">
            <div className="flex flex-col sm:flex-row gap-5 items-center bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/dennis-saller.jpg"
                  alt="Dennis Saller"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base font-semibold mb-1 text-[var(--text)]">Dennis Saller, LEP</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Licensed Educational Psychologist with 26+ years of experience in
                  psychoeducational evaluation and learning differences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        headline="Need help understanding your child's learning profile?"
        subtext="Contact RebLearn to schedule a consultation and discuss whether an evaluation would be helpful."
        primaryButton={{
          text: "Contact RebLearn",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Schedule Consultation",
          href: "/schedule",
        }}
      />
    </>
  );
}
