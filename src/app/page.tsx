import Link from "next/link";
import Image from "next/image";

const credentialBar = [
  "QuickBooks Online Certified",
  "OSHA 30 Certified",
  "5+ Years in Construction Back-Office Operations",
  "10+ Years in Business Consulting",
];

const serviceCategories = [
  {
    title: "Bookkeeping & QBO",
    description:
      "Clean books, organized QuickBooks Online, and reconciliation systems you can actually trust at tax time.",
    href: "/services#bookkeeping-qbo",
  },
  {
    title: "HR & Compliance",
    description:
      "Document management, time tracking, PTO systems, and safety programs that keep you audit-ready.",
    href: "/services#hr-compliance",
  },
  {
    title: "Insurance & Bonding",
    description:
      "Health insurance and GL negotiation, Workers Comp audits, and surety/bonding coordination.",
    href: "/services#insurance-bonding",
  },
  {
    title: "Financial Strategy",
    description:
      "Cash flow management, line of credit packaging, project profitability projections, and CPA liaison.",
    href: "/services#financial-strategy",
  },
];

const engagementSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "A no-cost intro call to talk through your business and see if Triple M is the right fit — no obligation.",
  },
  {
    step: "02",
    title: "Diagnostic Assessment",
    description:
      "A flat-fee onboarding assessment to evaluate your current systems and compliance exposure before any ongoing commitment.",
  },
  {
    step: "03",
    title: "Right-Sized Engagement",
    description:
      "One-off projects, hourly support, or a monthly retainer — whatever fits where your business is today.",
  },
  {
    step: "04",
    title: "Ongoing Partnership",
    description:
      "Reviewed every 3 months as your business grows, so your back office scales with you instead of holding you back.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-navy/10">
        <Image
          src="/images/hero-bg.jpg"
          alt="A residential home under construction at sunrise"
          fill
          priority
          className="object-cover object-center grayscale-[55%] brightness-[0.55]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-steel-light">
              For Construction & Trade Companies
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl lg:text-6xl">
              We Build Your Back Office &mdash; So You Can Run the Job.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
              Triple M Business Solutions is an embedded operations partner
              for small construction and trade businesses. We set up and run
              the bookkeeping, HR, compliance, and insurance infrastructure
              you need &mdash; without the cost of a full internal back
              office.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-cream px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-white"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-cream/40 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credential bar */}
      <section className="border-b border-navy/10 bg-navy">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 text-center lg:grid-cols-4 lg:px-8">
          {credentialBar.map((item) => (
            <p
              key={item}
              className="text-xs font-semibold uppercase tracking-wide text-cream/70 sm:text-sm"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy">
              You&rsquo;re great at the work. The back office shouldn&rsquo;t
              be what holds you back.
            </h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-steel-dark">
              Bookkeeper. HR Lead. Fractional COO. Whatever the job needs.
            </p>
          </div>
          <div className="space-y-4 text-navy/70">
            <p>
              Most small construction and trade companies grow past
              spreadsheets and shoeboxes long before they can justify hiring
              a full internal back office. Bookkeeping falls behind. Workers
              Comp audits become fire drills. Insurance renewals get
              negotiated on autopilot.
            </p>
            <p>
              Triple M steps in as your embedded operations partner &mdash;
              think fractional COO for the back office, without the
              full-time executive price tag &mdash; not a distant advisor
              who hands you a report and disappears, but someone who builds
              the systems and runs them alongside you.
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="border-y border-navy/10 bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy">
              A full back office, organized into four pillars.
            </h2>
            <p className="mt-4 text-navy/70">
              From day-to-day bookkeeping to bonding renewals, every service
              is designed to work together as one system.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {serviceCategories.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border border-navy/10 bg-cream p-8 transition-colors hover:border-steel"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-steel-dark group-hover:text-steel">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy">
            An engagement model built for where you are today.
          </h2>
          <p className="mt-4 text-navy/70">
            No one-size-fits-all retainer. We start with a diagnostic, then
            scale the engagement to match your needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {engagementSteps.map((item) => (
            <div key={item.step}>
              <span className="text-sm font-bold text-steel">
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/pricing"
          className="mt-10 inline-block text-sm font-semibold text-steel-dark hover:text-steel"
        >
          See the full engagement &amp; pricing model &rarr;
        </Link>
      </section>

      {/* Founder credibility */}
      <section className="border-t border-navy/10 bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-steel-light">
                Family-Driven, Hands-On
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-cream">
                Named after the two people this business was built for.
              </h2>
              <p className="mt-6 leading-relaxed text-cream/70">
                Triple M &mdash; &ldquo;MMM&rdquo; &mdash; comes from the
                initials of the founder&rsquo;s two daughters. Built on 5+
                years managing back-office operations inside the
                construction industry and 10+ years of business consulting
                experience, Triple M exists to give small trade businesses
                the same infrastructure the big players have.
              </p>
              <p className="mt-4 leading-relaxed text-cream/70">
                For some clients that looks like a fractional COO handling
                strategy and oversight end-to-end. For others it&rsquo;s
                just getting the books finally under control. Either way,
                it&rsquo;s the same hands-on standard.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block text-sm font-semibold text-steel-light hover:text-cream"
              >
                Read the full story &rarr;
              </Link>
            </div>
            <div className="rounded-xl border border-cream/10 bg-navy-light p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-steel-light">
                Not a CPA &mdash; and that&rsquo;s the point
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Triple M isn&rsquo;t a tax accountant. We work as your
                liaison to CPAs and tax professionals, so your books,
                reporting, and compliance are always ready when your
                accountant needs them &mdash; and you&rsquo;re never
                translating between the two.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Ready to see where your back office stands?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy/70">
          Start with a diagnostic assessment &mdash; a clear-eyed look at
          your systems and compliance exposure, before you commit to
          anything ongoing.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-navy px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-navy-light"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
