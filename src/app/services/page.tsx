import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping & QBO, HR & compliance, insurance & bonding, and financial strategy services for small construction and trade companies — from single projects to fractional COO-level oversight.",
};

type Service = {
  name: string;
  description: string;
};

type Category = {
  id: string;
  title: string;
  intro: string;
  services: Service[];
};

const categories: Category[] = [
  {
    id: "bookkeeping-qbo",
    title: "Bookkeeping & QBO",
    intro:
      "The foundation. Clean, current books and an organized QuickBooks Online setup that your CPA, bonding agent, and lender can all rely on.",
    services: [
      {
        name: "Bookkeeping & QBO Setup / Organization",
        description:
          "Full setup, cleanup, or ongoing management of your QuickBooks Online file — chart of accounts, job costing, and monthly reconciliation.",
      },
      {
        name: "Credit Card Transaction Reconciliation",
        description:
          "Systems to categorize and reconcile credit card transactions so nothing falls through the cracks before month-end close.",
      },
    ],
  },
  {
    id: "hr-compliance",
    title: "HR & Compliance",
    intro:
      "The paperwork and systems that keep you audit-ready and protect you when a client, bonding agent, or auditor comes asking.",
    services: [
      {
        name: "Document Management",
        description:
          "Organized systems for W-9s, I-9s, and 1099 issuance, so subcontractor and vendor compliance is never a scramble in January.",
      },
      {
        name: "Time Tracking & PTO Systems",
        description:
          "Implementation of time tracking and PTO policies that fit how field and office teams actually work.",
      },
      {
        name: "Safety Program Development",
        description:
          "Safety programs built on OSHA-aligned standards, tailored to your crews and job sites.",
      },
      {
        name: "401(k) Implementation",
        description:
          "Setup and coordination of a 401(k) program as a retention tool for your office and field employees.",
      },
    ],
  },
  {
    id: "insurance-bonding",
    title: "Insurance & Bonding",
    intro:
      "Negotiation and audit support across the coverage and bonding relationships that keep you eligible to bid and win work.",
    services: [
      {
        name: "Health Insurance Negotiation",
        description:
          "Negotiation of health insurance plans and renewals to keep coverage competitive without overpaying.",
      },
      {
        name: "General Liability Negotiation & Auditing",
        description:
          "GL policy negotiation and audit support so your coverage matches your actual risk and payroll exposure.",
      },
      {
        name: "Workers Comp Audits",
        description:
          "Preparation and support through annual Workers Comp audits, minimizing surprise premium adjustments.",
      },
      {
        name: "Surety / Bonding Coordination",
        description:
          "Coordination with your surety agent and preparation of the financial documentation bonding capacity depends on.",
      },
      {
        name: "Contract Development",
        description:
          "Development of client and subcontractor contracts that hold up against bonding, insurance, and legal scrutiny.",
      },
    ],
  },
  {
    id: "financial-strategy",
    title: "Financial Strategy",
    intro:
      "The reporting and forecasting that turns your books into decisions — and keeps your CPA and lenders on the same page.",
    services: [
      {
        name: "Cash Flow Management",
        description:
          "Ongoing visibility into cash position so payroll, materials, and subcontractor payments never collide.",
      },
      {
        name: "Line of Credit Acquisition Support",
        description:
          "Financial reporting and packaging to support line of credit applications and renewals with lenders.",
      },
      {
        name: "CPA Liaison for Tax Reporting",
        description:
          "A single point of contact between your books and your CPA or tax professional — Triple M is not a CPA, but makes sure they get what they need.",
      },
      {
        name: "Project Profitability Projections",
        description:
          "Job-level profitability projections so you know which projects are actually making money before they close out.",
      },
      {
        name: "Procore Billing Support",
        description:
          "Billing support within Procore to keep pay applications, change orders, and draws moving on schedule.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-steel-dark">
            Services
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Everything your back office needs, organized into four pillars.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
            Whether you need someone acting as a fractional COO across all
            of it, or just one piece handled well, every service below can
            stand alone as a one-off project, or come together under a
            monthly retainer. See our{" "}
            <Link
              href="/pricing"
              className="font-semibold text-steel-dark hover:text-steel"
            >
              engagement &amp; pricing model
            </Link>{" "}
            for how it&rsquo;s packaged.
          </p>
        </div>
      </section>

      {categories.map((category, i) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-20 border-b border-navy/10 ${
            i % 2 === 1 ? "bg-mist" : "bg-cream"
          }`}
        >
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold tracking-tight text-navy">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {category.intro}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="rounded-xl border border-navy/10 bg-cream p-6"
                  >
                    <h3 className="font-semibold text-navy">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/70">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Not sure which services you need?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy/70">
          That&rsquo;s exactly what the diagnostic assessment is for. We
          evaluate your current systems and recommend where to start.
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
