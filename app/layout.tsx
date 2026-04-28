import type { Metadata } from "next";
import Script from "next/script";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const site = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.reblearn.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "RebLearn | Psychoeducational Evaluations, IEEs, and Learning Support",
    template: "%s | RebLearn",
  },
  description:
    "RebLearn provides psychoeducational evaluations, Independent Educational Evaluations, learning therapy, and district contracting services for families and schools in California.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RebLearn | Psychoeducational Evaluations and Learning Support",
    description:
      "RebLearn provides psychoeducational evaluations, Independent Educational Evaluations, learning therapy, and district contracting services for families and schools in California.",
    type: "website",
    url: site,
    siteName: "RebLearn",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "RebLearn | Psychoeducational Evaluations and Learning Support",
    description:
      "Psychoeducational evaluations, IEEs, and learning therapy for California families and schools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[var(--bg)]">
      <body>
        <Script src="/ga-events.js" strategy="afterInteractive" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
