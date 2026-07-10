import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing & Engagement Model",
  description:
    "Diagnostic assessments, one-off projects, hourly support, tiered monthly retainers from bookkeeping to fractional COO-level oversight, and seasonal compliance packages.",
};

const retainerTiers = [
  {
    name: "Essentials",
    description:
      "For businesses that need clean books and a reliable QBO system running in the background.",
    features: ["Bookkeeping", "QBO management", "Monthly reporting"],
  },
  {
    name: "Growth",
    description:
      "For businesses ready to build out HR systems and get ahead of cash flow instead of reacting to it.",
    features: [
      "Everything in Essentials",
      "HR systems",
      "Time tracking",
      "Cash flow management",
    ],
    featured: true,
  },
  {
    name: "Full Infrastructure",
    description:
      "The full embedded back office — insurance, bonding, and tax strategy included, with fractional COO-level oversight.",
    features: [
      "Everything in Growth",
      "Insurance negotiation",
      "Bonding / surety coordination",
      "CPA / tax liaison",
      "401(k) implementation",
    ],
  },
];

const seasonalPackages = [
  "Workers Comp Audit Prep",
  "General Liability Audit Prep",
  "1099 Season Processing",
  "Bonding Renewal Packages",
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-steel-dark">
            Pricing &amp; Engagement
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            An engagement model that scales with your business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
            No forced bundles. Every engagement starts with a clear picture
            of what you actually need, then scales up as your business
            grows.
          </p>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="border-b border-navy/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <span className="text-sm font-bold uppercase tracking-wide text-steel-light">
                Step One &middot; Flat Fee
              </span>
              <h2 className="mt-3 text-2xl font-bold text-cream">
                Diagnostic / Onboarding Assessment
              </h2>
              <p className="mt-3 max-w-2xl text-cream/70">
                Before any ongoing commitment, we evaluate your current
                systems and compliance exposure &mdash; bookkeeping, HR
                documentation, insurance, and bonding &mdash; and tell you
                exactly where the gaps are.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-cream px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-white"
              >
                Book the Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retainer tiers */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">
            Monthly Retainer
          </h2>
          <p className="mt-4 text-navy/70">
            Full-access ongoing service, reviewed every 3 months so your
            plan stays matched to your business. Three tiers, each building
            on the last.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {retainerTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-xl border p-8 ${
                tier.featured
                  ? "border-steel bg-mist"
                  : "border-navy/10 bg-cream"
              }`}
            >
              {tier.featured && (
                <span className="mb-3 inline-block w-fit rounded-full bg-steel px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-navy/80">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 text-steel-dark">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 rounded-md border border-navy/20 px-5 py-2.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
              >
                Ask About This Tier
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* One-off + hourly */}
      <section className="border-y border-navy/10 bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-xl border border-navy/10 bg-cream p-8">
              <h3 className="text-xl font-bold text-navy">
                One-Off Projects
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                A set flat rate for defined-scope work &mdash; a QBO
                cleanup, a contract draft, or a safety program build. No
                ongoing commitment required.
              </p>
            </div>
            <div className="rounded-xl border border-navy/10 bg-cream p-8">
              <h3 className="text-xl font-bold text-navy">Hourly Rate</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                For minor, ad hoc background work that doesn&rsquo;t need a
                full project scope or retainer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal packages */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-navy">
              Seasonal &amp; Compliance Packages
            </h2>
            <p className="mt-4 text-navy/70">
              Standalone flat-fee packages for the annual and periodic needs
              every construction business runs into.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {seasonalPackages.map((pkg) => (
              <div
                key={pkg}
                className="rounded-xl border border-navy/10 bg-cream p-6 text-navy font-medium"
              >
                {pkg}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Every engagement starts with the diagnostic.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Pricing is quoted after we understand your current systems
            &mdash; no generic packages, no surprises.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-cream px-8 py-4 text-base font-semibold text-navy transition-colors hover:bg-white"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
