import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

import { AiChatWidget } from "@/components/ai-chat-widget"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const site = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.reblearn.com"
).replace(/\/$/, "")

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Script src="/ga-events.js" strategy="afterInteractive" />
        {children}
        <AiChatWidget />
      </body>
    </html>
  )
}
