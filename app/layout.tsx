import type { Metadata } from "next";
import Script from "next/script";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AiChatWidget } from "@/components/ai-chat-widget";

import "./globals.css";

const site = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.reblearn.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Psychoeducational Evaluations in California | Dennis Saller, LEP",
    template: "%s | RebLearn",
  },
  description:
    "Psychoeducational evaluations, learning therapy, and Independent Educational Evaluations (IEEs) in California. Dennis Saller, LEP #3219, helps families and schools understand why students struggle and what to do next.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Psychoeducational Evaluations in California | Dennis Saller, LEP",
    description:
      "Psychoeducational evaluations, learning therapy, and IEEs for dyslexia, ADHD, dysgraphia, dyscalculia, executive functioning, and learning differences. Clear recommendations and practical next steps.",
    type: "website",
    url: site,
  },
  twitter: { card: "summary" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body>
        <Script src="/ga-events.js" strategy="afterInteractive" />
        <Header />
        <main>{children}</main>
        <Footer />
        <AiChatWidget />
      </body>
    </html>
  );
}
