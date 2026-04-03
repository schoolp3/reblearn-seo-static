import type { Metadata } from "next";
import Script from "next/script";

import { AiChatWidget } from "@/components/ai-chat-widget";

import "./globals.css";

const site = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.reblearn.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "Psychoeducational Evaluations in California | Dennis Saller, LEP",
  description:
    "Psychoeducational evaluations for dyslexia, dysgraphia, and ADHD. IEEs and district contracting with Dennis Saller, LEP #3219, serving California and the Bay Area.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Psychoeducational Evaluations in California | Dennis Saller, LEP",
    description:
      "Psychoeducational evaluations for dyslexia, dysgraphia, and ADHD. IEEs and district contracting with Dennis Saller, LEP #3219, serving California and the Bay Area.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script src="/ga-events.js" strategy="afterInteractive" />
        {children}
        <AiChatWidget />
      </body>
    </html>
  );
}
