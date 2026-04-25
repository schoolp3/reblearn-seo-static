import Link from "next/link"
import { Mail, Phone, MapPin, Youtube, Calendar } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Screeners", href: "/screeners" },
  { name: "Apps", href: "/apps" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Psychoeducational Evaluations", href: "/services#psychoeducational" },
  { name: "IEE (Independent Evaluations)", href: "/services#iee" },
  { name: "Dyslexia Assessments", href: "/services#dyslexia" },
  { name: "ERMHS Evaluations", href: "/services#ermhs" },
  { name: "FBAs & BIPs", href: "/services#fba" },
  { name: "Academic Testing", href: "/services#academic" },
  { name: "Reading & Writing Intervention", href: "/services#intervention" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8C8 8 12 4 16 4C20 4 24 8 24 8V24C24 24 20 28 16 28C12 28 8 24 8 24V8Z" fill="#ffffff" />
                <path d="M12 12L16 16L20 12" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-bold text-white">RebLearn</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Professional psychoeducational evaluations for students who learn differently.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-primary" />
              LEP #3219 • 26 Years
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-slate-400">
                  Bay Area & Statewide<br />California
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:Dennis@reblearn.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Dennis@reblearn.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+16692486602" className="text-sm text-slate-400 hover:text-white transition-colors">
                  669-248-6602
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              <a
                href="https://www.youtube.com/@reblearn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-400 hover:border-slate-600 hover:text-white transition-colors"
              >
                <Youtube className="h-4 w-4" />
                YouTube Channel
              </a>

              <Link
                href="https://calendly.com/reblearn"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} RebLearn. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
