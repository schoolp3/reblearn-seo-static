import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about psychoeducational evaluations, learning differences, dyslexia, ADHD, executive functioning, and school advocacy from Dennis Saller, LEP.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Hero
        kicker="RebLearn Blog"
        title="Insights on Learning and Assessment"
        subtitle="Articles about psychoeducational evaluations, learning differences, and helping students succeed. Written for parents, educators, and anyone looking to understand how learning works."
        centered
      />

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Have questions about your child's learning?"
        subtext="Schedule a consultation to discuss your concerns and explore whether an evaluation would be helpful."
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
        .blog-section {
          padding: 60px 0;
        }
        .blog-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 700px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
