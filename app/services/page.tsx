import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle2,
  ArrowRight,
  Calendar,
  Brain,
  FileText,
  Users,
  Clock,
  GraduationCap,
  ClipboardCheck,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | RebLearn",
  description:
    "Psychoeducational evaluations, IEEs, district contracting, accommodations testing, and targeted learning support with Dennis Saller, LEP.",
  alternates: { canonical: "/services" },
}

const serviceCategories = [
  { title: "Psychoeducational Evaluations", subtitle: "Initial & Triennial", href: "#psychoeducational" },
  { title: "Independent Educational Evaluations", subtitle: "IEEs", href: "#iee" },
  { title: "Academic & Cognitive Testing", subtitle: "Targeted Assessments", href: "#academic" },
  { title: "FBA / BIP Assessments", subtitle: "Behavior Support", href: "#fba" },
  { title: "ERMHS Evaluations", subtitle: "Mental Health Services", href: "#ermhs" },
  { title: "Dyslexia / Dysgraphia / Dyscalculia", subtitle: "Specialized Assessments", href: "#dyslexia" },
  { title: "Accommodations for College & Licensing Exams", subtitle: "BAR, MCAT, GRE, LSAT & More", href: "#accommodations" },
]

const whyChooseReasons = [
  {
    title: "Clear, defensible evaluations built on solid methodology",
    description: "Thorough documentation that withstands scrutiny and supports confident team decision-making",
  },
  {
    title: "Deep understanding of special education process and compliance",
    description: "26+ years working within IDEA and California special education frameworks—knows what schools need and why",
  },
  {
    title: "Strong documentation that reduces confusion",
    description: "Well-organized reports with usable recommendations that translate directly into IEP goals and intervention planning",
  },
  {
    title: "Experience with complex cases and difficult-to-diagnose profiles",
    description: "Skilled at clarifying learning challenges when the picture isn&apos;t straightforward—reducing uncertainty for teams and families",
  },
  {
    title: "Practical recommendations grounded in real classroom experience",
    description: "Recommendations that are actionable, not just theoretical—based on what actually works in school settings",
  },
]

const processSteps = [
  { step: 1, title: "Initial Consultation", description: "Brief call to discuss your concerns and determine the right evaluation approach" },
  { step: 2, title: "Testing Sessions", description: "Typically 2-3 sessions scheduled at your convenience, usually completed within 1-2 weeks" },
  { step: 3, title: "Comprehensive Report", description: "Detailed written report with clear explanations and specific recommendations" },
  { step: 4, title: "Review Meeting", description: "In-depth discussion of findings, answers to your questions, and next steps" },
]

const mainServices = [
  {
    id: "psychoeducational",
    icon: Brain,
    title: "Psychoeducational Evaluations",
    price: "$2,400",
    popular: true,
    description: "Private, comprehensive evaluations examining cognitive processes, academic performance, and learning profiles. Provides clear answers for families seeking to understand reading, writing, attention, or learning challenges—and what support makes sense next.",
    features: [
      "Full cognitive & academic assessment",
      "Detailed written report with clear explanations",
      "Review meeting with parents",
      "Practical recommendations for home and school",
    ],
    iconColor: "bg-blue-500",
  },
  {
    id: "district",
    icon: Users,
    title: "District Contracting for Evaluations",
    price: "Contact for pricing",
    popular: false,
    description: "Provides short-term or ongoing evaluation support for school districts needing additional assessment capacity. Includes psychoeducational evaluations, dyslexia-focused assessments, ERMHS evaluations, FBAs/BIPs, and academic testing.",
    features: [
      "Flexible contract arrangements",
      "Fast turnaround on reports",
      "Compliant & comprehensive documentation",
      "Specialized expertise for complex cases",
    ],
    iconColor: "bg-orange-500",
    hasLearnMore: true,
  },
  {
    id: "accommodations",
    icon: GraduationCap,
    title: "Accommodations Evaluations for College, Graduate, and Licensing Exams",
    price: "$2,200",
    description: "Comprehensive evaluations for college students, graduate students, and adults seeking accommodations on high-stakes exams such as the BAR, MCAT, GRE, LSAT, GMAT, and state or professional licensing examinations. These evaluations help determine whether learning, attention, processing, or related difficulties substantially affect test access and performance, and provide clear documentation when accommodations are warranted.",
    features: [
      "Cognitive & processing assessment",
      "Achievement & aptitude testing",
      "Diagnostic clarification",
      "Accommodation recommendations for testing boards",
    ],
    iconColor: "bg-blue-500",
  },
  {
    id: "iee",
    icon: FileText,
    title: "Independent Educational Evaluations (IEE)",
    price: "$2,800-$4,000",
    description: "Outside, objective evaluations offering a clear, unbiased understanding of a student&apos;s learning needs. Designed for families who disagree with district findings or need an independent second opinion. Includes advanced diagnostic measures and detailed recommendations.",
    features: [
      "Independent, objective assessment",
      "Advanced diagnostic testing",
      "Comprehensive recommendations for families and school teams",
      "Dispute resolution support",
    ],
    iconColor: "bg-orange-500",
  },
  {
    id: "dyslexia",
    icon: BookOpen,
    title: "Dyslexia/Dysgraphia/Dyscalculia Assessments",
    price: "$1,950",
    description: "Specialized diagnostic evaluations targeting phonological processing, written expression, orthographic mapping, and mathematical reasoning. Designed for accurate identification and clear answers when reading, writing, or math challenges persist.",
    features: [
      "Specialized learning disability diagnosis",
      "Processing strengths & weaknesses",
      "Evidence-based recommendations",
      "Targeted intervention planning",
    ],
    iconColor: "bg-blue-500",
  },
  {
    id: "ermhs",
    icon: ClipboardCheck,
    title: "ERMHS Evaluations & FBAs/BIPs",
    price: null,
    description: "In-depth assessments to determine eligibility and need for Educationally Related Mental Health Services, plus Functional Behavior Assessments and Behavior Intervention Plans. ERMHS evaluations emphasize emotional regulation, anxiety, attention, and school-based functioning. FBAs/BIPs are grounded in a Collaborative Problem Solving approach, focusing on identifying lagging skills and developing supports that reduce conflict instead of escalating it.",
    features: [
      "Social-emotional assessment",
      "Mental health screening",
      "Service eligibility determination",
      "Evidence-based behavior assessment",
      "Collaborative problem-solving framework",
      "Practical classroom strategies",
    ],
    iconColor: "bg-orange-500",
  },
  {
    id: "intervention",
    icon: Target,
    title: "Targeted Reading & Writing Intervention",
    price: "Starting at $85/hour",
    description: "Short-term, high-impact intervention for dyslexia, dysgraphia, and learning difficulties. This is not tutoring—sessions are neuropsychologically informed, process-based training that targets underlying cognitive and language systems.",
    features: [
      "1:1 or small group (2-3 students)",
      "Evidence-based intervention methods",
      "Progress monitoring & data tracking",
      "Time-limited, goal-focused approach",
    ],
    note: "This service is intentionally targeted and time-limited; families seeking ongoing homework help or traditional tutoring may be better served elsewhere.",
    iconColor: "bg-blue-500",
  },
  {
    id: "academic",
    icon: TrendingUp,
    title: "Academic Testing & Cognitive Ability and Processing Testing",
    price: "$400",
    description: "Targeted assessments measuring cognitive ability, processing skills, and academic performance levels in reading, writing, and mathematics. Ideal for progress checks, baseline establishment, and clarifying specific areas of cognitive or academic need.",
    features: [
      "Cognitive ability assessment",
      "Processing skills evaluation",
      "Reading, writing, & math assessments",
      "Grade-level comparisons",
      "Progress monitoring data",
      "Quick turnaround",
    ],
    iconColor: "bg-orange-500",
  },
]

const addOnServices = [
  {
    icon: Clock,
    title: "IEP Meeting Attendance",
    price: "$250",
    description: "Includes participation in one IEP meeting of up to 60 minutes, including brief pre-meeting review of the evaluation report.",
    features: [
      "Up to 60 minutes of meeting time",
      "Pre-meeting report review",
      "Additional time: $125 per 30 minutes",
    ],
    note: "IEP attendance is provided upon district request.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Evaluation Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Comprehensive assessment services for school districts and families
            </p>
          </div>
        </section>

        {/* Service Categories Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {serviceCategories.map((category) => (
                <a
                  key={category.title}
                  href={category.href}
                  className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{category.subtitle}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Districts & Private Schools Choose RebLearn */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl text-balance">
                Why Districts & Private Schools Choose RebLearn
              </h2>
              <p className="mt-4 text-muted-foreground">
                Supporting sound decision-making through clear documentation and defensible evaluations
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="rounded-2xl border border-border bg-card p-8">
                <ul className="space-y-6">
                  {whyChooseReasons.map((reason, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 h-2 w-2 rounded-full bg-primary mt-2" />
                      <div>
                        <h3 className="font-semibold text-foreground">{reason.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{reason.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Private Evaluations for Families */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Private Evaluations for Families
            </h2>
            <p className="mt-6 text-muted-foreground">
              Many families seek an outside evaluation when their child is struggling but the answers aren&apos;t clear. Whether your child attends a private school, public school, or is homeschooled—a private psychoeducational evaluation provides objective, thorough answers and a clearer path forward.
            </p>

            <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Clear answers when reading, writing, attention, or learning challenges persist</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Objective assessment independent of your child&apos;s school</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Practical recommendations for home, school, and intervention planning</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://calendly.com/reblearn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Book a Free Consultation
              </Link>
              <a
                href="tel:+16692486602"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Call or Text
              </a>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                What to Expect
              </h2>
              <p className="mt-4 text-muted-foreground">
                A straightforward process designed to get you clear answers quickly
              </p>
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

            <div className="mt-8 max-w-2xl mx-auto">
              <div className="rounded-xl border border-border bg-blue-50 p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Timeline:</strong> Most evaluations are completed within 3-4 weeks from initial contact to final report.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {mainServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="relative rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.iconColor} text-white flex-shrink-0`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{service.title}</h3>
                      {service.price && (
                        <p className="text-primary font-semibold">{service.price}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.note && (
                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground italic">{service.note}</p>
                    </div>
                  )}

                  {service.hasLearnMore && (
                    <div className="mt-4">
                      <Link
                        href="/district-contracting"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                ADDITIONAL SUPPORT
              </div>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Optional Add-On Services
              </h2>
            </div>

            <div className="max-w-xl mx-auto">
              {addOnServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white flex-shrink-0">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{service.title}</h3>
                      <p className="text-primary font-semibold">{service.price}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.note && (
                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground italic">{service.note}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-blue-700 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold lg:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Book a short call to discuss your child&apos;s needs and the best evaluation or intervention path forward.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://calendly.com/reblearn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-blue-50 transition-colors"
              >
                Book a Free 10-Minute Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              Confidential • No obligation • Parents only—no school contact without consent
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
