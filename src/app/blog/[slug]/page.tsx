import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

const SITE_URL = "https://triplem-consulting.com";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${SITE_URL}/blog/${slug}`,
        type: "article",
        publishedTime: post.date,
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Triple M Business Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Triple M Business Solutions",
      logo: `${SITE_URL}/images/logo-transparent.png`,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
        <Link
          href="/blog"
          className="text-sm font-semibold text-steel-dark hover:text-steel"
        >
          &larr; Back to Blog
        </Link>
        <p className="mt-6 text-sm text-navy/50">{formatDate(post.date)}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {post.title}
        </h1>
        <div
          className="prose prose-neutral mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-navy prose-a:text-steel-dark prose-a:no-underline hover:prose-a:text-steel hover:prose-a:underline prose-strong:text-navy"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <section className="border-t border-navy/10 bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy">
            Ready to see where your back office stands?
          </h2>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-navy px-8 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-navy-light"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
