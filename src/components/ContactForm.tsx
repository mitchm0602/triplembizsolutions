"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Bookkeeping & QBO",
  "HR & Compliance",
  "Insurance & Bonding",
  "Financial Strategy",
  "Not sure — help me figure it out",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-steel/30 bg-mist p-10 text-center">
        <h2 className="text-2xl font-bold text-navy">Thank you.</h2>
        <p className="mt-3 text-navy/70">
          Your request has been received. We&rsquo;ll be in touch shortly to
          schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-navy"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-navy/20 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-navy"
          >
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 w-full rounded-md border border-navy/20 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel"
            placeholder="Doe Construction, LLC"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-navy"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-navy/20 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel"
            placeholder="jane@doeconstruction.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-navy"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-md border border-navy/20 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-navy"
        >
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full rounded-md border border-navy/20 bg-cream px-4 py-2.5 text-navy focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel"
          defaultValue=""
        >
          <option value="" disabled>
            Select an area
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-navy"
        >
          Tell us about your business
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-md border border-navy/20 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel"
          placeholder="A little about your company and where you're feeling the most pain right now."
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-navy px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-navy-light sm:w-fit"
      >
        Request a Consultation
      </button>
    </form>
  );
}
