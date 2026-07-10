import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation with Triple M Business Solutions to evaluate your back-office systems and compliance exposure.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-navy/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-steel-dark">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy">
              Let&rsquo;s look at your back office.
            </h1>
            <p className="mt-6 leading-relaxed text-navy/70">
              Every engagement starts with a conversation. Tell us a bit
              about your business and where things feel the most out of
              control &mdash; we&rsquo;ll follow up to schedule your
              diagnostic assessment.
            </p>
            <div className="mt-10 space-y-4 text-sm text-navy/70">
              <p>
                <span className="block font-semibold text-navy">
                  Who this is for
                </span>
                Small construction and trade companies without the
                resources for a full internal back office.
              </p>
              <p>
                <span className="block font-semibold text-navy">
                  What happens next
                </span>
                We&rsquo;ll reach out to schedule your flat-fee diagnostic
                assessment &mdash; no ongoing commitment required.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
