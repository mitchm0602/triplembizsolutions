import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = readSlugs();

  const posts = slugs.map((slug) => {
    const fileContents = fs.readFileSync(
      path.join(BLOG_DIR, `${slug}.md`),
      "utf8",
    );
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fileContents = fs.readFileSync(
    path.join(BLOG_DIR, `${slug}.md`),
    "utf8",
  );
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkGfm).use(html).process(content);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    contentHtml: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  return readSlugs();
}
