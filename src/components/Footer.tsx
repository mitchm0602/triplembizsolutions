import Link from "next/link";
import Image from "next/image";

const credentials = ["QuickBooks Online Certified", "OSHA 30 Certified"];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-cream/80">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo-transparent.png"
              alt="Triple M Business Solutions"
              width={220}
              height={147}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Building and running the back office for small construction and
              trade companies &mdash; so owners can stay focused on the work.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-steel-light">
              Site
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-steel-light">
              Credentials
            </h3>
            <Image
              src="/images/intuit-bookkeeping-badge.png"
              alt="Intuit Bookkeeping Certified badge"
              width={56}
              height={56}
              className="mt-4 h-14 w-14"
            />
            <ul className="mt-4 space-y-2">
              {credentials.map((c) => (
                <li key={c} className="text-sm text-cream/70">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/50">
          &copy; {new Date().getFullYear()} Triple M Business Solutions. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
