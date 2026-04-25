import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Clock, FileText, Users, Calendar, Phone, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "District Contracting | RebLearn",
  description:
    "Psychoeducational evaluation support for California school districts with Dennis Saller, LEP.",
  alternates: { canonical: "/district-contracting" },
}

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Timely case completion to help districts meet assessment deadlines",
  },
  {
    icon: FileText,
    title: "Clear Documentation",
    description: "Well-organized reports with usable recommendations for IEP teams",
  },
  {
    icon: Users,
    title: "Flexible Arrangements",
    description: "Short-term or ongoing support based on district needs",
  },
]

const services = [
  "Psychoeducational evaluations (initials, triennials)",
  "Independent Educational Evaluations (IEEs)",
  "Dyslexia-focused assessments",
  "ERMHS evaluations",
  "Functional Behavior Assessments (FBAs)",
  "Behavior Intervention Plans (BIPs)",
  "Academic and cognitive testing",
]

export default function DistrictContractingPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                FOR SCHOOL DISTRICTS
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                District Contracting
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Experienced psychoeducational evaluation capacity for districts prioritizing clear reporting and timely case completion.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Services for Districts
              </h2>
              <div className="rounded-2xl border border-border bg-card p-8">
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Discuss District Contracting
              </h2>
              <p className="text-muted-foreground mb-8">
                Capacity, scope, and contracting details are case-specific. For district-specific contracting questions, please use the inquiry path below so your message is routed correctly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:dennis@reblearn.com?subject=District%20Contracting"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  District Contracting Inquiry
                  <ArrowRight className="h-5 w-5" />
                </a>
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
