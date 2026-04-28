import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Psychology Today",
  description: "Find Dennis Saller, LEP on Psychology Today.",
  alternates: { canonical: "/psychology-today" },
};

export default function PsychologyTodayPage() {
  const url = process.env.NEXT_PUBLIC_PSYCHOLOGY_TODAY_URL?.trim();
  if (url) redirect(url);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[600px] mx-auto px-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Psychology Today</h1>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          A Psychology Today profile link is not configured yet. Please reach Dennis via the{" "}
          <Link href="/contact" className="text-[var(--brand)] hover:underline">
            contact page
          </Link>{" "}
          or call{" "}
          <a href="tel:+16692486602" className="text-[var(--brand)] hover:underline">
            669-248-6602
          </a>
          .
        </p>
        <Link href="/contact" className="btn primary">
          Contact RebLearn
        </Link>
      </div>
    </section>
  );
}
