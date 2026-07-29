"use client";

import { useState, type FormEvent } from "react";

export default function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-steel/30 bg-mist p-8 text-center">
        <h2 className="text-xl font-bold text-navy">Portal launching soon</h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70">
          The client portal isn&rsquo;t open yet. Existing clients will be
          notified as soon as it&rsquo;s live. Need something in the
          meantime? Reach out and we&rsquo;ll help directly.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block rounded-md bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
        >
          Contact Us
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-navy/20 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel"
          placeholder="you@yourcompany.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-navy">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-2 w-full rounded-md border border-navy/20 bg-cream px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-navy px-7 py-3 text-base font-semibold text-cream transition-colors hover:bg-navy-light"
      >
        Log In
      </button>
    </form>
  );
}
