import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Client Portal Login",
  description: "Log in to the Triple M Business Solutions client portal.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginPage() {
  return (
    <section className="bg-mist px-6 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-navy/10 bg-cream p-8 shadow-sm sm:p-10">
        <div className="flex flex-col items-center text-center">
          <Link href="/">
            <Image
              src="/images/logo-transparent.png"
              alt="Triple M Business Solutions"
              width={180}
              height={120}
              className="h-16 w-auto"
            />
          </Link>
          <span className="mt-4 inline-block rounded-full bg-steel/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-steel-dark">
            Coming Soon
          </span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-navy">
            Client Portal
          </h1>
          <p className="mt-2 text-sm text-navy/70">
            Secure access for current Triple M clients.
          </p>
        </div>

        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
