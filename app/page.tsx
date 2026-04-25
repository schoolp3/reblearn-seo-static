import Link from "next/link"
import {
  Calendar,
  Phone,
  Shield,
  Clock,
  Users,
  Award,
  Star,
  MapPin,
  Beaker,
  Target,
  CheckCircle2,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RebLearn",
  url: "https://www.reblearn.com",
  email: "dennis@reblearn.com",
  telephone: "+1-669-248-6602",
  areaServed: "California",
  description:
    "Psychoeducational evaluations for dyslexia, ADHD, IEP/504 supports, and Independent Educational Evaluations (IEEs).",
  provider: {
    "@type": "Person",
    name: "Dennis Saller",
    jobTitle: "Licensed Educational Psychologist (LEP #3219)",
  },
}

const credentials = [
  { icon: Award, label: "Licensed", value: "LEP #3219" },
  { icon: Star, label: "Experience", value: "26+ Years" },
  { icon: Target, label: "Focus", value: "Evals & IEEs" },
  { icon: Beaker, label: "Approach", value: "Research-Based" },
  { icon: MapPin, label: "Serving", value: "California" },
]

const services = [
  {
    title: "Psychoeducational Evaluations",
    description: "Comprehensive assessments for cognitive abilities, academic achievement, and learning profiles.",
    href: "/services#psychoeducational",
  },
  {
    title: "Dyslexia / Dysgraphia Evaluations",
    description: "Specialized assessments using evidence-based protocols, error analysis, and intervention planning.",
    href: "/services#dyslexia",
  },
  {
    title: "IEE / Independent Evaluations",
    description: "Independent second opinions for parents who disagree with school district evaluations.",
    href: "/services#iee",
  },
  {
    title: "District Contracting",
    description: "Fast, reliable contract evaluation services for California school districts (initials, triennials, IEEs).",
    href: "/district-contracting",
  },
  {
    title: "1:1 or Small Group Intervention",
    description: "Targeted, evidence-based instruction for reading, writing, and executive functioning challenges.",
    href: "/services#intervention",
  },
  {
    title: "Testing for Accommodations",
    description: "Comprehensive assessments for SAT, BAR, MCAT, GRE, LSAT, and professional licensing exams.",
    href: "/services#accommodations",
  },
]

const articles = [
  {
    category: "Dyslexia",
    readTime: "8 min",
    title: "Why bright kids can still struggle with reading",
    description: "Strong verbal reasoning and vocabulary can mask underlying word-level weaknesses in dyslexia. Learn what to look for.",
    href: "/blog/dyslexia-bright-kids",
  },
  {
    category: "Learning Disabilities",
    readTime: "7 min",
    title: "What dysgraphia really looks like",
    description: "Dysgraphia isn&apos;t just &apos;messy handwriting&apos;—it&apos;s a constellation of transcription, spelling, and compositional challenges.",
    href: "/blog/dysgraphia",
  },
  {
    category: "ADHD",
    readTime: "9 min",
    title: "When ADHD is not the whole story",
    description: "Executive function challenges, slow processing, and learning disabilities often overlap with ADHD symptoms.",
    href: "/blog/adhd-overlap",
  },
]

const processSteps = [
  { step: 1, title: "Contact / Intake", description: "Brief discussion of needs and case details" },
  { step: 2, title: "Records Review", description: "Review existing documentation and history" },
  { step: 3, title: "Testing Scheduled Quickly", description: "Efficient assessment with current protocols" },
  { step: 4, title: "Report + IEP-Ready Recommendations", description: "Clear, actionable findings delivered on time" },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            {/* Credential Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-4 py-2 text-sm">
                <Award className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">Dennis Saller, LEP #3219 • Licensed Educational Psychologist</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Psychoeducational Evaluations & <span className="text-blue-400">IEEs</span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-300">
              When a bright student is still struggling—and the picture isn&apos;t clear yet
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-center text-slate-400">
              Private evaluations for families throughout California. Specializing in{" "}
              <strong className="text-white">dyslexia, ADHD, learning disabilities, and executive functioning</strong>.
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-center text-slate-400">
              An outside evaluation can help clarify what&apos;s actually happening and what makes sense to do next.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://calendly.com/reblearn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Book a Free Consultation
              </Link>
              <a
                href="tel:+16692486602"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 text-base font-semibold text-white hover:bg-slate-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Let&apos;s Talk
              </a>
            </div>

            {/* Phone Number */}
            <p className="mt-6 text-center text-slate-400">
              Or reach out directly:
            </p>
            <p className="text-center text-lg font-semibold text-white">
              Call or text: 669-248-6602
            </p>

            {/* Divider */}
            <div className="mt-8 border-t border-slate-700" />

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Confidential</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>No obligation</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Parents only—no school contact without consent</span>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Bar */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex items-center gap-3">
                  <cred.icon className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="text-xs text-slate-500">{cred.label}</p>
                    <p className="font-semibold text-slate-900">{cred.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When a Bright Student Is Still Struggling */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl text-balance">
              When a Bright Student Is Still Struggling
            </h2>
            <div className="mt-8 text-left text-slate-600 space-y-4">
              <p>
                A strong school does not always produce a clear answer. Some students work hard, seem capable, and still struggle with reading, writing, attention, executive functioning, or overall academic performance. In those situations, families often need a thoughtful outside evaluation to understand what is really going on and what support makes sense next.
              </p>
              <p className="text-center font-medium text-slate-900">
                RebLearn helps families move from uncertainty to a clearer understanding and a more practical plan.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Dennis Saller */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Image Placeholder */}
              <div className="w-full max-w-sm">
                <div className="aspect-square rounded-2xl bg-slate-200 flex items-center justify-center">
                  <ImageIcon className="h-16 w-16 text-slate-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
                  Meet Dennis Saller, LEP
                </h2>
                <div className="mt-6 space-y-4 text-slate-600">
                  <p>
                    Dennis founded RebLearn after years of seeing valuable insights get buried in reports, meetings, and weak follow-through. He built RebLearn to provide clearer evaluations, sharper recommendations, and support that leads to real action.
                  </p>
                  <p>
                    With more than 26 years in public education and well over 1,000 evaluations completed, Dennis brings deep experience in identifying and supporting students with dyslexia, dysgraphia, ADHD, and other complex learning profiles.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                  >
                    About Dennis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Core Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive, research-based evaluation and intervention services
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Insights for Parents, Students, and Schools
              </h2>
              <p className="mt-4 text-muted-foreground">
                Evidence-based guidance on dyslexia, learning disabilities, and psychoeducational assessment
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
                Trusted by Families, Districts, and Private Schools
              </h2>
              <p className="mt-4 text-muted-foreground">
                Clear, comprehensive evaluation services supporting sound educational decisions
              </p>
            </div>
          </div>
        </section>

        {/* Simple, Efficient Process */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Simple, Efficient Process
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-blue-700 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold lg:text-4xl">
              Need Evaluation Support Now?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Available for immediate contracting and private evaluations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-blue-50 transition-colors"
              >
                Contact Dennis
              </Link>
              <a
                href="tel:+16692486602"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call / Text 669-248-6602
              </a>
            </div>

            <div className="mt-8 border-t border-white/20 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-100">
                <a href="mailto:dennis@reblearn.com" className="flex items-center gap-2 hover:text-white">
                  <span>dennis@reblearn.com</span>
                </a>
                <span className="hidden sm:inline text-white/40">|</span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  LEP #3219 • California
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
