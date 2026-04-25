import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] mt-16">
      <div className="max-w-[1100px] mx-auto px-5 py-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[var(--text)] no-underline">
              <Image
                src="/images/reblearn-logo.png"
                alt="RebLearn"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              RebLearn
            </Link>
            <p className="mt-3 text-sm text-[var(--muted)] max-w-[280px] leading-relaxed">
              Psychoeducational evaluations and learning support for California families and schools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-[var(--text)] mb-4 uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/services/psychoeducational-evaluations" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    Psychoeducational Evaluations
                  </Link>
                </li>
                <li>
                  <Link href="/services/iee" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    Independent Evaluations (IEE)
                  </Link>
                </li>
                <li>
                  <Link href="/services/learning-therapy" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    Learning Therapy
                  </Link>
                </li>
                <li>
                  <Link href="/services/testing-accommodations" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    Testing Accommodations
                  </Link>
                </li>
                <li>
                  <Link href="/services/district-contracting" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    District Contracting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[var(--text)] mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors no-underline">
                    Schedule Consultation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[var(--text)] mb-4 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-2.5 text-sm text-[var(--muted)]">
                <li>
                  <a href="tel:+16692486602" className="hover:text-[var(--brand)] transition-colors no-underline">
                    669-248-6602
                  </a>
                </li>
                <li>
                  <a href="mailto:dennis@reblearn.com" className="hover:text-[var(--brand)] transition-colors no-underline">
                    dennis@reblearn.com
                  </a>
                </li>
                <li>Dennis Saller, LEP #3219</li>
                <li>California</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} RebLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
