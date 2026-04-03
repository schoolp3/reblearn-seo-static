import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Psychology Today | RebLearn",
  description: "Find Dennis Saller, LEP on Psychology Today.",
  alternates: { canonical: "/psychology-today" },
};

export default function PsychologyTodayPage() {
  const url = process.env.NEXT_PUBLIC_PSYCHOLOGY_TODAY_URL?.trim();
  if (url) redirect(url);

  return (
    <main className="container">
      <header className="header" style={{ margin: "-28px -18px 24px" }}>
        <div className="container">
          <div className="kicker">RebLearn</div>
          <h1>Psychology Today</h1>
        </div>
      </header>
      <p className="small">
        A public profile link is not configured yet. Set{" "}
        <code>NEXT_PUBLIC_PSYCHOLOGY_TODAY_URL</code> in your environment, or
        reach Dennis via the{" "}
        <Link href="/contact">contact page</Link>.
      </p>
      <footer className="footer">© 2026 RebLearn.</footer>
    </main>
  );
}
