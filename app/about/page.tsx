import type { Metadata } from "next"
import Link from "next/link"
import {
  Award,
  GraduationCap,
  Building,
  ClipboardList,
  BookOpen,
  Lightbulb,
  ExternalLink,
  Youtube,
  Image as ImageIcon,
  MessageCircle,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Dennis Saller, LEP | RebLearn",
  description:
    "California Licensed Educational Psychologist (LEP #3219) with 26+ years of psychoeducational evaluation experience.",
  alternates: { canonical: "/about" },
}

const credentials = [
  {
    icon: Award,
    title: "Licensed Educational Psychologist",
    description: "LEP #3219 • California Board of Behavioral Sciences",
    color: "bg-blue-500",
  },
  {
    icon: GraduationCap,
    title: "Advanced Education",
    description: "M.S. School Psychology • B.A. Psychology",
    color: "bg-orange-500",
  },
  {
    icon: Building,
    title: "26 Years Experience",
    description: "School districts & private practice across California",
    color: "bg-primary",
  },
  {
    icon: ClipboardList,
    title: "2,000+ Evaluations",
    description: "Comprehensive psychoeducational assessments completed",
    color: "bg-blue-500",
  },
  {
    icon: BookOpen,
    title: "Reading Intervention Specialist",
    description: "Former clinician at Lindamood-Bell Learning Processes",
    color: "bg-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Ed-Tech Founder",
    description: "Building digital tools for literacy & learning acceleration",
    color: "bg-red-500",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-primary">
                Licensed Educational Psychologist • LEP #3219 • Specializing in Learning Disabilities, Dyslexia/Dysgraphia, ADHD, Executive Functioning
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Meet Dennis Saller
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-muted-foreground">
              Expert in literacy and dyslexia with <strong className="text-foreground">26 years of experience</strong> helping students, families, and schools understand how children learn—and what they need to thrive.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Image */}
              <div className="w-full lg:w-1/3">
                <div className="aspect-[3/4] rounded-2xl bg-slate-100 flex items-center justify-center sticky top-24">
                  <ImageIcon className="h-16 w-16 text-slate-400" />
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  About Dennis Saller, LEP
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-muted-foreground">
                    Dennis Saller is a California Licensed Educational Psychologist who has spent more than 26 years working to understand why some students struggle to learn, and what actually helps them move forward.
                  </p>
                  <p className="text-muted-foreground">
                    His work has included psychoeducational evaluations, literacy intervention, academic support, case consultation, and direct work with students presenting with a wide range of learning, attention, and developmental challenges.
                  </p>
                  <p className="text-muted-foreground">
                    Early in his career, Dennis worked as a clinician at Lindamood-Bell Learning Processes, where he was introduced to intensive, process-oriented intervention for students with significant learning difficulties. That experience helped shape his early thinking, but it was only the beginning.
                  </p>
                  <p className="text-muted-foreground">
                    Over the years, his work expanded far beyond that foundation. He coordinated and helped lead large literacy and intervention efforts, including summer and after-school programs serving hundreds of students. He also worked directly with students one-on-one in homes, schools, and educational settings, supporting children and adolescents with dyslexia, dysgraphia, ADHD, autism, writing and output difficulties, and other complex learning needs.
                  </p>
                  <p className="text-muted-foreground">
                    Those years of hands-on intervention work gave Dennis something many evaluators do not have: direct experience seeing what recommendations are actually realistic, effective, and worth pursuing. He has seen how bright students can struggle for very different reasons, how surface symptoms can be misleading, and how important it is to identify not just what is difficult for a student, but why.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Experience */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                PROFESSIONAL BACKGROUND
              </div>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Credentials & Experience
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${cred.color} text-white mb-4`}>
                    <cred.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cred.title}</h3>
                  <p className="text-sm text-muted-foreground">{cred.description}</p>
                </div>
              ))}
            </div>

            {/* External Links */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.psychologytoday.com/us/therapists/dennis-saller-san-jose-ca/1234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Psychology Today Profile
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@reblearn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-4 w-4" />
                YouTube Channel
              </a>
            </div>
          </div>
        </section>

        {/* My Approach to Evaluations */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-slate-50 to-white p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <MessageCircle className="h-4 w-4" />
                Philosophy & Approach
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-8">
                My Approach to Evaluations
              </h2>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  My evaluations focus on understanding the <strong className="text-foreground">cognitive and linguistic processes</strong> that directly impact reading and writing—not just measuring achievement scores.
                </p>
                <p>
                  I use <strong className="text-foreground">evidence-based assessment tools</strong> grounded in the science of reading, and I write reports that are <strong className="text-foreground">clear, accessible, and actionable</strong> for educators and families.
                </p>
                <p>
                  My goal is simple: provide <strong className="text-foreground">accurate diagnoses</strong>, <strong className="text-foreground">clear explanations</strong>, and <strong className="text-foreground">practical recommendations</strong> that help students get the support they need to succeed.
                </p>
              </div>
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
