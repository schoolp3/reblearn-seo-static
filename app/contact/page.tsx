import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | RebLearn",
  description:
    "Contact Dennis Saller, LEP for consultation requests, IEE questions, accommodations testing, and district partnerships.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact & Scheduling
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Scheduling moves forward through consultation—reach out by email or phone/text.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Reach Dennis</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:dennis@reblearn.com" className="font-semibold text-foreground hover:text-primary transition-colors">
                      dennis@reblearn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone / Text</p>
                    <a href="tel:+16692486602" className="font-semibold text-foreground hover:text-primary transition-colors">
                      669-248-6602
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Bay Area & Statewide, California</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://calendly.com/reblearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  Book a Consultation
                </Link>
                <a
                  href="tel:+16692486602"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call / Text: 669-248-6602
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
