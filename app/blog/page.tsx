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

      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </>
  );
}
