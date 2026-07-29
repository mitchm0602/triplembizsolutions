import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on bookkeeping, QuickBooks Online, Workers Comp audits, and back-office operations for construction and trade businesses.",
};

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-navy/10 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-steel-dark">
            Blog
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Guides for running a tighter back office.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
            Practical, no-fluff writing on bookkeeping, QuickBooks Online, HR
            and compliance, and financial strategy for construction and trade
            businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        {posts.length === 0 ? (
          <p className="text-navy/70">No posts yet — check back soon.</p>
        ) : (
          <div className="divide-y divide-navy/10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-8 first:pt-0"
              >
                <p className="text-sm text-navy/50">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy group-hover:text-steel-dark">
                  {post.title}
                </h2>
                <p className="mt-3 leading-relaxed text-navy/70">
                  {post.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-steel-dark group-hover:text-steel">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
