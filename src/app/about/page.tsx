import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Triple M Business Solutions — a construction background, a consulting background, and a family-driven brand.",
};

const credentials = [
  {
    title: "QuickBooks Online Certified",
    description:
      "Certified to set up, clean up, and manage QBO files to a professional standard.",
  },
  {
    title: "OSHA 30 Certified",
    description:
      "Formal safety training that informs every safety program Triple M builds.",
  },
  {
    title: "Business Minor, Texas A&M",
    description: "Coursework completed in business fundamentals.",
  },
  {
    title: "5+ Years in Construction Back-Office Operations",
    description:
      "Hands-on experience managing full back-office operations inside the construction industry.",
  },
  {
    title: "10+ Years in Business Consulting",
    description:
      "Prior experience implementing payroll, HR, HRIS, Workers Comp, and health insurance programs for small-to-mid-size businesses.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-steel-dark">
            About
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Built on the job site. Named for family.
          </h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-navy">
              Where &ldquo;Triple M&rdquo; comes from
            </h2>
            <p className="mt-4 leading-relaxed text-navy/70">
              Triple M Business Solutions is named after the initials of the
              founder&rsquo;s two daughters &mdash; &ldquo;MMM.&rdquo; It
              isn&rsquo;t a corporate acronym. It&rsquo;s a reminder of who
              the business was built for, and the same standard of care
              that gets brought to every client relationship: hands-on,
              accountable, and personally invested in the outcome.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-navy">
              Two backgrounds, one back office
            </h2>
            <p className="mt-4 leading-relaxed text-navy/70">
              Triple M was built at the intersection of two very different
              vantage points: years spent managing full back-office
              operations inside a construction company, and a decade before
              that spent consulting for small-to-mid-size businesses on
              payroll, HR, HRIS, Workers Comp, and health insurance
              programs.
            </p>
            <p className="mt-4 leading-relaxed text-navy/70">
              That combination matters. Plenty of consultants understand
              back-office systems in the abstract. Fewer have actually run
              one inside a construction company &mdash; chasing subcontractor
              paperwork, prepping for a Workers Comp audit, or packaging
              financials for a bonding renewal under a real deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-y border-navy/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-cream">
              An embedded partner, not a distant advisor
            </h2>
            <p className="mt-4 leading-relaxed text-cream/70">
              Triple M doesn&rsquo;t hand over a report and step back. The
              work is to build the systems &mdash; bookkeeping, HR,
              insurance, bonding &mdash; and then run them alongside the
              business, the way an internal back-office hire would, at a
              fraction of the cost.
            </p>
            <p className="mt-4 leading-relaxed text-cream/70">
              And Triple M is upfront about what it isn&rsquo;t: not a CPA,
              not a tax accountant. Instead, it acts as the liaison between
              a business&rsquo;s day-to-day operations and the CPA or tax
              professional handling the filings &mdash; so nothing gets lost
              in translation between the two.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy">
          Credentials &amp; Experience
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {credentials.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-navy/10 bg-mist p-6"
            >
              <h3 className="font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Let&rsquo;s talk about your back office.
          </h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-navy px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-navy-light"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
