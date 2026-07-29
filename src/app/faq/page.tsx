import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Triple M Business Solutions — who we work with, pricing, fractional COO services, and what a diagnostic assessment involves.",
};

const faqs = [
  {
    question: "Do you work with sole proprietors, or only larger companies?",
    answer:
      "Both. Triple M works with businesses of every size — from sole proprietors just getting their books organized to established general contractors running a full back office.",
  },
  {
    question: "What's a fractional COO, and do I need one?",
    answer:
      "A fractional COO handles operations and strategy without a full-time executive salary. Not every business needs that level of involvement — many just need clean books and organized HR systems. Triple M scales to whichever level fits, without pushing you toward more than you need.",
  },
  {
    question: "Are you a CPA or tax accountant?",
    answer:
      "No. Triple M is not a CPA or tax accountant. Instead, it works as a liaison to your CPA or tax professional, making sure your books and reporting are always ready when they need them.",
  },
  {
    question: "How much does it cost to get started?",
    answer:
      "Every engagement starts with a free consultation, followed by a flat-fee diagnostic assessment that evaluates your current systems before you commit to anything ongoing. Pricing from there depends on what you need — a one-off project, hourly support, or a monthly retainer.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Triple M specializes in construction and trade businesses — general contractors, HVAC, electrical, plumbing, roofing, concrete, and more.",
  },
  {
    question: "What if I already have a bookkeeper or QuickBooks set up?",
    answer:
      "That's fine — Triple M can clean up and organize an existing QuickBooks Online file, or build one from scratch if you're starting fresh.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-steel-dark">
            FAQ
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
            Answers to what business owners ask most before booking a
            consultation. Don&rsquo;t see yours?{" "}
            <Link
              href="/contact"
              className="font-semibold text-steel-dark hover:text-steel"
            >
              Ask us directly
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="divide-y divide-navy/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h2 className="font-semibold text-navy">{faq.question}</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Still have questions?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy/70">
          Book a free consultation and we&rsquo;ll walk through your specific
          situation.
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
